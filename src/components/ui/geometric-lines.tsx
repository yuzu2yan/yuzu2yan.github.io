"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

interface GeometricLinesProps {
  className?: string
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right"
  color?: string
}

export function GeometricLines({ 
  className, 
  position = "top-right",
  color = "stroke-cyan-500/20"
}: GeometricLinesProps) {
  const positionClasses = {
    "top-left": "top-0 left-0",
    "top-right": "top-0 right-0",
    "bottom-left": "bottom-0 left-0",
    "bottom-right": "bottom-0 right-0"
  }

  return (
    <div className={cn(
      "absolute pointer-events-none",
      positionClasses[position],
      className
    )}>
      <svg
        width="300"
        height="300"
        viewBox="0 0 300 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80"
      >
        <motion.path
          d="M0 100 L100 100 L100 0"
          className={color}
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        />
        <motion.path
          d="M50 150 L150 150 L150 50"
          className={color}
          strokeWidth="1"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeInOut" }}
        />
        <motion.circle
          cx="100"
          cy="100"
          r="3"
          className={cn(color, "fill-current")}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        />
      </svg>
    </div>
  )
}

export function FloatingDots({ className }: { className?: string }) {
  const [positions, setPositions] = useState<Array<{ x: string, y: string[], duration: number }>>([])

  useEffect(() => {
    // Generate random positions after mount
    const newPositions = [...Array(5)].map(() => ({
      x: Math.random() * 100 + "%",
      y: [
        Math.random() * 100 + "%",
        Math.random() * 100 + "%",
        Math.random() * 100 + "%"
      ],
      duration: 10 + Math.random() * 10
    }))
    setPositions(newPositions)
  }, [])

  return (
    <div className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}>
      {positions.map((pos, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-cyan-500/30 rounded-full"
          initial={{ 
            x: `${i * 20}%`, 
            y: `${i * 20}%`,
            scale: 0 
          }}
          animate={{ 
            scale: [0, 1, 0],
            y: pos.y
          }}
          transition={{ 
            duration: pos.duration,
            repeat: Infinity,
            delay: i * 0.5,
            ease: "linear"
          }}
        />
      ))}
    </div>
  )
}