"use client"

import { motion } from "framer-motion"
import { IconSparkles, IconBrain, IconRobot, IconCode } from "@tabler/icons-react"
import { HexagonPattern } from "@/components/ui/geometric-lines"

export default function Research() {
  return (
    <section id="research" className="min-h-screen flex items-center relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-bl from-white via-purple-50/30 to-pink-50/30" />
      
      {/* Hexagon pattern overlay */}
      <HexagonPattern className="text-purple-500 opacity-[0.03]" />
      
      <div className="relative w-full px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col items-center justify-center max-w-7xl mx-auto">
          <div className="flex flex-col items-start gap-8 w-full max-w-4xl">
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="space-y-1"
            >
              <p className="text-sm md:text-base lg:text-lg font-medium text-neutral-600">
                MY RESEARCH
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black">
                Research.
              </h1>
            </motion.div>
          </div>
        </div>

        {/* Research Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="w-full mt-16 px-8 md:px-16 lg:px-24"
        >
          <div className="grid md:grid-cols-2 gap-8">
            {/* Current Research */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="h-full bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-200">
                <div className="flex items-center gap-3 mb-4">
                  <IconRobot className="w-8 h-8 text-purple-500" />
                  <h3 className="text-xl font-bold text-black">Current Research</h3>
                </div>
                <h4 className="text-lg font-semibold text-black mb-3">
                  Robot Control Digital-Twin Using Deep Reinforcement Learning
                </h4>
                <p className="text-neutral-700 leading-relaxed mb-4">
                  Developing intelligent robotic control systems that leverage digital twin technology 
                  and deep reinforcement learning for enhanced decision-making and adaptability.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-white/80 rounded-full text-sm font-medium text-purple-600">
                    Digital Twin
                  </span>
                  <span className="px-3 py-1 bg-white/80 rounded-full text-sm font-medium text-purple-600">
                    Deep RL
                  </span>
                  <span className="px-3 py-1 bg-white/80 rounded-full text-sm font-medium text-purple-600">
                    Robotics
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Research Interests */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="h-full bg-white rounded-2xl p-8 border border-neutral-200">
                <div className="flex items-center gap-3 mb-4">
                  <IconBrain className="w-8 h-8 text-cyan-500" />
                  <h3 className="text-xl font-bold text-black">Research Interests</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <IconCode className="w-5 h-5 text-cyan-500 mt-0.5 flex-shrink-0" />
                    <span className="text-neutral-700">Machine Learning & AI</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <IconCode className="w-5 h-5 text-cyan-500 mt-0.5 flex-shrink-0" />
                    <span className="text-neutral-700">Computer Vision</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <IconCode className="w-5 h-5 text-cyan-500 mt-0.5 flex-shrink-0" />
                    <span className="text-neutral-700">Autonomous Systems</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <IconCode className="w-5 h-5 text-cyan-500 mt-0.5 flex-shrink-0" />
                    <span className="text-neutral-700">Human-Robot Interaction</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Coming Soon */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="md:col-span-2"
            >
              <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-2xl p-8 border border-cyan-200 text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 rounded-full text-sm mb-4">
                  <IconSparkles className="w-5 h-5 text-cyan-500" />
                  <span className="font-medium text-cyan-600">Publications Coming Soon</span>
                </div>
                <p className="text-neutral-700 max-w-2xl mx-auto">
                  Currently working on publishing research findings. Stay tuned for updates on papers, 
                  presentations, and conference proceedings.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}