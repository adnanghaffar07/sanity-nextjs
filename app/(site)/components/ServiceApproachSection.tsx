import * as React from "react";

interface ApproachSectionProps {
  title: string;
  description: string;
  subtitle?: string;
  approachSteps: string[];
  imageUrl: string;
  imageAlt: string;
  columns: boolean;
}

const ServiceApproachSection: React.FC<ApproachSectionProps> = ({
  title,
  description,
  subtitle,
  approachSteps,
  imageUrl,
  imageAlt,
  columns,
}) => {
  return (
    <section className="self-center mt-20">
      <div className="flex flex-col-reverse xl:flex-row justify-center items-center">
        <div className="flex flex-col">
          <div className="flex z-10 flex-col grow px-5 mt-28 max-md:mt-10 max-md:max-w-full">
            <h2 className="text-xl md:text-5xl tracking-tight text-black capitalize leading-[61.08px] max-md:max-w-full max-md:text-4xl">
              {title}
            </h2>
            <p className="mt-5 text-xs md:text-xl font-light leading-7 text-justify text-black max-w-[580px]">
              {description}
            </p>
            <h3 className="mt-5 text-xl md:text-4xl tracking-tight leading-9 capitalize text-sky-950 max-md:max-w-full">
              {subtitle}
            </h3>
            <div
              className={`grid grid-cols-1 lg:${
                columns ? "grid-cols-2" : ""
              } gap-y-4 md:gap-y-10 gap-x-8 mt-10 text-sm md:text-2xl font-medium leading-8 text-justify text-sky-950`}
            >
              {approachSteps.map((step, index) => (
                <div key={index} className="relative ml-4">
                  <div>
                    <div className="w-[26px] md:w-[46px] h-[26px] md:h-[46px] bg-[#1d92fb42] rounded-full absolute -top-0 md:-top-2 -left-4 md:-left-6"></div>
                  </div>
                  <p className="text-base md:text-l "  style={{ wordSpacing: '0.6px' }}>{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="ml-5 w-[190px] md:w-[564px]">
          <img
            loading="lazy"
            src={imageUrl}
            alt={imageAlt}
            className="w-full aspect-square"
          />
        </div>
      </div>
    </section>
  );
};

export default ServiceApproachSection;
