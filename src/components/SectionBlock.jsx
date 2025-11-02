import React from 'react';
import { motion } from 'framer-motion';

export default function SectionBlock({ id, kicker, title, subtitle, points = [], imageSide = 'right' }) {
  const isLeft = imageSide === 'left';

  return (
    <section id={id} className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className={`grid lg:grid-cols-2 gap-12 items-center ${isLeft ? 'lg:[&>div:first-child]:order-2' : ''}`}>
          {/* Text */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-1 text-xs text-gray-600">
              <span className="h-2 w-2 rounded-full bg-amber-500" /> {kicker}
            </div>
            <h2 className="mt-4 text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900">{title}</h2>
            <p className="mt-3 text-base sm:text-lg text-gray-700">{subtitle}</p>
            {points?.length > 0 && (
              <ul className="mt-6 grid sm:grid-cols-2 gap-3">
                {points.map((p, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="mt-1 h-1.5 w-6 rounded-full bg-gradient-to-r from-rose-500 to-amber-400" />
                    <span className="text-gray-800">{p}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Visual */}
          <div className="relative h-72 sm:h-80 md:h-96">
            <motion.div
              whileHover={{ rotateX: 4, rotateY: -6, scale: 1.01 }}
              transition={{ type: 'spring', stiffness: 200, damping: 20 }}
              className="relative h-full w-full rounded-2xl overflow-hidden shadow-xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-rose-100 via-amber-50 to-white" />
              <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'radial-gradient(circle at 20% 20%, rgba(251,113,133,0.6), transparent 40%), radial-gradient(circle at 80% 70%, rgba(251,191,36,0.6), transparent 40%)' }} />
              <div className="absolute inset-0 grid grid-cols-6 grid-rows-6 opacity-10">
                {Array.from({ length: 36 }).map((_, i) => (
                  <div key={i} className="border border-gray-600" />
                ))}
              </div>
              <div className="absolute right-6 top-6 rounded-md bg-white/80 px-3 py-1 text-xs text-gray-700 backdrop-blur border border-white/50">
                Concept render
              </div>
              <motion.div
                className="absolute bottom-6 left-6 text-sm text-gray-800"
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.4 }}
              >
                Passive strategies • Courtyard • Cross-ventilation
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
