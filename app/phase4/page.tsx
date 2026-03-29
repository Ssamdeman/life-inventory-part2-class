'use client';

import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { ArrowLeft, Grip, Maximize2 } from 'lucide-react';
import Link from 'next/link';

const prototypeScreens = [
  {
    id: 'p1',
    label: 'Home Dashboard',
    description: 'Items: 12, Rooms: 4, +Add Item button.',
    src: '/assets/phase4/screen_1.jpeg',
  },
  {
    id: 'p2',
    label: 'Camera Capture',
    description: 'Take Photo — tap to capture.',
    src: '/assets/phase4/screen_2.jpeg',
  },
  {
    id: 'p3',
    label: 'Add New Item Form',
    description: 'Item Name, Tags, Quantity, Save — with purple sticky note showing item.',
    src: '/assets/phase4/screen_3.jpeg',
  },
  {
    id: 'p4',
    label: 'Item Saved Confirmation',
    description: 'Checkmark, Done button.',
    src: '/assets/phase4/screen_4.jpeg',
  },
  {
    id: 'p5',
    label: 'Find Item Search',
    description: 'Search bar, Filter: All, purple overlay.',
    src: '/assets/phase4/screen_5.jpeg',
  },
  {
    id: 'p6',
    label: 'Search Results',
    description: 'Charger / Bedroom, USB Cable / Laptop Bag, Earphones / Drawer.',
    src: '/assets/phase4/screen_6.jpeg',
  },
  {
    id: 'p7',
    label: 'Item Detail',
    description: 'Charger, location photo, Room: Bedroom, Desk drawer, Yes / No found.',
    src: '/assets/phase4/screen_7.jpeg',
  },
  {
    id: 'p8',
    label: 'Quick Check / Stock Search',
    description: 'Search item, Filter: Kitchen / All rooms.',
    src: '/assets/phase4/screen_8.jpeg',
  },
  {
    id: 'p9',
    label: 'Stock Detail',
    description: 'Toilet Paper, Quantity: 8 rolls, Last bought: 2 weeks ago.',
    src: '/assets/phase4/screen_9.jpeg',
  },
  {
    id: 'p10',
    label: 'Update Stock',
    description: 'Toilet Paper, -/8/+, Update button.',
    src: '/assets/phase4/screen_10.jpeg',
  },
];

