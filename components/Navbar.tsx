'use client'
import React from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import Image from 'next/image'

const navItems = [
  { name: 'Gradient Week', href: '/events' },
  { name: 'Core Team', href: '/team' },
  { name: 'Event Gallery', href: '/gallery' },
  { name: 'Dept. of ML', href: '/department-work' },
  { name: 'Let\'s Connect', href: '/connect' },
  { name: 'About', href: '/about' }
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [scrolled])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 bg-gray-900/80 ${scrolled
          ? 'backdrop-blur-md shadow-lg shadow-purple-900/20'
          : 'backdrop-blur-sm'
        } border-b ${scrolled ? 'border-purple-900/30' : 'border-white/10'}`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center py-3">
          <Link
            href="/"
            className="flex items-center space-x-3 flex-shrink-0 group transition-all duration-300"
          >
            <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center overflow-hidden">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Image
                  src="/Logo.png"
                  alt="Gradient Logo"
                  width={92}
                  height={92}
                  className="object-contain"
                  priority
                />
              </motion.div>
            </div>
            <span className="text-2xl md:text-3xl lg:text-4xl font-bold text-white group-hover:text-purple-400 transition-colors duration-300">
              <motion.span
                initial={{ opacity: 1 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
              >
                Gradient
              </motion.span>
            </span>
          </Link>

          <div className="flex-grow"></div>

          <nav className="hidden xl:flex items-center justify-center">
            <ul className="flex items-center">
              {navItems.map((item, index) => (
                <React.Fragment key={item.name}>
                  {index > 0 && (
                    <div className="h-6 w-px bg-gradient-to-b from-purple-400/10 via-white/30 to-purple-400/10 mx-5"></div>
                  )}
                  <motion.li
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <Link
                      href={item.href}
                      className="relative text-white text-lg hover:text-purple-400 transition-all duration-300 font-medium text-center w-32 block py-2 group"
                    >
                      {item.name}
                      <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-500 group-hover:w-full transition-all duration-300 transform -translate-x-1/2"></span>
                    </Link>
                  </motion.li>
                </React.Fragment>
              ))}
            </ul>
          </nav>

          <div className="xl:hidden flex items-center ml-auto">
            <motion.button
              whileTap={{ scale: 0.95 }}
              className="text-white focus:outline-none"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {!isOpen ? (
                <svg
                  className="w-8 h-8"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              ) : (
                <svg
                  className="w-8 h-8"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </motion.button>

          </div>
        </div>
      </div>

      {/* Mobile menu - this is what was missing */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="xl:hidden bg-gray-900/95 backdrop-blur-md border-t border-purple-900/30"
          >
            <nav className="container mx-auto px-4 py-4">
              <ul className="flex flex-col space-y-3">
                {navItems.map((item) => (
                  <motion.li
                    key={item.name}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2 }}
                    className="w-full"
                  >
                    <Link
                      href={item.href}
                      className="text-white hover:text-purple-400 transition-colors duration-300 font-medium text-lg block py-2 px-3 rounded-lg hover:bg-purple-900/20"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                    <div className="h-px w-full bg-gradient-to-r from-transparent via-purple-500/20 to-transparent mt-2"></div>
                  </motion.li>
                ))}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}