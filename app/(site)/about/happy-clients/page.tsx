import Link from 'next/link';
import React from 'react';

const HappyClients = () => {
    // Sample data for client videos and images
    const clients = [
        {
            id: 1,
            name: 'Client 1',
            videoUrl: '/client4.mp4',
        },
        {
            id: 2,
            name: 'Client 2',
            videoUrl: '/client9.mov',
        },
        {
            id: 3,
            name: 'Client 3',
            imageUrl: '/client3.jpeg',
        },
        {
            id: 4,
            name: 'Client 4',
            imageUrl: '/client1.jpeg',
        },
        {
            id: 5,
            name: 'Client 5',
            imageUrl: '/client5.jpeg',
        },
        {
            id: 6,
            name: 'Client 6',
            imageUrl: '/client8.jpeg',
        },
        {
            id: 7,
            name: 'Client 7',
            imageUrl: '/client10.jpeg',
        },
        {
            id: 8,
            name: 'Client 8',
            imageUrl: '/client11.jpeg',
        },
        {
            id: 9,
            name: 'Client 9',
            imageUrl: '/client2.png',
        },
        // Add more clients as needed
    ];

    // Separate the first two clients from the rest
    const firstTwoClients = clients.slice(0, 2);
    const remainingClients = clients.slice(2);

    return (
        <div>
            {/* Hero Section with Background Video */}
            <div className="relative flex flex-col pb-12 w-full font-light text-white lg:min-h-[700px]">
                <video
                    className="absolute inset-0 object-cover w-full h-full"
                    muted
                    autoPlay
                    loop
                    playsInline
                    preload="auto"
                    poster="/client-hero.png" // Hero poster
                >
                    <source src="/client4.mp4" type="video/mp4" />
                </video>
                <div className="flex relative flex-col items-center lg:px-20 px-5 pt-12 w-full max-md:px-5 max-md:max-w-full flex-grow">
                    <div className="lg:absolute top-[270px] lg:top-[290px] 2xl:top-[330px] max-lg:mt-36 w-full px-2 md:px-8 xl:px-10">
                    <h2 className="text-3xl md:text-4xl text-center font-bold leading-[56px]">Celebrating Our Happy Clients</h2>

                        <div className="flex flex-col sm:flex-row mx-auto pt-8 space-y-6 sm:space-y-0 sm:space-x-5 items-center justify-center">
                            <Link
                                href="/case-studies"
                                className="bg-[#1d92fb] text-white  py-3 px-5 font-semibold rounded-lg shadow-lg text-center w-full sm:w-48"
                            >
                                Our Case Studies
                            </Link>
                            <Link
                                href="https://calendly.com/adnanghaffar"
                                className="bg-[#f7e022]  text-black  font-semibold py-3 px-5 rounded-lg shadow-lg text-center w-full sm:w-48"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Schedule a Call
                            </Link>
                        </div>
                        {/* Clutch and Trustpilot section - displayed in a row */}
                        <div className="flex justify-center items-center gap-8 mt-8">
                            <a
                                href="https://clutch.co/profile/codeautomationai#highlights"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-center"
                            >
                                <img
                                    src="/Clutch.png"
                                    alt="clutch-icon"
                                    width={130}
                                    height={40}
                                />
                            </a>
                            <a
                                href="https://www.trustpilot.com/review/codeautomation.ai"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-center"
                            >
                                <img
                                    src="/Trustpilot.png"
                                    alt="Trustpilot-icon"
                                    width={130}
                                    height={40}
                                    className="mb-3"
                                />
                            </a>
                        </div>
                    </div>

                </div>
            </div>

            {/* Client Testimonials Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-16">
                <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-12">
                    Moments with Our Clients
                </h2>

                {/* First Grid for First Two Items */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12 mb-12">
                    {firstTwoClients.map((client) => (
                        <div
                            key={client.id}
                            className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105"
                        >
                            {client.videoUrl ? (
                                <div className="relative h-94">
                                    <video                                    
                                        controls
                                        className="w-full h-full object-cover rounded-t-xl"
                                    >
                                        <source src={client.videoUrl} type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                </div>
                            ) : (
                                <div className="">
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Second Grid for Remaining Items */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 lg:gap-12">
                    {remainingClients.map((client) => (
                        <div
                            key={client.id}
                            className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105"
                        >
                            {client.videoUrl ? (
                                <div className="relative h-64">
                                    <video
                                        controls
                                        className="w-full h-full object-cover rounded-t-xl"
                                    >
                                        <source src={client.videoUrl} type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                </div>
                            ) : (
                                <div className="relative h-84">
                                    <img
                                        src={client.imageUrl}
                                        alt={client.name}
                                        className="w-full h-full object-cover rounded-t-xl"
                                    />
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HappyClients;
