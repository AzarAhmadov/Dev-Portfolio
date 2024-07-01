import React from 'react'
import Header from '@/components/Header/Header'
const Projects = dynamic(() => import('@/components/Projects/Projects'))
const Stack = dynamic(() => import('@/components/Stack/Stack'))
import Hero from '@/components/Hero/Hero'
import dynamic from 'next/dynamic'

const page = () => {
  return (
    <>
      <div className='container px-4 md:px-5'>
        <Header />
        <main>
          <Hero />
          <Stack />
          <Projects />
        </main>
      </div>
    </>
  )
}

export default page