import React from "react";
import { motion } from "framer-motion";

function Projects() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
      className="py-16 px-6 max-w-6xl mx-auto"
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-green-400 mb-12 text-center">
        My Projects
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
      
        <motion.div
          tabIndex={0}
          className="bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-green-400 transition-transform duration-300 focus:outline-none focus:ring-2 focus:ring-green-400"
          whileHover={{ scale: 1.05 }}
          whileFocus={{ scale: 1.05 }}
        >
          <h3 className="text-xl font-semibold text-white">School Websites</h3>
          <p className="text-gray-400 mt-3 text-sm sm:text-base">
          A beautiful school, without leaving home.
          </p>
        </motion.div>

        <motion.div
          tabIndex={0}
          className="bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-green-400 transition-transform duration-300 focus:outline-none focus:ring-2 focus:ring-green-400"
          whileHover={{ scale: 1.05 }}
          whileFocus={{ scale: 1.05 }}
        >
          <h3 className="text-xl font-semibold text-white">Food blog</h3>
          <p className="text-gray-400 mt-3 text-sm sm:text-base">
            Taste every dishes staying at home.
          </p>
        </motion.div>

        <motion.div
          tabIndex={0}
          className="bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-green-400 transition-transform duration-300 focus:outline-none focus:ring-2 focus:ring-green-400"
          whileHover={{ scale: 1.05 }}
          whileFocus={{ scale: 1.05 }}
        >
          
            <h3 className="text-xl font-semibold text-white">Portfolio</h3>
          <p className="text-gray-400 mt-3 text-sm sm:text-base">
            The site you're viewing now!
          </p>
        
          
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Projects;
