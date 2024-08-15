'use client'

import React, { FC, memo } from 'react'
import Link from 'next/link'
import { IoMdArrowForward } from 'react-icons/io'
import { ProjectsDataType } from '@/types/types'
import { LazyLoadImage } from 'react-lazy-load-image-component';

const ProjectsCard: FC<ProjectsDataType> = ({ item }) => {
    return (
        <div className='group [perspective:1000px]'>
            <div className='rounded-lg border-[1px] border-[#0000001d] dark:border-[#ffffff2b] shadow-sm transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(5deg)] group-hover:shadow-xl'>
                <div className='ps-3 pe-3 pt-3'>
                    <div className='rounded-[10px]'>
                        <LazyLoadImage
                            className='w-full aspect-[16/9] rounded-[10px]'
                            alt={item.name}
                            loading='lazy'
                            effect="blur"
                            src={`${item.img}`}
                        />
                    </div>
                    <div className='flex items-center justify-between py-4'>
                        <h4 className='font-medium md:text-[21px] text-[18px] dark:text-white text-black'>
                            {item.name}
                        </h4>
                        <Link
                            target='_blank'
                            className='md:text-[16px] dark:text-black dark:bg-white dark:hover:text-black text-[15px] dark:hover:bg-[#ffffffe7] flex items-center md:gap-2 px-3 md:py-2 gap-1 py-[6px] border-[1px] shadow-md border-[#00000023] rounded-full hover:bg-black hover:text-white transition-all'
                            href={`${item.link}`}
                        >
                            View <IoMdArrowForward className='text-[18px] md:text-[20px] transition-transform group-hover:translate-x-1' />
                        </Link>
                    </div>
                </div>
                <div className='flex items-center gap-3 border-t-[1px] py-4 px-4 border-t-[#0000001d] dark:border-t-[#ffffff2b]'>
                    {item.lang.map((langItem, langIdx) => (
                        <figure key={langIdx} className='transition-transform duration-300 group-hover:translate-y(-2px)'>
                            <img
                                className='md:w-10 md:h-10 w-8 h-8 object-cover object-center rounded-full'
                                src={langItem.img}
                                alt={langItem.title}
                            />
                        </figure>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default memo(ProjectsCard)