import React, { FC } from 'react'
import { StackItem } from '@/types/types'
import Link from 'next/link'

const StackCards: FC<StackItem> = ({ item }) => {
    return (
        <li className='border-[1px] shadow-sm border-[#0000000f] rounded-lg md:px-5 md:py-4 py-3 px-3 transition-all hover:bg-[#7372720f] hover:scale-105'>
            <Link className='flex items-center gap-3 md:gap-5' target='_blank' href={`${item.link}`}>
                <img className='md:w-[55px] w-[40px] h-[40px] object-cover md:h-[55px] rounded-full' src={item.logo} alt={item.name} />
                <span className='text-[14px] md:text-[19px] font-normal'>{item.name}</span>
            </Link>
        </li>
    )
}

export default StackCards