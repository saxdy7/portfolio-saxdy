"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const [activeItem, setActiveItem] = useState<string>("Home");
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  // Handle scroll effect
  useEffect(() => {
    setIsMounted(true);

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Enhanced FlipLink component with both animations
  const FlipLink = ({ text, index }: { text: string; index: number }) => {
    return (
      <span className="group relative flex items-center">
        {/* Main text with flip animation */}
        <span className="relative block overflow-hidden whitespace-nowrap text-4xl font-medium">
          {/* Top layer (visible initially) */}
          <div className="flex">
            {text.split("").map((char, i) => (
              <span
                key={i}
                className="inline-block transition-transform duration-300 ease-in-out group-hover:-translate-y-[110%]"
                style={{
                  transitionDelay: `${i * 25}ms`,
                }}
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </div>
          
          {/* Bottom layer (revealed on hover) */}
          <div className="absolute inset-0 flex">
            {text.split("").map((char, i) => (
              <span
                key={i}
                className="inline-block translate-y-[110%] transition-transform duration-300 ease-in-out group-hover:translate-y-0"
                style={{
                  transitionDelay: `${i * 25}ms`,
                }}
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </div>
        </span>

        {/* Superscript number */}
        <span className="ml-2 text-sm text-white/60">
          <sup>{String(index + 1).padStart(2, '0')}</sup>
        </span>
      </span>
    );
  };

  // Don't render anything until client-side hydration is complete
  if (!isMounted) {
    return null;
  }

  return (
    <>
      {/* Logo - Fixed to top left */}
      <div className="fixed top-6 left-6 z-40">
        <Link href="/" className="flex items-center">
          <Image
            src="/s-logo.png"
            alt="Logo"
            width={42}
            height={42}
            className="brightness-0 invert"
          />
        </Link>
      </div>

      {/* Menu Toggle Button - Fixed to top right with pro icon */}
      <button 
        className="fixed top-6 right-6 z-50 w-12 h-12 flex justify-center items-center rounded-full bg-gradient-to-tr from-white/20 to-white/5 backdrop-blur-md border border-white/20 shadow-lg shadow-black/5 md:flex hidden"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-label="Toggle menu"
      >
        {mobileMenuOpen ? (
          // Close icon (X)
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
            <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        ) : (
          // Menu icon (hamburger)
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
            <path d="M3 12H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M3 6H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        )}
      </button>

      {/* Mobile Bottom Navigation Bar - Floating with shiny border effect */}
      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-40 md:hidden">
        <div className="relative">
          {/* Shiny border effect container */}
          <div className="absolute -inset-[1px] rounded-full bg-[radial-gradient(circle_80px_at_80%_-10%,#ffffff40,#ffffff10)] z-0">
            {/* Top-right glow */}
            <div className="absolute w-[30%] h-[30%] rounded-full top-0 right-[5%] shadow-[0_0_15px_#ffffff50] -z-10"></div>
            {/* Bottom left glow */}
            <div className="absolute w-[30%] h-[30%] rounded-full bottom-0 left-[5%] bg-[radial-gradient(circle_60px_at_0%_100%,#ffffff30,#ffffff10,transparent)] shadow-[-5px_5px_15px_#ffffff20]"></div>
          </div>
          
          {/* Main navigation container */}
          <div className="relative flex justify-around items-center h-16 px-3 py-2 min-w-[320px] bg-black/80 backdrop-blur-md rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.4)] z-10 border border-white/10">
            {/* Home */}
            <Link href="/" className="flex flex-col items-center justify-center w-12 h-12">
              <div className={`p-2.5 rounded-full transition-all duration-300 ${activeItem === "Home" ? "bg-white/10 shadow-[0_0_10px_rgba(255,255,255,0.15)]" : "hover:bg-white/5"}`}>
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="text-white">
                  <path d="M9.157 20.771v-3.066c0-.78.636-1.414 1.424-1.42h2.886c.792 0 1.433.636 1.433 1.42v3.076c0 .662.534 1.204 1.203 1.219h1.924c1.918 0 3.473-1.54 3.473-3.438v0-8.724a2.44 2.44 0 0 0-.962-1.905l-6.58-5.248a3.18 3.18 0 0 0-3.945 0L3.462 7.943A2.42 2.42 0 0 0 2.5 9.847v8.715C2.5 20.46 4.055 22 5.973 22h1.924c.685 0 1.241-.55 1.241-1.229v0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </Link>
            
            {/* About */}
            <Link href="/about" className="flex flex-col items-center justify-center w-12 h-12">
              <div className={`p-2.5 rounded-full transition-all duration-300 ${activeItem === "About" ? "bg-white/10 shadow-[0_0_10px_rgba(255,255,255,0.15)]" : "hover:bg-white/5"}`}>
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="text-white">
                  <path d="M12.12 12.78C12.05 12.77 11.96 12.77 11.88 12.78C10.12 12.72 8.71997 11.28 8.71997 9.50998C8.71997 7.69998 10.18 6.22998 12 6.22998C13.81 6.22998 15.28 7.69998 15.28 9.50998C15.27 11.28 13.88 12.72 12.12 12.78Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M18.74 19.3801C16.96 21.0101 14.6 22.0001 12 22.0001C9.40001 22.0001 7.04001 21.0101 5.26001 19.3801C5.36001 18.4401 5.96001 17.5201 7.03001 16.8001C9.77001 14.9801 14.25 14.9801 16.97 16.8001C18.04 17.5201 18.64 18.4401 18.74 19.3801Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </Link>
            
            {/* Projects */}
            <Link href="/projects" className="flex flex-col items-center justify-center w-12 h-12">
              <div className={`p-2.5 rounded-full transition-all duration-300 ${activeItem === "Projects" ? "bg-white/10 shadow-[0_0_10px_rgba(255,255,255,0.15)]" : "hover:bg-white/5"}`}>
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="text-white">
                  <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9 10C10.1046 10 11 9.10457 11 8C11 6.89543 10.1046 6 9 6C7.89543 6 7 6.89543 7 8C7 9.10457 7.89543 10 9 10Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2.66998 18.95L7.59998 15.64C8.38998 15.11 9.52998 15.17 10.24 15.78L10.57 16.07C11.35 16.74 12.61 16.74 13.39 16.07L17.55 12.5C18.33 11.83 19.59 11.83 20.37 12.5L22 13.9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </Link>
            
            {/* Contact */}
            <Link href="/contact" className="flex flex-col items-center justify-center w-12 h-12">
              <div className={`p-2.5 rounded-full transition-all duration-300 ${activeItem === "Contact" ? "bg-white/10 shadow-[0_0_10px_rgba(255,255,255,0.15)]" : "hover:bg-white/5"}`}>
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="text-white">
                  <path d="M17 20.5H7C4 20.5 2 19 2 15.5V8.5C2 5 4 3.5 7 3.5H17C20 3.5 22 5 22 8.5V15.5C22 19 20 20.5 17 20.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M17 9L13.87 11.5C12.84 12.32 11.15 12.32 10.12 11.5L7 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </Link>
            
            {/* Menu (Opens slide-in menu) */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex flex-col items-center justify-center w-12 h-12"
            >
              <div className={`p-2.5 rounded-full transition-all duration-300 ${mobileMenuOpen ? "bg-white/10 shadow-[0_0_10px_rgba(255,255,255,0.15)]" : "hover:bg-white/5"}`}>
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="text-white">
                  <path d="M3 7h18M3 12h18M3 17h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Slide-in Menu */}
      <div 
        className={`fixed top-0 right-0 w-full max-w-md h-full bg-black/90 z-40 transform transition-transform duration-500 ease-out backdrop-blur-xl ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Glass effect overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent opacity-20"></div>
        <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-white/40 via-white/10 to-transparent"></div>
        
        <div className="relative h-full z-10 p-12 flex flex-col">
          <div className="mt-16 flex flex-col space-y-12">
            {["Home", "About", "Projects", "Contact"].map((item, index) => (
              <div 
                key={item}
                className="overflow-hidden"
                onMouseEnter={() => setHoveredItem(item)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <div
                  className="transform translate-x-12 opacity-0"
                  style={{
                    animation: mobileMenuOpen ? `slideFromRight 0.6s forwards ${0.3 + index * 0.1}s` : 'none'
                  }}
                >
                  <Link
                    href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    onClick={() => {
                      setMobileMenuOpen(false);
                      setActiveItem(item);
                    }}
                    className={`text-white block relative ${
                      activeItem === item ? "text-white" : "text-white/80"
                    }`}
                  >
                    <div className="flex items-center">
                      {/* Arrow that appears on hover with enhanced animation */}
                      <div 
                        className={`mr-2 overflow-hidden`}
                        style={{
                          animation: hoveredItem === item ? 'arrowAppear 0.3s forwards' : 'none',
                          opacity: hoveredItem === item ? 1 : 0,
                          transform: hoveredItem === item ? 'translateX(0)' : 'translateX(-10px)',
                          transition: 'opacity 0.3s, transform 0.3s'
                        }}
                      >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                          <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      
                      {/* Using the FlipLink animation component with index */}
                      <FlipLink text={item} index={index} />
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          {/* Social links */}
          <div 
            className="mt-auto mb-8 transform translate-y-8 opacity-0"
            style={{
              animation: mobileMenuOpen ? 'fadeUp 0.8s forwards 0.7s' : 'none'
            }}
          >
            <h3 className="text-white/60 text-sm uppercase tracking-wider mb-4">Connect</h3>
            <div className="flex space-x-5">
              <a href="#" className="text-white/80 hover:text-white transition-colors flex items-center">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
                  <path d="M22 4.01C21 4.5 20.02 4.84 19 5C18.05 4.13 16.77 3.55 15.38 3.55C12.7 3.55 10.52 5.74 10.52 8.42C10.52 8.82 10.56 9.21 10.64 9.58C6.5 9.38 2.79 7.42 0.5 4.44C0.1 5.2 0 6.01 0 6.85C0 8.45 0.84 9.87 2.1 10.7C1.58 10.69 1.08 10.55 0.64 10.33V10.38C0.64 12.73 2.27 14.69 4.45 15.15C4.06 15.26 3.65 15.32 3.22 15.32C2.93 15.32 2.65 15.29 2.38 15.24C2.94 17.16 4.7 18.56 6.75 18.6C5.13 19.9 3.19 20.67 1.08 20.67C0.71 20.67 0.35 20.65 0 20.61C2.07 21.98 4.53 22.77 7.17 22.77C15.38 22.77 19.96 15.4 19.96 8.96C19.96 8.74 19.95 8.53 19.94 8.31C20.94 7.56 21.79 6.63 22.46 5.56C21.56 5.96 20.59 6.23 19.57 6.35C20.63 5.71 21.43 4.7 21.79 3.51C20.82 4.09 19.73 4.5 18.59 4.72C17.66 3.71 16.34 3.11 14.91 3.11C12.18 3.11 9.98 5.31 9.98 8.03C9.98 8.43 10.02 8.82 10.1 9.19C6 9 2.37 7.03 0.1 4.06C-0.3 4.82 -0.4 5.64 -0.4 6.49C-0.4 8.09 0.44 9.51 1.7 10.34C1.18 10.33 0.68 10.19 0.24 9.97V10.02C0.24 12.37 1.87 14.33 4.05 14.79C3.66 14.9 3.25 14.96 2.82 14.96C2.53 14.96 2.25 14.93 1.98 14.88C2.54 16.8 4.3 18.2 6.35 18.24C4.73 19.54 2.79 20.31 0.68 20.31C0.31 20.31 -0.05 20.29 -0.4 20.25C1.67 21.62 4.13 22.41 6.77 22.41C14.98 22.41 19.56 15.04 19.56 8.6C19.56 8.38 19.55 8.17 19.54 7.95C20.54 7.2 21.39 6.27 22.06 5.2C21.16 5.6 20.19 5.87 19.17 5.99C20.23 5.35 21.03 4.34 21.39 3.15" fill="currentColor"/>
                </svg>
                Twitter
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-colors flex items-center">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
                  <path d="M12 0C5.374 0 0 5.373 0 12C0 17.302 3.438 21.8 8.207 23.387C8.806 23.498 9 23.126 9 22.81V20.576C5.662 21.302 4.967 19.16 4.967 19.16C4.421 17.773 3.634 17.404 3.634 17.404C2.545 16.659 3.717 16.675 3.717 16.675C4.922 16.759 5.556 17.912 5.556 17.912C6.626 19.746 8.363 19.216 9.048 18.909C9.155 18.134 9.466 17.604 9.81 17.305C7.145 17 4.343 15.971 4.343 11.374C4.343 10.063 4.812 8.993 5.579 8.153C5.455 7.85 5.044 6.629 5.696 4.977C5.696 4.977 6.704 4.655 8.997 6.207C9.954 5.941 10.98 5.808 12 5.803C13.02 5.808 14.047 5.941 15.006 6.207C17.297 4.655 18.303 4.977 18.303 4.977C18.956 6.63 18.545 7.851 18.421 8.153C19.191 8.993 19.656 10.064 19.656 11.374C19.656 15.983 16.849 16.998 14.177 17.295C14.607 17.667 15 18.397 15 19.517V22.81C15 23.129 15.192 23.504 15.801 23.386C20.566 21.797 24 17.3 24 12C24 5.373 18.627 0 12 0Z" fill="currentColor"/>
                </svg>
                GitHub
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-colors flex items-center">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
                  <path d="M20.447 20.452H16.893V14.883C16.893 13.555 16.866 11.846 15.041 11.846C13.188 11.846 12.905 13.291 12.905 14.785V20.452H9.351V9H12.765V10.561H12.811C13.288 9.661 14.448 8.711 16.181 8.711C19.782 8.711 20.448 11.081 20.448 14.166V20.452H20.447ZM5.337 7.433C4.193 7.433 3.274 6.507 3.274 5.368C3.274 4.23 4.194 3.305 5.337 3.305C6.477 3.305 7.401 4.23 7.401 5.368C7.401 6.507 6.476 7.433 5.337 7.433ZM7.119 20.452H3.555V9H7.119V20.452ZM22.225 0H1.771C0.792 0 0 0.774 0 1.729V22.271C0 23.227 0.792 24 1.771 24H22.222C23.2 24 24 23.227 24 22.271V1.729C24 0.774 23.2 0 22.222 0H22.225Z" fill="currentColor"/>
                </svg>
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Add padding at the bottom to prevent content from being hidden behind bottom nav bar */}
      <div className="h-20 md:h-0"></div>

      {/* Background blur overlay when menu is open */}
      <div 
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-30 transition-opacity duration-500 ${
          mobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMobileMenuOpen(false)}
      ></div>

      {/* Animation keyframes */}
      <style jsx global>{`
        @keyframes slideFromRight {
          from {
            opacity: 0;
            transform: translateX(40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes arrowAppear {
          from {
            opacity: 0;
            transform: translateX(-10px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes pulse {
          0% {
            opacity: 0.6;
          }
          50% {
            opacity: 0.9;
          }
          100% {
            opacity: 0.6;
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;