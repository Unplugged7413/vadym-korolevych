'use client';

import { motion } from 'framer-motion';

const skills = [
  {
    category: 'Programming Languages',
    items: ['Python', 'Java', 'C', 'SQL'],
    icon: '💻',
  },
  {
    category: 'Tools & Technologies',
    items: ['Git', 'Tableau', 'Google Sheets', 'Microsoft Excel', 'Looker Studio', 'Amplitude Analytics'],
    icon: '🛠️',
  },
  {
    category: 'Data & Analytics Skills',
    items: ['Data Visualization', 'Business Intelligence (BI)', 'Databases', 'Financial Analysis', 'Statistics', 'Algorithms'],
    icon: '📊',
  },
  {
    category: 'Soft Skills',
    items: ['Analytical Thinking', 'Problem Solving', 'Teamwork', 'English'],
    icon: '🤝',
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Expertise
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Tools and technologies I work with
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">{category.icon}</span>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {category.category}
                </h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.items.map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.05 }}
                    className="px-3 py-1.5 bg-blue-50 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 