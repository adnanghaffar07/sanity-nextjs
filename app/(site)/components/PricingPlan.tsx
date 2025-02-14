"use client"
import React, { useEffect, useState } from "react";
import LoginModal from "./LoginModal";
import Cookies from "js-cookie";

const CustomTick = () => (
    <svg
        className="inline-block w-5 h-5 text-black"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
);


const PricingPlan = () => {
    const [showModal, setShowModal] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const token = Cookies.get("authToken") || localStorage.getItem("authToken");
        if (token) {
            setIsAuthenticated(true); // User is authenticated if token is found
        }
    }, []);

    return (
        <div className="px-6 md:px-16 py-6 md:py-10 bg-cover bg-center bg-no-repeat"
            style={{
                backgroundImage: "url(/pricingplan.jpeg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}>

            <div className="max-w-7xl mx-auto text-center text-white">
                <h2 className="text-2xl mb-4 lg:text-4xl font-bold leading-none">
                    Mobile App Development Services
                </h2>
                <p className="text-2xl mb-4 lg:text-4xl font-bold">
                    Price Plan
                </p>
            </div>

            <div className="relative max-w-7xl mx-auto bg-white border border-black shadow-lg overflow-x-auto">
                <table className="relative w-full border-collapse border border-gray-300">
                    {/* Top Right Illustration */}
                    <img
                        src="/illus1.png"
                        alt="Illustration"
                        className="absolute top-0 right-0 w-[200px]"
                    />

                    {/* Top Right Illustration */}
                    {isAuthenticated && (
                        <img
                            src="/illus-1.png"
                            alt="Illustration"
                            className="absolute top-6 right-0 w-[200px]"
                        />)}
                    {/* Bottom Left Illustration */}
                    {isAuthenticated && (
                        <img
                            src="/illus4.png"
                            alt="Illustration"
                            className="absolute bottom-0 left-0 w-[280px]"
                        />
                    )}
                    {isAuthenticated && (
                        <img
                            src="/illus3.png"
                            alt="Illustration"
                            className="absolute bottom-0 left-0 w-[140px]"
                        />)}

                    {/* Top Center Illustration */}
                    <img
                        src="/illus2.png"
                        alt="Illustration"
                        className="absolute top-0 left-[40%] transform -translate-x-1/2 w-[300px]"
                    />


                    {/* Bottom Center Illustration (Slightly Overlapping the Bottom Line) */}
                    {isAuthenticated && (
                        <img
                            src="/illus5.png"
                            alt="Illustration"
                            className="absolute -bottom-[-160px] left-1/2 transform -translate-x-1/2 w-[250px]"
                        />)}
                    <thead>
                        <tr className="">
                            <th className="px-6 py-8 text-2xl font-extrabold text-left border-r border-gray-300 text-black">PACKAGES</th>
                            <th className="px-6 text-2xl font-extrabold  text-left border-r border-gray-300 text-[#1D92FB]">BASIC</th>
                            <th className="px-6 text-2xl font-extrabold  text-left text-[#F7E022] border-r border-gray-300">STANDARD</th>
                            <th className="px-6 text-2xl font-extrabold  text-left border-r border-gray-300 text-black">ENTERPRISE</th>
                        </tr>
                        <tr className="font-bold text-xl">
                            <td className="px-6 py-3 border-r bg-[#F3F9FF] border-gray-300">FEATURES</td>
                            <td className="px-6 py-3 border-r border-gray-300">INCLUDED</td>
                            <td className="px-6 py-3 border-r border-gray-300">INCLUDED</td>
                            <td className="px-6 py-3">INCLUDED</td>
                        </tr>
                    </thead>
                    <tbody>
                        {(isAuthenticated ? features : features.slice(0, 6)).map((feature, index) => (
                            <tr key={index} className="border-b border-gray-300 text-sm">
                                <td className="px-6 py-2 font-semibold border-r border-gray-300">{feature.name}</td>
                                <td className="px-4 py-2 text-left border-r border-gray-300">
                                    {feature.basic.included ? <CustomTick /> : "❌"} {feature.basic.description}
                                </td>
                                <td className="px-4 py-2 text-left border-r border-gray-300">
                                    {feature.standard.included ? <CustomTick /> : "❌"} {feature.standard.description}
                                </td>
                                <td className="px-4 py-2 text-left">
                                    {feature.enterprise.included ? <CustomTick /> : "❌"} {feature.enterprise.description}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                    {/* Hide prices and buttons if not authenticated */}
                    {isAuthenticated && (
                        <tfoot>
                            <tr className="bg-gray-100 text-3xl text-black">
                                <td className="px-6 py-4 font-semibold border-r border-gray-300">Price</td>
                                <td className="px-6 py-4 text-center font-bold border-r border-gray-300">$1399</td>
                                <td className="px-6 py-4 text-center font-bold border-r border-gray-300">$1599</td>
                                <td className="px-6 py-4 text-center text-black font-bold">$2999</td>
                            </tr>
                            <tr>
                                <td></td>
                                <td className="p-4 text-center font-bold border-r border-gray-300">
                                    <button className="bg-[#1D92FB] text-white px-4 py-4 rounded-xl">SUBMIT A PROPOSAL REQUEST</button>
                                </td>
                                <td className="p-4 text-center border-r font-bold border-gray-300">
                                    <button className="bg-[#F7E022] text-black px-4 py-4 rounded-xl">SUBMIT A PROPOSAL REQUEST</button>
                                </td>
                                <td className="p-4 text-center font-bold">
                                    <button className="bg-black text-white px-4 py-4 rounded-xl">SUBMIT A PROPOSAL REQUEST</button>
                                </td>
                            </tr>
                        </tfoot>
                    )}
                </table>
            </div>
            {!isAuthenticated && (
                <div className="text-center mt-10">
                    <button
                        onClick={() => setShowModal(true)}
                        className="bg-[#0081FE] text-white px-6 w-48 py-3 rounded-xl text-lg"
                    >
                        View Full Plan
                    </button>
                </div>
            )}
            <LoginModal
                isOpen={showModal}
                onClose={() => setShowModal(false)}
                onLoginSuccess={() => setIsAuthenticated(true)} // Update auth state on success
            />

        </div>
    );
};

const features = [
    { name: "Mobile App Development (iOS/Android)", basic: { included: true, description: "Android Only" }, standard: { included: true, description: "iOS & Android" }, enterprise: { included: true, description: "iOS & Android + Custom Features" } },
    { name: "Mobile App Consultancy", basic: { included: true, description: "Free" }, standard: { included: true, description: "Free" }, enterprise: { included: true, description: "Free" } },
    { name: "Custom Mobile App Development", basic: { included: true, description: "Basic Features" }, standard: { included: true, description: "Advanced Customization" }, enterprise: { included: true, description: "Fully Custom with Enterprise-Grade Features" } },
    { name: "Cross-platform Development", basic: { included: false, description: "" }, standard: { included: true, description: "Flutter/React Native" }, enterprise: { included: true, description: "Custom Choice (Flutter, React Native, Kotlin, Swift)" } },
    { name: "Modern UI/UX Design", basic: { included: true, description: "Standard UI/UX" }, standard: { included: true, description: "Advanced UI/UX" }, enterprise: { included: true, description: "Tailored UI/UX for Brand Identity" } },
    { name: "Core Functionalities", basic: { included: true, description: "Up to 5 Features" }, standard: { included: true, description: "Up to 10 Features" }, enterprise: { included: true, description: "Unlimited Features" } },
    { name: "Backend & API Integration", basic: { included: true, description: "Basic APIs" }, standard: { included: true, description: "Advanced APIs" }, enterprise: { included: true, description: "Custom API Integration" } },
    { name: "Database & Storage Setup", basic: { included: true, description: "Firebase (Basic)" }, standard: { included: true, description: "Firebase/Supabase/SQL" }, enterprise: { included: true, description: "Custom Database (SQL, MongoDB, Firebase, etc.)" } },
    { name: "Secure Authentication", basic: { included: true, description: "Email & Password" }, standard: { included: true, description: "Google, Facebook, Apple Login" }, enterprise: { included: true, description: "Enterprise-Grade Security" } },
    { name: "Performance Optimization", basic: { included: true, description: "Basic Optimization" }, standard: { included: true, description: "Speed Optimization + Image Compression" }, enterprise: { included: true, description: "High-Performance Tuning & Load Balancing" } },
    { name: "Admin Panel", basic: { included: false, description: "" }, standard: { included: true, description: "Basic Admin Panel" }, enterprise: { included: true, description: "Full Admin Dashboard" } },
    { name: "Push Notifications", basic: { included: false, description: "" }, standard: { included: true, description: "OneSignal/Firebase" }, enterprise: { included: true, description: "Custom Push Notifications System" } },
    { name: "Security & Compliance", basic: { included: true, description: "SSL Encryption" }, standard: { included: true, description: "GDPR Compliance" }, enterprise: { included: true, description: "Advanced Security + Data Encryption" } },
    { name: "App Store & Play Store Submission", basic: { included: true, description: "Basic Submission" }, standard: { included: true, description: "Compliance Handling" }, enterprise: { included: true, description: "Full App Store Optimization (ASO)" } },
    { name: "Technical Support", basic: { included: true, description: "Email Support" }, standard: { included: true, description: "Email & Chat Support" }, enterprise: { included: true, description: "24/7 Priority Support & SLA" } },
    { name: "Performance Monitoring", basic: { included: false, description: "" }, standard: { included: true, description: "Monthly Reports" }, enterprise: { included: true, description: "Real-time Analytics & Reporting" } },
    { name: "Bug Fixes & Updates", basic: { included: true, description: "Fixing and Udates" }, standard: { included: true, description: "Fixing and Updates" }, enterprise: { included: true, description: "Ongoing Maintenance & SLA" } },
]

export default PricingPlan;