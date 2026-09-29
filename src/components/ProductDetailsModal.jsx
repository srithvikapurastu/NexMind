import React, { useEffect } from 'react';
import { 
  X, 
  Star, 
  Check, 
  CheckCircle2, 
  XCircle, 
  Heart, 
  Layers, 
  Sparkles, 
  Shield, 
  Truck, 
  RefreshCw,
  ExternalLink,
  ChevronRight,
  Zap,
  Info
} from 'lucide-react';

export default function ProductDetailsModal({
  product,
  onClose,
  selectedFeatures = [],
  isComparing,
  toggleCompare,
  isWishlisted,
  toggleWishlist
}) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  if (!product) return null;

  const matchingFeatures = selectedFeatures.filter(f => product.features.includes(f));
  const missingFeatures = selectedFeatures.filter(f => !product.features.includes(f));

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto backdrop-blur-md bg-slate-950/80 animate-in fade-in duration-200">
      
      {/* Modal Card Box */}
      <div 
        className="relative w-full max-w-4xl bg-slate-900 border border-slate-700/80 rounded-3xl shadow-2xl overflow-hidden my-auto max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-900/90 sticky top-0 z-20 backdrop-blur-md">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 text-xs font-bold uppercase tracking-wider rounded-lg bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
              {product.categoryName}
            </span>
            <span className="text-xs font-medium text-slate-400">
              Brand: <strong className="text-white">{product.brand}</strong>
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => toggleWishlist(product)}
              className={`p-2 rounded-xl border transition-colors ${
                isWishlisted
                  ? 'bg-rose-500/20 text-rose-400 border-rose-500/40'
                  : 'bg-slate-800 text-slate-400 hover:text-white border-slate-700'
              }`}
              title={isWishlisted ? 'Saved in Wishlist' : 'Save to Wishlist'}
            >
              <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-rose-400' : ''}`} />
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 border border-slate-700 transition-colors"
              title="Close modal (Esc)"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Content Body */}
        <div className="p-6 overflow-y-auto space-y-8 scrollbar-thin scrollbar-thumb-slate-700">
          
          {/* Top Hero Section: Media + Key Details */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            
            {/* Left Image View */}
            <div className="md:col-span-5 rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 relative aspect-square">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-slate-300 backdrop-blur-md bg-slate-900/80 px-3 py-1.5 rounded-xl border border-slate-700/60">
                <span className="flex items-center gap-1 text-emerald-400 font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5" /> In Stock & Ready to Ship
                </span>
                <span className="text-slate-400">Verified Spec</span>
              </div>
            </div>

            {/* Right Meta Info */}
            <div className="md:col-span-7 flex flex-col justify-between space-y-4">
              <div>
                <h2 className="text-2xl font-extrabold text-white leading-tight">
                  {product.name}
                </h2>
                <p className="text-sm text-cyan-300 font-medium mt-1">
                  {product.tagline}
                </p>

                {/* Rating & Review Breakdown */}
                <div className="flex items-center gap-3 mt-3">
                  <div className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-amber-400/15 border border-amber-400/30 text-amber-300 text-xs font-bold">
                    <Star className="w-3.5 h-3.5 fill-amber-400" />
                    <span>{product.rating}</span>
                  </div>
                  <span className="text-xs text-slate-400">
                    Based on {product.reviewCount.toLocaleString()} verified customer reviews
                  </span>
                </div>
              </div>

              {/* Pricing Box */}
              <div className="p-4 rounded-2xl bg-slate-800/60 border border-slate-700/60 flex items-center justify-between">
                <div>
                  <span className="text-xs text-slate-400 block font-medium">Estimated Retail Price</span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-black text-white font-mono">
                      ${product.price}
                    </span>
                    {product.originalPrice && product.originalPrice > product.price && (
                      <span className="text-sm text-slate-400 line-through font-mono">
                        ${product.originalPrice}
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => toggleCompare(product)}
                    className={`px-3 py-2 rounded-xl text-xs font-bold border transition-all flex items-center gap-1.5 ${
                      isComparing
                        ? 'bg-cyan-500/20 text-cyan-300 border-cyan-400'
                        : 'bg-slate-700 text-slate-200 hover:text-white border-slate-600'
                    }`}
                  >
                    <Layers className="w-4 h-4" />
                    <span>{isComparing ? 'In Comparison' : 'Add to Compare'}</span>
                  </button>
                </div>
              </div>

              {/* Buyer Confidence Guarantees */}
              <div className="grid grid-cols-3 gap-2 text-[11px] text-slate-300">
                <div className="flex items-center gap-1.5 p-2 rounded-xl bg-slate-800/40 border border-slate-800">
                  <Truck className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span className="truncate">Fast Dispatch</span>
                </div>
                <div className="flex items-center gap-1.5 p-2 rounded-xl bg-slate-800/40 border border-slate-800">
                  <Shield className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                  <span className="truncate">Warranty Included</span>
                </div>
                <div className="flex items-center gap-1.5 p-2 rounded-xl bg-slate-800/40 border border-slate-800">
                  <RefreshCw className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                  <span className="truncate">30-Day Returns</span>
                </div>
              </div>

            </div>

          </div>

          {/* Selected Feature Match Status (if user picked features) */}
          {selectedFeatures.length > 0 && (
            <div className="p-4 rounded-2xl bg-cyan-950/30 border border-cyan-500/30 space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-300 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-cyan-400" />
                  Match Breakdown with Your Desired Features
                </h4>
                <span className="text-xs font-bold text-cyan-200">
                  {matchingFeatures.length} of {selectedFeatures.length} matched
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {matchingFeatures.map(feat => (
                  <div key={feat} className="flex items-center gap-2 p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Supports {feat}</span>
                  </div>
                ))}
                {missingFeatures.map(feat => (
                  <div key={feat} className="flex items-center gap-2 p-2 rounded-lg bg-rose-500/10 border border-rose-500/20 text-rose-300">
                    <XCircle className="w-4 h-4 text-rose-400 shrink-0" />
                    <span>Does not support {feat}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Complete Supported Features List */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-300 flex items-center gap-2">
              <Zap className="w-4 h-4 text-amber-400" />
              All Supported Capabilities ({product.features.length})
            </h3>
            <div className="flex flex-wrap gap-2">
              {product.features.map(feat => {
                const isMatched = selectedFeatures.includes(feat);
                return (
                  <span
                    key={feat}
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-xl text-xs font-semibold border ${
                      isMatched
                        ? 'bg-cyan-500/20 text-cyan-300 border-cyan-400 ring-1 ring-cyan-400/40'
                        : 'bg-slate-800 text-slate-300 border-slate-700/80'
                    }`}
                  >
                    {isMatched && <Check className="w-3.5 h-3.5 text-cyan-400 stroke-[3]" />}
                    {feat}
                  </span>
                );
              })}
            </div>
          </div>

          {/* Complete Technical Specifications */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-300 flex items-center gap-2">
              <Info className="w-4 h-4 text-indigo-400" />
              Technical Specifications
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {Object.entries(product.specs).map(([key, value]) => {
                const label = key.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
                return (
                  <div 
                    key={key} 
                    className="p-3.5 rounded-xl bg-slate-850 border border-slate-800 flex flex-col justify-between"
                  >
                    <span className="text-[11px] font-bold text-cyan-400 uppercase tracking-wider">
                      {label}
                    </span>
                    <span className="text-xs text-slate-200 mt-1 font-medium leading-relaxed">
                      {value}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Pros & Cons Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            {/* Pros */}
            <div className="p-4 rounded-2xl bg-emerald-950/20 border border-emerald-500/30 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                Reasons to Buy (Pros)
              </h4>
              <ul className="space-y-2 text-xs text-slate-300">
                {product.pros.map((pro, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-emerald-400 font-bold">•</span>
                    <span>{pro}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Cons */}
            <div className="p-4 rounded-2xl bg-rose-950/20 border border-rose-500/30 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-rose-400 flex items-center gap-1.5">
                <XCircle className="w-4 h-4 text-rose-400" />
                Things to Consider (Cons)
              </h4>
              <ul className="space-y-2 text-xs text-slate-300">
                {product.cons.map((con, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-rose-400 font-bold">•</span>
                    <span>{con}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

        </div>

        {/* Modal Bottom Footer Actions */}
        <div className="px-6 py-4 border-t border-slate-800 bg-slate-900/90 flex flex-col sm:flex-row items-center justify-between gap-3 sticky bottom-0 z-20 backdrop-blur-md">
          <div className="text-xs text-slate-400 flex items-center gap-2">
            <span>Price:</span>
            <strong className="text-white text-base font-mono">${product.price}</strong>
            <span className="text-slate-400">|</span>
            <span className="text-cyan-300">{product.warranty || 'Manufacturer Warranty'}</span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={() => toggleCompare(product)}
              className={`flex-1 sm:flex-none px-4 py-2.5 rounded-xl text-xs font-bold border transition-all ${
                isComparing
                  ? 'bg-cyan-500/20 text-cyan-300 border-cyan-400'
                  : 'bg-slate-800 text-slate-200 hover:text-white border-slate-700'
              }`}
            >
              {isComparing ? 'Remove from Compare' : 'Add to Compare'}
            </button>

            <button
              onClick={onClose}
              className="flex-1 sm:flex-none px-5 py-2.5 rounded-xl text-xs font-bold bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white shadow-lg shadow-cyan-500/20"
            >
              Back to Results
            </button>
          </div>
        </div>

      </div>

    </div>
  );
}
