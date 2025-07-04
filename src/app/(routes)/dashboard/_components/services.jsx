'use client'
import { Code, LayoutTemplate, Smartphone, Database, Paintbrush, MonitorSmartphone } from 'lucide-react'
import { Card, CardHeader, CardTitle, CardContent } from './ui/card'
import { useEffect, useRef } from 'react'

export default function Services() {
  const sectionRef = useRef(null)
  const headingRef = useRef(null)
  const cardRefs = useRef([])

  const services = [
    {
      id: 1,
      name: "GUI Development",
      description: "Beautiful and intuitive user interfaces with modern design principles.",
      icon: <LayoutTemplate className="w-10 h-10 text-white" />,
      tags: ["UI Design", "User Experience", "Prototyping"],
      color: "from-indigo-500 to-purple-600"
    },
    {
      id: 2,
      name: "Web Development",
      description: "Full-stack web applications with responsive design and robust functionality.",
      icon: <Code className="w-10 h-10 text-white" />,
      tags: ["React", "Next.js", "Node.js"],
      color: "from-blue-500 to-teal-600"
    },
    {
      id: 3,
      name: "App Development",
      description: "Cross-platform mobile applications for iOS and Android.",
      icon: <Smartphone className="w-10 h-10 text-white" />,
      tags: ["React Native", "Flutter", "Kotlin"],
      color: "from-green-500 to-emerald-600"
    },
    {
      id: 4,
      name: "Database Management",
      description: "Efficient data storage solutions with optimized queries and security.",
      icon: <Database className="w-10 h-10 text-white" />,
      tags: ["SQL", "NoSQL", "Firebase"],
      color: "from-yellow-500 to-amber-600"
    },
    {
      id: 5,
      name: "Web Design",
      description: "Custom website designs that reflect your brand identity.",
      icon: <Paintbrush className="w-10 h-10 text-white" />,
      tags: ["Figma", "Adobe XD", "Responsive"],
      color: "from-pink-500 to-rose-600"
    },
    {
      id: 6,
      name: "Mobile App Design",
      description: "Intuitive mobile interfaces with platform-specific patterns.",
      icon: <MonitorSmartphone className="w-10 h-10 text-white" />,
      tags: ["Material Design", "iOS HIG", "Prototyping"],
      color: "from-purple-500 to-violet-600"
    }
  ]

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Section animation
          if (sectionRef.current) {
            sectionRef.current.style.opacity = '1'
            sectionRef.current.style.transform = 'translateY(0)'
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
                card.style.transform = 'translateY(0) rotate(0)'
              }, 150 * index)
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
  }, [])

  return (
    <section 
      ref={sectionRef}
      className="py-16 px-4 sm:px-6 lg:px-8 min-h-screen bg-gradient-to-br from-gray-900 to-blue-900"
      style={{
        opacity: 0,
        transform: 'translateY(20px)',
        transition: 'opacity 0.8s ease-out, transform 0.8s ease-out'
      }}
    >
      <div className="max-w-7xl mx-auto">
        <h2 
          ref={headingRef}
          className="text-4xl md:text-5xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-300"
          style={{
            fontFamily: "'Arial Rounded MT Bold', sans-serif",
            opacity: 0,
            transform: 'translateY(-20px)',
            transition: 'opacity 0.6s ease-out 0.2s, transform 0.6s ease-out 0.2s'
          }}
        >
          Our Services
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={service.id}
              ref={el => cardRefs.current[index] = el}
              className={`p-8 rounded-2xl shadow-xl relative overflow-hidden group transition-all duration-500 hover:scale-[1.03]`}
              style={{
                opacity: 0,
                transform: 'translateY(30px) rotate(2deg)',
                transition: `opacity 0.6s ease-out ${0.3 + index * 0.1}s, transform 0.6s ease-out ${0.3 + index * 0.1}s`
              }}
            >
              {/* Gradient background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-90 group-hover:opacity-100 transition-opacity duration-500`} />
              
              {/* Glow effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500">
                <div className="absolute -inset-2 bg-white rounded-xl blur-md" />
              </div>
              
              <div className="relative z-10 h-full flex flex-col">
                <CardHeader className="flex flex-col items-center px-0 pt-0">
                  <div className="p-3 bg-white/10 rounded-full mb-6 backdrop-blur-sm border border-white/20">
                    {service.icon}
                  </div>
                  <CardTitle className="text-2xl font-bold text-center text-white" style={{ fontFamily: "'Arial Rounded MT Bold', sans-serif" }}>
                    {service.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-0 pb-0 flex-grow">
                  <p className="text-white/90 mb-6 text-center" style={{ fontFamily: "'Myriad Pro', sans-serif" }}>
                    {service.description}
                  </p>
                  <div className="flex flex-wrap justify-center gap-2">
                    {service.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex} 
                        className="px-3 py-1 bg-white/10 text-white/90 text-sm rounded-full backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-colors"
                        style={{ fontFamily: "'Myriad Pro', sans-serif" }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}