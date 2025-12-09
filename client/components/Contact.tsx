'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin } from 'react-icons/fa'
import emailjs from '@emailjs/browser'

interface Bubble {
  id: number
  x: number
  y: number
  size: number
  delay: number
}

const Contact = () => {
  const ref = useRef(null)
  const formRef = useRef<HTMLFormElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [bubbles, setBubbles] = useState<Bubble[]>([])
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    setErrorMessage('')

    // Validate form
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error')
      setErrorMessage('Please fill in all required fields')
      return
    }

    try {
      // EmailJS configuration
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || ''
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || ''
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ''

      if (!serviceId || !templateId || !publicKey) {
        throw new Error('EmailJS configuration missing. Please set up environment variables.')
      }

      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: 'vishnubp71@gmail.com'
        },
        publicKey
      )

      setStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
      
      // Reset success message after 5 seconds
      setTimeout(() => setStatus('idle'), 5000)
    } catch (error) {
      console.error('EmailJS Error:', error)
      setStatus('error')
      setErrorMessage('Failed to send message. Please try emailing directly at vishnubp71@gmail.com')
    }
  }

  return (
    <section 
      id="contact" 
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
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>

          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-3xl font-bold text-gradient mb-6">
                  Let's Connect
                </h3>
                <p className="text-gray-300 leading-relaxed mb-8">
                  I'm currently seeking opportunities as a Data Engineer. 
                  Whether you have a question or just want to say hi, I'll try my best to get back to you!
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-4 glass rounded-lg p-4 hover:bg-white/10 transition-all duration-300">
                  <div className="text-2xl text-accent">
                    <FaEnvelope />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Email</p>
                    <a href="mailto:vishnubp71@gmail.com" className="text-white hover:text-accent transition-colors">
                      vishnubp71@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 glass rounded-lg p-4 hover:bg-white/10 transition-all duration-300">
                  <div className="text-2xl text-accent">
                    <FaPhone />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Phone</p>
                    <a href="tel:+918197697046" className="text-white hover:text-accent transition-colors">
                      +91 8197697046
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 glass rounded-lg p-4 hover:bg-white/10 transition-all duration-300">
                  <div className="text-2xl text-accent">
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Location</p>
                    <p className="text-white"> Bangalore, India</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 pt-6">
                <a
                  href="https://github.com/Vishnu-BP"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass p-4 rounded-lg hover:bg-white/10 hover:scale-110 transition-all duration-300"
                >
                  <FaGithub className="text-2xl" />
                </a>
                <a
                  href="https://www.linkedin.com/in/vishnu-bp/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass p-4 rounded-lg hover:bg-white/10 hover:scale-110 transition-all duration-300"
                >
                  <FaLinkedin className="text-2xl" />
                </a>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <form ref={formRef} onSubmit={handleSubmit} className="glass rounded-2xl p-8 space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-primary transition-colors text-white"
                    placeholder="Your Name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-primary transition-colors text-white"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-primary transition-colors text-white"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-primary transition-colors text-white resize-none"
                    placeholder="Your message..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full px-8 py-4 bg-gradient-to-r from-primary to-accent text-white rounded-lg font-semibold hover:scale-[1.02] transition-all duration-300 glow disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === 'sending' ? 'Sending...' : 'Send Message'}
                </button>

                {status === 'success' && (
                  <div className="p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-400 text-center">
                    Message sent successfully! I'll get back to you soon.
                  </div>
                )}

                {status === 'error' && (
                  <div className="p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-red-400 text-center">
                    {errorMessage}
                  </div>
                )}
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact

