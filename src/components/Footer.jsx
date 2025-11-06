import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="relative border-t border-gray-200 bg-white">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-7xl px-4 py-8 text-sm text-gray-600"
      >
        <div className="flex flex-col items-center justify-between gap-3 sm:flex-row">
          <p>© {new Date().getFullYear()} Kampus Classroom — Belajar lebih cerdas.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="transition hover:text-gray-900">Kebijakan Privasi</a>
            <a href="#" className="transition hover:text-gray-900">Syarat & Ketentuan</a>
            <a href="#" className="transition hover:text-gray-900">Bantuan</a>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
