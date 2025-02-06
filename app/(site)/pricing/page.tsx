import Link from 'next/link'
import React from 'react'
import ButtonScrollToSection from '../components/ButtonScrollToSection'

export const metadata = {
    title: "Affordable Pricing Plans for Software Development Services | CodeAutomation.ai",
    description: "Explore our transparent and cost-effective pricing plans for expert software development, web development, and app development services at CodeAutomation.ai.",
    keywords: [
      "software development pricing plans",
      "web development pricing",
      "app development pricing",
      "affordable pricing for development services",
      "custom software development pricing",
      "software development plans",
      "pricing for IT services",
      "development services pricing",
      "web and app development pricing",
    ],
    alternates: {
      canonical: "https://codeautomation.ai/pricing",
    },
    openGraph: {
      title: "Affordable Pricing Plans for Software Development Services | CodeAutomation.ai",
      description: "Explore our transparent and cost-effective pricing plans for expert software development, web development, and app development services at CodeAutomation.ai.",
      url: "https://codeautomation.ai/pricing",
      siteName: "CodeAutomation.ai",
      type: "website",
      images: [
        {
          url: "https://codeautomation.ai/price-plan.jpg",
          width: 1200,
          height: 630,
          alt: "CodeAutomation.ai Pricing Plans",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Affordable Pricing Plans for Software Development Services | CodeAutomation.ai",
      description: "Explore our transparent and cost-effective pricing plans for expert software development, web development, and app development services at CodeAutomation.ai.",
      images: ["https://codeautomation.ai/price-plan.jpg"],
    },
};

const PricePlan = () => {

    return (
        <div>
            {/* Hero Section */}
            <div className="flex overflow-hidden relative flex-col pb-12 w-full font-light text-white lg:min-h-[700px] max-md:max-w-full">
                <img
                    className="top-0 left-0 object-cover absolute inset-0 size-full"
                    src="/price-plan.jpeg"
                    alt="offshore software development company"
                />
                <div className="flex relative flex-col items-center lg:px-20 px-5 lg:pt-12 lg:pb-0 pt-48 pb-36 w-full max-md:px-5 max-md:max-w-full flex-grow">
                    <div className="lg:absolute lg:top-[300px]">
                        <div className="lg:text-4xl text-2xl font-bold text-center capitalize max-lg:mt-0 mx-auto">
                            <h1 className="title capitalize">Simple and Clear Pricing for Your Business Needs</h1>
                        </div>
                        <div className="lg:text-2xl mx-auto text-base text-center mt-4 max-md:max-w-full lg:px-32">
                            <h2> Cost-Effective Plans Designed for Every Business </h2>
                        </div>

                        <div className="flex flex-col sm:flex-row mx-auto pt-6 space-y-6 sm:space-y-0 sm:space-x-5 items-center justify-center">
                            <Link
                                href="https://calendly.com/adnanghaffar"
                                className="hover:bg-[#1d92fb] hover:text-white bg-[#f7e022] text-black font-semibold py-3 px-8 rounded-lg shadow-lg text-center w-fit"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Schedule a Call
                            </Link>

                        </div>

                    </div>
                </div>
            </div>
            {/* Included Section */}
            <section className="bg-[#1D92FB] bg-opacity-10">
                <div className="max-w-6xl text-[#3C3C3C] px-6 md:px-16 py-10 md:py-16 mx-auto">
                    {/* Content with Image on Left and Text on Right */}
                    <div className="flex flex-col md:flex-row items-center justify-between">
                        {/* Image Section on the Left */}
                        <div className="flex-1 md:mr-8">
                            <img
                                src="/plan-include.png"
                                alt="Our Case Studies"
                                className="w-full h-auto rounded-lg"
                            />
                        </div>

                        {/* Text Section on the Right */}
                        <div className="flex-1 mt-6 md:mt-0 md:ml-8">
                            <h3 className="text-2xl md:text-3xl font-semibold text-black mb-4">
                                What’s Included?
                            </h3>
                            <ul className="text-xl  list-disc pl-5 space-y-2">
                                <li>Full mobile app development (iOS & Android)</li>
                                <li>Seamless UI/UX design</li>
                                <li>End-to-end testing & quality assurance</li>
                                <li>Ongoing support & maintenance</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            {/* Special Pricing */}
            <section className="px-6 md:px-16 py-10 md:py-10 bg-white text-center">
                <h2 className="text-2xl md:text-3xl  font-bold text-[#3C3C3C] mb-12 md:mb-[70px]">
                    Special Pricing Limited Offer
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8 max-w-6xl z-10 mx-auto">
                    {/* Pricing Plan Cards */}
                    {[
                        { title: "Web App Development & Support", price: "$799", features: ["Complete web app development & maintanance"] },
                        { title: "Mobile App Development & Support", price: "$1344", oneTimeCost: "$599", features: ["Full development, publishing and ongoing support"], popular: true },
                        { title: "UI/UX Design (Web & Mobile)", price: "$199", features: ["Custom design for web & mobile apps"] },
                        { title: "Testing (Web & Mobile)", price: "$150", features: ["End-to-end testing to ensure quality and security"] },
                    ].map((plan, index) => (

                        <div
                            key={index}
                            className={`relative bg-[#1D92FB] text-white rounded-3xl py-4 px-3 flex flex-col items-center transition-all ${plan.popular ? "scale-105 shadow-lg" : ""
                                }`}
                        >
                            {/* Most Popular Tag (Appears Behind the Card) */}
                            {plan.popular && (
                                <div className="absolute -top-5 w-full flex justify-center z-0">
                                    <div className="bg-[#D3EAFF]  text-black text-sm font-semibold py-2 w-3/4 text-center rounded-t-lg shadow-md">
                                        Most Popular
                                    </div>
                                </div>
                            )}

                            {/* Plan Title */}
                            <h3 className="text-2xl font-semibold mt-6">{plan.title}</h3>

                            {/* Separator Line */}
                            <div className="w-40 h-[1px] bg-white my-3"></div>

                            {/* Pricing Details */}
                            {plan.oneTimeCost && (
                                <>
                                    <p className="text-4xl font-semibold">{plan.oneTimeCost}</p>
                                    <p className="text-sm mb-2 mt-1">One-time cost: (Setup)</p>
                                </>
                            )}
                            <p className="text-4xl font-semibold">{plan.price}</p>
                            <p className="text-sm mt-1">Monthly Cost</p>

                            {/* What's Included */}
                            <h4 className="text-2xl max-w-[150px] font-medium mt-6">What&apos;s Included</h4>

                            {/* Feature List */}
                            <ul className="mt-4 space-y-2">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-center space-x-2">
                                        <span className="w-5 h-5 flex items-start justify-start rounded-full text-[#1D92FB]">
                                            <img src="/tick.png" alt="Tick" className="w-full h-auto" />
                                        </span>
                                        <span className="font-xs">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            {/* Choose Plan Button (Custom for Popular Plan) */}
                            <button
                                className={`mt-6 px-6 py-2 rounded-full font-semibold ${plan.popular ? "bg-white text-black" : "bg-white text-black"
                                    }`}
                            >
                                {plan.popular ? "Upgrade Now" : "Choose Plan"}
                            </button>
                        </div>

                    ))}
                </div>

                <p className="text-lg  font-bold text-black mt-12 md:mt-[60px]">
                    This pricing is available for a limited time. Secure your app development today.                </p>
            </section>
            {/* Recent Products */}
            <section className="bg-[#1D92FB] bg-opacity-10 text-center">
                <div className='max-w-[1440px] mx-auto px-6 md:px-16 py-10 md:py-10'>
                    <h2 className="text-2xl md:text-3xl font-bold text-[#3C3C3C] mb-12">
                        Recent Products
                        <br />
                        We’ve Delivered:
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 z-10 mx-auto">
                        {/* Card 1 */}
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                            <div className="w-full">
                                <img src="/yakka.png" alt="Product 1" className="w-full h-[150px] object-cover" />
                            </div>
                            <div className="px-6 py-6">
                                <h3 className="text-xl font-semibold mb-4">Yakka</h3>
                                <p className="text-sm mb-4">Social networking app</p>

                                {/* Logos Row */}
                                <div className="flex justify-center space-x-4">
                                    <img src="/google-play.png" alt="Google Play" className="h-8 object-contain" />
                                    <img src="/app-store.png" alt="App Store" className="h-8 object-contain" />
                                </div>
                            </div>
                        </div>


                        {/* Card 2 */}
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                            <div className="w-full">
                                <img src="/northbin.png" alt="Product 1" className="w-full h-[150px] object-cover" />
                            </div>
                            <div className="px-6 py-6">
                                <h3 className="text-xl font-semibold mb-4">Court Trax</h3>
                                <p className="text-sm mb-4">Real-time offender monitoring</p>

                                {/* Logos Row */}
                                <div className="flex justify-center space-x-4">
                                    <img src="/google-play.png" alt="Google Play" className="h-8 object-contain" />
                                    <img src="/app-store.png" alt="App Store" className="h-8 object-contain" />
                                </div>
                            </div>
                        </div>
                        {/* Card 3 */}
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                            <div className="w-full">
                                <img src="/northbin.png" alt="Product 3" className="w-full h-[150px] object-cover" />
                            </div>
                            <div className="px-6 py-6">
                                <h3 className="text-xl font-semibold mb-4">NorthBin</h3>
                                <p className="text-sm mb-4">E-Commerce platform</p>

                                {/* Visit Website Link */}
                                <a href="https://northbin.com" target="_blank" rel="noopener noreferrer" className=" underline">
                                    Visit Website
                                </a>
                            </div>
                        </div>

                        {/* Card 4 */}
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                            <div className="w-full">
                                <img src="/getdandy.png" alt="Product 4" className="w-full h-[150px] object-cover" />
                            </div>
                            <div className="px-6 py-6">
                                <h3 className="text-xl font-semibold mb-4">getDandy</h3>
                                <p className="text-sm mb-4">Online reputation management</p>

                                {/* Visit Website Link */}
                                <a href="https://getdandy.com" target="_blank" rel="noopener noreferrer" className=" underline">
                                    Visit Website
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            {/* CAll to Action */}
            <section
                className="px-6 md:px-16 py-10 md:py-16 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: "url(/Container.png)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className="container text-white mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[1240px] items-center">
                    {/* Left side (Heading, Offer Text, and QA) */}
                    <div className="col-span-2">
                        <div className="flex flex-col w-full">
                            <h2 className="text-2xl mb-4 lg:text-3xl font-bold leading-none">
                                Let’s Get Started              </h2>
                            <p className="text-lg font-light max-w-2xl">
                                I’d love to discuss how we can make your app a reality. Let’s set up a quick call, when would be a good time for you?                </p>
                            <h3 className="my-4 text-xl font-bold leading-7 max-md:max-w-full">
                                Looking forward to working together.              </h3>
                            <ButtonScrollToSection
                                classes="bg-white text-[#1d92fb] hover:bg-[#f7e022] cursor-pointer mt-4 hover:text-black font-semibold py-3 px-2 rounded-lg shadow-lg text-center w-full sm:max-w-72"
                                content="Get Your Free Consultation Today"
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

        </div>
    )
}

export default PricePlan