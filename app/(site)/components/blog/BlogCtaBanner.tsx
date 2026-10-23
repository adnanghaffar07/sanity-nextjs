import Image from "next/image";
import containerImage from "@/public/Container.jpeg";

const CONSULTATION_URL = "https://calendly.com/adnanghaffar/codeautomation";

// "Ready to Automate Your Success?" banner inside every blog post.
export default function BlogCtaBanner() {
  return (
    <div className="relative overflow-hidden rounded-2xl mb-16">
      <Image
        src={containerImage}
        alt="Start Your Project"
        sizes="(min-width: 1024px) 976px, 100vw"
        className="w-full h-[300px] md:h-[350px] object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/20" />
      <div className="absolute inset-0 flex items-center justify-center p-6">
        <div className="text-center max-w-2xl">
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">Ready to Automate Your Success?</h2>
          <p className="text-gray-200 mb-6">
            From AI-powered applications to scalable software development, we help businesses automate workflows and
            accelerate growth.
          </p>
          <a
            href={CONSULTATION_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#f7e022] hover:bg-amber-400 text-gray-900 font-semibold px-6 py-3 rounded-full transition-all duration-300 hover:scale-105"
          >
            Book a Free Consultation
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
