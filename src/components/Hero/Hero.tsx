import Image from 'next/image'
import Link from 'next/link'
import { IoMdArrowForward } from "react-icons/io";
import { BiMap } from "react-icons/bi";
import { MdOutlineFileDownload } from "react-icons/md";
import React from 'react'

const Hero = () => {
    return (
        <section>
            <div className='pt-3 md:pt-5 flex justify-center items-center flex-col'>
                <div className="md:w-[320px] w-[260px] h-[260px] relative md:h-[320px] rounded-full border-[10px] border-[#00000009]">
                    <Image className='rounded-full object-center' src={'/hero.jpg'} fill objectFit='cover' alt='Azar Ahmadov' />
                </div>
                <div className='text-center pt-3 md:px-[70px]'>
                    <h1 className='color-black text-[24px] md:text-[40px] font-medium'>
                        Hey! I'm Azar Ahmadov.
                    </h1>
                    <h2 className='color-black text-[19px] md:text-[25px] font-normal mb-5'>
                        Front-End Developer
                    </h2>
                    <p className='text-[14px] leading-[22px] md:text-[17px] font-thin  md:leading-[26px] text-gray'>
                        I currently reside in Baku. For about 4 years, I have been actively trying to improve my skills in the field of technology and constantly applying what I have learned. I had the opportunity to work in various technology companies, and I am pleased about that. My goal is to be a dedicated developer who loves his job and tries to do his best.
                    </p>
                </div>
            </div>
            <div className='container flex-wrap flex justify-center gap-5 md:gap-0 md:justify-between items-center pt-10 md:pt-[70px]'>
                <span className='flex items-center gap-2 text-[17px]'>
                    <BiMap className='text-[20px]' />  Baku, Azerbaijan
                </span>
                <a href="#" className='bg-black text-white hover:bg-transparent hover:border-[1px] hover:
                border-[#00000071] hover:text-black transition-all hover:scale-90 gap-2 rounded-full px-6 py-3 flex items-center'>
                    My Cv <MdOutlineFileDownload className='text-[22px]' />
                </a>
                <Link className='flex items-center gap-2 px-5 py-3 border-[1px] shadow-md border-[#00000023] rounded-full hover:bg-black hover:text-white transition-all' href={'/'}> More about Me <IoMdArrowForward className='text-[20px]' /> </Link>
            </div>
        </section>
    )
}

export default Hero