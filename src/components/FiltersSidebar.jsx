import React, { useState } from 'react';
import { 
  SlidersHorizontal, 
  RotateCcw, 
  Star, 
  DollarSign, 
  Tag, 
  Search, 
  Check, 
  Sparkles,
  ArrowUpDown,
  Zap,
  Percent
} from 'lucide-react';
import { BRANDS } from '../data/products';

export default function FiltersSidebar({
  priceRange,
  setPriceRange,
  selectedBrands,
  toggleBrand,
  minRating,
  setMinRating,
  sortBy,
  setSortBy,
  strictMatchMode,
  setStrictMatchMode,
  onResetFilters,
  totalResultsCount
}) {
  const [brandSearch, setBrandSearch] = useState('');

  const filteredBrands = BRANDS.filter(b => 
    b.toLowerCase().includes(brandSearch.toLowerCase())
  );

  const pricePresets = [
    { label: 'All Budgets', min: 0, max: 4000 },
    { label: 'Under $300', min: 0, max: 300 },
    { label: '$300 - $800', min: 300, max: 800 },
    { label: '$800 - $1,500', min: 800, max: 1500 },
    { label: '$1,500+', min: 1500, max: 4000 }
  ];

  return (
    <div className="bg-slate-900/80 border border-slate-800/90 rounded-2xl p-5 space-y-6 backdrop-blur-md shadow-xl">
      
      {/* Header */}
      <div className="flex items-center justify-between pb-4 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <SlidersHorizontal className="w-4 h-4 text-cyan-400" />
          <h3 className="text-sm font-bold text-white uppercase tracking-wider">
            Refine & Sort
          </h3>
        </div>
        <button
          onClick={onResetFilters}
          className="flex items-center gap-1 text-[11px] font-semibold text-slate-400 hover:text-cyan-400 transition-colors"
          title="Reset all filters to default"
        >
          <RotateCcw className="w-3 h-3" />
          <span>Reset</span>
        </button>
      </div>

      {/* Sort Option */}
      <div className="space-y-2">
        <label className="text-xs font-bold text-slate-300 flex items-center gap-1.5">
          <ArrowUpDown className="w-3.5 h-3.5 text-indigo-400" />
          Sort Results By
        </label>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="w-full px-3 py-2 text-xs bg-slate-800 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-cyan-400 font-medium"
        >
          <option value="match">⭐ Best Feature Match (High to Low)</option>
          <option value="price-asc">💵 Price: Low to High</option>
          <option value="price-desc">💎 Price: High to Low</option>
          <option value="rating">🌟 Highest Customer Rating</option>
          <option value="popular">🔥 Most Reviews / Popularity</option>
          <option value="name">🔤 Product Name (A to Z)</option>
        </select>
      </div>

      {/* Feature Match Mode Toggle */}
      <div className="space-y-2 p-3 rounded-xl bg-slate-800/60 border border-slate-700/60">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold text-slate-200 flex items-center gap-1">
            <Percent className="w-3.5 h-3.5 text-emerald-400" />
            Strict Match Mode
          </span>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={strictMatchMode}
              onChange={(e) => setStrictMatchMode(e.target.checked)}
              className="sr-only peer"
            />
            <div className="w-9 h-5 bg-slate-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-cyan-500"></div>
          </label>
        </div>
        <p className="text-[11px] text-slate-400 leading-snug">
          {strictMatchMode 
            ? 'Only displaying devices supporting 100% of chosen features.'
            : 'Prioritizing devices by maximum feature match %.'}
        </p>
      </div>

      {/* Price Range */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <label className="text-xs font-bold text-slate-300 flex items-center gap-1.5">
            <DollarSign className="w-3.5 h-3.5 text-emerald-400" />
            Price Range
          </label>
          <span className="text-xs font-mono font-bold text-cyan-300">
            ${priceRange.min} - ${priceRange.max === 4000 ? '4,000+' : priceRange.max}
          </span>
        </div>

        {/* Quick Price Range Chips */}
        <div className="flex flex-wrap gap-1.5">
          {pricePresets.map((preset, idx) => {
            const isSelected = priceRange.min === preset.min && priceRange.max === preset.max;
            return (
              <button
                key={idx}
                onClick={() => setPriceRange({ min: preset.min, max: preset.max })}
                className={`px-2 py-1 rounded-lg text-[10px] font-semibold transition-all border ${
                  isSelected
                    ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/50'
                    : 'bg-slate-800 text-slate-400 hover:text-white border-slate-700/60 hover:border-slate-600'
                }`}
              >
                {preset.label}
              </button>
            );
          })}
        </div>

        {/* Range Slider */}
        <input
          type="range"
          min="0"
          max="4000"
          step="50"
          value={priceRange.max}
          onChange={(e) => setPriceRange(prev => ({ ...prev, max: Number(e.target.value) }))}
          className="w-full h-1.5 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-cyan-400"
        />
        
        {/* Custom Min/Max Input Boxes */}
        <div className="flex items-center gap-2">
          <div className="flex-1 relative">
            <span className="absolute left-2.5 top-1/2 -translate-y-1/2 text-xs text-slate-500">$</span>
            <input
              type="number"
              min="0"
              max={priceRange.max}
              value={priceRange.min}
              onChange={(e) => setPriceRange(prev => ({ ...prev, min: Math.max(0, Number(e.target.value)) }))}
              className="w-full pl-6 pr-2 py-1 text-xs bg-slate-800 border border-slate-700 rounded-lg text-white font-mono"
              placeholder="Min"
            />
          </div>
          <span className="text-xs text-slate-500">-</span>
          <div className="flex-1 relative">
            <span className="absolute left-2.5 top-1/2 -translate-y-1/2 text-xs text-slate-500">$</span>
            <input
              type="number"
              min={priceRange.min}
              max="4000"
              value={priceRange.max}
              onChange={(e) => setPriceRange(prev => ({ ...prev, max: Number(e.target.value) }))}
              className="w-full pl-6 pr-2 py-1 text-xs bg-slate-800 border border-slate-700 rounded-lg text-white font-mono"
              placeholder="Max"
            />
          </div>
        </div>
      </div>

      {/* Customer Rating Filter */}
      <div className="space-y-2">
        <label className="text-xs font-bold text-slate-300 flex items-center gap-1.5">
          <Star className="w-3.5 h-3.5 text-amber-400" />
          Minimum Rating
        </label>
        <div className="grid grid-cols-2 gap-1.5">
          {[
            { val: 0, label: 'All Ratings' },
            { val: 4.0, label: '4.0★ & Above' },
            { val: 4.5, label: '4.5★ & Above' },
            { val: 4.8, label: '4.8★ & Above' }
          ].map((item) => (
            <button
              key={item.val}
              onClick={() => setMinRating(item.val)}
              className={`px-2.5 py-1.5 rounded-xl text-[11px] font-semibold transition-all border text-left flex items-center justify-between ${
                minRating === item.val
                  ? 'bg-amber-500/20 text-amber-300 border-amber-500/50 shadow-sm'
                  : 'bg-slate-800 text-slate-400 hover:text-white border-slate-700/60 hover:border-slate-600'
              }`}
            >
              <span>{item.label}</span>
              {minRating === item.val && <Check className="w-3 h-3 text-amber-400" />}
            </button>
          ))}
        </div>
      </div>

      {/* Brands Multi-Select */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <label className="text-xs font-bold text-slate-300 flex items-center gap-1.5">
            <Tag className="w-3.5 h-3.5 text-cyan-400" />
            Brands ({BRANDS.length})
          </label>
          {selectedBrands.length > 0 && (
            <button
              onClick={() => toggleBrand('clear')}
              className="text-[10px] text-cyan-400 hover:underline"
            >
              Clear
            </button>
          )}
        </div>

        {/* Brand Search Input */}
        <div className="relative">
          <Search className="w-3 h-3 text-slate-500 absolute left-2.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={brandSearch}
            onChange={(e) => setBrandSearch(e.target.value)}
            placeholder="Search brands..."
            className="w-full pl-7 pr-2 py-1 text-xs bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
          />
        </div>

        {/* Brand Checkbox List */}
        <div className="max-h-40 overflow-y-auto space-y-1 pr-1 scrollbar-thin scrollbar-thumb-slate-700">
          {filteredBrands.map((brand) => {
            const isChecked = selectedBrands.includes(brand);
            return (
              <label
                key={brand}
                className={`flex items-center justify-between px-2.5 py-1.5 rounded-lg cursor-pointer text-xs transition-colors ${
                  isChecked
                    ? 'bg-cyan-500/15 text-cyan-200 font-semibold'
                    : 'text-slate-300 hover:bg-slate-800'
                }`}
              >
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={() => toggleBrand(brand)}
                    className="rounded bg-slate-800 border-slate-600 text-cyan-500 focus:ring-0 focus:ring-offset-0"
                  />
                  <span>{brand}</span>
                </div>
              </label>
            );
          })}
        </div>
      </div>

    </div>
  );
}
