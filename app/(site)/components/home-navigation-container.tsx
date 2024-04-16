"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState, useRef } from "react";
import { CgArrowLongRight } from "react-icons/cg";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

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

const linkAI = "/ai-ml-services";
const linkUrlCMS1 = "/cms";
const linkUrlCMS = "/headless-cms";
const linkUrlSoft = "/software-development";
const linkUrlAuto = "/qa-automation-testing";
const linkUrlDigital = "/digital-marketing";
const linkBusiness = "/business-automation";
const linkRobotic = "/robotic-research";

const navItems = [
  {
    path: "/",
    name: "Home",
  },
  {
    path: "/services",
    name: "Services",
  },
  {
    path: "/lifeatca",
    name: "Life at CA",
  },
  {
    path: "/blogs",
    name: "Blogs",
  },
  {
    path: "/career",
    name: "Career",
  },
  {
    path: "/technologies",
    name: "Technologies",
  },
];

export default function HomeNavigationContainer() {
  let pathname = usePathname() || "/";
  const [menuIcon, setIcon] = useState(false);
  const handleSmallerScreenNavigation = () => {
    setIcon(!menuIcon);
  };

  const [menuVisible, setMenuVisible] = useState(false);
  const [mouseInsideMenu, setMouseInsideMenu] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null); // Specify the type of ref

  // Function to hide the mega menu when a link is clicked
  const hideMenu = () => {
    setMenuVisible(false);
  };

  // Function to show the mega menu on hover
  const showMenu = () => {
    setMenuVisible(true);
  };

  const handleMouseEnter = () => {
    setMouseInsideMenu(true);
  };

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
        <Link href={`/`} className="hover:underline my-auto">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/09d382e58784257b38ccca526b1322cf201dacdf4343ff92c6fe39c9ba7a1b1e?apiKey=ce12b64a678e4e2a868af6b5dfd766b9&"
            className="self-start max-w-full aspect-[5] xl:w-[230px] w-[200px]"
          />
        </Link>
        <div
          className="w-1/12 xl:hidden items-center flex justify-end"
          onClick={handleSmallerScreenNavigation}
        >
          {menuIcon ? (
            <AiOutlineClose size={25} className="text-white" />
          ) : (
            <AiOutlineMenu size={25} className="text-white" />
          )}
        </div>
        <div className="xl:flex gap-5 items-end max-md:flex-wrap max-md:max-w-full main-navigation list-none p-0 m-0 transform translate-x-full xl:transform-none fixed top-0 left-0 h-full transition delay-75 ease-in-out w-full bg-white xl:bg-transparent xl:static js-navigation justify-end">
          <ul className="nav-links self-center mx-auto flex gap-10">
            <li>
              <Link href="/" className="hover:underline ">
                Home
              </Link>
            </li>
            <li className="mega-menu relative">
              <Link
                href="javascript:void(0)"
                className="hover:underline"
                onMouseEnter={showMenu}
                onMouseLeave={handleMouseLeave}
              >
                Services
              </Link>
              <div
                ref={menuRef}
                className={`mega-box ${menuVisible ? "visible" : ""}`}
                onMouseLeave={handleMouseLeave}
              >
                <div className="content">
                  <div>
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
                            href={`/services/${linkUrlCMS}`}
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
                          href={`/services/${linkAI}`}
                          className="heading"
                          onClick={hideMenu}
                        >
                          AI & ML Services
                        </Link>
                        <p>
                          <Link href={`/services/${linkAI}`} onClick={hideMenu}>
                            Informed Decision Making Process
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
                            Web & Mobile Development Solutions
                          </Link>
                        </p>
                      </li>
                    </ul>
                    {/* <ul className="mega-links">
                      <li><a href="#">Web development</a>
                      <p>Dynamic user-friendly website</p></li>
                      <li><a href="#">Mobile development </a>
                      <p>Customized applications</p></li>
                      <li><a href="#">QA Manual Testing </a>
                      <p>Thoroughly evaluated Softwares</p></li>
                    </ul> */}
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

                    {/* <h2 className='linkshead'>Devops</h2>
                    <ul className="mega-links">
                      <CgArrowLongRight
                          style={{
                            color: '#5b9ed2',
                          }}
                        />
                      <li><a href="#">Process Integration / Orchestration</a></li>
                      <li><a href="#">Cloud accounting</a></li>
                      <li><a href="#">Devops/ APM</a></li>
                      <li><a href="#">Data Visualization</a></li>
                    </ul> */}
                  </div>
                  {/* <div>
                    <h2 className='linkshead'>Testing</h2>
                    <ul className="mega-links">
                      <li><a href="#">Web development</a></li>
                      <li><a href="#">Mobile development </a></li>
                      <li><a href="#">Web & Mobile </a></li>
                      <li><a href="#">Authentication platforms</a></li>
                      <li><a href="#">RPA</a></li>
                      <li><a href="#">Voice</a></li>
                      <li><a href="#">Automation & Integration</a></li>
                    </ul>
                  </div> */}
                  {/* <div className="grid grid-cols-2 gap-4"> */}
                  {/* <h2 className='linkshead'>Technologies</h2> */}
                  <div>
                    <ul className="mega-links">
                      <li>
                        <Link
                          href={`/services/${linkUrlAuto}`}
                          className="heading"
                          onClick={hideMenu}
                        >
                          QA Automation Testing
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
                          href={`/services/${linkUrlDigital}`}
                          className="heading"
                          onClick={hideMenu}
                        >
                          Digital Marketing
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
                      <li>
                        <Link
                          href={`/services/${linkBusiness}`}
                          className="heading"
                          onClick={hideMenu}
                        >
                          Business Automation
                        </Link>
                        <p>
                          <Link
                            href={`/services/${linkBusiness}`}
                            onClick={hideMenu}
                          >
                            Focus on Strategic Initiatives
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

                      {/* <li><Link href={`/services/${linkUrlManual}`}>QA Manual Testing </Link>
                        <p>Thoroughly evaluated Softwares</p></li> */}
                    </ul>

                    {/* <ul className="mega-links">
                    <li className="flex items-center">
                        <Link href={'/technologies'}>
                          <div className="flex items-center">
                            <img src={imageReact} className="w-7 h-7 mr-2" />
                            <p className="tech-text">React</p>
                          </div>
                        </Link>
                      </li>
                      <li className="flex items-center">
                      <Link href={'/technologies'}>
                          <div className="flex items-center">
                            <img src={imageFigma} className="w-7 h-7 mr-2" />
                            <p className="tech-text">Figma</p>
                          </div>
                        </Link>
                      </li>
                      <li className="flex items-center">
                      <Link href={'/technologies'}>
                          <div className="flex items-center">
                            <img src={imageIOS} className="w-7 h-7 mr-2" />
                            <p className="tech-text">IOS</p>
                          </div>
                        </Link>
                      </li>
                      <li className="flex items-center">
                      <Link href={'/technologies'}>
                          <div className="flex items-center">
                            <img src={imageNum} className="w-6 h-6 mr-2" />
                            <p className="tech-text">Numpy</p>
                          </div>
                        </Link>
                      </li>
                      <li className="flex items-center">
                      <Link href={'/technologies'}>
                          <div className="flex items-center">
                            <img src={imageFlutter} className="w-6 h-6 mr-2" />
                            <p className="tech-text">Flutter</p>
                          </div>
                        </Link>
                      </li>
                   
                    </ul> */}

                    {/* <ul className="mega-links">
                    <li className="flex items-center">
                    <Link href={'/technologies'}>
                          <div className="flex items-center">
                            <img src={imageAnd} className="w-7 h-7 mr-2" />
                            <p className="tech-text">Android</p>
                          </div>
                        </Link>
                      </li>
                    <li className="flex items-center">
                    <Link href={'/technologies'}>
                          <div className="flex items-center">
                            <img src={imageAngular} className="w-6 h-6 mr-2" />
                            <p className="tech-text">Angular</p>
                          </div>
                        </Link>
                      </li>
                      <li className="flex items-center">
                      <Link href={'/technologies'}>
                          <div className="flex items-center">
                            <img src={imageJs} className="w-6 h-6 mr-2" />
                            <p className="tech-text">JavaScript</p>
                          </div>
                        </Link>
                      </li>
                      <li className="flex items-center">
                      <Link href={'/technologies'}>
                          <div className="flex items-center">
                            <img src={imageGo} className="w-7 h-7 mr-2" />
                            <p className="tech-text">Golang</p>
                          </div>
                        </Link>
                      </li>
                      <li className="flex items-center">
                      <Link href={'/technologies'}>
                          <div className="flex items-center">
                            <img src={imageJmeter} className="w-7 h-7 mr-2" />
                            <p className="tech-text">Jmeter</p>
                          </div>
                        </Link>
                      </li>
                  
                    
                   
                    </ul> */}
                    {/* <Link href="/services">
                      <p className="flex gap-3 text-sm font-bold text-black hover:text-[#0a8ffc] hover:underline mt-8">
                        View all
                        <CgArrowLongRight
                          style={{
                            color: '#5b9ed2',
                            marginTop: '-3px',
                            marginBottom: '-2px',
                            height: '25px',
                            width: '25px'
                          }}
                        />
                      </p>
                    </Link> */}
                  </div>
                </div>
              </div>
            </li>
            <li>
              <Link href="/lifeatca" className="hover:underline ">
                Life at CA
              </Link>
            </li>
            <li>
              <Link href="/blogs" className="hover:underline ">
                Blogs
              </Link>
            </li>
            <li>
              <Link href="/career" className="hover:underline ">
                Career
              </Link>
            </li>
            <li>
              <Link href="/technologies" className="hover:underline ">
                Technologies
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
              Let&rsquo;s Skype
            </div>
          </a>

          {/* mobile view */}
          <div
            className={
              menuIcon
                ? "xl:hidden absolute top-[72px] right-0 bottom-0 left-[-100%] flex w-full h-screen bg-slate-800 text-white ease-in duration-300"
                : "xl:hidden absolute top-[72px] right-0 left-0 flex w-full h-screen bg-slate-800 text-white ease-in duration-300"
            }
          >
            <ul className="mx-auto flex flex-col gap-8 pt-12 text-xl text-nowrap text-center">
              {navItems.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.path}
                    className={
                      pathname === item.path
                        ? "hover:underline font-bold"
                        : "hover:underline"
                    }
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
