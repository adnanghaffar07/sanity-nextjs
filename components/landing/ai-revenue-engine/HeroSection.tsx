import headphoneImg from "@/public/headphone.png";
import Image from "next/image";

export default function HeroSection() {
    return (
        <section className="w-full overflow-hidden bg-white mt-[120px] md:mt-[160px]">
            {/* Split layout - Left content, Right visual */}
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                    {/* LEFT COLUMN - Text Content */}
                    <div className="text-left lg:pr-8">
                        {/* Badge */}
                        <div className="inline-flex items-center rounded-full bg-amber-50/60 px-4 py-1.5 mb-8">
                            <span className="text-xs text-[#2f3e67]/80 tracking-wide">
                                For Service Businesses to Stop Paying Headcount That Underperforms
                            </span>
                        </div>

                        {/* Heading */}
                        <h1 className="text-3xl sm:text-4xl md:text-5xl leading-tight text-gray-900 font-light tracking-tight">
                            Hire an{" "}
                            <span className="relative inline-block">
                                <span className="relative bg-gradient-to-r from-[#3498db] to-[#4b2d85] bg-clip-text text-transparent font-medium">
                                    AI Agent
                                </span>
                            </span>
                            <br />
                            <span className="text-2xl sm:text-3xl md:text-4xl font-normal text-gray-800">
                                That Is Contractually Tied to Your Results
                            </span>
                        </h1>

                        {/* Description */}
                        <div className="mt-6 space-y-3">
                            <p className="text-gray-700 leading-relaxed text-base">
                                Every missed call is a job booked by your competitors. Most small services businesses lose 30-40% of inbound leads before anyone picks up.
                            </p>
                            <p className="text-gray-500 leading-relaxed text-sm">
                                Get a fully custom AI sales agent, trained on your business, integrated into your systems, and guaranteed to perform.
                            </p>
                        </div>

                        {/* CTA Buttons - Side by side */}
                        <div className="mt-8 flex flex-col sm:flex-row gap-3">
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

                            {/* <button className="group inline-flex items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white px-6 py-3 text-sm text-gray-600 hover:border-[#3498db] hover:text-[#3498db] transition-all duration-300">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span>Watch Demo</span>
                            </button> */}
                        </div>

                        {/* Trust indicator */}
                        <div className="mt-8 flex items-center gap-3 text-xs text-gray-400">
                            <span>Trusted by 500+ service businesses</span>
                        </div>
                    </div>

                    {/* RIGHT COLUMN - Visual/Image */}
                    <div className="relative">
                                    {/* Image card with shadow */}
                        <div className="relative p-3 bg-white">
                            <div className="relative rounded-lg overflow-hidden">
                                <Image
                                    src="/ai-flow.png"
                                    alt="AI automation flow"
                                    width={600}
                                    height={500}
                                    className="w-full h-[500px] object-contain"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Full width stats bar */}
            <div className="mt-16 bg-gray-50/80 border-t border-gray-100 py-6">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-3 md:grid-cols-3 gap-6 text-center">
                        <div>
                            <div className="text-2xl text-[#3498db] font-light">30-40%</div>
                            <div className="text-xs text-gray-500 mt-1">Lost Leads Recovered</div>
                        </div>
                        <div>
                            <div className="text-2xl text-[#3498db] font-light">24/7</div>
                            <div className="text-xs text-gray-500 mt-1">Instant Response</div>
                        </div>
                        <div>
                            <div className="text-2xl text-[#3498db] font-light">100%</div>
                            <div className="text-xs text-gray-500 mt-1">Performance Guarantee</div>
                        </div>
                        {/* <div>
                            <div className="text-2xl text-[#3498db] font-light">$0</div>
                            <div className="text-xs text-gray-500 mt-1">Setup Fee</div>
                        </div> */}
                    </div>
                </div>
            </div>
        </section>
    );
}