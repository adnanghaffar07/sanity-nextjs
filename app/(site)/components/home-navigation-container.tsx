"use client";
import { usePathname } from "next/navigation";
import { useState, useEffect, useCallback, useRef } from "react";
import { CgArrowLongRight } from "react-icons/cg";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { RegisterLink, LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import Image from "next/image";
import Link from "next/link";

const linkAI = "ai-services";
const linkML = "ml-services";
const devops = "ai-devops";
const linkUrlCMS1 = "custom-web-cms";
const linkUrlCMS = "headless-cms";
const linkUrlSoft = "web-app-development";
const linkUrlAuto = "qa-web-testing";
const linkUrlDigital = "design-services";
const linkMob = "mobile-app-development";
const linkRobotic = "rpa-services";
const linkIntegrate = "automation-integration";

export default function HomeNavigationContainer() {
  const pathname = usePathname() || "/";
  const { getUser, isAuthenticated } = useKindeBrowserClient()
  const [userDetails, setUserDetails] = useState<any>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);


  const [menuState, setMenuState] = useState({
    menuIcon: false,
    open: false,
    aboutOpen: false,
    menuVisible: false,
    aboutVisible: false,

  });

  const [menuVisible, setMenuVisible] = useState(false);
  const [aboutVisible, setAboutVisible] = useState(false);

  const toggleMenuVisibility = () => {
    setMenuVisible((prevMenuVisible) => !prevMenuVisible);
    // setAboutVisible((prevMenuVisible) => !prevMenuVisible);
  };
  const toggleAboutVisibility = () => {
    setAboutVisible((prevAboutVisible) => !prevAboutVisible);
  };


  const handleToggleMenuIcon = useCallback(() => {
    setMenuState((prevState) => ({
      ...prevState,
      menuIcon: !prevState.menuIcon,
    }));
  }, []);

  const toggleMenu = useCallback(() => {
    setMenuState((prevState) => ({
      ...prevState,
      open: !prevState.open,
      aboutOpen: prevState.open ? prevState.aboutOpen : false,
    }));
  }, []);

  const toggleAbout = useCallback(() => {
    setMenuState((prevState) => ({
      ...prevState,
      aboutOpen: !prevState.aboutOpen,
      open: prevState.aboutOpen ? prevState.open : false,
    }));
  }, []);

  const handleSignIn = () => {
    const currentUrl = encodeURIComponent(window.location.href);
    window.location.href = `/api/auth/login?post_login_redirect_url=${currentUrl}`;
  };
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []); 


  useEffect(() => {
    const fetchUserDetails = async () => {
      if (isAuthenticated) {
        const user = await getUser();
        setUserDetails(user);
      }
    };

    fetchUserDetails();
  }, [isAuthenticated]);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  useEffect(() => {
    const fetchUserDetails = async () => {
      if (isAuthenticated) {
        const user = await getUser();
        console.log("User details:", user); // Log the user details fetched by getUser()
        setUserDetails(user);
      }
    };

    console.log("Fetching user details...");
    fetchUserDetails();
  }, [isAuthenticated]);


  useEffect(() => {
    const handleClickOutside = () => {
      if (menuState.open || menuState.aboutOpen) {
        setMenuState((prevState) => ({
          ...prevState,
          open: false,
          aboutOpen: false,
        }));
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [menuState.open, menuState.aboutOpen]);

  return (
    <div className="navbar flex flex-col items-center lg:px-10 px-5 lg:pb-0 py-4 xl:pt-8 w-full max-md:px-4 max-md:max-w-full flex-grow relative top-0 z-20 xl:bg-transparent xl:h-auto h-[72px]">
      <div className="flex gap-5 justify-between items-center px-8 py-3.5 w-full border border-solid shadow-md backdrop-blur-[36px] bg-black bg-opacity-20 border-white border-opacity-10 rounded-[62px] max-md:flex-wrap max-md:px-5 max-md:max-w-full">
        <div className="relative" style={{ zIndex: 1000 }}>
          <Link href={`/`} className="hover:underline my-auto">
            <img
              src="/logo.svg"
              className="self-start max-w-full aspect-[5] xl:w-[230px] w-[200px]"
              alt="logo"
            />
          </Link>
        </div>
        <div
          className="w-1/12 xl:hidden items-center flex justify-end"
          onClick={handleToggleMenuIcon}
          style={{ zIndex: 1000 }}
        >
          {menuState.menuIcon ? (
            <AiOutlineClose size={23} className="text-gray-800" />
          ) : (
            <AiOutlineMenu size={23} className="text-white" />
          )}
        </div>
        <div className={`xl:flex gap-5 items-end max-md:flex-wrap max-md:max-w-full main-navigation list-none p-0 m-0 transition-all duration-300 ease-in-out ${menuState.menuIcon ? "block" : "hidden"} xl:block fixed top-0 left-0 h-full w-full bg-white xl:bg-transparent xl:static js-navigation justify-end`}>
          <ul className="nav-links relative lg:mx-auto">
            <li className="flex flex-row items-center w-full px-4 py-2 mt-2 md:w-auto md:inline md:mt-0">
              <Link href="/">
                <span className="hover:underline text-white">Home</span>
              </Link>
            </li>
            <li
              onClick={toggleMenu}
              className="flex flex-row items-center w-full text-lg px-4 py-2 mt-2 md:w-auto md:inline md:mt-0"
            >
              <button>
                <span className="hover:underline text-white">Services</span>
              </button>
              <svg
                fill="white"
                viewBox="0 0 20 20"
                className={`inline size-4 mt-1 ml-1 transition-transform duration-200 transform md:-mt-1 ${menuState.open ? "rotate-180" : "rotate-0"}`}
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </li>
            <div
              className={`absolute z-10 w-screen max-w-5xl px-2 mt-12 transform -translate-x-1/2 left-1/2 sm:px-0 transition-all duration-300 ease-in-out ${menuState.open ? "block" : "hidden"}`}
            >
              <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="relative grid gap-6 px-5 py-6 bg-white sm:gap-8 sm:p-8">
                  <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                    <div className="grid grid-cols-1 gap-8">
                      <Link
                        href={`/services/${linkUrlCMS1}`}
                        className="inline-flex items-start p-3 -m-3 transition duration-150 ease-in-out rounded-xl hover:bg-gray-50"
                      >
  
  
                        <div className="">
                          <Image
                            src="/logo-codepen.svg"
                            alt=""
                            height={12}
                            width={12}
                            className="text-black size-6 md hydrated"
                          />
                        </div>
                        <div className="ml-4">
                          <p className="text-base font-medium text-black">CMS</p>
                          <p className="mt-1 text-sm text-gray-500">Manage Digital Content</p>
                        </div>
                      </Link>
                      <Link
                        href={`/services/${linkUrlCMS}`}
                        className="inline-flex items-start p-3 -m-3 transition duration-150 ease-in-out rounded-xl hover:bg-gray-50"
                      >
                        <div className="">
                          <Image
                            src="/logo-buffer.svg"
                            alt=""
                            height={12}
                            width={12}
                            className="text-black size-6 md hydrated"
                          />
                        </div>
                        <div className="ml-4">
                          <p className="text-base font-medium text-black">Headless-CMS</p>
                          <p className="mt-1 text-sm text-gray-500">Customized Headless-CMS</p>
                        </div>
                      </Link>
                      <Link
                        href={`/services/${linkUrlSoft}`}
                        className="inline-flex items-start p-3 -m-3 transition duration-150 ease-in-out rounded-xl hover:bg-gray-50"
                      >
                        <div className="">
                          <Image
                            src="/logo-javascript.svg"
                            alt=""
                            height={12}
                            width={12}
                            className="text-black size-6 md hydrated"
                          />
                        </div>
                        <div className="ml-4">
                          <p className="text-base font-medium text-black">Software Development</p>
                          <p className="mt-1 text-sm text-gray-500">Desktop and Web Development Solutions</p>
                        </div>
                      </Link>
                      <Link
                        href={`/services/${linkUrlDigital}`}
                        className="inline-flex items-start p-3 -m-3 transition duration-150 ease-in-out rounded-xl hover:bg-gray-50"
                      >
                        <div className="">
                          <Image
                            src="/logo-figma.svg"
                            alt=""
                            height={12}
                            width={12}
                            className="text-black size-6 md hydrated"
                          />
                        </div>
                        <div className="ml-4">
                          <p className="text-base font-medium text-black">Design Services</p>
                          <p className="mt-1 text-sm text-gray-500">Boost your Online Presence</p>
                        </div>
                      </Link>
                      <Link href="/services">
                        <p className="flex gap-3 text-sm font-bold text-black hover:text-[#0a8ffc] hover:underline mt-8">
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
                      <Link
                        href={`/services/${linkUrlAuto}`}
                        className="inline-flex items-start p-3 -m-3 transition duration-150 ease-in-out rounded-xl hover:bg-gray-50"
                      >
                        <div className="">
                          <Image
                            src="/logo-apple-ar.svg"
                            alt=""
                            height={12}
                            width={12}
                            className="text-black size-6 md hydrated"
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
                        <div className="">
                          <Image
                            src="/logo-react.svg"
                            alt=""
                            height={12}
                            width={12}
                            className="text-black size-6 md hydrated"
                          />
                        </div>
                        <div className="ml-4">
                          <p className="text-base font-medium text-black">Mobile App development</p>
                          <p className="mt-1 text-sm text-gray-500">Transform Idea into Market Leading App</p>
                        </div>
                      </Link>
                      <Link
                        href={`/services/${linkAI}`}
                        className="inline-flex items-start p-3 -m-3 transition duration-150 ease-in-out rounded-xl hover:bg-gray-50"
                      >
                        <div className="">
                          <Image
                            src="/logo-web-component.svg"
                            alt=""
                            height={12}
                            width={12}
                            className="text-black size-6 md hydrated"
                          />
                        </div>
                        <div className="ml-4">
                          <p className="text-base font-medium text-black">AI Services</p>
                          <p className="mt-1 text-sm text-gray-500">Informed Decision Making Process</p>
                        </div>
                      </Link>
                      <Link
                        href={`/services/${linkRobotic}`}
                        className="inline-flex items-start p-3 -m-3 transition duration-150 ease-in-out rounded-xl hover:bg-gray-50"
                      >
                        <div className="">
                          <Image
                            src="/logo-ionitron.svg"
                            alt=""
                            height={12}
                            width={12}
                            className="text-black size-6 md hydrated"
                          />
                        </div>
                        <div className="ml-4">
                          <p className="text-base font-medium text-black">RPA Services</p>
                          <p className="mt-1 text-sm text-gray-500">Tackle the Complex Robotic Challenges</p>
                        </div>
                      </Link>
                      <Link
                        className="inline-flex items-center justify-center mt-4 w-full h-8 gap-3 px-5 py-3 text-xs font-medium text-white duration-200 bg-gray-900 rounded-lg md:w-auto hover:bg-gray-700 focus:ring-2 focus:ring-offset-2 focus:ring-black"
                        href="tel:+1-850-558-4691"
                        role="button"
                      >
                        Contact Us
                      </Link>
                    </div>
                    <div className="grid grid-cols-1 gap-3 p-2 lg:p-0 bg-gray-50 rounded-2xl">
                      <div className="grid items-start h-1/2 gap-6 px-5 py-6 sm:gap-8 sm:p-8">
                        <h3 className="text-base font-medium text-black">Hot Topics</h3>
                        <div className="space-y-3">
                          <Link
                            href={`/services/${linkAI}`}
                            className="flex items-start text-sm font-medium transition duration-150 ease-in-out rounded-lg hover:text-black"
                          >
                            ChatBox & AI
                          </Link>
                          <Link
                            href={`/services/${linkUrlCMS}`}
                            className="flex items-start text-sm text-gray-500 transition duration-150 ease-in-out rounded-lg hover:text-black"
                          >
                            Headless CMS
                          </Link>
                          <Link
                            href={`/services/${linkIntegrate}`}
                            className="flex items-start text-sm text-gray-500 transition duration-150 ease-in-out rounded-lg hover:text-black"
                          >
                            Integration & Automation
                          </Link>
                          <Link
                            href={`/services/${linkUrlDigital}`}
                            className="flex items-start text-sm text-gray-500 transition duration-150 ease-in-out rounded-lg hover:text-black"
                          >
                            User Interface (UI) Design
                          </Link>
                          <Link
                            href={`/services/${linkUrlAuto}`}
                            className="flex items-start text-sm text-gray-500 transition duration-150 ease-in-out rounded-lg hover:text-black"
                          >
                            QA and Testing
                          </Link>
                          <Link
                            href={`/services/${linkMob}`}
                            className="flex items-start text-sm text-gray-500 transition duration-150 ease-in-out rounded-lg hover:text-black"
                          >
                            Mobile Application
                          </Link>

                          <Link
                            href={`/services/${linkML}`}
                            className="flex items-start text-sm text-gray-500 transition duration-150 ease-in-out rounded-lg hover:text-black"
                          >
                            ML Services
                          </Link>
                          <Link
                            href={`/services/${devops}`}
                            className="inline-flex items-start text-sm text-gray-500 transition duration-150 ease-in-out rounded-lg hover:text-black"
                          >
                            Devops Services
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* About us */}
            <li
              onClick={toggleAbout}
              className="flex flex-row items-center text-lg w-full px-4 py-2 mt-2 md:w-auto md:inline md:mt-0"
            >
              <button>
                <span className="hover:underline text-white">About Us</span>
              </button>
              <svg
                fill="white"
                viewBox="0 0 20 20"
                className={`inline size-4 mt-1 ml-1 transition-transform duration-200 transform md:-mt-1 ${menuState.aboutOpen ? "rotate-180" : "rotate-0"}`}
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </li>
            <div
              className={`absolute z-10 w-screen max-w-3xl px-2 mt-12 transform -translate-x-1/2 left-1/2 sm:px-0 transition-all duration-300 ease-in-out ${menuState.aboutOpen ? "block" : "hidden"}`}
            >
              <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="relative grid gap-6 px-5 py-2 bg-white sm:gap-8 sm:p-8">
                  <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                    <div className="grid grid-cols-1 gap-6">
                      <Link
                        href="/about/service-summary"
                        className="inline-flex items-start p-3 -m-3 transition duration-150 ease-in-out rounded-xl hover:bg-gray-50"
                      >
                        <div className="">
                          <Image
                            src="/documents-sharp.svg"
                            alt=""
                            height={12}
                            width={12}
                            className="text-black size-6 md hydrated"
                          />
                        </div>
                        <div className="ml-4">
                          <p className="text-base font-medium text-black">Service Summary</p>
                          <p className="mt-1 text-sm text-gray-500">Service Essence</p>
                        </div>
                      </Link>
                      <Link
                        href="/career"
                        className="inline-flex items-start p-3 -m-3 transition duration-150 ease-in-out rounded-xl hover:bg-gray-50"
                      >
                        <div className="">
                          <Image
                            src="/briefcase.svg"
                            alt=""
                            height={12}
                            width={12}
                            className="text-black size-6 md hydrated"
                          />
                        </div>
                        <div className="ml-4">
                          <p className="text-base font-medium text-black">Careers</p>
                          <p className="mt-1 text-sm text-gray-500">Join our Team</p>
                        </div>
                      </Link>
                      <Link
                        href="/lifeatca"
                        className="inline-flex items-start p-3 -m-3 transition duration-150 ease-in-out rounded-xl hover:bg-gray-50"
                      >
                        <div className="">
                          <Image
                            src="/images.svg"
                            alt=""
                            height={12}
                            width={12}
                            className="text-black size-6 md hydrated"
                          />
                        </div>
                        <div className="ml-4">
                          <p className="text-base font-medium text-black">Life At CA</p>
                          <p className="mt-1 text-sm text-gray-500">Employee Experiences</p>
                        </div>
                      </Link>
                      <Link
                        href="/partnership-program"
                        className="inline-flex items-start p-3 -m-3 transition duration-150 ease-in-out rounded-xl hover:bg-gray-50"
                      >
                        <div className="">
                          <Image
                            src="/partnership-icon.svg"
                            alt="partnership"
                            height={12}
                            width={12}
                            className="text-black size-6 md hydrated"
                          />
                        </div>
                        <div className="ml-4">
                          <p className="text-base font-medium text-black">Partner with Us</p>
                          <p className="mt-1 text-sm text-gray-500">Grow Together</p>
                        </div>
                      </Link>
                      <Link
                        href="/value-blueprints"
                        className="inline-flex items-start p-3 -m-3 transition duration-150 ease-in-out rounded-xl hover:bg-gray-50"
                      >
                        <div className="">
                          <Image
                            src="/cash.svg"
                            alt="cash"
                            height={12}
                            width={12}
                            className="text-black size-6 md hydrated"
                          />
                        </div>
                        <div className="ml-4">
                          <p className="text-base font-medium text-black">Value BluePrints</p>
                          <p className="mt-1 text-sm text-gray-500">Efficient Deployment</p>
                        </div>
                      </Link>
                    </div>
                    <div className="grid grid-cols-1 gap-6">
                      <Link
                        href="/about/discovery-process"
                        className="inline-flex items-start p-3 -m-3 transition duration-150 ease-in-out rounded-xl hover:bg-gray-50"
                      >
                        <div className="">
                          <Image
                            src="/server.svg"
                            alt=""
                            height={12}
                            width={12}
                            className="text-black size-6 md hydrated"
                          />
                        </div>
                        <div className="ml-4">
                          <p className="text-base font-medium text-black">Discovery Process</p>
                          <p className="mt-1 text-sm text-gray-500">Innovative Strategy</p>
                        </div>
                      </Link>
                      <Link
                        href="/case-studies"
                        className="inline-flex items-start p-3 -m-3 transition duration-150 ease-in-out rounded-xl hover:bg-gray-50"
                      >
                        <div className="">
                          <Image
                            src="/library.svg"
                            alt=""
                            height={12}
                            width={12}
                            className="text-black size-6 md hydrated"
                          />
                        </div>
                        <div className="ml-4">
                          <p className="text-base font-medium text-black">Case-Studies</p>
                          <p className="mt-1 text-sm text-gray-500">Success Stories</p>
                        </div>
                      </Link>
                      <Link
                        href="/brochure"
                        className="inline-flex items-start p-3 -m-3 transition duration-150 ease-in-out rounded-xl hover:bg-gray-50"
                      >

                        <div className="">
                          <Image
                            src="/grid.svg"
                            alt=""
                            height={12}
                            width={12}
                            className="text-black size-6 md hydrated"
                          />
                        </div>
                        <div className="ml-4">
                          <p className="text-base font-medium text-black">Brochure Downloads</p>
                          <p className="mt-1 text-sm text-gray-500 text-start">    Download Center</p>
                        </div>
                      </Link>
                      <button className="inline-flex items-start p-3 -m-3 transition duration-150 ease-in-out rounded-xl hover:bg-gray-50">
                        <div className="">
                          <Image
                            src="/reader.svg"
                            alt=""
                            height={12}
                            width={12}
                            className="text-black size-6 md hydrated"
                          />
                        </div>
                        <div className="ml-4">
                          <p className="text-base font-medium text-black text-start">News</p>
                          <p className="mt-1 text-sm text-gray-500">(Coming Soon)</p>
                        </div>
                      </button>
                      <Link
                        href="/blogs"
                        className="inline-flex items-start p-3 -m-3 transition duration-150 ease-in-out rounded-xl hover:bg-gray-50"
                      >
                        <div className="">
                          <Image
                            src="/newspaper.svg"
                            alt=""
                            height={12}
                            width={12}
                            className="text-black size-6 md hydrated"
                          />
                        </div>
                        <div className="ml-4">
                          <p className="text-base font-medium text-black">Blogs</p>
                          <p className="mt-1 text-sm text-gray-500">Tech Insights</p>
                        </div>
                      </Link>
                    </div>
                    <div className="grid grid-cols-1 gap-3 lg:p-0 rounded-2xl">
                      <div className="grid items-start h-full">
                        <div className="">
                          <img
                            src="/menu-img.jpg"
                            alt="about us"
                            className="object-cover h-full width-full rounded-2xl"
                            loading="lazy"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <li className="flex flex-row items-center w-full px-4 py-2 mt-2 md:w-auto md:inline md:mt-0">
              <Link href="/blogs">
                <span className="hover:underline text-white">Blogs</span>
              </Link>
            </li>

            <li className="flex flex-row items-center w-full px-4 py-2 mt-2 md:w-auto md:inline md:mt-0">
              <Link href="/career">
                <span className="hover:underline text-white">Career</span>
              </Link>
            </li>

            <li className="flex flex-row items-center w-full px-4 py-2 mt-2 md:w-auto md:inline md:mt-0">
              <Link href="/technologies">
                <span className="hover:underline text-white">Technologies</span>
              </Link>
            </li>

          </ul>
          <div>

            {(isAuthenticated) ? (
              <>

                {userDetails && (
                  <img
                    src={userDetails.picture}
                    alt="Profile"
                    className="h-10 w-10 object-cover rounded-full cursor-pointer"
                    onClick={toggleDropdown}
                  />
                )}
                {isDropdownOpen && (
                  <div ref={dropdownRef}  className="absolute mt-2 w-50 bg-white rounded-2xl shadow-lg">
                    <div className="">
                      <div className="flex flex-row px-4 py-2">
                        <img
                          src={userDetails.picture}
                          alt="Profile"
                          className="h-10 w-10 mt-2 object-cover rounded-full cursor-pointer"
                          onClick={toggleDropdown}
                        />
                        <p onClick={toggleDropdown} className=" px-4 mt-4 text-gray-800 cursor-pointer">
                          {userDetails?.given_name} {userDetails?.family_name}

                        </p>

                      </div>

                      <p onClick={toggleDropdown} className=" px-4 text-gray-500 w-18 text-sm cursor-pointer break">
                        {userDetails?.email}
                      </p>
                      <hr className="my-2" />
                      <p onClick={toggleDropdown} className="px-4 py-2 text-gray-800 cursor-pointer">
                        Account Details
                      </p>
                      <LogoutLink>
                        <p onClick={toggleDropdown} className="px-4 py-2 mb-2 text-gray-800 cursor-pointer">
                          Sign Out
                        </p>
                      </LogoutLink>
                    </div>
                  </div>
                )}

              </>
            ) : (
              <div>
                <button
                  onClick={handleSignIn}
                  className="inline-flex items-center justify-center mb-1 w-full h-8 gap-3 px-5 py-3 text-xs font-medium text-black duration-200 bg-white rounded-lg md:w-auto hover:bg-gray-300 focus:ring-2 focus:ring-offset-2 focus:ring-black"
                  role="button"
                >
                  Sign In
                </button>
              </div>
            )}
          </div>
          <Link
            className="hidden xl:flex gap-2 self-stretch px-4 pt-4 pb-4 text-base font-medium leading-5 rounded-[50px] text-neutral-900 bg-standardCodeAutomation "
            href="tel:+1-850-558-4691"
          >
            <Image
              src="/telephone.png"
              alt="Phone-Icon"
              width={20}
              height={20}
              className="object-cover"
            ></Image>
            <div className="my-auto text-nowrap text-black">850 558 4691</div>
              <Image
              src="/USA-Flag.png"
              alt="USA-Flag-Icon"
              width={20}
              height={20}
              className="object-cover"
            ></Image>
          </Link>

          <div
            className={`xl:hidden absolute top-0 right-0 bottom-0 left-0 w-full h-screen bg-white ease-in duration-300 overflow-y-auto ${menuState.menuIcon ? "translate-x-0" : "translate-x-full"}`}
          >
            <div className="xl:hidden">
              {menuState.menuIcon && (
                <div className="mobile-menu">
                  <ul className="text-black text-sm flex flex-col pt-20 pb-8 px-6">
                    <li className="border-t border-b border-gray-200 border-opacity-50 py-4">
                      <Link href="/" onClick={handleToggleMenuIcon}>
                        Home
                      </Link>
                    </li>
                    <li className="border-b border-gray-200 border-opacity-50 py-4">
                      <div className="" onClick={toggleMenuVisibility}>
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
                                  onClick={handleToggleMenuIcon}
                                >
                                  CMS
                                </Link>
                                <p>
                                  <Link
                                    href={`/services/${linkUrlCMS1}`}
                                    onClick={handleToggleMenuIcon}
                                  >
                                    Manage Digital Content
                                  </Link>
                                </p>
                              </li>
                              <li>
                                <Link
                                  href={`/services/${linkUrlCMS}`}
                                  className="heading"
                                  onClick={handleToggleMenuIcon}
                                >
                                  Headless-CMS
                                </Link>
                                <p>
                                  <Link
                                    href={`/services/${linkUrlCMS}`}
                                    onClick={handleToggleMenuIcon}
                                  >
                                    Customized Headless-CMS
                                  </Link>
                                </p>
                              </li>
                              <li>
                                <Link
                                  href={`/services/${linkMob}`}
                                  className="heading"
                                  onClick={handleToggleMenuIcon}
                                >
                                  Mobile App Development
                                </Link>
                                <p>
                                  <Link
                                    href={`/services/${linkMob}`}
                                    onClick={handleToggleMenuIcon}
                                  >
                                    Transform Idea into Market Leading App
                                  </Link>
                                </p>
                              </li>
                              <li>
                                <Link
                                  href={`/services/${linkUrlSoft}`}
                                  className="heading"
                                  onClick={handleToggleMenuIcon}
                                >
                                  Software Development
                                </Link>
                                <p>
                                  <Link
                                    href={`/services/${linkUrlSoft}`}
                                    onClick={handleToggleMenuIcon}
                                  >
                                    Web Development Solutions
                                  </Link>
                                </p>
                              </li>
                            </ul>

                            <Link href="/services">
                              <p
                                className="flex gap-3 text-black hover:text-[#0a8ffc] hover:underline mt-4 mb-0"
                                onClick={handleToggleMenuIcon}
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
                      <div className="" onClick={toggleAboutVisibility}>
                        About Us
                      </div>
                      {aboutVisible && (
                        <div className="content mt-4 mb-0">
                          <div>
                            <ul className="mega-links-mb">
                              <li>
                                <Link
                                  href="/about/service-summary"
                                  className=""
                                  onClick={handleToggleMenuIcon}
                                >
                                  Service Summary
                                </Link>
                                <p>
                                  <Link
                                    href="/about/service-summary"
                                    onClick={handleToggleMenuIcon}
                                  >
                                    Service Essence
                                  </Link>
                                </p>
                              </li>
                              <li>
                                <Link
                                  href="/lifeatca"
                                  className="heading"
                                  onClick={handleToggleMenuIcon}
                                >
                                  Life At CA
                                </Link>
                                <p>
                                  <Link
                                    href="/lifeatca"
                                    onClick={handleToggleMenuIcon}
                                  >
                                    Employee Experiences
                                  </Link>
                                </p>
                              </li>
                              <li>
                                <Link
                                  href="/partnership-program"
                                  className="heading"
                                  onClick={handleToggleMenuIcon}
                                >
                                  Partner with Us
                                </Link>
                                <p>
                                  <Link
                                    href="/partnership-program"
                                    onClick={handleToggleMenuIcon}
                                  >
                                    Grow Together
                                  </Link>
                                </p>
                              </li>
                              <li>
                                <Link
                                  href="/value-blueprints"
                                  className="heading"
                                  onClick={handleToggleMenuIcon}
                                >
                                  Value BluePrints
                                </Link>
                                <p>
                                  <Link
                                    href="/value-blueprints"
                                    onClick={handleToggleMenuIcon}
                                  >
                                    Efficient Deployment
                                  </Link>
                                </p>
                              </li>
                              <li>
                                <Link
                                  href="/case-studies"
                                  className="heading"
                                  onClick={handleToggleMenuIcon}
                                >
                                  Case-Studies
                                </Link>
                                <p>
                                  <Link
                                    href="/case-studies"
                                    onClick={handleToggleMenuIcon}
                                  >
                                    Success Stories
                                  </Link>
                                </p>
                              </li>
                            </ul>
                          </div>
                        </div>
                      )}
                    </li>
                    <li className="border-b border-gray-200 border-opacity-50 py-4">
                      <Link href="/blogs" onClick={handleToggleMenuIcon}>
                        Blogs
                      </Link>
                    </li>
                    <li className="border-b border-gray-200 border-opacity-50 py-4">
                      <Link href="/career" onClick={handleToggleMenuIcon}>
                        Career
                      </Link>
                    </li>
                    <li className="border-b border-gray-200 border-opacity-50 py-4">
                      <Link href="/technologies" onClick={handleToggleMenuIcon}>
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