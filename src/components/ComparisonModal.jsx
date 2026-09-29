import React, { useState, useEffect } from 'react';
import { 
  X, 
  Check, 
  Minus, 
  Trash2, 
  Sparkles, 
  Star, 
  DollarSign, 
  Copy, 
  Share2, 
  Plus, 
  CheckCircle2, 
  XCircle,
  Zap,
  Layers,
  ArrowRight
} from 'lucide-react';
import { ALL_FEATURES } from '../data/features';

export default function ComparisonModal({
  compareList = [],
  removeFromCompare,
  clearCompare,
  onClose,
  selectedFeatures = [],
  allProducts = [],
  addToCompare,
  onViewDetails
}) {
  const [highlightDiffs, setHighlightDiffs] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);

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

  if (compareList.length === 0) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-md bg-slate-950/80">
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 text-center max-w-md w-full shadow-2xl">
          <Layers className="w-12 h-12 text-slate-500 mx-auto mb-3 animate-bounce" />
          <h3 className="text-lg font-bold text-white mb-2">No Devices Selected for Comparison</h3>
          <p className="text-xs text-slate-400 mb-6">
            Click the "Compare" button on 2 to 4 product cards to view side-by-side technical differences.
          </p>
          <button
            onClick={onClose}
            className="w-full py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs"
          >
            Browse Electronics Catalog
          </button>
        </div>
      </div>
    );
  }

  // Find lowest price
  const lowestPrice = Math.min(...compareList.map(p => p.price));
  const highestRating = Math.max(...compareList.map(p => p.rating));

  // Copy share summary
  const handleCopySummary = () => {
    const text = compareList.map(p => `${p.name} ($${p.price}) - ${p.rating}★\nFeatures: ${p.features.slice(0, 8).join(', ')}`).join('\n\n');
    navigator.clipboard.writeText(`Smart Electronics Finder Comparison:\n\n${text}`);
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-6 backdrop-blur-md bg-slate-950/85 animate-in fade-in duration-200">
      
      <div 
        className="relative w-full max-w-6xl bg-slate-900 border border-slate-700/80 rounded-3xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Top Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-900/95 sticky top-0 z-30 backdrop-blur-md gap-3">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-lg font-bold text-white">Side-by-Side Comparison</h2>
                <span className="px-2 py-0.5 text-xs font-bold rounded-full bg-slate-800 text-cyan-300 border border-slate-700 font-mono">
                  {compareList.length} / 4 Devices
                </span>
              </div>
              <p className="text-xs text-slate-400">
                Detailed side-by-side specification and feature comparison table
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Highlight Differences Toggle */}
            <button
              onClick={() => setHighlightDiffs(!highlightDiffs)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all flex items-center gap-1.5 ${
                highlightDiffs
                  ? 'bg-amber-500/20 text-amber-300 border-amber-500/40 ring-1 ring-amber-500/40'
                  : 'bg-slate-800 text-slate-400 hover:text-white border-slate-700'
              }`}
            >
              <Zap className="w-3.5 h-3.5 text-amber-400" />
              <span>Highlight Differences</span>
            </button>

            {/* Share / Copy Button */}
            <button
              onClick={handleCopySummary}
              className="px-3 py-1.5 rounded-xl text-xs font-semibold bg-slate-800 text-slate-300 hover:text-white border border-slate-700 flex items-center gap-1.5 transition-colors"
              title="Copy comparison summary to clipboard"
            >
              {copySuccess ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copySuccess ? 'Copied!' : 'Copy Summary'}</span>
            </button>

            {/* Clear All */}
            <button
              onClick={clearCompare}
              className="p-2 rounded-xl bg-slate-800 text-rose-400 hover:text-rose-300 hover:bg-rose-500/20 border border-slate-700 transition-colors"
              title="Clear comparison list"
            >
              <Trash2 className="w-4 h-4" />
            </button>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 border border-slate-700 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Table Content */}
        <div className="overflow-x-auto overflow-y-auto flex-1 p-6 scrollbar-thin scrollbar-thumb-slate-700">
          <table className="w-full border-collapse text-left text-xs min-w-[650px]">
            <thead>
              <tr className="border-b border-slate-800">
                <th className="p-3 w-44 font-bold text-slate-400 uppercase tracking-wider text-[11px] align-top bg-slate-900 sticky left-0 z-10">
                  Device Overview
                </th>
                {compareList.map(product => {
                  const matchingCount = selectedFeatures.filter(f => product.features.includes(f)).length;
                  const matchPct = selectedFeatures.length > 0 
                    ? Math.round((matchingCount / selectedFeatures.length) * 100) 
                    : 100;
                  return (
                    <th key={product.id} className="p-3 min-w-[200px] max-w-[260px] align-top font-normal bg-slate-850/40 rounded-2xl mx-1">
                      <div className="relative group space-y-2">
                        {/* Remove button */}
                        <button
                          onClick={() => removeFromCompare(product.id)}
                          className="absolute top-1 right-1 p-1 rounded-lg bg-slate-800/80 text-slate-400 hover:text-rose-400 hover:bg-slate-700 border border-slate-700"
                          title="Remove from compare"
                        >
                          <X className="w-3.5 h-3.5" />
                        </button>

                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-28 object-cover rounded-xl border border-slate-800"
                        />

                        <div>
                          <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-wider block">
                            {product.categoryName}
                          </span>
                          <h4 
                            onClick={() => onViewDetails(product)}
                            className="font-bold text-sm text-white hover:text-cyan-300 cursor-pointer line-clamp-1"
                          >
                            {product.name}
                          </h4>
                          <span className="text-[11px] text-slate-400 block">{product.brand}</span>
                        </div>

                        {/* Price & Rating Tag */}
                        <div className="flex items-center justify-between pt-1">
                          <div className="flex items-baseline gap-1">
                            <span className="text-base font-black text-white font-mono">
                              ${product.price}
                            </span>
                            {product.price === lowestPrice && compareList.length > 1 && (
                              <span className="px-1.5 py-0.5 text-[9px] font-bold rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                                Best Price
                              </span>
                            )}
                          </div>
                          <div className="flex items-center gap-1 text-amber-400 text-xs font-bold">
                            <Star className="w-3 h-3 fill-amber-400" />
                            <span>{product.rating}</span>
                          </div>
                        </div>

                        {/* Match Tag if features selected */}
                        {selectedFeatures.length > 0 && (
                          <div className="p-1.5 rounded-lg bg-cyan-950/40 border border-cyan-500/30 text-[11px] text-cyan-300 font-bold flex items-center justify-between">
                            <span>Match Score</span>
                            <span>{matchPct}% ({matchingCount}/{selectedFeatures.length})</span>
                          </div>
                        )}
                      </div>
                    </th>
                  );
                })}
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-800/80">
              
              {/* Category */}
              <tr className="hover:bg-slate-800/30">
                <td className="p-3 font-bold text-slate-300 bg-slate-900 sticky left-0 z-10">Category</td>
                {compareList.map(p => (
                  <td key={p.id} className="p-3 text-slate-200 font-medium">{p.categoryName}</td>
                ))}
              </tr>

              {/* Price */}
              <tr className="hover:bg-slate-800/30">
                <td className="p-3 font-bold text-slate-300 bg-slate-900 sticky left-0 z-10">Price</td>
                {compareList.map(p => (
                  <td key={p.id} className="p-3 font-mono text-sm font-bold text-white">
                    ${p.price}
                    {p.originalPrice && <span className="text-xs text-slate-500 line-through ml-1">${p.originalPrice}</span>}
                  </td>
                ))}
              </tr>

              {/* Customer Rating */}
              <tr className="hover:bg-slate-800/30">
                <td className="p-3 font-bold text-slate-300 bg-slate-900 sticky left-0 z-10">Rating</td>
                {compareList.map(p => (
                  <td key={p.id} className="p-3 text-slate-200">
                    <span className="font-bold text-amber-300">{p.rating}★</span> ({p.reviewCount} reviews)
                  </td>
                ))}
              </tr>

              {/* Display */}
              <tr className={`hover:bg-slate-800/30 ${highlightDiffs ? 'bg-indigo-950/20' : ''}`}>
                <td className="p-3 font-bold text-slate-300 bg-slate-900 sticky left-0 z-10">Display</td>
                {compareList.map(p => (
                  <td key={p.id} className="p-3 text-slate-300 leading-relaxed">
                    {p.specs.display || '—'}
                  </td>
                ))}
              </tr>

              {/* Processor / Hardware */}
              <tr className={`hover:bg-slate-800/30 ${highlightDiffs ? 'bg-indigo-950/20' : ''}`}>
                <td className="p-3 font-bold text-slate-300 bg-slate-900 sticky left-0 z-10">Processor / Engine</td>
                {compareList.map(p => (
                  <td key={p.id} className="p-3 text-slate-300 leading-relaxed">
                    {p.specs.processor || p.specs.gpu || p.specs.acoustics || p.specs.print_technology || '—'}
                  </td>
                ))}
              </tr>

              {/* RAM & Storage */}
              <tr className={`hover:bg-slate-800/30 ${highlightDiffs ? 'bg-indigo-950/20' : ''}`}>
                <td className="p-3 font-bold text-slate-300 bg-slate-900 sticky left-0 z-10">Memory & Storage</td>
                {compareList.map(p => (
                  <td key={p.id} className="p-3 text-slate-300 leading-relaxed">
                    {p.specs.ram ? `${p.specs.ram} RAM • ${p.specs.storage}` : (p.specs.capacity || '—')}
                  </td>
                ))}
              </tr>

              {/* Battery & Power */}
              <tr className={`hover:bg-slate-800/30 ${highlightDiffs ? 'bg-indigo-950/20' : ''}`}>
                <td className="p-3 font-bold text-slate-300 bg-slate-900 sticky left-0 z-10">Battery & Charging</td>
                {compareList.map(p => (
                  <td key={p.id} className="p-3 text-slate-300 leading-relaxed">
                    {p.specs.battery || p.specs.output || p.specs.power || '—'}
                  </td>
                ))}
              </tr>

              {/* Camera / Optics / Sensor */}
              <tr className={`hover:bg-slate-800/30 ${highlightDiffs ? 'bg-indigo-950/20' : ''}`}>
                <td className="p-3 font-bold text-slate-300 bg-slate-900 sticky left-0 z-10">Camera / Sensors</td>
                {compareList.map(p => (
                  <td key={p.id} className="p-3 text-slate-300 leading-relaxed">
                    {p.specs.camera || p.specs.sensor || p.specs.sensors || '—'}
                  </td>
                ))}
              </tr>

              {/* Connectivity */}
              <tr className={`hover:bg-slate-800/30 ${highlightDiffs ? 'bg-indigo-950/20' : ''}`}>
                <td className="p-3 font-bold text-slate-300 bg-slate-900 sticky left-0 z-10">Connectivity Ports</td>
                {compareList.map(p => (
                  <td key={p.id} className="p-3 text-slate-300 leading-relaxed">
                    {p.specs.connectivity || p.specs.ports || '—'}
                  </td>
                ))}
              </tr>

              {/* Dimensions & Weight */}
              <tr className="hover:bg-slate-800/30">
                <td className="p-3 font-bold text-slate-300 bg-slate-900 sticky left-0 z-10">Dimensions & Weight</td>
                {compareList.map(p => (
                  <td key={p.id} className="p-3 text-slate-300">
                    {p.specs.dimensions || p.specs.weight || '—'}
                  </td>
                ))}
              </tr>

              {/* Warranty */}
              <tr className="hover:bg-slate-800/30">
                <td className="p-3 font-bold text-slate-300 bg-slate-900 sticky left-0 z-10">Warranty</td>
                {compareList.map(p => (
                  <td key={p.id} className="p-3 text-cyan-300 font-medium">
                    {p.specs.warranty || '1 Year Limited Warranty'}
                  </td>
                ))}
              </tr>

              {/* Key Features Check Matrix Section Header */}
              <tr className="bg-slate-950/80">
                <td colSpan={compareList.length + 1} className="p-3 font-bold uppercase tracking-wider text-cyan-400 text-[11px]">
                  Supported Features Checklist Matrix
                </td>
              </tr>

              {/* Check each major feature */}
              {ALL_FEATURES.slice(0, 16).map(feat => (
                <tr key={feat.id} className="hover:bg-slate-800/30">
                  <td className="p-3 font-medium text-slate-300 bg-slate-900 sticky left-0 z-10">
                    {feat.name}
                  </td>
                  {compareList.map(p => {
                    const hasFeature = p.features.includes(feat.id);
                    return (
                      <td key={p.id} className="p-3">
                        {hasFeature ? (
                          <span className="inline-flex items-center gap-1 text-emerald-400 font-semibold">
                            <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Yes
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 text-slate-600">
                            <Minus className="w-4 h-4 text-slate-600" /> No
                          </span>
                        )}
                      </td>
                    );
                  })}
                </tr>
              ))}

            </tbody>
          </table>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-slate-800 bg-slate-900/95 flex items-center justify-between">
          <span className="text-xs text-slate-400">
            Comparing {compareList.length} products. Max 4 items allowed.
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl text-xs font-bold bg-cyan-500 hover:bg-cyan-400 text-slate-950"
          >
            Close Comparison
          </button>
        </div>

      </div>

    </div>
  );
}
