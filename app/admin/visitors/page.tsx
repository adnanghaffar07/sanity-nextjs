'use client';

import { useEffect, useState } from 'react';

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

  const [liveUsers, setLiveUsers] = useState(0);
  const [liveLoading, setLiveLoading] = useState(false);

  const correctPassword =
    process.env.NEXT_PUBLIC_VISITOR_DASHBOARD_PASSWORD || 'admin123';

  // ---------------- LOGIN ----------------
  const handleLogin = () => {
    if (password === correctPassword) {
      setIsAuthenticated(true);
      fetchVisitors('today');
      fetchLiveUsers();
    } else {
      alert('Incorrect password');
      setPassword('');
    }
  };

  // ---------------- LIVE USERS ----------------
  const fetchLiveUsers = async () => {
    setLiveLoading(true);
    try {
      const res = await fetch('/api/analytics/live-users');
      const data = await res.json();
      setLiveUsers(Number(data?.liveUsers || 0));
    } catch (err) {
      console.error(err);
    }
    setLiveLoading(false);
  };

  useEffect(() => {
    if (!isAuthenticated) return;

    const interval = setInterval(fetchLiveUsers, 30000);
    return () => clearInterval(interval);
  }, [isAuthenticated]);

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

  // ---------------- LOGIN SCREEN ----------------
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100">
        <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
          <h1 className="text-2xl font-bold text-center mb-6">
            Visitors Dashboard
          </h1>

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleLogin()}
            placeholder="Enter password"
            className="w-full border p-3 rounded-lg mb-4"
          />

          <button
            onClick={handleLogin}
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
          >
            Login
          </button>
        </div>
      </div>
    );
  }

  // ---------------- MAIN UI ----------------
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-3xl font-bold">Visitors Dashboard</h1>
            <p className="text-gray-500">
              Real-time analytics overview
            </p>
          </div>

          <button
            onClick={() => setIsAuthenticated(false)}
            className="bg-red-500 text-white px-4 py-2 rounded-lg"
          >
            Logout
          </button>
        </div>

        {/* CARDS */}
        <div className="grid md:grid-cols-3 gap-4 mb-6">

          <div className="bg-white p-5 rounded-xl shadow">
            <p className="text-gray-500 text-sm">Time Range</p>
            <h2 className="text-xl font-bold">{formatFilter(filter)}</h2>
          </div>

          <div className="bg-white p-5 rounded-xl shadow">
            <p className="text-gray-500 text-sm">Total Visitors</p>
            <h2 className="text-2xl font-bold">
              {visitorRecords.length}
            </h2>
          </div>

          <div className="bg-white p-5 rounded-xl shadow">
            <p className="text-gray-500 text-sm">Live Users</p>
            <h2 className="text-2xl font-bold">{liveUsers}</h2>
            {liveLoading && (
              <p className="text-xs text-gray-400">Updating...</p>
            )}
          </div>

        </div>

        {/* FILTERS */}
        <div className="flex gap-3 mb-6">
          {(['today', 'last7days', 'lastmonth'] as TimeFilter[]).map((f) => (
            <button
              key={f}
              onClick={() => changeFilter(f)}
              className={`px-4 py-2 rounded-lg transition ${
                filter === f
                  ? 'bg-black text-white'
                  : 'bg-white border hover:bg-gray-100'
              }`}
            >
              {formatFilter(f)}
            </button>
          ))}
        </div>

        {/* STATUS */}
        {loading && (
          <div className="bg-white p-4 rounded-lg shadow mb-4">
            Loading data...
          </div>
        )}

        {error && (
          <div className="bg-red-100 text-red-700 p-4 rounded-lg mb-4">
            {error}
          </div>
        )}

        {/* TABLE */}
        <div className="bg-white rounded-xl shadow overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-100 text-left">
              <tr>
                <th className="p-3">IP</th>
                <th className="p-3">Location</th>
                <th className="p-3">Lat/Long</th>
                <th className="p-3">Time</th>
                <th className="p-3">Page</th>
                <th className="p-3">Referrer</th>
              </tr>
            </thead>

            <tbody>
              {visitorRecords.map((v) => (
                <tr key={v._id} className="border-b hover:bg-gray-50">
                  <td className="p-3">{v.ip}</td>

                  <td className="p-3">{formatLocation(v.location)}</td>

                  <td className="p-3">
                    {v.latitude}, {v.longitude}
                  </td>

                  <td className="p-3">
                    {new Date(v.timestamp).toLocaleString()}
                  </td>

                  <td className="p-3 text-blue-600 break-all">
                    <a href={v.pageUrl} target="_blank">
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