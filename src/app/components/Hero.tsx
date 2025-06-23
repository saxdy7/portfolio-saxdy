import React from 'react';
import { Component as EtherealShadow } from "@/app/components/ui/etheral-shadow";
import { TickerText } from "@/app/components/ui/TickerText"; // Import the ticker component

export default function Hero() {
  return (
    <>
      {/* Hero section with ethereal background */}
      <div className="w-full min-h-screen relative overflow-y-auto overflow-x-hidden">
        {/* Background shadow effect - fixed to cover entire scrollable area */}
        <div className="fixed inset-0 w-full h-full z-0">
          <EtherealShadow
            color="rgb(128, 128, 128)" // Darker color to match your design
            animation={{ scale: 100, speed: 90 }}
            noise={{ opacity: 1, scale: 1.2 }}
            sizing="fill"
            className="w-full h-full"
          />
        </div>
        
        {/* Centered content - with padding to allow scrolling */}
        <div className="relative z-10 flex justify-center items-center min-h-screen py-20">
          <div className="text-center px-4 max-w-3xl">
            {/* Badge content remains unchanged */}
            <div className="relative inline-block rounded-full p-[2px] bg-[radial-gradient(circle_80px_at_80%_-10%,#ffffff,#181b1b)] mb-4">
              {/* After element for top-right glow */}
              <div className="absolute w-[65%] h-[60%] rounded-[120px] top-0 right-0 shadow-[0_0_20px_#ffffff38] -z-10"></div>
              
              {/* Bottom left blob effect - modified for rounded-full */}
              <div className="absolute w-[60px] h-full rounded-full bottom-0 left-0 bg-[radial-gradient(circle_60px_at_0%_100%,#3f3f3f,#3f3f3f80,transparent)] shadow-[-10px_10px_30px_#ffffff2d]"></div>
              
              {/* Inner badge */}
              <div className="relative px-[25px] py-[10px] rounded-full text-white z-[3] bg-[radial-gradient(circle_80px_at_80%_-50%,#555555,#0f1111)]">
                {/* Before element for inner gradient */}
                <div className="absolute w-full h-full left-0 top-0 rounded-full bg-[radial-gradient(circle_60px_at_0%_100%,#ffffff1a,#ffffff11,transparent)]"></div>
                
                {/* Badge text */}
                <p className="text-lg text-white flex items-center relative z-10">
                  <span className="relative w-2 h-2 bg-white rounded-full mr-2 transition-all duration-300 
                    before:content-[''] before:absolute before:w-full before:h-full before:rounded-full 
                    before:bg-white before:opacity-70 before:transform before:scale-0 before:transition-transform
                    group-hover:before:scale-150 group-hover:before:opacity-60 
                    hover:shadow-[0_0_8px_rgba(255,255,255,0.8)]" 
                    title="Copyright">
                  </span>
                  UI/UX & App Developer
                </p>
              </div>
            </div>
            
            {/* Name displayed in center */}
            <h1 className="text-5xl md:text-4xl font-medium text-white my-6 tracking-tight">
              Mamidala Sandeep
            </h1>

            {/* Position/Role */}
            <p className="text-7xl text-gray-300 font-semi -mt-2 mb-4">
              Co-founder of Ziplyt
            </p>

            {/* Professional description */}
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              I'm a tech entrepreneur, specializing in intuitive, impactful app development and digital branding. I'm passionate about leveraging technology for social good and empowering users through innovative solutions.
            </p>
              
            {/* Scroll down indicator */}
            <div className="mb-24 text-center flex flex-col items-center opacity-70 hover:opacity-100 transition-opacity cursor-pointer mt-2">
              <div className="text-gray-300 text-sm mb-2 flex items-center space-x-2">
                <div className="h-[1px] w-24 bg-gradient-to-r from-transparent to-gray-400"></div>
                <span>Scroll down</span>
                <div className="h-[1px] w-24 bg-gradient-to-l from-transparent to-gray-400"></div>
              </div>
              <div className="w-6 h-12 rounded-full border border-gray-500 flex justify-center items-start p-1">
                <div className="w-1 h-2 bg-white rounded-full animate-bounce mt-1"></div>
              </div>
              <div className="text-gray-300 text-sm mt-2 flex items-center space-x-2">
                <div className="h-[1px] w-24 bg-gradient-to-r from-transparent to-gray-400"></div>
                <span>to see projects</span>
                <div className="h-[1px] w-24 bg-gradient-to-l from-transparent to-gray-400"></div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-4 justify-center items-center">
              {/* About Me Button */}
              <div className="relative cursor-pointer rounded-2xl p-[2px] bg-[radial-gradient(circle_80px_at_80%_-10%,#ffffff,#181b1b)]">
                {/* After element for top-right glow */}
                <div className="absolute w-[65%] h-[60%] rounded-[120px] top-0 right-0 shadow-[0_0_20px_#ffffff38] -z-10"></div>
                
                {/* Bottom left blob effect */}
                <div className="absolute w-[70px] h-full rounded-2xl bottom-0 left-0 bg-[radial-gradient(circle_60px_at_0%_100%,#3f3f3f,#3f3f3f80,transparent)] shadow-[-10px_10px_30px_#ffffff2d]"></div>
                
                {/* Inner button */}
                <div className="relative px-[25px] py-[14px] rounded-[14px] text-white z-[3] bg-[radial-gradient(circle_80px_at_80%_-50%,#555555,#0f1111)]">
                  {/* Before element for inner gradient */}
                  <div className="absolute w-full h-full left-0 top-0 rounded-[14px] bg-[radial-gradient(circle_60px_at_0%_100%,#ffffff1a,#ffffff11,transparent)]"></div>
                  
                  {/* Button text */}
                  <span className="relative z-10 text-xl">About Me</span>
                </div>
              </div>
              
              {/* See Projects Button */}
              <div className="relative cursor-pointer rounded-2xl p-[2px] bg-[radial-gradient(circle_80px_at_80%_-10%,#ffffff,#181b1b)]">
                {/* After element for top-right glow */}
                <div className="absolute w-[65%] h-[60%] rounded-[120px] top-0 right-0 shadow-[0_0_20px_#ffffff38] -z-10"></div>
                
                {/* Bottom left blob effect */}
                <div className="absolute w-[70px] h-full rounded-2xl bottom-0 left-0 bg-[radial-gradient(circle_60px_at_0%_100%,#3f3f3f,#3f3f3f80,transparent)] shadow-[-10px_10px_30px_#ffffff2d]"></div>
                
                {/* Inner button */}
                <div className="relative px-[25px] py-[14px] rounded-[14px] text-white z-[3] bg-[radial-gradient(circle_80px_at_80%_-50%,#555555,#0f1111)]">
                  {/* Before element for inner gradient */}
                  <div className="absolute w-full h-full left-0 top-0 rounded-[14px] bg-[radial-gradient(circle_60px_at_0%_100%,#ffffff1a,#ffffff11,transparent)]"></div>
                  
                  {/* Button text */}
                  <span className="relative z-10 text-xl">See Projects</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Gradient overlay for smooth transition */}
        <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-b from-transparent via-[rgba(0,0,0,0.5)] to-black z-[1]"></div>
      </div>
      
      {/* Black section with projects */}
      <div className="w-full min-h-screen bg-black text-white relative">
        <div className="container mx-auto px-4 py-20">
          {/* Content for the black section will go here */}
          <h2 className="text-4xl md:text-5xl text-gray-500 font-small mb-8">My Projects</h2>
          
          {/* You can add your project content here */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project cards or other content will go here */}
          </div>
        </div>
      </div>
    </>
  );
}
