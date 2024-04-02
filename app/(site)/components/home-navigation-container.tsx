'use client'
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";

import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';


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
  }
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
        <div className="w-1/12 xl:hidden items-center flex justify-end" onClick={handleSmallerScreenNavigation}>
          {menuIcon ?
            (<AiOutlineClose size={25} className='text-white' />)
            :
            (<AiOutlineMenu size={25} className='text-white' />)
          }
        </div>
        <div className="xl:flex gap-5 items-end max-md:flex-wrap max-md:max-w-full main-navigation list-none p-0 m-0 transform translate-x-full xl:transform-none fixed top-0 left-0 h-full transition delay-75 ease-in-out w-full bg-white xl:bg-transparent xl:static js-navigation justify-end">


          <ul className='nav-links self-center mx-auto flex gap-10 self-center'>
            <li><Link href="/" className="hover:underline ">Home</Link></li>
            <li className="mega-menu my-auto duration-300 ease-in">
              <Link href="/services" className="hover:underline ">Services</Link>
              <div className="mega-box">
                <div className='content'>
                  <div>
                    <Link href={`/`} className="hover:underline my-auto">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/09d382e58784257b38ccca526b1322cf201dacdf4343ff92c6fe39c9ba7a1b1e?apiKey=ce12b64a678e4e2a868af6b5dfd766b9&"
                        className="self-start max-w-full aspect-[5] xl:w-[266px] w-[200px]"
                      />
                    </Link>
                  </div>
                  <div>
                    <h2 className='linkshead'>CMS</h2>
                    <ul className="mega-links">
                      <li><a href="#">Ecommerce</a></li>
                      <li><a href="#">Headless CMS</a></li>
                      <li><a href="#">Headless CMS & Ecommerce</a></li>
                      <li><a href="#">Headless</a></li>
                    </ul>
                    <h2 className='linkshead'>Payment platforms</h2>
                    <ul className="mega-links">
                      <li><a href="#">Headless Ecommerce</a></li>
                      <li><a href="#">Email Automation</a></li>
                      <li><a href="#">CRM</a></li>
                      <li><a href="#">Web analytics</a></li>
                    </ul>
                    <h2 className='linkshead'>Devops</h2>
                    <ul className="mega-links">
                      <li><a href="#">Process Integration / Orchestration</a></li>
                      <li><a href="#">Cloud accounting</a></li>
                      <li><a href="#">Devops/ APM</a></li>
                      <li><a href="#">Data Visualization</a></li>
                    </ul>
                  </div>
                  <div>
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
                  </div>
                </div>
                
              </div>
            </li>
            <li><Link href="/lifeatca" className="hover:underline ">Life at CA</Link></li>
            <li><Link href="/blogs" className="hover:underline ">Blogs</Link></li>
            <li><Link href="/career" className="hover:underline ">Career</Link></li>
            <li><Link href="/technologies" className="hover:underline ">Technologies</Link></li>
          </ul>

          <a className="hidden xl:flex gap-3 justify-between self-stretch px-4 py-2 text-xl bg-sky-500 rounded-full shadow-sm max-md:px-5" href="https://join.skype.com/invite/crU4cXW4bttb">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/fac08cad98e0659b7b1fba8569319dcbc8cff9340fcddf511cabd61603becea7?apiKey=ce12b64a678e4e2a868af6b5dfd766b9&"
              className="aspect-[0.97] w-[27px]"
            />
            <div className="my-auto text-nowrap text-white">Let&rsquo;s Skype</div>
          </a>

          {/* mobile view */}
          <div className={menuIcon ?
            'xl:hidden absolute top-[72px] right-0 bottom-0 left-[-100%] flex w-full h-screen bg-slate-800 text-white ease-in duration-300'
            :
            'xl:hidden absolute top-[72px] right-0 left-0 flex w-full h-screen bg-slate-800 text-white ease-in duration-300'
          }>
            <ul className='mx-auto flex flex-col gap-8 pt-12 text-xl text-nowrap text-center'>
              {navItems.map((item, index) => (
                <li key={index}>
                  <Link href={item.path} className={pathname === item.path ? "hover:underline font-bold" : "hover:underline"}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};


