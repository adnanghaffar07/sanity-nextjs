interface Testimonial {
  quote: string;
  authorRole?: string;
  authorCompany?: string;
}

interface TestimonialsSectionData {
  sectionHeading?: string;
  sectionSubheading?: string;
  testimonials?: Testimonial[];
}

export default function TestimonialsSection({
  testimonialsSection,
}: {
  testimonialsSection?: TestimonialsSectionData;
}) {
  const testimonials = testimonialsSection?.testimonials;

  if (!testimonials || testimonials.length === 0) {
    return null;
  }

  return (
    <section className="relative px-6 md:px-16 py-10 md:py-16 bg-white overflow-hidden">
      <div className="absolute inset-0 bg-[#1D92FB] opacity-[0.04] pointer-events-none" />

      <div className="container relative mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#0b1220]">
            {testimonialsSection?.sectionHeading || "Client Testimonials"}
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            {testimonialsSection?.sectionSubheading ||
              "What US teams say after their first engagement."}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative flex flex-col rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-shadow hover:shadow-lg"
            >
              <svg
                className="h-9 w-9 text-[#1D92FB]/25"
                viewBox="0 0 32 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M9.6 0C4.3 3.2 0 9 0 15.2 0 20.4 3.4 24 8 24c4.2 0 7.2-3.2 7.2-7.4 0-4-2.8-6.8-6.4-6.8-.6 0-1.2.1-1.6.2C7.8 6 9.8 3 13.6 1.2L9.6 0Zm18.4 0c-5.3 3.2-9.6 9-9.6 15.2 0 5.2 3.4 8.8 8 8.8 4.2 0 7.2-3.2 7.2-7.4 0-4-2.8-6.8-6.4-6.8-.6 0-1.2.1-1.6.2C26.2 6 28.2 3 32 1.2L28 0Z" />
              </svg>

              <p className="mt-4 flex-1 text-base md:text-lg leading-relaxed text-gray-700">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              <div className="mt-6 border-t border-gray-100 pt-4">
                {testimonial.authorRole && (
                  <p className="font-semibold text-[#0b1220]">{testimonial.authorRole}</p>
                )}
                {testimonial.authorCompany && (
                  <p className="text-sm text-gray-500">{testimonial.authorCompany}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
