"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { IconMail, IconBrandGithub, IconBrandLinkedin, IconArrowUp, IconHeart } from "@tabler/icons-react"
import { cn } from "@/lib/utils"

const socialLinks = [
  {
    href: "mailto:al21017@shibaura-it.ac.jp",
    icon: IconMail,
    label: "Email",
    color: "hover:text-red-500"
  },
  {
    href: "https://www.linkedin.com/in/joe-kohzen-2626872b6",
    icon: IconBrandLinkedin,
    label: "LinkedIn",
    color: "hover:text-blue-600"
  },
  {
    href: "https://github.com/yuzu2yan",
    icon: IconBrandGithub,
    label: "GitHub",
    color: "hover:text-gray-800"
  },
]

export default function DesktopFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer id="contact" className="relative bg-black text-white overflow-hidden py-20 hidden md:block">
      {/* Background layers */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50" />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col items-center gap-4">
            {/* Spacer div */}
            <div className="h-4 md:h-6"></div>
            
            {/* Header section */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h1 className="text-2xl md:text-3xl font-bold text-white">
                Contact.
              </h1>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex justify-center items-center gap-4">
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
                className={cn(
                  "relative group p-5 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 transition-all hover:bg-white/10 hover:border-cyan-500/50",
                  link.color
                )}
              >
                <link.icon className="w-8 h-8" />
                <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-neutral-500 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
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
              className="relative group p-5 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 transition-all hover:bg-white/10 hover:border-cyan-500/50 hover:text-green-500"
            >
              <Image
                src="/images/qiita.png"
                alt="Qiita"
                width={32}
                height={32}
                className="w-8 h-8"
              />
              <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-neutral-500 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                Qiita
              </span>
            </motion.a>
            </motion.div>

            {/* Bottom Section */}
            <div className="mt-16 w-full">
              <div className="flex flex-col md:flex-row justify-between items-center gap-6 relative" style={{ paddingRight: '40px' }}>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3"
                  style={{ marginLeft: '20px' }}
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-cyan-500 blur-md opacity-50"></div>
                    <div className="relative w-10 h-10 bg-black rounded-lg flex items-center justify-center">
                      <IconHeart className="w-5 h-5 text-cyan-400" />
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-neutral-300">Created by Yuzu</p>
                  </div>
                </motion.div>

                {/* Back to Top Button */}
                <motion.button
                  onClick={scrollToTop}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -2 }}
                  className="group flex items-center gap-2 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:bg-white/10 hover:border-cyan-500/50 transition-all absolute"
                  style={{ padding: '10px 20px', top: '-50px', right: '20px' }}
                >
                  <span className="text-sm text-neutral-300 group-hover:text-cyan-400 transition-colors">Back to Top</span>
                  <div className="w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center group-hover:bg-cyan-500/30 transition-colors">
                    <IconArrowUp className="w-4 h-4 text-cyan-400" />
                  </div>
                </motion.button>
              </div>
            </div>
          </div>
        </div>
    </footer>
  )
}