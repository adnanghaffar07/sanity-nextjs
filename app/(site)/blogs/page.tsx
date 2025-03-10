import Link from "next/link";
import { client } from "../../../sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";

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
          className="aspect-[1.22] absolute left-0 top-20 lg:block hidden"
        />

        <div className="flex flex-col self-center py-10 w-full xl:max-w-[1272px] max-w-[991px] max-md:max-w-full relative z-10 mx-auto">
          <div className="lg:px-10 px-5 w-full">
            {data.map((item: any) => (
              <Link
                key={item._id}
                href={`/blogs/${item.slug}`}
                className="w-full mb-10"
              >
                <div className="rounded-3xl mb-10 shadow-md xl:h-[400px] shadow-slate-400 bg-[#F3F3F3]">
                  <div className="xl:flex gap-5">
                    <div className="xl:w-7/12">
                      <img
                        loading="lazy"
                        src={urlForImage(item.heroimage).toString()}
                        alt={item.title}
                        width={683}
                        height={207}
                        className="w-full xl:h-[400px] rounded-3xl hidden xl:block"
                      />
                      <img
                        loading="lazy"
                        src={urlForImage(item.heroimage).toString()}
                        alt={item.title}
                        width={911}
                        height={636}
                        className="w-full xl:h-[400px] rounded-3xl block xl:hidden"

                      />

                    </div>
                    <div className="xl:w-5/12 self-center xl:py-3 py-10 xl:pr-10 xl:pl-0 px-5">
                      <p className="text-xs sm:text-lg mb-4">{item.subtitle}</p>
                      <h3 className="text-2xl  sm:text-xl text-base font-medium">
                        {item.title}
                      </h3>
                      <div>
                        <hr className="bg-black my-5 h-px   w-full border-0" />
                      </div>
                      <div>
                        <p className="font-light text-sm sm:text-lg  leading-7">
                          {item.introductionheading
                            ? item.introductionheading
                              .split(" ")
                              .slice(0, 30)
                              .join(" ")
                              .concat(
                                item.introductionheading.split(" ").length > 30 ? "..." : ""
                              )
                            : ""}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <img
          loading="lazy"
          src="/ellipse-2.png"
          className="aspect-[1.22] absolute -bottom-96 right-0 lg:block hidden"
          alt="eclipse-icon"
        />
      </div>
    </>
  );
}
