import { serverClient } from '@/sanity/lib/sanity/serverClient';
import { NextRequest, NextResponse } from 'next/server';
import { clientIp, rateLimit, sameSiteRequest } from '@/lib/security/request';

function isLocalAddress(hostname: string): boolean {
  const host = hostname.toLowerCase();
  return host === 'localhost' || host === '127.0.0.1' || host === '::1' || host.endsWith('.local');
}

function isLocalSource(value: string): boolean {
  if (!value || value === 'Unknown' || value === 'Direct') return false;

  try {
    const parsed = new URL(value);
    return isLocalAddress(parsed.hostname);
  } catch {
    return value.toLowerCase().includes('localhost') || value.includes('127.0.0.1');
  }
}

export async function POST(req: NextRequest) {
  // Only our own pages may record visits, and not faster than a real visitor browses.
  if (!sameSiteRequest(req)) return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
  const visitorIp = clientIp(req);
  if (visitorIp && !rateLimit(`visit:${visitorIp}`, 30, 60 * 1000)) {
    return NextResponse.json({ success: true, skipped: 'rate-limited' });
  }
  try {
    const body = await req.json();
    const rawPageUrl = typeof body?.pageUrl === 'string' ? body.pageUrl : '';
    const rawUserAgent = typeof body?.userAgent === 'string' ? body.userAgent : '';
    const rawReferrer = typeof body?.referrer === 'string' ? body.referrer : '';
    const pageUrl = rawPageUrl || req.headers.get('referer') || 'Unknown';
    const userAgent = rawUserAgent || req.headers.get('user-agent') || 'Unknown';
    const referrer = rawReferrer || 'Direct';

    if (isLocalSource(pageUrl) || isLocalSource(referrer)) {
      return NextResponse.json({ success: true, skipped: 'localhost-traffic' });
    }

    // Get IP from headers
    const forwarded = req.headers.get('x-forwarded-for');
    const ip = forwarded ? forwarded.split(',')[0].trim() : req.ip || 'Unknown';

    // Get location data from IP using a free API
    let locationData = { city: 'Unknown', region: 'Unknown', country: 'Unknown', lat: 0, lon: 0 };
    if (ip !== 'Unknown') {
      try {
        const response = await fetch(`http://ip-api.com/json/${ip}`);
        if (response.ok) {
          const data = await response.json();
          locationData = {
            city: data.city || 'Unknown',
            region: data.regionName || 'Unknown',
            country: data.country || 'Unknown',
            lat: data.lat || 0,
            lon: data.lon || 0,
          };
        }
      } catch (error) {
        console.error('Error fetching location:', error);
      }
    }

    const visitor = {
      _type: 'visitor',
      ip,
      location: {
        city: locationData.city,
        region: locationData.region,
        country: locationData.country,
      },
      latitude: locationData.lat,
      longitude: locationData.lon,
      timestamp: new Date().toISOString(),
      pageUrl,
      userAgent,
      referrer,
    };

    await serverClient.create(visitor);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error saving visitor:', error);
    return NextResponse.json({ error: 'Failed to save visitor data' }, { status: 500 });
  }
}