import Link from "next/link";
import { urlForImage } from "@/sanity/lib/image";

const WorkItem = ({
  imageSrc,
  alt,
  index,
  url,
  description,
  color = "#4aa2f0", // Default color if none is provided
}: {
  imageSrc: any;
  alt: string;
  index: number;
  url: string;
  description: string;
  color: string;
}) => (
  <div
    key={index}
    className="relative w-full cursor-pointer group overflow-hidden"
  >
    <Link href={`/case-studies/${url}`}>
      {imageSrc.asset && (
        <img
          loading="lazy"
          src={urlForImage(imageSrc).toString()}
          alt={alt}
          className="w-full aspect-[1.52] md:max-w-[410px] sm:max-w-[204px] sm:mb-2"
        />
      )}
      <div
        className={`absolute inset-0 flex items-center justify-center text-center p-4 transform translate-x-full translate-y-full group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300 rounded-3xl`}
        style={{
          backgroundColor:color, // Use the color field dynamically
        }}
      >
        <p className="text-white">{description}</p>
      </div>
    </Link>
  </div>
);

export default WorkItem;
