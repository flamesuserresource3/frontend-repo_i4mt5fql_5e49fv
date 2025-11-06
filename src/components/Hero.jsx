import React from 'react';
import { CalendarCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Animated gradient background */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <div className="absolute -top-24 left-1/2 h-[480px] w-[480px] -translate-x-1/2 rounded-full bg-indigo-400 opacity-30 blur-3xl"></div>
        <div className="absolute -bottom-24 left-1/4 h-[380px] w-[380px] -translate-x-1/2 rounded-full bg-fuchsia-400 opacity-20 blur-3xl"></div>
        <div className="absolute -bottom-12 right-0 h-[420px] w-[420px] rounded-full bg-cyan-400 opacity-20 blur-3xl"></div>
      </motion.div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 py-12 md:grid-cols-2 md:py-16 lg:gap-16">
        <div className="relative z-10">
          <motion.div
            className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-xs text-indigo-700 ring-1 ring-indigo-200 backdrop-blur"
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <CalendarCheck size={14} /> Presensi digital kampus — realtime & aman
          </motion.div>
          <motion.h2
            className="mt-4 text-3xl font-bold tracking-tight text-gray-900 md:text-5xl"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Classroom Futuristik untuk Pembelajaran Masa Depan
          </motion.h2>
          <motion.p
            className="mt-4 text-base leading-relaxed text-gray-600 md:text-lg"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Kelola materi, tugas, dan presensi dengan pengalaman visual 3D yang interaktif. Desain modern, cepat, dan ramah perangkat mobile.
          </motion.p>
          <motion.div
            className="mt-6 flex flex-wrap gap-3"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <button className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-4 py-2.5 text-white shadow-sm transition hover:scale-[1.02] hover:bg-indigo-700 active:scale-[0.99]">
              Mulai Presensi
            </button>
            <button className="inline-flex items-center justify-center rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-gray-700 shadow-sm transition hover:scale-[1.02] hover:bg-gray-50 active:scale-[0.99]">
              Lihat Kelas
            </button>
          </motion.div>
        </div>

        <motion.div
          className="relative h-[420px] w-full overflow-hidden rounded-2xl border border-gray-200 bg-white/60 shadow-xl backdrop-blur"
          initial={{ scale: 0.98, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.25 }}
        >
          {/* Spline 3D scene */}
          <Spline scene="https://prod.spline.design/hGDm7Foxug7C6E8s/scene.splinecode" style={{ width: '100%', height: '100%' }} />

          {/* Soft overlay gradient to blend with page without blocking interactions */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/10" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
