import React from 'react'
import { Github, Linkedin, Mail, Download } from 'lucide-react'

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 pt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <div className="w-40 h-40 mx-auto rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white text-5xl font-bold shadow-lg">
            YN
          </div>
        </div>
        
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
          Your Name
        </h1>
        
        <p className="text-xl sm:text-2xl text-gray-600 mb-6">
          Full Stack Developer | UI/UX Enthusiast | Problem Solver
        </p>
        
        <p className="text-lg text-gray-500 mb-8 max-w-2xl mx-auto">
          Passionate about building beautiful, functional, and user-centered digital experiences. 
          Turning complex problems into simple, elegant solutions.
        </p>

        <div className="flex justify-center space-x-4 mb-8">
          <a
            href="#contact"
            className="bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-secondary transition-colors duration-200 shadow-md"
          >
            Get In Touch
          </a>
          <a
            href="#experience"
            className="border-2 border-primary text-primary px-8 py-3 rounded-full font-semibold hover:bg-primary hover:text-white transition-colors duration-200"
          >
            View Work
          </a>
        </div>

        <div className="flex justify-center space-x-6">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-primary transition-colors duration-200"
          >
            <Github size={28} />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-primary transition-colors duration-200"
          >
            <Linkedin size={28} />
          </a>
          <a
            href="mailto:your.email@example.com"
            className="text-gray-600 hover:text-primary transition-colors duration-200"
          >
            <Mail size={28} />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
