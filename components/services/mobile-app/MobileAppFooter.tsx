'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function MobileAppFooter() {
  const socialIcons = [
    { src: '/facebook-icon.svg', alt: 'facebook', link: 'https://www.facebook.com/Codeautomationai/' },
    { src: '/instagram-icon.svg', alt: 'Instagram', link: 'https://www.instagram.com/codeautomation.ai/' },
    { src: '/twitter-new.svg', alt: 'twitter', link: 'https://twitter.com/codeautomation' },
    { src: '/linkedin-icon.svg', alt: 'Linkedin', link: 'https://www.linkedin.com/company/codeautomationai/' },
    { src: '/youtube.png', alt: 'Youtube', link: 'https://www.youtube.com/@codeautomation-ai' },
  ];

  return (
    <footer className="relative bg-[#001E6B] text-white py-12 px-4 sm:px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        {/* Footer Content */}
        <div className="flex flex-col items-center space-y-6">
          {/* Logo */}
          <div className="flex justify-center">
            <Image
              src="/footer-logo.svg"
              alt="CodeAutomation Logo"
              width={180}
              height={40}
              className="h-10 w-auto"
            />
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 justify-center">
            {socialIcons.map((icon, i) => (
              <Link
                key={i}
                href={icon.link}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                <Image
                  src={icon.src}
                  alt={icon.alt}
                  width={40}
                  height={40}
                  className="rounded-full object-cover hover:scale-110 transition-transform"
                />
              </Link>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center text-sm text-gray-400">
            <p>© {new Date().getFullYear()} CodeAutomation.ai — All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
