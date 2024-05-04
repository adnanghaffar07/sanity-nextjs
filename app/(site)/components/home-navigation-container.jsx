"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState, useEffect } from "react";
import { CgArrowLongRight } from "react-icons/cg";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Image from "next/image";
import { IonIcon } from '@ionic/react';
import { searchOutline, bookOutline, lockClosedOutline, peopleOutline } from 'ionicons/icons';


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

    const [open, setOpen] = useState(false);
  
    const toggleMenu = () => {
      setOpen(!open);
    };
    useEffect(() => {
      const handleClickOutside = (event) => {
        if (open && !event.target.closest(".menu-box")) {
          setOpen(false);
        }
      };
  
      document.addEventListener("click", handleClickOutside);
  
      return () => {
        document.removeEventListener("click", handleClickOutside);
      };
    }, [open]);
  

  return (
  
    <div className ="justify-center w-full mx-auto bg-gray-100">
    <div x-data="{ open: false }" className ="flex flex-col w-full px-8 py-2 mx-auto md:px-12 md:items-center md:justify-between md:flex-row lg:px-32 max-w-7xl">
      <div className ="flex flex-row items-center justify-between text-black">
      <a className="inline-flex items-center gap-3 text-xl font-bold tracking-tight text-black" href="/">
            <span> ❖ </span>
            <span>Windstatic</span>
          </a>
          <button className="rounded-lg md:hidden focus:outline-none focus:shadow-outline" onClick={toggleMenu}>
            {open ? <AiOutlineClose className="w-6 h-6" /> : <AiOutlineMenu className="w-6 h-6" />}
          </button>
        </div>
        <nav className={`flex-col items-center flex-grow gap-3 p-4 px-5 text-sm font-medium text-gray-500 md:px-0 md:pb-0 md:flex md:justify-center md:flex-row md:ml-4 lg:p-0 md:mt-0 ${open ? 'flex' : 'hidden'}`}>
          <div className="relative lg:mx-auto">
            <button onClick={toggleMenu} className="flex flex-row items-center w-full px-4 py-2 mt-2 hover:text-black focus:outline-none focus:text-gray-500 md:w-auto md:inline md:mt-0 focus:shadow-outline">
              <span> Flyout </span>
              <svg fill="currentColor" viewBox="0 0 20 20" className={`inline size-4 mt-1 ml-1 transition-transform duration-200 transform md:-mt-1 ${open ? 'rotate-180' : 'rotate-0'}`}>
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
              </svg>
            </button>
            <div className="absolute z-10 w-screen max-w-3xl px-2 mt-3 transform -translate-x-1/2 left-1/3 sm:px-0" style={{ display: open ? 'block' : 'none' }}>
              <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="relative grid gap-6 px-5 py-6 bg-white sm:gap-8 sm:p-8">
                  <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                    <div className="grid grid-cols-1 gap-8">
                      <a href="#_" className="inline-flex items-start p-3 -m-3 transition duration-150 ease-in-out rounded-xl hover:bg-gray-50">
                        <div className="">
                          <IonIcon icon={searchOutline} className="text-black size-6 md hydrated" />
                        </div>
                        <div className="ml-4">
                          <p className="text-base font-medium text-black">
                            Explore design work
                          </p>
                          <p className="mt-1 text-sm text-gray-500">
                            Trending designs to inspire you
                          </p>
                        </div>
                      </a>
                    <a href="#_" className ="inline-flex items-start p-3 -m-3 transition duration-150 ease-in-out rounded-xl hover:bg-gray-50">
                      <div className ="">
                        <IonIcon  className ="text-black size-6 md hydrated" name="book-outline" role="img" aria-label="book outline"></IonIcon >
                      </div>
                      <div className ="ml-4">
                        <p className ="text-base font-medium text-black">Blog</p>
                        <p className ="mt-1 text-sm text-gray-500">
                          Interviews, tutorials and more
                        </p>
                      </div>
                    </a>
                    <a href="#_" className ="inline-flex items-start p-3 -m-3 transition duration-150 ease-in-out rounded-xl hover:bg-gray-50">
                      <div className ="">
                        <IonIcon  className ="text-black size-6 md hydrated" name="lock-closed-outline" role="img" aria-label="lock closed outline"></IonIcon >
                      </div>
                      <div className ="ml-4">
                        <p className ="text-base font-medium text-black">Secure</p>
                        <p className ="mt-1 text-sm text-gray-500">
                          Interviews, tutorials and more
                        </p>
                      </div>
                    </a>
                    <a href="#_" className ="inline-flex items-start p-3 -m-3 transition duration-150 ease-in-out rounded-xl hover:bg-gray-50">
                      <div className ="">
                        <IonIcon  className ="text-black size-6 md hydrated" name="people-outline" role="img" aria-label="people outline"></IonIcon >
                      </div>
                      <div className ="ml-4">
                        <p className ="text-base font-medium text-black">Users</p>
                        <p className ="mt-1 text-sm text-gray-500">
                          Trending designs to inspire you
                        </p>
                      </div>
                    </a>
                  </div>
                  <div className ="grid grid-cols-1 gap-3 p-2 lg:p-0 bg-gray-50 rounded-2xl">
                    <div className ="grid items-start h-full gap-6 px-5 py-6 sm:gap-8 sm:p-8">
                      <h3 className ="text-base font-medium text-black">
                        Getting started
                      </h3>
                      <div className ="space-y-2">
                        <a href="#_" className ="flex items-start text-sm font-medium transition duration-150 ease-in-out rounded-lg hover:text-black">
                          Explore design work
                        </a>
                        <a href="#_" className ="flex items-start text-sm text-gray-500 transition duration-150 ease-in-out rounded-lg hover:text-black">
                          Register
                        </a>
                        <a href="#_" className ="flex items-start text-sm text-gray-500 transition duration-150 ease-in-out rounded-lg hover:text-black">
                          Adding users
                        </a>
                        <a href="#_" className ="flex items-start text-sm text-gray-500 transition duration-150 ease-in-out rounded-lg hover:text-black">
                          Video Tutorials
                        </a>
                        <a href="#_" className ="flex items-start text-sm text-gray-500 transition duration-150 ease-in-out rounded-lg hover:text-black">
                          Libraries and SDKs
                        </a>
                        <a href="#_" className ="inline-flex items-start text-sm text-gray-500 transition duration-150 ease-in-out rounded-lg hover:text-black">
                          Adding Plugins
                        </a>
                        <a href="#_" className ="inline-flex items-start text-sm text-gray-500 transition duration-150 ease-in-out rounded-lg hover:text-black">
                          Dashboard templates
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
     
      </nav>
    </div>
  </div>


  );
}