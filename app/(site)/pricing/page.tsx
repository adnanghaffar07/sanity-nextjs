import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getPricingPage } from "@/sanity/lib/site-pages";
import SanityImage from "@/components/ui/SanityImage";
import ScrollToSectionButton from "@/components/ui/ScrollToSectionButton";
import PricingPlan from "@/components/pricing/PricingPlan";
import CaseStudiesSection from "@/components/sections/CaseStudiesSection";
import heroImage from "@/public/price-plan.jpeg";
import ctaImage from "@/public/boostbusiness.png";

export const revalidate = 300;

const TITLE = "Affordable Software Development Pricing | CodeAutomation.ai";
const DESCRIPTION =
  "Explore our transparent and cost-effective pricing plans for expert software development, web development, and app development services at CodeAutomation.ai.";
const PAGE_URL = "https://codeautomation.ai/pricing";
const SHARE_IMAGE = "https://codeautomation.ai/price-plan.jpeg";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "software development pricing plans",
    "web development pricing",
    "app development pricing",
    "affordable pricing for development services",
    "custom software development pricing",
    "software development plans",
    "pricing for IT services",
    "development services pricing",
    "web and app development pricing",
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: PAGE_URL,
    siteName: "CodeAutomation.ai",
    type: "website",
    images: [{ url: SHARE_IMAGE, width: 1200, height: 630, alt: "CodeAutomation.ai Pricing Plans" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Affordable Pricing Plans for Software Development Services | CodeAutomation.ai",
    description: DESCRIPTION,
    images: [SHARE_IMAGE],
  },
};

export default async function PricingPage() {
  const page = await getPricingPage();
  const intro = page?.introductionSection;

  return (
    <div>
      <div className="flex overflow-hidden relative flex-col pb-12 w-full font-light text-white lg:min-h-[700px] max-md:max-w-full">
        <Image src={heroImage} alt="offshore software development company" fill priority sizes="100vw" className="object-cover" />
        <div className="flex relative flex-col items-center lg:px-20 px-5 lg:pt-12 lg:pb-0 pt-48 pb-36 w-full max-md:max-w-full flex-grow">
          <div className="lg:absolute lg:top-[300px] text-center">
            <h1 className="lg:text-4xl text-2xl font-bold capitalize mx-auto">{page?.heading}</h1>
            <h2 className="lg:text-2xl mx-auto text-base mt-4 max-md:max-w-full lg:px-32">{page?.subHeading}</h2>
            {page?.callToActionLink && (
              <div className="flex justify-center pt-6">
                <Link
                  href={page.callToActionLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:bg-[#1d92fb] hover:text-white bg-[#f7e022] text-black font-semibold py-3 px-8 rounded-lg shadow-lg text-center w-fit"
                >
                  {page.callToActionButton}
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>

      <section className="bg-[#D3EAFF]">
        <div className="max-w-6xl text-[#3C3C3C] px-6 py-10 md:py-16 mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="flex-1 md:mr-8">
            <SanityImage image={intro?.introImage} alt="Our Case Studies" sizes="(min-width: 768px) 50vw, 100vw" className="w-full h-auto rounded-lg" />
          </div>
          <div className="flex-1 mt-6 md:mt-0 md:ml-8">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">{intro?.introHeading}</h3>
            <ul className="text-lg list-disc pl-5 space-y-2">
              {intro?.featureIncluded?.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {page?.features && <PricingPlan features={page.features} />}

      <section className="text-center">
        <div className="max-w-[1440px] mx-auto px-6 md:px-16 py-6 md:py-10">
          <h2 className="text-2xl md:text-3xl font-bold text-[#3C3C3C]">Recent Projects</h2>
          <CaseStudiesSection />
        </div>
      </section>

      <section className="px-6 md:px-16 py-10 md:py-16 bg-[url('/Container.jpeg')] bg-cover bg-center bg-no-repeat">
        <div className="container text-white mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[1240px] items-center">
          <div className="col-span-2 flex flex-col w-full">
            <h2 className="text-2xl mb-4 lg:text-3xl font-bold leading-none">Let’s Get Started</h2>
            <p className="text-lg font-light max-w-2xl">
              I’d love to discuss how we can make your app a reality. Let’s set up a quick call, when would be a good time for you?
            </p>
            <h3 className="my-4 text-xl font-bold leading-7 max-md:max-w-full">Looking forward to working together.</h3>
            <ScrollToSectionButton
              classes="bg-white text-[#1d92fb] hover:bg-[#f7e022] cursor-pointer mt-4 hover:text-black font-semibold py-3 px-2 rounded-lg shadow-lg text-center w-full sm:max-w-72"
              content="Get Your Free Consultation Today"
              destination="contact-box"
            />
          </div>
          <div className="flex justify-center">
            <Image src={ctaImage} alt="offshore development services" sizes="400px" className="object-cover h-[250px] w-auto rounded-lg" />
          </div>
        </div>
      </section>
    </div>
  );
}
