"use client"; // This ensures the component is a Client Component

import { useRouter } from 'next/navigation';
import { urlForImage } from "@/sanity/lib/image";

interface ServiceProps {
    service: any; // Explicitly define the type for the 'service' prop
  } 

const ServiceCard: React.FC<ServiceProps> = ({ service }) => {
  const router = useRouter();

  const handleServiceClick = () => {
    if (service.enableRedirect && service.redirectUrl) {
      router.push(service.redirectUrl); // Redirect to the target URL
    } else {
      router.push(`/services/${service.urlPath}`); // Default behavior
    }
  };

  return (
    <div
      className="flex flex-col relative w-[276px] sm:w-[348px] h-[143px] sm:h-[175px] cursor-pointer"
      onClick={handleServiceClick}
    >
      <div className="z-10 px-3.5 w-10 sm:w-20 h-10 sm:h-20 bg-white rounded-full absolute flex justify-center items-center right-2 sm:right-5 -top-6 sm:-top-14 drop-shadow-serviceCard">
        {service.cardIcon && (
          <img
            src={urlForImage(service.cardIcon).toString()}
            loading="lazy"
            alt="service-icon"
            className="w-10 sm:w-[54px] h-10 sm:h-[54px] object-contain"
          />
        )}
      </div>

      <div
        className={`flex gap-2.5 ${
          service.urlPath.length > 22 ? "py-0 sm:py-4" : "py-5 sm:py-10"
        } pl-5 text-black rounded-lg sm:rounded-3xl shadow-lg backdrop-blur-[6.5px] bg-[#D7D7D7] bg-opacity-30 w-[276px] sm:w-[348px] h-[143px] sm:h-[175px]`}
      >
        <div className="flex flex-col grow shrink-0 w-fit">
          <h3
            className={`text-base sm:text-xl font-medium leading-6 ${
              service.urlPath.length > 22 ? "max-w-[200px] sm:max-w-[250px]" : ""
            }`}
          >
            {service.serviceCardTitle}
          </h3>

          <p
            className={`${
              service.urlPath.length > 22 ? "mt-1 sm:mt-4" : "mt-4"
            } text-[15px] sm:text-sm font-light leading-4 max-w-[230px] sm:max-w-[274px]`}
          >
            {service.serviceDesc}
          </p>
        </div>

        <img
          src="/service-card-right-arrow.png"
          alt="arrow-icon"
          className="z-10 shrink-0 self-end mt-8 aspect-square w-[36px] sm:w-[53px] absolute -right-4 top-5 sm:-right-7"
        />
      </div>
    </div>
  );
};

export default ServiceCard;
