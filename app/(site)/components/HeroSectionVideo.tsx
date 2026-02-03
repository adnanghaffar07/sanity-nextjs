import Image from "next/image";

const HeroImage = () => {
  return (
    <Image
      src="/ca-banner.jpg"
      alt="hero background"
      fill
      priority   // ✅ tells Next.js this is LCP image
      sizes="100vw"
      className="absolute top-0 left-0 w-full h-full object-cover"
    />
  );
};

export default HeroImage;
