import { client } from "../../../sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";

async function getData() {
  const query = `*[_type == 'technologies'] | order(_createdAt desc)`;
  try {
    const fetchData = await client.fetch(query);
    return fetchData || [];
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
}

async function getLogoData() {
  const queryLogo = `*[_type == 'techLogos'] | order(_createdAt asc)`;
  try {
    const fetchData = await client.fetch(queryLogo);
    return fetchData || [];
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
}

export default async function Technologies() {
  const data = await getData();
  const dataLogo = await getLogoData();

  return (
    <div>
      <div className="flex overflow-hidden relative flex-col pb-12 w-full font-light text-white lg:min-h-[700px] max-md:max-w-full">
        <img
          className="absolute top-0 left-0 object-cover  inset-0 size-full"
          src="/technologies.png"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-[#020C16] opacity-75"></div>
        <div className="flex relative flex-col items-center lg:px-20 px-5 lg:pt-12 lg:pb-0 pt-48 pb-36 w-full max-md:px-5 max-md:max-w-full flex-grow">
          <div className="lg:absolute lg:top-[300px]">
            <div className="lg:text-4xl text-2xl font-bold text-center capitalize max-lg:mt-0 max-md:max-w-full">
              <h2 className="title capitalize">&quot;Technology&quot;</h2>
            </div>
            <div className="lg:text-2xl text-center mt-4 max-md:max-w-full lg:px-32">
              We offer only well-recognized and time-tested technologies to
              bring advancement to any of your business goals.
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center lg:px-10 md:px-5 lg:py-16 py-8 w-full text-black bg-[#F3F3F3] leading-[100%] max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col w-full max-w-[1582px] max-md:my-10 max-md:max-w-full">
          <div className="self-center lg:text-5xl text-3xl xl:w-6/12 mx-auto text-center max-md:max-w-full lg:mb-5 mb-2.5">
            Our Tech Stack In Different Technologies
          </div>
          <div className="xl:w-9/12 mx-auto text-center">
            <p className="lg:text-xl text-l text-base">
              Explore the technologies that power our solutions and witness the
              innovation firsthand! Here, we showcase our proficiency in a wide
              range of cutting-edge technologies across various domains of
              software development.
            </p>
          </div>
        </div>
      </div>

      {data.map((technology: any, index: any) =>
        index % 2 === 0 ? (
          <div key={index} className="max-w-full mx-auto relative">
            <img
              loading="lazy"
              src="/intersect-left.png"
              className="aspect-[1.22] absolute left-0 top-20 lg:block hidden"
            />
            <div className="flex flex-col self-center w-full max-w-[1624px] max-md:max-w-full relative z-10 mx-auto">
              <div className="lg:px-10 px-5 w-full">
                <div className="grid lg:grid-cols-2 gap-5 lg:py-12 py-8">
                  <div className="xl:pr-20 lg:order-1 order-2 relative">
                    <img
                      loading="lazy"
                      src="/intersect-left.png"
                      className="w-20 absolute -left-5 top-0 lg:hidden block -z-10"
                    />
                    <div className="lg:text-5xl text-3xl mb-3">
                      {technology.techname}
                    </div>
                    <div className="mb-10">
                      <p className="lg:text-lg text-base">
                        {" "}
                        {technology.techDesc}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-3 justify-start px-4.5 mt-7 text-xs text-center text-md text-black">
                      <div className="grid grid-cols-4 gap-4 sm:gap-5 sm:justify-center">
                        {Array.isArray(technology.techLogos) &&
                          technology.techLogos.map(
                            (techLogo: any, techLogoIndex: any) =>
                              techLogo.images?.map(
                                (logoRef: any, logoIndex: any) => {
                                  const logoData = dataLogo.find(
                                    (logo: any) => logo._id === logoRef._ref
                                  );
                                  if (logoData) {
                                    return (
                                      <div
                                        key={`${techLogoIndex}-${logoIndex}`}
                                        className=" p-1 justify-center"
                                      >
                                        <img
                                          src={urlForImage(
                                            logoData.image
                                          ).toString()}
                                          alt={technology.techname}
                                          className="h-14 object-cover mb-2 mx-auto"
                                        />
                                        <p className="text-center">
                                          {logoData.heading}
                                        </p>
                                      </div>
                                    );
                                  } else {
                                    return null;
                                  }
                                }
                              )
                          )}
                      </div>
                    </div>
                  </div>

                  <div className="text-center lg:order-2 order-1">
                    <img
                      loading="lazy"
                      src={urlForImage(technology.techImage).toString()}
                      className="lg:w-3/4 md:w-1/2 w-3/4 inline-block"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div key={index} className="max-w-full mx-auto relative">
            <img
              loading="lazy"
              src="/intersect-right.png"
              className="aspect-[1.22] absolute right-0 top-20 lg:block hidden"
            />
            <div className="flex flex-col self-center w-full max-w-[1624px] max-md:max-w-full relative z-10 mx-auto">
              <div className="lg:px-10 px-5 w-full">
                <div className="grid lg:grid-cols-2 gap-5 lg:py-12 py-8">
                  <div className="text-center">
                    <img
                      loading="lazy"
                      src={urlForImage(technology.techImage).toString()}
                      className="lg:w-3/4 md:w-1/2 w-3/4 inline-block"
                    />
                  </div>
                  <div className="lg:pl-20 relative">
                    <img
                      loading="lazy"
                      src="/intersect-right.png"
                      className="w-20 absolute -right-5 top-0 lg:hidden block -z-10"
                    />
                    <div className="lg:text-5xl text-3xl mb-3 text-end">
                      {technology.techname}
                    </div>
                    <div className="mb-10">
                      <p className="lg:text-lg text-base text-end">
                        {" "}
                        {technology.techDesc}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-3 justify-end px-4.5 mt-7 text-xs text-center text-md text-black">
                      <div className="grid grid-cols-4 gap-4 sm:gap-5 justify-end">
                        {Array.isArray(technology.techLogos) &&
                          technology.techLogos.map(
                            (techLogo: any, techLogoIndex: any) =>
                              techLogo.images?.map(
                                (logoRef: any, logoIndex: any) => {
                                  const logoData = dataLogo.find(
                                    (logo: any) => logo._id === logoRef._ref
                                  );
                                  if (logoData) {
                                    return (
                                      <div
                                        key={`${techLogoIndex}-${logoIndex}`}
                                        className="p-1"
                                      >
                                        <img
                                          src={urlForImage(
                                            logoData.image
                                          ).toString()}
                                          alt={technology.techname}
                                          className="h-14 object-cover mb-2 mx-auto"
                                        />
                                        <p className="text-center">
                                          {logoData.heading}
                                        </p>
                                      </div>
                                    );
                                  } else {
                                    return null;
                                  }
                                }
                              )
                          )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
}
