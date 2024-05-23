import { client } from "../../../sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";

async function getData() {
  const query = `*[_type == 'serviceSummary'][0]`;
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

export default async function ServiceSummary() {
  const data = await getData()
  const dataLogo = await getLogoData();

  console.log(data)

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
              <h2 className="title capitalize">{data.pageTitle}</h2>
            </div>
            <div className="lg:text-2xl text-base text-center mt-4 max-md:max-w-full lg:px-32">
              {data.pageDesc}
            </div>
          </div>
        </div>
      </div>

      {/* Introduction Section */}
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-800">{data.introductionSection.introHeading}</h2>
            <p className="mt-4 text-xl text-gray-600">{data.introductionSection.introDesc}</p>
          </div>
        </div>
      </div>

      {/* Detail Section */}
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">{data.detailSection.heading}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.detailSection?.detailInd?.map((detail: any, index: any) => (
              <div key={index} className="bg-gray-100 rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">{detail.title}</h3>
                <p className="text-gray-600 mb-4">{detail.smDescription}</p>
                <p className="text-gray-700 mb-4">{detail.description}</p>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">{detail.benefits}</h4>
                <ul className="list-disc pl-6">
                  {detail.keyBenefits.map((benefit: any, index: any) => (
                    <li key={index} className="text-gray-700">{benefit}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Project Management Section */}
      <div className="py-12 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">{data.projectManagement?.projectHeading}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.projectManagement?.toolsTech?.map(
              (tool: any, toolIndex: any) => (
                <div key={toolIndex}>
                  <div className="bg-white shadow-md p-6 rounded-lg flex flex-col h-full">
                    <div className="flex flex-row justify-center">
                      {tool.images?.map((logoRef: any, logoIndex: any) => {
                        const logoData = dataLogo.find(
                          (logo: any) => logo._id === logoRef._ref
                        );
                        if (logoData) {
                          return (
                            <div key={logoIndex} className="">
                              <img
                                src={urlForImage(logoData.image).toString()}
                                alt={logoData.heading}
                                className="h-8 object-cover mb-2"
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
                    <p className="text-gray-700 text-center">{tool.detail}</p>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>

      {/* Project Cycle Section */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">{data.projectCycleSection?.projectCycleHaeding}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.projectCycleSection?.projectLifeCycle.map((step: any, index: any) => (
              <div key={index} className="bg-gray-100 rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Step {index + 1}</h3>
                <p className="text-gray-600">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Summary Section */}
      <div className="py-12 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">{data.summarySection?.summaryHeading}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div className="text-gray-600">
              <p className="text-lg">{data.summarySection?.summaryMessage}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="py-12 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">{data.callToActionSection?.callToActionHeading}</h2>
          <p className="text-lg text-gray-600 mb-6">{data.callToActionSection?.callToAction}</p>
        </div>
      </div>

      {/* Special Offer Section */}
      <div className="py-12 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">{data.specialOffersSection?.offerHeading}</h2>
          <p className="text-lg text-gray-600 mb-6">{data.specialOffersSection?.specialOffer}</p>
        </div>
      </div>
    </div>
  );
}
