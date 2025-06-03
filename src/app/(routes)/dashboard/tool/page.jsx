'use client'
import Image from 'next/image'
import { Code, Paintbrush, ImageIcon, BookOpen, Wrench, Rocket, FlaskConical, Database } from 'lucide-react'

export default function Tools() {
  const categories = [
    {
      id: 1,
      name: "Development & Coding",
      icon: <Code className="w-5 h-5" />,
      tools: [
        { name: "freeCodeCamp", url: "https://www.freecodecamp.org/", icon: "/icons/freecodecamp.png" },
        { name: "GitHub", url: "https://github.com/", icon: "/icons/github.png" },
        { name: "CodePen", url: "https://codepen.io/", icon: "/codepen.png" },
        { name: "StackBlitz", url: "https://stackblitz.com/", icon: "/icons/stackblitz.png" },
        { name: "JSFiddle", url: "https://jsfiddle.net/", icon: "/jsfiddle.png" }
      ]
    },
    {
      id: 2,
      name: "Design & Prototyping",
      icon: <Paintbrush className="w-5 h-5" />,
      tools: [
        { name: "Figma", url: "https://figma.com", icon: "/icons/figma.png" },
        { name: "Canva", url: "https://canva.com", icon: "/canva.png" },
        { name: "Balsamiq", url: "https://balsamiq.com", icon: "/balsamiq.png" },
        { name: "Adobe XD", url: "https://adobe.com/products/xd.html", icon: "/xd.png" }
      ]
    },
    {
      id: 3,
      name: "Assets & Resources",
      icon: <ImageIcon className="w-5 h-5" />,
      tools: [
        { name: "IconFinder", url: "https://iconfinder.com", icon: "/iconfinder.png" },
        { name: "Unsplash", url: "https://unsplash.com", icon: "/unsplash.png" },
        { name: "Pexels", url: "https://pexels.com", icon: "/pexels.png" },
        { name: "Google Fonts", url: "https://fonts.google.com", icon: "/google-fonts.png" }
      ]
    },
    {
      id: 4,
      name: "Learning & Docs",
      icon: <BookOpen className="w-5 h-5" />,
      tools: [
        { name: "MDN Web Docs", url: "https://developer.mozilla.org", icon: "/mdn.png" },
        { name: "W3Schools", url: "https://w3schools.com", icon: "/w3schools.png" },
        { name: "CSS Tricks", url: "https://css-tricks.com", icon: "/css-tricks.png" }
      ]
    },
    {
      id: 5,
      name: "Database",
      icon: <Database className="w-5 h-5" />,
      tools: [
        { name: "Firebase", url: "https://firebase.google.com", icon: "/firebase.png" },
        { name: "MongoDB", url: "https://mongodb.com", icon: "/mongodb.png" },
        { name: "MySQL", url: "https://mysql.com", icon: "/mysql.png" },
        { name: "PostgreSQL", url: "https://postgresql.org", icon: "/postgresql.png" }
      ]
    },
    {
      id: 6,
      name: "Conversion Tools",
      icon: <Wrench className="w-5 h-5" />,
      tools: [
        { name: "Remove.bg", url: "https://remove.bg", icon: "/removebg.png" },
        { name: "TinyPNG", url: "https://tinypng.com", icon: "/tinypng.png" },
        { name: "Audio Converter", url: "https://online-audio-converter.com", icon: "/audioconverter.png" }
      ]
    },
    {
      id: 7,
      name: "Deployment",
      icon: <Rocket className="w-5 h-5" />,
      tools: [
        { name: "Vercel", url: "https://vercel.com", icon: "/vercel.png" },
        { name: "Netlify", url: "https://netlify.com", icon: "/netlify.png" },
        { name: "Firebase Hosting", url: "https://firebase.google.com/docs/hosting", icon: "/firebase.png" }
      ]
    },
    {
      id: 8,
      name: "Experimentation",
      icon: <FlaskConical className="w-5 h-5" />,
      tools: [
        { name: "CodeSandbox", url: "https://codesandbox.io", icon: "/codesandbox.png" },
        { name: "Tailwind Play", url: "https://play.tailwindcss.com", icon: "/tailwind.png" },
        { name: "Regex101", url: "https://regex101.com", icon: "/regex101.png" }
      ]
    }
  ]

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8"style={{ 
      backgroundImage: "url('/background8.jpg')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed'
    }}>
      <div className="max-w-7xl mx-auto ">
        <h2 className="text-3xl font-bold text-center mb-12 text-white" style={{ fontFamily: "'Arial Rounded MT Bold', sans-serif" }}>
          Developer Tools We Use
        </h2>
        
        <div className="space-y-12">
          {categories.map((category) => (
            <div key={category.id} className="p-6 rounded-2xl border border-white/30 bg-white/20 backdrop-blur-md backdrop-saturate-150">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-[#3f4ca0]/20 rounded-full">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-white" style={{ fontFamily: "'Arial Rounded MT Bold', sans-serif" }}>
                  {category.name}
                </h3>
              </div>
              
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-4">
                {category.tools.map((tool, index) => (
                  <a
                    key={index}
                    href={tool.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col items-center p-3 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 transition-all duration-200"
                    title={tool.name}
                  >
                    <div className="relative w-10 h-10 mb-2">
                      <Image
                        src={tool.icon}
                        alt={tool.name}
                        fill
                        className="object-contain group-hover:scale-110 transition-transform"
                      />
                    </div>
                    <span className="text-xs text-white/80 text-center truncate w-full" style={{ fontFamily: "'Myriad Pro', sans-serif" }}>
                      {tool.name}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}