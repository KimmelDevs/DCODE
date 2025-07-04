'use client'
import Image from 'next/image'
import { Card } from './ui/card'
import { useEffect, useRef } from 'react'

export default function About() {
  const sectionRef = useRef(null)
  const headingRef = useRef(null)
  const cardRefs = useRef([])
  const imageRefs = useRef([])
  const ctaRef = useRef(null)

  const services = [
    {
      title: "Coding Excellence",
      description: "Our team of experienced developers specializes in creating robust, efficient, and scalable solutions. Whether it's web development, mobile apps, or custom software, we use the latest technologies to turn your ideas into reality.",
      icon: "💻"
    },
    {
      title: "Graphic Design Mastery",
      description: "Design is at the heart of everything we do. Our talented designers craft visually appealing and user-friendly designs that elevate the user experience. From branding to UI/UX, we ensure every visual element is perfect.",
      icon: "🎨"
    },
    {
      title: "Innovative Solutions",
      description: "We don't just follow trends - we set them. Our team combines creativity with technical expertise to deliver innovative solutions that give you a competitive edge.",
      icon: "✨"
    }
  ]

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Section animation
          if (sectionRef.current) {
            sectionRef.current.style.opacity = '1'
            sectionRef.current.style.transform = 'scale(1)'
          }

          // Heading animation
          if (headingRef.current) {
            headingRef.current.style.opacity = '1'
            headingRef.current.style.transform = 'translateY(0)'
          }

          // Cards animation
          cardRefs.current.forEach((card, index) => {
            if (card) {
              setTimeout(() => {
                card.style.opacity = '1'
                card.style.transform = 'translateX(0)'
              }, 200 * index)
            }
          })

          // Images animation
          imageRefs.current.forEach((image, index) => {
            if (image) {
              setTimeout(() => {
                image.style.opacity = '1'
                image.style.transform = 'scale(1)'
              }, 200 * index + 300)
            }
          })

          // CTA animation
          if (ctaRef.current) {
            setTimeout(() => {
              ctaRef.current.style.opacity = '1'
              ctaRef.current.style.transform = 'translateY(0)'
            }, 1000)
          }

          // Disconnect observer after animations trigger
          observer.disconnect()
        }
      })
    }, {
      threshold: 0.1, // Trigger when 10% of the section is visible
      rootMargin: '0px 0px -100px 0px' // Adjust this to trigger earlier/later
    })

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section 
      ref={sectionRef}
      className="min-h-screen"
      style={{
        opacity: 0,
        transform: 'scale(0.95)',
        transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
      }}
    >
      <div className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-800 to-purple-400">
        <div 
          ref={headingRef}
          className="text-center mb-16"
          style={{
            opacity: 0,
            transform: 'translateY(-20px)',
            transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
          }}
        >
          <h1 className="text-4xl font-bold text-white mb-4">What We Do</h1>
          <p className="text-lg text-white max-w-3xl mx-auto">
            Delivering exceptional digital experiences through innovative solutions and creative design
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            {services.map((service, index) => (
              <Card 
                key={index}
                ref={el => cardRefs.current[index] = el}
                className="p-6 p-10 rounded-2xl shadow-lg border border-white/30 bg-white/20 backdrop-blur-md backdrop-saturate-150 text-center relative z-[1] hover:shadow-lg bg-blue-500 transition-all"
                style={{
                  opacity: 0,
                  transform: 'translateX(-30px)',
                  transition: `opacity 0.5s ease-out ${index * 0.2}s, transform 0.5s ease-out ${index * 0.2}s`,
                }}
              >
                <div className="flex items-start gap-4">
                  <span className="text-3xl">{service.icon}</span>
                  <div>
                    <h2 className="text-xl bg-blue-500font-semibold text-white mb-2">{service.title}</h2>
                    <p className="text-white">{service.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-4">
            {['/hehe.png', '/bakery.png', '/allura.png'].map((src, index) => (
              <div 
                key={index}
                ref={el => imageRefs.current[index] = el}
                className={`relative h-64 rounded-xl overflow-hidden ${index === 2 ? 'col-span-2' : ''}`}
                style={{
                  opacity: 0,
                  transform: 'scale(0.9)',
                  transition: `opacity 0.6s ease-out ${0.3 + index * 0.2}s, transform 0.6s ease-out ${0.3 + index * 0.2}s`,
                }}
              >
                <Image
                  src={src}
                  alt={index === 0 ? "Coding team" : index === 1 ? "Design work" : "Team collaboration"}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        <div 
          ref={ctaRef}
          className="mt-16 text-center"
          style={{
            opacity: 0,
            transform: 'translateY(20px)',
            transition: 'opacity 0.6s ease-out 1s, transform 0.6s ease-out 1s',
          }}
        >
          <Card className="inline-block px-8 py-4 bg-white/80 backdrop-blur-sm">
            <h3 className="text-xl font-medium text-gray-800">
              Ready to bring your ideas to life?{' '}
              <span className="text-blue-600">Let's create something amazing together.</span>
            </h3>
          </Card>
        </div>
      </div>
    </section>
  )
}