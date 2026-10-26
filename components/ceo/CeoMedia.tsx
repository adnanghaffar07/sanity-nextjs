import { FaGlobeAmericas, FaNewspaper, FaQuoteRight, FaTrophy } from "react-icons/fa";
import { MediaCard } from "./cards";

// Media coverage cards.
export default function CeoMedia() {
  return (
    <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
            {/* Section Header */}
            <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-red-600 to-orange-600 text-white rounded-full mb-6">
                    <FaNewspaper className="text-xl" />
                    <span className="font-semibold">Media Recognition</span>
                </div>

                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                    Featured in <span className="text-red-600">Leading Global Publications</span>
                </h2>

                <div className="max-w-3xl mx-auto">
                    <p className="text-lg text-gray-600 mb-4">
                        Adnan&apos;s work, leadership, and contributions to AI software development and business automation
                        have been recognized by leading global publications.
                    </p>
                    <p className="text-lg text-gray-600">
                        These features reflect his practical approach to AI implementation, automation strategy, and scalable software systems.
                    </p>
                </div>
            </div>

            {/* Media Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
                {/* Forbes */}
                <MediaCard
                    publication="Forbes"
                    category="Business & Technology"
                    description="Featured for insights on AI-driven business transformation, automation strategy, and the real-world application of artificial intelligence in modern enterprises."
                    highlights={["AI Business Transformation", "Automation Strategy", "Measurable Outcomes"]}
                    color="from-blue-600 to-indigo-700"
                    logo="F"
                    delay={0}
                />

                {/* LA Weekly */}
                <MediaCard
                    publication="LA Weekly"
                    category="Innovation & Entrepreneurship"
                    description="Recognized for leadership in AI innovation and software entrepreneurship, highlighting how advanced automation reshapes business operations."
                    highlights={["AI Innovation", "Software Entrepreneurship", "Business Operations"]}
                    color="from-purple-600 to-pink-600"
                    logo="LA"
                    delay={100}
                />

                {/* CEO Weekly */}
                <MediaCard
                    publication="CEO Weekly"
                    category="Executive Leadership"
                    description="Profiled for executive leadership and strategic vision in building scalable AI software solutions and automation platforms."
                    highlights={["Executive Leadership", "Strategic Vision", "Scalable Solutions"]}
                    color="from-gray-700 to-gray-900"
                    logo="CEO"
                    delay={200}
                />

                {/* Tech Times */}
                <MediaCard
                    publication="Tech Times"
                    category="Technical Expertise"
                    description="Featured for technical expertise in AI systems, machine learning applications, and modern software architectures."
                    highlights={["AI Systems", "Machine Learning", "Software Architecture"]}
                    color="from-blue-500 to-cyan-500"
                    logo="TT"
                    delay={300}
                />

                {/* NY Weekly */}
                <MediaCard
                    publication="NY Weekly"
                    category="Research & Implementation"
                    description="Highlighted for contributions to AI research, automation implementation, and enterprise-grade software solutions."
                    highlights={["AI Research", "Automation", "Enterprise Solutions"]}
                    color="from-red-600 to-orange-600"
                    logo="NY"
                    delay={400}
                />

                {/* News Blaze */}
                <MediaCard
                    publication="News Blaze"
                    category="Thought Leadership"
                    description="Recognized for thought leadership in artificial intelligence, business automation, and practical deployment of emerging technologies."
                    highlights={["Thought Leadership", "Business Automation", "Emerging Tech"]}
                    color="from-green-600 to-emerald-600"
                    logo="NB"
                    delay={500}
                />

                {/* The Brainz Magazine */}
                <MediaCard
                    publication="The Brainz Magazine"
                    category="Digital Transformation"
                    description="Featured for leadership perspective on innovation, digital transformation, and the role of AI in shaping future-ready organizations."
                    highlights={["Innovation", "Digital Transformation", "Future-Ready"]}
                    color="from-indigo-600 to-purple-600"
                    logo="BZ"
                    delay={600}
                />

                {/* Analytics Insight */}
                <MediaCard
                    publication="Analytics Insight"
                    category="AI Analytics"
                    description="Covered for expertise in AI analytics, machine learning systems, and data-driven decision platforms for business value."
                    highlights={["AI Analytics", "Data-Driven Decisions", "Business Value"]}
                    color="from-teal-600 to-cyan-600"
                    logo="AI"
                    delay={700}
                />

                {/* Summary Card */}
                <div className="group bg-gradient-to-br from-gray-900 to-blue-900 rounded-2xl p-8 text-white overflow-hidden relative col-span-1 md:col-span-2 lg:col-span-1">
                    {/* Background pattern */}
                    <div className="absolute inset-0 opacity-20">
                        <div className="absolute inset-0" style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M50 50c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10zM10 10c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10S0 25.523 0 20s4.477-10 10-10zm10 8c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm40 40c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                        }}></div>
                    </div>

                    <div className="relative z-10">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-14 h-14 bg-gradient-to-r from-red-500 to-orange-500 rounded-xl flex items-center justify-center">
                                <FaGlobeAmericas className="text-3xl" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold">Global Recognition</h3>
                                <p className="text-gray-300">8+ Major Publications</p>
                            </div>
                        </div>

                        <div className="space-y-4 mb-6">
                            <div className="flex items-center gap-3">
                                <FaQuoteRight className="text-red-400" />
                                <p className="text-gray-200">
                                    These features highlight his role in advancing practical AI solutions and business
                                    automation across industries.
                                </p>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                                <div className="text-2xl font-bold mb-1">8+</div>
                                <div className="text-sm text-gray-300">Publications</div>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                                <div className="text-2xl font-bold mb-1">Global</div>
                                <div className="text-sm text-gray-300">Coverage</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Publication Highlights */}
            <div className="max-w-4xl mx-auto mb-16">
                <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl p-8 border border-red-100">
                    <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center text-gray-900">
                        Publication Impact Highlights
                    </h3>

                    <div className="space-y-6">
                        {[
                            {
                                quote: "Helping organizations adopt AI responsibly while delivering measurable business outcomes.",
                                source: "Forbes",
                                category: "Business Impact"
                            },
                            {
                                quote: "Highlighting how advanced automation and intelligent systems are reshaping business operations across industries.",
                                source: "LA Weekly",
                                category: "Industry Transformation"
                            },
                            {
                                quote: "Covered for expertise in AI analytics and data-driven decision platforms that help businesses extract real value.",
                                source: "Analytics Insight",
                                category: "Data Intelligence"
                            }
                        ].map((highlight, index) => (
                            <div
                                key={index}
                                className="group bg-white rounded-xl p-6 border border-gray-200 hover:border-red-300 hover:shadow-lg transition-all duration-300"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <FaQuoteRight className="text-xl text-red-600" />
                                    </div>
                                    <div className="flex-1">
                                        <blockquote className="text-lg italic text-gray-800 mb-4">
                                            &quot;{highlight.quote}&quot;
                                        </blockquote>
                                        <div className="flex justify-between items-center">
                                            <div>
                                                <div className="font-bold text-gray-900">{highlight.source}</div>
                                                <div className="text-sm text-gray-600">{highlight.category}</div>
                                            </div>
                                            {/* <div className="text-red-600 group-hover:translate-x-2 transition-transform">
                                                →
                                            </div> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Recognition Timeline */}
            {/* <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-full mb-4">
                        <FaTrophy className="text-lg" />
                        <span className="font-semibold">Industry Recognition Timeline</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
                        Consistent Media Presence
                    </h3>
                    <p className="text-gray-600">Recognition across business, technology, and innovation publications</p>
                </div>

                <div className="relative">
                    <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-red-500 via-orange-500 to-yellow-500 rounded-full"></div>

                    <div className="space-y-12 relative">
                        {[
                            {
                                year: "2024",
                                publications: ["Forbes", "CEO Weekly", "Analytics Insight"],
                                achievement: "Multiple features across business and tech publications"
                            },
                            {
                                year: "2023",
                                publications: ["LA Weekly", "Tech Times", "The Brainz Magazine"],
                                achievement: "Recognition for AI innovation and entrepreneurship"
                            },
                            {
                                year: "2022",
                                publications: ["NY Weekly", "News Blaze"],
                                achievement: "Features on research and practical AI implementation"
                            }
                        ].map((item, index) => (
                            <div
                                key={index}
                                className={`relative ${index % 2 === 0 ? 'md:pr-8 md:pl-0 md:text-right' : 'md:pl-8'}`}
                            >
                                <div className={`absolute left-0 md:left-1/2 -translate-x-1/2 md:-translate-x-1/2 w-6 h-6 bg-white border-4 border-red-500 rounded-full z-10`}></div>

                                <div className={`ml-8 md:ml-0 ${index % 2 === 0 ? 'md:mr-1/2 md:pr-8' : 'md:ml-1/2 md:pl-8'}`}>
                                    <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
                                        <div className="flex justify-between items-start mb-4">
                                            <div className="text-2xl font-bold text-gray-900">{item.year}</div>
                                            <div className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-medium">
                                                {item.publications.length} Features
                                            </div>
                                        </div>

                                        <p className="text-gray-700 mb-4">{item.achievement}</p>

                                        <div className="flex flex-wrap gap-2">
                                            {item.publications.map((pub, pubIndex) => (
                                                <span
                                                    key={pubIndex}
                                                    className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-gray-200 transition"
                                                >
                                                    {pub}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div> */}
        </div>
    </section>
  );
}
