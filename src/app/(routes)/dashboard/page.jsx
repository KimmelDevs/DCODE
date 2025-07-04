'use client'
import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import About from './_components/about'
import Services from './_components/services'
import Image from 'next/image'
import Graphics from './_components/graphics'
import Works from './_components/works'
import Hero from './_components/heropage'
import ProductSlider from './_components/slider'

export default function DashboardPage() {
  const headerRef = useRef(null)
  const teamRef = useRef(null)
  const aboutRef = useRef(null)
  const servicesRef = useRef(null)
  const projectsRef = useRef(null)
  const graphicsRef = useRef(null)
  
  const [isHeaderVisible, setIsHeaderVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isHovering, setIsHovering] = useState(false)
  const timeoutId = useRef(null)

  const scrollTo = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setIsHeaderVisible(true)

  }

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      if (currentScrollY < lastScrollY) {
        // Scrolling up
        setIsHeaderVisible(true)
      } else if (currentScrollY > 100 && currentScrollY > lastScrollY) {
        // Scrolling down past 100px
        setIsHeaderVisible(false)
      }
      
      setLastScrollY(currentScrollY)
    }

    

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      clearTimeout(timeoutId.current)
    }
  }, [lastScrollY, isHovering])

  return (
    <div className="min-h-screen relative bg-white">
      {/* Fixed Header Section */}
      <header 
        ref={headerRef}
        className={`fixed top-0 w-full z-50 transition-transform duration-300 ${isHeaderVisible ? 'translate-y-0' : '-translate-y-full'} bg-white shadow-md border-b border-gray-100`}
        onMouseEnter={() => {
          setIsHovering(true)
          setIsHeaderVisible(true)
          clearTimeout(timeoutId.current)
        }}
        onMouseLeave={() => {
          setIsHovering(false)
          if (window.scrollY > 100) {
            
          }
        }}
      >
        <div className="container mx-auto px-4 sm:px-6 py-3 flex justify-between items-center">
          <div className="flex items-center">
            <Image 
              src="/a.png" 
              alt="DCODE Logo" 
              width={140} 
              height={70} 
              className="hover:opacity-90 transition-opacity cursor-pointer"
              priority
              onClick={() => scrollTo(headerRef)}
            />
          </div>
        
          <nav className="hidden md:block">
            <ul className="flex space-x-6 lg:space-x-8 items-center">
              <li>
                <button 
                  onClick={() => scrollTo(headerRef)} 
                  className="text-gray-800 hover:text-[#3f4ca0] transition-colors px-3 py-2 rounded-md text-sm font-medium"
                  style={{ fontFamily: "'Arial Rounded MT Bold', sans-serif" }}
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollTo(aboutRef)} 
                  className="text-gray-800 hover:text-[#3f4ca0] transition-colors px-3 py-2 rounded-md text-sm font-medium"
                  style={{ fontFamily: "'Arial Rounded MT Bold', sans-serif" }}
                >
                  About
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollTo(servicesRef)} 
                  className="text-gray-800 hover:text-[#3f4ca0] transition-colors px-3 py-2 rounded-md text-sm font-medium"
                  style={{ fontFamily: "'Arial Rounded MT Bold', sans-serif" }}
                >
                  Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollTo(teamRef)} 
                  className="text-gray-800 hover:text-[#3f4ca0] transition-colors px-3 py-2 rounded-md text-sm font-medium"
                  style={{ fontFamily: "'Arial Rounded MT Bold', sans-serif" }}
                >
                  Team
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollTo(projectsRef)} 
                  className="text-gray-800 hover:text-[#3f4ca0] transition-colors px-3 py-2 rounded-md text-sm font-medium"
                  style={{ fontFamily: "'Arial Rounded MT Bold', sans-serif" }}
                >
                  Projects
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollTo(graphicsRef)} 
                  className="text-gray-800 hover:text-[#3f4ca0] transition-colors px-3 py-2 rounded-md text-sm font-medium"
                  style={{ fontFamily: "'Arial Rounded MT Bold', sans-serif" }}
                >
                  Graphics
                </button>
              </li>
            </ul>
          </nav>

          {/* Mobile menu button would go here */}
        </div>
      </header>

      {/* Main Content */}
      <main >
        {/* Hero Section */}
        <section ref={headerRef}>
          <Hero />
        </section>
        
        {/* About Section */}
        <section ref={aboutRef} >
          <About />
        </section>
        
        {/* Services Section */}
        <section ref={servicesRef} >
          <Services />
        </section>
        
        {/* Projects Section */}
        <section ref={projectsRef} >
          <Works />
        </section>
        
        {/* Graphics Section */}
        <section ref={graphicsRef} >
          <Graphics />
        </section>
        
        {/* Team Section */}
        <section ref={teamRef} >
          <ProductSlider />
        </section>
      </main>

      {/* Footer would go here */}
    </div>
  )
}