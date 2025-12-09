'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaBars, FaTimes, FaHome, FaUser, FaBriefcase, FaCode, FaGraduationCap, FaEnvelope, FaStar } from 'react-icons/fa'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
      
      // Detect active section
      const sections = ['home', 'about', 'experience', 'projects', 'skills', 'education', 'contact']
      
      for (const section of sections) {
        const element = document.querySelector(`#${section}`)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section)
            break
          }
        }
      }
    }
    
    window.addEventListener('scroll', handleScroll)
    handleScroll() // Initial check
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', href: '#home', icon: FaHome },
    { name: 'About', href: '#about', icon: FaUser },
    { name: 'Experience', href: '#experience', icon: FaBriefcase },
    { name: 'Projects', href: '#projects', icon: FaCode },
    { name: 'Skills', href: '#skills', icon: FaStar },
    { name: 'Education', href: '#education', icon: FaGraduationCap },
    { name: 'Contact', href: '#contact', icon: FaEnvelope },
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsOpen(false)
    }
  }

  return (
    <>
      {/* Icon Navigation - Desktop */}
      <div className="hidden md:block fixed right-8 top-1/2 -translate-y-1/2 z-50">
        <motion.nav
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
        <div className="glass rounded-full px-3 py-6 shadow-2xl backdrop-blur-xl border border-white/10">
          <div className="flex flex-col items-center justify-center gap-2">
            {navItems.map((item) => {
              const Icon = item.icon
              const sectionId = item.href.replace('#', '')
              const isActive = activeSection === sectionId
              
              return (
                <motion.button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  whileHover={{ scale: 1.1, x: -2 }}
                  whileTap={{ scale: 0.95 }}
                  animate={isActive ? { x: [0, -8, 0] } : { x: 0 }}
                  transition={isActive ? { 
                    duration: 2, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  } : {}}
                  className={`group relative p-3 rounded-full transition-all duration-300 ${
                    isActive ? 'bg-gradient-to-r from-primary/20 to-accent/20' : 'hover:bg-white/10'
                  }`}
                  title={item.name}
                >
                  <Icon className={`text-xl transition-colors ${
                    isActive ? 'text-white' : 'text-gray-400 group-hover:text-white'
                  }`} />
                  {/* Tooltip */}
                  <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-1 bg-black/90 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                    {item.name}
                  </span>
                  {/* Active Indicator */}
                  {isActive && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 -z-10"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </motion.button>
              )
            })}
          </div>
        </div>
        </motion.nav>
      </div>

      {/* Mobile Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="md:hidden fixed top-0 left-0 right-0 z-50 glass shadow-lg"
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent cursor-pointer"
              onClick={() => scrollToSection('#home')}
            >
              VBP
            </motion.div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white text-2xl focus:outline-none"
            >
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 glass rounded-lg p-4"
            >
              {navItems.map((item) => {
                const Icon = item.icon
                return (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className="flex items-center gap-3 w-full text-left py-3 px-4 text-gray-300 hover:text-white hover:bg-white/5 rounded transition-all duration-300"
                  >
                    <Icon />
                    {item.name}
                  </button>
                )
              })}
            </motion.div>
          )}
        </div>
      </motion.nav>
    </>
  )
}

export default Navbar

