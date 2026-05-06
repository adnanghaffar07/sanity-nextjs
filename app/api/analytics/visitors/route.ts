import { NextRequest, NextResponse } from 'next/server';

interface DateRange {
  start: string; // YYYYMMDD format
  end: string;   // YYYYMMDD format
}

function getDateRange(filter: string): DateRange {
  const now = new Date();
  let start = new Date(now);

  if (filter === 'today') {
    start.setHours(0, 0, 0, 0);
  } else if (filter === 'last7days') {
    start.setDate(now.getDate() - 7);
    start.setHours(0, 0, 0, 0);
  } else if (filter === 'lastmonth') {
    start.setDate(now.getDate() - 30);
    start.setHours(0, 0, 0, 0);
  }

  const formatDate = (date: Date) => {
    return date.toISOString().split('T')[0].replace(/-/g, '');
  };

  return {
    start: formatDate(start),
    end: formatDate(now),
  };
}

async function callAmplitudeAPI(endpoint: string, params: Record<string, any>) {
  const API_KEY = process.env.AMPLITUDE_API_KEY;
  const SECRET_KEY = process.env.AMPLITUDE_SECRET_KEY;

  if (!API_KEY || !SECRET_KEY) {
    throw new Error('Amplitude API keys not configured');
  }

  const credentials = Buffer.from(`${API_KEY}:${SECRET_KEY}`).toString('base64');
  const queryParams = new URLSearchParams();

  for (const [key, value] of Object.entries(params)) {
    queryParams.append(key, typeof value === 'string' ? value : JSON.stringify(value));
  }

  const url = `https://amplitude.com/api/2/${endpoint}?${queryParams}`;

  const response = await fetch(url, {
    headers: {
      'Authorization': `Basic ${credentials}`,
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error(`Amplitude API error: ${response.statusText}`);
  }

  return await response.json();
}

export async function GET(req: NextRequest) {
  try {
    const searchParams = req.nextUrl.searchParams;
    const dataType = searchParams.get('dataType') || 'country'; // country, city, ip
    const filter = searchParams.get('filter') || 'lastmonth'; // today, last7days, lastmonth

    const { start, end } = getDateRange(filter);

    let groupBy = 'country';
    if (dataType === 'city') groupBy = 'city';
    if (dataType === 'ip') groupBy = 'ip_address';

    const params = {
      e: JSON.stringify({ event_type: '[Amplitude] Page Viewed' }),
      start,
      end,
      m: dataType === 'ip' ? 'totals' : 'uniques',
      i: '1',
      g: groupBy,
    };

    const data = await callAmplitudeAPI('events/segmentation', params);

    return NextResponse.json({
      success: true,
      dataType,
      filter,
      dateRange: { start, end },
      data,
    });
  } catch (error) {
    console.error('Error fetching Amplitude data:', error);
    return NextResponse.json(
      { error: 'Failed to fetch visitor data' },
      { status: 500 }
    );
  }
}