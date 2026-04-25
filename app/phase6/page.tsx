'use client';

import React, { useState, useEffect } from 'react';
import { Home, Search, Box, User, Battery, Wifi, Signal, Mic, Plus, Minus, ChevronRight, Laptop, Bath, UtensilsCrossed, ArrowLeft, Camera, Upload, LogOut } from 'lucide-react';

const INITIAL_INVENTORY = [
  { 
    id: 1, 
    name: 'Laptop Charger', 
    room: 'electronics', 
    spot: 'desk drawer', 
    qty: 1,
    labels: ['essential', 'work'],
    createdAt: '2026-04-01T10:00:00Z',
    updatedAt: '2026-04-01T10:00:00Z'
  },
  { 
    id: 2, 
    name: 'Toilet Paper', 
    room: 'bathroom', 
    spot: 'cabinet', 
    qty: 8,
    labels: ['stock', 'daily'],
    createdAt: '2026-04-10T14:30:00Z',
    updatedAt: '2026-04-15T09:41:00Z'
  }
];

export default function Phase6Page() {
  const [currentScreen, setCurrentScreen] = useState('home');
  const [inventory, setInventory] = useState(INITIAL_INVENTORY);

  // Form State
  const [itemName, setItemName] = useState('');
  const [selectedRoom, setSelectedRoom] = useState('electronics');
  const [itemSpot, setItemSpot] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [labels, setLabels] = useState<string[]>([]);
  const [currentLabel, setCurrentLabel] = useState('');

  // Search State
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedItemForDetail, setSelectedItemForDetail] = useState<number | null>(null);
  const [isEditingSpot, setIsEditingSpot] = useState(false);
  const [editedSpot, setEditedSpot] = useState('');

  // Edit State
  const [selectedItemForUpdate, setSelectedItemForUpdate] = useState<number | null>(null);
  const [tempRoom, setTempRoom] = useState('electronics');
  const [tempSpot, setTempSpot] = useState('');
  const [tempQty, setTempQty] = useState(0);

  // Determine if Nav should be hidden
  const isNavHidden = ['camera', 'voiceSearch', 'updateStock', 'itemDetail', 'foundSuccess'].includes(currentScreen);

  const getCountByRoom = (room: string) => {
    return inventory.filter(item => item.room === room.toLowerCase()).length;
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    
    if (date.toDateString() === now.toDateString()) {
      return 'Today';
    }
    
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric' 
    });
  };

  const formatMetadata = (createdAt?: string, updatedAt?: string) => {
    if (!createdAt || !updatedAt) return '';
    return `Added: ${formatDate(createdAt)} • Last Updated: ${formatDate(updatedAt)}`;
  };

  const handleSaveItem = () => {
    if (!itemName.trim()) return;

    const now = new Date().toISOString();
    const newItem = {
      id: Math.floor(Math.random() * 10000),
      name: itemName,
      room: selectedRoom.toLowerCase(),
      spot: itemSpot || 'not specified',
      qty: quantity,
      labels: labels,
      createdAt: now,
      updatedAt: now
    };

    setInventory([...inventory, newItem]);
    
    // Reset Form
    setItemName('');
    setSelectedRoom('electronics');
    setItemSpot('');
    setQuantity(1);
    setLabels([]);
    setCurrentLabel('');
    
    setCurrentScreen('home');
  };

  const handleUpdateStock = () => {
    if (selectedItemForUpdate === null) return;
    
    const now = new Date().toISOString();
    setInventory(inventory.map(item => 
      item.id === selectedItemForUpdate 
        ? { 
            ...item, 
            room: tempRoom.toLowerCase(), 
            spot: tempSpot, 
            qty: tempQty,
            updatedAt: now
          } 
        : item
    ));
    
    setSelectedItemForUpdate(null);
    setCurrentScreen('stock');
  };

  const handleLogout = () => {
    alert("Logged out successfully!");
    setInventory(INITIAL_INVENTORY);
    setCurrentScreen('home');
  };

  const handleUpdateDetailSpot = () => {
    if (selectedItemForDetail === null) return;
    
    const now = new Date().toISOString();
    setInventory(inventory.map(item => 
      item.id === selectedItemForDetail 
        ? { 
            ...item, 
            spot: editedSpot,
            updatedAt: now
          } 
        : item
    ));
    
    setIsEditingSpot(false);
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'home':
        return (
          <div className="flex flex-col animate-in fade-in slide-in-from-bottom-4 duration-700">
            {/* Header */}
            <div className="flex justify-between items-center mb-10">
              <h1 className="text-4xl font-serif italic text-[#1C3829]">Collections</h1>
              <div 
                onClick={() => setCurrentScreen('profile')}
                className="w-12 h-12 rounded-full bg-[#1C3829] flex items-center justify-center text-[#F6F1E9] text-sm font-medium shadow-md shadow-[#1C3829]/10 ring-4 ring-[#F6F1E9] cursor-pointer hover:scale-105 active:scale-95 transition-all"
              >
                SD
              </div>
            </div>

            {/* Search Bar Placeholder (Link to Search Screen) */}
            <div 
              onClick={() => setCurrentScreen('search')}
              className="relative mb-10 group cursor-pointer"
            >
              <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                <Search className="w-5 h-5 text-[#1C3829]/30 group-hover:text-[#1C3829] transition-colors" />
              </div>
              <div className="w-full h-16 pl-12 pr-4 bg-white/50 backdrop-blur-sm border border-[#D8CFBE] rounded-2xl flex items-center text-[#0E1F14]/30 font-mono tracking-tight">
                Search inventory...
              </div>
            </div>

            {/* Collections Grid */}
            <div className="space-y-6">
              {[
                { name: 'Electronics', icon: Laptop, room: 'electronics', color: '#1C3829' },
                { name: 'Bathroom', icon: Bath, room: 'bathroom', color: '#5A8A97' },
                { name: 'Kitchen', icon: UtensilsCrossed, room: 'kitchen', color: '#B8965A' }
              ].map((collection, i) => (
                <div 
                  key={collection.name}
                  onClick={() => {
                    setActiveFilter(collection.name);
                    setCurrentScreen('search');
                  }}
                  className="flex items-center p-6 bg-white border border-[#D8CFBE]/60 rounded-3xl hover:border-[#1C3829]/30 transition-all cursor-pointer group shadow-sm hover:shadow-md active:scale-[0.98] animate-in fade-in slide-in-from-bottom-4 duration-500"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <div className="w-16 h-16 rounded-2xl bg-[#F6F1E9] flex items-center justify-center text-[#1C3829] mr-5 transition-transform group-hover:rotate-6">
                    <collection.icon className="w-8 h-8" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-serif italic text-[#1C3829]">{collection.name}</h3>
                    <p className="text-[10px] text-[#0E1F14]/40 font-mono uppercase tracking-[0.2em] mt-1">{getCountByRoom(collection.room)} Items — View All</p>
                  </div>
                  <div className="w-10 h-10 rounded-full border border-[#D8CFBE] flex items-center justify-center text-[#D8CFBE] group-hover:border-[#1C3829] group-hover:text-[#1C3829] transition-colors">
                    <ChevronRight className="w-5 h-5" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case 'camera':
        return (
          <div className="absolute inset-0 bg-black z-50 flex flex-col animate-in fade-in duration-500">
            {/* Camera Header */}
            <div className="p-8 flex items-center justify-between">
              <button onClick={() => setCurrentScreen('home')} className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white active:scale-90 transition-transform">
                <ArrowLeft className="w-6 h-6" />
              </button>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                <span className="text-[10px] font-mono text-white/60 tracking-widest uppercase">Live View</span>
              </div>
              <div className="w-12 h-12" /> {/* Spacer */}
            </div>

            {/* Viewfinder Area */}
            <div className="flex-1 relative flex items-center justify-center px-12">
              <div className="w-full aspect-[3/4] relative">
                {/* Corner Brackets */}
                <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-white/40 rounded-tl-3xl" />
                <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-white/40 rounded-tr-3xl" />
                <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-white/40 rounded-bl-3xl" />
                <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-white/40 rounded-br-3xl" />
                
                <div className="absolute inset-0 flex items-center justify-center">
                  <Camera className="w-20 h-20 text-white/5" />
                </div>
              </div>
            </div>

            {/* Camera Controls */}
            <div className="p-12 pb-20 flex flex-col items-center gap-10">
              <button 
                onClick={() => setCurrentScreen('addForm')}
                className="w-24 h-24 rounded-full border-4 border-white p-1.5 active:scale-90 transition-transform"
              >
                <div className="w-full h-full rounded-full bg-white" />
              </button>
              <button 
                onClick={() => setCurrentScreen('addForm')}
                className="text-white/60 text-[10px] font-mono uppercase tracking-[0.3em] hover:text-white transition-colors border-b border-white/10 pb-1"
              >
                skip — add manual
              </button>
            </div>
          </div>
        );
      case 'addForm':
        return (
          <div className="flex flex-col animate-in slide-in-from-right duration-500">
            {/* Form Header */}
            <div className="flex items-center gap-5 mb-10">
              <button onClick={() => setCurrentScreen('camera')} className="w-12 h-12 rounded-full bg-[#1C3829]/5 flex items-center justify-center text-[#1C3829] active:scale-90 transition-transform">
                <ArrowLeft className="w-5 h-5" />
              </button>
              <h1 className="text-3xl font-serif italic text-[#1C3829]">New Item</h1>
            </div>

            {/* Form Fields */}
            <div className="space-y-8">
              <div className="space-y-3">
                <label className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#0E1F14]/40 ml-1">What is it?</label>
                <input 
                  type="text" 
                  value={itemName}
                  onChange={(e) => setItemName(e.target.value)}
                  placeholder="e.g. Vintage Camera"
                  className="w-full h-16 px-6 bg-white border border-[#D8CFBE] rounded-2xl text-[#0E1F14] placeholder:text-[#0E1F14]/20 focus:outline-none focus:ring-2 focus:ring-[#1C3829]/10 focus:border-[#1C3829] transition-all"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-3">
                  <label className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#0E1F14]/40 ml-1">Where is it?</label>
                  <div className="relative">
                    <select 
                      value={selectedRoom}
                      onChange={(e) => setSelectedRoom(e.target.value)}
                      className="w-full h-16 px-6 bg-white border border-[#D8CFBE] rounded-2xl text-[#0E1F14] focus:outline-none focus:border-[#1C3829] transition-all appearance-none"
                    >
                      <option value="electronics">Electronics</option>
                      <option value="bathroom">Bathroom</option>
                      <option value="kitchen">Kitchen</option>
                      <option value="living room">Living Room</option>
                      <option value="office">Office</option>
                      <option value="garage">Garage</option>
                    </select>
                    <ChevronRight className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#D8CFBE] rotate-90 pointer-events-none" />
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#0E1F14]/40 ml-1">Specific Spot</label>
                  <input 
                    type="text" 
                    value={itemSpot}
                    onChange={(e) => setItemSpot(e.target.value)}
                    placeholder="e.g. Top Shelf"
                    className="w-full h-16 px-6 bg-white border border-[#D8CFBE] rounded-2xl text-[#0E1F14] focus:outline-none focus:border-[#1C3829] transition-all"
                  />
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#0E1F14]/40 ml-1">Visual Reference</label>
                <div className="w-full h-44 border-2 border-dashed border-[#D8CFBE] rounded-3xl flex flex-col items-center justify-center text-[#1C3829]/30 hover:border-[#1C3829]/40 hover:bg-[#1C3829]/5 transition-all cursor-pointer group">
                  <div className="w-12 h-12 rounded-full bg-[#1C3829]/5 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <Upload className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-[0.2em]">Upload Photo</span>
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#0E1F14]/40 ml-1">Labels / Hashtags</label>
                <div className="flex flex-wrap gap-2 mb-2">
                  {labels.map((tag, index) => (
                    <span key={index} className="px-3 py-1 bg-[#1C3829]/5 border border-[#1C3829]/10 rounded-full text-[10px] font-mono text-[#1C3829] flex items-center gap-2">
                      #{tag}
                      <button onClick={() => setLabels(labels.filter((_, i) => i !== index))} className="hover:text-red-500">×</button>
                    </span>
                  ))}
                </div>
                <input 
                  type="text" 
                  value={currentLabel}
                  onChange={(e) => setCurrentLabel(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && currentLabel.trim()) {
                      e.preventDefault();
                      if (!labels.includes(currentLabel.trim().toLowerCase())) {
                        setLabels([...labels, currentLabel.trim().toLowerCase()]);
                      }
                      setCurrentLabel('');
                    }
                  }}
                  placeholder="Type and press Enter to add labels..."
                  className="w-full h-16 px-6 bg-white border border-[#D8CFBE] rounded-2xl text-[#0E1F14] focus:outline-none focus:border-[#1C3829] transition-all"
                />
              </div>

              <div className="space-y-3">
                <label className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#0E1F14]/40 ml-1">Initial Quantity</label>
                <div className="flex items-center gap-6 p-2 bg-white border border-[#D8CFBE] rounded-2xl">
                  <button 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-12 h-12 rounded-xl bg-[#F6F1E9] flex items-center justify-center text-[#1C3829] active:scale-90 transition-all"
                  >
                    <Minus className="w-5 h-5" />
                  </button>
                  <div className="flex-1 text-center font-serif italic text-2xl text-[#1C3829]">{quantity}</div>
                  <button 
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-12 h-12 rounded-xl bg-[#F6F1E9] flex items-center justify-center text-[#1C3829] active:scale-90 transition-all"
                  >
                    <Plus className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <button 
                onClick={handleSaveItem}
                disabled={!itemName.trim()}
                className="w-full h-20 bg-[#1C3829] text-[#F6F1E9] disabled:opacity-30 disabled:grayscale rounded-3xl font-serif italic text-2xl shadow-xl shadow-[#1C3829]/20 hover:scale-[1.02] active:scale-[0.98] transition-all mt-6"
              >
                Catalog Item
              </button>
            </div>
          </div>
        );
      case 'search':
        const filteredInventory = inventory.filter(item => {
          const query = searchQuery.toLowerCase();
          const matchesSearch = item.name.toLowerCase().includes(query) || 
                               (item.labels && item.labels.some(label => label.toLowerCase().includes(query)));
          const matchesFilter = activeFilter === 'All' || item.room.toLowerCase() === activeFilter.toLowerCase();
          return matchesSearch && matchesFilter;
        });

        return (
          <div className="flex flex-col animate-in fade-in slide-in-from-bottom-4 duration-700">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-4xl font-serif italic text-[#1C3829]">Find</h1>
            </div>

            {/* Search Bar */}
            <div className="relative mb-8 group">
              <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none">
                <Search className="w-5 h-5 text-[#1C3829]/40 group-focus-within:text-[#1C3829] transition-colors" />
              </div>
              <input 
                type="text" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="What are you looking for?" 
                className="w-full h-16 pl-14 pr-16 bg-white border border-[#D8CFBE] rounded-3xl text-[#0E1F14] placeholder:text-[#0E1F14]/30 focus:outline-none focus:ring-4 focus:ring-[#1C3829]/5 focus:border-[#1C3829] transition-all"
                autoFocus
              />
              <button 
                onClick={() => setCurrentScreen('voiceSearch')}
                className="absolute inset-y-2 right-2 w-12 h-12 rounded-2xl bg-[#1C3829]/5 flex items-center justify-center text-[#1C3829] hover:bg-[#1C3829]/10 active:scale-90 transition-all"
              >
                <Mic className="w-5 h-5" />
              </button>
            </div>

            {/* Filter Chips */}
            <div className="flex gap-2 mb-10 overflow-x-auto pb-4 no-scrollbar">
              {['All', 'Electronics', 'Bathroom', 'Kitchen'].map((filter) => (
                <button 
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-8 py-3 rounded-2xl text-[10px] font-mono uppercase tracking-widest transition-all whitespace-nowrap ${
                    activeFilter === filter 
                      ? 'bg-[#1C3829] text-[#F6F1E9] shadow-lg shadow-[#1C3829]/20' 
                      : 'bg-white border border-[#D8CFBE] text-[#0E1F14]/60 hover:border-[#1C3829]/30'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>

            {/* Results Area */}
            <div className="space-y-6">
              <h2 className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#0E1F14]/20 ml-2">
                {searchQuery || activeFilter !== 'All' ? 'Matched Items' : 'Recent Items'}
              </h2>
              {filteredInventory.length > 0 ? (
                filteredInventory.map((item, i) => {
                  const Icon = item.room === 'electronics' ? Laptop : item.room === 'bathroom' ? Bath : item.room === 'kitchen' ? UtensilsCrossed : Box;
                  return (
                    <div 
                      key={item.id}
                      onClick={() => {
                        setSelectedItemForDetail(item.id);
                        setCurrentScreen('itemDetail');
                      }}
                      className="flex items-center p-5 bg-white border border-[#D8CFBE]/60 rounded-3xl hover:border-[#1C3829]/30 transition-all cursor-pointer group animate-in fade-in slide-in-from-right-4 duration-500"
                      style={{ animationDelay: `${i * 50}ms` }}
                    >
                      <div className="w-14 h-14 rounded-2xl bg-[#F6F1E9] flex items-center justify-center text-[#1C3829] mr-5">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-serif italic text-[#1C3829] leading-tight">{item.name}</h3>
                        <p className="text-[9px] text-[#0E1F14]/40 font-mono uppercase tracking-widest mt-1">{item.room} — {item.spot}</p>
                        {item.labels && item.labels.length > 0 && (
                          <div className="flex flex-wrap gap-1 mt-2">
                            {item.labels.map(label => (
                              <span key={label} className="text-[8px] font-mono bg-[#1C3829]/5 text-[#1C3829]/60 px-1.5 py-0.5 rounded">#{label}</span>
                            ))}
                          </div>
                        )}
                      </div>
                      <div className="w-12 h-12 rounded-full bg-[#1C3829]/5 border border-[#1C3829]/10 flex items-center justify-center text-sm font-serif italic text-[#1C3829]">
                        {item.qty}
                      </div>
                    </div>
                  );
                })
              ) : (
                <div className="py-20 text-center">
                  <div className="w-20 h-20 rounded-full bg-[#D8CFBE]/20 flex items-center justify-center mx-auto mb-4">
                    <Search className="w-10 h-10 text-[#D8CFBE]" />
                  </div>
                  <p className="text-xs text-[#0E1F14]/30 font-mono uppercase tracking-widest">Nothing found here</p>
                </div>
              )}
            </div>
          </div>
        );
      case 'voiceSearch':
        return (
          <div className="absolute inset-0 bg-[#1C3829] z-50 flex flex-col items-center justify-center p-12 animate-in fade-in duration-500">
            <button 
              onClick={() => setCurrentScreen('search')}
              className="absolute top-12 left-8 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white active:scale-90 transition-transform"
            >
              <ArrowLeft className="w-6 h-6" />
            </button>

            <div className="flex flex-col items-center gap-12 text-center">
              <div className="relative">
                {/* Pulsing Rings */}
                <div className="absolute inset-0 rounded-full bg-white/20 animate-ping" />
                <div className="absolute inset-0 rounded-full bg-white/10 animate-ping [animation-delay:0.5s]" />
                
                <div className="relative w-32 h-32 rounded-full bg-white flex items-center justify-center text-[#1C3829] shadow-2xl">
                  <Mic className="w-12 h-12" />
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="text-4xl font-serif italic text-white">Listening...</h2>
                <p className="text-white/40 font-mono text-xs uppercase tracking-[0.3em]">Say the name of an item or room</p>
              </div>

              {/* Mock Waveform */}
              <div className="flex items-end gap-1.5 h-16">
                {[0.4, 0.7, 0.5, 0.9, 0.6, 0.8, 0.4, 0.7, 0.5].map((h, i) => (
                  <div 
                    key={i}
                    className="w-1.5 bg-white/30 rounded-full animate-pulse"
                    style={{ 
                      height: `${h * 100}%`,
                      animationDelay: `${i * 0.1}s`
                    }}
                  />
                ))}
              </div>
            </div>

            <button 
              onClick={() => setCurrentScreen('search')}
              className="absolute bottom-20 text-white/60 font-mono text-[10px] uppercase tracking-[0.4em] border-b border-white/20 pb-1"
            >
              Tap to cancel
            </button>
          </div>
        );
      case 'stock':
        return (
          <div className="flex flex-col animate-in fade-in slide-in-from-bottom-4 duration-700">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-4xl font-serif italic text-[#1C3829]">Stock</h1>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4 mb-10">
              <div className="p-6 bg-[#1C3829] rounded-3xl text-[#F6F1E9]">
                <div className="text-3xl font-serif italic mb-1">{inventory.length}</div>
                <div className="text-[10px] font-mono uppercase tracking-widest opacity-60">Total Items</div>
              </div>
              <div className="p-6 bg-white border border-[#D8CFBE] rounded-3xl text-[#1C3829]">
                <div className="text-3xl font-serif italic mb-1">{inventory.reduce((acc, curr) => acc + curr.qty, 0)}</div>
                <div className="text-[10px] font-mono uppercase tracking-widest opacity-60">Total Count</div>
              </div>
            </div>

            {/* Stock List */}
            <div className="space-y-4">
              <div className="flex justify-between items-center px-2 mb-2">
                <h2 className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#0E1F14]/20">Inventory List</h2>
                <div className="flex gap-1">
                  <div className="w-1 h-1 rounded-full bg-[#1C3829]/20" />
                  <div className="w-1 h-1 rounded-full bg-[#1C3829]/20" />
                  <div className="w-1 h-1 rounded-full bg-[#1C3829]/20" />
                </div>
              </div>
              {inventory.map((item, i) => (
                <div 
                  key={item.id}
                  onClick={() => {
                    setSelectedItemForUpdate(item.id);
                    setTempRoom(item.room);
                    setTempSpot(item.spot);
                    setTempQty(item.qty);
                    setCurrentScreen('updateStock');
                  }}
                  className="flex items-center p-6 bg-white border border-[#D8CFBE]/60 rounded-3xl hover:border-[#1C3829]/30 transition-all cursor-pointer group active:scale-[0.98] animate-in fade-in slide-in-from-bottom-4 duration-500"
                  style={{ animationDelay: `${i * 50}ms` }}
                >
                  <div className="flex-1">
                    <h3 className="text-xl font-serif italic text-[#1C3829] leading-tight">{item.name}</h3>
                    <p className="text-[9px] text-[#0E1F14]/40 font-mono uppercase tracking-widest mt-1.5">{item.room} · {item.spot}</p>
                  </div>
                  <div className="text-5xl font-serif italic text-[#B8965A] ml-6 group-hover:scale-110 transition-transform">
                    {item.qty}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case 'updateStock':
        const currentItem = inventory.find(i => i.id === selectedItemForUpdate);
        
        return (
          <div className="flex flex-col min-h-full animate-in slide-in-from-right duration-500">
            {/* Header */}
            <div className="flex items-center mb-10">
              <button 
                onClick={() => {
                  setSelectedItemForUpdate(null);
                  setCurrentScreen('stock');
                }} 
                className="w-12 h-12 rounded-full bg-[#1C3829]/5 flex items-center justify-center text-[#1C3829] active:scale-90 transition-transform"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <h1 className="text-3xl font-serif italic text-[#1C3829] ml-5">Edit Item</h1>
            </div>

            {/* Item Info (Immutable) */}
            <div className="bg-white p-8 rounded-[2.5rem] border border-[#D8CFBE] mb-10 text-center shadow-sm relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-[#1C3829]/5" />
              <div className="w-20 h-20 rounded-2xl bg-[#F6F1E9] flex items-center justify-center text-[#1C3829] mx-auto mb-6">
                {currentItem?.room === 'electronics' ? <Laptop className="w-10 h-10" /> : <Box className="w-10 h-10" />}
              </div>
              <h1 className="text-4xl font-serif italic text-[#1C3829] mb-1">{currentItem?.name}</h1>
              <div className="text-[9px] text-[#0E1F14]/40 font-mono uppercase tracking-widest mb-3">
                {formatMetadata(currentItem?.createdAt, currentItem?.updatedAt)}
              </div>
              <p className="text-[10px] text-[#0E1F14]/30 font-mono uppercase tracking-widest">Name is Immutable</p>
            </div>

            {/* Editable Fields */}
            <div className="flex flex-col gap-10 mb-12">
              <div className="space-y-3">
                <label className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#0E1F14]/40 ml-1">Room</label>
                <div className="relative">
                  <select 
                    value={tempRoom}
                    onChange={(e) => setTempRoom(e.target.value)}
                    className="w-full h-16 px-6 bg-white border border-[#D8CFBE] rounded-2xl text-[#0E1F14] focus:outline-none focus:border-[#1C3829] transition-all appearance-none"
                  >
                    <option value="electronics">Electronics</option>
                    <option value="bathroom">Bathroom</option>
                    <option value="kitchen">Kitchen</option>
                    <option value="living room">Living Room</option>
                    <option value="office">Office</option>
                    <option value="garage">Garage</option>
                  </select>
                  <ChevronRight className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#D8CFBE] rotate-90 pointer-events-none" />
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#0E1F14]/40 ml-1">Spot</label>
                <input 
                  type="text" 
                  value={tempSpot}
                  onChange={(e) => setTempSpot(e.target.value)}
                  placeholder="e.g. top shelf"
                  className="w-full h-16 px-6 bg-white border border-[#D8CFBE] rounded-2xl text-[#0E1F14] focus:outline-none focus:border-[#1C3829] transition-all"
                />
              </div>

              {/* Stepper UI */}
              <div className="space-y-4">
                <label className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#0E1F14]/40 ml-1 text-center block">Update Quantity</label>
                <div className="flex items-center gap-10 bg-white border border-[#D8CFBE] rounded-3xl p-4 justify-center">
                  <button 
                    onClick={() => setTempQty(Math.max(0, tempQty - 1))}
                    className="w-16 h-16 rounded-2xl bg-[#F6F1E9] flex items-center justify-center text-[#1C3829] active:scale-90 transition-all shadow-sm"
                  >
                    <Minus className="w-8 h-8" />
                  </button>
                  <div className="text-7xl font-serif italic text-[#1C3829] min-w-[100px] text-center" key={tempQty}>
                    {tempQty}
                  </div>
                  <button 
                    onClick={() => setTempQty(tempQty + 1)}
                    className="w-16 h-16 rounded-2xl bg-[#F6F1E9] flex items-center justify-center text-[#1C3829] active:scale-90 transition-all shadow-sm"
                  >
                    <Plus className="w-8 h-8" />
                  </button>
                </div>
              </div>
            </div>

            {/* Update Button */}
            <button 
              onClick={handleUpdateStock}
              className="w-full h-20 bg-[#1C3829] text-[#F6F1E9] rounded-3xl font-serif italic text-2xl shadow-xl shadow-[#1C3829]/20 hover:scale-[1.02] active:scale-[0.98] transition-all mb-10"
            >
              Update Item Details
            </button>
          </div>
        );
      case 'profile':
        return (
          <div className="flex flex-col animate-in fade-in slide-in-from-bottom-4 duration-700">
            {/* User Header */}
            <div className="flex flex-col items-center text-center mt-6 mb-12">
              <div className="relative mb-6">
                <div className="w-28 h-28 rounded-full bg-[#1C3829] flex items-center justify-center text-[#F6F1E9] text-4xl font-serif italic shadow-2xl shadow-[#1C3829]/30 ring-8 ring-white">
                  SD
                </div>
                <div className="absolute bottom-1 right-1 w-8 h-8 rounded-full bg-[#B8965A] border-4 border-white flex items-center justify-center text-white">
                  <Plus className="w-4 h-4" />
                </div>
              </div>
              <h1 className="text-3xl font-serif italic text-[#1C3829] mb-1">Sonal Doiphode</h1>
              <p className="text-[10px] text-[#0E1F14]/40 font-mono uppercase tracking-widest">Premium Curator</p>
            </div>

            {/* Sections */}
            <div className="space-y-10">
              <div className="space-y-3">
                <h2 className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#0E1F14]/20 ml-4">Account Settings</h2>
                <div className="bg-white border border-[#D8CFBE] rounded-[2.5rem] overflow-hidden shadow-sm">
                  {[
                    { label: "Profile Information", value: "Edit ›" },
                    { label: "Security & Privacy", value: "Safe ›" },
                    { label: "Inventory Backups", value: "Daily ›" }
                  ].map((row, i, arr) => (
                    <button 
                      key={row.label}
                      className={`w-full flex justify-between items-center p-6 hover:bg-[#F6F1E9]/50 active:bg-[#F6F1E9] transition-colors text-left ${i !== arr.length - 1 ? 'border-b border-[#D8CFBE]/30' : ''}`}
                    >
                      <span className="text-sm font-medium text-[#0E1F14]">{row.label}</span>
                      <span className="text-[11px] font-mono text-[#B8965A] uppercase tracking-wider">{row.value}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Logout */}
              <button 
                onClick={handleLogout}
                className="w-full h-16 border-2 border-[#C0392B]/20 text-[#C0392B] rounded-2xl font-mono uppercase tracking-[0.2em] text-[10px] font-bold hover:bg-[#C0392B] hover:text-white transition-all flex items-center justify-center gap-4 active:scale-[0.98]"
              >
                <LogOut className="w-4 h-4" />
                Sign Out from Device
              </button>
            </div>
          </div>
        );
      case 'itemDetail':
        const itemForDetail = inventory.find(i => i.id === selectedItemForDetail);
        const DetailIcon = itemForDetail?.room === 'electronics' ? Laptop : itemForDetail?.room === 'bathroom' ? Bath : itemForDetail?.room === 'kitchen' ? UtensilsCrossed : Box;

        return (
          <div className="flex flex-col min-h-full animate-in slide-in-from-right duration-500">
            {/* Header */}
            <div className="mb-10">
              <button 
                onClick={() => {
                  setSelectedItemForDetail(null);
                  setIsEditingSpot(false);
                  setCurrentScreen('search');
                }} 
                className="w-12 h-12 rounded-full bg-[#1C3829]/5 flex items-center justify-center text-[#1C3829] active:scale-90 transition-transform"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
            </div>

            {/* Photo Placeholder */}
            <div className="w-full aspect-[4/5] rounded-[3rem] bg-white border border-[#D8CFBE] flex flex-col items-center justify-center mb-10 shadow-inner group overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#1C3829]/5 pointer-events-none" />
              <div className="flex flex-col items-center text-[#1C3829]/10 group-hover:scale-110 transition-transform duration-700">
                <DetailIcon className="w-32 h-32 mb-4" />
                <span className="text-[10px] font-mono uppercase tracking-[0.4em]">No Photo Captured</span>
              </div>
              <button className="absolute bottom-8 px-8 py-3 bg-white border border-[#D8CFBE] rounded-full text-[10px] font-mono uppercase tracking-widest text-[#1C3829] shadow-lg">Add Photo</button>
            </div>

            {/* Info Section */}
            <div className="px-2 mb-10">
              <h1 className="text-4xl font-serif italic text-[#1C3829] leading-tight mb-3">{itemForDetail?.name}</h1>
              <div className="flex gap-2 mb-4">
                <span className="px-4 py-1.5 rounded-full bg-[#1C3829] text-[9px] font-mono uppercase tracking-widest text-white">{itemForDetail?.room}</span>
                <span className="px-4 py-1.5 rounded-full bg-[#B8965A]/10 text-[9px] font-mono uppercase tracking-widest text-[#B8965A] border border-[#B8965A]/20">Qty: {itemForDetail?.qty}</span>
              </div>
              
              {itemForDetail?.labels && itemForDetail.labels.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-6">
                  {itemForDetail.labels.map(label => (
                    <span key={label} className="px-3 py-1 bg-white border border-[#D8CFBE] rounded-full text-[9px] font-mono text-[#1C3829]/60 uppercase tracking-widest">
                      #{label}
                    </span>
                  ))}
                </div>
              )}

              <div className="text-[9px] text-[#0E1F14]/40 font-mono uppercase tracking-widest">
                {formatMetadata(itemForDetail?.createdAt, itemForDetail?.updatedAt)}
              </div>
            </div>

            {/* Info Grid */}
            <div className="bg-white border border-[#D8CFBE] rounded-[2.5rem] overflow-hidden mb-12 shadow-sm">
              {/* Location Row */}
              <div className="flex justify-between items-center p-6 border-b border-[#D8CFBE]/30">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#0E1F14]/30">Specific Location</span>
                {isEditingSpot ? (
                  <div className="flex items-center gap-2">
                    <input 
                      type="text" 
                      value={editedSpot}
                      onChange={(e) => setEditedSpot(e.target.value)}
                      className="bg-[#F6F1E9] border border-[#D8CFBE] rounded-lg px-3 py-1 text-sm font-serif italic text-[#1C3829] focus:outline-none focus:border-[#1C3829] w-32"
                      autoFocus
                      onKeyDown={(e) => e.key === 'Enter' && handleUpdateDetailSpot()}
                    />
                    <button 
                      onClick={handleUpdateDetailSpot}
                      className="text-[10px] font-mono uppercase tracking-widest text-green-600 font-bold px-2 py-1 hover:bg-green-50 rounded transition-colors"
                    >
                      Save
                    </button>
                  </div>
                ) : (
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-serif italic text-[#1C3829] capitalize">{itemForDetail?.spot}</span>
                    <button 
                      onClick={() => {
                        setEditedSpot(itemForDetail?.spot || '');
                        setIsEditingSpot(true);
                      }}
                      className="text-[10px] font-mono uppercase tracking-widest text-[#B8965A] hover:text-[#1C3829] transition-colors"
                    >
                      Edit
                    </button>
                  </div>
                )}
              </div>

              {/* Last Updated Row */}
              <div className="flex justify-between items-center p-6 border-b border-[#D8CFBE]/30">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#0E1F14]/30">Last Updated</span>
                <span className="text-sm font-serif italic text-[#1C3829] capitalize">{formatDate(itemForDetail?.updatedAt || '')}</span>
              </div>

              {/* ID Row */}
              <div className="flex justify-between items-center p-6">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#0E1F14]/30">Inventory ID</span>
                <span className="text-sm font-serif italic text-[#1C3829] capitalize">#{itemForDetail?.id}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 mb-10">
              <button 
                onClick={() => setCurrentScreen('foundSuccess')}
                className="flex-[2] h-20 bg-[#1C3829] text-[#F6F1E9] rounded-3xl font-serif italic text-2xl shadow-xl shadow-[#1C3829]/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                Found it!
              </button>
              <button 
                onClick={() => {
                  setSelectedItemForDetail(null);
                  setCurrentScreen('search');
                }}
                className="flex-1 h-20 bg-white border border-[#D8CFBE] text-[#C0392B] rounded-3xl font-serif italic text-2xl hover:bg-red-50 active:scale-[0.98] transition-all"
              >
                Lost
              </button>
            </div>
          </div>
        );
      case 'foundSuccess':
        const foundItem = inventory.find(i => i.id === selectedItemForDetail);
        const SuccessIcon = foundItem?.room === 'electronics' ? Laptop : foundItem?.room === 'bathroom' ? Bath : foundItem?.room === 'kitchen' ? UtensilsCrossed : Box;

        return (
          <div className="flex flex-col min-h-full items-center justify-center text-center animate-in zoom-in-95 duration-700">
            {/* Success Animation Area */}
            <div className="mb-16 relative">
              <div className="w-40 h-40 rounded-full bg-[#1C3829] flex items-center justify-center text-6xl shadow-[0_20px_60px_rgba(28,56,41,0.4)] animate-bounce">
                ✨
              </div>
              <div className="absolute inset-0 w-40 h-40 rounded-full border-4 border-[#1C3829] animate-ping opacity-10" />
            </div>

            <h1 className="text-6xl font-serif italic text-[#1C3829] mb-4">Splendid.</h1>
            <p className="text-sm text-[#0E1F14]/40 font-mono uppercase tracking-[0.3em] mb-12">Item confirmed in place</p>

            {/* Preview Card */}
            <div className="w-full bg-white border border-[#D8CFBE] rounded-[3rem] p-8 mb-16 flex items-center gap-8 text-left shadow-xl shadow-[#1C3829]/5">
              <div className="w-20 h-20 rounded-[1.5rem] bg-[#F6F1E9] flex items-center justify-center text-[#1C3829]">
                <SuccessIcon className="w-10 h-10" />
              </div>
              <div>
                <h3 className="text-2xl font-serif italic text-[#1C3829] leading-tight mb-1">{foundItem?.name}</h3>
                <p className="text-[10px] text-[#0E1F14]/40 font-mono uppercase tracking-widest">Safe in {foundItem?.room}</p>
              </div>
            </div>

            {/* Stacked Buttons */}
            <div className="w-full space-y-4 mb-10">
              <button 
                onClick={() => {
                  setSelectedItemForDetail(null);
                  setCurrentScreen('search');
                }}
                className="w-full h-20 bg-[#1C3829] text-[#F6F1E9] rounded-3xl font-serif italic text-2xl shadow-xl shadow-[#1C3829]/20 active:scale-[0.98] transition-all"
              >
                Continue Finding
              </button>
              <button 
                onClick={() => {
                  setSelectedItemForDetail(null);
                  setCurrentScreen('home');
                }}
                className="w-full h-20 bg-white border border-[#D8CFBE] text-[#1C3829] rounded-3xl font-serif italic text-2xl active:scale-[0.98] transition-all"
              >
                Return Home
              </button>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] flex items-center justify-center p-4 md:p-8 font-sans antialiased">
      {/* Mobile Phone Shell */}
      <div className="relative w-full max-w-[400px] h-[860px] bg-[#F6F1E9] rounded-[4rem] shadow-[0_0_100px_rgba(0,0,0,0.7)] overflow-hidden border-[10px] border-[#1C1C1C] flex flex-col ring-1 ring-white/10">
        
        {/* Mock Status Bar */}
        <div className={`h-12 px-10 flex justify-between items-end pb-2 z-[60] flex-shrink-0 transition-colors duration-500 ${currentScreen === 'camera' ? 'text-white' : 'text-[#0E1F14]'}`}>
          <span className="text-sm font-bold tracking-tight">9:41</span>
          <div className="flex items-center gap-2">
            <Signal className="w-4 h-4" />
            <Wifi className="w-4 h-4" />
            <div className="w-7 h-3.5 border border-current/30 rounded-xs relative p-0.5">
              <div className="h-full bg-current rounded-xs w-3/4" />
            </div>
          </div>
        </div>

        {/* Viewport Area */}
        <div className="flex-1 relative overflow-hidden flex flex-col">
          
          {/* Scrollable Content Area */}
          <div className="flex-1 overflow-y-auto px-8 pt-4 pb-8 no-scrollbar scroll-smooth">
            {renderScreen()}
          </div>

          {/* Floating FAB - Only on Home */}
          {currentScreen === 'home' && (
            <button 
              onClick={() => setCurrentScreen('camera')}
              className="absolute bottom-6 right-8 w-16 h-16 bg-[#1C3829] rounded-[2rem] shadow-[0_20px_40px_rgba(28,56,41,0.3)] flex items-center justify-center text-[#F6F1E9] hover:scale-110 hover:-rotate-3 active:scale-95 transition-all z-30 animate-in zoom-in-50 duration-500"
            >
              <Plus className="w-10 h-10" />
            </button>
          )}

          {/* Bottom Navigation Bar */}
          <div className={`flex-shrink-0 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${isNavHidden ? 'h-0 opacity-0 translate-y-full' : 'h-[96px] opacity-100 translate-y-0'}`}>
            <div className="h-full bg-white/80 backdrop-blur-2xl border-t border-[#0E1F14]/5 flex flex-col justify-between pt-4 pb-2 px-4">
              <div className="flex justify-around items-center">
                <button 
                  onClick={() => setCurrentScreen('home')}
                  className={`flex flex-col items-center gap-1.5 transition-all duration-300 ${currentScreen === 'home' ? 'text-[#1C3829] scale-110' : 'text-[#0E1F14]/20 hover:text-[#1C3829]'}`}
                >
                  <Home className="w-6 h-6" fill={currentScreen === 'home' ? 'currentColor' : 'none'} />
                  <span className="text-[10px] font-bold tracking-tight">Home</span>
                </button>
                <button 
                  onClick={() => setCurrentScreen('search')}
                  className={`flex flex-col items-center gap-1.5 transition-all duration-300 ${currentScreen === 'search' ? 'text-[#1C3829] scale-110' : 'text-[#0E1F14]/20 hover:text-[#1C3829]'}`}
                >
                  <Search className="w-6 h-6" strokeWidth={currentScreen === 'search' ? 3 : 2} />
                  <span className="text-[10px] font-bold tracking-tight">Find</span>
                </button>
                <button 
                  onClick={() => setCurrentScreen('stock')}
                  className={`flex flex-col items-center gap-1.5 transition-all duration-300 ${currentScreen === 'stock' ? 'text-[#1C3829] scale-110' : 'text-[#0E1F14]/20 hover:text-[#1C3829]'}`}
                >
                  <Box className="w-6 h-6" fill={currentScreen === 'stock' ? 'currentColor' : 'none'} />
                  <span className="text-[10px] font-bold tracking-tight">Stock</span>
                </button>
                <button 
                  onClick={() => setCurrentScreen('profile')}
                  className={`flex flex-col items-center gap-1.5 transition-all duration-300 ${currentScreen === 'profile' ? 'text-[#1C3829] scale-110' : 'text-[#0E1F14]/20 hover:text-[#1C3829]'}`}
                >
                  <User className="w-6 h-6" fill={currentScreen === 'profile' ? 'currentColor' : 'none'} />
                  <span className="text-[10px] font-bold tracking-tight">You</span>
                </button>
              </div>
              {/* Home Indicator Integrated */}
              <div className="flex justify-center pb-1">
                <div className="w-32 h-1.5 bg-[#0E1F14]/10 rounded-full" />
              </div>
            </div>
          </div>

          {/* Fallback Home Indicator when nav is hidden */}
          {isNavHidden && (
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1.5 bg-[#0E1F14]/10 rounded-full z-[60] animate-in fade-in slide-in-from-bottom-2 duration-700" />
          )}
        </div>

        {/* Notches / Sensors area mock */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-8 bg-[#1C1C1C] rounded-b-[2rem] z-[70] flex items-center justify-center gap-4">
          <div className="w-16 h-1 rounded-full bg-white/5" />
          <div className="w-2 h-2 rounded-full bg-white/10" />
        </div>
      </div>
    </div>
  );
}
