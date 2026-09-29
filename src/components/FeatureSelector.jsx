import React, { useState } from 'react';
import { 
  Sparkles, 
  Check, 
  X, 
  RotateCcw, 
  Search, 
  Sliders, 
  ChevronRight,
  Filter,
  Zap,
  Info,
  Tv,
  Smartphone,
  Laptop,
  Tablet,
  Watch,
  Headphones,
  Volume2,
  Camera,
  BatteryCharging,
  Home,
  Gamepad2,
  Monitor,
  Printer,
  Wifi,
  Film,
  Shirt,
  Refrigerator,
  Wind
} from 'lucide-react';
import { CATEGORIES } from '../data/categories';
import { FEATURE_GROUPS, ALL_FEATURES, FEATURE_PRESETS } from '../data/features';

// Helper icon map for category renderer
const CATEGORY_ICONS = {
  Sparkles,
  Smartphone,
  Laptop,
  Tablet,
  Tv,
  Watch,
  Headphones,
  Volume2,
  Camera,
  BatteryCharging,
  Home,
  Gamepad2,
  Monitor,
  Printer,
  Wifi,
  Film,
  Shirt,
  Refrigerator,
  Wind
};

export default function FeatureSelector({
  selectedFeatures,
  toggleFeature,
  clearFeatures,
  applyPreset,
  selectedCategory,
  setSelectedCategory,
  matchingProductsCount,
  onFindDevicesClick
}) {
  const [activeGroupTab, setActiveGroupTab] = useState('all');
  const [featureSearchQuery, setFeatureSearchQuery] = useState('');

  // Filter features based on tab and internal search
  const visibleFeatures = ALL_FEATURES.filter(f => {
    const matchesGroup = activeGroupTab === 'all' || f.group === activeGroupTab;
    const matchesSearch = f.name.toLowerCase().includes(featureSearchQuery.toLowerCase()) ||
                          f.desc.toLowerCase().includes(featureSearchQuery.toLowerCase());
    return matchesGroup && matchesSearch;
  });

  return (
    <section className="relative overflow-hidden pt-8 pb-10 border-b border-slate-800/80 bg-gradient-to-b from-slate-900/60 via-slate-900/30 to-transparent">
      
      {/* Background Decorative Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-r from-cyan-500/10 via-indigo-500/10 to-fuchsia-500/10 blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title Section */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-semibold mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-spin-slow" />
            <span>Next-Gen Feature-Based Electronic Discovery</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Tell Us What Features You Want,{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-indigo-300 to-fuchsia-400 bg-clip-text text-transparent">
              We'll Find The Perfect Tech.
            </span>
          </h1>
          <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
            Choose any combination of features (like <span className="text-cyan-300 font-medium">Wi-Fi + Voice Assistant + Long Battery</span>). Our smart cross-category engine instantly queries smartphones, TVs, audio gear, laptops, smart appliances, and gaming setups.
          </p>
        </div>

        {/* Feature Presets Showcase */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5 text-amber-400" />
              Quick Feature Presets
            </span>
            <span className="text-xs text-slate-400 hidden sm:inline">1-Click Combinations</span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5">
            {FEATURE_PRESETS.map((preset) => {
              const isActive = preset.features.every(feat => selectedFeatures.includes(feat));
              return (
                <button
                  key={preset.id}
                  onClick={() => applyPreset(preset.features)}
                  className={`p-3 rounded-xl text-left border transition-all duration-200 group flex flex-col justify-between ${
                    isActive
                      ? 'bg-cyan-500/15 border-cyan-400 shadow-md shadow-cyan-500/10 ring-1 ring-cyan-400/50'
                      : 'bg-slate-800/60 hover:bg-slate-800 border-slate-700/80 hover:border-slate-600'
                  }`}
                >
                  <div className="text-xs font-bold text-white group-hover:text-cyan-300 transition-colors flex items-center justify-between">
                    <span>{preset.title}</span>
                    {isActive && <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0" />}
                  </div>
                  <p className="text-[11px] text-slate-400 mt-1 line-clamp-2 leading-snug">
                    {preset.desc}
                  </p>
                  <div className="mt-2 text-[10px] text-cyan-400 font-medium flex items-center gap-1">
                    <span>{preset.features.length} Features</span>
                    <ChevronRight className="w-2.5 h-2.5 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Categories Horizontal Carousel Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
              <Filter className="w-3.5 h-3.5 text-indigo-400" />
              Filter By Device Category
            </span>
            {selectedCategory !== 'all' && (
              <button
                onClick={() => setSelectedCategory('all')}
                className="text-xs text-cyan-400 hover:text-cyan-300 underline font-medium"
              >
                Show All Categories
              </button>
            )}
          </div>
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-slate-700">
            {CATEGORIES.map((cat) => {
              const IconComp = CATEGORY_ICONS[cat.icon] || Sparkles;
              const isSelected = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-200 border shrink-0 ${
                    isSelected
                      ? 'bg-gradient-to-r from-cyan-600 to-indigo-600 text-white border-cyan-400 shadow-lg shadow-indigo-500/20 scale-[1.02]'
                      : 'bg-slate-800/70 hover:bg-slate-800 text-slate-300 hover:text-white border-slate-700/70 hover:border-slate-600'
                  }`}
                >
                  <IconComp className={`w-4 h-4 ${isSelected ? 'text-white' : 'text-slate-400'}`} />
                  <span>{cat.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Feature Selector Box */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-5 sm:p-7 shadow-2xl backdrop-blur-md relative">
          
          {/* Top Header Inside Feature Box */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-5 border-b border-slate-800">
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
                  <Sliders className="w-5 h-5 text-cyan-400" />
                  Select Desired Features
                </h2>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                  {selectedFeatures.length} Selected
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-1">
                Click cards below to toggle features. Match score ranks products dynamically.
              </p>
            </div>

            {/* Feature Group Tabs & Search */}
            <div className="flex flex-wrap sm:flex-nowrap items-center gap-2">
              <div className="relative w-full sm:w-48">
                <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  type="text"
                  value={featureSearchQuery}
                  onChange={(e) => setFeatureSearchQuery(e.target.value)}
                  placeholder="Filter features..."
                  className="w-full pl-8 pr-7 py-1.5 text-xs bg-slate-800/90 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400"
                />
                {featureSearchQuery && (
                  <button
                    onClick={() => setFeatureSearchQuery('')}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
                  >
                    <X className="w-3 h-3" />
                  </button>
                )}
              </div>

              {selectedFeatures.length > 0 && (
                <button
                  onClick={clearFeatures}
                  className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-rose-400 hover:text-rose-300 bg-rose-500/10 hover:bg-rose-500/20 border border-rose-500/30 rounded-lg transition-colors"
                  title="Clear all selected features"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Reset</span>
                </button>
              )}
            </div>
          </div>

          {/* Group Filter Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto py-3 scrollbar-none border-b border-slate-800/70 mb-5">
            <button
              onClick={() => setActiveGroupTab('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all shrink-0 ${
                activeGroupTab === 'all'
                  ? 'bg-slate-700 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
              }`}
            >
              All Groups ({ALL_FEATURES.length})
            </button>
            {FEATURE_GROUPS.map((group) => {
              const isSelected = activeGroupTab === group.id;
              const groupSelectedCount = group.features.filter(f => selectedFeatures.includes(f.id)).length;
              return (
                <button
                  key={group.id}
                  onClick={() => setActiveGroupTab(group.id)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all shrink-0 ${
                    isSelected
                      ? 'bg-slate-700 text-white shadow-sm'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                  }`}
                >
                  <span>{group.title}</span>
                  {groupSelectedCount > 0 && (
                    <span className="w-4 h-4 rounded-full bg-cyan-500 text-slate-950 text-[10px] font-bold flex items-center justify-center">
                      {groupSelectedCount}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Feature Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5 max-h-[360px] overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-slate-700">
            {visibleFeatures.map((feat) => {
              const isSelected = selectedFeatures.includes(feat.id);
              return (
                <div
                  key={feat.id}
                  onClick={() => toggleFeature(feat.id)}
                  className={`group relative flex items-start gap-3 p-3 rounded-xl border cursor-pointer select-none transition-all duration-200 ${
                    isSelected
                      ? 'bg-gradient-to-br from-cyan-950/60 to-indigo-950/60 border-cyan-400 shadow-md shadow-cyan-500/15 ring-1 ring-cyan-400/40 translate-y-[-1px]'
                      : 'bg-slate-800/50 hover:bg-slate-800 border-slate-700/60 hover:border-slate-600'
                  }`}
                >
                  {/* Custom Checkbox Box */}
                  <div className={`mt-0.5 flex items-center justify-center w-5 h-5 rounded-md border transition-all shrink-0 ${
                    isSelected
                      ? 'bg-cyan-500 border-cyan-400 text-slate-950 shadow-sm'
                      : 'border-slate-600 bg-slate-850 group-hover:border-slate-500'
                  }`}>
                    {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-1">
                      <h4 className={`text-xs font-bold leading-snug truncate transition-colors ${
                        isSelected ? 'text-cyan-200' : 'text-slate-200 group-hover:text-white'
                      }`}>
                        {feat.name}
                      </h4>
                    </div>
                    <p className="text-[11px] text-slate-400 line-clamp-2 mt-0.5 leading-snug">
                      {feat.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Action Bar Bottom of Feature Selector */}
          <div className="mt-6 pt-5 border-t border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            
            <div className="flex items-center gap-3">
              <div className="flex -space-x-1">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              </div>
              <span className="text-xs text-slate-300">
                Found <strong className="text-cyan-300 font-bold text-sm">{matchingProductsCount}</strong> compatible smart electronic devices
              </span>
            </div>

            <div className="flex items-center gap-3">
              {selectedFeatures.length > 0 && (
                <button
                  onClick={clearFeatures}
                  className="px-4 py-2.5 text-xs font-semibold text-slate-400 hover:text-white transition-colors"
                >
                  Clear Selection
                </button>
              )}

              <button
                onClick={onFindDevicesClick}
                className="flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl text-xs font-bold text-slate-950 bg-gradient-to-r from-cyan-400 via-teal-300 to-indigo-300 hover:from-cyan-300 hover:to-indigo-200 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
              >
                <Sparkles className="w-4 h-4 fill-slate-950" />
                <span>Find Devices ({matchingProductsCount})</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
