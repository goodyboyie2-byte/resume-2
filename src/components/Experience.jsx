import React from 'react'
import { motion } from 'framer-motion'
import { GraduationCap, Calendar, Award, ArrowRight } from 'lucide-react'

const Experience = () => {
  const education = [
    {
      level: 'Tertiary Education',
      degree: 'Bachelor of Science in Accounting Information System',
      institution: 'Pampanga State University',
      period: '2020 - Present',
      description: [
        'Specializing in accounting principles and information systems',
        'Learning financial management and data analysis',
        'Developing skills in accounting software and database management',
      ],
    },
    {
      level: 'Senior High School',
      degree: 'Accountancy, Business and Management (ABM) Strand',
      institution: 'Your Senior High School Name',
      period: '2018 - 2020',
      description: [
        'Focused on business and accounting fundamentals',
        'Developed analytical and problem-solving skills',
        'Participated in business-related activities and projects',
      ],
    },
    {
      level: 'Secondary Education',
      degree: 'Junior High School',
      institution: 'Your High School Name',
      period: '2014 - 2018',
      description: [
        'Completed basic education with good academic standing',
        'Active in school activities and organizations',
        'Developed strong foundation in core subjects',
      ],
    },
    {
      level: 'Primary Education',
      degree: 'Elementary',
      institution: 'Your Elementary School Name',
      period: '2008 - 2014',
      description: [
        'Completed primary education with honors',
        'Developed basic literacy and numeracy skills',
        'Active in co-curricular activities',
      ],
    },
  ]

  const achievements = [
    {
      title: 'Academic Excellence',
      description: 'Consistently maintained good academic standing throughout college',
    },
    {
      title: 'Leadership',
      description: 'Active participation in student organizations and activities',
    },
    {
      title: 'Technical Skills',
      description: 'Proficient in accounting software and information systems',
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
    <section id="experience" className="py-20 bg-maroon-900 relative overflow-hidden">
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
            Academic Background
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

        <div className="grid md:grid-cols-3 gap-6">
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
                <h3 className="text-lg font-semibold text-white">{achievement.title}</h3>
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
