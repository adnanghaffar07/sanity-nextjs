import React from 'react'
import { FaLightbulb, FaCode, FaUsers, FaChartLine } from 'react-icons/fa'
import { FaMapMarkerAlt, FaBriefcase, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import {
    FaRobot, FaCogs, FaBrain, FaMobile,
    FaServer, FaDatabase, FaPython, FaDocker, FaAws
    , FaEye, FaBoxOpen, FaTruck, FaBalanceScale, FaGlobe,
} from 'react-icons/fa'
import {
    SiReact, SiNextdotjs, SiTypescript, SiNodedotjs,
    SiAndroid, SiApple, SiDatadog, SiSnowflake, SiSanity
} from 'react-icons/si'
// Add these imports at the top
import { FaGraduationCap, FaFileAlt, FaAward, FaNetworkWired } from 'react-icons/fa'
import { SiIeee } from 'react-icons/si'
import { FaNewspaper, FaQuoteRight, FaTrophy, FaGlobeAmericas } from 'react-icons/fa'
import { FaBullseye, FaRocket, FaHandshake } from 'react-icons/fa'
import Image from 'next/image'
// Add these imports at the top of your file
import {
    FaCheckCircle, FaBolt, FaLock, FaTools,
    FaBookOpen
} from 'react-icons/fa'
import FAQComponent from '../components/Ceo-FAQ'

export const metadata = {
  title: "Adnan Ghaffar CEO of CodeAutomation AI Software Company USA",
 description:
   "Learn about Adnan Ghaffar, Founder and CEO of CodeAutomation, a Chicago based AI software development and business automation company delivering scalable AI solutions.",
   keywords: [
     "CodeAutomation",
     "software development company",
     "software development services",
   ],
 alternates: {
   canonical: "https://codeautomation.ai/adnan-ghaffar-ceo-codeautomation", // ✅ Fixes the canonical error
 },
};

const Page = () => {

    // Expertise Card Component
    const ExpertiseCard = ({
        icon,
        title,
        subtitle,
        description,
        tech,
        delay
    }: {
        icon: React.ReactNode;
        title: string;
        subtitle: string;
        description: string;
        tech: any[];
        delay: number;
    }) => (
        <div
            className="group bg-white rounded-xl p-6 border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300"
            style={{ animationDelay: `${delay}ms` }}
        >
            {/* Icon */}
            <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4 text-blue-600">
                {icon}
            </div>

            {/* Title & Subtitle */}
            <h3 className="text-lg font-bold mb-2 text-gray-900">{title}</h3>
            <p className="text-sm text-blue-600 font-medium mb-4">{subtitle}</p>

            {/* Description */}
            <p className="text-gray-600 mb-6 leading-relaxed text-sm">{description}</p>

            {/* Tech Tags */}
            <div className="flex flex-wrap gap-2">
                {tech.map((item, index) => (
                    <span
                        key={index}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full hover:bg-gray-200 transition"
                    >
                        {item}
                    </span>
                ))}
            </div>
        </div>
    );

    // Media Card Component
    const MediaCard = ({
        publication,
        category,
        description,
        highlights,
        color,
        logo,
        delay
    }: {
        publication: string;
        category: string;
        description: string;
        highlights: string[];
        color: string;
        logo: string;
        delay: number;
    }) => (
        <div
            className="group bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-2xl transition-all duration-300 overflow-hidden relative"
            style={{ animationDelay: `${delay}ms` }}
        >
            {/* Gradient overlay on hover */}
            <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>

            {/* Publication Logo */}
            <div className="relative mb-6">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center text-white text-2xl font-bold`}>
                    {logo}
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8">
                    <FaNewspaper className="text-red-500 text-sm" />
                </div>
            </div>

            {/* Publication Info */}
            <h3 className="text-xl font-bold mb-2 text-gray-900">{publication}</h3>
            <div className="inline-flex items-center px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium mb-4">
                {category}
            </div>

            {/* Description */}
            <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>

            {/* Highlights */}
            <div className="space-y-2">
                {highlights.map((highlight, index) => (
                    <div key={index} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-gradient-to-r from-red-500 to-orange-500 rounded-full"></div>
                        <span className="text-sm text-gray-700">{highlight}</span>
                    </div>
                ))}
            </div>

            {/* Hover indicator */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
        </div>
    );
    return (
        <div className="w-full flex flex-col items-center">
            {/* Hero Section */}
            <div className="flex overflow-hidden relative flex-col pb-12 w-full font-light text-white lg:min-h-[700px] max-md:max-w-full">
                <img
                    className="top-0 left-0 object-cover absolute inset-0 size-full"
                    src="/google-scholar.jpg"
                    alt="Google Scholar Hero"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-[#000000] opacity-60"></div>
                <div className="relative flex flex-col items-center px-5 pt-48 pb-36 w-full lg:px-20 lg:pt-12 flex-grow">
                    <div className="lg:absolute lg:top-[300px] text-center lg:w-8/12 mx-auto">
                        <h1 className="text-2xl font-bold capitalize lg:text-4xl">About the CEO</h1>
                    </div>
                </div>
            </div>

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

                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gray-900">
                                    Adnan <span className="text-blue-600">Ghaffar</span>
                                </h1>

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
                                                <h3 className="text-2xl font-bold">Forbes Councils</h3>
                                            </div>
                                        </div>

                                        <p className="text-gray-300 leading-relaxed mb-6">
                                            Adnan is a member of the Forbes Councils, where he contributes insights on AI adoption,
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
                    <div className="max-w-4xl mx-auto">
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
                            {/* Timeline line */}
                            <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-red-500 via-orange-500 to-yellow-500 rounded-full"></div>

                            {/* Timeline items */}
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
                                        {/* Timeline node */}
                                        <div className={`absolute left-0 md:left-1/2 -translate-x-1/2 md:-translate-x-1/2 w-6 h-6 bg-white border-4 border-red-500 rounded-full z-10`}></div>

                                        {/* Content card */}
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
                    </div>
                </div>
            </section>

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
                                        +1 (850) 055-84691
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <FAQComponent/>
            </section>
        </div>
    )
}

export default Page