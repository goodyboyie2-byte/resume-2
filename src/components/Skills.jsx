import React from 'react'
import { motion } from 'framer-motion'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: '🎨',
      skills: ['React', 'Vue.js', 'TypeScript', 'TailwindCSS', 'HTML5', 'CSS3', 'Next.js'],
      color: 'from-maroon-500 to-gold-500',
    },
    {
      title: 'Backend',
      icon: '⚙️',
      skills: ['Node.js', 'Express', 'Python', 'Django', 'PostgreSQL', 'MongoDB', 'REST APIs'],
      color: 'from-maroon-600 to-gold-600',
    },
    {
      title: 'Tools & DevOps',
      icon: '🛠️',
      skills: ['Git', 'Docker', 'AWS', 'CI/CD', 'Jest', 'Webpack', 'Vite'],
      color: 'from-maroon-700 to-gold-700',
    },
    {
      title: 'Soft Skills',
      icon: '💡',
      skills: ['Problem Solving', 'Team Collaboration', 'Communication', 'Agile/Scrum', 'Mentoring'],
      color: 'from-maroon-800 to-gold-500',
    },
  ]

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
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  }

  return (
    <section id="skills" className="py-20 bg-maroon-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-maroon-500/10 rounded-full filter blur-3xl" />
        <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-gold-500/10 rounded-full filter blur-3xl" />
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
            Skills & Technologies
          </span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.03, y: -5 }}
              className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 hover:border-gold-500/50 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`p-3 bg-gradient-to-br ${category.color} rounded-xl`}>
                  <span className="text-2xl">{category.icon}</span>
                </div>
                <h3 className="text-xl font-semibold text-white">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <motion.span
                    key={idx}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white/10 text-gray-300 px-3 py-1.5 rounded-full text-sm font-medium border border-white/20 hover:bg-white/20 transition-colors cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Skills
