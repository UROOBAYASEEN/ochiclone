"use client"
import Image from 'next/image'
import React, { useState } from 'react'

const Nextfeature = () => {
  const [paragraph, setparagraph] = useState(false)
  const [value, setvalue] = useState("preminumblend")
  const showparagraph=()=>{
setparagraph(true)


setvalue(value==="preminumblend"?"tarawa":"preminumblend")
  }
  const showparagraphnot=()=>{
    setparagraph(false)
 
    
  }

  
  return (
    <div className='h-screen w-screen bg-gray-800 flex mx-4 justify-center items-center relative gap-5 py-10 my-10' onMouseEnter={showparagraph} onMouseLeave={showparagraphnot}>
         
         {
          paragraph &&<div className='absolute top-[40%] left-[40%] right-[50%]'>
              <p className="text-yellow-400 font-bold text-6xl flex justify-center uppercase">
      {value.split('').map((letter, index) => (
        <span
          key={index}
          className="inline-block opacity-0 animate-fade-in"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          {letter}
        </span>
      ))}
    </p>
            
          </div>

         }
         
         
         
     
     <div>

      <h1 className='text-white text-2xl  mb-3'> <span className='h-2 w-2 bg-black rounded-full'></span>tarawa</h1>
     <Image
      src=" https://ochi.design/wp-content/uploads/2023/08/Frame-3875-663x551.jpg"
      alt='this is image'
      height={500}

      width={650}
      />
      
      
     </div>
      
      <div>
      <h1 className='text-white text-2xl  mb-3'>preminum blend</h1>
      <Image
      src="https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-663x551.png"
      alt='this is image'
      height={500}
      width={650}
      />
      
      </div>
      



    </div>
  )
}

export default Nextfeature



