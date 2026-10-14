import Image from "next/image";
import type { HomeTestimonial } from "@/sanity/lib/home";
import ScrollAnimation from "../ScrollAnimation";
import TestimonialsCarousel from "./TestimonialsCarousel";

export default function TestimonialsSection({ testimonials }: { testimonials: HomeTestimonial[] }) {
  if (testimonials.length === 0) return null;

  return (
    <section className="flex flex-col bg-[#F3F3F3] py-16 px-6 relative overflow-hidden">
      <div className="absolute inset-0 z-0" aria-hidden>
        <Image src="/testimonial.png" alt="" fill sizes="100vw" className="object-cover" />
      </div>
      <ScrollAnimation>
        <div className="relative z-10 flex flex-col items-center">
          <h2 className="w-full xl:text-4xl text-2xl font-medium text-white text-center">Trusted by Industry Leaders</h2>
          <p className="self-center md:mt-6 mt-3 lg:text-xl text-lg text-center text-white max-w-4xl mx-auto">
            Let us show you how our services have helped clients with custom software development. These client reviews
            will tell you why our amazing solutions & support set us apart.
          </p>
        </div>

        <div className="mx-auto">
          <TestimonialsCarousel testimonials={testimonials} />
        </div>
      </ScrollAnimation>
    </section>
  );
}
