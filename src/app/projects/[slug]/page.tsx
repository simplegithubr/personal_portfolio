'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const projectData: Record<string, {
  title: string;
  description: string;
  longDescription: string;
  features: string[];
  technologies: string[];
  gradient: string;
  icon: string;
  liveUrl: string;
}> = {
  'physical-ai-book': {
    title: 'Physical AI Book',
    description: 'An interactive AI-powered book experience that brings physical reading into the digital age.',
    longDescription: 'This innovative project combines physical reading with AI technology to create an enhanced learning experience. The platform leverages modern web technologies to deliver interactive content and AI-powered features that engage readers in new ways.',
    features: [
      'AI-powered interactive content',
      'Modern responsive design',
      'Enhanced learning experience',
      'Digital-physical integration',
      'User-friendly interface',
      'Real-time interactions',
    ],
    technologies: ['Next.js', 'AI Integration', 'React', 'Vercel'],
    gradient: 'from-pink-400 to-rose-400',
    icon: '📚',
    liveUrl: 'https://physical-ai-book-hazel.vercel.app/',
  },
  'hackathon-phase3': {
    title: 'Hackathon Project - Phase 3',
    description: 'A collaborative hackathon project showcasing innovative solutions.',
    longDescription: 'This project represents the third phase of an ambitious hackathon challenge. Built through teamwork and rapid development, it demonstrates creative problem-solving and modern web development skills under pressure.',
    features: [
      'Collaborative development',
      'Rapid prototyping',
      'Modern tech stack',
      'Innovative solutions',
      'Scalable architecture',
      'User-centric design',
    ],
    technologies: ['React', 'TypeScript', 'Team Project', 'Vercel'],
    gradient: 'from-rose-400 to-pink-400',
    icon: '🏆',
    liveUrl: 'https://hackthon-phase3.vercel.app/',
  },
  'portfolio-mh4x': {
    title: 'Portfolio MH4X',
    description: 'A sleek and modern portfolio website with smooth animations.',
    longDescription: 'A professionally designed portfolio website featuring smooth animations, responsive design, and a clean aesthetic. Built to showcase projects and skills in an engaging and memorable way.',
    features: [
      'Smooth animations',
      'Fully responsive',
      'Clean modern design',
      'Fast performance',
      'SEO optimized',
      'Easy navigation',
    ],
    technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'Vercel'],
    gradient: 'from-pink-500 to-rose-500',
    icon: '👤',
    liveUrl: 'https://my-portfolio-mh4x.vercel.app/',
  },
  'hekatoon1': {
    title: 'Hekathon Project',
    description: 'An innovative project built during a hackathon event.',
    longDescription: 'Created during an intense hackathon, this project demonstrates rapid development capabilities and creative technical solutions. It showcases the ability to deliver functional software under time constraints.',
    features: [
      'Hackathon innovation',
      'Quick development',
      'Creative solutions',
      'Functional prototype',
      'Team collaboration',
      'Problem-solving',
    ],
    technologies: ['React', 'Node.js', 'Hackathon', 'Vercel'],
    gradient: 'from-rose-500 to-pink-500',
    icon: '🚀',
    liveUrl: 'https://hekatoon1.vercel.app/',
  },
  'blog-web': {
    title: 'Blog Web Platform',
    description: 'A full-featured blog platform with content management.',
    longDescription: 'A comprehensive blogging platform with content management capabilities. Features rich text editing, category organization, and a clean reading experience for optimal content consumption.',
    features: [
      'Content management system',
      'Rich text editing',
      'Category organization',
      'Clean reading experience',
      'Responsive design',
      'SEO friendly',
    ],
    technologies: ['Next.js', 'Blog', 'CMS', 'Vercel'],
    gradient: 'from-pink-400 to-rose-400',
    icon: '📝',
    liveUrl: 'https://blog-web-opal-nine.vercel.app/',
  },
  'hackathon-milestone1': {
    title: 'Hackathon Milestone 1',
    description: 'First milestone of an ambitious hackathon project.',
    longDescription: 'The foundational milestone of a larger hackathon project. Establishes core functionality and demonstrates the technical foundation for subsequent development phases.',
    features: [
      'Core functionality',
      'Technical foundation',
      'Scalable structure',
      'Clean codebase',
      'User interface',
      'Basic features',
    ],
    technologies: ['React', 'TypeScript', 'Milestone', 'Vercel'],
    gradient: 'from-rose-400 to-pink-400',
    icon: '🎯',
    liveUrl: 'https://hackthon-milestone1.vercel.app/',
  },
  'analog-clock': {
    title: 'Analog Clock',
    description: 'A beautiful analog clock with smooth animations.',
    longDescription: 'An elegantly designed analog clock featuring smooth animations and modern aesthetics. Demonstrates CSS animation skills and attention to detail in UI design.',
    features: [
      'Smooth animations',
      'Real-time updates',
      'Modern design',
      'Customizable themes',
      'Responsive layout',
      'Clean visuals',
    ],
    technologies: ['React', 'CSS Animations', 'UI Design', 'Vercel'],
    gradient: 'from-pink-500 to-rose-500',
    icon: '🕐',
    liveUrl: 'https://analog-clock-seven-rose.vercel.app/',
  },
  'hackathon-milestone5': {
    title: 'Hackathon Milestone 5',
    description: 'Advanced milestone showcasing feature-complete functionality.',
    longDescription: 'An advanced development milestone representing significant progress in a hackathon project. Demonstrates feature completeness and refinement of the original project vision.',
    features: [
      'Feature complete',
      'Advanced functionality',
      'Polished UI/UX',
      'Performance optimized',
      'Testing implemented',
      'Production ready',
    ],
    technologies: ['React', 'Full Stack', 'Hackathon', 'Vercel'],
    gradient: 'from-rose-500 to-pink-500',
    icon: '✨',
    liveUrl: 'https://hackthone-milestone5.vercel.app/',
  },
  'unit-converter': {
    title: 'AI Unit Converter',
    description: 'A smart unit conversion tool built with Streamlit.',
    longDescription: 'This AI-powered unit converter makes converting between different units effortless. Built with Streamlit and Python, it supports length, weight, temperature, currency conversions and more with an intuitive interface.',
    features: [
      'Multiple unit categories',
      'Currency conversion',
      'Real-time calculations',
      'Clean Streamlit UI',
      'Accurate conversions',
      'Easy to use',
    ],
    technologies: ['Python', 'Streamlit', 'AI', 'Hugging Face'],
    gradient: 'from-pink-400 to-rose-400',
    icon: '🔄',
    liveUrl: 'https://unitconverter-famcvzbbauhvptaz2g99am.streamlit.app/',
  },
  'growth-mindset': {
    title: 'Growth Mindset App',
    description: 'An interactive app to help develop a growth mindset.',
    longDescription: 'This self-improvement application is designed to help users develop a growth mindset through daily challenges, motivational content, and progress tracking. Built with Streamlit for an engaging user experience.',
    features: [
      'Daily challenges',
      'Motivational content',
      'Progress tracking',
      'Growth exercises',
      'Mindset assessments',
      'Personalized tips',
    ],
    technologies: ['Python', 'Streamlit', 'Self-Improvement', 'Psychology'],
    gradient: 'from-rose-400 to-pink-400',
    icon: '🧠',
    liveUrl: 'https://growthmindsetapp-demo56jmbdua7i3kttwngr.streamlit.app/',
  },
  'bmi-calculator': {
    title: 'BMI Calculator',
    description: 'A simple and intuitive BMI calculator.',
    longDescription: 'A health-focused application that calculates Body Mass Index (BMI) and provides personalized health recommendations. Built with Streamlit for quick and easy health assessments.',
    features: [
      'BMI calculation',
      'Health recommendations',
      'Category classification',
      'Metric and imperial units',
      'Instant results',
      'Health tips',
    ],
    technologies: ['Python', 'Streamlit', 'Health', 'Calculator'],
    gradient: 'from-pink-500 to-rose-500',
    icon: '⚖️',
    liveUrl: 'https://bmicalculator-786.streamlit.app/',
  },
  'birthday-app': {
    title: 'Birthday Reminder',
    description: 'A fun birthday tracking application.',
    longDescription: 'Never forget a special day with this birthday reminder application. Features countdown timers, age calculations, and an easy-to-use interface for managing all your important dates.',
    features: [
      'Birthday tracking',
      'Countdown timers',
      'Age calculation',
      'Add/remove birthdays',
      'Visual reminders',
      'Calendar view',
    ],
    technologies: ['Python', 'Streamlit', 'Productivity', 'Date Handling'],
    gradient: 'from-rose-500 to-pink-500',
    icon: '🎂',
    liveUrl: 'https://birthday-a96ef9dnitwygssjpm5k76.streamlit.app/',
  },
  'secure-data-encryption': {
    title: 'Secure Data Encryption',
    description: 'A security-focused encryption application.',
    longDescription: 'A comprehensive data encryption and decryption tool built for security-conscious users. Features multiple encryption algorithms to protect sensitive information and ensure data privacy.',
    features: [
      'Multiple encryption algorithms',
      'Secure encryption/decryption',
      'Password protection',
      'Data privacy',
      'File encryption support',
      'Secure key management',
    ],
    technologies: ['Python', 'Streamlit', 'Cryptography', 'Security'],
    gradient: 'from-pink-400 to-rose-400',
    icon: '🔐',
    liveUrl: 'https://05securedataencryption.streamlit.app/',
  },
  'rag-chatbot': {
    title: 'RAG Chatbot',
    description: 'A Retrieval-Augmented Generation chatbot with custom knowledge.',
    longDescription: 'This advanced chatbot combines the power of Large Language Models with Retrieval-Augmented Generation (RAG) technology. It can access custom knowledge bases to provide accurate, context-aware responses specific to your data domain.',
    features: [
      'RAG architecture',
      'Custom knowledge base',
      'Context-aware responses',
      'LLM integration',
      'Vector database',
      'Semantic search',
    ],
    technologies: ['Python', 'FastAPI', 'LangChain', 'Vector DB', 'AI/ML'],
    gradient: 'from-rose-400 to-pink-400',
    icon: '🤖',
    liveUrl: '#',
  },
  'fastapi-chatbot': {
    title: 'FastAPI Chatbot',
    description: 'A real-time chatbot application built with FastAPI backend.',
    longDescription: 'A high-performance chatbot application leveraging FastAPI for the backend. Features WebSocket support for real-time communication, message history, and AI-powered conversation capabilities with excellent performance.',
    features: [
      'FastAPI backend',
      'WebSocket support',
      'Real-time messaging',
      'Message history',
      'AI integration',
      'RESTful API',
    ],
    technologies: ['FastAPI', 'Python', 'WebSocket', 'AsyncIO', 'Backend'],
    gradient: 'from-pink-500 to-rose-500',
    icon: '💬',
    liveUrl: '#',
  },
  'docker-kubernetes': {
    title: 'Docker & Kubernetes Projects',
    description: 'Containerized applications with Docker and Kubernetes.',
    longDescription: 'A collection of projects demonstrating containerization and orchestration skills. Applications are packaged with Docker and deployed using Kubernetes, showcasing modern DevOps and cloud-native development practices.',
    features: [
      'Docker containerization',
      'Kubernetes orchestration',
      'CI/CD pipelines',
      'Microservices architecture',
      'Cloud deployment',
      'DevOps practices',
    ],
    technologies: ['Docker', 'Kubernetes', 'DevOps', 'Cloud Native', 'CI/CD'],
    gradient: 'from-rose-500 to-pink-500',
    icon: '🐳',
    liveUrl: '#',
  },
};

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projectData[params.slug as keyof typeof projectData];

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Project Not Found</h1>
          <Link href="/#projects" className="text-pink-500 hover:underline">
            ← Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
      <Navbar />
      
      <main className="pt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Back Link */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-8"
          >
            <Link
              href="/#projects"
              className="inline-flex items-center text-pink-500 hover:text-pink-600 font-medium transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Projects
            </Link>
          </motion.div>

          {/* Project Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <div
              className={`w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br ${project.gradient} flex items-center justify-center text-4xl shadow-lg mb-6`}
            >
              {project.icon}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              {project.title}
            </h1>
            <p className="text-xl text-gray-600">
              {project.description}
            </p>
          </motion.div>

          {/* Project Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-2xl p-8 shadow-xl shadow-pink-100 mb-8"
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-4">About This Project</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              {project.longDescription}
            </p>

            <h3 className="text-xl font-bold text-gray-800 mb-4">Key Features</h3>
            <ul className="grid sm:grid-cols-2 gap-3 mb-6">
              {project.features.map((feature) => (
                <li key={feature} className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-pink-400" />
                  <span className="text-gray-600">{feature}</span>
                </li>
              ))}
            </ul>

            <h3 className="text-xl font-bold text-gray-800 mb-4">Technologies Used</h3>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-gradient-to-r from-pink-50 to-rose-50 text-pink-600 rounded-xl font-medium border border-pink-100"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-pink-500 to-rose-500 text-white font-semibold rounded-full shadow-lg shadow-pink-300 hover:shadow-xl hover:shadow-pink-400 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>View Live</span>
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </motion.a>
            <Link
              href="/#contact"
              className="inline-flex items-center px-8 py-4 bg-white text-pink-500 font-semibold rounded-full shadow-lg shadow-pink-200 hover:shadow-xl hover:shadow-pink-300 transition-all duration-300 border-2 border-pink-300"
            >
              <span>Contact Me</span>
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
