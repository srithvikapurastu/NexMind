import React from 'react';
import { 
  X, 
  Trash2, 
  Eye, 
  Layers, 
  Heart, 
  Star, 
  Sparkles,
  ChevronRight
} from 'lucide-react';

export default function WishlistDrawer({
  isOpen,
  onClose,
  wishlist = [],
  removeFromWishlist,
  clearWishlist,
  onViewDetails,
  toggleCompare,
  compareList = []
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden backdrop-blur-sm bg-slate-950/70 animate-in fade-in duration-200">
      <div className="absolute inset-0" onClick={onClose} />

      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-slate-900 border-l border-slate-800 shadow-2xl flex flex-col">
          
          {/* Header */}
          <div className="px-6 py-5 border-b border-slate-800 flex items-center justify-between bg-slate-900/90">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-xl bg-rose-500/20 text-rose-400 border border-rose-500/30">
                <Heart className="w-5 h-5 fill-rose-500" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white">Your Saved Tech</h3>
                <p className="text-xs text-slate-400">{wishlist.length} item{wishlist.length !== 1 ? 's' : ''} in wishlist</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              {wishlist.length > 0 && (
                <button
                  onClick={clearWishlist}
                  className="p-2 rounded-xl text-slate-400 hover:text-rose-400 hover:bg-slate-800"
                  title="Clear all saved items"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              )}
              <button
                onClick={onClose}
                className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* List Content */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4 scrollbar-thin scrollbar-thumb-slate-700">
            {wishlist.length === 0 ? (
              <div className="text-center py-16 space-y-3">
                <Heart className="w-12 h-12 text-slate-600 mx-auto stroke-[1.5]" />
                <h4 className="text-sm font-bold text-slate-300">Your wishlist is empty</h4>
                <p className="text-xs text-slate-400 max-w-xs mx-auto">
                  Click the heart icon on any electronic device card to save it for later review.
                </p>
              </div>
            ) : (
              wishlist.map(product => {
                const isComparing = compareList.some(p => p.id === product.id);
                return (
                  <div
                    key={product.id}
                    className="p-3.5 rounded-2xl bg-slate-850 border border-slate-800 hover:border-slate-700 transition-all flex gap-3.5 group"
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-20 h-20 object-cover rounded-xl bg-slate-950 border border-slate-800 shrink-0"
                    />

                    <div className="flex-1 min-w-0 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-wider">
                            {product.categoryName}
                          </span>
                          <button
                            onClick={() => removeFromWishlist(product.id)}
                            className="text-slate-500 hover:text-rose-400 p-0.5"
                          >
                            <X className="w-3.5 h-3.5" />
                          </button>
                        </div>
                        <h4 
                          onClick={() => {
                            onClose();
                            onViewDetails(product);
                          }}
                          className="text-xs font-bold text-white hover:text-cyan-300 cursor-pointer truncate mt-0.5"
                        >
                          {product.name}
                        </h4>
                      </div>

                      <div className="flex items-center justify-between pt-2">
                        <span className="text-xs font-mono font-bold text-white">
                          ${product.price}
                        </span>

                        <div className="flex items-center gap-1.5">
                          <button
                            onClick={() => toggleCompare(product)}
                            className={`px-2 py-1 rounded-lg text-[10px] font-bold border transition-colors ${
                              isComparing
                                ? 'bg-cyan-500/20 text-cyan-300 border-cyan-400'
                                : 'bg-slate-800 text-slate-300 hover:text-white border-slate-700'
                            }`}
                          >
                            {isComparing ? 'Comparing' : 'Compare'}
                          </button>
                          <button
                            onClick={() => {
                              onClose();
                              onViewDetails(product);
                            }}
                            className="p-1 rounded-lg bg-slate-800 text-cyan-400 hover:text-cyan-300 border border-slate-700"
                            title="View Specs"
                          >
                            <Eye className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>

          {/* Footer */}
          {wishlist.length > 0 && (
            <div className="p-5 border-t border-slate-800 bg-slate-900/90">
              <button
                onClick={onClose}
                className="w-full py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs transition-colors"
              >
                Back to Discovery
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
