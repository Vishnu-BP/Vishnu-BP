'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  FaPython, FaReact, FaNodeJs, FaDocker, FaGitAlt, FaAws, FaHtml5, FaCss3Alt, FaSass, FaBootstrap, FaVuejs, FaDatabase
} from 'react-icons/fa'
import { 
  SiJavascript, SiTypescript, SiTailwindcss, SiNextdotjs, SiRedux, 
  SiMongodb, SiExpress, SiFirebase, SiPostgresql
} from 'react-icons/si'

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  // Tech stack matching vivekram.dev
  const techStack = [
    // Row 1
    { name: 'HTML5', Icon: FaHtml5, color: '#E34F26' },
    { name: 'CSS3', Icon: FaCss3Alt, color: '#1572B6' },
    { name: 'JavaScript', Icon: SiJavascript, color: '#F7DF1E' },
    { name: 'Tailwind', Icon: SiTailwindcss, color: '#06B6D4' },
    { name: 'React', Icon: FaReact, color: '#61DAFB' },
    { name: 'Redux', Icon: SiRedux, color: '#764ABC' },
    { name: 'TypeScript', Icon: SiTypescript, color: '#3178C6' },
    { name: 'Next.js', Icon: SiNextdotjs, color: '#FFFFFF' },
    { name: 'Python', Icon: FaPython, color: '#3776AB' },
    { name: 'Node.js', Icon: FaNodeJs, color: '#339933' },
    { name: 'Bootstrap', Icon: FaBootstrap, color: '#7952B3' },
    // Row 2
    { name: 'Express', Icon: SiExpress, color: '#FFFFFF' },
    { name: 'MongoDB', Icon: SiMongodb, color: '#47A248' },
    { name: 'Firebase', Icon: SiFirebase, color: '#FFCA28' },
    { name: 'PostgreSQL', Icon: SiPostgresql, color: '#4169E1' },
    { name: 'Docker', Icon: FaDocker, color: '#2496ED' },
    { name: 'Git', Icon: FaGitAlt, color: '#F05032' },
    { name: 'Sass', Icon: FaSass, color: '#CC6699' },
    { name: 'Vue', Icon: FaVuejs, color: '#4FC08D' },
    { name: 'AWS', Icon: FaAws, color: '#FF9900' },
  ]

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Video Background Animation */}
      <div className="absolute inset-0 -z-20">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        >
          <source src="/tech_skills.mp4" type="video/mp4" />
        </video>
        {/* Overlay for better text visibility - matching Hero section */}
        <div className="absolute inset-0 bg-gradient-to-b from-darker/85 via-darker/70 to-darker/85"></div>
      </div>

      {/* Grid Background Overlay - matching Hero section */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:100px_100px]"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Making apps with modern technologies
          </h2>

          {/* Tech Stack Grid */}
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-10 gap-6 md:gap-8 justify-items-center">
              {techStack.map((tech, index) => {
                const Icon = tech.Icon
                // Alternate slide directions: left, right, bottom for variety
                const slideDirection = index % 3 === 0 ? 'left' : index % 3 === 1 ? 'right' : 'bottom'
                const initialX = slideDirection === 'left' ? -100 : slideDirection === 'right' ? 100 : 0
                const initialY = slideDirection === 'bottom' ? 50 : 0
                
                return (
                  <motion.div
                    key={tech.name}
                    initial={{ 
                      opacity: 0, 
                      scale: 0.8,
                      x: initialX,
                      y: initialY,
                      rotate: slideDirection === 'left' ? -10 : slideDirection === 'right' ? 10 : 0
                    }}
                    animate={isInView ? { 
                      opacity: 1, 
                      scale: 1,
                      x: 0,
                      y: 0,
                      rotate: 0
                    } : { 
                      opacity: 0, 
                      scale: 0.8,
                      x: initialX,
                      y: initialY,
                      rotate: slideDirection === 'left' ? -10 : slideDirection === 'right' ? 10 : 0
                    }}
                    transition={{ 
                      delay: index * 0.06,
                      duration: 0.5,
                      type: "spring",
                      stiffness: 150,
                      damping: 15
                    }}
                    whileHover={{ 
                      scale: 1.15,
                      y: -5,
                      transition: { duration: 0.2 }
                    }}
                    className="flex flex-col items-center justify-center gap-2 group cursor-pointer"
                  >
                    <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 group-hover:bg-white/10 group-hover:border-white/20 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-primary/20">
                      <Icon 
                        className="text-4xl md:text-5xl transition-all duration-300 group-hover:scale-110" 
                        style={{ color: tech.color }}
                      />
                    </div>
                    <span className="text-xs text-gray-400 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {tech.name}
                    </span>
                  </motion.div>
                )
              })}
            </div>
          </div>

          {/* Additional Skills Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="mt-20 max-w-4xl mx-auto"
          >
            <h3 className="text-2xl font-bold mb-8 text-center">
              Additional Technologies
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {['Python', 'TensorFlow', 'Keras', 'FastAPI', 'PostgreSQL', 'Supabase', 'Docker', 'RabbitMQ', 'Expo', 'React Native'].map((skill, index) => {
                // Alternate slide directions for additional skills
                const slideDirection = index % 2 === 0 ? 'left' : 'right'
                const initialX = slideDirection === 'left' ? -50 : 50
                
                return (
                  <motion.span
                    key={skill}
                    initial={{ 
                      opacity: 0, 
                      scale: 0.8,
                      x: initialX,
                      y: 20
                    }}
                    animate={isInView ? { 
                      opacity: 1, 
                      scale: 1,
                      x: 0,
                      y: 0
                    } : { 
                      opacity: 0, 
                      scale: 0.8,
                      x: initialX,
                      y: 20
                    }}
                    transition={{ 
                      delay: 1 + (index * 0.05), 
                      duration: 0.4,
                      type: "spring",
                      stiffness: 150,
                      damping: 15
                    }}
                    whileHover={{ 
                      scale: 1.05,
                      y: -2,
                      transition: { duration: 0.2 }
                    }}
                    className="px-5 py-2.5 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-sm text-gray-300 hover:bg-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer"
                  >
                    {skill}
                  </motion.span>
                )
              })}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills

