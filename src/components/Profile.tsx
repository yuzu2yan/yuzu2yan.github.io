"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { IconSchool, IconBrain, IconSparkles } from "@tabler/icons-react"
import { HoverEffect } from "@/components/ui/card-hover-effect"
import { TextGenerateEffect } from "@/components/ui/text-generate-effect"
import { HexagonPattern } from "@/components/ui/geometric-lines"

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

// Convert skills to hover effect items
const skillItems = skills.map(skill => ({
  title: skill.name,
  icon: (
    <Image
      src={skill.image}
      alt={skill.name}
      width={48}
      height={48}
      className="w-12 h-12 object-contain"
    />
  ),
}))

export default function Profile() {
  return (
    <section id="about" className="py-32 md:py-40 relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-cyan-50/30 to-blue-50/30" />
      
      {/* Hexagon pattern overlay */}
      <HexagonPattern className="text-cyan-500 opacity-[0.03]" />
      
      <div className="relative w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >

          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full" />
        </motion.div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-black mb-2">Technical Skills</h3>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <HoverEffect items={skillItems} />
          </div>
        </motion.div>

        {/* Career & Research Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Career Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="group"
          >
            <div className="h-full bg-white rounded-2xl p-8 border border-neutral-200 hover:border-cyan-500 transition-colors">
              <h3 className="text-xl font-bold text-black mb-3">Career & Education</h3>
              <a
                href="/data/CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-cyan-500 hover:text-cyan-600 font-medium group/link"
              >
                View My CV
                <svg
                  className="w-4 h-4 ml-1 transition-transform group-hover/link:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </motion.div>

          {/* Research Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="h-full bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-8 border border-cyan-200">
              <h3 className="text-xl font-bold text-black mb-3">Research</h3>
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/80 rounded-full text-sm">
                  <IconSparkles className="w-4 h-4 text-cyan-500" />
                  <span className="font-medium text-cyan-600">Coming Soon</span>
                </div>
                <p className="text-neutral-700">
                  Exciting research on Robot Control Digital-Twin Utilizing Deep Reinforcement Learning
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}