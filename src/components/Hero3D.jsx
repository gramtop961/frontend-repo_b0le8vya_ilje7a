import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero3D() {
  return (
    <section id="home" className="relative min-h-screen grid place-items-center overflow-hidden pt-16">
      {/* Soft background wash */}
      <div className="absolute inset-0 bg-gradient-to-b from-amber-50 via-white to-rose-50" />
      <div className="pointer-events-none absolute -top-32 right-0 h-[32rem] w-[32rem] rounded-full bg-rose-400/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-16 h-[32rem] w-[32rem] rounded-full bg-amber-400/20 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Copy */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white/70 px-3 py-1 text-xs text-gray-600 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-rose-500" /> Chennai • India
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.1] text-gray-900">
              Contemporary architecture rooted in Tamil heritage
            </h1>
            <p className="text-base sm:text-lg text-gray-700 max-w-xl">
              We craft mindful spaces for living, learning, and gathering—drawing inspiration from Kolam geometry, temple courtyards, and the rhythms of Chennai.
            </p>
            <div className="flex gap-3">
              <a href="#projects" className="px-4 py-2 rounded-md bg-gray-900 text-white hover:bg-gray-800">View Projects</a>
              <a href="#contact" className="px-4 py-2 rounded-md border border-gray-300 bg-white hover:bg-gray-50">Book a Consultation</a>
            </div>
          </div>

          {/* 3D Visual - Spline */}
          <div className="relative h-[420px] md:h-[520px] w-full">
            <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl bg-white">
              <Spline
                scene="https://prod.spline.design/N8g2VNcx8Rycz93J/scene.splinecode"
                style={{ width: '100%', height: '100%' }}
              />
              {/* Non-interactive overlays should not block the 3D canvas */}
              <div className="pointer-events-none absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-t from-white/0 via-transparent to-white/0" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
