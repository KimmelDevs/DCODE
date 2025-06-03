'use client'
import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import MeetTheTeam from './_components/meet'
import About from './_components/about'
import Contacts from './_components/contact'
import Projects from './_components/projects'
import Services from './_components/services'
import Image from 'next/image'
import Graphics from './_components/graphics'

export default function DashboardPage() {
  const headerRef = useRef(null)
  const teamRef = useRef(null)
  const aboutRef = useRef(null)
  const servicesRef = useRef(null)
  const projectsRef = useRef(null)
  const contactsRef = useRef(null)
  
  const [isHeaderVisible, setIsHeaderVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isHovering, setIsHovering] = useState(false)
  let timeoutId = useRef(null)

  const scrollTo = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      if (currentScrollY < lastScrollY) {
        setIsHeaderVisible(true)
        resetTimeout()
      } else if (currentScrollY > 100) {
        setIsHeaderVisible(false)
      }
      
      setLastScrollY(currentScrollY)
    }

    const resetTimeout = () => {
      clearTimeout(timeoutId.current)
      timeoutId.current = setTimeout(() => {
        if (!isHovering && window.scrollY > 100) {
          setIsHeaderVisible(false)
        }
      }, 5000)
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      clearTimeout(timeoutId.current)
    }
  }, [lastScrollY, isHovering])

  return (
    <div className="min-h-screen relative" style={{ 
      backgroundImage: "url('/background7.jpg')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed'
    }}>
      {/* Header Section - positioned absolutely within the background */}
      <header 
        ref={headerRef}
        className={`fixed top-0 w-full z-50 transition-transform duration-300 ${isHeaderVisible ? 'translate-y-0' : '-translate-y-full'}`}
        onMouseEnter={() => {
          setIsHovering(true)
          setIsHeaderVisible(true)
        }}
        onMouseLeave={() => {
          setIsHovering(false)
          if (window.scrollY > 100) {
            timeoutId.current = setTimeout(() => {
              setIsHeaderVisible(false)
            }, 5000)
          }
        }}
      >
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Image 
            src="/logo.png" 
            alt="DCODE Logo" 
            width={80} 
            height={40} 
            className="mr-4"
          />
          
          <nav>
            <ul className="flex space-x-8">
              <li>
                <button 
                  onClick={() => scrollTo(headerRef)} 
                  className="text-white hover:text-[#3f4ca0] transition-colors" 
                  style={{ fontFamily: "'Arial Rounded MT Bold', sans-serif" }}
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollTo(aboutRef)} 
                  className="text-white hover:text-[#3f4ca0] transition-colors"
                  style={{ fontFamily: "'Arial Rounded MT Bold', sans-serif" }}
                >
                  About
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollTo(servicesRef)} 
                  className="text-white hover:text-[#3f4ca0] transition-colors"
                  style={{ fontFamily: "'Arial Rounded MT Bold', sans-serif" }}
                >
                  Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollTo(teamRef)} 
                  className="text-white hover:text-[#3f4ca0] transition-colors"
                  style={{ fontFamily: "'Arial Rounded MT Bold', sans-serif" }}
                >
                  Team
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollTo(projectsRef)} 
                  className="text-white hover:text-[#3f4ca0] transition-colors"
                  style={{ fontFamily: "'Arial Rounded MT Bold', sans-serif" }}
                >
                  Projects
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollTo(contactsRef)} 
                  className="text-white hover:text-[#3f4ca0] transition-colors"
                  style={{ fontFamily: "'Arial Rounded MT Bold', sans-serif" }}
                >
                  Contact
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Content - starts at top of page (no extra space) */}
      <div className="pt-0">
        {/* Hero Section */}
        <div className="container mx-auto px-6 pt-32 pb-20">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:pl-8 md:w-2/3 text-center md:text-left">
              <p className="text-[#1f99ce] mb-2 text-lg" style={{ fontFamily: "'Arial Rounded MT Bold', sans-serif" }}>Wassup</p>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-4" style={{ fontFamily: "'Arial Rounded MT Bold', sans-serif" }}>
                We are <span className="text-[#1f99ce]">D</span>
                <span className="text-[#1f99ce]">CODE</span>!<br />
                <span className="text-2xl md:text-3xl" style={{ fontFamily: "'Arial Rounded MT Bold', sans-serif" }}>We are from Philippines</span>
              </h1>
            </div>
            
            <div className="md:w-1/3 mt-8 md:mt-0 flex justify-center md:justify-end">
              <Image
                src="/header.png"
                alt="DCODE Mascot"
                width={300}
                height={300}
                className="object-contain animate-bounce"
              />
            </div>
          </div>
        </div>

        <main className="container mx-auto px-6 pb-16">
          {/* About Section */}
          <section ref={aboutRef} className="mb-16 pt-16">
            <About />
          </section>
          
          {/* Services Section */}
          <section ref={servicesRef} className="mb-16 pt-16">
            <Services />
          </section>
          
          {/* Projects Section */}
          <section ref={projectsRef} className="mb-16 pt-16">
            <Projects />
          </section>
          <section ref={contactsRef} className="mb-16 pt-16">
            <Graphics />
          </section>
        
          {/* Team Section */}
          <section ref={teamRef} className="mb-16 pt-16">
            <MeetTheTeam />
          </section>
          
          {/* Contact Section */}
          <section ref={contactsRef} className="mb-16 pt-16">
            <Contacts />
          </section>
        </main>
      </div>
    </div>
  )
}