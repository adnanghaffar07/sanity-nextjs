import { getCpyrighttext } from "@/sanity/sanity-utils";
import Link from "next/link";

export default async function FooterContainer() {
  const cpyrighttext = await getCpyrighttext();

  const socialIcons = [
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/473a7429030026bd2ca2fe152aef53403a1f9b0cbee5a68d3ad32022fad854a7?apiKey=4bbac2e9fd8543319fbc188f9510a76b&",
      alt: "facebook",
      link: "https://www.facebook.com/Codeautomationai/",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/adf696589e4137664b9c3d84b7694e7064769715ccfab4d849d64bbc25c5674e?apiKey=4bbac2e9fd8543319fbc188f9510a76b&",
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
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/679d9d2dbbc950158d83a006bad2c7e0bb1376ded77e7aac9361af8cf20181f9?apiKey=4bbac2e9fd8543319fbc188f9510a76b&",
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
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/ca2c2299539776dc609808e4640dd6fc263794a85ae59f86c06f93cea5e7b09f?apiKey=ce12b64a678e4e2a868af6b5dfd766b9&"
                    className="max-w-full aspect-[5] w-[300px] max-md:ml-2.5"
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
                  adnan@codeautomation.ai
                  <br />
                  +1-850-558-4691
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex flex-col grow text-white max-md:mt-10 flex flex-col items-center xl:ml-8 flex-1 px-5 text-xl relative z-10 self-start">
              <div className="text-2xl font-medium self-start">Solutions</div>
              <div className="mt-6 text-base font-light flex flex-col gap-5">
                <Link
                  href={`/services/service`}
                  className="hover:underline my-auto inline-block"
                >
                  Software Development
                </Link>
                <Link
                  href={`/services/service`}
                  className="hover:underline my-auto inline-block"
                >
                  Web App Development
                </Link>
                <Link
                  href={`/services/service`}
                  className="hover:underline my-auto inline-block"
                >
                  Mobile App Development
                </Link>
                <Link
                  href={`/services/service`}
                  className="hover:underline my-auto inline-block"
                >
                  QA Automation Testing
                </Link>
                <Link
                  href={`/services/service`}
                  className="hover:underline my-auto inline-block"
                >
                  QA Manual Testing
                </Link>
                <Link
                  href={`/services/service`}
                  className="hover:underline my-auto inline-block"
                >
                  Automate Business
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col ">
            <div className="text-white max-md:mt-10  flex flex-col items-center xl:ml-8 flex-1 px-5 text-xl relative z-10 self-start">
              <div className="text-2xl font-medium self-start">About Us</div>
              <div className="mt-6 text-base font-light flex  flex-col gap-5">
                <Link
                  href={`/lifeatca`}
                  className="hover:underline my-auto inline-block"
                >
                  Expert Team
                </Link>
                <Link
                  href={`/blogs`}
                  className="hover:underline my-auto inline-block"
                >
                  Our Exciting News
                </Link>
                <Link
                  href={`/career`}
                  className="hover:underline my-auto inline-block"
                >
                  Contact Us For Jobs
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
                <span className="text-1xl font-bold">USA:</span> 30 N Gould St
                Ste 7596, Sheridan, WY, 82801.
                <br />
                <br />
                <span className="text-1xl font-bold">Canada:</span> 10 Stevens
                Avenue Ottawa, K1K4M9, Canada.
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
                        className="h-10 w-10 rounded-3xl"
                      />{" "}
                      {/* Adjust height and width as needed */}
                    </Link>
                  ))}
                </section>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch mt-7 w-full bg-white min-h-[1px] mx-auto" />
        <div className="mt-12 text-md font-light leading-5 text-center text-white max-md:mt-10">
          {cpyrighttext.map((cpyrighttext) => (
            <div className="cpyrighttext" key={cpyrighttext._id}>
              {cpyrighttext.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
