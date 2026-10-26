import type { ReactNode } from "react";
import SanityImage from "@/components/ui/SanityImage";
import ScrollToSectionButton from "@/components/ui/ScrollToSectionButton";
import type { Banner, LegacyService, SanityImage as SanityImageData } from "@/sanity/lib/legacy-services";
import { CONTACT_FORM_ID, ConsultationLink, ImageBanner } from "./primitives";

// Text on the left, image on the right, on the blue background image.
function BannerLayout({ children, image, white, compactImage }: { children: ReactNode; image?: SanityImageData | null; white?: boolean; compactImage?: boolean }) {
  return (
    <ImageBanner>
      <div className={`container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${white ? "text-white" : ""}`}>
        <div>{children}</div>
        <div className="flex justify-center">
          <div className="max-w-full h-[300px] md:h-full rounded-lg overflow-hidden">
            <SanityImage image={image} sizes="(min-width: 768px) 50vw, 100vw" className={`object-cover rounded-lg w-auto ${compactImage ? "h-[200px] md:h-[300px]" : "h-[300px]"}`} />
          </div>
        </div>
      </div>
    </ImageBanner>
  );
}

interface CtaBannerProps {
  banner: Banner;
  /** Some banners only show their image when the page also has a special offer image (kept as it was). */
  showImage: boolean;
  action: "consultation" | "contact-form";
  narrowButton?: boolean;
  compactImage?: boolean;
}

// Title, optional subtitle, description and one button.
export function CtaBanner({ banner, showImage, action, narrowButton, compactImage }: CtaBannerProps) {
  return (
    <BannerLayout image={showImage ? banner.featuredImage : null} white compactImage={compactImage}>
      <div className="flex flex-col w-full max-md:max-w-full">
        <div className="text-3xl font-bold leading-none max-md:max-w-full">{banner.title}</div>
        {banner.subtitle && <div className="mt-4 text-xl leading-none max-md:max-w-full">{banner.subtitle}</div>}
        <div className={`${action === "contact-form" ? "my-6" : "mt-4"} text-lg font-light leading-7 max-md:max-w-full rich-text`}>{banner.description}</div>
        {action === "consultation" ? (
          <ConsultationLink maxWidth={narrowButton}>{banner.buttonText}</ConsultationLink>
        ) : (
          <ScrollToSectionButton classes="button2" content={banner.buttonText} destination={CONTACT_FORM_ID} />
        )}
      </div>
    </BannerLayout>
  );
}

// Special offer heading with an offer box and question/answer boxes.
export function SpecialOfferBanner({ offer }: { offer: NonNullable<LegacyService["specialOffersSection"]> }) {
  return (
    <BannerLayout image={offer.offerImg}>
      <h2 className="text-2xl font-bold text-white mb-8">{offer.offerHeading}</h2>
      {offer.specialOffer && (
        <div className="bg-white bg-opacity-30 backdrop-blur-md p-6 rounded-lg mb-8">
          <p className="text-lg font-light text-white mb-4">{offer.specialOffer}</p>
        </div>
      )}
      {offer.specialOfferQA?.length ? (
        <div className="space-y-4">
          {offer.specialOfferQA.map((item, index) => (
            <div key={index} className="bg-white bg-opacity-30 backdrop-blur-md p-6 rounded-lg">
              <h3 className="text-lg font-bold text-white mb-2">{item.heading}</h3>
              <p className="text-base font-light text-white">{item.description}</p>
            </div>
          ))}
        </div>
      ) : null}
    </BannerLayout>
  );
}

// Newer special offer: "<title>: <text> <days> <text>" with a consultation button.
export function UpdatedSpecialOfferBanner({ offer }: { offer: NonNullable<LegacyService["UpdatedSpecialOffersSection"]> }) {
  return (
    <BannerLayout image={offer.offerImg}>
      <h2 className="text-2xl font-bold text-white mb-8">{offer.offerHeading}</h2>
      {offer.specialOfferTitle && (
        <div className="bg-white bg-opacity-30 backdrop-blur-md p-6 rounded-lg mb-8">
          <p className="text-lg font-bold text-[#F7E022] mb-4">{offer.specialOfferTitle}</p>
          <p className="text-lg font-light text-white mb-4">
            <span>{offer.specialOfferText1}</span> <span className="text-[#F7E022]">{offer.specialOfferDays}</span>{" "}
            <span>{offer.specialOfferText2}</span>
          </p>
        </div>
      )}
      <ConsultationLink maxWidth>{offer.buttonText}</ConsultationLink>
    </BannerLayout>
  );
}
