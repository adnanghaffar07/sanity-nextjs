'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

const tabs = [
    {
        id: 'cross-platform',
        name: 'Cross-Platform',
        icon: 'tab-1.png',
        heading: 'Cross-Platform Development',
        description:
            'Enterprise-grade cross-platform solutions leveraging React Native for iOS and Android. Our architecture ensures 95% code reuse while maintaining native performance and platform-specific optimizations.',
        metrics: [
            { label: 'Code Reuse', value: '95%' },
            { label: 'Time to Market', value: '-40%' },
            { label: 'Platform Reach', value: '2x' }
        ],
        features: ['Native Performance', 'Single Codebase', 'Platform Optimization']
    },
    {
        id: 'ios',
        name: 'iOS Apps',
        icon: 'tab-2.png',
        heading: 'iOS Development',
        description:
            'Native iOS applications built with Swift and SwiftUI, delivering exceptional performance across the Apple ecosystem. We ensure full compliance with App Store guidelines and Human Interface Guidelines.',
        metrics: [
            { label: 'App Store Success', value: '98%' },
            { label: 'User Rating', value: '4.8★' },
            { label: 'Performance', value: '60fps' }
        ],
        features: ['Swift/SwiftUI', 'Apple Ecosystem', 'HIG Compliance']
    },
    {
        id: 'android',
        name: 'Android Apps',
        icon: 'tab-3.png',
        heading: 'Android Development',
        description:
            'Feature-rich Android applications using Kotlin and Jetpack Compose, optimized for the diverse Android ecosystem. We deliver consistent experiences across 24,000+ device types.',
        metrics: [
            { label: 'Device Coverage', value: '99%' },
            { label: 'Active Users', value: '2B+' },
            { label: 'Play Store Rating', value: '4.7★' }
        ],
        features: ['Kotlin/Jetpack', 'Material Design', 'Device Optimization']
    },
    {
        id: 'mvp',
        name: 'MVP Apps',
        icon: 'tab-4.png',
        heading: 'MVP Development',
        description:
            'Strategic MVP development focusing on core value propositions and rapid market validation. Our lean methodology reduces time-to-market while establishing scalable foundations.',
        metrics: [
            { label: 'Time to MVP', value: '6wks' },
            { label: 'Cost Efficiency', value: '50%' },
            { label: 'Iteration Cycle', value: '2wks' }
        ],
        features: ['Lean Methodology', 'Market Validation', 'Scalable Foundation']
    },
    {
        id: 'web',
        name: 'Web Apps',
        icon: 'tab-5.png',
        heading: 'Web Application Development',
        description:
            'Enterprise web applications built with modern frameworks and architectures. We deliver responsive, secure, and scalable solutions with optimal performance across all devices.',
        metrics: [
            { label: 'Load Time', value: '<2s' },
            { label: 'Uptime SLA', value: '99.9%' },
            { label: 'Concurrent Users', value: '10K+' }
        ],
        features: ['Progressive Web Apps', 'Cloud Native', 'Enterprise Security']
    },
    {
        id: 'wearable',
        name: 'Wearable Apps',
        icon: 'tab-6.png',
        heading: 'Wearable Technology',
        description:
            'Specialized applications for wearable devices including smartwatches and fitness trackers. We optimize for battery life, real-time data processing, and seamless device integration.',
        metrics: [
            { label: 'Battery Optimization', value: '+40%' },
            { label: 'Sync Latency', value: '<1s' },
            { label: 'Device Support', value: 'All' }
        ],
        features: ['Real-time Sync', 'Battery Efficient', 'HealthKit/Google Fit']
    },
    {
        id: 'gaming',
        name: 'Game Apps',
        icon: 'tab-7.png',
        heading: 'Game Development',
        description:
            'Immersive gaming experiences built with Unity and Unreal Engine. From casual to multiplayer, we deliver optimized performance with stunning visuals and engaging mechanics.',
        metrics: [
            { label: 'Frame Rate', value: '60fps' },
            { label: 'Retention Rate', value: '4.2x' },
            { label: 'User Engagement', value: '+80%' }
        ],
        features: ['Unity/Unreal', 'Multiplayer Ready', 'Analytics Integration']
    },
];

