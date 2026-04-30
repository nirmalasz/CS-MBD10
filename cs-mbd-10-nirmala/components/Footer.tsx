import Link from 'next/link';
import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#090f1b] text-slate-400 py-8 border-t border-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
        
        <div className="text-sm">
          &copy; 2026 Nirmala. CS SBD 10.
        </div>
        <nav className="flex space-x-6 text-sm">
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <Link href="/register" className="hover:text-white transition-colors">
            Register
          </Link>
          <Link href="/login" className="hover:text-white transition-colors">
            Login
          </Link>
        </nav>
      </div>
    </footer>
  );
}