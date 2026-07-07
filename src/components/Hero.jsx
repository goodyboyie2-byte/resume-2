import React from 'react'
import { Github, Linkedin, Mail, ArrowDown, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'
import profileImage from '/profile.jpg?url'

const Hero = () => {
  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      rotate: [0, 5, 0],
    },
  }

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="home" className="min-h-screen relative overflow-hidden bg-gradient-to-br from-maroon-900 via-maroon-800 to-maroon-900 pt-16">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-maroon-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 100, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute top-40 right-10 w-72 h-72 bg-gold-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, -100, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute bottom-20 left-1/2 w-96 h-96 bg-maroon-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          animate={{
            scale: [1, 1.3, 1],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTTYwIDBMMCAwIDAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex flex-col justify-center items-center text-center">
        {/* Animated avatar */}
        <motion.div
          variants={floatingVariants}
          animate="animate"
          transition={{
            duration: 6,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="mb-12 relative"
        >
          <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-br from-maroon-500 via-maroon-600 to-gold-500 p-1 shadow-2xl">
            <img 
              src="./profile.jpg" 
              alt="Richard Budlong" 
              className="w-full h-full rounded-full object-cover"
            />
          </div>
          <motion.div
            className="absolute -top-4 -right-4"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <Sparkles className="text-gold-400 w-8 h-8" />
          </motion.div>
        </motion.div>

        {/* Animated text */}
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={textVariants}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6"
        >
          <span className="bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 bg-clip-text text-transparent">
            RICHARD PALIS BUDLONG
          </span>
        </motion.h1>

        <motion.p
          initial="hidden"
          animate="visible"
          variants={textVariants}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl sm:text-2xl text-gray-300 mb-4"
        >
          BS in Accounting Information System
        </motion.p>

        <motion.p
          initial="hidden"
          animate="visible"
          variants={textVariants}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto"
        >
          Aspiring Accountant / Detail-Oriented. Data Driven. Dependable.
        </motion.p>

        {/* Animated buttons */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={textVariants}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row justify-center gap-4 mb-12"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 rounded-full font-semibold bg-gradient-to-r from-maroon-500 to-gold-500 text-white shadow-lg shadow-maroon-500/50"
          >
            Get In Touch
          </motion.a>
          <motion.a
            href="#experience"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 rounded-full font-semibold border-2 border-gold-500 text-gold-400 hover:bg-gold-500/10 transition-colors"
          >
            View Work
          </motion.a>
        </motion.div>

        {/* Social links with hover effects */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={textVariants}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex justify-center space-x-8"
        >
          {[
            { icon: Github, href: "https://github.com/yourusername", label: "GitHub" },
            { icon: Linkedin, href: "https://linkedin.com/in/yourusername", label: "LinkedIn" },
            { icon: Mail, href: "mailto:your.email@example.com", label: "Email" },
          ].map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="text-gray-400 hover:text-gold-400 transition-colors"
            >
              <social.icon size={32} />
            </motion.a>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={textVariants}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-gray-400"
          >
            <ArrowDown size={32} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
