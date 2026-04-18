'use client';

import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-20 md:py-32 bg-black dark:bg-black transition-colors duration-500">
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
              About Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-rose-400 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image/Icon */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-3xl overflow-hidden shadow-2xl ring-4 ring-pink-400 dark:ring-pink-600">
                <img
                  src="/profile.jpg"
                  alt="Sagar Hussain Sheikh"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative elements */}
              <motion.div
                className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-br from-pink-300 to-rose-300 dark:from-pink-600 dark:to-rose-600 rounded-2xl flex items-center justify-center text-3xl shadow-lg"
                animate={{ rotate: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                🎨
              </motion.div>
              <motion.div
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-rose-200 to-pink-200 dark:from-rose-700 dark:to-pink-700 rounded-xl flex items-center justify-center text-2xl shadow-lg"
                animate={{ rotate: [0, -10, 0] }}
                transition={{ duration: 2.5, repeat: Infinity }}
              >
                💻
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-gray-300 dark:text-gray-300 text-lg leading-relaxed">
              I&apos;m a passionate full-stack developer with expertise in both frontend and backend technologies. My journey into tech started with curiosity about how websites work, and it has quickly grown into a deep love for coding and building complete applications.
            </p>
            <p className="text-gray-300 dark:text-gray-300 text-lg leading-relaxed">
              I specialize in building modern web applications using Next.js, React, and Tailwind CSS for frontend, along with FastAPI and Python for backend services. I also have experience with AI integration, RAG chatbots, and containerization with Docker and Kubernetes.
            </p>
            <p className="text-gray-300 dark:text-gray-300 text-lg leading-relaxed">
              Alongside development, I&apos;m an artist at heart. I believe that creativity and technology go hand in hand. Whether I&apos;m designing a user interface, building a chatbot, or painting, I pour my heart into every project.
            </p>
            <p className="text-gray-300 dark:text-gray-300 text-lg leading-relaxed">
              I&apos;m currently exploring advanced AI technologies, microservices architecture, and cloud-native development. I believe in hard work, continuous learning, and the power of creativity to solve complex problems.
            </p>

            {/* Values */}
            <div className="flex flex-wrap gap-4 pt-4">
              {['Creativity', 'Hard Work', 'Passion', 'Learning', 'Innovation'].map((value) => (
                <motion.span
                  key={value}
                  className="px-4 py-2 bg-gradient-to-r from-pink-100 to-rose-100 dark:from-pink-900/30 dark:to-rose-900/30 text-pink-600 dark:text-pink-400 rounded-full text-sm font-medium"
                  whileHover={{ scale: 1.05 }}
                >
                  ✨ {value}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
