"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import Image from "next/image"
import { TypewriterEffect } from "@/components/ui/typewriter-effect"

export default function MobileProfile() {
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
    <section id="profile" className="relative min-h-screen flex items-center justify-center bg-white pb-24 md:hidden scroll-mt-16 pt-16">
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
      <div className="relative z-10 px-4 w-full">
        <div className="flex items-center justify-center min-h-screen pt-20">
          <div className="flex flex-col items-center gap-8">
            {/* Profile Info */}
            {mounted && showProfile && (
              <>
                {/* Overview and Introduction text */}
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="space-y-1 text-center"
                >
                  <p className="text-sm font-medium text-neutral-600">
                    INTRODUCTION
                  </p>
                  <h1 className="text-3xl font-bold text-black">
                    Overview.
                  </h1>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="flex flex-col items-center gap-6 max-w-sm"
                >
                  {/* Profile Image */}
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex-shrink-0"
                  >
                    <div className="relative w-40 h-40">
                      <Image
                        src="/images/profile_img.jpg"
                        alt="Joe Kozen (Yuzu)"
                        fill
                        className="object-cover rounded-3xl shadow-2xl"
                        priority
                      />
                      {/* Decorative border */}
                      <div className="absolute inset-0 rounded-3xl ring-4 ring-cyan-500/20" />
                    </div>
                  </motion.div>
                  
                  {/* Text Content */}
                  <div className="space-y-4 flex flex-col items-center">
                    <div className="text-center">
                      <h2 className="text-2xl font-bold text-black mb-2">
                        Joe Kozen (Yuzu)
                      </h2>
                      <p className="text-base text-cyan-600 font-medium">
                        Developer · Designer · Creator
                      </p>
                    </div>
                    
                    <div className="text-base text-neutral-600 leading-relaxed max-w-xs text-left w-full" style={{ paddingLeft: '16px', paddingRight: '16px' }}>
                      <TypewriterEffect
                        words="Hello! As a master's student pursuing computer science, I'm specializing in intelligent robot with Digital-Twins and World Models."
                        className="block"
                        delay={0.5}
                        speed={0.02}
                      />
                    </div>
                  </div>

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
                      className="block w-36 h-11 bg-cyan-400 text-white rounded-xl hover:bg-cyan-500 hover:shadow-lg hover:scale-105 transition-all duration-300"
                    >
                      <div className="w-full h-full flex items-center justify-center">
                        <span className="text-base font-medium">View Resume</span>
                      </div>
                    </a>
                  </motion.div>
                </motion.div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}