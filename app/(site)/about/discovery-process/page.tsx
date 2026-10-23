import type { Metadata } from "next";
import type { ReactNode } from "react";
import { getDiscoveryPage, type SanityImage as SanityImageData, type TitledPoint } from "@/sanity/lib/site-pages";
import { urlForImage } from "@/sanity/lib/image";
import SanityImage from "@/components/ui/SanityImage";
import ScrollToSectionButton from "@/components/ui/ScrollToSectionButton";

export const revalidate = 300;

const PAGE_URL = "https://codeautomation.ai/about/discovery-process";
const DEFAULT_TITLE = "Code Automation - Custom Software and Mobile Development Company in USA";
const DEFAULT_DESCRIPTION = "Custom Software and Mobile Development Company in USA";
const SHARE_IMAGE = "https://codeautomation.ai/thankyou.jpg";

export async function generateMetadata(): Promise<Metadata> {
  const page = await getDiscoveryPage();
  const title = page?.seo?.title || DEFAULT_TITLE;
  const description = page?.seo?.description || DEFAULT_DESCRIPTION;
  const shareImage = (image?: SanityImageData) => [{ url: image?.asset ? urlForImage(image) : SHARE_IMAGE, width: 1200, height: 630, alt: title }];

  return {
    title,
    description,
    keywords: page?.seo?.keywords?.join(", ") || "CodeAutomation.ai",
    alternates: { canonical: PAGE_URL },
    openGraph: { type: "website", url: PAGE_URL, title: page?.facebook?.title || title, description: page?.facebook?.description || description, images: shareImage(page?.facebook?.image) },
    twitter: { card: "summary_large_image", title: page?.twitter?.title || title, description: page?.twitter?.description || description, images: shareImage(page?.twitter?.image) },
  };
}

// A full-width band; every other band is light blue.
function Band({ tinted, children }: { tinted?: boolean; children: ReactNode }) {
  return (
    <div className={`w-full px-6 py-10 md:px-16 md:py-16 ${tinted ? "bg-blue-50" : "bg-white"}`}>
      <div className="max-w-7xl mx-auto">{children}</div>
    </div>
  );
}

function Intro({ heading, description }: { heading?: string; description?: string }) {
  return (
    <>
      <h2 className="mb-6 text-2xl font-bold text-blue-900">{heading}</h2>
      <p className="mb-6 text-lg leading-relaxed text-gray-700">{description}</p>
    </>
  );
}

// "Title detail" list with the title in bold.
function PointList({ heading, points, numbered }: { heading?: string; points?: TitledPoint[] | null; numbered?: boolean }) {
  return (
    <>
      {heading && <h3 className="mb-4 text-2xl font-semibold text-blue-800">{heading}</h3>}
      <ul className={`mb-8 list-inside text-gray-700 ${numbered ? "list-decimal" : "list-disc"}`}>
        {points?.map((point, index) => (
          <li key={index} className="mb-2">
            <strong>{point.title} </strong>
            {point.detail}
          </li>
        ))}
      </ul>
    </>
  );
}

function Example({ example }: { example?: { title?: string; detail?: string } | null }) {
  if (!example?.title && !example?.detail) return null;
  return (
    <div className="p-4 mt-8 bg-white rounded-lg shadow-lg">
      <h4 className="text-xl font-bold text-gray-800">{example.title}</h4>
      <p className="text-lg leading-relaxed text-gray-700">{example.detail}</p>
    </div>
  );
}

export default async function DiscoveryProcessPage() {
  const page = await getDiscoveryPage();
  const { knowledge, voc, dmaic, opportunities, imagery } = page ?? {};

  return (
    <div className="w-full flex flex-col items-center">
      <div className="flex overflow-hidden relative flex-col pb-12 w-full font-light text-white lg:min-h-[700px] max-md:max-w-full">
        <SanityImage image={page?.heroImage} alt="Hero Image Discovery" fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-[#020C16] opacity-65" />
        <div className="relative flex flex-col items-center px-5 pt-48 pb-36 w-full lg:px-20 lg:pt-12 flex-grow">
          <div className="lg:absolute lg:top-[300px] text-center lg:w-8/12 mx-auto">
            <h1 className="text-2xl font-bold capitalize lg:text-4xl">{page?.pageTitle}</h1>
            <h2 className="mt-4 text-base lg:text-2xl lg:px-32">{page?.pageDesc}</h2>
          </div>
        </div>
      </div>

      <Band>
        <h2 className="mb-8 text-2xl text-blue-900 font-bold">{page?.intro?.heading}</h2>
        <p className="text-lg leading-relaxed text-gray-800">{page?.intro?.description}</p>
      </Band>
      <Band tinted>
        <h2 className="mb-8 text-2xl font-bold text-blue-900">{page?.discovery?.heading}</h2>
        <p className="text-lg leading-relaxed text-gray-700">{page?.discovery?.description}</p>
      </Band>
      <Band>
        <Intro heading={knowledge?.heading} description={knowledge?.description} />
        <PointList heading="Sources" points={knowledge?.sources} />
        <PointList heading={knowledge?.stepsHeading} points={knowledge?.steps} numbered />
        <Example example={knowledge?.example} />
      </Band>
      <Band tinted>
        <Intro heading={voc?.heading} description={voc?.description} />
        <PointList heading="Methods" points={voc?.methods} />
        <Example example={voc?.example} />
      </Band>
      <Band>
        <Intro heading={dmaic?.heading} description={dmaic?.description} />
        <PointList heading={dmaic?.dmaicHeading} points={dmaic?.dmaicSteps} numbered />
        <Example example={dmaic?.dmaicExample} />
      </Band>
      <Band tinted>
        <PointList heading={dmaic?.dmadvHeading} points={dmaic?.dmadvSteps} numbered />
        <Example example={dmaic?.dmadvExample} />
      </Band>
      <Band>
        <Intro heading={opportunities?.heading} description={opportunities?.description} />
        <PointList heading="Opportunities" points={opportunities?.points} />
      </Band>
      <Band tinted>
        <Intro heading={imagery?.heading} description={imagery?.description} />
        <PointList heading="Guidance Points" points={imagery?.points} />
      </Band>

      <div className="w-full px-6 py-10 text-white bg-blue-900 md:px-16 md:py-16 rounded-lg shadow-lg text-center md:text-left">
        <div className="max-w-7xl mx-auto">
          <h2 className="mb-6 text-2xl font-bold">{page?.cta?.heading}</h2>
          <p className="mb-6 text-lg leading-relaxed">{page?.cta?.text}</p>
          <div className="mt-8 flex justify-center md:justify-start">
            <ScrollToSectionButton
              content="Get Started Now"
              classes="px-8 py-3 text-blue-900 cursor-pointer bg-white rounded-full shadow-md hover:bg-gray-100 transition duration-300"
              destination="contact-box"
            />
          </div>
        </div>
      </div>

      <div className="w-full bg-white px-6 py-10 md:px-16 md:py-16 rounded-lg">
        <div className="max-w-7xl mx-auto">
          <Intro heading={page?.conclusion?.heading} description={page?.conclusion?.text} />
          <h3 className="mb-4 text-xl font-semibold text-blue-800">{page?.conclusion?.inquiryHeading}</h3>
          <div className="mt-8 flex justify-start">
            <ScrollToSectionButton
              content="Contact Us"
              classes="px-8 py-3 text-white bg-blue-900 cursor-pointer rounded-full shadow-md hover:bg-blue-700 transition duration-300"
              destination="contact-box"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
