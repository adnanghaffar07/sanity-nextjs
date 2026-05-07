import { NextResponse } from 'next/server';
import { serverClient } from '@/sanity/lib/sanity/serverClient';

export async function GET() {
  try {
    const sevenDaysAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString();

    const visitors = await serverClient.fetch(
      `*[_type == "visitor" && timestamp >= $sevenDaysAgo] | order(timestamp desc)[0...200]{
        _id,
        ip,
        location{
          city,
          region,
          country
        },
        latitude,
        longitude,
        timestamp,
        pageUrl,
        referrer,
        userAgent
      }`,
      { sevenDaysAgo }
    );

    return NextResponse.json({ success: true, visitors });
  } catch (error) {
    console.error('Error fetching visitor records:', error);
    return NextResponse.json(
      { error: 'Failed to fetch visitor records' },
      { status: 500 }
    );
  }
}
