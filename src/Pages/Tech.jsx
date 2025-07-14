import React from "react";
import { motion } from "framer-motion";
import jsLogo from "../assets/js2.png";
import reactLogo from "../assets/react.png";
import tailwindLogo from "../assets/tailwind.png";
import nodeLogo from "../assets/node.png";     
import mongoLogo from "../assets/mongo.png";   

function Tech() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
      className="max-w-6xl mx-auto py-16 px-6 text-center"
    >
      <h2 className="text-4xl font-bold text-green-400 mb-6">Currently Working On</h2>
      <p className="text-lg text-gray-300 mb-10">
        I work with modern frontend and backend tools to create responsive and scalable web applications.
      </p>

      <div className="flex flex-wrap justify-center gap-12">
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
          target="_blank"
          rel="noopener noreferrer"
          tabIndex={0}
          className="flex flex-col items-center hover:scale-105 transition-transform"
        >
          <img src={jsLogo} alt="JavaScript" className="h-20 w-20" />
          <p className="mt-3 text-white font-medium">JavaScript</p>
        </a>

        <a
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          tabIndex={0}
          className="flex flex-col items-center hover:scale-105 transition-transform"
        >
          <img src={reactLogo} alt="React" className="h-20 w-20 animate-spin-slow" />
          <p className="mt-3 text-white font-medium">React</p>
        </a>

        <a
          href="https://tailwindcss.com"
          target="_blank"
          rel="noopener noreferrer"
          tabIndex={0}
          className="flex flex-col items-center hover:scale-105 transition-transform"
        >
          <img src={tailwindLogo} alt="Tailwind CSS" className="h-20 w-20" />
          <p className="mt-3 text-white font-medium">Tailwind CSS</p>
        </a>

        <a
          href="https://nodejs.org"
          target="_blank"
          rel="noopener noreferrer"
          tabIndex={0}
          className="flex flex-col items-center hover:scale-105 transition-transform"
        >
          <img src={nodeLogo} alt="Node.js" className="h-20 w-20" />
          <p className="mt-3 text-white font-medium">Node.js</p>
        </a>

        <a
          href="https://www.mongodb.com"
          target="_blank"
          rel="noopener noreferrer"
          tabIndex={0}
          className="flex flex-col items-center hover:scale-105 transition-transform"
        >
          <img src={mongoLogo} alt="MongoDB" className="h-20 w-20" />
          <p className="mt-3 text-white font-medium">MongoDB</p>
        </a>
      </div>
    </motion.section>
  );
}

export default Tech;
