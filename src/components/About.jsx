import React from 'react'
import { motion } from 'framer-motion'
import { Code, Zap, Heart, Globe } from 'lucide-react'

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const facts = [
    { icon: Globe, label: 'Location', value: 'San Fernando, Pampanga' },
    { icon: Zap, label: 'Education', value: 'BS in Accounting Information System' },
    { icon: Code, label: 'Focus', value: 'ERP Systems & Business Analytics' },
    { icon: Heart, label: 'Interest', value: 'Software Development' },
  ]

  const languages = [
    { name: 'English', level: 'Fluent' },
    { name: 'Filipino/Tagalog', level: 'Native' },
  ]

  return (
    <section id="about" className="py-20 bg-maroon-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-maroon-500/10 rounded-full filter blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold-500/10 rounded-full filter blur-3xl" />
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative"
      >
        <motion.h2
          variants={itemVariants}
          className="text-4xl sm:text-5xl font-bold text-white mb-12 text-center"
        >
          <span className="bg-gradient-to-r from-gold-400 to-gold-600 bg-clip-text text-transparent">
            About Me
          </span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
          <motion.div variants={itemVariants} className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm Chad, a BS in Accounting Information System student at Pampanga State University with a strong interest in ERP systems, business analytics, and software development. I enjoy building practical applications that solve real business problems while combining accounting knowledge with modern technology. My goal is to become a professional who bridges business processes and information systems.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-4">
            {facts.map((fact, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02, x: 10 }}
                className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6 flex items-center gap-4"
              >
                <div className="p-3 bg-gradient-to-br from-maroon-500 to-gold-500 rounded-lg">
                  <fact.icon className="text-white w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">{fact.label}</p>
                  <p className="text-gold-400 font-semibold">{fact.value}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Graduation Photos */}
        <motion.div variants={itemVariants} className="mb-12">
          <h3 className="text-2xl font-semibold text-white mb-6 text-center">
            <span className="bg-gradient-to-r from-gold-400 to-gold-600 bg-clip-text text-transparent">
              Graduation Moments
            </span>
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative group overflow-hidden rounded-2xl shadow-2xl"
            >
              <img
                src="https://goodyboyie2-byte.github.io/resume-2/graduation1.jpg"
                alt="Graduation Photo 1"
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                onError={(e) => { e.target.src = 'https://via.placeholder.com/400x300?text=Graduation+Photo+1'; }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-maroon-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="text-white font-semibold">Graduation Day</p>
              </div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative group overflow-hidden rounded-2xl shadow-2xl"
            >
              <img
                src="https://goodyboyie2-byte.github.io/resume-2/graduation2.jpg"
                alt="Graduation Photo 2"
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                onError={(e) => { e.target.src = 'https://via.placeholder.com/400x300?text=Graduation+Photo+2'; }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-maroon-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="text-white font-semibold">Achievement Celebration</p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Languages Section */}
        <motion.div variants={itemVariants}>
          <h3 className="text-2xl font-semibold text-white mb-6 text-center">
            <span className="bg-gradient-to-r from-gold-400 to-gold-600 bg-clip-text text-transparent">
              Languages
            </span>
          </h3>
          <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
            {languages.map((lang, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6 text-center hover:border-gold-500/50 transition-all duration-300"
              >
                <p className="text-gold-400 font-semibold text-lg mb-2">{lang.name}</p>
                <p className="text-gray-400 text-sm">{lang.level}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default About
