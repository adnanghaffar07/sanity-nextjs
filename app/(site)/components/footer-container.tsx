"use client";
import { getCpyrighttext } from "@/sanity/sanity-utils";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function FooterContainer() {
  // const cpyrighttext = await getCpyrighttext();

  const linkUrl = "/headless-cms";
  const linkUrlWeb = "/web-app-development";
  const linkUrlApp = "/mobile-app-development";
  const linkUrlAutomate = "/qa-web-testing";
  const linkUrlAI = "/ai-services";
  const linkUrlBuisness = "/automation-integration";

  const [showAddress, setAddress] = useState(true);

  const handleClick = () => {
    setAddress(!showAddress);
  };

  const currentPath = usePathname();

  useEffect(() => {
    setAddress(true);
  }, [currentPath]);

  const socialIcons = [
    {
      src: "/facebook-icon.svg",
      alt: "facebook",
      link: "https://www.facebook.com/Codeautomationai/",
    },
    {
      src: "/instagram-icon.svg",
      alt: "Instagram",
      link: "https://www.instagram.com/codeautomation.ai/",
    },
    {
      src: "/twitter-new.svg",
      alt: "twitter",
      link: "https://twitter.com/codeautomation",
      className: "rounded-3xl",
    },
    {
      src: "/linkedin-icon.svg",
      alt: "Linkedin",
      link: "https://www.linkedin.com/company/codeautomationai/",
    },
  ];

  return (
    <div>
      <div className="flex flex-col items-center py-12 w-full bg-[#1D92FB] max-md:max-w-full pt-60">
        <div className="w-full max-w-[1582px] lg:px-10 px-5  max-md:max-w-full grid xl:grid-cols-5 md:grid-cols-3 gap-5">
          <div className="flex flex-col xl:col-span-2 md:col-span-3 xl:pr-36">
            <div className="grid xl:grid-cols-1 md:grid-cols-2 gap-6 text-lg font-light text-white max-md:mt-10 self-start">
              <div>
                <div className="flex self-start">
                  <img
                    loading="lazy"
                    src="/footer-logo.svg"
                    className="max-w-full aspect-[5] w-[300px] max-md:ml-2.5"
                    alt="logo"
                  />
                </div>

                <div className="mt-5">
                  Let&rsquo;s embark on a journey of innovation and excellence
                  together.
                </div>
              </div>
              <div>
                <div className=" lg:text-2xl text-base font-medium">
                  Contact us for business
                </div>
                <div className="mt-3.5 leading-8">
                  <a
                    href="mailto:info@codeautomation.ai"
                    className="hover:underline my-auto inline-block"
                  >
                    info@codeautomation.ai
                  </a>
                  <br />
                  <a
                    href="tel:+18505584691"
                    className="hover:underline my-auto inline-block"
                  >
                    <div className=" flex flex-row gap-3">
                      <Image
                        src="/USA_Flag.png"
                        alt="USA-Flag-Icon"
                        width={40}
                        height={40}
                        className=" md:max-h-10 object-cover"
                      />

                      <span className=" font-light"> 850.558.4691</span>
                    </div>
                  </a>
                  <br />

                  <a
                    href="tel:+13076556139"
                    className="hover:underline my-auto inline-block"
                  >
                    <div className=" flex flex-row gap-3">
                      <Image
                        src="/USA_Flag.png"
                        alt="USA-Flag-Icon"
                        width={40}
                        height={40}
                        className=" md:max-h-10 object-cover"
                      />
                      <span className=" font-light"> 307.655.6139 </span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex flex-col grow text-white max-md:mt-10 items-center xl:ml-8 flex-1 px-5 text-xl relative z-10 self-start">
              <div className="text-2xl font-medium self-start">Solutions</div>
              <div className="mt-6 text-base font-light flex flex-col gap-5">
                <Link
                  href={`/services/${linkUrl}`}
                  className="hover:underline my-auto inline-block"
                >
                  Headless CMS
                </Link>
                <Link
                  href={`/services/${linkUrlWeb}`}
                  className="hover:underline my-auto inline-block"
                >
                  Web App Development
                </Link>
                <Link
                  href={`/services/${linkUrlApp}`}
                  className="hover:underline my-auto inline-block"
                >
                  Mobile App Development
                </Link>
                <Link
                  href={`/services/${linkUrlAutomate}`}
                  className="hover:underline my-auto inline-block"
                >
                  QA & Testing
                </Link>
                <Link
                  href={`/services/${linkUrlAI}`}
                  className="hover:underline my-auto inline-block"
                >
                  AI Services
                </Link>
                <Link
                  href={`/services/${linkUrlBuisness}`}
                  className="hover:underline my-auto inline-block"
                >
                  Automation & Integration
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col ">
            <div className="text-white max-md:mt-10  flex flex-col items-center xl:ml-8 flex-1 px-5 text-xl relative z-10 self-start">
              <div className="text-2xl font-medium self-start">About Us</div>
              <div className="mt-6 text-base font-light flex  flex-col gap-5">
                <Link
                  href={`/case-studies`}
                  className="hover:underline my-auto inline-block"
                >
                  Case Studies
                </Link>
                <Link
                  href={`/blogs`}
                  className="hover:underline my-auto inline-block"
                >
                  Blogs
                </Link>
                <Link
                  href={`/career`}
                  className="hover:underline my-auto inline-block"
                >
                  Careers
                </Link>
                <Link
                  href={`/lifeatca`}
                  className="hover:underline my-auto inline-block"
                >
                  Life at CA - Careers
                </Link>
                <Link
                  href={"/partnership-program"}
                  className="hover:underline my-auto inline-block"
                >
                  Partner with Us
                </Link>
                <Link
                  href="mailto:hr@codeautomation.ai"
                  className="hover:underline my-auto inline-block"
                >
                  hr@codeautomation.ai
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex flex-col text-white max-md:mt-10 self-start">
              <div className="text-2xl font-medium leading-6">Address</div>
              <div className="mt-6 text-lg font-light leading-5 self-start">
                <div className="flex flex-row gap-3">
                  <Image
                    src="/USA_Flag.png"
                    alt="USA-Flag-Icon"
                    width={40}
                    height={40}
                    className="md:max-h-10 object-cover"
                  />

                  <span className="text-1xl font-light">
                    30 N Gould St Ste 7596, Sheridan, WY, 82801
                  </span>
                </div>

                <br />

                <div className="flex flex-row gap-3">
                  <Image
                    src="/Canada-Flag.png"
                    alt="USA-Flag-Icon"
                    width={40}
                    height={40}
                    className=" md:max-h-10 object-cover"
                  />
                  <span className="text-1xl font-light">
                    25 McArthur Ave. Ottawa, ON K1L 6R3
                  </span>
                </div>
                <br />
                {showAddress ? (
                  <span
                    className=" cursor-pointer font-semibold"
                    onClick={handleClick}
                  >
                    More
                  </span>
                ) : (
                  <div className="flex flex-row gap-3">
                    <Image
                      src="/Pakistan-Flag.png"
                      alt="Pakistan-Flag-Icon"
                      width={40}
                      height={40}
                      className=" md:max-h-10 object-cover"
                    />

                    <span className=" text-1xl font-light">
                      {" "}
                      A 1/11 P, Block P Model Town, Lahore{" "}
                    </span>
                  </div>
                )}
              </div>
              <div className="container mt-20 flex justify-center items-center">
                <section className="grid grid-cols-4 gap-3 ">
                  {socialIcons.map((icon, index) => (
                    <Link
                      key={index}
                      href={icon.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={icon.src}
                        alt={icon.alt}
                        className="h-auto w-10 rounded-3xl"
                      />
                    </Link>
                  ))}
                </section>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch mt-7 w-full bg-white min-h-[1px] mx-auto" />
        <div className="mt-12 text-md font-light leading-5 text-center text-white max-md:mt-10">
          {/* {cpyrighttext.map((cpyrighttext) => (
            <div className="cpyrighttext" key={cpyrighttext._id}>
              {cpyrighttext.name}
            </div>
          ))} */}
          Copyright @2024 - by Codeautomation.ai
        </div>
      </div>
    </div>
  );
}
