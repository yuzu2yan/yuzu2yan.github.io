"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { IconMenu2, IconX } from "@tabler/icons-react"
import { cn } from "@/lib/utils"

export default function Header() {
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
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled
          ? "bg-white/80 backdrop-blur-lg border-b border-neutral-200"
          : "bg-transparent"
      )}
    >
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center" style={{ marginLeft: '16px', gap: '12px' }}>
              <Image
                src="/images/penguin.png"
                alt="Yuzu Logo"
                width={32}
                height={32}
                className="object-contain"
              />
              <span className="text-2xl font-medium text-black" style={{ fontFamily: 'sans-serif' }}>
                Yuzu
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center" style={{ gap: '32px', marginRight: '60px' }}>
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative text-lg font-medium text-neutral-600 hover:text-black transition-colors group"
                style={{ padding: '12px 16px' }}
              >
                <span className="relative z-10">{item.label}</span>
                <motion.span
                  className="absolute inset-0 bg-neutral-100 rounded-lg"
                  initial={{ scale: 0, opacity: 0 }}
                  whileHover={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.2 }}
                />
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-3 text-black hover:bg-neutral-100 rounded-lg transition-colors"
            style={{ marginRight: '16px' }}
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
                  <IconX size={32} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <IconMenu2 size={32} />
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
              className="fixed inset-0 bg-black/30 md:hidden z-40"
              onClick={() => setIsMenuOpen(false)}
            />
            
            {/* Drop-down Menu */}
            <motion.nav
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ type: 'spring', damping: 20, stiffness: 300 }}
              className="fixed top-20 right-4 h-auto w-32 bg-gradient-to-br from-cyan-50 via-white to-purple-50 shadow-2xl md:hidden z-50 rounded-3xl overflow-hidden border-2 border-cyan-100"
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