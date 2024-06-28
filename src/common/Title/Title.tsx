import React, { FC } from 'react'
import Link from 'next/link'
import { GoArrowLeft } from "react-icons/go";
import { TitleType } from '@/types/types';

const Title: FC<TitleType> = ({ title, icon }) => {
    return (
        <div className='border-b-[1px] border-b-[#00000011] px-4'>
            <div className='flex items-center justify-between py-4 md:py-5 container'>
                <Link className='border-[1px] border-[#000] rounded-full px-3 py-1 hover:bg-black transition-all hover:text-white' href={'/'}> <GoArrowLeft className='text-[23px]' /> </Link>
                <h3 className='justify-self-center font-medium text-[20px] md:text-[27px]'>
                    {title}
                </h3>
                {icon}
            </div>
        </div>
    )
}

export default Title