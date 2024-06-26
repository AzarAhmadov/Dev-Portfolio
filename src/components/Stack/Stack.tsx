import React from 'react'
import Heading from '@/common/Heading/Heading'
import { StackData } from '@/data/data'
import StackCards from './StackCards'

const Stack = () => {
    return (
        <section className='pt-[55px] md:pt-[100px] pb-10'>
            <Heading title='Stack' href='tech-box' link='Full Stack' />
            <ul className='grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5 mt-7 md:mt-10'>
                {
                    StackData.slice(0, 8).map((item, idx) => (
                        <StackCards item={item} key={idx} />
                    ))
                }
            </ul>
        </section>
    )
}

export default Stack