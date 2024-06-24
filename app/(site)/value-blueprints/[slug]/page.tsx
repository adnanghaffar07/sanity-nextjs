import React from "react";
import { client } from "../../../../sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";

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
// Updated generateMetadata function
export async function generateMetadata ({ params }: { params: { slug: string } }) {
  const data = await getValueData(params.slug);
  const keywords = data.webSeoMetadataSub?.keywords?.join(", ") || "CodeAutomation.ai"; // Join keywords into a single string

  return {
    title: data.webSeoMetadataSub?.title || "Code Automation - Custom Software and Mobile Development Company in USA",
    description: data.webSeoMetadataSub?.description || "Custom Software and Mobile Development Company in USA",
    keywords: keywords

  };
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

      {/* Tools and Technology */}
      <div className="px-6 md:px-16 py-10 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-8">{data.toolsandtechusedheading}</h2>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {["firstCat", "secondCat", "thirdCat", "forthCat", "fifthCat", "SixthCat", "SevenCat"].map((categoryName, categoryIndex, categoriesArray) => (
              <React.Fragment key={categoryName}>
                <div className="flex flex-wrap justify-center items-center gap-2"> {/* Adjust the gap here */}
                  {data.toolstechlist?.[0]?.categories?.[categoryName]?.map((logoRef: any, logoIndex: any) => {
                    const logoData = dataLogo.find((logo: any) => logo._id === logoRef._ref);
                    if (logoData) {
                      return (
                        <React.Fragment key={logoIndex}>
                          <div className="flex flex-col items-center">
                            <div className="bg-white border border-[#0a8ffc] shadow-md p-3 rounded-full flex items-center justify-center w-16 h-16 transition duration-300 ease-in-out hover:border-[#F7E022] hover:scale-110">
                              <img
                                src={urlForImage(logoData.image).toString()}
                                alt={logoData.heading} // Make sure you are using correct alt attribute
                                className="h-8 object-cover"
                              />
                            </div>
                            <h3 className="text-sm font-semibold text-center mt-4">{logoData.heading}</h3>
                          </div>
                          {logoIndex !== data.toolstechlist[0].categories[categoryName].length - 1 && <span className="mb-6 text-sm">or</span>}
                        </React.Fragment>
                      );
                    } else {
                      return null;
                    }
                  })}
                </div>
                {categoriesArray.slice(categoryIndex + 1).some(category => data.toolstechlist?.[0]?.categories?.[category]?.length) && <span className="mb-6 text-lg"> + </span>}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>


      {/* Description  */}
      <div className="px-6 md:px-16 py-10 md:py-14 bg-gray-100">
        {data.challengesfacedheading && (
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold mb-8">{data.challengesfacedheading}</h3>
            <ul>
              {data.chanllangesfaced && data.chanllangesfaced.map((challenge: any, index: number) => (
                <li key={index} className="mb-6">
                  <h4 className="font-bold text-lg mb-2">{challenge.heading}</h4>
                  <p className="text-gray-700 text-lg leading-relaxed">{challenge.description}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
        <div className="text-center">
          <h2 className="text-lg font-bold text-gray-800 leading-relaxed mb-6">{data.resultsheading}</h2>
          <p className="text-gray-700 text-lg  leading-relaxed">{data.resultsdescription}</p>
        </div>
      </div>

      {/* Conclusion Section */}
      <div className="px-6 md:px-16 py-10 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-8 text-center">
            {data.conclusionheading}
          </h2>
          <p className="text-lg text-gray-800 leading-relaxed  text-center">
            {data.conclusion}
          </p>
        </div>
      </div>

    </div>
  );
};

export default Page;