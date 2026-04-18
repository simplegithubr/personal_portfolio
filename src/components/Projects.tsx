'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';

const projects = [
  {
    id: 'physical-ai-book',
    title: 'Physical AI Book',
    description:
      'An interactive AI-powered book experience that brings physical reading into the digital age. Features AI integration for enhanced learning and engagement.',
    tags: ['Next.js', 'AI Integration', 'Interactive UI'],
    gradient: 'from-pink-400 to-rose-400',
    liveUrl: 'https://physical-ai-book-hazel.vercel.app/',
  },
  {
    id: 'hackathon-phase3',
    title: 'Hackathon Project - Phase 3',
    description:
      'A collaborative hackathon project showcasing innovative solutions and creative problem-solving. Built with modern web technologies and team collaboration.',
    tags: ['React', 'Team Project', 'Hackathon'],
    gradient: 'from-rose-400 to-pink-400',
    liveUrl: 'https://hackthon-phase3.vercel.app/',
  },
  {
    id: 'portfolio-mh4x',
    title: 'Portfolio MH4X',
    description:
      'A sleek and modern portfolio website featuring smooth animations, responsive design, and a clean aesthetic. Showcases projects and skills effectively.',
    tags: ['Next.js', 'Tailwind CSS', 'Portfolio'],
    gradient: 'from-pink-500 to-rose-500',
    liveUrl: 'https://my-portfolio-mh4x.vercel.app/',
  },
  {
    id: 'hekatoon1',
    title: 'Hekathon Project',
    description:
      'An innovative project built during a hackathon event. Demonstrates rapid development skills and creative technical solutions under time pressure.',
    tags: ['React', 'Hackathon', 'Innovation'],
    gradient: 'from-rose-500 to-pink-500',
    liveUrl: 'https://hekatoon1.vercel.app/',
  },
  {
    id: 'blog-web',
    title: 'Blog Web Platform',
    description:
      'A full-featured blog platform with content management capabilities. Supports rich text editing, categories, and a clean reading experience.',
    tags: ['Next.js', 'Blog', 'CMS'],
    gradient: 'from-pink-400 to-rose-400',
    liveUrl: 'https://blog-web-opal-nine.vercel.app/',
  },
  {
    id: 'hackathon-milestone1',
    title: 'Hackathon Milestone 1',
    description:
      'First milestone of an ambitious hackathon project. Features core functionality and demonstrates the foundation for a complete application.',
    tags: ['React', 'Milestone', 'Hackathon'],
    gradient: 'from-rose-400 to-pink-400',
    liveUrl: 'https://hackthon-milestone1.vercel.app/',
  },
  {
    id: 'analog-clock',
    title: 'Analog Clock',
    description:
      'A beautiful analog clock with smooth animations and a modern design. Features real-time updates and customizable themes.',
    tags: ['React', 'CSS Animations', 'UI Design'],
    gradient: 'from-pink-500 to-rose-500',
    liveUrl: 'https://analog-clock-seven-rose.vercel.app/',
  },
  {
    id: 'hackathon-milestone5',
    title: 'Hackathon Milestone 5',
    description:
      'Advanced milestone showcasing feature-complete functionality. Demonstrates progress and refinement of the hackathon project vision.',
    tags: ['React', 'Full Stack', 'Hackathon'],
    gradient: 'from-rose-500 to-pink-500',
    liveUrl: 'https://hackthone-milestone5.vercel.app/',
  },
  {
    id: 'unit-converter',
    title: 'AI Unit Converter',
    description:
      'A smart unit conversion tool built with Streamlit. Convert between various units including length, weight, temperature, and currency with ease.',
    tags: ['Python', 'Streamlit', 'AI'],
    gradient: 'from-pink-400 to-rose-400',
    liveUrl: 'https://unitconverter-famcvzbbauhvptaz2g99am.streamlit.app/',
  },
  {
    id: 'growth-mindset',
    title: 'Growth Mindset App',
    description:
      'An interactive app designed to help develop a growth mindset. Features daily challenges, motivational content, and progress tracking.',
    tags: ['Python', 'Streamlit', 'Self-Improvement'],
    gradient: 'from-rose-400 to-pink-400',
    liveUrl: 'https://growthmindsetapp-demo56jmbdua7i3kttwngr.streamlit.app/',
  },
  {
    id: 'bmi-calculator',
    title: 'BMI Calculator',
    description:
      'A simple and intuitive BMI calculator built with Streamlit. Calculate your Body Mass Index and get health recommendations instantly.',
    tags: ['Python', 'Streamlit', 'Health'],
    gradient: 'from-pink-500 to-rose-500',
    liveUrl: 'https://bmicalculator-786.streamlit.app/',
  },
  {
    id: 'birthday-app',
    title: 'Birthday Reminder',
    description:
      'A fun birthday tracking application. Never forget a special day with this easy-to-use reminder system with countdown features.',
    tags: ['Python', 'Streamlit', 'Productivity'],
    gradient: 'from-rose-500 to-pink-500',
    liveUrl: 'https://birthday-a96ef9dnitwygssjpm5k76.streamlit.app/',
  },
  {
    id: 'secure-data-encryption',
    title: 'Secure Data Encryption',
    description:
      'A security-focused application for encrypting and decrypting sensitive data. Features multiple encryption algorithms for data protection.',
    tags: ['Python', 'Streamlit', 'Security'],
    gradient: 'from-pink-400 to-rose-400',
    liveUrl: 'https://05securedataencryption.streamlit.app/',
  },
  {
    id: 'rag-chatbot',
    title: 'RAG Chatbot',
    description:
      'A Retrieval-Augmented Generation chatbot that combines LLM capabilities with custom knowledge bases. Provides accurate, context-aware responses.',
    tags: ['Python', 'FastAPI', 'RAG', 'AI'],
    gradient: 'from-rose-400 to-pink-400',
    liveUrl: '#',
  },
  {
    id: 'fastapi-chatbot',
    title: 'FastAPI Chatbot',
    description:
      'A real-time chatbot application built with FastAPI backend. Features WebSocket support, message history, and AI-powered conversations.',
    tags: ['FastAPI', 'Python', 'WebSocket', 'Backend'],
    gradient: 'from-pink-500 to-rose-500',
    liveUrl: '#',
  },
  {
    id: 'docker-kubernetes',
    title: 'Docker & Kubernetes Projects',
    description:
      'Containerized applications deployed with Docker and orchestrated using Kubernetes. Demonstrates DevOps and cloud-native development skills.',
    tags: ['Docker', 'Kubernetes', 'DevOps', 'Cloud'],
    gradient: 'from-rose-500 to-pink-500',
    liveUrl: '#',
  },
  {
    id: 'kinzas-world',
    title: 'Kinza\'s World',
    description:
      'A creative web application showcasing modern design and interactive features. Built with attention to detail and user experience.',
    tags: ['Next.js', 'React', 'Web Design'],
    gradient: 'from-pink-400 to-rose-400',
    liveUrl: 'https://kinzas-world.vercel.app/',
  },
];

