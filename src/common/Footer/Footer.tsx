'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import { CiLinkedin } from 'react-icons/ci'
import { FaGithub, FaWhatsapp } from 'react-icons/fa'
import { IoMdArrowForward } from 'react-icons/io'
import dynamic from 'next/dynamic'
const Form = dynamic(() => import('@/components/Form/Form'))

const Footer = () => {

    const [modal, setModal] = useState(false)

    const toggle = () => {
        setModal(!modal)
    }

    return (
        <>
            <footer className='flex flex-col items-center justify-center pt-7 pb-[150px] border-t-[1px] border-t-[#00000013]'>
                <h4 className='text-center text-black text-[23px]'>
                    Have a <br />
                    Project Idea?
                </h4>
                <button disabled={modal} onClick={toggle} className='my-4 flex items-center gap-2 md:px-5 px-4 py-2 w-[max-content] md:py-3 border-[1px] shadow-md border-[#00000023] rounded-full hover:bg-black hover:text-white transition-all'> Let's Connect <IoMdArrowForward className='text-[20px]' /> </button>
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

            <Form modal={modal} toggle={toggle} />
        </>
    )
}

export default Footer