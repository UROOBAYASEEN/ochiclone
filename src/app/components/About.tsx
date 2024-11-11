import React from 'react'

const  About = () => {
  return (
     <div  className=' w-screen  py-20 rounded-t-[20px]  bg-[#CDEA68] '> 

<h1 className='text-black font-letest text-3xl md:text-5xl  mx-4 lg:text-6xl tracking-[-2px] px-2  pb-20'>Ochi is a strategic presentation agency for forward-thinking businesses that need to <span className='underline '> raise funds, sell products, explain complex ideas, and hire great people.</span></h1>
   <div className='w-full border-t-[1px] border-zinc-500 px-3 justify-between py-10 gap-3 md:flex '>
    <div className='w-1/2 '> <h1 className='font-letest text-6xl text-black  tracking-tighter font-light'>Our approach:</h1>
    <button className='px-10  flex gap-10  items-center py-4 bg-zinc-900 mt-10 rounded-2xl'>Read more
        <div className='w-2  h-2 bg-zinc-100 rounded-full'></div>
    </button>
    
    
    </div>
   
   
    <div className='bg-[#a3b36c] w-[250px]  h-[60vh] md:w-[400px] mx-4 rounded-2xl mt-10 md:mt-0 bg-center bg-cover bg-no-repeat' style={{ backgroundImage: `url('https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg')` }}
    >
  
    </div>

   </div>
    </div>
  )
}
export default  About