import Link from 'next/link';
import HomeNavigationContainer from './(site)/components/home-navigation-container';
import FooterContainer from './(site)/components/footer-container';

export const metadata = {
  title: "Software Development Company in the USA | CodeAutomation",
  description:
    "CodeAutomation.ai is a leading software development company specialized in custom software development services. Schedule a Call & build with experts.",
  keywords: [
    "CodeAutomation",
    "software development company",
    "software development services",
    "custom software development",
  ],
  alternates: {
    canonical: "https://codeautomation.ai",
  },
};

const NotFoundPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Navigation */}
      <HomeNavigationContainer />

      {/* 404 Content */}
      <main className="flex flex-grow items-center justify-center px-4 mt-32 pb-12">
        <div className="max-w-lg bg-white rounded-2xl px-4 py-6 shadow-lg text-center">
          {/* Animated Image */}
          <img
            src="/404.png" // Ensure this file exists in the public directory
            alt="404 Animation"
            className="w-64 mx-auto mb-6 animate-pulse"
          />
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
            <Link
              href="https://calendly.com/adnanghaffar"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-400 text-black py-3 px-6 font-semibold rounded-lg shadow-lg text-center transition-transform duration-300 hover:bg-yellow-500 hover:scale-105"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <FooterContainer />
    </div>
  );
};

export default NotFoundPage;
