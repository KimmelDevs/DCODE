'use client'
import { useEffect, useRef, useState, lazy, Suspense } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Mail, Instagram, Facebook, Phone } from 'lucide-react'
import { Card } from './_components/ui/card'

// Lazy load components for better initial loading
const About = lazy(() => import('./_components/about'))
const Services = lazy(() => import('./_components/services'))
const Graphics = lazy(() => import('./_components/graphics'))
const Works = lazy(() => import('./_components/works'))
const Hero = lazy(() => import('./_components/heropage'))
const ProductSlider = lazy(() => import('./_components/slider'))

// Loading component for suspense fallback
const LoadingSpinner = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
  </div>
)

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
  const scrollTimeoutId = useRef(null)

  const scrollTo = (ref, section) => {
    ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setIsHeaderVisible(true)
    setActiveSection(section)
  }

  useEffect(() => {
    let isMounted = true;
    
    const handleScroll = () => {
      if (!isMounted) return;
      
      // Throttle scroll events for better performance
      if (scrollTimeoutId.current) {
        return;
      }
      
      scrollTimeoutId.current = setTimeout(() => {
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
        scrollTimeoutId.current = null
      }, 100) // Throttle to 100ms
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      isMounted = false;
      window.removeEventListener('scroll', handleScroll)
      clearTimeout(timeoutId.current)
      clearTimeout(scrollTimeoutId.current)
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
              {['home', 'about', 'services', 'projects', 'graphics', 'team'].map((section) => (
                <li key={section} className="relative">
                  <button 
                    onClick={() => scrollTo(
                      section === 'home' ? headerRef : 
                      section === 'about' ? aboutRef :
                      section === 'services' ? servicesRef :
                      section === 'projects' ? projectsRef :
                      section === 'graphics' ? graphicsRef : teamRef, 
                      section
                    )} 
                    className="text-gray-800 hover:text-[#3f4ca0] transition-colors px-3 py-2 rounded-md text-sm font-medium group"
                    style={{ fontFamily: "'Arial Rounded MT Bold', sans-serif" }}
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                    <span className={`absolute left-0 bottom-0 h-0.5 bg-[#3f4ca0] transition-all duration-300 ${activeSection === section ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile menu button would go here */}
        </div>
      </header>

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <section ref={headerRef}>
          <Suspense fallback={<LoadingSpinner />}>
            <Hero />
          </Suspense>
        </section>
        
        {/* About Section */}
        <section ref={aboutRef} className="relative">
          <Suspense fallback={<LoadingSpinner />}>
            <About />
          </Suspense>
          
          {/* Overlapping Card */}
          <div className="absolute -bottom-8 left-0 w-full flex justify-center z-10">
            <Card className="mx-4 px-8 py-6 bg-gradient-to-r from-blue-50 to-indigo-50 shadow-xl rounded-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 animate-[bounce_6s_infinite]">
              <h3 className="text-xl font-medium text-gray-800 text-center">
                Ready to bring your ideas to life?{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                  Let's create something amazing together.
                </span>
              </h3>
            </Card>
          </div>
        </section>
        
        {/* Services Section */}
        <section ref={servicesRef} className="relative z-0 -mt-8">
          <Suspense fallback={<LoadingSpinner />}>
            <Services />
          </Suspense>
        </section>
        
        {/* Projects Section */}
        <section ref={projectsRef}>
          <Suspense fallback={<LoadingSpinner />}>
            <Works />
          </Suspense>
        </section>
        
        {/* Graphics Section */}
        <section ref={graphicsRef}>
          <Suspense fallback={<LoadingSpinner />}>
            <Graphics />
          </Suspense>
        </section>
        
        {/* Team Section */}
        <section ref={teamRef}>
          <Suspense fallback={<LoadingSpinner />}>
            <ProductSlider />
          </Suspense>
        </section>
      </main>

      {/* Footer */}
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
                loading="lazy"
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
              {['home', 'about', 'services'].map((section) => (
                <li key={section}>
                  <button 
                    onClick={() => scrollTo(
                      section === 'home' ? headerRef : 
                      section === 'about' ? aboutRef : servicesRef, 
                      section
                    )} 
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </button>
                </li>
              ))}
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