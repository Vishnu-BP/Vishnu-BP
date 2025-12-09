'use client'

import { motion, useMotionTemplate, useMotionValue } from 'framer-motion'
import { useState, MouseEvent } from 'react'
import { FaGithub, FaExternalLinkAlt, FaMobile, FaBrain, FaGlobe } from 'react-icons/fa'
import Image from 'next/image'

// --- Project Data ---
const projects = [
  {
    title: 'Dynamic Movie Engine',
    description: 'RAG-based engine with Gemini API & Google Search Grounding.',
    technologies: ['Next.js', 'Python', 'FastAPI', 'Gemini'],
    image: 'https://res.cloudinary.com/dt6y4dsml/image/upload/v1760792490/Gemini_Generated_Image_ihfu8eihfu8eihfu_c16jpp.png',
    link: 'https://movie-recommendation-system-fsug.onrender.com/',
    github: '#',
    category: 'AI/ML',
    featured: true // Shows in "Best"
  },
  {
    title: 'MindMend Tracker',
    description: 'Mobile recovery app with streak tracking & AI coaching.',
    technologies: ['React Native', 'Expo', 'Supabase', 'AI'],
    image: '/relapse.png', 
    link: 'https://expo.dev/accounts/vishnu_bp/projects/relapse-tracker/builds/10b23e41-e72c-4021-8f8c-cbe4dff2169f',
    github: '#',
    category: 'Mobile',
    featured: true // Shows in "Best"
  },
  {
    title: 'Health GPT',
    description: 'Predictive healthcare system using Deep Learning models.',
    technologies: ['TensorFlow', 'Flask', 'VGG16', 'CNN'],
    image: 'https://res.cloudinary.com/dt6y4dsml/image/upload/v1760703978/Gemini_Generated_Image_b7lwxib7lwxib7lw_mhqcjh.png',
    link: '#',
    github: 'https://github.com/Vishnu-BP/HealthGPT---Intelligent-Healthcare-System',
    category: 'AI/ML',
    featured: false
  },
  {
    title: 'AI Fitness Coach',
  description: 'An AI-powered fitness assistant built using Next.js that generates personalized workout and diet plans using Google Gemini LLM, featuring voice guidance and visual aids.',
  technologies: ['Next.js 16', 'TypeScript', 'Google Gemini API', 'Supabase', 'Tailwind CSS', 'Framer Motion'],
  image: 'https://res.cloudinary.com/dt6y4dsml/image/upload/v1765250418/Gemini_Generated_Image_34sldd34sldd34sl_e8agyx.png', // Placeholder or use the image generated previously
  link: 'https://ai-fitness-coach-seven-theta.vercel.app',
  github: '#',
  category: 'AI/Web App',
  featured: true
  },
  {
    title: 'Gate Pass System',
    description: 'Role-based access control for secure campus tracking.',
    technologies: ['Flask', 'Mongo', 'EJS', 'Bcrypt'],
    image: 'https://res.cloudinary.com/dt6y4dsml/image/upload/v1760703991/Gemini_Generated_Image_l6nppcl6nppcl6np_eeesyy.png',
    link: '#',
    github: 'https://github.com/Vishnu-BP/Gate-pass-Managment-System',
    category: 'Web',
    featured: false
  }
]

// --- Card Component (Spotlight Effect) ---
function ProjectCard({ project, index }: { project: any, index: number }) {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect()
    mouseX.set(clientX - left)
    mouseY.set(clientY - top)
  }

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      onMouseMove={handleMouseMove}
      className="group relative rounded-xl border border-white/10 bg-white/5 overflow-hidden aspect-[3/5] flex flex-col h-full w-full"
    >
      {/* Spotlight Gradient Layer */}
      <motion.div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100 z-10"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              400px circle at ${mouseX}px ${mouseY}px,
              rgba(59, 130, 246, 0.15),
              transparent 80%
            )
          `
        }}
      />
      
      {/* Image Section */}
      <div className="relative w-full h-[45%] overflow-hidden bg-gray-900/50">
          {project.image ? (
              <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
          ) : (
              <div className="flex items-center justify-center h-full text-gray-600 text-xs">No Image</div>
          )}
        
        {/* Category Badge */}
        <div className="absolute top-2 right-2 px-2 py-0.5 bg-black/60 backdrop-blur-md border border-white/10 rounded text-[10px] flex items-center gap-1">
          {project.category === 'Mobile' && <FaMobile className="text-purple-400" />}
          {project.category === 'AI/ML' && <FaBrain className="text-cyan-400" />}
          {project.category === 'Web' && <FaGlobe className="text-blue-400" />}
          <span className="font-semibold text-white uppercase tracking-wider">{project.category}</span>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-4 flex flex-col flex-grow relative z-20">
        <h3 className="text-lg font-bold text-white mb-1 leading-tight group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        
        <p className="text-gray-400 text-xs mb-3 line-clamp-3 leading-relaxed">
          {project.description}
        </p>

        {/* Tech Stack Tags */}
        <div className="flex flex-wrap gap-1.5 mb-auto">
          {project.technologies.slice(0, 3).map((tech: string) => (
            <span key={tech} className="text-[10px] font-medium px-1.5 py-0.5 rounded bg-white/5 text-gray-300 border border-white/5">
              {tech}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-3 pt-3 border-t border-white/10 mt-2">
          {project.link && project.link !== '#' && (
            <a href={project.link} target="_blank" rel="noopener noreferrer" 
               className="flex items-center gap-1.5 text-xs text-white hover:text-primary transition-colors">
               <FaExternalLinkAlt className="text-[10px]" /> Demo
            </a>
          )}
          {project.github && project.github !== '#' && (
            <a href={project.github} target="_blank" rel="noopener noreferrer"
               className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-white transition-colors">
               <FaGithub className="text-[10px]" /> Code
            </a>
          )}
        </div>
      </div>
    </motion.div>
  )
}

// --- Main Component ---
const Projects = () => {
  const [filter, setFilter] = useState('Best')
  const categories = ['Best', 'All', 'Web', 'Mobile', 'AI/ML']

  const filteredProjects = projects.filter(project => {
    if (filter === 'Best') return project.featured;
    if (filter === 'All') return true;
    return project.category === filter;
  })

  return (
    <section id="projects" className="py-20 relative overflow-hidden bg-darker">
      <div className="container mx-auto px-4 relative z-10">
        
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent"
          >
            Selected Works
          </motion.h2>
          
          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3 mt-6">
            {categories.map((cat, index) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-300 border ${
                  filter === cat 
                    ? 'bg-primary/20 border-primary text-primary shadow-[0_0_15px_rgba(59,130,246,0.3)]' 
                    : 'bg-white/5 border-white/10 text-gray-400 hover:bg-white/10 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Layout - Centered Flexbox */}
        <motion.div 
          layout
          className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto"
        >
          {filteredProjects.map((project, index) => (
            <div key={project.title} className="w-full sm:w-[280px]">
                <ProjectCard project={project} index={index} />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Projects