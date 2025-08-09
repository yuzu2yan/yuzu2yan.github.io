"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import Image from "next/image"
import { TextGenerateEffect } from "@/components/ui/text-generate-effect"
import { TypewriterEffect } from "@/components/ui/typewriter-effect"
import { GeometricLines, FloatingDots, HexagonPattern } from "@/components/ui/geometric-lines"
import { AnimatedParticles, MovingGradient, FloatingShapes } from "@/components/ui/animated-particles"

export default function Profile() {
  const [mounted, setMounted] = useState(false)
  const [showInitialText, setShowInitialText] = useState(false)
  const [showProfile, setShowProfile] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return

    // Wait for loading animation to finish (3s)
    const loadingTimer = setTimeout(() => {
      setShowInitialText(true)
    }, 3200) // 3s loading + 200ms buffer

    // Hide initial text after showing it
    const hideTextTimer = setTimeout(() => {
      setShowInitialText(false)
      setTimeout(() => setShowProfile(true), 500)
    }, 6200) // 3.2s wait + 3s display

    return () => {
      clearTimeout(loadingTimer)
      clearTimeout(hideTextTimer)
    }
  }, [mounted])

  return (
    <section id="profile" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white pt-16 pb-24">
      {/* Background animations */}
      {mounted && (
        <>
          <AnimatedParticles />
          <MovingGradient />
          <FloatingShapes />
          <HexagonPattern className="text-neutral-900" />
          <GeometricLines position="top-right" color="stroke-cyan-500/30" />
          <GeometricLines position="bottom-left" color="stroke-cyan-400/20" className="rotate-180" />
          <FloatingDots />
        </>
      )}

      {/* Content */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-8 w-full max-w-7xl mx-auto">
        <div className="flex items-center justify-center min-h-screen pt-20">
          <div className="flex flex-col items-center lg:items-start gap-8 w-full">
            {/* Initial Text - Center */}
            {mounted && showInitialText && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.8 }}
                className="text-center w-full flex items-center justify-center min-h-screen"
              >
                <div className="space-y-4">
                  <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight">
                    <span className="inline-block text-black">Be</span>{" "}
                    <span className="inline-block relative">
                      <span className="relative z-10 bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
                        Creative
                      </span>
                      <motion.span
                        className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 blur-2xl"
                        animate={{
                          opacity: [0.5, 1, 0.5],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />
                    </span>
                  </h1>
                  
                  <motion.div 
                    className="max-w-2xl mx-auto"
                    animate={{ opacity: showInitialText ? 1 : 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <TextGenerateEffect
                      words="The world is better with Tech."
                      className="text-lg sm:text-xl text-neutral-600 font-normal"
                    />
                  </motion.div>
                </div>
              </motion.div>
            )}

            {/* Profile Info - Left */}
            {mounted && showProfile && (
              <>
                {/* Overview and Introduction text */}
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="space-y-1 text-center lg:text-left w-full"
                >
                  <p className="text-sm md:text-base lg:text-lg font-medium text-neutral-600">
                    INTRODUCTION
                  </p>
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black">
                    Overview.
                  </h1>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="flex flex-col lg:flex-row items-center gap-8 max-w-4xl w-full"
                >
              {/* Profile Image and Resume Button */}
              <div className="flex flex-col items-center gap-6">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="flex-shrink-0"
                >
                  <div className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64">
                    <Image
                      src="/images/profile_img.jpg"
                      alt="Joe Kohzen (Yuzu)"
                      fill
                      className="object-cover rounded-3xl shadow-2xl"
                      priority
                    />
                    {/* Decorative border */}
                    <div className="absolute inset-0 rounded-3xl ring-4 ring-cyan-500/20" />
                  </div>
                </motion.div>

                {/* Resume Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  <a
                    href="/data/Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-6 py-3 bg-cyan-400 text-white rounded-xl hover:bg-cyan-500 hover:shadow-lg hover:scale-105 transition-all duration-300"
                  >
                    <span className="text-sm sm:text-base font-medium">View My Resume</span>
                  </a>
                </motion.div>
              </div>
              
              {/* Text Content */}
              <div className="space-y-6 text-center lg:text-left">
                <div>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-2">
                    Joe Kohzen (Yuzu)
                  </h2>
                  <p className="text-lg sm:text-xl text-cyan-600 font-medium">
                    Developer · Designer · Creator
                  </p>
                </div>
                
                <div className="text-base sm:text-lg text-neutral-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
                  <TypewriterEffect
                    words="Hello! As a first-year master's student pursuing computer science, I am specializing in intelligent robot using digital twin and world models. My academic journey is dedicated to exploring the intersection between technology and creativity."
                    className="block"
                    delay={0.5}
                    speed={0.02}
                  />
                </div>
              </div>
              </motion.div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}