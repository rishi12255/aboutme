import React from "react";
import { motion } from "framer-motion";
import { FaFacebook, FaInstagram, FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      viewport={{ once: true }}
      className="bg-gray-800 text-center py-10 mt-20 px-6"
    >
      <h3 className="text-xl sm:text-2xl font-semibold mb-6 text-green-400">
        Connect with Me
      </h3>

      <div className="flex justify-center gap-8 text-3xl sm:text-4xl mb-6">
        <a
          href="https://www.facebook.com/saphala.malla.thakuri"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          className="hover:text-blue-500 transition"
        >
          <FaFacebook />
        </a>
        <a
          href="https://www.instagram.com/yuulieagain/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="hover:text-pink-500 transition"
        >
          <FaInstagram />
        </a>
        <a
          href="https://github.com/rishi12255"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="hover:text-gray-300 transition"
        >
          <FaGithub />
        </a>
      </div>

      <p className="text-gray-500 text-xs sm:text-sm">
        © 2025 Rishi Malla. All rights reserved.
      </p>
    </motion.footer>
  );
}

export default Footer;
