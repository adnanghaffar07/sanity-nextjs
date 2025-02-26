import { PortableText, PortableTextReactComponents } from "@portabletext/react";
import { client } from "../../../../sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import SocialShare from "../../components/socialShare";
import BlogsFaq from "../../components/BlogsFaq";

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

// Updated generateMetadata function
export async function generateMetadata({ params }: { params: { slug: string } }) {

  const data = await getValueData(params.slug);
  const title = data.webSeoMetadataSub?.title || "Code Automation - Custom Software and Mobile Development Company in USA";
  const description = data.webSeoMetadataSub?.description || "Custom Software and Mobile Development Company in USA";
  const keywords = data.webSeoMetadataSub?.keywords?.join(", ") || "CodeAutomation.ai";

  const heroImageUrl = urlForImage(data.heroimage).toString(); // Use a default image if heroImage is not available

  const facebookMeta = data.facebookCardsSub || {};
  const twitterMeta = data.twitterCardsSub || {};
  const linkedInMeta = data.linkedInCardsSub || {};
  const pinterestMeta = data.pinterestCardsSub || {};
  const whatsappMeta = data.whatsappCardsSub || {};
  const telegramMeta = data.telegramCardsSub || {};

  return {
    title,
    description,
    keywords,
    openGraph: {
      type: facebookMeta.facebookType || "website",
      url: facebookMeta.facebookUrl || "https://codeautomation.ai",
      title: facebookMeta.facebookTitle || title,
      description: facebookMeta.facebookDescription || description,
      images: [
        {
          url: heroImageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: twitterMeta.twitterType || "summary_large_image",
      title: twitterMeta.twitterTitle || title,
      description: twitterMeta.twitterDescription || description,
      images: [
        {
          url: heroImageUrl,
          width: 1200,
          height: 630,
          alt: title,
        }
      ],
      url: twitterMeta.twitterUrl || "https://codeautomation.ai",
    },
    linkedIn: {
      title: linkedInMeta.linkedInTitle || title,
      description: linkedInMeta.linkedInDescription || description,
      image: heroImageUrl,
      url: linkedInMeta.linkedInUrl || "https://codeautomation.ai",
    },
    pinterest: {
      title: pinterestMeta.pinterestTitle || title,
      description: pinterestMeta.pinterestDescription || description,
      url: pinterestMeta.pinterestUrl || "https://codeautomation.ai",
    },
    whatsapp: {
      title: whatsappMeta.whatsappTitle || title,
      description: whatsappMeta.whatsappDescription || description,
      url: whatsappMeta.whatsappUrl || "https://codeautomation.ai",
    },
    telegram: {
      title: telegramMeta.telegramTitle || title,
      description: telegramMeta.telegramDescription || description,
      url: telegramMeta.telegramUrl || "https://codeautomation.ai",
    },
  };
}

const portableTextComponents: Partial<PortableTextReactComponents> = {
  types: {
    image: ({ value }: { value: any }) => (
      <img
        className="object-cover w-full h-full rounded-3xl"
        src={urlForImage(value).toString()}
        alt={value.alt || "Default Alt Text"} // Provide a fallback if `alt` is undefined
      />
    ),
  },
  list: {
    bullet: ({ children }: { children?: React.ReactNode }) => (
      <ul className="list-disc ml-5 space-y-2">{children}</ul>
    ),
  },
  listItem: {
    bullet: ({ children }: { children?: React.ReactNode }) => (
      <li className="ml-3 text-lg">{children}</li> // Bullet point with bold text
    ),
  },
  block: {
    h1: ({ children }: { children?: React.ReactNode }) => (
      <h1 className="lg:text-4xl text-2xl font-bold my-4">{children}</h1>
    ),
    h2: ({ children }: { children?: React.ReactNode }) => (
      <h2 className="lg:text-3xl text-2xl font-semibold my-3">{children}</h2>
    ),
    h3: ({ children }: { children?: React.ReactNode }) => (
      <h3 className="lg:text-2xl text-xl font-semibold">{children}</h3>
    ),
    h4: ({ children }: { children?: React.ReactNode }) => (
      <h4 className="text-xl font-medium my-2">{children}</h4>
    ),
    h5: ({ children }: { children?: React.ReactNode }) => (
      <h5 className="text-lg font-medium my-1">{children}</h5>
    ),
    h6: ({ children }: { children?: React.ReactNode }) => (
      <h6 className="text-base font-medium my-1">{children}</h6>
    ),
    normal: ({ children }: { children?: React.ReactNode }) => (
      <p className="text-base my-2">{children}</p>
    ),
  },
  
  marks: {
    strong: ({ children }: { children?: React.ReactNode }) => (
      <span className="">{children}</span> // No `<strong>` tag, only class-based styling
    ),
  },
  
};


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
            alt={data.heroimage?.alt || "blog post"}
          />
        )}
        <div className="absolute inset-0 bg-[#020C16] opacity-75"></div>
        <div className="relative flex flex-col items-center lg:px-20 px-5 lg:pt-12 lg:pb-0 pt-48 pb-36 w-full max-md:px-5 max-md:max-w-full flex-grow">
          <div className="lg:absolute lg:top-[300px] text-center">
            <div className="lg:text-4xl text-2xl font-bold text-center capitalize max-lg:mt-0 lg:w-8/12 mx-auto">
              <h1 className="title capitalize leading-[56px]">{data.title}</h1>
            </div>
          </div>

        </div>
      </div>

      {/* Introduction Section */}
      <div className="text-black px-6 md:px-16 py-10 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="block md:hidden mb-8">
              <SocialShare title={data.title} />
            </div>
            <h2 className="text-2xl max-w-5xl md:text-3xl font-bold mb-6">
              {data.blogheading}
            </h2>
            <div className="hidden md:block">
              <SocialShare title={data.title} />
            </div>          </div>


          <p className="text-xl  mb-6">
            {data.introductionheading}
          </p>
          {/* Rendering description (portable text) */}
          <div className="my-6 text-lg space-y-6">
            {data.description && <PortableText value={data.description} components={portableTextComponents} />}
          </div>
          {data.cardimage && (
            <img
              className=" object-cover w-full h-full rounded-3xl"
              src={urlForImage(data.cardimage).toString()}
              alt={data.cardimage?.alt || "blog post"}

            />
          )}
          <p className="my-6 text-lg">{data.briefdescription}</p>
          <ul className="space-y-6 mb-6">
            {data.briefitemsarray &&
              data.briefitemsarray.map((item: any, index: any) => (
                <li key={index}>
                  <h3 className="text-xl font-semibold">{item.heading}</h3>
                  <p>{item.value}</p>
                </li>
              ))}
          </ul>
          {data.primaryimage && (
            <img
              className=" object-cover w-full h-full rounded-3xl"
              src={urlForImage(data.primaryimage).toString()}
              alt={data.primaryimage?.alt || "blog post"}
            />
          )}
        </div>
      </div>

      {/* Challenges Faced Section */}
      {data.challengesfacedheading &&
        <div className="relative text-black px-6 md:px-16 py-10 md:py-16">
          <div className="absolute inset-0 bg-[#1D92FB] opacity-10"></div>
          <div className="max-w-7xl mx-auto relative">
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
      }
      {/* Tools and Technology Section */}
      {data.caseStudiesToolsSection &&
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
      }

      {/* Our Approach Section */}
      {data.ourapproachheading &&
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
            {data.secondaryimage && (
              <img
                className=" object-cover w-full h-full rounded-3xl"
                src={urlForImage(data.secondaryimage).toString()}
                alt={data.secondaryimage?.alt || "blog post"}
              />
            )}
          </div>
        </div>
      }

      {/* Prerequisites Section */}
      {data.criticalPrerequisitesSection.heading &&
        <div className="relative text-black px-6 md:px-16 py-10 md:py-16">
          <div className="absolute inset-0 bg-[#1D92FB] opacity-10"></div>
          <div className="max-w-7xl mx-auto relative">
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
      }
      {/* Conclusion Section */}
      {data.conclusionheading &&
        <div className="bg-white text-black px-6 md:px-16 py-10 md:py-16">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              {data.conclusionheading}
            </h2>
            <p className="text-lg">{data.conclusion}</p>
          </div>
        </div>
      }
      {/* Project Overview Section */}
      {data.projectoverviewtitle &&
        <div className="bg-gray-5 x0 text-black px-6 md:px-16 py-10 md:py-16">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-xl font-bold mb-6">
              {data.projectoverviewtitle}
            </h2>
          </div>
        </div>
      }

      {/* Conclusion Section */}
      {data.faqSection &&
        <div className="">
          <BlogsFaq faq={data.faqSection} />
          </div>
                 }
    </div>
  );
};

export default Page;
