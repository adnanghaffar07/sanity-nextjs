'use client';

import { useState } from 'react';
import "../globals.css";
import { submitForm } from '@/lib/forms/client/submitForm';

const EMPTY_LEAD = {
    name: '',
    email: '',
    phoneNumber: '',
    companyName: '',
    work: '',
    campaignName: '',
    creationDate: '',
    bookingTime: '',
    appType: '',
    appStage: '',
    estimatedBudget: '',
    projectStartTime: '',
    preferredContactMethod: '',
};

export default function LeadForm() {
    const [formData, setFormData] = useState(EMPTY_LEAD);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const target = e.target as HTMLInputElement;
        const { name, type, value } = target;
        setFormData({ ...formData, [name]: type === 'checkbox' ? target.checked : value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await submitForm('meta-lead-manual', {
                fields: {
                    name: formData.name,
                    email: formData.email,
                    phone: formData.phoneNumber,
                    company: formData.companyName,
                    lookingFor: formData.work || formData.appType || 'Meta lead',
                },
                details: {
                    Work: formData.work,
                    Campaign: formData.campaignName,
                    'Lead created': formData.creationDate,
                    'Booking time': formData.bookingTime,
                    'App type': formData.appType,
                    'App stage': formData.appStage,
                    'Estimated budget': formData.estimatedBudget,
                    'Project start': formData.projectStartTime,
                    'Preferred contact method': formData.preferredContactMethod,
                },
            });
            alert('Lead submitted successfully!');
            setFormData(EMPTY_LEAD);
        } catch {
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
                    <input name="name" onChange={handleChange} value={formData.name} placeholder="Name" required className="input" />
                    <input name="email" type="email" onChange={handleChange} value={formData.email} placeholder="Email" required className="input" />
                    <input name="phoneNumber" onChange={handleChange} value={formData.phoneNumber} placeholder="Phone Number" required className="input" />
                    <input name="companyName" onChange={handleChange} value={formData.companyName} placeholder="Company Name" className="input" />
                    <input name="work" onChange={handleChange} value={formData.work} placeholder="Work" className="input" />
                    <input name="campaignName" onChange={handleChange} value={formData.campaignName} placeholder="Campaign Name" className="input" />
                    <input name="creationDate" type="date" onChange={handleChange} value={formData.creationDate} className="input" />
                    <input name="bookingTime" onChange={handleChange} value={formData.bookingTime} placeholder="Booking Time (e.g. 2:00 PM)" className="input" />
                    <input name="appType" onChange={handleChange} value={formData.appType} placeholder="Type of App You Need" className="input" />
                    <input name="appStage" onChange={handleChange} value={formData.appStage} placeholder="App Idea Stage" className="input" />
                    <input name="estimatedBudget" onChange={handleChange} value={formData.estimatedBudget} placeholder="Estimated Budget" className="input" />
                    <input name="projectStartTime" onChange={handleChange} value={formData.projectStartTime} placeholder="Project Start Time" className="input" />
                    <input name="preferredContactMethod" onChange={handleChange} value={formData.preferredContactMethod} placeholder="Preferred Contact Method" className="input" />
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

// Utility className to apply consistent styling
const inputClass = "border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400";
