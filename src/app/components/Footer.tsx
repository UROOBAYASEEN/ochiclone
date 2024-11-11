import React from 'react'

const Footer = () => {
  return (
    <div className=' w-screen bg-zinc-900  h-screen flex justify-between item-center gap-10 py-10 px-6 relative'>

<div className='reltive'>
    <h1 className='uppercase  text-3xl lg:text-9xl tracking-tighter text-white  font-bold '>Eye-</h1>
    <h1 className='uppercase  text-3xl lg:text-9xl
     tracking-tighter text-white font-bold pb-[200px]'>opening</h1>
<div className='absolute bottom-4  font-light text-5xl '>ochi</div>
</div>
<div className=''>
<h1 className='uppercase   text-2xl    lg:text-5xl tracking-tighter text-white  font-bold '>Presentation</h1>

{
    ["Instagram",'Facebook','LinkdeIn',"Twitter",'ochi@gmail.com'].map((val)=>
    
    <a key={val}  className='py-5 underline underline-black block'>{val}</a>
    
    )
}
</div>

    </div>
  )
}

export default Footer