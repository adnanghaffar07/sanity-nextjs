"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineClose } from "react-icons/ai";
import { CONTACT_URL, MOBILE_ABOUT_LINKS, MOBILE_SERVICE_LINKS, PHONE, TOP_LINKS, type NavLink } from "./nav-links";

const rowClass = "flex items-center px-5 py-3 text-gray-800 hover:bg-gray-50 transition-colors";
const subLinkClass = "block px-8 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors";

function Section({ label, links, open, onToggle, onNavigate, footer }: {
  label: string;
  links: NavLink[];
  open: boolean;
  onToggle: () => void;
  onNavigate: () => void;
  footer?: NavLink;
}) {
  return (
    <li>
      <button type="button" onClick={onToggle} aria-expanded={open} className={`${rowClass} justify-between w-full`}>
        <span>{label}</span>
        <svg className={`w-5 h-5 transition-transform duration-200 ${open ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-[800px]" : "max-h-0"}`}>
        <div className="bg-gray-50/50 py-2 space-y-2">
          {links.map((link) => (
            <Link key={link.href} href={link.href} onClick={onNavigate} className={subLinkClass}>
              {link.label}
            </Link>
          ))}
          {footer && (
            <Link href={footer.href} onClick={onNavigate} className={`${subLinkClass} font-medium text-[#0a8ffc]`}>
              {footer.label}
            </Link>
          )}
        </div>
      </div>
    </li>
  );
}

// Full-screen menu that slides in from the left on phones and tablets.
export default function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [section, setSection] = useState<"services" | "about" | null>(null);
  const toggle = (id: "services" | "about") => setSection((current) => (current === id ? null : id));
  const close = () => {
    setSection(null);
    onClose();
  };

  // Stop the page behind from scrolling while the menu is open, and start
  // with both sections collapsed the next time it opens.
  useEffect(() => {
    if (!open) setSection(null);
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 z-40 xl:hidden ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        onClick={close}
      />
      <div
        className={`fixed top-0 left-0 h-full w-full bg-white shadow-2xl z-50 xl:hidden transform transition-transform duration-300 ease-out ${open ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex flex-col h-full overflow-y-auto">
          <div className="flex items-center justify-between p-5 border-b border-gray-100">
            <Image src="/logo.svg" alt="logo" width={160} height={32} className="h-8 w-auto" />
            <button type="button" onClick={close} className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors" aria-label="Close menu">
              <AiOutlineClose size={20} className="text-gray-800" />
            </button>
          </div>

          <nav className="flex-1 py-4">
            <ul className="space-y-1">
              <li>
                <Link href="/" onClick={close} className={rowClass}>
                  Home
                </Link>
              </li>
              <Section
                label="Services"
                links={MOBILE_SERVICE_LINKS}
                open={section === "services"}
                onToggle={() => toggle("services")}
                onNavigate={close}
                footer={{ href: "/services", label: "View All Services →" }}
              />
              <Section label="About Us" links={MOBILE_ABOUT_LINKS} open={section === "about"} onToggle={() => toggle("about")} onNavigate={close} />
              {TOP_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} onClick={close} className={rowClass}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="p-5 border-t border-gray-100 space-y-3">
            <Link
              href={PHONE.href}
              onClick={close}
              className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-gray-900 text-white rounded-xl hover:bg-gray-800 transition-colors"
            >
              <Image src="/telephone.png" alt="Phone" width={18} height={18} />
              <span>{PHONE.label}</span>
            </Link>
            <Link
              href={CONTACT_URL}
              onClick={close}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-full px-4 py-3 border border-gray-300 text-gray-800 rounded-xl hover:bg-gray-50 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
