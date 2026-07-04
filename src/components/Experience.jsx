import React from 'react'
import { Briefcase, Calendar, MapPin } from 'lucide-react'

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

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center">
          Work Experience
        </h2>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-200"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{exp.title}</h3>
                  <p className="text-primary font-medium">{exp.company}</p>
                </div>
                <div className="flex items-center text-gray-500 mt-2 sm:mt-0">
                  <Calendar size={16} className="mr-2" />
                  <span>{exp.period}</span>
                </div>
              </div>
              
              <div className="flex items-center text-gray-500 mb-4">
                <MapPin size={16} className="mr-2" />
                <span>{exp.location}</span>
              </div>
              
              <ul className="space-y-2">
                {exp.description.map((item, idx) => (
                  <li key={idx} className="flex items-start text-gray-600">
                    <span className="text-primary mr-3 mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
