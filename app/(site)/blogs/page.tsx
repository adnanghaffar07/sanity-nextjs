import Link from "next/link";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { client } from "../../../sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";

async function getValueData() {
  const queryValue = `*[_type == 'portfolio' && pageType == 'blogs'] | order(_createdAt asc)`;
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
          <p className="mt-1 sm:mt-2 mb-2 sm:mb-44 text-xs sm:text-xl font-light tracking-wide leading-4 sm:leading-7 text-center text-white max-w-[280px] sm:max-w-[1080px] px-3 xl:px-0">
            Your gateway to thought-provoking articles that spark curiosity and
            ignite your passions.
          </p>
        </div>
      </div>

      <div className="max-w-full  relative">
        <img
          loading="lazy"
          src="/intersect-left.png"
          alt="icon"
          className="aspect-[1.22] absolute left-0 top-20 lg:block hidden"
        />

        <div className="flex flex-col self-center w-full xl:max-w-[1272px] max-w-[991px] max-md:max-w-full relative z-10 mx-auto">
          <div className="lg:px-10 px-5 w-full">
            <div className="xl:flex gap-10 lg:pt-16 lg:pb-10 pt-8 pb-8">
              <div className="xl:w-5/12 w-full rounded-3xl shadow-md shadow-slate-400 bg-[#F3F3F3] mb-10 xl:mb-0">
                <div className="w-full xl:min-h-[300px] relative rounded-3xl">
                  <div
                    className="absolute top-0 left-0 w-full h-full bg-cover bg-no-repeat bg-left-top rounded-3xl xl:block hidden"
                    style={{
                      backgroundImage: `url(/why-work-with-web-design.jpg)`,
                    }}
                  ></div>
                  <img
                    loading="eager"
                    alt="blog image"
                    src="/blogs-why-work-with-web-design.png"
                    width={456}
                    height={300}
                    className="w-full block xl:hidden rounded-3xl"
                  />
                </div>
                <div className="pb-4 pt-8 px-5">
                  <p className="text-xs sm:text-lg">20 Feb 2024</p>
                  <h1 className="md:text-2xl font-medium text-base sm:text-xl">
                    20 Tips: Why You Should Work with a Web Design Company in
                    2024
                  </h1>
                  <div className="">
                    <hr className="bg-black my-2 h-px w-full border-0" />
                  </div>
                  <div className="">
                    <p className="font-light text-xs sm:text-base">
                      This article discusses the benefits of working with a web
                      design company. It provides tips on why you should work
                      with a web design company, how a website can be the
                      foundation of any digital marketing campaign, and how a
                      website can be the focal point for all digital marketing
                      initiatives.
                    </p>
                  </div>
                </div>
              </div>

              <div className="xl:w-7/12 gap-10 flex flex-col">
                <div className="rounded-3xl shadow-md shadow-slate-400 bg-[#F3F3F3]">
                  <div className="md:flex gap-3">
                    <div className="md:w-[1682px] relative rounded-3xl">
                      <div
                        className="absolute top-0 left-0 w-full h-full bg-no-repeat bg-[length:105%] bg-center rounded-3xl border border-black md:block hidden"
                        style={{
                          backgroundImage: `url(/finding-the-best.png)`,
                        }}
                      ></div>
                      <img
                        loading="lazy"
                        src="/blogs-finding-the-best.png"
                        alt="blog image"
                        width={301}
                        height={288}
                        className="w-full block md:hidden rounded-3xl"
                      />
                    </div>

                    <div className="self-center xl:pr-5 xl:pl-0 xl:py-0 px-5 py-5 xl:min-h-[288px] justify-center flex flex-col">
                      <p className="text-xs sm:text-lg">21 Feb 2024</p>
                      <h1 className="text-base sm:text-xl font-medium">
                        Finding the Best Web Development Company for your
                        Project
                      </h1>
                      <div className="">
                        <hr className="bg-black my-2 h-px w-full border-0" />
                      </div>
                      <div className="">
                        <p className="font-light md:text-sm text-xs sm:text-base">
                          Nowadays, finding a perfect fit for your
                          company&rsquo;s project is difficult. Here are some
                          tips on hiring a web design and development company
                          for your project. Hiring a web development company is
                          not difficult. Finding one that is a perfect fit for
                          you and can understand and satisfy your needs is
                          difficult, though.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="rounded-3xl shadow-md shadow-slate-400 bg-[#F3F3F3]">
                  <div className="md:flex gap-0">
                    <div className="md:w-[1182px] relative rounded-3xl">
                      <div
                        className="absolute top-0 left-0 w-full h-full bg-cover bg-no-repeat bg-center rounded-3xl md:block hidden"
                        style={{
                          backgroundImage: `url(/img-sanity-nextjs.jpg)`,
                        }}
                      ></div>
                      <img
                        loading="lazy"
                        src="/blogs-sanity.png"
                        alt="blog image"
                        width={306}
                        height={288}
                        className="w-full block md:hidden rounded-3xl"
                      />
                    </div>
                    <div className=" self-center xl:pr-5 xl:pl-5 xl:py-0 px-5 py-5 xl:min-h-[288px] justify-center flex flex-col">
                      <p className="text-xs sm:text-lg">26 Feb 2024</p>
                      <h1 className="text-base sm:text-xl font-medium">
                        Creating a portfolio website with Sanity and Next.js
                      </h1>
                      <div className="">
                        <hr className="bg-black my-2 h-px w-full border-0" />
                      </div>
                      <div className="">
                        <p className="font-light md:text-sm text-xs sm:text-base">
                          In this blog, we will put together a detailed guide to
                          help you build a functional and beautiful portfolio
                          using Sanity and Next.js. Thus, this article will
                          explain what Sanity is and why it is essential to our
                          project.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {data.map((item: any) => (
              <Link
                key={item._id}
                href={`/blogs/${item.slug}`}
                className="w-full mb-10"
              >
                <div className="rounded-3xl mb-10 shadow-md shadow-slate-400 bg-[#F3F3F3]">
                  <div className="xl:flex gap-5">
                    <div className="xl:w-7/12">
                      <img
                        loading="lazy"
                        src={urlForImage(item.heroimage).toString()}
                        alt={item.title}
                        width={683}
                        height={477}
                        className="w-full rounded-3xl hidden xl:block"
                      />
                      <img
                        loading="lazy"
                        src={urlForImage(item.heroimage).toString()}
                        alt={item.title}
                        width={911}
                        height={636}
                        className="w-full rounded-3xl block xl:hidden"
                      />
                    </div>
                    <div className="xl:w-5/12 self-center xl:py-3 py-10 xl:pr-10 xl:pl-0 px-5">
                      <p className="text-xs sm:text-lg mb-10">   {item.subtitle}</p>
                      <h1 className="md:text-3xl sm:text-xl text-base font-medium">
                        {item.title}
                      </h1>
                      <div>
                        <hr className="bg-black my-2 h-px w-full border-0" />
                      </div>
                      <div>
                        <p
                          className="font-light text-xs sm:text-base md:text-[22px] leading-normal md:leading-[32px]"
                          // style={{ lineHeight: "32px" }}
                        >
                          {item.criticalPrerequisitesSection?.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
            <div className="flex md:justify-end justify-center gap-3 mb-5 lg:mb-0">
              <div className="bg-[#002244] rounded-full w-6 h-6 flex justify-center items-center flex-col cursor-pointer">
                <AiOutlineArrowLeft size={18} className="text-white" />
              </div>
              <div className="bg-[#002244] rounded-full w-6 h-6 flex justify-center items-center flex-col cursor-pointer">
                <AiOutlineArrowRight size={18} className="text-white" />
              </div>
            </div>
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
