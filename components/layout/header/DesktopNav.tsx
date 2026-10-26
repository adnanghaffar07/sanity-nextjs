"use client";

import { useState, type ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { CgArrowLongRight } from "react-icons/cg";
import { ABOUT_COLUMNS, INDUSTRY_LINKS, SERVICE_COLUMNS, TOP_LINKS, type NavCard } from "./nav-links";

type MenuId = "services" | "about";

function Chevron({ open }: { open: boolean }) {
  return (
    <svg fill="white" viewBox="0 0 20 20" aria-hidden="true" className={`inline size-4 ml-1 transition-transform duration-200 ${open ? "rotate-180" : ""}`}>
      <path
        fillRule="evenodd"
        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function CardLink({ card }: { card: NavCard }) {
  return (
    <Link href={card.href} className="inline-flex items-start p-3 -m-3 transition duration-150 ease-in-out rounded-xl hover:bg-gray-50">
      <Image src={card.icon} alt={card.title} height={24} width={24} />
      <div className="ml-4">
        <p className="text-base font-medium text-black">{card.title}</p>
        <p className="mt-1 text-sm text-gray-500">{card.description}</p>
      </div>
    </Link>
  );
}

// A top-level item that opens a mega menu on hover (or click, for touch screens).
function MenuItem({ id, label, open, setOpen, panelClass, children }: {
  id: MenuId;
  label: string;
  open: MenuId | null;
  setOpen: (id: MenuId | null) => void;
  panelClass: string;
  children: ReactNode;
}) {
  const isOpen = open === id;
  return (
    <li className="relative" onMouseEnter={() => setOpen(id)} onMouseLeave={() => setOpen(null)}>
      <button
        type="button"
        aria-expanded={isOpen}
        className="flex items-center text-white px-4 py-2 hover:underline cursor-pointer"
        onClick={() => setOpen(isOpen ? null : id)}
      >
        {label}
        <Chevron open={isOpen} />
      </button>
      <div
        className={`absolute z-10 w-screen px-2 mt-2 transform -translate-x-1/2 transition-all duration-300 ${panelClass} ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
        onClick={() => setOpen(null)}
      >
        <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
          <div className="relative grid gap-6 px-5 py-6 bg-white sm:gap-8 sm:p-8">{children}</div>
        </div>
      </div>
    </li>
  );
}

// The header links on large screens (xl and up).
export default function DesktopNav() {
  const [open, setOpen] = useState<MenuId | null>(null);

  return (
    <ul className="nav-links relative flex items-center gap-2">
      <li>
        <Link href="/" className="hover:underline text-white px-4 py-2 block">
          Home
        </Link>
      </li>

      <MenuItem id="services" label="Services" open={open} setOpen={setOpen} panelClass="max-w-5xl left-[140%]">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {SERVICE_COLUMNS.map((column, index) => (
            <div key={index} className="grid grid-cols-1 gap-8">
              {column.map((card) => (
                <CardLink key={card.href} card={card} />
              ))}
              {index === 0 && (
                <Link href="/services">
                  <p className="flex gap-3 text-sm font-bold text-black hover:text-[#0a8ffc] hover:underline mt-8">
                    View all
                    <CgArrowLongRight className="h-6 w-6 text-[#5b9ed2]" />
                  </p>
                </Link>
              )}
            </div>
          ))}
          <div className="grid grid-cols-1 gap-3 p-2 lg:p-0 bg-gray-50 rounded-2xl">
            <div className="grid items-start h-1/2 gap-6 px-5 py-6 sm:gap-8 sm:p-8">
              <p className="text-base font-medium text-black">Industries</p>
              <div className="space-y-3">
                {INDUSTRY_LINKS.map((link) => (
                  <Link key={link.href} href={link.href} className="flex items-start text-sm text-[#374151] rounded-lg">
                    {link.label}
                  </Link>
                ))}
                <Link href="/about/industries" className="flex items-start text-sm font-semibold text-[#242527] rounded-lg">
                  View All
                </Link>
              </div>
            </div>
          </div>
        </div>
      </MenuItem>

      <MenuItem id="about" label="About Us" open={open} setOpen={setOpen} panelClass="max-w-4xl left-1/2">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
          {ABOUT_COLUMNS.map((column, index) => (
            <div key={index} className="grid grid-cols-1 gap-10">
              {column.map((card) => (
                <CardLink key={card.href} card={card} />
              ))}
            </div>
          ))}
        </div>
      </MenuItem>

      {TOP_LINKS.map((link) => (
        <li key={link.href}>
          <Link href={link.href} className="hover:underline text-white px-4 py-2 block">
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}
