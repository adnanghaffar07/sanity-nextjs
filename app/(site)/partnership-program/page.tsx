import Image from "next/image";
import React from "react";

const services = [
  "RPA",
  "Devops",
  "Internet Of Things (IoT)",
  "Email Marketing",
  "SMS Marketing",
  "VoIP/Call Center",
  "AI/ML",
  "Analytics",
  " Integration & Automation",
  " Web Services (CMS, eCommerce, Headless)",
  "Web and Mobile App Development",
];

const page = () => {
  return (
    <div>
      <section className="relative">
        <div className="bg-black w-full h-[380px] sm:h-[700px] opacity-30 absolute z-[1]"></div>
        <div className="w-full h-[380px] sm:h-[700px] relative z-0">
          <Image
            src="/partnership-hero-section-image.png"
            alt="partnership image"
            loading="lazy"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>

        <div className="mt-[160px] sm:mt-[290px] items-center absolute inset-0 flex flex-col z-[2]">
          <h1 className="text-xl sm:text-3xl md:text-5xl xl:text-6xl font-semibold tracking-tight capitalize leading-[48px] text-white text-center">
            Partnership - On Growth
          </h1>
          <p className="mt-2 sm:mt-6 xl:mt-10 text-xs sm:text-base md:text-xl xl:text-3xl font-light tracking-wide leading-4 sm:leading-7  text-white max-w-[280px] sm:max-w-[1080px] xl:px-0 text-center">
            Expand Your Business with CodeAutomation
          </p>
        </div>
      </section>

      <section className="flex justify-center items-center px-16 py-14 text-center bg-zinc-100 max-md:px-5">
        <div className="flex flex-col max-w-full w-[700px]">
          <h2 className="text-2xl sm:text-3xl md:text-4xl leading-10 text-black max-md:max-w-full">
            Partner with Us Today! Pick the Partner option that works for you!
            <br />
          </h2>
          <p className="self-center mt-4 text-lg leading-6 text-slate-600 max-md:max-w-full max-w-[610px]">
            Leverage our expertise, resources, and reputation to accelerate your
            growth in the technology space. Join us at CodeAutomation and be
            part of a future-driven community of successful partners.
          </p>
        </div>
      </section>

      <section className="max-md:pl-5 mt-16 sm:mt-28 relative overflow-hidden">
        <img
          loading="lazy"
          src="/partnership-program-eclipse.png"
          alt="eclipse icon"
          className="absolute bottom-[400px] md:bottom-[550px] xl:bottom-0 w-[645px] z-0"
        />

        <div className="flex gap-16 xl:gap-10 2xl:gap-16 flex-col-reverse xl:flex-row justify-center items-center mx-1 sm:mx-10">
          <div className="flex flex-col max-md:ml-0 max-md:w-full">
            <article className="flex flex-col grow max-md:mt-10 max-md:max-w-full z-10">
              <div className="flex flex-col pr-10 pl-20 text-neutral-900 max-md:px-5 max-md:max-w-full mb-4">
                <h2 className="text-3xl sm:text-4xl leading-8 sm:leading-6 max-md:max-w-full font-medium">
                  Available partnership program
                </h2>
                <p className="mt-8 text-base leading-6 max-w-[666px] text-justify">
                  At CodeAutomation, a leader in Web and Mobile, Automation, QA
                  technology solutions, we are excited to introduce three
                  dynamic partnership opportunities designed to grow your
                  business and enhance your earnings. Whether you are looking to
                  earn by referring clients or take a more hands-on approach in
                  reselling our services, we have the right program for you.
                  Explore our Affiliate, Reseller, and White Label Partner
                  channels and find out how you can start benefiting today!
                  <br />
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 sm:items-start mt-8 xl:mt-3 max-md:flex-wrap items-center">
                <Image
                  loading="lazy"
                  src="/affiliate-program.png"
                  alt="Affiliate Program icon"
                  width={67}
                  height={67}
                />
                <div className="flex flex-col grow shrink-0 mt-1.5 basis-0 max-w-[666px]">
                  <div className="flex gap-5 font-bold text-black max-md:flex-wrap max-md:max-w-full items-center">
                    <h3 className="flex-auto text-lg leading-7">
                      Affiliate Program
                    </h3>
                    <button className="text-xs text-center border-2 border-black border-solid rounded-[50px] w-[126px] h-[28px]">
                      Learn more
                    </button>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-slate-600 max-w-[666px] text-justify">
                    Earn by Referring: Simply refer clients to us and earn a
                    referral commission for every successful transaction. Plus,
                    enjoy the benefits of recurring revenue from ongoing
                    contracts.
                    <br />
                    Hassle-Free Partnership: We handle all service delivery and
                    customer support. Your job is to direct potential clients to
                    us, and we take care of the rest.
                    <br />
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 sm:items-start items-center mt-10 xl:mt-3 max-md:flex-wrap">
                <Image
                  loading="lazy"
                  src="/reseller-program.png"
                  alt="Reseller Program icon"
                  width={67}
                  height={67}
                />
                <div className="flex flex-col grow shrink-0 mt-1.5 basis-0 max-w-[666px]">
                  <div className="flex gap-5 font-bold text-black max-md:flex-wrap max-md:max-w-full items-center">
                    <h3 className="flex-auto text-lg leading-7">
                      Reseller Program
                    </h3>
                    <button className="text-xs text-center border-2 border-black border-solid rounded-[50px] w-[126px] h-[28px]">
                      Learn more
                    </button>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-slate-600 max-w-[666px] text-justify">
                    Become a Reseller: Take an active role in reselling our
                    services. You manage the sales process, and we support you
                    as needed. From service delivery to customer support and
                    billing, we&apos;ve got it covered. Attractive Earnings:
                    Earn substantial commissions and benefit from continuous
                    recurring revenue.
                    <br />
                    <br />
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 sm:items-start items-center mt-10 xl:mt-3 max-md:flex-wrap">
                <Image
                  loading="lazy"
                  src="/white-label.png"
                  alt="Reseller Program icon"
                  width={67}
                  height={67}
                />
                <div className="flex flex-col grow shrink-0 mt-1.5 basis-0 max-w-[666px]">
                  <div className="flex gap-5 font-bold text-black max-md:flex-wrap max-md:max-w-full items-center">
                    <h3 className="flex-auto text-lg leading-7">
                      White Label Partnership
                    </h3>
                    <button className="text-xs text-center border-2 border-black border-solid rounded-[50px] w-[126px] h-[28px]">
                      Learn more
                    </button>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-slate-600 max-w-[666px] text-justify">
                    Your Brand, Our Expertise: As a White Label Partner, you can
                    offer our services under your brand name. Gain access to
                    exclusive trade rates and expand your portfolio with our
                    cutting-edge technology solutions.
                    <br />
                  </p>
                </div>
              </div>
            </article>
          </div>

          <div className="flex flex-col items-center ml-0 sm:ml-5 w-[470px]">
            <div className="bg-[#0A8FFC] rounded-[57px] w-[300px] md:w-[481px] h-[330px] md:h-[529px] relative">
              <div className="max-md:mt-10 w-[290px] md:w-[471px] h-[320px] md:h-[520px] absolute -top-14 sm:-top-3">
                <Image
                  loading="lazy"
                  src="/partnership-program-image.png"
                  alt="partnership program image"
                  className="self-stretch my-auto rounded-[57px]"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="flex justify-center mt-24">
        <div className="flex gap-5 flex-col lg:flex-row max-md:gap-0 max-w-[1280px] items-center justify-center">
          <figure className="flex flex-col w-[45%] max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              src="Reseller-partner.png"
              alt="Reseller partner image"
              className="grow w-full aspect-[0.99] max-md:mt-10 max-md:max-w-full"
            />
          </figure>
          <div className="flex flex-col ml-5 w-[55%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col self-stretch px-5 my-auto max-md:mt-10 max-md:max-w-full">
              <h2 className="text-5xl text-black leading-[58px] max-md:max-w-full max-md:text-4xl">
                Reseller Partner
              </h2>
              <ul className="mt-14 text-2xl leading-[50px] text-slate-600 max-md:mt-10 max-md:max-w-full list-decimal">
                <li>25% commission first year</li>
                <li>
                  10% second year providing new clients project revenue grows by
                  15% per year
                </li>
                <li>
                  We handle billing and first line support and clients day to
                  day needs
                </li>
                <li>We handle invoicing</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-24 relative">
        <img
          loading="lazy"
          src="/affiliate-partner-eclipse.png"
          alt="eclipse icon"
          className="absolute bottom-0 w-[320px] z-0"
        />

        <div className="flex justify-center">
          <div className="flex gap-5 flex-col-reverse lg:flex-row max-md:gap-0 max-w-[1280px] items-center justify-center">
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <article className="flex flex-col grow mt-2 max-md:mt-8 max-md:max-w-full">
                <h2 className="text-5xl text-black leading-[58px] max-md:max-w-full max-md:text-4xl">
                  Affiliate Partner
                </h2>
                <ul className="mt-12 text-2xl leading-[50px] text-slate-600 max-md:mt-10 max-md:max-w-full z-10 list-decimal">
                  <li>12% of revenue in first year</li>
                  <li>
                    3% of revenue in second and third year - if new revenue
                    conditions at 5% growth this revenue continues
                  </li>
                  <li>
                    We handle billing and first line support and clients day to
                    day needs and handle invoicing12% of revenue in first year
                  </li>

                  <li>
                    3% of revenue in second and third year - if new revenue
                    conditions at 5% growth this revenue continues
                  </li>
                  <li>
                    We handle billing and first line support and clients day to
                    day needs and handle invoicing
                  </li>
                </ul>
              </article>
            </div>
            <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <img
                loading="lazy"
                src="/Affiliate-Partner-image_1.png"
                alt="Affiliate partner image"
                className="w-full aspect-[0.98] max-md:mt-6 max-md:max-w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mt-24 relative pb-20">
        <img
          loading="lazy"
          src="/white-label-eclipse.png"
          alt="eclipse icon"
          className="absolute bottom-0 right-0 w-[420px] z-0"
        />
        <div className="flex  justify-center">
          <div className="flex flex-col lg:flex-row gap-5 max-md:flex-col max-md:gap-0 max-w-[1280px] justify-center items-center">
            <figure className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <img
                loading="lazy"
                src="/White-label-image.png"
                alt="White Label Reseller Partner"
                className="w-full aspect-[1.06] max-md:mt-3.5 max-md:max-w-full"
              />
            </figure>
            <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow px-5 max-md:mt-3.5 max-md:max-w-full">
                <h2 className="text-5xl text-black leading-[58px] max-md:max-w-full max-md:text-4xl">
                  White Label Reseller Partner
                </h2>
                <ol className="mt-12 text-2xl leading-[50px] text-slate-600 max-md:mt-10 max-md:max-w-full z-10 list-decimal">
                  <li>Trade rates</li>
                  <ol style={{ listStyleType: "lower-alpha" }} className="ms-8">
                    <li>
                      20% discount under $250k maintained annual project value
                    </li>
                    <li>
                      25% discount $250k to $500k maintained annual project
                      value
                    </li>
                    <li>30% over $500k maintained annual project value</li>
                    <li>You resell at what ever rate you like</li>
                  </ol>
                  <li>You handle billing and first line support</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="flex justify-center text-2xl leading-8 text-center bg-[#EFEEEE] pb-36 -mb-16">
        <div className="max-w-[1280px]">
          <h2 className="text-5xl my-20">Our Services</h2>
          <div className="text-slate-600 max-w-[1280px]">
            <div className="flex justify-center gap-x-8 gap-y-14 flex-wrap px-5 w-full max-md:flex-wrap max-md:max-w-full">
              {services.map((service: any, index: any) => {
                return (
                  <p
                    className="flex items-center justify-center bg-white rounded-2xl shadow-md max-md:px-5 w-[290px] sm:w-[390px] h-[80px] p-2"
                    key={index}
                  >
                    {service}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
