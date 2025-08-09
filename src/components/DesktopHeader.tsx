"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import Image from "next/image"
import { cn } from "@/lib/utils"

export default function DesktopHeader() {
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
        "fixed top-0 w-full z-50 transition-all duration-300 hidden md:block",
        scrolled
          ? "bg-white/80 backdrop-blur-lg border-b border-neutral-200"
          : "bg-transparent"
      )}
    >
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="md:mx-8 lg:mx-0">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center" style={{ marginLeft: '40px', gap: '12px' }}>
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
          <nav className="flex items-center" style={{ gap: '32px', marginRight: '60px' }}>
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
        </div>
        </div>
      </div>
    </header>
  )
}