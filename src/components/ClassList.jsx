import React from 'react';
import { BookOpen, Calendar, Clock } from 'lucide-react';

const classes = [
  { id: 1, name: 'Pemrograman Web', code: 'IF302', schedule: 'Senin', time: '08:00 - 09:40', color: 'from-indigo-500 to-indigo-600' },
  { id: 2, name: 'Basis Data', code: 'IF214', schedule: 'Selasa', time: '10:00 - 11:40', color: 'from-emerald-500 to-emerald-600' },
  { id: 3, name: 'Jaringan Komputer', code: 'IF221', schedule: 'Rabu', time: '13:00 - 14:40', color: 'from-amber-500 to-amber-600' },
  { id: 4, name: 'Kecerdasan Buatan', code: 'IF330', schedule: 'Kamis', time: '08:00 - 09:40', color: 'from-rose-500 to-rose-600' },
];

const ClassCard = ({ item }) => (
  <div className="group rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition hover:shadow-md">
    <div className={`inline-flex items-center gap-2 rounded-full bg-gradient-to-r ${item.color} px-3 py-1 text-xs text-white`}>
      <BookOpen size={14} /> {item.code}
    </div>
    <h3 className="mt-3 text-lg font-semibold text-gray-900">{item.name}</h3>
    <div className="mt-2 flex items-center gap-4 text-sm text-gray-600">
      <div className="inline-flex items-center gap-1"><Calendar size={16} /> {item.schedule}</div>
      <div className="inline-flex items-center gap-1"><Clock size={16} /> {item.time}</div>
    </div>
    <div className="mt-4 flex gap-2">
      <button className="inline-flex items-center justify-center rounded-lg bg-gray-900 px-3 py-2 text-sm text-white transition hover:bg-black">Masuk Kelas</button>
      <button className="inline-flex items-center justify-center rounded-lg border border-gray-200 px-3 py-2 text-sm text-gray-700 transition hover:bg-gray-50">Detail</button>
    </div>
  </div>
);

const ClassList = () => {
  return (
    <section className="bg-white py-10">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-6 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">Kelas Saya</h2>
            <p className="text-sm text-gray-600">Daftar mata kuliah aktif semester ini</p>
          </div>
          <button className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-gray-700 transition hover:bg-gray-50">Tambah Kelas</button>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {classes.map((c) => (
            <ClassCard key={c.id} item={c} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClassList;
