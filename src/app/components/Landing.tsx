import { motion } from 'framer-motion';
import React from 'react'
import { FaLongArrowAltUp } from "react-icons/fa";
const Landing = () => {

  
  return (
    <div data-scroll data-scroll-speed="-.3" data-scroll-section className=' bg-zinc-800 '>
      <div className=' py-[180px] px-[50px]'>
      {["we create",'eyeopening','presentation'].map((val,ind)=>
      <div key={val} className='font-letest'>


        
        <div className='flex items-center'>  
          {ind==1&&( <div>< motion.div initial={{width:0}} animate={{width:"100px"}}
          transition={{ease:[0.87, 0, 0.13, 1], duration:1}}
          
          
          className='relative w-[50px] h-[5.7vw] z-20  bg-cover bg-center bg-no-repeat' style={{backgroundImage:"url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmkVjJRQb5BvKmS6SvRRJrrv0yKysCNMM0Ew&s')"}}></ motion.div></div>)}

      <h1 className='text-2xl  tracking-tighter uppercase md:text-8xl 
       ' >{val}</h1>
</div>
    </div>
        
      )}
      
      <div className='h-[1px] w-full  mt-24 bg-gray-400  font-light'></div>
      <div className='md:flex justify-between items-center'>


        {["For public and private companies","From the first pitch to ipo","Start the project"].map((val)=>
        
        <div key={val} className={`text-white mt-5  flex  font-light gap-3 ${val==="Start the project"&& "border border-gray-500 p-3 rounded-lg"}`}>{val}
        {val==="Start the project"&&<div>< FaLongArrowAltUp className=" relative border border-white p-1 text-2xl rounded-lg "/></div>}
        
        
        </div>
      
        )}
      </div>
      

      </div>
     
     






    </div>
  )
}

export default Landing