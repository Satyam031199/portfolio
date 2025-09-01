import React from 'react';
import { motion } from 'framer-motion';
import { Code, Globe, Zap } from 'lucide-react';
import { aboutMe, skillCategories } from '../data/portfolio';

const About: React.FC = () => {
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
      transition: { duration: 0.6, ease: "easeOut" as const }
    }
  };

  const statsVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" as const }
    }
  };

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
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
            About Me
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-teal-600 mx-auto"
            variants={itemVariants}
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          />
        </motion.div>

        <motion.div 
          className="grid lg:grid-cols-2 gap-12 items-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <div className="prose prose-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              {aboutMe.split('\n\n').map((paragraph, index) => (
                <motion.p 
                  key={index} 
                  className="mb-6"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>
          </motion.div>

          <motion.div 
            className="grid grid-cols-2 gap-8"
            variants={containerVariants}
          >
            <motion.div 
              className="text-center p-6 bg-navy-50 dark:bg-gray-800 rounded-xl"
              variants={statsVariants}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
            >
              <Code className="w-12 h-12 text-teal-600 mx-auto mb-4" />
              <motion.h3 
                className="text-2xl font-bold text-gray-900 dark:text-white mb-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                3+
              </motion.h3>
              <p className="text-gray-600 dark:text-gray-400 font-medium">Years Experience</p>
            </motion.div>
            <motion.div 
              className="text-center p-6 bg-navy-50 dark:bg-gray-800 rounded-xl"
              variants={statsVariants}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
            >
              <Globe className="w-12 h-12 text-teal-600 mx-auto mb-4" />
              <motion.h3 
                className="text-2xl font-bold text-gray-900 dark:text-white mb-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.7 }}
              >
                20+
              </motion.h3>
              <p className="text-gray-600 dark:text-gray-400 font-medium">Projects Completed</p>
            </motion.div>
            <motion.div 
              className="text-center p-6 bg-navy-50 dark:bg-gray-800 rounded-xl col-span-2"
              variants={statsVariants}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
            >
              <Zap className="w-12 h-12 text-teal-600 mx-auto mb-4" />
              <motion.h3 
                className="text-2xl font-bold text-gray-900 dark:text-white mb-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.9 }}
              >
                20K+
              </motion.h3>
              <p className="text-gray-600 dark:text-gray-400 font-medium">Users Impacted</p>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.h3 
            className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12"
            variants={itemVariants}
          >
            Technical Skills
          </motion.h3>
          <motion.div 
            className="grid md:grid-cols-1 lg:grid-cols-4 gap-8"
            variants={containerVariants}
          >
            {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className={`backdrop-blur-sm bg-white/30 dark:bg-white/5 p-8 rounded-2xl border border-white/20 dark:border-white/10 shadow-xl animate-fade-in`}
              style={{ animationDelay: `${categoryIndex * 200}ms` }}
            >
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-6 text-center">
                {category.title}
              </h3>

              <div
                className={`grid ${
                  categoryIndex === 2 ? "grid-cols-3" : "grid-cols-2"
                } gap-4`}
              >
                {category.skills.map((skill, skillIndex) => {
                  return (
                    <div
                      key={skill.name}
                      className="backdrop-blur-sm bg-white/40 dark:bg-white/10 p-4 rounded-xl border border-white/30 dark:border-white/20 hover:bg-white/50 dark:hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                      style={{
                        animationDelay: `${
                          categoryIndex * 200 + skillIndex * 100
                        }ms`,
                      }}
                    >
                      <div className="flex flex-col items-center text-center space-y-2">
                        <div
                          className={`w-10 h-10 rounded-lg bg-gradient-to-r flex items-center justify-center`}
                        >
                          <img src={skill.icon} alt={skill.name} />
                        </div>
                        <span className="text-gray-700 dark:text-gray-300 font-medium text-sm">
                          {skill.name}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;