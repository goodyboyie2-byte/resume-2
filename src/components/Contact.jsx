import React from 'react'
import { Mail, Linkedin, Github, MapPin } from 'lucide-react'

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 text-center">
          Get In Touch
        </h2>
        
        <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          I'm currently open to new opportunities and would love to hear from you. 
          Whether you have a question or just want to say hi, feel free to reach out!
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-shadow duration-200">
            <Mail className="mx-auto mb-4 text-primary" size={32} />
            <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
            <a
              href="mailto:your.email@example.com"
              className="text-gray-600 hover:text-primary transition-colors duration-200"
            >
              your.email@example.com
            </a>
          </div>

          <div className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-shadow duration-200">
            <Linkedin className="mx-auto mb-4 text-primary" size={32} />
            <h3 className="font-semibold text-gray-900 mb-2">LinkedIn</h3>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-primary transition-colors duration-200"
            >
              Connect with me
            </a>
          </div>

          <div className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-shadow duration-200">
            <Github className="mx-auto mb-4 text-primary" size={32} />
            <h3 className="font-semibold text-gray-900 mb-2">GitHub</h3>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-primary transition-colors duration-200"
            >
              View my work
            </a>
          </div>
        </div>

        <div className="bg-white rounded-xl p-8 shadow-md max-w-2xl mx-auto">
          <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">
            Send a Message
          </h3>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all duration-200"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all duration-200"
                placeholder="your.email@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all duration-200 resize-none"
                placeholder="Your message..."
              />
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-secondary transition-colors duration-200 shadow-md"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
