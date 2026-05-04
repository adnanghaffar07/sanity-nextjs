type Testimonial = {
    name: string;
    title: string;
    company: string;
    quote: string;
};

const testimonials: Testimonial[] = [
    {
        name: "Colin Lyons",
        title: "CEO",
        company: "Lyons Landscaping",
        quote:
            "I was skeptical about AI until I heard it speak at Dan Martell's event. The conversation was so realistic, I knew right then we needed this. It's completely transformed how we handle customer service - our staff is freed up and customers are finally getting the attention they deserve.",
    },
    {
        name: "Alex Marroquin",
        title: "Partner",
        company: "Institute of AI",
        quote:
            "Atlas brings the best of both worlds, not just saving up to 70% in costs, but actually improving service and solving the constant challenge of sales capacity and redundancy. It's not just cheaper, it's better.",
    },
    {
        name: "Landon Middleton",
        title: "Founder",
        company: "DBSadvantage",
        quote:
            "We're seeing 75 to 85% connection rates and 30% engagement. That becomes predictable, duplicatable, and scalable. We're literally making calls faster than we've ever been able to. Period.",
    },
    {
        name: "Jonathan Keim",
        title: "Partner",
        company: "Robbins-Madanes Training",
        quote:
            "I've been blown away by the customer service and support we've received. They focus on client success, not policies. It's been a strong long-term partnership.",
    },
    {
        name: "Eliza Fernandes",
        title: "Founder",
        company: "EMDR Trauma Therapy Center",
        quote:
            "I was concerned about privacy laws and sensitive calls. The Atlas team worked with us through every refinement. Now our clients can reach us 24/7 safely.",
    },
    {
        name: "Steve Schock",
        title: "Founder",
        company: "Steve Schock Construction Company",
        quote:
            "Contractors don't call back. Now every lead gets a call within 30 seconds. Nobody is left behind anymore.",
    },
];

export default function TrustedBySection() {
    return (
        <section className="py-10 md:py-20 bg-gray-400/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header - Matching previous style */}
                <div className="text-center mb-12 md:mb-16">                  
                    <h2 className="text-2xl md:text-4xl font-bold text-[#0c1224] mb-6 leading-[1.2] tracking-tight">
                        Trusted by 15,000+{' '}
                        <span className="relative inline-block">
                            <span className="relative z-10 text-[#3498db]">Service Businesses</span>
                            <svg className="absolute bottom-1 left-0 w-full h-4 -z-0" viewBox="0 0 200 10" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 5 Q 50 10 100 5 Q 150 0 200 5" stroke="#f7e022" strokeWidth="4" fill="none" strokeLinecap="round"/>
                            </svg>
                        </span>
                        <span className="block mt-2">Across North America</span>
                    </h2>
                </div>

                {/* Testimonials Grid - Enhanced card styling */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7 lg:gap-8 mb-16 md:mb-20 max-w-5xl mx-auto">
                    {testimonials.map((t, i) => (
                        <div
                            key={i}
                            className="group relative bg-white rounded-2xl p-7 transition-all duration-500 hover:shadow-2xl border border-gray-100 hover:border-gray-200 overflow-hidden"
                        >
                            {/* Gradient bar at top - matching previous style */}
                            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#3498db] via-[#f7e022] to-[#3498db] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
                            
                            {/* Header with avatar - enhanced */}
                            <div className="relative mb-7 flex items-start justify-between gap-3">
                                <div className="min-w-0 flex-1">
                                    <p className="text-base font-bold text-[#0c1224] mb-1 leading-tight group-hover:text-[#3498db] transition-colors duration-300">
                                        <span className="text-[#3498db] mr-1 text-2xl">❝</span>
                                        {t.name}
                                    </p>
                                    <p className="text-sm font-semibold italic text-[#1e2c58]">
                                        {t.title}, {t.company}
                                    </p>
                                </div>
                                
                                {/* Avatar - enhanced styling */}
                                <div className="relative">
                                    <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-gradient-to-br from-[#3498db] to-[#4b2d85] text-base font-bold text-white shadow-md group-hover:scale-110 transition-transform duration-300">
                                        {t.name
                                            .split(" ")
                                            .map((name) => name[0])
                                            .join("")
                                            .slice(0, 2)}
                                    </div>
                                    {/* Decorative dot */}
                                    <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-[#f7e022] rounded-full border-2 border-white"></div>
                                </div>
                            </div>

                            {/* Quote text - improved typography */}
                            <p className="text-gray-600 text-sm leading-[1.85]">
                                {t.quote}
                            </p>
                            
                            {/* Decorative dots at bottom right - matching previous style */}
                            <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-2 group-hover:translate-x-0">
                                <svg className="w-6 h-6 text-[#3498db]/20" fill="currentColor" viewBox="0 0 24 24">
                                    <circle cx="5" cy="5" r="2" />
                                    <circle cx="12" cy="5" r="2" />
                                    <circle cx="19" cy="5" r="2" />
                                    <circle cx="5" cy="12" r="2" />
                                    <circle cx="12" cy="12" r="2" />
                                    <circle cx="19" cy="12" r="2" />
                                </svg>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Video Section - Enhanced with styling */}
                <div className="relative mb-16 md:mb-20">
                    {/* Background decoration */}
                    <div className="absolute inset-0 flex justify-center items-center">
                        <div className="w-64 h-64 bg-[#3498db]/5 rounded-full blur-3xl animate-pulse"></div>
                    </div>
                    
                    <div className="relative text-center">
                        <div className="max-w-4xl mx-auto">
                                                    
                            <h3 className="text-2xl md:text-3xl font-bold text-[#0c1224] mb-12 leading-[1.2] tracking-tight">
                                How Dan Martell Uses These{' '}
                                <span className="relative inline-block">
                                    <span className="relative z-10 text-[#3498db]">AI Sales Agents</span>
                                    <svg className="absolute bottom-1 left-0 w-full h-3 -z-0" viewBox="0 0 200 10" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 5 Q 50 10 100 5 Q 150 0 200 5" stroke="#f7e022" strokeWidth="3" fill="none" strokeLinecap="round"/>
                                    </svg>
                                </span>
                                <span className="block mt-2">Inside His Businesses</span>
                            </h3>
                            
                            {/* Video container - enhanced */}
                            <div className="relative mx-auto w-full max-w-2xl overflow-hidden">
                                <div className="aspect-video w-full bg-black">
                                    <iframe
                                        className="h-full w-full"
                                        src="https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0"
                                        title="AI Agent Demo Video"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* CTA Button Section - Enhanced with previous styling */}
                <div className="relative text-center">
                    {/* Background decoration */}
                    <div className="absolute inset-0 flex justify-center items-center">
                        <div className="w-48 h-48 bg-[#f7e022]/10 rounded-full blur-3xl"></div>
                    </div>
                    
                    <div className="relative">                        
                        {/* Button - enhanced with gradient and animations */}
                        <button
                            type="button"
                            data-open-ai-form="true"
                            className="group relative inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#3498db] to-[#4b2d85] px-8 py-4 text-xl md:text-2xl font-bold tracking-wide text-white uppercase shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-105 active:scale-95 max-md:text-lg"
                        >
                            {/* Shine effect */}
                            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                            
                            <img src="/headphone.png" alt="headphone icon" className="h-8 w-8 md:h-10 md:w-10 filter brightness-0 invert" />
                            <span className="relative">TEST THE AGENT NOW</span>
                            
                            {/* Arrow icon */}
                            <svg className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}