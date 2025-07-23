"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white pt-16">
      {/* Futuristic cross-line animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {/* Horizontal line */}
        <div className="absolute top-1/2 left-0 right-0 h-[3px] -translate-y-1/2">
          <div className="absolute h-full w-full bg-gradient-to-r from-transparent via-accent to-transparent animate-line-horizontal opacity-80"></div>
        </div>
        {/* Vertical line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-[3px] -translate-x-1/2">
          <div className="absolute h-full w-full bg-gradient-to-b from-transparent via-accent to-transparent animate-line-vertical opacity-80"></div>
        </div>
      </div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-hero-pattern opacity-30"></div>
        
        {/* Floating geometric shapes */}
        <motion.div
          className="absolute top-20 left-10 w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 bg-accent/5 rounded-full blur-3xl"
          animate={{
            x: mousePosition.x * 0.02,
            y: mousePosition.y * 0.02,
          }}
          transition={{ type: "spring", stiffness: 50 }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-48 sm:w-64 md:w-96 h-48 sm:h-64 md:h-96 bg-primary-200/10 rounded-full blur-3xl"
          animate={{
            x: mousePosition.x * -0.03,
            y: mousePosition.y * -0.03,
          }}
          transition={{ type: "spring", stiffness: 30 }}
        />
        
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <div className="inline-block relative">
            <div className="absolute inset-0 bg-accent/10 blur-3xl animate-pulse-slow -z-10"></div>
            <h1 className="relative text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold">
              <span className="text-neutral-900">
                Be Creative
              </span>
            </h1>
          </div>
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg sm:text-xl md:text-2xl text-neutral-600 mb-8 sm:mb-12 px-4"
        >
          The world is better with Tech
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <a
            href="#about"
            className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-accent text-white font-medium rounded-lg hover:bg-accent-dark transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl text-sm sm:text-base"
          >
            Explore My Work
            <svg
              className="ml-2 w-5 h-5 animate-bounce"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </a>
        </motion.div>
      </div>

    </section>
  )
}