import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getPartnershipPage, type PartnershipPage } from "@/sanity/lib/site-pages";
import { urlForImage } from "@/sanity/lib/image";
import SanityImage from "@/components/ui/SanityImage";
import ScrollAnimation from "@/components/ui/ScrollAnimation";
import programsEclipse from "@/public/partnership-program-eclipse.png";
import affiliateEclipse from "@/public/affiliate-partner-eclipse.png";
import whiteLabelEclipse from "@/public/white-label-eclipse.png";

export const revalidate = 300;

const PAGE_URL = "https://codeautomation.ai/partnership-program";
const BOOKING_URL = "https://calendly.com/adnanghaffar";
const DEFAULT_TITLE = "Code Automation - Custom Software and Mobile Development Company in USA";
const DEFAULT_DESCRIPTION = "Custom Software and Mobile Development Company in USA";

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPartnershipPage();
  const title = page?.webSeoMetadataSub?.title || DEFAULT_TITLE;
  const description = page?.webSeoMetadataSub?.description || DEFAULT_DESCRIPTION;
  const image = page?.heroImage ? urlForImage(page.heroImage) : "/thankyou.jpg";
  const images = [{ url: image, width: 1200, height: 630, alt: title }];

  return {
    title,
    description,
    keywords: page?.webSeoMetadataSub?.keywords?.join(", ") || "CodeAutomation.ai",
    alternates: { canonical: PAGE_URL },
    openGraph: {
      type: "website",
      url: PAGE_URL,
      title: page?.facebookCardsSub?.facebookTitle || title,
      description: page?.facebookCardsSub?.facebookDescription || description,
      images,
    },
    twitter: {
      card: "summary_large_image",
      title: page?.twitterCardsSub?.twitterTitle || title,
      description: page?.twitterCardsSub?.twitterDescription || description,
      images,
    },
  };
}

type ProgramDetail = NonNullable<PartnershipPage["programDetails"]>[number];

// Decorative curves behind the second and third program details.
const DETAIL_DECORATIONS = [null, { src: affiliateEclipse, className: "bottom-0 w-[320px]" }, { src: whiteLabelEclipse, className: "bottom-0 right-0 w-[420px]" }];

