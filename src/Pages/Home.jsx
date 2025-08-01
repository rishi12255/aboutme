import React from 'react';
import { motion } from 'framer-motion';

function Hero() {
  return (
    <motion.section
      id="home"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.8, ease: 'easeOut' }}
      className="flex flex-col items-center justify-center h-screen px-6 sm:px-12 text-center bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900"
      tabIndex={-1}
      aria-label="Introduction"
    >
      <h1
        tabIndex={0}
        className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 text-green-400 leading-tight"
      >
        Hi, I'm Rishi Malla
      </h1>
      <p className="text-base sm:text-xl max-w-3xl text-gray-300">
        Frontend Developer | Passionate about building fast, responsive & clean websites with React and Tailwind CSS.
      </p>
    </motion.section>
  );
}

export default Hero;
