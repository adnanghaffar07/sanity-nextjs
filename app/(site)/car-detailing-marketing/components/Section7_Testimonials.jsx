import React from 'react'

export default function Section7_Testimonials() {
    const testimonials = [
        {
            name: "James R.",
            role: "Car detailing business owner",
            location: "Chicago, IL",
            rating: 5,
            quote: "Before CodeAutomation.ai, I was relying entirely on word-of-mouth and had maybe 2–3 bookings a week. Within 6 weeks of going live with their Meta Ads and Google setup, I was fully booked. The automated follow-up system alone saved me hours every week.",
            image: "https://ui-avatars.com/api/?background=3498db&color=fff&name=James+R"
        },
        {
            name: "Marcus T.",
            role: "Ceramic coating specialist",
            location: "Dallas, TX",
            rating: 5,
            quote: "I had tried running Facebook Ads myself and wasted $800 with zero results. CodeAutomation.ai took over and within the first month we had 14 new ceramic coating leads. The before/after video ads they created were exactly what I needed.",
            image: "https://ui-avatars.com/api/?background=3498db&color=fff&name=Marcus+T"
        },
        {
            name: "Darnell W.",
            role: "Mobile detailer",
            location: "Miami, FL",
            rating: 5,
            quote: "The GHL CRM setup was a game changer. Every lead now gets a text automatically within 2 minutes. My close rate went from maybe 20% to over 60% just from that one system. Absolutely worth every penny.",
            image: "https://ui-avatars.com/api/?background=3498db&color=fff&name=Darnell+W"
        }
    ]

    const resultStats = [
        {
            value: "$4k → $18k",
            label: "Monthly revenue growth",
            sublabel: "for a detailing client in 90 days"
        },
        {
            value: "94",
            label: "Leads Generated",
            sublabel: "for a ceramic coating client in 6 weeks via Meta Ads",
            suffix: "Leads"
        },
        {
            value: "3x",
            label: "Bookings Increase",
            sublabel: "Average booking increase within the first 60 days of going live"
        }
    ]

    return (
        <section id='testimonials' className="py-20 md:py-28 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Header */}
                <div className="text-center mb-12 md:mb-16">
                    <div className="inline-block mb-4">
                        <div className="flex items-center gap-3">
                            <div className="h-px w-8 bg-gradient-to-r from-transparent to-[#3498db]"></div>
                            <span className="text-[#3498db] font-bold text-sm uppercase tracking-[0.2em]">Real Results. Real Detailers.</span>
                            <div className="h-px w-8 bg-gradient-to-l from-transparent to-[#3498db]"></div>
                        </div>
                    </div>

                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                        Detailing Businesses Just Like Yours{' '}
                        <span className="relative inline-block">
                            <span className="relative z-10 text-[#3498db]">Are Getting Booked Solid.</span>
                            <svg className="absolute bottom-0 left-0 w-full h-3 -z-0" viewBox="0 0 200 10" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 5 Q 50 10 100 5 Q 150 0 200 5" stroke="#f7e022" strokeWidth="3" fill="none" strokeLinecap="round" />
                            </svg>
                        </span>
                    </h2>

                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Don&apos;t take our word for it. Here&apos;s what detailing business owners across the USA are saying after working with CodeAutomation.ai.
                    </p>
                </div>

                {/* Testimonials Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
                    {testimonials.map((testimonial, idx) => (
                        <div
                            key={idx}
                            className="group bg-gray-50 rounded-2xl p-6 md:p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                        >
                            {/* Quote Icon */}
                            <div className="mb-4">
                                <svg className="w-10 h-10 text-[#3498db]/30" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                                </svg>
                            </div>

                            {/* Star Rating */}
                            <div className="flex gap-1 mb-4">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <svg key={i} className="w-5 h-5 text-[#f7e022]" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>

                            {/* Quote */}
                            <p className="text-gray-700 leading-relaxed mb-6">
                                &quot;{testimonial.quote}&quot;
                            </p>

                            {/* Divider */}
                            <div className="w-12 h-0.5 bg-gradient-to-r from-[#3498db] to-[#f7e022] mb-4"></div>

                            {/* Author */}
                            <div className="flex items-center gap-3">
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="w-10 h-10 rounded-full"
                                />
                                <div>
                                    <div className="font-bold text-gray-900">
                                        {testimonial.name}
                                    </div>
                                    <div className="text-sm text-gray-500">
                                        {testimonial.role} — {testimonial.location}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Results Stats Bar */}
                <div className="bg-gradient-to-r from-[#0A192F] to-[#0A192F]/95 rounded-2xl py-10 px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {resultStats.map((stat, idx) => (
                            <div key={idx} className="text-center group">
                                {/* Value */}
                                <div className="text-3xl md:text-4xl lg:text-5xl font-black text-[#f7e022] mb-2">
                                    {stat.value}{stat.suffix && <span className="text-xl md:text-2xl text-[#f7e022]/70"> {stat.suffix}</span>}
                                </div>

                                {/* Label */}
                                <div className="text-white font-bold text-base mb-1">
                                    {stat.label}
                                </div>

                                {/* Sublabel */}
                                <div className="text-gray-400 text-sm">
                                    {stat.sublabel}
                                </div>

                                {/* Subtle accent line on hover */}
                                <div className="w-0 h-0.5 bg-[#f7e022] mx-auto mt-3 group-hover:w-12 transition-all duration-300"></div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Trust Badge */}
                <div className="mt-8 text-center">
                    <div className="inline-flex items-center gap-2 text-sm text-gray-500">
                        <span className="w-1.5 h-1.5 bg-[#f7e022] rounded-full"></span>
                        <span>Join 100+ satisfied detailing business owners</span>
                        <span className="w-1.5 h-1.5 bg-[#3498db] rounded-full"></span>
                    </div>
                </div>
            </div>
        </section>
    )
}