"use client"
import React, { useState } from 'react'

export default function Section6_Pricing() {
    const [billingCycle, setBillingCycle] = useState('monthly')

    const plans = [
        {
            name: "Starter",
            price: "$990",
            period: "/month",
            contract: "1–3 months",
            onboarding: "$299 one-time",
            adSpend: "$500/month recommended",
            featured: false,
            buttonText: "Get Started",
            buttonVariant: "outline",
            features: [
                "Google Business Profile setup & optimization",
                "Meta Ads management — ceramic + full detail campaigns",
                "Ad creative design — Canva + CapCut",
                "GHL CRM setup — sub-account + pipeline",
                "Basic automation — lead follow-up sequence",
                "4 social media posts/month (Canva creatives)",
                "Monthly performance report"
            ]
        },
        {
            name: "Growth",
            price: "$1,990",
            period: "/month",
            contract: "6 months",
            onboarding: "Waived",
            adSpend: "$1,000/month recommended",
            featured: true,
            badge: "MOST POPULAR",
            buttonText: "Get Started",
            buttonVariant: "primary",
            features: [
                "Everything in Starter, plus:",
                "Google Ads + LSAs setup & management",
                "AI voiceovers for video ads via ElevenLabs",
                "Mobile-first website design (service pages + booking)",
                "8 social media posts/month + 2 Reels",
                "Review request automation (SMS/email)",
                "Lead management — scanning, follow-ups, tracking",
                "Bi-weekly performance report",
                "Monthly strategy call with account manager",
                "Seasonal campaigns — winter protection, summer packages"
            ]
        },
        {
            name: "Elite",
            price: "$2,990",
            period: "/month",
            contract: "12 months",
            onboarding: "Waived",
            adSpend: "$2,000/month recommended",
            featured: false,
            buttonText: "Get Started",
            buttonVariant: "outline",
            features: [
                "Everything in Growth, plus:",
                "Local SEO — keyword targeting, on-page optimization",
                "Full GHL automation — nurture, reminders, rebooking",
                "12 social posts/month + 4 Reels + 2 TikToks",
                "Full CRM database reactivation campaigns",
                "Weekly performance report",
                "Bi-weekly strategy calls — dedicated account manager",
                "Priority support — 24hr response guarantee",
                "Free web maintenance service (first 6 months)"
            ]
        }
    ]

    const addOns = [
        { name: "Google Ads / LSA Management", price: "+$299", period: "/month" },
        { name: "Meta Ads (additional campaign)", price: "+$230", period: "/month" },
        { name: "Extra Reels / TikToks", price: "+$99", period: "/month" },
        { name: "YouTube Ads", price: "+$250", period: "/month" }
    ]

    const oneTimeFees = [
        { name: "GHL CRM Full Setup", price: "$299" },
        { name: "Website Design", price: "$799 – $1,499" },
        { name: "Mobile App Development", price: "$799 – $1,499" },
        { name: "Google Business Profile Setup", price: "$199" },
        { name: "Meta Ads Account Setup", price: "$199" }
    ]

    const customServices = [
        { name: "Google Business Profile management", price: "$190" },
        { name: "NAP consistency & directory listings", price: "$90" },
        { name: "Meta Ads management (1 campaign)", price: "$190" },
        { name: "Meta Ads management (2 campaigns)", price: "$350" },
        { name: "Ad creative design (Canva/CapCut)", price: "$90" },
        { name: "AI voiceover ads (ElevenLabs)", price: "$150" },
        { name: "GHL CRM setup & automation", price: "$290" },
        { name: "Lead management & follow-ups", price: "$190" },
        { name: "Review collection automation", price: "$90" },
        { name: "Social media posts (4/month)", price: "$240" },
        { name: "Social media posts (8/month)", price: "$480" },
        { name: "Reels / TikToks (2/month)", price: "$140" },
        { name: "Reels / TikToks (4/month)", price: "$280" },
        { name: "Google Ads / LSA management", price: "$390" },
        { name: "Local SEO optimization", price: "$290" },
        { name: "Database reactivation campaigns", price: "$190" },
        { name: "Monthly performance report", price: "$90" },
        { name: "Monthly strategy call", price: "$90" }
    ]

    return (
        <section id='pricing' className="py-20 md:py-28 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Header */}
                <div className="text-center mb-12 md:mb-16">
                    <div className="inline-block mb-4">
                        <div className="flex items-center gap-3">
                            <div className="h-px w-8 bg-gradient-to-r from-transparent to-[#3498db]"></div>
                            <span className="text-[#3498db] font-bold text-sm uppercase tracking-[0.2em]">Transparent Pricing</span>
                            <div className="h-px w-8 bg-gradient-to-l from-transparent to-[#3498db]"></div>
                        </div>
                    </div>

                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                        Simple, Affordable Plans Built for{' '}
                        <span className="relative inline-block">
                            <span className="relative z-10 text-[#3498db]">Car Detailing Businesses</span>
                            <svg className="absolute bottom-0 left-0 w-full h-3 -z-0" viewBox="0 0 200 10" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 5 Q 50 10 100 5 Q 150 0 200 5" stroke="#f7e022" strokeWidth="3" fill="none" strokeLinecap="round" />
                            </svg>
                        </span>
                        <br />
                        at Every Stage.
                    </h2>

                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        No hidden fees. No confusing contracts. Just clear, results-focused marketing plans
                        that fit your budget and grow with your business.
                    </p>
                </div>

                {/* 3 Main Plans Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-16 lg:gap-8 mb-16">
                    {plans.map((plan, idx) => (
                        <div
                            key={idx}
                            className={`relative bg-white rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl ${plan.featured ? 'shadow-lg border-2 border-[#3498db] scale-105' : 'shadow-md border border-gray-100'
                                }`}
                        >
                            {/* Most Popular Badge */}
                            {plan.badge && (
                                <div className="absolute top-0 right-0">
                                    <div className="bg-[#f7e022] text-black text-xs font-bold px-4 py-1 rounded-bl-2xl">
                                        {plan.badge}
                                    </div>
                                </div>
                            )}

                            {/* Plan Header */}
                            <div className={`p-6 text-center ${plan.featured ? 'bg-gradient-to-r from-[#3498db] to-[#3498db]/80 text-white' : 'bg-gray-50'}`}>
                                <h3 className={`text-xl font-bold mb-2 ${plan.featured ? 'text-white' : 'text-gray-900'}`}>
                                    {plan.name}
                                </h3>
                                <div className="text-4xl font-black mb-1">
                                    {plan.price}
                                    <span className={`text-base font-normal ${plan.featured ? 'text-white/80' : 'text-gray-500'}`}>
                                        {plan.period}
                                    </span>
                                </div>
                                <div className={`text-sm ${plan.featured ? 'text-white/80' : 'text-gray-500'}`}>
                                    Contract: {plan.contract}
                                </div>
                            </div>

                            {/* Plan Features */}
                            <div className="p-6">
                                <div className="space-y-3 mb-6">
                                    {plan.features.map((feature, fIdx) => (
                                        <div key={fIdx} className="flex items-start gap-2 text-sm">
                                            <svg className="w-4 h-4 text-[#3498db] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                            <span className="text-gray-600">{feature}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* Onboarding & Ad Spend */}
                                <div className="border-t border-gray-100 pt-4 mb-6">
                                    <div className="text-sm mb-1">
                                        <span className="text-gray-500">Onboarding:</span>
                                        <span className="font-semibold text-gray-900 ml-2">{plan.onboarding}</span>
                                    </div>
                                    <div className="text-sm">
                                        <span className="text-gray-500">Ad spend:</span>
                                        <span className="font-semibold text-gray-900 ml-2">{plan.adSpend}</span>
                                    </div>
                                </div>

                                {/* CTA Button */}
                                <a
                                    href="https://calendly.com/adnanghaffar/30min"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 text-center block ${plan.featured
                                            ? 'bg-[#f7e022] text-black hover:bg-[#f7e022]/90 hover:shadow-lg'
                                            : 'border-2 border-[#3498db] text-[#3498db] hover:bg-[#3498db] hover:text-white'
                                        }`}
                                >
                                    {plan.buttonText} →
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Customized Plan Section */}
                <div className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden mb-16">
                    <div className="bg-gradient-to-r from-[#3498db] to-[#3498db]/80 px-6 py-4">
                        <h3 className="text-xl font-bold text-white text-center">Customized Plan — Pick & Choose</h3>
                    </div>

                    <div className="p-6 md:p-8">
                        <div className="text-center mb-6">
                            <p className="text-gray-600">
                                <span className="font-bold text-[#3498db]">Contract:</span> Up to 12 months |
                                <span className="font-bold text-[#3498db] ml-2">Price:</span> Starts from $99/month
                            </p>
                            <p className="text-gray-500 text-sm mt-2">
                                Only pay for what you actually need. Pick the services that make sense for your detailing business right now —
                                add or remove anytime with 7 days notice.
                            </p>
                        </div>

                        {/* Custom Services Grid */}
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-6">
                            {customServices.map((service, idx) => (
                                <div key={idx} className="flex justify-between items-center py-2 px-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                                    <span className="text-sm text-gray-700">{service.name}</span>
                                    <span className="font-semibold text-[#3498db] text-sm">{service.price}</span>
                                </div>
                            ))}
                        </div>

                        {/* Important Note */}
                        <div className="bg-blue-50 border-l-4 border-[#3498db] p-4 rounded-r-lg">
                            <p className="text-sm text-gray-700">
                                <span className="font-bold">💡 Important:</span> Bundling services into Starter, Growth, or Elite saves you significantly more than picking individually.
                                The Customized Plan is ideal if you only need 1–3 specific services. Need 4 or more? A package will always give you better value.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Add-ons & One-Time Fees */}
                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    {/* Add-ons */}
                    <div className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden">
                        <div className="bg-gray-50 px-6 py-4 border-b border-gray-100">
                            <h3 className="font-bold text-gray-900 text-lg">Add-ons — Bolt onto Any Plan</h3>
                        </div>
                        <div className="p-6">
                            <div className="space-y-3">
                                {addOns.map((addon, idx) => (
                                    <div key={idx} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0">
                                        <span className="text-gray-700">{addon.name}</span>
                                        <span className="font-semibold text-[#3498db]">{addon.price}{addon.period}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* One-Time Setup Fees */}
                    <div className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden">
                        <div className="bg-gray-50 px-6 py-4 border-b border-gray-100">
                            <h3 className="font-bold text-gray-900 text-lg">One-Time Setup Fees</h3>
                        </div>
                        <div className="p-6">
                            <div className="space-y-3">
                                {oneTimeFees.map((fee, idx) => (
                                    <div key={idx} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0">
                                        <span className="text-gray-700">{fee.name}</span>
                                        <span className="font-semibold text-[#3498db]">{fee.price}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Important Disclaimer */}
                <div className="text-center mb-12">
                    <div className="inline-block bg-gray-100 rounded-lg px-6 py-3">
                        <p className="text-sm text-gray-600">
                            <span className="font-bold">⚠️ Important:</span> Ad spend (Meta Ads, Google Ads, YouTube Ads) is paid directly by the client to the platform
                            and is NOT included in any plan price. Our fees cover strategy, setup, and management only.
                        </p>
                    </div>
                </div>

                {/* Final CTA */}
                <div className="text-center">
                    <div className="max-w-2xl mx-auto">
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">
                            Not Sure Which Plan is Right For You?
                        </h3>
                        <p className="text-gray-600 mb-6">
                            Book a free 15-minute strategy call and we&apos;ll recommend the exact plan that fits
                            your business stage and budget — no obligation, no pressure.
                        </p>

                        <a
                            href="https://calendly.com/adnanghaffar/30min"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-[#f7e022] text-black font-bold py-3 px-8 rounded-lg hover:bg-[#f7e022]/90 hover:shadow-lg transition-all duration-300 inline-block"
                        >
                            Book Your Free Strategy Call →
                        </a>

                        <div className="flex flex-wrap justify-center gap-4 mt-6 text-sm text-gray-500">
                            <span>✦ Free call</span>
                            <span>✦ No obligation</span>
                            <span>✦ Affordable plans</span>
                            <span>✦ Results in 30 days</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}