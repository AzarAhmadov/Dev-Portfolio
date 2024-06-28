'use client'

import React, { FC } from 'react'
import { InfoType } from '@/types/types';
import { MdCalendarMonth } from "react-icons/md";

const Info: FC<InfoType> = ({ icon, title, desc, company, date, companyIcon }) => {

    return (
        <section className='flex justify-start gap-3'>
            {icon}
            <div className='flex items-start gap-1 flex-col'>
                <h4 className='text-[16px] md:text-[20px] text-black'>{title}</h4>
                <span className='flex items-center gap-2 text-[14px] md:text-[17px] mt-1 font-normal'>
                    {companyIcon}
                    {company}
                </span>
                {
                    desc && <ul className='flex flex-col gap-[10px] mt-1'>
                        {desc}
                    </ul>
                }
                <span className='text-gray mt-2 text-[13px] md:text-[15px] flex items-center gap-[5px]'>
                    <MdCalendarMonth className='text-[15px] md:text-[17px] text-gray flex-shrink-0' />  {date}
                </span>
            </div>
        </section>
    )
}

export default Info