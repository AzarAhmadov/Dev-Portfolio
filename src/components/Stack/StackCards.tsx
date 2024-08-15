import React, { FC, memo } from 'react'
import { StackItem } from '@/types/types'
import Link from 'next/link'

const StackCards: FC<StackItem> = ({ item }) => {
    return (
        <li className="group [perspective:1000px]">
            <Link
                className='flex items-center gap-3 md:gap-5 border-[1px] dark:text-white shadow-sm border-[#0000000f] dark:border-[#ffffff2b] rounded-lg md:px-5 md:py-4 py-3 px-3 transition-all hover:bg-[#7372720f] relative w-full [transform-style:preserve-3d] group-hover:[transform:rotateY(-10deg)] duration-500'
                target='_blank'
                href={`${item.link}`}
            >
                <div className="relative flex items-center gap-4 md:gap-6 [backface-visibility:hidden]">
                    <figure>
                        <img
                            loading='lazy'
                            className='md:w-[55px] w-[35px] h-[35px] object-cover md:h-[55px] rounded-full'
                            src={item.logo}
                            alt={item.name}
                        />
                    </figure>
                    <span className='text-[14px] md:text-[18px] font-normal'>{item.name}</span>
                </div>
            </Link>
        </li>
    )
}

export default memo(StackCards)