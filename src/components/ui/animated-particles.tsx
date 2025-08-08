"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

interface Particle {
  id: number
  x: number
  y: number
  vx: number
  vy: number
}

export function AnimatedParticles({ className }: { className?: string }) {
  const [particles, setParticles] = useState<Particle[]>([])
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    // Initialize particles
    const initialParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
    }))
    setParticles(initialParticles)

    // Mouse tracking
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)

    // Animation loop
    let animationId: number
    const animate = () => {
      setParticles(prevParticles => 
        prevParticles.map(particle => {
          let { x, y, vx, vy } = particle
          
          // Update position
          x += vx
          y += vy
          
          // Bounce off walls
          if (x < 0 || x > window.innerWidth) vx *= -1
          if (y < 0 || y > window.innerHeight) vy *= -1
          
          // Keep in bounds
          x = Math.max(0, Math.min(window.innerWidth, x))
          y = Math.max(0, Math.min(window.innerHeight, y))
          
          return { ...particle, x, y, vx, vy }
        })
      )
      animationId = requestAnimationFrame(animate)
    }
    animate()

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <div className={cn("fixed inset-0 pointer-events-none z-0", className)}>
      <svg className="w-full h-full">
        {/* Connection lines */}
        {particles.map((particle, i) => 
          particles.slice(i + 1).map(otherParticle => {
            const distance = Math.sqrt(
              Math.pow(particle.x - otherParticle.x, 2) + 
              Math.pow(particle.y - otherParticle.y, 2)
            )
            if (distance < 150) {
              return (
                <motion.line
                  key={`line-${particle.id}-${otherParticle.id}`}
                  x1={particle.x}
                  y1={particle.y}
                  x2={otherParticle.x}
                  y2={otherParticle.y}
                  stroke="rgba(6, 182, 212, 0.1)"
                  strokeWidth="1"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 - distance / 150 }}
                />
              )
            }
            return null
          })
        )}
        
        {/* Particles */}
        {particles.map(particle => (
          <motion.circle
            key={particle.id}
            cx={particle.x}
            cy={particle.y}
            r="2"
            fill="rgba(6, 182, 212, 0.5)"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            whileHover={{ scale: 1.5 }}
          />
        ))}
      </svg>
    </div>
  )
}

export function MovingGradient({ className }: { className?: string }) {
  return (
    <div className={cn("absolute inset-0 overflow-hidden", className)}>
      <motion.div
        className="absolute w-[200%] h-[200%] top-[-50%] left-[-50%]"
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-transparent to-blue-500/20 blur-3xl" />
      </motion.div>
    </div>
  )
}

export function FloatingShapes({ className }: { className?: string }) {
  return (
    <div className={cn("absolute inset-0 overflow-hidden", className)}>
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          initial={{
            x: Math.random() * 100 + "%",
            y: Math.random() * 100 + "%",
          }}
          animate={{
            x: [
              Math.random() * 100 + "%",
              Math.random() * 100 + "%",
              Math.random() * 100 + "%",
            ],
            y: [
              Math.random() * 100 + "%",
              Math.random() * 100 + "%",
              Math.random() * 100 + "%",
            ],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20 + i * 5,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <div className={cn(
            "w-32 h-32 border-2 border-cyan-500/20",
            i % 2 === 0 ? "rotate-45" : ""
          )} />
        </motion.div>
      ))}
    </div>
  )
}