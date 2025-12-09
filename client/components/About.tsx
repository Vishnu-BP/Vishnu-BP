'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { FaLinkedin, FaGithub, FaDownload, FaArrowRight } from 'react-icons/fa'

interface Bubble {
  id: number
  x: number
  y: number
  size: number
  delay: number
}

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [bubbles, setBubbles] = useState<Bubble[]>([])

  // Generate random bubbles on mount
  useEffect(() => {
    const generateBubbles = () => {
      const newBubbles: Bubble[] = []
      for (let i = 0; i < 30; i++) {
        newBubbles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 80 + 40,
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
      id="about" 
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
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            About me
          </h2>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
              <p>
                I'm a full-stack developer with over two years of experience crafting user-centric, 
                responsive web and mobile applications. With a strong foundation in React JS, Next.js, Node.js, 
                Express.js, and MongoDB, I've worked extensively on both front-end and back-end technologies, 
                enhancing performance and user experience for users at Mindsnack, Bengaluru.
              </p>

              <p>
                My passion lies in turning complex problems into intuitive, user-friendly designs and efficient, 
                scalable backend solutions. Whether it's optimizing a web application for speed or implementing 
                a seamless user interface, I thrive on challenges that push me to innovate and grow
              </p>

              <p>
                Currently, I'm exploring new opportunities to further expand my skills in TypeScript, data 
                fetching libraries, and other cutting-edge technologies. As an active learner, I dedicate time 
                to reskill myself continuously, ensuring that I stay at the forefront of full-stack development trends.
              </p>

              <p>
                Outside of work, you'll find me in the gym, on the cricket field, or diving into the latest tech 
                trends. I'm always on the lookout for new challenges and opportunities to apply my skills to create 
                impactful digital experiences
              </p>
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex flex-wrap gap-4 mt-12 items-center"
            >
              <button
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300"
              >
                Contact me here <FaArrowRight />
              </button>
              
              <a
                href="/Vishnu_BP_Resume.pdf"
                download="Vishnu_BP_Resume.pdf"
                className="flex items-center gap-2 px-8 py-3 bg-white text-black rounded-full font-semibold hover:bg-gray-200 transition-all duration-300"
              >
                Download CV <FaDownload />
              </a>

              <a
                href="https://www.linkedin.com/in/vishnu-bp/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white text-black rounded-full hover:bg-gray-200 transition-all duration-300"
              >
                <FaLinkedin className="text-xl" />
              </a>

              <a
                href="https://github.com/Vishnu-BP"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white text-black rounded-full hover:bg-gray-200 transition-all duration-300"
              >
                <FaGithub className="text-xl" />
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About

