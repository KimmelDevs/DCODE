'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Card } from './ui/card';
import { motion, AnimatePresence } from 'framer-motion';

const TeamSlider = () => {
  const teamMembers = [
    {
  id: 1,
  name: "Kimmel Delector",
  role: "Lead Developer",
  description: "Leads full-stack development across mobile and web platforms with deep expertise in frontend interfaces, backend architecture, and cross-platform integration. Delivers scalable, performant, and visually polished solutions.",
  image: "/kimmel1.jpg",
  skills: [
    { name: "Next.js", percentage: 90 },
    { name: "Kotlin", percentage: 85 },
    { name: "TailwindCSS", percentage: 88 }
  ],
  techstack: [
    "Next.js",
    "React",
    "TailwindCSS",
    "HTML5",
    "CSS3",
    "Kotlin",
    "XML",
    "Node.js",
    "Express",
    "MongoDB"
  ],
  personality: "Focused and resourceful, with a hands-on approach to solving development challenges. Naturally curious and quick to adapt, excels in leading technical decisions and delivering quality results under pressure."
},
    {
      id: 2,
      name: "Art Hemplo",
      role: "Fullstack Native Android Developer",
      description: "Specializes in native Android development with expertise in Kotlin and Jetpack Compose, while expanding into multiplatform solutions.",
      image: "/arter.jpg",
      skills: [
        { name: "UI Development", percentage: 88 },
        { name: "Creativity", percentage: 97 },
        { name: "Problem Solving", percentage: 85 }
      ],
      techstack: [
        "Jetpack Compose", 
        "Kotlin", 
        "Kotlin Multiplatform", 
        "Compose Multiplatform",
      ],
      personality: "A quiet innovator with a strong independent streak. Excels when given autonomy, yet contributes meaningfully in structured collaborations. Persistent and imaginative, with a knack for refining and elevating existing ideas. Confident, wise, and vocal on every public presentations."
    },{
  id: 3,
  name: "Dainil Villianueva",
  role: "Graphic Designer",
  description: "Crafts visually engaging designs for digital and print media, specializing in brand identity, layout design, and creative storytelling through graphics and illustrations.",
  image: "/danil3.jpg",
  skills: [
    { name: "Graphic Design", percentage: 90 },
    { name: "Creativity", percentage: 92 },
    { name: "Adobe Tools", percentage: 88 }
  ],
  techstack: [
    "Adobe Photoshop",
    "Adobe Illustrator",
    "Adobe InDesign",
    "Figma",
    "Canva",
    "Sketch"
  ],
  personality: "Visually driven and creatively expressive. Enjoys collaborative environments where ideas can be transformed into compelling visuals. Best when given space for creative freedom and clear direction."
},
    {
      id: 4,
      name: "Jaynesa Perol",
      role: "UI/UX Designer / Photographer",
      description: "Brings creativity to life through stunning visuals, original artwork, and professional photography that defines our brand aesthetic.",
      image: "/jaynesa1.jpg",
      skills: [
        { name: "Design", percentage: 93 },
        { name: "Photography", percentage: 91 },
        { name: "Creativity", percentage: 95 }
      ],
      techstack: [
        "Figma",
        "Adobe Photoshop",
        "Adobe Illustrator",
        "Adobe Lightroom",
        "Sketch",
        "Prototyping Tools",
        "Photography Equipment"
      ],
      personality: "Creative and visually oriented. Emotionally driven; needs encouragement and a supportive environment. Performs best when feeling supported and appreciated."
    },
    {
      id: 5,
      name: "Prince Tuazon",
      role: "Backend Developer",
      description: "Develops robust server-side applications and ensures system reliability and performance.",
      image: "/prince.jpg",
      skills: [
        { name: "Backend Development", percentage: 86 },
        { name: "Problem Solving", percentage: 88 },
        { name: "Efficiency", percentage: 90 }
      ],
      techstack: [
        "Typescript",
        "Javascript",
        "Firebase",
        "Node.js",
        "MongoDB",
        "Python",
        "Java",
        "Docker",
        "Kotlin XML",
        
      ],
      personality: "Driven by personal growth — values learning through doing. Often works alone to test his abilities, but can collaborate when needed. Currently in a 'transition phase' from dependence to self-sufficiency. Values deep understanding over surface-level success."
    },
    {
      id: 6,
      name: "Joshua Padilla",
      role: "FullStack Mobile Programmer",
      description: "Specializes in mobile application development with a focus on creating responsive and user-friendly interfaces.",
      image: "/joshua2.jpg",
      skills: [
        { name: "Mobile Development", percentage: 82 },
        { name: "UI Implementation", percentage: 78 },
        { name: "Debugging", percentage: 85 }
      ],
      techstack: [
        "Mongodb",
        "ExpressJS",
        "React",
        "React Native",
        "NodeJS",
      ],
      personality: "Detail-oriented developer who enjoys tackling technical challenges. Works well in team environments and is always eager to learn new mobile technologies."
    },
    {
      id: 7,
      name: "Lance Antor",
      role: "Fullstack Web Developer",
      description: "Creates comprehensive web solutions from frontend interfaces to backend systems, ensuring seamless user experiences.",
      image: "/Antor.png",
      skills: [
        { name: "Frontend Development", percentage: 88 },
        { name: "Backend Development", percentage: 85 },
        { name: "System Architecture", percentage: 82 }
      ],
      techstack: [
  "Java",
  "C++",
  "Python",
  "JavaScript",
  "HTML5",
  "CSS3",
  "TailwindCSS",
  "React"
],

      personality: "Highly committed to creating innovative solutions that enhance usability, optimize performance, and contribute to a more efficient digital future."
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isAutoRotating, setIsAutoRotating] = useState(true);

  const nextProduct = () => {
    setDirection(1);
    setCurrentIndex(prev => (prev + 1) % teamMembers.length);
    setIsAutoRotating(false);
  };

  const prevProduct = () => {
    setDirection(-1);
    setCurrentIndex(prev => (prev - 1 + teamMembers.length) % teamMembers.length);
    setIsAutoRotating(false);
  };

  const goToMember = (index) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
    setIsAutoRotating(false);
  };

  useEffect(() => {
    if (!isAutoRotating) {
      const timer = setTimeout(() => setIsAutoRotating(true), 100000);
      return () => clearTimeout(timer);
    }
  }, [isAutoRotating]);

  useEffect(() => {
    if (!isAutoRotating) return;
    const interval = setInterval(() => {
      nextProduct();
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoRotating, currentIndex]);

  const currentMember = teamMembers[currentIndex];

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 30
      }
    },
    exit: (direction) => ({
      x: direction < 0 ? 100 : -100,
      opacity: 0,
      transition: {
        duration: 0.2
      }
    })
  };

  const fadeVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={fadeVariants}
      className="relative bg-gradient-to-b from-gray-900 to-blue-900 py-12 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          className="text-3xl font-bold text-center mb-8 text-white"
          style={{ fontFamily: "'Arial Rounded MT Bold', sans-serif" }}
        >
          Meet Our Team
        </motion.h2>
        
        <div className="flex flex-col md:flex-row items-center gap-6">
          {/* Image with arrows below */}
          <div className="md:w-1/2 flex flex-col items-center">
            <div className="relative h-64 w-64 mb-6 rounded-full overflow-hidden border-4 border-cyan-400">
              <AnimatePresence custom={direction} initial={false}>
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="absolute inset-0"
                >
                  <Image
                    src={currentMember.image}
                    alt={currentMember.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </motion.div>
              </AnimatePresence>
            </div>
            
            {/* Navigation controls */}
            <div className="flex items-center gap-4">
              <button
                onClick={prevProduct}
                className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors shadow-lg"
                aria-label="Previous team member"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <div className="flex gap-2">
                {teamMembers.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToMember(index)}
                    className={`h-2 w-2 rounded-full transition-all duration-300 ${
                      index === currentIndex ? 'bg-cyan-400 scale-125' : 'bg-white/30'
                    }`}
                    aria-label={`Go to team member ${index + 1}`}
                  />
                ))}
              </div>
              
              <button
                onClick={nextProduct}
                className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors shadow-lg"
                aria-label="Next team member"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Team Member Details */}
          <div className="md:w-1/2">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <Card className="p-6 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex flex-col items-center text-center space-y-3">
                    <motion.h3 
                      className="text-2xl font-bold text-white bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
                      style={{ fontFamily: "'Arial Rounded MT Bold', sans-serif" }}
                    >
                      {currentMember.name}
                    </motion.h3>
                    
                    <motion.p 
                      className="text-lg font-semibold text-cyan-300 mb-1"
                      style={{ fontFamily: "'Arial Rounded MT Bold', sans-serif" }}
                    >
                      {currentMember.role}
                    </motion.p>
                    
                    <motion.p 
                      className="text-white/90 mb-4 text-base"
                      style={{ fontFamily: "'Myriad Pro', sans-serif" }}
                    >
                      {currentMember.description}
                    </motion.p>
                    
                    <div className="w-full space-y-4">
                      <div className="flex flex-col md:flex-row gap-4">
                        <motion.div 
                          className="bg-white/5 p-3 rounded-lg md:w-1/2"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.2 }}
                        >
                          <h4 className="text-lg font-semibold text-white mb-2">Skills</h4>
                          <div className="space-y-3">
                            {currentMember.skills.map((skill, index) => (
                              <motion.div 
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.3 + index * 0.1 }}
                              >
                                <div className="flex justify-between text-white/90 text-sm mb-1">
                                  <span>{skill.name}</span>
                                  <span>{skill.percentage}%</span>
                                </div>
                                <div className="w-full bg-white/20 rounded-full h-2">
                                  <motion.div 
                                    className="bg-gradient-to-r from-cyan-400 to-blue-500 h-2 rounded-full" 
                                    initial={{ width: 0 }}
                                    animate={{ width: `${skill.percentage}%` }}
                                    transition={{ delay: 0.4 + index * 0.1, duration: 0.8 }}
                                  />
                                </div>
                              </motion.div>
                            ))}
                          </div>
                        </motion.div>
                        
                        {/* Tech Stack Section - moved up where Personality was */}
                        {currentMember.techstack && currentMember.techstack.length > 0 && (
                          <motion.div
                            className="bg-white/5 p-3 rounded-lg md:w-1/2"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6 }}
                          >
                            <h4 className="text-lg font-semibold text-white mb-2">Tech Stack</h4>
                            <div className="flex flex-wrap gap-2 justify-center">
                              {currentMember.techstack.map((tech, index) => (
                                <motion.span
                                  key={index}
                                  initial={{ opacity: 0, scale: 0.8 }}
                                  animate={{ opacity: 1, scale: 1 }}
                                  transition={{ delay: 0.7 + index * 0.05 }}
                                  className="px-3 py-1 bg-white/10 rounded-full text-sm text-white/90"
                                >
                                  {tech}
                                </motion.span>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </div>
                      
                      {/* Personality Section - moved down where Tech Stack was */}
                      <motion.div
                        className="bg-white/5 p-3 rounded-lg"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                      >
                        <h4 className="text-lg font-semibold text-white mb-2">Personality</h4>
                        <p className="text-white/80 italic text-base leading-relaxed">
                          {currentMember.personality}
                        </p>
                      </motion.div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TeamSlider;