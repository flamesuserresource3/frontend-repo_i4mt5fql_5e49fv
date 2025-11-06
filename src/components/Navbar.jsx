import React from 'react';
import { GraduationCap, Bell, User, LogOut } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-20 w-full border-b border-gray-200 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60"
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        <div className="flex items-center gap-3">
          <motion.div whileHover={{ rotate: -8 }} className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-600 to-fuchsia-600 text-white shadow">
            <GraduationCap size={22} />
          </motion.div>
          <div>
            <h1 className="text-lg font-semibold tracking-tight text-gray-900">Kampus Classroom</h1>
            <p className="text-xs text-gray-500">Belajar futuristik, presensi interaktif</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button className="relative rounded-lg p-2 text-gray-600 transition hover:bg-gray-100">
            <Bell size={20} />
            <span className="absolute -right-0.5 -top-0.5 h-2.5 w-2.5 rounded-full bg-gradient-to-r from-fuchsia-500 to-indigo-500"></span>
          </button>
          <div className="hidden items-center gap-3 md:flex">
            <div className="flex items-center gap-2 rounded-full bg-gray-100 px-3 py-1.5">
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-indigo-500 text-white">
                <User size={16} />
              </div>
              <div className="leading-tight">
                <p className="text-sm font-medium text-gray-900">Mahasiswa</p>
                <p className="text-[10px] text-gray-500">NIM: 12345678</p>
              </div>
            </div>
            <button className="inline-flex items-center gap-2 rounded-lg border border-gray-200 px-3 py-2 text-sm text-gray-700 transition hover:scale-[1.02] hover:bg-gray-50 active:scale-[0.99]">
              <LogOut size={16} /> Keluar
            </button>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Navbar;
