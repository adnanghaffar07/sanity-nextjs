import Link from "next/link";
import { urlForImage } from "@/sanity/lib/image";

interface ServiceCardProps {
  imageSrc?: string;
  title: string;
  description: string;
  iconSrc?: any; // Make iconSrc optional
  linkUrl: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  iconSrc,
  linkUrl,
}) => {
  
  const cardIcon = iconSrc ? urlForImage(iconSrc.asset) : "";

  return (
    <Link
      href={`/services/${linkUrl}`}
      className="flex flex-col relative w-[276px] sm:w-[348px] h-[143px] sm:h-[175px]"
    >
      <div className="z-10 px-3.5 w-14 sm:w-24 h-14 sm:h-24 bg-white rounded-full absolute flex justify-center items-center right-2 sm:right-5 -top-6 sm:-top-14 drop-shadow-serviceCard">
       
        {iconSrc && (
          <img
            src={cardIcon}
            loading="lazy"
            alt="service-icon"
            className="w-10 sm:w-[54px] h-10 sm:h-[54px] object-contain"
          />
        )}
      </div>

      <div
        className={`flex gap-2.5 ${
          title.length > 22 ? "py-0 sm:py-4" : " py-5 sm:py-10 "
        } pl-5 text-black rounded-lg sm:rounded-3xl shadow-sm backdrop-blur-[6.5px] bg-[#1d92fb42] bg-opacity-30 w-[276px] sm:w-[348px] h-[143px] sm:h-[175px]`}
      >
        <div className="flex flex-col grow shrink-0 w-fit">
          <h3
            className={`text-base sm:text-xl font-medium leading-6 ${
              title.length > 22 ? "max-w-[200px] sm:max-w-[250px]" : ""
            }`}
          >
            {title}
          </h3>

          <p
            className={`${
              title.length > 22 ? "mt-1 sm:mt-4" : "mt-4"
            } text-[15px] sm:text-xs font-light leading-4 text-justify max-w-[230px] sm:max-w-[274px]`}
          >
            {description}
          </p>
        </div>

        <img
          src={"/service-card-right-arrow.png"}
          alt="arrow-icon"
          className="z-10 shrink-0 self-end mt-8 aspect-square w-[36px] sm:w-[53px] absolute -right-4 top-5 sm:-right-7"
        />
      </div>
    </Link>
  );
};
export default ServiceCard;
