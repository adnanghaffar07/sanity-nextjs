'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';


type QuoteModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function QuoteModal({ isOpen, onClose }: QuoteModalProps) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const router = useRouter();


  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  const { name, email, phone, message } = form;
  if (!name || !email || !phone || !message) {
    setError('Please fill in all fields.');
    return;
  }

  setSubmitting(true);
  setError('');
  setSuccess(false);

  try {
    const res = await fetch('/api/mobile-submit-quote', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...form,
        source: 'Request Free Quote Modal',
      }),
    });

    if (!res.ok) throw new Error('Failed to submit form');

    setSuccess(true);
    setForm({ name: '', email: '', phone: '', message: '' });

    // ✅ Redirect after success
    router.push('/thank-you-mobile-app');
  } catch (err) {
    setError('Something went wrong. Please try again.');
  } finally {
    setSubmitting(false);
  }
};


  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/40 px-4">
      <div className="relative bg-white w-full max-w-md rounded-lg px-6 py-6 shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-gray-400 hover:text-black text-3xl font-light"
        >
          &times;
        </button>

        <div className="mb-6 text-center">
          <h2 className="text-3xl font-semibold text-[#1d92fb] mb-2">
            Tell us about your project
          </h2>
          <p className="text-gray-700 text-sm sm:text-base">
            Our consultant will contact you to discuss your project.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            name="name"
            type="text"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="Full Name*"
            className="w-full border  text-black border-gray-300 px-3 py-2 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#1d92fb]"
          />
          <input
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="Email Address*"
            className="w-full border  text-black border-gray-300 px-4 py-2 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#1d92fb]"
          />
          <input
            name="phone"
            type="tel"
            required
            value={form.phone}
            onChange={handleChange}
            placeholder="Phone Number*"
            className="w-full border  text-black border-gray-300 px-4 py-2 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#1d92fb]"
          />
          <textarea
            name="message"
            required
            value={form.message}
            onChange={handleChange}
            placeholder="Describe your project*"
            rows={4}
            className="w-full border  text-black border-gray-300 px-4 py-2 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#1d92fb]"
          ></textarea>

          {error && <p className="text-red-600 text-sm">{error}</p>}
          {success && <p className="text-green-600 text-sm">Thank you! We’ll contact you shortly.</p>}

          <button
            type="submit"
            disabled={submitting}
            className="w-full bg-[#1d92fb] text-white hover:bg-[#e5d410] hover:text-black py-2 rounded-md font-medium transition-colors"
          >
            {submitting ? 'Submitting...' : 'Submit Quote Request'}
          </button>
        </form>
      </div>
    </div>
  );
}
