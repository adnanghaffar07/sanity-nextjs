'use client';

import { useState } from 'react';
import { submitForm } from '@/lib/forms/client/submitForm';

type FormState = {
  name: string;
  email: string;
  phone: string;
  inquiryType: string;
  company: string;
  message: string;
};

const initialState: FormState = {
  name: '',
  email: '',
  phone: '',
  inquiryType: 'Consulting',
  company: '',
  message: '',
};

const validateEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());

export default function ContactForm() {
  const [formData, setFormData] = useState<FormState>(initialState);
  const [status, setStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({ type: null, message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus({ type: null, message: '' });

    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim() || !formData.company.trim() || !formData.message.trim()) {
      setStatus({ type: 'error', message: 'Please complete all required fields before submitting.' });
      return;
    }

    if (!validateEmail(formData.email)) {
      setStatus({ type: 'error', message: 'Please enter a valid email address.' });
      return;
    }

    setIsSubmitting(true);

    try {
      await submitForm('contact-page', {
        fields: {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          lookingFor: formData.inquiryType,
          message: formData.message,
        },
      });

      setStatus({ type: 'success', message: 'Thank you! Your message is sent. We will reach out shortly.' });
      setFormData(initialState);
    } catch (error) {
      console.error('Contact form error:', error);
      setStatus({ type: 'error', message: 'Submission failed. Please try again later.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="rounded-[2rem] border border-white/10 bg-white/95 p-8 shadow-2xl shadow-slate-950/20 backdrop-blur-xl sm:p-10">
      <div className="mb-6">
        <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Let’s talk</p>
        <h2 className="mt-3 text-3xl font-semibold text-slate-900">Tell us about your needs</h2>
      </div>

      {status.type && (
        <div className={`mb-6 rounded-2xl px-4 py-3 text-sm ${status.type === 'success' ? 'bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200' : 'bg-rose-50 text-rose-700 ring-1 ring-rose-200'}`}>
          {status.message}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="block">
            <span className="text-sm font-semibold text-slate-700">Name</span>
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
              placeholder="Your name"
            />
          </label>
          <label className="block">
            <span className="text-sm font-semibold text-slate-700">Email</span>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
              placeholder="you@example.com"
            />
          </label>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <label className="block">
            <span className="text-sm font-semibold text-slate-700">Phone</span>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
              placeholder="+1 555 123 4567"
            />
          </label>
          <label className="block">
            <span className="text-sm font-semibold text-slate-700">Inquiry Type</span>
            <select
              name="inquiryType"
              value={formData.inquiryType}
              onChange={handleChange}
              className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
            >
              <option>Consulting</option>
              <option>Service Inquiry</option>
              <option>Career</option>
              <option>Others</option>
            </select>
          </label>
        </div>

        <label className="block">
          <span className="text-sm font-semibold text-slate-700">Company</span>
          <input
            name="company"
            value={formData.company}
            onChange={handleChange}
            required
            className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
            placeholder="Company name"
          />
        </label>

        <label className="block">
          <span className="text-sm font-semibold text-slate-700">Message</span>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="mt-2 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
            placeholder="Tell us how we can help"
          />
        </label>

        <div className="flex sm:items-center justify-center">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full inline-flex items-center justify-center rounded-2xl bg-[#f7e022] px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-[#e6c91e] hover:shadow-lg hover:shadow-[#f7e022]/30 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:shadow-none"
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </div>
      </form>
    </div>
  );
}