const blueColorClasses = {
    light: 'bg-blue-50',
    medium: 'bg-blue-100',
    text: 'text-blue-600',
    border: 'border-blue-200',
    gradient: 'from-blue-600 to-blue-700',
    gradient2: 'from-blue-50 to-blue-100',
    dot: 'bg-blue-600',
    hover: 'hover:bg-blue-600',
    bg: 'bg-blue-600'
};

export default function CategoryTabs() {
    const [activeIndex, setActiveIndex] = useState(0);
    const tabsContainerRef = useRef<HTMLDivElement>(null);
    const activeTabRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        if (activeTabRef.current && tabsContainerRef.current) {
            const container = tabsContainerRef.current;
            const activeTab = activeTabRef.current;
            
            const scrollLeft = activeTab.offsetLeft - (container.clientWidth / 2) + (activeTab.clientWidth / 2);
            
            container.scrollTo({
                left: scrollLeft,
                behavior: 'smooth'
            });
        }
    }, [activeIndex]);

    const openCalendly = () => {
        window.open('https://calendly.com/adnanghaffar', '_blank');
    };

    return (
        <section className="relative bg-[#E6F3FF] py-16 md:py-24 px-4 overflow-hidden">
            {/* Professional background pattern */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#2196f30a_1px,transparent_1px),linear-gradient(to_bottom,#2196f30a_1px,transparent_1px)] bg-[size:32px_32px]"></div>
            </div>
            
            {/* Soft blue orbs */}
            <div className="absolute top-20 left-10 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>

            <div className="relative z-10 max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-blue-200 shadow-sm mb-6">
                        <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></span>
                        <span className="text-sm font-medium text-blue-600 tracking-wide">TECHNICAL CAPABILITIES</span>
                    </div>
                    
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Enterprise-Grade<br />
                        <span className="text-blue-600">Development Expertise</span>
                    </h2>
                    
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Comprehensive development solutions tailored to your business requirements, 
                        delivered with enterprise standards and technical excellence.
                    </p>
                </div>

                {/* Tabs Navigation - Centered */}
                <div className="relative mb-12 flex justify-center">
                    <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-[#E6F3FF] to-transparent pointer-events-none z-10 md:hidden"></div>
                    <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-[#E6F3FF] to-transparent pointer-events-none z-10 md:hidden"></div>
                    
                    <div 
                        ref={tabsContainerRef}
                        className="flex overflow-x-auto scrollbar-hide gap-2 pb-4 max-w-5xl mx-auto px-4 md:justify-center md:flex-wrap"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        {tabs.map((tab, index) => {
                            const isActive = index === activeIndex;
                            
                            return (
                                <button
                                    key={tab.id}
                                    ref={isActive ? activeTabRef : null}
                                    onClick={() => setActiveIndex(index)}
                                    className={`relative flex items-center gap-3 px-6 py-3 rounded-lg transition-all duration-300 whitespace-nowrap flex-shrink-0 group
                                        ${isActive 
                                            ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30' 
                                            : 'bg-white text-gray-700 hover:bg-blue-50 border border-blue-200/50'
                                        }`}
                                >
                                    {isActive && (
                                        <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-600 rounded-full"></span>
                                    )}
                                    
                                    <div className={`w-5 h-5 relative transition-all duration-300 ${
                                        isActive ? 'brightness-0 invert' : 'opacity-70 group-hover:opacity-100'
                                    }`}>
                                        <Image
                                            src={`/${tab.icon}`}
                                            alt={tab.name}
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                    <span className="font-medium text-sm">{tab.name}</span>
                                </button>
                            );
                        })}
                    </div>
                    
                    {/* Subtle border line */}
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-px bg-blue-200"></div>
                </div>

                {/* Content Area */}
                <div className="relative">
                    {/* Main content card */}
                    <div className="bg-white rounded-2xl shadow-xl shadow-blue-200/50 overflow-hidden border border-blue-100">
                        {/* Color accent bar */}
                        <div className={`h-1 w-full bg-gradient-to-r ${blueColorClasses.gradient}`}></div>
                        
                        <div className="p-8 lg:p-12">
                            <div className="grid lg:grid-cols-5 gap-12">
                                {/* Left column - Main content */}
                                <div className="lg:col-span-3">
                                    {/* Title with icon */}
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className={`w-12 h-12 rounded-lg ${blueColorClasses.light} border ${blueColorClasses.border} flex items-center justify-center`}>
                                            <div className="w-6 h-6 relative">
                                                <Image
                                                    src={`/${tabs[activeIndex].icon}`}
                                                    alt={tabs[activeIndex].name}
                                                    fill
                                                    className="object-contain"
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">
                                                {tabs[activeIndex].heading}
                                            </h3>
                                        </div>
                                    </div>
                                    
                                    {/* Description */}
                                    <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                        {tabs[activeIndex].description}
                                    </p>
                                    
                                    {/* Features list */}
                                    <div className="flex flex-wrap gap-3 mb-8">
                                        {tabs[activeIndex].features.map((feature, idx) => (
                                            <span 
                                                key={idx}
                                                className={`px-4 py-2 ${blueColorClasses.light} ${blueColorClasses.text} rounded-lg text-sm font-medium border ${blueColorClasses.border}`}
                                            >
                                                {feature}
                                            </span>
                                        ))}
                                    </div>
                                    
                                    {/* CTA Button */}
                                    <button
                                        onClick={openCalendly}
                                        className={`inline-flex items-center gap-3 px-6 py-3 ${blueColorClasses.bg} hover:bg-blue-700 text-white font-medium rounded-lg transition-all duration-300 group shadow-lg shadow-blue-200`}
                                    >
                                        <span>Schedule Technical Consultation</span>
                                        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </button>
                                </div>
                                
                                {/* Right column - Metrics */}
                                <div className="lg:col-span-2">
                                    <div className={`${blueColorClasses.light} rounded-xl p-6 border ${blueColorClasses.border}`}>
                                        <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-6">
                                            Key Performance Indicators
                                        </h4>
                                        
                                        <div className="space-y-6">
                                            {tabs[activeIndex].metrics.map((metric, idx) => (
                                                <div key={idx} className="space-y-2">
                                                    <div className="flex justify-between items-center text-sm">
                                                        <span className="text-gray-600">{metric.label}</span>
                                                        <span className={`font-bold ${blueColorClasses.text}`}>{metric.value}</span>
                                                    </div>
                                                    <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
                                                        <div 
                                                            className={`h-full bg-gradient-to-r ${blueColorClasses.gradient} rounded-full`}
                                                            style={{ width: metric.value.toString().replace(/[^0-9]/g, '') + '%' }}
                                                        ></div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                        
                                        {/* Additional metric note */}
                                        <div className="mt-6 pt-6 border-t border-gray-200">
                                            <div className="flex items-center gap-2 text-sm text-gray-500">
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                                <span>Based on enterprise client data</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* Bottom trust indicators */}
                    <div className="flex flex-wrap items-center justify-center gap-8 mt-12 pt-8 border-t border-blue-200">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm border border-blue-100">
                                <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                                </svg>
                            </div>
                            <div>
                                <div className="font-bold text-gray-900">80+</div>
                                <div className="text-sm text-gray-500">Enterprise Clients</div>
                            </div>
                        </div>
                        
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm border border-blue-100">
                                <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <div>
                                <div className="font-bold text-gray-900">98%</div>
                                <div className="text-sm text-gray-500">Client Retention</div>
                            </div>
                        </div>
                        
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm border border-blue-100">
                                <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                                </svg>
                            </div>
                            <div>
                                <div className="font-bold text-gray-900">100+</div>
                                <div className="text-sm text-gray-500">Projects Delivered</div>
                            </div>
                        </div>
                        
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm border border-blue-100">
                                <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <div>
                                <div className="font-bold text-gray-900">7+ Years</div>
                                <div className="text-sm text-gray-500">Market Presence</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Add custom styles for animations */}
            <style jsx>{`
                @keyframes blob {
                    0% { transform: translate(0px, 0px) scale(1); }
                    33% { transform: translate(30px, -50px) scale(1.1); }
                    66% { transform: translate(-20px, 20px) scale(0.9); }
                    100% { transform: translate(0px, 0px) scale(1); }
                }
                .animate-blob {
                    animation: blob 7s infinite;
                }
                .animation-delay-2000 {
                    animation-delay: 2s;
                }
                .animation-delay-4000 {
                    animation-delay: 4s;
                }
            `}</style>
        </section>
    );
}