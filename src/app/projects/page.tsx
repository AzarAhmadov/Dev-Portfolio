import Title from '@/common/Title/Title'
import ProjectsCard from '@/components/Projects/ProjectsCards';
import { ProjectsData } from '@/data/data';
import React from 'react'
import { PiProjectorScreenBold } from "react-icons/pi";

const page = () => {
    return (
        <>
            <Title title={'All Projects'} icon={<PiProjectorScreenBold className='text-[30px]' />} />
            <div className='container px-3 pb-10 pt-4'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
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