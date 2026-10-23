import type { Metadata } from "next";
import { getLifeAtCaPage, type SanityImage as SanityImageData } from "@/sanity/lib/site-pages";
import SanityImage from "@/components/ui/SanityImage";

export const revalidate = 300;

const TITLE = "Life at CodeAutomation";
const DESCRIPTION =
  "Life at Code Automation, where innovation, collaboration, & team culture thrive through events, growth opportunities, and a supportive work environment.";
const PAGE_URL = "https://codeautomation.ai/lifeatca";
const SHARE_IMAGE = "https://codeautomation.ai/thankyou.jpg";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: ["CodeAutomation", "software development company", "software development services"],
  alternates: { canonical: PAGE_URL },
  openGraph: { type: "website", url: PAGE_URL, title: TITLE, description: DESCRIPTION, images: [{ url: SHARE_IMAGE, width: 1200, height: 630, alt: "CodeAutomation Logo" }] },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION, images: [SHARE_IMAGE] },
};

function Photo({ image, alt, className, sizes = "(min-width: 768px) 33vw, 100vw" }: { image?: SanityImageData; alt: string; className: string; sizes?: string }) {
  return <SanityImage image={image} alt={alt} sizes={sizes} className={className} />;
}

// One collage section: a large photo beside a 2×2 grid, then a column of three
// beside two rows of three (photos 1–5 and 6–15 of the section).
function Collage({ images }: { images: SanityImageData[] }) {
  return (
    <>
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <div className="flex flex-col w-2/5 max-md:w-full">
          <Photo image={images[0]} alt="image6" className="grow w-full h-auto aspect-[1.04] max-md:mt-5 max-md:max-w-full" sizes="(min-width: 768px) 40vw, 100vw" />
        </div>
        <div className="flex flex-col ml-5 w-3/5 max-md:ml-0 max-md:w-full grow max-md:mt-5">
          {[images.slice(1, 3), images.slice(3, 5)].map((row, rowIndex) => (
            <div key={rowIndex} className={`px-0.5 flex gap-5 max-md:flex-col max-md:gap-0 ${rowIndex > 0 ? "mt-4" : ""}`}>
              {row.map((image, index) => (
                <div key={index} className="flex flex-col w-6/12 max-md:w-full">
                  <Photo image={image} alt={image.alt ?? ""} className="grow w-full h-auto aspect-[1.54] max-md:mt-9" sizes="(min-width: 768px) 30vw, 100vw" />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

function CollageSecondHalf({ images }: { images: SanityImageData[] }) {
  return (
    <div className="flex gap-5 max-md:flex-col max-md:gap-0">
      <div className="flex flex-col w-[36%] max-md:w-full grow max-md:mt-3.5">
        {images.slice(5, 8).map((image, index) => (
          <Photo key={index} image={image} alt={image.alt ?? ""} className={`w-full h-auto aspect-[2.08] max-md:max-w-full ${index > 0 ? "mt-3" : ""}`} />
        ))}
      </div>
      <div className="flex flex-col ml-5 w-[64%] max-md:ml-0 max-md:w-full grow max-md:mt-3">
        {[images.slice(8, 11), images.slice(11, 15)].map((row, rowIndex) => (
          <div key={rowIndex} className={`flex gap-5 max-md:flex-col max-md:gap-0 ${rowIndex > 0 ? "mt-8" : ""}`}>
            {row.map((image, index) => (
              <div key={index} className={`flex flex-col w-[33%] max-md:ml-0 max-md:w-full ${index > 0 ? "ml-5" : ""}`}>
                <Photo image={image} alt={image.alt ?? ""} className="grow w-full h-auto aspect-[0.75] max-md:mt-7" sizes="(min-width: 768px) 21vw, 100vw" />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default async function LifeAtCaPage() {
  const page = await getLifeAtCaPage();
  const extra = page?.extraImages ?? [];
  const sections = page?.imageSections ?? [];

  return (
    <div>
      <div className="flex overflow-hidden relative flex-col pb-12 w-full font-light text-white lg:min-h-[700px] max-md:max-w-full">
        <SanityImage image={page?.bannerImage} alt="lifeatca" fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-[#020C16] opacity-75" />
        <div className="flex relative flex-col items-center lg:px-20 px-5 pt-12 w-full max-md:max-w-full flex-grow">
          <div className="lg:absolute lg:top-[350px]">
            <h1 className="lg:text-4xl text-2xl font-bold text-center capitalize max-lg:mt-36 max-md:max-w-full">{page?.title}</h1>
            <h2 className="lg:text-2xl text-base text-center mt-4 max-md:max-w-full lg:px-32">{page?.description}</h2>
          </div>
        </div>
      </div>

      <div className="flex flex-col p-10 bg-white max-md:px-5">
        <div className="flex justify-center flex-wrap gap-5 max-md:flex-col max-md:gap-0">
          {page?.teamMembers?.map((member) => (
            <div key={member._key} className="w-full md:w-1/3 lg:w-1/5 flex flex-col items-center">
              <div className="flex flex-col text-2xl font-semibold leading-9 text-center text-black mt-10">
                <SanityImage
                  image={member.imageUrl}
                  alt={`${member.name}'s headshot`}
                  sizes="(min-width: 1024px) 20vw, (min-width: 768px) 33vw, 100vw"
                  className="w-full h-auto aspect-square object-cover rounded-full border border-gray-300"
                />
                <div className="mt-7">
                  <span className="xl:text-2xl text-xl">{member.name}</span>
                  <br />
                  <span className="text-xl font-light">{member.title}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <main className="flex flex-col p-20 pt-0 bg-white max-md:px-5">
        <p className="self-center text-xl mt-6 md:mt-10 text-center text-black">{page?.introText}</p>

        <section className="mt-6 md:mt-10 ml-3.5 max-md:mr-2 max-md:max-w-full">
          <div className="flex gap-2 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-2/5 max-md:w-full mb-2">
              {extra.slice(0, 2).map((image, index) => (
                <Photo key={index} image={image} alt={`Extra Image ${index + 1}`} className={`w-full h-auto grow md:aspect-[2.5] md:object-contain ${index > 0 ? "mt-2" : ""}`} />
              ))}
            </div>
            <div className="flex flex-col w-4/5 max-md:w-full">
              <div className="flex gap-1 max-md:flex-col max-md:gap-0">
                {extra.slice(2, 4).map((image, index) => (
                  <div key={index} className={`flex mb-2 flex-col w-1/4 max-md:w-full ${index > 0 ? "ml-2" : ""}`}>
                    <Photo image={image} alt={`Extra Image ${index + 3}`} className="w-full h-full" sizes="(min-width: 768px) 20vw, 100vw" />
                  </div>
                ))}
                {extra[4] && (
                  <div className="flex flex-col mb-2 w-2/5 max-md:w-full ml-2 flex-grow">
                    <Photo image={extra[4]} alt="Extra Image 5" className="w-full h-full md:aspect-[2.5] md:object-contain" />
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        <p className="self-center mt-6 md:mt-8 text-xl leading-7 text-center text-black max-md:max-w-full">{page?.middleText}</p>
        <section className="mt-6 md:mt-10 ml-3.5 max-md:mr-2 max-md:max-w-full">
          {sections.map((section) => (
            <Collage key={section._key} images={section.images ?? []} />
          ))}
        </section>

        <p className="mt-6 md:mt-10 text-xl leading-7 text-center text-black max-md:mr-2 max-md:max-w-full">{page?.conclusionText}</p>
        <section className="mt-6 md:mt-10 ml-3.5 max-md:mr-2 max-md:max-w-full">
          {sections.map((section) => (
            <CollageSecondHalf key={section._key} images={section.images ?? []} />
          ))}
        </section>
      </main>
    </div>
  );
}
