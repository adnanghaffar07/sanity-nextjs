import * as React from "react";
import { client } from "../../../sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";



async function getData() {
  const query = `*[_type == 'lifeatCA'][0]`;
  try {
    const fetchData = await client.fetch(query);
    return fetchData || [];
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
}
export default async function LifeAtCA() {
  const data = await getData()

  interface ImageProps {
    src: string;
    alt: string;
    className?: string;
  }

  const Image: React.FC<ImageProps> = ({ src, alt, className }) => (
    <img loading="lazy" src={src} alt={alt} className={className} />
  );

  return (
    <div>
      <div className="flex overflow-hidden relative flex-col pb-12 w-full font-light text-white lg:min-h-[700px] max-md:max-w-full">
      {data.bannerImage && (
        <img
          className="absolute top-0 left-0 object-cover inset-0 size-full"
          src={urlForImage(data.bannerImage).toString()}
          alt="lifeatca"
        />
      )}
        <div className="absolute top-0 left-0 w-full h-full bg-[#020C16] opacity-75"></div>
        <div className="flex relative flex-col items-center lg:px-20 px-5 pt-12 w-full max-md:px-5 max-md:max-w-full flex-grow">
          <div className="lg:absolute lg:top-[350px]">
            <div className="lg:text-4xl text-2xl font-bold text-center capitalize max-lg:mt-36 max-md:max-w-full">
            {data.title}
            </div>
            <div className="lg:text-2xl text-base text-center mt-4 max-md:max-w-full lg:px-32">
            {data.description}
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col p-10 md:p-10 bg-white max-md:px-5">
        <div className="flex justify-center flex-wrap gap-5 max-md:flex-col max-md:gap-0">
          {data.teamMembers?.map((member:any, index:any) => (
            <div
              key={index}
              className="w-full md:w-1/3 lg:w-1/5 flex flex-col items-center"
            >
              <div className="flex flex-col text-2xl font-semibold leading-9 text-center text-black mt-10">
                <img
                  src={urlForImage(member.imageUrl).toString()}
                  alt={`${member.name}'s headshot`}
                  className="w-full aspect-square rounded-full border border-gray-300"
                />
                <div className="mt-7">
                  <span className="xl:text-2xl lg:text-1xl text-xl">
                    {member.name}
                  </span>
                  <br />
                  <span className="xl:text-1xl lg:text-xl text-xl font-light">
                    {member.title}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <main className="flex flex-col p-20 pt-0 bg-white max-md:px-5 ">
        <p className="self-center text-xl text-center text-black">
        {data.introText}
        </p>
        <section className="px-0.5 mt-10 max-md:mt-10 max-md:mr-2 max-md:max-w-full">
          <Image src={urlForImage(data.mainImage).toString()} alt="employee image" className="w-full" />
        </section>
        <p className="self-center mt-14 text-xl leading-7 text-center text-black max-md:mt-10 max-md:max-w-full">
        {data.middleText}
        </p>
        <section className="mt-7 ml-3.5 max-md:mt-10 max-md:mr-2 max-md:max-w-full">
        {data.imageSections?.map((section: any, sectionIndex: any) => (
          <div          key={sectionIndex} className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-2/5 max-md:ml-0 max-md:w-full">
            {section.images && section.images[0] && (
                  <Image
                    src={urlForImage(section.images[0].asset).toString()}
                    alt='image6'
                    className="grow w-full aspect-[1.04] max-md:mt-5 max-md:max-w-full"
                  />
                )}
            </div>
            <div className="flex flex-col ml-5 w-3/5 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow max-md:mt-5 max-md:max-w-full">
                <div className="px-0.5 max-md:max-w-full">
                  <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                  {section.images.slice(1, 3).map((image: any, index: any) => (
                      <div
                        key={index}
                        className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full"
                      >
                        <Image
                          src={urlForImage(image.asset).toString()}
                          alt={image.alt}
                          className="grow w-full aspect-[1.54] max-md:mt-9"
                        />
                      </div>
                    ))}
                  </div>
                </div>
                <div className="px-0.5 mt-4 max-md:max-w-full">
                  <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                  {section.images.slice(3, 5).map((image: any, index: any) => (
                      <div
                        key={index}
                        className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full"
                      >
                        <Image
                          src={urlForImage(image.asset).toString()}
                          alt={image.alt}
                          className="grow w-full aspect-[1.54] max-md:mt-9"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
             ))}
        </section>
        <p className="mt-10 text-xl leading-7 text-center text-black max-md:mt-14 max-md:mr-2 max-md:max-w-full">
        {data.conclusionText}
        </p>
        <section className="mt-16 ml-3.5 max-md:mt-10 max-md:mr-2 max-md:max-w-full">
        {data.imageSections?.map((section: any, sectionIndex: any) => (
          <div key={sectionIndex} className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[36%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow max-md:mt-3.5 max-md:max-w-full">
              {section.images.slice(5, 8).map((image: any, index: any) => (
                  <Image
                    key={index}
                    src={urlForImage(image.asset).toString()}
                    alt={image.alt}
                    className={`w-full aspect-[2.08] max-md:max-w-full ${
                      index > 0 ? "mt-3" : ""
                    } ${index === 2 ? "mt-3.5" : ""}`}
                  />
                ))}
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[64%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow max-md:mt-3 max-md:max-w-full">
                <div className="max-md:max-w-full">
                  <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                  {section.images.slice(8, 11).map((image: any, index: any) => (
                      <div
                        key={index}
                        className={`flex flex-col ${
                          index === 0 ? "w-[33%]" : "ml-5 w-[33%]"
                        } max-md:ml-0 max-md:w-full`}
                      >
                        <Image
                          src={urlForImage(image.asset).toString()}
                          alt={image.alt}
                          className="grow w-full aspect-[0.75] max-md:mt-7"
                        />
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mt-8 max-md:max-w-full">
                  <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                  {section.images.slice(11, 15).map((image: any, index: any) => (
                      <div
                        key={index}
                        className={`flex flex-col ${
                          index === 0 ? "w-[33%]" : "ml-5 w-[33%]"
                        } max-md:ml-0 max-md:w-full`}
                      >
                        <Image
                          src={urlForImage(image.asset).toString()}
                          alt={image.alt}
                          className="grow w-full aspect-[0.75] max-md:mt-7"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
             ))}
        </section>
      </main>
    </div>
  );
};

