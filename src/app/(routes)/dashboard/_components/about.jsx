'use client'
import Image from 'next/image'
import { Card } from './ui/card'

export default function About() {
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

  return (
    <section className="min-h-screen ">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-4">What We Do</h1>
          <p className="text-lg text-white max-w-3xl mx-auto">
            Delivering exceptional digital experiences through innovative solutions and creative design
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center ">
          <div className="space-y-8">
            {services.map((service, index) => (
              <Card key={index} className="p-6 p-10 rounded-2xl shadow-lg border border-white/30 bg-white/20 backdrop-blur-md backdrop-saturate-150 text-center relative z-[1] hover:shadow-lg bg-blue-500 transition-shadow">
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
            <div className="relative h-64 rounded-xl overflow-hidden">
              <Image
                src="/hehe.png" // Replace with your image
                alt="Coding team"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-64 rounded-xl overflow-hidden">
              <Image
                src="/bakery.png" // Replace with your image
                alt="Design work"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-64 rounded-xl overflow-hidden col-span-2">
              <Image
                src="/allura.png" // Replace with your image
                alt="Team collaboration"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
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