"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"

export default function LoadingAnimation() {
  const [isLoading, setIsLoading] = useState(true)
  const [showYuzuPortfolio, setShowYuzuPortfolio] = useState(false)

  useEffect(() => {
    // Show YUZU PORTFOLIO after 1.5 seconds
    const yuzuTimer = setTimeout(() => {
      setShowYuzuPortfolio(true)
    }, 1500)

    // Hide everything after 3 seconds
    const hideTimer = setTimeout(() => {
      setIsLoading(false)
    }, 3000)

    return () => {
      clearTimeout(yuzuTimer)
      clearTimeout(hideTimer)
    }
  }, [])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] bg-white flex items-center justify-center"
        >
          {/* Geometric shapes animation */}
          <div className="relative w-48 sm:w-56 md:w-64 h-48 sm:h-56 md:h-64">
            {/* Central circle */}
            <motion.div
              initial={{ scale: 0, rotate: 0 }}
              animate={{ scale: 1, rotate: 360 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="w-24 sm:w-28 md:w-32 h-24 sm:h-28 md:h-32 bg-accent/20 rounded-full"></div>
            </motion.div>

            {/* Rotating squares */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1, rotate: 45 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="w-32 sm:w-36 md:w-40 h-32 sm:h-36 md:h-40 border-4 border-accent/40"></div>
            </motion.div>

            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1, rotate: -45 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="w-40 sm:w-44 md:w-48 h-40 sm:h-44 md:h-48 border-4 border-accent/30"></div>
            </motion.div>

            {/* Logo text */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="text-center">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-accent mb-2">
                  WELCOME TO
                </h1>
                <div className="h-10 sm:h-12 md:h-14">
                  <AnimatePresence>
                    {showYuzuPortfolio && (
                      <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: [0, 1, 0, 1, 0, 1] }}
                        transition={{ 
                          duration: 0.6,
                          times: [0, 0.2, 0.3, 0.5, 0.6, 1]
                        }}
                        className="text-2xl sm:text-3xl md:text-4xl font-bold text-accent whitespace-nowrap"
                      >
                        YUZU PORTFOLIO
                      </motion.h1>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          </div>


          {/* Loading text */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="absolute bottom-20 left-1/2 transform -translate-x-1/2"
          >
            <div className="flex items-center space-x-2">
              <span className="text-sm font-medium text-neutral-500">Loading</span>
              <motion.div
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="flex space-x-1"
              >
                <span className="text-accent">.</span>
                <span className="text-accent">.</span>
                <span className="text-accent">.</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Loading bar */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-accent via-primary-500 to-accent"
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}