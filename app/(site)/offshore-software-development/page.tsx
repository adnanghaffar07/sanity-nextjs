import Link from 'next/link'
import React from 'react'
import OffshorewhyChoose from '../components/OffshorewhyChoose';
import ButtonScrollToSection from '../components/ButtonScrollToSection';
import CaseStudiesHome from '../components/CaseStudies-Home';
import Offshoresoftware from '../components/Offshoresoftware';
import ReviewsSection from '../components/GoogleReview';
import FAQSection from '../components/OffshoreFaq';

export const metadata = {
    title: "Top Offshore Software Development Company | Expert Services",
    description: "Partner with a leading offshore software development company. We provide expert offshore IT development, web, and app solutions to drive your success.",
    keywords: [
      "offshore software development company",
      "offshore software development",
      "offshore software development services",
      "offshore development services",
      "offshore IT development",
      "offshore software development outsourcing",
      "offshore software development team",
      "offshore software outsourcing",
      "offshore development company",
      "offshore web development",
      "offshore app development",
    ],
    alternates: {
      canonical: "https://codeautomation.ai/offshore-software-development",
    },
    openGraph: {
      title: "Top Offshore Software Development Company | Expert Services",
      description: "Partner with a leading offshore software development company. We provide expert offshore IT development, web, and app solutions to drive your success.",
      url: "https://codeautomation.ai/offshore-software-development/",
      siteName: "CodeAutomation",
      type: "website",
      images: [
        {
          url: "https://codeautomation.ai/offshore.jpeg",
          width: 1200,
          height: 630,
          alt: "Offshore Software Development",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Top Offshore Software Development Company | Expert Services",
      description: "Partner with a leading offshore software development company. We provide expert offshore IT development, web, and app solutions to drive your success.",
      images: ["https://codeautomation.ai/offshore.jpeg"],
    },
  };

const OffshoreDevelopment = () => {

      
    const clientLogos = [
        { image: "/logo1.png", altText: "Client 1 Logo" },
        { image: "/logo2.png", altText: "Client 2 Logo" },
        { image: "/logo3.png", altText: "Client 3 Logo" },
        { image: "/logo4.png", altText: "Client 4 Logo" },
        { image: "/logo5.png", altText: "Client 5 Logo" },
    ];
    const points = [
        {
            number: 1,
            heading: "Global Talent Access:",
            description: "Collaborate with experienced developers from different regions.",
        },
        {
            number: 2,
            heading: "Cost Efficiency:",
            description: "Reduce operational and labor expenses significantly.",
        },
        {
            number: 3,
            heading: "Scalability:",
            description: "Scale your team as per your project needs without long-term commitments.",
        },
        {
            number: 4,
            heading: "Time Zone Advantage:",
            description: "Enjoy round-the-clock productivity by utilizing time zone differences.",
        },
    ];
    const cardData = [
        {
            index: 1,
            heading: "Offshore Web Development",
            description: "We create user-friendly, high-performing websites tailored to your business goals.",
        },
        {
            index: 2,
            heading: "Offshore App Development",
            description: "Our mobile app solutions deliver seamless user experiences on Android and iOS platforms.",
        },
        {
            index: 3,
            heading: "Offshore IT Development",
            description: "From enterprise software to cloud solutions, we provide IT development services that enhance your operational efficiency.",
        },
        {
            index: 4,
            heading: "Offshore Custom Software Development",
            description: "Our custom solutions are designed to meet the specific challenges of your business.",
        },
    ];
    const toolsTechSection = [
        {
            heading: "Frontend Technologies",
            detail: "Employ the best in front-end development technologies, including React, Angular, and Vue.js, to give your custom software applications rich, dynamic user interfaces.",
            images: [
                { _id: "1", image: { src: "/react.png", alt: "React Logo" } },
                { _id: "2", image: { src: "/angular.png", alt: "Angular Logo" } },
                { _id: "3", image: { src: "/vue.png", alt: "Vue Logo" } },
            ],
        },
        {
            heading: "Backend Technologies",
            detail: "Make the most of Node.js, Ruby on Rails, and Django—powerful back-end technologies that guarantee highly scalable and robust server-side solutions.",
            images: [
                { _id: "4", image: { src: "/rails.png", alt: "Rails Logo" } },
                { _id: "5", image: { src: "/django.png", alt: "Django Logo" } },
                { _id: "6", image: { src: "/node.png", alt: "NOdejs Logo" } },
            ],
        },
        {
            heading: "Database Management Systems",
            detail: "Execute high-level database handling with MongoDB, PostgreSQL, and MySQL in order to store and retrieve data way more efficiently.",
            images: [
                { _id: "7", image: { src: "/mongodb.png", alt: "MongoDB Logo" } },
                { _id: "8", image: { src: "/postrgresql.png", alt: "Postgresql Logo" } },
                { _id: "9", image: { src: "/mysql.png", alt: "Mysql Logo" } },
            ],
        },
        {
            heading: "Cloud Platforms",
            detail: "Get scalable, secure, and robust cloud solutions deployed on leading platforms, including AWS, Azure, and Google Cloud, for a flexible infrastructure.",
            images: [
                { _id: "10", image: { src: "/aws.png", alt: "AWS Logo" } },
                { _id: "11", image: { src: "/azure.png", alt: "Azure Logo" } },
                { _id: "12", image: { src: "/g-colud.png", alt: "Google Cloud Logo" } },
            ],
        },
        {
            heading: "DevOps Tools",
            detail: "Empower continuous integration and delivery with the most powerful DevOps line of sight development and deployment: Docker, Jenkins, and Kubernetes.",
            images: [
                { _id: "13", image: { src: "/docker.png", alt: "Docker Logo" } },
                { _id: "14", image: { src: "/jenkins.png", alt: "Jenkins Logo" } },
                { _id: "15", image: { src: "/kubernetes.png", alt: "kubernetes Logo" } },
            ],
        },
    ];
    const cylinder = [
        {
            image: "/cylinder1.png",
            title: "Expertise and Technology",
            points: ["Work with a skilled team specializing in software, web, and app development.", "Utilize modern tools and echnologies to create scalable and innovative solutions.", "Benefit from our agile development approach for flexibility and timely delivery."],
        },
        {
            image: "/cylinder2.png",
            title: "Cost-Effective and Flexible Solutions",
            points: ["Achieve significant cost savings while maintaining high-quality standards.", "Adapt easily with engagement models that suit your business needs, from dedicated teams to project-based support.", "Enjoy secure processes with full confidentiality and data protection."],
        },
        {
            image: "/cylinder3.png",
            title: "Seamless Collaboration and Support",
            points: ["Communicate effectively through tools like Slack and Trello for real-time updates.", "Rely on our rigorous quality assurance to deliver reliable results.", "Receive ongoing support and maintenance to ensure your software stays optimized and up-to-date."],
        },
    ];


    return (

        <>  
            {/* Hero Section */}
            <div className="flex overflow-hidden relative flex-col pb-12 w-full font-light text-white lg:min-h-[700px] max-md:max-w-full">
                <img
                    className="top-0 left-0 object-cover absolute inset-0 size-full"
                    src="/offshore.jpeg"
                    alt="offshore software development company"
                />

                <div className="absolute top-0 left-0 w-full h-full bg-[#020C16] opacity-65"></div>
                <div className="flex relative flex-col items-center lg:px-20 px-5 lg:pt-12 lg:pb-0 pt-48 pb-36 w-full max-md:px-5 max-md:max-w-full flex-grow">
                    <div className="lg:absolute lg:top-[300px]">
                        <div className="lg:text-4xl text-2xl font-bold text-center capitalize max-lg:mt-0 lg:w-8/12 mx-auto">
                            <h1 className="title capitalize">Offshore Software Development Company</h1>
                        </div>
                        <div className="lg:text-2xl mx-auto max-w-5xl text-base text-center mt-4 max-md:max-w-full lg:px-32">
                            <h2>Empower Your Business with Offshore Software Development Services </h2>
                        </div>

                        <div className="flex flex-col sm:flex-row mx-auto pt-6 space-y-6 sm:space-y-0 sm:space-x-5 items-center justify-center">
                            <Link
                                href="https://calendly.com/adnanghaffar"
                                className="bg-[#1d92fb] text-white hover:bg-[#f7e022] hover:text-black font-semibold py-3 px-2 rounded-lg shadow-lg text-center w-full sm:max-w-72"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Get Your Free Consultation Today
                            </Link>

                        </div>

                    </div>
                </div>
            </div>

            {/* Clients Section */}
            <div className="relative">
                {/* Background overlay */}
                <div className="absolute inset-0 bg-[#1D92FB] opacity-10 pointer-events-none"></div>

                {/* Main content */}
                <div className="flex flex-col justify-around px-6 py-10 md:px-8 md:py-16 max-w-9xl mx-auto relative">
                    {/* Title and Description */}
                    <div className="text-center text-[#3C3C3C]">
                        <h2 className="text-2xl lg:text-3xl font-bold max-md:max-w-full">
                            Our Offshore Software Development Success Stories                    </h2>
                        <p className="mt-4 text-lg font-medium max-md:max-w-full">
                            Proven Results Across Industries                    </p>
                    </div>

                    {/* Client Logos */}
                    <div className="flex flex-wrap gap-10 xl:gap-20  justify-center items-center mt-12 max-md:mt-10">
                        {clientLogos.map((logo: any, index: any) => (
                            <img
                                key={index}
                                src={logo.image}
                                alt={logo.altText}
                                className="object-cover h-8 xl:h-11 "
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* What is offshore development */}
            <div className="px-6 py-16 max-w-7xl mx-auto">
                {/* Heading Section */}
                <h2 className="text-2xl lg:text-3xl font-bold text-[#3C3C3C] text-center mb-10">
                    What is Offshore Software Development?
                </h2>

                {/* Content Section */}
                <div className="flex flex-col lg:flex-row items-center gap-10">
                    {/* Left Side: Text Content */}
                    <div className="flex-1">
                        <p className="text-lg text-black mb-4">
                            Offshore software development involves hiring a third-party team in
                            another country to handle software projects. It offers businesses
                            access to specialized skills, cost savings, and faster delivery.
                        </p>
                        <p className="text-lg text-black">
                            These companies act as extensions of in-house teams, providing services
                            like custom software, web and app development, and IT support. This
                            allows businesses to focus on core operations while ensuring efficient,
                            high-quality results.
                        </p>

                        {/* Points Section */}
                        <div className="mt-10 space-y-6">
                            {points.map((point, index) => (
                                <div key={index} className="flex items-start gap-4">
                                    {/* Number with Blue Background */}
                                    <div className="flex-shrink-0 bg-[#1D92FB] text-white font-bold text-xl w-12 h-12 flex items-center justify-center rounded-md">
                                        {point.number}
                                    </div>
                                    {/* Heading and Description */}
                                    <div>
                                        <h3 className="text-xl font-semibold mb-2 text-[#1D92FB]">
                                            {point.heading}
                                        </h3>
                                        <p className="text-[#3C3C3C]">{point.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Side: Image */}
                    <div className="flex-1">
                        <img
                            src="/whatisoffshore.jpeg"
                            alt="offshore software development"
                            className="w-full lg:h-[620px] rounded-lg shadow-lg object-cover"
                        />
                    </div>
                </div>
            </div>

            {/* Why Choose */}
            <OffshorewhyChoose />

            {/* Boost your Business */}
            <section
                className="px-6 md:px-16 py-10 md:py-16 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: "url(/Container.jpeg)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className="container text-white mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[1240px] items-center">
                    {/* Left side (Heading, Offer Text, and QA) */}
                    <div className="col-span-2">
                        <div className="flex flex-col w-full">
                            <h2 className="text-2xl lg:text-3xl font-bold leading-none">
                                Boost Your Business with Offshore Expertise                </h2>
                            <h3 className="my-4 text-xl font-bold leading-7 max-md:max-w-full">
                                Skilled Developers at Your Fingertips                </h3>
                            <p className="text-lg font-light max-w-2xl">
                                Access our talented offshore software development team to accelerate your project timelines.                   </p>

                            <ButtonScrollToSection
                                classes="bg-white text-[#1d92fb] hover:bg-[#f7e022] cursor-pointer mt-4 hover:text-black font-semibold py-3 px-2 rounded-lg shadow-lg text-center w-full sm:max-w-72"
                                content="Hire Expert Developers Now"
                                key="first-button"
                                destination="contact-box"
                            />
                        </div>
                    </div>

                    {/* Right side (Image) */}
                    <div className="col-span-1 md:col-span-1 flex justify-center">
                        <div className="max-w-full rounded-lg overflow-hidden">
                            <img
                                src="/boostbusiness.png"
                                alt="offshore development services"
                                className="object-cover h-[250px] rounded-lg"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Case Studies */}
            <div className="text-center py-6 px-6 md:py-10 md:px-16 text-[#3C3C3C]">
                <h2 className="text-2xl lg:text-3xl font-bold max-md:max-w-full">
                    Case Studies of Offshore Software Development
                </h2>
                <p className="mt-4 text-lg font-medium max-md:max-w-full">
                    Transforming Businesses Through Offshore Expertise                  </p>
                <CaseStudiesHome />
            </div>

            {/* Comprehensive offshore */}
            <section className="px-6 py-6 md:px-16 md:py-10 text-[#3C3C3C]">
                {/* Heading and Description */}
                <div className="text-center mb-12 ">
                    <h2 className="text-2xl lg:text-3xl font-bold max-w-4xl mx-auto">
                        Comprehensive Offshore Software Development Services Tailored to Your Needs
                    </h2>
                    <p className="mt-4 text-lg font-medium max-md:max-w-full">
                        Our range of services ensures that every business requirement is met with precision and expertise:               </p>
                </div>

                {/* Cards Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {cardData.map((card, index) => (
                        <div
                            key={index}
                            className="flex items-center bg-[#F7F7F7] rounded-xl p-6"
                        >
                            {/* Index */}
                            <div className="flex-shrink-0 bg-[#1D92FB] text-white font-bold text-xl lg:text-3xl h-16 w-16 lg:w-20 lg:h-20 flex items-center justify-center rounded-xl">
                                {card.index}
                            </div>

                            {/* Heading and Description */}
                            <div className="ml-4 lg:ml-6">
                                <h3 className="text-xl lg:text-2xl font-bold lg:max-w-[270px]">
                                    {card.heading}
                                </h3>
                                <p className="mt-1.5 lg:max-w-sm">{card.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Sclable offshore */}
            <section className="px-6 py-6 md:px-16 md:py-16 text-[#3C3C3C]">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
                    {/* Left Side: Text Content */}
                    <div className="flex-1 ">
                        {/* Heading */}
                        <h2 className="text-2xl lg:text-3xl font-bold leading-14">
                            Scalable Offshore IT Development Solutions for Every Business Size
                        </h2>
                        {/* Subheading */}
                        <h3 className="text-xl font-semibold my-6">
                            Technology and IT
                        </h3>
                        {/* Paragraphs */}
                        <p className="text-lg mb-4 max-w-lg">
                            Customized software design for progressive solution-developing technology and IT companies, enabling you to stay one step ahead within this ever-changing industry.
                        </p>
                        <p className="text-lg font-bold max-w-md my-8 ">
                            Whether you’re a startup or an enterprise,
                            our offshore IT development services
                            adapt to your needs:          </p>
                        {/* Bullet Points */}
                        <ul className="list-disc pl-8 space-y-4 max-w-lg">
                            <li className="text-lg">
                                <span className="font-bold">Startups:</span> Cost-effective solutions to get your idea off the ground.
                            </li>
                            <li className="text-lg">
                                <span className="font-bold">Mid-Sized Businesses:</span> Scalable options to support your growth.
                            </li>
                            <li className="text-lg">
                                <span className="font-bold">Enterprises:</span> Comprehensive services to manage complex projects.
                            </li>
                        </ul>
                    </div>

                    {/* Right Side: Image */}
                    <div className="flex-1">
                        <img
                            src="/scalableoffshore.jpeg"
                            alt="offshore it development"
                            className="w-full lg:h-[640px] rounded-lg shadow-md object-cover"
                        />
                    </div>
                </div>
            </section>

            {/* Offshore Software */}
            <Offshoresoftware />

            {/* Whats included */}
            <section className="px-6 md:px-16 py-10 md:py-16 relative text-[#3C3C3C] relative">
                <div className="absolute inset-0 bg-[#1D92FB] opacity-10 pointer-events-none"></div>
                <div className="max-w-2xl mx-auto relative">
                    {/* Heading */}
                    <h2 className="text-2xl lg:text-3xl font-bold text-center mb-10">
                        What’s Included and Not Included in Our
                        Offshore Development Services
                    </h2>
                    {/* Vertical Card */}
                    <div
                        className="relative bg-cover bg-center text-white overflow-hidden rounded-3xl"
                        style={{
                            backgroundImage: "url('/included-bg.png')",
                            minHeight: "400px",
                        }}
                    >
                        <div className="grid grid-cols-6 gap-4 bg-black text-white font-bold text-lg py-6 px-6">
                            <h2 className="col-span-3">Features</h2>
                            <h3 className="text-center col-span-1">Included</h3>
                            <h4 className="text-center col-span-2">Not Included</h4>
                        </div>

                        {/* Feature Items */}
                        <div className="grid grid-cols-6 gap-4 gap-y-6 p-6">
                            {[
                                { feature: "Dedicated Development Teams", included: true },
                                { feature: "Custom Software Solutions", included: true },
                                { feature: "Agile Development Process", included: true },
                                { feature: "Real-Time Communication", included: true },
                                { feature: "Post-Launch Support", included: true },
                                { feature: "Data Security Compliance", included: true },
                                { feature: "Scalable Pricing Models", included: true },
                                { feature: "On-Site Team Deployment", included: false },
                                { feature: "Third-Party Licensing Fees", included: false },
                                { feature: "Hardware Setup", included: false },
                                { feature: "24/7 Live Monitoring", included: false },
                                { feature: "In-House Team Training", included: false },
                            ].map((item, index) => (
                                <React.Fragment key={index}>
                                    {/* Feature */}
                                    <div className="col-span-3 text-lg text-[#3C3C3C]">{item.feature}</div>

                                    {/* Included */}
                                    <div className="col-span-1 flex justify-center items-center">
                                        {item.included && (
                                            <div className="w-6 h-6 bg-green-500 flex items-center justify-center rounded-full">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-6 w-6 text-white"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M16.707 5.293a1 1 0 00-1.414 0L9 11.586 5.707 8.293a1 1 0 10-1.414 1.414l4 4a1 1 0 001.414 0l7-7a1 1 0 000-1.414z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </div>
                                        )}
                                    </div>

                                    {/* Not Included */}
                                    <div className="col-span-2 flex justify-center items-center">
                                        {!item.included && (
                                            <div className="w-6 h-6 bg-red-500 flex items-center justify-center rounded-full">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-4 w-4 text-white"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 011.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </div>
                                        )}
                                    </div>
                                </React.Fragment>
                            ))}
                        </div>


                    </div>
                </div>
            </section>

            {/* Ready to transform */}
            <section
                className="px-6 md:px-16 py-10 md:py-16 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: "url(/Container.jpeg)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className="container text-white mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[1240px] items-center">
                    {/* Left side (Heading, Offer Text, and QA) */}
                    <div className="col-span-2">
                        <div className="flex flex-col w-full">
                            <h2 className="text-2xl lg:text-3xl font-bold leading-none">
                                Ready to Transform Your Business?
                            </h2>
                            <p className="text-lg lg:max-w-lg font-light mt-4">
                                At CodeAutomation, we enable our customers to meet their target by delivering an innovative solution through our software. With high expertise, we develop everything, from custom applications and mobile apps to enterprise systems.
                            </p>

                            <ButtonScrollToSection
                                classes="bg-white text-[#1d92fb] hover:bg-[#f7e022] cursor-pointer mt-4 hover:text-black font-semibold py-3 px-3 rounded-lg shadow-lg text-center w-fit"
                                content="Request Your Free Consultation Now"
                                key="first-button"
                                destination="contact-box"
                            />
                        </div>
                    </div>

                    {/* Right side (Image) */}
                    <div className="col-span-1 flex justify-center lg:justify-end">
                        <div className="max-w-full md:h-full rounded-lg overflow-hidden">
                            <img
                                src="/offshorespeaker.png"
                                alt="offshore software development team"
                                className="object-cover  h-[250px]  rounded-lg"
                            />
                        </div>
                    </div>
                </div>



            </section>

            {/* Tools And Technologies */}
            <section className="relative px-6 md:px-16 py-16 text-[#3C3C3C]">
                <div className="absolute inset-0 bg-[#1D92FB] opacity-10 pointer-events-none"></div>
                <div className="container mx-auto relative">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl lg:text-3xl font-bold max-w-4xl mx-auto">
                            Tools & Technologies
                        </h2>
                        <p className="mt-4 text-lg font-medium max-md:max-w-full">
                            Popular Technologies for Custom Software Development
                        </p>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center gap-[20px] lg:gap-[30px]">
                        {toolsTechSection.map((tool: any, toolIndex: any) => (
                            <div key={toolIndex} className="bg-white shadow-md p-6 w-auto sm:w-[400px] rounded-lg flex flex-col h-full">
                                <div className="flex flex-row justify-center mb-3">
                                    {tool.images.map((logo: any) => (
                                        <img
                                            key={logo._id}
                                            src={logo.image.src}
                                            alt={logo.image.alt || tool.heading}
                                            className="h-8 object-cover mb-2 mr-2"
                                        />
                                    ))}
                                </div>
                                <h3 className="text-xl text-center font-semibold mb-3">{tool.heading}</h3>
                                <p className="text-gray-700 text-center">{tool.detail}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Offshore Development Vendor  */}
            <section className="relative px-6 md:px-16 py-6 md:py-16 text-[#3C3C3C]">
                <div className="max-w-6xl mx-auto text-center">
                    {/* Heading and Description */}
                    <div className="text-center max-w-4xl mx-auto mb-12">
                        <h2 className="text-2xl lg:text-3xl font-bold ">
                            What You Get With Us as Your Offshore Development Vendor                         </h2>
                        <p className="mt-3 text-lg font-medium">
                            When you choose us as your offshore development vendor, you gain a trusted partner dedicated to delivering excellence. Here’s what we offer:
                        </p>
                    </div>

                    {/* Cylinders Section */}
                    <div className="flex flex-col md:flex-row justify-center gap-8 px-6">
                        {cylinder.map((feature, index) => (
                            <div
                                key={index}
                                className="relative w-full md:w-1/3 bg-[#F2F9FF] rounded-[100px] p-6 flex flex-col items-center"
                            >
                                {/* Round Image */}
                                <div className="w-32 h-32 rounded-full overflow-hidden flex items-center justify-center mb-4">
                                    <img src={feature.image} alt={feature.title} className="object-cover w-full h-full" />
                                </div>

                                {/* Title */}
                                <h3 className="text-xl font-semibold text-[#3C3C3C] max-w-[230px] mb-4">{feature.title}</h3>

                                {/* Bullet Points */}
                                <ul className="list-disc text-gray-600 text-center ">
                                    {feature.points.map((point, i) => (
                                        <li key={i} className="mb-2 max-w-[230px]">
                                            {point}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Map section */}
            <ReviewsSection />

            {/* Exclusive Offer */}
            <section
                className="px-6 md:px-16 py-10 md:py-16 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: "url(/Container.jpeg)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className="container text-white mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[1240px] items-center">
                    {/* Left side (Heading, Offer Text, and QA) */}
                    <div className="col-span-2">
                        <div className="flex flex-col w-full">
                            <h2 className="text-2xl lg:text-3xl font-bold leading-none">
                                Exclusive Offer:
                            </h2>
                            <h3 className="my-4 text-xl font-bold leading-7 max-md:max-w-full">
                                Consultation on Custom Web App Development for FREE              </h3>
                            <p className="text-lg lg:max-w-lg font-light">
                                Obtain free information about our consultation process and jumpstart your development of a custom web application. Learn how customized web solutions can redefine your concept of business growth and effectiveness in any operation.                            </p>

                            <ButtonScrollToSection
                                classes="bg-white text-[#1d92fb] hover:bg-[#f7e022] cursor-pointer mt-4 hover:text-black font-semibold py-3 px-3 rounded-lg shadow-lg text-center w-fit"
                                content="Get Your Free Consultation Today"
                                key="first-button"
                                destination="contact-box"
                            />
                        </div>
                    </div>

                    {/* Right side (Image) */}
                    <div className="col-span-1 flex justify-center lg:justify-end">
                        <div className="max-w-full md:h-full rounded-lg overflow-hidden">
                            <img
                                src="/offshorespeaker.png"
                                alt="offshore it development"
                                className="object-cover  h-[250px]  rounded-lg"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <FAQSection />
        </>
    )
}

export default OffshoreDevelopment