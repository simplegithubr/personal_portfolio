'use client';

import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: 'Frontend',
    icon: '🎨',
    color: 'from-pink-400 to-rose-400',
    skills: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Next.js', 'Tailwind CSS'],
  },
  {
    title: 'Backend',
    icon: '⚙️',
    color: 'from-rose-400 to-pink-400',
    skills: ['Python', 'FastAPI', 'Node.js', 'REST API', 'WebSocket'],
  },
  {
    title: 'AI & ML',
    icon: '🤖',
    color: 'from-pink-500 to-rose-500',
    skills: ['Hugging Face', 'RAG', 'LangChain', 'AI Web Apps', 'Streamlit'],
  },
  {
    title: 'DevOps & Cloud',
    icon: '☁️',
    color: 'from-rose-500 to-pink-500',
    skills: ['Docker', 'Kubernetes', 'Vercel', 'Streamlit Cloud', 'CI/CD'],
  },
  {
    title: 'Database & Tools',
    icon: '🗄️',
    color: 'from-pink-400 to-rose-400',
    skills: ['Vector DB', 'Git', 'GitHub', 'PostgreSQL'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 md:py-32 bg-gradient-to-b from-gray-900 to-black dark:from-gray-900 dark:to-black transition-colors duration-500">
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
              Skills & Technologies
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-rose-400 mx-auto rounded-full" />
          <p className="mt-4 text-gray-300 dark:text-gray-300 text-lg">
            Tools and technologies I work with
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg shadow-pink-100 dark:shadow-gray-900 hover:shadow-xl hover:shadow-pink-200 dark:hover:shadow-pink-900/30 transition-all duration-300 h-full border border-pink-100 dark:border-gray-700 hover:border-pink-200 dark:hover:border-pink-500 backdrop-blur-sm">
                {/* Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center text-2xl shadow-md group-hover:scale-110 transition-transform duration-300`}
                  >
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                    {category.title}
                  </h3>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      className="px-3 py-1.5 bg-gradient-to-r from-pink-50 to-rose-50 dark:from-pink-900/30 dark:to-rose-900/30 text-pink-600 dark:text-pink-400 rounded-lg text-sm font-medium border border-pink-100 dark:border-pink-800"
                      whileHover={{ scale: 1.05 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
