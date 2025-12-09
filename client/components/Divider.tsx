'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const Divider = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <div ref={ref} className="py-12 overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="relative flex items-center justify-center">
          {/* Left Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="h-px flex-1 bg-gradient-to-r from-transparent via-primary/50 to-primary origin-left"
          />

          {/* Center Dot */}
          <motion.div
            initial={{ scale: 0, rotate: 0 }}
            animate={isInView ? { 
              scale: 1, 
              rotate: 360 
            } : { scale: 0, rotate: 0 }}
            transition={{ 
              duration: 0.6, 
              delay: 0.4,
              rotate: { duration: 1, delay: 0.4 }
            }}
            className="mx-6 relative"
          >
            {/* Outer Ring */}
            <div className="absolute inset-0 rounded-full border-2 border-primary/30 w-12 h-12 -translate-x-6 -translate-y-6"></div>
            
            {/* Middle Ring - Pulsing */}
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 0.8, 0.5]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute inset-0 rounded-full border border-accent/40 w-8 h-8 -translate-x-4 -translate-y-4"
            />
            
            {/* Center Dot */}
            <div className="w-3 h-3 rounded-full bg-gradient-to-r from-primary to-accent shadow-lg shadow-primary/50"></div>
          </motion.div>

          {/* Right Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="h-px flex-1 bg-gradient-to-l from-transparent via-accent/50 to-accent origin-right"
          />
        </div>

        {/* Decorative Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {[0, 1, 2].map((index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: -10 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
              transition={{ delay: 0.6 + index * 0.1, duration: 0.4 }}
              className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-primary to-accent"
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Divider

