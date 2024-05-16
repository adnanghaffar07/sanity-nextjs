import React from "react";
import HeroSectionComponent from "../components/HeroSectionComponent";
import Image from "next/image";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import { CgLaptop } from "react-icons/cg";

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

const page = async () => {
  const data = await getData();
  const recentArray = await data.filter((item: any) => item.group === "recent");
  const topArray = await data.filter((item: any) => item.group === "top");

    console.log("Card items",data)

 
  // const cardItems = data?.cardItemsList?.map((item:any)=>
  //  {
  //       console.log("Card Title",item.cardTitle)
  //       console.log("Button Color",item.buttonColor)
  //   })

  return (
    <>
      <HeroSectionComponent
        title="Case Studies"
        content="Explore our case study on code automation, showcasing how innovative strategies significantly enhance efficiency, reduce costs, and accelerate development in software projects."
        image="/CaseStudyHero.png"
      />

      {/* <section className="mx-auto w-full relative overflow-hidden">
        <div className="bg-[#1D92FB] opacity-15 w-[734px] h-[734px] rounded-full absolute -left-[550px] sm:-left-[400px] -top-80 sm:-top-64 flex items-center justify-center z-0">
          <div className="bg-white w-[610px] h-[610px] rounded-full"></div>
        </div>

        <h2 className="self-center text-2xl sm:text-3xl md:text-6xl tracking-tight text-center text-black capitalize leading-[61.08px] max-md:max-w-full mt-10 sm:mt-20">
          Checkout our projects
        </h2>

        {topArray &&
          topArray.map((item: any, index: any) => {
            return index % 2 === 0 ? (
              <div
                className="mt-4 sm:mt-24 mx-5 sm:mx-10 relative"
                key={item._key}
              >
                <div className="bg-[#1D92FB] opacity-15 w-[120px] sm:w-[207px] h-[120px] sm:h-[207px] rounded-full absolute -right-20 sm:-right-20 md:-right-28 top-[220px] sm:top-[350px] md:top-[440px] lg:top-[600px] xl:top-20 z-0"></div>
                <div className="flex flex-col xl:flex-row gap-5 max-w-[1624px] justify-between items-center mx-auto">
                  <div className="w-full sm:w-[600px] md:w-[720px] lg:w-[980px] xl:w-[778px] z-[1]">
                    {item?.cardimage?.asset && (
                      <Image
                        src={urlForImage(item.cardimage.asset)}
                        alt={item.cardimage.alt}
                        width={800}
                        height={533}
                        loading="lazy"
                        className="grow w-full z-[1]"
                      />
                    )}
                  </div>

                  <div className="flex flex-col items-center mt-0 md:mt-10">
                    <h2 className="self-stretch text-2xl sm:text-3xl md:text-6xl tracking-tight text-right capitalize leading-[61.08px] text-sky-950">
                      {item.title}
                    </h2>
                    <p className="mt-0 sm:mt-3 text-xs sm:text-xl leading-[16px] sm:leading-7 text-right text-black max-w-[290px] sm:max-w-[490px]">
                      {item.carddescription}
                    </p>

                    <div className="w-full flex justify-end">
                      {item.slug ? (
                        <Link
                          href={`/case-study/${item.slug}`}
                          className="flex items-center px-4 gap-4 mt-2 sm:mt-10 text-2xl text-black bg-[#F7E022] w-[134px] sm:w-[223px] h-7 sm:h-[55px] rounded-[9px] cursor-pointer shadow-xl"
                        >
                          <p className="flex-auto text-xs sm:text-xl">
                            Learn More
                          </p>
                          <div className="w-4 h-4 sm:w-8 sm:h-8">
                            <Image
                              src="/case-study-more-button-icon.png"
                              alt="Learn More Icon"
                              width={31}
                              height={32}
                              loading="lazy"
                              className="shrink-0 aspect-[1.03]"
                            />
                          </div>
                        </Link>
                      ) : (
                        <button className="flex items-center px-4 gap-4 mt-2 sm:mt-10 text-2xl text-black bg-[#F7E022] w-[134px] sm:w-[223px] h-7 sm:h-[55px] rounded-[9px] cursor-pointer shadow-xl">
                          <p className="flex-auto text-xs sm:text-xl">
                            Learn More
                          </p>
                          <div className="w-4 h-4 sm:w-8 sm:h-8">
                            <Image
                              src="/case-study-more-button-icon.png"
                              alt="Learn More Icon"
                              width={31}
                              height={32}
                              loading="lazy"
                              className="shrink-0 aspect-[1.03]"
                            />
                          </div>
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div
                className="mt-16 sm:mt-40 mx-5 sm:mx-10 relative"
                key={item._key}
              >
                <div className="bg-[#1D92FB] opacity-15 w-[120px] sm:w-[207px] h-[120px] sm:h-[207px] rounded-full absolute -left-20 sm:-left-36 top-[160px] sm:top-[320px] md:top-[450px] lg:top-[600px] xl:top-12 z-0"></div>
                <div className="flex flex-col xl:flex-row-reverse gap-5 justify-between max-w-[1624px] items-center mx-auto relative">
                  <div className="w-full sm:w-[600px] md:w-[720px] lg:w-[980px] xl:w-[778px]z-[1]">
                    {item?.cardimage?.asset && (
                      <Image
                        src={urlForImage(item.cardimage.asset)}
                        alt={item.cardimage.alt}
                        width={800}
                        height={533}
                        loading="lazy"
                        className="grow w-full z-[1]"
                      />
                    )}
                  </div>

                  <div className="flex flex-col items-center mt-0 md:mt-10">
                    <h2 className="self-stretch text-2xl sm:text-3xl md:text-6xl tracking-tight text-left capitalize leading-[61.08px] text-sky-950">
                      {item.title}
                    </h2>
                    <p className="mt-0 sm:mt-3 text-xs sm:text-xl leading-[16px] sm:leading-7 text-left text-black max-w-[290px] sm:max-w-[490px]">
                      {item.carddescription}
                    </p>

                    <div className="w-full flex justify-start">
                      {item.slug ? (
                        <Link
                          href={`/case-study/${item.slug}`}
                          className="flex items-center px-4 gap-4 mt-2 sm:mt-10 text-2xl text-black bg-[#F7E022] w-[134px] sm:w-[223px] h-7 sm:h-[55px] rounded-[9px] cursor-pointer shadow-xl"
                        >
                          <p className="flex-auto text-xs sm:text-xl">
                            Learn More
                          </p>
                          <div className="w-4 h-4 sm:w-8 sm:h-8">
                            <Image
                              src="/case-study-more-button-icon.png"
                              alt="Learn More Icon"
                              width={31}
                              height={32}
                              loading="lazy"
                              className="shrink-0 aspect-[1.03]"
                            />
                          </div>
                        </Link>
                      ) : (
                        <button className="flex items-center px-4 gap-4 mt-2 sm:mt-10 text-2xl text-black bg-[#F7E022] w-[134px] sm:w-[223px] h-7 sm:h-[55px] rounded-[9px] cursor-pointer shadow-xl">
                          <p className="flex-auto text-xs sm:text-xl">
                            Learn More
                          </p>
                          <div className="w-4 h-4 sm:w-8 sm:h-8">
                            <Image
                              src="/case-study-more-button-icon.png"
                              alt="Learn More Icon"
                              width={31}
                              height={32}
                              loading="lazy"
                              className="shrink-0 aspect-[1.03]"
                            />
                          </div>
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </section> */}

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

      {/* <section className="mb-40 xl:container xl:mx-auto flex flex-col">
        <h2 className="mt-16 sm:mt-36 text-2xl sm:text-6xl capitalize leading-8 sm:leading-[61px] text-sky-950 mb-9 sm:mb-16 ml-20">
          Our Recent Work
        </h2>
        <div className="flex justify-center items-center flex-col xl:flex-row flex-wrap gap-x-24 gap-y-14 relative">
          {recentArray &&
            recentArray.map((recentWork: any) => {
              return recentWork.slug ? (
                <div
                  className="flex flex-col pb-3 lg:pb-9 text-2xl font-medium leading-6 text-black rounded-lg sm:rounded-3xl bg-zinc-100 shadow-lg"
                  key={recentWork._key}
                >
                  <Link
                    href={`/case-study/${recentWork.slug}`}
                    className="w-[274px] sm:w-[512px] "
                  >
                    {recentWork?.cardimage?.asset && (
                      <Image
                        src={urlForImage(recentWork.cardimage.asset)}
                        alt={recentWork.cardimage.alt}
                        width={512}
                        height={288}
                        loading="lazy"
                        className="shadow-caseStudyRecentWorkCard rounded-lg sm:rounded-[26px] w-full h-full xl:h-[256px] "
                      />
                    )}
                  </Link>
                  <h2 className="text-sm sm:text-2xl text self-center mt-6">
                    {recentWork.title} - {recentWork.subtitle}
                  </h2>
                </div>
              ) : (
                <div
                  className="flex flex-col pb-3 lg:pb-9 text-2xl font-medium leading-6 text-black rounded-lg sm:rounded-3xl bg-zinc-100 shadow-lg"
                  key={recentWork._key}
                >
                  <div className="w-[274px] sm:w-[512px] ">
                    {recentWork?.cardimage?.asset && (
                      <Image
                        src={urlForImage(recentWork.cardimage.asset)}
                        alt={recentWork.cardimage.alt}
                        width={512}
                        height={288}
                        loading="lazy"
                        className="shadow-caseStudyRecentWorkCard rounded-lg sm:rounded-[26px] w-full h-full xl:h-[256px]"
                      />
                    )}
                  </div>
                  <h2 className="text-sm sm:text-2xl text self-center mt-6">
                    {recentWork.title} - {recentWork.subtitle}
                  </h2>
                </div>
              );
            })}
          <div className="absolute -bottom-24 right-10 lg:right-64 xl:right-16 2xl:right-52">
            <div className="flex gap-4">
              <button>
                <Image
                  src="/recentProject-left-arrow.png"
                  alt="left-arrow-key"
                  width={36}
                  height={36}
                />
              </button>
              <button>
                <Image
                  src="/recentProject-right-arrow.png"
                  alt="right-arrow-key"
                  width={36}
                  height={36}
                />
              </button>
            </div>
          </div>
        </div>
      </section> */}

      <div className=" flex md:flex-row  justify-center mt-10 mb-10  gap-2">
        {/* Filter Section    */}

        <section className=" md:w-auto sm:w-auto  text-white mx-auto  bg-sky-500 max-w-[480px] min-h-[1301px]">
          <h1>Filter Case Studies</h1>

          <div className=" flex flex-col   gap-40">
            <div className="mt-20 ml-2">
              <h1>Use Cases</h1>
              <br></br>
              <ul>
                <li>
                  <input type="checkbox" />
                  <span> App Development</span>
                </li>

                <li>
                  <input type="checkbox" />
                  <span> Web Development</span>
                </li>

                <li>
                  <input type="checkbox" />
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
                  <span> AI & ML</span>
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

            <div className="flex flex-row items-center ml-1 gap-4">
              <div className="bg-neutral-900  ">
                <div className="text-lg tracking-wide leading-7 text-white max-w-[150px]">
                  Reset
                </div>
              </div>

              <div className="bg-white  text-white">
                <div className="text-lg tracking-wide leading-7 text-sky-500 max-w-[49px]">
                  Apply
                </div>
              </div>
            </div>
          </div>
        </section>

        {/*  Case Study Grid Section    */}

        <section className=" mx-auto">
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
                src="/HouseArrest.png"
                alt="card"
              ></Image>

              <div className="bg-blue-200 py-2 text-center  md:absolute md:bottom-[6rem] md:right-0 sm:absolute sm:bottom-[6rem] sm:right-[6rem]  rounded-[32px_22px_26px_18px]">
                <img
                  loading="lazy"
                  srcSet="PublicInputLogo.png"
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
        </section>

        {/*  Vertical Line  */}
      </div>

      <br></br>
    </>
  );
};

export default page;
