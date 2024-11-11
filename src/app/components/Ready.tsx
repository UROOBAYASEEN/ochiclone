"use client";
import React, { useState, useEffect } from 'react';

const Ready = () => {
  const [rotate, setRotate] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e:any) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;
      const deltaX = mouseX - window.innerWidth / 2;
      const deltaY = mouseY - window.innerHeight / 2;

      const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angle - 180);
    };

    // Add mouse move event listener
    window.addEventListener('mousemove', handleMouseMove);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []); // Empty array to run only once when component mounts

  return (
    <div className="w-screen h-screen bg-[#CDEA68] flex items-center justify-center relative">
      <div className="absolute left-1/2 top-1/2 -translate-x-[50%] flex gap-5 -translate-y-[50%]">
        {/* Left Eye */}
        <div className="w-[100px] lg:w-[200px] h-[100px] lg:h-[200px] rounded-full bg-zinc-200 flex justify-center items-center">
          <div className="bg-black w-2/3 h-2/3 rounded-full flex justify-center items-center relative">
            <div
              className="w-full"
              style={{ transform: `rotate(${rotate}deg)`, transition: 'transform 0.1s ease' }}
            >
              <div className="bg-zinc-100 w-[20px] h-[20px] rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Right Eye */}
        <div className="w-[100px] lg:w-[200px] h-[100px] lg:h-[200px] rounded-full bg-zinc-200 flex justify-center items-center">
          <div className="bg-black w-2/3 h-2/3 rounded-full flex justify-center items-center">
            <div
              className="w-full h-10"
              style={{ transform: `rotate(${rotate}deg)`, transition: 'transform 0.1s ease' }}
            >
              <div className="bg-zinc-100 w-[20px] h-[20px] rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Text and Button */}
      <div className="text-center">
        <h1 className="lg:text-9xl font-4xl text-black font-bold font-latest tracking-tighter">
          READY
        </h1>
        <h1 className="lg:text-9xl font-4xl text-black font-bold font-latest tracking-tighter">
          TO START
        </h1>
        <h1 className="lg:text-9xl font-4xl text-black font-bold font-latest tracking-tighter">
          THE PROJECT?
        </h1>
        <button className="bg-black text-white p-5 rounded-xl">START THE PROJECT</button>
      </div>
    </div>
  );
};

export default Ready;
