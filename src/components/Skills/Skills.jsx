import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  {
    category: 'Frontend Development',
    items: [
      { name: 'React', level: 90 },
      { name: 'Next.js', level: 85 },
      { name: 'TypeScript', level: 80 },
      { name: 'Tailwind CSS', level: 95 },
    ],
  },
  {
    category: 'Backend Development',
    items: [
      { name: 'Node.js', level: 85 },
      { name: 'Python', level: 80 },
      { name: 'Express', level: 75 },
      { name: 'Django', level: 70 },
    ],
  },
  {
    category: 'AI/ML',
    items: [
      { name: 'TensorFlow', level: 75 },
      { name: 'PyTorch', level: 70 },
      { name: 'Scikit-learn', level: 80 },
      { name: 'OpenCV', level: 65 },
    ],
  },
  {
    category: 'DevOps & Cloud',
    items: [
      { name: 'Docker', level: 80 },
      { name: 'AWS', level: 75 },
      { name: 'Kubernetes', level: 70 },
      { name: 'CI/CD', level: 85 },
    ],
  },
];

const additionalSkills = [
  'Git', 'RESTful APIs', 'GraphQL', 'MongoDB', 'PostgreSQL',
  'Redis', 'WebSockets', 'Jest', 'Cypress', 'Linux',
];

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-16"
            variants={itemVariants}
          >
            Technical Skills
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((category) => (
              <motion.div
                key={category.category}
                className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 flex items-center">
                  <span className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mr-2"></span>
                  {category.category}
                </h3>
                <div className="space-y-6">
                  {category.items.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-2">
                        <span className="text-lg text-gray-900 dark:text-white font-medium">
                          {skill.name}
                        </span>
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 overflow-hidden">
                        <motion.div
                          className="bg-gradient-to-r from-blue-600 to-blue-400 h-2.5 rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.2 }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="mt-16"
            variants={itemVariants}
          >
            <h3 className="text-2xl font-semibold text-center text-gray-900 dark:text-white mb-8">
              Additional Skills
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {additionalSkills.map((skill) => (
                <motion.span
                  key={skill}
                  className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full text-sm font-medium hover:bg-blue-100 dark:hover:bg-blue-900/20 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 