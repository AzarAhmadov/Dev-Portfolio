'use client'

import React, { FC, memo } from 'react'
import { InfoType } from '@/types/types';
import { MdCalendarMonth } from "react-icons/md";

const Info: FC<InfoType> = ({ icon, title, desc, company, date, companyIcon }) => {
    return (
        <section className='flex justify-start gap-3'>
            {icon}
            <div className='flex items-start gap-1 flex-col'>
                <h4 className='text-[16px] font-medium md:text-[20px] dark:text-white text-black'>{title}</h4>
                <span className='flex items-center gap-2 dark:text-[#ffffffe8] text-[14px] md:text-[17px] mt-1 font-normal'>
                    {companyIcon}
                    {company}
                </span>
                {
                    desc && <ul className='flex flex-col gap-[5px] md:gap-[10px] mt-1'>
                        {desc}
                    </ul>
                }
                <span className='text-gray mt-2 text-[13px] md:text-[15px] dark:text-[#ffffffc8] flex items-center gap-[5px]'>
                    <MdCalendarMonth className='text-[17px] mr-[3.3px] flex  items-start md:text-[20px] text-gray dark:text-[#ffffffc8] flex-shrink-0' />
                    {date}
                </span>
            </div>
        </section>
    )
}

export default memo(Info)