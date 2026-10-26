"use client";

// The floating header on every page: logo, navigation (mega menus on desktop,
// a slide-in menu on phones and tablets) and the phone number.

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import DesktopNav from "./header/DesktopNav";
import MobileMenu from "./header/MobileMenu";
import { PHONE } from "./header/nav-links";

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="flex flex-col items-center lg:px-10 px-5 lg:pb-0 py-4 xl:pt-8 w-full max-md:px-4 max-md:max-w-full flex-grow relative top-0 z-50 xl:bg-transparent xl:h-auto h-[72px] -mb-[72px] md:-mb-[116px]">
      <div className="flex gap-5 justify-between items-center px-8 py-3.5 w-full border border-solid shadow-md backdrop-blur-[36px] bg-black bg-opacity-20 border-white border-opacity-10 rounded-[62px] max-md:flex-wrap max-md:px-5 max-md:max-w-full">
        <div className="flex items-center w-full xl:w-auto justify-between xl:justify-start gap-3 relative z-[100]">
          <Link href="/" className="hover:underline my-auto">
            <Image src="/logo.svg" alt="logo" width={230} height={46} priority className="self-start max-w-full aspect-[5] xl:w-[230px] w-[200px] h-auto" />
          </Link>
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="xl:hidden flex items-center justify-center w-10 h-10 z-[100]"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <AiOutlineClose size={22} className="text-white" /> : <AiOutlineMenu size={22} className="text-white" />}
          </button>
        </div>

        <div className="hidden xl:flex flex-1 justify-center">
          <DesktopNav />
        </div>

        <div className="hidden xl:flex items-center justify-end">
          <Link
            href={PHONE.href}
            className="hidden xl:flex gap-2 self-stretch px-4 pt-4 pb-4 text-base font-medium leading-5 rounded-[50px] text-neutral-900 bg-standardCodeAutomation"
          >
            <Image src="/telephone.png" alt="Phone-Icon" width={20} height={20} />
            <div className="my-auto text-nowrap text-black">{PHONE.label}</div>
            <Image src="/USA-Flag.png" alt="USA-Flag-Icon" width={20} height={20} />
          </Link>
        </div>
      </div>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </div>
  );
}
