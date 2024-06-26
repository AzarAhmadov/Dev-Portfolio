
import { HeadingType } from '@/types/types'
import Link from 'next/link'
import React, { FC } from 'react'
import { IoMdArrowForward } from 'react-icons/io'

const Heading: FC<HeadingType> = ({ title, href, link }) => {
    return (
        <section>
            <div className="container">
                <div className="flex items-center justify-between">
                    <h4 className='text-[30px] font-medium'> {title} </h4>
                    <Link className='flex items-center gap-2 px-5 py-3 border-[1px] shadow-md border-[#00000023] rounded-full hover:bg-black hover:text-white transition-all' href={`/${href}`}>
                        {link} <IoMdArrowForward className='text-[20px]' />
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Heading