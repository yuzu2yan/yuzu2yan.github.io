"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"

export default function LoadingAnimation() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3000)

    return () => clearTimeout(timer)
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
          <div className="relative w-64 h-64">
            {/* Central circle */}
            <motion.div
              initial={{ scale: 0, rotate: 0 }}
              animate={{ scale: 1, rotate: 360 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="w-32 h-32 bg-accent/20 rounded-full"></div>
            </motion.div>

            {/* Rotating squares */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1, rotate: 45 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="w-40 h-40 border-4 border-accent/40"></div>
            </motion.div>

            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1, rotate: -45 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="w-48 h-48 border-4 border-accent/30"></div>
            </motion.div>

            {/* Logo text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <h1 className="text-3xl md:text-4xl font-bold text-accent animate-blink">
                WELCOME TO YUZU LABO
              </h1>
            </motion.div>
          </div>

          {/* Welcome text with animated background */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          >
            <div className="relative">
              {/* Background decoration */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 -inset-x-20 -inset-y-4"
              >
                <div className="absolute top-0 left-1/2 w-2 h-2 bg-accent rounded-full"></div>
                <div className="absolute bottom-0 right-1/4 w-3 h-3 bg-primary-400 rounded-full"></div>
                <div className="absolute top-1/2 left-0 w-2 h-2 bg-accent/50 rounded-full"></div>
              </motion.div>
              
              {/* Main text */}
              <div className="relative bg-white/90 backdrop-blur-sm px-12 py-6 rounded-2xl shadow-xl border border-accent/20">
                <h2 className="text-3xl font-bold text-center">
                  <span className="bg-gradient-to-r from-accent via-primary-500 to-accent-dark bg-clip-text text-transparent">
                    Welcome to
                  </span>
                </h2>
                <p className="text-xl font-light text-neutral-700 text-center mt-2">
                  My Creative Space
                </p>
              </div>
              
              {/* Floating elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-8 -right-8 w-16 h-16 bg-accent/10 rounded-full blur-xl"
              />
              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                className="absolute -bottom-8 -left-8 w-20 h-20 bg-primary-200/20 rounded-full blur-xl"
              />
            </div>
          </motion.div>

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