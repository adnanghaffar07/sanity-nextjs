"use client";
import { usePathname } from "next/navigation";
import { useState, useEffect, useCallback } from "react";
import { CgArrowLongRight } from "react-icons/cg";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Image from "next/image";
import Link from "next/link";

const linkAI = "ai-agent";
const linkML = "ml-services";
const devops = "ai-devops";
const linkUrlCMS1 = "custom-cms-development-services";
const linkUrlCMS = "headless-cms-development-services";
const linkUrlSoft = "custom-software-development-services";
const linkUrlAuto = "qa-testing-services";
const linkUrlDigital = "ui-ux-design-services";
const linkMob = "mobile-app-development-services";
const linkRobotic = "rpa-services";
const linkIntegrate = "automation-integration";
const linkAIAutomation = "ai-business-automation-solutions";
const linkAISoftware = "ai-software-development-services";

// Trending
const linkN8 = "automation-integration/n8n-automation";
const linkDataEN = "data-engineer";
const linkIOT = "iot-services";



export default function SiteHeader() {
  const pathname = usePathname() || "/";
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [activeDesktopMenu, setActiveDesktopMenu] = useState<"services" | "about" | null>(null);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    if (mobileMenuOpen) {
      setServicesOpen(false);
      setAboutOpen(false);
    }
  };

  const toggleServices = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setServicesOpen(!servicesOpen);
    setAboutOpen(false);
  };

  const toggleAbout = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setAboutOpen(!aboutOpen);
    setServicesOpen(false);
  };

  const closeMenu = () => {
    setMobileMenuOpen(false);
    setServicesOpen(false);
    setAboutOpen(false);
    setActiveDesktopMenu(null);
  };

  return (
    <div className="flex flex-col items-center lg:px-10 px-5 lg:pb-0 py-4 xl:pt-8 w-full max-md:px-4 max-md:max-w-full flex-grow relative top-0 z-50 xl:bg-transparent xl:h-auto h-[72px] -mb-[72px] md:-mb-[116px]">
      <div className="flex gap-5 justify-between items-center px-8 py-3.5 w-full border border-solid shadow-md backdrop-blur-[36px] bg-black bg-opacity-20 border-white border-opacity-10 rounded-[62px] max-md:flex-wrap max-md:px-5 max-md:max-w-full">

        {/* FIX 4: Mobile header — logo + burger with justify-around */}
        <div className="flex items-center w-full xl:w-auto justify-between xl:justify-start gap-3 relative z-[100]">
          <Link href="/" className="hover:underline my-auto">
            <img
              src="/logo.svg"
              className="self-start max-w-full aspect-[5] xl:w-[230px] w-[200px]"
              alt="logo"
            />
          </Link>
          <button
            onClick={toggleMobileMenu}
            className="xl:hidden flex items-center justify-center w-10 h-10  z-[100]"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? (
              <AiOutlineClose size={22} className="text-white" />
            ) : (
              <AiOutlineMenu size={22} className="text-white" />
            )}
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden xl:flex flex-1 justify-center">
          <ul className="nav-links relative flex items-center gap-2">
            <li>
              <Link href="/" className="hover:underline text-white px-4 py-2 block">
                Home
              </Link>
            </li>
            <li
              className="relative"
              onMouseEnter={() => setActiveDesktopMenu("services")}
              onMouseLeave={() => setActiveDesktopMenu(null)}
            >
              <button
                className="flex items-center text-white px-4 py-2 hover:underline cursor-pointer"
                onClick={() =>
                  setActiveDesktopMenu((prev) => (prev === "services" ? null : "services"))
                }
              >
                Services
                <svg
                  fill="white"
                  viewBox="0 0 20 20"
                  className={`inline size-4 ml-1 transition-transform duration-200 ${activeDesktopMenu === "services" ? "rotate-180" : ""
                    }`}
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              {/* FIX 1: Services mega menu shifted more right — left-[75%] instead of left-[55%] */}
              <div
                className={`absolute z-10 w-screen max-w-5xl px-2 mt-2 transform -translate-x-1/2 left-[140%] transition-all duration-300 ${activeDesktopMenu === "services" ? "opacity-100 visible" : "opacity-0 invisible"
                  }`}
                onClick={() => setActiveDesktopMenu(null)}
              >
                <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                  <div className="relative grid gap-6 px-5 py-6 bg-white sm:gap-8 sm:p-8">
                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                      <div className="grid grid-cols-1 gap-8">
                        <Link
                          href={`/services/${linkAI}`}
                          className="inline-flex items-start p-3 -m-3 transition duration-150 ease-in-out rounded-xl hover:bg-gray-50"
                        >
                          <div>
                            <Image
                              src="/logo-web-component.svg"
                              alt="AI Development Services"
                              height={24}
                              width={24}
                              className="text-black"
                            />
                          </div>
                          <div className="ml-4">
                            <p className="text-base font-medium text-black">AI Agent Development</p>
                            <p className="mt-1 text-sm text-gray-500">Informed Decision Making Process</p>
                          </div>
                        </Link>
                        <Link
                          href={`/services/${linkUrlSoft}`}
                          className="inline-flex items-start p-3 -m-3 transition duration-150 ease-in-out rounded-xl hover:bg-gray-50"
                        >
                          <div>
                            <Image
                              src="/logo-javascript.svg"
                              alt="Software Development"
                              height={24}
                              width={24}
                              className="text-black"
                            />
                          </div>
                          <div className="ml-4">
                            <p className="text-base font-medium text-black">Software Development</p>
                            <p className="mt-1 text-sm text-gray-500">Desktop and Web Development Solutions</p>
                          </div>
                        </Link>
                        <Link
                          href={`/services/${linkAIAutomation}`}
                          className="inline-flex items-start p-3 -m-3 transition duration-150 ease-in-out rounded-xl hover:bg-gray-50"
                        >
                          <div>
                            <Image
                              src="/logo-buffer.svg"
                              alt="AI Automation"
                              height={24}
                              width={24}
                              className="text-black"
                            />
                          </div>
                          <div className="ml-4">
                            <p className="text-base font-medium text-black">AI Automation</p>
                            <p className="mt-1 text-sm text-gray-500">Increase Efficiency with AI Workflows</p>
                          </div>
                        </Link>
                        <Link
                          href={`/services/${linkUrlCMS1}`}
                          className="inline-flex items-start p-3 -m-3 transition duration-150 ease-in-out rounded-xl hover:bg-gray-50"
                        >
                          <div>
                            <Image
                              src="/logo-codepen.svg"
                              alt="CMS"
                              height={24}
                              width={24}
                              className="text-black"
                            />
                          </div>
                          <div className="ml-4">
                            <p className="text-base font-medium text-black">CMS</p>
                            <p className="mt-1 text-sm text-gray-500">Manage Digital Content</p>
                          </div>
                        </Link>
                        <Link href="/services">
                          <p className="flex gap-3 text-sm font-bold text-black hover:text-[#0a8ffc] hover:underline mt-8">
                            View all
                            <CgArrowLongRight className="h-6 w-6 text-[#5b9ed2]" />
                          </p>
                        </Link>
                      </div>
                      <div className="grid grid-cols-1 gap-8">
                        <Link
                          href={`/services/${linkUrlAuto}`}
                          className="inline-flex items-start p-3 -m-3 transition duration-150 ease-in-out rounded-xl hover:bg-gray-50"
                        >
                          <div>
                            <Image
                              src="/logo-apple-ar.svg"
                              alt="QA Testing & Automation"
                              height={24}
                              width={24}
                              className="text-black"
                            />
                          </div>
                          <div className="ml-4">
                            <p className="text-base font-medium text-black">QA Testing & Automation</p>
                            <p className="mt-1 text-sm text-gray-500">Ensure the Highest Quality</p>
                          </div>
                        </Link>
                        <Link
                          href={`/services/${linkMob}`}
                          className="inline-flex items-start p-3 -m-3 transition duration-150 ease-in-out rounded-xl hover:bg-gray-50"
                        >
                          <div>
                            <Image
                              src="/logo-react.svg"
                              alt="Mobile App development"
                              height={24}
                              width={24}
                              className="text-black"
                            />
                          </div>
                          <div className="ml-4">
                            <p className="text-base font-medium text-black">Mobile App development</p>
                            <p className="mt-1 text-sm text-gray-500">Transform Idea into Market Leading App</p>
                          </div>
                        </Link>
                        <Link
                          href={`/services/${linkAISoftware}`}
                          className="inline-flex items-start p-3 -m-3 transition duration-150 ease-in-out rounded-xl hover:bg-gray-50"
                        >
                          <div>
                            <Image
                              src="/logo-ionitron.svg"
                              alt="AI Software Development"
                              height={24}
                              width={24}
                              className="text-black"
                            />
                          </div>
                          <div className="ml-4">
                            <p className="text-base font-medium text-black">AI Software Development</p>
                            <p className="mt-1 text-sm text-gray-500">Scale with AI Software Solutions</p>
                          </div>
                        </Link>
                        <Link
                          href={`/services/${linkUrlDigital}`}
                          className="inline-flex items-start p-3 -m-3 transition duration-150 ease-in-out rounded-xl hover:bg-gray-50"
                        >
                          <div>
                            <Image
                              src="/logo-figma.svg"
                              alt="Design Services"
                              height={24}
                              width={24}
                              className="text-black"
                            />
                          </div>
                          <div className="ml-4">
                            <p className="text-base font-medium text-black">Design Services</p>
                            <p className="mt-1 text-sm text-gray-500">Boost your Online Presence</p>
                          </div>
                        </Link>
                      </div>
                      {/* Industries links */}
                      <div className="grid grid-cols-1 gap-3 p-2 lg:p-0 bg-gray-50 rounded-2xl">
                        <div className="grid items-start h-1/2 gap-6 px-5 py-6 sm:gap-8 sm:p-8">
                          <p className="text-base font-medium text-black">Industries</p>

                          <div className="space-y-3">
                            <Link
                              href="/about/industries#healthcare"
                              className="flex items-start text-sm transition rounded-lg"
                              style={{ color: "#374151", fontSize: "14px" }}
                            >
                              Healthcare
                            </Link>

                            <Link
                              href="/about/industries#ecommerce-retail"
                              className="flex items-start text-sm transition rounded-lg"
                              style={{ color: "#374151", fontSize: "14px" }}
                            >
                              E-Commerce & Retail
                            </Link>

                            <Link
                              href="/about/industries#finance"
                              className="flex items-start text-sm transition rounded-lg"
                              style={{ color: "#374151", fontSize: "14px" }}
                            >
                              Finance
                            </Link>

                            <Link
                              href="/about/industries#real-estate"
                              className="flex items-start text-sm transition rounded-lg"
                              style={{ color: "#374151", fontSize: "14px" }}
                            >
                              Real Estate
                            </Link>

                            <Link
                              href="/about/industries#manufacturing"
                              className="flex items-start text-sm transition rounded-lg"
                              style={{ color: "#374151", fontSize: "14px" }}
                            >
                              Manufacturing
                            </Link>

                            <Link
                              href="/about/industries#industrial-tech"
                              className="flex items-start text-sm transition rounded-lg"
                              style={{ color: "#374151", fontSize: "14px" }}
                            >
                              Industrial Tech
                            </Link>

                            <Link
                              href="/about/industries#logistics"
                              className="flex items-start text-sm transition rounded-lg"
                              style={{ color: "#374151", fontSize: "14px" }}
                            >
                              Logistics
                            </Link>

                            <Link
                              href="/about/industries#education"
                              className="flex items-start text-sm transition rounded-lg"
                              style={{ color: "#374151", fontSize: "14px" }}
                            >
                              Education
                            </Link>

                            <Link
                              href="https://codeautomation.ai/about/industries"
                              className="flex items-start text-sm font-medium transition rounded-lg"
                              style={{ color: "#242527", fontSize: "14px", fontWeight: "600" }}
                            >
                              View All
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li
              className="relative"
              onMouseEnter={() => setActiveDesktopMenu("about")}
              onMouseLeave={() => setActiveDesktopMenu(null)}
            >
              <button
                className="flex items-center text-white px-4 py-2 hover:underline cursor-pointer"
                onClick={() =>
                  setActiveDesktopMenu((prev) => (prev === "about" ? null : "about"))
                }
              >
                About Us
                <svg
                  fill="white"
                  viewBox="0 0 20 20"
                  className={`inline size-4 ml-1 transition-transform duration-200 ${activeDesktopMenu === "about" ? "rotate-180" : ""
                    }`}
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <div
                className={`absolute z-10 w-screen max-w-4xl px-2 mt-2 transform -translate-x-1/2 left-1/2 transition-all duration-300 ${activeDesktopMenu === "about" ? "opacity-100 visible" : "opacity-0 invisible"
                  }`}
                onClick={() => setActiveDesktopMenu(null)}
              >
                <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                  <div className="relative grid gap-6 px-5 py-2 bg-white sm:gap-8 sm:p-8">
                    <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">

                      {/* Column 1 */}
                      <div className="grid grid-cols-1 gap-10">
                        <Link href="/about/service-summary" className="inline-flex items-start p-3 -m-3 transition rounded-xl hover:bg-gray-50">
                          <div>
                            <Image src="/documents-sharp.svg" alt="Service Summary" height={24} width={24} />
                          </div>
                          <div className="ml-4">
                            <p className="text-base font-medium text-black">Service Summary</p>
                            <p className="mt-1 text-sm text-gray-500">Service Essence</p>
                          </div>
                        </Link>

                        <Link href="/partnership-program" className="inline-flex items-start p-3 -m-3 transition rounded-xl hover:bg-gray-50">
                          <div>
                            <Image src="/partnership-icon.svg" alt="partnership" height={24} width={24} />
                          </div>
                          <div className="ml-4">
                            <p className="text-base font-medium text-black">Partner with Us</p>
                            <p className="mt-1 text-sm text-gray-500">Grow Together</p>
                          </div>
                        </Link>

                        <Link href="/value-blueprints" className="inline-flex items-start p-3 -m-3 transition rounded-xl hover:bg-gray-50">
                          <div>
                            <Image src="/cash.svg" alt="cash" height={24} width={24} />
                          </div>
                          <div className="ml-4">
                            <p className="text-base font-medium text-black">Value BluePrints</p>
                            <p className="mt-1 text-sm text-gray-500">Efficient Deployment</p>
                          </div>
                        </Link>

                        <Link href="/about/happy-clients" className="inline-flex items-start p-3 -m-3 transition rounded-xl hover:bg-gray-50">
                          <div>
                            <Image src="/clients-icon.svg" alt="Clients" height={24} width={24} />
                          </div>
                          <div className="ml-3">
                            <p className="text-base font-medium text-black">Happy Clients</p>
                            <p className="mt-1 text-sm text-gray-500">Trusted Partnerships</p>
                          </div>
                        </Link>
                      </div>

                      {/* Column 2 */}
                      <div className="grid grid-cols-1 gap-10">
                        <Link href="/about/ai-tools-for-website-and-app-development" className="inline-flex items-start p-3 -m-3 transition rounded-xl hover:bg-gray-50">
                          <div>
                            <Image src="/aperture-sharp.svg" alt="AI Tools" height={24} width={24} />
                          </div>
                          <div className="ml-3">
                            <p className="text-base font-medium text-black">AI Tools</p>
                            <p className="mt-1 text-sm text-gray-500">Web & App Dev</p>
                          </div>
                        </Link>

                        <Link href="/adnan-ghaffar-ceo-codeautomation" className="inline-flex items-start p-3 -m-3 transition rounded-xl hover:bg-gray-50">
                          <div>
                            <Image src="/person-sharp.svg" alt="About CEO" height={24} width={24} />
                          </div>
                          <div className="ml-4">
                            <p className="text-base font-medium text-black">About CEO</p>
                            <p className="mt-1 text-sm text-gray-500">Founder & AI Leader</p>
                          </div>
                        </Link>

                        <Link href="/about/discovery-process" className="inline-flex items-start p-3 -m-3 transition rounded-xl hover:bg-gray-50">
                          <div>
                            <Image src="/server.svg" alt="Discovery Process" height={24} width={24} />
                          </div>
                          <div className="ml-4">
                            <p className="text-base font-medium text-black">Discovery Process</p>
                            <p className="mt-1 text-sm text-gray-500">Innovative Strategy</p>
                          </div>
                        </Link>

                        <Link href="/case-studies" className="inline-flex items-start p-3 -m-3 transition rounded-xl hover:bg-gray-50">
                          <div>
                            <Image src="/library.svg" alt="Case-Studies" height={24} width={24} />
                          </div>
                          <div className="ml-4">
                            <p className="text-base font-medium text-black">Case-Studies</p>
                            <p className="mt-1 text-sm text-gray-500">Success Stories</p>
                          </div>
                        </Link>
                      </div>

                      {/* Column 3 */}
                      <div className="grid grid-cols-1 gap-10">
                        <Link href="/lifeatca" className="inline-flex items-start p-3 -m-3 transition rounded-xl hover:bg-gray-50">
                          <div>
                            <Image src="/images.svg" alt="Life At CA" height={24} width={24} />
                          </div>
                          <div className="ml-4">
                            <p className="text-base font-medium text-black">Life At CA</p>
                            <p className="mt-1 text-sm text-gray-500">Employee Experiences</p>
                          </div>
                        </Link>

                        <Link href="/offshore-software-development" className="inline-flex items-start p-3 -m-3 transition rounded-xl hover:bg-gray-50">
                          <div>
                            <Image src="/globe-sharp.svg" alt="Offshore Development" height={24} width={24} />
                          </div>
                          <div className="ml-4">
                            <p className="text-base font-medium text-black">Offshore Development</p>
                            <p className="mt-1 text-sm text-gray-500">Global Development</p>
                          </div>
                        </Link>

                        <Link href="/brochure" className="inline-flex items-start p-3 -m-3 transition rounded-xl hover:bg-gray-50">
                          <div>
                            <Image src="/grid.svg" alt="Brochure" height={24} width={24} />
                          </div>
                          <div className="ml-4">
                            <p className="text-base font-medium text-black">Brochure Downloads</p>
                            <p className="mt-1 text-sm text-gray-500">Your Ultimate Guide</p>
                          </div>
                        </Link>

                        <Link href="/news" className="inline-flex items-start p-3 -m-3 transition rounded-xl hover:bg-gray-50">
                          <div>
                            <Image src="/reader.svg" alt="News" height={24} width={24} />
                          </div>
                          <div className="ml-4">
                            <p className="text-base font-medium text-black">News</p>
                            <p className="mt-1 text-sm text-gray-500">Stay Updated</p>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <Link href="/blogs" className="hover:underline text-white px-4 py-2 block">
                Blogs
              </Link>
            </li>
            {/* <li>
              <Link href="/career" className="hover:underline text-white px-4 py-2 block">
                Career
              </Link>
            </li> */}
            <li>
              <Link href="/technologies" className="hover:underline text-white px-4 py-2 block">
                Technologies
              </Link>
            </li>
          </ul>
        </div>

        <div className="hidden xl:flex items-center justify-end">
          <Link
            className="hidden xl:flex gap-2 self-stretch px-4 pt-4 pb-4 text-base font-medium leading-5 rounded-[50px] text-neutral-900 bg-standardCodeAutomation"
            href="tel:+1-850-558-4691"
          >
            <Image src="/telephone.png" alt="Phone-Icon" width={20} height={20} />
            <div className="my-auto text-nowrap text-black">850 558 4691</div>
            <Image src="/USA-Flag.png" alt="USA-Flag-Icon" width={20} height={20} />
          </Link>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 z-40 xl:hidden ${mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
        onClick={closeMenu}
      />

      {/* FIX 5: Mobile Menu Panel — full width (removed max-w-sm), slides in from left */}
      <div
        className={`fixed top-0 left-0 h-full w-full bg-white shadow-2xl z-50 xl:hidden transform transition-transform duration-300 ease-out ${mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col h-full overflow-y-auto">
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between p-5 border-b border-gray-100">
            <img src="/logo.svg" className="h-8 w-auto" alt="logo" />
            <button
              onClick={closeMenu}
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
              aria-label="Close menu"
            >
              <AiOutlineClose size={20} className="text-gray-800" />
            </button>
          </div>

          {/* Mobile Menu Links */}
          <nav className="flex-1 py-4">
            <ul className="space-y-1">
              <li>
                <Link
                  href="/"
                  onClick={closeMenu}
                  className="flex items-center px-5 py-3 text-gray-800 hover:bg-gray-50 transition-colors"
                >
                  Home
                </Link>
              </li>

              {/* Services Dropdown */}
              <li>
                <button
                  type="button"
                  onClick={toggleServices}
                  className="flex items-center justify-between w-full px-5 py-3 text-gray-800 hover:bg-gray-50 transition-colors"
                >
                  <span>Services</span>
                  <svg
                    className={`w-5 h-5 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${servicesOpen ? "max-h-[800px]" : "max-h-0"}`}>
                  <div className="bg-gray-50/50 py-2">
                    <div className="space-y-2">
                      <Link href={`/services/${linkAI}`} onClick={closeMenu} className="block px-8 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors">
                        AI Agent Development
                      </Link>
                      <Link href={`/services/${linkUrlSoft}`} onClick={closeMenu} className="block px-8 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors">
                        Software Development
                      </Link>
                      <Link href={`/services/${linkUrlCMS1}`} onClick={closeMenu} className="block px-8 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors">
                        CMS
                      </Link>
                      <Link href={`/services/${linkAIAutomation}`} onClick={closeMenu} className="block px-8 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors">
                        AI Automation
                      </Link>
                      <Link href={`/services/${linkUrlAuto}`} onClick={closeMenu} className="block px-8 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors">
                        QA Testing & Automation
                      </Link>
                      <Link href={`/services/${linkMob}`} onClick={closeMenu} className="block px-8 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors">
                        Mobile App Development
                      </Link>
                      <Link href={`/services/${linkUrlDigital}`} onClick={closeMenu} className="block px-8 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors">
                        Design Services
                      </Link>
                      <Link href={`/services/${linkAISoftware}`} onClick={closeMenu} className="block px-8 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors">
                        AI Software Development
                      </Link>
                      <Link href="/services" onClick={closeMenu} className="block px-8 py-2 text-sm font-medium text-[#0a8ffc] hover:bg-gray-100 transition-colors">
                        View All Services →
                      </Link>
                    </div>
                  </div>
                </div>
              </li>

              {/* About Dropdown */}
              <li>
                <button
                  type="button"
                  onClick={toggleAbout}
                  className="flex items-center justify-between w-full px-5 py-3 text-gray-800 hover:bg-gray-50 transition-colors"
                >
                  <span>About Us</span>
                  <svg
                    className={`w-5 h-5 transition-transform duration-200 ${aboutOpen ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${aboutOpen ? "max-h-[800px]" : "max-h-0"}`}>
                  <div className="bg-gray-50/50 py-2">
                    <div className="space-y-2">
                      <Link href="/adnan-ghaffar-ceo-codeautomation" onClick={closeMenu} className="block px-8 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors">
                        About CEO
                      </Link>
                      <Link href="/about/service-summary" onClick={closeMenu} className="block px-8 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors">
                        Service Summary
                      </Link>
                      <Link href="/about/industries" onClick={closeMenu} className="block px-8 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors">
                        Our Industries
                      </Link>
                      <Link href="/lifeatca" onClick={closeMenu} className="block px-8 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors">
                        Life At CA
                      </Link>
                      <Link href="/partnership-program" onClick={closeMenu} className="block px-8 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors">
                        Partner with Us
                      </Link>
                      <Link href="/value-blueprints" onClick={closeMenu} className="block px-8 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors">
                        Value BluePrints
                      </Link>
                      <Link href="/case-studies" onClick={closeMenu} className="block px-8 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors">
                        Case Studies
                      </Link>
                      <Link href="/offshore-software-development" onClick={closeMenu} className="block px-8 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors">
                        Offshore Development
                      </Link>
                    </div>
                  </div>
                </div>
              </li>

              <li>
                <Link href="/blogs" onClick={closeMenu} className="flex items-center px-5 py-3 text-gray-800 hover:bg-gray-50 transition-colors">
                  Blogs
                </Link>
              </li>
              {/* <li>
                <Link href="/career" onClick={closeMenu} className="flex items-center px-5 py-3 text-gray-800 hover:bg-gray-50 transition-colors">
                  Career
                </Link>
              </li> */}
              <li>
                <Link href="/technologies" onClick={closeMenu} className="flex items-center px-5 py-3 text-gray-800 hover:bg-gray-50 transition-colors">
                  Technologies
                </Link>
              </li>
            </ul>
          </nav>

          {/* Mobile Menu Footer with Contact */}
          <div className="p-5 border-t border-gray-100 space-y-3">
            <Link
              href="tel:+1-850-558-4691"
              onClick={closeMenu}
              className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-gray-900 text-white rounded-xl hover:bg-gray-800 transition-colors"
            >
              <Image src="/telephone.png" alt="Phone" width={18} height={18} />
              <span>850 558 4691</span>
            </Link>
            <Link
              href="https://calendly.com/adnanghaffar"
              onClick={closeMenu}
              className="flex items-center justify-center w-full px-4 py-3 border border-gray-300 text-gray-800 rounded-xl hover:bg-gray-50 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}