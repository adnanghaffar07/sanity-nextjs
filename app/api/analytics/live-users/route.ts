import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  try {
    const API_KEY = process.env.AMPLITUDE_API_KEY;
    const SECRET_KEY = process.env.AMPLITUDE_SECRET_KEY;

    if (!API_KEY || !SECRET_KEY) {
      throw new Error('Amplitude API keys not configured');
    }

    const credentials = Buffer.from(`${API_KEY}:${SECRET_KEY}`).toString('base64');

    // Get current date/time in YYYYMMDDTHH format for the last hour
    const now = new Date();
    const oneHourAgo = new Date(now.getTime() - 60 * 60 * 1000);

    const formatDateTime = (date: Date) => {
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');
      const hour = String(date.getHours()).padStart(2, '0');
      return `${year}${month}${day}T${hour}`;
    };

    const start = formatDateTime(oneHourAgo);
    const end = formatDateTime(now);

    // Use Amplitude's events API to count active users in the last hour
    const params = new URLSearchParams({
      e: JSON.stringify({ event_type: '[Amplitude] Page Viewed' }),
      start,
      end,
      m: 'uniques', // unique visitors
      i: '1',
    });

    const url = `https://amplitude.com/api/2/events/segmentation?${params}`;

    const response = await fetch(url, {
      headers: {
        'Authorization': `Basic ${credentials}`,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`Amplitude API error: ${response.statusText}`);
    }

    const data = await response.json();

    // Sum all unique visitors from the last hour
    const liveUsers = data.data?.series?.[0]?.reduce((sum: number, val: number) => sum + val, 0) || 0;

    return NextResponse.json({
      success: true,
      liveUsers,
      timeRange: { start, end },
      lastUpdated: new Date().toISOString(),
    });
  } catch (error) {
    console.error('Error fetching live users:', error);
    return NextResponse.json(
      { error: 'Failed to fetch live users', liveUsers: 0 },
      { status: 500 }
    );
  }
}