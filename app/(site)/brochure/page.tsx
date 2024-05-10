"use client";
import jsPDF from "jspdf";
import { useRef } from "react";
import React from "react";
import Image from "next/image";

// Functional component
function Brochure() {
  const handleGeneratePdf = () => {
    const doc = new jsPDF("p", "pt", "a4", false);

    const brochure = document.querySelector("#brochure") as HTMLElement;

    doc.html(brochure, {
      callback: function (pdf) {
        pdf.save("Brochure.pdf");
      },
    });
  };

  return (
    <div >
      <div className="flex overflow-hidden relative flex-col pb-12 w-full font-light  lg:min-h-[700px] max-md:max-w-full">
        <img
          className="top-0 left-0 object-cover absolute inset-0 size-full"
          src="/career-sub.jpg"
          alt="lifeatca"
        />
        <div className="absolute top-0 left-0 w-full h-full  opacity-75"></div>
        <div className="flex relative flex-col items-center lg:px-20 px-5 lg:pt-12 lg:pb-0 pt-48 pb-36 w-full max-md:px-5 max-md:max-w-full flex-grow">
          <div className="lg:absolute lg:top-[350px]">
            <div className="lg:text-4xl text-2xl font-bold text-center capitalize max-lg:mt-0 lg:w-8/12 mx-auto">
              <h2 className="title capitalize">BROCHURE</h2>
            </div>
            <div className="lg:text-2xl flex flex-col gap-5 items-center text-base text-center mt-4 max-md:max-w-full lg:px-32">
              <span>
                Apply now to be a part of our unique adventure in
                CodeAutomation.
              </span>

              <button
                type="button"
                className="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                onClick={handleGeneratePdf}
              >
                Download Brochure
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Brochure;
