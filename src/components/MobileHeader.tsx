"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { IconMenu2, IconX } from "@tabler/icons-react"
import { cn } from "@/lib/utils"

export default function MobileHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { href: "#profile", label: "Profile" },
    { href: "#about", label: "Skills" },
    { href: "#research", label: "Research" },
    { href: "#works", label: "Projects" },
  ]

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 md:hidden",
        scrolled
          ? "bg-white/80 backdrop-blur-lg border-b border-neutral-200"
          : "bg-transparent"
      )}
    >
      <div className="w-full px-4 sm:px-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center ml-2" style={{ gap: '8px' }}>
              <Image
                src="/images/penguin.png"
                alt="Yuzu Logo"
                width={28}
                height={28}
                className="object-contain"
              />
              <span className="text-xl font-medium text-black" style={{ fontFamily: 'sans-serif' }}>
                Yuzu
              </span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-3 text-black hover:bg-neutral-100 rounded-lg transition-colors mr-2"
          >
            <AnimatePresence mode="wait">
              {isMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <IconX size={24} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <IconMenu2 size={24} />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* Mobile Navigation - Below hamburger */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/30 z-40"
              onClick={() => setIsMenuOpen(false)}
            />
            
            {/* Drop-down Menu */}
            <motion.nav
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ type: 'spring', damping: 20, stiffness: 300 }}
              className="fixed top-20 right-4 h-auto w-32 bg-gradient-to-br from-cyan-50 via-white to-purple-50 shadow-2xl z-50 rounded-3xl overflow-hidden border-2 border-cyan-100"
            >
              <div style={{ paddingTop: '20px', paddingBottom: '20px', paddingLeft: '12px', paddingRight: '12px' }}>
                {/* Navigation items */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="block text-lg font-semibold text-neutral-700 hover:text-black hover:bg-white/70 rounded-xl transition-all text-center"
                      style={{ paddingTop: '8px', paddingBottom: '8px', paddingLeft: '4px', paddingRight: '4px' }}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}