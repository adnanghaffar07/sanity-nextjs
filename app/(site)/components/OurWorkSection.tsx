'use client';
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import { number } from "yup";



const OurWorkSection = () => 
{
  const [startIndex, setStartIndex]=useState(0);
  const [endIndex, setEndIndex]=useState(2);
  const [dataArray, setDataArray]=useState<any[]>([]);
  const [recentArray, setRecentArray]=useState<any[]>([]);
  const [topArray, settopArray]=useState<any[]>([]);

  

  useEffect(()=>{
    async function getData() {
      const query = `*[_type == 'portfolio'] | order(_updatedAt desc)`;
      try {
        const fetchData = await client.fetch(query);
        return fetchData || [];
      } catch (error) {
        console.error("Error fetching data:", error);
        return [];
      }
    }
    async function data(){
      const data = await getData();
      setDataArray(data);
      const recentArr = await data.filter((item: any) => item.group === "recent");
      setRecentArray(recentArr);
      const topArray = await data.filter((item: any) => item.group === "top");
      settopArray(topArray)
    };
    data();
      
    },[])
  
  return (
    <div className="self-center mt-16 w-full max-md:mt-10 max-w-[1582px] mx-auto">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
        <div className="flex flex-col w-3/5 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow lg:text-2xl md:text-xl text-base text-zinc-100 max-md:mt-10 max-md:max-w-full gap-10">
            {topArray &&
              topArray.map((item: any, index: any) => {
                if (index < 2) {
                  return (
                    <div
                      className="flex overflow-hidden relative flex-col justify-center w-full font-medium  max-md:max-w-full rounded-3xl image-container h-full"
                      key={item._key}
                    >
                      {item?.cardimage?.asset && (
                        <img
                          loading="lazy"
                          src={urlForImage(item.cardimage.asset)}
                          className="fixed-size rounded-3xl"
                          alt={item.cardimage.alt}
                        />
                      )}

                      {item.slug ? (
                        <Link
                          href={`/case-study/${item.slug}`}
                          className="absolute top-0 left-0 w-full h-full px-8 pb-7 rounded-3xl shadow-md bg-black bg-opacity-50 max-md:px-5 max-md:max-w-full flex items-end transition-opacity duration-300 hover:bg-opacity-20 overlay"
                        >
                          <span className="font-bold text-zinc-100">
                            {item.title} - {item.subtitle}
                          </span>
                        </Link>
                      ) : (
                        <div className="absolute top-0 left-0 w-full h-full px-8 pb-7 rounded-3xl shadow-md bg-black bg-opacity-50 max-md:px-5 max-md:max-w-full flex items-end transition-opacity duration-300 hover:bg-opacity-20 overlay">
                          <span className="font-bold text-zinc-100">
                            {item.title} - {item.subtitle}
                          </span>
                        </div>
                      )}
                    </div>
                  );
                }
              })}
          </div>
        </div>

        <div className="flex flex-col w-2/5 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow md:text-xl text-base font-bold whitespace-nowrap text-zinc-100 max-md:mt-10 max-md:max-w-full rounded-3xl lg:gap-5 gap-10">
            {recentArray &&
              recentArray.map((item: any, index: any) =>
               { 
                 if(index < 2)
                  {
                return (
                    <div
                      className="flex overflow-hidden relative flex-col justify-center rounded-3xl w-full shadow-md max-md:max-w-full image-container h-auto"
                      key={item._key}
                    >
                      {item?.cardimage?.asset && (
                        <img
                          loading="lazy"
                          src={urlForImage(item.cardimage.asset)}
                          className="fixed-size rounded-3xl"
                          alt={item.cardimage.alt}
                        />
                      )}

                      {item.slug ? (
                        <Link
                          href={`/case-study/${item.slug}`}
                          className="absolute top-0 overlay left-0 w-full h-full flex items-end pt-60 pr-16 pb-4 pl-5 rounded-3xl shadow-md bg-black bg-opacity-50 max-md:pt-10 max-md:pr-5 max-md:max-w-full transition-opacity duration-300 hover:bg-opacity-25"
                        >
                          {item.title} - {item.subtitle}
                        </Link>
                      ) : (
                        <div className="absolute top-0 overlay left-0 w-full h-full flex items-end pt-60 pr-16 pb-4 pl-5 rounded-3xl shadow-md bg-black bg-opacity-50 max-md:pt-10 max-md:pr-5 max-md:max-w-full transition-opacity duration-300 hover:bg-opacity-25">
                          {item.title} - {item.subtitle}
                        </div>
                      )}
                    </div>
                  );
                }
              } )}
            
          </div>
        </div>
      </div>

    <style jsx>{`
  .fixed-size {
    width: 600px;
    height: auto; /* Adjust height as needed */
    object-fit: cover;
  }
`}</style>   

      <div className="grid md:grid-cols-2 grid-cols-1 gap-5 justify-between max-md:flex-wrap mt-10">
        <div className="flex items-center text-base xl:text-xl lg:text-xl font-medium whitespace-nowrap order-2 md:order-1">
          <Link
            href="/case-study"
            className="cursor flex overflow-hidden relative gap-2 px-6 py-3 items-center  bg-[#F7E022] rounded-lg shadow-md"
          >
            <div className="relative grow self-center">
              Explore Our Portfolio
            </div>
            <img
              loading="lazy"
              src="/btn-arrow.svg"
              className="w-[22px] h-[26.8px]"
              alt="icon-arrow"
            />
          </Link>
        </div>

        <div className="flex gap-4 px-5 my-auto order-1 md:order-2 justify-end">
          <div  className="rounded-2xl bg-sky-950 lg:h-[21px] md:h-[11px] lg:w-[108px] w-[54px]" />
          <div className="bg-sky-800 rounded-2xl lg:h-[21px] md:h-[11px] lg:w-[108px] w-[54px]" />
          <div className="bg-sky-800 rounded-2xl lg:h-[21px] md:h-[11px] lg:w-[108px] w-[54px]" />
        </div>
      </div>
    </div>
  );
};

export default OurWorkSection;
