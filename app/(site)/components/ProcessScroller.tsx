"use client";
import React from "react";
import Marquee from "react-fast-marquee";

interface Item {
  title: string;
  text: string;
  icon: string;
}

const items: Item[] = [
  {
    title: "Project Initiation",
    text: "Our team of development, UX design, and analysis experts can assist in creating new product concepts or improving existing performance.",
    icon: "/4.png",
  },
  {
    title: "Design",
    text: "Our talented design team creates visually appealing digital user experiences to solve practical issues and enhance key business metrics.",
    icon: "/3.png",
  },
  {
    title: "Development",
    text: "We create efficient, secure apps for your company, by product strategy, assembling a skilled team, and starting coding to give your brand a competitive edge.",
    icon: "/development-icon.svg",
  },
  {
    title: "Automate",
    text: "Product testing, also known as consumer or comparative testing, measures a product’s characteristics or capabilities to develop goods that meet specific technical criteria.",
    icon: "/automate-icon.svg",
  },
  {
    title: "Launch",
    text: "The final product is launched after client approval, fostering growth for both companies. Our industry continuously improves, and we ensure project safety.",
    icon: "/6.png",
  },
  {
    title: "Archives and Artifacts",
    text: "You are the project owner, entitled to our as-built documentation, specifications, test scripts, and release scripts for future analysis or development.",
    icon: "/5.png",
  },
];

interface CardProps {
  icon: string;
  title: string;
  text: string;
}

function Card({ icon, title, text }: CardProps) {
  return (
    <div className="flex flex-col p-6 min-w-[260px] max-w-[300px] h-72 border border-blue-400 bg-[#FAFAFA] rounded-md shadow-xl hover:shadow-2xl transition-shadow duration-300 mx-6">
      <div className="flex flex-col flex-grow">
        <div className="flex justify-center items-center w-14 h-14 bg-white rounded-full border border-gray-300 shadow mb-4">
          <img src={icon} alt={title} className="w-8 h-8" />
        </div>
        <h3 className="text-lg font-semibold text-blue-500 mb-2">{title}</h3>
        <p className="text-sm text-gray-600 flex-grow">{text}</p>
      </div>
    </div>
  );
}


export default function ProcessScroller() {
  return (
    <div className="w-full md:py-16 py-6">
      <div className="overflow-hidden select-none">
        <Marquee
          pauseOnHover={true}
          gradient={false}
          speed={40}
          className="flex space-x-6"
        >
          {items.map((item, index) => (
            <Card key={index} {...item} />
          ))}
        </Marquee>
      </div>
    </div>
  );
}
