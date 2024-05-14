import React from 'react'
import { RegisterLink, LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Image from 'next/image';
import Link from 'next/link';

const LoginLogoutButton = async () => {
    const { getUser, isAuthenticated } = getKindeServerSession()

    return (
        <div className='flex flex-row gap-7 items-center justify-end lg:px-10 px-5 lg:pb-0 py-4 xl:pt-8 w-full max-md:px-4 max-md:max-w-full flex-grow lg:absolute fixed top-12 z-20 xl:bg-transparent xl:h-auto h-[92px]'>

            {(await isAuthenticated()) ? (
                <>
                    <LogoutLink>
                        <button className="inline-flex items-center justify-center mt-4 w-full h-8 gap-3 px-5 py-3 text-xs font-medium text-black duration-200 bg-gray-400 rounded-lg md:w-auto hover:bg-gray-700 focus:ring-2 focus:ring-offset-2 focus:ring-black" role="button">
                            Log Out
                        </button>
                    </LogoutLink>
                </>
            ) : (
                <>
                    <LoginLink postLoginRedirectURL="/dashboard">
                        <button className="inline-flex items-center justify-center mt-4 w-full h-8 gap-3 px-5 py-3 text-xs font-medium text-black duration-200 bg-gray-400 rounded-lg md:w-auto hover:bg-gray-700 focus:ring-2 focus:ring-offset-2 focus:ring-black" role="button">
                            Sign In
                        </button>
                    </LoginLink>
                    <RegisterLink postLoginRedirectURL="/dashboard">
                        <button className="inline-flex items-center justify-center mt-4 w-full h-8 gap-3 px-5 py-3 text-xs font-medium text-black duration-200 bg-gray-400 rounded-lg md:w-auto hover:bg-gray-700 focus:ring-2 focus:ring-offset-2 focus:ring-black" role="button">
                            Sign Up
                        </button>
                    </RegisterLink>
                </>
            )}

            {/* <Link
                className="hidden xl:flex gap-3 justify-between self-stretch px-4 py-2 text-xl  bg-standardCodeAutomation rounded-full shadow-sm max-md:px-5"
                href="tel:+1-850-558-4691"
            >
                <Image
                    src="/telephone.png"
                    alt="Phone-Icon"
                    width={30}
                    height={30}
                ></Image>

                <div className="my-auto text-nowrap text-black">850 558 4691</div>
            </Link> */}
        </div>

    )
}

export default LoginLogoutButton