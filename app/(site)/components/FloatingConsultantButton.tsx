'use client';

import { useEffect, useState } from 'react';
import { Phone } from 'lucide-react'; // or use any phone icon
import { useRouter } from 'next/navigation';


export default function FloatingConsultDrawer({
  isModalOpen,
  setIsFloatingDrawerOpen,
}: {
  isModalOpen: boolean;
  setIsFloatingDrawerOpen: (value: boolean) => void;
}) {
  const [isVisible, setIsVisible] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
const router = useRouter();

  useEffect(() => {
    const handleScroll = () => setIsVisible(window.scrollY > 300);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // ✅ Prevent background scroll when drawer is open
    if (openDrawer) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [openDrawer]);
  useEffect(() => {
  setIsFloatingDrawerOpen(openDrawer);
}, [openDrawer]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

 const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  const { name, email, phone, message } = form;

  if (!name || !email || !phone || !message) {
    setError('All fields are required');
    return;
  }

  setSubmitting(true);
  setError('');

  try {
    const res = await fetch('/api/mobile-submit-quote', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...form,
        source: 'Floating Consultation Drawer',
      }),
    });

    if (!res.ok) throw new Error('Failed');

    setSuccess(true);
    setForm({ name: '', email: '', phone: '', message: '' });

    // ✅ Redirect to thank you page
    router.push('/thank-you-mobile-app');
  } catch (err) {
    setError('Submission failed');
  } finally {
    setSubmitting(false);
  }
};


  if (!isVisible || isModalOpen) return null; // 🛑 Hide entire drawer & call button if modal is open


  return (
    <>
      {/* Call Button */}
      <a
        href="tel:+18505584691"
        className="fixed top-[25%] sm:top-[20%] right-2 z-[999] bg-[#1D92FB] text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition"
        title="Call Now"
      >
        <Phone className="w-6 h-6" />
      </a>

      {/* Floating Tab */}
      <button
        onClick={() => setOpenDrawer(true)}
        className="fixed top-3/4 right-0 transform -translate-y-1/2 z-[999] rotate-90 origin-top-right bg-[#1D92FB] text-white text-2xl px-6 py-2 rounded-l-none rounded-r-full shadow-md hover:bg-blue-600"
      >
        Get Upto <span className="text-black">20%</span> Discount
      </button>

      {/* Drawer */}
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/40 z-[998] transition-opacity duration-300 ${openDrawer ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
        onClick={() => setOpenDrawer(false)}
      />

      {/* Horizontal Side Drawer */}
      <div
        className={`fixed top-36 right-0 h-[500px] lg:h-[400px] w-[90%] max-w-2xl z-[999] bg-[#002E5B] text-white flex transform transition-transform duration-500 ease-in-out ${openDrawer ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        {/* Vertical Banner */}
        <div className="bg-[#007BFF] w-10 sm:w-12 flex items-center justify-center rotate-180 text-xs font-semibold tracking-wider text-center whitespace-nowrap writing-vertical px-2">
          <span className="transform text-xl rotate-90 whitespace-nowrap text-white">
            GET UPTO 20% DISCOUNT
          </span>
        </div>

        {/* Form Container */}
        <div className="flex-1 p-6 relative overflow-y-auto">
          {/* Close */}
          <button
            onClick={() => setOpenDrawer(false)}
            className="absolute top-4 right-4 text-white hover:text-yellow-300 text-2xl"
          >
            ×
          </button>

          {/* Headings */}
          <h3 className="text-2xl sm:text-3xl font-bold mb-2 text-white">TELL US ABOUT YOUR PROJECT</h3>
          <p className="text-sm sm:text-base mb-6 text-white">
            Our consultant will contact you to discuss your project.
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <input
                name="name"
                type="text"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="Your Name*"
                className="px-3 py-2 rounded-md text-sm bg-white text-black focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
              <input
                name="phone"
                type="tel"
                required
                value={form.phone}
                onChange={handleChange}
                placeholder="Your Phone*"
                className="px-3 py-2 rounded-md text-sm bg-white text-black focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
              <input
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="Email Address*"
                className="px-3 py-2 rounded-md text-sm bg-white text-black focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>

            <textarea
              name="message"
              required
              value={form.message}
              onChange={handleChange}
              placeholder="Describe Your Project..."
              rows={4}
              className="w-full px-3 py-2 rounded-md text-sm bg-white text-black focus:outline-none focus:ring-2 focus:ring-yellow-400"
            ></textarea>

            {error && <p className="text-red-400 text-sm">{error}</p>}
            {success && <p className="text-green-400 text-sm">Thanks! We&apos;ll be in touch soon.</p>}

            <button
              type="submit"
              disabled={submitting}
              className="w-full bg-[#1d92fb] hover:bg-yellow-400 hover:text-black text-white font-semibold py-3 rounded-md transition"
            >
              {submitting ? 'Sending...' : 'SUBMIT YOUR REQUEST'}
            </button>
          </form>
        </div>
      </div>

    </>
  );
}
