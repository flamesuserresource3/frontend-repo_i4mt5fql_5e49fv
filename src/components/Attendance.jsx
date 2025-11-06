import React, { useMemo, useState } from 'react';
import { CalendarCheck, QrCode, Send, CheckCircle2, CircleX, Info } from 'lucide-react';

const Attendance = () => {
  const [code, setCode] = useState('');
  const [status, setStatus] = useState(null); // 'success' | 'error' | null

  const today = useMemo(() => new Date().toLocaleDateString('id-ID', { weekday: 'long', day: '2-digit', month: 'long', year: 'numeric' }), []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (code.trim().toUpperCase() === '7X3KD') {
      setStatus('success');
    } else {
      setStatus('error');
    }
  };

  return (
    <section className="bg-gray-50 py-10">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-6 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">Presensi Mahasiswa</h2>
            <p className="text-sm text-gray-600">Masukkan kode presensi yang diberikan dosen</p>
          </div>
          <div className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs text-indigo-700 ring-1 ring-indigo-200">
            <CalendarCheck size={14} /> {today}
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <form onSubmit={handleSubmit} className="grid gap-4 sm:grid-cols-[1fr_auto]">
                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-700">Kode Presensi</label>
                  <input
                    type="text"
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    placeholder="Masukkan kode, contoh: 7X3KD"
                    className="w-full rounded-lg border border-gray-300 px-3 py-2 placeholder:text-gray-400 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200"
                  />
                </div>
                <button
                  type="submit"
                  className="mt-6 inline-flex items-center justify-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 text-white shadow-sm transition hover:bg-indigo-700 sm:mt-auto"
                >
                  <Send size={16} /> Kirim Presensi
                </button>
              </form>

              {status === 'success' && (
                <div className="mt-4 flex items-center gap-3 rounded-lg bg-emerald-50 p-3 text-emerald-700 ring-1 ring-emerald-200">
                  <CheckCircle2 size={18} /> Presensi tercatat. Selamat belajar!
                </div>
              )}
              {status === 'error' && (
                <div className="mt-4 flex items-center gap-3 rounded-lg bg-rose-50 p-3 text-rose-700 ring-1 ring-rose-200">
                  <CircleX size={18} /> Kode tidak valid. Coba lagi atau hubungi dosen.
                </div>
              )}

              <div className="mt-6 rounded-lg bg-gray-50 p-4 text-sm text-gray-700">
                <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-white px-2 py-1 text-[11px] text-gray-700 ring-1 ring-gray-200">
                  <Info size={12} /> Tips presensi
                </div>
                <ul className="list-inside list-disc space-y-1">
                  <li>Gunakan kode yang masih aktif pada jam kuliah.</li>
                  <li>Pastikan nama dan NIM di profil sudah benar.</li>
                  <li>Jika terkendala, gunakan jaringan kampus untuk kestabilan.</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <div className="rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-sm">
              <div className="mx-auto mb-3 grid h-28 w-28 place-content-center rounded-xl bg-indigo-50 text-indigo-700">
                <QrCode size={48} className="mx-auto" />
              </div>
              <p className="text-base font-semibold text-gray-900">Presensi via Kode</p>
              <p className="mt-1 text-sm text-gray-600">Dosen membagikan kode unik tiap sesi. Masukkan kode untuk konfirmasi kehadiran.</p>
              <hr className="my-4" />
              <div className="grid grid-cols-3 gap-2 text-xs">
                <div className="rounded-lg bg-indigo-50 p-2 text-indigo-700">Hadir</div>
                <div className="rounded-lg bg-amber-50 p-2 text-amber-700">Izin</div>
                <div className="rounded-lg bg-rose-50 p-2 text-rose-700">Alfa</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Attendance;
