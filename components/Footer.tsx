'use client'
import { motion } from 'framer-motion'
import { Twitter, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react'
import Link from 'next/link'

const Footer = () => {
  const quickLinks = [    
    { name: "Gradient Week", href: "/events" },
    { name: "Core Team", href: "/team" },    
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },        
    { name: "Connect", href: "/connect" },
    { name: "Event Gallery", href: "/gallery" },
    { name: "Department of Machine Learning", href: "/department-work" }    
  ]

  const socialLinks = [    
    { icon: Instagram, href: "https://instagram.com/gradient.aiml", label: "Instagram" },
    { icon: Linkedin, href: "https://linkedin.com/company/gradient-club", label: "LinkedIn" }
  ]

  return (
    <footer className="relative bg-gradient-to-b from-black to-gray-900 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/10 via-transparent to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">
              Gradient
            </h3>
            <p className="text-gray-300 mb-6">
              Intelligence Redefined
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-lg font-semibold mb-6 text-purple-400">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-gray-300 hover:text-purple-400 transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold mb-6 text-purple-400">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-purple-400" />
                <span className="text-gray-300">gradient.mel@bmsce.ac.in</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-purple-400" />
                <span className="text-gray-300">BMSCE, Bengaluru</span>
              </div>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-lg font-semibold mb-6 text-purple-400">Follow Us</h3>
            <div className="flex space-x-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-purple-900/30 text-purple-400 hover:bg-purple-900/50 transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="border-t border-purple-500/10 mt-12 pt-8 text-center text-gray-400"
        >
          <p>&copy; {new Date().getFullYear()} Gradient BMSCE. All rights reserved.</p>
          <p className="mt-2">
            Designed, Built and Managed by{" "}
            <Link 
              href="https://beyondmebtw.com/" 
              target="_blank" 
              className="text-purple-400 hover:underline"
            >
              Pranav Veeraghanta
            </Link> (Tech Head) and{" "}
            <Link 
              href="https://vinayyele.live" 
              target="_blank" 
              className="text-purple-400 hover:underline"
            >
              Vinay Yele
            </Link> (Design Head) at Gradient.
          </p>
          {/* Source Code Link */}
          <p className="mt-2">
            Check out the source code on{" "}
            <Link 
              href="https://github.com/Vinay-yele/Gradient-Website" 
              target="_blank" 
              className="text-purple-400 hover:underline"
            >
              GitHub
            </Link>.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
