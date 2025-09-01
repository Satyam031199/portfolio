import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Code } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" as const }
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-teal-600 text-white font-semibold rounded-lg shadow-lg mb-6 sm:mb-8 text-sm sm:text-base"
            variants={itemVariants}
            whileHover={{ 
              scale: 1.05,
              backgroundColor: "#0f766e",
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            Back to Top
          </motion.button>

          <motion.div 
            className="flex flex-wrap justify-center items-center gap-2 text-gray-400 mb-4 text-sm sm:text-base px-4"
            variants={itemVariants}
          >
            <span>Built with</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <Heart className="w-4 h-4 text-red-500" />
            </motion.div>
            <span>and</span>
            <Code className="w-4 h-4 text-teal-400" />
            <span>by {personalInfo.name}</span>
          </motion.div>

          <motion.p 
            className="text-gray-500 text-sm sm:text-base px-4"
            variants={itemVariants}
          >
            © {currentYear} {personalInfo.name}. All rights reserved.
          </motion.p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;