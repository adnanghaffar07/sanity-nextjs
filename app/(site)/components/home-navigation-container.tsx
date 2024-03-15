"use client";

import styles from "./home-navigation-container.module.css";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
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
  const [menuIcon, setIcon] = useState (false);
  const handleSmallerScreenNavigation = () =>
  {
    setIcon( !menuIcon );
  }

  
  return (
    <div className="flex flex-col items-center lg:px-10 px-5 lg:pb-0 py-4 xl:pt-8 w-full max-md:px-4 max-md:max-w-full flex-grow lg:absolute fixed top-0 z-20 xl:bg-transparent xl:h-auto h-[72px]">
      <div className="flex gap-5 justify-between w-full max-w-[1582px] max-md:flex-wrap max-md:max-w-full text-white">
        <Link href={`/`} className="hover:underline my-auto">
          <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/09d382e58784257b38ccca526b1322cf201dacdf4343ff92c6fe39c9ba7a1b1e?apiKey=ce12b64a678e4e2a868af6b5dfd766b9&"
          className="self-start max-w-full aspect-[5] xl:w-[266px] w-[200px]"
        />
        </Link>
        <div className="w-1/12 xl:hidden items-center flex justify-end" onClick={handleSmallerScreenNavigation}>
          {menuIcon ?
            (<AiOutlineClose size={25} className='text-white' /> )
            :
            (<AiOutlineMenu size={25} className='text-white' />)
          }
        </div>
        <div className="xl:flex gap-5 items-end max-md:flex-wrap max-md:max-w-full main-navigation list-none p-0 m-0 transform translate-x-full xl:transform-none fixed top-0 left-0 h-full transition delay-75 ease-in-out w-full bg-white xl:bg-transparent xl:static js-navigation justify-end">
          {/* {pages.map((page) => (
            <Link key={page._id} href={`/${page.slug}`} className="hover:underline my-auto">
              {page.title}
            </Link>
          ))} */}
        <nav className="mx-auto flex gap-10 self-center text-xl font-light leading-normal">

            {navItems.map((item, index) => {
              const isActive = item.path === pathname;

              return (
                // <Link
                //   key={item.path}
                //   className={`hover:underline my-auto duration-300 ease-in ${
                //     isActive ? "text-zinc-100" : "text-zinc-400"
                //   }`}
                //   href={item.path}
                // >
                //   <span>{item.name}</span>
                // </Link>
                <Link
                  key={item.path}
                  className={`hover:underline my-auto duration-300 ease-in`}
                  href={item.path}
                >
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </nav>
          <a className="flex gap-3 justify-between self-stretch px-4 py-2 text-xl bg-sky-500 rounded-full shadow-sm max-md:px-5" href="">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/fac08cad98e0659b7b1fba8569319dcbc8cff9340fcddf511cabd61603becea7?apiKey=ce12b64a678e4e2a868af6b5dfd766b9&"
              className="aspect-[0.97] w-[27px]"
            />
            <div className="my-auto text-nowrap">Let&rsquo;s Skype</div>
          </a>
          {/* Smaller screen - Navbar */}
          <div className={menuIcon ?
          'xl:hidden absolute top-[72px] right-0 bottom-0 left-[-100%] flex w-full h-screen bg-slate-800 text-white ease-in duration-300'
          :
          'xl:hidden absolute top-[72px] right-0 left-0 flex w-full h-screen bg-slate-800 text-white ease-in duration-300'
          }>
            <nav className="mx-auto flex flex-col gap-8 pt-12 text-xl text-nowrap text-center">
              {navItems.map((item, index) => {
                const isActive = item.path === pathname;

                return (
                  // <Link
                  //   onClick={handleSmallerScreenNavigation}
                  //   key={item.path}
                  //   className={`hover:underline my-auto duration-300 ease-in ${
                  //     isActive ? "text-zinc-100" : "text-zinc-400"
                  //   }`}
                  //   href={item.path}
                  // >
                  //   <span>{item.name}</span>
                  // </Link>
                  <Link
                    onClick={handleSmallerScreenNavigation}
                    key={item.path}
                    className={`hover:underline duration-300 ease-in`}
                    href={item.path}
                  >
                    <span>{item.name}</span>
                  </Link>
                );
              })}
            </nav>
          </div>
      </div>
    </div>
    </div>
  );
};