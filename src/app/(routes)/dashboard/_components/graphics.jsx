'use client'
import Image from 'next/image'
import { useState } from 'react'

export default function Graphics() {
  // Sample data - replace with your actual images
  const logos = [
    { id: 1, src: '/logos/allura.png',credits: "Dainil Villianueva & Kimmel Delector", alt: 'Logo 1' },
    { id: 2, src: '/logos/bakery.png',credits: "Dainil Villianueva", alt: 'Logo 2' },
    { id: 3, src: '/logos/hehe.png',credits: "Dainil Villianueva", alt: 'Logo 3' },
    { id: 4, src: '/logos/KEVIN NEW LOGO.png',credits: "Kimmel Delector", alt: 'Logo 4' },
    { id: 5, src: '/logos/Primary logo.png',credits: "Jaynesa Perol", alt: 'Logo 5' },
    { id: 6, src: '/logos/Secondary logo.png',credits: "Kimmel Delector", alt: 'Logo 6' },
    
    { id: 13, src: '/logos/aQUA.png',credits: "Prince Tuazon", alt: 'Logo 6' },
    
    { id: 14, src: '/logos/Company Logo.png',credits: "Prince Tuazon", alt: 'Logo 6' },
  ]

  const graphicDesigns = [
    { id: 1, src: '/designs/1.png',credits: "Dainil Villianueva", alt: 'Design 1' },
    { id: 2, src: '/designs/2.png',credits: "Dainil Villianueva", alt: 'Design 2' },
    { id: 3, src: '/designs/3.png',credits: "Kimmel Delector", alt: 'Design 3' },
    { id: 4, src: '/designs/4.png',credits: "Dainil Villianueva", alt: 'Design 4' },
    { id: 5, src: '/designs/5.png',credits: "Kimmel Delector", alt: 'Design 1' },
    { id: 6, src: '/designs/6.png',credits: "Dainil Villianueva", alt: 'Design 2' },
    { id: 7, src: '/designs/7.png',credits: "Dainil Villianueva", alt: 'Design 3' },
    { id: 8, src: '/designs/10.png',credits: "Dainil Villianueva", alt: 'Design 4' },
    ,
  ]
  const moodboards = [
    
    { id: 9, src: '/designs/Mood Board-4.png',credits: "Jaynesa Perol", alt: 'Design 1' },
    { id: 10, src: '/designs/moodboard.png',credits: "Kimmel Delector", alt: 'Design 2' },
    { id: 11, src: '/designs/moodyboard.png',credits: "Kimmel Delector", alt: 'Design 3' },
    { id: 12, src: '/designs/Mood-Board.jpg',credits: "Prince Tuazon", alt: 'Design 3' },
    
    { id: 15, src: '/designs/Mood Board Hemplo.jpg',credits: "Prince Tuazon", alt: 'Design 3' },
  ]

  const [hoveredItem, setHoveredItem] = useState(null)

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 ">
      <div className="max-w-7xl mx-auto">
        
        {/* Graphic Designs Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-white">Graphic Designs</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {graphicDesigns.map((design) => (
              <div 
                key={design.id}
                className="relative group overflow-hidden rounded-lg shadow-md backdrop-blur-md backdrop-saturate-150 relative z-[1] border-[#696868]/20 p-5 transition-all duration-300 hover:shadow-xl"
                onMouseEnter={() => setHoveredItem(`design-${design.id}`)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <div className="w-full relative">
                  <Image
                    src={design.src}
                    alt={design.alt}
                    width={400}
                    height={400}
                    className={`w-full h-auto object-contain transition-transform duration-300 ${
                      hoveredItem === `design-${design.id}` ? 'scale-105' : 'scale-100'
                    }`}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>
        {/* Logos Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-white">Logo Designs</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {logos.map((logo) => (
              <div 
                key={logo.id}
                className="relative group overflow-hidden rounded-lg bg-white backdrop-blur-md backdrop-saturate-150 relative z-[1] border-white/20 p-5 shadow-md transition-all duration-300 hover:shadow-xl"
                onMouseEnter={() => setHoveredItem(`logo-${logo.id}`)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <div className="w-full relative">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={400}
                    height={400}
                    className={`w-full h-auto  object-contain transition-transform duration-300 ${
                      hoveredItem === `logo-${logo.id}` ? 'scale-105' : 'scale-100'
                    }`}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Moodboards Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-white">Mood boards</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
            {moodboards.map((moodboard) => (
              <div 
                key={moodboard.id}
                className="relative group overflow-hidden rounded-lg shadow-md backdrop-blur-md backdrop-saturate-150 relative z-[1] border-[#ffffff]/20 p-5 transition-all duration-300 hover:shadow-xl"
                onMouseEnter={() => setHoveredItem(`design-${moodboard.id}`)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <div className="w-full relative">
                  <Image
                    src={moodboard.src}
                    alt={moodboard.alt}
                    width={400}
                    height={400}
                    className={`w-full h-auto object-contain transition-transform duration-300 ${
                      hoveredItem === `design-${moodboard.id}` ? 'scale-105' : 'scale-100'
                    }`}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  )
}