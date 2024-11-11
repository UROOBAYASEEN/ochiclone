import { motion } from 'framer-motion'


import React from 'react'

const Heading = () => {
  
  return (
    <div data-scroll data-scroll-speed="1.2" className=' w-full py-10 bg-[#12473b]  rounded-3xl '>
 

       
       <div className='border-t-2 border-b-2 border-zinc-600 flex whitespace-nowrap font-letest mt-10  overflow-hidden'>
        <motion.h1 initial={{x:"0"}} animate={{x:"-100%"}} transition={{ease:"linear",duration:3, repeat:Infinity}} className='text-6xl  md:text-9xl leading-none font-semibold uppercase '>  we are ochi </ motion.h1>
        <motion.h1  initial={{x:"0"}} animate={{x:"-100%"}} transition={{ease:"linear",duration:3,repeat:Infinity}}  className='text-6xl   md:text-9xl  leading-none font-semibold uppercase'>  we are ochi</motion.h1>
        <motion.h1 initial={{x:"0"}} animate={{x:"-100%"}} transition={{ease:"linear",duration:3, repeat:Infinity}} className='text-6xl    md:text-9xl leading-none font-semibold uppercase '>  we are ochi </ motion.h1>
        <motion.h1  initial={{x:"0"}} animate={{x:"-100%"}} transition={{ease:"linear",duration:3,repeat:Infinity}}  className='text-6xl  md:text-9xl leading-none font-semibold uppercase'>  we are ochi</motion.h1>
       
       
       </div>
    </div>
  )
}

export default Heading