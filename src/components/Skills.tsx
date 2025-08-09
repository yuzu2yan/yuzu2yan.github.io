"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { IconSparkles } from "@tabler/icons-react"
import { HexagonPattern } from "@/components/ui/geometric-lines"

const skillCategories = {
  Programming: [
    { name: "C", image: "/images/c.png" },
    { name: "C++", image: "/images/c++.png" },
    { name: "Java", image: "/images/java.png" },
    { name: "Python", image: "/images/python.png" },
    { name: "HTML", image: "/images/html.png" },
    { name: "CSS", image: "/images/css.png" },
    { name: "JavaScript", image: "/images/js.png" },
    { name: "TypeScript", image: "/images/ts.png" },
    { name: "PHP", image: "/images/php.png" },
  ],
  Technologies: [
    { name: "React", image: "/images/react.png" },
    { name: "Next.js", image: "/images/nextjs.svg" },
    { name: "Git", image: "/images/git.png" },
    { name: "Docker", image: "/images/docker.svg" },
    { name: "Linux", image: "/images/linux.png" },
    { name: "ROS", image: "/images/ros.png" },
    { name: "Arduino", image: "/images/arduino.png" },
    { name: "Raspberry Pi", image: "/images/raspi.png" },
    { name: "Autoware", image: "/images/autoware.png" },
    { name: "TensorFlow", image: "/images/tensorflow.png" },
    { name: "OpenCV", image: "/images/opencv.svg" },
  ],
  Design: [
    { name: "Unity", image: "/images/unity.svg" },
  ],
}

export default function Skills() {
  return (
    <section id="about" className="pt-40 md:pt-48 lg:pt-56 pb-32 md:pb-40 relative overflow-hidden scroll-mt-16">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-cyan-50/30 to-blue-50/30" />
      
      {/* Hexagon pattern overlay */}
      <HexagonPattern className="text-cyan-500 opacity-[0.03]" />
      
      <div className="relative w-full px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center max-w-7xl mx-auto">
          <div className="flex flex-col items-start gap-8 w-full max-w-4xl mt-20">
            {/* Section Header - same as Hero Overview */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="space-y-1"
            >
              <p className="text-sm md:text-base lg:text-lg font-medium text-neutral-600">
                WHAT I WORK WITH
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black">
                Skills.
              </h1>
            </motion.div>
          </div>
        </div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20 w-full"
        >
          <div className="max-w-6xl mx-auto">
            <div className="space-y-16">
              {Object.entries(skillCategories).map(([category, skills]) => (
                <div key={category}>
                  <h3 className="text-2xl font-bold text-black text-center mb-8">{category}</h3>
                  <div className="flex flex-wrap justify-center gap-6">
                    {skills.map((skill) => (
                      <motion.div
                        key={skill.name}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="group"
                      >
                        <div className="w-20 h-20 md:w-24 md:h-24 p-4 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-center">
                          <Image
                            src={skill.image}
                            alt={skill.name}
                            width={48}
                            height={48}
                            className="w-12 h-12 object-contain"
                          />
                          <span className="text-xs font-medium text-neutral-700 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                            {skill.name}
                          </span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Career Grid */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-2xl p-8 border border-neutral-200 hover:border-cyan-500 transition-colors">
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
        </div>
      </div>
    </section>
  )
}