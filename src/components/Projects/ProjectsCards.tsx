import React, { FC } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { IoMdArrowForward } from 'react-icons/io'
import { ProjectsDataType } from '@/types/types'

const ProjectsCard: FC<ProjectsDataType> = ({ item }) => {
    return (
        <div className='rounded-lg border-[1px] border-[#0000001d] shadow-sm'>
            <div className='ps-3 pe-3 pt-3'>
                <div className="relative w-full h-[200px]  md:h-[250px] lg:h-[370px]">
                    <Image fill src={`${item.img}`} className='w-full object-cover rounded-[10px]' alt='app' />
                </div>
                <div className='flex items-center justify-between py-4'>
                    <h4 className='font-medium md:text-[21px] text-[18px] text-black'>
                        {item.name}
                    </h4>
                    <Link target='_blank' className='text-[16px] flex items-center gap-2 px-3 py-2 border-[1px] shadow-md border-[#00000023] rounded-full hover:bg-black hover:text-white transition-all' href={`${item.link}`}> View <IoMdArrowForward className='text-[20px]' /> </Link>
                </div>
            </div>
            <div className='flex items-center gap-3 border-t-[1px] py-4 px-4 border-t-[#0000001d]'>
                {item.lang.map((langItem, idx) => (
                    <img key={idx} className='md:w-10 md:h-10 w-8 h-8 object-cover rounded-full' src={langItem.img} alt="" />
                ))}
            </div>
        </div>
    )
}

export default ProjectsCard