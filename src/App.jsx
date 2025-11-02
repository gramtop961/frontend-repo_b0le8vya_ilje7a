import React, { useEffect, useMemo, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero3D from './components/Hero3D';
import SectionBlock from './components/SectionBlock';
import Footer from './components/Footer';
import { Flower, Landmark, Building2, Star, Sparkles } from 'lucide-react';

export default function App() {
  const [active, setActive] = useState('about');

  const sections = useMemo(() => (
    [
      {
        id: 'about',
        kicker: 'About',
        title: 'Human-centric design for tropical living',
        subtitle:
          'Our practice balances climate-responsive strategies with crafted details. From residences to cultural spaces, we design for light, airflow and longevity.',
        points: ['Climate-first planning', 'Local materials', 'Courtyard & shading', 'Craft + technology'],
        imageSide: 'right',
      },
      {
        id: 'heritage',
        kicker: 'Tamil Heritage',
        title: 'Rooted in tradition, reimagined for today',
        subtitle:
          'Inspired by temple corridors, verandahs, and kolam geometry, we translate timeless patterns into structures that serve contemporary life.',
        points: [
          'Temple-town spatial logic',
          'Kolam-inspired geometry',
          'Chettinad craft references',
          'Cultural continuity in form',
        ],
        imageSide: 'left',
      },
      {
        id: 'projects',
        kicker: 'Projects',
        title: 'Homes, institutions and cultural spaces',
        subtitle:
          'From compact urban homes to public pavilions, our work spans scales while staying responsive to Chennai’s climate and culture.',
        points: ['Residential homes', 'Learning environments', 'Public pavilions', 'Adaptive reuse'],
        imageSide: 'right',
      },
      {
        id: 'process',
        kicker: 'Process',
        title: 'Collaborative, transparent and iterative',
        subtitle:
          'We co-create with clients and consultants through models, mockups and measured feedback—balancing vision with practicality.',
        points: ['Workshops & discovery', 'Iterative prototyping', 'Material studies', 'Cost & timeline clarity'],
        imageSide: 'left',
      },
      {
        id: 'contact',
        kicker: 'Contact',
        title: 'Let’s build together in Chennai and beyond',
        subtitle:
          'Write to us for consultations, proposals or studio visits. நாங்கள் தமிழ் பாரம்பரியத்தின் பெருமையுடன் நவீன வடிவமைப்பை கொண்டுவருகிறோம்.',
        points: ['hello@cholan.studio', '+91 98XX-XXX-XXX', 'Alwarpet, Chennai'],
        imageSide: 'right',
      },
    ]
  ), []);

  const refs = useRef({});

  useEffect(() => {
    const observers = [];
    Object.values(refs.current).forEach((el) => {
      if (!el) return;
      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
              setActive(entry.target.id);
            }
          });
        },
        { threshold: [0.25, 0.5, 0.75] }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, [sections]);

  const motif = useMemo(() => {
    switch (active) {
      case 'about':
        return {
          icon: Flower,
          label: 'Climate + Craft',
          grad: 'from-rose-500 to-amber-400',
          ring: 'ring-rose-300/60',
          glow: 'from-rose-400/30 to-amber-300/20',
        };
      case 'heritage':
        return {
          icon: Landmark,
          label: 'Tamil Heritage',
          grad: 'from-amber-500 to-rose-400',
          ring: 'ring-amber-300/60',
          glow: 'from-amber-400/30 to-rose-300/20',
        };
      case 'projects':
        return {
          icon: Building2,
          label: 'Built Works',
          grad: 'from-emerald-500 to-teal-400',
          ring: 'ring-emerald-300/60',
          glow: 'from-emerald-400/30 to-teal-300/20',
        };
      case 'process':
        return {
          icon: Star,
          label: 'Our Process',
          grad: 'from-indigo-500 to-violet-400',
          ring: 'ring-indigo-300/60',
          glow: 'from-indigo-400/30 to-violet-300/20',
        };
      case 'contact':
      default:
        return {
          icon: Sparkles,
          label: 'Let’s Talk',
          grad: 'from-sky-500 to-cyan-400',
          ring: 'ring-sky-300/60',
          glow: 'from-sky-400/30 to-cyan-300/20',
        };
    }
  }, [active]);

  const Icon = motif.icon;

  // Parallax for the central motif (only this element responds to scroll subtly)
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, 24]);
  const rotate = useTransform(scrollY, [0, 600], [0, 6]);
  const scale = useTransform(scrollY, [0, 600], [1, 1.03]);

  return (
    <div className="relative min-h-screen bg-white text-gray-900">
      <Navbar />
      <Hero3D />

      {/* Central prominent, section-changing motif with parallax */}
      <div className="pointer-events-none fixed inset-0 z-40 grid place-items-center">
        <motion.div
          style={{ y, rotate, scale }}
          className="pointer-events-auto relative"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Soft glow halo */}
          <div className={`absolute -inset-10 rounded-full blur-3xl bg-gradient-to-br ${motif.glow}`} />

          {/* Concentric architectural medallion resembling a gopuram/mandala */}
          <div className={`relative h-36 w-36 sm:h-44 sm:w-44 rounded-full bg-white/80 backdrop-blur-md shadow-2xl ring-4 ${motif.ring} grid place-items-center border border-white/60`}
          >
            {/* Decorative concentric rings */}
            <div className="absolute inset-3 rounded-full border border-black/5" />
            <div className="absolute inset-6 rounded-full border border-black/10" />
            <div className="absolute inset-9 rounded-full border border-black/10" />

            {/* Radiating spokes hinting kolam geometry */}
            {Array.from({ length: 12 }).map((_, i) => (
              <div
                key={i}
                className="absolute top-1/2 left-1/2 h-[38%] w-[2px] bg-gradient-to-b from-black/10 to-black/0"
                style={{ transform: `translate(-50%, -100%) rotate(${(i * 360) / 12}deg)` }}
              />
            ))}

            {/* Center gradient core with icon + label */}
            <div className={`relative z-10 h-20 w-20 sm:h-24 sm:w-24 rounded-full grid place-items-center text-white shadow-xl bg-gradient-to-br ${motif.grad}`}>
              <Icon size={28} />
            </div>
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2">
              <div className="rounded-full px-3 py-1 text-xs sm:text-sm bg-white/90 text-gray-800 shadow border border-black/5">
                {motif.label}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Content sections */}
      {sections.map((s, idx) => (
        <div key={s.id} ref={(el) => (refs.current[s.id] = el)} id={s.id}>
          <div className="relative">
            <div className="pointer-events-none absolute inset-0">
              <div
                className={`absolute -top-20 right-10 h-48 w-48 rounded-full blur-3xl opacity-40 bg-gradient-to-tr ${
                  idx % 2 === 0
                    ? 'from-rose-300/40 to-amber-200/40'
                    : 'from-indigo-300/40 to-violet-200/40'
                }`}
              />
            </div>
            <SectionBlock
              id={s.id}
              kicker={s.kicker}
              title={s.title}
              subtitle={s.subtitle}
              points={s.points}
              imageSide={s.imageSide}
            />
          </div>
        </div>
      ))}

      <Footer />
    </div>
  );
}
