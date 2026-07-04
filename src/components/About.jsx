import React from 'react'

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 text-center">
          About Me
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-gray-600 mb-6">
              I'm a passionate full-stack developer with expertise in building modern web applications. 
              With a strong foundation in both front-end and back-end technologies, I create seamless 
              user experiences that are both beautiful and functional.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              My journey in software development started with a curiosity about how things work on the web. 
              Since then, I've worked on various projects, from small business websites to complex enterprise 
              applications, always focusing on clean code and best practices.
            </p>
            <p className="text-lg text-gray-600">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source 
              projects, or sharing knowledge with the developer community.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8 shadow-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Quick Facts</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-primary mr-3">•</span>
                <span className="text-gray-700"><strong>Location:</strong> Your City, Country</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3">•</span>
                <span className="text-gray-700"><strong>Experience:</strong> X+ Years in Software Development</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3">•</span>
                <span className="text-gray-700"><strong>Education:</strong> Your Degree, University Name</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3">•</span>
                <span className="text-gray-700"><strong>Focus:</strong> Full-Stack Web Development</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3">•</span>
                <span className="text-gray-700"><strong>Languages:</strong> JavaScript, Python, TypeScript</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
