"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import Image from "next/image"
import { TypewriterEffect } from "@/components/ui/typewriter-effect"

export default function DesktopProfile() {
  const [mounted, setMounted] = useState(false)
  const [showProfile, setShowProfile] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return

    // Show profile immediately
    setShowProfile(true)
  }, [mounted])

  return (
    <section id="profile" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white pt-16 pb-24 hidden md:flex scroll-mt-10">
      <style jsx>{`
        @media (min-width: 768px) and (max-width: 1023px) {
          .tablet-padding {
            padding-left: 48px !important;
            padding-right: 48px !important;
          }
        }
      `}</style>
      {/* Background animations */}
      {/* mounted && (
        <>
          <AnimatedParticles />
          <MovingGradient />
          <FloatingShapes />
          <HexagonPattern className="text-neutral-900" />
          <GeometricLines position="top-right" color="stroke-cyan-500/30" />
          <GeometricLines position="bottom-left" color="stroke-cyan-400/20" className="rotate-180" />
          <FloatingDots />
        </>
      ) */}

      {/* Content */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-8 w-full max-w-7xl mx-auto tablet-padding">
        <div className="flex items-center justify-center min-h-screen pt-20">
          <div className="flex flex-col items-start gap-8">
            {/* Profile Info - Left */}
            {mounted && showProfile && (
              <>
                {/* Overview and Introduction text */}
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="space-y-1"
                >
                  <p className="text-sm md:text-base lg:text-lg font-medium text-neutral-600">
                    INTRODUCTION
                  </p>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black">
                    Overview.
                  </h1>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="flex flex-row items-center gap-8 max-w-4xl"
                >
              {/* Profile Image and Resume Button */}
              <div className="flex flex-col items-center gap-6">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="flex-shrink-0"
                >
                  <div className="relative w-64 h-64">
                    <Image
                      src="/images/profile_img.jpg"
                      alt="Yuzuru Kozen"
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
                    className="block w-40 h-12 bg-cyan-400 text-white rounded-xl hover:bg-cyan-500 hover:shadow-lg hover:scale-105 transition-all duration-300"
                  >
                    <div className="w-full h-full flex items-center justify-center p-6">
                      <span className="text-1xl font-medium">View My Resume</span>
                    </div>
                  </a>
                </motion.div>
              </div>
              
              {/* Text Content */}
              <div className="space-y-6">
                <div>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-2">
                    Yuzuru Kozen
                  </h2>
                  <p className="text-lg sm:text-xl text-cyan-600 font-medium">
                    Developer · Designer · Creator
                  </p>
                </div>
                
                <div className="text-base sm:text-lg text-neutral-600 leading-relaxed">
                  <TypewriterEffect
                    words="Hello! As a master's student pursuing computer science, I'm specializing in intelligent robot with Digital-Twins and World Models. My academic journey is dedicated to exploring the intersection between technology and creativity."
                    className="block"
                    delay={0.5}
                    speed={0.015}
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