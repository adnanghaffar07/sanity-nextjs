"use client";

import { useState, useEffect } from "react";
import { urlForImage } from "@/sanity/lib/image";
import { client } from "../../../sanity/lib/client";
import React from 'react';
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";

interface Props {
  data: any;
  dataSub: any;
}

const Brochure: React.FC<Props> = ({ data, dataSub }) => {
  const [sectionData, setSectionData] = useState<any>({});
  const { getUser, isAuthenticated } = useKindeBrowserClient();

  useEffect(() => {
    setSectionData(data);
  }, [data]);

  useEffect(() => {
    if (isAuthenticated) {
      const user = getUser();
      if (user) {
        const userId = user.id;
        const userEmail = user.email;
        const userGivenName = user.given_name;
        const userFamilyName = user.family_name;

        // Push login event to data layer
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
          event: 'user_login',
          userId: userId,
          userGivenName: userGivenName,
          userFamilyName: userFamilyName,
          userEmail: userEmail
        });
      }
    }
  }, [isAuthenticated, getUser]);

  const handleDownload = async (service: any) => {
    try {
      console.log("Attempting to download PDF...");
      if (!service.pdfFile) {
        console.error("Error: PDF file data is undefined");
        return;
      }

      const assetRef = service.pdfFile.asset._ref;
      const assetData = await client.getDocument(assetRef);
      const pdfUrl = assetData?.url;

      if (pdfUrl) {
        console.log("PDF URL:", pdfUrl);
        console.log("User authenticated:", isAuthenticated);
        if (isAuthenticated) {
          console.log("User is authenticated. Starting download...");
          startDownload(pdfUrl, assetData);

          // Push download event to data layer
          const user = getUser();
          if (user && window.dataLayer) {
            window.dataLayer.push({
              event: 'brochure_download',
              brochureId: service._id,
              brochureName: assetData?.originalFilename || 'unknown',
              userId: user.id,
              userGivenName: user.given_name,
              userFamilyName: user.family_name,
              userEmail: user.email
            });
          }
        } else {
          console.log("User is not authenticated. Redirecting to login page...");
          const currentUrl = encodeURIComponent(window.location.href);
          window.location.href = "/api/auth/login?post_login_redirect_url=/brochure";
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
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center mx-auto my-12 sm:my-12">
      {data.map((service: any, index: number) => (
        <div className="card" key={service._id}>
          <button onClick={() => handleDownload(service)} className="focus:outline-none flex items-center space-x-2 mb-2">
            {service.cardIcon && (
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                <img src={urlForImage(service.cardIcon).toString()} alt={service.cardIcon.alt} className="h-7 w-7" />
              </div>
            )}
            <h3 className="text-lg text-start text-white font-semibold mb-0 hover:underline">{service.serviceCardTitle}</h3>
          </button>

          <ul>
            {service.subServices &&
              service.subServices.map((subServiceRef: any) => {
                const subService = dataSub.find((item: any) => item._id === subServiceRef._ref);
                return (
                  <li key={subServiceRef._key} className="flex text-start text-white mb-2 hover:underline cursor-pointer shadow-xl">
                    <button onClick={() => handleDownload(subService)} className="focus:outline-none">
                      <div className="flex text-start text-white mb-2 hover:underline cursor-pointer">
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
      ))}
      <style jsx>{`
        .card {
          background: black;
          border: 2px solid white;
          padding: 20px;
          opacity: 0.7;
          border-radius: 10px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
        }
        .card:hover {
          transform: translateY(-5px);
          box-shadow: 0 6px 10px rgba(0, 0, 0, 0.1);
        }
      `}</style>
    </section>
  );
};

export default Brochure;
