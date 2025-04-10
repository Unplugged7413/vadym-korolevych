'use client';

import { motion } from 'framer-motion';

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

export default function ScrollButtons() {
  return (
    <div className="absolute bottom-4 left-8 flex flex-col gap-4 z-50">
      <motion.button
        onClick={() => scrollToSection('skills')}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="relative text-base font-medium text-blue-400 hover:text-blue-500 transition-colors after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:bg-blue-400"
      >
        Skills
      </motion.button>

      <motion.button
        onClick={() => scrollToSection('contact')}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="relative text-base font-medium text-blue-400 hover:text-blue-500 transition-colors after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:bg-blue-400"
      >
        Contact
      </motion.button>
    </div>
  );
}
