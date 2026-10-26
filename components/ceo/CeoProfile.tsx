import Image from "next/image";
import { FaBrain, FaBriefcase, FaCode, FaCogs, FaEnvelope, FaLinkedin, FaMapMarkerAlt } from "react-icons/fa";

// Bio, photo, stats and media mentions at the top of the page.
export default function CeoProfile() {
  return (
    <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
                {/* Left Column - Text Content */}
                <div className="lg:w-1/2">
                    {/* Title and Badge */}
                    <div className="mb-8">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-6">
                            <FaBriefcase className="text-blue-600" />
                            <span className="text-sm font-medium text-blue-700">Founder & CEO</span>
                        </div>

                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gray-900">
                            Adnan <span className="text-blue-600">Ghaffar</span>
                        </h2>

                        <h2 className="text-xl md:text-2xl text-gray-700 mb-6">
                            Founder and CEO of <span className="font-semibold text-blue-700">CodeAutomation</span>
                        </h2>

                        {/* Location */}
                        <div className="flex items-center gap-3 text-gray-600 mb-8">
                            <div className="flex items-center">
                                <FaMapMarkerAlt className="text-blue-500 mr-2" />
                                <span className="text-md">Chicago, Illinois, USA</span>
                            </div>
                        </div>
                    </div>

                    {/* Biography */}
                    <div className="space-y-6 mb-10">
                        <p className="text-lg leading-relaxed text-gray-700">
                            Adnan Ghaffar is the Founder and CEO of CodeAutomation, a US-based AI software development
                            and business automation company headquartered in Chicago, Illinois.
                        </p>

                        <div className="bg-blue-50 border-l-4 border-blue-500 pl-6 py-4 rounded-r-lg">
                            <p className="leading-relaxed text-gray-800">
                                With <span className="font-semibold text-blue-700">more than 10 years</span> of hands-on
                                experience in AI software development, full-stack engineering, and enterprise automation,
                                Adnan helps organizations design and implement technology that delivers long-term business value.
                            </p>
                        </div>

                        <p className="text-lg leading-relaxed text-gray-700">
                            His work focuses on building <span className="font-semibold text-blue-700">production-ready AI systems</span>,
                            scalable automation platforms, and reliable software applications that align with real operational
                            needs and measurable outcomes.
                        </p>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-4">
                        <a
                            href="https://www.linkedin.com/in/adnanghaffar007/"
                            className="group inline-flex items-center gap-3 px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 shadow-sm hover:shadow"
                        >
                            <FaLinkedin className="text-lg" />
                            Connect on LinkedIn
                            <span className="group-hover:translate-x-1 transition-transform">→</span>
                        </a>

                        <a
                            href="mailto:adnan@codeautomation.dev"
                            className="group inline-flex items-center gap-3 px-6 py-3 bg-white border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300"
                        >
                            <FaEnvelope className="text-lg" />
                            Contact CEO
                            <span className="group-hover:translate-x-1 transition-transform">→</span>
                        </a>
                    </div>

                    {/* Quick Stats */}
                    <div className="mt-12 pt-8 border-t border-gray-200">
                        <div className="grid grid-cols-3 gap-4">
                            <div className="text-center">
                                <div className="text-2xl font-bold text-blue-600">10+</div>
                                <div className="text-sm text-gray-600">Years Experience</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-blue-600">50+</div>
                                <div className="text-sm text-gray-600">Projects</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-blue-600">20+</div>
                                <div className="text-sm text-gray-600">Research Papers</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column - Circular CEO Image */}
                <div className="lg:w-1/2">
                    <div className="relative w-full max-w-xl mx-auto">
                        {/* Circular Image Container */}
                        <div className="relative">
                            {/* Glow Effect */}
                            <div className="absolute inset-0 bg-blue-200 rounded-full blur-xl opacity-30"></div>

                            {/* Main Circular Image */}
                            <div className="relative w-80 h-80 mx-auto rounded-full border-8 border-white shadow-2xl overflow-hidden bg-gradient-to-br from-blue-50 to-gray-100">
                                {/* Next.js Image Component - Circular Fill */}
                                <div className="relative w-full h-full">
                                    <Image
                                        src="/ceo-adnan.png"
                                        alt="Adnan Ghaffar - CEO of CodeAutomation"
                                        fill
                                        className="object-cover rounded-full"
                                        priority
                                        sizes="(max-width: 768px) 100vw, 320px"
                                    />
                                </div>
                            </div>

                            {/* Status Indicator */}
                            <div className="absolute bottom-24 right-8">
                                <div className="flex items-center gap-2 px-4 py-2 bg-green-50 rounded-full border border-green-100 shadow-lg">
                                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                    <span className="text-sm font-medium text-green-700">Active Leader</span>
                                </div>
                            </div>

                            {/* Experience Badge */}
                            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
                                <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-xl shadow-2xl">
                                    <div className="text-center">
                                        <div className="text-3xl font-bold">10+</div>
                                        <div className="text-sm opacity-90">Years Experience</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Tech Stack Indicators */}
                        <div className="mt-20 flex flex-wrap justify-center gap-4">
                            <div className="px-4 py-3 bg-blue-50 rounded-xl border border-blue-100 shadow-sm">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                                        <FaBrain className="text-blue-600" />
                                    </div>
                                    <div>
                                        <div className="font-medium text-gray-900">AI Development</div>
                                        <div className="text-sm text-gray-600">Expert</div>
                                    </div>
                                </div>
                            </div>

                            <div className="px-4 py-3 bg-blue-50 rounded-xl border border-blue-100 shadow-sm">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                                        <FaCode className="text-blue-600" />
                                    </div>
                                    <div>
                                        <div className="font-medium text-gray-900">Full-Stack</div>
                                        <div className="text-sm text-gray-600">Engineering</div>
                                    </div>
                                </div>
                            </div>

                            <div className="px-4 py-3 bg-blue-50 rounded-xl border border-blue-100 shadow-sm">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                                        <FaCogs className="text-blue-600" />
                                    </div>
                                    <div>
                                        <div className="font-medium text-gray-900">Automation</div>
                                        <div className="text-sm text-gray-600">Specialist</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Media Recognition */}
                        <div className="mt-8 p-6 bg-gradient-to-r from-gray-50 to-white rounded-2xl border border-gray-200 shadow-sm">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <FaCogs className="text-red-600 text-xl" />
                                </div>
                                <div>
                                    <div className="font-bold text-gray-900">Featured in Forbes</div>
                                    <div className="text-sm text-gray-600">AI Business Transformation Expert</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}
