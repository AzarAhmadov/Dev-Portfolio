'use client'

import React from 'react'
import Link from 'next/link'
import { IoHomeOutline } from "react-icons/io5";
import { FaCode } from "react-icons/fa6";
import { GrPersonalComputer } from "react-icons/gr";
import { LuUser2 } from "react-icons/lu";
import { usePathname } from 'next/navigation';

const Navigation = () => {

    const pathname = usePathname()

    return (
        <section className='fixed left-[50%] translate-x-[-50%] bottom-10'>
            <nav className='flex justify-center gap-3 bg-[#FBFBFC]/70 backdrop-blur-lg md:px-3 py-2 px-2 border-[1px] border-[#00000014] rounded-full'>
                <Link
                    aria-label="Home"
                    href={'/'}
                    className={`${pathname === '/' ? 'bg-[#000] text-white' : 'bg-[#fff]'} transition-all shadow-md rounded-full w-[50px] h-[50px] flex items-center justify-center shrink-0`}
                >
                    <IoHomeOutline className={`${pathname === '/' ? 'scale-90' : 'scale-100'}  text-[25px]`} />
                </Link>
                <Link
                    aria-label="About"
                    href={'/about'}
                    className={`${pathname === '/about' ? 'bg-[#000] text-white' : 'bg-[#fff]'} transition-all shadow-md rounded-full w-[50px] h-[50px] flex items-center justify-center shrink-0`}
                >
                    <LuUser2 className={`${pathname === '/about' ? 'scale-90' : 'scale-100'} text-[25px]`} />
                </Link>
                <Link
                    aria-label="Tech Box"
                    href={'/tech-box'}
                    className={`${pathname === '/tech-box' ? 'bg-[#000] text-white' : 'bg-[#fff]'} transition-all shadow-md rounded-full w-[50px] h-[50px] flex items-center justify-center shrink-0`}
                >
                    <FaCode className={`${pathname === '/tech-box' ? 'scale-90' : 'scale-100'} text-[25px]`} />
                </Link>
                <Link
                    aria-label="Projects"
                    href={'/projects'}
                    className={`${pathname === '/projects' ? 'bg-[#000] text-white' : 'bg-[#fff]'} transition-all shadow-md rounded-full w-[50px] h-[50px] flex items-center justify-center shrink-0`}
                >
                    <GrPersonalComputer className={`${pathname === '/projects' ? 'scale-90' : 'scale-100'} text-[25px]`} />
                </Link>
            </nav>
        </section>
    )
}

export default Navigation