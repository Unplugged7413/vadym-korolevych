'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState, useMemo } from 'react';

const categories = ['All', 'SQL', 'Tableau', 'Python', 'ML'] as const;
type Category = (typeof categories)[number];

const projects = [
  {
    title: 'Revenue Analysis Dashboard',
    description: 'Built two Tableau dashboards focused on revenue and user behavior analysis. Included filters, dual-axis charts, heatmaps, and box plots.',
    image: '/revenue-dashboard.jpg',
    link: 'https://public.tableau.com/views/goit-2/RevenueAnalysisDashboard',
    technologies: ['Tableau'],
    date: '2024-12-10',
  },
  {
    title: 'SQL Marketing Query',
    description: 'Created SQL queries to analyze ad performance using JOIN, LAG(), CASE WHEN. Provided metrics like CTR, CPC, ROMI.',
    image: '/sql-marketing.jpg',
    link: 'https://drive.google.com/file/d/1d_tTabbRnhM2O4iFiXIJi1BUol5E44Cg',
    technologies: ['SQL'],
    date: '2024-11-08',
  },
];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category>('All');

  const filteredProjects = useMemo(() => {
    return projects
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .filter(project => 
        selectedCategory === 'All' || 
        project.technologies.includes(selectedCategory)
      );
  }, [selectedCategory]);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
  };

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
            Featured Projects
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Here are some of my recent data analysis projects
          </p>
          
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
                  ${selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                  }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          layout
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              layout
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {project.title}
                  </h3>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {formatDate(project.date)}
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies?.map((tech) => (
                    <span 
                      key={tech} 
                      className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium"
                >
                  View Project →
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 