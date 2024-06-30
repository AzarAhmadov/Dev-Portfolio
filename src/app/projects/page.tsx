import Title from '@/common/Title/Title'
import ProjectsCard from '@/components/Projects/ProjectsCards';
import { ProjectsData } from '@/data/data';
import { Metadata } from 'next';
import React from 'react'
import { LiaLaptopCodeSolid } from "react-icons/lia";

export const metadata: Metadata = {
    title: "All Projects",
}

const page = () => {
    return (
        <>
            <Title title={'All Projects'} icon={<LiaLaptopCodeSolid className='dark:text-white text-[30px]' />} />
            <main className='container px-4 md:px-5 py-5 md:py-7'>
                <div className='grid sm:grid-cols-2 gap-4'>
                    {
                        ProjectsData.map((item, idx) => (
                            <ProjectsCard item={item} key={idx} />
                        ))
                    }
                </div>
            </main>
        </>
    )
}

export default page