import { FaBalanceScale, FaBullseye, FaEye, FaGlobe, FaHandshake, FaNetworkWired, FaRocket } from "react-icons/fa";
import CeoFaq from "@/components/press/CeoFaq";

// Vision, closing call to action, contact details and FAQ.
export default function CeoVision() {
  return (
    <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
            {/* Vision Section */}
            <div className="max-w-6xl mx-auto mb-20">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-full mb-6">
                        <FaBullseye className="text-xl" />
                        <span className="font-semibold">Founding Vision</span>
                    </div>

                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                        The Vision Behind <span className="text-green-600">CodeAutomation</span>
                    </h2>

                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Transforming powerful technology into real business value
                    </p>
                </div>

                {/* Vision Content */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Column - Vision Statement */}
                    <div>
                        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200 mb-8">
                            <div className="relative mb-8">
                                <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-green-500 to-emerald-500 rounded-full"></div>
                                <div className="ml-6">
                                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                                        Addressing Industry Challenges
                                    </h3>
                                    <p className="text-lg text-gray-700 leading-relaxed">
                                        CodeAutomation was founded to address a recurring industry challenge:
                                        <span className="font-semibold text-green-700"> powerful technology that fails to deliver real value</span> in day-to-day business operations.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Leadership Impact */}
                        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-100">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-14 h-14 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                                    <FaHandshake className="text-2xl text-white" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-gray-900">Responsible Leadership</h4>
                                    <p className="text-gray-600">Guiding ethical AI adoption</p>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <p className="text-gray-700 leading-relaxed">
                                    Under Adnan&apos;s leadership, CodeAutomation helps organizations adopt AI and automation responsibly,
                                    streamline complex systems, and build scalable software solutions without overengineering or unnecessary cost.
                                </p>

                                <div className="flex items-center gap-2 text-green-700">
                                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                    <span className="font-medium">Focus on practical, measurable outcomes</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Vision Visualization */}
                    <div className="relative">
                        {/* Main Vision Card */}
                        <div className="bg-gradient-to-br from-gray-900 to-green-900 rounded-2xl p-8 text-white overflow-hidden relative">
                            {/* Circuit pattern overlay */}
                            <div className="absolute inset-0 opacity-10">
                                <div className="absolute inset-0" style={{
                                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff'/%3E%3C/svg%3E")`
                                }}></div>
                            </div>

                            <div className="relative z-10">
                                <div className="text-center mb-8">
                                    <div className="inline-flex items-center justify-center w-16 h-16 bg-green-500/20 rounded-full mb-4">
                                        <FaRocket className="text-3xl text-green-300" />
                                    </div>
                                    <h3 className="text-2xl font-bold mb-2">Global Impact Today</h3>
                                    <p className="text-green-200">Partnering with organizations worldwide</p>
                                </div>

                                <p className="text-lg text-gray-200 leading-relaxed mb-8 text-center">
                                    Today, the company partners with startups and enterprises across the United States
                                    and globally to deliver end-to-end AI software development, automation services,
                                    and enterprise system integrations.
                                </p>

                                {/* Partnership Metrics */}
                                <div className="grid grid-cols-3 gap-4">
                                    <div className="text-center">
                                        <div className="text-2xl font-bold mb-1">50+</div>
                                        <div className="text-xs text-gray-300">Clients</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-2xl font-bold mb-1">15+</div>
                                        <div className="text-xs text-gray-300">Industries</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-2xl font-bold mb-1">Global</div>
                                        <div className="text-xs text-gray-300">Reach</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Floating Elements */}
                        <div className="absolute -top-6 -right-6 w-24 h-24 bg-green-500/20 rounded-full blur-xl animate-pulse"></div>
                        <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-emerald-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
                    </div>
                </div>
            </div>

            {/* Future Outlook Section */}
            <div className="max-w-4xl mx-auto mt-20">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-100 rounded-full mb-6">
                        <FaEye className="text-blue-600" />
                        <span className="text-sm font-medium text-blue-700">Future Outlook</span>
                    </div>

                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                        Looking <span className="text-blue-600">Ahead</span>
                    </h2>
                </div>

                {/* Future Vision Card */}
                <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg">
                    <div className="max-w-3xl mx-auto">
                        {/* Future Vision Statement */}
                        <div className="mb-10">
                            <p className="text-lg leading-relaxed text-gray-700 mb-8 text-center">
                                Adnan continues to collaborate with clients, research communities, and engineering teams
                                to explore how AI, automation, and data platforms can be implemented effectively,
                                ethically, and at scale.
                            </p>

                            <div className="relative">
                                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-blue-600 rounded-full"></div>
                                <div className="ml-6">
                                    <blockquote className="text-xl md:text-2xl font-bold text-gray-900 text-center">
                                        &quot;His focus remains on building systems that are reliable today
                                        <span className="text-blue-600"> and adaptable for the future.</span>&quot;
                                    </blockquote>
                                </div>
                            </div>
                        </div>

                        {/* Future Focus Areas */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                            {[
                                {
                                    title: "Ethical AI",
                                    description: "Responsible implementation at scale",
                                    icon: <FaBalanceScale className="text-blue-600" />
                                },
                                {
                                    title: "Adaptive Systems",
                                    description: "Future-proof technology architectures",
                                    icon: <FaNetworkWired className="text-blue-600" />
                                },
                                {
                                    title: "Global Impact",
                                    description: "Scaling solutions worldwide",
                                    icon: <FaGlobe className="text-blue-600" />
                                }
                            ].map((area, index) => (
                                <div
                                    key={index}
                                    className="bg-gray-50 rounded-xl p-6 text-center border border-gray-100 hover:border-blue-200 hover:bg-blue-50 transition"
                                >
                                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                                        {area.icon}
                                    </div>
                                    <h4 className="text-lg font-bold mb-2 text-gray-900">{area.title}</h4>
                                    <p className="text-sm text-gray-600">{area.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Final CTA Section */}
            <div className="mt-16 text-center">
                <div className="max-w-3xl mx-auto">
                    <h3 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">
                        Ready to Build the Future Together?
                    </h3>

                    <p className="text-lg text-gray-600 mb-8">
                        Partner with CodeAutomation to transform your business with ethical, scalable AI
                        and automation solutions.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="https://calendly.com/adnanghaffar"
                            className="group inline-flex items-center justify-center gap-3 px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all shadow-sm hover:shadow"
                        >
                            <FaHandshake />
                            Start a Partnership
                            <span className="group-hover:translate-x-1 transition-transform">→</span>
                        </a>

                        <a
                            href="/services"
                            className="group inline-flex items-center justify-center gap-3 px-6 py-3 bg-white border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-all"
                        >
                            <FaRocket />
                            Explore Our Services
                            <span className="group-hover:translate-x-1 transition-transform">→</span>
                        </a>
                    </div>

                    {/* Contact Info */}
                    <div className="mt-12 pt-8 border-t border-gray-200">
                        <p className="text-gray-600 mb-4">
                            Connect directly with Adnan for strategic discussions
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm">
                            <a
                                href="mailto:adnan@codeautomation.dev"
                                className="text-blue-600 hover:text-blue-700 font-medium px-4 py-2 hover:bg-blue-50 rounded-lg transition"
                            >
                                adnan@codeautomation.dev
                            </a>
                            <div className="hidden sm:block w-1 h-1 bg-gray-300 rounded-full"></div>
                            <a
                                href="https://www.linkedin.com/in/adnanghaffar007/"
                                className="text-blue-600 hover:text-blue-700 font-medium px-4 py-2 hover:bg-blue-50 rounded-lg transition"
                            >
                                LinkedIn Profile
                            </a>
                            <div className="hidden sm:block w-1 h-1 bg-gray-300 rounded-full"></div>
                            <a
                                href="tel:+18505584691"
                                className="text-blue-600 hover:text-blue-700 font-medium px-4 py-2 hover:bg-blue-50 rounded-lg transition"
                            >
                                +1 (850) 558-4691
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <CeoFaq/>
    </section>
  );
}
