'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa'

const Testimonials = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      quote: "Vishnu has been instrumental in developing our projects with remarkable precision. His expertise in Python and FastAPI significantly improved our platform's performance. He is a dedicated professional with an exceptional ability to solve complex problems.",
      name: "Mrs Meghashree DP",
      role: "Project Guide",
      company: "VTU",
      initials: "MG"
    },
    {
      quote: "Working with Vishnu on the Health GPT project was amazing. His knowledge of ML and deep learning helped us achieve high accuracy. He's always willing to help and explain complex concepts in simple terms.",
      name: "Tarun Kumar AR",
      role: "Team Member",
      company: "Academic Project",
      initials: "TK"
    },
    {
      quote: "Vishnu's dedication to learning and implementing new technologies is impressive. His work on the Movie Recommendation System using RAG and Gemini API showcased his ability to work with cutting-edge AI technologies.",
      name: "Dr. Myna AN",
      role: "HOD",
      company: "NCE, Hassan",
      initials: "MN"
    },
    {
      quote: "As a UI UX Designer working with Vishnu, I've learned so much about best practices in React.js and Python development. He always took the time to explain complex concepts and his mentorship has significantly boosted my skills.",
      name: "Muni",
      role: "UI UX Designer",
      company: "Mindsnack",
      initials: "MG"
    },
    {
      quote: "Vishnu's problem-solving skills and adaptability make him stand out. Whether it's data engineering or full-stack development, he delivers quality work consistently. His GPMS project demonstrated excellent system design thinking.",
      name: "Swaraj Singh",
      role: "Technical Lead",
      company: "Mindsnack",
      initials: "SS"
    }
  ]

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="testimonials" className="py-20">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Hear what <span className="text-gradient">others say</span>
          </h2>
          <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
            Testimonials from colleagues, mentors, and team members
          </p>

          <div className="max-w-4xl mx-auto relative">
            {/* Background decoration - floating orbs */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl pointer-events-none"></div>
            
            {/* Main Testimonial Content - No Box */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -30, scale: 0.95 }}
                transition={{ 
                  duration: 0.5,
                  ease: [0.4, 0, 0.2, 1]
                }}
                className="relative z-10"
              >
                {/* Quote Icon with Animation */}
                <motion.div
                  initial={{ opacity: 0, scale: 0, rotate: -180 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ 
                    delay: 0.2, 
                    duration: 0.6,
                    type: "spring",
                    stiffness: 200
                  }}
                  className="text-6xl md:text-7xl text-gradient mb-8 text-center"
                >
                  <FaQuoteLeft />
                </motion.div>

                {/* Quote Text with Animation */}
                <motion.blockquote
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="text-xl md:text-2xl text-gray-200 leading-relaxed mb-12 italic text-center max-w-3xl mx-auto font-light"
                >
                  "{testimonials[currentIndex].quote}"
                </motion.blockquote>

                {/* Author Info with Animation */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12"
                >
                  {/* Avatar with Animation */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ 
                      delay: 0.5, 
                      type: "spring",
                      stiffness: 200,
                      damping: 15
                    }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-20 h-20 rounded-full bg-gradient-to-r from-primary via-secondary to-accent flex items-center justify-center text-white font-bold text-2xl shadow-lg shadow-primary/30 relative"
                  >
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-accent animate-pulse opacity-50"></div>
                    <span className="relative z-10">{testimonials[currentIndex].initials}</span>
                  </motion.div>
                  
                  {/* Author Details */}
                  <div className="text-center sm:text-left">
                    <motion.h4
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6, duration: 0.4 }}
                      className="text-2xl font-bold text-white mb-2"
                    >
                      {testimonials[currentIndex].name}
                    </motion.h4>
                    <motion.p
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.7, duration: 0.4 }}
                      className="text-lg text-gray-300 mb-1"
                    >
                      {testimonials[currentIndex].role}
                    </motion.p>
                    <motion.p
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.8, duration: 0.4 }}
                      className="text-sm text-gray-500"
                    >
                      {testimonials[currentIndex].company}
                    </motion.p>
                  </div>
                </motion.div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.9, duration: 0.5 }}
              className="flex items-center justify-center gap-6 mt-16"
            >
              <motion.button
                onClick={prevTestimonial}
                whileHover={{ scale: 1.1, x: -3 }}
                whileTap={{ scale: 0.95 }}
                className="w-12 h-12 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-primary/50 transition-all duration-300 text-white hover:text-primary"
              >
                <FaChevronLeft />
              </motion.button>

              {/* Dots Indicator */}
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <motion.button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    className={`rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? 'bg-gradient-to-r from-primary to-accent h-3 w-8 shadow-lg shadow-primary/50'
                        : 'bg-gray-600 hover:bg-gray-500 h-3 w-3'
                    }`}
                  />
                ))}
              </div>

              <motion.button
                onClick={nextTestimonial}
                whileHover={{ scale: 1.1, x: 3 }}
                whileTap={{ scale: 0.95 }}
                className="w-12 h-12 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-primary/50 transition-all duration-300 text-white hover:text-primary"
              >
                <FaChevronRight />
              </motion.button>
            </motion.div>

            {/* Counter */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="text-center text-gray-400 mt-6 text-sm"
            >
              {currentIndex + 1} of {testimonials.length}
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials

