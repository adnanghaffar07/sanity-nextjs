'use client';

import ContactForm from './ContactForm';


export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <div className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-800 py-20 px-4 text-white sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.25),_transparent_35%)] opacity-70" />
        <div className="relative mx-auto max-w-7xl">
          <div className="grid mt-10 md:mt-0 gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="max-w-2xl">
              <p className="inline-flex rounded-full bg-sky-500/20 px-4 py-2 text-sm font-semibold uppercase tracking-[0.24em] text-sky-200">
                Contact Us
              </p>
              <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl">
                Start your project with CodeAutomation.ai
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-200">
                Reach out for consulting, service inquiries, career opportunities, or any other request. Your message will be emailed to our team and sent into GoHighLevel with the page you submitted from.
              </p>
              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl bg-slate-900/80 p-6 shadow-xl shadow-slate-950/20 ring-1 ring-white/10">
                  <p className="text-sm uppercase tracking-[0.22em] text-sky-300">Quick response</p>
                  <p className="mt-3 text-2xl font-semibold text-white">24 hours</p>
                </div>
                <div className="rounded-3xl bg-slate-900/80 p-6 shadow-xl shadow-slate-950/20 ring-1 ring-white/10">
                  <p className="text-sm uppercase tracking-[0.22em] text-sky-300">Trusted by</p>
                  <p className="mt-3 text-2xl font-semibold text-white">200+ clients</p>
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
