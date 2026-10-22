'use client';

import { useState, useEffect, useMemo } from 'react';
import {
  BarChart3,
  Users,
  Calendar,
  MapPin,
  Globe,
  LogOut,
  Eye,
  MousePointer,
  Filter,
  X,
  Clock,
  ChevronDown,
  RefreshCw,
  AlertCircle,
  TrendingUp,
  Activity
} from 'lucide-react';

type TimeFilter = 'today' | 'last7days' | 'lastmonth';

interface VisitorRecord {
  _id: string;
  ip: string;
  location?: {
    city?: string;
    region?: string;
    country?: string;
  };
  latitude?: number;
  longitude?: number;
  timestamp: string;
  pageUrl: string;
  referrer?: string;
}

interface AnalyticsSummary {
  totalVisitors: number;
  uniqueIPs: number;
  topCountries: { country: string; count: number }[];
  allCountries: { country: string; count: number }[];
  avgVisitsPerDay: number;
}

export const dynamic = 'force-dynamic';

export default function VisitorsDashboard() {
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [filter, setFilter] = useState<TimeFilter>('today');
  const [visitorRecords, setVisitorRecords] = useState<VisitorRecord[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [selectedCountries, setSelectedCountries] = useState<Set<string>>(new Set());
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(30);
  const [totalVisitCount, setTotalVisitCount] = useState(0);
  const [showFilters, setShowFilters] = useState(true);
  const [showAllCountries, setShowAllCountries] = useState(false);
  const [lastUpdated, setLastUpdated] = useState<Date>(new Date());

  // Log in: the password is checked by the server (/api/admin/visitors), never in the browser.
  const handleLogin = async () => {
    const ok = await fetchVisitors('today', true, password);
    if (ok) {
      setIsAuthenticated(true);
    } else {
      setError('Incorrect password. Please try again.');
      setPassword('');
    }
  };

  // Fetch visitor data. Returns false when the password is rejected.
  const fetchVisitors = async (timeFilter: TimeFilter, showLoading = true, pass = password): Promise<boolean> => {
    if (showLoading) setLoading(true);
    setError('');

    try {
      const res = await fetch(`/api/admin/visitors?filter=${timeFilter}&limit=1000`, {
        headers: { 'x-dashboard-password': pass },
        cache: 'no-store',
      });
      if (res.status === 401) {
        if (showLoading) setLoading(false);
        return false;
      }
      const data = await res.json();

      if (!res.ok) {
        throw new Error(data?.error || 'Failed to fetch data');
      }

      const visitors = Array.isArray(data?.visitors) ? data.visitors : [];
      const totalCount = typeof data?.pagination?.totalCount === 'number' ? data.pagination.totalCount : visitors.length;
      setVisitorRecords(visitors);
      setTotalVisitCount(totalCount);
      setFilter(timeFilter);
      setLastUpdated(new Date());
      setCurrentPage(1);
      setSelectedCountries(new Set()); // Reset country filter when changing time period
      setSearchTerm(''); // Reset search when changing time period

    } catch (err) {
      console.error(err);
      setError(err instanceof Error ? err.message : 'Network error while fetching visitors');
      setVisitorRecords([]);
    }

    if (showLoading) setLoading(false);
    return true;
  };

  const changeFilter = (f: TimeFilter) => {
    setFilter(f);
    fetchVisitors(f);
  };

  const refreshData = () => {
    fetchVisitors(filter, false);
  };

  // Get unique countries from visitor records with counts
  const getCountryStats = useMemo(() => {
    const countryMap = new Map<string, number>();
    visitorRecords.forEach((v) => {
      if (v.location?.country) {
        const country = v.location.country;
        countryMap.set(country, (countryMap.get(country) || 0) + 1);
      }
    });

    const countries = Array.from(countryMap.entries())
      .map(([country, count]) => ({ country, count }))
      .sort((a, b) => b.count - a.count);

    return countries;
  }, [visitorRecords]);

  // Toggle country selection
  const toggleCountry = (country: string) => {
    const newSelected = new Set(selectedCountries);
    if (newSelected.has(country)) {
      newSelected.delete(country);
    } else {
      newSelected.add(country);
    }
    setSelectedCountries(newSelected);
    setCurrentPage(1);
  };

  // Filter and search visitor records
  const filteredVisitors = useMemo((): VisitorRecord[] => {
    let filtered = visitorRecords;

    // Apply country filter
    if (selectedCountries.size > 0) {
      filtered = filtered.filter((v) =>
        v.location?.country && selectedCountries.has(v.location.country)
      );
    }

    // Apply search filter
    if (searchTerm.trim()) {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter((v) =>
        v.ip?.toLowerCase().includes(term) ||
        v.location?.city?.toLowerCase().includes(term) ||
        v.location?.country?.toLowerCase().includes(term) ||
        v.pageUrl?.toLowerCase().includes(term) ||
        v.referrer?.toLowerCase().includes(term)
      );
    }

    return filtered;
  }, [visitorRecords, selectedCountries, searchTerm]);

  // Calculate analytics summary
  const analyticsSummary = useMemo((): AnalyticsSummary => {
    const filtered = filteredVisitors;
    const uniqueIPs = new Set(filtered.map(v => v.ip)).size;

    const countryCounts = new Map<string, number>();
    filtered.forEach(v => {
      if (v.location?.country) {
        countryCounts.set(v.location.country, (countryCounts.get(v.location.country) || 0) + 1);
      }
    });

    const allCountries = Array.from(countryCounts.entries())
      .map(([country, count]) => ({ country, count }))
      .sort((a, b) => b.count - a.count);

    const topCountries = allCountries.slice(0, 5);

    // Calculate average visits per day
    const daysInPeriod = filter === 'today' ? 1 : filter === 'last7days' ? 7 : 30;
    const avgVisitsPerDay = daysInPeriod > 0 ? filtered.length / daysInPeriod : 0;

    return {
      totalVisitors: filtered.length,
      uniqueIPs,
      topCountries,
      allCountries,
      avgVisitsPerDay
    };
  }, [filteredVisitors, filter]);

  // Pagination
  const totalPages = Math.ceil(filteredVisitors.length / itemsPerPage);
  const paginatedVisitors = filteredVisitors.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Helper functions
  const formatLocation = (loc?: VisitorRecord['location']) => {
    if (!loc) return 'Unknown';
    const parts = [loc.city, loc.region, loc.country].filter(Boolean);
    return parts.length ? parts.join(', ') : 'Unknown';
  };

  const formatFilter = (f: TimeFilter) => {
    const maps = { today: 'Today', last7days: 'Last 7 Days', lastmonth: 'Last 30 Days' };
    return maps[f];
  };

  const formatUsEasternTime = (timestamp: string) => {
    return new Intl.DateTimeFormat('en-US', {
      timeZone: 'America/New_York',
      year: 'numeric',
      month: 'short',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true,
    }).format(new Date(timestamp));
  };

  const formatRelativeTime = (date: Date) => {
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.floor(diffMs / 60000);

    if (diffMins < 1) return 'Just now';
    if (diffMins < 60) return `${diffMins} minute${diffMins === 1 ? '' : 's'} ago`;
    const diffHours = Math.floor(diffMins / 60);
    if (diffHours < 24) return `${diffHours} hour${diffHours === 1 ? '' : 's'} ago`;
    return date.toLocaleTimeString();
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleLogin();
  };

  // Login Screen
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 px-4">
        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-xl opacity-20 animate-pulse"></div>

          <div className="relative bg-white/10 backdrop-blur-xl p-8 rounded-2xl shadow-2xl w-full max-w-md border border-white/20">
            <div className="text-center mb-8">
              <div className="inline-flex p-3 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl mb-4 shadow-lg">
                <BarChart3 className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-3xl font-bold text-white mb-2">
                Analytics Dashboard
              </h1>
              <p className="text-slate-300 text-sm">
                Secure access to visitor insights
              </p>
            </div>

            {error && (
              <div className="mb-4 p-3 bg-red-500/10 border border-red-500/20 rounded-lg flex items-center gap-2 text-red-300 text-sm">
                <AlertCircle className="w-4 h-4" />
                {error}
              </div>
            )}

            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Enter access password"
              className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 mb-4 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              autoFocus
            />

            <button
              onClick={handleLogin}
              className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all font-medium shadow-lg shadow-blue-500/20"
            >
              Access Dashboard
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Main Dashboard UI
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-white/80 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 md:px-6">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl shadow-md">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-slate-900">Visitor Analytics</h1>
                <p className="text-sm text-slate-500">Real-time traffic insights & behavior tracking</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="hidden md:flex items-center gap-2 px-3 py-1.5 bg-slate-100 rounded-lg">
                <RefreshCw className={`w-4 h-4 text-slate-500 ${loading ? 'animate-spin' : ''}`} />
                <span className="text-xs text-slate-600">
                  Updated {formatRelativeTime(lastUpdated)}
                </span>
              </div>

              <button
                onClick={refreshData}
                disabled={loading}
                className="p-2 hover:bg-slate-100 rounded-lg transition-colors disabled:opacity-50"
              >
                <RefreshCw className={`w-5 h-5 text-slate-600 ${loading ? 'animate-spin' : ''}`} />
              </button>

              <button
                onClick={() => setIsAuthenticated(false)}
                className="flex items-center gap-2 px-4 py-2 bg-red-50 hover:bg-red-100 text-red-700 rounded-lg transition-colors font-medium"
              >
                <LogOut className="w-4 h-4" />
                <span className="hidden sm:inline">Logout</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6 md:px-6">

        {/* Analytics Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-5 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-3">
              <Calendar className="w-5 h-5 text-blue-600" />
              <span className="text-xs font-medium text-slate-500 bg-slate-100 px-2 py-1 rounded">
                {formatFilter(filter)}
              </span>
            </div>
            <p className="text-2xl font-bold text-slate-900">{totalVisitCount.toLocaleString()}</p>
            <p className="text-sm text-slate-600">Total Visits</p>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-5 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-3">
              <Users className="w-5 h-5 text-purple-600" />
            </div>
            <p className="text-2xl font-bold text-slate-900">{analyticsSummary.uniqueIPs.toLocaleString()}</p>
            <p className="text-sm text-slate-600">Unique Visitors</p>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-5 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-3">
              <TrendingUp className="w-5 h-5 text-emerald-600" />
            </div>
            <p className="text-2xl font-bold text-slate-900">{analyticsSummary.avgVisitsPerDay.toFixed(1)}</p>
            <p className="text-sm text-slate-600">Avg Visits/Day</p>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-5 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-3">
              <Globe className="w-5 h-5 text-orange-600" />
            </div>
            <p className="text-2xl font-bold text-slate-900">{analyticsSummary.allCountries.length}</p>
            <p className="text-sm text-slate-600">Countries Reached</p>
          </div>
        </div>

        {/* Top Countries Section - Show ALL countries */}
        {analyticsSummary.allCountries.length > 0 && (
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-5 mb-6">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-semibold text-slate-700 flex items-center gap-2">
                <Globe className="w-4 h-4" />
                Visitor Distribution by Country
              </h3>
              <span className="text-xs text-slate-500">{analyticsSummary.allCountries.length} countries total</span>
            </div>

            {/* Show top 5 or all based on toggle */}
            <div className="space-y-2">
              {(showAllCountries ? analyticsSummary.allCountries : analyticsSummary.topCountries).map(({ country, count }) => {
                const percentage = (count / analyticsSummary.totalVisitors) * 100;
                return (
                  <div key={country} className="flex items-center gap-3">
                    <div className="w-32 text-sm text-slate-700 font-medium">{country}</div>
                    <div className="flex-1">
                      <div className="relative">
                        <div className="w-full bg-slate-100 rounded-full h-6 overflow-hidden">
                          <div
                            className="bg-gradient-to-r from-blue-500 to-blue-600 h-full rounded-full flex items-center justify-end pr-2 text-xs text-white font-medium"
                            style={{ width: `${percentage}%` }}
                          >
                            {percentage >= 8 && `${percentage.toFixed(1)}%`}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-16 text-right">
                      <span className="text-sm font-semibold text-slate-900">{count}</span>
                      <span className="text-xs text-slate-500 ml-1">visits</span>
                    </div>
                  </div>
                );
              })}
            </div>

            {analyticsSummary.allCountries.length > 5 && (
              <button
                onClick={() => setShowAllCountries(!showAllCountries)}
                className="mt-4 text-sm text-blue-600 hover:text-blue-700 font-medium flex items-center gap-1"
              >
                {showAllCountries ? 'Show less' : `Show all ${analyticsSummary.allCountries.length} countries`}
                <ChevronDown className={`w-4 h-4 transition-transform ${showAllCountries ? 'rotate-180' : ''}`} />
              </button>
            )}
          </div>
        )}

        {/* Filters Section */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 mb-6 overflow-hidden">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="w-full px-5 py-3 flex items-center justify-between hover:bg-slate-50 transition-colors"
          >
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-slate-500" />
              <span className="font-medium text-slate-700">Filters & Controls</span>
              {selectedCountries.size > 0 && (
                <span className="bg-blue-100 text-blue-700 text-xs px-2 py-0.5 rounded-full">
                  {selectedCountries.size} active
                </span>
              )}
              {searchTerm && (
                <span className="bg-purple-100 text-purple-700 text-xs px-2 py-0.5 rounded-full">
                  Searching
                </span>
              )}
            </div>
            <ChevronDown className={`w-4 h-4 text-slate-500 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
          </button>

          {showFilters && (
            <div className="border-t border-slate-200 p-5 space-y-4">
              {/* Time Filter */}
              <div>
                <label className="text-sm font-medium text-slate-700 block mb-2">Time Period</label>
                <div className="flex flex-wrap gap-2">
                  {(['today', 'last7days', 'lastmonth'] as TimeFilter[]).map((f) => (
                    <button
                      key={f}
                      onClick={() => changeFilter(f)}
                      disabled={loading}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                        filter === f
                          ? 'bg-blue-600 text-white shadow-md shadow-blue-200'
                          : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                      }`}
                    >
                      {formatFilter(f)}
                    </button>
                  ))}
                </div>
                {totalVisitCount > 0 && (
                  <p className="text-xs text-slate-500 mt-2">
                    Showing {filteredVisitors.length.toLocaleString()} of {totalVisitCount.toLocaleString()} records for this period
                  </p>
                )}
              </div>

              {/* Country Filter */}
              {getCountryStats.length > 0 && (
                <div>
                  <label className="text-sm font-medium text-slate-700 block mb-2">Filter by Country</label>
                  <div className="max-h-48 overflow-y-auto border border-slate-200 rounded-lg p-3">
                    <div className="flex flex-wrap gap-3">
                      {getCountryStats.map(({ country }) => (
                        <label key={country} className="flex items-center gap-2 cursor-pointer group">
                          <input
                            type="checkbox"
                            checked={selectedCountries.has(country)}
                            onChange={() => toggleCountry(country)}
                            className="w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-offset-0 cursor-pointer"
                          />
                          <span className="text-sm text-slate-700 group-hover:text-blue-600 transition-colors">
                            {country}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>
                  {selectedCountries.size > 0 && (
                    <button
                      onClick={() => setSelectedCountries(new Set())}
                      className="mt-2 text-xs text-red-600 hover:text-red-700 font-medium flex items-center gap-1"
                    >
                      <X className="w-3 h-3" />
                      Clear country filters
                    </button>
                  )}
                </div>
              )}

              {/* Search */}
              <div>
                <label className="text-sm font-medium text-slate-700 block mb-2">Search Records</label>
                <div className="relative">
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => {
                      setSearchTerm(e.target.value);
                      setCurrentPage(1);
                    }}
                    placeholder="Search by IP, location, page URL, or referrer..."
                    className="w-full border border-slate-300 rounded-lg px-4 py-2 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <div className="absolute left-3 top-1/2 -translate-y-1/2">
                    <MousePointer className="w-4 h-4 text-slate-400" />
                  </div>
                  {searchTerm && (
                    <button
                      onClick={() => setSearchTerm('')}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
        {/* Status Messages */}
        {loading && (
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4 flex items-center gap-3">
            <RefreshCw className="w-5 h-5 text-blue-600 animate-spin" />
            <span className="text-blue-700">Loading visitor data...</span>
          </div>
        )}

        {error && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4 flex items-center gap-3">
            <AlertCircle className="w-5 h-5 text-red-600" />
            <span className="text-red-700">{error}</span>
          </div>
        )}

        {/* Visitors Table */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full table-auto min-w-[960px]">
              <thead className="bg-gradient-to-r from-slate-50 to-slate-100 border-b border-slate-200">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">IP Address</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider min-w-[160px]">Location</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider min-w-[120px]">Coordinates</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider min-w-[140px]">Time (EST)</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider min-w-[240px]">Page URL</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider min-w-[220px]">Referrer</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {paginatedVisitors.map((v) => (
                  <tr key={v._id} className="hover:bg-slate-50 transition-colors">
                    <td className="px-4 py-3 text-sm font-mono text-slate-900">{v.ip}</td>
                    <td className="px-4 py-3 text-sm text-slate-700 min-w-[160px]">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-slate-400" />
                        {formatLocation(v.location)}
                      </div>
                    </td>
                    <td className="px-4 py-3 text-sm font-mono text-slate-500 min-w-[120px]">
                      {v.latitude && v.longitude ? `${v.latitude.toFixed(2)}, ${v.longitude.toFixed(2)}` : '-'}
                    </td>
                    <td className="px-4 py-3 text-sm text-slate-700 whitespace-nowrap min-w-[140px]">
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3 text-slate-400" />
                        {formatUsEasternTime(v.timestamp)}
                      </div>
                    </td>
                    <td className="px-4 py-3 text-sm break-words min-w-[240px]">
                      <a
                        href={v.pageUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-blue-600 hover:text-blue-800 hover:underline break-words"
                      >
                        {v.pageUrl.length > 60 ? `${v.pageUrl.substring(0, 60)}...` : v.pageUrl}
                      </a>
                    </td>
                    <td className="px-4 py-3 text-sm text-slate-600 max-w-[220px] break-words">
                      {v.referrer ? (
                        <a href={v.referrer} target="_blank" rel="noreferrer" className="hover:underline break-words">
                          {v.referrer.length > 50 ? `${v.referrer.substring(0, 50)}...` : v.referrer}
                        </a>
                      ) : (
                        <span className="text-slate-400">Direct</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Empty State */}
          {!loading && filteredVisitors.length === 0 && (
            <div className="text-center py-12">
              <div className="inline-flex p-4 bg-slate-100 rounded-full mb-4">
                <Activity className="w-8 h-8 text-slate-400" />
              </div>
              <p className="text-slate-500 font-medium">No visitor data found</p>
              <p className="text-sm text-slate-400 mt-1">
                {searchTerm || selectedCountries.size > 0
                  ? 'Try adjusting your filters or search criteria'
                  : `No visitors recorded for ${formatFilter(filter)}`}
              </p>
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="border-t border-slate-200 px-4 py-3 flex items-center justify-between bg-slate-50 flex-wrap gap-2">
              <div className="text-sm text-slate-600">
                Showing {(currentPage - 1) * itemsPerPage + 1} to {Math.min(currentPage * itemsPerPage, filteredVisitors.length)} of {filteredVisitors.length} results
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                  disabled={currentPage === 1}
                  className="px-3 py-1 text-sm border border-slate-300 rounded-lg hover:bg-white disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  Previous
                </button>
                <div className="flex gap-1">
                  {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                    let pageNum;
                    if (totalPages <= 5) {
                      pageNum = i + 1;
                    } else if (currentPage <= 3) {
                      pageNum = i + 1;
                    } else if (currentPage >= totalPages - 2) {
                      pageNum = totalPages - 4 + i;
                    } else {
                      pageNum = currentPage - 2 + i;
                    }

                    return (
                      <button
                        key={pageNum}
                        onClick={() => setCurrentPage(pageNum)}
                        className={`px-3 py-1 text-sm rounded-lg transition-colors ${
                          currentPage === pageNum
                            ? 'bg-blue-600 text-white'
                            : 'border border-slate-300 hover:bg-white'
                        }`}
                      >
                        {pageNum}
                      </button>
                    );
                  })}
                </div>
                <button
                  onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                  disabled={currentPage === totalPages}
                  className="px-3 py-1 text-sm border border-slate-300 rounded-lg hover:bg-white disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  Next
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}