import React from 'react'
import ScrollButton from '../../components/valueBluePrint';
import Image from 'next/image';

const Industries = () => {
    const content = [
        {
            heading: 'Domain-Specific Expertise',
            body: 'With proven experience across healthcare, finance, retail, and more, we design solutions that address unique industry challenges while ensuring compliance and scalability.',
        },
        {
            heading: 'End-to-End Services',
            body: 'From AI automation to CRM integrations, we handle every stage of your digital journey, delivering measurable ROI and faster time-to-market.',
        },
        {
            heading: 'Cutting-Edge Technologies',
            body: 'Leverage our expertise in GPT-4, UiPath, AWS, and blockchain to build secure, future-proof systems.',
        },
    ];
    const technologies = [
        {
            title: 'AI & Machine Learning',
            description: 'Predictive analytics, NLP, and generative AI (GPT-4, TensorFlow).',
        },
        {
            title: 'Cloud Solutions',
            description: 'Scalable infrastructure via AWS, Azure, and Google Cloud.',
        },
        {
            title: 'RPA',
            description: 'Error-free workflows with UiPath and Automation Anywhere.',
        },
        {
            title: 'IoT & Smart Systems',
            description: 'Real-time monitoring and predictive maintenance.',
        },
        {
            title: 'Cybersecurity',
            description: 'GDPR, HIPAA, and CCPA-compliant systems.',
        },
        {
            title: 'Big Data & Analytics',
            description: 'Apache Spark and Tableau for actionable insights.',
        },
    ];
    const industriesServe = {
        heading: "Industries We Empower",
        description: "We tailor our solutions to the unique challenges of each industry, delivering automation, intelligence, and measurable value.",
        bulletPoints: [
            {
                _id: 'healthcare',
                heading: 'Healthcare & Healthtech',
                bulletPoints: [
                    'Challenge: Manual processes slow patient care and increase administrative burdens.',
                    'Solutions:',
                    'HIPAA-compliant AI automation for patient onboarding and diagnostics.',
                    'IoT-enabled remote health monitoring via wearables.',
                    'Custom EHR/EMR systems with secure data sharing.',
                    'Services Delivered:',
                    'AI-driven diagnostic tools',
                    'Telehealth platforms with automated scheduling',
                    'Compliance-focused data encryption',
                ],
            },
            {
                _id: 'retail',
                heading: 'E-Commerce & Retail',
                bulletPoints: [
                    'Challenge: Cart abandonment, inventory mismanagement, and impersonal customer journeys.',
                    'Solutions:',
                    'AI-powered product recommendations and dynamic pricing.',
                    'GHL automation for abandoned cart recovery and SMS campaigns.',
                    'IoT sensors + AI forecasting for inventory optimization.',
                    'Services Delivered:',
                    'AR/VR try-on platforms',
                    '24/7 AI chatbots',
                    'Multi-channel campaign analytics',
                ],
            },
            {
                _id: 'finance',
                heading: 'Finance, FinTech & Banking',
                bulletPoints: [
                    'Challenge: Fraud risks, manual compliance, and slow customer onboarding.',
                    'Solutions:',
                    'Real-time fraud detection with deep learning models.',
                    'RPA for KYC/AML document verification.',
                    'Blockchain for secure transaction systems.',
                    'Services Delivered:',
                    'Mobile banking apps with biometric authentication',
                    'Automated fraud detection systems',
                    'API integrations for payment gateways',
                ],
            },
            {
                _id: 'logistics',
                heading: 'Logistics & Supply Chain',
                bulletPoints: [
                    'Challenge: Inefficient route planning and lack of real-time visibility.',
                    'Solutions:',
                    'AI-driven route optimization to reduce fuel costs.',
                    'IoT-enabled GPS fleet tracking.',
                    'Blockchain for transparent supply chains.',
                    'Services Delivered:',
                    'Warehouse management systems',
                    'Real-time shipment dashboards',
                    'Demand forecasting tools',
                ],
            },
            {
                _id: 'education',
                heading: 'Education & EdTech',
                bulletPoints: [
                    'Challenge: Low engagement and administrative overload.',
                    'Solutions:',
                    'AI-powered tutoring with NLP chatbots.',
                    'Automated grading and attendance tracking.',
                    'IoT-enabled virtual classrooms.',
                    'Services Delivered:',
                    'Gamified e-learning platforms',
                    'Plagiarism detection tools',
                    'Predictive analytics for student success',
                ],
            },
        ],
    };

    return (
        <div className="w-full flex flex-col items-center">
            {/* Hero Section */}
            <div className="flex overflow-hidden relative flex-col pb-12 w-full font-light text-white lg:min-h-[700px] max-md:max-w-full">

                <img
                    className="top-0 left-0 object-cover absolute inset-0 size-full"
                    src="/industries.jpg"
                    alt="Hero Image Industries Page"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-[#020C16] opacity-65"></div>
                <div className="relative flex flex-col items-center px-5 pt-48 pb-36 w-full lg:px-20 lg:pt-12 flex-grow">
                    <div className="lg:absolute lg:top-[300px] text-center lg:w-8/12 mx-auto">
                        <h1 className="text-2xl font-bold capitalize lg:text-4xl">Leading Technology Consultancy in the USA, Canada, UK, and Europe</h1>
                        <h2 className="mt-4 text-base lg:text-2xl lg:px-32">Providing end-to-end digital transformation services powered by AI, RPA, IoT, and cybersecurity to startups and enterprises globally.</h2>
                    </div>
                </div>
            </div>
            {/* Why Partner with CodeAutomation Section */}
            <section className="w-full bg-[#1D92FB] bg-opacity-10">
                <div className="max-w-6xl py-16 px-6 md:px-12 mx-auto text-center">
                    <h2 className="text-2xl md:text-4xl font-bold mb-12 text-gray-900">Why Partner with Code Automation?</h2>
                    <div className="grid md:grid-cols-3 gap-8 text-center">
                        {content.map((item, idx) => (
                            <div key={idx} className="bg-gray-50 p-6 rounded-2xl shadow-sm hover:shadow-md transition">
                                <h3 className="text-xl font-semibold mb-3 text-gray-800">{item.heading}</h3>
                                <p className="text-gray-600">{item.body}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* Tools And Technologies Section */}
            <section className="py-16 px-6 md:px-12">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-2xl md:text-4xl font-bold mb-12 text-gray-900">Technology That Powers Your Success</h2>
                    <div className="grid md:grid-cols-3 gap-8 text-center">
                        {technologies.map((tech, index) => (
                            <div key={index} className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition">
                                <h3 className="text-xl font-semibold mb-3 text-gray-800">{tech.title}</h3>
                                <p className="text-gray-600">{tech.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* Industries We Serve Section */}
            {industriesServe && (
                <section className="px-6 md:px-16 py-10 md:py-16">
                    <div className="flex flex-col">
                        <div className="flex gap-5 px-20 max-md:flex-wrap max-md:px-5">
                            <div className="flex flex-col flex-1 justify-center text-4xl text-sky-500 capitalize leading-[60px] max-md:max-w-full">
                                <div className="justify-center max-md:max-w-full">
                                    <h2 className="font-bold  text-2xl md:text-4xl text-black text-center capitalize leading-[60px]">
                                        {industriesServe.heading}
                                    </h2>
                                </div>
                            </div>
                        </div>
                        <div className="relative h-auto flex flex-col justify-center overflow-hidden">
                            <div
                                className="flex gap-5 h-auto justify-start pl-20 mt-6 max-md:flex-wrap max-md:pl-5 hide-scrollbar"
                                id="scrollContainer"
                                style={{ overflowX: "auto" }}
                            >
                                {industriesServe?.bulletPoints.map(
                                    (item: any, index: number) => (
                                        <div
                                            key={item._id}
                                            className="h-auto flex-shrink-0 w-full sm:w-80 md:w-80 lg:w-1/4 bg-[#FBFBFB] border border-gray-300 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300 relative"
                                            style={{ minWidth: "calc(100% / 4 - 20px)" }} // Ensure 4 cards per row with spacing
                                        >
                                            {/* Index on the Left Side */}
                                            <div className="absolute top-6 left-6 rounded-lg bg-[#1D92FB] text-white text-xl font-bold px-4 py-2">
                                                {index + 1}
                                            </div>

                                            {/* Heading and Bullet Points */}
                                            <div className="px-5 py-7 pt-16 mt-6">
                                                <h3 className="text-xl font-semibold text-[#3C3C3C] mb-4">
                                                    {item.heading}
                                                </h3>
                                                <ul className="list-disc pl-5 space-y-2 text-[#3C3C3C]">
                                                    {item.bulletPoints?.map(
                                                        (bullet: string, bulletIndex: number) => (
                                                            <li key={bulletIndex}>{bullet}</li>
                                                        )
                                                    )}
                                                </ul>
                                            </div>
                                        </div>
                                    )
                                )}
                            </div>
                            <ScrollButton
                                scrollContainerId="scrollContainer"
                                totalItems={industriesServe?.bulletPoints.length} // Pass total items dynamically
                                itemsPerPage={3} // Adjust items per page based on your design
                            />
                        </div>
                    </div>
                </section>
            )}
            {/* Why Choose CA */}
            <section className="w-full bg-[#1D92FB] bg-opacity-10 py-16 px-4 md:px-10">
                <h2 className="text-2xl md:text-4xl font-bold text-center text-gray-900 mb-10">
                    Why Choose Code Automation
                </h2>
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
                    {/* Image Section */}
                    <div className="w-full md:w-1/2">
                        <Image
                            src="/trust.jpg" // Replace with your image
                            alt="Why Choose Code Automation"
                            width={600}
                            height={400}
                            className="rounded-lg shadow-md object-cover"
                        />
                    </div>

                    {/* Content Section */}
                    <div className="w-full md:w-1/2">
                        <div className="space-y-6">
                            <div className="bg-white border border-gray-200 rounded-md shadow-sm p-6">
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                    Proven ROI
                                </h3>
                                <p className="text-gray-600">
                                    Case studies show 40-60% efficiency gains and 30% cost reductions across industries.
                                </p>
                            </div>

                            <div className="bg-white border border-gray-200 rounded-md shadow-sm p-6">
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                    Compliance & Security
                                </h3>
                                <p className="text-gray-600">
                                    GDPR, HIPAA, and CCPA compliance are built into every solution.
                                </p>
                            </div>

                            <div className="bg-white border border-gray-200 rounded-md shadow-sm p-6">
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                    Global Support
                                </h3>
                                <p className="text-gray-600">
                                    24/7 assistance across North America and Europe.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Section 1: Digital Transformation Journey */}
            <section className="w-full bg-white py-16 px-4 md:px-10">
                <h2 className="text-2xl md:text-4xl font-bold text-center text-gray-900 mb-10">
                    Your Digital Transformation Journey
                </h2>
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
                    {/* Text */}
                    <div className="w-full md:w-1/2">


                        <div className="space-y-6">
                            {[
                                {
                                    title: "Consultation",
                                    desc: "Define goals and challenges.",
                                },
                                {
                                    title: "Solution Design",
                                    desc: "Tailored strategies using AI, RPA, or IoT.",
                                },
                                {
                                    title: "Implementation",
                                    desc: "Agile development with transparent updates.",
                                },
                                {
                                    title: "Support",
                                    desc: "Continuous optimization and compliance checks.",
                                },
                            ].map((item, index) => (
                                <div
                                    key={index}
                                    className="bg-gray-50 border border-gray-200 rounded-md shadow-sm py-3 px-6"
                                >
                                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-600">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Image */}
                    <div className="w-full md:w-1/2">
                        <Image
                            src="/transformation.jpg" // Replace with your image
                            alt="Digital Transformation Journey"
                            width={600}
                            height={400}
                            className="rounded-lg shadow-md object-cover"
                        />
                    </div>
                </div>
            </section>

            {/* Section 2: Flexible Engagement Models */}
            <section className="w-full py-16 px-4 md:px-10">
                <h2 className="text-2xl md:text-4xl font-bold text-center text-gray-900 mb-10">
                    Flexible Engagement Models
                </h2>
                <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
                    {/* Image */}
                    <div className="w-full md:w-1/2">
                        <Image
                            src="/engagement.jpg" // Replace with your image
                            alt="Flexible Engagement Models"
                            width={600}
                            height={400}
                            className="rounded-lg shadow-md object-cover"
                        />
                    </div>

                    {/* Text */}
                    <div className="w-full md:w-1/2">
                       <div className="space-y-6">
                            {[
                                {
                                    title: "Dedicated Teams",
                                    desc: "Scale resources as needed.",
                                },
                                {
                                    title: "Outsourced Solutions",
                                    desc: "Reduce overhead with expert support.",
                                },
                                {
                                    title: "Subscription-Based",
                                    desc: "QA and RPA services via a flexible SaaS model.",
                                },
                            ].map((item, index) => (
                                <div
                                    key={index}
                                    className="bg-white border border-gray-200 rounded-md shadow-sm py-3 px-6"
                                >
                                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-600">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Industries