import Title from '@/common/Title/Title'
import StackCards from '@/components/Stack/StackCards'
import { StackData } from '@/data/data'
import { Metadata } from 'next'
import React from 'react'
import { IoCodeSlashSharp } from 'react-icons/io5'

export const metadata: Metadata = {
    title: "My Tech Box",
}

const page = () => {
    return (
        <>
            <Title title={'My Tech Box'} icon={<IoCodeSlashSharp className='dark:text-white text-[25px]' />} />
            <main className='container px-4 md:px-5 py-5 md:py-7'>
                <ul className='grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5'>
                    {
                        StackData.map((item, idx) => (
                            <StackCards item={item} key={idx} />
                        ))
                    }
                </ul>
            </main>
        </>
    )
}

export default page