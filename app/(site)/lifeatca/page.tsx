import Link from "next/link";
import { AiOutlinePaperClip } from "react-icons/ai";
import { AiFillFlag } from "react-icons/ai";
export default function LifeAtCA() {
  return (
    <div>
      <div className="flex overflow-hidden relative flex-col pb-12 w-full font-light text-white lg:min-h-[750px] max-md:max-w-full  bg-cover bg-no-repeat bg-left-top"
      style={{
        backgroundImage: `url(/img-intro-life-at-ca.jpg)`
        }}
      >
        <div className="flex relative flex-col items-center lg:px-20 px-5 lg:pt-12 lg:pb-0 pt-48 pb-36 w-full max-md:px-5 max-md:max-w-full flex-grow">
          <div className="lg:absolute lg:top-[600px]">
            <div className="lg:text-4xl text-2xl font-bold text-center capitalize max-lg:mt-0 mx-auto">
              <h2 className="title capitalize">
                &quot;Life at CA&quot;
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-full mx-auto relative">
        <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-10 max-w-[1582px] lg:px-10 px-5 py-16">
          <div className="flex flex-col gap-2">
            <div className="text-center">
              <img
                loading="lazy"
                src="/img-adnan-ghaffar.jpg"
                className="w-64 inline-block"
              />
            </div>
            <div className="text-2xl font-semibold text-center">
              Adnan Ghaffar
            </div>
            <div className="text-xl text-center">
              CEO
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="text-center">
              <img
                loading="lazy"
                src="/img-ambreen-younas.jpg"
                className="w-64 inline-block"
              />
            </div>
            <div className="text-2xl font-semibold text-center">
              Ambreen Younas
            </div>
            <div className="text-xl text-center">
              CTO
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="text-center">
              <img
                loading="lazy"
                src="/img-zoya-ahmed.jpg"
                className="w-64 inline-block"
              />
            </div>
            <div className="text-2xl font-semibold text-center">
              Zoya Ahmed
            </div>
            <div className="text-xl text-center">
              Senior Project Manager
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="text-center">
              <img
                loading="lazy"
                src="/img-farhan-ghaffar.jpg"
                className="w-64 inline-block"
              />
            </div>
            <div className="text-2xl font-semibold text-center">
              Farhan Ghaffar
            </div>
            <div className="text-xl text-center">
              Team Lead Project Management
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="text-center">
              <img
                loading="lazy"
                src="/img-muniba-iqbal.jpg"
                className="w-64 inline-block"
              />
            </div>
            <div className="text-2xl font-semibold text-center">
              Muniba Iqbal
            </div>
            <div className="text-xl text-center">
              SQA Manager
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="text-center">
              <img
                loading="lazy"
                src="/img-wahib-iftikhar.jpg"
                className="w-64 inline-block"
              />
            </div>
            <div className="text-2xl font-semibold text-center">
              Wahib Iftikhar
            </div>
            <div className="text-xl text-center">
              Project Manager
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="text-center">
              <img
                loading="lazy"
                src="/img-mir-usman.jpg"
                className="w-64 inline-block"
              />
            </div>
            <div className="text-2xl font-semibold text-center">
              Mir Usman
            </div>
            <div className="text-xl text-center">
              HR Manager
            </div>
          </div>
        </div>
        <div className=" max-w-[1582px] lg:px-10 px-5">        
          <div className="mb-5 text-center">
            <p className="text-xl">CodeAutomation is not just a workplace; it's a community. We foster a culture of collaboration, innovation, and inclusivity.</p>
          </div>
          <div className="mb-5 text-center">
            <img
                  loading="lazy"
                  src="/img-life-at-ca-2.jpg"
                  className="size-full"
                />
          </div>
          <div className="mb-5 text-center">
            <p className="text-xl">We know that building strong relationships within the team is essential. That's why we organize regular team-building activities, events, and outings. From hackathons to charity drives, we find ways to bond while making a positive impact on the community.</p>
          </div>
          <div className="mb-5 text-center">
            <img
                  loading="lazy"
                  src="/img-life-at-ca-3.jpg"
                  className="size-full"
                />
          </div>
          <div className="mb-5 text-center">
            <p className="text-xl">We know that building strong relationships within the team is essential. That's why we organize regular team-building activities, events, and outings. From hackathons to charity drives, we find ways to bond while making a positive impact on the community.</p>
          </div>
          <div className="mb-16 text-center">
            <img
                  loading="lazy"
                  src="/img-life-at-ca-1.jpg"
                  className="size-full"
                />
          </div>
          </div>
      </div>
    </div>
  );
}

