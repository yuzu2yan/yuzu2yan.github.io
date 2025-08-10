"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { HexagonPattern } from "@/components/ui/geometric-lines"

const skillCategories = {
  Programming: [
    { name: "HTML", image: "/images/html.png" },
    { name: "CSS", image: "/images/css.png" },
    { name: "JavaScript", image: "/images/js.png" },
    { name: "TypeScript", image: "/images/ts.png" },
    { name: "Dart", image: "/images/dart.png" },
    { name: "PHP", image: "/images/php.png" },
    { name: "Java", image: "/images/java.png" },
    { name: "C", image: "/images/c.png" },
    { name: "C++", image: "/images/c++.png" },
    { name: "Rust", image: "/images/rust.png" },
    { name: "Python", image: "/images/python.png" },
  ],
  Technologies: [
    { name: "React", image: "/images/react.png" },
    { name: "Node.js", image: "/images/nodejs.png" },
    { name: "Next.js", image: "/images/nextjs.svg" },
    { name: "Flutter", image: "/images/flutter.svg" },
    { name: "ROS", image: "/images/ros.png" },
    { name: "Arduino", image: "/images/arduino.png" },
    { name: "Raspberry Pi", image: "/images/raspi.png" },
    { name: "Autoware", image: "/images/autoware.png" },
    { name: "OpenCV", image: "/images/opencv.svg" },
    { name: "NS-3", image: "/images/ns-3.png" },
    { name: "Unity", image: "/images/unity.svg" },
    { name: "TensorFlow", image: "/images/tensorflow.png" },
    { name: "PyTorch", image: "/images/pytorch.png" },
    { name: "Hugging Face", image: "/images/huggingface.png" },
    { name: "LangChain", image: "/images/langchain.svg" },
    { name: "Omniverse", image: "/images/omniverse.png" },
    { name: "AWS", image: "/images/aws.png" },
    { name: "SQLite", image: "/images/sqlite.png" },
    { name: "MySQL", image: "/images/mysql.svg" },
    { name: "PostgreSQL", image: "/images/postgresql.png" },
    { name: "Firebase", image: "/images/firebase.png" },
    { name: "Supabase", image: "/images/supabase.png" },
    { name: "MongoDB", image: "/images/mongodb.png" },
    { name: "Pinecone", image: "/images/pinecone.svg" },
    { name: "Git", image: "/images/git.png" },
    { name: "Docker", image: "/images/docker.svg" },
    { name: "Linux", image: "/images/linux.png" },
  ],
  Design: [
    { name: "Figma", image: "/images/figma.png" },
    { name: "Illustrator", image: "/images/illustrator.png" },
    { name: "Photoshop", image: "/images/photoshop.png" },
    { name: "Premiere Pro", image: "/images/premiere-pro.png" },
    { name: "Canva", image: "/images/canva.png" },
  ],
}

export default function DesktopSkills() {
  return (
    <section id="about" className="min-h-screen relative overflow-hidden hidden md:block scroll-mt-16">
      <style jsx>{`
        @media (min-width: 768px) and (max-width: 1023px) {
          .tablet-padding {
            padding-left: 48px !important;
            padding-right: 48px !important;
          }
        }
      `}</style>
      {/* Background layers */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-cyan-50/30 to-blue-50/30" />
        <HexagonPattern className="text-cyan-500 opacity-[0.03]" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-8 w-full tablet-padding">
        <div className="flex items-center justify-center min-h-screen pt-32">
          <div className="flex flex-col gap-8 items-center">
            {/* Header section */}
            <div className="w-full max-w-4xl">
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

            {/* Skills content section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="w-full max-w-4xl"
            >
              <div className="space-y-12 md:space-y-16 lg:space-y-20">
                {Object.entries(skillCategories).map(([category, skills], index) => (
                  <div key={category} className="relative">
                    {/* Category container */}
                    <div className="mb-20 md:mb-24">
                      <h3 className="text-2xl md:text-3xl font-bold text-black text-center py-4">
                        {category}
                      </h3>
                    </div>
                    
                    {/* Spacer div */}
                    <div className="h-4 md:h-6"></div>
                    
                    {/* Skills grid container */}
                    <div className="flex justify-center">
                      <div className="inline-flex flex-wrap justify-center gap-2 md:gap-3 max-w-[55rem]">
                        {skills.map((skill) => (
                          <motion.div
                            key={skill.name}
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.95 }}
                            className="group"
                          >
                            {/* Individual skill container */}
                            <div className="flex flex-col items-center gap-0">
                              {/* Icon wrapper */}
                              <div className="relative p-2">
                                <Image
                                  src={skill.image}
                                  alt={skill.name}
                                  width={60}
                                  height={60}
                                  className="w-14 h-14 object-contain transition-all duration-300 group-hover:filter group-hover:brightness-110"
                                />
                                <div className="absolute inset-0 bg-cyan-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                              </div>
                              {/* Skill name */}
                              <span className="text-xs md:text-sm font-medium text-neutral-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                {skill.name}
                              </span>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Category divider */}
                    {index < Object.entries(skillCategories).length - 1 && (
                      <div className="mt-8 md:mt-12">
                        <div className="flex items-center justify-center">
                          <div className="h-px w-32 bg-gradient-to-r from-transparent via-cyan-500 to-cyan-500/30"></div>
                          <div className="mx-4 w-3 h-3 rounded-full bg-cyan-500"></div>
                          <div className="h-px w-32 bg-gradient-to-l from-transparent via-cyan-500 to-cyan-500/30"></div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}