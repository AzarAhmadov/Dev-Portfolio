import Link from 'next/link'
import React from 'react'
import { CiLinkedin } from 'react-icons/ci'
import { FaGithub, FaWhatsapp } from 'react-icons/fa'
import { IoMdArrowForward } from 'react-icons/io'

const Footer = () => {
    return (
        <footer className='flex flex-col items-center justify-center pt-8 pb-8 border-t-[1px] border-t-[#00000013]'>
            <h4 className='text-center text-black text-[23px]'>
                Have a <br />
                Project Idea?
            </h4>
            <Link className='my-4 flex w-m items-center gap-2 px-5 w-[max-content] py-3 border-[1px] shadow-md border-[#00000023] rounded-full hover:bg-black hover:text-white transition-all' href={'/'}> Let's Connect <IoMdArrowForward className='text-[20px]' /> </Link>
            <Link href={'mailto:azarahmadovdev@gmail.com'} className='text-[14px] mt-1 border-[1px] rounded-full px-3 py-1 text-gray border-[#00000044]'>
                azarahmadovdev@gmail.com
            </Link>
            <ul className='flex gap-3 mb-6 mt-5'>
                <li>
                    <Link target='_blank' href={'https://www.linkedin.com/in/azar-ahmadov/'}>
                        <CiLinkedin className='text-icons-bg text-[30px] hover:text-black transition-all hover:scale-110' />
                    </Link>
                </li>
                <li>
                    <Link target='_blank' href={'https://github.com/AzarAhmadov'}>
                        <FaGithub className='text-icons-bg text-[30px] hover:text-black transition-all hover:scale-110' />
                    </Link>
                </li>
                <li>
                    <Link target='_blank' href={'https://api.whatsapp.com/send?phone=9940558210637'}>
                        <FaWhatsapp className='text-icons-bg text-[30px] hover:text-black transition-all hover:scale-110' />
                    </Link>
                </li>
            </ul>
            <p className='text-gray'>
                © Copyright 2024. All rights Reserved.
            </p>
            <p className='mt-2 font-medium'>
                <span className='text-gray font-normal'>Made by</span> Azar Ahmadov
            </p>
        </footer>
    )
}

export default Footer