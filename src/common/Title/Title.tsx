import React, { FC } from 'react'
import Link from 'next/link'
import { GoArrowLeft } from "react-icons/go";
import { TitleType } from '@/types/types';

const Title: FC<TitleType> = ({ title, icon }) => {
    return (
        <div>
            <div className='flex items-center justify-between py-6'>
                <Link className='border-[1px] border-[#000] rounded-full px-3 py-2 hover:bg-black transition-all hover:text-white' href={'/'}> <GoArrowLeft className='text-[23px]' /> </Link>
                <h3 className='justify-self-center font-normal text-[22px]'>
                    {title}
                </h3>
                {icon}
            </div>
        </div>
    )
}

export default Title