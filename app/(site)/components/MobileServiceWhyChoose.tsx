// components/WhyChoose.tsx
'use client';
import Image from 'next/image';
import QuoteModal from './MobileQuoteModal';
import { useState } from 'react';


const features = [
  {
    title: 'Rapid MVP Delivery',
    desc: 'Post-launch, we stay by your side to update, optimize, and scale your app.',
    icon: 'choose1.png',
  },
  {
    title: 'Transparent Pricing',
    desc: 'Know exactly what you’re paying for, no hidden costs.',
    icon: 'choose2.png',
  },
  {
    title: 'Enterprise-Grade Security',
    desc: 'Protect your users and your brand from day one.',
    icon: 'choose3.png',
  },
  {
    title: 'Tailored Solutions',
    desc: 'We build apps that fit your unique business needs perfectly.',
    icon: 'choose4.png',
  },
  {
    title: 'Dedicated Post-Launch Support',
    desc: 'We help your app grow and evolve with your business.',
    icon: 'choose5.png',
  },
  {
    title: 'Proven Success',
    desc: 'Trusted by startups and enterprises to deliver on promises.',
    icon: 'choose6.png',
  },
  {
    title: 'Cross-Platform Expertise',
    desc: 'Reach users on iOS, Android, web, and beyond.',
    icon: 'choose7.png',
  },
  {
    title: 'Agile Collaboration',
    desc: 'Stay in the loop with regular updates and clear communication.',
    icon: 'choose8.png',
  },
];

export default function WhyChoose() {
    const [isModalOpen, setIsModalOpen] = useState(false);
  
  return (
 <section className="relative bg-[#E6F3FF] py-16 px-4 text-center overflow-hidden">
  {/* Illustration Image (top-right) */}
  <div className="absolute top-0 right-0 h-40 md:h-60">
    <Image 
      src="/why-ca.png"  // replace with your illustration path
      alt="Illustration"
      width={180}
      height={180}
      className="object-contain"
    />
  </div>

  {/* Heading */}
  <h2 className="text-2xl md:text-3xl font-bold mb-2">Why Choose Code Automation?</h2>
  <p className="text-gray-700 mb-10 text-lg">Here&apos;s What You Get:</p>

 {/* Features Grid */}
<div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-6 max-w-5xl mx-auto relative z-10">
  {features.map((feature, index) => (
    <div
      key={index}
      className="group bg-[#2196f3] text-white rounded-xl py-5 md:py-6  px-3 md:px-4 transition-all duration-300 hover:bg-white hover:text-[#2196f3] shadow-md"
    >
      {/* Wrapper for icon + title */}
      <div className="flex items-center gap-2 md:gap-3 mb-2">
        <div className="w-12 h-10 md:w-12 md:h-12 rounded-md bg-white group-hover:bg-[#2196f3] flex items-center justify-center transition-all duration-300">
          <Image
            src={`/${feature.icon}`}
            alt={feature.title}
            width={40}
            height={40}
          />
        </div>
        <h4 className="font-semibold text-sm text-left md:text-base">{feature.title}</h4>
      </div>
      {/* Description always below */}
      <p className="text-xs md:text-sm text-left">{feature.desc}</p>
    </div>
  ))}
</div>


  {/* CTA Button */}
  <button
    onClick={() => setIsModalOpen(true)}
    className="mt-10 px-6 py-3 bg-[#2196f3] hover:bg-blue-600 text-white font-semibold rounded-md relative z-10"
  >
    Get Your Free Consultation
  </button>

  <QuoteModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
</section>

  );
}
