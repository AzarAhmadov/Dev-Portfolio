import Image from 'next/image'
import Link from 'next/link'
import { IoMdArrowForward } from "react-icons/io";
import { BiMap } from "react-icons/bi";
import { MdOutlineFileDownload } from "react-icons/md";
import React from 'react'

const Hero = () => {
    return (
        <section>
            <div className='pt-2 md:pt-5 flex justify-center items-center flex-col'>
                <div className="md:w-[320px] w-[230px] h-[230px] relative md:h-[320px] rounded-full border-[10px] border-[#00000009]">
                    <Image className='rounded-full object-center' src={'/hero.jpg'} fill objectFit='cover' alt='Azar Ahmadov' />
                </div>
                <div className='text-center pt-3 md:px-[70px]'>
                    <h1 className='color-black text-[22px] md:text-[40px] font-medium'>
                        Hey! I'm Azar Ahmadov.
                    </h1>
                    <h2 className='color-black text-[17px] md:text-[25px] font-normal mt-1 mb-4'>
                        Front-End Developer
                    </h2>
                    <p className='text-[14px] leading-[20px] md:text-[17px] font-thin  md:leading-[26px] text-gray'>
                        I currently reside in Baku. For about 4 years, I have been actively trying to improve my skills in the field of technology and constantly applying what I have learned. I had the opportunity to work in various technology companies, and I am pleased about that.
                    </p>
                </div>
            </div>
            <div className='container flex-wrap flex justify-center gap-5 md:gap-0 md:justify-between items-center pt-6 md:pt-[70px]'>
                <span className='flex items-center gap-2 text-[17px]'>
                    <BiMap className='text-[20px]' />  Baku, Azerbaijan
                </span>
                <Link className=' md:text-[17px] text-[15px] flex items-center gap-2 md:px-5 md:py-3 py-2 px-4 border-[1px] shadow-sm border-[#00000023] rounded-full hover:bg-black hover:text-white transition-all' href={'/about'}> More about Me <IoMdArrowForward className='text-[20px]' /> </Link>
                <a href="#" className='bg-black text-white hover:bg-transparent hover:border-[1px] hover:
                border-[#00000071] hover:text-black transition-all md:text-[17px] text-[15px] hover:scale-90 gap-2 rounded-full md:px-5 md:py-3 py-2 px-4 flex items-center'>
                    My Cv <MdOutlineFileDownload className='text-[22px]' />
                </a>
            </div>
        </section>
    )
}

export default Hero