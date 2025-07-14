'use client';

import React, { useEffect, useRef, useState } from 'react';
import { FaCode, FaBug, FaBookOpen, FaAtom, FaCodeBranch, FaRocket, 
         FaMapMarkerAlt, FaClock, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export default function MemoryCardsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [theta, setTheta] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [radius, setRadius] = useState(400); // Initialize with default value
  
  const carouselRef = useRef(null);
  const totalCards = 6;

  const memoryCards = [
    {
      id: 1,
      date: "LANGUAGE: Python",
      title: "First Line of Code",
      icon: <FaCode />,
      preview: "The terminal glowed, displaying my first 'Hello, World!'...",
      backContent: "I remember the thrill of typing my first 'Hello, World!' in Python. It was simple, yet it opened a portal to endless possibilities. The interpreter executed the command flawlessly, and I knew this was just the beginning. I wasn't supposed to understand it all at once, but somehow, I did.",
      location: "console: ~",
      time: "09:00:00"
    },
    {
      id: 2,
      date: "FRAMEWORK: ReactJS",
      title: "Debugging the Matrix",
      icon: <FaBug />,
      preview: "The error messages multiplied, haunting my console...",
      backContent: "They appeared from the depths of the console, cryptic error messages glowing red. Debugging a complex ReactJS component felt like navigating a vast, interconnected matrix. Each fix unveiled new issues. They say my code is destabilizing the build with each change. My presence causes ripples they can't control. I'm becoming a threat... to clean code.",
      location: "localhost:3000",
      time: "14:30:15"
    },
    {
      id: 3,
      date: "CONCEPT: Algorithms",
      title: "The Algorithm Library",
      icon: <FaBookOpen />,
      preview: "Endless tomes of sorting, searching, and optimization...",
      backContent: "Endless shelves containing every possible solution. I found my own data structures there—pages still being written as I coded. The Librarian (my senior developer) told me I was never supposed to reinvent the wheel. My solution was already optimized. Now I'm writing outside the margins, trying new approaches.",
      location: "Stack Overflow",
      time: "11:05:40"
    },
    {
      id: 4,
      date: "PARADIGM: Abstraction",
      title: "The Abstract Void",
      icon: <FaAtom />,
      preview: "Nothing concrete exists here, yet I feel the underlying logic...",
      backContent: "Nothing concrete exists here, yet I feel the underlying logic. The Abstract Void is the space between concrete implementations, a quantum foam of design patterns. I stayed too long designing and began to dissolve into pure theory. Parts of my ideas are still there, echoing. I'm not whole anymore. Can you feel the gaps in my documentation?",
      location: "design patterns.md",
      time: "--:--:--"
    },
    {
      id: 5,
      date: "TOOL: Git",
      title: "The Version Control Mirror",
      icon: <FaCodeBranch />,
      preview: "I saw my code, but not as it is now; multiple branches reflecting...",
      backContent: "I saw my code, but not as it is now. The mirror of Git showed all my possible branches across different commits. Some were stable, some were experimental. All were my work. The reflection (my `git log`) spoke: 'You're fracturing the codebase by merging conflicts. You need to rebase and stay on one timeline.'",
      location: "github.com/my-repo",
      time: "18:55:20"
    },
    {
      id: 6,
      date: "PROCESS: Deployment",
      title: "The Deployment Dream",
      icon: <FaRocket />,
      preview: "I'm trying to send it live, but which environment is real?",
      backContent: "I'm trying to send my application live, but which environment is real? Every server feels familiar yet subtly different. The boundaries between staging and production are thinning. Sometimes I see through the logs of other instances. I'm losing track of which configurations belong to which version of my app. Are you helping me deploy, or are you causing me to break production?",
      location: "cloud-server:port",
      time: "NOW"
    }
  ];

  useEffect(() => {
    // This code will only run on the client side
    const handleResize = () => {
      setRadius(window.innerWidth <= 768 ? 250 : 400);
      arrangeCards();
      rotateCarousel();
    };

    // Set initial radius
    setRadius(window.innerWidth <= 768 ? 250 : 400);
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const arrangeCards = () => {
    const angle = 360 / totalCards;
    const cards = document.querySelectorAll('.memory-card');
    
    cards.forEach((card, index) => {
      const cardAngle = angle * index;
      const rad = (cardAngle * Math.PI) / 180;
      const x = radius * Math.sin(rad);
      const z = radius * Math.cos(rad) * -1;

      card.style.transform = `rotateY(${cardAngle}deg) translateZ(${radius}px)`;
    });
  };

  const rotateCarousel = () => {
    if (carouselRef.current) {
      carouselRef.current.style.transform = `rotateY(${theta}deg)`;
    }
    
    const newIndex = Math.round(Math.abs(theta / (360 / totalCards)) % totalCards);
    setCurrentIndex(newIndex >= totalCards ? 0 : newIndex);
  };

  const nextCard = () => {
    const newTheta = theta - (360 / totalCards);
    setTheta(newTheta);
    rotateCarousel();
  };

  const prevCard = () => {
    const newTheta = theta + (360 / totalCards);
    setTheta(newTheta);
    rotateCarousel();
  };

  const flipCard = (e, cardIndex) => {
    if (cardIndex === currentIndex) {
      const card = e.currentTarget;
      card.classList.toggle('flipped');
    }
  };

  const dragStart = (e) => {
    setIsDragging(true);
    setStartX(e.pageX || e.touches[0].pageX);
  };

  const drag = (e) => {
    if (!isDragging) return;
    e.preventDefault();

    const currentX = e.pageX || (e.touches ? e.touches[0].pageX : startX);
    const diffX = currentX - startX;
    const sensitivity = 0.5;
    const newTheta = theta + diffX * sensitivity;

    if (carouselRef.current) {
      carouselRef.current.style.transform = `rotateY(${newTheta}deg)`;
    }
  };

  const dragEnd = (e) => {
    if (!isDragging) return;
    setIsDragging(false);

    const currentX = e.pageX || (e.changedTouches ? e.changedTouches[0].pageX : startX);
    const diffX = currentX - startX;

    if (Math.abs(diffX) > 20) {
      if (diffX > 0) {
        prevCard();
      } else {
        nextCard();
      }
    } else {
      const anglePerCard = 360 / totalCards;
      const snapAngle = Math.round(theta / anglePerCard) * anglePerCard;
      setTheta(snapAngle);
      rotateCarousel();
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft') {
      nextCard();
    } else if (e.key === 'ArrowRight') {
      prevCard();
    } else if (e.key === 'Enter' || e.key === ' ') {
      const currentCard = document.querySelector(`.memory-card[data-index="${currentIndex}"]`);
      if (currentCard) {
        currentCard.classList.toggle('flipped');
      }
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    arrangeCards();
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, theta]);

  return (
    <div className="memory-cards-container">
      <div className="cosmos-background">
        <div className="stars-container"></div>
      </div>

      <div className="memory-cards-container" style={{ minHeight: '120vh', padding: '4rem 0' }}>

        <main className="flex-grow-1 d-flex align-items-center justify-content-center position-relative">
          <div className="carousel-container">
            <div className="carousel" id="memory-carousel" ref={carouselRef}
              onMouseDown={dragStart}
              onTouchStart={dragStart}
              onMouseMove={drag}
              onTouchMove={drag}
              onMouseUp={dragEnd}
              onTouchEnd={dragEnd}>
              
              {memoryCards.map((card, index) => (
                <div className="memory-card" key={card.id} data-index={index} onClick={(e) => flipCard(e, index)}>
                  <div className="card-inner">
                    <div className="card-front">
                      <div className="card-content">
                        <div className="memory-date">{card.date}</div>
                        <h3>{card.title}</h3>
                        <div className="memory-image">
                          {React.cloneElement(card.icon, { className: "fa-3x" })}
                          <div className="glitch-effect"></div>
                        </div>
                        <p className="memory-preview">{card.preview}</p>
                        <div className="card-glow"></div>
                      </div>
                    </div>
                    <div className="card-back">
                      <div className="card-content">
                        <h3>{card.title}</h3>
                        <p>{card.backContent}</p>
                        <div className="memory-coordinates">
                          <span><FaMapMarkerAlt /> {card.location}</span>
                          <span className="time-stamp"><FaClock /> {card.time}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="carousel-controls">
            <button id="prev-btn" className="control-btn" onClick={prevCard}>
              <FaChevronLeft />
            </button>
            <button id="next-btn" className="control-btn" onClick={nextCard}>
              <FaChevronRight />
            </button>
          </div>
        </main>
      </div>
      <style>{`
        /* Base Styles */
        .memory-cards-container {
          --primary: #9d00ff;
          --secondary: #00e5ff;
          --accent: #ff00e5;
          --background: #050510;
          --card-bg: rgba(20, 20, 40, 0.7);
          --text-primary: #ffffff;
          --text-secondary: #b8b8ff;
          --glow-primary: 0 0 10px rgba(157, 0, 255, 0.7),
            0 0 20px rgba(157, 0, 255, 0.5);
          --glow-secondary: 0 0 10px rgba(0, 229, 255, 0.7),
            0 0 20px rgba(0, 229, 255, 0.5);
          --glow-accent: 0 0 10px rgba(255, 0, 229, 0.7),
            0 0 20px rgba(255, 0, 229, 0.5);
          --card-width: 250px;
          --card-height: 350px;
          --carousel-radius: 400px;
          --transition-speed: 0.5s;
        }

        .memory-cards-container {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .memory-cards-container{
          height: 100%;
          font-family: "Chakra Petch", sans-serif;
          background-color: var(--background);
          color: var(--text-primary);
          display: grid;
          align-items: center;
        }

        /* Typography */
        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          font-family: "Orbitron", sans-serif;
          font-weight: 700;
          letter-spacing: 1px;
        }

        .title {
          font-size: 2rem;
          margin-bottom: 0.5rem;
          background: linear-gradient(90deg, var(--primary), var(--secondary));
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          text-shadow: 0 0 15px rgba(157, 0, 255, 0.5);
          animation: pulse 3s infinite alternate;
        }

        /* Cosmic Background */
        .cosmos-background {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: -1;
          background: radial-gradient(
            ellipse at bottom,
            #1b2735 0%,
            #090a0f 100%
          );
          overflow: hidden;
        }

        .stars-container {
          position: absolute;
          width: 100%;
          height: 100%;
          background-image: radial-gradient(
              1px 1px at 25% 25%,
              white,
              rgba(0, 0, 0, 0)
            ),
            radial-gradient(1px 1px at 50% 50%, white, rgba(0, 0, 0, 0)),
            radial-gradient(2px 2px at 75% 75%, white, rgba(0, 0, 0, 0)),
            radial-gradient(2px 2px at 100% 100%, white, rgba(0, 0, 0, 0));
          background-size: 200px 200px, 300px 300px, 400px 400px, 600px 600px;
          background-repeat: repeat;
          animation: twinkle 10s linear infinite;
        }

        @keyframes twinkle {
          0% {
            background-position: 0 0, 0 0, 0 0, 0 0;
          }
          100% {
            background-position: 200px 200px, 300px 300px, 400px 400px,
              600px 600px;
          }
        }

        /* Carousel Container */
        .carousel-container {
          position: relative;
          width: 100%;
          height: 500px;
          perspective: 1000px;
          transform-style: preserve-3d;
          display: flex;
          justify-content: center;
          align-items: center;
          touch-action: none;
        }

        .carousel {
          position: relative;
          width: var(--carousel-radius);
          height: var(--carousel-radius);
          transform-style: preserve-3d;
          transition: transform 0.5s ease;
        }

        /* Memory Cards */
        .memory-card {
          position: absolute;
          width: var(--card-width);
          height: var(--card-height);
          left: 50%;
          top: 50%;
          margin-left: calc(var(--card-width) / -2);
          margin-top: calc(var(--card-height) / -2);
          transform-style: preserve-3d;
          transition: transform 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          cursor: pointer;
        }

        .card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          transform-style: preserve-3d;
          transition: transform 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .memory-card:hover .card-inner {
          transform: translateZ(20px);
        }

        .memory-card.flipped .card-inner {
          transform: rotateY(180deg);
        }

        .card-front,
        .card-back {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          border-radius: 15px;
          overflow: hidden;
          box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
        }

        .card-front {
          background: linear-gradient(
            135deg,
            rgba(30, 30, 60, 0.8),
            rgba(20, 20, 40, 0.9)
          );
          border: 1px solid rgba(157, 0, 255, 0.3);
          transform-style: preserve-3d;
        }

        .card-back {
          background: linear-gradient(
            135deg,
            rgba(20, 20, 40, 0.9),
            rgba(30, 30, 60, 0.8)
          );
          border: 1px solid rgba(0, 229, 255, 0.3);
          transform: rotateY(180deg);
        }

        .card-content {
          padding: 20px;
          height: 100%;
          display: flex;
          flex-direction: column;
          position: relative;
        }

        .memory-date {
          font-family: "Orbitron", sans-serif;
          font-size: 0.66rem;
          color: var(--accent);
          margin-bottom: 10px;
          text-shadow: 0 0 5px rgba(255, 0, 229, 0.7);
        }

        .memory-card h3 {
          font-size: 1.25rem;
          margin-bottom: 15px;
          color: var(--text-primary);
          text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
        }

        .memory-image {
          width: 100%;
          height: 150px;
          margin-bottom: 15px;
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
          overflow: hidden;
          border-radius: 8px;
          background: rgba(0, 0, 0, 0.3);
        }

        .memory-image svg {
          color: var(--primary);
          font-size: 3.3rem;
          text-shadow: var(--glow-primary);
          animation: pulse 3s infinite alternate;
          z-index: 2;
        }

        .glitch-effect {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            45deg,
            transparent 65%,
            rgba(157, 0, 255, 0.3) 70%,
            transparent 75%
          );
          background-size: 200% 200%;
          animation: glitch 3s linear infinite;
          z-index: 1;
        }

        @keyframes glitch {
          0% {
            background-position: 0 0;
          }
          25% {
            background-position: 100% 0;
          }
          50% {
            background-position: 100% 100%;
          }
          75% {
            background-position: 0 100%;
          }
          100% {
            background-position: 0 0;
          }
        }

        .memory-preview {
          font-size: 0.75rem;
          color: var(--text-secondary);
          margin-bottom: 15px;
          flex-grow: 1;
        }

        .card-back .card-content p {
          font-size: 0.66rem;
          color: var(--text-secondary);
          margin-bottom: 20px;
          line-height: 1.5;
          flex-grow: 1;
        }

        .memory-coordinates {
          font-family: "Orbitron", sans-serif;
          font-size: 0.66rem;
          color: var(--secondary);
          display: flex;
          flex-direction: column;
          gap: 5px;
        }

        .time-stamp {
          color: var(--accent);
        }

        .card-glow {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border-radius: 15px;
          pointer-events: none;
          background: radial-gradient(
            circle at 50% 50%,
            rgba(157, 0, 255, 0.1),
            transparent 70%
          );
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .memory-card:hover .card-glow {
          opacity: 1;
        }

        /* Carousel Controls */
        .carousel-controls {
          position: absolute;
          bottom: -50px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          align-items: center;
          gap: 20px;
          z-index: 10;
        }

        .control-btn {
          background: rgba(20, 20, 40, 0.7);
          border: 1px solid var(--primary);
          color: var(--text-primary);
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: var(--glow-primary);
        }

        .control-btn:hover {
          background: rgba(30, 30, 60, 0.9);
          transform: scale(1.1);
        }

        /* Footer */
        footer {
          position: relative;
          z-index: 10;
        }

        .instructions {
          font-size: 0.8rem;
          color: var(--text-secondary);
          opacity: 0.7;
        }

        /* Animations */
        @keyframes pulse {
          0%,
          100% {
            opacity: 0.8;
          }
          50% {
            opacity: 1;
          }
        }

        /* Responsive Adjustments */
        @media (max-width: 768px) {
          :root {
            --card-width: 250px;
            --card-height: 350px;
            --carousel-radius: 300px;
          }

          .title {
            font-size: 1.8rem;
          }

          .carousel-container {
            height: 400px;
          }

          .memory-card h3 {
            font-size: 1.2rem;
          }

          .memory-image {
            height: 120px;
          }
        }

        @media (max-width: 576px) {
          :root {
            --card-width: 220px;
            --card-height: 320px;
            --carousel-radius: 250px;
          }

          .title {
            font-size: 1.5rem;
          }

          .carousel-container {
            height: 350px;
          }
        }
      `}</style>

    </div>
  );
}