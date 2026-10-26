import SanityImage from "@/components/ui/SanityImage";
import ScrollToSectionButton from "@/components/ui/ScrollToSectionButton";
import type { TextBlock } from "@/sanity/lib/value-blueprints";

// The footer contact form both buttons scroll to.
const CONTACT_FORM_ID = "contact-box";

function OfferCard({ block, cardClass, button, buttonClass }: { block: TextBlock | null; cardClass: string; button: string; buttonClass: string }) {
  return (
    <div className="flex flex-col w-6/12 max-md:w-full">
      <div
        className={`flex flex-col grow items-center px-20 py-11 w-full rounded-3xl border border-solid max-md:px-5 max-md:mt-10 max-md:max-w-full transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl ${cardClass}`}
      >
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">{block?.heading}</h2>
          <p className="text-lg text-gray-700 mb-8">{block?.text}</p>
          <SanityImage image={block?.image} alt="" sizes="120px" className="mx-auto mb-6 w-[120px] h-auto" />
          <ScrollToSectionButton content={button} classes={buttonClass} destination={CONTACT_FORM_ID} />
        </div>
      </div>
    </div>
  );
}

// "Get Started Now" and "Claim Offer" cards side by side.
export default function OfferCards({ callToAction, specialOffer }: { callToAction: TextBlock | null; specialOffer: TextBlock | null }) {
  return (
    <div className="flex justify-center items-center px-16 py-6 md:py-20 bg-white max-md:px-5">
      <div className="flex gap-16 w-full max-w-[1066px] max-md:flex-col max-md:gap-0">
        <OfferCard
          block={callToAction}
          cardClass="bg-sky-500 bg-opacity-10"
          button="Get Started Now"
          buttonClass="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-8 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer"
        />
        <OfferCard
          block={specialOffer}
          cardClass="bg-[#F7E022] bg-opacity-10"
          button="Claim Offer"
          buttonClass="bg-[#F7E022] cursor-pointer text-black font-semibold py-2 px-8 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 hover:bg-yellow-500"
        />
      </div>
    </div>
  );
}
