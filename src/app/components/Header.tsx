"use client"
import React from 'react'
import { IoMdMenu } from "react-icons/io";
import { useState } from 'react';

import { RxCross1 } from "react-icons/rx";
const Header = () => {
    const [Menu, setMenu] = useState(true)
    
  return (<div className='fixed  left-0 right-0 w-screen bg-zinc-900 top-0'>
    <div className='py-5 z-10  justify-between px-12 flex'>

<div className='font-mont text-4xl mx-3'>ochi</div>

<div className='md:hidden'>
    { Menu?<div className='font-4xl text-white pt-2'>
        < IoMdMenu onClick={()=>{
            setMenu(!Menu)
        }}/>
    </div>:<div className='font-4xl text-white pt-2'>
< RxCross1 onClick={()=>{
            setMenu(!Menu)
        }}/>
        <div className='fixed bg-zinc-800 h-screen  w-full top-[50px] left-0 right-0 bottom-0 z-[100%]'>
{["home","about","contact"].map((val)=>
<h1 key={val} className='py-10 text-white font-light text-3xl  border border-b-2  hover:bg-zinc-400 font-letest tracking-tighter px-4' onClick={()=>{

    setMenu(!Menu)
}}>{val}</h1>
)}
        </div>
        </div>
        }
</div>
<div className=' gap-5 hidden md:flex md:visible'>

    {
        ["services","ourwork","about us","Insights","CONTACT"].map((val,index)=>
        <a key={val}    className={`font-mont text-2xl capitalize font-light ${index==4&&"ml-32"}`}>{val}</a>
        
        )

    }
</div>


    </div>
    </div>
  )
}

export default Header