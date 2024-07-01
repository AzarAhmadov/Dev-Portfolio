import Link from 'next/link';
import { FC } from 'react'
import { CiLinkedin } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Header: FC = () => {
    return (
        <header className='py-6'>
            <div className='flex justify-between items-center'>
                <div>
                    <span className='md:text-[16px] text-[15px] relative ps-7 pe-5 bg-aviable-bg text-green font-normal rounded-full py-2'>
                        Available for work
                        <span className='absolute flex left-[13px] top-1/2 transform -translate-y-1/2 animate-borderPulse w-[8px] h-[8px] bg-green rounded-full'></span>
                    </span>
                </div>
                <div>
                    <ul className='flex gap-3'>
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
                </div>
            </div>
        </header>
    )
}

export default Header