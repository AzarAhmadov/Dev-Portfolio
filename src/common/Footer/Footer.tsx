'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import { CiLinkedin } from 'react-icons/ci'
import { FaGithub, FaWhatsapp } from 'react-icons/fa'
import { IoMdArrowForward } from 'react-icons/io'
import dynamic from 'next/dynamic'
const Form = dynamic(() => import('@/components/Form/Form'))
import { GiWolfHead } from "react-icons/gi";

const Footer = () => {

    const [modal, setModal] = useState(false)

    const toggle = () => {
        document.body.classList.toggle('active')
        setModal(!modal)
    }

    return (
        <>
            <footer className='flex flex-col items-center justify-center pt-7 pb-[130px] border-t-[1px] border-t-[#00000013] dark:border-t-[#ffffff2b]'>

                <h4 className='text-center text-black dark:text-white text-[23px]'>
                    Do you want to <br /> contact me?
                </h4>

                <button disabled={modal} onClick={toggle} className='my-4 flex items-center gap-2 dark:bg-white dark:hover:text-black dark:hover:bg-[#ffffffe7] md:px-5 px-4 py-2 w-[max-content] md:py-3 border-[1px] shadow-md border-[#00000023] rounded-full hover:bg-black hover:text-white transition-all'> Let's Contact <IoMdArrowForward className='text-[20px]' /> </button>

                <Link aria-label="gmail" href={'mailto:azarahmadovdev@gmail.com'} className='hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black  transition-all hover:scale-105  text-[14px] dark:border-[#ffffffb6] dark:text-[#ffffffd3] mt-1 border-[1px] rounded-full px-3 py-1 text-gray border-[#00000044]'>
                    azarahmadovdev@gmail.com
                </Link>

                <ul className='flex gap-3 mb-6 mt-5'>
                    <li>
                        <Link target='_blank' href={'https://www.linkedin.com/in/azar-ahmadov/'}>
                            <CiLinkedin aria-label="LinkedIn" className='text-icons-bg dark:text-white dark:hover:text-[#ffffffc6] text-[30px] hover:text-black transition-all hover:scale-110' />
                        </Link>
                    </li>
                    <li>
                        <Link target='_blank' href={'https://github.com/AzarAhmadov'}>
                            <FaGithub aria-label="Github" className='text-icons-bg dark:text-white dark:hover:text-[#ffffffc6]  text-[30px] hover:text-black transition-all hover:scale-110' />
                        </Link>
                    </li>
                    <li>
                        <Link target='_blank' href={'https://api.whatsapp.com/send?phone=9940558210637'}>
                            <FaWhatsapp aria-label="Whatsapp" className='text-icons-bg dark:text-white dark:hover:text-[#ffffffc6] text-[30px] hover:text-black transition-all hover:scale-110' />
                        </Link>
                    </li>
                </ul>

                <p className='text-gray text-[14px] md:text-[16px] dark:text-[#ffffffcf]'>
                    © Copyright 2024. All rights Reserved.
                </p>

                <p className='mt-2 text-[13px] md:text-[15px] dark:text-white font-medium flex items-center'>
                    <span className='text-gray dark:text-[#ffffffcf] font-normal'>Made by</span> <GiWolfHead className='text-[22px] ms-2 me-1' /> Azar Ahmadov
                </p>

            </footer>

            <Form modal={modal} toggle={toggle} />
        </>
    )
}

export default Footer