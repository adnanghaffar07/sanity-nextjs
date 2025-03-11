"use client"
import React, { useEffect, useState } from "react";
import LoginModal from "./LoginModal";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { useMediaQuery } from "react-responsive";

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

const PricingPlan = ({ data }: any) => {
    const [showModal, setShowModal] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const isMobile = useMediaQuery({ maxWidth: 768 });

    useEffect(() => {
        const token = Cookies.get("authToken") || localStorage.getItem("authToken");
        if (token) {
            setIsAuthenticated(true);
        }
    }, []);

    const router = useRouter();
    const handlePackageSelect = (packageName: string) => {
        router.push(`/register?package=${encodeURIComponent(packageName)}`);
    };

    return (
        <div className="px-6 md:px-16 py-6 md:py-10 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url(/pricingplan.jpeg)", backgroundSize: "cover", backgroundPosition: "center" }}>

            <div className="max-w-7xl mx-auto text-center text-white">
                <h2 className="text-2xl mb-4 lg:text-4xl font-bold leading-[36px]">{data.title}</h2>
                <p className="text-lg mb-4 lg:text-4xl font-bold">{data.description}</p>
            </div>

            {isMobile ? (
                // Mobile Layout Basic
                <div>
                    <div className="relative max-w-full mx-auto bg-white border border-black shadow-lg mb-6">
                        <table className="relative w-full">
                            {/* Bottom Left Illustration */}
                            {isAuthenticated && (
                                <img
                                    src="/illus4.png"
                                    alt="Illustration"
                                    className="absolute bottom-0 left-0 w-[170px]"
                                />
                            )}
                            {isAuthenticated && (
                                <img
                                    src="/illus3.png"
                                    alt="Illustration"
                                    className="absolute bottom-0 left-0 w-[80px]"
                                />)}
                            <thead>
                                <tr className="">
                                    <th className="px-3 py-8 text-xl font-extrabold text-left border-r border-gray-300 text-black">PACKAGES</th>
                                    <th className="px-3 text-xl font-extrabold  text-left border-r border-gray-300 text-[#1D92FB]">BASIC</th>
                                </tr>
                                <tr className="font-bold text-lg">
                                    <td className="px-3 py-3 border-r bg-[#F3F9FF] border-gray-300">FEATURES</td>
                                    <td className="px-3 py-3 border-r border-gray-300">INCLUDED</td>
                                </tr>
                            </thead>
                            <tbody>
                                {(isAuthenticated ? data.featuresList : data.featuresList.slice(0, 4)).map((feature: any, index: any) => (
                                   <tr key={index} className="border-b border-gray-300 text-sm">
                                   <td className="px-3 py-2 font-semibold border-r border-gray-300 w-[45%]">{feature.name}</td>
                                   <td className="px-3 py-2 text-left border-r border-gray-300 w-[55%]">
                                       {feature?.basic?.included ? <CustomTick /> : "❌"}{" "}
                                       <span className="inline-block">{feature?.basic?.description}</span>
                                   </td>
                               </tr>
                               
                                ))}
                            </tbody>
                            {/* Hide prices and buttons if not authenticated */}
                            {isAuthenticated && (
                                <tfoot>
                                    <tr className="bg-gray-100 text-3xl text-black">
                                        <td className="px-6 py-4 font-semibold border-r border-gray-300">Price</td>
                                        <td className="px-6 py-4 text-center font-bold border-r border-gray-300">${data?.pricing?.basicPrice}</td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td className="p-3 text-center border-r font-bold border-gray-300">
                                            <button
                                                onClick={() => handlePackageSelect("Basic")}
                                                className="bg-[#F7E022]  text-black px-2 py-4 rounded-xl"
                                            >
                                                SUBMIT PROPOSAL
                                            </button>
                                        </td>
                                    </tr>
                                </tfoot>
                            )}
                        </table>
                    </div>

                    {/* Mobile Standard */}
                    <div className="relative max-w-7xl mx-auto bg-white border border-black shadow-lg mb-6">
                        <table className="relative w-full">
                            {/* Bottom Left Illustration */}
                            {isAuthenticated && (
                                <img
                                    src="/illus4.png"
                                    alt="Illustration"
                                    className="absolute bottom-0 left-0 w-[170px]"
                                />
                            )}
                            {isAuthenticated && (
                                <img
                                    src="/illus3.png"
                                    alt="Illustration"
                                    className="absolute bottom-0 left-0 w-[80px]"
                                />)}
                            <thead>
                                <tr className="">
                                    <th className="px-3 py-8 text-xl font-extrabold text-left border-r border-gray-300 text-black">PACKAGES</th>
                                    <th className="px-3 text-xl font-extrabold  text-left text-[#F7E022] border-r border-gray-300">STANDARD</th>
                                </tr>
                                <tr className="font-bold text-lg">
                                    <td className="px-3 py-3 border-r bg-[#F3F9FF] border-gray-300">FEATURES</td>
                                    <td className="px-3 py-3 border-r border-gray-300">INCLUDED</td>
                                </tr>
                            </thead>
                            <tbody>
                                {(isAuthenticated ? data.featuresList : data.featuresList.slice(0, 4)).map((feature: any, index: any) => (
                                    <tr key={index} className="border-b border-gray-300 text-sm">
                                        <td className="px-3 py-2 font-semibold border-r border-gray-300">{feature.name}</td>
                                        <td className="px-3 py-2 text-left border-r border-gray-300">
                                            {feature?.standard?.included ? <CustomTick /> : "❌"} {feature?.standard?.description}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                            {/* Hide prices and buttons if not authenticated */}
                            {isAuthenticated && (
                                <tfoot>
                                    <tr className="bg-gray-100 text-3xl text-black">
                                        <td className="px-3 py-4 font-semibold border-r border-gray-300">Price</td>
                                        <td className="px-3 py-4 text-center font-bold border-r border-gray-300">${data?.pricing?.standardPrice}</td>
                                    </tr>
                                    <tr>
                                        <td></td>

                                        <td className="p-3 text-center border-r font-bold border-gray-300">
                                            <button
                                                onClick={() => handlePackageSelect("Standard")}
                                                className="bg-[#F7E022] text-black px-3 py-4 rounded-xl"
                                            >
                                                SUBMIT PROPOSAL
                                            </button>
                                        </td>

                                    </tr>
                                </tfoot>
                            )}
                        </table>
                    </div>

                    {/* Mobile Enterprise */}
                    <div className="relative max-w-7xl mx-auto bg-white border border-black shadow-lg">
                        <table className="relative w-full">
                            {/* Top Right Illustration */}
                            <img
                                src="/illus1.png"
                                alt="Illustration"
                                className="absolute top-0 right-0 w-[150px]"
                            />

                            {/* Top Right Illustration */}
                            {isAuthenticated && (
                                <img
                                    src="/illus-1.png"
                                    alt="Illustration"
                                    className="absolute top-6 right-0 w-[130px]"
                                />)}
                            {/* Bottom Left Illustration */}
                            {isAuthenticated && (
                                <img
                                    src="/illus4.png"
                                    alt="Illustration"
                                    className="absolute bottom-0 left-0 w-[170px]"
                                />
                            )}
                            {isAuthenticated && (
                                <img
                                    src="/illus3.png"
                                    alt="Illustration"
                                    className="absolute bottom-0 left-0 w-[80px]"
                                />)}

                            <thead>
                                <tr className="">
                                    <th className="px-3 py-8 text-xl font-extrabold text-left border-r border-gray-300 text-black">PACKAGES</th>
                                    <th className="px-3 text-xl font-extrabold  text-left border-r border-gray-300 text-black">ENTERPRISE</th>
                                </tr>
                                <tr className="font-bold text-lg">
                                    <td className="px-3 py-3 border-r bg-[#F3F9FF] border-gray-300">FEATURES</td>
                                    <td className="px-3 py-3">INCLUDED</td>
                                </tr>
                            </thead>
                            <tbody>
                                {(isAuthenticated ? data.featuresList : data.featuresList.slice(0, 4)).map((feature: any, index: any) => (
                                    <tr key={index} className="border-b border-gray-300 text-sm">
                                        <td className="px-3 py-2 font-semibold border-r border-gray-300">{feature.name}</td>
                                        <td className="px-3 py-2 text-left">
                                            {feature?.enterprise?.included ? <CustomTick /> : "❌"} {feature?.enterprise?.description}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                            {/* Hide prices and buttons if not authenticated */}
                            {isAuthenticated && (
                                <tfoot>
                                    <tr className="bg-gray-100 text-3xl text-black">
                                        <td className="px-6 py-3 font-semibold border-r border-gray-300">Price</td>
                                        <td className="px-6 py-3 text-center text-black font-bold">${data?.pricing?.enterprisePrice}</td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td className="p-3 text-center font-bold">
                                            <button
                                                onClick={() => handlePackageSelect("Enterprise")}
                                                className="bg-black text-white px-3 py-4 rounded-xl"
                                            >
                                                SUBMIT PROPOSAL
                                            </button>
                                        </td>
                                    </tr>
                                </tfoot>
                            )}
                        </table>
                    </div>
                </div>

            ) : (
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
                            {(isAuthenticated ? data.featuresList : data.featuresList.slice(0, 6)).map((feature: any, index: any) => (
                                <tr key={index} className="border-b border-gray-300 text-sm">
                                    <td className="px-6 py-2 font-semibold border-r border-gray-300">{feature.name}</td>
                                    <td className="px-4 py-2 text-left border-r border-gray-300">
                                        {feature?.basic?.included ? <CustomTick /> : "❌"} {feature?.basic?.description}
                                    </td>
                                    <td className="px-4 py-2 text-left border-r border-gray-300">
                                        {feature?.standard?.included ? <CustomTick /> : "❌"} {feature?.standard?.description}
                                    </td>
                                    <td className="px-4 py-2 text-left">
                                        {feature?.enterprise?.included ? <CustomTick /> : "❌"} {feature?.enterprise?.description}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                        {/* Hide prices and buttons if not authenticated */}
                        {isAuthenticated && (
                            <tfoot>
                                <tr className="bg-gray-100 text-3xl text-black">
                                    <td className="px-6 py-4 font-semibold border-r border-gray-300">Price</td>
                                    <td className="px-6 py-4 text-center font-bold border-r border-gray-300">${data?.pricing?.basicPrice}</td>
                                    <td className="px-6 py-4 text-center font-bold border-r border-gray-300">${data?.pricing?.standardPrice}</td>
                                    <td className="px-6 py-4 text-center text-black font-bold">${data?.pricing?.enterprisePrice}</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td className="p-4 text-center font-bold border-r border-gray-300">
                                        <button
                                            onClick={() => handlePackageSelect("Basic")}
                                            className="bg-[#1D92FB] text-white px-4 py-4 rounded-xl"
                                        >
                                            SUBMIT PROPOSAL
                                        </button>
                                    </td>
                                    <td className="p-4 text-center border-r font-bold border-gray-300">
                                        <button
                                            onClick={() => handlePackageSelect("Standard")}
                                            className="bg-[#F7E022] text-black px-4 py-4 rounded-xl"
                                        >
                                            SUBMIT PROPOSAL
                                        </button>
                                    </td>
                                    <td className="p-4 text-center font-bold">
                                        <button
                                            onClick={() => handlePackageSelect("Enterprise")}
                                            className="bg-black text-white px-4 py-4 rounded-xl"
                                        >
                                            SUBMIT PROPOSAL
                                        </button>
                                    </td>
                                </tr>
                            </tfoot>
                        )}
                    </table>
                </div>
            )}

            {!isAuthenticated && (
                <div className="text-center mt-10">
                    <button onClick={() => setShowModal(true)} className="bg-[#0081FE] text-white px-6 w-48 py-3 rounded-xl text-lg">View Full Plan</button>
                </div>
            )}

            <LoginModal  isOpen={showModal} onClose={() => setShowModal(false)} onLoginSuccess={() => setIsAuthenticated(true)} />
        </div>
    );
};

export default PricingPlan;