function ProgramDetailSection({ program, index }: { program: ProgramDetail; index: number }) {
  const decoration = DETAIL_DECORATIONS[index];
  return (
    <section className="mt-24 relative">
      <ScrollAnimation>
        {decoration && <Image src={decoration.src} alt="" className={`absolute h-auto z-0 ${decoration.className}`} />}
        <div className="flex items-center justify-center">
          <div className={`flex gap-5 flex-col max-w-[1280px] items-center justify-center ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}>
            {program.programImage?.asset && (
              <figure className="flex flex-col w-[45%] max-md:w-full">
                <SanityImage
                  image={program.programImage}
                  sizes="(min-width: 768px) 45vw, 100vw"
                  className="grow w-full h-auto aspect-[0.99] max-md:mt-10 max-md:max-w-full"
                />
              </figure>
            )}
            <div className="flex flex-col sm:ml-5 w-[80%] sm:w-[55%] sm:px-5 my-auto max-md:mt-10">
              <h2 className="text-2xl text-black leading-[58px] md:text-4xl">{program.title}</h2>
              <ol className="mt-10 ml-6 text-lg leading-10 text-slate-700 list-decimal">
                {program.list?.map((item) => (
                  <li key={item._key}>
                    {item.topLevelItem}
                    {item.subLevelList && (
                      <ol className="ms-8 list-[lower-alpha]">
                        {item.subLevelList.map((sub) => (
                          <li key={sub._key}>{sub.subLevelItem}</li>
                        ))}
                      </ol>
                    )}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </ScrollAnimation>
    </section>
  );
}

export default async function PartnershipProgramPage() {
  const page = await getPartnershipPage();
  const programs = page?.availableProgramSection;

  return (
    <div>
      <section className="relative">
        <div className="w-full h-[490px] sm:h-[700px] relative z-0">
          <SanityImage image={page?.heroImage} fill priority sizes="100vw" className="object-cover" />
        </div>
        <div className="bg-black w-full h-[490px] sm:h-[700px] opacity-30 absolute inset-0 z-[1]" />
        <div className="mt-[160px] sm:mt-[290px] items-center absolute inset-0 flex flex-col z-[2] px-6 md:px-16">
          <h1 className="lg:text-4xl text-2xl font-semibold tracking-tight capitalize leading-[48px] text-white text-center">{page?.heroTitle}</h1>
          <p className="mt-2 md:mt-8 md:text-2xl text-lg font-light tracking-wide leading-7 text-white max-w-[280px] sm:max-w-[1080px] text-center">
            {page?.heroSubTitle}
          </p>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#f7e022] text-black cursor-pointer mt-6 py-3 px-2 font-semibold rounded-lg shadow-lg text-center w-full sm:min-w-48 sm:max-w-64"
          >
            Become a Partner
          </a>
        </div>
      </section>

      <ScrollAnimation>
        <section className="flex justify-center items-center px-16 py-14 text-center bg-blue-50 max-md:px-5">
          <div className="flex flex-col max-w-full">
            <h2 className="text-2xl md:text-4xl text-black max-w-3xl mx-auto">{page?.title}</h2>
            <p className="self-center mt-4 text-lg leading-8 text-slate-600 max-w-4xl mx-auto">{page?.description}</p>
          </div>
        </section>
      </ScrollAnimation>

      <ScrollAnimation>
        <section className="mt-16 sm:mt-28 relative overflow-hidden">
          <Image src={programsEclipse} alt="" className="absolute bottom-0 w-[645px] h-auto z-0" />
          <div className="flex gap-16 xl:gap-10 2xl:gap-16 flex-col-reverse xl:flex-row justify-center items-center mx-1 sm:mx-10">
            <article className="flex flex-col max-md:mt-10 max-md:w-full z-10 px-4 sm:px-0">
              <div className="flex flex-col sm:pl-20 text-neutral-900 mb-4 mt-1">
                <h2 className="text-2xl sm:text-4xl font-medium text-center sm:text-left">{programs?.partnershipTitle}</h2>
                <p className="mt-8 text-lg leading-8 max-w-[666px] text-justify">{programs?.partnershipDescription}</p>
              </div>
              {programs?.programs?.map((program) => (
                <ScrollAnimation key={program._key}>
                  <div className="flex flex-col sm:flex-row gap-4 sm:items-start items-center mt-10 xl:mt-3 justify-center">
                    <SanityImage image={program.icon} sizes="67px" className="w-[67px] h-auto" />
                    <div className="flex flex-col grow shrink-0 mt-1.5 basis-0 max-w-[666px]">
                      <h3 className="text-lg leading-7 font-bold text-black text-center sm:text-left">{program.title}</h3>
                      <p className="mt-3 text-md leading-7 text-slate-700 max-w-[666px] text-justify">{program.description}</p>
                    </div>
                  </div>
                </ScrollAnimation>
              ))}
            </article>
            {programs?.partnershipImage?.asset && (
              <div className="flex flex-col items-center w-[470px] mt-4 sm:mt-3 md:mt-8">
                <div className="bg-[#0A8FFC] rounded-[57px] w-[280px] md:w-[481px] h-[330px] md:h-[529px] relative">
                  <div className="max-md:mt-10 w-[270px] md:w-[471px] h-[320px] md:h-[520px] absolute -top-12 md:-top-8">
                    <SanityImage image={programs.partnershipImage} fill sizes="(min-width: 768px) 471px, 270px" className="object-cover rounded-[57px]" />
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
      </ScrollAnimation>

      {page?.programDetails?.map((program, index) => (
        <ProgramDetailSection key={program._key} program={program} index={index} />
      ))}

      <ScrollAnimation>
        <section className="flex justify-center leading-8 text-center bg-blue-50 border-t border-b pb-36">
          <div className="max-w-[1280px]">
            <h2 className="text-2xl md:text-4xl my-20 font-semibold text-gray-800">Our Services</h2>
            <div className="flex justify-center gap-x-8 gap-y-14 flex-wrap px-5 w-full">
              {page?.services?.map((service) => (
                <Link
                  key={service._key}
                  href={service.link ?? "/services"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center text-black bg-white rounded-2xl shadow-md max-md:px-5 w-[290px] sm:w-[390px] h-[80px] p-4 text-xl hover:text-white transition border duration-300 ease-in-out transform hover:scale-105 hover:bg-[#1D92FB]"
                >
                  {service.singleService?.slice(0, 2).map((line) => (
                    <span key={line}>{line}</span>
                  ))}
                </Link>
              ))}
            </div>
          </div>
        </section>
      </ScrollAnimation>
    </div>
  );
}
