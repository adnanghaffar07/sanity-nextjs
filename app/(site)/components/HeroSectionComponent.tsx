import Image from "next/image";

interface HeroSectionComponentProps {
  title: string;
  content: string;
  image: string;
  alt?: string;
}

const HeroSectionComponent = ({
  title,
  content,
  image,
  alt = "codeautomation image",
}: HeroSectionComponentProps) => {
  return (
    <section className="relative">
      <div className="bg-black w-full h-[380px] sm:h-[700px] opacity-65 absolute z-[1]"></div>
      <div className="w-full h-[380px] sm:h-[700px] relative z-0">
        <Image
          src={image}
          alt={alt}
          loading="lazy"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>

      <div className="mt-[130px] sm:mt-[327px] items-center absolute inset-0 flex flex-col z-[2]">
        <h1 className="text-xl sm:text-5xl font-bold tracking-tight capitalize leading-[48px] text-white text-center">
          {title}
        </h1>
        <p className="mt-1 sm:mt-2 mb-2 sm:mb-44 text-xs sm:text-xl font-light tracking-wide leading-4 sm:leading-7  text-white max-w-[280px] sm:max-w-[1080px] xl:px-0 text-center">
          {content}
        </p>
      </div>
    </section>
  );
};

export default HeroSectionComponent;
