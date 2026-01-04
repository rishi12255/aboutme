import React from "react";
import { motion } from "framer-motion";
import jsLogo from "../assets/js2.png";
import reactLogo from "../assets/react.png";
import tailwindLogo from "../assets/tailwind.png";
import nodeLogo from "../assets/node.png";
import mongoLogo from "../assets/mongo.png";

const techStack = [
  { name: "JavaScript", img: jsLogo, link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  { name: "React", img: reactLogo, link: "https://reactjs.org" },
  { name: "Tailwind CSS", img: tailwindLogo, link: "https://tailwindcss.com" },
  { name: "Node.js", img: nodeLogo, link: "https://nodejs.org" },
  { name: "MongoDB", img: mongoLogo, link: "https://www.mongodb.com" },
];

function Tech() {
  return (
    <section id="tech" className="w-full bg-gray-900 py-20 px-4 sm:py-28 flex justify-center">
      <div className="relative flex flex-col items-center max-w-4xl w-full">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          
          className="text-center mb-16 sm:mb-20 px-2 sm:px-4"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-200">
            Currently Working On
          </h2>
          <p className="text-gray-300 mt-3 sm:mt-4 text-sm sm:text-base md:text-lg max-w-3xl mx-auto">
            I use modern technologies to build scalable and responsive web applications.
          </p>
        </motion.div>

        {/* Vertical Wire */}
        <div className="relative flex flex-col items-center w-full">
          {/* Main vertical wire */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-400"></div>

          {/* Tech Items */}
          {techStack.map((tech, index) => {
            const isRight = index % 2 === 0; // alternate sides
            const horizontalOffset = 48; // distance from main wire (can adjust per screen)

            return (
              <div key={index} className="relative w-full flex justify-center">
                {/* Connector */}
                <div
                  className="absolute top-0 h-1 bg-gray-400"
                  style={{
                    width: "6rem",
                    left: isRight ? "50%" : "calc(50% - 6rem)",
                  }}
                ></div>

                
                <motion.a
                  href={tech.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute flex items-center"
                  style={{
                    top: 0,
                    left: isRight ? `calc(50% + ${horizontalOffset}px)` : "auto",
                    right: isRight ? "auto" : `calc(50% + ${horizontalOffset}px)`,
                  }}
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.95 }}
                  animate={{
                    rotate: [0, isRight ? 10 : -10, isRight ? -10 : 10, 0],
                  }}
                 
                >
                  {/* Icon */}
                  <div className="bg-gray-800/30 backdrop-blur-md p-3 sm:p-4 rounded-full shadow-lg">
                    <img
                      src={tech.img}
                      alt={tech.name}
                      className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20"
                    />
                  </div>

                  {/* Name */}
                  <span
                    className={`text-white font-medium text-xs sm:text-sm md:text-base ml-2 sm:ml-3 ${
                      isRight ? "text-left" : "text-right"
                    }`}
                  >
                    {tech.name}
                  </span>
                </motion.a>

                {/* Vertical spacing */}
                <div className="h-24 sm:h-28 md:h-32"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Tech;
