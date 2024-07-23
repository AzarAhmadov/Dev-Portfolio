import React, { FC, memo } from 'react'
import { StackItem } from '@/types/types'
import Link from 'next/link'

const StackCards: FC<StackItem> = ({ item }) => {
    return (
        <li>
            <Link className='flex items-center gap-3 md:gap-5 border-[1px] dark:text-white shadow-sm border-[#0000000f] dark:border-[#ffffff2b] rounded-lg md:px-5 md:py-4 py-3 px-3 transition-all hover:bg-[#7372720f] hover:scale-105' target='_blank' href={`${item.link}`}>
                <img loading='lazy' className='md:w-[55px] w-[35px] h-[35px] object-cover md:h-[55px] rounded-full' src={item.logo} alt={item.name} />
                <span className='text-[14px] md:text-[18px] font-normal'>{item.name}</span>
            </Link>
        </li>
    )
}

export default memo(StackCards)