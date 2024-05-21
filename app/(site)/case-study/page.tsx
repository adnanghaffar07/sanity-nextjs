"use client";
import React, { useEffect, useState } from "react";
import HeroSectionComponent from "../components/HeroSectionComponent";
import Image from "next/image";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import { revalidatePath } from "next/cache";

const Page = () => {
  // const [initialCards, SetInitialCards] = useState<any[]>([""]);
  const [originalCards, SetOriginalCards] = useState<any[]>([""]);
  const [selectedFilters, SetSelectedFilters] = useState<any[]>([]);
  const [filteredItems, setFilteredItems] = useState<any[]>([]);

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

      if (caseStudyData && caseStudyData[0].cardItemsList) {
        const initalArray = caseStudyData[0].cardItemsList;
        console.log("Initial Array", initalArray);
        setFilteredItems(initalArray);
        SetOriginalCards(initalArray);
        // SetOriginalCards(initalArray);
      } else {
        console.error("No CaseStudyInfo found or cardItemsList is missing");
      }
    };
    dataFun();
  }, []);

  
  function GetFilteredData(option: any) {
    if (selectedFilters.includes(option)) 
    {
      let filters = selectedFilters.filter((el) => el !== option);
      SetSelectedFilters(filters);
    }  
    
    else 
    {
      SetSelectedFilters([...selectedFilters, option]);
    }
    console.log("Selected Filters:",selectedFilters);
     console.log(selectedFilters.length)
  }

  useEffect(() => {
    FilterItems();
  }, [selectedFilters]);

  function FilterItems() 
  {
    if (selectedFilters.length > 0) {
      let tempItems = selectedFilters.map((selectedCategory) => {
        let temp = originalCards.filter((item) => {
          console.log("Item.Group",item.group)
          console.log("SelectedCategory",selectedCategory)
          return item.group === selectedCategory;

        });
        return temp;
      });
      console.log("Filtered Items:",tempItems);
      setFilteredItems(tempItems.flat());
    } 
    else 
    {
      setFilteredItems(originalCards);
    }
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

        <section className="md:w-auto sm:w-auto  text-white   bg-sky-500 max-w-[480px] min-h-[1301px]">
          <h1>Filter Case Studies</h1>
          <div className=" flex flex-col gap-40">
            <div className="mt-20 ml-2">
              <h1>Project Type</h1>
              <br></br>
              <ul>
                <li>
                  <input
                    type="checkbox"
                    id="app"
                    onChange={(event) => GetFilteredData("app")}
                  />
                  <span>App Development</span>
                </li>

                <li>
                  <input
                    type="checkbox"
                    id="web"
                    onChange={(event) => GetFilteredData("web")}
                  />
                  <span> Web Development</span>
                </li>

                <li>
                  <input
                    type="checkbox"
                    id="qa"
                    onClick={(event) => GetFilteredData("qa")}
                  />
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
          </div>
        </section>

        {/*  Case Study Grid Section    */}

        <section className=" mx-auto">
          <div className=" md:grid md:grid-cols-3 md: gap-10 sm:grid sm:grid-col-1  ">
            {filteredItems.map((item: any, index: any) => {
              return (
                <div key={index}>
                  {item?.cardImage && (
                    <Link href={`/case-study/${item?.url}`}>
                      <Image
                        width={404}
                        height={268}
                        className="w-full aspect-[1.52] md:max-w-[304px] sm:max-w-[204px] sm:mb-2"
                        src={urlForImage(item.cardImage).toString()}
                        alt="card"
                      ></Image>
                    </Link>
                  )}

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

export default Page;
