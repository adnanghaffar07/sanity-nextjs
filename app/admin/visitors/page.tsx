'use client';

import { useState } from 'react';
import { client } from '@/sanity/lib/client';

interface Visitor {
  _id: string;
  ip: string;
  location: {
    city: string;
    region: string;
    country: string;
  };
  latitude: number;
  longitude: number;
  timestamp: string;
  pageUrl: string;
  userAgent: string;
  referrer: string;
}

export default function VisitorsDashboard() {
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [visitors, setVisitors] = useState<Visitor[]>([]);
  const [loading, setLoading] = useState(false);

  const correctPassword = process.env.NEXT_PUBLIC_VISITOR_DASHBOARD_PASSWORD || 'admin123'; // Change via env for production

  const handleLogin = () => {
    if (password === correctPassword) {
      setIsAuthenticated(true);
      fetchVisitors();
    } else {
      alert('Incorrect password');
    }
  };

  const fetchVisitors = async () => {
    setLoading(true);
    try {
      const data = await client.fetch('*[_type == "visitor"] | order(timestamp desc)');
      setVisitors(data);
    } catch (error) {
      console.error('Error fetching visitors:', error);
    }
    setLoading(false);
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-2xl font-bold mb-4">Visitors Dashboard</h1>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
            className="w-full p-2 border border-gray-300 rounded mb-4"
          />
          <button
            onClick={handleLogin}
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          >
            Login
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-8">Visitors Dashboard</h1>
      <button
        onClick={fetchVisitors}
        className="mb-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
      >
        Refresh Data
      </button>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow-md rounded">
            <thead>
              <tr className="bg-gray-200">
                <th className="px-4 py-2">IP</th>
                <th className="px-4 py-2">Location</th>
                <th className="px-4 py-2">Lat/Long</th>
                <th className="px-4 py-2">Timestamp</th>
                <th className="px-4 py-2">Page URL</th>
                <th className="px-4 py-2">Referrer</th>
              </tr>
            </thead>
            <tbody>
              {visitors.map((visitor) => (
                <tr key={visitor._id} className="border-t">
                  <td className="px-4 py-2">{visitor.ip}</td>
                  <td className="px-4 py-2">
                    {visitor.location.city}, {visitor.location.region}, {visitor.location.country}
                  </td>
                  <td className="px-4 py-2">
                    {visitor.latitude}, {visitor.longitude}
                  </td>
                  <td className="px-4 py-2">{new Date(visitor.timestamp).toLocaleString()}</td>
                  <td className="px-4 py-2">{visitor.pageUrl}</td>
                  <td className="px-4 py-2">{visitor.referrer}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}