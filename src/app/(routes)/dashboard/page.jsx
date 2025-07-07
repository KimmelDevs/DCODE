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
import { Mail, Instagram, Facebook, Phone, Send } from 'lucide-react'


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
  const [activeSection, setActiveSection] = useState('home')
  const timeoutId = useRef(null)

  const scrollTo = (ref, section) => {
    ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setIsHeaderVisible(true)
    setActiveSection(section)
  }

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      // Determine active section based on scroll position
      const sections = [
        { ref: headerRef, id: 'home' },
        { ref: aboutRef, id: 'about' },
        { ref: servicesRef, id: 'services' },
        { ref: projectsRef, id: 'projects' },
        { ref: graphicsRef, id: 'graphics' },
        { ref: teamRef, id: 'team' }
      ]
      
      for (const section of sections) {
        const element = section.ref.current
        if (element) {
          const { top, height } = element.getBoundingClientRect()
          if (top <= 100 && top + height > 100) {
            setActiveSection(section.id)
            break
          }
        }
      }
      
      // Header visibility logic
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
            // Optional: Hide header again after delay if not at top
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
              onClick={() => scrollTo(headerRef, 'home')}
            />
          </div>
        
          <nav className="hidden md:block">
            <ul className="flex space-x-6 lg:space-x-8 items-center">
              <li className="relative">
                <button 
                  onClick={() => scrollTo(headerRef, 'home')} 
                  className="text-gray-800 hover:text-[#3f4ca0] transition-colors px-3 py-2 rounded-md text-sm font-medium group"
                  style={{ fontFamily: "'Arial Rounded MT Bold', sans-serif" }}
                >
                  Home
                  <span className={`absolute left-0 bottom-0 h-0.5 bg-[#3f4ca0] transition-all duration-300 ${activeSection === 'home' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                </button>
              </li>
              <li className="relative">
                <button 
                  onClick={() => scrollTo(aboutRef, 'about')} 
                  className="text-gray-800 hover:text-[#3f4ca0] transition-colors px-3 py-2 rounded-md text-sm font-medium group"
                  style={{ fontFamily: "'Arial Rounded MT Bold', sans-serif" }}
                >
                  About
                  <span className={`absolute left-0 bottom-0 h-0.5 bg-[#3f4ca0] transition-all duration-300 ${activeSection === 'about' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                </button>
              </li>
              <li className="relative">
                <button 
                  onClick={() => scrollTo(servicesRef, 'services')} 
                  className="text-gray-800 hover:text-[#3f4ca0] transition-colors px-3 py-2 rounded-md text-sm font-medium group"
                  style={{ fontFamily: "'Arial Rounded MT Bold', sans-serif" }}
                >
                  Services
                  <span className={`absolute left-0 bottom-0 h-0.5 bg-[#3f4ca0] transition-all duration-300 ${activeSection === 'services' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                </button>
              </li>
              <li className="relative">
                <button 
                  onClick={() => scrollTo(projectsRef, 'projects')} 
                  className="text-gray-800 hover:text-[#3f4ca0] transition-colors px-3 py-2 rounded-md text-sm font-medium group"
                  style={{ fontFamily: "'Arial Rounded MT Bold', sans-serif" }}
                >
                  Projects
                  <span className={`absolute left-0 bottom-0 h-0.5 bg-[#3f4ca0] transition-all duration-300 ${activeSection === 'projects' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                </button>
              </li>
              <li className="relative">
                <button 
                  onClick={() => scrollTo(graphicsRef, 'graphics')} 
                  className="text-gray-800 hover:text-[#3f4ca0] transition-colors px-3 py-2 rounded-md text-sm font-medium group"
                  style={{ fontFamily: "'Arial Rounded MT Bold', sans-serif" }}
                >
                  Graphics
                  <span className={`absolute left-0 bottom-0 h-0.5 bg-[#3f4ca0] transition-all duration-300 ${activeSection === 'graphics' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                </button>
              </li>
              <li className="relative">
                <button 
                  onClick={() => scrollTo(teamRef, 'team')} 
                  className="text-gray-800 hover:text-[#3f4ca0] transition-colors px-3 py-2 rounded-md text-sm font-medium group"
                  style={{ fontFamily: "'Arial Rounded MT Bold', sans-serif" }}
                >
                  Team
                  <span className={`absolute left-0 bottom-0 h-0.5 bg-[#3f4ca0] transition-all duration-300 ${activeSection === 'team' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                </button>
              </li>
              
            </ul>
          </nav>

          {/* Mobile menu button would go here */}
        </div>
      </header>

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <section ref={headerRef}>
          <Hero />
        </section>
        
        {/* About Section */}
        <section ref={aboutRef}>
          <About />
        </section>
        
        {/* Services Section */}
        <section ref={servicesRef}>
          <Services />
        </section>
        
        {/* Projects Section */}
        <section ref={projectsRef}>
          <Works />
        </section>
        
        {/* Graphics Section */}
        <section ref={graphicsRef}>
          <Graphics />
        </section>
        
        {/* Team Section */}
        <section ref={teamRef}>
          <ProductSlider />
        </section>
      </main>

      {/* Footer would go here */}
      {/* Footer would go here */}
<footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
    {/* Company Info - Made wider */}
    <div className="space-y-4 md:col-span-2">
      <div className="flex items-center space-x-2">
        <Image 
          src="/a.png" 
          alt="DCODE Logo" 
          width={120} 
          height={60} 
          className="hover:opacity-90 transition-opacity"
        />
      </div>
      <p className="text-gray-300 max-w-md">
        Creating innovative digital solutions to transform your business and ideas into reality.
      </p>
      <div className="flex space-x-4 pt-2">
        <a href="https://instagram.com/dcode.hub" target="_blank" rel="noopener noreferrer" 
          className="text-gray-300 hover:text-white transition-colors p-1.5 rounded-full hover:bg-gray-700">
          <Instagram className="w-5 h-5" />
        </a>
        <a href="https://www.facebook.com/profile.php?id=61555924405854" target="_blank" rel="noopener noreferrer" 
          className="text-gray-300 hover:text-white transition-colors p-1.5 rounded-full hover:bg-gray-700">
          <Facebook className="w-5 h-5" />
        </a>
      </div>
    </div>

    {/* Quick Links */}
    <div className="space-y-4">
      <h4 className="text-lg font-semibold" style={{ fontFamily: "'Arial Rounded MT Bold', sans-serif" }}>
        Quick Links
      </h4>
      <ul className="space-y-2">
        <li>
          <button 
            onClick={() => scrollTo(headerRef, 'home')} 
            className="text-gray-300 hover:text-white transition-colors text-sm"
          >
            Home
          </button>
        </li>
        <li>
          <button 
            onClick={() => scrollTo(aboutRef, 'about')} 
            className="text-gray-300 hover:text-white transition-colors text-sm"
          >
            About
          </button>
        </li>
        <li>
          <button 
            onClick={() => scrollTo(servicesRef, 'services')} 
            className="text-gray-300 hover:text-white transition-colors text-sm"
          >
            Services
          </button>
        </li>
      </ul>
    </div>

    {/* Contact Info */}
    <div className="space-y-4">
      <h4 className="text-lg font-semibold" style={{ fontFamily: "'Arial Rounded MT Bold', sans-serif" }}>
        Contact Us
      </h4>
      <div className="space-y-3">
        <div className="flex items-start space-x-3">
          <Phone className="w-5 h-5 mt-0.5 flex-shrink-0 text-gray-400" />
          <a href="tel:+639754884910" className="text-gray-300 hover:text-white transition-colors text-sm">
            +63 975 488 4910
          </a>
        </div>
        <div className="flex items-start space-x-3">
          <Mail className="w-5 h-5 mt-0.5 flex-shrink-0 text-gray-400" />
          <a href="mailto:dcode2825@gmail.com" className="text-gray-300 hover:text-white transition-colors text-sm">
            dcode2825@gmail.com
          </a>
        </div>
      </div>
    </div>
  </div>

  {/* Copyright */}
  <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-gray-800 text-center text-gray-400 text-sm">
    <p>© {new Date().getFullYear()} DCODE. All rights reserved.</p>
  </div>
</footer>
    </div>
  )
}