export default function Projects() {
  const [selectedFilter, setSelectedFilter] = useState('All');

  const categories = ['All', 'Next.js', 'React', 'Python', 'AI', 'Hackathon'];

  const filteredProjects = selectedFilter === 'All'
    ? projects
    : projects.filter(project =>
        project.tags.some(tag => tag.includes(selectedFilter))
      );

  return (
    <section id="projects" className="py-20 md:py-32 bg-black dark:bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-pink-500 to-rose-400 bg-clip-text text-transparent">
              My Projects
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-rose-400 mx-auto rounded-full" />
          <p className="mt-4 text-gray-300 dark:text-gray-300 text-lg">
            Some things I&apos;ve built
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedFilter(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedFilter === category
                  ? 'bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow-lg shadow-pink-300'
                  : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-pink-50 dark:hover:bg-gray-700 border border-pink-200 dark:border-gray-700'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="group bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg shadow-pink-100 dark:shadow-gray-900 hover:shadow-xl hover:shadow-pink-200 dark:hover:shadow-gray-800 transition-all duration-300 border border-pink-100 dark:border-gray-700 hover:border-pink-300 dark:hover:border-pink-500 h-full backdrop-blur-sm">
                {/* Icon */}
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center text-2xl mb-4 shadow-md group-hover:scale-110 transition-transform duration-300`}
                >
                  {index === 0 && '📚'}
                  {index === 1 && '🏆'}
                  {index === 2 && '👤'}
                  {index === 3 && '🚀'}
                  {index === 4 && '📝'}
                  {index === 5 && '🎯'}
                  {index === 6 && '🕐'}
                  {index === 7 && '✨'}
                  {index === 8 && '🔄'}
                  {index === 9 && '🧠'}
                  {index === 10 && '⚖️'}
                  {index === 11 && '🎂'}
                  {index === 12 && '🔐'}
                  {index === 13 && '🤖'}
                  {index === 14 && '💬'}
                  {index === 15 && '🐳'}
                  {index === 16 && '🌍'}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3 group-hover:text-pink-500 dark:group-hover:text-pink-400 transition-colors duration-300">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-pink-50 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400 rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex items-center gap-3">
                  <motion.a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-pink-500 to-rose-500 text-white font-medium rounded-lg hover:shadow-lg transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span>Live Demo</span>
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </motion.a>
                  <Link
                    href={`/projects/${project.id}`}
                    className="px-4 py-2 text-pink-500 dark:text-pink-400 font-medium hover:bg-pink-50 dark:hover:bg-pink-900/30 rounded-lg transition-colors duration-300"
                  >
                    Details
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
