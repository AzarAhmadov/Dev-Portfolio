
import React, { FC, memo } from 'react'
import { HeadingType } from '@/types/types'
import Link from 'next/link'
import { IoMdArrowForward } from 'react-icons/io'

const Heading: FC<HeadingType> = ({ title, href, link }) => {
    return (
        <section>
            <div className='flex items-center justify-between'>
                <h4 className='text-[21px] dark:text-white md:text-[25px] font-medium'> {title} </h4>
                <Link className='flex items-center gap-2 px-3 text-[15px] md:text-[17px] md:px-4 py-2 border-[1px] shadow-md dark:border-[#ffffffa4] border-[#00000023] hover:dark:bg-white dark:hover:text-black dark:text-white rounded-full hover:bg-black hover:text-white transition-all' href={`/${href}`}>
                    {link} <IoMdArrowForward className='text-[18px]' />
                </Link>
            </div>
        </section>
    )
}

export default memo(Heading)