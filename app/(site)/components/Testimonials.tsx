import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import React from "react";

async function getData() {
  const query = `*[_type == 'testimonial'] | order(_updatedAt desc)`;
  try {
    const fetchData = await client.fetch(query);
    return fetchData || [];
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
}
const Testimonials = async () => {
  const data = await getData();

  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 gap-32">
      {data &&
        data.map((testimonial: any) => {
          const imageUrl = urlForImage(testimonial.image.asset);
          return (
            <div
              className="flex flex-col ml-5 max-md:ml-0 max-md:w-full relative min-h-[255px] sm:min-w-[381px] min-w-full"
              key={testimonial._id}
            >
              <div className="flex flex-col grow pt-7 md:pr-20 px-10 w-full rounded-2xl backdrop-blur-[6.5px] bg-[#1D92FB] max-md:max-w-full">
                <p className="self-end text-xl sm:text-3xl font-medium text-white">
                  Clients Speaking
                </p>
                <div className="flex z-10 flex-col py-7 px-5 w-full bg-white rounded-2xl shadow-sm backdrop-blur-[6.5px] max-md:pr-5 max-md:max-w-full absolute md:-bottom-20 md:top-auto top-20 -bottom-auto md:-left-20 -left-10 md:h-[260px]">
                  <div className="text-[12px] sm:text-sm leading-5 text-justify text-black">
                    {testimonial.content}
                  </div>
                  <div className="flex gap-3 justify-between mt-4 max-md:mr-1">
                    <div className="flex justify-center items-center px-1 rounded-xl aspect-square w-[68px] h-[68px] bg-[#00000033]">
                      <img
                        loading="lazy"
                        src={imageUrl}
                        alt={testimonial.image.alt}
                        className="aspect-square rounded-full w-[62px] h-[62px]"
                      />
                    </div>
                    <div className="flex flex-col flex-1 self-start mt-3 text-sky-950">
                      {testimonial.name && (
                        <div className="text-xl sm:text-3xl font-medium whitespace-nowrap">
                          {testimonial.name}
                        </div>
                      )}
                      <div className="text-sm sm:text-lg font-light leading-6">
                        {testimonial.designation}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Testimonials;
