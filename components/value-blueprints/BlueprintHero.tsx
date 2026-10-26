import SanityImage from "@/components/ui/SanityImage";
import type { Image } from "sanity";

// Full-width image with the page title, used on /value-blueprints and each blueprint.
export default function BlueprintHero({ image, title, darken }: { image: Image | null; title: string | null; darken?: boolean }) {
  return (
    <div className="flex overflow-hidden relative flex-col pb-12 w-full font-light text-white lg:min-h-[700px] max-md:max-w-full">
      <SanityImage image={image} fill priority sizes="100vw" className="object-cover" />
      {darken && <div className="absolute inset-0 bg-[#020C16] opacity-65" />}
      <div className="flex relative flex-col items-center lg:px-20 px-5 lg:pt-12 lg:pb-0 pt-48 pb-36 w-full max-md:max-w-full flex-grow">
        <div className="lg:absolute lg:top-[300px]">
          <h1 className="lg:text-4xl text-2xl font-bold text-center capitalize lg:w-8/12 mx-auto leading-[56px]">{title}</h1>
        </div>
      </div>
    </div>
  );
}
