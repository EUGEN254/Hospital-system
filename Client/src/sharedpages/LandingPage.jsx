import React from 'react'
import Header from '../sharedcomponents/Header'
import About from '../sharedcomponents/About'
import Features from '../sharedcomponents/Features'
import Testimonials from '../sharedcomponents/Testimonials'

const LandingPage = () => {
  return (
    <div className='bg-gray-100 overflow-auto'>
        <Header/>
        <About/>
        <Features/>
        <Testimonials/>
    </div>
  )
}

export default LandingPage