import React from "react";

export const metadata = {
  title: "Anti-Spam Policy | CodeAutomation",
  description:
    "CodeAutomation.ai is committed to fighting spam. We do not send unsolicited messages and prohibit third parties from promoting our services through spam.",
  keywords: ["Anti-Spam Policy", "CodeAutomation", "no unsolicited messages"],
  alternates: {
    canonical: "https://codeautomation.ai/antispampolicy",
  },
};

const AntiSpamPolicy = () => {
  return (
    <section>
      <div className="flex overflow-hidden relative flex-col w-full font-light text-white h-[350px] lg:min-h-[500px]">
        <img
          className="top-0 left-0 object-cover absolute inset-0 size-full"
          src="/anti-spam-policy.png"
          alt="anti spam policy"
        />
        <div className="w-full h-[350px] lg:h-[500px] opacity-65 absolute z-[1] bg-black"></div>
        <div className="flex relative flex-col items-center justify-center text-center max-w-4xl mx-auto px-6 z-[2]">
          <h1 className="lg:text-4xl text-2xl font-bold capitalize">
            Anti-Spam Policy
          </h1>
          <p className="md:text-xl text-lg mt-4">
            CodeAutomation strictly prohibits unsolicited emails and follows
            best practices to ensure all communication is permission-based.
          </p>
        </div>
      </div>

      <div className="mt-10 max-w-4xl mx-auto px-6 py-10 bg-white shadow-md rounded-lg mb-10">
        <h2 className="text-2xl font-bold mb-4">Our Commitment</h2>
        <p className="text-gray-700 mb-6">
          CodeAutomation.ai does not send spam or unsolicited commercial email
          (UCE). We only communicate with individuals and organizations who have
          expressly opted in to receive information from us or with whom we have
          an existing business relationship.
        </p>

        <h2 className="text-2xl font-bold mb-4">Policy Details</h2>
        <ul className="list-disc list-inside text-gray-700 mb-6">
          <li>
            We never sell, rent, or share email addresses with third parties for
            unsolicited marketing.
          </li>
          <li>
            All emails we send include clear identification of the sender and a
            valid return email address.
          </li>
          <li>
            Every marketing email contains an easy and effective opt-out or
            unsubscribe option.
          </li>
          <li>
            Affiliates, partners, and third parties are strictly prohibited from
            promoting our services through spam.
          </li>
        </ul>

        <h2 className="text-2xl font-bold mb-4">Reporting Spam</h2>
        <p className="text-gray-700 mb-6">
          If you believe you have received an unsolicited message promoting
          CodeAutomation, please forward the full email with headers to{" "}
          <a
            href="mailto:abuse@codeautomation.ai"
            className="text-blue-500 hover:underline"
          >
            abuse@codeautomation.ai
          </a>
          . We investigate all reports and take immediate action if violations
          are found.
        </p>

        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>Email: abuse@codeautomation.ai</li>
          <li>Phone: 850.558.4691</li>
          <li>
            Website:{" "}
            <a
              href="https://codeautomation.ai/"
              className="text-blue-500 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://codeautomation.ai
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default AntiSpamPolicy;
