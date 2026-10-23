import type { Metadata } from "next";
import Image from "next/image";
import { getBrochures, type Brochure } from "@/sanity/lib/site-pages";
import SanityImage from "@/components/ui/SanityImage";
import ScrollToSectionButton from "@/components/ui/ScrollToSectionButton";
import BrochureDownload from "@/components/brochure/BrochureDownload";
import coverImage from "@/public/brochure-cover.jpg";
import featuresImage from "@/public/brochure-hero.jpg";
import brochureIcon from "@/public/brochure-icon.png";

export const revalidate = 300;

const TITLE = "Download Our Service Brochures - CodeAutomation.ai";
const DESCRIPTION = "Explore and download brochures of our custom software and mobile development services.";
const PAGE_URL = "https://codeautomation.ai/brochure";
const SHARE_IMAGE = "https://codeautomation.ai/brochure-cover.jpg";
const LIST_ID = "brochure";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: "Brochures, CodeAutomation.ai, Software Development, Mobile App Development",
  alternates: { canonical: PAGE_URL },
  openGraph: { type: "website", url: PAGE_URL, title: TITLE, description: DESCRIPTION, images: [{ url: SHARE_IMAGE, width: 1200, height: 630, alt: TITLE }] },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION, images: [{ url: SHARE_IMAGE, alt: TITLE }] },
};

const FEATURES = [
  { title: "In-depth Information", text: "Gain access to valuable and detailed information about our services and solutions." },
  { title: "Free Downloads", text: "All brochures are available for free download, enabling easy access to key resources." },
  { title: "Save Time", text: "Quickly understand our offerings with concise and visually appealing brochures." },
];

function BrochureCard({ brochure, compact }: { brochure: Brochure; compact?: boolean }) {
  return (
    <div className="flex flex-col items-start justify-between text-left">
      <div className="w-full">
        <div className="relative w-full h-48 mb-4">
          <SanityImage image={brochure.image} alt={brochure.title ?? ""} fill sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw" className="object-cover rounded-2xl" />
        </div>
        <h2 className="text-xl font-semibold text-gray-800 mb-2">{brochure.title}</h2>
        <p className={`text-gray-600 ${compact ? "mb-3" : "mb-6"}`}>{brochure.description}</p>
      </div>
      <BrochureDownload fileUrl={brochure.fileUrl} serviceTitle={brochure.title ?? "Brochure"} />
    </div>
  );
}

export default async function BrochuresPage() {
  const brochures = await getBrochures();
  const latest = brochures.slice(-3);
  const best = brochures.slice(0, 6);
  const more = brochures.slice(6, -3);

  return (
    <div className="bg-blue-50 min-h-screen">
      <div className="flex overflow-hidden relative flex-col w-full font-light text-white h-[450px] lg:min-h-[700px]">
        <Image src={coverImage} alt="" fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-[#020C16] opacity-65" />
        <div className="flex relative flex-col items-center justify-center max-w-7xl mx-auto lg:px-20 px-5 lg:pt-12 w-full max-md:max-w-full flex-grow mt-20 lg:mt-0 text-center">
          <h1 className="lg:text-4xl text-3xl font-bold capitalize lg:w-8/12 mx-auto">Download Your Future Today!</h1>
          <h2 className="md:text-2xl sm:text-xl text-lg mt-4 max-md:max-w-full lg:px-32">
            Unlock the secrets of automation with our exclusive brochures. Your journey to efficiency starts here!
          </h2>
        </div>
      </div>

      <div className="px-6">
        <section className="bg-white max-w-7xl mx-auto mt-10 mb-6 md:mb-16 py-16 px-6 md:px-12 rounded-3xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h3 className="text-lg font-bold text-[#1d92fb] uppercase">Features</h3>
              <h3 className="text-4xl font-extrabold text-gray-800">Discover the Value of Our Brochures</h3>
              <p className="text-gray-600 text-lg">
                Explore comprehensive insights, detailed guides, and exclusive knowledge about our services by downloading our
                brochures. Enhance your decision-making and stay informed about the latest trends and offerings.
              </p>
            </div>
            <Image src={featuresImage} alt="Brochure Features" sizes="(min-width: 768px) 50vw, 100vw" className="w-full h-auto rounded-3xl shadow-lg" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {FEATURES.map((feature) => (
              <div key={feature.title} className="text-center">
                <Image src={brochureIcon} alt="brochure" className="inline-block mb-4" />
                <h4 className="text-lg font-bold text-gray-800">{feature.title}</h4>
                <p className="text-gray-600">{feature.text}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      <div className="max-w-5xl px-6 mx-auto">
        <h3 className="text-3xl font-bold text-gray-900 mb-3 mt-8">Latest Brochures</h3>
        {latest.map((brochure) => (
          <div key={brochure._id} className="flex md:flex-row flex-col justify-between items-start md:items-center gap-6 py-6 border-b border-black">
            <div className="relative flex-shrink-0 w-[250px] h-[140px] mb-4 md:mb-0">
              <SanityImage image={brochure.image} alt={brochure.title ?? ""} fill sizes="250px" className="object-cover rounded-3xl" />
            </div>
            <div className="flex-grow md:ml-6">
              <h2 className="text-lg font-semibold text-gray-800 mb-2">{brochure.title}</h2>
              <p className="text-gray-600 max-w-2xl">{brochure.description}</p>
              <p className="text-gray-500 text-sm mt-3">
                &#10003; {new Date(brochure.updatedAt).toLocaleDateString("en-US", { month: "long", year: "numeric" })}
              </p>
            </div>
            <BrochureDownload fileUrl={brochure.fileUrl} serviceTitle={brochure.title ?? "Brochure"} />
          </div>
        ))}
      </div>

      <div className="max-w-5xl mx-auto pt-6 px-4">
        <h2 className="text-3xl font-bold pb-4 my-6 text-black">Our Best Brochures</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {best.map((brochure) => (
            <BrochureCard key={brochure._id} brochure={brochure} compact />
          ))}
        </div>
      </div>

      <div className="w-full mt-10 mb-10 px-6 py-10 text-white bg-[#1d92fb] md:px-16 md:py-16 rounded-lg shadow-lg text-center md:text-left">
        <div className="max-w-7xl mx-auto">
          <h2 className="mb-6 text-2xl font-bold">Your Guide to Automation & Development</h2>
          <p className="mb-6 text-lg leading-relaxed">
            Discover insights into software development and automation with CodeAutomation. Download our free brochures to learn
            how we revolutionize processes, boost efficiency, and deliver innovative solutions tailored to your business needs.
          </p>
          <div className="mt-8 flex justify-center md:justify-start">
            <ScrollToSectionButton
              content="Download Now"
              classes="px-8 py-3 text-blue-900 cursor-pointer bg-white rounded-full shadow-md hover:text-black hover:bg-[#f7e022] transition duration-300"
              destination={LIST_ID}
            />
          </div>
        </div>
      </div>

      <div id={LIST_ID} className="max-w-7xl mx-auto py-6 px-4">
        <h3 className="text-3xl font-bold pb-4 my-6 text-black">Brochures Tailored for Your Success</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {more.map((brochure) => (
            <BrochureCard key={brochure._id} brochure={brochure} />
          ))}
        </div>
      </div>
    </div>
  );
}
