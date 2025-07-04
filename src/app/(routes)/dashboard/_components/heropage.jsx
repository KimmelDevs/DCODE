'use client'

import Image from 'next/image'
import { useEffect, useRef } from 'react'

export default function Hero() {
  const heroRef = useRef(null)
  const textRef = useRef(null)
  const imageRef = useRef(null)
  const bgRef = useRef(null)

  useEffect(() => {
    // Trigger animations when component mounts
    if (heroRef.current && textRef.current && imageRef.current && bgRef.current) {
      // Background animation (fade in)
      bgRef.current.style.opacity = '1'
      
      // Text content animation (slide from left)
      textRef.current.style.opacity = '1'
      textRef.current.style.transform = 'translateX(0)'
      
      // Image animation (slide from right)
      imageRef.current.style.opacity = '1'
      imageRef.current.style.transform = 'translateX(0)'
      
      // Container animation (scale down)
      heroRef.current.style.opacity = '1'
      heroRef.current.style.transform = 'scale(1)'
    }
  }, [])

  return (
    <section 
      ref={heroRef}
      className="relative py-12 px-4 sm:px-6 lg:px-8 h-screen min-h-[600px] overflow-hidden"
      style={{
        opacity: 0,
        transform: 'scale(1.1)',
        transition: 'opacity 1s ease-out, transform 1.2s ease-out',
      }}
    >
      {/* Background Image with fade-in effect */}
      <div 
        ref={bgRef}
        className="absolute inset-0 z-0"
        style={{
          opacity: 0,
          transition: 'opacity 1.5s ease-out',
        }}
      >
        <Image
          src="/background7.jpg"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-opacity-50"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 h-full flex flex-col justify-center">
        <div className="flex flex-col md:flex-row items-center">
          {/* Text Content - slides from left */}
          <div 
            ref={textRef}
            className="md:pl-10 md:w-2/3 text-center md:text-left"
            style={{
              opacity: 0,
              transform: 'translateX(-50px)',
              transition: 'opacity 0.8s ease-out 0.3s, transform 0.8s ease-out 0.3s',
            }}
          >
            <p className="text-blue-200 mb-2 text-lg" style={{ fontFamily: "'Arial Rounded MT Bold', sans-serif" }}>
              Welcome Guest
            </p>
            <h1 
              className="text-5xl md:text-6xl font-bold text-white mb-4" 
              style={{ fontFamily: "'Arial Rounded MT Bold', sans-serif" }}
            >
              We are <span className="text-blue-300">D</span>
              <span className="text-blue-300">CODE</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-white" style={{ fontFamily: "'Arial Rounded MT Bold', sans-serif" }}>
              We Learn while We Work
            </h2>
          </div>

          {/* Image - slides from right */}
          <div 
            ref={imageRef}
            className="md:w-1/3 mt-8 md:mt-0 flex justify-center md:justify-end"
            style={{
              opacity: 0,
              transform: 'translateX(50px)',
              transition: 'opacity 0.8s ease-out 0.5s, transform 0.8s ease-out 0.5s',
            }}
          >
            <Image
              src="/header.png"
              alt="DCODE Mascot"
              width={300}
              height={300}
              className="object-contain animate-bounce"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}