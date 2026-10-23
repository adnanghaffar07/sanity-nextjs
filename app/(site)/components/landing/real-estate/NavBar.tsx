"use client";

// Fixed header for the real estate landing page: section links that
// smooth-scroll, a "Get free audit" button, and a full-screen menu on phones.

import { useEffect, useState, type MouseEvent } from "react";
import Image from "next/image";
import Link from "next/link";

export const LANDING_PATH = "/real-estate-ai-automation";

const NAV_LINKS = [
  { name: "Services", href: "#services" },
  { name: "How it works", href: "#how-it-works" },
  { name: "Results", href: "#results" },
];

function ArrowIcon({ className }: { className: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
    </svg>
  );
}

// Yellow "Get free audit" link with a shine on hover.
function AuditButton({ onClick, large }: { onClick: (e: MouseEvent<HTMLAnchorElement>) => void; large?: boolean }) {
  return (
    <a
      href="#audit"
      onClick={onClick}
      className={`group relative overflow-hidden flex items-center bg-[#f7e022] font-semibold text-black transition-all duration-300 ${
        large
          ? "w-full justify-center gap-3 rounded-2xl px-4 py-3 text-lg shadow-2xl shadow-[#f7e022]/20 hover:scale-[1.02] hover:bg-[#ffe81a] active:scale-[0.98]"
          : "gap-2 rounded-lg px-5 py-2 text-sm hover:bg-[#e6cd1a] hover:shadow-lg hover:shadow-[#f7e022]/25 active:scale-95"
      }`}
    >
      <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
      <span className="relative whitespace-nowrap">Get free audit</span>
      <ArrowIcon className={`relative transition-transform duration-300 group-hover:translate-x-1 ${large ? "h-5 w-5" : "h-4 w-4"}`} />
    </a>
  );
}

export default function RealEstateNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    const onResize = () => window.innerWidth >= 768 && setMenuOpen(false);
    window.addEventListener("scroll", onScroll);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  // Stop the page behind from scrolling while the phone menu is open.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const goTo = (selector: string, name?: string) => (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (name) setActiveLink(name);
    document.querySelector(selector)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setMenuOpen(false);
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-black/95 backdrop-blur-xl border-b border-[#3498db]/20 ${scrolled ? "py-3" : "py-4"}`}>
        <div className="px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <Link href={LANDING_PATH} onClick={() => setMenuOpen(false)} className="relative z-20">
            <Image src="/logo.svg" alt="CodeAutomation.ai Logo" width={240} height={48} priority className="h-8 sm:h-10 md:h-12 w-auto transition-transform duration-300 hover:scale-105" />
          </Link>

          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {NAV_LINKS.map((link) => {
              const active = activeLink === link.name;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={goTo(link.href, link.name)}
                  className={`group relative py-2 text-sm font-medium tracking-wide transition-all duration-300 ${active ? "text-[#3498db]" : "text-white/70 hover:text-white"}`}
                >
                  {link.name}
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 w-full rounded-full bg-[#3498db] origin-left transition-all duration-300 ${
                      active ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100"
                    }`}
                  />
                </a>
              );
            })}
          </div>

          <div className="hidden md:block">
            <AuditButton onClick={goTo("#audit")} />
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            className="md:hidden relative z-20 flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:scale-105 active:scale-95"
            aria-label="Open menu"
          >
            <div className="relative h-4 w-5">
              {["top-0", "top-2", "top-4"].map((top) => (
                <span key={top} className={`absolute left-0 ${top} h-0.5 w-full rounded-full bg-white`} />
              ))}
            </div>
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="fixed inset-0 z-[999] md:hidden overflow-hidden bg-black text-white">
          <div className="absolute inset-0">
            <div className="absolute top-[-120px] right-[-80px] h-[300px] w-[300px] rounded-full bg-[#3498db]/20 blur-3xl" />
            <div className="absolute bottom-[-150px] left-[-100px] h-[300px] w-[300px] rounded-full bg-[#f7e022]/10 blur-3xl" />
            <div
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage: "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />
          </div>

          <div className="relative flex min-h-screen flex-col">
            <div className="flex items-center justify-between px-5 pt-5">
              <Link href={LANDING_PATH} onClick={() => setMenuOpen(false)} className="flex items-center rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-xl">
                <Image src="/logo.svg" alt="CodeAutomation.ai Logo" width={160} height={32} className="h-8 w-auto" />
              </Link>
              <button
                type="button"
                onClick={() => setMenuOpen(false)}
                className="group flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:bg-white/10 active:scale-95"
                aria-label="Close menu"
              >
                <svg className="h-6 w-6 text-white transition-transform duration-300 group-hover:rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="flex flex-1 flex-col justify-center px-6 pb-10 pt-8">
              <div className="mb-10">
                <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-[#3498db]">Navigation</p>
                <h2 className="max-w-[260px] text-2xl font-bold leading-tight">AI systems for modern real estate teams.</h2>
              </div>

              <div className="space-y-4">
                {NAV_LINKS.map((link, index) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={goTo(link.href, link.name)}
                    className="group relative overflow-hidden flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 backdrop-blur-xl transition-all duration-300 hover:border-[#3498db]/40 hover:bg-white/[0.06] hover:translate-x-1"
                  >
                    <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-gradient-to-r from-[#3498db]/10 to-transparent" />
                    <div className="relative flex items-center gap-4">
                      <span className="text-sm font-medium text-white/30">0{index + 1}</span>
                      <span className={`text-xl font-semibold transition-colors duration-300 ${activeLink === link.name ? "text-[#3498db]" : "text-white"}`}>{link.name}</span>
                    </div>
                    <svg
                      className="relative h-5 w-5 text-white/40 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#3498db]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-6-6l6 6-6 6" />
                    </svg>
                  </a>
                ))}
              </div>

              <div className="mt-10">
                <AuditButton onClick={goTo("#audit")} large />
              </div>

              <div className="mt-10 border-t border-white/10 pt-6">
                <p className="text-sm leading-relaxed text-white/40">
                  AI automation systems for brokers, property managers, and real estate operators across the USA.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Space taken by the fixed navbar */}
      <div className="h-[72px] sm:h-[76px] md:h-[84px]" />
    </>
  );
}
