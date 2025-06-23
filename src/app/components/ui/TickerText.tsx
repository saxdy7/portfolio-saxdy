"use client";
import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface TickerTextProps {
  name?: string;
  className?: string;
}

export const TickerText: React.FC<TickerTextProps> = ({ name = "SANDY", className = "" }) => {
  // Create repeated name pattern with asterisks
  const repeatedName = Array(8).fill(`*${name}`).join(" ");
  const containerRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);
  
  useEffect(() => {
    if (containerRef.current) {
      setWidth(containerRef.current.offsetWidth);
    }
    
    // Update width on window resize for responsive behavior
    const handleResize = () => {
      if (containerRef.current) {
        setWidth(containerRef.current.offsetWidth);
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  const tickerVariants = {
    animate: {
      x: [0, -width / 2],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 20,
          ease: "linear",
        },
      },
    },
  };

  return (
    <div 
      className={`w-full overflow-hidden relative ${className}`} 
      ref={containerRef}
    >
      
      {/* Ticker text */}
      <motion.div
        className="inline-flex whitespace-nowrap relative z-10"
        variants={tickerVariants}
        animate="animate"
      >
        <span className="text-5xl md:text-7xl lg:text-8xl font-bold italic tracking-tight text-gray-200 opacity-90 mix-blend-overlay">
          {repeatedName}
        </span>
        <span className="text-5xl md:text-7xl lg:text-8xl font-bold italic tracking-tight text-gray-200 opacity-90 ml-8 mix-blend-overlay">
          {repeatedName}
        </span>
      </motion.div>
    </div>
  );
};