import Link from "next/link";
import { client } from "../../../sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import BlogList from "../components/BlogList";

export const metadata = {
  title: "Software Development Company in the USA | CodeAutomation",
  description:
    "CodeAutomation.ai is a leading software development company specialized in custom software development services. Schedule a Call & build with experts.",
  keywords: [
    "CodeAutomation",
    "software development company",
    "software development services",
  ],
  alternates: {
    canonical: "https://codeautomation.ai/blogs", // ✅ Fixes the canonical error
  },
  openGraph: {
    type: "website",
    url: "https://codeautomation.ai/blogs",
    title: "Software Development Company in the USA | CodeAutomation",
    description:
      "CodeAutomation.ai is a leading software development company specialized in custom software development services. Schedule a Call & build with experts.",
    images: [
      {
        url: "https://codeautomation.ai/thankyou.jpg",
        width: 1200,
        height: 630,
        alt: "CodeAutomation Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Software Development Company in the USA | CodeAutomation",
    description:
      "CodeAutomation.ai is a leading software development company specialized in custom software development services. Schedule a Call & build with experts.",
    images: ["https://codeautomation.ai/thankyou.jpg"],
  },
};

async function getValueData() {
  const queryValue = `*[_type == 'portfolio' && pageType == 'blogs'] | order(_createdAt desc)`;
  try {
    const fetchData = await client.fetch(queryValue);
    return fetchData || [];
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
}
export default async function Blogs() {
  const data = await getValueData();
  return (
    <>
      <div className="flex overflow-hidden relative flex-col pb-12 w-full font-light text-white h-[380px] sm:h-[600px] md:h-[620px] lg:h-[704px] max-md:max-w-full">
        <div className="absolute top-0 left-0 w-full h-full inset-0 bg-[#020C16] opacity-75 z-[2]"></div>
        <video
          className="top-0 left-0 object-cover absolute inset-0 size-full z-[1]"
          width="100%"
          height="100%"
          muted
          autoPlay
          loop
          playsInline
          preload="auto"
        >
          <source src="/hero-sec-video.webm" type="video/webm" />
          <source src="/hero-sec-video.mp4" type="video/mp4" />
        </video>

        <div className="mt-[130px] sm:mt-[280px] lg:mt-[327px] absolute inset-0 flex flex-col items-center z-[2]">
          <h1 className="text-xl sm:text-5xl font-bold tracking-tight text-center capitalize leading-[48px] text-white">
            Our Blogs
          </h1>
          <h2 className="mt-1 sm:mt-2 mb-2 sm:mb-44 text-xs sm:text-xl font-light tracking-wide leading-4 sm:leading-7 text-center text-white max-w-[280px] sm:max-w-[1080px] px-3 xl:px-0">
            Your gateway to thought-provoking articles that spark curiosity and
            ignite your passions.
          </h2>
        </div>
      </div>

      <div className="max-w-full  relative">
        <img
          loading="lazy"
          src="/intersect-left.png"
          alt="icon"
          className=" absolute left-0 top-20 lg:block hidden"
        />
      <BlogList data={data} pageSize={6} />
        <img
          loading="lazy"
          src="/ellipse-2.png"
          className=" absolute -bottom-1 right-0 lg:block hidden"
          alt="eclipse-icon"
        />
      </div>
    </>
  );
}
