import { FaAws, FaBoxOpen, FaBrain, FaChartLine, FaCode, FaCogs, FaDocker, FaEye, FaMobile, FaPython, FaRobot, FaServer, FaTruck } from "react-icons/fa";
import { SiAndroid, SiApple, SiDatadog, SiNextdotjs, SiNodedotjs, SiReact, SiSanity, SiSnowflake, SiTypescript } from "react-icons/si";
import { ExpertiseCard } from "./cards";

// Areas of expertise and the technology stack.
export default function CeoExpertise() {
  return (
    <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
            {/* Section Header */}
            <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-100 rounded-full mb-6">
                    <FaBrain className="text-blue-600" />
                    <span className="text-sm font-medium text-blue-700">Technical Expertise</span>
                </div>

                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                    Core Areas of <span className="text-blue-600">Expertise & Specialization</span>
                </h2>

                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                    Comprehensive technical skills spanning AI development, automation, and enterprise software engineering
                </p>
            </div>

            {/* Expertise Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                {/* AI Agent Development */}
                <ExpertiseCard
                    icon={<FaRobot className="text-xl" />}
                    title="AI Agent Development"
                    subtitle="Business Operations & Customer Automation"
                    description="Designing and deploying intelligent AI agents that automate customer support, internal operations, scheduling, and decision-making workflows."
                    tech={["LLMs", "Enterprise Architecture", "Data Security"]}
                    delay={0}
                />

                {/* Workflow Automation */}
                <ExpertiseCard
                    icon={<FaCogs className="text-xl" />}
                    title="Workflow Automation"
                    subtitle="Business Process Automation Services"
                    description="Helping organizations automate repetitive processes across sales, marketing, operations, and customer support with intelligent, scalable systems."
                    tech={["Workflow Design", "Tool Integration", "Scalable Systems"]}
                    delay={100}
                />

                {/* AI & ML Solutions */}
                <ExpertiseCard
                    icon={<FaBrain className="text-xl" />}
                    title="AI & Machine Learning Solutions"
                    subtitle="Applied ML System Development"
                    description="Building predictive analytics platforms, recommendation engines, and intelligent data pipelines for practical AI implementation."
                    tech={["Predictive Analytics", "Recommendation Engines", "Data Pipelines"]}
                    delay={200}
                />

                {/* Custom Software Development */}
                <ExpertiseCard
                    icon={<FaCode className="text-xl" />}
                    title="Custom Software Development"
                    subtitle="Full-Stack Engineering Services"
                    description="Leading development of secure, scalable web applications using modern technologies like React.js, Next.js, TypeScript, and Node.js."
                    tech={[
                        <SiReact key="react" className="text-blue-500" />,
                        <SiNextdotjs key="next" className="text-gray-700" />,
                        <SiTypescript key="ts" className="text-blue-600" />,
                        <SiNodedotjs key="node" className="text-green-600" />
                    ]}
                    delay={300}
                />

                {/* Mobile App Development */}
                <ExpertiseCard
                    icon={<FaMobile className="text-xl" />}
                    title="Mobile App Development"
                    subtitle="Android & iOS Platforms"
                    description="Delivering high-performance mobile applications with seamless backend integration, built for long-term maintenance and growth."
                    tech={[
                        <SiAndroid key="android" className="text-green-500" />,
                        <SiApple key="ios" className="text-gray-700" />
                    ]}
                    delay={400}
                />

                {/* CRM Customization */}
                <ExpertiseCard
                    icon={<FaChartLine className="text-xl" />}
                    title="CRM Customization & Automation"
                    subtitle="Sales & Marketing Systems"
                    description="Customizing CRM platforms and automating lead management pipelines to improve conversion rates and operational visibility."
                    tech={["GoHighLevel", "Go-Flow", "Third-party Integrations"]}
                    delay={500}
                />

                {/* Enterprise ERP */}
                <ExpertiseCard
                    icon={<FaServer className="text-xl" />}
                    title="Enterprise ERP & Platforms"
                    subtitle="Odoo, Kajabi & Business Platforms"
                    description="Designing and implementing ERP systems to streamline operations, centralize data, and align software with business processes."
                    tech={["Odoo", "Kajabi", "Business Process Alignment"]}
                    delay={600}
                />

                {/* Snowflake AI Data Cloud */}
                <ExpertiseCard
                    icon={<SiSnowflake className="text-xl" />}
                    title="Snowflake AI Data Cloud"
                    subtitle="Implementation & Managed Services"
                    description="End-to-end Snowflake implementation, optimization, and analytics enablement for transforming data into actionable insights."
                    tech={["Implementation", "Optimization", "Analytics", "Managed Services"]}
                    delay={700}
                />

                {/* System Monitoring */}
                <ExpertiseCard
                    icon={<FaEye className="text-xl" />}
                    title="System Monitoring & Observability"
                    subtitle="Performance Optimization"
                    description="Implementing monitoring solutions using Datadog to ensure system reliability, performance stability, and operational transparency."
                    tech={[<SiDatadog key="datadog" className="text-orange-500" />, "Performance", "Reliability"]}
                    delay={800}
                />

                {/* CMS Customization */}
                <ExpertiseCard
                    icon={<FaBoxOpen className="text-xl" />}
                    title="CMS Customization"
                    subtitle="Headless Content Management"
                    description="Building and integrating CMS platforms like Sanity to support scalable, SEO-optimized digital experiences."
                    tech={[<SiSanity key="sanity" className="text-red-500" />, "SEO", "Scalability"]}
                    delay={900}
                />

                {/* Logistics Systems */}
                <ExpertiseCard
                    icon={<FaTruck className="text-xl" />}
                    title="Dispatching & Logistics Systems"
                    subtitle="Fleet Management Integration"
                    description="Developing dispatching, logistics, and fleet management systems for real-time tracking and operational efficiency."
                    tech={["Real-time Tracking", "Fleet Management", "Data Visibility"]}
                    delay={1000}
                />
            </div>

            {/* Technology Stack */}
            <div className="mt-20 max-w-6xl mx-auto">
                <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
                    <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center text-gray-900">
                        Comprehensive Technology Stack
                    </h3>

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                        {[
                            { name: "React.js", icon: <SiReact className="text-blue-500 text-xl" /> },
                            { name: "Next.js", icon: <SiNextdotjs className="text-gray-700 text-xl" /> },
                            { name: "TypeScript", icon: <SiTypescript className="text-blue-600 text-xl" /> },
                            { name: "Node.js", icon: <SiNodedotjs className="text-green-600 text-xl" /> },
                            { name: "Python", icon: <FaPython className="text-blue-400 text-xl" /> },
                            { name: "AI/ML", icon: <FaBrain className="text-purple-500 text-xl" /> },
                            { name: "Snowflake", icon: <SiSnowflake className="text-blue-400 text-xl" /> },
                            { name: "Datadog", icon: <SiDatadog className="text-orange-500 text-xl" /> },
                            { name: "AWS", icon: <FaAws className="text-orange-500 text-xl" /> },
                            { name: "Docker", icon: <FaDocker className="text-blue-500 text-xl" /> },
                            { name: "Kubernetes", icon: <div className="text-blue-600 font-bold">K8s</div> },
                            { name: "Sanity", icon: <SiSanity className="text-red-500 text-xl" /> }
                        ].map((tech, index) => (
                            <div
                                key={index}
                                className="bg-gray-50 rounded-lg p-4 text-center hover:shadow-md transition-all hover:-translate-y-1 border border-gray-100"
                            >
                                <div className="flex justify-center mb-2">{tech.icon}</div>
                                <div className="font-medium text-gray-800 text-sm">{tech.name}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* CTA */}
            <div className="mt-16 text-center">
                <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                    Ready to leverage this expertise for your organization&apos;s digital transformation?
                </p>
                <a
                    href="https://calendly.com/adnanghaffar"
                    className="inline-flex items-center gap-3 px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all shadow-sm hover:shadow"
                >
                    <FaCode />
                    Discuss Your Project
                    <span className="ml-2">→</span>
                </a>
            </div>
        </div>
    </section>
  );
}
