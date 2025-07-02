'use client';

import { useState } from 'react';
import Image from 'next/image';
import ButtonScrollToSection from './ButtonScrollToSection';

const tabs = [
    {
        name: 'Cross-Platform Apps',
        icon: 'tab-1.png',
        heading: 'Cross-Platform Apps',
        description:
            'Want an app that works flawlessly on iOS and Android? Cross-platform development with React Native is the solution. It saves time and costs by using one codebase for all devices, ensuring a consistent user experience. At CodeAutomation, we deliver scalable, high-performance apps, offering fast development, lower costs, and a seamless experience across all devices. Let’s create an app that reaches more users effortlessly!',
    },
    {
        name: 'IOS Apps',
        icon: 'tab-2.png',
        heading: 'iOS App Development',
        description:
            'Want an iOS app that stands out in the Apple ecosystem? Whether for iPhones, iPads, or Apple Watch, CodeAutomation creates high-quality apps that meet Apple’s guidelines for performance and usability. We focus on seamless navigation, engaging UI/UX, and smooth iOS integration to create apps users love. From concept to launch, we handle everything, ensuring your app is App Store-ready and optimized for success.',
    },
    {
        name: 'Android App',
        icon: 'tab-3.png',
        heading: 'Android App Development',
        description:
            'With billions of Android users worldwide, a great Android app can elevate your business. At CodeAutomation, we build custom Android apps that work flawlessly across devices, ensuring wide reach and high engagement. From business apps to eCommerce and social platforms, we deliver a smooth, feature-rich experience. We handle everything from UI/UX design to development and Google Play submission. Let’s create a scalable, secure Android app that keeps users coming back!',
    },
    {
        name: 'MVP App',
        icon: 'tab-4.png',
        heading: 'MVP App Development',
        description:
            "Have a great app idea but not sure where to start? An MVP is the smart way to launch with key features while keeping costs low. At CodeAutomation, we help you validate your idea, build a prototype, and gather user feedback before scaling. Our process ensures a quick launch, market testing, and informed decisions. Whether you're a startup or established business, we’ll turn your vision into a functional MVP ready to grow. Let’s bring your idea to market the smart way!",
    },
    {
        name: 'Web Apps',
        icon: 'tab-5.png',
        heading: 'Web App Development',
        description:
            'Need an app that works across all devices without downloads? A web app runs in browsers, accessible on desktops, tablets, and mobiles. At CodeAutomation, we build responsive, feature-rich web apps with seamless performance, security, and scalability. From design to deployment, we handle it all, optimizing for speed and functionality.',
    },
    {
        name: 'Wearable Apps',
        icon: 'tab-6.png',
        heading: 'Wearable App Development',
        description:
            'Wearable technology is transforming user interactions, and a wearable app can give your business a competitive edge. Whether for smartwatches, fitness trackers, or health devices, CodeAutomation builds feature-rich apps that enhance convenience and engagement. We ensure seamless device integration, intuitive interfaces, and real-time data processing for smooth user experiences. Let’s create an app that keeps users connected—anytime, anywhere!',
    },
    {
        name: 'Game Apps',
        icon: 'tab-7.png',
        heading: 'Game App Development',
        description:
            'Got a game idea but need expert developers? At CodeAutomation, we create immersive game apps for web, desktop, and mobile. Whether it’s a casual game, action adventure, or multiplayer experience, we deliver smooth gameplay, stunning visuals, and engaging mechanics. From concept to launch, we manage it all, optimizing your game for performance and player enjoyment.',
    },
];

export default function CategoryTabs() {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section className="bg-[#C5E4FF]">
            <div className="py-16 bg-[#C5E4FF] px-4 max-w-5xl mx-auto text-center">
                <div className="flex flex-wrap justify-center gap-4 mb-10">
                    {tabs.map((tab, index) => {
                        const isActive = index === activeIndex;
                        return (
                            <button
                                key={index}
                                onClick={() => setActiveIndex(index)}
                                className={`flex items-center gap-2 px-6 py-4 rounded-md border-b-4 shadow-sm transition-all duration-200 ${isActive
                                    ? 'bg-[#0A8FFC] text-white border-[#0A8FFC]'
                                    : 'bg-white text-black border-transparent hover:border-blue-500'
                                    }`}
                            >
                                <Image
                                    src={`/${tab.icon}`}
                                    alt={tab.name}
                                    width={20}
                                    height={20}
                                    className='object-contain'
                                />
                                <span className="text-slgm font-bold">{tab.name}</span>
                            </button>
                        );
                    })}
                </div>

                <div className="max-w-3xl mx-auto text-center">
                    <h3 className="text-xl md:text-2xl font-bold mb-4">{tabs[activeIndex].heading}</h3>
                    <p className="text-gray-700">{tabs[activeIndex].description}</p>
                </div>
                <div className="mt-16">
                    <a
                        href="tel:+18505584691"
                        className="bg-[#1D92FB] hover:bg-blue-600 cursor-pointer text-white font-semibold px-8 py-3 rounded-md transition duration-300 inline-block"
                    >
                        Contact Us
                    </a>
                </div>
            </div>

        </section>
    );
}
