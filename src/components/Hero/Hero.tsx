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
                <div className="group w-[220px] h-[220px] md:h-[320px] md:w-[320px] [perspective:1000px]">
                    <div className="relative h-full w-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                        {/* Front Side */}
                        <div className="absolute inset-0">
                            <div className='border-2 border-[#00000016] dark:border-[#ffffff40] h-full rounded-full'>
                                <Image
                                    className='rounded-full p-2 object-cover'
                                    src='/front.png'
                                    layout='fill'
                                    alt='Azar Ahmadov'
                                />
                            </div>
                        </div>

                        {/* Back Side */}
                        <div className="absolute inset-0 h-full w-full rounded-full [transform:rotateY(180deg)] [backface-visibility:hidden]">
                            <div className='h-full rounded-full'>
                                <Image
                                    className='rounded-full p-2 object-cover object-center'
                                    src='/back.png'
                                    layout='fill'
                                    alt='Back Image'
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='text-center pt-3 md:px-[70px]'>
                    <h1 className='text-black dark:text-white text-[22px] md:text-[40px] font-medium'>
                        Hey! I'm Azar Ahmadov.
                    </h1>
                    <h2 className='text-black dark:text-white  text-[17px] md:text-[25px] font-normal mt-1 mb-4'>
                        Front-End Developer
                    </h2>
                    <p className='text-[13px] dark:text-[#ffffffd0]  leading-[20px] md:text-[17px] font-thin md:leading-[26px] text-gray'>
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
                    <a aria-label='cv' download href="/cv/AzarAhmadov(cv,en).pdf" className='bg-gradient-to-l from-stone-800 to-neutral-700  text-white hover:bg-transparent transition-all md:text-[17px] text-[15px] hover:scale-110 gap-2 rounded-full md:px-5 md:py-3 py-2 px-4 flex items-center'
                    >
                        My Cv <MdOutlineFileDownload className='text-[22px]' />
                    </a>
                </div>
                <div className='flex dark:text-black md:justify-end justify-center md:w-[33.3%] w-[100%]'>
                    <Link className='md:text-[17px] dark:bg-white dark:hover:bg-[#fffb] dark:hover:text-black text-[15px] flex items-center gap-2 md:px-5 md:py-3 py-2 px-4 border-[1px] shadow-sm border-[#00000023] rounded-full hover:bg-black hover:text-white transition-all' href={'/about'}> More about Me <IoMdArrowForward className='text-[20px]' /> </Link>
                </div>
            </div>
        </section>
    )
}

export default Hero