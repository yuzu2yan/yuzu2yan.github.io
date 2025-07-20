"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Calendar, Heart, Coffee, Cpu, GraduationCap, Code, Brain, Sparkles } from "lucide-react"

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

export default function Profile() {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-primary-100/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
            <span className="bg-gradient-to-r from-accent to-accent-dark bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full"></div>
        </motion.div>

        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-4 text-neutral-800">
            Joe Kohzen (Yuzu)
          </h3>
          <p className="text-xl text-neutral-600">
            Computer Science Graduate Student & Robotics Enthusiast
          </p>
        </motion.div>

        {/* Details Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-12 mb-20"
        >
          {/* Personal Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center mb-4">
              <Calendar className="w-6 h-6 text-accent mr-3" />
              <h4 className="text-xl font-semibold text-neutral-800">Personal Details</h4>
            </div>
            <p className="text-neutral-600 leading-relaxed max-w-2xl mx-auto">
              Born on February 22nd, I'm currently pursuing my graduate studies at Shibaura Institute of Technology, 
              specializing in Computer Science. My passion lies in robotics, world models, and digital twin technologies.
            </p>
          </motion.div>

          {/* Interests */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="flex items-center justify-center mb-4">
              <Heart className="w-6 h-6 text-accent mr-3" />
              <h4 className="text-xl font-semibold text-neutral-800">What I Love</h4>
            </div>
            <p className="text-neutral-600 leading-relaxed max-w-2xl mx-auto">
              I have a deep love for Robots 🤖, Penguins 🐧, and Sweets 🍫. 
              In my free time, you'll find me cafe hopping ☕️, cooking 🍳, 
              or creating something new 💡.
            </p>
          </motion.div>
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
            <h3 className="text-2xl font-bold text-neutral-800 mb-2">Technical Skills</h3>
            <p className="text-neutral-600">Tools and technologies I work with</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
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
                <div className="relative p-4 bg-neutral-50 rounded-2xl hover:bg-accent/10 transition-all duration-300 shadow-md hover:shadow-xl">
                  <Image
                    src={skill.image}
                    alt={skill.name}
                    width={48}
                    height={48}
                    className="w-12 h-12 object-contain"
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
          className="mb-20 text-center"
        >
          <h3 className="text-2xl font-bold text-neutral-800 mb-2">Career & Education</h3>
          <p className="text-neutral-600 mb-8">My professional journey</p>
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
            <div className="relative bg-gradient-to-br from-accent/10 to-accent/5 rounded-2xl p-12 border border-accent/20">
              <Brain className="w-16 h-16 text-accent mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-neutral-800 mb-2">Research</h3>
              <p className="text-3xl font-bold bg-gradient-to-r from-accent to-accent-dark bg-clip-text text-transparent mb-4">
                Coming Soon
              </p>
              <p className="text-neutral-600 max-w-md mx-auto">
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