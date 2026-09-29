import React from 'react';
import { 
  Star, 
  Check, 
  Plus, 
  Eye, 
  Heart, 
  Layers, 
  Zap, 
  Sparkles,
  Cpu,
  Battery,
  Monitor,
  Wifi
} from 'lucide-react';

export default function ProductCard({
  product,
  selectedFeatures = [],
  onViewDetails,
  isComparing,
  toggleCompare,
  isWishlisted,
  toggleWishlist
}) {
  // Calculate match statistics
  const matchingFeatures = selectedFeatures.filter(f => product.features.includes(f));
  const otherFeatures = product.features.filter(f => !selectedFeatures.includes(f));
  
  const matchPercentage = selectedFeatures.length > 0
    ? Math.round((matchingFeatures.length / selectedFeatures.length) * 100)
    : 100;

  // Determine badge color theme based on match %
  let matchBadgeColor = 'bg-slate-800 text-slate-300 border-slate-700';
  if (selectedFeatures.length > 0) {
    if (matchPercentage === 100) {
      matchBadgeColor = 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40 shadow-sm shadow-emerald-500/20';
    } else if (matchPercentage >= 60) {
      matchBadgeColor = 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40';
    } else {
      matchBadgeColor = 'bg-amber-500/15 text-amber-300 border-amber-500/30';
    }
  }

  return (
    <div className="group relative bg-slate-900/90 hover:bg-slate-850 border border-slate-800 hover:border-slate-700 rounded-3xl overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/10 hover:-translate-y-1">
      
      {/* Top Media & Floating Badges */}
      <div className="relative aspect-[16/10] overflow-hidden bg-slate-950">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
        />
        
        {/* Subtle Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-black/40 pointer-events-none" />

        {/* Floating Top Left Category & Brand */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 z-10">
          <span className="px-2.5 py-1 text-[11px] font-bold tracking-wide uppercase bg-slate-950/80 backdrop-blur-md text-cyan-300 border border-cyan-500/30 rounded-lg shadow-sm">
            {product.categoryName}
          </span>
          <span className="px-2.5 py-1 text-[11px] font-bold bg-slate-900/80 backdrop-blur-md text-slate-200 border border-slate-700 rounded-lg">
            {product.brand}
          </span>
        </div>

        {/* Floating Top Right Wishlist & Compare Quick Actions */}
        <div className="absolute top-3 right-3 flex items-center gap-1.5 z-10">
          <button
            onClick={() => toggleWishlist(product)}
            className={`p-2 rounded-xl backdrop-blur-md transition-all ${
              isWishlisted
                ? 'bg-rose-500/90 text-white shadow-lg shadow-rose-500/30 scale-105'
                : 'bg-slate-900/80 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-700/60'
            }`}
            title={isWishlisted ? 'Remove from Wishlist' : 'Add to Wishlist'}
          >
            <Heart className={`w-3.5 h-3.5 ${isWishlisted ? 'fill-white' : ''}`} />
          </button>
        </div>

        {/* Floating Match Score Banner (When features are selected) */}
        {selectedFeatures.length > 0 && (
          <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between z-10">
            <div className={`px-3 py-1 text-xs font-bold rounded-xl border backdrop-blur-md flex items-center gap-1.5 ${matchBadgeColor}`}>
              {matchPercentage === 100 ? (
                <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
              ) : (
                <Zap className="w-3.5 h-3.5 text-cyan-400" />
              )}
              <span>{matchPercentage}% Match ({matchingFeatures.length}/{selectedFeatures.length} features)</span>
            </div>
          </div>
        )}
      </div>

      {/* Main Content Info */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        
        {/* Title & Tagline */}
        <div>
          <div className="flex items-center justify-between gap-2">
            <h3 
              onClick={() => onViewDetails(product)}
              className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors cursor-pointer line-clamp-1"
              title={product.name}
            >
              {product.name}
            </h3>
          </div>
          <p className="text-xs text-slate-400 line-clamp-1 mt-0.5">
            {product.tagline}
          </p>
        </div>

        {/* Rating & Pricing Row */}
        <div className="flex items-center justify-between pt-1">
          <div className="flex items-center gap-1.5">
            <div className="flex items-center text-amber-400">
              <Star className="w-3.5 h-3.5 fill-amber-400" />
              <span className="ml-1 text-xs font-bold text-white">{product.rating}</span>
            </div>
            <span className="text-[11px] text-slate-400">
              ({product.reviewCount})
            </span>
          </div>

          <div className="text-right">
            <div className="flex items-baseline gap-1.5 justify-end">
              {product.originalPrice && product.originalPrice > product.price && (
                <span className="text-xs text-slate-400 line-through font-mono">
                  ${product.originalPrice}
                </span>
              )}
              <span className="text-lg font-black text-white font-mono tracking-tight">
                ${product.price}
              </span>
            </div>
          </div>
        </div>

        {/* Feature Match Highlight Badges */}
        <div className="space-y-1.5 pt-2 border-t border-slate-800">
          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
            {selectedFeatures.length > 0 ? 'Selected Feature Matches' : 'Key Supported Features'}
          </span>
          
          <div className="flex flex-wrap gap-1.5">
            {/* Matched Features Highlighted First */}
            {matchingFeatures.map((feat) => (
              <span
                key={feat}
                className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[11px] font-semibold bg-emerald-500/15 text-emerald-300 border border-emerald-500/30"
              >
                <Check className="w-3 h-3 text-emerald-400 stroke-[3]" />
                {feat}
              </span>
            ))}

            {/* Other features (Show 2-3 additional) */}
            {otherFeatures.slice(0, Math.max(1, 4 - matchingFeatures.length)).map((feat) => (
              <span
                key={feat}
                className="px-2 py-0.5 rounded-md text-[11px] font-medium bg-slate-800/90 text-slate-400 border border-slate-700/60"
              >
                {feat}
              </span>
            ))}

            {otherFeatures.length > Math.max(1, 4 - matchingFeatures.length) && (
              <span className="px-1.5 py-0.5 rounded-md text-[10px] font-medium text-slate-400 bg-slate-800/40">
                +{otherFeatures.length - Math.max(1, 4 - matchingFeatures.length)} more
              </span>
            )}
          </div>
        </div>

        {/* Key Specs Highlights Grid */}
        <div className="grid grid-cols-2 gap-2 p-2.5 rounded-xl bg-slate-950/60 border border-slate-800 text-[11px]">
          {product.specs.display && (
            <div className="truncate text-slate-300 flex items-center gap-1.5" title={product.specs.display}>
              <Monitor className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
              <span className="truncate">{product.specs.display.split(',')[0]}</span>
            </div>
          )}
          {product.specs.processor && (
            <div className="truncate text-slate-300 flex items-center gap-1.5" title={product.specs.processor}>
              <Cpu className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
              <span className="truncate">{product.specs.processor.split('(')[0]}</span>
            </div>
          )}
          {product.specs.battery && (
            <div className="truncate text-slate-300 flex items-center gap-1.5" title={product.specs.battery}>
              <Battery className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span className="truncate">{product.specs.battery.split('(')[0]}</span>
            </div>
          )}
          {product.specs.connectivity && (
            <div className="truncate text-slate-300 flex items-center gap-1.5" title={product.specs.connectivity}>
              <Wifi className="w-3.5 h-3.5 text-teal-400 shrink-0" />
              <span className="truncate">{product.specs.connectivity.split(',')[0]}</span>
            </div>
          )}
        </div>

      </div>

      {/* Card Bottom Buttons */}
      <div className="p-4 pt-0 grid grid-cols-2 gap-2">
        <button
          onClick={() => onViewDetails(product)}
          className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs font-bold text-slate-200 bg-slate-800 hover:bg-slate-700 hover:text-white border border-slate-700 transition-colors"
        >
          <Eye className="w-3.5 h-3.5 text-cyan-400" />
          <span>View Details</span>
        </button>

        <button
          onClick={() => toggleCompare(product)}
          className={`flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs font-bold border transition-all ${
            isComparing
              ? 'bg-cyan-500/20 text-cyan-300 border-cyan-400 ring-1 ring-cyan-400/50'
              : 'bg-slate-850 hover:bg-slate-800 text-slate-300 hover:text-white border-slate-700/80'
          }`}
        >
          <Layers className="w-3.5 h-3.5" />
          <span>{isComparing ? 'Comparing' : 'Compare'}</span>
        </button>
      </div>

    </div>
  );
}
