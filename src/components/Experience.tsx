import React from 'react';
import { motion } from 'framer-motion';
import { Download, MapPin, Calendar, Award } from 'lucide-react';
import { experience, education, certifications, personalInfo } from '../data/portfolio';

const Experience: React.FC = () => {
  const handleDownloadResume = () => {
    // In a real implementation, this would trigger a download
    window.open(personalInfo.resumeUrl, '_blank');
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const}
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" as const}
    }
  };

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
            variants={itemVariants}
          >
            Experience & Education
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-teal-600 mx-auto mb-8"
            variants={itemVariants}
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          />
          <motion.button
            onClick={handleDownloadResume}
            className="inline-flex items-center gap-2 px-6 py-3 bg-teal-600 text-white font-semibold rounded-lg shadow-lg"
            variants={itemVariants}
            whileHover={{ 
              scale: 1.05,
              backgroundColor: "#0f766e",
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            <Download className="w-5 h-5" />
            Download Resume
          </motion.button>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Work Experience */}
          <motion.div 
            className="lg:col-span-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
          >
            <motion.h3 
              className="text-3xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-2"
              variants={itemVariants}
            >
              <Calendar className="w-8 h-8 text-teal-600" />
              Work Experience
            </motion.h3>
            <div className="space-y-8">
              {experience.map((exp) => (
                <motion.div
                  key={exp.id}
                  className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl"
                  variants={cardVariants}
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                        {exp.position}
                      </h4>
                      <p className="text-lg text-teal-600 dark:text-teal-400 font-medium">
                        {exp.company}
                      </p>
                    </div>
                    <span className="text-gray-500 dark:text-gray-400 font-medium mt-2 sm:mt-0">
                      {exp.duration}
                    </span>
                  </div>

                  <ul className="space-y-2 mb-4">
                    {exp.description.map((item, index) => (
                      <li key={index} className="text-gray-600 dark:text-gray-300 flex items-start">
                        <span className="w-2 h-2 bg-teal-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education & Certifications */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
          >
            {/* Education */}
            <motion.div className="mb-12" variants={itemVariants}>
              <motion.h3 
                className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2"
                variants={itemVariants}
              >
                <MapPin className="w-6 h-6 text-teal-600" />
                Education
              </motion.h3>
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"
                  }}
                >
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                    {edu.degree}
                  </h4>
                  <p className="text-teal-600 dark:text-teal-400 font-medium mb-2">
                    {edu.school}
                  </p>
                  <p className="text-gray-500 dark:text-gray-400 mb-2">
                    {edu.year}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {edu.details}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            {/* Certifications */}
            <motion.div variants={itemVariants}>
              <motion.h3 
                className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2"
                variants={itemVariants}
              >
                <Award className="w-6 h-6 text-teal-600" />
                Certifications
              </motion.h3>
              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ 
                      backgroundColor: "#f3f4f6",
                      x: 5
                    }}
                  >
                    <p className="text-gray-900 dark:text-white font-medium">
                      {cert}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;