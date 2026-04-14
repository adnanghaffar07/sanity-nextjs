import React from 'react'

export default function Section5_WhyUs() {
    const differentiators = [
        {
            title: "100% Done For You",
            description: "You don't need to learn Meta Ads, GHL, or SEO. We handle every single thing from setup to ongoing management. Your only job is to detail cars.",
            icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        },
        {
            title: "Specialists in Car Detailing",
            description: "We work with car detailing businesses specifically. We know your market, your customers, your seasonal patterns, and what messaging gets detailers booked.",
            icon: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.66 0 3-4 3-9s-1.34-9-3-9m0 18c-1.66 0-3-4-3-9s1.34-9 3-9"
        },
        {
            title: "Full-Stack Marketing in One Place",
            description: "Meta Ads, Google, CRM, content, reputation management — all under one roof. No juggling multiple agencies or freelancers.",
            icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
        },
        {
            title: "Results in 30 Days",
            description: "We don't make you wait 6 months to see results. Our systems are designed to generate leads and bookings within the first 30 days of going live.",
            icon: "M13 10V3L4 14h7v7l9-11h-7z"
        },
        {
            title: "Transparent Reporting",
            description: "You always know what's working. Monthly performance reports, dashboard access, and regular strategy calls keep you in the loop at every stage.",
            icon: "M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        },
        {
            title: "Affordable & Flexible Plans",
            description: "Plans starting from $990/month — built for detailers at every stage of growth. No massive upfront costs. No lock-in on starter plans.",
            icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        }
    ]

    const stats = [
        {
            value: "3x",
            label: "Average booking increase",
            sublabel: "for detailing clients in 60 days"
        },
        {
            value: "30",
            label: "First booked lead",
            sublabel: "average time after going live",
            suffix: "Days"
        },
        {
            value: "100",
            label: "Done-for-you",
            sublabel: "we handle everything, you just detail",
            suffix: "%"
        }
    ]

    return (
        <section className="py-20 md:py-28 bg-[#0A192F] relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-full h-full" style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, #ffffff 1px, transparent 1px)`,
                    backgroundSize: '50px 50px'
                }}></div>
            </div>

            {/* Glow Effects */}
            <div className="absolute top-20 right-20 w-80 h-80 bg-[#3498db]/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-20 w-80 h-80 bg-[#f7e022]/10 rounded-full blur-3xl"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Section Header - White version */}
                <div className="text-center mb-16 md:mb-20">
                    <div className="inline-block mb-4">
                        <div className="flex items-center gap-3">
                            <div className="h-px w-8 bg-gradient-to-r from-transparent to-[#3498db]"></div>
                            <span className="text-[#3498db] font-bold text-sm uppercase tracking-[0.2em]">Why Choose Us</span>
                            <div className="h-px w-8 bg-gradient-to-l from-transparent to-[#3498db]"></div>
                        </div>
                    </div>

                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                        We Don&apos;t Just Run Ads.{' '}
                        <span className="relative inline-block">
                            <span className="relative z-10 text-[#3498db]">We Build the Entire System</span>
                            <svg className="absolute bottom-0 left-0 w-full h-3 -z-0" viewBox="0 0 200 10" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 5 Q 50 10 100 5 Q 150 0 200 5" stroke="#f7e022" strokeWidth="3" fill="none" strokeLinecap="round" />
                            </svg>
                        </span>
                        <br />
                        That Keeps Your Calendar Full.
                    </h2>

                    <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                        Most marketing agencies hand you a report and call it a day. We build, manage, and optimize every piece
                        of your marketing — from the first ad impression to the booked appointment.
                    </p>
                </div>

                {/* Differentiators Grid - Split Layout */}
                <div className="grid lg:grid-cols-2 gap-6 mb-20">
                    {/* Left Column - 3 cards */}
                    <div className="space-y-6">
                        {differentiators.slice(0, 3).map((item, idx) => (
                            <div key={idx} className="group bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-[#3498db]/50 transition-all duration-300 hover:bg-white/10">
                                <div className="flex items-start gap-4">
                                    {/* Icon */}
                                    <div className="flex-shrink-0">
                                        <div className="w-14 h-14 bg-gradient-to-br from-[#3498db]/20 to-[#f7e022]/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                            <svg className="w-7 h-7 text-[#3498db]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                                            </svg>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold text-white mb-2">
                                            {item.title}
                                        </h3>
                                        <p className="text-gray-300 text-sm leading-relaxed">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right Column - 3 cards */}
                    <div className="space-y-6">
                        {differentiators.slice(3, 6).map((item, idx) => (
                            <div key={idx} className="group bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-[#3498db]/50 transition-all duration-300 hover:bg-white/10">
                                <div className="flex items-start gap-4">
                                    {/* Icon */}
                                    <div className="flex-shrink-0">
                                        <div className="w-14 h-14 bg-gradient-to-br from-[#3498db]/20 to-[#f7e022]/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                            <svg className="w-7 h-7 text-[#3498db]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                                            </svg>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold text-white mb-2">
                                            {item.title}
                                        </h3>
                                        <p className="text-gray-300 text-sm leading-relaxed">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Stats Bar - Sleek Redesign */}
                <div className="max-w-4xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-0 md:divide-x divide-gray-200">
                        {stats.map((stat, idx) => (
                            <div key={idx} className="text-center px-6 py-4">
                                {/* Value */}
                                <div className="text-4xl md:text-5xl font-light text-[#3498db] mb-1">
                                    {stat.value}{stat.suffix && <span className="text-xl md:text-2xl text-gray-400"> {stat.suffix}</span>}
                                </div>

                                {/* Label */}
                                <div className="text-gray-400 font-medium text-sm mb-1">
                                    {stat.label}
                                </div>

                                {/* Sublabel */}
                                <div className="text-gray-200 text-xs">
                                    {stat.sublabel}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom Trust Badge */}
                <div className="mt-12 text-center">
                    <div className="inline-flex items-center gap-4 px-6 py-3 bg-white/5 backdrop-blur-sm rounded-full border border-white/10">
                        <div className="flex gap-1">
                            <span className="w-1.5 h-1.5 bg-[#f7e022] rounded-full animate-pulse"></span>
                            <span className="w-1.5 h-1.5 bg-[#3498db] rounded-full animate-pulse delay-100"></span>
                            <span className="w-1.5 h-1.5 bg-[#f7e022] rounded-full animate-pulse delay-200"></span>
                        </div>
                        <span className="text-gray-300 text-sm font-medium">Trusted by detailing businesses across the USA</span>
                        <div className="flex gap-1">
                            <span className="w-1.5 h-1.5 bg-[#3498db] rounded-full animate-pulse delay-300"></span>
                            <span className="w-1.5 h-1.5 bg-[#f7e022] rounded-full animate-pulse delay-400"></span>
                            <span className="w-1.5 h-1.5 bg-[#3498db] rounded-full animate-pulse delay-500"></span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}