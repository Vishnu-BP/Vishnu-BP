'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'

interface Bubble {
  id: number
  x: number
  y: number
  size: number
  delay: number
}

const Experience = () => {
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

  return (
    <section 
      id="experience" 
      className="py-20 relative overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Animated Bubbles Background */}
      <div className="absolute inset-0 -z-10">
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
            Work Experience.
          </h2>
          <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
            What I have done so far
          </p>

          <div className="max-w-4xl mx-auto">
            {/* Company Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mb-8"
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-2">Scaleswift Digital Services LLP</h3>
              <div className="flex flex-wrap gap-4 text-gray-400 mb-4">
                <span className="text-xl font-semibold text-white">Software Engineer Intern</span>
                <span>•</span>
                <span>Bangalore, India</span>
                <span>•</span>
                <span>November 2025 – Present</span>
              </div>
            </motion.div>

            {/* Experience Content */}
            <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
              <p>
                • Engineered a secure authentication bridge merging <strong className="text-primary">Clerk</strong> identity 
                management with <strong className="text-primary">Supabase</strong> backend services, implementing custom 
                JWT injection to enforce granular PostgreSQL Row Level Security (RLS) policies.
              </p>

              <p>
                • Developed a high-performance cross-platform mobile application using <strong className="text-accent">React Native</strong> and <strong className="text-accent">Expo SDK</strong>, 
                delivering seamless user experiences across iOS and Android platforms.
              </p>

              <p>
                • Designed a real-time streak tracking algorithm executing optimized <strong className="text-primary">SQL queries</strong> on 
                Supabase, transforming raw timestamped logs into actionable user insights displayed via a custom React Native UI.
              </p>

              <p>
                • Integrated a scalable AI mediation layer using <strong className="text-accent">OpenRouter</strong>, orchestrating 
                asynchronous API calls to leverage multiple Large Language Models (LLMs) for generating dynamic, 
                context-aware recovery insights and personalized support.
              </p>
            </div>

            {/* Tech Stack Tags */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-wrap gap-3 mt-8"
            >
              {['React Native', 'Expo SDK', 'Clerk', 'Supabase', 'PostgreSQL', 'OpenRouter', 'LLMs', 'JWT', 'SQL'].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300 hover:bg-white/10 transition-all duration-300"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience

