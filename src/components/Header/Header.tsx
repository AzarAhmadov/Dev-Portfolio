import Link from 'next/link';
import { FC } from 'react'
import { CiLinkedin } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Header: FC = () => {
    return (
        <header className='py-6 bg-gray-100'>
            <div className="container">
                <div className="row flex justify-between items-center">
                    <div className="h-left">
                        <span className="relative bg-aviable-bg text-green font-normal rounded-full py-2 px-5">
                            Available for work
                            <span className="absolute flex left-[10px] top-1/2 transform -translate-y-1/2 w-[5px] h-[5px] bg-green rounded-full"></span>
                        </span>
                    </div>
                    <div className="h-right">
                        <ul className='flex gap-3'>
                            <li>
                                <Link target='_blank' href={'https://www.linkedin.com/in/azar-ahmadov/'}>
                                    <CiLinkedin className='text-icons-bg text-[30px] hover:text-black transition-all' />
                                </Link>
                            </li>
                            <li>
                                <Link target='_blank' href={'https://github.com/AzarAhmadov'}>
                                    <FaGithub className='text-icons-bg text-[30px] hover:text-black transition-all' />
                                </Link>
                            </li>
                            <li>
                                <Link target='_blank' href={'https://api.whatsapp.com/send?phone=9940558210637'}>
                                    <FaWhatsapp className='text-icons-bg text-[30px] hover:text-black transition-all' />
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header