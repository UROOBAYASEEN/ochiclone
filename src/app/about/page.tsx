"use client"
import { motion } from 'framer-motion';
import React, { useRef } from 'react'

const Page = () => {
const ref = useRef(null);
  return (
    <div ref={ref} className='h-screen w-full bg-zinc-900 relative 
    overflow-hidden'>
        <motion.div drag dragConstraints={ref} dragElastic={7} className="h-52 w-52 bg-slate-500 absolute"></motion.div>        
    </div>
  )
}

export default Page