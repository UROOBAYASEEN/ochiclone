"use client";
import Image from "next/image";
import React, { useState } from "react";

const Nextfeature2 = () => {
  const [paragraph, setParagraph] = useState(false);
  const [value, setValue] = useState("AH2&MattHorn");

  const showParagraph = () => {
    setParagraph(true);
    setValue(value === "AH2&MattHorn" ? "CardboardSpaceship" : "AH2&MattHorn");
  };

  const hideParagraph = () => {
    setParagraph(false);
  };

  return (
    <div>
      <div
        className="w-screen bg-gray-800 flex flex-col lg:flex-row mx-4 justify-center items-center relative gap-5 py-10 my-10"
        onMouseEnter={showParagraph}
        onMouseLeave={hideParagraph}
      >
        {paragraph && (
          <div className="absolute top-[40%] left-1/2 transform -translate-x-1/2 lg:top-[30%] lg:left-[30%]">
            <p className="text-yellow-400 font-bold text-2xl md:text-4xl flex justify-center uppercase">
              {value.split("").map((letter, index) => (
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
        )}

        {/* First Section */}
        <div className="flex flex-col items-center lg:w-1/2">
          <h1 className="text-white text-lg md:text-2xl mb-3">
            <span className="h-2 w-2 bg-black rounded-full inline-block mr-2"></span>
            Cardboard Spaceship
          </h1>
          <Image
            src="https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-663x551.png"
            alt="Cardboard Spaceship Image"
            height={500}
            width={650}
            className="max-w-full h-auto"
          />
          <div className="flex gap-4 mt-4">
            <h1 className="py-2 px-5 border-white border rounded-2xl text-white">
              Brand Template
            </h1>
          </div>
        </div>

        {/* Second Section */}
        <div className="flex flex-col items-center lg:w-1/2">
          <h1 className="text-white text-lg md:text-2xl mb-3">AH2 & Matt Horn</h1>
          <Image
            src="https://ochi.design/wp-content/uploads/2024/08/Frame-481692-1-663x551.png"
            alt="AH2 & Matt Horn Image"
            height={500}
            width={650}
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Nextfeature2;












// "use client"
// import Image from 'next/image'
// import React, { useState } from 'react'

// const Nextfeature2 = () => {
//     const [paragraph, setparagraph] = useState(false)
//     const [value, setvalue] = useState("AH2&MattHorn")
//     const showparagraph=()=>{
//   setparagraph(true)
  
  
//   setvalue(value==="AH2&MattHorn"?"CardboardSpaceship":"AH2&MattHorn")
//     }
//     const showparagraphnot=()=>{
//       setparagraph(false)
//     }
//   return (
//     <div>
//          <div className='w-screen bg-gray-800 flex mx-4 justify-center items-center relative gap-5 py-10 my-10' onMouseEnter={showparagraph} onMouseLeave={showparagraphnot}>
         
//          {
//           paragraph &&<div className='absolute top-[40%] left-[40%] right-[50%]'>
//               <p className="text-yellow-400 font-bold text-6xl flex justify-center uppercase">
//       {value.split('').map((letter, index) => (
//         <span
//           key={index}
//           className="inline-block opacity-0 animate-fade-in"
//           style={{ animationDelay: `${index * 0.1}s` }}
//         >
//           {letter}
//         </span>
//       ))}
//     </p>
            
//           </div>

//          }
         
         
         
     
//      <div>

//       <h1 className='text-white text-2xl  mb-3'> <span className='h-2 w-2 bg-black rounded-full'></span>Cardboard Spaceship</h1>
//      <Image
//       src="https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-663x551.png"
//       alt='this is image'
//       height={500}

//       width={650}
//       />
//       <div  className='flex gap-4'>
//         < h1 className='py-2 px-5 border-white border rounded-2xl text-white '>brand tampelate</h1>
//       </div>
//      </div>
      
//       <div>
//       <h1 className='text-white text-2xl  mb-3'>
//       AH2 & Matt Horn</h1>
//       <Image
//       src="https://ochi.design/wp-content/uploads/2024/08/Frame-481692-1-663x551.png"
//       alt='this is image'
//       height={500}
//       width={650}
//       />
      
//       </div>
      



//     </div>
//     </div>
//   )
// }

// export default Nextfeature2