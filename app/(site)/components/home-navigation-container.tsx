"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState, useRef } from "react";
import { CgArrowLongRight } from "react-icons/cg";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Image from "next/image";

const imageFigma = "/figma.png";
const imageIOS = "/ios.png";
const imageNum = "/numpy.png";
const imageFlutter = "/fluttrt.png";
const imageReact = "/react.png";
const imageAngular = "/angular.png";
const imageGo = "/golang.png";
const imageJmeter = "/jmeter.png";
const imageJs = "/js.png";
const imageAnd = "/android.png";

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

  const handleToggleMenu = () => {
    setIcon(!menuIcon);
  };
  const handleSmallerScreenNavigation = () => {
    setIcon(!menuIcon);
  };

  const [menuVisible, setMenuVisible] = useState(false);
  const [aboutVisible, setAboutVisible] = useState(false);

  const menuRef = useRef<HTMLDivElement>(null); // Ref for Services mega menu
  const aboutRef = useRef<HTMLDivElement>(null);

  const hideMenu = () => {
    setMenuVisible(false);
    // setAboutVisible(false);
  };

  const showMenu = () => {
    setMenuVisible(true);
    // setAboutVisible(false); // Ensure About Us mega menu is hidden when Services mega menu is shown
  };

  const aboutShow = () => {
    setAboutVisible(true);
    setMenuVisible(false); // Ensure Services mega menu is hidden when About Us mega menu is shown
  };

  const aboutHide = () => {
    setAboutVisible(false);
  };


  const toggleMenuVisibility = () => {
    setMenuVisible((prevMenuVisible) => !prevMenuVisible);
    setAboutVisible((prevMenuVisible) => !prevMenuVisible);

  };

  const [menuOpen, setMenuOpen] = useState(true);

  const toggleMenu = () => {
    setMenuVisible((prevMenuVisible) => !prevMenuVisible);
  };



  //////////////////// 

  const [barVisible, setBarVisible] = useState({
    services: false,
    about: false,
  });

  const showBar = (menu: any) => {
    setBarVisible({ ...barVisible, [menu]: true });
  };

  const hideBar = (menu: any) => {
    setBarVisible({ ...barVisible, [menu]: false });
    setTimeout(() => {
      setMenuVisible(false);
      setAboutVisible(false);
    }, 1000);
  };









  // const handleMouseEnter = () => {
  //   setMouseInsideMenu(true);
  // };

  const handleMouseLeave = (event: React.MouseEvent) => {
    const isMouseInsideMenu =
      menuRef.current instanceof Node &&
      menuRef.current.contains(event.relatedTarget as Node);
    const isMouseOnServiceLink = event.currentTarget.contains(
      event.relatedTarget as Node
    );
    if (!isMouseInsideMenu && !isMouseOnServiceLink && menuVisible) {
      hideMenu();
    }
  };




  return (
    <nav className="navbar flex flex-col items-center lg:px-10 px-5 lg:pb-0 py-4 xl:pt-8 w-full max-md:px-4 max-md:max-w-full flex-grow lg:absolute fixed top-0 z-20 xl:bg-transparent xl:h-auto h-[72px]">
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
          <ul className="nav-links self-center mx-auto flex gap-10">
            <li>
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
            <li className="mega-menu relative">
              <Link
                href="javascript:void(0)"
              >
                <span
                  className={` ${barVisible.services ? "text-black" : "text-white"}`}
                  onMouseEnter={() => showBar("services")}
                  onMouseLeave={() => hideBar("services")}
                ></span>
                <span
                  className={`  ${currentPath.startsWith("/case-study/")
                    ? "text-black"
                    : "text-white"
                    }`}
                >
                  Services
                  <svg
                    className={`w-4 h-4 inline-block ml-1 transform ${barVisible.services ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={4}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </span>
              </Link>
              <div

                className={`mega-box ${barVisible.services ? "visible" : ""}`}

              >
                <div className="border-b border-gray-200 border-opacity-50 py-3">
                  <span className="px-4" style={{ fontWeight: "500", fontSize: "17px" }}>Services</span></div>

                <div
                  className={`content ${currentPath.startsWith("/case-study/")
                    ? " p-4 rounded-md"
                    : ""
                    }`}
                >

                  <div className="mt-2 px-4">
                    <ul className="mega-links">
                      <li>

                        <Link
                          href={`/services/${linkUrlCMS1}`}
                          className="heading"
                          onClick={hideMenu}
                        >

                          CMS
                        </Link>
                        <p>
                          <Link
                            href={`/services/${linkUrlCMS1}`}
                            onClick={hideMenu}
                          >
                            Manage Digital Content
                          </Link>
                        </p>
                      </li>
                      <li>
                        <Link
                          href={`/services/${linkUrlCMS}`}
                          className="heading"
                          onClick={hideMenu}
                        >
                          Headless-CMS
                        </Link>
                        <p>
                          <Link
                            href={`/services/${linkUrlCMS}`}
                            onClick={hideMenu}
                          >
                            Customized Headless-CMS
                          </Link>
                        </p>
                      </li>

                      <li>
                        <Link
                          href={`/services/${linkUrlSoft}`}
                          className="heading"
                          onClick={hideMenu}
                        >
                          Software Development
                        </Link>
                        <p>
                          <Link
                            href={`/services/${linkUrlSoft}`}
                            onClick={hideMenu}
                          >
                            Web Development Solutions
                          </Link>
                        </p>
                      </li>
                      <li>
                        <Link
                          href={`/services/${linkUrlDigital}`}
                          className="heading"
                          onClick={hideMenu}
                        >
                          Design Services
                        </Link>
                        <p>
                          <Link
                            href={`/services/${linkUrlDigital}`}
                            onClick={hideMenu}
                          >
                            Boost your Online Presence
                          </Link>
                        </p>
                      </li>
                    </ul>

                    <Link href="/services">
                      <p
                        className="flex gap-3 text-sm font-bold text-black hover:text-[#0a8ffc] hover:underline mt-8"
                        onClick={hideMenu}
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

                  <div className="mt-2 px-4">
                    <ul className="mega-links">
                      <li>
                        <Link
                          href={`/services/${linkUrlAuto}`}
                          className="heading"
                          onClick={hideMenu}
                        >
                          QA Testing & Automation
                        </Link>
                        <p>
                          {" "}
                          <Link
                            href={`/services/${linkUrlAuto}`}
                            onClick={hideMenu}
                          >
                            Ensure the Highest Quality
                          </Link>
                        </p>
                      </li>
                      <li>
                        <Link
                          href={`/services/${linkMob}`}
                          className="heading"
                          onClick={hideMenu}
                        >
                          Mobile App evelopment
                        </Link>
                        <p>
                          <Link
                            href={`/services/${linkMob}`}
                            onClick={hideMenu}
                          >
                            Transform Idea into Market Leading App{" "}
                          </Link>
                        </p>
                      </li>

                      <li>
                        <Link
                          href={`/services/${linkAI}`}
                          className="heading"
                          onClick={hideMenu}
                        >
                          AI Services
                        </Link>
                        <p>
                          <Link href={`/services/${linkAI}`} onClick={hideMenu}>
                            Informed Decision Making Process
                          </Link>
                        </p>
                      </li>
                      <li>
                        <Link
                          href={`/services/${linkRobotic}`}
                          className="heading"
                          onClick={hideMenu}
                        >
                          Robotic Research
                        </Link>
                        <p>
                          <Link
                            href={`/services/${linkRobotic}`}
                            onClick={hideMenu}
                          >
                            Tackle the Complex Robotic Challanges
                          </Link>
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li className="mega-menu relative">


              <Link href="javascript:void(0)"
              > <span
              className={` ${barVisible.about ? "text-black" : "text-white"}`}
              onMouseEnter={() => showBar("about")}
              onMouseLeave={() => hideBar("about")}
            ></span>
            <span
              className={`  ${currentPath.startsWith("/case-study/")
                ? "text-black"
                : "text-white"
                }`}
            >
              About Us
              <svg
                className={`w-4 h-4 inline-block ml-1 transform ${barVisible.about ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={4}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </span>
          </Link>
              <div

                className={`mega-box ${barVisible.about ? "visible" : ""}`}
              >
                <div className="border-b border-gray-200 border-opacity-50 py-3">
                  <span className="px-4" style={{ fontWeight: "500", fontSize: "17px" }}>About Company</span></div>

                <div
                  className={`content ${currentPath.startsWith("/case-study/")
                    ? "p-4 rounded-md"
                    : ""
                    }`}
                >

                  <div className="mt-2 px-4">
                    <ul className="mega-links">
                      <li>

                        <Link
                          href="/case-study"
                          className="heading"
                          onClick={hideMenu}
                        >

                          Case-Studies
                        </Link>
                        <p>
                          <Link
                            href="/case-study"
                            onClick={hideMenu}
                          >
                            Success Stories                          </Link>
                        </p>
                      </li>
                      <li>
                        <Link
                          href="/blogs"
                          className="heading"
                          onClick={hideMenu}
                        >
                          Blogs                        </Link>
                        <p>
                          <Link
                            href="/blogs"
                            onClick={hideMenu}
                          >
                            Tech Insights                          </Link>
                        </p>
                      </li>

                      <li>
                        <Link
                          href="/career"
                          className="heading"
                          onClick={hideMenu}
                        >
                          Careers                        </Link>
                        <p>
                          <Link
                            href="/career"
                            onClick={hideMenu}
                          >
                            Join Our Team                          </Link>
                        </p>
                      </li>

                    </ul>
                  </div>

                  <div className="mt-2 px-4">
                    <ul className="mega-links">
                      <li>
                        <Link
                          href="/"
                          className="heading"
                          onClick={hideMenu}
                        >
                          Brochure Downloads                        </Link>
                        <p>
                          {" "}
                          <Link
                            href="/"
                            onClick={hideMenu}
                          >
                            Resources
                          </Link>
                        </p>
                      </li>
                      <li>
                        <Link
                          href="/"
                          className="heading"
                          onClick={hideMenu}
                        >
                          News                        </Link>
                        <p>
                          <Link
                            href="/"
                            onClick={hideMenu}
                          >
                            Latest Updates                          </Link>
                        </p>
                      </li>
                      <li>
                        <Link
                          href="/lifeatca"
                          className="heading"
                          onClick={hideMenu}
                        >
                          Life at CA                        </Link>
                        <p>
                          <Link
                            href="/lifeatca"
                            onClick={hideMenu}
                          >

                            Employee Experiences                          </Link>
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li>
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
            <li>
              <Link href="/career">
                <span
                  className={`hover:underline  ${currentPath.startsWith("/case-study/")
                    ? "text-black"
                    : "text-white"
                    }`}
                >
                  Career
                </span>
              </Link>
            </li>
            <li>
              <Link href="/technologies">
                <span
                  className={`hover:underline  ${currentPath.startsWith("/case-study/")
                    ? "text-black"
                    : "text-white"
                    }`}
                >
                  Technologies
                </span>
              </Link>
            </li>
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
              Let's talk:+1-850-558-4691 
            </div>
          </a>

         {/* mobile view */}
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
                                                style={{fontWeight: "600", fontSize: "13px"}}

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
    </nav>
  );
}