import ContactForm from '@/components/forms/ContactForm';


export const metadata = {
  title: "Contact CodeAutomation | AI Native Development Company",
  description:
    "Contact CodeAutomation for custom AI development, QA consultancy, and business automation services. Schedule a meeting with Adnan Ghaffar.",
  keywords: [
    "CodeAutomation",
    "AI development",
    "QA consultancy",
    "business automation"
  ],
  alternates: {
    canonical: "https://codeautomation.ai/contact",
  },
};

export default function ContactPage() {
  return (
<main className="min-h-screen bg-white text-slate-900">
  <div className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-800 py-20 px-4 text-white sm:px-6 lg:px-8">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(247,224,34,0.2),_transparent_35%)] opacity-70" />
    <div className="relative mx-auto max-w-7xl">
      <div className="grid mt-10 md:mt-0 gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="max-w-2xl">
          <p className="inline-flex rounded-full bg-[#f7e022]/20 px-4 py-2 text-sm font-semibold uppercase tracking-[0.24em] text-[#f7e022]">
            Get In Touch
          </p>
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Let&apos;s Build Something Amazing Together
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-200">
            Have a project in mind? Need expert guidance? We&apos;re here to help. Whether it&apos;s AI automation, web development, or strategic consulting, our team is ready to turn your vision into reality.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl bg-slate-900/80 p-6 shadow-xl shadow-slate-950/20 ring-1 ring-[#f7e022]/30">
              <p className="text-sm uppercase tracking-[0.22em] text-[#f7e022]">Response Time</p>
              <p className="mt-3 text-2xl font-semibold text-white">Within 24 hours</p>
            </div>
            <div className="rounded-3xl bg-slate-900/80 p-6 shadow-xl shadow-slate-950/20 ring-1 ring-[#f7e022]/30">
              <p className="text-sm uppercase tracking-[0.22em] text-[#f7e022]">Happy Clients</p>
              <p className="mt-3 text-2xl font-semibold text-white">250+ worldwide</p>
            </div>
          </div>
        </div>
        <div className="mt-10 md:mt-24">
          <ContactForm />
        </div>
      </div>
    </div>
  </div>
</main>
  );
}
