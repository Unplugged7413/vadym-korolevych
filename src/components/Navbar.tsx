"use client";

import { useContext, useState, useEffect } from "react";
import { LanguageContext } from "./ClientLayout";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const { setLanguage } = useContext(LanguageContext);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo or placeholder */}
          <div className="text-xl font-bold text-gray-900 dark:text-white">VK</div>

          {/* Centered navigation */}
          <div className="absolute left-1/2 transform -translate-x-1/2 flex space-x-4">
            <Link href="/" passHref>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 rounded-lg text-sm font-medium transition-colors text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
              >
                Home
              </motion.button>
            </Link>

            <Link href="/projects" passHref>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 rounded-lg text-sm font-medium transition-colors text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
              >
                Projects
              </motion.button>
            </Link>
          </div>

          {/* Language switcher with flags */}
          <div className="flex items-center space-x-2">
            <button onClick={() => setLanguage("en")}>
              <Image src="/flags/us.png" alt="us-flag" width={24} height={24} />
            </button>
            <button onClick={() => setLanguage("sk")}>
              <Image src="/flags/sk.png" alt="sk-flag" width={24} height={24} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
