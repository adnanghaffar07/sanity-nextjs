import Link from "next/link";
import SanityImage from "@/components/ui/SanityImage";
import type { CaseStudy } from "@/sanity/lib/case-studies";

// Top image with the main heading, sub-heading and optional button.
export default function CaseStudyHero({ study }: { study: CaseStudy }) {
  const { button } = study;

  return (
    <section className="flex overflow-hidden relative flex-col md:pb-12 w-full font-light text-white lg:min-h-[700px] max-md:max-w-full">
      <SanityImage image={study.cardimage} alt="" fill priority sizes="100vw" className="object-cover bg-black" />
      {/* relative below lg so the text sits above the image on phones and tablets */}
      <div className="relative px-6 pt-36 pb-10 lg:p-0 lg:absolute lg:top-[200px] lg:left-[110px]">
        <h1 className="md:text-6xl text-3xl mb-6 font-bold capitalize max-w-2xl lg:pl-8">{study.subtitle}</h1>
        <h2 className="md:text-4xl text-2xl text-gray-100 font-bold capitalize max-w-lg lg:pl-8">{study.blogheading}</h2>
        {button?.buttonUrl && (
          <Link
            href={button.buttonUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 flex w-fit md:w-48 items-center bg-black text-lg text-white p-5 lg:ml-6 lg:pl-8 rounded-md hover:bg-white hover:text-black transition-all"
          >
            <span className="mr-2">{button.buttonText}</span>
            <svg className="w-4 h-4 ms-2 rtl:rotate-180" aria-hidden="true" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
            </svg>
          </Link>
        )}
      </div>
    </section>
  );
}
