'use client'
import Image from 'next/image'
import { useState } from 'react'

export default function Projects() {
  const [expandedProject, setExpandedProject] = useState(null)
  const [selectedImages, setSelectedImages] = useState({})
  const [modalOpen, setModalOpen] = useState(false)
  const [currentModalImage, setCurrentModalImage] = useState('')
  const [currentModalProject, setCurrentModalProject] = useState(null)

  // Function to handle image selection for gallery
  const selectImage = (projectId, imageIndex) => {
    setSelectedImages(prev => ({
      ...prev,
      [projectId]: imageIndex
    }))
  }

  // Function to toggle project favorite status
  const toggleFavorite = (projectId) => {
    // In a real app, you would update this in your state or database
    console.log(`Toggled favorite for project ${projectId}`)
  }

  // Function to share project
  const shareProject = (projectName) => {
    if (navigator.share) {
      navigator.share({
        title: projectName,
        text: `Check out this project: ${projectName}`,
        url: window.location.href,
      }).catch(console.error)
    } else {
      // Fallback for browsers that don't support Web Share API
      alert(`Share ${projectName} via your preferred method`)
    }
  }

  const openModal = (project, imageIndex = 0) => {
    setCurrentModalProject(project)
    setCurrentModalImage(project.gallery ? project.gallery[imageIndex] : project.image)
    setModalOpen(true)
  }

  const closeModal = () => {
    setModalOpen(false)
  }

  const androidProjects = [
    
    {
      id: 2,
      name: "MacroMinder",
      description: "Nutrition tracking mobile app with macro nutrient calculations.",
      image: "/kimmel.jpg",
      tags: ["Android", "Kotlin", "Room DB"],
      details: "MacroMinder helps users track their daily macronutrient intake with an easy-to-use interface. Features include barcode scanning for food items, meal planning, and progress tracking.",
      gallery: ["/projects/macrominder/intro.png","/projects/macrominder/1.png","/projects/macrominder/2.png","/projects/macrominder/3.png","/projects/macrominder/4.png",],
      technologies: ["Room Database", "CameraX", "MPAndroidChart", "WorkManager"],
      features: ["Barcode scanning", "Meal planning", "Progress charts", "Daily reminders"]
    },
    {
      id: 3,
      name: "FitTitan",
      description: "Online fitness platform with personalized workout routines.",
      image: "/kimmel.jpg",
      tags: ["Android", "Jetpack Compose", "Firebase"],
      details: "FitTitan offers personalized workout plans based on user goals and fitness levels. Includes video demonstrations, progress tracking, and social features to connect with other users.",
      gallery: ["/projects/fititan/intro.png","/projects/fititan/intro.png","/projects/fititan/1.png","/projects/fititan/2.png","/projects/fititan/3.png","/projects/fititan/4.png","/projects/fititan/5.png",],
      technologies: ["Jetpack Compose", "Firebase Storage", "ExoPlayer", "Hilt DI"],
      features: ["Personalized workouts", "Video demonstrations", "Progress tracking", "Social features"]
    },
    {
      id: 7,
      name: "FitFlex Fitness Studio",
      description: "Online Gym Attendance.",
      image: "/kimmel.jpg",
      tags: ["Android", "Xml", "Firebase"],
      details: "FitFlex Fitness Studio helps gym owners manage memberships and attendance. Members can check class schedules, book sessions, and track their attendance history.",
      gallery: ["/projects/fitflex/fitflex.png", "/projects/fitflex/fitflexintro.png", "/projects/fitflex/fitflex1.png","/projects/fitflex/fitflex2.png", "/projects/fitflex/fitflex3.png", "/projects/fitflex/fitflex4.png"],
      technologies: ["Xml", "Firebase Auth", "Cloud Firestore"],
      features: ["Membership management", "Class scheduling", "Attendance tracking", "Payment processing"]
    },
    {
  id: 8,
  name: "HappyPaws",
  description: "Mobile app for pet appointment booking, care tracking, and clinic management",
  image: "/happypaws.jpg",
  tags: ["Mobile", "Firebase", "Kotlin", "XML", "Android"],
  details: "HappyPaws is an Android mobile application that allows pet owners to book, reschedule, or cancel veterinary appointments. It provides appointment reminders via notifications, personalized aftercare instructions, and pet medical records. The app also includes an admin panel for clinic staff to manage appointments and update medical records. Built using Kotlin and XML, with Firebase for backend services.",
  gallery: ["/projects/happypaws/intro.png", "/projects/happypaws/1.png", "/projects/happypaws/2.png"],
  technologies: ["Kotlin", "XML", "Firebase Firestore", "Firebase Auth", "Firebase Storage", "Imgur API"],
  features: [
    "User and admin authentication",
    "Appointment booking and reminders",
    "Pet profiles with medical and vaccination records",
    "Aftercare instruction management",
    "Admin panel for managing appointments and pet info",
    "Push notifications saved in Firestore",
    "Responsive and user-friendly UI"
  ]
},
{
  id: 9,
  name: "Memory Flip",
  description: "Card-based memory game developed in Android Studio",
  image: "/memoryflip.jpg",
  tags: ["Android", "Kotlin", "XML"],
  details: "Memory Flip is a classic card matching game built for Android devices. Players flip cards to reveal symbols and try to find matching pairs, improving memory and concentration.",
  gallery: ["/projects/memoryflip/intro.png", "/projects/memoryflip/1.png"],
  technologies: ["Android Studio", "Kotlin", "XML"],
  features: ["Multiple levels", "Score tracking", "Timer mode", "Simple UI", "Offline"]
}
  ]

  const webProjects = [
    {
      id: 4,
      name: "Lost and Found",
      description: "Campus based Community platform to report and recover lost items.",
      image: "/kimmel.jpg",
      tags: ["Next.js", "Tailwind", "Firebase"],
      details: "Lost and Found is a community platform for university campuses where students can report lost items and help others recover their belongings. Features include image uploads, location tagging, and real-time notifications.",
      gallery: ["/projects/lostfound/intro.png","/projects/lostfound/1.png","/projects/lostfound/2.png","/projects/lostfound/3.png","/projects/lostfound/4.png","/projects/lostfound/5.png","/projects/lostfound/6.png","/projects/lostfound/7.png","/projects/lostfound/8.png",],
      technologies: ["Next.js API Routes", "Firebase Storage", "Cloud Firestore", "Google Maps API"],
      features: ["Item reporting", "Image uploads", "Location tagging", "Real-time notifications"]
    },
    {
      id: 5,
      name: "Spent Expense Tracker",
      description: "Personal finance app to track expenses and manage budgets effectively.",
      image: "/kimmel.jpg",
      tags: ["React", "Node.js", "Firebase"],
      details: "Spent is a comprehensive expense tracker that helps users manage their personal finances. Features include budget planning, expense categorization, and detailed reports with visualizations.",
      gallery: ["/projects/spent/intro.png","/projects/spent/1 (5).png","/projects/spent/1 (4).png","/projects/spent/1 (3).png","/projects/spent/1 (1).png","/projects/spent/1 (2).png",],
      technologies: ["React Hooks", "Node.js", "Express", "Chart.js"],
      features: ["Budget planning", "Expense categorization", "Visual reports", "Multi-device sync"]
    },
    {
      id: 6,
      name: "Bubble Tea",
      description: "Staff Based Web application for Serving BubbleTea",
      image: "/kimmel.jpg",
      tags: ["Tailwind", "React", "MySql"],
      details: "Bubble Tea is a staff management system for bubble tea shops, handling order management, inventory tracking, and customer loyalty programs. The system streamlines operations and provides real-time sales analytics.",
      gallery: ["/projects/bubbletea/intro.png","/projects/bubbletea/1.png","/projects/bubbletea/2.png","/projects/bubbletea/3.png","/projects/bubbletea/4.png","/projects/bubbletea/5.png","/projects/bubbletea/6.png","/projects/bubbletea/7.png"],
      technologies: ["React Context API", "Node.js", "MySQL", "Xampp"],
      features: ["Order management", "Inventory tracking", "Loyalty programs", "Sales analytics"]
    },
    {
  id: 19,
  name: "SariSupplyHub",
  description: "Web-based sari-sari store management and ordering system",
  image: "/sarisupplyhub.jpg",
  tags: ["Web", "Firebase", "JavaScript", "HTML", "CSS"],
  details: "SariSupplyHub is a full-featured web app designed for managing a sari-sari store. It supports product listing, customer orders, real-time updates via Firebase, and a responsive admin dashboard. Built using HTML, CSS, and JavaScript, it helps streamline small business operations and provides a user-friendly ordering experience.",
  gallery: ["/projects/SariSupplyHub/1 (1).png","/projects/SariSupplyHub/1 (2).png","/projects/SariSupplyHub/1 (3).png","/projects/SariSupplyHub/1 (4).png","/projects/SariSupplyHub/1 (5).png",],
  technologies: ["JavaScript", "HTML", "CSS", "Firebase Firestore", "Firebase Auth"],
  features: [
    "User and admin authentication",
    "Product catalog with images and pricing",
    "Order management system",
    "Completed orders tracking",
    "Firebase real-time database and storage integration",
    "Responsive UI"
  ]
}
  ]

  const toggleExpand = (id) => {
    setExpandedProject(expandedProject === id ? null : id)
  }

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-white" style={{ fontFamily: "'Arial Rounded MT Bold', sans-serif" }}>Our Projects</h2>
        
        {/* Android Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-white border-b border-white/20 pb-2" style={{ fontFamily: "'Arial Rounded MT Bold', sans-serif" }}>Android Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {androidProjects.map((project) => (
              <div 
                key={project.id} 
                className={`p-6 rounded-2xl shadow-lg border border-white/30 bg-white/20 backdrop-blur-md backdrop-saturate-150 transition-all duration-300 ${
                  expandedProject === project.id 
                    ? 'md:col-span-2 lg:col-span-3' 
                    : 'hover:scale-105 cursor-pointer'
                }`}
                onClick={() => toggleExpand(project.id)}
              >
                <div className={`flex flex-col ${expandedProject === project.id ? 'md:flex-row' : ''} gap-6`}>
                  <div className={`relative ${
                    expandedProject === project.id 
                      ? 'md:w-2/5 md:order-2'  // Increased from 1/3 to 2/5 for expanded state
                      : 'w-full'
                  } h-64 md:h-80 rounded-lg overflow-hidden`}>  {/* Increased height from h-48/h-64 to h-64/h-80 */}
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
                            className={`w-8 h-8 rounded-full border ${selectedImages[project.id] === idx ? 'border-blue-400' : 'border-transparent'}`}
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
                  <div className={expandedProject === project.id ? 'md:w-3/5 md:order-1' : ''}>  {/* Adjusted to 3/5 to match new image ratio */}
                    <div className="flex justify-between items-start">
                      <h4 className="text-xl font-bold mb-2 text-white" style={{ fontFamily: "'Arial Rounded MT Bold', sans-serif" }}>
                        {project.name}
                      </h4>
                      {expandedProject === project.id && (
                        <div className="flex gap-2">
                          
                        </div>
                      )}
                    </div>
                    <p className="text-white/80 mb-4" style={{ fontFamily: "'Myriad Pro', sans-serif" }}>
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, index) => (
                        <span 
                          key={index} 
                          className="px-2 py-1 bg-[#3f4ca0]/20 text-white text-xs rounded-full" 
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
                        
                        {/* Additional expanded-only features */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                          <div>
                            <h5 className="text-lg font-bold text-white mb-2">Features</h5>
                            <ul className="text-white space-y-1">
                              {project.features?.map((feature, idx) => (
                                <li key={idx} className="flex items-start">
                                  <span className="text-green-400 mr-2">✓</span>
                                  {feature}
                                </li>
                              )) || <li className="text-white/70">No features listed</li>}
                            </ul>
                          </div>
                          <div>
                            <h5 className="text-lg font-bold text-white mb-2">Technologies</h5>
                            <div className="flex flex-wrap gap-2">
                              {project.technologies?.map((tech, idx) => (
                                <span key={idx} className="px-2 py-1 bg-[#1f99ce]/20 text-white text-xs rounded-full">
                                  {tech}
                                </span>
                              )) || <span className="text-white/70">No technologies listed</span>}
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                    
                    {expandedProject !== project.id && (
                      <button 
                        className="text-white hover:text-[#1f99ce] font-medium transition-colors duration-200"
                        style={{ fontFamily: "'Arial Rounded MT Bold', sans-serif" }}
                        onClick={(e) => {
                          e.stopPropagation()
                          toggleExpand(project.id)
                        }}
                      >
                        View Details →
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Web Projects - Now with same structure as Android Projects */}
        <div>
          <h3 className="text-2xl font-semibold mb-8 text-white border-b border-white/20 pb-2" style={{ fontFamily: "'Arial Rounded MT Bold', sans-serif" }}>Website Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {webProjects.map((project) => (
              <div 
                key={project.id} 
                className={`p-6 rounded-2xl shadow-lg border border-white/30 bg-white/20 backdrop-blur-md backdrop-saturate-150 transition-all duration-300 ${
                  expandedProject === project.id 
                    ? 'md:col-span-2 lg:col-span-3' 
                    : 'hover:scale-105 cursor-pointer'
                }`}
                onClick={() => toggleExpand(project.id)}
              >
                <div className={`flex flex-col ${expandedProject === project.id ? 'md:flex-row' : ''} gap-6`}>
                  <div className={`relative ${
                    expandedProject === project.id 
                      ? 'md:w-2/5 md:order-2'  // Increased from 1/3 to 2/5 for expanded state
                      : 'w-full'
                  } h-64 md:h-80 rounded-lg overflow-hidden`}>  {/* Increased height from h-48/h-64 to h-64/h-80 */}
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
                            className={`w-8 h-8 rounded-full border ${selectedImages[project.id] === idx ? 'border-blue-400' : 'border-transparent'}`}
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
                  <div className={expandedProject === project.id ? 'md:w-3/5 md:order-1' : ''}>  {/* Adjusted to 3/5 to match new image ratio */}
                    <div className="flex justify-between items-start">
                      <h4 className="text-xl font-bold mb-2 text-white" style={{ fontFamily: "'Arial Rounded MT Bold', sans-serif" }}>
                        {project.name}
                      </h4>
                      {expandedProject === project.id && (
                        <div className="flex gap-2">
                          
                        </div>
                      )}
                    </div>
                    <p className="text-white/80 mb-4" style={{ fontFamily: "'Myriad Pro', sans-serif" }}>
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, index) => (
                        <span 
                          key={index} 
                          className="px-2 py-1 bg-[#3f4ca0]/20 text-white text-xs rounded-full" 
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
                            <ul className="text-white space-y-1">
                              {project.features?.map((feature, idx) => (
                                <li key={idx} className="flex items-start">
                                  <span className="text-green-400 mr-2">✓</span>
                                  {feature}
                                </li>
                              )) || <li className="text-white/70">No features listed</li>}
                            </ul>
                          </div>
                          <div>
                            <h5 className="text-lg font-bold text-white mb-2">Technologies</h5>
                            <div className="flex flex-wrap gap-2">
                              {project.technologies?.map((tech, idx) => (
                                <span key={idx} className="px-2 py-1 bg-[#1f99ce]/20 text-white text-xs rounded-full">
                                  {tech}
                                </span>
                              )) || <span className="text-white/70">No technologies listed</span>}
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                    
                    {expandedProject !== project.id && (
                      <button 
                        className="text-white hover:text-[#1f99ce] font-medium transition-colors duration-200"
                        style={{ fontFamily: "'Arial Rounded MT Bold', sans-serif" }}
                        onClick={(e) => {
                          e.stopPropagation()
                          toggleExpand(project.id)
                        }}
                      >
                        View Details →
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Image Modal */}
      {modalOpen && currentModalProject && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" onClick={closeModal}>
          <div className="relative max-w-4xl w-full max-h-[90vh]" onClick={e => e.stopPropagation()}>
            <button 
              className="absolute top-4 right-4 text-white text-2xl z-10"
              onClick={closeModal}
            >
              ×
            </button>
            <div className="relative w-full h-full">
              <Image
                src={currentModalImage}
                alt={currentModalProject.name}
                width={1200}
                height={800}
                className="object-contain max-h-[80vh] w-full"
              />
            </div>
            {currentModalProject.gallery && currentModalProject.gallery.length > 1 && (
              <div className="absolute bottom-4 left-0 right-0 bg-black/50 p-2 flex justify-center gap-2">
                {currentModalProject.gallery.map((img, idx) => (
                  <button 
                    key={idx}
                    className={`w-10 h-10 rounded-full border ${currentModalImage === img ? 'border-blue-400' : 'border-transparent'}`}
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
      )}
    </section>
  )
}