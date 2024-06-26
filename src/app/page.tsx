import Header from '@/components/Header/Header'
import Hero from '@/components/Hero/Hero'
import Projects from '@/components/Projects/Projects'
import Stack from '@/components/Stack/Stack'
import React from 'react'

const page = () => {
  return (
    <div className='container'>
      <Header />
      <main>
        <Hero />
        <Stack />
        <Projects />
      </main>
    </div>
  )
}

export default page