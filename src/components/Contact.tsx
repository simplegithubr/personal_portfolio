'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    
    try {
      // Replace with your Formspree endpoint
      const response = await fetch('https://formspree.io/f/YOUR_FORMSPREE_ID', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        setError('Something went wrong. Please try again.');
      }
    } catch {
      setError('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-gradient-to-b from-gray-900 to-black dark:from-gray-900 dark:to-black transition-colors duration-500">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-pink-500 to-rose-400 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-rose-400 mx-auto rounded-full" />
          <p className="mt-4 text-gray-300 dark:text-gray-300 text-lg">
            Let&apos;s work together
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                Let&apos;s Connect
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                I&apos;m always open to discussing new projects, creative ideas, or
                opportunities to be part of your visions. Feel free to reach out!
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-4">
              <motion.a
                href="mailto:smasooma934@gmail.com"
                className="flex items-center gap-4 p-4 bg-white dark:bg-gray-800 rounded-xl shadow-md shadow-pink-100 dark:shadow-gray-900 hover:shadow-lg hover:shadow-pink-200 dark:hover:shadow-pink-900/30 transition-all duration-300 group border border-transparent dark:border-gray-700"
                whileHover={{ x: 5 }}
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-pink-400 to-rose-400 flex items-center justify-center text-white">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
                  <p className="text-gray-800 dark:text-white font-medium group-hover:text-pink-500 dark:group-hover:text-pink-400 transition-colors">
                    smasooma934@gmail.com
                  </p>
                </div>
              </motion.a>

              <motion.a
                href="https://github.com/simplegithubr"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-white dark:bg-gray-800 rounded-xl shadow-md shadow-pink-100 dark:shadow-gray-900 hover:shadow-lg hover:shadow-pink-200 dark:hover:shadow-pink-900/30 transition-all duration-300 group border border-transparent dark:border-gray-700"
                whileHover={{ x: 5 }}
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-rose-400 to-pink-400 flex items-center justify-center text-white">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-1.334-.452-.179.022-1.767.022-1.767.665-.594 1.987-.636 1.987-.636 1.084.007 1.611 1.115 1.611 1.115.937-1.603 2.458-1.603 2.458-1.603 1.355 0 2.056 1.371 2.056 1.371.664 1.138 1.746 1.603 2.18 1.603.664 0 1.265-.664 1.265-.664.214-1.547.828-1.603 1.044-1.603.599 0 1.211.605 1.211.605.636 1.093 1.655 1.603 2.18 1.603.636 0 1.265-.664 1.265-.664.214-1.547.828-1.603 1.044-1.603.599 0 1.211.605 1.211.605z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">GitHub</p>
                  <p className="text-gray-800 dark:text-white font-medium group-hover:text-pink-500 dark:group-hover:text-pink-400 transition-colors">
                    @simplegithubr
                  </p>
                </div>
              </motion.a>

              <motion.a
                href="https://www.linkedin.com/in/sagar-sheikh-8441aa27b/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-white dark:bg-gray-800 rounded-xl shadow-md shadow-pink-100 dark:shadow-gray-900 hover:shadow-lg hover:shadow-pink-200 dark:hover:shadow-pink-900/30 transition-all duration-300 group border border-transparent dark:border-gray-700"
                whileHover={{ x: 5 }}
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center text-white">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">LinkedIn</p>
                  <p className="text-gray-800 dark:text-white font-medium group-hover:text-pink-500 dark:group-hover:text-pink-400 transition-colors">
                    Sagar Hussain Sheikh
                  </p>
                </div>
              </motion.a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl shadow-pink-100 dark:shadow-gray-900 border border-transparent dark:border-gray-700 backdrop-blur-sm">
              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 text-green-600 dark:text-green-400 rounded-xl"
                >
                  ✨ Thank you! Your message has been sent successfully.
                </motion.div>
              )}

              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 text-red-600 dark:text-red-400 rounded-xl"
                >
                  ⚠️ {error}
                </motion.div>
              )}

              <div className="space-y-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-pink-100 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:border-pink-400 dark:focus:border-pink-500 focus:ring-2 focus:ring-pink-200 dark:focus:ring-pink-900/30 outline-none transition-all duration-200"
                    placeholder="John Doe"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-pink-100 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:border-pink-400 dark:focus:border-pink-500 focus:ring-2 focus:ring-pink-200 dark:focus:ring-pink-900/30 outline-none transition-all duration-200"
                    placeholder="john@example.com"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl border border-pink-100 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:border-pink-400 dark:focus:border-pink-500 focus:ring-2 focus:ring-pink-200 dark:focus:ring-pink-900/30 outline-none transition-all duration-200 resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-gradient-to-r from-pink-500 to-rose-500 text-white font-semibold rounded-xl shadow-lg shadow-pink-300 hover:shadow-xl hover:shadow-pink-400 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center gap-2">
                      Send Message
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                    </span>
                  )}
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
