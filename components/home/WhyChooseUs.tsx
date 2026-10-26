import Image from "next/image";

const REASONS = [
  {
    title: "Proven Expertise",
    description:
      "With extensive experience in delivering top-tier software development services, we bring a wealth of knowledge to every project, ensuring high-quality outcomes tailored to your business needs.",
  },
  {
    title: "Customized Solutions",
    description:
      "We recognize that no two businesses are the same so a custom fit solution is paramount. Through custom software development, our experienced team of technologists builds to your exact specifications.",
  },
  {
    title: "Agile Approach",
    description:
      "Our agile development process ensures flexibility, faster delivery, and continuous improvement, allowing us to adapt to changing needs and deliver superior results.",
  },
  {
    title: "Dedicated Support",
    description:
      "From concept to completion, our dedicated support team is with you every step of the way, providing expert guidance and ensuring seamless project execution.",
  },
  {
    title: "Global Reach",
    description:
      "Being able to provide both onshore as well as offshore development which enables access to international resources and maintaining quality with high efficiency.",
  },
  {
    title: "Client-Centric Focus",
    description:
      "We Care About Your Winning. We work side-by-side with our clients to help them realize their vision bringing software to life that benefits the business.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative px-6 py-10 md:px-16 md:py-16">
      <div className="justify-center text-center relative z-10 pb-10 max-w-7xl mx-auto">
        <h2 className="justify-center text-left md:text-center text-2xl md:text-3xl font-bold text-[#3C3C3C] mb-4 mx-auto max-w-3xl">
          Why Choose Us for Your Software Development Services?
        </h2>
        <p className=" justify-center text-left md:text-center text-lg font-medium text-[#3C3C3C] mx-auto max-w-4xl">
          Outsource with us for real experience in custom software development and top-line software solutions that
          will bring innovative results to your business.
        </p>
      </div>
      <div className="relative flex flex-col md:flex-row items-center justify-between z-10 max-w-7xl mx-auto">
        <div className="md:w-1/2 flex justify-center mt-10 md:mt-0 md:pl-12 ">
          <ol className="space-y-8">
            {REASONS.map((reason, index) => (
              <li key={reason.title} className="relative flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-[#1D92FB] text-white font-bold">
                    {index + 1}
                  </div>
                  {index < REASONS.length - 1 && (
                    <div className="absolute left-5 top-16 h-10 border-l-4 border-[#1D92FB]" aria-hidden />
                  )}
                </div>
                <div className="ml-8">
                  <h3 className="text-xl font-semibold text-[#1D92FB]">{reason.title}</h3>
                  <p className="text-[#3C3C3C] mt-2">{reason.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="md:w-1/2 flex justify-center">
          <Image
            src="/choose-us.png"
            alt="Software Development Services"
            height={600}
            width={400}
            className="w-3/4 rounded-lg shadow-lg z-10 md:mt-0 mt-6"
          />
        </div>
      </div>
    </section>
  );
}
