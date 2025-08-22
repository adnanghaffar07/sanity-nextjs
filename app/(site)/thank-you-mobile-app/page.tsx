export default function ThankYouMobileApp() {
  return (
    <main className="min-h-screen flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center max-w-md w-full">
        <svg
          className="mx-auto mb-4 w-16 h-16 text-[#1d92fb]"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12l2 2 4-4m5 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>

        <h1 className="text-3xl font-extrabold text-[#1d92fb]">Thank you!</h1>
        <p className="mt-4 text-gray-700 text-lg">
          Your form has been submitted successfully.<br />
          We&apos;ll get back to you shortly.
        </p>

        <a
          href="/"
          className="mt-6 inline-block bg-[#1d92fb] text-white font-medium py-2 px-6 rounded-full hover:bg-blue-700 transition"
        >
          Back to Home
        </a>
      </div>
    </main>
  );
}
