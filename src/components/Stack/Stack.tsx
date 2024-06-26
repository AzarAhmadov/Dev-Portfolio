import React from 'react'
import Heading from '@/common/Heading/Heading'
import { StackData } from '@/data/data'
import StackCards from './StackCards'

const Stack = () => {
    return (
        <section className='pt-[100px] pb-10'>
            <Heading title='Stack' href='' link='Full Stack' />
            <ul className='grid grid-cols-4 gap-5 mt-10'>
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