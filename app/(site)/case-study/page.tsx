"use client";
import React, { useEffect, useState } from "react";
import HeroSectionComponent from "../components/HeroSectionComponent";
import Image from "next/image";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";

// async function getData() {
//   const query = `*[_type == 'portfolio'] | order(_updatedAt desc)`;
//   try {
//     const fetchData = await client.fetch(query);
//     return fetchData || [];
//   } catch (error) {
//     console.error("Error fetching data:", error);
//     return [];
//   }
// }

const page = () => {
  const [initialCards, SetInitialCards] = useState<any[]>([""]);
  const [isFiltered, SetIsFiltered] = useState<boolean>(false);
  const [originalCards, SetOriginalCards] = useState<any[]>([""]);
  const [showSelectedFilters, SetSelectedFilters] = useState<any[]>([""]);

  useEffect(() => {
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
    const dataFun = async () => {
      const data = await getData();
      const recentArray = await data.filter(
        (item: any) => item.group === "recent"
      );
      const topArray = await data.filter((item: any) => item.group === "top");
      const caseStudyData = data.filter(
        (item: any) => item.title == "CaseStudyInfo"
      );
      const initalArray = caseStudyData[0].cardItemsList;
      console.log(initalArray);
      SetInitialCards(initalArray);
      SetOriginalCards(initalArray);
      //SetSelectedFilters(data[0].cardItemsList[0]);
    };
    dataFun();
  }, []);

  function DisplaySelectedFilters() {
    SetInitialCards(showSelectedFilters);
  }

  function ResetFilters() {
    document
      .querySelectorAll("input")
      .forEach((item) => (item.checked = false));
    SetInitialCards(originalCards);
  }

  function GetFilteredData(option: any) {
    if (!isFiltered) {
      // If the checkbox is checked, show the filtered Cards Information
      const techGroup = originalCards.filter(
        (item: any) => item.group === option
      );
      SetInitialCards(techGroup);
      //SetSelectedFilters([...techGroup])
      SetIsFiltered(true);
    } else {
      //Show Original Cards Information
      SetInitialCards(originalCards);

      SetIsFiltered(false);
    }

    console.log("Selected Filters Info:", showSelectedFilters);
  }

  return (
    <>
      <HeroSectionComponent
        title="Case Studies"
        content="Explore our case study on code automation, showcasing how innovative strategies significantly enhance efficiency, reduce costs, and accelerate development in software projects."
        image="/CaseStudyHero.png"
      />

      <section className=" h-full flex flex-col  justify-center gap-4 bg-[#F3F3F3]">
        <div className="self-stretch text-5xl mt-20 text-center text-black capitalize leading-[60px] max-md:text-4xl max-md:leading-[51px]">
          CodeAutomation
          <br />
          Case Studies in Real World Application
        </div>

        <div className="text-xl font-light tracking-wide leading-7 text-center text-black">
          Case studies are essential because they offer detailed insights and
          practical examples of how theories work in real-world scenarios,
          helping to improve strategies and decision-making.
        </div>
      </section>

      <div className=" flex md:flex-row  justify-center mt-10 mb-10">
        {/* Filter Section    */}

        {/* <section className="md:w-auto sm:w-auto  text-white mx-auto  bg-sky-500 max-w-[480px] min-h-[1301px]">
          <h1>Filter Case Studies</h1>

          <div className=" flex flex-col gap-40">
            <div className="mt-20 ml-2">
              <h1>Technologies</h1>
              <br></br>
              <ul>
                <li>
                 <input type="checkbox" onChange={()=>GetFilteredData('app')} /> 
                  <span>App Development</span>
                </li>

                <li>
                  <input type="checkbox"  onChange={()=>GetFilteredData('web')}  />
                  <span> Web Development</span>
                </li>

                <li>
                  <input type="checkbox"  onClick={()=>GetFilteredData('qa')} />
                  <span> QA Testing</span>
                </li>

                <li>
                  <input type="checkbox" />
                  <span> Shopify Development</span>
                </li>

                <li>
                  <input type="checkbox" />
                  <span> CRM Implementation</span>
                </li>

                <li>
                  <input type="checkbox" />
                  <span> CRM Customization</span>
                </li>
              </ul>
            </div>

            <div className="mt-20 ml-2">
              <h1> Industries</h1>
              <br></br>
              <ul>
                <li>
                  <input type="checkbox" />
                  <span> Travel & Hospitality</span>
                </li>

                <li>
                  <input type="checkbox" />
                  <span> Communication</span>
                </li>

                <li>
                  <input type="checkbox" />
                  <span> Finance</span>
                </li>

                <li>
                  <input type="checkbox" />
                  <span> Technology</span>
                </li>

                <li>
                  <input type="checkbox" />
                  <span> Automation</span>
                </li>

                <li>
                  <input type="checkbox" />
                  <span> Agency</span>
                </li>

                <li>
                  <input type="checkbox" />
                  <span> Education Technology</span>
                </li>
              </ul>
            </div>

            <div className="flex flex-row items-center ml-1 gap-2">
             
            <button  onClick={()=>ResetFilters()} type="button"  className="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                  Reset
                  </button>    
                  <button type="button" onClick={()=>DisplaySelectedFilters()} className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Apply</button>

              
            </div>
          </div>
        </section> */}

        {/*  Case Study Grid Section    */}

        {/* <section className=" mx-auto">
          <div className=" md:grid md:grid-cols-2 sm:grid sm:grid-col-1 gap-2 ">
            <div className="relative">
              <Image
                width={404}
                height={268}
                className="w-full aspect-[1.52] md:max-w-[304px] sm:max-w-[204px] sm:mb-2"
                src="/HouseArrest.png"
                alt="card"
              ></Image>

              <div className="bg-red-500 py-2 text-center  md:absolute md:bottom-[6rem] md:right-0 sm:absolute sm:bottom-[6rem] sm:right-[6rem]  rounded-[32px_22px_26px_18px]">
                <img
                  loading="lazy"
                  srcSet="PublicInputLogo.png"
                  className="w-full aspect-[3.13]"
                />
              </div>

              <div className="text-base font-light tracking-wide leading-6 max-w-[317px] text-sky-950">
                PublicInput helps reduce your burdens by helping you to get
                public engagement and communicate with your audience.
              </div>
            </div>

            <div className="relative">
              <Image
                width={404}
                height={268}
                className="w-full aspect-[1.52] md:max-w-[304px] sm:max-w-[204px] sm:mb-2"
                src="/PublicInput.png"
                alt="card"
              ></Image>

              <div className="bg-yellow-300 py-2 text-center md:absolute md:bottom-[6rem] md:right-0 sm:absolute sm:bottom-[6rem] sm:right-[6rem]  rounded-[32px_22px_26px_18px]">
                <img
                  loading="lazy"
                  srcSet="PublicInputLogo.png"
                  className="w-full aspect-[3.13]"
                />
              </div>

              <div className="text-base font-light tracking-wide leading-6 max-w-[317px] text-sky-950">
                PublicInput helps reduce your burdens by helping you to get
                public engagement and communicate with your audience.
              </div>
            </div>

            <div className="relative">
              <Image
                width={404}
                height={268}
                className="w-full aspect-[1.52] md:max-w-[304px] sm:max-w-[204px] sm:mb-2"
                src="/VestedFinance.png"
                alt="card"
              ></Image>

              <div className="bg-yellow-300 py-2 text-center md:absolute md:bottom-[6rem] md:right-0 sm:absolute sm:bottom-[6rem] sm:right-[6rem]  rounded-[32px_22px_26px_18px]">
                <img
                  loading="lazy"
                  srcSet="PublicInputLogo.png"
                  className="w-full aspect-[3.13]"
                />
              </div>

              <div className="text-base font-light tracking-wide leading-6 max-w-[317px] text-sky-950">
                Vested finance is a fast, secure, and tailored platform that
                gives you option to invest in either full or fractional shares.
              </div>
            </div>

            <div className="relative">
              <Image
                width={404}
                height={268}
                className="w-full aspect-[1.52] md:max-w-[304px] sm:max-w-[204px] sm:mb-2"
                src="/InnRoad.png"
                alt="card"
              ></Image>

              <div className="py-2 text-center text-white md:absolute md:bottom-[6rem] md:right-0 sm:absolute sm:bottom-[6rem] sm:right-[6rem] bg-lime-500 rounded-[32px_22px_26px_18px]">
                innRoad
              </div>

              <div className="text-base font-light  leading-6 max-w-[317px] text-sky-950">
                InnRoad is a hotel management solution to manage your business
                by providing various options including online booking, property
                management and lots more.
              </div>
            </div>

            <div className="relative">
              <Image
                width={404}
                height={268}
                className="w-full aspect-[1.52] md:max-w-[304px] sm:max-w-[204px] sm:mb-2"
                src="/Dandy.png"
                alt="card"
              ></Image>

              <div className="bg-orange-400 py-2 text-center  md:absolute md:bottom-[6rem] md:right-0 sm:absolute sm:bottom-[6rem] sm:right-[6rem]  rounded-[32px_22px_26px_18px]">
                <img
                  loading="lazy"
                  srcSet="GetDandyLogo.png"
                  className="w-full aspect-[3.13]"
                />
              </div>

              <div className="text-base font-light  tracking-wide leading-6 max-w-[317px] text-sky-950">
                Dandy is an AI and ML-based software that provides options to
                remove bad reviews and replies to the reviews
              </div>
            </div>

            <div className="relative">
              <Image
                width={404}
                height={268}
                className="w-full aspect-[1.52] md:max-w-[304px] sm:max-w-[204px] sm:mb-2"
                src="/Tracely.png"
                alt="card"
              ></Image>

              <div className="bg-blue-200 py-2 text-center  md:absolute md:bottom-[6rem] md:right-0 sm:absolute sm:bottom-[6rem] sm:right-[6rem]  rounded-[32px_22px_26px_18px]">
                <img
                  loading="lazy"
                  srcSet="GetDandyLogo.png"
                  className="w-full aspect-[3.13]"
                />
              </div>

              <div className="text-base font-light tracking-wide leading-6 max-w-[317px] text-sky-950">
                Tracely is a location tracking app designed to help people keep
                track of their family and friends, chat with them or enjoy their
                newsfeed updates.
              </div>
            </div>
          </div>
        </section> */}

        <section className=" mx-auto">
          <div className=" md:grid md:grid-cols-2 md: gap-10 sm:grid sm:grid-col-1  ">
            {initialCards.map((item: any, index: any) => {
              return (
                <div className="relative">
                  {item?.cardImage && (
                    <Link href="/career">
                      <Image
                        width={404}
                        height={268}
                        className="w-full aspect-[1.52] md:max-w-[304px] sm:max-w-[204px] sm:mb-2"
                        src={urlForImage(item.cardImage).toString()}
                        alt="card"
                      ></Image>
                    </Link>
                  )}

                  {
                    <div
                      className={`bg-${item.buttonColor}-500 py-2 text-center md:absolute md:bottom-[6rem] md:right-0 sm:absolute sm:bottom-[6rem] sm:right-[6rem] rounded-tl-[32px] rounded-tr-[22px] rounded-bl-[26px] rounded-br-[18px]`}
                    >
                      {item?.buttonLogo && (
                        <img
                          loading="lazy"
                          srcSet={urlForImage(item.buttonLogo).toString()}
                          className="w-full aspect-[3.13]"
                        />
                      )}
                    </div>
                  }

                  <div className="text-base font-light tracking-wide leading-6 max-w-[317px] text-sky-950">
                    {item.cardDescription}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/*  Vertical Line  */}
      </div>

      <br></br>
    </>
  );
};

export default page;
