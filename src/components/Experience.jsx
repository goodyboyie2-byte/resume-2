import React from 'react'
import { motion } from 'framer-motion'
import { Briefcase, Calendar, MapPin, ArrowRight } from 'lucide-react'

const Experience = () => {
  const experiences = [
    {
      title: 'Senior Full Stack Developer',
      company: 'Company Name',
      location: 'City, Country',
      period: '2022 - Present',
      description: [
        'Led development of microservices architecture serving 1M+ users',
        'Mentored junior developers and conducted code reviews',
        'Implemented CI/CD pipelines reducing deployment time by 60%',
        'Optimized database queries improving performance by 40%',
      ],
    },
    {
      title: 'Full Stack Developer',
      company: 'Previous Company',
      location: 'City, Country',
      period: '2020 - 2022',
      description: [
        'Developed and maintained RESTful APIs using Node.js and Express',
        'Built responsive front-end interfaces with React and TypeScript',
        'Collaborated with design team to implement pixel-perfect UIs',
        'Integrated third-party services including payment gateways and authentication',
      ],
    },
    {
      title: 'Junior Developer',
      company: 'First Company',
      location: 'City, Country',
      period: '2018 - 2020',
      description: [
        'Assisted in developing web applications using JavaScript frameworks',
        'Participated in agile development processes and sprint planning',
        'Wrote unit and integration tests ensuring code quality',
        'Fixed bugs and implemented new features based on user feedback',
      ],
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
    <section id="experience" className="py-20 bg-slate-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl" />
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
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Work Experience
          </span>
        </motion.h2>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-300 group"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg">
                      <Briefcase className="text-white w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
                  </div>
                  <p className="text-purple-400 font-medium ml-11">{exp.company}</p>
                </div>
                <div className="flex items-center text-gray-400 mt-4 sm:mt-0 ml-11 sm:ml-0">
                  <Calendar size={16} className="mr-2" />
                  <span className="text-sm">{exp.period}</span>
                </div>
              </div>

              <div className="flex items-center text-gray-400 mb-6 ml-11">
                <MapPin size={16} className="mr-2" />
                <span className="text-sm">{exp.location}</span>
              </div>

              <ul className="space-y-3 ml-11">
                {exp.description.map((item, idx) => (
                  <li key={idx} className="flex items-start text-gray-300">
                    <span className="text-purple-400 mr-3 mt-1">▹</span>
                    <span className="text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>

              <motion.div
                initial={{ opacity: 0, x: -10 }}
                whileHover={{ opacity: 1, x: 0 }}
                className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <ArrowRight className="text-purple-400 w-5 h-5" />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Experience
