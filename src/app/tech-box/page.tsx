import Title from '@/common/Title/Title'
import StackCards from '@/components/Stack/StackCards'
import { StackData } from '@/data/data'
import { Metadata } from 'next'
import React from 'react'
import { IoCodeSlashSharp } from 'react-icons/io5'

export const metadata: Metadata = {
    title: "My Tech Box",
    description: `Explore Azar Ahmadov's curated collection of tech tools and resources in "My Tech Box". Discover a variety of technologies and innovations presented through interactive stack cards.`,
}

const page = () => {
    return (
        <>
            <Title title={'My Tech Box'} icon={<IoCodeSlashSharp className='text-[25px]' />} />
            <div className='container px-3 py-5 md:py-7'>
                <ul className='grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5'>
                    {
                        StackData.map((item, idx) => (
                            <StackCards item={item} key={idx} />
                        ))
                    }
                </ul>
            </div>
        </>
    )
}

export default page