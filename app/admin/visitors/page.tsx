'use client';

import { useState, useEffect } from 'react';

interface VisitorData {
  series: number[][];
  seriesLabels: string[][];
  xValues: string[];
}

interface DashboardData {
  success: boolean;
  dataType: string;
  filter: string;
  dateRange: { start: string; end: string };
  data: VisitorData;
}

export default function VisitorsDashboard() {
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [dataType, setDataType] = useState<'country' | 'city' | 'ip'>('country');
  const [filter, setFilter] = useState<'today' | 'last7days' | 'lastmonth'>('last7days');
  const [loading, setLoading] = useState(false);
  const [dashboardData, setDashboardData] = useState<DashboardData | null>(null);
  const [error, setError] = useState('');
  const [liveUsers, setLiveUsers] = useState<number>(0);
  const [liveUsersLoading, setLiveUsersLoading] = useState(false);

  const correctPassword = process.env.NEXT_PUBLIC_VISITOR_DASHBOARD_PASSWORD || 'admin123';

  const handleLogin = () => {
    if (password === correctPassword) {
      setIsAuthenticated(true);
      fetchVisitorData('country', 'last7days');
      fetchLiveUsers();
    } else {
      alert('Incorrect password');
      setPassword('');
    }
  };

  const fetchLiveUsers = async () => {
    setLiveUsersLoading(true);
    try {
      const response = await fetch('/api/analytics/live-users');
      const data = await response.json();
      if (response.ok) {
        setLiveUsers(data.liveUsers || 0);
      }
    } catch (err) {
      console.error('Error fetching live users:', err);
    }
    setLiveUsersLoading(false);
  };

  useEffect(() => {
    if (isAuthenticated) {
      const interval = setInterval(fetchLiveUsers, 30000); // Refresh every 30 seconds
      return () => clearInterval(interval);
    }
  }, [isAuthenticated]);

  const fetchVisitorData = async (type: 'country' | 'city' | 'ip', timeFilter: 'today' | 'last7days' | 'lastmonth') => {
    setLoading(true);
    setError('');
    try {
      const response = await fetch(
        `/api/analytics/visitors?dataType=${type}&filter=${timeFilter}`
      );
      const data = await response.json();

      if (!response.ok) {
        setError(data.error || 'Failed to fetch visitor data');
        setDashboardData(null);
      } else {
        setDashboardData(data);
        setDataType(type);
        setFilter(timeFilter);
      }
    } catch (err) {
      setError('Error fetching visitor data');
      console.error(err);
    }
    setLoading(false);
  };

  const handleDataTypeChange = (type: 'country' | 'city' | 'ip') => {
    fetchVisitorData(type, filter);
  };

  const handleFilterChange = (newFilter: 'today' | 'last7days' | 'lastmonth') => {
    fetchVisitorData(dataType, newFilter);
  };

  const getFilterLabel = (f: string) => {
    if (f === 'today') return 'Today';
    if (f === 'last7days') return 'Last 7 Days';
    if (f === 'lastmonth') return 'Last Month';
    return f;
  };

  const getDataLabel = (d: string) => {
    if (d === 'country') return 'Country';
    if (d === 'city') return 'City';
    if (d === 'ip') return 'IP Address';
    return d;
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100">
        <div className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-md">
          <h1 className="text-3xl font-bold mb-2 text-center text-gray-800">Visitors Dashboard</h1>
          <p className="text-center text-gray-500 mb-6">Powered by Amplitude Analytics</p>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleLogin()}
            placeholder="Enter password"
            className="w-full p-3 border-2 border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-blue-500 transition"
          />
          <button
            onClick={handleLogin}
            className="w-full bg-blue-600 text-white p-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Login
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header with Live Users */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          {/* Live Users Card */}
          <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl shadow-lg p-6 text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-green-100 text-sm font-medium">Live Users (Last Hour)</p>
                <h2 className="text-4xl font-bold mt-2">{liveUsers}</h2>
              </div>
              <div className="text-5xl opacity-20">👥</div>
            </div>
            {liveUsersLoading && (
              <p className="text-green-100 text-xs mt-2">Updating...</p>
            )}
          </div>

          {/* Total Stats Placeholder */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <p className="text-gray-500 text-sm font-medium">Total Period</p>
            <h2 className="text-4xl font-bold mt-2 text-gray-800">—</h2>
            <p className="text-gray-400 text-xs mt-2">See table below</p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <p className="text-gray-500 text-sm font-medium">Peak Day</p>
            <h2 className="text-4xl font-bold mt-2 text-gray-800">—</h2>
            <p className="text-gray-400 text-xs mt-2">Calculated below</p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <p className="text-gray-500 text-sm font-medium">Avg Daily</p>
            <h2 className="text-4xl font-bold mt-2 text-gray-800">—</h2>
            <p className="text-gray-400 text-xs mt-2">Over selected range</p>
          </div>
        </div>

        {/* Header */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Visitors Analytics</h1>
          <p className="text-gray-600">Real-time visitor data from Amplitude</p>
        </div>

        {/* Controls */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-6">
          <div className="space-y-6">
            {/* Data Type Filter */}
            <div>
              <label className="block text-lg font-bold text-gray-800 mb-4">
                📊 View by:
              </label>
              <div className="flex flex-wrap gap-3">
                {(['country', 'city', 'ip'] as const).map((type) => (
                  <button
                    key={type}
                    onClick={() => handleDataTypeChange(type)}
                    className={`px-6 py-3 rounded-lg font-semibold transition-all transform hover:scale-105 ${
                      dataType === type
                        ? 'bg-blue-600 text-white shadow-lg'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {getDataLabel(type)}
                  </button>
                ))}
              </div>
            </div>

            {/* Time Filter */}
            <div>
              <label className="block text-lg font-bold text-gray-800 mb-4">
                📅 Time Range:
              </label>
              <div className="flex flex-wrap gap-3">
                {(['today', 'last7days', 'lastmonth'] as const).map((f) => (
                  <button
                    key={f}
                    onClick={() => handleFilterChange(f)}
                    className={`px-6 py-3 rounded-lg font-semibold transition-all transform hover:scale-105 ${
                      filter === f
                        ? 'bg-green-600 text-white shadow-lg'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {getFilterLabel(f)}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Status */}
        {loading && (
          <div className="bg-white rounded-xl shadow-md p-6 mb-6 text-center">
            <div className="inline-block">
              <div className="animate-spin h-8 w-8 border-4 border-blue-500 border-t-transparent rounded-full"></div>
            </div>
            <p className="text-gray-600 mt-2">Loading visitor data...</p>
          </div>
        )}

        {error && (
          <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-lg mb-6">
            <p className="text-red-700 font-semibold">{error}</p>
          </div>
        )}

        {/* Data Display */}
        {dashboardData && !loading && (
          <div className="bg-white rounded-xl shadow-md p-6 overflow-x-auto">
            <div className="mb-4">
              <h2 className="text-xl font-bold text-gray-800">
                {getDataLabel(dataType)} • {getFilterLabel(filter)}
              </h2>
              <p className="text-sm text-gray-500">
                Data from {dashboardData.dateRange.start} to {dashboardData.dateRange.end}
              </p>
            </div>

            <table className="w-full">
              <thead>
                <tr className="bg-gray-100 border-b-2 border-gray-300">
                  <th className="px-4 py-3 text-left font-semibold text-gray-700">
                    {getDataLabel(dataType)}
                  </th>
                  {dashboardData.data.xValues.map((date, idx) => (
                    <th key={idx} className="px-4 py-3 text-right font-semibold text-gray-700 text-sm">
                      {new Date(date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                    </th>
                  ))}
                  <th className="px-4 py-3 text-right font-semibold text-gray-700">Total</th>
                </tr>
              </thead>
              <tbody>
                {dashboardData.data.seriesLabels.map((labels, rowIdx) => {
                  const series = dashboardData.data.series[rowIdx];
                  const total = series.reduce((a, b) => a + b, 0);

                  return (
                    <tr key={rowIdx} className="border-b border-gray-200 hover:bg-blue-50 transition">
                      <td className="px-4 py-3 font-semibold text-gray-800">{labels[0]}</td>
                      {series.map((value, colIdx) => (
                        <td key={colIdx} className="px-4 py-3 text-right text-gray-600">
                          {value}
                        </td>
                      ))}
                      <td className="px-4 py-3 text-right font-bold text-blue-600">{total}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>

            {dashboardData.data.seriesLabels.length === 0 && (
              <div className="text-center py-8">
                <p className="text-gray-500">No data available for this period</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}