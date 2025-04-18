// components/AuthorBio.tsx
import Image from "next/image";
import { FaFacebookF, FaXTwitter, FaInstagram, FaLinkedinIn, FaEnvelope } from "react-icons/fa6";

const AuthorBio = () => {
  return (
    <section className="border-t border-gray-300 px-4 py-6 max-w-5xl mx-auto">
      <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
        {/* Profile Photo and Socials */}
        <div className="flex flex-col items-center md:items-start gap-4">
          <Image
            src="/ceo-adnan.png" // Replace with your image path
            alt="Adnan Ghaffar"
            width={140}
            height={140}
            className="rounded-full"
          />
          <div className="text-center md:text-left">
            <h2 className="text-xl font-bold text-sky-800">Adnan Ghaffar</h2>
            <p className="text-gray-600 dark:text-gray-300">CEO, CodeAutomation.ai</p>
          </div>
          <div className="flex gap-3 text-white">
            <a href="#" className="bg-black p-2 rounded-full"><FaFacebookF /></a>
            <a href="#" className="bg-black p-2 rounded-full"><FaXTwitter /></a>
            <a href="#" className="bg-black p-2 rounded-full"><FaInstagram /></a>
            <a href="#" className="bg-black p-2 rounded-full"><FaLinkedinIn /></a>
            <a href="#" className="bg-black p-2 rounded-full"><FaEnvelope /></a>
          </div>
        </div>

        {/* Bio Text */}
        <div className="text-gray-700 dark:text-gray-200 text-[15px] leading-relaxed space-y-4">
          <p>
            Adnan Ghaffar is the visionary CEO of CodeAutomation.ai, a platform dedicated to transforming how businesses build software through cutting-edge automation. With over a decade of experience in software development, QA automation, and team leadership, Adnan has built a reputation for delivering scalable, intelligent, and high-performance solutions.
          </p>
          <p>
            Under his leadership, CodeAutomation.ai has grown into a trusted name in AI-driven development, empowering startups and enterprises alike to streamline workflows, accelerate time-to-market, and maintain top-tier product quality. Adnan is passionate about innovation, process improvement, and building products that truly solve real-world problems.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AuthorBio;
