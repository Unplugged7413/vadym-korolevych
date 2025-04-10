'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import ScrollButtons from './ScrollButtons';
import { useContext } from 'react';
import { LanguageContext } from '@/components/ClientLayout';
import { translations } from '@/utils/translations';

const Hero = () => {
  const { language } = useContext(LanguageContext);
  const t = translations[language];

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white">
            {t.heroTitle}
          </h1>
          <h2 className="text-2xl sm:text-3xl text-gray-600 dark:text-gray-300">
            {t.heroRole}
          </h2>
          <p className="text-lg text-gray-500 dark:text-gray-400 max-w-lg">
            Turning data into insights that drive action.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center md:justify-end"
        >
          <div className="relative w-64 h-64 sm:w-80 sm:h-80">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full blur-xl opacity-20 dark:opacity-30"></div>
            <Image
              src="/profile.png"
              alt="Vadym Korolevych"
              fill
              className="object-cover rounded-full border-4 border-white dark:border-gray-800 shadow-xl"
              priority
              sizes="(max-width: 768px) 256px, 320px"
            />
          </div>
        </motion.div>
      </div>

      <ScrollButtons />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-gray-400 dark:text-gray-500"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero; 