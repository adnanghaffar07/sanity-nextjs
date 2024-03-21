import { getCpyrighttext } from "@/sanity/sanity-utils";
import Link from "next/link";

export default async function FooterContainer() {
  const cpyrighttext = await getCpyrighttext();
  return (
    <div>
      <div className="flex flex-col items-center py-12 w-full bg-[#1D92FB] max-md:max-w-full pt-60">
        <div className="w-full max-w-[1582px] lg:px-10 px-5  max-md:max-w-full grid xl:grid-cols-5 md:grid-cols-3 gap-5">
          
            <div className="flex flex-col xl:col-span-2 md:col-span-3 xl:pr-36">
              <div className="grid xl:grid-cols-1 md:grid-cols-2 gap-6 text-lg font-light text-white max-md:mt-10">
                <div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/ca2c2299539776dc609808e4640dd6fc263794a85ae59f86c06f93cea5e7b09f?apiKey=ce12b64a678e4e2a868af6b5dfd766b9&"
                    className="ml-3 max-w-full aspect-[5] w-[300px] max-md:ml-2.5"
                  />
                  <div className="mt-5">
                    Let&rsquo;s embark on a journey of innovation and excellence together.

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
              <div className="flex flex-col grow text-white max-md:mt-10">
                <div className="text-2xl font-medium leading-6">
                  Solutions
                </div>
                <div className="mt-6 text-base font-light flex flex-col gap-5">
                  <Link href={`/services/service`} className="hover:underline my-auto inline-block">Software Development</Link>
                  <Link href={`/services/service`} className="hover:underline my-auto inline-block">Web App Development</Link>
                  <Link href={`/services/service`} className="hover:underline my-auto inline-block">Mobile App Development</Link>
                  <Link href={`/services/service`} className="hover:underline my-auto inline-block">QA Automation Testing</Link>
                  <Link href={`/services/service`} className="hover:underline my-auto inline-block">QA Manual Testing</Link>
                  <Link href={`/services/service`} className="hover:underline my-auto inline-block">Automate Business</Link>
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex flex-col text-white max-md:mt-10">
                <div className="text-2xl font-medium">
                  About Us
                </div>
                <div className="mt-6 text-base font-light flex flex-col gap-5">
                  <Link href={`/lifeatca`} className="hover:underline my-auto inline-block">Expert Team</Link>
                  <Link href={`/blogs`} className="hover:underline my-auto inline-block">Our Exciting News</Link>
                  <Link href={`/career`} className="hover:underline my-auto inline-block">Contact Us For Jobs</Link>
                  <Link href="mailto:hr@codeautomation.ai" className="hover:underline my-auto inline-block">hr@codeautomation.ai</Link>
                  <Link href="tel:+923210024000" className="hover:underline my-auto inline-block">+92 321 0024000</Link>
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex flex-col text-white max-md:mt-10">
                <div className="text-2xl font-medium leading-6">
                  Address
                </div>
                <div className="mt-6 text-lg font-light leading-5">
                  <span className="text-1xl font-bold">USA:</span> 30 N
                  Gould St Ste 7596, Sheridan, WY, 82801.
                  <br />
                  <br />
                  <span className="text-1xl font-bold">Canada:</span> 10
                  Stevens Avenue Ottawa, K1K4M9, Canada.
                </div>
              </div>
            </div>
        </div>
        <div className="self-stretch mt-9 w-full bg-white min-h-[1px] mx-auto" />
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
};