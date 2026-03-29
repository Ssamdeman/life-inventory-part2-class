'use client';

import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { ArrowLeft, Grip, Maximize2 } from 'lucide-react';
import Link from 'next/link';

const prototypeScreens = [
  {
    id: 'p1',
    label: 'Home Screen',
    description: 'Showing inventory collections — Electronics, Kitchen, Closet, etc.',
    src: '/assets/phase4/home_screen.jpg',
  },
  {
    id: 'p2',
    label: 'Data Entry Form',
    description: 'Item Name, Room, Location Photo, Labels, and Quantity fields filled in.',
    src: '/assets/phase4/data_entry_form.jpg',
  },
  {
    id: 'p3',
    label: 'Search Screen',
    description: "With 'charger' typed in the search bar.",
    src: '/assets/phase4/search_screen.jpg',
  },
  {
    id: 'p4',
    label: 'Item Detail Screen',
    description: 'Showing location photo, room, and drawer information.',
    src: '/assets/phase4/item_detail_screen.jpg',
  },
  {
    id: 'p5',
    label: 'Stock Detail Screen',
    description: 'Showing Toilet Paper with Quantity: 8 rolls and Last Bought: 2 weeks ago.',
    src: '/assets/phase4/stock_detail_screen.jpg',
  },
  {
    id: 'p6',
    label: 'Update Stock Screen',
    description: 'Showing +/- stepper buttons for quantity update.',
    src: '/assets/phase4/update_stock_screen.jpg',
  },
];

