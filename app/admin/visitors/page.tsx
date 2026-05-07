'use client';

import { useState } from 'react';

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

export const dynamic = 'force-dynamic';

export default function VisitorsDashboard() {
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const [filter, setFilter] = useState<TimeFilter>('today');
  const [visitorRecords, setVisitorRecords] = useState<VisitorRecord[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const correctPassword =
    process.env.NEXT_PUBLIC_VISITOR_DASHBOARD_PASSWORD || 'admin123';

  // ---------------- LOGIN ----------------
  const handleLogin = () => {
    if (password === correctPassword) {
      setIsAuthenticated(true);
      fetchVisitors('today');
    } else {
      alert('Incorrect password');
      setPassword('');
    }
  };

  // ---------------- VISITOR DATA ----------------
  const fetchVisitors = async (timeFilter: TimeFilter) => {
    setLoading(true);
    setError('');

    try {
      const res = await fetch(`/api/admin/visitors?filter=${timeFilter}`);
      const data = await res.json();

      if (!res.ok) {
        setError(data?.error || 'Failed to fetch data');
        setVisitorRecords([]);
      } else {
        setVisitorRecords(Array.isArray(data?.visitors) ? data.visitors : []);
        setFilter(timeFilter);
      }
    } catch (err) {
      console.error(err);
      setError('Network error while fetching visitors');
    }

    setLoading(false);
  };

  const changeFilter = (f: TimeFilter) => {
    setFilter(f);
    fetchVisitors(f);
  };

  // ---------------- HELPERS ----------------
  const formatLocation = (loc?: VisitorRecord['location']) => {
    if (!loc) return 'Unknown';
    return [loc.city, loc.region, loc.country].filter(Boolean).join(', ');
  };

  const formatFilter = (f: TimeFilter) => {
    if (f === 'today') return 'Today';
    if (f === 'last7days') return 'Last 7 Days';
    return 'Last Month';
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
      timeZoneName: 'short',
    }).format(new Date(timestamp));
  };

  // ---------------- LOGIN SCREEN ----------------
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950 px-4">
        <div className="bg-white/95 backdrop-blur p-8 rounded-2xl shadow-xl w-full max-w-md border border-blue-100">
          <h1 className="text-2xl font-bold text-center mb-2 text-slate-900">
            Visitors Dashboard
          </h1>
          <p className="text-center text-sm text-slate-500 mb-6">
            Secure admin access
          </p>

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleLogin()}
            placeholder="Enter password"
            className="w-full border border-slate-200 p-3 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
          />

          <button
            onClick={handleLogin}
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            Login
          </button>
        </div>
      </div>
    );
  }

  // ---------------- MAIN UI ----------------
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-blue-50/60 p-4 md:p-6">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="flex flex-col gap-3 sm:flex-row sm:justify-between sm:items-center mb-6">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">Visitors Dashboard</h1>
            <p className="text-slate-500">
              Real-time analytics overview
            </p>
          </div>

          <button
            onClick={() => setIsAuthenticated(false)}
            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors w-full sm:w-auto font-medium"
          >
            Logout
          </button>
        </div>

        {/* CARDS */}
        <div className="grid sm:grid-cols-2 gap-4 mb-6">

          <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-100">
            <p className="text-gray-500 text-sm">Time Range</p>
            <h2 className="text-xl font-bold text-slate-900">{formatFilter(filter)}</h2>
          </div>

          <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-100">
            <p className="text-gray-500 text-sm">Total Visitors</p>
            <h2 className="text-2xl font-bold text-slate-900">
              {visitorRecords.length}
            </h2>
          </div>

        </div>

        {/* FILTERS */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-4 mb-6 flex flex-col sm:flex-row sm:items-center gap-3">
          <label htmlFor="visitor-filter" className="text-sm font-medium text-slate-700">
            Filter visitors by:
          </label>
          <select
            id="visitor-filter"
            value={filter}
            onChange={(e) => changeFilter(e.target.value as TimeFilter)}
            disabled={loading}
            className="w-full sm:w-56 border border-slate-300 rounded-lg px-3 py-2 bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="today">Today</option>
            <option value="last7days">Last 7 Days</option>
            <option value="lastmonth">Last Month</option>
          </select>
          <span className="inline-flex items-center rounded-full bg-blue-100 text-blue-700 px-3 py-1 text-xs font-semibold">
            Selected: {formatFilter(filter)}
          </span>
        </div>

        {/* STATUS */}
        {loading && (
          <div className="bg-white p-4 rounded-lg shadow-sm border border-slate-100 mb-4">
            Loading data...
          </div>
        )}

        {error && (
          <div className="bg-red-100 text-red-700 p-4 rounded-lg mb-4 border border-red-200">
            {error}
          </div>
        )}

        {/* TABLE */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-slate-100 text-left">
              <tr>
                <th className="p-3">IP</th>
                <th className="p-3">Location</th>
                <th className="p-3">Lat/Long</th>
                <th className="p-3">Time (US Eastern)</th>
                <th className="p-3">Page</th>
                <th className="p-3">Referrer</th>
              </tr>
            </thead>

            <tbody>
              {visitorRecords.map((v) => (
                <tr key={v._id} className="border-b border-slate-100 hover:bg-slate-50">
                  <td className="p-3">{v.ip}</td>

                  <td className="p-3">{formatLocation(v.location)}</td>

                  <td className="p-3">
                    {v.latitude}, {v.longitude}
                  </td>

                  <td className="p-3">
                    {formatUsEasternTime(v.timestamp)}
                  </td>

                  <td className="p-3 text-blue-600 break-all">
                    <a href={v.pageUrl} target="_blank" rel="noreferrer">
                      {v.pageUrl}
                    </a>
                  </td>

                  <td className="p-3">
                    {v.referrer || 'Direct'}
                  </td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>

        {/* EMPTY STATE */}
        {!loading && visitorRecords.length === 0 && (
          <div className="text-center text-gray-500 mt-6">
            No visitor data found for this range.
          </div>
        )}

      </div>
    </div>
  );
}