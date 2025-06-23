// components/WhyChoose.tsx
import Image from 'next/image';

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
  return (
    <section className="bg-[#E6F3FF] py-16 px-4 text-center">
      <h2 className="text-2xl md:text-3xl font-bold mb-2">Why Choose Code Automation?</h2>
      <p className="text-gray-700 mb-10 text-lg">Here&apos;s What You Get:</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <div
            key={index}
            className="group bg-[#2196f3] text-white rounded-xl p-5 transition-all duration-300 hover:bg-white hover:text-[#2196f3] shadow-md"
          >
            <div className="w-12 h-12 mb-4 rounded-md bg-white group-hover:bg-[#2196f3] flex items-center justify-center transition-all duration-300">
              <Image
                src={`/${feature.icon}`}
                alt={feature.title}
                width={32}
                height={32}
              />
            </div>
            <h4 className="font-semibold text-base mb-2 text-left">{feature.title}</h4>
            <p className="text-sm text-left">{feature.desc}</p>
          </div>
        ))}
      </div>
      <a
        href="https://calendly.com/adnanghaffar"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="mt-10 px-6 py-3 bg-[#2196f3] hover:bg-blue-600 text-white font-semibold rounded-md">
          Get Your Free Consultation
        </button>
      </a>
    </section>
  );
}
