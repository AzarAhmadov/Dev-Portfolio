import Image from 'next/image'
import Link from 'next/link'
import { IoMdArrowForward } from "react-icons/io";
import { BiMap } from "react-icons/bi";
import React from 'react'

const Hero = () => {
    return (
        <section>
            <div className="pt-5 flex justify-center items-center flex-col">
                <div className="w-[340px] relative h-[340px] rounded-full border-[10px] border-[#00000009]">
                    <Image className='rounded-full object-center' src={'/hero.jpg'} fill objectFit='cover' alt='Azar Ahmadov' />
                </div>
                <div className='text-center pt-3 px-[70px]'>
                    <h1 className='color-black text-[40px] font-medium'>
                        Hey! I'm Azar Ahmadov.
                    </h1>
                    <h2 className='color-black text-[25px] font-normal mb-5'>
                        Front-End Developer
                    </h2>
                    <p className='text-[17px] font-thin  leading-[26px] text-gray'>
                        I currently reside in Baku. For about 4 years, I have been actively trying to improve my skills in the field of technology and constantly applying what I have learned. I had the opportunity to work in various technology companies, and I am pleased about that. My goal is to be a dedicated developer who loves his job and tries to do his best. I am happy to help people on issues they lack knowledge on, and I am open to asking for help on issues I lack knowledge on.
                    </p>
                </div>
            </div>
            <div className="container flex justify-between items-center pt-10">
                <span className='flex items-center gap-2 text-[17px]'>
                    <BiMap className='text-[20px]' />  Baku, Azerbaijan
                </span>
                <Link className='flex items-center gap-2 px-5 py-3 border-[1px] shadow-md border-[#00000023] rounded-full hover:bg-black hover:text-white transition-all' href={'/'}> More about Me <IoMdArrowForward className='text-[20px]' /> </Link>
            </div>
        </section>
    )
}

export default Hero