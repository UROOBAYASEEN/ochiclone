"use client"
import React, { useEffect,useState } from 'react'


const Eyes = () => {

  const [Rotate, setRotate] = useState(0)

useEffect(()=>{

window.addEventListener('mousemove',(e)=>{
let mouseX=e.clientX
let mouseY=e.clientY
const daltax=mouseX-window.innerWidth/2
const daltay=mouseY-window.innerHeight/2

let angel=Math.atan2(daltay,daltax)*(180/Math.PI)
setRotate(angel-180)


})


})
  
  return (
    <div className='w-full h-screen  overflow-hidden '>
        <div data-scroll data-scroll-speed="-.7" className='h-full relative  w-screen  bg-Eyeimage bg-cover bg-no-repeat bg-center'>
         
        <div className='absolute  left-1/2 top-1/2  -translate-x-[50%] flex gap-5 -translate-y-[50%] '>
          
          <div className='w-[100px] lg:w-[200px]  h-[100px] lg:h-[200px] rounded-full bg-zinc-200 flex justify-center items-center'>
            <div className='bg-black w-2/3 h-2/3 rounded-full flex justify-center items-center relative'>
            <div className={ `w-full ` }  style={{ transform: `rotate(${Rotate}deg)` }}>
            <div className='bg-zinc-100 w-[20px]  h-[20px] rounded-full'></div> 
            </div>
           
           
            </div>
          </div>
          <div className=' w-[100px] lg:w-[200px]  h-[100px] lg:h-[200px] rounded-full bg-zinc-200 flex justify-center items-center'>
          <div className='bg-black w-2/3 h-2/3 rounded-full  flex justify-center items-center'>

          <div className='w-full h-10  ' 
          
 style={{ transform: `rotate(${Rotate}deg)` }}>
            <div className='bg-zinc-100 w-[20px]  h-[20px] rounded-full' ></div> 
            </div>
          </div>
          </div>
          
          
          </div>

        </div>
    </div>
  )
}

export default Eyes