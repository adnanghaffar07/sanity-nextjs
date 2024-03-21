import Image from "next/image";

interface HeroSectionComponentProps {
  title: string;
  content: string;
  image: string;
}

const HeroSectionComponent = ({
  title,
  content,
  image,
}: HeroSectionComponentProps) => {
  return (
    <section className="relative">
      <div className="bg-black w-full h-[380px] sm:h-[700px] opacity-55 absolute z-[1]"></div>
      <div className="w-full h-[380px] sm:h-[700px] relative z-0">
        <Image
          src={image}
          alt="Services Image"
          layout="fill"
          objectFit="cover"
        />
      </div>

      <div className="mt-[130px] sm:mt-[327px] absolute inset-0 flex flex-col items-center z-[2]">
        <h1 className="text-xl sm:text-5xl font-bold tracking-tight text-center capitalize leading-[48px] text-white">
          {title}
        </h1>
        <p className="mt-1 sm:mt-2 mb-2 sm:mb-44 text-xs sm:text-xl font-light tracking-wide leading-4 sm:leading-7 text-center text-white max-w-[280px] sm:max-w-[1080px] px-3 xl:px-0">
          {content}
        </p>
      </div>
    </section>
  );
};

export default HeroSectionComponent;
