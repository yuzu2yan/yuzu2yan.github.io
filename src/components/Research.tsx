"use client"

import { motion } from "framer-motion"
import { HexagonPattern } from "@/components/ui/geometric-lines"

export default function Research() {
  return (
    <section id="research" className="min-h-screen relative overflow-hidden scroll-mt-20">
      {/* Background layers */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-bl from-white via-purple-50/30 to-pink-50/30" />
        <HexagonPattern className="text-purple-500 opacity-[0.03]" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-8 w-full max-w-7xl mx-auto">
        <div className="flex items-center justify-center min-h-screen pt-20">
          <div className="flex flex-col items-start gap-8">
            {/* Header section */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="space-y-1"
            >
              <p className="text-sm md:text-base lg:text-lg font-medium text-neutral-600">
                MY ACADEMIC JOURNEY
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black">
                Research.
              </h1>
            </motion.div>

            {/* Research Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="w-full max-w-4xl"
            >
              <div className="space-y-12 md:space-y-16 lg:space-y-20">
                {/* Research Interests */}
                <div className="relative">
                  <div className="mb-8 md:mb-10">
                    <h3 className="text-2xl md:text-3xl font-bold text-black">
                      Research Interests
                    </h3>
                  </div>
                  
                  <div className="space-y-4">
                    <p className="text-lg text-neutral-700 leading-relaxed">
                      • <span className="font-semibold">Intelligent Robotics</span> - AI robots that can perceive, reason, and act autonomously in complex environments
                    </p>
                    <p className="text-lg text-neutral-700 leading-relaxed">
                      • <span className="font-semibold">Digital Twin</span> - Replication of real-world in a virtual environment with especially 3D LiDAR sensor
                    </p>
                    <p className="text-lg text-neutral-700 leading-relaxed">
                      • <span className="font-semibold">World Models</span> - AI's internal model for simulating and predicting outcomes, including unseen factors
                    </p>
                    <p className="text-lg text-neutral-700 leading-relaxed">
                      • <span className="font-semibold">Robot Vision</span> - Computer vision for scene understanding and SLAM to enhance perception
                    </p>
                  </div>
                </div>

                {/* Current Research */}
                <div className="relative">
                  <div className="mb-8 md:mb-10">
                    <h3 className="text-2xl md:text-3xl font-bold text-black">
                      Current Research
                    </h3>
                  </div>
                  
                  <div className="space-y-6">
                    <h4 className="text-xl font-semibold text-black">
                      Autonomous Mobile-Sensor Placement System Using Deep Reinforcement Learning for Digital Twin Construction
                    </h4>
                    <p className="text-lg text-neutral-700 leading-relaxed">
                      By enabling mobility in LiDAR-equipped robots, the system dynamically adjusted sensor positions to expand coverage, providing a practical and scalable solution for sensor placement in complex, changing urban environments.
                    </p>
                  </div>
                  <div className="space-y-6">
                    <h4 className="text-xl font-semibold text-black">
                      World Model-Based Communication Prediction and Multi-Robot Coordination Enabled by Digital Twin
                    </h4>
                    <p className="text-lg text-neutral-700 leading-relaxed">
                      Autonomous robotic systems using World Models for predictive communication and control, leveraging digital twins and multi-agent simulation to study adaptation in dynamic, networked environments.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}