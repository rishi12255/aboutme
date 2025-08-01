import React from 'react';
import { motion } from 'framer-motion';
import jsLogo from '../assets/js2.png';
import reactLogo from '../assets/react.png';
import tailwindLogo from '../assets/tailwind.png';
import nodeLogo from '../assets/node.png';
import mongoLogo from '../assets/mongo.png';

const techStack = [
  {
    name: 'JavaScript',
    img: jsLogo,
    link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  },
  {
    name: 'React',
    img: reactLogo,
    link: 'https://reactjs.org',
    animate: 'animate-spin-slow',
  },
  {
    name: 'Tailwind CSS',
    img: tailwindLogo,
    link: 'https://tailwindcss.com',
  },
  {
    name: 'Node.js',
    img: nodeLogo,
    link: 'https://nodejs.org',
  },
  {
    name: 'MongoDB',
    img: mongoLogo,
    link: 'https://www.mongodb.com',
  },
];

function Tech() {
  return (
    <motion.section
      id="tech"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1.3, ease: 'easeOut' }}
      className="max-w-6xl mx-auto py-28 px-6 text-center"
      tabIndex={-1}
      aria-label="Technology stack"
    >
      <h2 className="text-4xl font-bold text-green-400 mb-6">Currently Working On</h2>
      <p className="text-lg text-gray-300 mb-14 max-w-3xl mx-auto">
        I use a modern web stack to build scalable, responsive, and high-performance applications.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10 justify-center">
        {techStack.map(({ name, img, link, animate }, index) => (
          <a
            key={index}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            tabIndex={0}
            className="bg-gray-800 hover:bg-gray-700 p-5 rounded-xl flex flex-col items-center transition-all duration-300 hover:scale-105 hover:shadow-md ring-1 ring-transparent hover:ring-green-400 focus:outline-none focus:ring-2 focus:ring-green-400"
            aria-label={`Learn more about ${name}`}
          >
            <img src={img} alt={name} className={`h-20 w-20 ${animate || ''}`} />
            <p className="mt-4 text-white font-medium">{name}</p>
          </a>
        ))}
      </div>
    </motion.section>
  );
}

export default Tech;
