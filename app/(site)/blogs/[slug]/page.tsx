import { PortableText, PortableTextReactComponents } from "@portabletext/react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/prism"; 
import { client } from "../../../../sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import SocialShare from "../../components/socialShare";
import BlogsFaq from "../../components/BlogsFaq";

async function getValueData(slug: string) {
  const queryValue = `*[_type == 'portfolio' && slug == '${slug}'][0]`;
  try {
    return await client.fetch(queryValue);
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
}

async function getLogoData() {
  const queryLogo = `*[_type == 'techLogos'] | order(_createdAt asc)`;
  try {
    return await client.fetch(queryLogo);
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
}

// ✅ Updated generateMetadata function with Canonical URL
export async function generateMetadata({ params }: { params: { slug: string } }) {
  const data = await getValueData(params.slug);

  const defaultTitle = "Code Automation - Custom Software and Mobile Development Company in USA";
  const defaultDescription = "Custom Software and Mobile Development Company in USA";
  const defaultKeywords = "CodeAutomation.ai";
  const canonicalUrl = `https://codeautomation.ai/blogs/${params.slug}`; // ✅ Dynamic Canonical URL

  const title = data?.webSeoMetadataSub?.title || defaultTitle;
  const description = data?.webSeoMetadataSub?.description || defaultDescription;
  const keywords = data?.webSeoMetadataSub?.keywords?.join(", ") || defaultKeywords;

  // ✅ Prevents errors if `heroimage` is missing
  const heroImageUrl = data?.heroimage ? urlForImage(data.heroimage).toString() : "/default-image.jpg";

  const facebookMeta = data?.facebookCardsSub || {};
  const twitterMeta = data?.twitterCardsSub || {};
  const linkedInMeta = data?.linkedInCardsSub || {};
  const pinterestMeta = data?.pinterestCardsSub || {};
  const whatsappMeta = data?.whatsappCardsSub || {};
  const telegramMeta = data?.telegramCardsSub || {};

  return {
    title,
    description,
    keywords,
    openGraph: {
      type: facebookMeta.facebookType || "website",
      url: facebookMeta.facebookUrl || canonicalUrl,
      title: facebookMeta.facebookTitle || title,
      description: facebookMeta.facebookDescription || description,
      images: [{ url: heroImageUrl, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: twitterMeta.twitterType || "summary_large_image",
      title: twitterMeta.twitterTitle || title,
      description: twitterMeta.twitterDescription || description,
      images: [{ url: heroImageUrl, width: 1200, height: 630, alt: title }],
      url: twitterMeta.twitterUrl || canonicalUrl,
    },
    linkedIn: {
      title: linkedInMeta.linkedInTitle || title,
      description: linkedInMeta.linkedInDescription || description,
      image: heroImageUrl,
      url: linkedInMeta.linkedInUrl || canonicalUrl,
    },
    pinterest: {
      title: pinterestMeta.pinterestTitle || title,
      description: pinterestMeta.pinterestDescription || description,
      url: pinterestMeta.pinterestUrl || canonicalUrl,
    },
    whatsapp: {
      title: whatsappMeta.whatsappTitle || title,
      description: whatsappMeta.whatsappDescription || description,
      url: whatsappMeta.whatsappUrl || canonicalUrl,
    },
    telegram: {
      title: telegramMeta.telegramTitle || title,
      description: telegramMeta.telegramDescription || description,
      url: telegramMeta.telegramUrl || canonicalUrl,
    },
    alternates: {
      canonical: canonicalUrl, // ✅ Fixed canonical tag
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
    code: ({ value }: { value: any }) => (
      <div className="my-4">
        <SyntaxHighlighter language={value.language || "javascript"} style={dracula}>
          {value.code}
        </SyntaxHighlighter>
      </div>
    ),
    table: ({ value }: { value: any }) => (
      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse border border-gray-300">
          <tbody>
            {value.rows?.map((row: any, rowIndex: number) => (
              <tr key={rowIndex} className="border border-gray-300">
                {row.cells.map((cell: string, cellIndex: number) => (
                  <td key={cellIndex} className="border border-gray-300 px-4 py-2">
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
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
            <h1 className="lg:text-4xl text-2xl leading-[56px] font-bold text-center capitalize max-lg:mt-0 lg:w-8/12 mx-auto">
              {data.title}
            </h1>
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
