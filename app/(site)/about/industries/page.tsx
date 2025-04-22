import React from 'react'
import ScrollButton from '../../components/valueBluePrint';
import Image from 'next/image';
import Link from 'next/link';
import IndustriesAccordion from '../../components/IndustriesAccordion';

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
            description:
                'We harness advanced AI capabilities such as predictive analytics, NLP, and conversational AI (chatbots, virtual assistants) to optimize business processes and customer engagement. Using tools like GPT-4, TensorFlow, and more, we tailor AI solutions to meet the unique challenges of your business.',
            images: ['/gpt.png', '/tensorflow.png'],
        },
        {
            title: 'Mobile App Development',
            description:
                'At CodeAutomation, we specialize in custom mobile app development for both iOS and Android. Whether it\'s building innovative native apps or cross-platform solutions, we ensure your mobile applications deliver seamless user experiences and meet your business goals.',
            images: ['/IOS-1.png', '/android.png'],
        },
        {
            title: 'Web App Development',
            description:
                'Our expertise extends to custom web applications built for performance, scalability, and flexibility. We use cutting-edge technologies to deliver secure, responsive, and user-friendly web apps that meet the highest industry standards.',
            images: ['/web.png'],
        },
        {
            title: 'AI-Powered Workflow Automation',
            description:
                'We integrate AI-driven workflow automation solutions that streamline your business processes, reduce operational costs, and enhance efficiency. Our automation systems continuously learn and adapt to optimize decision-making across all departments.',
            images: ['/ai-automation.jpg'],
        },
        {
            title: 'Cloud Solutions',
            description:
                'With expertise in AWS, Azure, and Google Cloud, we design and implement cloud infrastructure that scales with your business. Whether it’s hosting, computing, or storage, we provide secure and scalable solutions tailored to your needs.',
            images: ['/aws-1.png', '/azure-1.png'],
        },
        {
            title: 'Robotic Process Automation (RPA)',
            description:
                'We use platforms like UiPath and Automation Anywhere to deploy RPA solutions that automate repetitive tasks, freeing up your team to focus on higher-value work while improving accuracy and speed.',
            images: ['/uipath.png', '/automation-any.jpg'],
        },
        {
            title: 'Manual & Automation Testing',
            description:
                'At CodeAutomation, we ensure that your software meets the highest quality standards with comprehensive manual testing and automation testing services. Our manual testing covers all aspects of functionality, usability, and performance, while our automation testing solutions, powered by tools like Selenium, Appium, and Cypress, accelerate testing cycles and improve accuracy. We specialize in end-to-end test automation frameworks and CI/CD integrations for seamless quality assurance.',
            images: ['/selenium-1.png', '/appium-1.png'],
        },
        {
            title: 'DevOps & CI/CD Integration',
            description:
                'We streamline your software development lifecycle with DevOps practices and CI/CD pipelines using tools like Jenkins, GitLab, and Docker. This enables continuous delivery, faster release cycles, and reduced risk of manual errors.',
            images: ['/jenkins.png', '/docker-1.png'],
        },
        {
            title: 'Blockchain & Distributed Ledger Technologies',
            description:
                'For businesses in need of secure, transparent transactions, we implement blockchain technologies that ensure data integrity and provide tamper-proof solutions, particularly in industries like finance and supply chain.',
            images: ['/blockchain-1.png'],
        },
        {
            title: 'No-Code/Low-Code Development',
            description:
                'We provide no-code/low-code platforms that empower your teams to create and modify workflows with minimal technical effort, accelerating your time to market and enhancing business agility.',
            images: ['/nocode.png'],
        },
        {
            title: 'Edge Computing',
            description:
                'CodeAutomation enables real-time data processing at the edge. With AI models deployed on edge devices, we deliver low-latency solutions for smart cities, IoT, and industrial automation applications.',
            images: ['/edge_computing.png'],
        },
        {
            title: 'Data Infrastructure & ETL Pipelines',
            description:
                'Our expertise in data infrastructure and ETL pipelines ensures seamless integration, transformation, and analysis of data across systems, enabling businesses to derive actionable insights for better decision-making.',
            images: ['/infrastructure.jpg'],
        },
        {
            title: 'Cybersecurity & Compliance',
            description:
                'We prioritize security and compliance, ensuring that all our solutions adhere to GDPR, HIPAA, CCPA, and other regulatory standards. Your data and applications are protected with the highest security protocols.',
            images: ['/cybersecurity.png',],
        },
        {
            title: 'Big Data & Analytics',
            description:
                'With Apache Spark and Tableau, we provide powerful big data and analytics solutions that help businesses unlock insights from large datasets, enabling smarter decision-making and improved business outcomes.',
            images: ['/apache_spark.png', '/tableau.png'],
        },
        {
            title: 'Natural Language Processing (NLP)',
            description:
                'We build advanced NLP solutions for tasks like sentiment analysis, text classification, and automated content generation, driving business intelligence and customer insights.',
            images: ['/nlp.png'],
        },
        {
            title: 'AI Ethics & Governance',
            description:
                'CodeAutomation is committed to creating ethical and transparent AI solutions. We design AI systems that comply with ethical standards and regulatory frameworks, ensuring fairness, accountability, and transparency in all automated processes.',
            images: ['/ai-ethics.png'],
        },
    ];

    const industriesServe = {
        heading: "Industries We Empower",
        description:
            "At CodeAutomation, we offer a unique combination of custom software development and AI business automation to drive innovation and streamline processes for businesses across the globe. Whether it's building cutting-edge software solutions or automating workflows with advanced AI technologies, we are your one-stop partner for digital transformation.",
        bulletPoints: [
            {
                _id: "healthcare",
                heading: "Healthcare & Healthtech",
                bulletPoints: [
                    "Challenge: Manual processes slow patient care and increase administrative burdens.",
                    "Solutions: Custom Software Development: Develop tailored EHR/EMR systems that are secure, interoperable, and scalable for seamless data sharing.",
                    "AI Business Automation: Automate patient onboarding, claims processing, and diagnostics with AI-driven, HIPAA-compliant workflows.",
                    "IoT Integrations: Enable remote health monitoring via wearables and real-time health data tracking.",
                    "Manual & Automation Testing: Perform manual testing to ensure healthcare systems comply with strict regulations and automation testing for consistent, error-free performance.",
                    "Services Delivered: AI-driven diagnostic tools for early disease detection.",
                    "Telehealth platforms with automated scheduling and virtual consultations.",
                    "Wearable device integration for chronic disease management.",
                    "Regulatory-compliant data encryption for enhanced security."
                ]
            },
            {
                _id: "retail",
                heading: "E-Commerce & Retail",
                bulletPoints: [
                    "Challenge: Cart abandonment, inventory mismanagement, and impersonal customer journeys.",
                    "Solutions: Custom Software Development: Build custom e-commerce platforms with integrated AR/VR try-ons and AI chatbots for 24/7 customer support.",
                    "AI Business Automation: Use AI-powered personalization to offer dynamic product recommendations and targeted marketing.",
                    "GHL Automation: Sync Shopify with GoHighLevel to automate abandoned cart recovery and SMS marketing campaigns.",
                    "Inventory Optimization: Apply AI forecasting and IoT sensors to predict stock levels and prevent supply chain disruptions.",
                    "Services Delivered: Custom e-commerce platforms with AI-driven personalization for a dynamic shopping experience.",
                    "AI chatbots that provide 24/7 customer support and instant query resolution.",
                    "Dynamic pricing engines powered by machine learning.",
                    "Multi-channel campaign analytics for tracking and optimizing digital marketing efforts."
                ]
            },
            {
                _id: "finance",
                heading: "Finance, FinTech & Banking",
                bulletPoints: [
                    "Challenge: Fraud risks, manual compliance processes, and slow customer onboarding.",
                    "Solutions: Custom Software Development: Design mobile banking apps with biometric authentication and secure, user-friendly interfaces.",
                    "AI Business Automation: Use AI models to detect fraud in real time and perform automated risk assessments.",
                    "RPA for KYC/AML: Automate document verification and regulatory reporting processes with robotic process automation (RPA).",
                    "Blockchain Solutions: Implement secure transaction systems powered by blockchain for transparency and security.",
                    "Services Delivered: Mobile banking apps with biometric authentication for secure access.",
                    "AI-driven fraud detection systems using machine learning to spot anomalies in real time.",
                    "Automated KYC/AML workflows to streamline compliance.",
                    "Blockchain-based payment solutions for secure, transparent transactions."
                ]
            },
            {
                _id: "real-estate",
                heading: "Real Estate & PropTech",
                bulletPoints: [
                    "Challenge: Disjointed buyer journeys and inefficient lead management.",
                    "Solutions: Custom Software Development: Build property management systems and virtual reality (VR) property tours for an immersive experience.",
                    "AI Business Automation: Automate lead follow-ups, client communication, and virtual property tours using AI-driven CRM systems.",
                    "IoT Smart Homes: Integrate IoT devices for remote property monitoring and real-time alerts for property maintenance.",
                    "Marketing Automation: Use AI-powered marketing automation to target specific buyer segments and manage email/SMS campaigns for open houses.",
                    "Services Delivered: Custom virtual reality (VR) property tours for an immersive buyer experience.",
                    "AI chatbots for instant buyer inquiries and property suggestions.",
                    "Automated lease management systems to simplify property management.",
                    "Predictive maintenance using IoT devices to monitor property health and alert owners."
                ]
            },
            {
                _id: "manufacturing",
                heading: "Manufacturing & Industrial Tech",
                bulletPoints: [
                    "Challenge: Production delays, quality control issues, and reliance on outdated systems.",
                    "Solutions: Custom Software Development: Develop ERP systems with real-time data and predictive maintenance features for manufacturing plants.",
                    "AI Business Automation: Leverage AI-powered predictive maintenance using IoT sensors to minimize equipment downtime.",
                    "RPA Workflows: Automate inventory management and supply chain logistics for seamless operations.",
                    "Digital Twins: Simulate production lines using AI to predict and optimize performance.",
                    "Services Delivered: IoT-based machine health monitoring to reduce downtime and improve operational efficiency.",
                    "AI-based quality control using computer vision to detect defects in manufacturing.",
                    "Real-time analytics for production lines, optimizing throughput.",
                    "Supplier portal integrations for streamlined procurement and logistics management."
                ]
            },
            {
                _id: "logistics",
                heading: "Logistics & Supply Chain",
                bulletPoints: [
                    "Challenge: Inefficient route planning, slow deliveries, and lack of real-time visibility.",
                    "Solutions: Custom Software Development: Build real-time shipment tracking dashboards and warehouse management systems to streamline logistics operations.",
                    "AI-Driven Route Optimization: Use AI algorithms for route planning that reduces fuel costs and delivery times.",
                    "IoT Tracking: Integrate IoT sensors for GPS-enabled fleet management and predictive ETAs.",
                    "RPA for Documentation: Automate customs clearance and invoice processing to reduce delays.",
                    "Services Delivered: Real-time shipment tracking and inventory management systems to boost efficiency.",
                    "AI-driven route optimization for fuel savings and timely deliveries.",
                    "Blockchain-powered supply chain solutions to ensure transparency and product authenticity.",
                    "Automated customs documentation for quicker border crossings and fewer delays."
                ]
            },
            {
                _id: "education",
                heading: "Education & EdTech",
                bulletPoints: [
                    "Challenge: Low student engagement, administrative inefficiencies, and outdated learning management systems (LMS).",
                    "Solutions: Custom Software Development: Develop learning management systems (LMS) and AI-powered tutoring platforms for personalized education.",
                    "AI Business Automation: Use NLP-powered AI chatbots to assist students and provide personalized learning paths.",
                    "Marketing Automation: Automate student enrollment and communication workflows with HubSpot CRM.",
                    "Virtual Classrooms: Integrate IoT-enabled interactive learning environments to enhance student engagement.",
                    "Services Delivered: Gamified e-learning platforms that engage students with interactive content.",
                    "AI-driven plagiarism detection tools for academic integrity.",
                    "Parent-teacher communication portals for real-time progress updates.",
                    "Predictive analytics for student success and personalized intervention strategies."
                ]
            }
        ]
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
                        <h1 className="text-2xl font-bold capitalize lg:text-4xl">Industries We Serve</h1>
                        <h2 className="mt-4 text-base lg:text-2xl lg:px-32">Discover how CodeAutomation delivers AI automation and custom software for industries like healthcare, finance, and e-commerce helping businesses streamline operations and drive growth.</h2>
                    </div>
                </div>
            </div>
            {/* Introduction */}
            <section className="w-full w-full bg-[#1D92FB] bg-opacity-10 ">
                <div className="max-w-7xl py-16 px-4 md:px-10 mx-auto grid md:grid-cols-2 gap-12 items-center">

                    {/* Text Content */}
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                            Industry-Specific Innovation
                        </h2>
                        <p className="text-gray-700 text-base md:text-lg mb-4">
                            At <span className="font-semibold text-blue-600">CodeAutomation</span>, we understand that each industry comes with its own set of challenges and opportunities. As a leading software consultancy with a strong presence in the USA, Canada, the UK, and Europe, we bring deep domain expertise and cutting-edge technologies to the table. Our end-to-end solutions, combining custom software development and AI-powered business automation, are designed to drive digital transformation across all industries.
                        </p>
                        <p className="text-gray-700 text-base md:text-lg mb-4">
                            Whether you&apos;re a startup aiming to scale or an enterprise looking to optimize your processes, we deliver measurable results that help you stay ahead of the competition. By seamlessly integrating AI, IoT, cloud solutions, and advanced automation into your workflows, we empower businesses to innovate, streamline operations, and drive sustainable growth.          </p>
                        <p className="text-gray-700 text-base md:text-lg mb-4">
                            From improving operational efficiency to enhancing customer engagement, our tailored solutions address industry-specific needs, ensuring that your business is equipped for both the present and the future.          </p>
                    </div>

                    {/* Image */}
                    <div className="w-full h-[300px] md:h-[400px] relative rounded-2xl shadow-lg overflow-hidden">
                        <Image
                            src="/industries-serve.jpg" // replace with your actual image
                            alt="Industries we serve"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </section>
            {/* Why Partner with CodeAutomation Section */}
            <section className=" py-16 px-6 md:px-12">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-2xl md:text-4xl font-bold mb-12 text-gray-900">Why Partner with CodeAutomation?</h2>
                    <div className="grid md:grid-cols-3 gap-8 text-center">
                        {content.map((item, idx) => (
                            <div key={idx} className="bg-gray-300 bg-opacity-10 p-6 rounded-2xl shadow-sm hover:shadow-md transition">
                                <h3 className="text-xl font-semibold mb-3 text-gray-800">{item.heading}</h3>
                                <p className="tex t-gray-600">{item.body}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* Tools And Technologies Section */}
            <section className=" w-full bg-[#1D92FB] bg-opacity-10">
                <div className="max-w-7xl mx-auto text-center py-16 px-6 md:px-12">
                    <h2 className="text-2x l md:text-4xl font-bold mb-6 text-gray-900 leading-tight">
                        Technology That Powers Every Industry at CodeAutomation
                    </h2>
                    <p className="text-gray-600 text-base md:text-lg max-w-3xl mx-auto mb-12">
                        At CodeAutomation, we don&apos;t just automate business processes — we build innovative, end-to-end software solutions that fuel digital transformation across industries.
                    </p>

                    <div className="flex flex-wrap justify-center -mx-4">
                        {technologies.map((tech, index) => (
                            <div
                                key={index}
                                className="w-full sm:w-1/2 md:w-1/3 px-4 mb-10"
                            >
                                <div className="bg-white p-6 h-full rounded-2xl shadow-md hover:shadow-lg transition duration-300 text-left">
                                    <div className="flex flex-wrap gap-3 justify-start items-center mb-4">
                                        {tech.images?.map((img, i) => (
                                            <img
                                                key={i}
                                                src={img}
                                                alt={tech.title}
                                                className="w-10 h-10 object-contain rounded"
                                            />
                                        ))}
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{tech.title}</h3>
                                    <p className="text-sm text-gray-600">{tech.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Industries We Serve Section */}
            {industriesServe && (
                <section className="px-6 md:px-16 md:max-w-[1440px] 2xl:max-w-[1540px] py-10 md:py-16">
                    <div className="flex flex-col">
                        <div className="flex gap-5 px-20 max-md:flex-wrap max-md:px-5">
                            <div className="flex flex-col flex-1 justify-center text-4xl text-sky-500 capitalize leading-[60px] max-md:max-w-full">
                                <div className="justify-center max-md:max-w-full">
                                    <h2 className="font-bold mb-6 text-2xl md:text-4xl text-black text-center capitalize leading-[60px]">
                                        {industriesServe.heading}
                                    </h2>
                                    <p className="text-gray-700 text-base max-w-6xl mx-auto text-center md:text-lg mb-4">
                                        {industriesServe.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <IndustriesAccordion bulletPoints={industriesServe?.bulletPoints || []} />
                    </div>
                </section>
            )}
            {/* Why Choose CA */}
            <section className="w-full bg-[#1D92FB] bg-opacity-10 py-16 px-4 md:px-10">
                <h2 className="text-2xl md:text-4xl font-bold text-center text-gray-900 mb-6">
                    Why Choose CodeAutomation
                </h2>
                <p className="text-gray-700 text-base text-center max-w-5xl mx-auto md:text-lg mb-6">
                    At CodeAutomation, we provide industry-first solutions that bridge custom software development with AI-powered automation. Whether it&apos;s transforming your operations with cutting-edge technology or automating complex workflows, our expertise enables businesses to scale faster, work smarter, and innovate continuously.
                </p>
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
                    {/* Image Section */}
                    <div className="w-full md:w-1/2">
                        <Image
                            src="/industries-1.jpg" // Replace with your image
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
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">Industry-First Approach</h3>
                                <p className="text-gray-600">
                                    We take the time to understand your unique challenges and deliver tailored solutions across industries such as healthcare, real estate, manufacturing, and more. Our focus on both software development and AI automation ensures that we address every aspect of your business needs, from operational improvements to customer engagement.
                                </p>
                            </div>

                            <div className="bg-white border border-gray-200 rounded-md shadow-sm p-6">
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">End-to-End Services</h3>
                                <p className="text-gray-600">
                                    From AI-driven automation that optimizes workflows, to HubSpot CRM integration that enhances customer relations, CodeAutomation offers a full spectrum of end-to-end services. We manage the entire lifecycle of your digital transformation—from initial consultation to ongoing support—so you can focus on what matters most.
                                </p>
                            </div>

                            <div className="bg-white border border-gray-200 rounded-md shadow-sm p-6">
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">Proven ROI</h3>
                                <p className="text-gray-600">
                                    Our case studies speak volumes, showing 40-60% efficiency gains and up to 30% cost reductions for our clients. By combining custom software development and AI business automation, we consistently deliver results that directly impact your bottom line, ensuring that your investment with us drives measurable outcomes.
                                </p>
                            </div>

                            <div className="bg-white border border-gray-200 rounded-md shadow-sm p-6">
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">Compliance & Security</h3>
                                <p className="text-gray-600">
                                    We build compliance and security into the heart of every solution, ensuring that your operations meet GDPR, HIPAA, CCPA, and other regulatory standards. At CodeAutomation, your data&apos;s security is never an afterthought—it&apos;s a core component of everything we do.
                                </p>
                            </div>

                            <div className="bg-white border border-gray-200 rounded-md shadow-sm p-6">
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">Global Support</h3>
                                <p className="text-gray-600">
                                    With 24/7 support across North America and Europe, we are always available to assist you. Our team is dedicated to ensuring the continuous success of your business, providing proactive solutions and quick resolution of any challenges that arise, no matter where you are.
                                </p>
                            </div>

                            <div className="bg-white border border-gray-200 rounded-md shadow-sm p-6">
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">Transform Your Industry with Precision</h3>
                                <p className="text-gray-600">
                                    At CodeAutomation, we empower industries to innovate and evolve through AI-powered automation and custom software development. Whether you&apos;re streamlining patient care in healthcare, revolutionizing retail with AI, or optimizing supply chains in manufacturing, we are your trusted partner for smarter, faster, and future-proof solutions.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* CTA after SubServices  */}
            <section
                className="px-6 md:px-16 py-10 md:py-16 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: "url(/Container.png)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className="container text-white mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    {/* Left side (Heading, Offer Text, and QA) */}
                    <div className="col-span-1 md:col-span-1">
                        <div className="flex flex-col w-full max-md:max-w-full">
                            <h2 className="text-3xl font-bold leading-none max-md:max-w-full">
                                Transform Your Industry with Precision
                            </h2>
                            <p className="mt-4 text-lg font-light leading-7 max-md:max-w-full">
                                At CodeAutomation, we empower industries to innovate and evolve through AI-powered automation and custom software development. Whether you&apos;re streamlining patient care in healthcare, revolutionizing retail with AI, or optimizing supply chains in manufacturing, we are your trusted partner for smarter, faster, and future-proof solutions.
                            </p>
                            <Link
                                href="https://calendly.com/adnanghaffar"
                                className="button"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ maxWidth: "320px" }}
                            >
                                Start your Project Today!
                            </Link>
                        </div>
                    </div>

                    {/* Right side (Image) */}
                    <div className="col-span-1 md:col-span-1 flex justify-center">
                        <div className="max-w-full h-[300px] md:h-full rounded-lg overflow-hidden">
                            <img
                                src="/offer.png"
                                alt="Transform Your Industry with Precision"
                                className="object-cover rounded-lg h-[300px]"
                            />
                        </div>
                    </div>
                </div>
            </section>
            {/* Section 1: Digital Transformation Journey */}
            <section className="w-full bg-white py-16 px-4 md:px-10">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
                    {/* Text */}
                    <div className="w-full md:w-1/2">
                        <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6">
                            Bridging Software Development & AI Business Automation
                        </h2>
                        <p className="text-gray-600 text-lg">At CodeAutomation, we seamlessly integrate custom software development with AI business automation, creating comprehensive solutions that help industries worldwide improve efficiency, reduce costs, and drive digital transformation. From building mobile and web applications to automating complex workflows with AI and RPA, we empower businesses to unlock new growth opportunities while staying ahead of the competition.</p>
                    </div>
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
                </div>
            </section>

        </div>
    )
}

export default Industries