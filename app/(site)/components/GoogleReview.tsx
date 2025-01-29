"use client"
import React, { useState } from "react";

const ReviewsSection = () => {
    const reviews = [
        {
            id: 1,
            name: "Syed Ali Ahmad Bukhari",
            time: "3 months ago",
            stars: 5,
            comment: "Success in Business Automation. We hired Code Automation to automate our entire sales process. The team worked efficiently and delivered exceptional results!",
            bgColor: "bg-red-200",
        },
        {
            id: 2,
            name: "Ryan M",
            time: "2 months ago",
            stars: 5,
            comment: "It was enjoyable working with them. They provided an automated solution that went beyond our expectations and demonstrated a genuine understanding of our demands. Highly recommended!",
            bgColor: "bg-blue-300",
        },
        {
            id: 3,
            name: "Javerya Saud",
            time: "2 months ago",
            stars: 5,
            comment: "The CodeAutomation team responds quickly, releases updates frequently, and provides strong customer service. Their dedication to keeping the tool at the forefront is evident!",
            bgColor: "bg-green-200",
        },
        {
            id: 5,
            name: "Tahir Javed",
            time: "5 months ago",
            stars: 5,
            comment: "It was a great experience working with them. Best web development company in Lahore, and Adnan was very professional. Excellent client service is provided. Their users are very important to them!",
            bgColor: "bg-purple-200",
        },
        {
            id: 6,
            name: "Muhammad Eijaz Akram",
            time: "9 months ago",
            stars: 5,
            comment: "In the modern business, CodeAutomation has been a game-changer for me. Under the visionary leadership of CEO Sir Adnan Ghaffar, this platform delivers exceptional results.",
            bgColor: "bg-pink-200",
        },
        {
            id: 7,
            name: "James William",
            time: "1 year ago",
            stars: 5,
            comment: "AWESOME! CodeAutomation team helped me automate my software and make it bug-free. Their prompt replies and fast work pace were remarkable. Highly Recommended!",
            bgColor: "bg-teal-200",
        },
        {
            id: 9,
            name: "Jandl Lia",
            time: "11 months ago",
            stars: 5,
            comment: "We are delighted with both of our projects with CodeAutomation.ai. They made our applications fully testable through automation, creating comprehensive reports of pass/fail test cases.",
            bgColor: "bg-orange-200",
        },
        {
            id: 10,
            name: "Mahnoor Asghar",
            time: "11 months ago",
            stars: 5,
            comment: "Exceptional experience working with Code Automation Company and project manager Bushra Rizwan. Their innovative solutions and dedication exceeded all expectations.",
            bgColor: "bg-cyan-200",
        },
        {
            id: 12,
            name: "Zeeshan Safdar",
            time: "1 year ago",
            stars: 5,
            comment: "Exceptional software house! Their expertise in automation is truly impressive. A game-changer for any business looking to embrace the future of automation.",
            bgColor: "bg-rose-200",
        },
    ];

    const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
    const [showFullComment, setShowFullComment] = useState(false);

    const currentReview = reviews[currentReviewIndex];

    const handleNext = () => {
        setShowFullComment(false);
        setCurrentReviewIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    };

    const handlePrevious = () => {
        setShowFullComment(false);
        setCurrentReviewIndex((prevIndex) =>
            prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
        );
    };

    return (
        <section className="relative  bg-[#F2F9FF] text-[#3C3C3C]">
            <div className="px-6 md:px-16 py-6 md:py-10 max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-2xl lg:text-3xl font-bold max-w-4xl mx-auto">
                        What Our Clients Say About Us
                    </h2>
                    <p className="mt-3 text-lg font-medium max-md:max-w-full">
                        Hear from businesses worldwide who trust us for their offshore development needs.                        </p>
                </div>
                <div className="mx-auto poppins grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Left Section */}
                    <div className="flex flex-col justify-center items-center ">
                        <h2 className="text-2xl lg:text-3xl text-black poppins font-bold">Excellent</h2>
                        <img
                            src="/5star.png"
                            alt="5 stars"
                            className="w-32 my-1"
                        />
                        <p className="text-md">Based on <span className="underline font-bold text-black">83 reviews</span></p>
                        <img
                            src="/google-logo.png"
                            alt="Google"
                            className="w-32 mt-1"
                        />
                        {/* Review Card */}
                        <div
                            className="block lg:hidden bg-[#F3F3F3] mt-8 flex items-start p-4 rounded-lg max-w-[462px]"
                        >
                            <div
                                className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-white ${currentReview.bgColor}`}
                            >
                                {currentReview.name.charAt(0)}
                            </div>
                            <div className="ml-4 max-w-[250px]">
                                <h3 className="font-semibold text-black">{currentReview.name}</h3>
                                <p className="text-md text-[#9D9D9D]">{currentReview.time}</p>
                                <img
                                    src="/5star.png"
                                    alt="5 stars"
                                    className="w-24 mb-4"
                                />
                                <p className="text-black text-lg">
                                    {showFullComment
                                        ? currentReview.comment
                                        : `${currentReview.comment.slice(0, 150)}...`}
                                </p>
                                {currentReview.comment.length > 140 && (
                                    <button
                                        onClick={() => setShowFullComment(!showFullComment)}
                                        className="text-blue-500 mt-2 underline"
                                    >
                                        {showFullComment ? "Show Less" : "Read More"}
                                    </button>
                                )}
                            </div>
                        </div>
                        {/* Arrows */}
                        <div className="relative mt-6">
                            {/* Left Arrow */}
                            <button
                                onClick={handlePrevious}
                                className="absolute left-[-40px] top-1/2 transform -translate-y-1/2"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="#CAC8C8"
                                    viewBox="0 0 24 24"
                                    className="w-8 h-8"
                                >
                                    <path d="M4.293 12l7.793-7.793a1 1 0 011.414 0l1.414 1.414a1 1 0 010 1.414L10.536 12l4.378 4.378a1 1 0 010 1.414l-1.414 1.414a1 1 0 01-1.414 0L4.293 12z" />
                                </svg>
                            </button>
                            {/* Review Card */}
                            <div
                                className="hidden lg:flex bg-[#F3F3F3] mt-8 flex items-start p-4 rounded-lg max-w-[462px] relative"
                            >
                                <div
                                    className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-white ${currentReview.bgColor}`}
                                >
                                    {currentReview.name.charAt(0)}
                                </div>
                                <div className="ml-4 max-w-[350px]">
                                    <h3 className="font-semibold text-black">{currentReview.name}</h3>
                                    <p className="text-md text-[#9D9D9D]">{currentReview.time}</p>
                                    <img
                                        src="/5star.png"
                                        alt="5 stars"
                                        className="w-24 mb-4"
                                    />
                                    <p className="text-black text-lg">
                                        {showFullComment
                                            ? currentReview.comment
                                            : `${currentReview.comment.slice(0, 150)}...`}
                                    </p>
                                    {currentReview.comment.length > 150 && (
                                        <button
                                            onClick={() => setShowFullComment(!showFullComment)}
                                            className="text-[#656565] mt-2"
                                        >
                                            {showFullComment ? "Show Less" : "Read More"}
                                        </button>
                                    )}
                                </div>
                            </div>
                            {/* Right Arrow */}
                            <button
                                onClick={handleNext}
                                className="absolute right-[-40px] top-1/2 transform -translate-y-1/2"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="#CAC8C8"
                                    viewBox="0 0 24 24"
                                    className="w-8 h-8 rotate-180"
                                >
                                    <path d="M4.293 12l7.793-7.793a1 1 0 011.414 0l1.414 1.414a1 1 0 010 1.414L10.536 12l4.378 4.378a1 1 0 010 1.414l-1.414 1.414a1 1 0 01-1.414 0L4.293 12z" />
                                </svg>
                            </button>
                        </div>


                    </div>

                    {/* Right Section - Map */}
                    <div className="rounded-lg overflow-hidden">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108921.09762832048!2d74.28223660341418!3d31.44760464534993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919055ce3897a39%3A0x3fd045ce5b387979!2sCodeAutomation!5e0!3m2!1sen!2s!4v1738082908335!5m2!1sen!2s" width="526" height="602" loading="lazy"></iframe>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ReviewsSection;
