import React from 'react';

export default function Footer() {
  return (
    <footer className="border-t border-black/5 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 grid sm:grid-cols-2 gap-6 items-center">
        <div className="space-y-2">
          <div className="text-lg font-semibold text-gray-900">Cholan Architects</div>
          <p className="text-sm text-gray-700">No. 12, TTK Road, Alwarpet, Chennai 600018 • +91 98XX-XXX-XXX</p>
          <p className="text-sm text-gray-600">Made with love for Tamil heritage and modern living.</p>
        </div>
        <div className="justify-self-end text-sm text-gray-600">
          © {new Date().getFullYear()} Cholan Architects. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
