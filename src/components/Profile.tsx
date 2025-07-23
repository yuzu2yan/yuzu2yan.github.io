"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useEffect, useState } from "react"
import { GraduationCap, Brain, Sparkles } from "lucide-react"

const skills = [
  { name: "C", image: "/images/c.png", category: "language" },
  { name: "C++", image: "/images/c++.png", category: "language" },
  { name: "Java", image: "/images/java.png", category: "language" },
  { name: "Python", image: "/images/python.png", category: "language" },
  { name: "HTML", image: "/images/html.png", category: "web" },
  { name: "CSS", image: "/images/css.png", category: "web" },
  { name: "JavaScript", image: "/images/js.png", category: "web" },
  { name: "TypeScript", image: "/images/ts.png", category: "web" },
  { name: "PHP", image: "/images/php.png", category: "web" },
  { name: "React", image: "/images/react.png", category: "framework" },
  { name: "Next.js", image: "/images/nextjs.svg", category: "framework" },
  { name: "Unity", image: "/images/unity.svg", category: "framework" },
  { name: "Git", image: "/images/git.png", category: "tool" },
  { name: "Docker", image: "/images/docker.svg", category: "tool" },
  { name: "OpenCV", image: "/images/opencv.svg", category: "tool" },
  { name: "ROS", image: "/images/ros.png", category: "robotics" },
  { name: "Arduino", image: "/images/arduino.png", category: "robotics" },
  { name: "Raspberry Pi", image: "/images/raspi.png", category: "robotics" },
  { name: "Linux", image: "/images/linux.png", category: "system" },
  { name: "Autoware", image: "/images/autoware.png", category: "robotics" },
  { name: "TensorFlow", image: "/images/tensorflow.png", category: "ai" },
]

// Typing animation component
function TypingAnimation({ text, delay = 0 }: { text: string; delay?: number }) {
  const [displayedText, setDisplayedText] = useState("")
  const [isTyping, setIsTyping] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsTyping(true)
      let index = 0
      const interval = setInterval(() => {
        if (index < text.length) {
          setDisplayedText(text.slice(0, index + 1))
          index++
        } else {
          clearInterval(interval)
        }
      }, 30) // Typing speed

      return () => clearInterval(interval)
    }, delay)

    return () => clearTimeout(timeout)
  }, [text, delay])

  return (
    <span>
      {displayedText}
      {isTyping && displayedText.length < text.length && (
        <span className="animate-pulse">|</span>
      )}
    </span>
  )
}

export default function Profile() {
  return (
    <section id="about" className="py-16 sm:py-24 md:py-32 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-48 w-64 sm:w-96 h-64 sm:h-96 bg-accent/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-48 w-64 sm:w-96 h-64 sm:h-96 bg-primary-100/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
            <span className="bg-gradient-to-r from-accent to-accent-dark bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full"></div>
        </motion.div>

        {/* Introduction with Profile Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 sm:mb-16 max-w-4xl mx-auto"
        >
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="w-40 h-40 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-gradient-to-br from-accent/20 to-accent/10 p-1 rounded-2xl">
                <div className="w-full h-full bg-white p-2 rounded-2xl">
                  <Image
                    src="/profile_img.jpg"
                    alt="Profile"
                    width={256}
                    height={256}
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/10 rounded-lg blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary-200/20 rounded-lg blur-xl"></div>
            </motion.div>
            
            {/* Text Content */}
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-neutral-800">
                Joe Kohzen (Yuzu)
              </h3>
              <p className="text-lg sm:text-xl text-neutral-600 mb-4 sm:mb-6">
                Computer Science Graduate Student & Robotics Enthusiast
              </p>
              <div className="text-base sm:text-lg text-neutral-700 leading-relaxed space-y-4">
                <p>
                  <TypingAnimation 
                    text="Hello! As a first-year master's student pursuing computer science, I am specializing in intelligent robot using digital twin and world models. My academic journey is dedicated to exploring the intersection between technology and creativity." 
                    delay={500}
                  />
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 sm:mb-24 md:mb-32"
        >
          <div className="text-center mb-8 sm:mb-12">
            <h3 className="text-xl sm:text-2xl font-bold text-neutral-800 mb-2">Technical Skills</h3>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 max-w-5xl mx-auto">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ 
                  duration: 0.3, 
                  delay: index * 0.02,
                  type: "spring",
                  stiffness: 200
                }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group relative"
              >
                <div className="relative p-3 sm:p-4 bg-neutral-50 rounded-2xl hover:bg-accent/10 transition-all duration-300 shadow-md hover:shadow-xl">
                  <Image
                    src={skill.image}
                    alt={skill.name}
                    width={48}
                    height={48}
                    className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
                  />
                  <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-xs font-medium text-neutral-700 opacity-0 group-hover:opacity-100 transition-opacity bg-white px-3 py-1 rounded-full shadow-lg whitespace-nowrap">
                    {skill.name}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Career Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 sm:mb-24 md:mb-32 text-center"
        >
          <h3 className="text-xl sm:text-2xl font-bold text-neutral-800 mb-2">Career & Education</h3>
          <p className="text-neutral-600 mb-8 max-w-xl mx-auto">My professional journey</p>
          <motion.a
            href="/data/CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-8 py-4 bg-accent text-white font-medium rounded-full hover:bg-accent-dark transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <GraduationCap className="w-5 h-5 mr-2" />
            View My CV
          </motion.a>
        </motion.div>

        {/* Research Section - Coming Soon */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-accent/20 blur-3xl"></div>
            <div className="relative bg-gradient-to-br from-accent/10 to-accent/5 rounded-2xl p-6 sm:p-8 md:p-12 border border-accent/20 max-w-2xl mx-auto">
              <Brain className="w-16 h-16 text-accent mx-auto mb-4" />
              <h3 className="text-xl sm:text-2xl font-bold text-neutral-800 mb-2">Research</h3>
              <p className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-accent to-accent-dark bg-clip-text text-transparent mb-4">
                Coming Soon
              </p>
              <p className="text-neutral-600 max-w-lg mx-auto px-4">
                Exciting research on Robot Control Digital-Twin Utilizing Deep Reinforcement Learning
              </p>
              <Sparkles className="w-8 h-8 text-accent/50 mx-auto mt-6 animate-pulse" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}