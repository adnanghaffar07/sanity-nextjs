import React from 'react';
import Link from 'next/link';

const NotFoundPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* 404 Content */}
      <main className="flex flex-grow items-center justify-center px-4 mt-32 pb-12">
        <div className="max-w-lg bg-white rounded-2xl px-4 py-6 shadow-lg text-center">
          {/* 404 Text */}
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Oops! Page Not Found</h2>
          <p className="text-lg text-gray-600 mb-8">
            It seems the page you&apos;re looking for doesn&apos;t exist. Please check the URL or go back to the home page.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="bg-blue-600 text-white py-3 px-6 font-semibold rounded-lg shadow-lg text-center transition-transform duration-300 hover:bg-blue-700 hover:scale-105"
            >
              Go to Home
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default NotFoundPage;
