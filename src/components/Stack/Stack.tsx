import Heading from '@/common/Heading/Heading'
import { StackData } from '@/data/data'
import Link from 'next/link'
import React from 'react'

const Stack = () => {
    return (
        <section className='pt-[100px] pb-10'>
            <Heading title='Stack' href='' link='Full Stack' />
            <ul className='grid grid-cols-4 gap-5 mt-10'>
                {
                    StackData.slice(0, 8).map((item, idx) => (
                        <li key={idx} className='border-[1px] shadow-sm border-[#0000000f] rounded-lg px-5 py-4 transition-all hover:bg-[#7372720f] hover:scale-105'>
                            <Link className='flex items-center gap-5' target='_blank' href={`${item.link}`}>
                                <img className='w-[55px] object-cover h-[55px] rounded-full' src={item.logo} alt={item.name} />
                                <span className='text-[19px] font-normal'>{item.name}</span>
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </section>
    )
}

export default Stack