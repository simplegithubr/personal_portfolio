'use client';

import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-black to-gray-900 dark:from-black dark:to-gray-900 border-t border-gray-800 dark:border-gray-800 transition-colors duration-500">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <motion.div
            className="text-xl md:text-2xl font-bold bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent"
            whileHover={{ scale: 1.05 }}
          >
            Sagar Hussain Sheikh
          </motion.div>

          {/* Copyright */}
          <p className="text-gray-400 dark:text-gray-400 text-sm text-center">
            © {currentYear} Sagar Hussain Sheikh. Made with 💖 and lots of ☕
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <motion.a
              href="https://github.com/simplegithubr"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white dark:bg-gray-800 shadow-md shadow-pink-100 dark:shadow-gray-900 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-pink-500 dark:hover:text-pink-400 hover:shadow-lg transition-all duration-300"
              whileHover={{ scale: 1.1, y: -2 }}
              aria-label="GitHub"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-1.334-.452-.179.022-1.767.022-1.767.665-.594 1.987-.636 1.987-.636 1.084.007 1.611 1.115 1.611 1.115.937-1.603 2.458-1.603 2.458-1.603 1.355 0 2.056 1.371 2.056 1.371.664 1.138 1.746 1.603 2.18 1.603.664 0 1.265-.664 1.265-.664.214-1.547.828-1.603 1.044-1.603.599 0 1.211.605 1.211.605.636 1.093 1.655 1.603 2.18 1.603.636 0 1.265-.664 1.265-.664.214-1.547.828-1.603 1.044-1.603.599 0 1.211.605 1.211.605z"/>
              </svg>
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/sagar-sheikh-8441aa27b/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white dark:bg-gray-800 shadow-md shadow-pink-100 dark:shadow-gray-900 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-pink-500 dark:hover:text-pink-400 hover:shadow-lg transition-all duration-300"
              whileHover={{ scale: 1.1, y: -2 }}
              aria-label="LinkedIn"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </motion.a>
            <motion.a
              href="mailto:smasooma934@gmail.com"
              className="w-10 h-10 rounded-full bg-white dark:bg-gray-800 shadow-md shadow-pink-100 dark:shadow-gray-900 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-pink-500 dark:hover:text-pink-400 hover:shadow-lg transition-all duration-300"
              whileHover={{ scale: 1.1, y: -2 }}
              aria-label="Email"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  );
}
