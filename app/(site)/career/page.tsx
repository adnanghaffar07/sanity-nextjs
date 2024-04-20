import Image from "next/image";
import Link from "next/link";
import { AiOutlinePaperClip } from "react-icons/ai";
import { AiFillFlag } from "react-icons/ai";
import CareerPost from "../components/CareerPost";
import { client } from "../../../sanity/lib/client";

async function getData() {
  const query = `*[_type == 'careers']`;
  try {
    const fetchData = await client.fetch(query);
    return fetchData || [];
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
}

const Career: React.FC = async () => {
  const data = await getData();

  type BenefitItemProps = {
    imageSrc: string;
    imageAlt: string;
    title: string;
  };

  const BenefitItem: React.FC<BenefitItemProps> = ({
    imageSrc,
    imageAlt,
    title,
  }) => (
    <div className="flex flex-col">
      <img
        src={imageSrc}
        alt={imageAlt}
        className="self-center aspect-[1.05] w-[100px]"
      />
      <div className="mt-2">{title}</div>
    </div>
  );
  const benefits = [
    { imageSrc: "/time.png", imageAlt: "time", title: "Flexible Timings" },
    {
      imageSrc: "/fuel-allowance.png",
      imageAlt: "fuel",
      title: "Fuel Allowance",
    },
    {
      imageSrc: "/paid-leaves.png",
      imageAlt: "Paid Leaves",
      title: "Paid Leaves",
    },
    {
      imageSrc: "/annual-trip.png",
      imageAlt: "Annual Trip",
      title: "Annual Trip",
    },
    {
      imageSrc: "/medical.png",
      imageAlt: "Medical Coverage",
      title: "Medical Coverage",
    },
    {
      imageSrc: "/annual-ic.png",
      imageAlt: "Annual Increment",
      title: "Annual Increment",
    },
    { imageSrc: "/bonuses.png", imageAlt: "Bonuses", title: "Bonuses" },
  ];

  return (
    <div>
      <div className="flex overflow-hidden relative flex-col pb-12 w-full font-light text-white lg:min-h-[700px] max-md:max-w-full">
        <img
          className="top-0 left-0 object-cover absolute inset-0 size-full"
          src="/career.png"
          alt="lifeatca"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-[#020C16] opacity-75"></div>
        <div className="flex relative flex-col items-center lg:px-20 px-5 lg:pt-12 lg:pb-0 pt-48 pb-36 w-full max-md:px-5 max-md:max-w-full flex-grow">
          <div className="lg:absolute lg:top-[300px]">
            <div className="lg:text-4xl text-2xl font-bold text-center capitalize max-lg:mt-0 lg:w-8/12 mx-auto">
              <h2 className="title capitalize">
                &quot;Be a part of our next story&quot;
              </h2>
            </div>
            <div className="lg:text-2xl text-base text-center mt-4 max-md:max-w-full lg:px-32">
              Join our team and be part of the next success story in
              CodeAutomation careers. Unlock your potential today!
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center lg:px-10 md:px-5 lg:py-16 py-8 w-full text-black bg-[#F3F3F3] leading-[100%] max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col w-full max-w-[1582px] max-md:my-10 max-md:max-w-full">
          <div className="self-center xl:text-5xl lg:text-4xl text-3xl xl:w-9/12 mx-auto text-center max-md:max-w-full lg:mb-5 mb-2.5">
            Grow And Collaborate With The Top Professionals In The Field.
          </div>
          <div className="xl:w-9/12 mx-auto text-center">
            <p className="lg:text-xl text-base">
              We pick applicants based on their skill set, mentality, and
              enthusiasm when hiring. You&rsquo;ll share knowledge, grow
              together, and use your inventions to produce extraordinary
              outcomes.
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-full mx-auto relative">
        <img
          loading="lazy"
          src="/intersect-left.png"
          className="aspect-[1.22] absolute left-0 top-48 lg:block hidden"
        />
        <div className="flex flex-col self-center w-full max-w-[1624px] max-md:max-w-full relative z-10 mx-auto">
          <div className="lg:px-10 px-5 w-full">
            <div className="grid lg:grid-cols-2 gap-5 lg:py-16 py-8">
              <div className="xl:pr-20 lg:order-1 order-2 relative self-center">
                <img
                  loading="lazy"
                  src="/intersect-left.png"
                  className="w-20 absolute -left-5 top-0 lg:hidden block -z-10"
                />
                <div className="xl:text-5xl lg:text-4xl text-3xl mb-3 text-[#024]">
                  Make Your Own Trajectory With Your Own Assistance.
                </div>
                <div className="mb-10">
                  <p className="lg:text-lg text-base text-[#024]">
                    We support and encourage our team members as they pursue
                    their goals. Whether it&rsquo;s a move up or a step sideways
                    into a career you&rsquo;ve always desired, our senior
                    leadership team will regularly work with you to establish
                    your next steps.
                  </p>
                </div>
              </div>
              <div className="text-center lg:order-2 order-1">
                <img
                  loading="lazy"
                  src="/career1.svg"
                  className="lg:w-3/4 md:w-1/2 w-3/4 inline-block"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-5 max-md:flex-wrap lg:px-10 lg:pt-0 lg:pb-0 py-8 md:px-5 w-full mx-auto relative">
        <img
          loading="lazy"
          src="/ellipse-2.png"
          className="aspect-[1.22] absolute right-0 -top-36"
        />
        <div className="flex flex-col w-full max-w-[1582px] mx-auto">
          <div className="text-center">
            <div className="xl:text-5xl lg:text-4xl text-3xl mb-3 text-[#024]">
              Open Vacancies
            </div>
            <div className="mb-10">
              <p className="lg:text-lg text-base text-[#024]">
                Are you passionate about building your career with opportunities
                to learn and lead?
              </p>
            </div>
          </div>
          <div className="grid xl:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 lg:gap-16 lg:px-10 px-5 lg:mt-11 w-full max-md:max-w-full">
            {data.map((jobpost: any) => (
              <div key={jobpost._id}>
                <CareerPost jobpost={jobpost} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="max-w-full mx-auto relative">
        {/* <img
            loading="lazy"
            src="/intersect-right.png"
            className="aspect-[1.22] absolute right-0 top-20 lg:block hidden"
          /> */}
        <div className="flex flex-col self-center w-full max-w-[1624px] max-md:max-w-full relative z-10 mx-auto">
          <div className="lg:px-10 px-5 w-full">
            <div className="grid lg:grid-cols-2 gap-5 lg:py-16 py-8">
              <div className="text-center">
                <img
                  loading="lazy"
                  src="/career2.svg"
                  className="lg:w-3/4 md:w-1/2 w-3/4 inline-block"
                />
              </div>

              <div className="xl:pl-20 relative">
                <div className="xl:text-5xl lg:text-4xl text-3xl mb-3 text-end text-[#024]">
                  Perks & Benefits
                </div>
                <div className="mb-10">
                <p className="lg:text-lg text-base text-end text-[#024] text-justify">
                    Get special perks and benefits such as flexible schedules
                    and career advancement chances. Join us and advance your
                    career in code automation today.
                  </p>
                </div>

                <section className="flex flex-wrap gap-5 justify-center px-4.5 mt-7 text-xs text-center text-md text-black">
                  {benefits.map((benefit, index) => (
                    <BenefitItem key={index} {...benefit} />
                  ))}
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
