import { client } from "../../../../sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";

async function getValueData(slug: string) {
  const queryValue = `*[_type == 'portfolio' && slug == '${slug}'][0]`;
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

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const data = await getValueData(params.slug);
  const keywords =
    data.webSeoMetadataSub?.keywords?.join(", ") || "CodeAutomation.ai"; // Join keywords into a single string

  return {
    title:
      data.webSeoMetadataSub?.title ||
      "Code Automation - Custom Software and Mobile Development Company in USA",
    description:
      data.webSeoMetadataSub?.description ||
      "Custom Software and Mobile Development Company in USA",
    keywords: keywords,
  };
}

const Page = async ({ params }: { params: { slug: string } }) => {
  const data = await getValueData(params.slug);
  const dataLogo = await getLogoData();

  return (
    <div>
      <div className="relative flex flex-col pb-12 w-full font-light text-white lg:min-h-[700px] bg-[#020C16]">
        {data.heroimage && (
          <img
            className="absolute inset-0 object-cover w-full h-full"
            src={urlForImage(data.heroimage).toString()}
            alt="blog post"
            loading="eager"
          />
        )}
        <div className="absolute inset-0 bg-[#020C16] opacity-75"></div>
        <div className="relative flex flex-col items-center lg:px-20 px-5 lg:pt-12 lg:pb-0 pt-48 pb-36 w-full max-md:px-5 max-md:max-w-full flex-grow">
          <div className="lg:absolute lg:top-[300px] text-center">
            <h2 className="lg:text-4xl text-2xl font-bold capitalize max-lg:mt-0 lg:w-8/12 mx-auto">
              {data.title}
            </h2>
          </div>
        </div>
      </div>

      {/* Introduction Section */}
      <div className="text-black px-6 md:px-16 py-10 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-xl  mb-6">
            {data.introductionheading}
          </h2>
          <p className="mb-6 text-lg">{data.briefdescription}</p>
          <ul className="space-y-6">
            {data.briefitemsarray &&
              data.briefitemsarray.map((item: any, index: any) => (
                <li key={index}>
                  <h3 className="text-xl font-semibold">{item.heading}</h3>
                  <p>{item.value}</p>
                </li>
              ))}
          </ul>
        </div>
      </div>

      {/* Challenges Faced Section */}
      <div className="bg-gray-50 text-black px-6 md:px-16 py-10 md:py-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            {data.challengesfacedheading}
          </h2>
          {data.chanllangesfaced &&
            data.chanllangesfaced.map((challenge: any, index: any) => (
              <div key={index} className="mb-6">
                <h3 className="text-xl font-semibold mb-2">
                  {challenge.heading}
                </h3>
                <p>{challenge.description}</p>
              </div>
            ))}
        </div>
      </div>

      {/* Tools and Technology Section */}
      <div className="px-6 md:px-16 py-10 md:py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
            {data.toolsandtechusedtitle}
          </h2>
          <div className="flex flex-wrap justify-center gap-8">
            {data.caseStudiesToolsSection?.toolsTech?.map(
              (tool: any, toolIndex: any) => (
                <div key={toolIndex} className="w-full md:w-1/2 lg:w-1/3 p-4">
                  <div className="bg-white border border-[#0a8ffc] shadow-lg p-6 rounded-lg flex flex-col h-full hover:shadow-xl transition-shadow duration-200">
                    <div className="flex justify-center mb-4">
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
                                width={48}
                                height={48}
                                loading="lazy"
                                className="h-12 object-cover"
                              />
                            </div>
                          );
                        } else {
                          return null;
                        }
                      })}
                    </div>
                    <h3 className="text-xl text-center font-semibold">
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
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            {data.ourapproachheading}
          </h2>
          {data.ourapproach &&
            data.ourapproach.map((approach: any, index: any) => (
              <div key={index} className="mb-6">
                <h3 className="text-xl font-semibold mb-2">
                  {approach.heading}
                </h3>
                <p>{approach.description}</p>
              </div>
            ))}
        </div>
      </div>

      {/* Prerequisites Section */}
      <div className="bg-gray-50 text-black px-6 md:px-16 py-10 md:py-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            {data.criticalPrerequisitesSection?.heading}
          </h2>
          <p className="mb-6 text-lg">
            {data.criticalPrerequisitesSection?.description}
          </p>
          <div className="space-y-6">
            {data.criticalPrerequisitesSection?.prerequisites &&
              data.criticalPrerequisitesSection?.prerequisites.map(
                (prerequisite: any, index: any) => (
                  <div key={index} className="mb-6">
                    <h3 className="text-xl font-semibold mb-2">
                      {prerequisite.heading}
                    </h3>
                    {prerequisite.details &&
                      prerequisite.details.map((detail: any, idx: any) => (
                        <div key={idx} className="ml-4 mb-2">
                          <h4 className="text-lg font-semibold">
                            {detail.subheading}
                          </h4>
                          <p>{detail.content}</p>
                        </div>
                      ))}
                  </div>
                )
              )}
          </div>
        </div>
      </div>

      {/* Conclusion Section */}
      <div className="bg-white text-black px-6 md:px-16 py-10 md:py-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            {data.conclusionheading}
          </h2>
          <p className="text-lg">{data.conclusion}</p>
        </div>
      </div>

      {/* Project Overview Section */}
      <div className="bg-gray-100 text-black px-6 md:px-16 py-10 md:py-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-xl font-bold mb-6">
            {data.projectoverviewtitle}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Page;
