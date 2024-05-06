"use client";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { CgArrowLongRight } from "react-icons/cg";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Image from "next/image";
import { IonIcon } from '@ionic/react';
import { searchOutline, bookOutline, lockClosedOutline, peopleOutline } from 'ionicons/icons';
import Link from "next/link";

const linkAI = "/ai-services";
const linkUrlCMS1 = "/custom-web-cms";
const linkUrlCMS = "/headless-cms";
const linkUrlSoft = "/web-app-development";
const linkUrlAuto = "/qa-web-testing";
const linkUrlDigital = "/design-services";
const linkMob = "/mobile-app-development";
const linkRobotic = "/rpa-services";


export default function HomeNavigationContainer() {
  const currentPath = usePathname();
  let pathname = usePathname() || "/";

  const [menuIcon, setIcon] = useState(false);
  const [menuOpen, setMenuOpen] = useState(true);

  const handleToggleMenu = () => {
    setIcon(!menuIcon);
  };
  const handleSmallerScreenNavigation = () => {
    setIcon(!menuIcon);
  };

  const [menuVisible, setMenuVisible] = useState(false);
  const [aboutVisible, setAboutVisible] = useState(false);

  const toggleMenuVisibility = () => {
    setMenuVisible((prevMenuVisible) => !prevMenuVisible);
    setAboutVisible((prevMenuVisible) => !prevMenuVisible);

  };




  const [open, setOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
    // Close the About Us menu when the Services menu is opened
    if (!open && aboutOpen) {
      setAboutOpen(false);
    }
  };

  const toggleAbout = () => {
    setAboutOpen(!aboutOpen);
    // Close the Services menu when the About Us menu is opened
    if (!aboutOpen && open) {
      setOpen(false);
    }
  };


  useEffect(() => {
    const handleClickOutside = (event:any) => {
      if (open && !event.target.closest(".menu-box") && !event.target.closest(".nav-links")) {
        setOpen(false);
      }
      if (aboutOpen && !event.target.closest(".menu-box") && !event.target.closest(".nav-links")) {
        setAboutOpen(false);
      }
      if (open || aboutOpen) {
        setOpen(false);
        setAboutOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [open, aboutOpen]);


  return (

    <div className="navbar flex flex-col items-center lg:px-10 px-5 lg:pb-0 py-4 xl:pt-8 w-full max-md:px-4 max-md:max-w-full flex-grow lg:absolute fixed top-0 z-20 xl:bg-transparent xl:h-auto h-[72px]">
      <div className="flex gap-5 justify-between w-full max-w-[1582px] max-md:flex-wrap max-md:max-w-full text-whit">
        <div className="relative" style={{ zIndex: 1000 }}>
          <Link href={`/`} className="hover:underline my-auto">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/09d382e58784257b38ccca526b1322cf201dacdf4343ff92c6fe39c9ba7a1b1e?apiKey=ce12b64a678e4e2a868af6b5dfd766b9&"
              className="self-start max-w-full aspect-[5] xl:w-[230px] w-[200px]"
            />
          </Link>
        </div>
        <div
          className="w-1/12 xl:hidden items-center flex justify-end"
          onClick={handleSmallerScreenNavigation}
          style={{ zIndex: 1000 }} // Added z-index

        >
          {menuIcon ? (
            <AiOutlineClose size={23} className="text-gray-800" />
          ) : (
            <AiOutlineMenu size={23} className="text-white" />
          )}
        </div>
        <div className="xl:flex gap-5 items-end max-md:flex-wrap max-md:max-w-full main-navigation list-none p-0 m-0 transform translate-x-full xl:transform-none fixed top-0 left-0 h-full transition delay-75 ease-in-out w-full bg-white xl:bg-transparent xl:static js-navigation justify-end">
          <ul className=" nav-links relative lg:mx-auto">
            <li className="flex flex-row items-center w-full px-4 py-2 mt-2 md:w-auto md:inline md:mt-0 ">
              <Link href="/">
                <span
                  className={`hover:underline  ${currentPath.startsWith("/case-study/")
                    ? "text-black"
                    : "text-white"
                    }`}
                >
                  Home
                </span>
              </Link>

            </li>
            <li onClick={toggleMenu} className="flex flex-row items-center w-full px-4 py-2 mt-2 md:w-auto md:inline md:mt-0 ">
              <Link
                href="javascript:void(0)">
                <span
                  className={`hover:underline  ${currentPath.startsWith("/case-study/")
                    ? "text-black"
                    : "text-white"
                    }`}
                >
                  Services
                </span>

              </Link>
              <svg fill="white" viewBox="0 0 20 20" className={`inline size-4 mt-1 ml-1 transition-transform duration-200 transform md:-mt-1 ${open ? 'rotate-180' : 'rotate-0'}`}>
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
              </svg>
            </li>
            <div className="absolute z-10 w-screen max-w-5xl px-2 mt-3 transform -translate-x-1/2 left-1/2 sm:px-0" style={{ display: open ? 'block' : 'none' }}>
              <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="relative grid gap-6 px-5 py-6 bg-white sm:gap-8 sm:p-8">
                  <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                    <div className="grid grid-cols-1 gap-8">
                      <Link href={`/services/${linkUrlCMS1}`} className="inline-flex items-start p-3 -m-3 transition duration-150 ease-in-out rounded-xl hover:bg-gray-50">
                        <div className="">
                          <IonIcon icon={searchOutline} className="text-black size-6 md hydrated" />
                        </div>
                        <div className="ml-4">
                          <p className="text-base font-medium text-black">
                            CMS
                          </p>
                          <p className="mt-1 text-sm text-gray-500">
                            Manage Digital Content
                          </p>
                        </div>
                      </Link>
                      <Link href={`/services/${linkUrlCMS}`} className="inline-flex items-start p-3 -m-3 transition duration-150 ease-in-out rounded-xl hover:bg-gray-50">
                        <div className="">
                        <IonIcon icon={searchOutline} className="text-black size-6 md hydrated" />
                        </div>
                        <div className="ml-4">
                          <p className="text-base font-medium text-black">
                            Headless-CMS</p>
                          <p className="mt-1 text-sm text-gray-500">
                            Customized Headless-CMS
                          </p>
                        </div>
                      </Link>
                      <Link href={`/services/${linkUrlSoft}`} className="inline-flex items-start p-3 -m-3 transition duration-150 ease-in-out rounded-xl hover:bg-gray-50">
                        <div className="">
                        <IonIcon icon={searchOutline} className="text-black size-6 md hydrated" />
                        </div>
                        <div className="ml-4">
                          <p className="text-base font-medium text-black">
                            Software Development

                          </p>
                          <p className="mt-1 text-sm text-gray-500">
                            Web Development Solutions
                          </p>
                        </div>
                      </Link>
                      <Link href={`/services/${linkUrlDigital}`} className="inline-flex items-start p-3 -m-3 transition duration-150 ease-in-out rounded-xl hover:bg-gray-50">
                        <div className="">
                        <IonIcon icon={searchOutline} className="text-black size-6 md hydrated" />
                        </div>
                        <div className="ml-4">
                          <p className="text-base font-medium text-black">
                            Design Services

                          </p>
                          <p className="mt-1 text-sm text-gray-500">
                            Boost your Online Presence
                          </p>
                        </div>
                      </Link>
                      <Link href="/services">
                        <p
                          className="flex gap-3 text-sm font-bold text-black hover:text-[#0a8ffc] hover:underline mt-8"
                        >
                          View all
                          <CgArrowLongRight
                            style={{
                              color: "#5b9ed2",
                              marginTop: "-3px",
                              marginBottom: "-2px",
                              height: "25px",
                              width: "25px",
                            }}
                          />
                        </p>
                      </Link>
                    </div>
                    <div className="grid grid-cols-1 gap-8">
                      <Link href={`/services/${linkUrlAuto}`} className="inline-flex items-start p-3 -m-3 transition duration-150 ease-in-out rounded-xl hover:bg-gray-50">
                        <div className="">
                        <IonIcon icon={searchOutline} className="text-black size-6 md hydrated" />
                        </div>
                        <div className="ml-4">
                          <p className="text-base font-medium text-black">
                            QA Testing & Automation
                          </p>
                          <p className="mt-1 text-sm text-gray-500">
                            Ensure the Highest Quality
                          </p>
                        </div>
                      </Link>
                      <Link href={`/services/${linkMob}`} className="inline-flex items-start p-3 -m-3 transition duration-150 ease-in-out rounded-xl hover:bg-gray-50">
                        <div className="">
                        <IonIcon icon={searchOutline} className="text-black size-6 md hydrated" />
                        </div>
                        <div className="ml-4">
                          <p className="text-base font-medium text-black">
                            Mobile App evelopment

                          </p>
                          <p className="mt-1 text-sm text-gray-500">
                            Transform Idea into Market Leading App
                          </p>
                        </div>
                      </Link>
                      <Link href={`/services/${linkAI}`} className="inline-flex items-start p-3 -m-3 transition duration-150 ease-in-out rounded-xl hover:bg-gray-50">
                        <div className="">
                        <IonIcon icon={searchOutline} className="text-black size-6 md hydrated" />
                        </div>
                        <div className="ml-4">
                          <p className="text-base font-medium text-black">
                            AI Services

                          </p>
                          <p className="mt-1 text-sm text-gray-500">
                            Informed Decision Making Process
                          </p>
                        </div>
                      </Link>
                      <Link href={`/services/${linkRobotic}`} className="inline-flex items-start p-3 -m-3 transition duration-150 ease-in-out rounded-xl hover:bg-gray-50">
                        <div className="">
                        <IonIcon icon={searchOutline} className="text-black size-6 md hydrated" />
                        </div>
                        <div className="ml-4">
                          <p className="text-base font-medium text-black">
                            Robotic Research

                          </p>
                          <p className="mt-1 text-sm text-gray-500">
                            Tackle the Complex Robotic Challanges
                          </p>
                        </div>
                      </Link>
                      <Link className="inline-flex items-center justify-center mt-4 w-full h-8 gap-3 px-5 py-3 text-xs font-medium text-white duration-200 bg-gray-900 rounded-lg md:w-auto hover:bg-gray-700 focus:ring-2 focus:ring-offset-2 focus:ring-black" href="#_" role="button">
                        Contact Us
                      </Link>
                    </div>
                    <div className="grid grid-cols-1 gap-3 p-2 lg:p-0 bg-gray-50 rounded-2xl">
                      <div className="grid items-start h-1/2 gap-6 px-5 py-6 sm:gap-8 sm:p-8">
                        <h3 className="text-base font-medium text-black">
                          Getting started
                        </h3>
                        <div className="space-y-3">
                          <a href="#_" className="flex items-start text-sm font-medium transition duration-150 ease-in-out rounded-lg hover:text-black">
                            Identify Service Categories
                          </a>
                          <a href="#_" className="flex items-start text-sm text-gray-500 transition duration-150 ease-in-out rounded-lg hover:text-black">
                            Map Out the Journey
                          </a>
                          <a href="#_" className="flex items-start text-sm text-gray-500 transition duration-150 ease-in-out rounded-lg hover:text-black">
                            Design the Layout
                          </a>
                          <a href="#_" className="flex items-start text-sm text-gray-500 transition duration-150 ease-in-out rounded-lg hover:text-black">
                            User Interface (UI) Design
                          </a>
                          <a href="#_" className="flex items-start text-sm text-gray-500 transition duration-150 ease-in-out rounded-lg hover:text-black">
                            Development and Integration                          </a>
                          <a href="#_" className="inline-flex items-start text-sm text-gray-500 transition duration-150 ease-in-out rounded-lg hover:text-black">
                            Content Management                          </a>
                          <a href="#_" className="inline-flex items-start text-sm text-gray-500 transition duration-150 ease-in-out rounded-lg hover:text-black">
                            Testing and Quality Assurance                          </a>
                          <a href="#_" className="inline-flex items-start text-sm text-gray-500 transition duration-150 ease-in-out rounded-lg hover:text-black">
                            Launch and Promotion                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* About us */}

            <li onClick={toggleAbout} className="flex flex-row items-center w-full px-4 py-2 mt-2 md:w-auto md:inline md:mt-0 ">
              <Link
                href="javascript:void(0)">
                <span
                  className={`hover:underline  ${currentPath.startsWith("/case-study/")
                    ? "text-black"
                    : "text-white"
                    }`}
                >
                  About Us
                </span>
              </Link>
              <svg fill="white" viewBox="0 0 20 20" className={`inline size-4 mt-1 ml-1 transition-transform duration-200 transform md:-mt-1 ${aboutOpen ? 'rotate-180' : 'rotate-0'}`}>
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
              </svg>
            </li>
            <div className="absolute z-10 w-screen max-w-3xl px-2 mt-3 transform -translate-x-1/2 left-1/2 sm:px-0" style={{ display: aboutOpen ? 'block' : 'none' }}>
              <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="relative grid gap-6 px-5 py-2 bg-white sm:gap-8 sm:p-8">
                  <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                    <div className="grid grid-cols-1">
                      <Link href="/case-study" className="inline-flex items-start p-3 -m-3 transition duration-150 ease-in-out rounded-xl hover:bg-gray-50">
                        <div className="">
                          <IonIcon icon={searchOutline} className="text-black size-6 md hydrated" />
                        </div>
                        <div className="ml-4">
                          <p className="text-base font-medium text-black">
                            Case-Studies
                          </p>
                          <p className="mt-1 text-sm text-gray-500">
                            Success Stories                          </p>
                        </div>
                      </Link>
                      <Link href="/blogs" className="inline-flex items-start p-3 -m-3 transition duration-150 ease-in-out rounded-xl hover:bg-gray-50">
                        <div className="">
                          <IonIcon icon={searchOutline} className="text-black size-6 md hydrated" />
                        </div>
                        <div className="ml-4">
                          <p className="text-base font-medium text-black">
                            Blogs                          </p>
                          <p className="mt-1 text-sm text-gray-500">
                            Tech Insights</p>
                        </div>
                      </Link>
                      <Link href="/career" className="inline-flex items-start p-3 -m-3 transition duration-150 ease-in-out rounded-xl hover:bg-gray-50">
                        <div className="">
                          <IonIcon icon={searchOutline} className="text-black size-6 md hydrated" />
                        </div>
                        <div className="ml-4">
                          <p className="text-base font-medium text-black">
                            Careers
                          </p>
                          <p className="mt-1 text-sm text-gray-500">
                            Join our Team                         </p>
                        </div>
                      </Link>
                    </div>
                    <div className="grid grid-cols-1">
                      <Link href="/" className="inline-flex items-start p-3 -m-3 transition duration-150 ease-in-out rounded-xl hover:bg-gray-50">
                        <div className="">
                          <IonIcon icon={searchOutline} className="text-black size-6 md hydrated" />
                        </div>
                        <div className="ml-4">
                          <p className="text-base font-medium text-black">
                            Brochure Downloads
                          </p>
                          <p className="mt-1 text-sm text-gray-500">
                            Resources                         </p>
                        </div>
                      </Link>
                      <Link href="/" className="inline-flex items-start p-3 -m-3 transition duration-150 ease-in-out rounded-xl hover:bg-gray-50">
                        <div className="">
                          <IonIcon icon={searchOutline} className="text-black size-6 md hydrated" />
                        </div>
                        <div className="ml-4">
                          <p className="text-base font-medium text-black">
                           News                         </p>
                          <p className="mt-1 text-sm text-gray-500">
                           Latest Updates</p>
                        </div>
                      </Link>
                      <Link href="/lifeatca" className="inline-flex items-start p-3 -m-3 transition duration-150 ease-in-out rounded-xl hover:bg-gray-50">
                        <div className="">
                          <IonIcon icon={searchOutline} className="text-black size-6 md hydrated" />
                        </div>
                        <div className="ml-4">
                          <p className="text-base font-medium text-black">
                            Life At CA
                          </p>
                          <p className="mt-1 text-sm text-gray-500">
                            Employee Experiences                        </p>
                        </div>
                      </Link>
                    </div>
                    <div className="grid grid-cols-1 gap-3 p-2 lg:p-0 bg-gray-50 rounded-2xl">
                      <div className="grid items-start h-full gap-6 px-5 py-2 sm:gap-8 sm:p-8">
                        <h3 className="text-base font-medium text-black">
                          Getting started
                        </h3>
                        <div className="space-y-2">
                          <a href="#_" className="flex items-start text-sm font-medium transition duration-150 ease-in-out rounded-lg hover:text-black">
                            Explore design work
                          </a>
                          <a href="#_" className="flex items-start text-sm text-gray-500 transition duration-150 ease-in-out rounded-lg hover:text-black">
                            Register
                          </a>
                          <a href="#_" className="flex items-start text-sm text-gray-500 transition duration-150 ease-in-out rounded-lg hover:text-black">
                            Adding users
                          </a>
                          <a href="#_" className="flex items-start text-sm text-gray-500 transition duration-150 ease-in-out rounded-lg hover:text-black">
                            Video Tutorials
                          </a>
                          {/* <a href="#_" className="flex items-start text-sm text-gray-500 transition duration-150 ease-in-out rounded-lg hover:text-black">
                            Libraries and SDKs
                          </a>
                          <a href="#_" className="inline-flex items-start text-sm text-gray-500 transition duration-150 ease-in-out rounded-lg hover:text-black">
                            Adding Plugins
                          </a>
                          <a href="#_" className="inline-flex items-start text-sm text-gray-500 transition duration-150 ease-in-out rounded-lg hover:text-black">
                            Dashboard templates
                          </a> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <li className="flex flex-row items-center w-full px-4 py-2 mt-2 md:w-auto md:inline md:mt-0 ">
              <Link href="/blogs">
                <span
                  className={`hover:underline  ${currentPath.startsWith("/case-study/")
                    ? "text-black"
                    : "text-white"
                    }`}
                >
                  Blogs
                </span>
              </Link>
            </li>

            <li className="flex flex-row items-center w-full px-4 py-2 mt-2 md:w-auto md:inline md:mt-0 ">
              <Link href="/career">
                <span
                  className={`hover:underline  ${currentPath.startsWith("/case-study/")
                    ? "text-black"
                    : "text-white"
                    }`}
                >
                  Career
                </span>
              </Link>            </li>

            <li className="flex flex-row items-center w-full px-4 py-2 mt-2 md:w-auto md:inline md:mt-0 ">
              <Link href="/technologies">
                <span
                  className={`hover:underline  ${currentPath.startsWith("/case-study/")
                    ? "text-black"
                    : "text-white"
                    }`}
                >
                  Technologies
                </span>
              </Link>            </li>
          </ul>
          <a
            className="hidden xl:flex gap-3 justify-between self-stretch px-4 py-2 text-xl bg-sky-500 rounded-full shadow-sm max-md:px-5"
            href="https://join.skype.com/invite/crU4cXW4bttb"
          >
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/fac08cad98e0659b7b1fba8569319dcbc8cff9340fcddf511cabd61603becea7?apiKey=ce12b64a678e4e2a868af6b5dfd766b9&"
              className="aspect-[0.97] w-[27px]"
            />
            <div className="my-auto text-nowrap text-white">
              Let&apos;s talk:+1-850-558-4691 
            </div>
          </a>

          <div
            className={
              menuIcon
                ? "xl:hidden absolute top-0 right-0 bottom-0 left-[-100%]  w-full h-screen bg-white ease-in duration-300"
                : "xl:hidden absolute top-0 right-0 left-0  w-full h-screen bg-white ease-in duration-300"
            }
          >
            <div className="xl:hidden">
              {menuOpen && (
                <div className="mobile-menu">
                  <ul className="text-black text-sm flex flex-col pt-20 pb-8 px-6">
                    <li className="border-t border-b border-gray-200 border-opacity-50 py-4">
                      <Link href="/" onClick={handleToggleMenu}>
                        Home
                      </Link>
                    </li>
                    <li className="border-b border-gray-200 border-opacity-50 py-4">
                      <div
                        className=""
                        onClick={toggleMenuVisibility}
                        onMouseEnter={() => setMenuVisible(true)}
                        onMouseLeave={() => setMenuVisible(false)}
                      >
                        Services
                      </div>
                      {menuVisible && (
                        <div className="content mt-4 mb-0">
                          <div>
                            <ul className="mega-links-mb">

                              <li>
                                <Link
                                  href={`/services/${linkUrlCMS1}`}
                                  className=""
                                  onClick={handleToggleMenu}
                                >
                                  CMS
                                </Link>
                                <p>
                                  <Link
                                    href={`/services/${linkUrlCMS1}`}
                                    onClick={handleToggleMenu}
                                  >
                                    Manage Digital Content
                                  </Link>
                                </p>
                              </li>
                              <li>
                                <Link
                                  href={`/services/${linkUrlCMS}`}
                                  className="heading"
                                  onClick={handleToggleMenu}
                                >
                                  Headless-CMS
                                </Link>
                                <p>
                                  <Link
                                    href={`/services/${linkUrlCMS}`}
                                    onClick={handleToggleMenu}
                                  >
                                    Customized Headless-CMS
                                  </Link>
                                </p>
                              </li>
                              <li>
                                <Link
                                  href={`/services/${linkMob}`}
                                  className="heading"
                                  onClick={handleToggleMenu}
                                >
                                  Mobile App Development
                                </Link>
                                <p>
                                  <Link href={`/services/${linkMob}`} onClick={handleToggleMenu}>
                                    Transform Idea into Market Leading App
                                  </Link>
                                </p>
                              </li>
                              <li>
                                <Link
                                  href={`/services/${linkUrlSoft}`}
                                  className="heading"
                                  onClick={handleToggleMenu}
                                >
                                  Software Development
                                </Link>
                                <p>
                                  <Link
                                    href={`/services/${linkUrlSoft}`}
                                    onClick={handleToggleMenu}
                                  >
                                    Web Development Solutions
                                  </Link>
                                </p>
                              </li>
                            </ul>

                            <Link href="/services">
                              <p
                                className="flex gap-3 text-black hover:text-[#0a8ffc] hover:underline mt-4 mb-0"
                                onClick={handleToggleMenu}
                                style={{ fontWeight: "600", fontSize: "13px" }}

                              >
                                View all
                                <CgArrowLongRight
                                  style={{
                                    color: "#5b9ed2",
                                    marginTop: "-3px",
                                    marginBottom: "-2px",
                                    height: "22px",
                                    width: "22px",
                                  }}
                                />
                              </p>
                            </Link>
                          </div>
                        </div>




                      )}
                    </li>


                    <li className="border-b border-gray-200 border-opacity-50 py-4">
                      <Link href="/lifeatca" onClick={handleToggleMenu}>
                        Life at CA
                      </Link>
                    </li>
                    <li className="border-b border-gray-200 border-opacity-50 py-4">
                      <Link href="/blogs" onClick={handleToggleMenu}>
                        Blogs
                      </Link>
                    </li>
                    <li className="border-b border-gray-200 border-opacity-50 py-4">
                      <Link href="/career" onClick={handleToggleMenu}>
                        Career
                      </Link>
                    </li>
                    <li className="border-b border-gray-200 border-opacity-50 py-4">
                      <Link href="/technologies" onClick={handleToggleMenu}>
                        Technologies
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>



        </div>
      </div>
    </div>
  );
}