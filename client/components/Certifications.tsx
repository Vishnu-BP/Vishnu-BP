'use client'

import { motion, useMotionTemplate, useMotionValue } from 'framer-motion'
import { MouseEvent } from 'react'
import { FaExternalLinkAlt, FaLinkedin, FaUniversity, FaJava, FaBrain } from 'react-icons/fa'

// --- Data ---
const certifications = [
  {
    title: 'Programming in JAVA',
    issuer: 'IIT Kharagpur',
    date: 'Dec 2025',
    link: 'https://archive.nptel.ac.in/content/noc/NOC25/SEM2/Ecertificates/106/noc25-cs110/Course/NPTEL25CS110S45800035710975488.pdf',
    skills: ['Java', 'OOPS', 'JDBC'],
    icon: FaJava,
    color: 'text-orange-400'
  },
  {
    title: 'TensorFlow: Neural Networks',
    issuer: 'LinkedIn Learning',
    date: 'Oct 2025',
    link: 'https://www.linkedin.com/learning/certificates/606c46515443ab7ad9a2dea57206d8abd9896d7d61560fbcb4fda63108b8cef6?trk=share_certificate',
    skills: ['TensorFlow', 'NLP', 'Vision'],
    icon: FaLinkedin,
    color: 'text-blue-400'
  },
  {
    title: 'Prompt Engineering for Gen AI',
    issuer: 'LinkedIn Learning',
    date: 'Oct 2025',
    link: 'https://www.linkedin.com/learning/certificates/25e32a9d6e3bb47955ff4c975c3e1cb41177200d2a8238dc5fe24028b5095191?trk=share_certificate',
    skills: ['Prompt Eng', 'LLMs', 'GenAI'],
    icon: FaBrain,
    color: 'text-pink-400'
  },
  {
    title: 'Tech Innovation & Management',
    issuer: 'Open University',
    date: 'Oct 2025',
    link: 'https://drive.google.com/file/d/192oSlNhl2Bh32ldZz4UV9IcXZGkpB2yh/view?usp=drive_link',
    skills: ['Leadership', 'Strategy'],
    icon: FaUniversity,
    color: 'text-green-400'
  }
]

// Duplicate data 4 times to ensure seamless loop on wide screens
const marqueeCerts = [...certifications, ...certifications, ...certifications, ...certifications]

// --- Spotlight Card Component ---
function CertCard({ cert }: { cert: any }) {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect()
    mouseX.set(clientX - left)
    mouseY.set(clientY - top)
  }

  const Icon = cert.icon

  return (
    <div
      onMouseMove={handleMouseMove}
      className="group relative rounded-xl border border-white/10 bg-white/5 p-6 h-full flex flex-col overflow-hidden w-full hover:bg-white/10 transition-colors"
    >
      {/* Spotlight Effect */}
      <motion.div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              300px circle at ${mouseX}px ${mouseY}px,
              rgba(59, 130, 246, 0.15),
              transparent 80%
            )
          `
        }}
      />

      {/* Header */}
      <div className="relative z-10 flex items-start justify-between mb-4">
        <div className={`p-3 rounded-lg bg-white/5 border border-white/10 ${cert.color}`}>
          <Icon className="text-2xl" />
        </div>
        <span className="text-[10px] font-mono text-gray-500 border border-white/5 px-2 py-1 rounded">
          {cert.date}
        </span>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col flex-grow">
        <h3 className="text-base font-bold text-white mb-1 group-hover:text-primary transition-colors line-clamp-1">
          {cert.title}
        </h3>
        <p className="text-xs text-gray-400 mb-4">{cert.issuer}</p>

        {/* Skills Tags */}
        <div className="flex flex-wrap gap-2 mt-auto mb-4">
          {cert.skills.slice(0, 3).map((skill: string) => (
            <span
              key={skill}
              className="px-2 py-1 bg-white/5 rounded text-[10px] text-gray-300 border border-white/5 font-medium whitespace-nowrap"
            >
              {skill}
            </span>
          ))}
        </div>

        {/* Link */}
        <a
          href={cert.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-xs font-semibold text-white/70 hover:text-white transition-colors pt-4 border-t border-white/10"
        >
          Verify Credential <FaExternalLinkAlt className="text-[10px]" />
        </a>
      </div>
    </div>
  )
}

// --- Main Section ---
const Certifications = () => {
  return (
    <section id="certifications" className="py-24 relative overflow-hidden bg-darker">
      
      {/* Injecting Custom CSS Keyframes specifically for this component 
         This avoids needing to touch your tailwind.config.js
      */}
      <style jsx global>{`
        @keyframes scrollLeftToRight {
          from { transform: translateX(-50%); }
          to { transform: translateX(0%); }
        }
        .animate-marquee {
          animation: scrollLeftToRight 40s linear infinite;
        }
        .pause-on-hover:hover .animate-marquee {
          animation-play-state: paused;
        }
      `}</style>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent"
          >
            Licenses & Certifications
          </motion.h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm">
            Continuous professional development and specialized training
          </p>
        </div>

        {/* Marquee Container with Hover Pause Class */}
        <div className="relative w-full overflow-hidden mask-gradient pause-on-hover">
            {/* Gradient masks on sides */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-darker to-transparent z-20 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-darker to-transparent z-20 pointer-events-none" />
            
            {/* Animated Track */}
            <div className="flex gap-6 w-max animate-marquee" style={{ marginLeft: "-50%" }}>
                {marqueeCerts.map((cert, index) => (
                    <div 
                        key={`${cert.title}-${index}`} 
                        className="w-[280px] md:w-[320px] flex-shrink-0"
                    >
                        <CertCard cert={cert} />
                    </div>
                ))}
            </div>
        </div>
        
      </div>
    </section>
  )
}

export default Certifications