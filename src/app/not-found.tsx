'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center px-4"
      >
        {/* Animated 404 */}
        <motion.div
          className="text-9xl md:text-[12rem] font-bold bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent mb-4"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          404
        </motion.div>

        {/* Decorative elements */}
        <div className="flex justify-center gap-4 mb-8">
          <motion.span
            className="text-4xl"
            animate={{ rotate: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            🌸
          </motion.span>
          <motion.span
            className="text-4xl"
            animate={{ rotate: [0, -10, 0] }}
            transition={{ duration: 2.5, repeat: Infinity }}
          >
            ✨
          </motion.span>
          <motion.span
            className="text-4xl"
            animate={{ rotate: [0, 10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            🌸
          </motion.span>
        </div>

        {/* Message */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Oops! Page not found
        </h1>
        <p className="text-gray-600 text-lg mb-8 max-w-md mx-auto">
          The page you&apos;re looking for seems to have wandered off. Let&apos;s get you back on track!
        </p>

        {/* Back button */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-pink-500 to-rose-500 text-white font-semibold rounded-full shadow-lg shadow-pink-300 hover:shadow-xl hover:shadow-pink-400 transition-all duration-300"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            <span>Back to Home</span>
          </Link>
          <Link
            href="/#projects"
            className="inline-flex items-center px-8 py-4 bg-white text-pink-500 font-semibold rounded-full shadow-lg shadow-pink-200 hover:shadow-xl hover:shadow-pink-300 transition-all duration-300 border-2 border-pink-300"
          >
            <span>View Projects</span>
          </Link>
        </motion.div>

        {/* Fun message */}
        <p className="text-gray-500 text-sm mt-8">
          Even the best code has bugs sometimes! 🐛
        </p>
      </motion.div>
    </div>
  );
}
