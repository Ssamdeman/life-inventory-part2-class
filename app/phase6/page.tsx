'use client';

import React, { useState } from 'react';
import { Home, Search, Box, User, Battery, Wifi, Signal, Mic, Plus, Minus, ChevronRight, Laptop, Bath, UtensilsCrossed, ArrowLeft, Camera, Upload, LogOut } from 'lucide-react';

const INITIAL_INVENTORY = [
  { id: 1, name: 'Laptop Charger', room: 'electronics', spot: 'desk drawer', qty: 1 },
  { id: 2, name: 'Toilet Paper', room: 'bathroom', spot: 'cabinet', qty: 8 }
];

export default function Phase6Page() {
  const [currentScreen, setCurrentScreen] = useState('home');
  const [inventory, setInventory] = useState(INITIAL_INVENTORY);

  // Form State
  const [itemName, setItemName] = useState('');
  const [selectedRoom, setSelectedRoom] = useState('electronics');
  const [itemSpot, setItemSpot] = useState('');
  const [quantity, setQuantity] = useState(1);

  // Search State
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedItemForDetail, setSelectedItemForDetail] = useState<number | null>(null);

  // Edit State
  const [selectedItemForUpdate, setSelectedItemForUpdate] = useState<number | null>(null);
  const [tempRoom, setTempRoom] = useState('electronics');
  const [tempSpot, setTempSpot] = useState('');
  const [tempQty, setTempQty] = useState(0);

  const getCountByRoom = (room: string) => {
    return inventory.filter(item => item.room === room.toLowerCase()).length;
  };

  const handleSaveItem = () => {
    if (!itemName.trim()) return;

    const newItem = {
      id: Math.floor(Math.random() * 10000),
      name: itemName,
      room: selectedRoom.toLowerCase(),
      spot: itemSpot || 'not specified',
      qty: quantity
    };

    setInventory([...inventory, newItem]);
    
    // Reset Form
    setItemName('');
    setSelectedRoom('electronics');
    setItemSpot('');
    setQuantity(1);
    
    setCurrentScreen('home');
  };

  const handleUpdateStock = () => {
    if (selectedItemForUpdate === null) return;
    
    setInventory(inventory.map(item => 
      item.id === selectedItemForUpdate 
        ? { ...item, room: tempRoom.toLowerCase(), spot: tempSpot, qty: tempQty } 
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

  const renderScreen = () => {
    switch (currentScreen) {
      case 'home':
        return (
          <div className="flex flex-col h-full animate-in fade-in slide-in-from-bottom-4 duration-700">
            {/* Header */}
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-3xl font-serif italic text-[#1C3829]">My Inventory</h1>
              <div className="w-10 h-10 rounded-full bg-[#1C3829] flex items-center justify-center text-[#F6F1E9] text-sm font-medium">
                SD
              </div>
            </div>

            {/* Search Bar */}
            <div className="relative mb-8 group">
              <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                <Search className="w-5 h-5 text-[#1C3829]/40 group-focus-within:text-[#1C3829] transition-colors" />
              </div>
              <input 
                type="text" 
                placeholder="Search items..." 
                className="w-full h-14 pl-12 pr-12 bg-white border border-[#D8CFBE] rounded-2xl text-[#0E1F14] placeholder:text-[#0E1F14]/30 focus:outline-none focus:border-[#1C3829] focus:ring-1 focus:ring-[#1C3829] transition-all"
              />
              <div className="absolute inset-y-0 right-4 flex items-center">
                <Mic className="w-5 h-5 text-[#1C3829]/40 hover:text-[#1C3829] cursor-pointer transition-colors" />
              </div>
            </div>

            {/* Collections */}
            <div>
              <div className="flex justify-between items-end mb-4">
                <h2 className="text-xs font-mono uppercase tracking-[0.2em] text-[#0E1F14]/40">Collections</h2>
                <button className="text-[10px] font-mono uppercase tracking-widest text-[#B8965A] font-bold">See All</button>
              </div>
              
              <div className="space-y-4">
                {[
                  { name: 'Electronics', icon: Laptop, room: 'electronics' },
                  { name: 'Bathroom', icon: Bath, room: 'bathroom' },
                  { name: 'Kitchen', icon: UtensilsCrossed, room: 'kitchen' }
                ].map((collection) => (
                  <div 
                    key={collection.name}
                    onClick={() => {
                      setActiveFilter(collection.name);
                      setCurrentScreen('search');
                    }}
                    className="flex items-center p-4 bg-white border border-[#D8CFBE] rounded-2xl hover:border-[#1C3829]/30 transition-all cursor-pointer group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-[#F6F1E9] flex items-center justify-center text-[#1C3829] mr-4">
                      <collection.icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-serif italic text-[#1C3829]">{collection.name}</h3>
                      <p className="text-xs text-[#0E1F14]/40 font-mono">{getCountByRoom(collection.room)} Items</p>
                    </div>
                    <ChevronRight className="w-5 h-5 text-[#D8CFBE] group-hover:text-[#1C3829] transition-colors" />
                  </div>
                ))}
              </div>
            </div>

            {/* FAB */}
            <button 
              onClick={() => setCurrentScreen('camera')}
              className="absolute bottom-28 right-0 w-14 h-14 bg-[#1C3829] rounded-2xl shadow-lg shadow-[#1C3829]/20 flex items-center justify-center text-[#F6F1E9] hover:scale-105 active:scale-95 transition-all z-10"
            >
              <Plus className="w-8 h-8" />
            </button>
          </div>
        );
      case 'camera':
        return (
          <div className="absolute inset-0 bg-black z-30 flex flex-col animate-in fade-in duration-500">
            {/* Camera Header */}
            <div className="p-6 flex items-center">
              <button onClick={() => setCurrentScreen('home')} className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white">
                <ArrowLeft className="w-6 h-6" />
              </button>
            </div>

            {/* Viewfinder Area */}
            <div className="flex-1 relative flex items-center justify-center px-12">
              <div className="w-full aspect-square relative">
                {/* Corner Brackets */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-white/40" />
                <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-white/40" />
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-white/40" />
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-white/40" />
                
                <div className="absolute inset-0 flex items-center justify-center">
                  <Camera className="w-12 h-12 text-white/10" />
                </div>
              </div>
            </div>

            {/* Camera Controls */}
            <div className="p-12 flex flex-col items-center gap-8">
              <button 
                onClick={() => setCurrentScreen('addForm')}
                className="w-20 h-20 rounded-full border-4 border-white p-1"
              >
                <div className="w-full h-full rounded-full bg-white active:scale-90 transition-transform" />
              </button>
              <button 
                onClick={() => setCurrentScreen('addForm')}
                className="text-white/60 text-xs font-mono uppercase tracking-[0.2em] hover:text-white transition-colors"
              >
                skip — add photo later
              </button>
            </div>
          </div>
        );
      case 'addForm':
        return (
          <div className="flex flex-col h-full animate-in slide-in-from-right duration-500 pb-8">
            {/* Form Header */}
            <div className="flex items-center gap-4 mb-8">
              <button onClick={() => setCurrentScreen('camera')} className="w-10 h-10 rounded-full bg-[#1C3829]/5 flex items-center justify-center text-[#1C3829]">
                <ArrowLeft className="w-5 h-5" />
              </button>
              <h1 className="text-2xl font-serif italic text-[#1C3829]">Add New Item</h1>
            </div>

            {/* Form Fields */}
            <div className="space-y-6">
              <div className="space-y-2">
                <label className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#0E1F14]/40 ml-1">Item Name</label>
                <input 
                  type="text" 
                  value={itemName}
                  onChange={(e) => setItemName(e.target.value)}
                  placeholder="e.g. Vintage Camera"
                  className="w-full h-14 px-4 bg-white border border-[#D8CFBE] rounded-2xl text-[#0E1F14] placeholder:text-[#0E1F14]/20 focus:outline-none focus:border-[#1C3829] transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#0E1F14]/40 ml-1">Room</label>
                <div className="relative">
                  <select 
                    value={selectedRoom}
                    onChange={(e) => setSelectedRoom(e.target.value)}
                    className="w-full h-14 px-4 bg-white border border-[#D8CFBE] rounded-2xl text-[#0E1F14] focus:outline-none focus:border-[#1C3829] transition-all appearance-none"
                  >
                    <option value="electronics">Electronics</option>
                    <option value="bathroom">Bathroom</option>
                    <option value="kitchen">Kitchen</option>
                    <option value="living room">Living Room</option>
                    <option value="office">Office</option>
                    <option value="garage">Garage</option>
                  </select>
                  <ChevronRight className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#D8CFBE] rotate-90 pointer-events-none" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#0E1F14]/40 ml-1">Specific Spot</label>
                <input 
                  type="text" 
                  value={itemSpot}
                  onChange={(e) => setItemSpot(e.target.value)}
                  placeholder="e.g. top shelf"
                  className="w-full h-14 px-4 bg-white border border-[#D8CFBE] rounded-2xl text-[#0E1F14] placeholder:text-[#0E1F14]/20 focus:outline-none focus:border-[#1C3829] transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#0E1F14]/40 ml-1">Photo</label>
                <div className="w-full h-40 border-2 border-dashed border-[#D8CFBE] rounded-2xl flex flex-col items-center justify-center text-[#1C3829]/30 hover:border-[#1C3829]/30 hover:bg-[#1C3829]/5 transition-all cursor-pointer">
                  <Upload className="w-8 h-8 mb-2" />
                  <span className="text-xs font-mono uppercase tracking-widest">Upload or Capture</span>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#0E1F14]/40 ml-1">Quantity</label>
                <input 
                  type="number" 
                  value={quantity}
                  onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                  className="w-full h-14 px-4 bg-white border border-[#D8CFBE] rounded-2xl text-[#0E1F14] focus:outline-none focus:border-[#1C3829] transition-all"
                />
              </div>

              <button 
                onClick={handleSaveItem}
                disabled={!itemName.trim()}
                className="w-full h-16 bg-[#1C3829] text-[#F6F1E9] disabled:opacity-50 disabled:cursor-not-allowed rounded-2xl font-serif italic text-xl shadow-lg shadow-[#1C3829]/10 hover:scale-[1.02] active:scale-[0.98] transition-all mt-4"
              >
                Save Item
              </button>
            </div>
          </div>
        );
      case 'search':
        const filteredInventory = inventory.filter(item => {
          const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
          const matchesFilter = activeFilter === 'All' || item.room.toLowerCase() === activeFilter.toLowerCase();
          return matchesSearch && matchesFilter;
        });

        return (
          <div className="flex flex-col h-full animate-in fade-in slide-in-from-bottom-4 duration-700">
            {/* Header */}
            <div className="mb-6">
              <h1 className="text-3xl font-serif italic text-[#1C3829]">Find Item</h1>
            </div>

            {/* Search Bar */}
            <div className="relative mb-6 group">
              <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                <Search className="w-5 h-5 text-[#1C3829]/40 group-focus-within:text-[#1C3829] transition-colors" />
              </div>
              <input 
                type="text" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search inventory..." 
                className="w-full h-14 pl-12 pr-4 bg-white border border-[#B8965A]/20 rounded-2xl text-[#0E1F14] placeholder:text-[#0E1F14]/30 focus:outline-none focus:border-[#B8965A] focus:ring-1 focus:ring-[#B8965A] transition-all"
              />
            </div>

            {/* Filter Chips */}
            <div className="flex gap-2 mb-8 overflow-x-auto pb-2 no-scrollbar">
              {['All', 'Electronics', 'Bathroom', 'Kitchen'].map((filter) => (
                <button 
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-6 py-2 rounded-full text-xs font-mono uppercase tracking-widest transition-all whitespace-nowrap ${
                    activeFilter === filter 
                      ? 'bg-[#1C3829] text-[#F6F1E9] shadow-md shadow-[#1C3829]/20' 
                      : 'bg-white border border-[#D8CFBE] text-[#0E1F14]/60 hover:border-[#1C3829]/30'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>

            {/* Results Area */}
            <div className="space-y-4">
              <h2 className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#0E1F14]/40 ml-1">
                {searchQuery || activeFilter !== 'All' ? 'Search Results' : 'Recent Results'}
              </h2>
              {filteredInventory.length > 0 ? (
                filteredInventory.map((item) => {
                  const Icon = item.room === 'electronics' ? Laptop : item.room === 'bathroom' ? Bath : item.room === 'kitchen' ? UtensilsCrossed : Box;
                  return (
                    <div 
                      key={item.id}
                      onClick={() => {
                        setSelectedItemForDetail(item.id);
                        setCurrentScreen('itemDetail');
                      }}
                      className="flex items-center p-4 bg-white border border-[#D8CFBE] rounded-2xl hover:border-[#1C3829]/30 transition-all cursor-pointer group"
                    >
                      <div className="w-10 h-10 rounded-xl bg-[#F6F1E9] flex items-center justify-center text-[#1C3829] mr-4">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-base font-serif italic text-[#1C3829] leading-tight">{item.name}</h3>
                        <p className="text-[10px] text-[#0E1F14]/40 font-mono uppercase tracking-widest mt-0.5">{item.room} · {item.spot}</p>
                      </div>
                      <div className="px-2 py-1 rounded-md bg-[#F6F1E9] border border-[#D8CFBE] text-[10px] font-mono text-[#1C3829]">
                        QTY: {item.qty}
                      </div>
                    </div>
                  );
                })
              ) : (
                <div className="py-12 text-center">
                  <p className="text-sm text-[#0E1F14]/30 font-mono uppercase tracking-widest text-balance">No items match your search</p>
                </div>
              )}
            </div>
          </div>
        );
      case 'stock':
        return (
          <div className="flex flex-col h-full animate-in fade-in slide-in-from-bottom-4 duration-700">
            {/* Header */}
            <div className="mb-6">
              <h1 className="text-3xl font-serif italic text-[#1C3829]">Quick Check</h1>
            </div>

            {/* Search Bar */}
            <div className="relative mb-6 group">
              <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                <Search className="w-5 h-5 text-[#1C3829]/40 group-focus-within:text-[#1C3829] transition-colors" />
              </div>
              <input 
                type="text" 
                placeholder="Search items..." 
                className="w-full h-14 pl-12 pr-12 bg-white border border-[#D8CFBE] rounded-2xl text-[#0E1F14] placeholder:text-[#0E1F14]/30 focus:outline-none focus:border-[#1C3829] transition-all"
              />
              <div className="absolute inset-y-0 right-4 flex items-center">
                <Mic className="w-5 h-5 text-[#1C3829]/40 hover:text-[#1C3829] cursor-pointer transition-colors" />
              </div>
            </div>

            {/* Filter Chips */}
            <div className="flex gap-2 mb-8 overflow-x-auto pb-2 no-scrollbar">
              {['All Rooms', 'Kitchen', 'Bathroom'].map((filter, i) => (
                <button 
                  key={filter}
                  className={`px-6 py-2 rounded-full text-xs font-mono uppercase tracking-widest transition-all whitespace-nowrap ${
                    i === 0 
                      ? 'bg-[#1C3829] text-[#F6F1E9] shadow-md shadow-[#1C3829]/20' 
                      : 'bg-white border border-[#D8CFBE] text-[#0E1F14]/60 hover:border-[#1C3829]/30'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>

            {/* Stock List */}
            <div className="space-y-3">
              <h2 className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#0E1F14]/40 ml-1 text-center">Tap item to update count</h2>
              {inventory.map((item) => (
                <div 
                  key={item.id}
                  onClick={() => {
                    setSelectedItemForUpdate(item.id);
                    setTempRoom(item.room);
                    setTempSpot(item.spot);
                    setTempQty(item.qty);
                    setCurrentScreen('updateStock');
                  }}
                  className="flex items-center p-5 bg-white border border-[#D8CFBE] rounded-2xl hover:border-[#1C3829]/30 transition-all cursor-pointer group active:scale-[0.98]"
                >
                  <div className="flex-1">
                    <h3 className="text-lg font-serif italic text-[#1C3829] leading-tight">{item.name}</h3>
                    <p className="text-[10px] text-[#0E1F14]/40 font-mono uppercase tracking-widest mt-1">{item.room} · {item.spot}</p>
                  </div>
                  <div className="text-4xl font-serif italic text-[#B8965A] ml-4 group-hover:scale-110 transition-transform">
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
          <div className="flex flex-col h-full animate-in slide-in-from-right duration-500">
            {/* Header */}
            <div className="flex items-center mb-12">
              <button 
                onClick={() => {
                  setSelectedItemForUpdate(null);
                  setCurrentScreen('stock');
                }} 
                className="w-10 h-10 rounded-full bg-[#1C3829]/5 flex items-center justify-center text-[#1C3829]"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <h1 className="text-2xl font-serif italic text-[#1C3829] ml-4">Edit Item</h1>
            </div>

            {/* Item Info (Immutable) */}
            <div className="text-center mb-8">
              <h1 className="text-3xl font-serif italic text-[#1C3829] mb-1">{currentItem?.name}</h1>
              <p className="text-[10px] text-[#0E1F14]/30 font-mono uppercase tracking-widest underline decoration-[#B8965A]/30">Item name cannot be changed</p>
            </div>

            {/* Editable Fields */}
            <div className="space-y-6 mb-12">
              <div className="space-y-2">
                <label className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#0E1F14]/40 ml-1">Room</label>
                <div className="relative">
                  <select 
                    value={tempRoom}
                    onChange={(e) => setTempRoom(e.target.value)}
                    className="w-full h-14 px-4 bg-white border border-[#D8CFBE] rounded-2xl text-[#0E1F14] focus:outline-none focus:border-[#1C3829] transition-all appearance-none"
                  >
                    <option value="electronics">Electronics</option>
                    <option value="bathroom">Bathroom</option>
                    <option value="kitchen">Kitchen</option>
                    <option value="living room">Living Room</option>
                    <option value="office">Office</option>
                    <option value="garage">Garage</option>
                  </select>
                  <ChevronRight className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#D8CFBE] rotate-90 pointer-events-none" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#0E1F14]/40 ml-1">Specific Spot</label>
                <input 
                  type="text" 
                  value={tempSpot}
                  onChange={(e) => setTempSpot(e.target.value)}
                  placeholder="e.g. top shelf"
                  className="w-full h-14 px-4 bg-white border border-[#D8CFBE] rounded-2xl text-[#0E1F14] focus:outline-none focus:border-[#1C3829] transition-all"
                />
              </div>
            </div>

            {/* Stepper UI */}
            <div className="flex-1 flex flex-col items-center justify-center gap-10">
              <div className="flex items-center gap-10">
                <button 
                  onClick={() => setTempQty(Math.max(0, tempQty - 1))}
                  className="w-16 h-16 rounded-full border-2 border-[#D8CFBE] flex items-center justify-center text-[#1C3829] hover:bg-[#1C3829]/5 active:scale-90 transition-all"
                >
                  <Minus className="w-8 h-8" />
                </button>
                <div className="text-8xl font-serif italic text-[#1C3829] min-w-[120px] text-center animate-in zoom-in-75 duration-300" key={tempQty}>
                  {tempQty}
                </div>
                <button 
                  onClick={() => setTempQty(tempQty + 1)}
                  className="w-16 h-16 rounded-full border-2 border-[#D8CFBE] flex items-center justify-center text-[#1C3829] hover:bg-[#1C3829]/5 active:scale-90 transition-all"
                >
                  <Plus className="w-8 h-8" />
                </button>
              </div>
              <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#0E1F14]/40">Adjust Quantity</p>
            </div>

            {/* Update Button */}
            <div className="pb-8">
              <button 
                onClick={handleUpdateStock}
                className="w-full h-16 bg-[#1C3829] text-[#F6F1E9] rounded-2xl font-serif italic text-xl shadow-lg shadow-[#1C3829]/10 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                Update
              </button>
            </div>
          </div>
        );
      case 'profile':
        return (
          <div className="flex flex-col h-full animate-in fade-in slide-in-from-bottom-4 duration-700">
            {/* User Header */}
            <div className="flex flex-col items-center text-center mt-4 mb-10">
              <div className="w-24 h-24 rounded-full bg-[#1C3829] flex items-center justify-center text-[#F6F1E9] text-3xl font-medium mb-4 shadow-lg shadow-[#1C3829]/20">
                SD
              </div>
              <h1 className="text-3xl font-serif italic text-[#1C3829] mb-1">Sonal Doiphode</h1>
              <p className="text-sm text-[#0E1F14]/40 font-mono">sonal.doiphode@example.com</p>
            </div>

            {/* Account Section */}
            <div className="mb-8">
              <h2 className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#0E1F14]/40 mb-3 ml-1">Account</h2>
              <div className="bg-white border border-[#D8CFBE] rounded-2xl overflow-hidden">
                {[
                  { label: "Full Name", value: "Sonal Doiphode" },
                  { label: "Email", value: "sonal.d@example.com" },
                  { label: "Password", value: "Change ›" }
                ].map((row, i, arr) => (
                  <button 
                    key={row.label}
                    onClick={() => console.log(`Navigating to ${row.label} settings`)}
                    className={`w-full flex justify-between items-center p-4 hover:bg-[#1C3829]/5 active:bg-[#1C3829]/10 transition-colors text-left ${i !== arr.length - 1 ? 'border-b border-[#D8CFBE]/50' : ''}`}
                  >
                    <span className="text-sm font-medium text-[#0E1F14]">{row.label}</span>
                    <span className="text-sm text-[#0E1F14]/40">{row.value}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Preferences Section */}
            <div className="mb-10">
              <h2 className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#0E1F14]/40 mb-3 ml-1">Preferences</h2>
              <div className="bg-white border border-[#D8CFBE] rounded-2xl overflow-hidden">
                {[
                  { label: "Notifications", value: "On ›" },
                  { label: "Dark Mode", value: "Off ›" }
                ].map((row, i, arr) => (
                  <button 
                    key={row.label}
                    onClick={() => console.log(`Updating ${row.label} preference`)}
                    className={`w-full flex justify-between items-center p-4 hover:bg-[#1C3829]/5 active:bg-[#1C3829]/10 transition-colors text-left ${i !== arr.length - 1 ? 'border-b border-[#D8CFBE]/50' : ''}`}
                  >
                    <span className="text-sm font-medium text-[#0E1F14]">{row.label}</span>
                    <span className="text-sm text-[#0E1F14]/40">{row.value}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Logout Button */}
            <div className="mt-auto pb-6">
              <button 
                onClick={handleLogout}
                className="w-full h-14 border-2 border-[#C0392B] text-[#C0392B] rounded-2xl font-mono uppercase tracking-widest text-xs font-bold hover:bg-[#C0392B] hover:text-white transition-all flex items-center justify-center gap-3 active:scale-[0.98]"
              >
                <LogOut className="w-4 h-4" />
                Log Out
              </button>
            </div>
          </div>
        );
      case 'itemDetail':
        const itemForDetail = inventory.find(i => i.id === selectedItemForDetail);
        const DetailIcon = itemForDetail?.room === 'electronics' ? Laptop : itemForDetail?.room === 'bathroom' ? Bath : itemForDetail?.room === 'kitchen' ? UtensilsCrossed : Box;

        return (
          <div className="flex flex-col h-full animate-in slide-in-from-right duration-500">
            {/* Header */}
            <div className="mb-8">
              <button 
                onClick={() => {
                  setSelectedItemForDetail(null);
                  setCurrentScreen('search');
                }} 
                className="flex items-center text-[#1C3829]/60 hover:text-[#1C3829] transition-colors gap-1 group"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                <span className="text-xs font-mono uppercase tracking-widest">results</span>
              </button>
            </div>

            {/* Photo Placeholder */}
            <div className="w-full aspect-square border-2 border-[#B8965A] rounded-[2rem] bg-white flex items-center justify-center mb-8 shadow-inner">
              <div className="flex flex-col items-center text-[#B8965A]/20">
                <DetailIcon className="w-20 h-20 mb-2" />
                <span className="text-[10px] font-mono uppercase tracking-widest">No photo yet</span>
              </div>
            </div>

            {/* Title & Room */}
            <div className="mb-10 px-2">
              <h1 className="text-3xl font-serif italic text-[#1C3829] leading-tight mb-1">{itemForDetail?.name}</h1>
              <p className="text-xs text-[#0E1F14]/40 font-mono uppercase tracking-[0.2em]">{itemForDetail?.room}</p>
            </div>

            {/* Info Grid */}
            <div className="bg-white border border-[#D8CFBE] rounded-2xl overflow-hidden mb-auto">
              {[
                { label: "Room", value: itemForDetail?.room },
                { label: "Spot", value: itemForDetail?.spot },
                { label: "Qty", value: itemForDetail?.qty }
              ].map((row, i, arr) => (
                <div 
                  key={row.label}
                  className={`flex justify-between items-center p-4 ${i !== arr.length - 1 ? 'border-b border-[#D8CFBE]/50' : ''}`}
                >
                  <span className="text-xs font-mono uppercase tracking-widest text-[#0E1F14]/40">{row.label}</span>
                  <span className="text-sm font-medium text-[#1C3829] capitalize">{row.value}</span>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 pb-8 mt-8">
              <button 
                onClick={() => setCurrentScreen('foundSuccess')}
                className="flex-1 h-16 bg-[#1C3829] text-[#F6F1E9] rounded-2xl font-serif italic text-xl shadow-lg shadow-[#1C3829]/10 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                ✓ Found it!
              </button>
              <button 
                onClick={() => {
                  setSelectedItemForDetail(null);
                  setCurrentScreen('search');
                }}
                className="flex-1 h-16 bg-white border border-[#D8CFBE] text-[#1C3829] rounded-2xl font-serif italic text-xl hover:bg-[#1C3829]/5 active:scale-[0.98] transition-all"
              >
                Not found
              </button>
            </div>
          </div>
        );
      case 'foundSuccess':
        const foundItem = inventory.find(i => i.id === selectedItemForDetail);
        const SuccessIcon = foundItem?.room === 'electronics' ? Laptop : foundItem?.room === 'bathroom' ? Bath : foundItem?.room === 'kitchen' ? UtensilsCrossed : Box;

        return (
          <div className="flex flex-col h-full items-center justify-center text-center animate-in zoom-in-95 duration-700">
            {/* Success Animation Area */}
            <div className="mb-12 relative">
              <div className="w-32 h-32 rounded-full bg-[#1C3829] flex items-center justify-center text-5xl shadow-2xl shadow-[#1C3829]/20 animate-bounce">
                🎉
              </div>
              <div className="absolute inset-0 w-32 h-32 rounded-full border-4 border-[#1C3829] animate-ping opacity-20" />
            </div>

            <h1 className="text-5xl font-serif italic text-[#1C3829] mb-8">Found It</h1>

            {/* Preview Card */}
            <div className="w-full bg-white border border-[#D8CFBE] rounded-[2rem] p-6 mb-12 flex items-center gap-6 text-left shadow-sm">
              <div className="w-16 h-16 rounded-2xl bg-[#F6F1E9] flex items-center justify-center text-[#1C3829]">
                <SuccessIcon className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-xl font-serif italic text-[#1C3829] leading-tight">{foundItem?.name}</h3>
                <p className="text-[10px] text-[#0E1F14]/40 font-mono uppercase tracking-widest mt-1">In {foundItem?.room}</p>
              </div>
            </div>

            {/* Stacked Buttons */}
            <div className="w-full space-y-4 pb-8">
              <button 
                onClick={() => {
                  setSelectedItemForDetail(null);
                  setCurrentScreen('search');
                }}
                className="w-full h-16 bg-[#1C3829] text-[#F6F1E9] rounded-2xl font-serif italic text-xl shadow-lg shadow-[#1C3829]/10 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                Back to Search
              </button>
              <button 
                onClick={() => {
                  setSelectedItemForDetail(null);
                  setCurrentScreen('home');
                }}
                className="w-full h-16 bg-white border border-[#D8CFBE] text-[#1C3829] rounded-2xl font-serif italic text-xl hover:bg-[#1C3829]/5 active:scale-[0.98] transition-all"
              >
                Back to Home
              </button>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] flex items-center justify-center p-4 md:p-8 font-sans">
      {/* Mobile Phone Shell */}
      <div className="relative w-full max-w-[375px] h-[812px] bg-[#F6F1E9] rounded-[3rem] shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden border-[8px] border-[#1C1C1C] flex flex-col">
        
        {/* Mock Status Bar */}
        <div className={`h-11 px-6 flex justify-between items-end pb-2 z-40 transition-colors duration-500 ${currentScreen === 'camera' ? 'bg-transparent' : 'bg-transparent'}`}>
          <span className={`text-sm font-semibold transition-colors duration-500 ${currentScreen === 'camera' ? 'text-white' : 'text-[#0E1F14]'}`}>9:41</span>
          <div className={`flex items-center gap-1.5 transition-colors duration-500 ${currentScreen === 'camera' ? 'text-white' : 'text-[#0E1F14]'}`}>
            <Signal className="w-4 h-4" />
            <Wifi className="w-4 h-4" />
            <Battery className="w-5 h-5" />
          </div>
        </div>

        {/* Scrollable Content Area */}
        <div className="flex-1 overflow-y-auto pt-4 pb-24 px-6 relative">
          {renderScreen()}
        </div>

        {/* Bottom Navigation Bar */}
        <div className={`absolute bottom-0 left-0 right-0 h-20 bg-white/80 backdrop-blur-md border-t border-[#0E1F14]/5 flex justify-around items-center px-2 pb-2 transition-transform duration-500 z-40 ${currentScreen === 'camera' || currentScreen === 'updateStock' || currentScreen === 'itemDetail' || currentScreen === 'foundSuccess' ? 'translate-y-full' : 'translate-y-0'}`}>
          <button 
            onClick={() => setCurrentScreen('home')}
            className={`flex flex-col items-center gap-1 group transition-colors ${currentScreen === 'home' ? 'text-[#1C3829]' : 'text-[#0E1F14]/40 hover:text-[#1C3829]'}`}
          >
            <Home className="w-6 h-6" />
            <span className="text-[10px] font-medium">Home</span>
          </button>
          <button 
            onClick={() => setCurrentScreen('search')}
            className={`flex flex-col items-center gap-1 group transition-colors ${currentScreen === 'search' ? 'text-[#1C3829]' : 'text-[#0E1F14]/40 hover:text-[#1C3829]'}`}
          >
            <Search className="w-6 h-6" />
            <span className="text-[10px] font-medium">Search</span>
          </button>
          <button 
            onClick={() => setCurrentScreen('stock')}
            className={`flex flex-col items-center gap-1 group transition-colors ${currentScreen === 'stock' ? 'text-[#1C3829]' : 'text-[#0E1F14]/40 hover:text-[#1C3829]'}`}
          >
            <Box className="w-6 h-6" />
            <span className="text-[10px] font-medium">Stock</span>
          </button>
          <button 
            onClick={() => setCurrentScreen('profile')}
            className={`flex flex-col items-center gap-1 group transition-colors ${currentScreen === 'profile' ? 'text-[#1C3829]' : 'text-[#0E1F14]/40 hover:text-[#1C3829]'}`}
          >
            <User className="w-6 h-6" />
            <span className="text-[10px] font-medium">Profile</span>
          </button>
        </div>

        {/* Home Indicator */}
        <div className={`absolute bottom-1.5 left-1/2 -translate-x-1/2 w-32 h-1 rounded-full transition-colors duration-500 z-40 ${currentScreen === 'camera' || currentScreen === 'itemDetail' || currentScreen === 'foundSuccess' ? 'bg-white/20' : 'bg-[#0E1F14]/10'}`} />
      </div>
    </div>
  );
}
