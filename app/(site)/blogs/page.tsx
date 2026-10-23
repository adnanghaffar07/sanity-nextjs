import type { Metadata } from "next";
import Image from "next/image";
import { getBlogCards } from "@/sanity/lib/blog";
import BlogList from "@/components/blog/BlogList";
import intersectLeft from "@/public/intersect-left.png";
import ellipse from "@/public/ellipse-2.png";

export const revalidate = 300;

const TITLE = "Expert Insights on AI & Business Automation";
const DESCRIPTION =
  "Read Code Automation blogs, our expert insights on AI development, automation, QA, and software trends that help you scale your businesses.";
const PAGE_URL = "https://codeautomation.ai/blogs";
const SHARE_IMAGE = "https://codeautomation.ai/thankyou.jpg";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: ["CodeAutomation", "software development company", "software development services"],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: SHARE_IMAGE, width: 1200, height: 630, alt: "CodeAutomation Logo" }],
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION, images: [SHARE_IMAGE] },
};

export default async function BlogsPage() {
  const posts = await getBlogCards();

  return (
    <>
      <div className="flex overflow-hidden relative flex-col pb-12 w-full font-light text-white h-[380px] sm:h-[600px] md:h-[620px] lg:h-[704px] max-md:max-w-full">
        <div className="absolute inset-0 bg-[#020C16] opacity-75 z-[2]" />
        <video className="absolute inset-0 object-cover size-full z-[1]" muted autoPlay loop playsInline preload="auto">
          <source src="/hero-sec-video.webm" type="video/webm" />
          <source src="/hero-sec-video.mp4" type="video/mp4" />
        </video>

        <div className="mt-[130px] sm:mt-[280px] lg:mt-[327px] absolute inset-0 flex flex-col items-center z-[2]">
          <h1 className="text-xl sm:text-5xl font-bold tracking-tight text-center capitalize leading-[48px] text-white">
            Our Blogs
          </h1>
          <h2 className="mt-1 sm:mt-2 mb-2 sm:mb-44 text-xs sm:text-xl font-light tracking-wide leading-4 sm:leading-7 text-center text-white max-w-[280px] sm:max-w-[1080px] px-3 xl:px-0">
            Your gateway to thought-provoking articles that spark curiosity and ignite your passions.
          </h2>
        </div>
      </div>

      <div className="max-w-full relative">
        <Image src={intersectLeft} alt="" className="absolute left-0 top-20 lg:block hidden" />
        <BlogList posts={posts} pageSize={6} />
        <Image src={ellipse} alt="" className="absolute -bottom-1 right-0 lg:block hidden" />
      </div>
    </>
  );
}
