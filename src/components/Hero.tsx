import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

const Hero: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const}
    }
  };

  const socialVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" as const }
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-navy-50 to-teal-50 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30 dark:opacity-20">
        <motion.div 
          className="absolute top-20 left-20 w-72 h-72 bg-teal-300 rounded-full mix-blend-multiply filter blur-xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-20 right-20 w-72 h-72 bg-navy-300 rounded-full mix-blend-multiply filter blur-xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>

      <motion.div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="mb-8" variants={itemVariants}>
          <motion.img
            src={personalInfo.avatar}
            alt={personalInfo.name}
            className="w-40 h-40 rounded-full mx-auto mb-6 border-4 border-white dark:border-gray-700 shadow-xl object-contain"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          />
          <motion.h1 
            className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-4 leading-tight"
            variants={itemVariants}
          >
            {personalInfo.name}
          </motion.h1>
          <motion.p 
            className="text-2xl md:text-3xl text-teal-600 dark:text-teal-400 font-medium mb-6"
            variants={itemVariants}
          >
            {personalInfo.role}
          </motion.p>
          <motion.p 
            className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed"
            variants={itemVariants}
          >
            {personalInfo.tagline}
          </motion.p>
        </motion.div>

        {/* Social Links */}
        <motion.div 
          className="flex justify-center space-x-6 mb-12"
          variants={itemVariants}
        >
          {[
            { icon: Github, href: personalInfo.social.github },
            { icon: Linkedin, href: personalInfo.social.linkedin },
            { icon: Mail, href: `mailto:${personalInfo.email}` }
          ].map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg group"
              variants={socialVariants}
              whileHover={{ 
                scale: 1.15, 
                rotate: 10,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <social.icon className="w-6 h-6 text-gray-700 dark:text-gray-300 group-hover:text-navy-600 dark:group-hover:text-teal-400" />
            </motion.a>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          variants={itemVariants}
        >
          <motion.button
            onClick={() => scrollToSection('projects')}
            className="px-8 py-4 bg-navy-600 text-white font-semibold rounded-lg shadow-lg"
            whileHover={{ 
              scale: 1.05,
              backgroundColor: "#1e3a8a",
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
            }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            View My Work
          </motion.button>
          <motion.button
            onClick={() => scrollToSection('contact')}
            className="px-8 py-4 bg-transparent border-2 border-navy-600 text-navy-600 dark:border-teal-400 dark:text-teal-400 font-semibold rounded-lg"
            whileHover={{ 
              scale: 1.05,
              backgroundColor: "#1e40af",
              color: "#ffffff"
            }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            Get In Touch
          </motion.button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.button
          onClick={() => scrollToSection('about')}
          className="text-gray-600 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors duration-200"
          aria-label="Scroll to about section"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          whileHover={{ scale: 1.2 }}
        >
          <ArrowDown className="w-6 h-6 mx-auto" />
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Hero;