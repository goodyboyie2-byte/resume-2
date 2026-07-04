import React from 'react'
import { motion } from 'framer-motion'
import { Mail, Linkedin, Facebook, Phone, Send } from 'lucide-react'

const Contact = () => {
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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const contacts = [
    {
      icon: Mail,
      label: 'Email',
      value: 'richard.p.budlong@gmail.com',
      href: 'mailto:richard.p.budlong@gmail.com',
      color: 'from-maroon-500 to-gold-500',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Richard Budlong',
      href: 'https://linkedin.com/in/richard-budlong',
      color: 'from-maroon-600 to-gold-600',
    },
    {
      icon: Facebook,
      label: 'Facebook',
      value: 'Richard Budlong',
      href: 'https://facebook.com/richard.budlong',
      color: 'from-maroon-700 to-gold-700',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '09266486033',
      href: 'tel:09266486033',
      color: 'from-maroon-800 to-gold-500',
    },
  ]

  return (
    <section id="contact" className="py-20 bg-maroon-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-maroon-500/10 rounded-full filter blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gold-500/10 rounded-full filter blur-3xl" />
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
          className="text-4xl sm:text-5xl font-bold text-white mb-4 text-center"
        >
          <span className="bg-gradient-to-r from-gold-400 to-gold-600 bg-clip-text text-transparent">
            Get In Touch
          </span>
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="text-lg text-gray-400 text-center mb-12 max-w-2xl mx-auto"
        >
          I'm currently open to new opportunities and would love to hear from you. 
          Whether you have a question or just want to say hi, feel free to reach out!
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contacts.map((contact, index) => (
            <motion.a
              key={index}
              variants={itemVariants}
              href={contact.href}
              target={contact.href.startsWith('http') ? '_blank' : undefined}
              rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 text-center hover:border-gold-500/50 transition-all duration-300 group"
            >
              <div className={`p-4 bg-gradient-to-br ${contact.color} rounded-2xl mx-auto mb-4 w-fit`}>
                <contact.icon className="text-white w-6 h-6" />
              </div>
              <h3 className="font-semibold text-white mb-2">{contact.label}</h3>
              <p className="text-gray-400 text-sm group-hover:text-gold-400 transition-colors">
                {contact.value}
              </p>
            </motion.a>
          ))}
        </div>

        <motion.div
          variants={itemVariants}
          className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 max-w-2xl mx-auto"
        >
          <h3 className="text-2xl font-semibold text-white mb-6 text-center">
            Send a Message
          </h3>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent outline-none transition-all duration-200 text-white placeholder-gray-500"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent outline-none transition-all duration-200 text-white placeholder-gray-500"
                placeholder="your.email@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all duration-200 resize-none text-white placeholder-gray-500"
                placeholder="Your message..."
              />
            </div>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-gradient-to-r from-maroon-500 to-gold-500 text-white py-3 rounded-lg font-semibold shadow-lg shadow-maroon-500/50 hover:shadow-maroon-500/70 transition-all duration-200 flex items-center justify-center gap-2"
            >
              <Send size={20} />
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Contact
