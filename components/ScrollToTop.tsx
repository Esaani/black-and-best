'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiArrowUp } from 'react-icons/hi'

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 800) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <div className="fixed bottom-6 right-4 z-50">
      <AnimatePresence>
        {isVisible && (
          <motion.button
            className="scroll-to-top"
            onClick={scrollToTop}
            initial={{ y: '0.5rem', opacity: 0 }}
            animate={{ y: '0rem', opacity: 1 }}
            exit={{ y: '0.5rem', opacity: 0 }}
            transition={{ duration: 0.5 }}
            aria-label="Scroll to top"
          >
            <HiArrowUp className="h-6 w-6 text-accent-100" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  )
}

