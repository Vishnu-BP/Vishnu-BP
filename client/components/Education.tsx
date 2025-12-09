'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { FaGraduationCap, FaCalendar, FaMapMarkerAlt, FaSchool } from 'react-icons/fa'

interface Bubble {
  id: number
  x: number
  y: number
  size: number
  delay: number
}

const Education = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [bubbles, setBubbles] = useState<Bubble[]>([])

  // Generate random bubbles on mount
  useEffect(() => {
    const generateBubbles = () => {
      const newBubbles: Bubble[] = []
      for (let i = 0; i < 25; i++) {
        newBubbles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 70 + 30,
          delay: Math.random() * 2
        })
      }
      setBubbles(newBubbles)
    }
    generateBubbles()
  }, [])

  // Track mouse position
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setMousePosition({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100
    })
  }

  const education = [
    {
      degree: 'B.E in Computer Science Engineering',
      institution: 'Visvesvaraya Technological University',
      location: 'Hassan, India',
      period: 'Dec 2022 - August 2026 (Expected)',
      grade: 'CGPA: 8.3/10.00',
      highlights: [
        'Specialized in Data Engineering and AI/ML',
        'Active participant in technical projects and hackathons',
        'Strong foundation in algorithms and data structures'
      ],
      icon: <FaGraduationCap />
    },
    {
      degree: 'Pre-University Education',
      institution: 'ASC Independent PU College',
      location: 'Bengaluru, India',
      period: 'June 2020 - June 2021',
      grade: 'Grade: 85%',
      highlights: [
        'Science stream with Computer Science',
        'Strong performance in Mathematics and Physics'
      ],
      icon: <FaGraduationCap />
    },
    {
      degree: 'Matriculation',
      institution: 'JSS Public School Bage',
      location: 'Hassan, India',
      period: 'June 2019',
      grade: 'Grade: 90%',
      highlights: [
        'Excellent academic performance',
        'Active in sports and extracurricular activities'
      ],
      icon: <FaSchool />
    }
  ]

  return (
    <section 
      id="education" 
      className="py-20 relative overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Video Background Animation */}
      <div className="absolute inset-0 -z-20">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        >
          <source src="/education.mp4" type="video/mp4" />
        </video>
        {/* Overlay for better text visibility - matching Skills section */}
        <div className="absolute inset-0 bg-gradient-to-b from-darker/85 via-darker/70 to-darker/85"></div>
      </div>

      {/* Grid Background Overlay - matching Skills section */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:100px_100px]"></div>
      </div>

      {/* Animated Bubbles Background */}
      <div className="absolute inset-0 -z-5">
        {bubbles.map((bubble) => {
          // Calculate distance from mouse
          const dx = mousePosition.x - bubble.x
          const dy = mousePosition.y - bubble.y
          const distance = Math.sqrt(dx * dx + dy * dy)
          const maxDistance = 30
          
          // Move bubble away from cursor
          const pushX = distance < maxDistance ? (dx / distance) * -5 : 0
          const pushY = distance < maxDistance ? (dy / distance) * -5 : 0

          return (
            <motion.div
              key={bubble.id}
              className="absolute rounded-full bg-gradient-to-br from-gray-700/20 to-gray-800/20 blur-sm"
              style={{
                left: `${bubble.x}%`,
                top: `${bubble.y}%`,
                width: `${bubble.size}px`,
                height: `${bubble.size}px`,
              }}
              animate={{
                x: [pushX, pushX + 10, pushX],
                y: [pushY, pushY + 10, pushY],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: bubble.delay,
                ease: "easeInOut"
              }}
            />
          )
        })}
      </div>

      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="text-gradient">Education</span>
          </h2>
          <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
            My academic journey and achievements
          </p>

          {/* Timeline Container */}
          <div className="max-w-5xl mx-auto relative">
            {/* Timeline Line - Hidden on mobile */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-primary via-accent to-secondary"></div>

            <div className="space-y-12">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  transition={{ delay: index * 0.2, duration: 0.5 }}
                  className={`flex flex-col md:flex-row gap-8 items-center ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-r from-primary to-accent items-center justify-center text-white text-2xl z-10 shadow-lg">
                    {edu.icon}
                  </div>

                  {/* Content Card */}
                  <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                    <div className="glass rounded-2xl p-6 md:p-8 hover:scale-105 transition-all duration-300 group relative overflow-hidden">
                      {/* Background decoration */}
                      <div className={`absolute ${index % 2 === 0 ? 'left-0' : 'right-0'} top-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-all duration-300`}></div>
                      
                      <div className="relative z-10">
                        {/* Mobile Icon */}
                        <div className="md:hidden text-4xl text-gradient mb-4 flex justify-center">
                          {edu.icon}
                        </div>

                        <h3 className="text-xl md:text-2xl font-bold text-gradient mb-2">
                          {edu.degree}
                        </h3>
                        <h4 className="text-lg text-gray-300 mb-3">
                          {edu.institution}
                        </h4>
                        
                        <div className={`flex flex-wrap gap-3 text-sm text-gray-400 mb-4 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                          <div className="flex items-center gap-2">
                            <FaMapMarkerAlt className="text-accent" />
                            {edu.location}
                          </div>
                          <div className="flex items-center gap-2">
                            <FaCalendar className="text-accent" />
                            {edu.period}
                          </div>
                        </div>

                        <div className={`inline-block px-4 py-2 bg-gradient-to-r from-primary/20 to-accent/20 border border-primary/30 rounded-lg text-primary font-semibold mb-4`}>
                          {edu.grade}
                        </div>

                        <ul className={`space-y-2 mt-4 ${index % 2 === 0 ? 'md:items-end' : ''}`}>
                          {edu.highlights.map((highlight, idx) => (
                            <li key={idx} className={`flex gap-3 items-start ${index % 2 === 0 ? 'md:flex-row-reverse md:text-right' : ''}`}>
                              <div className="mt-2 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0"></div>
                              <span className="text-gray-300">{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Spacer for timeline */}
                  <div className="hidden md:block w-5/12"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Education

