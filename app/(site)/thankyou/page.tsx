import Link from 'next/link';
import React from 'react';

const page = () => {
    return (
        <div className="flex overflow-hidden relative flex-col pb-12 w-full font-light text-white lg:min-h-[700px] max-md:max-w-full">
            <img
                className="top-0 left-0 object-cover absolute inset-0 size-full"
                src="/thankyou.jpg"
                alt="thankyou"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-[#020C16] opacity-65"></div>
            <div className="flex relative flex-col items-center justify-center max-w-7xl mx-auto lg:px-20 px-5 lg:pt-12 lg:pb-0 lg:top-[100px] pb-36 w-full max-md:px-5 max-md:max-w-full flex-grow">
                <div className="flex flex-col items-center justify-center lg:transform lg:-translate-y-1/2 text-center">
                    <div className="lg:text-4xl text-2xl font-bold capitalize lg:w-8/12 mx-auto">
                        <h2 className="title capitalize">THANK YOU</h2>
                    </div>
                    <div className="md:text-3xl text-xl text-center mt-4 max-md:max-w-full lg:px-32">
                        We appreciate your time and visit to CodeAutomation
                    </div>
                    <div className="pt-8 flex items-center justify-center">
                        <Link
                            href="/"
                            className="bg-[#1d92fb] text-white py-3 px-5 font-semibold rounded-lg shadow-lg text-center w-full sm:w-48"
                        >
                            Back to Homepage
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;
