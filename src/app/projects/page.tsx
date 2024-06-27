import Title from '@/common/Title/Title'
import ProjectsCard from '@/components/Projects/ProjectsCards';
import { ProjectsData } from '@/data/data';
import React from 'react'
import { LiaLaptopCodeSolid } from "react-icons/lia";

const page = () => {
    return (
        <>
            <Title title={'All Projects'} icon={<LiaLaptopCodeSolid className='text-[30px]' />} />
            <div className='container px-3 py-5 md:py-7'>
                <div className='grid sm:grid-cols-2 gap-4'>
                    {
                        ProjectsData.map((item, idx) => (
                            <ProjectsCard item={item} key={idx} />
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default page