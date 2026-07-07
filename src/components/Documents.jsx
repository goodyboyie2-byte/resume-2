import React from 'react'
import { motion } from 'framer-motion'
import { FileText, Download, ExternalLink } from 'lucide-react'

const Documents = () => {
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
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  }

  const documents = [
    {
      title: 'Resume/CV',
      description: 'Current professional resume with academic background and achievements',
      icon: FileText,
      status: 'Available upon request',
    },
    {
      title: 'Academic Transcripts',
      description: 'Official academic records from Pampanga State University',
      icon: FileText,
      status: 'Available upon request',
    },
    {
      title: 'Certificates',
      description: 'Recognition certificates, awards, and achievement documents',
      icon: FileText,
      status: 'Available upon request',
    },
    {
      title: 'Training Certificates',
      description: 'Professional development and training completion certificates',
      icon: FileText,
      status: 'Available upon request',
    },
  ]

  return (
    <section id="documents" className="py-20 bg-maroon-900 relative overflow-hidden">
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
          className="text-4xl sm:text-5xl font-bold text-white mb-4 text-center"
        >
          <span className="bg-gradient-to-r from-gold-400 to-gold-600 bg-clip-text text-transparent">
            Supporting Documents
          </span>
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="text-lg text-gray-400 text-center mb-12 max-w-2xl mx-auto"
        >
          Certificates, credentials, and other relevant documents are available upon request.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-6">
          {documents.map((doc, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.03, y: -5 }}
              className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 hover:border-gold-500/50 transition-all duration-300"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-gradient-to-br from-maroon-500 to-gold-500 rounded-xl">
                  <doc.icon className="text-white w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white mb-2">{doc.title}</h3>
                  <p className="text-gray-400 text-sm mb-3">{doc.description}</p>
                  <span className="inline-block px-3 py-1 bg-gold-500/20 text-gold-400 text-xs rounded-full border border-gold-500/30">
                    {doc.status}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          variants={itemVariants}
          className="mt-12 text-center"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold bg-gradient-to-r from-maroon-500 to-gold-500 text-white shadow-lg shadow-maroon-500/50"
          >
            <Download size={20} />
            Request Documents
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Documents
