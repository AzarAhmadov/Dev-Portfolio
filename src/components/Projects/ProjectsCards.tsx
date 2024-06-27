'use client'

import React, { FC } from 'react'
import Link from 'next/link'
import { IoMdArrowForward } from 'react-icons/io'
import { ProjectsDataType } from '@/types/types'
import { LazyLoadImage } from 'react-lazy-load-image-component';

const ProjectsCard: FC<ProjectsDataType> = ({ item }) => {
    return (
        <div className='rounded-lg border-[1px] border-[#0000001d] shadow-sm'>
            <div className='ps-3 pe-3 pt-3'>
                <div className='flex rounded-[10px]'>
                    <LazyLoadImage
                        className='w-full object-cover h-[200px] md:h-[250px] lg:h-[370px] rounded-[10px]'
                        alt={item.name}
                        effect="blur"
                        src={`${item.img}`}
                    />
                </div>
                <div className='flex items-center justify-between py-4'>
                    <h4 className='font-medium md:text-[21px] text-[18px] text-black'>
                        {item.name}
                    </h4>
                    <Link target='_blank' className='md:text-[16px] text-[15px] flex items-center md:gap-2 px-3 md:py-2 gap-1 py-[6px] border-[1px] shadow-md border-[#00000023] rounded-full hover:bg-black hover:text-white transition-all' href={`${item.link}`}> View <IoMdArrowForward className=' text-[18px] md:text-[20px]' /> </Link>
                </div>
            </div>
            <div className='flex items-center gap-3 border-t-[1px] py-4 px-4 border-t-[#0000001d]'>
                {item.lang.map((langItem, idx) => (
                    <img key={idx} className='md:w-10 md:h-10 w-8 h-8 object-cover rounded-full' src={langItem.img} />
                ))}
            </div>
        </div >
    )
}

export default ProjectsCard