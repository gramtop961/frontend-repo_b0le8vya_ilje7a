import React, { useRef } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';

export default function Hero3D() {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-250, 250], [15, -15]);
  const rotateY = useTransform(x, [-250, 250], [-15, 15]);

  function onMouseMove(e) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const dx = e.clientX - (rect.left + rect.width / 2);
    const dy = e.clientY - (rect.top + rect.height / 2);
    x.set(dx);
    y.set(dy);
  }

  return (
    <section id="home" className="relative min-h-screen grid place-items-center overflow-hidden pt-16">
      <div className="absolute inset-0 bg-gradient-to-b from-amber-50 via-white to-rose-50" />
      <div className="pointer-events-none absolute -top-32 right-0 h-[32rem] w-[32rem] rounded-full bg-rose-400/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-16 h-[32rem] w-[32rem] rounded-full bg-amber-400/20 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
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

          <div className="relative h-[420px] md:h-[520px]" onMouseMove={onMouseMove}>
            <motion.div
              ref={ref}
              style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
              className="relative h-full w-full rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 p-1 shadow-2xl"
            >
              <div
                style={{ transform: 'translateZ(40px)' }}
                className="absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_30%_20%,#fb7185_0%,transparent_40%),radial-gradient(circle_at_80%_70%,#fbbf24_0%,transparent_45%)] opacity-40"
              />
              <div className="relative h-full w-full rounded-2xl overflow-hidden bg-[conic-gradient(at_50%_50%,#111_0deg,#1f2937_120deg,#0f172a_240deg,#111_360deg)]">
                <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 opacity-10">
                  {Array.from({ length: 9 }).map((_, i) => (
                    <div key={i} className="border border-white/10" />
                  ))}
                </div>
                <motion.div
                  style={{ transform: 'translateZ(80px)' }}
                  className="absolute left-8 top-8 rounded-lg bg-white/10 px-3 py-1 text-xs text-white backdrop-blur"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  3D Studio Preview
                </motion.div>
                <motion.div
                  style={{ transform: 'translateZ(100px)' }}
                  className="absolute right-8 bottom-8 rounded-lg bg-rose-500/90 px-3 py-1 text-xs text-white"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  Passive Cooling • Courtyard Light • Shading
                </motion.div>
                <motion.div
                  style={{ transform: 'translateZ(60px)' }}
                  className="absolute inset-6 rounded-xl border border-white/10"
                  animate={{ boxShadow: [
                    '0 0 0px rgba(251,113,133,0.2)',
                    '0 0 40px rgba(251,113,133,0.25)',
                    '0 0 0px rgba(251,113,133,0.2)'
                  ] }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
