"use client"
import React from 'react'
import Header from './components/Header'
import Landing from './components/Landing'
import Heading from './components/Heading'
import About from './components/About'
import Eyes from './components/Eyes'
import Features from './components/Features'
import Cards from './components/Cards'
import Ready from './components/Ready'
import NextFeatures from './components/Nextfeature'
import Footer from './components/Footer'
import LocomotiveScroll from 'locomotive-scroll';
import { useEffect } from 'react'

const Page = () => {
 
useEffect(()=>{

  const locomotiveScroll = new LocomotiveScroll();
})
  return (

    <div className=' text-white  bg-zinc-900 mb-20 w-screen '>

<Header/>
<Landing/>
<Heading/>
<About/>
<Eyes/>


<Cards/>
<NextFeatures/>
<Ready/>
<Footer/>
    </div>
  )
}

export default Page