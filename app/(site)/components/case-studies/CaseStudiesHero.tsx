import Image from "next/image";
import ScrollToSectionButton from "@/components/ui/ScrollToSectionButton";
import heroImage from "@/public/CaseStudyHero.png";
import ellipse from "@/public/ellipse-1.png";
import introImage from "@/public/Picture.png";

// Top of /case-studies: the hero and the "Real World Application" intro.
export default function CaseStudiesHero({ gridId }: { gridId: string }) {
  return (
    <>
      <section className="relative h-[380px] sm:h-[700px]">
        <Image src={heroImage} alt="" fill priority sizes="100vw" className="object-cover" />
        <div className="mt-[130px] sm:mt-[290px] items-center absolute inset-0 flex flex-col z-[2]">
          <h1 className="text-xl sm:text-5xl font-bold tracking-tight capitalize leading-[48px] text-white text-center">
            Discover Success Stories
          </h1>
          <p className="mt-2 sm:mt-4 mb-4 text-xs sm:text-xl font-light tracking-wide leading-4 sm:leading-7 text-white max-w-5xl xl:px-0 text-center">
            Explore our case study on codeautomation, showcasing how innovative strategies significantly enhance
            efficiency, reduce costs, and accelerate development in software projects.
          </p>
          <ScrollToSectionButton
            content="Let’s Get Started"
            classes="bg-[#1D92FB] hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer"
            destination={gridId}
          />
        </div>
      </section>

      <section className="relative">
        <div className="absolute inset-0 bg-[#3595EB] opacity-10 pointer-events-none" />
        <Image src={ellipse} alt="" className="absolute left-0 w-40 h-auto lg:block hidden" />

        <div className="max-w-6xl px-6 md:px-16 py-10 md:py-16 mx-auto relative">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex-1 md:mr-8">
              <h2 className="text-2xl md:text-4xl font-semibold text-black mb-4">Real World Application Case studies</h2>
              <p className="text-xl text-[#3C3C3C]">
                Case studies are essential because they offer detailed insights and practical examples of how theories
                work in real-world scenarios, helping to improve strategies and decision-making.
              </p>
            </div>
            <div className="flex-1 mt-8 md:mt-0">
              <Image
                src={introImage}
                alt="Our Case Studies"
                sizes="(min-width: 1152px) 480px, (min-width: 768px) 45vw, 100vw"
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
