import Image from "next/image";
import { client } from "../../../sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import Link from "next/link";
import ButtonScrollToSection from "../components/ButtonScrollToSection";

async function getData() {
  const query = `*[_type == 'valueBlueprints'][0]`;
  try {
    const fetchData = await client.fetch(query);
    return fetchData || [];
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
}
async function getLogoData() {
  const queryLogo = `*[_type == 'techLogos'] | order(_createdAt asc)`;
  try {
    const fetchData = await client.fetch(queryLogo);
    return fetchData || [];
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
}

async function getValueData() {
  const queryValue = `*[_type == 'portfolio' && pageType == 'valueBlueprint'] | order(_createdAt asc)`;
  try {
    const fetchData = await client.fetch(queryValue);
    return fetchData || [];
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
}


export default async function ValueBlueprints() {
  const data = await getData()
  const dataLogo = await getLogoData();
  const portfolioData = await getValueData();



  return (
    <div className="">
      {/* Hero Section */}
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
              <h2 className="title capitalize">{data.title}</h2>
            </div>
          </div>
        </div>
      </div>

      {/* Introduction Section */}
      <img
        loading="lazy"
        src="/affiliate-partner-eclipse.png"
        alt="eclipse icon"
        className="absolute w-[270px] z-0"

      />
      <div className="px-6 md:px-16 py-10 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="">
            <div className="">
              <h2 className="text-2xl font-bold mb-8 text-center  "> {/* Adjusted text alignment for larger screens */}
                {data.introductionSection?.introHeading}
              </h2>
              <p className="text-lg text-gray-800 leading-relaxed text-justify text-center"> {/* Adjusted text alignment for larger screens */}
                {data.introductionSection?.introDesc}
              </p>
            </div>
          </div>
          {/* <div className="w-full md:w-1/2 mt-8 md:mt-0 md:pl-8 md:flex md:justify-center"> 
            <Image
              src={urlForImage(data.introductionSection?.introImage).toString()}
              alt=""
              width={570}
              height={370}
            />
          </div> */}
        </div>
      </div>

      <section className="px-6 md:px-16 py-10 md:py-16 bg-white">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center text-gray-800">Explore Our Value Blueprints</h2>
          <div className="flex flex-wrap justify-center gap-8">
            {portfolioData.map((item: any) => (
              <Link key={item._id} href={`/value-blueprints/${item._id}`}>
                <div className="group h-full w-full sm:w-auto">
                  <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition duration-300 h-full">
                    <img
                      src={urlForImage(item.heroimage).toString()}
                      alt={item.title}
                      className="w-full h-40 object-cover object-center transition duration-300 group-hover:scale-105"
                    />
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-2 text-center group-hover:text-blue-500 transition duration-300">{item.title}</h3>
                      <p className="text-gray-700 text-center">{item.description}</p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>


      {/* Tools and Technology */}

      <div className="px-6 md:px-16 py-10 md:py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
            {data.toolsTechSection?.toolsTechHeading}
          </h2>
          <h2 className="text-lg text-gray-800 leading-relaxed text-center mb-6">
            {data.toolsTechSection?.toolsTechDesc}
          </h2>
          <div className="flex flex-wrap justify-center">
            {data.toolsTechSection?.toolsTech?.map(
              (tool: any, toolIndex: any) => (
                <div key={toolIndex} className="w-full md:w-1/2 lg:w-1/3 p-4">
                  <div className="bg-white border border-[#0a8ffc] shadow-md p-6 rounded-lg flex flex-col h-full">
                    <div className="flex flex-row justify-center mb-4">
                      {tool.images?.map((logoRef: any, logoIndex: any) => {
                        const logoData = dataLogo.find(
                          (logo: any) => logo._id === logoRef._ref
                        );
                        if (logoData) {
                          return (
                            <div key={logoIndex} className="mr-2">
                              <img
                                src={urlForImage(logoData.image).toString()}
                                alt={logoData.heading}
                                className="h-8 object-cover"
                              />
                            </div>
                          );
                        } else {
                          return null;
                        }
                      })}
                    </div>
                    <h3 className="text-xl text-center font-semibold mb-4">
                      {tool.heading}
                    </h3>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>

      {/* Project Cycle Section */}
      <div className="px-6 md:px-16 py-10 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-16">
            {data.projectCycleSection?.projectCycleHaeding}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-14">
            {data.projectCycleSection?.projectCycle.map(
              (step: any, index: any) => (
                <div
                  key={index}
                  className="bg-[#EDECEC] rounded-3xl shadow-sm relative"
                >
                  <div className="z-10 flex justify-center items-center px-5 mt-0 text-3xl font-semibold tracking-tight leading-4 text-justify whitespace-nowrap bg-white rounded-full h-[62px] w-[62px] absolute -right-2 -top-8 drop-shadow-serviceCard">
                    <span className="text-gray-800 font-bold text-lg">
                      {index + 1}
                    </span>
                  </div>
                  <div className="p-6 h-full">
                    <div className="text-base font-medium text-lg leading-6 pt-6 text-center">
                      {step.heading}
                    </div>
                    <div className="mt-5 text-sm text-center font-light tracking-normal leading-6 ">
                      {step.detail}
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>

      <img
        loading="lazy"
        src="/affiliate-partner-eclipse.png"
        alt="eclipse icon"
        className="absolute w-[300px] z-0"
      />

      {/* Service Delivery Options */}
      <div className="px-6 md:px-16 py-10 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-16">
            {data.deliveryOptionSection?.deliveryOptionHaeding}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-14">
            {data.deliveryOptionSection?.deliveryOption.map(
              (step: any, index: any) => (
                <div
                  key={index}
                  className="bg-[#EDECEC] rounded-3xl shadow-sm relative"
                >
                  <div className="z-10 flex justify-center items-center px-5 mt-0 text-3xl font-semibold tracking-tight leading-4 text-justify whitespace-nowrap bg-white rounded-full h-[62px] w-[62px] absolute -right-2 -top-8 drop-shadow-serviceCard">
                    <span className="text-gray-800 font-bold text-lg">
                      {index + 1}
                    </span>
                  </div>
                  <div className="p-6 h-full">
                    <div className="text-base font-medium text-lg leading-6 pt-6 text-center">
                      {step.heading}
                    </div>
                    <div className="mt-5 text-sm text-center font-light tracking-normal leading-6 ">
                      {step.detail}
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>

      {/* Summary Section */}
      <div className="px-6 md:px-16 py-10 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-center">
          <div className="w-full md:w-1/2 md:pr-8">
            <div className="max-w-2xl">
              <h2 className="text-2xl font-bold mb-8 text-center md:text-left ">
                {data.summarySection?.summaryHeading}
              </h2>
              <p className="text-lg text-gray-800 leading-relaxed text-justify text-center">
                {data.summarySection?.summaryMessage}
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 mt-8 md:mt-0 md:pl-8 md:flex md:justify-center">
            <Image
              src={urlForImage(data.summarySection?.summaryImg).toString()}
              alt=""
              width={470}
              height={250}
            />
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="py-12 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl md:text-2xl font-bold text-gray-800 mb-6">
              {data.callToActionSection?.callToActionHeading}
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              {data.callToActionSection?.callToAction}
            </p>
            {/* <Link className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-8 rounded-lg shadow-lg transition duration-300 ease-in-out  transform hover:scale-105 "
              href="tel:+1-850-558-4691"
              role="button"
            >
              Get Started Now</Link> */}
            <ButtonScrollToSection
              content="Get Started Now"
              classes="bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-8 rounded-lg shadow-lg transition duration-300 ease-in-out  transform hover:scale-105 cursor-pointer"
              destination="project-discussion-form"
              key="Get-Started-Now-button"
            />
          </div>
        </div>
      </div>

      {/* Special Offer Section */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              {data.specialOffersSection?.offerHeading}
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              {data.specialOffersSection?.specialOffer}
            </p>
            <div className="flex justify-center">
              {/* <Link
                className="bg-gradient-to-r ml-3 from-[#F7E022] to-yellow-400 cursor-pointer text-white font-bold py-3 px-8 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 "
                href="tel:+1-850-558-4691"
                role="button"
              >
                {" "}
                Claim Offer
              </Link> */}
              <ButtonScrollToSection
                classes="bg-gradient-to-r ml-3 from-[#F7E022] to-yellow-400 cursor-pointer text-white font-bold py-3 px-8 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 "
                content="Claim Offer"
                destination="project-discussion-form"
                key="Claim-Offer-button"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
