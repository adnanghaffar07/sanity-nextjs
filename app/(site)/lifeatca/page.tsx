import * as React from "react";

const LifeAtCA = () => {

  const teamMembers = [
    {
      name: "Adnan Ghaffar",
      title: "CEO",
      imageUrl: "ceo-adnan.png",
    },
    {
      name: "Ambreen Younas",
      title: "CTO",
      imageUrl: "/cto-ambreen.png",
    },
    {
      name: "Zoya Ahmed",
      title: "Senior Project Manager",
      imageUrl: "/zoya.jpg",
    },
    {
      name: "Farhan Ghaffar",
      title: "Team Lead Project Management",
      imageUrl: "/farhan.png",
    },
    {
      name: "Muniba Iqbal",
      title: "SQA Manager",
      imageUrl: "/muniba.png",
    },
    {
      name: "Wahib Iftikhar",
      title: "Project Manager",
      imageUrl: "/wahib.png",
    },
    {
      name: "Mir Usman",
      title: "HR Manager",
      imageUrl: "/mir-usman.png",
    },
  ];
  interface ImageProps {
    src: string;
    alt: string;
    className?: string;
  }
  
  const Image: React.FC<ImageProps> = ({ src, alt, className }) => (
    <img loading="lazy" src={src} alt={alt} className={className} />
  );
  
  const images = [
    { src: "/image1.png", alt: "Image 1" },
    { src: "/image2.png", alt: "Image 2" },
    { src: "/image3.png", alt: "Image 3" },
    { src: "/image3.png", alt: "Image 4" },
    { src: "/image5.png", alt: "Image 5" },
    { src: "/image6.png", alt: "Image 6" },
    { src: "/image7.png", alt: "Image 7" },
    { src: "/image8.png", alt: "Image 8" },
    { src: "/image9.png", alt: "Image 9" },
    { src: "/image10.png", alt: "Image 10" },
    { src: "/image11.png", alt: "Image 11" },
    { src: "/image12.png", alt: "Image 12" },
    { src: "/image13.png", alt: "Image 13" },
    { src: "/image14.png", alt: "Image 14" },
    { src: "/image15.png", alt: "Image 15" },
    { src: "/image16.png", alt: "Image 16" },
    { src: "/image17.png", alt: "Image 17" },
    { src: "/image18.png", alt: "Image 18" },
    { src: "/image19.png", alt: "Image 19" },
  ];
  
  return (
    <div>

      <div className="flex overflow-hidden relative flex-col pb-12 w-full font-light text-white lg:min-h-[700px] max-md:max-w-full">
        <Image className="absolute top-0 left-0 object-cover absolute inset-0 size-full" src="/Optimized-lifeatca.png" alt="lifeatca" />
        <div className="absolute top-0 left-0 w-full h-full bg-[#020C16] opacity-85"></div>
        <div className="flex relative flex-col items-center lg:px-20 px-5 pt-12 w-full max-md:px-5 max-md:max-w-full flex-grow">
          <div className="lg:absolute lg:top-[350px]">
            <div className="lg:text-4xl text-2xl font-bold text-center capitalize max-lg:mt-36 max-md:max-w-full">
            &quot;Life at CA&quot;
            </div>
            <div className="lg:text-2xl text-base text-center mt-4 max-md:max-w-full lg:px-32">
           We offer a diverse blend of cultures and endless recreational opportunities, epitomizing innovation, diversity, and boundless possibilities.              </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col p-10 md:p-10 bg-white max-md:px-5">

        <div className="flex justify-center flex-wrap gap-5 max-md:flex-col max-md:gap-0">
          {teamMembers.map((member, index) => (
            <div key={index} className="w-full md:w-1/3 lg:w-1/5 flex flex-col items-center">
              <div className="flex flex-col text-2xl font-semibold leading-9 text-center text-black mt-10">
                <img
                  src={member.imageUrl}
                  alt={`${member.name}'s headshot`}
                  className="w-full aspect-square rounded-full border border-gray-300"
                />
                <div className="mt-7">
                  <span className="xl:text-2xl lg:text-1xl text-xl">{member.name}</span>
                  <br />
                  <span className="xl:text-1xl lg:text-xl text-xl font-light">{member.title}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>


      <main className="flex flex-col p-20 pt-0 bg-white max-md:px-5 ">
      <p className="self-center text-xl text-center text-black">
          CodeAutomation is not just a workplace; it&apos;s a community. We foster a
          culture of collaboration, innovation, and inclusivity.        </p>
        <section className="px-0.5 mt-10 max-md:mt-10 max-md:mr-2 max-md:max-w-full">
          <div className="flex gap-0 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-full md:w-[37%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow max-md:mt-6">
                {images.slice(0, 2).map((image, index) => (
                  <Image
                    key={index}
                    src={image.src}
                    alt={image.alt}
                    className={`w-full aspect-[1.72] ${index === 1 ? "mt-6" : ""}`}
                  />
                ))}
              </div>
            </div>

            {images.slice(2, 5).map((image, index) => (
              <div
                key={index}
                className={`flex flex-col ml-5 w-1/${index === 1 ? "3" : "5"} max-md:ml-0 max-md:w-full`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  className="grow shrink-0 max-w-full aspect-[0.47] w-[284px] max-md:mt-6 hidden md:block"
                />
              </div>
            ))}

          </div>
        </section>
        <p className="self-center mt-14 text-xl leading-7 text-center text-black max-md:mt-10 max-md:max-w-full">
          We know that building strong relationships within the team is essential.
          That&apos;s why we organize regular team-building activities, events, and
          outings. From hackathons to charity drives, we find ways to bond while
          making a positive impact on the community.
        </p>
        <section className="mt-7 ml-3.5 max-md:mt-10 max-md:mr-2 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-2/5 max-md:ml-0 max-md:w-full">
              <Image
                src={images[5].src}
                alt={images[5].alt}
                className="grow w-full aspect-[1.04] max-md:mt-5 max-md:max-w-full"
              />
            </div>
            <div className="flex flex-col ml-5 w-3/5 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow max-md:mt-5 max-md:max-w-full">
                <div className="px-0.5 max-md:max-w-full">
                  <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                    {images.slice(6, 8).map((image, index) => (
                      <div
                        key={index}
                        className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full"
                      >
                        <Image
                          src={image.src}
                          alt={image.alt}
                          className="grow w-full aspect-[1.54] max-md:mt-9"
                        />
                      </div>
                    ))}
                  </div>
                </div>
                <div className="px-0.5 mt-4 max-md:max-w-full">
                  <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                    {images.slice(8, 10).map((image, index) => (
                      <div
                        key={index}
                        className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full"
                      >
                        <Image
                          src={image.src}
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
        </section>
        <p className="mt-10 text-xl leading-7 text-center text-black max-md:mt-14 max-md:mr-2 max-md:max-w-full">
        We know that building strong relationships within the team is essential.
          That&apos;s why we organize regular team-building activities, events, and
          outings. From hackathons to charity drives, we find ways to bond while
          making a positive impact on the community.
        </p>
        <section className="mt-16 ml-3.5 max-md:mt-10 max-md:mr-2 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[36%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow max-md:mt-3.5 max-md:max-w-full">
                {images.slice(10, 13).map((image, index) => (
                  <Image
                    key={index}
                    src={image.src}
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
                    {images.slice(13, 16).map((image, index) => (
                      <div
                        key={index}
                        className={`flex flex-col ${index === 0 ? "w-[33%]" : "ml-5 w-[33%]"
                          } max-md:ml-0 max-md:w-full`}
                      >
                        <Image
                          src={image.src}
                          alt={image.alt}
                          className="grow w-full aspect-[0.75] max-md:mt-7"
                        />
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mt-8 max-md:max-w-full">
                  <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                    {images.slice(16, 19).map((image, index) => (
                      <div
                        key={index}
                        className={`flex flex-col ${index === 0 ? "w-[33%]" : "ml-5 w-[33%]"
                          } max-md:ml-0 max-md:w-full`}
                      >
                        <Image
                          src={image.src}
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
        </section>
      </main>


    </div>
  );
};

export default LifeAtCA;

