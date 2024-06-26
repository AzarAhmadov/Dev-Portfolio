import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import Hero from '@/components/Hero/Hero'
import Projects from '@/components/Projects/Projects'
import Stack from '@/components/Stack/Stack'
import React from 'react'

const page = () => {
  return (
    <>
      <div className='container px-3 md:px-5'>
        <Header />
        <main>
          <Hero />
          <Stack />
          <Projects />
        </main>
      </div>
      <Footer />
    </>
  )
}

export default page