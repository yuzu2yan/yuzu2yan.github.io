"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Mail, Github, Linkedin, ChevronUp, Heart } from "lucide-react"

const socialLinks = [
  {
    href: "mailto:al21017@shibaura-it.ac.jp",
    icon: Mail,
    label: "Email",
    color: "hover:bg-red-500"
  },
  {
    href: "https://www.linkedin.com/in/joe-kohzen-2626872b6",
    icon: Linkedin,
    label: "LinkedIn",
    color: "hover:bg-blue-600"
  },
  {
    href: "https://github.com/yuzu2yan",
    icon: Github,
    label: "GitHub",
    color: "hover:bg-gray-800"
  },
]

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer id="contact" className="relative bg-gradient-to-b from-white to-neutral-50 pt-16 sm:pt-20 md:pt-24 pb-8 sm:pb-12 overflow-hidden">
      {/* Geometric decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent"></div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary-100/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative w-full px-4 sm:px-6 lg:px-8">
        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            <span className="bg-gradient-to-r from-accent to-accent-dark bg-clip-text text-transparent">
              Let's Connect
            </span>
          </h3>
          <p className="text-sm sm:text-base text-neutral-600 mb-8 max-w-2xl mx-auto px-4">
            Feel free to reach out for collaborations, opportunities, or just a friendly chat about technology and innovation.
          </p>
          
          {/* Social Links */}
          <div className="flex justify-center space-x-4 mb-12">
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.href}
                href={link.href}
                target={link.href.startsWith('mailto') ? undefined : "_blank"}
                rel={link.href.startsWith('mailto') ? undefined : "noopener noreferrer"}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 200
                }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-accent/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className={`relative w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-xl sm:rounded-2xl shadow-lg flex items-center justify-center transition-all duration-300 group-hover:shadow-xl ${link.color} group-hover:text-white`}>
                  <link.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs font-medium text-neutral-600 opacity-0 group-hover:opacity-100 transition-opacity">
                  {link.label}
                </span>
              </motion.a>
            ))}
            
            {/* Qiita Link */}
            <motion.a
              href="https://qiita.com/Yuzu2yan"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.5, 
                delay: 0.3,
                type: "spring",
                stiffness: 200
              }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-accent/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-xl sm:rounded-2xl shadow-lg flex items-center justify-center transition-all duration-300 group-hover:shadow-xl hover:bg-green-500">
                <Image
                  src="/images/qiita.png"
                  alt="Qiita"
                  width={28}
                  height={28}
                  className="w-6 h-6 sm:w-7 sm:h-7"
                />
              </div>
              <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs font-medium text-neutral-600 opacity-0 group-hover:opacity-100 transition-opacity">
                Qiita
              </span>
            </motion.a>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="relative mb-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-neutral-200"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="bg-neutral-50 px-4">
              <Heart className="w-5 h-5 text-accent animate-pulse-slow" />
            </span>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex items-center mb-4 md:mb-0"
          >
            <Image
              src="/images/penguin.png"
              alt="Penguin"
              width={40}
              height={40}
              className="mr-3"
            />
            <div className="text-left">
              <p className="text-sm sm:text-base text-neutral-700 font-medium">Created with passion by Yuzu</p>
              <p className="text-xs sm:text-sm text-neutral-500">© 2025 All rights reserved</p>
            </div>
          </motion.div>

          {/* Back to Top Button */}
          <motion.button
            onClick={scrollToTop}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="group flex items-center px-4 sm:px-6 py-2.5 sm:py-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-sm sm:text-base"
          >
            <span className="text-neutral-700 font-medium mr-2">Back to Top</span>
            <div className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-all duration-300">
              <ChevronUp size={18} />
            </div>
          </motion.button>
        </div>
      </div>
    </footer>
  )
}