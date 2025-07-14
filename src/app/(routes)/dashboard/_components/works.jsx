'use client'
import Image from 'next/image'
import { useState, useRef, useEffect } from 'react'
import { Code, Smartphone, Globe, Paintbrush, Database, LayoutTemplate } from 'lucide-react'

export default function Works() {
  const [activeTab, setActiveTab] = useState('android')
  const [expandedProject, setExpandedProject] = useState(null)
  const [selectedImages, setSelectedImages] = useState({})
  const [modalOpen, setModalOpen] = useState(false)
  const [currentModalImage, setCurrentModalImage] = useState('')
  const [currentModalProject, setCurrentModalProject] = useState(null)
  const sectionRef = useRef(null)
const [scrollY, setScrollY] = useState(0);
  const tabRefs = useRef([])
  const projectRefs = useRef([])

  // All projects data
  const allProjects = [
    // Android Projects
    {
      id: 2,
      name: "MacroMinder",
      description: "Nutrition tracking mobile app with macro nutrient calculations.",
      image: "/kimmel.jpg",
      tags: ["Android", "Kotlin", "Room DB"],
      type: "android",
      icon: <Smartphone className="w-5 h-5" />,
      details: "MacroMinder helps users track their daily macronutrient intake with an easy-to-use interface. Features include barcode scanning for food items, meal planning, and progress tracking.",
      gallery: ["/projects/macrominder/intro.png","/projects/macrominder/1.png","/projects/macrominder/2.png","/projects/macrominder/3.png","/projects/macrominder/4.png"],
      technologies: ["Room Database", "CameraX", "MPAndroidChart", "WorkManager"],
      features: ["Barcode scanning", "Meal planning", "Progress charts", "Daily reminders"]
    },
    {
      id: 3,
      name: "FitTitan",
      description: "Online fitness platform with personalized workout routines.",
      image: "/kimmel.jpg",
      tags: ["Android", "Jetpack Compose", "Firebase"],
      type: "android",
      icon: <Smartphone className="w-5 h-5" />,
      details: "FitTitan offers personalized workout plans based on user goals and fitness levels. Includes video demonstrations, progress tracking, and social features to connect with other users.",
      gallery: ["/projects/fititan/intro.png","/projects/fititan/intro.png","/projects/fititan/1.png","/projects/fititan/2.png","/projects/fititan/3.png","/projects/fititan/4.png","/projects/fititan/5.png"],
      technologies: ["Jetpack Compose", "Firebase Storage", "ExoPlayer", "Hilt DI"],
      features: ["Personalized workouts", "Video demonstrations", "Progress tracking", "Social features"]
    },
    {
      id: 7,
      name: "FitFlex Fitness Studio",
      description: "Online Gym Attendance.",
      image: "/kimmel.jpg",
      tags: ["Android", "Xml", "Firebase"],
      type: "android",
      icon: <Smartphone className="w-5 h-5" />,
      details: "FitFlex Fitness Studio helps gym owners manage memberships and attendance. Members can check class schedules, book sessions, and track their attendance history.",
      gallery: ["/projects/fitflex/fitflex.png", "/projects/fitflex/fitflexintro.png", "/projects/fitflex/fitflex1.png","/projects/fitflex/fitflex2.png", "/projects/fitflex/fitflex3.png", "/projects/fitflex/fitflex4.png"],
      technologies: ["Xml", "Firebase Auth", "Cloud Firestore"],
      features: ["Membership management", "Class scheduling", "Attendance tracking", "Payment processing"]
    },
    {
      id: 8,
      name: "HappyPaws",
      description: "Mobile app for pet appointment booking and care tracking.",
      image: "/happypaws.jpg",
      tags: ["Mobile", "Firebase", "Kotlin", "XML"],
      type: "android",
      icon: <Smartphone className="w-5 h-5" />,
      details: "HappyPaws is an Android mobile application that allows pet owners to book veterinary appointments with reminders and medical records.",
      gallery: ["/projects/happypaws/intro.png", "/projects/happypaws/1.png", "/projects/happypaws/2.png"],
      technologies: ["Kotlin", "XML", "Firebase Firestore", "Firebase Auth"],
      features: [
        "User and admin authentication",
        "Appointment booking and reminders",
        "Pet medical records",
        "Admin panel"
      ]
    },
    {
      id: 9,
      name: "Memory Flip",
      description: "Card-based memory game developed in Android Studio.",
      image: "/memoryflip.jpg",
      tags: ["Android", "Kotlin", "XML"],
      type: "android",
      icon: <Smartphone className="w-5 h-5" />,
      details: "Memory Flip is a classic card matching game built for Android devices. Players flip cards to reveal symbols and try to find matching pairs.",
      gallery: ["/projects/memoryflip/intro.png", "/projects/memoryflip/1.png"],
      technologies: ["Android Studio", "Kotlin", "XML"],
      features: ["Multiple levels", "Score tracking", "Timer mode", "Simple UI"]
    },
    {
  id: 10,
  name: "BrewBuddy",
  description: "Mobile-first ordering platform for milk tea shops and customers.",
  image: "/memoryflip.jpg",
  type: "android",
  icon: <Smartphone className="w-5 h-5" />,
  tags: ["Node.js", "Express", "MongoDB", "React Native", "Expo", "Socket.io", "AWS", "JWT"],
  details: `BrewBuddy is a full-stack ordering solution designed specifically for milk tea shops. The platform features a mobile-first interface for both customers and shop staff, built with React Native using Expo. 

The backend is powered by Node.js and Express, hosted on AWS EC2, and connects to a MongoDB database. Real-time order updates are enabled through Socket.io, providing seamless communication between users and staff. Product images are managed using AWS S3.

Role-based authentication and access control are implemented using JWT. The system supports real-time order processing and staff notifications, offering a complete and efficient ordering experience.`,
  gallery: [
    "/projects/brew/brew1.png",
    "/projects/brew/brew2.png"
  ],
  technologies: [
    "React Native",
    "Expo",
    "Node.js",
    "Express.js",
    "MongoDB",
    "AWS EC2",
    "AWS S3",
    "Socket.io",
    "JWT"
  ],
  features: [
    "Mobile-first design",
    "Real-time order handling",
    "Staff-customer interface",
    "RESTful API",
    "Image upload with AWS S3",
    "Authentication with JWT",
    "Hosted on AWS EC2"
  ]
    },
    {
  id: 11,
  name: "HappyPaws2",
  description: "Appointment and aftercare management platform for veterinary clinics and pet owners.",
  image: "/projects/happypaws/cover.jpg",
  type: "android",
  icon: <Smartphone className="w-5 h-5" />,
  tags: ["React Native", "Node.js", "Express", "MongoDB", "AWS S3", "JWT", "Vercel", "OpenRouter"],
  details: `HappyPaws is a full-stack solution for veterinary clinics to streamline appointment scheduling, digitize aftercare instructions, and centralize pet health records. 

Key features include user authentication, appointment management, digital aftercare, pet profile management, and an admin dashboard with insights. JWT is used for secure role-based authentication.

The tech stack includes React Native for the mobile interface, Node.js and Express for the backend, and MongoDB for data storage. Pet images and records are managed using AWS S3. The backend is deployed on Vercel for quick scalability and serverless efficiency.

A simple AI-powered chatbot is integrated using a model from OpenRouter via API key for client interaction and assistance.`,
  gallery: [
    
    "/projects/happypawss/10.png",
    "/projects/happypawss/8.png",
    "/projects/happypawss/9.png"
  ],
  technologies: [
    "React Native",
    "Node.js",
    "Express.js",
    "MongoDB",
    "AWS S3",
    "JWT",
    "Vercel",
    "OpenRouter"
  ],
  features: [
    "Appointment management",
    "Digitized aftercare instructions",
    "Pet profile storage",
    "Admin dashboard with insights",
    "User authentication with JWT",
    "Chatbot integration (OpenRouter API)",
    "AWS S3 file/image handling",
    "Vercel backend deployment"
  ]
},

    // Web Projects
    {
      id: 4,
      name: "Lost and Found",
      description: "Campus based Community platform to report and recover lost items.",
      image: "/kimmel.jpg",
      tags: ["Next.js", "Tailwind", "Firebase"],
      type: "web",
      icon: <Globe className="w-5 h-5" />,
      details: "Lost and Found is a community platform for university campuses where students can report lost items and help others recover their belongings.",
      gallery: ["/projects/lostfound/intro.png","/projects/lostfound/1.png","/projects/lostfound/2.png","/projects/lostfound/3.png","/projects/lostfound/4.png","/projects/lostfound/5.png","/projects/lostfound/6.png","/projects/lostfound/7.png","/projects/lostfound/8.png"],
      technologies: ["Next.js API Routes", "Firebase Storage", "Cloud Firestore"],
      features: ["Item reporting", "Image uploads", "Location tagging", "Real-time notifications"]
    },
    {
      id: 5,
      name: "Spent Expense Tracker",
      description: "Personal finance app to track expenses and manage budgets effectively.",
      image: "/kimmel.jpg",
      tags: ["React", "Node.js", "Firebase"],
      type: "web",
      icon: <Globe className="w-5 h-5" />,
      details: "Spent is a comprehensive expense tracker that helps users manage their personal finances with budget planning and expense categorization.",
      gallery: ["/projects/spent/intro copy.png","/projects/spent/1 (5).png","/projects/spent/1 (4).png","/projects/spent/1 (3).png","/projects/spent/1 (1).png","/projects/spent/1 (2).png"],
      technologies: ["React Hooks", "Node.js", "Express", "Chart.js"],
      features: ["Budget planning", "Expense categorization", "Visual reports", "Multi-device sync"]
    },
    {
      id: 6,
      name: "Bubble Tea",
      description: "Staff Based Web application for Serving BubbleTea.",
      image: "/kimmel.jpg",
      tags: ["Tailwind", "React", "MySql"],
      type: "web",
      icon: <Globe className="w-5 h-5" />,
      details: "Bubble Tea is a staff management system for bubble tea shops, handling order management, inventory tracking, and customer loyalty programs.",
      gallery: ["/projects/bubbletea/intro.png","/projects/bubbletea/1.png","/projects/bubbletea/2.png","/projects/bubbletea/3.png","/projects/bubbletea/4.png","/projects/bubbletea/5.png","/projects/bubbletea/6.png","/projects/bubbletea/7.png"],
      technologies: ["React Context API", "Node.js", "MySQL", "Xampp"],
      features: ["Order management", "Inventory tracking", "Loyalty programs", "Sales analytics"]
    },
    {
      id: 19,
      name: "SariSupplyHub",
      description: "Web-based sari-sari store management and ordering system.",
      image: "/sarisupplyhub.jpg",
      tags: ["Web", "Firebase", "JavaScript"],
      type: "web",
      icon: <Globe className="w-5 h-5" />,
      details: "SariSupplyHub is a full-featured web app designed for managing a sari-sari store with product listing, customer orders, and real-time updates.",
      gallery: ["/projects/SariSupplyHub/1 (1).png","/projects/SariSupplyHub/1 (2).png","/projects/SariSupplyHub/1 (3).png","/projects/SariSupplyHub/1 (4).png","/projects/SariSupplyHub/1 (5).png"],
      technologies: ["JavaScript", "HTML", "CSS", "Firebase Firestore"],
      features: [
        "User and admin authentication",
        "Product catalog with images",
        "Order management system",
        "Real-time database"
      ]
    }
  ]

  // Filter projects based on active tab
  const filteredProjects = activeTab === 'all' 
    ? allProjects 
    : allProjects.filter(project => project.type === activeTab)

    
  // Animation effects
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Section animation
          if (sectionRef.current) {
            sectionRef.current.style.opacity = '1'
            sectionRef.current.style.transform = 'translateY(0)'
          }

          // Tab animations
          tabRefs.current.forEach((tab, index) => {
            if (tab) {
              setTimeout(() => {
                tab.style.opacity = '1'
                tab.style.transform = 'translateY(0)'
              }, 100 * index)
            }
          })

          // Project animations
          projectRefs.current.forEach((project, index) => {
            if (project) {
              setTimeout(() => {
                project.style.opacity = '1'
                project.style.transform = 'translateY(0)'
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
  }, [activeTab])

  // Helper functions
  const toggleExpand = (id) => {
    setExpandedProject(expandedProject === id ? null : id)
  }

  const selectImage = (projectId, imageIndex) => {
    setSelectedImages(prev => ({
      ...prev,
      [projectId]: imageIndex
    }))
  }

  const openModal = (project, imageIndex = 0) => {
    setCurrentModalProject(project)
    setCurrentModalImage(project.gallery ? project.gallery[imageIndex] : project.image)
    setModalOpen(true)
  }

  const closeModal = () => {
    setModalOpen(false)
  }

  return (
    <section 
      ref={sectionRef}
      className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-blue-900 min-h-screen"
      style={{
        opacity: 0,
        transform: 'translateY(20px)',
        transition: 'opacity 0.8s ease-out, transform 0.8s ease-out'
      }}
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-300" 
            style={{ fontFamily: "'Arial Rounded MT Bold', sans-serif" }}>
          Our Works
        </h2>
        
        {/* Tab Navigation */}
        <div className="flex justify-center mb-12 overflow-x-auto">
          <div className="flex space-x-2 p-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
            {[
              { id: 'android', label: 'Android', icon: <Smartphone className="w-5 h-5" /> },
              { id: 'web', label: 'Web', icon: <Globe className="w-5 h-5" /> }
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

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id}
              ref={el => projectRefs.current[index] = el}
              className={`relative group transition-all duration-500 ${
                expandedProject === project.id 
                  ? 'md:col-span-2 lg:col-span-3' 
                  : 'hover:scale-[1.02] cursor-pointer'
              }`}
              style={{
                opacity: 0,
                transform: 'translateY(30px)',
                transition: `opacity 0.6s ease-out ${0.3 + index * 0.1}s, transform 0.6s ease-out ${0.3 + index * 0.1}s`
              }}
            >
              <div 
                className={`h-full p-6 rounded-2xl shadow-lg border border-white/30 bg-white/10 backdrop-blur-md backdrop-saturate-150 overflow-hidden ${
                  expandedProject === project.id ? 'bg-gradient-to-br from-blue-900/50 to-purple-900/50' : ''
                }`}
                onClick={() => toggleExpand(project.id)}
              >
                {/* Project header with icon */}
                <div className="flex items-center mb-4">
                  <div className="p-2 rounded-full bg-white/10 mr-3">
                    {project.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white" style={{ fontFamily: "'Arial Rounded MT Bold', sans-serif" }}>
                    {project.name}
                  </h3>
                </div>

                <div className={`flex flex-col ${expandedProject === project.id ? 'md:flex-row' : ''} gap-6`}>
                  {/* Project image */}
                  <div className={`relative ${
                    expandedProject === project.id 
                      ? 'md:w-2/5' 
                      : 'w-full'
                  } h-64 md:h-80 rounded-lg overflow-hidden transition-all duration-300`}>
                    <Image
                      src={project.gallery ? project.gallery[selectedImages[project.id] || 0] : project.image}
                      alt={project.name}
                      fill
                      className="object-cover cursor-pointer"
                      onClick={(e) => {
                        e.stopPropagation()
                        openModal(project, selectedImages[project.id] || 0)
                      }}
                    />
                    {expandedProject === project.id && project.gallery && (
                      <div className="absolute bottom-0 left-0 right-0 bg-black/50 p-2 flex justify-center gap-2">
                        {project.gallery.map((img, idx) => (
                          <button 
                            key={idx}
                            className={`w-8 h-8 rounded-full border-2 ${
                              selectedImages[project.id] === idx 
                                ? 'border-blue-400 scale-110' 
                                : 'border-transparent hover:border-white/50'
                            } transition-all duration-200`}
                            onClick={(e) => {
                              e.stopPropagation()
                              selectImage(project.id, idx)
                            }}
                          >
                            <div className="relative w-full h-full">
                              <Image
                                src={img}
                                alt={`Thumbnail ${idx + 1}`}
                                fill
                                className="object-cover rounded-full"
                              />
                            </div>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Project content */}
                  <div className={expandedProject === project.id ? 'md:w-3/5' : ''}>
                    <p className="text-white/80 mb-4" style={{ fontFamily: "'Myriad Pro', sans-serif" }}>
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, idx) => (
                        <span 
                          key={idx} 
                          className="px-3 py-1 bg-white/10 text-white/90 text-xs rounded-full backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-colors"
                          style={{ fontFamily: "'Myriad Pro', sans-serif" }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    {expandedProject === project.id && (
                      <div className="mt-4 animate-fadeIn">
                        <p className="text-white mb-4" style={{ fontFamily: "'Myriad Pro', sans-serif" }}>
                          {project.details}
                        </p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                          <div>
                            <h5 className="text-lg font-bold text-white mb-2">Features</h5>
                            <ul className="text-white space-y-2">
                              {project.features?.map((feature, idx) => (
                                <li key={idx} className="flex items-start">
                                  <span className="text-blue-300 mr-2">▹</span>
                                  {feature}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h5 className="text-lg font-bold text-white mb-2">Technologies</h5>
                            <div className="flex flex-wrap gap-2">
                              {project.technologies?.map((tech, idx) => (
                                <span 
                                  key={idx} 
                                  className="px-3 py-1 bg-blue-500/20 text-blue-200 text-xs rounded-full border border-blue-400/30"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                    
                    {expandedProject !== project.id && (
                      <button 
                        className="text-white hover:text-blue-300 font-medium transition-colors duration-200 flex items-center"
                        style={{ fontFamily: "'Arial Rounded MT Bold', sans-serif" }}
                        onClick={(e) => {
                          e.stopPropagation()
                          toggleExpand(project.id)
                        }}
                      >
                        View Details <span className="ml-1">→</span>
                      </button>
                    )}
                  </div>
                </div>
              </div>
              
              {/* Glow effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none">
                <div className="absolute -inset-2 bg-white rounded-xl blur-md" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Image Modal */}{modalOpen && currentModalProject && (
  <div 
    className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-fadeIn overflow-y-auto"
    onClick={closeModal}
  >
    <div 
      className="relative my-8 animate-scaleIn"
      onClick={e => e.stopPropagation()}
    >
      <button 
        className="absolute -top-10 right-0 text-white text-3xl z-10 hover:text-blue-300 transition-colors"
        onClick={closeModal}
      >
        ×
      </button>
      <div className="relative">
        <Image
          src={currentModalImage}
          alt={currentModalProject.name}
          width={1200}
          height={800}
          className="object-contain max-h-[80vh] w-auto rounded-lg"
        />
      </div>
      {currentModalProject.gallery && currentModalProject.gallery.length > 1 && (
        <div className="sticky bottom-4 left-0 right-0 flex justify-center gap-2 mt-4">
          {currentModalProject.gallery.map((img, idx) => (
            <button 
              key={idx}
              className={`w-10 h-10 rounded-full border-2 transition-all duration-200 ${
                currentModalImage === img 
                  ? 'border-blue-400 scale-110' 
                  : 'border-transparent hover:border-white/50'
              }`}
              onClick={(e) => {
                e.stopPropagation()
                setCurrentModalImage(img)
              }}
            >
              <div className="relative w-full h-full">
                <Image
                  src={img}
                  alt={`Thumbnail ${idx + 1}`}
                  fill
                  className="object-cover rounded-full"
                />
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  </div>
)}   </section>
  )
}