

import React from 'react'

const MobileIndustries = () => {
    const industries = [
        { icon: "/industries1.png", name: "Healthcare" },
        { icon: "/industries2.png", name: "Transportation" },
        { icon: "/industries3.png", name: "Lifestyle" },
        { icon: "/industries4.png", name: "Sports" },
        { icon: "/industries5.png", name: "Law & Order" },
        { icon: "/industries6.png", name: "Telecom" },
        { icon: "/industries7.png", name: "Finance" },
        { icon: "/industries8.png", name: "Traveling" },
        { icon: "/industries9.png", name: "Automobile" },
        { icon: "/industries10.png", name: "Petconomy" },
        { icon: "/industries11.png", name: "Food & Drink" },
        { icon: "/industries12.png", name: "Social" },
        { icon: "/industries13.png", name: "Human Resources" },
        { icon: "/industries14.png", name: "Construction" },
        { icon: "/industries15.png", name: "Business" },
        { icon: "/industries16.png", name: "Education" },
    ];

    return (
        <section className="py-16 px-4 bg-[#DAEEFF] text-center">
            {/* Heading */}
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Industries We Serve
            </h2>
            <p className="text-gray-600 max-w-4xl mx-auto mb-12">
                At CodeAutomation, we’re all about bringing fresh, innovative ideas to life. We’ve had the privilege of working across a range of industries, whether it’s transforming healthcare, streamlining transportation and logistics, shaping the future of entertainment, or boosting sports and fitness technologies. Each project brings its own set of challenges, but that’s what makes it exciting for us.
                We don’t just build solutions; we create custom-tailored strategies that help businesses grow and succeed in ways that matter. No matter your industry, we’re here to help you tackle those challenges head-on and drive the results you need.
                Let’s work together to make something great happen. Reach out today and let’s talk about how we can help take your business to new heights.
            </p>

            {/* Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto mb-10">
                {industries.map((industry, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center text-center sm:flex-row sm:text-left sm:items-center gap-3 bg-[#F9FAFB] py-4 px-4 rounded-lg shadow-sm hover:shadow-md transition"
                    >
                        {/* Icon */}
                        <img
                            src={industry.icon}
                            alt={industry.name}
                            className="h-10 w-10 object-contain"
                        />

                        {/* Name */}
                        <span className="text-gray-800 font-medium text-sm sm:text-base">
                            {industry.name}
                        </span>
                    </div>
                ))}
            </div>


            {/* Button */}
           {/* Contact Button */}
      <div className="mt-10">
        <a
          href="tel:+18505584691"
          className="bg-[#1D92FB] hover:bg-blue-700 cursor-pointer text-white font-semibold px-8 py-3 rounded-md transition duration-300 inline-block"
        >
          Get Started
        </a>

      </div>
        </section>
    );
}

export default MobileIndustries