import Image from "next/image";

export default function HeroSection() {
    return (
        <section className="w-full overflow-hidden bg-white mt-24">
            <div className="mx-auto max-w-6xl px-6 py-14 text-center md:py-16 ">
                <p className="text-[12px] font-semibold tracking-wide text-[#2f3e67] uppercase md:text-[16px]">
                    For Service Businesses to Stop Paying Headcount That Underperforms
                </p>

                <h1 className="mx-auto mt-8 max-w-5xl text-[32px] font-semibold leading-[1.16] text-gray-900 max-md:text-[20px]">
                    Hire an{" "}
                    <span className="text-[#3498db] underline decoration-[#3498db] underline-offset-2">
                        AI Agent
                    </span>{" "}
                    That Is Contractually Tied to Your Results                </h1>

                <p className="mx-auto mt-10 max-w-5xl text-[20px] font-semibold leading-[1.45] text-gray-700 max-md:text-[16px]">

                    Every missed call is a job booked by your competitors. Most small services businesses losses 30-40% of inbound leads before anyone picks up. Get a fully custom AI sales agent,  trained on your business, integrated into your business, and guaranteed to perform.
                  
                </p>

                {/* CTA Button Section - Enhanced with previous styling */}
                <div className="relative text-center">
                    {/* Background decoration */}
                    <div className="absolute inset-0 flex justify-center items-center">
                        <div className="w-48 h-48 bg-[#f7e022]/10 rounded-full blur-3xl"></div>
                    </div>

                    <div className="relative pt-16">
                        {/* Button - enhanced with gradient and animations */}
                        <button
                            type="button"
                            data-open-ai-form="true"
                            className="group relative inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#3498db] to-[#4b2d85] px-8 py-4 text-xl md:text-2xl font-bold tracking-wide text-white uppercase shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-105 active:scale-95 max-md:text-lg"
                        >
                            {/* Shine effect */}
                            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

                            <img src="/headphone.png" alt="headphone icon" className="h-8 w-8 md:h-10 md:w-10 filter brightness-0 invert" />
                            <span className="relative">Talk to AI Recipient</span>

                            {/* Arrow icon */}
                            <svg className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </button>
                    </div>
                </div>

                <div className="mt-14">
                    <Image
                        src="/ai-flow.png"
                        alt="AI automation flow"
                        width={1200}
                        height={500}
                        className="mx-auto w-full max-w-5xl rounded-none border-0"
                        priority
                    />
                </div>
            </div>
        </section>
    );
}