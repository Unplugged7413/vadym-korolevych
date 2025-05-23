'use client';

import { motion } from 'framer-motion';
import { useContext } from 'react';
import { LanguageContext } from '@/components/ClientLayout';
import { translations } from '@/utils/translations';

const About = () => {
  const { language } = useContext(LanguageContext);
  const t = translations[language];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t.aboutTitle}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Get to know me better
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg"
        >
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            {t.aboutText}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 