import React from 'react';
import { motion } from 'framer-motion';

function About() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1.2, ease: 'easeOut' }}
      className="max-w-4xl mx-auto px-6 py-28"
      tabIndex={-1}
      aria-label="About Me section"
    >
      <h2 className="text-4xl sm:text-5xl font-bold mb-10 text-center text-green-400">
        About Me
      </h2>
      <div className="bg-gray-800/60 backdrop-blur-lg p-8 sm:p-10 rounded-xl shadow-lg border border-gray-700">
        <p className="text-base sm:text-lg leading-relaxed text-center text-gray-300">
          I'm a self-taught{' '}
          <span className="text-green-400 font-semibold">frontend developer</span> passionate about building clean,
          responsive, and interactive user interfaces. My tools of choice include{' '}
          <span className="text-green-400 font-semibold">React</span> and{' '}
          <span className="text-green-400 font-semibold">Tailwind CSS</span>, allowing me to create elegant,
          performant web apps that work seamlessly across all devices.
        </p>
      </div>
    </motion.section>
  );
}

export default About;
