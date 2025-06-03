'use client'
import Image from 'next/image'
import { Card } from './ui/card'
import { useState } from 'react'

export default function MeetTheTeam() {
  const [expandedCard, setExpandedCard] = useState(null)

  const teamMembers = [
    {
      id: 1,
      name: "Kimmel Delector",
      role: "Lead Manager",
      description: "Drives strategic direction, oversees operations, and fosters innovation and team growth with a sharp eye for leadership and long-term vision.",
      image: "/kimmel1.jpg",
      skills: [
        { name: "Leadership", percentage: 90 },
        { name: "Strategy", percentage: 85 },
        { name: "Adaptability", percentage: 95 }
      ],
         strengths: [
      "Quickly adapts to new challenges and tasks",
      "Loyal and supportive team player",
      "Diligent, resourceful, and resilient",
      "Inquisitive and open to continuous learning",
      "Thinks several steps ahead with clear strategy"
    ],
    weaknesses: [
      "Can be overly calculating or strategic to a fault",
      "Tends to be slow in executing design work",
      "Sometimes accepts tasks without prior knowledge, relying on learning during execution",
      "Overengineers features or systems, even when simpler solutions suffice",
      "Becomes restless or uninspired when projects lack complexity"
    ],
    personality: "Friendly and intelligent with a strategic mindset. Naturally inclined toward leadership and capable of handling pressure. Learns through experimentation and thrives when solving complex challenges."
 },{
  id: 2,
  name: "Art Hemplo",
  role: "Frontend Developer",
  description: "Transforms design concepts into responsive, engaging user interfaces. Blends creativity with technical precision to deliver smooth and intuitive web experiences.",
  image: "/art3.jpg.png",
  skills: [
    { name: "UI Development", percentage: 88 },
    { name: "Creativity", percentage: 92 },
    { name: "Problem Solving", percentage: 85 }
  ],
  strengths: [
    "Highly creative and passionate about frontend design",
    "Diligent and proactive in self-directed learning",
    "Contributes unique ideas and sparks innovation during brainstorming",
    "Detail-oriented and focused on refinement and polish"
  ],
  weaknesses: [
    "Prefers solo work and struggles with constant group interaction",
    "Learns more slowly in collaborative or fast-paced group environments",
    "Can be impatient or dismissive when peers lack motivation or effort"
  ],
  personality: "A quiet innovator with a strong independent streak. Excels when given autonomy, yet contributes meaningfully in structured collaborations. Persistent and imaginative, with a knack for refining and elevating existing ideas."
},
 {
      id: 3,
      name: "Dainil Villianueva",
      role: "Marketing Expert",
      description: "Leads brand promotion through strategic advertising, digital outreach, and compelling marketing materials like flyers and campaigns.",
      image: "/danil3.jpg",
      skills: [
        { name: "Marketing Strategy", percentage: 87 },
        { name: "Creativity", percentage: 89 },
        { name: "Communication", percentage: 10 }
      ],
      strengths: [
        "Hardworking despite other obligations",
        "Artistic and imaginative",
        "Committed when inspired",
        
      ],
      weaknesses: [
        "Often busy with school, limited availability",
        "Quiet and may not speak up even with good ideas"
      ],
      personality: "Supportive and effort-driven when present. Prefers contributing to others' ideas than leading. Works best when creatively inspired and not overburdened."
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
      strengths: [
        "Hardworking",
        "Artistic mindset",
        "Quick learner",
        "Favors girly and aesthetic-focused design"
      ],
      weaknesses: [
        "Emotionally sensitive to pressure and failure",
        "May give up easily under stress"
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
    { name: "Efficiency", percentage: 90 },
    { name: "Geekiness", percentage: 89 }
  ],
  strengths: [
    "Always laughing",
    "Punctual and dependable",
    "Hardworking and earnest when engaged",
    "Shows gratitude when help is truly needed",
    "Actively trying to grow and become more independent"
  ],
  weaknesses: [
    "Can appear prideful or closed-off due to independence",
    "Very Lazy and will not contribute to the group or other off curricular activities",
    "Sometimes refuses help to prove himself",
    "May delay progress if stuck and reluctant to ask for assistance",
    "Selective learner — only learns what is required"
  ],
  personality: "Driven by personal growth — values learning through doing. Often works alone to test his abilities, but can collaborate when needed. Currently in a 'transition phase' from dependence to self-sufficiency. Values deep understanding over surface-level success."
}
  ]

  const toggleExpand = (id) => {
  setExpandedCard(expandedCard === id ? null : id)
}

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-white" style={{ fontFamily: "'Arial Rounded MT Bold', sans-serif" }}>Meet Our Team</h2>
        
        {/* First two team members */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {[teamMembers[0], teamMembers[1]].map((member) => (
            <Card 
              key={member.id} 
              className={`p-6 bg-white shadow-lg rounded-2xl border border-white/30 bg-white/20 backdrop-blur-md backdrop-saturate-150 relative z-[1] border-[#696868]/20 transition-all duration-300 ${expandedCard === member.id ? 'md:col-span-2' : 'hover:scale-105 transform-gpu hover:shadow-xl hover:z-10'}`}
              onClick={() => toggleExpand(member.id)}
            >
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-[#3f4ca0] flex-shrink-0">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="text-center md:text-left flex-1">
                  <h3 className="text-2xl font-bold text-white" style={{ fontFamily: "'Arial Rounded MT Bold', sans-serif" }}>{member.name}</h3>
                  <p className="text-lg font-bold text-[#1f99ce] mb-2" style={{ fontFamily: "'Arial Rounded MT Bold', sans-serif" }}>{member.role}</p>
                  <p className="text-white mb-4" style={{ fontFamily: "'Myriad Pro', sans-serif" }}>{member.description}</p>
                  
                  {expandedCard === member.id && (
                    <div className="mt-4 space-y-4 animate-fadeIn">
                      <div>
                        <h4 className="text-lg font-bold text-white mb-2">Skills</h4>
                        <div className="space-y-2">
                          {member.skills.map((skill, index) => (
                            <div key={index}>
                              <div className="flex justify-between text-white">
                                <span>{skill.name}</span>
                                <span>{skill.percentage}%</span>
                              </div>
                              <div className="w-full bg-gray-700 rounded-full h-2.5">
                                <div 
                                  className="bg-[#1f99ce] h-2.5 rounded-full" 
                                  style={{ width: `${skill.percentage}%` }}
                                ></div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="text-lg font-bold text-white mb-2">Strengths</h4>
                          <ul className="text-white space-y-1">
                            {member.strengths.map((strength, index) => (
                              <li key={index} className="flex items-start">
                                <span className="text-green-400 mr-2">✓</span>
                                {strength}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-white mb-2">Weaknesses</h4>
                          <ul className="text-white space-y-1">
                            {member.weaknesses.map((weakness, index) => (
                              <li key={index} className="flex items-start">
                                <span className="text-red-400 mr-2">✗</span>
                                {weakness}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-bold text-white mb-2">Personality</h4>
                        <p className="text-white italic">{member.personality}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Other Team Members */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.slice(2).map((member) => (
            <Card 
              key={member.id} 
              className={`p-6 bg-white shadow-lg rounded-2xl border border-white/30 bg-white/20 backdrop-blur-md backdrop-saturate-150 relative z-[1] border-[#696868]/20 transition-all duration-300 ${expandedCard === member.id ? 'md:col-span-3' : 'hover:scale-105 transform-gpu hover:shadow-xl hover:z-10'}`}
              onClick={() => toggleExpand(member.id)}
            >
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-[#3f4ca0] flex-shrink-0">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="text-center md:text-left flex-1">
                  <h3 className="text-xl font-bold text-white" style={{ fontFamily: "'Arial Rounded MT Bold', sans-serif" }}>{member.name}</h3>
                  <p className="text-[#1f99ce] font-bold mb-2" style={{ fontFamily: "'Arial Rounded MT Bold', sans-serif" }}>{member.role}</p>
                  <p className="text-white mb-4" style={{ fontFamily: "'Myriad Pro', sans-serif" }}>{member.description}</p>
                  
                  {expandedCard === member.id && (
                    <div className="mt-4 space-y-4 animate-fadeIn">
                      <div>
                        <h4 className="text-lg font-bold text-white mb-2">Skills</h4>
                        <div className="space-y-2">
                          {member.skills.map((skill, index) => (
                            <div key={index}>
                              <div className="flex justify-between text-white">
                                <span>{skill.name}</span>
                                <span>{skill.percentage}%</span>
                              </div>
                              <div className="w-full bg-gray-700 rounded-full h-2.5">
                                <div 
                                  className="bg-[#1f99ce] h-2.5 rounded-full" 
                                  style={{ width: `${skill.percentage}%` }}
                                ></div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="text-lg font-bold text-white mb-2">Strengths</h4>
                          <ul className="text-white space-y-1">
                            {member.strengths.map((strength, index) => (
                              <li key={index} className="flex items-start">
                                <span className="text-green-400 mr-2">✓</span>
                                {strength}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-white mb-2">Weaknesses</h4>
                          <ul className="text-white space-y-1">
                            {member.weaknesses.map((weakness, index) => (
                              <li key={index} className="flex items-start">
                                <span className="text-red-400 mr-2">✗</span>
                                {weakness}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-bold text-white mb-2">Personality</h4>
                        <p className="text-white italic">{member.personality}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}