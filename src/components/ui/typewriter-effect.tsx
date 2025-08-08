"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface TypewriterEffectProps {
  words: string
  className?: string
  delay?: number
  speed?: number
}

export function TypewriterEffect({
  words,
  className,
  delay = 0,
  speed = 0.05,
}: TypewriterEffectProps) {
  const letters = words.split("")

  return (
    <span className={cn("", className)}>
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.1,
            delay: delay + index * speed,
          }}
        >
          {letter}
        </motion.span>
      ))}
    </span>
  )
}