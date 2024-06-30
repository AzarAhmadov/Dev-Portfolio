import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { IoMdArrowForward } from "react-icons/io";
import { BiMap } from "react-icons/bi";
import { MdOutlineFileDownload } from "react-icons/md";

const Hero = () => {
    return (
        <section>
            <div className='pt-2 md:pt-5 flex justify-center items-center flex-col'>
                <div className="md:w-[320px] w-[230px] h-[230px] relative md:h-[320px] rounded-full border-[10px] dark:border-[#ffffff2e] border-[#00000009]">
                    <Image className='rounded-full object-center' src={'/hero.jpg'} fill objectFit='cover' alt='Azar Ahmadov' />
                </div>
                <div className='text-center pt-3 md:px-[70px]'>
                    <h1 className='text-black dark:text-white text-[22px] md:text-[40px] font-medium'>
                        Hey! I'm Azar Ahmadov.
                    </h1>
                    <h2 className='text-black dark:text-white  text-[17px] md:text-[25px] font-normal mt-1 mb-4'>
                        Front-End Developer
                    </h2>
                    <p className='text-[14px] dark:text-[#ffffffd0]  leading-[20px] md:text-[17px] font-thin md:leading-[26px] text-gray'>
                        I currently reside in Baku. For about 4 years, I have been actively trying to improve my skills in the field of technology and constantly applying what I have learned. I had the opportunity to work in various technology companies, and I am pleased about that.
                    </p>
                </div>
            </div>
            <div className='container flex flex-wrap justify-center md:justify-between gap-5 gap-x-8 md:gap-x-0 md:gap-0 pt-6 md:pt-[70px]'>
                <div className='flex md:w-[33.3%]'>
                    <span className='flex items-center dark:text-white gap-2 text-[17px]'>
                        <BiMap className='text-[20px]' />  Baku, Azerbaijan
                    </span>
                </div>
                <div className='flex justify-center md:w-[33.3%]'>
                    <a download href="/cv/AzarAhmadov(cv,en).pdf" className='bg-black dark:bg-[#283747] dark:text-white dark:hover:bg-[#fffb] dark:hover:text-black text-white hover:bg-transparent hover:border-[1px] hover:
                border-[#00000071] hover:text-black transition-all md:text-[17px] text-[15px] hover:scale-90 gap-2 rounded-full md:px-5 md:py-3 py-2 px-4 flex items-center'>
                        My Cv <MdOutlineFileDownload className='text-[22px]' />
                    </a>
                </div>
                <div className='flex dark:text-black md:justify-end justify-center md:w-[33.3%] w-[100%]'>
                    <Link className=' md:text-[17px] dark:bg-white dark:hover:bg-[#fffb] dark:hover:text-black text-[15px] flex items-center gap-2 md:px-5 md:py-3 py-2 px-4 border-[1px] shadow-sm border-[#00000023] rounded-full hover:bg-black hover:text-white transition-all' href={'/about'}> More about Me <IoMdArrowForward className='text-[20px]' /> </Link>
                </div>
            </div>
        </section>
    )
}

export default Hero