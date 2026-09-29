import React from 'react';
import { 
  Sparkles, 
  Search, 
  Layers, 
  Heart, 
  Moon, 
  Sun, 
  SlidersHorizontal,
  Bot,
  X
} from 'lucide-react';

export default function Navbar({ 
  searchQuery, 
  setSearchQuery, 
  compareList, 
  openCompareModal, 
  wishlist, 
  openWishlistDrawer,
  openWizardModal,
  theme, 
  toggleTheme,
  totalProductsCount,
  matchedCount,
  onResetAll
}) {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-xl bg-slate-900/85 dark:bg-slate-950/85 border-b border-slate-800/80 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 gap-3 sm:gap-6">
          
          {/* Brand Logo */}
          <div 
            onClick={onResetAll}
            className="flex items-center gap-3 cursor-pointer group shrink-0"
            title="Smart Electronics Finder - Home"
          >
            <div className="relative flex items-center justify-center w-11 h-11 rounded-2xl bg-gradient-to-tr from-cyan-500 via-indigo-500 to-fuchsia-500 p-[2px] shadow-lg shadow-indigo-500/25 group-hover:scale-105 transition-transform duration-300">
              <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-cyan-400 group-hover:rotate-12 transition-transform duration-300" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xl font-black tracking-tight bg-gradient-to-r from-white via-cyan-200 to-indigo-300 bg-clip-text text-transparent">
                  Smart
                </span>
                <span className="text-xl font-black tracking-tight text-cyan-400">
                  Finder
                </span>
                <span className="hidden md:inline-block px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 rounded-full">
                  Cross-Category
                </span>
              </div>
              <p className="hidden sm:block text-[11px] text-slate-400 font-medium">
                Find tech by features, not just names
              </p>
            </div>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-xl relative">
            <div className="relative flex items-center">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by device name, brand, category, or feature (e.g., OLED, 5G, Sony)..."
                className="w-full pl-10 pr-9 py-2 text-sm bg-slate-800/80 hover:bg-slate-800 focus:bg-slate-900 border border-slate-700/80 focus:border-cyan-500 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/30 transition-all shadow-inner"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 p-0.5 rounded-full hover:bg-slate-700 text-slate-400 hover:text-white"
                  title="Clear search"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>

          {/* Right Action Controls */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            
            {/* AI Recommendation Guide */}
            <button
              onClick={openWizardModal}
              className="flex items-center gap-2 px-3 py-2 text-xs font-semibold rounded-xl bg-gradient-to-r from-indigo-600/90 to-cyan-600/90 hover:from-indigo-500 hover:to-cyan-500 text-white border border-indigo-400/30 shadow-md shadow-indigo-500/20 hover:shadow-indigo-500/35 transition-all hover:scale-[1.02] active:scale-[0.98]"
              title="Smart AI Guided Feature Assistant"
            >
              <Bot className="w-4 h-4 text-cyan-200 animate-pulse" />
              <span className="hidden lg:inline">Smart AI Guide</span>
              <span className="lg:hidden hidden sm:inline">AI Guide</span>
            </button>

            {/* Compare Trigger Button */}
            <button
              onClick={openCompareModal}
              disabled={compareList.length === 0}
              className={`relative flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold border transition-all ${
                compareList.length > 0 
                  ? 'bg-slate-800 text-cyan-300 border-cyan-500/40 hover:bg-slate-700 hover:border-cyan-400 shadow-sm cursor-pointer' 
                  : 'bg-slate-850 text-slate-400 border-slate-800 opacity-60 cursor-not-allowed'
              }`}
              title={compareList.length > 0 ? `Compare ${compareList.length} devices` : 'Add devices to compare'}
            >
              <Layers className="w-4 h-4" />
              <span className="hidden sm:inline">Compare</span>
              {compareList.length > 0 && (
                <span className="flex items-center justify-center min-w-[18px] h-[18px] px-1 text-[10px] font-bold rounded-full bg-cyan-500 text-slate-950 font-mono">
                  {compareList.length}
                </span>
              )}
            </button>

            {/* Wishlist Button */}
            <button
              onClick={openWishlistDrawer}
              className="relative p-2 rounded-xl text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-700 border border-slate-700/80 transition-colors"
              title={`Wishlist (${wishlist.length} saved)`}
            >
              <Heart className={`w-4 h-4 ${wishlist.length > 0 ? 'text-rose-400 fill-rose-400' : ''}`} />
              {wishlist.length > 0 && (
                <span className="absolute -top-1 -right-1 flex items-center justify-center w-4 h-4 text-[9px] font-bold rounded-full bg-rose-500 text-white font-mono">
                  {wishlist.length}
                </span>
              )}
            </button>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-700 border border-slate-700/80 transition-colors"
              title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-300" /> : <Moon className="w-4 h-4 text-indigo-300" />}
            </button>
          </div>

        </div>
      </div>
    </header>
  );
}
