import React from 'react';

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/50 bg-white/70 border-b border-black/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-lg bg-gradient-to-tr from-amber-500 to-rose-500 shadow-lg shadow-rose-500/20 flex items-center justify-center text-white font-bold">CA</div>
          <div className="leading-tight">
            <div className="text-lg font-semibold tracking-tight text-gray-900">Cholan Architects</div>
            <div className="text-xs text-gray-600">Contemporary • Tamil Heritage • Chennai</div>
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-700">
          <a href="#about" className="hover:text-gray-900">About</a>
          <a href="#heritage" className="hover:text-gray-900">Heritage</a>
          <a href="#projects" className="hover:text-gray-900">Projects</a>
          <a href="#process" className="hover:text-gray-900">Process</a>
          <a href="#contact" className="px-3 py-1.5 rounded-md bg-gray-900 text-white hover:bg-gray-800">Contact</a>
        </nav>
      </div>
    </header>
  );
}
