
"use client"
import { useState, useEffect } from "react";
import { urlForImage } from "@/sanity/lib/image";
import { client } from "../../../sanity/lib/client";
import React from 'react';
import Link from 'next/link';
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";

interface Props {
  data: any;
  dataSub: any;// Define the type of data
}

const Brochure: React.FC<Props> = ({ data, dataSub }) => {
  const [sectionData, setSectionData] = useState<any>({});
  const { getUser, isAuthenticated } = useKindeBrowserClient()
  useEffect(() => {
    setSectionData(data);
  }, [data]);

  const handleDownload = async (service: any) => {
    try {
      if (!service.pdfFile) {
        console.error("Error: PDF file data is undefined");
        return;
      }
  
      const assetRef = service.pdfFile.asset._ref;
      const assetData = await client.getDocument(assetRef);
      const pdfUrl = assetData?.url;
  
      if (pdfUrl) {
        // Check if user is authenticated
        if (isAuthenticated) {
          // If user is authenticated, start download immediately
          startDownload(pdfUrl, assetData);
        } else {
          // If user is not authenticated, redirect to login page
          const currentUrl = encodeURIComponent(window.location.href);
          window.location.href = `/api/auth/login?redirectUrl=${currentUrl}`;
        }
      } else {
        console.error("Error: PDF URL is undefined");
      }
    } catch (error) {
      console.error("Error downloading PDF:", error);
    }
  };
  
  const startDownload = (pdfUrl: string, assetData: any) => {
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
  };
  

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center max-w-[1240px] mx-auto my-12 sm:my-12">
      {data.map((service: any) => (
        <div className="bg-transparent rounded-lg overflow-hidden shadow-lg transition duration-300 transform hover:scale-105 h-full" key={service._id}>
          <div className="p-6">
            <button onClick={() => handleDownload(service)}>
              <h3 className="text-lg font-semibold mb-4 hover:underline">{service.serviceCardTitle}</h3>
            </button>
            <ul>
              {service.subServices &&
                service.subServices.map((subServiceRef: any) => {
                  const subService = dataSub.find((item: any) => item._id === subServiceRef._ref);
                  return (
                    <li key={subServiceRef._key} className="flex items-center text-purple-700 mb-2 hover:underline cursor-pointer">
                      <button onClick={() => handleDownload(subService)}> {/* Pass subService instead of service */}
                        <div className="flex items-center text-purple-700 mb-2 hover:underline cursor-pointer">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M13.78 10.22a.75.75 0 0 0-1.06 1.06l2.5 2.5H3.75a.75.75 0 1 0 0 1.5h11.47l-2.5 2.5a.75.75 0 0 0 1.06 1.06l4.25-4.25a.75.75 0 0 0 0-1.06l-4.25-4.25z" clipRule="evenodd" />
                          </svg>
                          {subService && subService.serviceCardSub}
                        </div>
                      </button>
                    </li>
                  );
                })}

            </ul>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Brochure;
