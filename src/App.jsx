import React, { useEffect, useMemo, useRef, useState } from 'react';
import Navbar from './components/Navbar';
import Hero3D from './components/Hero3D';
import SectionBlock from './components/SectionBlock';
import Footer from './components/Footer';
import { Flower, Landmark, Building2, Star, Sparkles } from 'lucide-react';

export default function App() {
  const [active, setActive] = useState('about');

  const sections = useMemo(() => ([
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
  ]), []);

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
          ring: 'ring-rose-300/50',
        };
      case 'heritage':
        return {
          icon: Landmark,
          label: 'Tamil Heritage',
          grad: 'from-amber-500 to-rose-400',
          ring: 'ring-amber-300/50',
        };
      case 'projects':
        return {
          icon: Building2,
          label: 'Built Works',
          grad: 'from-emerald-500 to-teal-400',
          ring: 'ring-emerald-300/50',
        };
      case 'process':
        return {
          icon: Star,
          label: 'Our Process',
          grad: 'from-indigo-500 to-violet-400',
          ring: 'ring-indigo-300/50',
        };
      case 'contact':
      default:
        return {
          icon: Sparkles,
          label: 'Let’s Talk',
          grad: 'from-sky-500 to-cyan-400',
          ring: 'ring-sky-300/50',
        };
    }
  }, [active]);

  const Icon = motif.icon;

  return (
    <div className="relative min-h-screen bg-white text-gray-900">
      <Navbar />
      <Hero3D />

      {/* Persistent floating motif that changes per section */}
      <div className="pointer-events-none fixed top-1/2 -translate-y-1/2 right-4 sm:right-6 z-40">
        <div className={`pointer-events-auto flex items-center gap-3 rounded-full bg-white/80 px-3 py-2 shadow-lg backdrop-blur ring-2 ${motif.ring}`}>
          <div className={`h-9 w-9 rounded-full bg-gradient-to-br ${motif.grad} grid place-items-center text-white`}>
            <Icon size={18} />
          </div>
          <span className="hidden sm:block text-sm font-medium text-gray-800">{motif.label}</span>
        </div>
      </div>

      {/* Content sections */}
      {sections.map((s, idx) => (
        <div key={s.id} ref={(el) => (refs.current[s.id] = el)} id={s.id}>
          {/* Add subtle background accents per section */}
          <div className="relative">
            <div className="pointer-events-none absolute inset-0 -z-0">
              <div className={`absolute -top-20 right-10 h-48 w-48 rounded-full blur-3xl opacity-40 bg-gradient-to-tr ${idx % 2 === 0 ? 'from-rose-300/40 to-amber-200/40' : 'from-indigo-300/40 to-violet-200/40'}`} />
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
