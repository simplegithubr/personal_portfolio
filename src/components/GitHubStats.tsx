'use client';

import { motion } from 'framer-motion';

export default function GitHubStats() {
  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900">
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
              GitHub Activity
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-rose-400 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* GitHub Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-700"
          >
            <h3 className="text-xl font-bold text-white mb-4">GitHub Stats</h3>
            <a
              href="https://github.com/simplegithubr"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://github-readme-stats.vercel.app/api?username=simplegithubr&show_icons=true&theme=radical&hide_border=true&bg_color=1f2937&title_color=ec4899&icon_color=ec4899&text_color=e5e7eb"
                alt="GitHub Stats"
                className="w-full rounded-xl"
                loading="lazy"
              />
            </a>
          </motion.div>

          {/* Top Languages */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-700"
          >
            <h3 className="text-xl font-bold text-white mb-4">Top Languages</h3>
            <a
              href="https://github.com/simplegithubr"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://github-readme-stats.vercel.app/api/top-langs/?username=simplegithubr&layout=compact&theme=radical&hide_border=true&bg_color=1f2937&title_color=ec4899&text_color=e5e7eb"
                alt="Top Languages"
                className="w-full rounded-xl"
                loading="lazy"
              />
            </a>
          </motion.div>
        </div>

        {/* Streak Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-6 bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-700"
        >
          <h3 className="text-xl font-bold text-white mb-4 text-center">Coding Streak</h3>
          <div className="flex justify-center">
            <a
              href="https://github.com/simplegithubr"
              target="_blank"
              rel="noopener noreferrer"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://github-readme-streak-stats.herokuapp.com/?user=simplegithubr&theme=radical&hide_border=true&background=1f2937&stroke=ec4899&ring=ec4899&fire=ec4899&currStreakLabel=ec4899"
                alt="GitHub Streak"
                className="rounded-xl"
                loading="lazy"
              />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
