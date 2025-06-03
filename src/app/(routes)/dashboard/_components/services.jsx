'use client'
import { Code, LayoutTemplate, Smartphone, Database, Paintbrush, MonitorSmartphone } from 'lucide-react'
import { Card, CardHeader, CardTitle, CardContent } from './ui/card'

export default function Services() {
  const services = [
    {
      id: 1,
      name: "GUI Development",
      description: "Beautiful and intuitive user interfaces with modern design principles.",
      icon: <LayoutTemplate className="w-10 h-10 text-white" />,
      tags: ["UI Design", "User Experience", "Prototyping"]
    },
    {
      id: 2,
      name: "Web Development",
      description: "Full-stack web applications with responsive design and robust functionality.",
      icon: <Code className="w-10 h-10 text-white" />,
      tags: ["React", "Next.js", "Node.js"]
    },
    {
      id: 3,
      name: "App Development",
      description: "Cross-platform mobile applications for iOS and Android.",
      icon: <Smartphone className="w-10 h-10 text-white" />,
      tags: ["React Native", "Flutter", "Kotlin"]
    },
    {
      id: 4,
      name: "Database Management",
      description: "Efficient data storage solutions with optimized queries and security.",
      icon: <Database className="w-10 h-10 text-white" />,
      tags: ["SQL", "NoSQL", "Firebase"]
    },
    {
      id: 5,
      name: "Web Design",
      description: "Custom website designs that reflect your brand identity.",
      icon: <Paintbrush className="w-10 h-10 text-white" />,
      tags: ["Figma", "Adobe XD", "Responsive"]
    },
    {
      id: 6,
      name: "Mobile App Design",
      description: "Intuitive mobile interfaces with platform-specific patterns.",
      icon: <MonitorSmartphone className="w-10 h-10 text-white" />,
      tags: ["Material Design", "iOS HIG", "Prototyping"]
    }
  ]

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 ">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-white" style={{ fontFamily: "'Arial Rounded MT Bold', sans-serif" }}>Our Services</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card 
              key={service.id} 
              className="p-10 rounded-2xl shadow-lg border border-white/30 bg-white/20 backdrop-blur-md backdrop-saturate-150 text-center relative z-[1] hover:shadow-lg transition-all duration-300 border border-[#696868]/20 hover:scale-105 hover:border-[#3f4ca0]/30"
            >
              <CardHeader className="flex flex-col items-center">
                <div className="p-2 bg-[#3f4ca0]/10 rounded-full mb-4">
                  {service.icon}
                </div>
                <CardTitle className="text-xl font-bold text-center text-white" style={{ fontFamily: "'Arial Rounded MT Bold', sans-serif" }}>
                  {service.name}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-white mb-4" style={{ fontFamily: "'Myriad Pro', sans-serif" }}>
                  {service.description}
                </p>
                <div className="flex flex-wrap justify-center gap-2">
                  {service.tags.map((tag, index) => (
                    <span 
                      key={index} 
                      className="px-2 py-1 bg-[#1f99ce]/10 text-white text-xs rounded-full" 
                      style={{ fontFamily: "'Myriad Pro', sans-serif" }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}