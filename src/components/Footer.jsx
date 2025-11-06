import React from 'react';

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-6 text-sm text-gray-600">
        <div className="flex flex-col items-center justify-between gap-2 sm:flex-row">
          <p>© {new Date().getFullYear()} Kampus Classroom. Semua hak dilindungi.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-gray-900">Kebijakan Privasi</a>
            <a href="#" className="hover:text-gray-900">Syarat & Ketentuan</a>
            <a href="#" className="hover:text-gray-900">Bantuan</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
