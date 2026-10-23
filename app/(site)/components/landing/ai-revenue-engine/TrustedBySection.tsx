import Image from "next/image";
import headphoneImg from "@/public/headphone.png";
type Testimonial = {
    name: string;
    title: string;
    company: string;
    quote: string;
};

const testimonials: Testimonial[] = [
    {
        name: "Irv Shapiro",
        title: "Founder & CTO",
        company: "MakeWithTech",
        quote: "The tests supported our rapid feature deployment processes. CodeAutomation.ai saved us hours of manual and expensive testing with just 5-10 minutes of automated tests. Their flexibility and workflow impressed us greatly.",
    },
    {
        name: "Randy Narciso",
        title: "VP of Product Innovation",
        company: "College Planning Experts",
        quote: "They are very well-versed in technology and able to explain difficult concepts with sound recommendations. They went above and beyond to ensure our satisfaction with the automated calling system and API integrations.",
    },
    {
        name: "Kris Keyton",
        title: "President",
        company: "Electronic Monitoring Company",
        quote: "They have great knowledge about development and testing. Their management and collaborative skills were remarkable. The team was highly responsive to our requirements and delivered great work that met our expectations.",
    },
    {
        name: "Bindu Reddy",
        title: "CEO",
        company: "Abacus.AI",
        quote: "They're responsive. The team did exactly what they were hired to do in a timely manner and impressed us with their responsiveness.",
    },
    {
        name: "Washington Leon-Jordan",
        title: "VP of Engineering",
        company: "innRoad",
        quote: "The quality of their work and ability to grow is impressive. They were willing to jump in on last-minute emergencies and provided high-quality work.",
    },
];

export default function TrustedBySection() {
    return (
        <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Alternative Layout 1: Left-Right Split for Header */}
                <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-6">
                    <div className="lg:max-w-2xl">
                        <div className="inline-flex items-center gap-2 text-sm text-[#3498db] mb-4">
                            <span className="w-8 h-px bg-[#3498db]"></span>
                            <span>Social Proof</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl text-gray-900 font-light leading-tight">
                            Trusted by{' '}
                            <span className="font-medium text-[#3498db]">15,000+</span>
                            <br />
                            service businesses
                            <span className="text-gray-400"> across America</span>
                        </h2>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400 text-sm">
                        <span>Real reviews from real founders</span>
                    </div>
                </div>

                {/* Alternative Layout 2: Carousel-style Grid with Alternating Cards */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
                    {/* Featured testimonial - larger */}
                    <div className="lg:row-span-2 bg-gradient-to-br from-[#3498db] to-[#4b2d85] rounded-2xl p-8 text-white relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
                        <div className="relative z-10">
                            <div className="text-6xl mb-4 opacity-50">&quot;</div>
                            <p className="text-lg leading-relaxed mb-6">
                                {testimonials[0].quote}
                            </p>
                            <div>
                                <p className="font-medium text-lg">{testimonials[0].name}</p>
                                <p className="text-sm opacity-80">{testimonials[0].title}, {testimonials[0].company}</p>
                            </div>
                        </div>
                    </div>

                    {/* Regular testimonials */}
                    {testimonials.slice(1, 4).map((t, i) => (
                        <div key={i} className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-shadow">
                            <div className="flex items-start gap-4 mb-4">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center text-gray-600 text-sm font-medium">
                                    {t.name.split(" ").map(n => n[0]).join("")}
                                </div>
                                <div>
                                    <p className="font-medium text-gray-900">{t.name}</p>
                                    <p className="text-xs text-gray-500">{t.title}, {t.company}</p>
                                </div>
                            </div>
                            <p className="text-gray-600 text-sm leading-relaxed">{t.quote}</p>
                        </div>
                    ))}

                    {/* Remaining testimonials */}
                    {testimonials.slice(4, 6).map((t, i) => (
                        <div key={i} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                            <div className="flex items-start gap-4 mb-4">
                                <div className="w-10 h-10 rounded-full bg-[#3498db]/10 flex items-center justify-center text-[#3498db] text-sm font-medium">
                                    {t.name.split(" ").map(n => n[0]).join("")}
                                </div>
                                <div>
                                    <p className="font-medium text-gray-900">{t.name}</p>
                                    <p className="text-xs text-gray-500">{t.title}, {t.company}</p>
                                </div>
                            </div>
                            <p className="text-gray-600 text-sm leading-relaxed">{t.quote}</p>
                        </div>
                    ))}
                </div>

                {/* Alternative Layout 3: Video Section as a Story Card */}
           

                {/* Alternative Layout 4: Minimal CTA Section */}
                <div className="text-center">
                    {/* Horizontal rule with text */}
                    <div className="relative mb-8">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-200"></div>
                        </div>
                        <div className="relative flex justify-center">
                            <span className="bg-white px-4 text-xs text-gray-400">ready to scale?</span>
                        </div>
                    </div>
                    <button
                        type="button"
                        data-open-ai-form="true"
                        className="group inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[#3498db] to-[#4b2d85] px-6 py-3 text-sm text-white shadow-md hover:shadow-lg transition-all duration-300 hover:brightness-105"
                    >
                        <Image src={headphoneImg} alt="headphone" className="h-4 w-4 filter brightness-0 invert" />
                        <span>Talk to AI Recipient</span>
                        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
}