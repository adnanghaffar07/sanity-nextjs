import Image from "next/image";
import { client } from "../../../../sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import Link from "next/link";

async function getValueData(_id: string) {
  const queryValue = `*[_type == 'portfolio' && _id == '${_id}'][0]`;
  try {
    const fetchData = await client.fetch(queryValue);
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


const Page = async ({ params }: { params: { slug: string } }) => {
  const data = await getValueData(params.slug);
  const dataLogo = await getLogoData();

  return (
    <div>
      {/* Hero Section */}
      <div className="flex overflow-hidden relative flex-col pb-12 w-full font-light text-white lg:min-h-[700px] max-md:max-w-full">
        {data.heroimage && (
          <img
            className="top-0 left-0 object-cover absolute inset-0 size-full"
            src={urlForImage(data.heroimage).toString()}
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
      <div className="text-black px-6 md:px-16 py-10 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <h2 className="text-xl font-bold mb-4">{data.introductionheading}</h2>
          <p className="mb-6">{data.briefdescription}</p>
          <ul>
            {data.briefitemsarray && data.briefitemsarray.map((item: any, index: number) => (
              <li key={index} className="mb-6">
                <h3 className="text-2xl font-semibold">{item.heading}</h3>
                <p>{item.value}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Challenges Faced Section */}
      <div className="bg-white text-black px-6 md:px-16 py-10 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <h2 className="text-3xl font-bold mb-4">{data.challengesfacedheading}</h2>
          {data.chanllangesfaced && data.chanllangesfaced.map((challenge: any, index: number) => (
            <div key={index} className="mb-6">
              <h3 className="text-2xl font-semibold mb-2">{challenge.heading}</h3>
              <p>{challenge.description}</p>
            </div>

          ))}
        </div>
      </div>

      {/* Tools and Technology */}

      <div className="px-6 md:px-16 py-10 md:py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
            {data.toolsandtechusedtitle}
          </h2>
          <div className="flex flex-wrap justify-center">
            {data.caseStudiesToolsSection?.toolsTech?.map(
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
      {/* Our Approach Section */}
      <div className="bg-white text-black px-6 md:px-16 py-10 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <h2 className="text-2xl font-bold mb-4">{data.ourapproachheading}</h2>
          {data.ourapproach && data.ourapproach.map((approach: any, index: number) => (
            <div key={index} className="mb-6">
              <h3 className="text-2xl font-semibold mb-2">{approach.heading}</h3>
              <p>{approach.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Prerequisites Section */}
      <div className="text-black px-6 md:px-16 py-10 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <h2 className="text-2xl font-bold mb-4">{data.criticalPrerequisitesSection?.heading}</h2>
        <p>{data.criticalPrerequisitesSection?.description}</p>

        {data.criticalPrerequisitesSection?.prerequisites && data.criticalPrerequisitesSection?.prerequisites.map((prerequisite: any, index: number) => (
          <div key={index} className="mb-6">
            <h3 className="text-2xl font-semibold mb-2">{prerequisite.heading}</h3>
            {prerequisite.details && prerequisite.details.map((detail: any, idx: number) => (
              <div key={idx} className="ml-4 mb-2">
                <h4 className="text-xl font-semibold">{detail.subheading}</h4>
                <p>{detail.content}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
      </div>

            {/* Conclusion Section */}
            <div className="bg-white text-black p-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <h2 className="text-2xl font-bold mb-4">{data.conclusionheading}</h2>
        <p>{data.conclusion}</p>
      </div>
      </div>
      {/* Project Overview Section */}
      <div className="bg-gray-100 text-black p-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <h2 className="text-xl font-bold mb-4">{data.projectoverviewtitle}</h2>
      </div>
      </div>


    </div>
  );
}
export default Page;