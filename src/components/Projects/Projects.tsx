import React from 'react'
import Heading from '@/common/Heading/Heading'
import { ProjectsData } from '@/data/data'
import ProjectsCard from './ProjectsCards'

const Projects = () => {
    return (
        <section className='pt-[50px] pb-10'>
            <Heading title='Projects' href='projects' link='All Projects' />

            <div className='grid grid-cols-2 gap-4 mt-10'>
                {
                    ProjectsData.slice(0, 4).map((item, idx) => (
                        <ProjectsCard item={item} key={idx} />
                    ))
                }
            </div>
        </section>
    )
}

export default Projects