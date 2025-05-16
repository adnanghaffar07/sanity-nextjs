'use client'
import { useRouter } from "next/navigation";
import { useEffect, useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
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
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!acceptedTerms) {
      alert('Please accept the terms and conditions to proceed');
      return;
    }

    if (parseInt(budget) < 5000) {
      setShowModal(true);
      return;
    }

    setIsEligible(true);

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
      // Send the form data via email
      await fetch('/api/qualified-meta-leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ firstName, lastName, email, phone, budget, service }),
      });

      // Redirect to Calendly
      const fullName = `${firstName} ${lastName}`;
      const notes = `Service Interested: ${service}\nBudget: ${budget}`;

      const calendlyUrl = `https://calendly.com/adnanghaffar?name=${encodeURIComponent(fullName)}&email=${encodeURIComponent(email)}&a1=${encodeURIComponent(notes)}&notes=${encodeURIComponent(phone)}`

      router.push(calendlyUrl);
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
          className="bg-white b shadow-xl rounded-2xl p-8 w-full max-w-lg text-gray-800"
        >
          <h2 className="text-2xl font-bold text-center text-black mb-1">Let’s turn your ideas into results</h2>
          <p className="text-sm text-lg text-center mb-6">Tell us what you’re looking for and get a tailored proposal from our expert team fast, strategic, and designed for growth.</p>

          <div className="space-y-4">
            {/* First + Last Name in one row on md+ screens */}
            <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
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
            </div>

            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 placeholder-gray-400
              focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-indigo-300"
              required
            />

            <PhoneInput
              country={'us'}
              value={phone}
              onChange={(phone) => setPhone('+' + phone)}
              inputClass="!w-full !h-[52px] !pl-14 !pr-4 !py-3 !border !border-gray-300 !placeholder-gray-400 focus:!outline-none focus:!ring-2 focus:!ring-indigo-300 focus:!border-indigo-300"
              containerClass="!w-full"
              buttonClass="!bg-white !border-gray-300"
              specialLabel=""
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
              <option value="AI Agent">AI-Powered Virtual Agent</option>
              <option value="Mobile App">Custom Mobile Application</option>
              <option value="Web App">Web Application Development</option>
              <option value="Headless">Headless CMS & Frontend</option>
              <option value="Automation">Business Process Automation</option>
              <option value="QA">Quality Assurance & Testing</option>

            </select>
          </div>
          <div className="mt-4 flex items-start">
            <div className="flex items-center h-5">
              <input
                id="terms"
                type="checkbox"
                checked={acceptedTerms}
                onChange={(e) => setAcceptedTerms(e.target.checked)}
                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300"
                required
              />
            </div>
            <label htmlFor="terms" className="ml-2 text-sm font-medium text-gray-700">
              I give my consent to Industry CodeAutomation to send me event reminders and updates via email,
              SMS and telephone calls. I can opt-out anytime. I have read and accept Industry Rockstar&apos;s
              <a href="/termsandconditions" className="text-blue-600 hover:underline"> Terms & Conditions</a> and
              <a href="/privacypolicy" className="text-blue-600 hover:underline"> Privacy Policy</a>.
            </label>
          </div>
          <button
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
          <div className="bg-white p-6 relative rounded-xl shadow-xl text-center max-w-sm w-full">
            {/* Close button */}
            <button
              onClick={() => setShowOtpModal(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <h3 className="text-xl font-bold text-black">Enter OTP</h3>
            <p className="text-gray-600 mt-2">We&apos;ve sent an OTP to your phone number.</p>
            <input
              type="text"
              placeholder="Enter 6-digit OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="w-full px-4 py-3 rounded-xl text-black border border-gray-300 placeholder-gray-400
              focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-indigo-300 mt-4"            />
            <button
              onClick={handleOtpVerify}
              className="px-6 mt-6 py-2 bg-[#1d92fb] font-semibold text-[20px] text-white rounded-3xl 
            hover:bg-[#e5d410] hover:text-black transition-colors duration-300"
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