export default function Phase4PaperPrototyping() {
  const [showPhotos, setShowPhotos] = useState(false);
  const [showBriefing, setShowBriefing] = useState(false);
  const [showTeamRoles, setShowTeamRoles] = useState(false);
  const [showTaskCards, setShowTaskCards] = useState(false);
  const [showObservations, setShowObservations] = useState(false);
  const [showIteration, setShowIteration] = useState(false);

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
                        <span className="text-[#E8C547] font-mono text-[10px] mt-[2px] shrink-0">{String(i + 1).padStart(2, '0')}</span>
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
                          <span className="text-xs font-mono font-bold text-[#E8C547] shrink-0">{String(idx + 1).padStart(2, '0')}</span>
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

      {/* Briefing Section */}
      <section className="py-24 px-6 border-t border-[#2A2A2A]">
        <div className="max-w-7xl mx-auto">
          {/* Global Toggle Button */}
          <motion.button
            onClick={() => setShowBriefing(!showBriefing)}
            className={`w-full group relative border p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between overflow-hidden transition-all duration-700 ${
              showBriefing
                ? 'border-[#E8C547] bg-[#E8C547] text-[#0A0A0A]'
                : 'border-[#2A2A2A] bg-[#0F0F0F] text-[#F0EDE8] hover:border-[#E8C547]/50'
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#E8C547]/0 via-[#E8C547]/5 to-[#E8C547]/0 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

            <div className="relative z-10 flex flex-col items-start text-left mb-6 md:mb-0">
              <span className="text-xs uppercase tracking-widest opacity-60 font-mono mb-4 flex items-center gap-2">
                <Grip className="w-4 h-4" /> Global Toggle
              </span>
              <h2 className="font-serif text-4xl md:text-6xl">
                {showBriefing ? 'Hide' : 'View'} Briefing
              </h2>
            </div>

            <div className="relative z-10">
              <div className={`p-4 rounded-full border transition-colors duration-500 ${
                showBriefing ? 'border-[#0A0A0A]/20' : 'border-[#2A2A2A] group-hover:border-[#E8C547]'
              }`}>
                <Maximize2 className={`w-8 h-8 transition-transform duration-700 ${showBriefing ? 'rotate-180 text-[#0A0A0A]' : 'text-[#E8C547]'}`} />
              </div>
            </div>
          </motion.button>

          <AnimatePresence>
            {showBriefing && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="overflow-hidden"
              >
                <div className="pt-24 pb-12">
                  {/* Section Header */}
                  <div className="flex items-center justify-between mb-10 border-b border-[#2A2A2A] pb-8">
                    <h3 className="font-serif text-3xl italic text-[#E8C547]">Test User Briefing</h3>
                    <div className="text-xs uppercase tracking-widest text-[#F0EDE8]/40">
                      Phase 04 • Oral Script
                    </div>
                  </div>

                  <p className="text-xs uppercase tracking-widest text-[#F0EDE8]/40 mb-10 flex items-center gap-3">
                    <span className="w-6 h-[1px] bg-[#F0EDE8]/20"></span>
                    The following briefing was given orally to each test user before the session:
                  </p>

                  <div className="max-w-3xl space-y-8">
                    <p className="text-[#F0EDE8]/80 leading-relaxed text-lg font-serif border-l-2 border-[#E8C547] pl-8">
                      Life Inventory is a mobile app that helps you keep track of where your household
                      items are stored. People often waste time searching for everyday items like chargers,
                      tools, or important documents. This app lets you take a photo of an item, assign it
                      to a room and specific location, and find it instantly whenever you need it.
                    </p>

                    <p className="text-[#F0EDE8]/80 leading-relaxed text-lg font-serif border-l-2 border-[#2A2A2A] pl-8">
                      You will be testing a paper prototype today; the screens are hand-drawn. Please
                      interact with it as if it were a real phone app. Point to what you would tap, and
                      we will show you the next screen. There are no wrong answers. We are testing the
                      app, not you!
                    </p>
                  </div>

                  {/* End marker */}
                  <div className="mt-20 w-full h-[1px] bg-gradient-to-r from-transparent via-[#2A2A2A] to-transparent" />
                  <div className="text-center mt-8">
                    <span className="text-[10px] uppercase tracking-widest text-[#F0EDE8]/30">End of Briefing</span>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Team Roles Section */}
      <section className="py-24 px-6 border-t border-[#2A2A2A]">
        <div className="max-w-7xl mx-auto">
          <motion.button
            onClick={() => setShowTeamRoles(!showTeamRoles)}
            className={`w-full group relative border p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between overflow-hidden transition-all duration-700 ${
              showTeamRoles
                ? 'border-[#E8C547] bg-[#E8C547] text-[#0A0A0A]'
                : 'border-[#2A2A2A] bg-[#0F0F0F] text-[#F0EDE8] hover:border-[#E8C547]/50'
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#E8C547]/0 via-[#E8C547]/5 to-[#E8C547]/0 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

            <div className="relative z-10 flex flex-col items-start text-left mb-6 md:mb-0">
              <span className="text-xs uppercase tracking-widest opacity-60 font-mono mb-4 flex items-center gap-2">
                <Grip className="w-4 h-4" /> Global Toggle
              </span>
              <h2 className="font-serif text-4xl md:text-6xl">
                {showTeamRoles ? 'Hide' : 'View'} Team Roles
              </h2>
            </div>

            <div className="relative z-10">
              <div className={`p-4 rounded-full border transition-colors duration-500 ${
                showTeamRoles ? 'border-[#0A0A0A]/20' : 'border-[#2A2A2A] group-hover:border-[#E8C547]'
              }`}>
                <Maximize2 className={`w-8 h-8 transition-transform duration-700 ${showTeamRoles ? 'rotate-180 text-[#0A0A0A]' : 'text-[#E8C547]'}`} />
              </div>
            </div>
          </motion.button>

          <AnimatePresence>
            {showTeamRoles && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="overflow-hidden"
              >
                <div className="pt-24 pb-12">
                  {/* Section Header */}
                  <div className="flex items-center justify-between mb-10 border-b border-[#2A2A2A] pb-8">
                    <h3 className="font-serif text-3xl italic text-[#E8C547]">Team Roles</h3>
                    <div className="text-xs uppercase tracking-widest text-[#F0EDE8]/40">
                      Phase 04 • Session Setup
                    </div>
                  </div>

                  <p className="text-xs uppercase tracking-widest text-[#F0EDE8]/40 mb-12 flex items-center gap-3">
                    <span className="w-6 h-[1px] bg-[#F0EDE8]/20"></span>
                    During the testing session, our team assigned the following roles:
                  </p>

                  {/* Role Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                    {/* Computer */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                      className="border border-[#E8C547] bg-[#E8C547]/5 p-8 hover:bg-[#E8C547]/10 transition-colors duration-300"
                    >
                      <div className="flex items-start justify-between mb-6">
                        <span className="text-[10px] font-mono uppercase tracking-widest text-[#E8C547] border border-[#E8C547] px-3 py-1">Computer</span>
                        <span className="text-xs font-mono text-[#F0EDE8]/40">Role 01</span>
                      </div>
                      <h4 className="font-serif text-2xl mb-4">Sonal</h4>
                      <p className="text-sm font-mono text-[#F0EDE8]/60 leading-relaxed">
                        Responsible for manipulating the paper prototype screens — switching between
                        screens, writing responses on the fly, and simulating the app&apos;s behavior
                        based on user interactions.
                      </p>
                    </motion.div>

                    {/* Observer */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="border border-[#2A2A2A] bg-[#0F0F0F] p-8 hover:border-[#E8C547]/50 transition-colors duration-300"
                    >
                      <div className="flex items-start justify-between mb-6">
                        <span className="text-[10px] font-mono uppercase tracking-widest text-[#F0EDE8]/50 border border-[#2A2A2A] px-3 py-1">Observer</span>
                        <span className="text-xs font-mono text-[#F0EDE8]/40">Role 02</span>
                      </div>
                      <h4 className="font-serif text-2xl mb-4">Samuel &amp; Richard</h4>
                      <p className="text-sm font-mono text-[#F0EDE8]/60 leading-relaxed">
                        Took notes on user behavior, recorded usability problems, and observed where
                        users hesitated or made errors without interfering.
                      </p>
                    </motion.div>
                  </div>

                  {/* Rotation Note */}
                  <div className="border border-[#2A2A2A] bg-[#0F0F0F] px-8 py-6 flex items-start gap-5">
                    <span className="text-[#E8C547] font-mono text-[10px] uppercase tracking-widest shrink-0 mt-1">Note</span>
                    <p className="text-sm font-mono text-[#F0EDE8]/50 leading-relaxed">
                      After each user session, we swapped observer roles so all team members could
                      experience both observing and note-taking.
                    </p>
                  </div>

                  {/* End marker */}
                  <div className="mt-20 w-full h-[1px] bg-gradient-to-r from-transparent via-[#2A2A2A] to-transparent" />
                  <div className="text-center mt-8">
                    <span className="text-[10px] uppercase tracking-widest text-[#F0EDE8]/30">End of Team Roles</span>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Scenario Task Cards Section */}
      <section className="py-24 px-6 border-t border-[#2A2A2A]">
        <div className="max-w-7xl mx-auto">
          <motion.button
            onClick={() => setShowTaskCards(!showTaskCards)}
            className={`w-full group relative border p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between overflow-hidden transition-all duration-700 ${
              showTaskCards
                ? 'border-[#E8C547] bg-[#E8C547] text-[#0A0A0A]'
                : 'border-[#2A2A2A] bg-[#0F0F0F] text-[#F0EDE8] hover:border-[#E8C547]/50'
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#E8C547]/0 via-[#E8C547]/5 to-[#E8C547]/0 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

            <div className="relative z-10 flex flex-col items-start text-left mb-6 md:mb-0">
              <span className="text-xs uppercase tracking-widest opacity-60 font-mono mb-4 flex items-center gap-2">
                <Grip className="w-4 h-4" /> Global Toggle
              </span>
              <h2 className="font-serif text-4xl md:text-6xl">
                {showTaskCards ? 'Hide' : 'View'} Scenario Task Cards
              </h2>
            </div>

            <div className="relative z-10">
              <div className={`p-4 rounded-full border transition-colors duration-500 ${
                showTaskCards ? 'border-[#0A0A0A]/20' : 'border-[#2A2A2A] group-hover:border-[#E8C547]'
              }`}>
                <Maximize2 className={`w-8 h-8 transition-transform duration-700 ${showTaskCards ? 'rotate-180 text-[#0A0A0A]' : 'text-[#E8C547]'}`} />
              </div>
            </div>
          </motion.button>

          <AnimatePresence>
            {showTaskCards && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="overflow-hidden"
              >
                <div className="pt-24 pb-12">
                  {/* Section Header */}
                  <div className="flex items-center justify-between mb-10 border-b border-[#2A2A2A] pb-8">
                    <h3 className="font-serif text-3xl italic text-[#E8C547]">Scenario Task Cards</h3>
                    <div className="text-xs uppercase tracking-widest text-[#F0EDE8]/40">
                      Phase 04 • Index Cards
                    </div>
                  </div>

                  <p className="text-xs uppercase tracking-widest text-[#F0EDE8]/40 mb-12 flex items-center gap-3">
                    <span className="w-6 h-[1px] bg-[#F0EDE8]/20"></span>
                    The following tasks were written on index cards and handed to each user:
                  </p>

                  {/* Task Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                      {
                        num: '01',
                        title: 'Register a New Item',
                        quote: 'You just bought a new laptop charger. Add it to your home inventory.',
                        delay: 0.1,
                      },
                      {
                        num: '02',
                        title: 'Find a Misplaced Item',
                        quote: "You can't find your phone charger. Use the app to locate it.",
                        delay: 0.2,
                      },
                      {
                        num: '03',
                        title: 'Verify Stock While Shopping',
                        quote: "You're at the store. Check if you already have toilet paper at home before buying more.",
                        delay: 0.3,
                      },
                    ].map((card) => (
                      <motion.div
                        key={card.num}
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.55, delay: card.delay }}
                        className="group relative border border-[#2A2A2A] bg-[#0F0F0F] p-8 hover:border-[#E8C547]/60 transition-colors duration-300 flex flex-col"
                      >
                        {/* Card number */}
                        <span className="text-[10px] font-mono uppercase tracking-widest text-[#E8C547] mb-6 block">Task Card {card.num}</span>

                        {/* Card title */}
                        <h4 className="font-serif text-xl mb-8 text-[#F0EDE8] group-hover:text-[#E8C547] transition-colors duration-300 leading-snug">
                          {card.title}
                        </h4>

                        {/* Quote — mimics handwritten index card */}
                        <div className="mt-auto border-t border-[#2A2A2A] pt-6">
                          <p className="font-serif italic text-[#F0EDE8]/60 leading-relaxed text-base">
                            &ldquo;{card.quote}&rdquo;
                          </p>
                        </div>

                        {/* Corner accent */}
                        <div className="absolute top-0 right-0 w-0 h-0 border-t-[24px] border-r-[24px] border-t-[#E8C547]/20 border-r-transparent" />
                      </motion.div>
                    ))}
                  </div>

                  {/* End marker */}
                  <div className="mt-20 w-full h-[1px] bg-gradient-to-r from-transparent via-[#2A2A2A] to-transparent" />
                  <div className="text-center mt-8">
                    <span className="text-[10px] uppercase tracking-widest text-[#F0EDE8]/30">End of Task Cards</span>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Observations Section */}
      <section className="py-24 px-6 border-t border-[#2A2A2A]">
        <div className="max-w-7xl mx-auto">
          <motion.button
            onClick={() => setShowObservations(!showObservations)}
            className={`w-full group relative border p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between overflow-hidden transition-all duration-700 ${
              showObservations
                ? 'border-[#E8C547] bg-[#E8C547] text-[#0A0A0A]'
                : 'border-[#2A2A2A] bg-[#0F0F0F] text-[#F0EDE8] hover:border-[#E8C547]/50'
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#E8C547]/0 via-[#E8C547]/5 to-[#E8C547]/0 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            <div className="relative z-10 flex flex-col items-start text-left mb-6 md:mb-0">
              <span className="text-xs uppercase tracking-widest opacity-60 font-mono mb-4 flex items-center gap-2">
                <Grip className="w-4 h-4" /> Global Toggle
              </span>
              <h2 className="font-serif text-4xl md:text-6xl">
                {showObservations ? 'Hide' : 'View'} Observations
              </h2>
            </div>
            <div className="relative z-10">
              <div className={`p-4 rounded-full border transition-colors duration-500 ${
                showObservations ? 'border-[#0A0A0A]/20' : 'border-[#2A2A2A] group-hover:border-[#E8C547]'
              }`}>
                <Maximize2 className={`w-8 h-8 transition-transform duration-700 ${showObservations ? 'rotate-180 text-[#0A0A0A]' : 'text-[#E8C547]'}`} />
              </div>
            </div>
          </motion.button>

          <AnimatePresence>
            {showObservations && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="overflow-hidden"
              >
                <div className="pt-24 pb-12">
                  <div className="flex items-center justify-between mb-10 border-b border-[#2A2A2A] pb-8">
                    <h3 className="font-serif text-3xl italic text-[#E8C547]">Observations</h3>
                    <div className="text-xs uppercase tracking-widest text-[#F0EDE8]/40">Phase 04 • 3 Users</div>
                  </div>

                  <p className="text-xs uppercase tracking-widest text-[#F0EDE8]/40 mb-16 flex items-center gap-3">
                    <span className="w-6 h-[1px] bg-[#F0EDE8]/20"></span>
                    We tested our paper prototype with 3 users. The following usability problems were discovered (user names not recorded):
                  </p>

                  <div className="flex flex-col gap-12">
                    {[
                      {
                        user: '01',
                        delay: 0.1,
                        observations: [
                          { type: 'problem', task: 'Task 1', text: 'Searched for the “+Add” button at the top of the home screen but could not find it — it was placed at the bottom. User scrolled up and down multiple times before locating it.' },
                          { type: 'problem', task: 'Task 1', text: 'Hesitated on the “Location Photo” field during item registration — was unsure whether it was required or optional. Asked aloud “Do I have to take a photo?”' },
                          { type: 'positive', task: 'Task 2', text: 'Completed the search task smoothly and without any guidance — the search bar was immediately intuitive.' },
                        ],
                      },
                      {
                        user: '02',
                        delay: 0.2,
                        observations: [
                          { type: 'problem', task: 'Task 1', text: 'On the data entry form, attempted to type the room name directly in the Room field instead of using the dropdown — expected a free-text input.' },
                          { type: 'problem', task: 'Task 3', text: 'During stock verification, looked for a dedicated “Quick Check” or “Shopping Mode” button on the home screen — was unsure they were in the right place.' },
                          { type: 'positive', task: 'Task 2', text: 'While reviewing the Item Detail screen, pointed to the location photo and said it was the most helpful feature of the entire app.' },
                        ],
                      },
                      {
                        user: '03',
                        delay: 0.3,
                        observations: [
                          { type: 'problem', task: 'Task 1', text: 'Paused at the “# Tags” field on the data entry form and asked “What does this mean?” — the label was not immediately understood.' },
                          { type: 'problem', task: 'Task 1', text: 'After saving an item, wanted a “View Item” button on the confirmation screen to immediately see the saved entry.' },
                          { type: 'problem', task: 'Task 3', text: 'Opened the item detail screen but expected to see the quantity directly visible in the search results list — navigating into the detail page felt like an extra unnecessary step.' },
                        ],
                      },
                    ].map((session) => (
                      <motion.div
                        key={session.user}
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.55, delay: session.delay }}
                        className="border border-[#2A2A2A] bg-[#0F0F0F]"
                      >
                        {/* User header */}
                        <div className="flex items-center gap-6 px-8 py-6 border-b border-[#2A2A2A]">
                          <span className="text-[10px] font-mono uppercase tracking-widest text-[#E8C547] border border-[#E8C547] px-3 py-1">User {session.user}</span>
                          <span className="text-xs font-mono text-[#F0EDE8]/30">{session.observations.length} observations</span>
                        </div>

                        {/* Observation rows */}
                        <div className="divide-y divide-[#2A2A2A]">
                          {session.observations.map((obs, i) => (
                            <div key={i} className="flex items-start gap-6 px-8 py-6 group hover:bg-[#E8C547]/3 transition-colors duration-200">
                              {/* Type indicator */}
                              <div className="shrink-0 mt-[2px]">
                                {obs.type === 'positive' ? (
                                  <span className="inline-block w-2 h-2 rounded-full bg-[#E8C547] mt-[5px]" />
                                ) : (
                                  <span className="inline-block w-2 h-2 rounded-full bg-[#F0EDE8]/20 mt-[5px]" />
                                )}
                              </div>
                              {/* Task badge */}
                              <span className="text-[10px] font-mono uppercase tracking-widest text-[#F0EDE8]/30 shrink-0 mt-[3px] w-10">{obs.task}</span>
                              {/* Text */}
                              <p className={`text-sm font-mono leading-relaxed ${
                                obs.type === 'positive' ? 'text-[#E8C547]/80' : 'text-[#F0EDE8]/60'
                              }`}>
                                {obs.text}
                              </p>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Legend */}
                  <div className="mt-12 flex items-center gap-8 px-1">
                    <div className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-[#E8C547] shrink-0" />
                      <span className="text-[10px] font-mono uppercase tracking-widest text-[#F0EDE8]/40">Positive finding</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-[#F0EDE8]/20 shrink-0" />
                      <span className="text-[10px] font-mono uppercase tracking-widest text-[#F0EDE8]/40">Usability problem</span>
                    </div>
                  </div>

                  {/* End marker */}
                  <div className="mt-16 w-full h-[1px] bg-gradient-to-r from-transparent via-[#2A2A2A] to-transparent" />
                  <div className="text-center mt-8">
                    <span className="text-[10px] uppercase tracking-widest text-[#F0EDE8]/30">End of Observations</span>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Prototype Iteration Section */}
      <section className="py-24 px-6 border-t border-[#2A2A2A]">
        <div className="max-w-7xl mx-auto">
          <motion.button
            onClick={() => setShowIteration(!showIteration)}
            className={`w-full group relative border p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between overflow-hidden transition-all duration-700 ${
              showIteration
                ? 'border-[#E8C547] bg-[#E8C547] text-[#0A0A0A]'
                : 'border-[#2A2A2A] bg-[#0F0F0F] text-[#F0EDE8] hover:border-[#E8C547]/50'
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#E8C547]/0 via-[#E8C547]/5 to-[#E8C547]/0 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            <div className="relative z-10 flex flex-col items-start text-left mb-6 md:mb-0">
              <span className="text-xs uppercase tracking-widest opacity-60 font-mono mb-4 flex items-center gap-2">
                <Grip className="w-4 h-4" /> Global Toggle
              </span>
              <h2 className="font-serif text-4xl md:text-6xl">
                {showIteration ? 'Hide' : 'View'} Prototype Iteration
              </h2>
            </div>
            <div className="relative z-10">
              <div className={`p-4 rounded-full border transition-colors duration-500 ${
                showIteration ? 'border-[#0A0A0A]/20' : 'border-[#2A2A2A] group-hover:border-[#E8C547]'
              }`}>
                <Maximize2 className={`w-8 h-8 transition-transform duration-700 ${showIteration ? 'rotate-180 text-[#0A0A0A]' : 'text-[#E8C547]'}`} />
              </div>
            </div>
          </motion.button>

          <AnimatePresence>
            {showIteration && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="overflow-hidden"
              >
                <div className="pt-24 pb-12">
                  <div className="flex items-center justify-between mb-10 border-b border-[#2A2A2A] pb-8">
                    <h3 className="font-serif text-3xl italic text-[#E8C547]">Prototype Iteration</h3>
                    <div className="text-xs uppercase tracking-widest text-[#F0EDE8]/40">Phase 04 • Round 1 → Round 2</div>
                  </div>

                  {/* Before / After Grid */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">

                    {/* Round 1 — Original */}
                    <motion.div
                      initial={{ opacity: 0, x: -16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.55, delay: 0.1 }}
                      className="border border-[#2A2A2A] bg-[#0F0F0F]"
                    >
                      <div className="flex items-center justify-between px-8 py-5 border-b border-[#2A2A2A]">
                        <span className="text-[10px] font-mono uppercase tracking-widest text-[#F0EDE8]/40">Round 1</span>
                        <span className="text-[10px] font-mono uppercase tracking-widest text-[#F0EDE8]/30 border border-[#2A2A2A] px-3 py-1">Original Prototype</span>
                      </div>
                      <ul className="divide-y divide-[#2A2A2A]">
                        {[
                          'Home screen had a small “+Add” button placed at the bottom of the screen.',
                          'Data entry form included a field labeled “# Tags” for categorizing items.',
                          'Search results showed only item name and room — quantity was hidden inside the detail screen.',
                          'Confirmation screen after saving showed only a checkmark and a “Done” button.',
                          'Location Photo field had no label indicating it was optional.',
                        ].map((item, i) => (
                          <li key={i} className="flex items-start gap-5 px-8 py-5">
                            <span className="text-[#F0EDE8]/20 font-mono text-[10px] shrink-0 mt-[3px]">0{i + 1}</span>
                            <p className="text-sm font-mono text-[#F0EDE8]/40 leading-relaxed line-through decoration-[#F0EDE8]/20">{item}</p>
                          </li>
                        ))}
                      </ul>
                    </motion.div>

                    {/* Changes Made */}
                    <motion.div
                      initial={{ opacity: 0, x: 16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.55, delay: 0.2 }}
                      className="border border-[#E8C547] bg-[#E8C547]/5"
                    >
                      <div className="flex items-center justify-between px-8 py-5 border-b border-[#E8C547]/30">
                        <span className="text-[10px] font-mono uppercase tracking-widest text-[#E8C547]">Changes Made</span>
                        <span className="text-[10px] font-mono uppercase tracking-widest text-[#E8C547] border border-[#E8C547] px-3 py-1">After Round 1</span>
                      </div>
                      <ul className="divide-y divide-[#E8C547]/10">
                        {[
                          '“+Add Item” button moved to the top-right corner of the home screen — more visible and accessible.',
                          '“# Tags” field renamed to “Labels” — immediately understood by all users in Round 2.',
                          'Location Photo field marked as “(optional)” — reduced confusion during item registration.',
                          'Search results updated to show quantity directly in the list view — Task 3 no longer required opening the detail screen.',
                          'Confirmation screen added a “View Item” button alongside “Done” — users could immediately review the saved item.',
                        ].map((item, i) => (
                          <li key={i} className="flex items-start gap-5 px-8 py-5">
                            <span className="text-[#E8C547] font-mono text-[10px] shrink-0 mt-[3px]">0{i + 1}</span>
                            <p className="text-sm font-mono text-[#F0EDE8]/80 leading-relaxed">{item}</p>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  </div>

                  {/* Round 2 Result callout */}
                  <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.55, delay: 0.3 }}
                    className="border border-[#2A2A2A] bg-[#0F0F0F] p-8 md:p-10"
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <span className="text-[10px] font-mono uppercase tracking-widest text-[#E8C547] border border-[#E8C547] px-3 py-1">Round 2 Result</span>
                    </div>
                    <p className="text-[#F0EDE8]/70 leading-relaxed font-serif text-lg">
                      Users found the updated prototype significantly easier to use. The quantity visible
                      directly in search results made Task 3 much faster. The renamed{' '}
                      <span className="text-[#E8C547]">&ldquo;Labels&rdquo;</span> field was immediately
                      understood by all users without any explanation needed.
                    </p>
                  </motion.div>

                  {/* End marker */}
                  <div className="mt-16 w-full h-[1px] bg-gradient-to-r from-transparent via-[#2A2A2A] to-transparent" />
                  <div className="text-center mt-8">
                    <span className="text-[10px] uppercase tracking-widest text-[#F0EDE8]/30">End of Prototype Iteration</span>
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
