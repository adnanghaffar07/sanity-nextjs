import Image from "next/image";
import intersect from "@/public/intersect-left.png";
import growthIllustration from "@/public/career1.svg";

// The blue "Grow and Collaborate" band and the "Make Your Own Trajectory" section.
export default function CareersIntro() {
  return (
    <>
      <div className="flex justify-center items-center lg:px-10 md:px-5 lg:py-16 py-8 w-full text-black bg-blue-50 leading-[100%] max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col w-full max-w-[1582px] max-md:my-10 max-md:max-w-full">
          <h2 className="self-center xl:text-5xl lg:text-4xl text-3xl xl:w-9/12 mx-auto text-center max-md:max-w-full lg:mb-5 mb-2.5">
            Grow and Collaborate with the Top Professionals in the Field
          </h2>
          <div className="xl:w-9/12 mx-auto text-center">
            <p className="lg:text-xl text-base">
              We pick applicants based on their skill set, mentality, and enthusiasm when hiring. You&rsquo;ll share
              knowledge, grow together, and use your inventions to produce extraordinary outcomes.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-full mx-auto relative">
        <Image src={intersect} alt="" className="absolute left-0 top-48 lg:block hidden" />
        <div className="flex flex-col self-center max-w-[1440px] mx-auto relative z-10">
          <div className="lg:px-10 px-6 w-full">
            <div className="grid lg:grid-cols-2 gap-5">
              <div className="xl:pr-10 relative self-center">
                <Image src={intersect} alt="" className="w-20 h-auto absolute -left-5 top-0 lg:hidden block -z-10" />
                <h2 className="text-3xl lg:text-5xl pt-10 md:pt-0 mb-3 text-black">
                  Make Your Own Trajectory with Your Own Assistance
                </h2>
                <div className="mb-10">
                  <p className="lg:text-lg text-base text-black">
                    We support and encourage our team members as they pursue their goals. Whether it&rsquo;s a move up
                    or a step sideways into a career you&rsquo;ve always desired, our senior leadership team will
                    regularly work with you to establish your next steps.
                  </p>
                </div>
              </div>
              <div className="text-center">
                <Image
                  src={growthIllustration}
                  alt=""
                  width={532}
                  height={532}
                  className="lg:w-3/4 md:w-1/2 w-3/4 h-auto inline-block"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
