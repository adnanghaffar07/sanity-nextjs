'use client'
import { useRouter } from "next/navigation";
import { useEffect, useState } from 'react';
import "../globals.css";

const QualificationForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [budget, setBudget] = useState('');
  const [service, setService] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [isEligible, setIsEligible] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showOtpModal, setShowOtpModal] = useState(false);
  const [otp, setOtp] = useState('');

  const router = useRouter();

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (parseInt(budget) < 5000) {
      setShowModal(true);
    } else {
      setIsEligible(true);
      setShowOtpModal(true);
    }
  };

  const handleSendOtp = async () => {
    const response = await fetch('/api/send-meta-otp', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ phone })
    });

    const data = await response.json();
    if (data.success) {
      setShowOtpModal(true);
    } else {
      alert('Failed to send OTP: ' + data.error);
    }
  };

  const handleOtpVerify = async () => {
    const response = await fetch('/api/verify-meta-otp', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ phone, code: otp })
    });

    const data = await response.json();
    if (data.success) {
      router.push('https://calendly.com/adnanghaffar');
    } else {
      alert('Invalid OTP');
    }
  };

  // Add this useEffect hook to force restart if video stops
  useEffect(() => {
    const video = document.querySelector('video');
    const handleEnded = () => video?.play();

    video?.addEventListener('ended', handleEnded);
    return () => video?.removeEventListener('ended', handleEnded);
  }, []);

  return (
    <div className="relative min-h-screen w-full font-light text-white">
      {/* Video Background with Dark Overlay */}
      <div className="fixed inset-0 z-0">
        <video
          className="absolute inset-0 object-cover w-full h-full"
          muted
          autoPlay
          loop
          playsInline
          preload="auto"
          poster="/client-hero.png"
          // Add these attributes for reliable playback
          disablePictureInPicture
          disableRemotePlayback
          x-webkit-airplay="allow"
        >
          <source src="/client4.mp4" type="video/mp4" />
          {/* Fallback for browsers that don't support video */}
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black opacity-30"></div>
      </div>

      {/* Form Container - positioned relative to appear above video */}
      <div className="relative z-10 flex items-center justify-center min-h-screen py-12 px-4">
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-lg text-gray-800"
        >
          <h2 className="text-2xl font-bold text-center text-black mb-1">Post Your Requirements</h2>
          <p className="text-sm text-center mb-6">Please fill the form below to receive a quote for workspace.<br />Please add all the details required.</p>

          <div className="space-y-4">
            <input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 placeholder-gray-400
              focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-indigo-300"
              required
            />

            <input
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 placeholder-gray-400
              focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-indigo-300"
              required
            />

            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 placeholder-gray-400
              focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-indigo-300"
              required
            />

            <input
              type="text"
              placeholder="(123) 456 - 7890"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 placeholder-gray-400
              focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-indigo-300"
              required
            />

            <select
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 text-gray-700
              focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-indigo-300"
              required
            >
              <option value="">Select Your Budget</option>
              <option value="1000">Less than $5,000</option>
              <option value="5000">$5,000 - $10,000</option>
              <option value="15000">$15,000 - $30,000</option>
              <option value="30000">Greater than $30,000</option>
            </select>

            <select
              value={service}
              onChange={(e) => setService(e.target.value)}
              className="w-full px-4  py-3 rounded-xl border border-gray-300 text-gray-700
              focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-indigo-300"
              required
            >
              <option value="">Select a Service</option>
              <option value="AI Agent">AI Agent</option>
              <option value="Mobile App">Mobile App</option>
              <option value="Web App">Web App</option>
              <option value="Headless">Headless</option>
              <option value="Automation">Automation</option>
              <option value="QA">QA</option>
            </select>
          </div>
          <button
            onClick={handleSendOtp}
            type="submit"
            className="w-full mt-6 py-3 bg-[#1d92fb] font-semibold text-[20px] text-white rounded-full 
            hover:bg-[#e5d410] hover:text-black transition-colors duration-300"
          >
            Next
          </button>
        </form>
      </div>

      {/* Modals */}
      {showModal && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="bg-white p-6 rounded-xl shadow-xl text-center max-w-sm w-full">
            <h3 className="text-xl font-bold text-red-500">Sorry, You Do Not Meet the Criteria</h3>
            <p className="text-gray-600 mt-4">Your budget is below our minimum requirement. We hope to collaborate in the future!</p>
            <button
              onClick={() => setShowModal(false)}
              className="mt-6 px-6 py-2 bg-gray-800 text-white rounded-full hover:bg-gray-700"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {showOtpModal && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="bg-white p-6 rounded-xl shadow-xl text-center max-w-sm w-full">
            <h3 className="text-xl font-bold text-indigo-600">Enter OTP</h3>
            <p className="text-gray-600 mt-2">We&apos;ve sent an OTP to your phone number.</p>
            <input
              type="text"
              placeholder="Enter 6-digit OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="mt-4 px-4 py-3 w-full border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-300"
            />
            <button
              onClick={handleOtpVerify}
              className="mt-4 px-6 py-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-500"
            >
              Verify
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default QualificationForm;