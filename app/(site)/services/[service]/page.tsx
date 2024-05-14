// pages/index.js
"use client"
import { useState, useEffect } from "react";
import { client } from "../../../../sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";

export default function Service({ params }: { params: { service: string } }) {
  const [data, setData] = useState<ServiceData>({});

  useEffect(() => {
    async function fetchData() {
      const query = `*[_type == 'logicalServices' && urlPath == '${params.service}'][0]`;
      try {
        const fetchData = await client.fetch(query);
        setData(fetchData || {});
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, [params.service]);

  const handleDownload = async () => {
    try {
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
            anchor.download = "download.pdf";
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
  
  
  return (
    <div className="bg-gray-100">
      <div className="flex overflow-hidden relative flex-col pb-12 w-full font-light text-white lg:min-h-[700px] max-md:max-w-full">
        {data.heroImage && (
          <img
            className="top-0 left-0 object-cover absolute inset-0 size-full"
            src={urlForImage(data.heroImage).toString()}
            alt=""
          />
        )}
        <div className="absolute top-0 left-0 w-full h-full bg-[#020C16] opacity-65"></div>
        <div className="flex relative flex-col items-center lg:px-20 px-5 lg:pt-12 lg:pb-0 pt-48 pb-36 w-full max-md:px-5 max-md:max-w-full flex-grow">
          <div className="lg:absolute lg:top-[300px]">
            <div className="lg:text-4xl text-2xl font-bold text-center capitalize max-lg:mt-0 lg:w-8/12 mx-auto">
              <h2 className="title capitalize">{data.serviceTitle}</h2>
            </div>
            <div className="lg:text-2xl text-base text-center mt-4 max-md:max-w-full lg:px-32">
              {data.serviceDesc}
            </div>
          </div>
        </div>
      </div>
      {/* Introduction Section */}
      <section className="px-6 md:px-16 py-10 md:py-16 bg-white">
        <div className="container mx-auto flex flex-wrap items-center justify-center">
          {data.introductionSection?.introImage ? (
            <div className="w-full md:w-1/2 md:flex md:pl-8 md:justify-start mb-4">
              <Image
                src={urlForImage(data.introductionSection?.introImage).toString()}
                alt=""
                width={570}
                height={370}
              />
            </div>
          ) : (
            <div className="w-full  justify-center mb-4">
              <div className="max-w-2xl">
                <h2 className="text-3xl font-bold mb-8 text-center">
                  {data.introductionSection?.introHeading}
                </h2>
                <p className="text-lg text-gray-800 leading-relaxed text-center ">
                  {data.introductionSection?.introDesc}
                </p>
              </div>
              <div className="flex justify-center mt-8 p-5 bg-black text-white">
                <button onClick={handleDownload}>Download Brochure</button>
              </div>
            </div>
          )}
          {data.introductionSection?.introImage && (
            <div className="w-full md:w-1/2 md:justify-end">
              <div className="max-w-2xl">
                <h2 className="text-3xl font-bold mb-8">
                  {data.introductionSection?.introHeading}
                </h2>
                <p className="text-lg text-gray-800 text-justify">
                  {data.introductionSection?.introDesc}
                </p>
              </div>
              <div className="flex justify-center mt-8 p-5 bg-black text-white rounded-2xl">
                <button onClick={handleDownload}>Download Brochure</button>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
