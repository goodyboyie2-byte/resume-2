import React from 'react'
import { motion } from 'framer-motion'
import { GraduationCap, Calendar, Award, ArrowRight } from 'lucide-react'

const Experience = () => {
  const education = [
    {
      level: 'Tertiary Education',
      degree: 'BS in Accounting Information System',
      institution: 'Pampanga State University',
      period: '2024 – Present',
      description: [
        'Currently pursuing a degree in Accounting Information System.',
        'Shifted from BS in Accountancy in 2024.',
      ],
    },
    {
      level: 'Tertiary Education (Previous)',
      degree: 'BS in Accountancy',
      institution: 'Pampanga State University',
      period: '2022 – 2024',
      description: [
        'Studied BS in Accountancy from 2022–2024.',
        'Built a strong foundation in accounting principles before shifting to AIS.',
      ],
    },
    {
      level: 'Senior High School',
      degree: 'HUMSS Strand',
      institution: 'Pampanga High School',
      period: '2020 – 2022',
      description: [
        'Graduated with Honors.',
      ],
    },
    {
      level: 'Junior High School',
      degree: 'Junior High School',
      institution: 'Pampanga High School',
      period: '2016 – 2020',
      description: [
        'Completed Junior High School at Pampanga High School.',
      ],
    },
    {
      level: 'Elementary',
      degree: 'Elementary',
      institution: 'Camp Olivas Elementary School',
      period: '2010 – 2016',
      description: [
        'Completed Elementary Education at Camp Olivas Elementary School.',
      ],
    },
  ]

  const achievements = [
    {
      title: 'ERP Thesis',
      period: '2025-2026',
      description: 'Lead Researcher. Focuses on how ERP absorptive capacity affects employee job efficiency.',
    },
    {
      title: 'Software Scheduling Platform',
      period: '2023-2024',
      description: 'Led a team in designing and developing a scheduling system. Awarded Best Project (2023–2024).',
    },
    {
      title: 'Monkey Munchies',
      period: '2023-2024',
      description: 'Led the feasibility study and business planning. Conducted market and financial analysis.',
    },
    {
      title: '2nd Year Representative',
      period: '2023-2024',
      description: 'College of Business Studies Student Council',
    },
    {
      title: '2nd Year Representative',
      period: '2023-2024',
      description: 'Junior Philippine Institute of Accountants (JPIA)',
    },
    {
      title: 'Graduated with Honors',
      period: '2020-2022',
      description: 'Senior High School',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="academics" className="py-20 bg-maroon-900 relative overflow-hidden">
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
            Academics
          </span>
        </motion.h2>

        <div className="space-y-6 mb-16">
          {education.map((edu, index) => (
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
                      <GraduationCap className="text-white w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">{edu.level}</h3>
                  </div>
                  <p className="text-gold-400 font-medium ml-11">{edu.degree}</p>
                  <p className="text-gray-300 text-sm ml-11 mt-1">{edu.institution}</p>
                </div>
                <div className="flex items-center text-gray-400 mt-4 sm:mt-0 ml-11 sm:ml-0">
                  <Calendar size={16} className="mr-2" />
                  <span className="text-sm">{edu.period}</span>
                </div>
              </div>

              <ul className="space-y-3 ml-11">
                {edu.description.map((item, idx) => (
                  <li key={idx} className="flex items-start text-gray-300">
                    <span className="text-gold-400 mr-3 mt-1">▹</span>
                    <span className="text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>

              <motion.div
                initial={{ opacity: 0, x: -10 }}
                whileHover={{ opacity: 1, x: 0 }}
                className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <ArrowRight className="text-gold-400 w-5 h-5" />
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.h2
          variants={itemVariants}
          className="text-4xl sm:text-5xl font-bold text-white mb-12 text-center"
        >
          <span className="bg-gradient-to-r from-gold-400 to-gold-600 bg-clip-text text-transparent">
            Achievements
          </span>
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 hover:border-gold-500/50 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-gradient-to-br from-maroon-500 to-gold-500 rounded-xl">
                  <Award className="text-white w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">{achievement.title}</h3>
                  <p className="text-gold-400 text-xs">{achievement.period}</p>
                </div>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">{achievement.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Experience
