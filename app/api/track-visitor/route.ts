import { serverClient } from '@/sanity/lib/sanity/serverClient';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { pageUrl, userAgent, referrer } = body;

    // Get IP from headers
    const forwarded = req.headers.get('x-forwarded-for');
    const ip = forwarded ? forwarded.split(',')[0] : req.ip || 'Unknown';

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