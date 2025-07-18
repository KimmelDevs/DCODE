'use client'
import Image from 'next/image'
import { useState, useRef, useEffect } from 'react'
import { Palette, ImageIcon, Layers } from 'lucide-react'

export default function Graphics() {
  const [activeTab, setActiveTab] = useState('designs')
  const [hoveredItem, setHoveredItem] = useState(null)
  const sectionRef = useRef(null)
  const tabRefs = useRef([])
  const itemRefs = useRef([])

  // Graphics data with original sizes
  const graphicsData = {
    designs: [
      { id: 1, src: '/designs/1.png', credits: "Dainil Villianueva", alt: 'Design 1' },
      { id: 2, src: '/designs/2.png', credits: "Dainil Villianueva", alt: 'Design 2' },
      { id: 3, src: '/designs/3.png', credits: "Kimmel Delector", alt: 'Design 3' },
      { id: 4, src: '/designs/4.png', credits: "Dainil Villianueva", alt: 'Design 4' },
      { id: 5, src: '/designs/5.png', credits: "Kimmel Delector", alt: 'Design 5' },
      { id: 6, src: '/designs/6.png', credits: "Dainil Villianueva", alt: 'Design 6' },
      { id: 7, src: '/designs/7.png', credits: "Dainil Villianueva", alt: 'Design 7' },
      { id: 8, src: '/designs/10.png', credits: "Dainil Villianueva", alt: 'Design 8' },
    ],
    logos: [
      { id: 1, src: '/logos/allura.png', credits: "Dainil Villianueva & Kimmel Delector", alt: 'Allura Logo' },
      { id: 2, src: '/logos/bakery2.png', credits: "Dainil Villianueva", alt: 'Bakery Logo' },
      { id: 3, src: '/logos/hehe.png', credits: "Dainil Villianueva", alt: 'Hehe Logo' },
      { id: 4, src: '/logos/KEVIN NEW LOGO.png', credits: "Kimmel Delector", alt: 'Kevin Logo' },
      { id: 5, src: '/logos/Primary logo.png', credits: "Jaynesa Perol", alt: 'Primary Logo' },
      { id: 6, src: '/logos/Secondary logo.png', credits: "Kimmel Delector", alt: 'Secondary Logo' },
      { id: 7, src: '/logos/aQUA.png', credits: "Prince Tuazon", alt: 'Aqua Logo' },
      { id: 8, src: '/logos/Company Logo.png', credits: "Prince Tuazon", alt: 'Company Logo' },
      { id: 9, src: '/logos/reweave.png', credits: "Prince Tuazon", alt: 'Company Logo' },
      { id: 10, src: '/logos/wrenchi.png', credits: "Prince Tuazon", alt: 'Company Logo' },
      
    ],
    moodboards: [
      { id: 1, src: '/designs/Mood Board-4.png', credits: "Jaynesa Perol", alt: 'Mood Board 1' },
      { id: 2, src: '/designs/moodboard.png', credits: "Kimmel Delector", alt: 'Mood Board 2' },
      { id: 3, src: '/designs/moodyboard.png', credits: "Kimmel Delector", alt: 'Mood Board 3' },
      { id: 4, src: '/designs/Mood-Board.jpg', credits: "Prince Tuazon", alt: 'Mood Board 4' },
      { id: 5, src: '/designs/Mood Board Hemplo.jpg', credits: "Prince Tuazon", alt: 'Mood Board 5' },
    ]
  }

  // Animation effects
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (sectionRef.current) {
            sectionRef.current.style.opacity = '1'
            sectionRef.current.style.transform = 'translateY(0)'
          }

          tabRefs.current.forEach((tab, index) => {
            if (tab) {
              setTimeout(() => {
                tab.style.opacity = '1'
                tab.style.transform = 'translateY(0)'
              }, 100 * index)
            }
          })

          itemRefs.current.forEach((item, index) => {
            if (item) {
              setTimeout(() => {
                item.style.opacity = '1'
                item.style.transform = 'translateY(0)'
              }, 50 * index)
            }
          })
        }
      })
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    })

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [activeTab])

  // Determine grid columns based on active tab
  const gridColumns = activeTab === 'moodboards' ? 'sm:grid-cols-2' : 'sm:grid-cols-2 md:grid-cols-4'

  return (
    <section 
      ref={sectionRef}
      className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-blue-900"
      style={{
        opacity: 0,
        transform: 'translateY(20px)',
        transition: 'opacity 0.8s ease-out, transform 0.8s ease-out'
      }}
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8 text-white">Graphic Works</h2>
        
        {/* Tab Navigation */}
        <div className="flex justify-center mb-8 overflow-x-auto">
          <div className="flex space-x-2 p-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
                {[
              { id: 'designs', label: 'Designs', icon: <Palette className="w-5 h-5" /> },
              { id: 'logos', label: 'Logos', icon: <ImageIcon className="w-5 h-5" /> },
              { id: 'moodboards', label: 'Moodboards', icon: <Layers className="w-5 h-5" /> }
            ].map((tab, index) => (
              <button
                key={tab.id}
                ref={el => tabRefs.current[index] = el}
                className={`flex items-center px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeTab === tab.id 
                    ? 'bg-blue-600 text-white shadow-lg' 
                    : 'text-white/70 hover:text-white hover:bg-white/10'
                }`}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  opacity: 0,
                  transform: 'translateY(10px)',
                  transition: `opacity 0.5s ease-out ${0.2 + index * 0.1}s, transform 0.5s ease-out ${0.2 + index * 0.1}s`
                }}
              >
                <span className="mr-2">{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Graphics Grid - Adjusted based on active tab */}
        <div className={`grid grid-cols-1 ${gridColumns} gap-6`}>
          {graphicsData[activeTab].map((item, index) => (
            <div 
              key={item.id}
              ref={el => itemRefs.current[index] = el}
              className={`relative group overflow-hidden rounded-lg shadow-md backdrop-saturate-150 border border-white/20 p-5 transition-all duration-300 hover:shadow-xl ${
                activeTab === 'logos' ? 'bg-white' : 'bg-white/10 backdrop-blur-md'
              }`}
              style={{
                opacity: 0,
                transform: 'translateY(20px)',
                transition: `opacity 0.6s ease-out ${0.1 + index * 0.05}s, transform 0.6s ease-out ${0.1 + index * 0.05}s`
              }}
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <div className="w-full relative">
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={400}
                  height={400}
                  className={`w-full h-auto object-contain transition-transform duration-300 ${
                    hoveredItem === item.id ? 'scale-105' : 'scale-100'
                  }`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}