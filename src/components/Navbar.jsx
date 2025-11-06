import React from 'react';
import { GraduationCap, Bell, User, LogOut } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="sticky top-0 z-20 w-full border-b border-gray-200 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600 text-white">
            <GraduationCap size={22} />
          </div>
          <div>
            <h1 className="text-lg font-semibold tracking-tight text-gray-900">Kampus Classroom</h1>
            <p className="text-xs text-gray-500">Belajar modern, presensi mudah</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button className="relative rounded-lg p-2 text-gray-600 hover:bg-gray-100">
            <Bell size={20} />
            <span className="absolute -right-0.5 -top-0.5 h-2.5 w-2.5 rounded-full bg-indigo-600"></span>
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
            <button className="inline-flex items-center gap-2 rounded-lg border border-gray-200 px-3 py-2 text-sm text-gray-700 transition hover:bg-gray-50">
              <LogOut size={16} /> Keluar
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
