// IntroductionSection.tsx

"use client"
import { useState, useEffect } from "react";
import { urlForImage } from "@/sanity/lib/image";
import { client } from "../../../sanity/lib/client";

import Image from "next/image";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";

interface IntroductionSectionProps {
  data: any; // Define the type of data
}

const IntroductionSection: React.FC<IntroductionSectionProps> = ({ data }) => {
  // State for storing the fetched data
  const [sectionData, setSectionData] = useState<any>({});
  const { getUser, isAuthenticated } = useKindeBrowserClient()

  // Fetch data on component mount
  useEffect(() => {
    setSectionData(data);
  }, [data]);

  const handleDownload = async () => {
    const startDownload = async () => {
      try {
        if (!data.pdfFile) {
          console.error("Error: PDF file data is undefined");
          return;
        }

        const assetRef = data.pdfFile.asset._ref;
        const assetData = await client.getDocument(assetRef);
        const pdfUrl = assetData?.url;

        if (pdfUrl) {
          fetch(pdfUrl)
            .then((response) => response.blob())
            .then((blob) => {
              const blobUrl = URL.createObjectURL(blob);
              const anchor = document.createElement("a");
              anchor.href = blobUrl;

              // Set the downloaded file name
              const fileName = assetData?.originalFilename || "download.pdf"; // Get the original file name from asset data

              anchor.download = fileName;
              anchor.click();
            })
            .catch((error) => {
              console.error("Error fetching PDF:", error);
            });
        } else {
          console.error("Error: PDF URL is undefined");
        }
      } catch (error) {
        console.error("Error downloading PDF:", error);
      }
    };

    if (isAuthenticated) {
      // If user is authenticated, start download immediately
      startDownload();
    } else {
      // If user is not authenticated, redirect to login page
      const currentUrl = encodeURIComponent(window.location.href);
      window.location.href = `/api/auth/login?redirectUrl=${currentUrl}`;
    }
  };

  return (
    <div className="container mx-auto flex flex-wrap items-center justify-center">
      {sectionData.introductionSection?.introImage ? (
        <div className="w-full md:w-1/2 md:flex md:pl-8 md:justify-start mb-4">
          <Image
            src={urlForImage(sectionData.introductionSection?.introImage).toString()}
            alt=""
            width={570}
            height={370}
          />
        </div>
      ) : (
        <div className="w-full  justify-center mb-4">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold mb-8 text-center">
              {sectionData.introductionSection?.introHeading}
            </h2>
            <p className="text-lg text-gray-800 leading-relaxed text-center ">
              {sectionData.introductionSection?.introDesc}
            </p>
          </div>
          {sectionData.pdfFile && (
            <div className="flex cursor-pointer justify-center mt-8 p-5 bg-black text-white rounded-2xl">
              <button onClick={handleDownload}>Download Brochure</button>
            </div>
          )}
        </div>
      )}
      {sectionData.introductionSection?.introImage && (
        <div className="w-full md:w-1/2 md:justify-end">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold mb-8">
              {sectionData.introductionSection?.introHeading}
            </h2>
            <p className="text-lg text-gray-800 text-justify">
              {sectionData.introductionSection?.introDesc}
            </p>
          </div>
          {sectionData.pdfFile && (
            <div className="flex cursor-pointer justify-center mt-8 p-5 bg-black text-white rounded-2xl">
              <button onClick={handleDownload}>Download Brochure</button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default IntroductionSection;
