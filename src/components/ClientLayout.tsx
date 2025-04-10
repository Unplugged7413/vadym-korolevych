'use client';

import { createContext, useState, useEffect } from "react";
import Navbar from "@/components/Navbar";

export const LanguageContext = createContext<{
  language: 'en' | 'sk';
  setLanguage: (lang: 'en' | 'sk') => void;
}>({
  language: 'en',
  setLanguage: () => {},
});

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [language, setLanguage] = useState<'en' | 'sk'>('en');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Set initial language from localStorage if available
    const savedLanguage = localStorage.getItem('language') as 'en' | 'sk';
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);

  useEffect(() => {
    if (mounted) {
      // Save language preference to localStorage
      localStorage.setItem('language', language);
    }
  }, [language, mounted]);

  if (!mounted) {
    return null; // Prevent hydration mismatch
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      <Navbar />
      <main className="min-h-screen pt-16">
        {children}
      </main>
    </LanguageContext.Provider>
  );
} 