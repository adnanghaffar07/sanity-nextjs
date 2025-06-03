// Example for Next.js App Router (`/app/usa/page.tsx`)
import {
    MapPinIcon,
    UserGroupIcon,
    ChatBubbleLeftRightIcon,
    ShieldCheckIcon,
    PhoneIcon,
    EnvelopeIcon,
    GlobeAltIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';

const services = [

    { title: "QA Testing & Automation", description: "Ensure the Highest Quality", slug: "qa-testing-services" },
    { title: "Mobile App Development", description: "Transform Ideas into Leading Mobile Apps", slug: "mobile-app-development-services" },
    { title: "AI Development Services", description: "Build Intelligent, Scalable AI Solutions", slug: "ai-software-development-services" },
    { title: "Software Development", description: "Desktop and Web Development Solutions", slug: "custom-software-development-services" },
    { title: "CMS", description: "Manage Digital Content", slug: "custom-cms-development-services" },
    { title: "Headless CMS", description: "Customized Headless-CMS Solutions", slug: "headless-cms" },
];

export const metadata = {
    title: 'CodeAutomation - Software Automation Company in Naperville, IL',
    description:
        "Visit CodeAutomation's U.S. office in Naperville, IL. We offer automation, custom development, QA, and business solutions tailored for American businesses.",
};

export default function USALocationPage() {
    return (
        <main className="w-full flex flex-col items-center">
            <div className="flex overflow-hidden relative flex-col pb-12 w-full font-light text-white lg:min-h-[700px] max-md:max-w-full">
                <img
                    className="top-0 left-0 object-cover absolute inset-0 size-full"
                    src="/usa-empire.jpg"
                    alt="Hero Image usa  Page"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-[#020C16] opacity-65"></div>
                <div className="relative flex flex-col items-center px-5 pt-48 pb-36 w-full lg:px-20 lg:pt-12 flex-grow">
                    <div className="lg:absolute lg:top-[300px] text-center lg:w-8/12 mx-auto">
                        <h1 className="text-2xl font-bold capitalize lg:text-4xl">Top Software Automation Company in Naperville, IL</h1>
                        <h2 className="mt-4 text-base lg:text-2xl lg:px-32">Helping U.S. Businesses Scale with Automation, Custom Development & QA Services
                        </h2>
                    </div>
                </div>
            </div>
            <section className="max-w-6xl mx-auto px-4 py-16 text-gray-800 font-sans">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
                    Your U.S. Technology Partner in Naperville, IL
                </h2>

                <p className="text-lg mb-8 text-center max-w-3xl mx-auto">
                    At <strong className="font-semibold #1d92fb">CodeAutomation</strong>, we proudly support businesses across the United States from our Naperville, Illinois office.
                    Our goal is to help organizations innovate and scale through modern software development, design, QA, and automation services.
                </p>

                <h3 className="text-2xl font-semibold mb-6 text-center">Our Core U.S. Services</h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, idx) => (
                        <Link
                            key={idx}
                            href={`/services/${service.slug}`}
                            className="bg-white border rounded-xl p-5 shadow-md hover:shadow-lg hover:border-blue-500 transition duration-300 block"
                        >
                            <h4 className="text-lg font-semibold mb-1 #1d92fb">{service.title}</h4>
                            <p className="text-sm text-gray-700">{service.description}</p>
                        </Link>
                    ))}
                </div>

                <div className="mt-10 text-center">
                    <p className="text-base text-gray-700 mb-4">
                        Looking to collaborate with a reliable local tech partner? Reach out to our Illinois team today or explore all our services.
                    </p>
                    <Link href="/services" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-blue-700 transition">
                        View All Services
                    </Link>
                </div>
            </section>

            <section className='bg-[#1D92FB] bg-opacity-10 w-full'>
                <div className="py-6 md:py-16 text-gray-800 max-w-6xl mx-auto px-4">
                    <h3 className="text-3xl font-semibold mb-10 text-center">Why Choose Our Naperville Office?</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="flex items-start gap-4 bg-white p-6 shadow-md rounded-2xl border">
                            <MapPinIcon className="w-8 h-8 #1d92fb mt-1" />
                            <div>
                                <h4 className="font-semibold mb-1">Local U.S. Presence</h4>
                                <p>Seamless collaboration, communication, and reliable support direct ly from our Illinois office.</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4 bg-white p-6 shadow-md rounded-2xl border">
                            <UserGroupIcon className="w-8 h-8 #1d92fb mt-1" />
                            <div>
                                <h4 className="font-semibold mb-1">Experienced U.S.-Based Team</h4>
                                <p>Our engineers and project managers understand the U.S. market and your specific business needs.</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4 bg-white p-6 shadow-md rounded-2xl border">
                            <ChatBubbleLeftRightIcon className="w-8 h-8 #1d92fb mt-1" />
                            <div>
                                <h4 className="font-semibold mb-1">Responsive Communication</h4>
                                <p>Quick turnaround with dedicated account managers to keep your project on track and transparent.</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4 bg-white p-6 shadow-md rounded-2xl border">
                            <ShieldCheckIcon className="w-8 h-8 #1d92fb mt-1" />
                            <div>
                                <h4 className="font-semibold mb-1">Secure Operations</h4>
                                <p>We adhere strictly to NDAs and U.S. data protection policies for maximum confidentiality and trust.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="max-w-7xl mx-auto px-4 py-16 text-gray-800">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start bg-white shadow-md rounded-2xl p-4 md:p-8 border border-blue-100">

                    {/* Left: Contact Details */}
                    <div className="space-y-5">
                        <h3 className="text-2xl font-bold text-black">Contact Us</h3>

                        <p className="flex items-start gap-3">
                            <MapPinIcon className="w-6 h-6 text-blue-600 mt-1" />
                            <span>
                                <span className="font-semibold text-gray-900">Address:</span><br />
                                Office 254, 1755 Park St Suite 200, Naperville, IL 60563
                            </span>
                        </p>

                        <p className="flex items-start gap-3">
                            <PhoneIcon className="w-6 h-6 text-blue-600 mt-1" />
                            <span>
                                <span className="font-semibold text-gray-900">Phone:</span>{' '}
                                <a href="tel:+18156148480" className="text-blue-600 underline hover:text-blue-800 transition">
                                    (815) 614-8480
                                </a>
                            </span>
                        </p>

                        <p className="flex items-start gap-3">
                            <EnvelopeIcon className="w-6 h-6 text-blue-600 mt-1" />
                            <span>
                                <span className="font-semibold text-gray-900">Email:</span>{' '}
                                <a href="mailto:hello@codeautomation.ai" className="text-blue-600 underline hover:text-blue-800 transition">
                                   info@codeautomation.ai
                                </a>
                            </span>
                        </p>

                        <p className="flex items-start gap-3">
                            <GlobeAltIcon className="w-6 h-6 text-blue-600 mt-1" />
                            <span>
                                <span className="font-semibold text-gray-900">Website:</span>{' '}
                                <a
                                    href="https://www.codeautomation.ai"
                                    className="text-blue-600 underline hover:text-blue-800 transition"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    www.codeautomation.ai
                                </a>
                            </span>
                        </p>
                    </div>

                    {/* Right: Google Map */}
                    <div className="overflow-hidden rounded-xl shadow-lg border border-blue-100 h-full">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2974.294149015259!2d-88.1493629!3d41.80042339999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x826bddf6d49803b3%3A0x8dde3722397be950!2sCodeAutomation.AI%20LLC%20%7C%20Custom%20Software%2C%20Mobile%20App%20and%20Web%20Development%20Company%20in%20Chicago%2C%20USA!5e0!3m2!1sen!2s!4v1748969444173!5m2!1sen!2s"
                            width="100%"
                            height="100%"
                            className="w-full h-full min-h-[500px]"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>

                        {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2974.294149015259!2d-88.1493629!3d41.80042339999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x826bddf6d49803b3%3A0x8dde3722397be950!2sCodeAutomation.AI%20LLC%20%7C%20Custom%20Software%2C%20Mobile%20App%20and%20Web%20Development%20Company%20in%20Chicago%2C%20USA!5e0!3m2!1sen!2s!4v1748969444173!5m2!1sen!2s" width="600" height="450" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe> */}
                    </div>

                </div>
            </section>


        </main>
    );
}
