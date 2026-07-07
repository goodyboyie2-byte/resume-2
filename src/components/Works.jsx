import React from 'react'
import { motion } from 'framer-motion'
import { Briefcase, Calendar, ExternalLink } from 'lucide-react'

const Works = () => {
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
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  }

  const workExperiences = [
    {
      title: 'No formal work experience yet',
      company: 'Currently pursuing education',
      period: '2024 - Present',
      description: [
        'Focusing on academic studies in Accounting Information System',
        'Building practical skills through projects and academic achievements',
        'Preparing for future professional opportunities',
      ],
    },
  ]

  return (
    <section id="works" className="py-20 bg-maroon-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-maroon-500/10 rounded-full filter blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gold-500/10 rounded-full filter blur-3xl" />
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
            Work Experience
          </span>
        </motion.h2>

        <div className="space-y-6">
          {workExperiences.map((work, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 hover:border-gold-500/50 transition-all duration-300 group"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-gradient-to-br from-maroon-500 to-gold-500 rounded-lg">
                      <Briefcase className="text-white w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">{work.title}</h3>
                  </div>
                  <p className="text-gold-400 font-medium ml-11">{work.company}</p>
                </div>
                <div className="flex items-center text-gray-400 mt-4 sm:mt-0 ml-11 sm:ml-0">
                  <Calendar size={16} className="mr-2" />
                  <span className="text-sm">{work.period}</span>
                </div>
              </div>

              <ul className="space-y-3 ml-11">
                {work.description.map((item, idx) => (
                  <li key={idx} className="flex items-start text-gray-300">
                    <span className="text-gold-400 mr-3 mt-1">▹</span>
                    <span className="text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Works
