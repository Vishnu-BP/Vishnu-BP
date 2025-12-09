'use client'

import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaDownload, FaReact, FaPython, FaNodeJs, FaDocker, FaAws, FaDatabase } from 'react-icons/fa'
import { SiJavascript, SiTypescript, SiMongodb, SiPostgresql, SiTensorflow } from 'react-icons/si'

const Hero = () => {
  // Floating tech icons configuration
  const techIcons = [
    { Icon: FaReact, color: '#61DAFB', position: { top: '20%', right: '15%' }, delay: 0 },
    { Icon: SiJavascript, color: '#F7DF1E', position: { top: '15%', right: '25%' }, delay: 0.1 },
    { Icon: FaPython, color: '#3776AB', position: { top: '35%', right: '12%' }, delay: 0.2 },
    { Icon: SiTypescript, color: '#3178C6', position: { top: '45%', right: '20%' }, delay: 0.3 },
    { Icon: SiMongodb, color: '#47A248', position: { top: '55%', right: '28%' }, delay: 0.4 },
    { Icon: FaAws, color: '#FF9900', position: { top: '65%', right: '15%' }, delay: 0.5 },
    { Icon: SiTensorflow, color: '#FF6F00', position: { top: '30%', right: '8%' }, delay: 0.6 },
    { Icon: FaNodeJs, color: '#339933', position: { top: '50%', right: '35%' }, delay: 0.7 },
    { Icon: SiPostgresql, color: '#4169E1', position: { top: '25%', right: '32%' }, delay: 0.8 },
    { Icon: FaDocker, color: '#2496ED', position: { top: '60%', right: '22%' }, delay: 0.9 },
  ]

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 -z-20">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        >
          <source src="/globe.mp4" type="video/mp4" />
        </video>
        {/* Overlay for better text visibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-darker/80 via-darker/60 to-darker/80"></div>
      </div>

      {/* Grid Background Overlay */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:100px_100px]"></div>
      </div>

      {/* Floating Tech Icons with Connection Lines */}
      <div className="absolute inset-0 -z-5 hidden lg:block">
        {/* Connection Lines */}
        <svg className="absolute inset-0 w-full h-full" style={{ opacity: 0.15 }}>
          <line x1="15%" y1="20%" x2="25%" y2="15%" stroke="url(#gradient1)" strokeWidth="1" />
          <line x1="25%" y1="15%" x2="32%" y2="25%" stroke="url(#gradient1)" strokeWidth="1" />
          <line x1="15%" y1="35%" x2="12%" y2="30%" stroke="url(#gradient1)" strokeWidth="1" />
          <line x1="20%" y1="45%" x2="28%" y2="55%" stroke="url(#gradient1)" strokeWidth="1" />
          <line x1="28%" y1="65%" x2="15%" y2="65%" stroke="url(#gradient1)" strokeWidth="1" />
          <line x1="35%" y1="50%" x2="22%" y2="60%" stroke="url(#gradient1)" strokeWidth="1" />
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#8b5cf6" />
            </linearGradient>
          </defs>
        </svg>

        {/* Tech Icons */}
        {techIcons.map(({ Icon, color, position, delay }, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              y: [0, -15, 0]
            }}
            transition={{
              opacity: { delay: delay, duration: 0.5 },
              scale: { delay: delay, duration: 0.5 },
              y: {
                delay: delay + 0.5,
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
            className="absolute glass rounded-2xl p-4 backdrop-blur-md"
            style={position}
          >
            <Icon className="text-4xl" style={{ color }} />
          </motion.div>
        ))}
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
            >
              I am <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">Vishnu B P</span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-2xl md:text-3xl font-semibold text-white mb-6"
            >
              Full stack developer
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-lg text-gray-400 mb-8 max-w-xl leading-relaxed"
            >
              Specialist in crafting seamless web and app experiences with expertise in Data Engineering, 
              AI/ML solutions, and a passion for innovation.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <button
                onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-3 bg-white text-black rounded-full font-semibold hover:bg-gray-200 transition-all duration-300"
              >
                Learn More!
              </button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="flex gap-6 mt-8"
            >
              <a
                href="https://github.com/Vishnu-BP"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-gray-400 hover:text-white transition-colors duration-300"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/vishnu-bp/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-gray-400 hover:text-blue-400 transition-colors duration-300"
              >
                <FaLinkedin />
              </a>
            </motion.div>
          </motion.div>

          {/* Right Side - Tech Icons (Mobile) */}
          <div className="lg:hidden flex justify-center items-center">
            <div className="grid grid-cols-3 gap-4">
              {techIcons.slice(0, 6).map(({ Icon, color }, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="glass rounded-2xl p-4 backdrop-blur-md"
                >
                  <Icon className="text-3xl" style={{ color }} />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-gray-400/50 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-gradient-to-b from-purple-400 to-pink-400 rounded-full mt-2"></div>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero

