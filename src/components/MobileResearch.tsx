"use client"

import { motion } from "framer-motion"
import { HexagonPattern } from "@/components/ui/geometric-lines"

export default function MobileResearch() {
  return (
    <section id="research" className="min-h-screen relative overflow-hidden scroll-mt-20 md:hidden">
      {/* Background layers */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-bl from-white via-purple-50/30 to-pink-50/30" />
        <HexagonPattern className="text-purple-500 opacity-[0.03]" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 w-full" style={{ paddingLeft: '24px', paddingRight: '24px' }}>
        <div className="flex items-center justify-center min-h-screen pt-20">
          <div className="flex flex-col items-center gap-8 w-full">
            {/* Header section */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="space-y-1 text-center"
            >
              <p className="text-sm font-medium text-neutral-600">
                MY ACADEMIC JOURNEY
              </p>
              <h1 className="text-3xl font-bold text-black">
                Research.
              </h1>
            </motion.div>

            {/* Research Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="w-full max-w-sm"
            >
              <div className="space-y-10">
                {/* Research Interests */}
                <div className="relative">
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-black">
                      Research Interests
                    </h3>
                  </div>
                  
                  <div className="space-y-3">
                    <p className="text-base text-neutral-700 leading-relaxed">
                      • Intelligent Robotics
                    </p>
                    <p className="text-base text-neutral-700 leading-relaxed">
                      • Digital Twin
                    </p>
                    <p className="text-base text-neutral-700 leading-relaxed">
                      • World Models
                    </p>
                    <p className="text-base text-neutral-700 leading-relaxed">
                      • Robot Vision
                    </p>
                  </div>
                </div>

                {/* Current Research */}
                <div className="relative">
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-black">
                      Current Research
                    </h3>
                  </div>
                  
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-black">
                      Autonomous Mobile-Sensor Placement System Using Deep Reinforcement Learning for Digital Twin Construction
                    </h4>
                    <p className="text-base text-neutral-700 leading-relaxed">
                      By enabling mobility in LiDAR-equipped robots, the system dynamically adjusted sensor positions to expand coverage, providing a practical and scalable solution for sensor placement in complex, changing urban environments.
                    </p>
                  </div>
                  
                  <div className="space-y-4 mt-6">
                    <h4 className="text-lg font-semibold text-black">
                      World Model-Based Communication Prediction and Multi-Robot Coordination Enabled by Digital Twin
                    </h4>
                    <p className="text-base text-neutral-700 leading-relaxed">
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