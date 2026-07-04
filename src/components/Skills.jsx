import React from 'react'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: ['React', 'Vue.js', 'TypeScript', 'TailwindCSS', 'HTML5', 'CSS3', 'Next.js'],
    },
    {
      title: 'Backend',
      skills: ['Node.js', 'Express', 'Python', 'Django', 'PostgreSQL', 'MongoDB', 'REST APIs'],
    },
    {
      title: 'Tools & DevOps',
      skills: ['Git', 'Docker', 'AWS', 'CI/CD', 'Jest', 'Webpack', 'Vite'],
    },
    {
      title: 'Soft Skills',
      skills: ['Problem Solving', 'Team Collaboration', 'Communication', 'Agile/Scrum', 'Mentoring'],
    },
  ]

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center">
          Skills & Technologies
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl p-6 shadow-md"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="bg-white text-gray-700 px-4 py-2 rounded-full text-sm font-medium shadow-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
