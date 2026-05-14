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

  if (filter === 'last7days') {
    return new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000).toISOString();
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
    
    const page = parseInt(req.nextUrl.searchParams.get('page') || '1');
    const limit = parseInt(req.nextUrl.searchParams.get('limit') || '50');
    const start = (page - 1) * limit;
    
    const startDate = getStartDateFromFilter(filter);

    // Get total count
    const totalCount = await serverClient.fetch(
      `count(*[_type == "visitor" && timestamp >= $startDate])`,
      { startDate }
    );

    // Fetch paginated visitors
    const visitors = await serverClient.fetch(
      `*[_type == "visitor" && timestamp >= $startDate] | order(timestamp desc)[$start...$end]{
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
      { startDate, start, end: start + limit }
    );

    console.log(`Filter: ${filter}, Page: ${page}, Showing ${visitors.length} of ${totalCount} visitors`);

    return NextResponse.json({ 
      success: true, 
      filter, 
      visitors,
      pagination: {
        currentPage: page,
        totalPages: Math.ceil(totalCount / limit),
        totalCount,
        limit
      },
      dateRange: {
        start: startDate,
        end: new Date().toISOString()
      }
    });
  } catch (error) {
    console.error('Error fetching visitor records:', error);
    return NextResponse.json(
      { error: 'Failed to fetch visitor records' },
      { status: 500 }
    );
  }
}