import React from 'react'

const Cards = () => {
  return (
    <div className='w-full h-screen bg-zinc-900 gap-5 item-center  md:flex'>
<div className='cardcontainer w-1/2 h-[60vh] my-5 mx-5'>
<div className='card w-full h-full bg-[#004D43] rounded-2xl flex items-center justify-center relative'>
   <div> <h1 className='uppercase text-3xl font-bold text-[#CDEA68]'>ochi</h1>
   <button className='p-2 border border-1 border-[#CDEA68] mt-10 rounded-xl absolute left-3  bottom-4'>2016-2022</button> </div>

</div> 


</div>

<div className='cardcontainer  h-[300px] flex gap-5 my-5 mx-5 '>
<div className='card w-full h-full bg-[#233835] rounded-2xl flex justify-center  items-center relative'>
<h1 className='uppercase text-3xl font-bold text-[#CDEA68]'>CLUTCH</h1>
<button className='p-2 mx-2 border border-1 border-[#CDEA68] mt-10 rounded-xl absolute left-3  bottom-4'>rating 5.0 on clutch</button> 

</div> <div className='card w-full h-full bg-[#244641] rounded-2xl flex justify-center  items-center relative'>
<h1 className='uppercase text-2xl font-bold '> 
      <button className=' mr-8 border border-1 border-[#CDEA68] mt-10 rounded-xl absolute left-3  bottom-4'>business book</button> 

    <img className='w-[200px] h-[200px]'  alt='images' src='https://cdn.prod.website-files.com/5d816b07d269385f68dbcab0/5ea29a574423326d48ee3ee9_TFA-Hero-Badge-01-white.svg'></img>
</h1>
</div> 
</div>

    </div>

  )
}

export default Cards