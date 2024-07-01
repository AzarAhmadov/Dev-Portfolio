import React, { FC, memo } from 'react'
import Link from 'next/link'
import { GoArrowLeft } from "react-icons/go";
import { TitleType } from '@/types/types';

const Title: FC<TitleType> = ({ title, icon }) => {
    return (
        <div className='border-b-[1px] border-b-[#00000011] dark:border-b-[#ffffff2b]'>
            <div className='flex items-center px-4 md:px-5 justify-between py-4 md:py-5 container'>
                <Link aria-label='Go Back' className='border-[1px] border-[#000] rounded-full dark:text-white dark:border-[#fff] dark:hover:bg-white dark:hover:text-black px-3 py-1 hover:bg-black transition-all hover:text-white' href={'/'}> <GoArrowLeft className='text-[23px]' /> </Link>
                <h3 className='justify-self-center dark:text-white font-medium text-[20px] md:text-[27px]'>
                    {title}
                </h3>
                {icon}
            </div>
        </div>
    )
}

export default memo(Title)