export default function Phase4PaperPrototyping() {
  const [showPhotos, setShowPhotos] = useState(false);

  return (
    <main className="min-h-screen bg-[#0A0A0A] text-[#F0EDE8] font-mono selection:bg-[#E8C547] selection:text-[#0A0A0A]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-[#2A2A2A] bg-[#0A0A0A]/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 text-[#F0EDE8]/70 hover:text-[#E8C547] transition-colors group">
            <ArrowLeft className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" />
            <span className="text-xs uppercase tracking-widest">Back to Hub</span>
          </Link>
          <div className="font-serif text-xl italic text-[#E8C547]">Phase 04</div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-24 px-6 border-b border-[#2A2A2A]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-xs uppercase tracking-widest text-[#E8C547] mb-6 flex items-center gap-3">
              <span className="w-8 h-[1px] bg-[#E8C547]"></span>
              Paper Prototyping &amp; Low-Fidelity Testing
            </div>
            <h1 className="font-serif text-6xl md:text-8xl leading-none mb-8">
              Testing<br />
              <span className="text-[#E8C547] italic">Ideas.</span>
            </h1>
            <p className="max-w-2xl text-lg text-[#F0EDE8]/60 leading-relaxed">
              We created paper prototypes of our interfaces based on our sketches, tested them
              during class, and made necessary updates based on users&apos; feedback. This
              low-fidelity pass reveals friction before a single line of code is written.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Prototype Photos Toggle Section */}
      <section className="py-24 px-6 min-h-[50vh]">
        <div className="max-w-7xl mx-auto">
          {/* Global Toggle Button */}
          <motion.button
            onClick={() => setShowPhotos(!showPhotos)}
            className={`w-full group relative border p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between overflow-hidden transition-all duration-700 ${
              showPhotos
                ? 'border-[#E8C547] bg-[#E8C547] text-[#0A0A0A]'
                : 'border-[#2A2A2A] bg-[#0F0F0F] text-[#F0EDE8] hover:border-[#E8C547]/50'
            }`}
          >
            {/* Shimmer sweep */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#E8C547]/0 via-[#E8C547]/5 to-[#E8C547]/0 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

            <div className="relative z-10 flex flex-col items-start text-left mb-6 md:mb-0">
              <span className="text-xs uppercase tracking-widest opacity-60 font-mono mb-4 flex items-center gap-2">
                <Grip className="w-4 h-4" /> Global Toggle
              </span>
              <h2 className="font-serif text-4xl md:text-6xl">
                {showPhotos ? 'Hide' : 'View'} Prototype Photos
              </h2>
            </div>

            <div className="relative z-10">
              <div className={`p-4 rounded-full border transition-colors duration-500 ${
                showPhotos ? 'border-[#0A0A0A]/20' : 'border-[#2A2A2A] group-hover:border-[#E8C547]'
              }`}>
                <Maximize2 className={`w-8 h-8 transition-transform duration-700 ${showPhotos ? 'rotate-180 text-[#0A0A0A]' : 'text-[#E8C547]'}`} />
              </div>
            </div>
          </motion.button>

          {/* Expandable Gallery */}
          <AnimatePresence>
            {showPhotos && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="overflow-hidden"
              >
                <div className="pt-24 pb-12">
                  {/* Section Header */}
                  <div className="flex items-center justify-between mb-6 border-b border-[#2A2A2A] pb-8">
                    <h3 className="font-serif text-3xl italic text-[#E8C547]">Prototype Screens</h3>
                    <div className="text-xs uppercase tracking-widest text-[#F0EDE8]/40">
                      Phase 04 • Paper Build
                    </div>
                  </div>

                  {/* Intro Text */}
                  <p className="max-w-3xl text-[#F0EDE8]/60 leading-relaxed mb-16 text-sm font-mono">
                    Digital photos of the paper prototype screens are shown below. The prototype was
                    tested in the following states:
                  </p>

                  {/* Screen State Index */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-20">
                    {prototypeScreens.map((screen, i) => (
                      <div
                        key={screen.id}
                        className="flex items-start gap-4 border border-[#2A2A2A] bg-[#0F0F0F] px-5 py-4 hover:border-[#E8C547]/30 transition-colors duration-300"
                      >
                        <span className="text-[#E8C547] font-mono text-[10px] mt-[2px] shrink-0">0{i + 1}</span>
                        <div>
                          <p className="text-xs font-mono uppercase tracking-widest text-[#F0EDE8]/80 mb-1">{screen.label}</p>
                          <p className="text-[11px] font-mono text-[#F0EDE8]/40 leading-relaxed">{screen.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Photo Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                    {prototypeScreens.map((screen, idx) => (
                      <motion.div
                        key={screen.id}
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.15 + idx * 0.08 }}
                        className="group flex flex-col"
                      >
                        {/* Image Container */}
                        <div className="relative w-full border border-[#2A2A2A] bg-[#050505] group-hover:border-[#E8C547] transition-colors duration-500 overflow-hidden flex items-center justify-center min-h-[320px]">
                          <img
                            src={screen.src}
                            alt={screen.label}
                            className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-[1.02] relative z-10"
                            onError={(e) => {
                              e.currentTarget.style.display = 'none';
                              const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                              if (fallback) fallback.style.display = 'flex';
                            }}
                            onLoad={(e) => {
                              const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                              if (fallback) fallback.style.display = 'none';
                            }}
                          />
                          {/* Fallback placeholder */}
                          <div
                            className="absolute inset-0 flex-col items-center justify-center p-6 text-center gap-3"
                            style={{ display: 'flex' }}
                          >
                            <span className="text-[10px] font-mono uppercase tracking-widest text-[#E8C547] border border-[#E8C547] px-3 py-1">
                              Pending Upload
                            </span>
                            <span className="text-sm font-serif italic text-[#F0EDE8]/70 block">{screen.label}</span>
                            <span className="text-[10px] font-mono text-[#F0EDE8]/30 block">{screen.src}</span>
                          </div>
                        </div>

                        {/* Caption */}
                        <div className="pt-4 border-t border-[#2A2A2A] mt-4 flex items-start justify-between gap-4">
                          <span className="text-xs font-mono font-bold text-[#E8C547] shrink-0">0{idx + 1}</span>
                          <div className="text-right">
                            <p className="text-xs font-mono uppercase tracking-widest text-[#F0EDE8]/70">{screen.label}</p>
                            <p className="text-[11px] font-mono text-[#F0EDE8]/40 mt-1 leading-relaxed">{screen.description}</p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* End marker */}
                  <div className="mt-20 w-full h-[1px] bg-gradient-to-r from-transparent via-[#2A2A2A] to-transparent" />
                  <div className="text-center mt-8">
                    <span className="text-[10px] uppercase tracking-widest text-[#F0EDE8]/30">End of Prototype Screens</span>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-[#2A2A2A] bg-[#050505]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="font-serif text-2xl italic text-[#E8C547]">Life Inventory.</div>
          <div className="text-xs uppercase tracking-widest text-[#F0EDE8]/40 text-center md:text-right">
            Group 13 • Semester Project<br />
            Designed &amp; Developed for HCI
          </div>
        </div>
      </footer>
    </main>
  );
}
