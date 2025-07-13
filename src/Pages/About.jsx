import React from "react";
import { motion } from "framer-motion";

function About() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}  
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
      className="max-w-4xl mx-auto px-6 py-16"
    >
      <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-center text-green-400">
        About Me
      </h2>
      <p className="text-base sm:text-lg leading-relaxed text-center text-gray-300">
        I'm a self-taught frontend developer passionate about crafting clean,
        responsive, and interactive user interfaces. With a love for React and
        Tailwind CSS, I focus on building smooth, modern web experiences that
        not only look great but also perform seamlessly across all devices.
      </p>
    </motion.section>
  );
}

export default About;
