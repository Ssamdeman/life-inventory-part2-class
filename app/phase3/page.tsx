'use client';

import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { ArrowLeft, Grip, Maximize2 } from 'lucide-react';
import Link from 'next/link';

export default function Phase3Prototypes() {
  const [showStoryboards, setShowStoryboards] = useState(false);
  const [showSketches, setShowSketches] = useState(false);
  const [activeMember, setActiveMember] = useState<string | null>(null);

  // Sample storyboard panels based on typical human-drawn uploads
  const storyboardPanels = [
    { id: 1, src: '/assets/phase3/task1_panel1.jpg', alt: 'Storyboard Task 1 - Panel 1' },
    { id: 2, src: '/assets/phase3/task2_panel2.jpg', alt: 'Storyboard Task 1 - Panel 2' },
  ];

  // Interface Sketches 
  const memberSketches = [
    {
      name: 'Sonal',
      panels: [
        { id: 's1', src: '/assets/phase3/sonal_sketch1.jpg', alt: "Sonal's Sketch 1" },
        { id: 's2', src: '/assets/phase3/sonal_sketch2.jpg', alt: "Sonal's Sketch 2" },
        { id: 's3', src: '/assets/phase3/sonal_sketch3.jpg', alt: "Sonal's Sketch 3" },
      ]
    },
    {
      name: 'Richard',
      panels: [
        { id: 'r1', src: '/assets/phase3/richard_sketch1.jpg', alt: "Richard's Sketch 1" },
        { id: 'r2', src: '/assets/phase3/richard_sketch2.jpg', alt: "Richard's Sketch 2" },
        { id: 'r3', src: '/assets/phase3/richard_sketch3.jpg', alt: "Richard's Sketch 3" },
      ]
    },
    {
      name: 'Samuel',
      panels: [
        { id: 'sm1', src: '/assets/phase3/samuel_sketch1.jpg', alt: "Samuel's Sketch 1" },
        { id: 'sm2', src: '/assets/phase3/samuel_sketch2.jpg', alt: "Samuel's Sketch 2" },
        { id: 'sm3', src: '/assets/phase3/samuel_sketch3.jpg', alt: "Samuel's Sketch 3" },
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-[#0A0A0A] text-[#F0EDE8] font-mono selection:bg-[#E8C547] selection:text-[#0A0A0A]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-[#2A2A2A] bg-[#0A0A0A]/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 text-[#F0EDE8]/70 hover:text-[#E8C547] transition-colors group">
            <ArrowLeft className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" />
            <span className="text-xs uppercase tracking-widest">Back to Hub</span>
          </Link>
          <div className="font-serif text-xl italic text-[#E8C547]">Phase 03</div>
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
              Prototypes & Storyboards
            </div>
            <h1 className="font-serif text-6xl md:text-8xl leading-none mb-8">
              Visualizing<br />
              <span className="text-[#E8C547] italic">Interactions.</span>
            </h1>
            <p className="max-w-2xl text-lg text-[#F0EDE8]/60 leading-relaxed">
              Before writing a line of code, we physically mapped out the key scenarios. These raw, hand-drawn panels represent the foundational interactions of the Life Inventory system.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Storyboards Section */}
      <section className="py-24 px-6 min-h-[50vh]">
        <div className="max-w-7xl mx-auto">
          {/* Global Toggle Button */}
          <motion.button
            onClick={() => setShowStoryboards(!showStoryboards)}
            className={`w-full group relative border p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between overflow-hidden transition-all duration-700 ${showStoryboards
                ? 'border-[#E8C547] bg-[#E8C547] text-[#0A0A0A]'
                : 'border-[#2A2A2A] bg-[#0F0F0F] text-[#F0EDE8] hover:border-[#E8C547]/50'
              }`}
          >
            {/* Background Hover Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#E8C547]/0 via-[#E8C547]/5 to-[#E8C547]/0 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

            <div className="relative z-10 flex flex-col items-start text-left mb-6 md:mb-0">
              <span className="text-xs uppercase tracking-widest opacity-60 font-mono mb-4 flex items-center gap-2">
                <Grip className="w-4 h-4" /> Global Toggle
              </span>
              <h2 className="font-serif text-4xl md:text-6xl">
                {showStoryboards ? 'Hide' : 'View'} Storyboards
              </h2>
            </div>

            <div className="relative z-10">
              <div className={`p-4 rounded-full border transition-colors duration-500 ${showStoryboards ? 'border-[#0A0A0A]/20' : 'border-[#2A2A2A] group-hover:border-[#E8C547]'
                }`}>
                <Maximize2 className={`w-8 h-8 transition-transform duration-700 ${showStoryboards ? 'rotate-180 text-[#0A0A0A]' : 'text-[#E8C547]'}`} />
              </div>
            </div>
          </motion.button>

          {/* Collective Gallery expansion */}
          <AnimatePresence>
            {showStoryboards && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="overflow-hidden"
              >
                <div className="pt-24 pb-12">
                  <div className="flex items-center justify-between mb-16 border-b border-[#2A2A2A] pb-8">
                    <h3 className="font-serif text-3xl italic text-[#E8C547]">Raw Sketches</h3>
                    <div className="text-xs uppercase tracking-widest text-[#F0EDE8]/40">
                      Phase 03 • Grid View
                    </div>
                  </div>

                  {/* Clean Vertical Flow / Masonry-like Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                    {storyboardPanels.map((panel, idx) => (
                      <motion.div
                        key={panel.id}
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 + idx * 0.1 }}
                        className="group flex flex-col"
                      >
                        {/* Image Container with severe styling */}
                        <div className="relative w-full border border-[#2A2A2A] bg-[#050505] group-hover:border-[#E8C547] transition-colors duration-500 overflow-hidden flex items-center justify-center min-h-[300px]">
                          {/* We try to load the image. But if it's missing, it falls back to alt text beautifully */}
                          <img
                            src={panel.src}
                            alt={panel.alt}
                            className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-[1.02] relative z-10"
                            onError={(e) => {
                              // Hide broken image icon
                              e.currentTarget.style.display = 'none';
                              // Show fallback div explicitly on error
                              const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                              if (fallback) fallback.style.display = 'flex';
                            }}
                            onLoad={(e) => {
                              // Hide fallback div on successful load
                              const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                              if (fallback) fallback.style.display = 'none';
                            }}
                          />
                          {/* Fallback overlay (visible initially, hidden on load) */}
                          <div className="absolute inset-0 flex-col items-center justify-center p-6 text-center" style={{ display: 'flex' }}>
                            <span className="text-[10px] font-mono uppercase tracking-widest text-[#E8C547] border border-[#E8C547] px-3 py-1 mb-3">Pending Upload</span>
                            <span className="text-sm font-serif italic text-[#F0EDE8]/70 block">{panel.alt}</span>
                            <span className="text-[10px] font-mono text-[#F0EDE8]/40 mt-2 block">{panel.src}</span>
                          </div>
                        </div>
                        {/* Caption Space (minimal) */}
                        <div className="pt-4 border-t border-[#2A2A2A] mt-4 flex items-center justify-between">
                          <span className="text-xs font-mono font-bold text-[#E8C547]">0{idx + 1}</span>
                          <span className="text-xs font-mono uppercase tracking-widest text-[#F0EDE8]/50">Panel Sequence</span>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* End of Gallery marker */}
                  <div className="mt-24 w-full h-[1px] bg-gradient-to-r from-transparent via-[#2A2A2A] to-transparent"></div>
                  <div className="text-center mt-8">
                    <span className="text-[10px] uppercase tracking-widest text-[#F0EDE8]/30">End of Sequence</span>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Interface Sketches Section */}
      <section className="py-24 px-6 border-t border-[#2A2A2A] bg-[#0A0A0A] min-h-[50vh]">
        <div className="max-w-7xl mx-auto">
          {/* Global Toggle Button for Sketches */}
          <motion.button
            onClick={() => setShowSketches(!showSketches)}
            className={`w-full group relative border p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between overflow-hidden transition-all duration-700 ${showSketches
                ? 'border-[#E8C547] bg-[#E8C547] text-[#0A0A0A]'
                : 'border-[#2A2A2A] bg-[#0F0F0F] text-[#F0EDE8] hover:border-[#E8C547]/50'
              }`}
          >
            {/* Background Hover Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#E8C547]/0 via-[#E8C547]/5 to-[#E8C547]/0 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

            <div className="relative z-10 flex flex-col items-start text-left mb-6 md:mb-0">
              <span className="text-xs uppercase tracking-widest opacity-60 font-mono mb-4 flex items-center gap-2">
                <Grip className="w-4 h-4" /> Global Toggle
              </span>
              <h2 className="font-serif text-4xl md:text-6xl">
                {showSketches ? 'Hide' : 'View'} Sketches
              </h2>
            </div>

            <div className="relative z-10">
              <div className={`p-4 rounded-full border transition-colors duration-500 ${showSketches ? 'border-[#0A0A0A]/20' : 'border-[#2A2A2A] group-hover:border-[#E8C547]'
                }`}>
                <Maximize2 className={`w-8 h-8 transition-transform duration-700 ${showSketches ? 'rotate-180 text-[#0A0A0A]' : 'text-[#E8C547]'}`} />
              </div>
            </div>
          </motion.button>

          <AnimatePresence>
            {showSketches && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="overflow-hidden"
              >
                <div className="pt-24 pb-12">
                  <div className="mb-16">
                    <h2 className="font-serif text-5xl md:text-7xl mb-6">Interface <span className="text-[#E8C547] italic">Sketches.</span></h2>
                    <p className="max-w-2xl text-lg text-[#F0EDE8]/60 leading-relaxed">
                      Divergent explorations of the Life Inventory interface. Each team member sketched their own vision of the UI before we converged on a unified design.
                    </p>
                  </div>

                  <div className="flex flex-col gap-6">
                    {memberSketches.map((member) => {
              const isActive = activeMember === member.name;
              
              return (
                <div key={member.name} className="border border-[#2A2A2A] bg-[#0F0F0F] transition-colors hover:border-[#E8C547]/50">
                  <button
                    onClick={() => setActiveMember(isActive ? null : member.name)}
                    className="w-full flex items-center justify-between p-8 md:p-10 group"
                  >
                    <div className="flex items-center gap-6">
                      <span className="text-xs font-mono uppercase tracking-widest text-[#E8C547] opacity-60 group-hover:opacity-100 transition-opacity">
                        Member 0{memberSketches.findIndex(m => m.name === member.name) + 1}
                      </span>
                      <h3 className="font-serif text-3xl md:text-4xl group-hover:text-[#E8C547] transition-colors">{member.name}</h3>
                    </div>
                    <div className={`p-4 rounded-full border transition-colors duration-500 ${isActive ? 'border-[#0A0A0A]/20 bg-[#E8C547]' : 'border-[#2A2A2A] group-hover:border-[#E8C547]'}`}>
                      <Maximize2 className={`w-6 h-6 transition-transform duration-700 ${isActive ? 'rotate-180 text-[#0A0A0A]' : 'text-[#E8C547]'}`} />
                    </div>
                  </button>

                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden border-t border-[#2A2A2A]"
                      >
                        <div className="p-8 md:p-12">
                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                            {member.panels.map((panel, idx) => (
                              <motion.div
                                key={panel.id}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className="group flex flex-col"
                              >
                                <div className="relative w-full border border-[#2A2A2A] bg-[#050505] group-hover:border-[#E8C547] transition-colors duration-500 overflow-hidden flex items-center justify-center min-h-[300px]">
                                  <img
                                    src={panel.src}
                                    alt={panel.alt}
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
                                  <div className="absolute inset-0 flex-col items-center justify-center p-6 text-center" style={{ display: 'flex' }}>
                                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#E8C547] border border-[#E8C547] px-3 py-1 mb-3">Pending Upload</span>
                                    <span className="text-sm font-serif italic text-[#F0EDE8]/70 block">{panel.alt}</span>
                                    <span className="text-[10px] font-mono text-[#F0EDE8]/40 mt-2 block">{panel.src}</span>
                                  </div>
                                </div>
                                <div className="pt-4 border-t border-[#2A2A2A] mt-4 flex items-center justify-between">
                                  <span className="text-xs font-mono font-bold text-[#E8C547]">0{idx + 1}</span>
                                  <span className="text-xs font-mono uppercase tracking-widest text-[#F0EDE8]/50">Sketch View</span>
                                </div>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
                  </div>
                  
                  {/* End of Gallery marker */}
                  <div className="mt-24 w-full h-[1px] bg-gradient-to-r from-transparent via-[#2A2A2A] to-transparent"></div>
                  <div className="text-center mt-8">
                    <span className="text-[10px] uppercase tracking-widest text-[#F0EDE8]/30">End of Sketches</span>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </main>
  );
}
