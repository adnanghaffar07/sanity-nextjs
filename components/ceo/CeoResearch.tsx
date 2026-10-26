import { FaAward, FaDatabase, FaFileAlt, FaGraduationCap, FaLightbulb, FaNetworkWired } from "react-icons/fa";
import { SiIeee } from "react-icons/si";

// Research, IEEE membership, Forbes Councils and publications.
export default function CeoResearch() {
  return (
    <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-full mb-6">
                        <FaGraduationCap className="text-xl" />
                        <span className="font-semibold">Academic Excellence</span>
                    </div>

                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                        Research Background & <span className="text-purple-600">Professional Authority</span>
                    </h2>

                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Bridging academic research with real-world industry implementation
                    </p>
                </div>

                {/* Main Content */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
                    {/* Left Column - Research & Academic */}
                    <div>
                        {/* Research Overview */}
                        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200 mb-8">
                            <div className="flex items-start gap-4 mb-6">
                                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                                    <FaFileAlt className="text-2xl text-purple-600" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Research Excellence</h3>
                                    <p className="text-gray-600">
                                        Adnan maintains a strong academic and professional presence alongside his industry work.
                                    </p>
                                </div>
                            </div>

                            <div className="space-y-6">
                                <p className="text-lg text-gray-700 leading-relaxed">
                                    His research focuses on applying AI and automation technologies to solve practical industry
                                    problems rather than purely theoretical use cases.
                                </p>

                                <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-xl p-6 border-l-4 border-purple-500">
                                    <p className="text-gray-800 font-medium">
                                        &quot;Published more than 20 research papers in the fields of artificial intelligence,
                                        automation, and real-world AI implementation.&quot;
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* IEEE Senior Member */}
                        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 text-white overflow-hidden relative">
                            {/* Circuit pattern overlay */}
                            <div className="absolute inset-0 opacity-10">
                                <div className="absolute inset-0" style={{
                                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                                }}></div>
                            </div>

                            <div className="relative z-10">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-14 h-14 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                                        <SiIeee className="text-3xl" />
                                    </div>
                                    <div>
                                        <div className="inline-flex items-center px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm mb-2">
                                            <FaAward className="mr-2" />
                                            Senior Member
                                        </div>
                                        <h3 className="text-2xl font-bold">IEEE Senior Member</h3>
                                    </div>
                                </div>

                                <p className="text-gray-300 leading-relaxed mb-6">
                                    As a Senior Member of IEEE, Adnan contributes to advancing technology through research,
                                    standards development, and thought leadership in artificial intelligence and automation.
                                </p>

                                <div className="grid grid-cols-2 gap-4">
                                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                                        <div className="text-2xl font-bold mb-1">20+</div>
                                        <div className="text-sm text-gray-300">Research Papers</div>
                                    </div>
                                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                                        <div className="text-2xl font-bold mb-1">Global</div>
                                        <div className="text-sm text-gray-300">Recognition</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Professional Authority */}
                    <div>
                        {/* Forbes Councils */}
                        <div className="bg-gradient-to-br from-blue-900 to-indigo-900 rounded-2xl p-8 text-white mb-8 overflow-hidden relative">
                            {/* Background pattern */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/10 to-transparent rounded-full blur-3xl"></div>

                            <div className="relative z-10">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-14 h-14 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-xl flex items-center justify-center">
                                        <FaDatabase className="text-3xl" />
                                    </div>
                                    <div>
                                        <div className="inline-flex items-center px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm mb-2">
                                            <FaNetworkWired className="mr-2" />
                                            Executive Network
                                        </div>
                                        <h3 className="text-2xl font-bold">Forbes</h3>
                                    </div>
                                </div>

                                <p className="text-gray-300 leading-relaxed mb-6">
                                    Adnan is a member of the Forbes, where he contributes insights on AI adoption,
                                    automation strategy, and digital transformation for modern organizations.
                                </p>

                                <div className="space-y-4">
                                    <div className="flex items-start gap-3">
                                        <div className="w-8 h-8 bg-blue-500/30 rounded-lg flex items-center justify-center mt-1">
                                            <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                                        </div>
                                        <div>
                                            <h4 className="font-bold mb-1">AI Adoption Strategies</h4>
                                            <p className="text-sm text-gray-400">Practical approaches to implementing AI in enterprises</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-3">
                                        <div className="w-8 h-8 bg-blue-500/30 rounded-lg flex items-center justify-center mt-1">
                                            <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                                        </div>
                                        <div>
                                            <h4 className="font-bold mb-1">Digital Transformation</h4>
                                            <p className="text-sm text-gray-400">Guiding organizations through technology modernization</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-3">
                                        <div className="w-8 h-8 bg-blue-500/30 rounded-lg flex items-center justify-center mt-1">
                                            <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                                        </div>
                                        <div>
                                            <h4 className="font-bold mb-1">Automation Strategy</h4>
                                            <p className="text-sm text-gray-400">Developing scalable automation frameworks</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Research Focus Areas */}
                        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
                            <h3 className="text-2xl font-bold mb-6 text-gray-900">Research Focus Areas</h3>

                            <div className="space-y-4">
                                {[
                                    {
                                        title: "Practical AI Implementation",
                                        description: "Real-world applications of AI in business operations",
                                        progress: 90
                                    },
                                    {
                                        title: "Enterprise Automation",
                                        description: "Scalable automation frameworks for organizations",
                                        progress: 85
                                    },
                                    {
                                        title: "Intelligent Systems",
                                        description: "AI-driven decision-making platforms",
                                        progress: 80
                                    },
                                    {
                                        title: "Data Analytics",
                                        description: "Transforming data into actionable insights",
                                        progress: 75
                                    }
                                ].map((area, index) => (
                                    <div key={index} className="group">
                                        <div className="flex justify-between mb-2">
                                            <h4 className="font-semibold text-gray-900">{area.title}</h4>
                                            <span className="text-sm font-medium text-blue-600">{area.progress}%</span>
                                        </div>
                                        <p className="text-sm text-gray-600 mb-3">{area.description}</p>
                                        <div className="w-full bg-gray-200 rounded-full h-2">
                                            <div
                                                className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-500 group-hover:from-blue-500 group-hover:to-cyan-500"
                                                style={{ width: `${area.progress}%` }}
                                            ></div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-8 pt-6 border-t border-gray-200">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h4 className="font-bold text-gray-900">Ongoing Research</h4>
                                        <p className="text-sm text-gray-600">Active participation in academic communities</p>
                                    </div>
                                    <div className="flex space-x-2">
                                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse delay-300"></div>
                                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse delay-600"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Publications & Recognition */}
                <div className="mt-16">
                    <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
                        <h3 className="text-2xl md:text-3xl font-bold mb-8 py-6 text-center text-gray-900">
                            Academic Publications & Professional Recognition
                        </h3>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {[
                                {
                                    title: "Research Papers",
                                    count: "20+",
                                    description: "Published in AI, automation & real-world implementation",
                                    icon: <FaFileAlt className="text-xl" />,
                                    color: "bg-blue-50 text-blue-600"
                                },
                                {
                                    title: "IEEE Contributions",
                                    count: "Senior",
                                    description: "Active participation in technology advancement",
                                    icon: <FaAward className="text-xl" />,
                                    color: "bg-purple-50 text-purple-600"
                                },
                                {
                                    title: "Forbes Insights",
                                    count: "Regular",
                                    description: "Contributing to digital transformation discourse",
                                    icon: <FaLightbulb className="text-xl" />,
                                    color: "bg-indigo-50 text-indigo-600"
                                }
                            ].map((item, index) => (
                                <div
                                    key={index}
                                    className="bg-white rounded-xl p-6 text-center hover:shadow-md transition-all duration-300 border border-gray-200"
                                >
                                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${item.color} mb-4`}>
                                        {item.icon}
                                    </div>
                                    <div className="text-2xl font-bold text-gray-900 mb-2">{item.count}</div>
                                    <h4 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h4>
                                    <p className="text-gray-600 text-sm">{item.description}</p>
                                </div>
                            ))}
                        </div>

                        {/* Research Impact Statement */}
                        <div className="mt-8 pt-8 border-t border-gray-200">
                            <div className="max-w-3xl mx-auto text-center">
                                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-full mb-4">
                                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                    <span className="text-sm font-medium text-gray-700">Research Impact</span>
                                </div>
                                <p className="text-gray-700">
                                    Adnan&apos;s research bridges the gap between academic innovation and practical business
                                    applications, ensuring that AI and automation technologies deliver tangible value in
                                    real-world scenarios.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}
