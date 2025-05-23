'use client';

import { useState } from 'react';
import "../globals.css";

export default function LeadForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        companyName: '',
        campaignName: '',
        creationDate: '',
        bookingTime: '', // ✅ New time field
        phoneNumber: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const res = await fetch('/api/meta-submit-lead', {
            method: 'POST',
            body: JSON.stringify(formData),
        });

        if (res.ok) {
            alert('Lead submitted successfully!');
            setFormData({
                name: '',
                email: '',
                companyName: '',
                campaignName: '',
                creationDate: '',
                bookingTime: '', // ✅ Reset bookingTime
                phoneNumber: '',
            });
        } else {
            alert('Something went wrong!');
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-r from-blue-50 to-purple-100 flex items-center justify-center px-4 py-10">
            <form
                onSubmit={handleSubmit}
                className="w-full max-w-lg bg-white shadow-2xl rounded-2xl p-8 space-y-6"
            >
                <h2 className="text-2xl font-bold text-center text-gray-800">Submit Your Lead</h2>

                <div className="grid grid-cols-1 gap-4">
                    <input
                        name="name"
                        onChange={handleChange}
                        value={formData.name}
                        placeholder="Name"
                        required
                        className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                    <input
                        name="email"
                        type="email"
                        onChange={handleChange}
                        value={formData.email}
                        placeholder="Email"
                        required
                        className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                    <input
                        name="companyName"
                        onChange={handleChange}
                        value={formData.companyName}
                        placeholder="Company Name"
                        required
                        className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                    <input
                        name="campaignName"
                        onChange={handleChange}
                        value={formData.campaignName}
                        placeholder="Campaign Name"
                        required
                        className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                    <input
                        name="creationDate"
                        type="date"
                        onChange={handleChange}
                        value={formData.creationDate}
                        required
                        className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                    <input
                        name="bookingTime"
                        type="text" // or "string" input
                        placeholder="e.g. 2:00 PM – 3:30 PM"
                        onChange={handleChange}
                        value={formData.bookingTime}
                        required
                        className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                    <input
                        name="phoneNumber"
                        onChange={handleChange}
                        value={formData.phoneNumber}
                        placeholder="Phone Number"
                        required
                        className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-all duration-300"
                >
                    Submit
                </button>
            </form>
        </div>
    );
}
