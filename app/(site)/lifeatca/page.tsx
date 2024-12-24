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
          {data.teamMembers?.map((member: any, index: any) => (
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
        {/* <h2 className="self-center mt-7  md:text-3xl font-bold leading-7 text-center text-black max-md:mt-10 max-md:max-w-full">Zoya Engages with Woody Woodward at Business Digital Mastery Conference in Chicago, US</h2>
        <p className="self-center mt-7 text-lg leading-7 text-center text-black max-md:mt-10 max-md:max-w-full">
          At the Business Digital Mastery Conference in Chicago, Zoya, CMO of CodeAutomation.ai, joined professionals to learn from keynote speaker Woody Woodward, renowned for his D.R.I.V.E. System. This framework—highlighting motivators like Director, Relator, Validator, Intellectual, and Executive—emphasizes leveraging personal strengths to enhance leadership and success.
          <br /> <br />
          Key discussions included balancing digital responsibilities with personal well-being, where Zoya asked about strategies to harmonize career goals with personal life. Woody provided practical advice on setting boundaries and prioritizing meaningful moments, aligning with Zoya’s values of maintaining balance in a tech-driven world.
          <br /> <br />
          The conference also explored topics like AI innovation, risk-taking for growth, and modern leadership strategies. Zoya gained insights into how automation, including solutions from CodeAutomation.ai, is shaping the future of business. Networking with women leaders further enriched her experience, fostering discussions on overcoming challenges and exploring potential collaborations.
          <br /> <br />
          Zoya’s participation demonstrated CodeAutomation.ai’s commitment to innovation and leadership, underscoring the importance of learning from thought leaders like Woody Woodward to stay ahead in the evolving digital age.
        </p>
        <section className="mt-6 md:mt-10 ml-3.5 max-md:mr-2 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[36%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow max-md:mt-3.5 max-md:max-w-full">
                {data.zoyaImages?.slice(0, 3).map((image: any, index: any) => (
                  <Image
                    key={index}
                    src={urlForImage(image.asset).toString()}
                    alt={image.alt || `Image ${index + 1}`}
                    className={`w-full md:aspect-[1.97] max-md:max-w-full md:object-cover ${index > 0 ? "mt-3" : ""
                      } ${index === 2 ? "mt-3.5" : ""}`}
                  />
                ))}
              </div>
            </div>
            <div className="flex flex-col ml-2 w-[64%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow max-md:mt-3 max-md:max-w-full">
                <div className="max-md:max-w-full">
                  <div className="flex gap-2 max-md:flex-col max-md:gap-0">
                    {data.zoyaImages?.slice(3, 6).map((image: any, index: any) => (
                      <div
                        key={index}
                        className={`flex flex-col ${index === 0 ? "w-[33%]" : "ml-2 w-[33%]"
                          } max-md:ml-0 max-md:w-full`}
                      >
                        <Image
                          src={urlForImage(image.asset).toString()}
                          alt={image.alt || `Image ${index + 4}`}
                          className="grow w-full aspect-[0.75] max-md:mt-7"
                        />
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mt-6 max-md:max-w-full">
                  <div className="flex gap-2 max-md:flex-col max-md:gap-0">
                    {data.zoyaImages?.slice(6, 9).map((image: any, index: any) => (
                      <div
                        key={index}
                        className={`flex flex-col ${index === 0 ? "w-[33%]" : "ml-2 w-[33%]"
                          } max-md:ml-0 max-md:w-full`}
                      >
                        <Image
                          src={urlForImage(image.asset).toString()}
                          alt={image.alt || `Image ${index + 7}`}
                          className="grow w-full aspect-[0.75] max-md:mt-7"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        <p className="self-center text-xl mt-6 md:mt-10 text-center text-black">
          {data.introText}
        </p>
        <section className="mt-6 md:mt-10 ml-3.5 max-md:mr-2 max-md:max-w-full">
          <div className="flex gap-2 dd max-md:flex-col max-md:gap-0">
            {/* Left Side: 2/5 Width */}
            <div className="flex flex-col w-2/5 max-md:w-full max-md:ml-0 mb-2">
              {data.extraImages?.slice(0, 2).map((image: any, index: number) => (
                <Image
                  key={index}
                  src={urlForImage(image.asset).toString()}
                  alt={`Extra Image ${index + 1}`}
                  className={`w-full grow md:aspect-[2.5] md:object-contain ${index > 0 ? "mt-2" : ""}`}
                />
              ))}
            </div>

            {/* Right Side: 3/5 Width */}
            <div className="flex flex-col w-4/5 max-md:w-full max-md:ml-0">
              <div className="flex gap-1 max-md:flex-col max-md:gap-0">
                {/* First Two Images */}
                {data.extraImages?.slice(2, 4).map((image: any, index: number) => (
                  <div
                    key={index}
                    className={`flex mb-2 flex-col w-1/4 max-md:w-full ${index > 0 ? "ml-2" : ""}`}
                  >
                    <Image
                      src={urlForImage(image.asset).toString()}
                      alt={`Extra Image ${index + 3}`}
                      className="w-full h-full"
                    />
                  </div>
                ))}

                {/* Last Image with More Width */}
                {data.extraImages?.[4] && (
                  <div className="flex flex-col mb-2 w-2/5 max-md:w-full ml-2 flex-grow">
                    <Image
                      src={urlForImage(data.extraImages[4].asset).toString()}
                      alt="Extra Image 5"
                      className="w-full h-full md:aspect-[2.5] md:object-contain"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>


        <p className="self-center mt-6 md:mt-8 text-xl leading-7 text-center text-black max-md:max-w-full">
          {data.middleText}
        </p>
        <section className="mt-6 md:mt-10 ml-3.5  max-md:mr-2 max-md:max-w-full">
          {data.imageSections?.map((section: any, sectionIndex: any) => (
            <div key={sectionIndex} className="flex gap-5 max-md:flex-col max-md:gap-0">
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
        <p className="mt-6 md:mt-10 text-xl leading-7 text-center text-black  max-md:mr-2 max-md:max-w-full">
          {data.conclusionText}
        </p>
        <section className="mt-6 md:mt-10 ml-3.5 max-md:mr-2 max-md:max-w-full">
          {data.imageSections?.map((section: any, sectionIndex: any) => (
            <div key={sectionIndex} className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-[36%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow max-md:mt-3.5 max-md:max-w-full">
                  {section.images.slice(5, 8).map((image: any, index: any) => (
                    <Image
                      key={index}
                      src={urlForImage(image.asset).toString()}
                      alt={image.alt}
                      className={`w-full aspect-[2.08] max-md:max-w-full ${index > 0 ? "mt-3" : ""
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
                          className={`flex flex-col ${index === 0 ? "w-[33%]" : "ml-5 w-[33%]"
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
                          className={`flex flex-col ${index === 0 ? "w-[33%]" : "ml-5 w-[33%]"
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

