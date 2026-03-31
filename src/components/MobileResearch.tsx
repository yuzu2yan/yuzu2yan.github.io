"use client"

import { motion } from "framer-motion"

export default function MobileResearch() {
  return (
    <section id="research" className="min-h-screen relative md:hidden scroll-mt-10 pt-16 bg-white">
      {/* Background layers */}
      {/* <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-bl from-white via-purple-50/30 to-pink-50/30" />
        <HexagonPattern className="text-purple-500 opacity-[0.03]" />
      </div> */}
      
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
                      • Digital-Twins
                    </p>
                    <p className="text-base text-neutral-700 leading-relaxed">
                      • World Models
                    </p>
                    <p className="text-base text-neutral-700 leading-relaxed">
                      • Robot Vision
                    </p>
                  </div>
                </div>

                {/* Publications */}
                <div className="relative">
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-black">
                      Publications
                    </h3>
                  </div>

                  <div className="space-y-8">
                    {/* 2026 */}
                    <div className="space-y-3">
                      <p className="text-sm text-neutral-500">2026</p>
                      <a
                        href="https://ieeexplore.ieee.org/document/11366268"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-start gap-1 text-base font-semibold text-black leading-snug hover:text-neutral-500 transition-colors duration-200"
                      >
                        Multi-sensor-robot Placement System using Reinforcement Learning for 3D Digital-twins
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="w-3.5 h-3.5 shrink-0 mt-1"
                        >
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                          <polyline points="15 3 21 3 21 9" />
                          <line x1="10" y1="14" x2="21" y2="3" />
                        </svg>
                      </a>
                      <p className="text-sm text-neutral-600">
                        J. Kozen, R. Shinkuma, G. Trovato and N. Mandayam
                      </p>
                      <p className="text-sm text-neutral-600 italic">
                        2026 IEEE 23rd Consumer Communications &amp; Networking Conference (CCNC), Las Vegas, NV, USA, pp. 1–2
                      </p>
                    </div>

                    {/* 2025 */}
                    <div className="space-y-3">
                      <p className="text-sm text-neutral-500">2025</p>
                      <a
                        href="https://www.itu.int/md/T25-SG21-C-0030/en"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-start gap-1 text-base font-semibold text-black leading-snug hover:text-neutral-500 transition-colors duration-200"
                      >
                        Proposal to add sensors in infrastructure for surveillance
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="w-3.5 h-3.5 shrink-0 mt-1"
                        >
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                          <polyline points="15 3 21 3 21 9" />
                          <line x1="10" y1="14" x2="21" y2="3" />
                        </svg>
                      </a>
                      <p className="text-sm text-neutral-600 italic">
                        ITU-T, Study Group 21
                      </p>
                    </div>
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