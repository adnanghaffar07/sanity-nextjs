import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';
import { serverClient } from '@/sanity/lib/sanity/serverClient';

type TimeFilter = 'today' | 'last7days' | 'lastmonth';

function getStartDateFromFilter(filter: TimeFilter): string {
  const now = new Date();

  if (filter === 'today') {
    const startOfToday = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    return startOfToday.toISOString();
  }

  if (filter === 'lastmonth') {
    return new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000).toISOString();
  }

  return new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000).toISOString();
}

export async function GET(req: NextRequest) {
  try {
    const filterParam = req.nextUrl.searchParams.get('filter');
    const filter: TimeFilter =
      filterParam === 'today' || filterParam === 'lastmonth' || filterParam === 'last7days'
        ? filterParam
        : 'today';
    const startDate = getStartDateFromFilter(filter);

    const visitors = await serverClient.fetch(
      `*[_type == "visitor" && timestamp >= $startDate] | order(timestamp desc)[0...200]{
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
      { startDate }
    );

    return NextResponse.json({ success: true, filter, visitors });
  } catch (error) {
    console.error('Error fetching visitor records:', error);
    return NextResponse.json(
      { error: 'Failed to fetch visitor records' },
      { status: 500 }
    );
  }
}
