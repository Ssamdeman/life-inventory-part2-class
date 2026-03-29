'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import { ArrowDownRight, Box, Database, FileText, Layout, Search, Shield, User } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] text-[#F0EDE8] font-mono selection:bg-[#E8C547] selection:text-[#0A0A0A]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-[#2A2A2A] bg-[#0A0A0A]/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="font-serif text-xl italic text-[#E8C547]">Group 13</div>
          <div className="text-xs uppercase tracking-widest text-[#F0EDE8]/60">Semester Project</div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-6 min-h-[80vh] flex flex-col justify-center overflow-hidden">
        {/* Animated Inventory Grid Background */}
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none flex items-center justify-center">
          <div className="grid grid-cols-3 md:grid-cols-5 gap-4 w-full max-w-5xl transform -rotate-6 scale-110">
            {[...Array(15)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className="border border-[#2A2A2A] p-4 aspect-square flex flex-col justify-between"
              >
                <div className="text-[10px] text-[#E8C547]">ID: {`0X${(i * 137).toString(16).padStart(4, '0').toUpperCase()}`}</div>
                <Box className="w-6 h-6 text-[#F0EDE8]/30" />
              </motion.div>
            ))}
          </div>
        </div>

        <div className="max-w-7xl mx-auto w-full relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl leading-[0.9] tracking-tight mb-6">
              Life<br />
              <span className="text-[#E8C547] italic">Inventory.</span>
            </h1>
            <p className="max-w-xl text-lg md:text-xl text-[#F0EDE8]/70 leading-relaxed mb-12">
              An external brain for your physical possessions. Stop searching, start knowing.
            </p>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="flex items-center gap-4 text-sm uppercase tracking-widest"
            >
              <ArrowDownRight className="text-[#E8C547]" />
              <span>Scroll to explore</span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* The Team */}
      <section className="py-24 px-6 border-t border-[#2A2A2A]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-8">
            <h2 className="font-serif text-4xl md:text-5xl text-[#E8C547] italic">The Team</h2>
            <div className="text-xs uppercase tracking-widest text-[#F0EDE8]/50 border border-[#2A2A2A] px-4 py-2 rounded-full">
              Group 13
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              "Sonal Dattraj Doiphode",
              "Richard Huang",
              "Samuel Damon"
            ].map((name, i) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="group border border-[#2A2A2A] p-8 hover:border-[#E8C547] transition-colors duration-300 bg-[#0A0A0A]"
              >
                <User className="w-8 h-8 text-[#E8C547] mb-6 opacity-50 group-hover:opacity-100 transition-opacity" />
                <h3 className="font-serif text-2xl mb-2">{name}</h3>
                <p className="text-xs uppercase tracking-widest text-[#F0EDE8]/50">Team Member</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-24 px-6 border-t border-[#2A2A2A] bg-[#0F0F0F]">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl text-[#E8C547] italic mb-16">Problem Statement</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-serif mb-6 flex items-center gap-4">
                <span className="text-[#E8C547] text-sm font-mono">01</span> The Core Issue
              </h3>
              <p className="text-[#F0EDE8]/70 leading-relaxed text-lg">
                In an increasingly complex daily life, individuals struggle to maintain a mental inventory of their physical possessions. Important metadata (like a car&apos;s VIN) is disconnected from the object, and essential items (like groceries or batteries) run out unexpectedly because stock levels are invisible.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="border-l-2 border-[#2A2A2A] pl-6 hover:border-[#E8C547] transition-colors"
              >
                <h4 className="text-xs uppercase tracking-widest text-[#E8C547] mb-3">The User</h4>
                <p className="text-sm text-[#F0EDE8]/80 leading-relaxed">A busy individual managing a household who feels overwhelmed by the volume of their unorganized possessions.</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="border-l-2 border-[#2A2A2A] pl-6 hover:border-[#E8C547] transition-colors"
              >
                <h4 className="text-xs uppercase tracking-widest text-[#E8C547] mb-3">Goals</h4>
                <p className="text-sm text-[#F0EDE8]/80 leading-relaxed">To have an &quot;external brain&quot; that remembers exactly what they own, how many they have, and where specific documents or items are hidden.</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="border-l-2 border-[#2A2A2A] pl-6 hover:border-[#E8C547] transition-colors"
              >
                <h4 className="text-xs uppercase tracking-widest text-[#E8C547] mb-3">Actions</h4>
                <p className="text-sm text-[#F0EDE8]/80 leading-relaxed">Searching through multiple physical locations, creating fragmented lists in different notes apps, and purchasing duplicate items.</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="border-l-2 border-[#2A2A2A] pl-6 hover:border-[#E8C547] transition-colors"
              >
                <h4 className="text-xs uppercase tracking-widest text-[#E8C547] mb-3">Obstacles</h4>
                <ul className="text-sm text-[#F0EDE8]/80 leading-relaxed space-y-2">
                  <li><strong className="text-[#F0EDE8]">Memory Failure:</strong> Forgetting locations.</li>
                  <li><strong className="text-[#F0EDE8]">Data Fragmentation:</strong> Losing critical details.</li>
                  <li><strong className="text-[#F0EDE8]">Privacy Concerns:</strong> Unwillingness to use cloud servers for sensitive data.</li>
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* The Concept */}
      <section className="py-32 px-6 border-t border-[#2A2A2A] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#E8C547]/5 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Database className="w-12 h-12 text-[#E8C547] mx-auto mb-8" />
            <h2 className="font-serif text-5xl md:text-7xl mb-8">Life Inventory</h2>
            <p className="max-w-2xl mx-auto text-xl text-[#F0EDE8]/70 leading-relaxed">
              Bridging the gap between physical objects and digital metadata. A secure, private, and intuitive system to catalog your life, ensuring you never lose track of what matters.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="py-24 px-6 border-t border-[#2A2A2A]">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl text-[#E8C547] italic mb-16">Deliverables</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Team & Proposal", icon: FileText, status: "Completed", active: true },
              { title: "User Research", icon: Search, status: "View Research", active: true, href: "https://docs.google.com/document/d/1ijwiZ2esJcOggPSCCBuAet3GCP76u_MSNPaDiXk81OE/edit?usp=sharing", newTab: true },
              { title: "Prototypes", icon: Layout, status: "View Prototypes", active: true, href: "/phase3" },
              { title: "Implementation", icon: Shield, status: "Coming Soon", active: false }
            ].map((item, i) => {
              const CardContent = (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  className={`border p-8 flex flex-col h-full transition-colors duration-500 ${
                    item.active 
                      ? 'border-[#E8C547] bg-[#E8C547]/5 hover:bg-[#E8C547]/10' 
                      : 'border-[#2A2A2A] bg-[#0A0A0A] opacity-60'
                  }`}
                >
                  <div className="flex justify-between items-start mb-12">
                    <item.icon className={`w-8 h-8 ${item.active ? 'text-[#E8C547]' : 'text-[#F0EDE8]/30'}`} />
                    <span className={`text-[10px] uppercase tracking-widest px-2 py-1 border ${
                      item.active 
                        ? 'border-[#E8C547] text-[#E8C547]' 
                        : 'border-[#2A2A2A] text-[#F0EDE8]/50'
                    }`}>
                      {item.status}
                    </span>
                  </div>
                  <h3 className="font-serif text-2xl mt-auto">{item.title}</h3>
                  <div className="text-xs font-mono text-[#F0EDE8]/40 mt-4">Phase 0{i + 1}</div>
                </motion.div>
              );

              return item.href ? (
                item.newTab ? (
                  <a href={item.href} key={item.title} target="_blank" rel="noopener noreferrer" className="block h-full group">
                    {CardContent}
                  </a>
                ) : (
                  <Link href={item.href} key={item.title} className="block h-full group">
                    {CardContent}
                  </Link>
                )
              ) : (
                <div key={item.title} className="block h-full cursor-not-allowed">
                  {CardContent}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-[#2A2A2A] bg-[#050505]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="font-serif text-2xl italic text-[#E8C547]">Life Inventory.</div>
          <div className="text-xs uppercase tracking-widest text-[#F0EDE8]/40 text-center md:text-right">
            Group 13 • Semester Project<br />
            Designed & Developed for HCI
          </div>
        </div>
      </footer>
    </main>
  );
}
