import React from 'react';
import { CalendarCheck, Users, CheckCircle2, BookOpen } from 'lucide-react';

const StatCard = ({ icon: Icon, label, value }) => (
  <div className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
      <Icon size={20} />
    </div>
    <div>
      <p className="text-xs text-gray-500">{label}</p>
      <p className="text-lg font-semibold text-gray-900">{value}</p>
    </div>
  </div>
);

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-indigo-50 via-white to-white">
      <div className="mx-auto max-w-7xl px-4 py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs text-indigo-700 ring-1 ring-indigo-200">
              <CalendarCheck size={14} /> Presensi digital kampus
            </div>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
              Kelas modern untuk kampus masa kini
            </h2>
            <p className="mt-3 text-gray-600">
              Kelola materi, tugas, dan presensi mahasiswa dalam satu tempat yang rapi. Desain minimalis, fokus pada pengalaman belajar.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <button className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-4 py-2.5 text-white shadow-sm transition hover:bg-indigo-700">
                Mulai Presensi
              </button>
              <button className="inline-flex items-center justify-center rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-gray-700 transition hover:bg-gray-50">
                Lihat Kelas
              </button>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
              <StatCard icon={Users} label="Mahasiswa" value="120+" />
              <StatCard icon={BookOpen} label="Mata Kuliah" value="18" />
              <StatCard icon={CalendarCheck} label="Sesi Aktif" value="6" />
              <StatCard icon={CheckCircle2} label="Presensi" value="98%" />
            </div>
          </div>
          <div>
            <div className="relative rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
              <div className="aspect-video w-full overflow-hidden rounded-xl bg-gradient-to-br from-indigo-100 via-white to-indigo-50">
                <div className="flex h-full w-full items-center justify-center p-6">
                  <div className="w-full max-w-md rounded-xl bg-white p-4 shadow">
                    <div className="mb-3 flex items-center justify-between">
                      <div>
                        <p className="text-xs text-gray-500">Hari ini, 08:00</p>
                        <p className="font-medium text-gray-900">Pemrograman Web</p>
                      </div>
                      <span className="rounded-full bg-emerald-50 px-2 py-1 text-xs text-emerald-600 ring-1 ring-emerald-200">Sesi Aktif</span>
                    </div>
                    <div className="flex items-center gap-2 rounded-lg border border-dashed border-gray-300 bg-gray-50 p-3">
                      <CalendarCheck className="text-indigo-600" size={18} />
                      <p className="text-sm text-gray-700">Presensi dibuka - gunakan kode 7X3KD</p>
                    </div>
                    <div className="mt-3 grid grid-cols-3 gap-2 text-center">
                      <div className="rounded-lg bg-indigo-50 p-2 text-indigo-700">25 Hadir</div>
                      <div className="rounded-lg bg-amber-50 p-2 text-amber-700">2 Izin</div>
                      <div className="rounded-lg bg-rose-50 p-2 text-rose-700">1 Alfa</div>
                    </div>
                  </div>
                </div>
              </div>
              <p className="mt-3 text-center text-xs text-gray-500">Tampilan contoh kartu kelas dan status presensi</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
