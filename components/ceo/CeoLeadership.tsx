import { FaBolt, FaBookOpen, FaBullseye, FaChartLine, FaCheckCircle, FaCode, FaLightbulb, FaLock, FaTools, FaUsers } from "react-icons/fa";

// Leadership philosophy, principles and how systems are evaluated.
export default function CeoLeadership() {
  return (
    <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-100 rounded-full mb-6">
                        <FaLightbulb className="text-blue-600 text-lg" />
                        <span className="text-sm font-medium text-blue-700">Leadership Philosophy</span>
                    </div>

                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                        Leadership Approach to <span className="text-blue-600">AI and Software Engineering</span>
                    </h2>

                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Grounded in practical execution and technical clarity
                    </p>
                </div>

                {/* Main Content */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
                    {/* Left Column - Philosophy Text */}
                    <div>
                        <div className="mb-8">
                            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">
                                Practical Execution & Technical Clarity
                            </h3>

                            <div className="space-y-6">
                                <p className="text-lg leading-relaxed text-gray-700">
                                    Adnan&apos;s leadership philosophy is grounded in practical execution and technical clarity.
                                    He believes modern technology should simplify workflows, support teams, and scale with
                                    business growth rather than introduce unnecessary complexity.
                                </p>

                                <div className="relative">
                                    {/* <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-blue-600 rounded-full"></div> */}
                                    <div className="">
                                        <blockquote className="text-md font-medium text-gray-800 border-l-4 border-blue-500 pl-6 py-4 bg-gray-50 rounded-r-lg">
                                            &quot;Every system designed under his leadership is evaluated for usability,
                                            performance, security, and long-term maintainability.&quot;
                                        </blockquote>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Key Leadership Principles */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                            <div className="bg-white p-5 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-md transition">
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                                        <FaUsers className="text-blue-600" />
                                    </div>
                                    <span className="font-semibold text-gray-900">Team Support</span>
                                </div>
                                <p className="text-sm text-gray-600">Empowering teams with clear technical direction</p>
                            </div>

                            <div className="bg-white p-5 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-md transition">
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                                        <FaChartLine className="text-blue-600" />
                                    </div>
                                    <span className="font-semibold text-gray-900">Scalable Growth</span>
                                </div>
                                <p className="text-sm text-gray-600">Building systems that grow with business needs</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - System Evaluation */}
                    <div className="relative">
                        {/* Main Card */}
                        <div className="relative bg-white rounded-2xl p-8 border border-gray-200 shadow-lg">
                            {/* Content */}
                            <div className="text-center mb-8">
                                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-50 rounded-full mb-4">
                                    <FaCode className="text-2xl text-blue-600" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">Four Pillars of System Evaluation</h3>
                                <p className="text-gray-600">Guiding principles for every project</p>
                            </div>

                            {/* Evaluation Pillars */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {[
                                    {
                                        title: "Usability",
                                        description: "Intuitive interfaces and workflows",
                                        icon: <FaCheckCircle className="text-green-500" />
                                    },
                                    {
                                        title: "Performance",
                                        description: "Optimal speed and efficiency",
                                        icon: <FaBolt className="text-blue-500" />
                                    },
                                    {
                                        title: "Security",
                                        description: "Robust protection & compliance",
                                        icon: <FaLock className="text-red-500" />
                                    },
                                    {
                                        title: "Maintainability",
                                        description: "Long-term sustainability",
                                        icon: <FaTools className="text-purple-500" />
                                    }
                                ].map((pillar, index) => (
                                    <div
                                        key={index}
                                        className="bg-gray-50 rounded-xl p-4 border border-gray-100 hover:border-blue-200 hover:bg-blue-50 transition group"
                                    >
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 bg-white rounded-lg border border-gray-200 flex items-center justify-center">
                                                {pillar.icon}
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-gray-900">{pillar.title}</h4>
                                                <p className="text-sm text-gray-600">{pillar.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Metrics Display */}
                            <div className="mt-8 pt-6 border-t border-gray-200">
                                <div className="text-center">
                                    <p className="text-gray-600 mb-4">Impact of this approach:</p>
                                    <div className="flex justify-center items-center gap-6">
                                        <div className="text-center">
                                            <div className="text-2xl font-bold text-gray-900">98%</div>
                                            <div className="text-sm text-gray-600">Client Satisfaction</div>
                                        </div>
                                        <div className="text-center">
                                            <div className="text-2xl font-bold text-gray-900">40%</div>
                                            <div className="text-sm text-gray-600">Faster Deployment</div>
                                        </div>
                                        <div className="text-center">
                                            <div className="text-2xl font-bold text-gray-900">99.9%</div>
                                            <div className="text-sm text-gray-600">System Uptime</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Leadership Values */}
                <div className="mt-16">
                    <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center text-gray-900">
                        Core Leadership Values
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            {
                                title: "Technical Excellence",
                                description: "Maintaining high standards in code quality, architecture, and implementation",
                                icon: <FaCode className="text-blue-600" />
                            },
                            {
                                title: "Client-Centric Focus",
                                description: "Aligning technology solutions with real business needs and outcomes",
                                icon: <FaBullseye className="text-blue-600" />
                            },
                            {
                                title: "Continuous Learning",
                                description: "Staying ahead of AI and automation trends through research and innovation",
                                icon: <FaBookOpen className="text-blue-600" />
                            }
                        ].map((value, index) => (
                            <div
                                key={index}
                                className="group bg-white rounded-xl p-6 border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300"
                            >
                                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                                    {value.icon}
                                </div>
                                <h4 className="text-xl font-bold mb-3 text-gray-900">{value.title}</h4>
                                <p className="text-gray-600 leading-relaxed">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}
