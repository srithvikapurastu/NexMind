import React, { useState, useMemo, useRef } from 'react';
import Navbar from './components/Navbar';
import FeatureSelector from './components/FeatureSelector';
import FiltersSidebar from './components/FiltersSidebar';
import ProductCard from './components/ProductCard';
import ProductDetailsModal from './components/ProductDetailsModal';
import ComparisonModal from './components/ComparisonModal';
import SmartRecommendationWizard from './components/SmartRecommendationWizard';
import WishlistDrawer from './components/WishlistDrawer';
import { PRODUCTS, BRANDS } from './data/products';
import { CATEGORIES } from './data/categories';
import { ALL_FEATURES } from './data/features';
import { 
  Sparkles, 
  Layers, 
  Filter, 
  RotateCcw, 
  ChevronRight, 
  Check, 
  Bot, 
  SlidersHorizontal,
  X,
  Heart,
  TrendingUp,
  Cpu,
  Tv,
  Smartphone,
  Info
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function App() {
  // Main feature & category states
  const [selectedFeatures, setSelectedFeatures] = useState(['Wi-Fi', 'Bluetooth']);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Refinement filters state
  const [priceRange, setPriceRange] = useState({ min: 0, max: 4000 });
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [minRating, setMinRating] = useState(0);
  const [sortBy, setSortBy] = useState('match');
  const [strictMatchMode, setStrictMatchMode] = useState(false);
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);

  // Modals & Drawers state
  const [selectedProductDetails, setSelectedProductDetails] = useState(null);
  const [compareList, setCompareList] = useState([]);
  const [isCompareModalOpen, setIsCompareModalOpen] = useState(false);
  const [wishlist, setWishlist] = useState(() => {
    try {
      const saved = localStorage.getItem('smart_tech_wishlist');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });
  const [isWishlistDrawerOpen, setIsWishlistDrawerOpen] = useState(false);
  const [isWizardOpen, setIsWizardOpen] = useState(false);
  const [theme, setTheme] = useState('dark');

  // Results Section Reference for smooth scroll
  const resultsRef = useRef(null);

  // Toggle Theme
  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    if (newTheme === 'light') {
      document.documentElement.classList.add('light-mode');
    } else {
      document.documentElement.classList.remove('light-mode');
    }
  };

  // Feature selection handlers
  const toggleFeature = (featureId) => {
    setSelectedFeatures(prev => 
      prev.includes(featureId)
        ? prev.filter(f => f !== featureId)
        : [...prev, featureId]
    );
  };

  const clearFeatures = () => {
    setSelectedFeatures([]);
  };

  const applyPreset = (presetFeatures) => {
    setSelectedFeatures(presetFeatures);
    try {
      confetti({ particleCount: 50, spread: 60, origin: { y: 0.7 } });
    } catch {}
  };

  // Brand toggle handler
  const toggleBrand = (brand) => {
    if (brand === 'clear') {
      setSelectedBrands([]);
      return;
    }
    setSelectedBrands(prev => 
      prev.includes(brand)
        ? prev.filter(b => b !== brand)
        : [...prev, brand]
    );
  };

  // Wishlist handler
  const toggleWishlist = (product) => {
    setWishlist(prev => {
      const exists = prev.some(p => p.id === product.id);
      const updated = exists 
        ? prev.filter(p => p.id !== product.id)
        : [...prev, product];
      try {
        localStorage.setItem('smart_tech_wishlist', JSON.stringify(updated));
      } catch {}
      return updated;
    });
  };

  const clearWishlist = () => {
    setWishlist([]);
    try {
      localStorage.removeItem('smart_tech_wishlist');
    } catch {}
  };

  // Compare handlers
  const toggleCompare = (product) => {
    setCompareList(prev => {
      const exists = prev.some(p => p.id === product.id);
      if (exists) {
        return prev.filter(p => p.id !== product.id);
      }
      if (prev.length >= 4) {
        alert('You can compare a maximum of 4 devices at once.');
        return prev;
      }
      return [...prev, product];
    });
  };

  const removeFromCompare = (productId) => {
    setCompareList(prev => prev.filter(p => p.id !== productId));
  };

  const clearCompare = () => {
    setCompareList([]);
  };

  // Reset all filters
  const handleResetFilters = () => {
    setPriceRange({ min: 0, max: 4000 });
    setSelectedBrands([]);
    setMinRating(0);
    setSortBy('match');
    setStrictMatchMode(false);
  };

  const handleResetAll = () => {
    setSelectedFeatures([]);
    setSelectedCategory('all');
    setSearchQuery('');
    handleResetFilters();
  };

  // AI Wizard callback
  const handleApplyWizard = ({ features, priceRange: newPriceRange }) => {
    setSelectedFeatures(features);
    setPriceRange(newPriceRange);
    setSelectedCategory('all');
    setTimeout(() => {
      resultsRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 150);
  };

  // Smooth scroll to results
  const scrollToResults = () => {
    resultsRef.current?.scrollIntoView({ behavior: 'smooth' });
    try {
      confetti({ particleCount: 60, spread: 70, origin: { y: 0.6 } });
    } catch {}
  };

  // Dynamic Filtering and Ranking Engine
  const filteredProducts = useMemo(() => {
    return PRODUCTS.map(product => {
      // Calculate matching features
      const matchedFeatures = selectedFeatures.filter(f => product.features.includes(f));
      const matchScore = selectedFeatures.length > 0
        ? matchedFeatures.length / selectedFeatures.length
        : 1;
      const matchPercentage = Math.round(matchScore * 100);

      return {
        ...product,
        matchedFeatures,
        matchCount: matchedFeatures.length,
        matchScore,
        matchPercentage
      };
    }).filter(product => {
      // 1. Strict Match Mode condition
      if (strictMatchMode && selectedFeatures.length > 0) {
        const hasAllFeatures = selectedFeatures.every(f => product.features.includes(f));
        if (!hasAllFeatures) return false;
      }

      // 2. Category Filter
      if (selectedCategory !== 'all' && product.category !== selectedCategory) {
        return false;
      }

      // 3. Search Query Filter (name, brand, category, features, specs)
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesName = product.name.toLowerCase().includes(q);
        const matchesBrand = product.brand.toLowerCase().includes(q);
        const matchesCategory = product.categoryName.toLowerCase().includes(q);
        const matchesTagline = product.tagline.toLowerCase().includes(q);
        const matchesFeature = product.features.some(f => f.toLowerCase().includes(q));
        const matchesSpecs = Object.values(product.specs).some(v => v.toLowerCase().includes(q));

        if (!matchesName && !matchesBrand && !matchesCategory && !matchesTagline && !matchesFeature && !matchesSpecs) {
          return false;
        }
      }

      // 4. Price Range Filter
      if (product.price < priceRange.min || product.price > priceRange.max) {
        return false;
      }

      // 5. Brand Filter
      if (selectedBrands.length > 0 && !selectedBrands.includes(product.brand)) {
        return false;
      }

      // 6. Rating Filter
      if (product.rating < minRating) {
        return false;
      }

      return true;
    }).sort((a, b) => {
      // Sorting Logic
      if (sortBy === 'match') {
        // Prioritize highest match count/percentage first, then rating
        if (b.matchCount !== a.matchCount) {
          return b.matchCount - a.matchCount;
        }
        return b.rating - a.rating;
      }
      if (sortBy === 'price-asc') {
        return a.price - b.price;
      }
      if (sortBy === 'price-desc') {
        return b.price - a.price;
      }
      if (sortBy === 'rating') {
        return b.rating - a.rating;
      }
      if (sortBy === 'popular') {
        return b.reviewCount - a.reviewCount;
      }
      if (sortBy === 'name') {
        return a.name.localeCompare(b.name);
      }
      return 0;
    });
  }, [
    selectedFeatures,
    selectedCategory,
    searchQuery,
    priceRange,
    selectedBrands,
    minRating,
    sortBy,
    strictMatchMode
  ]);

  return (
    <div className={`min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans transition-colors duration-200 ${theme === 'light' ? 'light-mode' : ''}`}>
      
      {/* Navigation Header */}
      <Navbar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        compareList={compareList}
        openCompareModal={() => setIsCompareModalOpen(true)}
        wishlist={wishlist}
        openWishlistDrawer={() => setIsWishlistDrawerOpen(true)}
        openWizardModal={() => setIsWizardOpen(true)}
        theme={theme}
        toggleTheme={toggleTheme}
        totalProductsCount={PRODUCTS.length}
        matchedCount={filteredProducts.length}
        onResetAll={handleResetAll}
      />

      {/* Main Feature Selection & Hero Section */}
      <FeatureSelector
        selectedFeatures={selectedFeatures}
        toggleFeature={toggleFeature}
        clearFeatures={clearFeatures}
        applyPreset={applyPreset}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        matchingProductsCount={filteredProducts.length}
        onFindDevicesClick={scrollToResults}
      />

      {/* Results & Product Discovery Hub */}
      <main ref={resultsRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex-1 w-full">
        
        {/* Results Toolbar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-5 border-b border-slate-800">
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                {selectedCategory === 'all' ? 'All Compatible Devices' : CATEGORIES.find(c => c.id === selectedCategory)?.name || 'Matching Devices'}
              </h2>
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 font-mono">
                {filteredProducts.length} Product{filteredProducts.length !== 1 ? 's' : ''} Found
              </span>
            </div>

            {/* Active filters pill display */}
            <div className="flex flex-wrap items-center gap-2 mt-2">
              {selectedFeatures.length > 0 && (
                <span className="text-xs text-slate-400">
                  Matching features:{' '}
                  <span className="text-cyan-300 font-semibold">
                    {selectedFeatures.join(' • ')}
                  </span>
                </span>
              )}
            </div>
          </div>

          {/* Mobile Filter Toggle & Quick Actions */}
          <div className="flex items-center gap-2.5">
            <button
              onClick={() => setIsMobileFiltersOpen(!isMobileFiltersOpen)}
              className="lg:hidden flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold bg-slate-800 border border-slate-700 text-white"
            >
              <Filter className="w-3.5 h-3.5 text-cyan-400" />
              <span>Filters</span>
            </button>

            {compareList.length > 0 && (
              <button
                onClick={() => setIsCompareModalOpen(true)}
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-cyan-500 hover:bg-cyan-400 text-slate-950 shadow-md shadow-cyan-500/20 transition-all"
              >
                <Layers className="w-4 h-4" />
                <span>Compare ({compareList.length})</span>
              </button>
            )}
          </div>
        </div>

        {/* 2-Column Grid: Left Sidebar Filters + Right Product Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Desktop Filters Sidebar */}
          <div className="hidden lg:block lg:col-span-3 sticky top-24">
            <FiltersSidebar
              priceRange={priceRange}
              setPriceRange={setPriceRange}
              selectedBrands={selectedBrands}
              toggleBrand={toggleBrand}
              minRating={minRating}
              setMinRating={setMinRating}
              sortBy={sortBy}
              setSortBy={setSortBy}
              strictMatchMode={strictMatchMode}
              setStrictMatchMode={setStrictMatchMode}
              onResetFilters={handleResetFilters}
              totalResultsCount={filteredProducts.length}
            />
          </div>

          {/* Mobile Filters Drawer */}
          {isMobileFiltersOpen && (
            <div className="fixed inset-0 z-50 lg:hidden backdrop-blur-md bg-slate-950/80 p-4 flex flex-col justify-end animate-in fade-in">
              <div className="bg-slate-900 border border-slate-700 rounded-3xl p-5 max-h-[85vh] overflow-y-auto space-y-4">
                <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                  <h3 className="font-bold text-white text-base">Filter & Refine</h3>
                  <button onClick={() => setIsMobileFiltersOpen(false)} className="p-1 text-slate-400">
                    <X className="w-5 h-5" />
                  </button>
                </div>
                <FiltersSidebar
                  priceRange={priceRange}
                  setPriceRange={setPriceRange}
                  selectedBrands={selectedBrands}
                  toggleBrand={toggleBrand}
                  minRating={minRating}
                  setMinRating={setMinRating}
                  sortBy={sortBy}
                  setSortBy={setSortBy}
                  strictMatchMode={strictMatchMode}
                  setStrictMatchMode={setStrictMatchMode}
                  onResetFilters={handleResetFilters}
                  totalResultsCount={filteredProducts.length}
                />
                <button
                  onClick={() => setIsMobileFiltersOpen(false)}
                  className="w-full py-2.5 rounded-xl bg-cyan-500 text-slate-950 font-bold text-xs"
                >
                  Apply Filters ({filteredProducts.length} Results)
                </button>
              </div>
            </div>
          )}

          {/* Right Product Grid */}
          <div className="lg:col-span-9">
            {filteredProducts.length === 0 ? (
              /* Empty State */
              <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-12 text-center space-y-4 backdrop-blur-md">
                <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center mx-auto border border-cyan-500/20">
                  <Info className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-white">No Matching Electronics Found</h3>
                <p className="text-xs sm:text-sm text-slate-400 max-w-md mx-auto leading-relaxed">
                  We couldn't find any devices matching your exact combination of features, brand filters, or price range. Try unchecking a feature or widening your price range.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                  <button
                    onClick={handleResetFilters}
                    className="px-4 py-2 rounded-xl text-xs font-semibold bg-slate-800 text-slate-200 hover:text-white border border-slate-700"
                  >
                    Reset Filters
                  </button>
                  <button
                    onClick={handleResetAll}
                    className="px-5 py-2 rounded-xl text-xs font-bold bg-cyan-500 hover:bg-cyan-400 text-slate-950 shadow-md"
                  >
                    Show All Products
                  </button>
                </div>
              </div>
            ) : (
              /* Product Cards Grid */
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                {filteredProducts.map(product => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    selectedFeatures={selectedFeatures}
                    onViewDetails={(p) => setSelectedProductDetails(p)}
                    isComparing={compareList.some(p => p.id === product.id)}
                    toggleCompare={toggleCompare}
                    isWishlisted={wishlist.some(p => p.id === product.id)}
                    toggleWishlist={toggleWishlist}
                  />
                ))}
              </div>
            )}
          </div>

        </div>

      </main>

      {/* Floating Comparison Dock (Bottom Bar when items are selected) */}
      {compareList.length > 0 && (
        <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 w-full max-w-3xl px-4 animate-in slide-in-from-bottom-6 duration-300">
          <div className="bg-slate-900/95 border border-cyan-500/40 rounded-2xl p-3 sm:p-4 shadow-2xl backdrop-blur-xl flex items-center justify-between gap-4 glow-cyan">
            
            <div className="flex items-center gap-3 overflow-x-auto">
              <div className="hidden sm:flex items-center gap-1.5 text-xs font-bold text-white shrink-0">
                <Layers className="w-4 h-4 text-cyan-400" />
                <span>Compare:</span>
              </div>
              
              {/* Product Thumbnails */}
              <div className="flex items-center gap-2">
                {compareList.map(prod => (
                  <div key={prod.id} className="relative group shrink-0">
                    <img
                      src={prod.image}
                      alt={prod.name}
                      className="w-10 h-10 rounded-lg object-cover border border-slate-700"
                    />
                    <button
                      onClick={() => removeFromCompare(prod.id)}
                      className="absolute -top-1.5 -right-1.5 bg-rose-500 text-white rounded-full p-0.5 shadow hover:scale-110"
                      title="Remove"
                    >
                      <X className="w-2.5 h-2.5" />
                    </button>
                  </div>
                ))}
                {Array.from({ length: 4 - compareList.length }).map((_, idx) => (
                  <div 
                    key={idx} 
                    className="w-10 h-10 rounded-lg border border-dashed border-slate-700 flex items-center justify-center text-[10px] text-slate-500 shrink-0 font-mono"
                  >
                    +{idx + 1}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={clearCompare}
                className="text-xs text-slate-400 hover:text-rose-400 px-2 py-1 font-medium transition-colors"
              >
                Clear
              </button>
              <button
                onClick={() => setIsCompareModalOpen(true)}
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-gradient-to-r from-cyan-400 to-indigo-400 text-slate-950 hover:from-cyan-300 hover:to-indigo-300 shadow-lg shadow-cyan-500/20"
              >
                <span>Compare Now</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>
        </div>
      )}

      {/* Product Details Modal */}
      {selectedProductDetails && (
        <ProductDetailsModal
          product={selectedProductDetails}
          onClose={() => setSelectedProductDetails(null)}
          selectedFeatures={selectedFeatures}
          isComparing={compareList.some(p => p.id === selectedProductDetails.id)}
          toggleCompare={toggleCompare}
          isWishlisted={wishlist.some(p => p.id === selectedProductDetails.id)}
          toggleWishlist={toggleWishlist}
        />
      )}

      {/* Side-by-Side Product Comparison Modal */}
      {isCompareModalOpen && (
        <ComparisonModal
          compareList={compareList}
          removeFromCompare={removeFromCompare}
          clearCompare={clearCompare}
          onClose={() => setIsCompareModalOpen(false)}
          selectedFeatures={selectedFeatures}
          allProducts={PRODUCTS}
          addToCompare={toggleCompare}
          onViewDetails={(p) => {
            setIsCompareModalOpen(false);
            setSelectedProductDetails(p);
          }}
        />
      )}

      {/* AI Recommendation Wizard Modal */}
      <SmartRecommendationWizard
        isOpen={isWizardOpen}
        onClose={() => setIsWizardOpen(false)}
        onApplyWizardSelection={handleApplyWizard}
      />

      {/* Wishlist Slide-Over Drawer */}
      <WishlistDrawer
        isOpen={isWishlistDrawerOpen}
        onClose={() => setIsWishlistDrawerOpen(false)}
        wishlist={wishlist}
        removeFromWishlist={(id) => {
          setWishlist(prev => {
            const updated = prev.filter(p => p.id !== id);
            localStorage.setItem('smart_tech_wishlist', JSON.stringify(updated));
            return updated;
          });
        }}
        clearWishlist={clearWishlist}
        onViewDetails={(p) => setSelectedProductDetails(p)}
        toggleCompare={toggleCompare}
        compareList={compareList}
      />

      {/* Footer */}
      <footer className="mt-auto border-t border-slate-800/80 bg-slate-900/90 py-12 text-slate-400 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          
          <div className="space-y-3 md:col-span-2">
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-cyan-400" />
              <span className="text-base font-black text-white">Smart Electronics Finder</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed max-w-md">
              A modern electronic-device discovery platform. Instead of searching product by product, specify the exact features you want and our dynamic cross-category matrix finds and ranks every compatible device instantly.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-white text-xs uppercase tracking-wider mb-3">Popular Categories</h4>
            <ul className="space-y-1.5 text-xs text-slate-400">
              <li>Smartphones & Flagships</li>
              <li>4K OLED Smart TVs</li>
              <li>Laptops & Ultrabooks</li>
              <li>Smart Home Automation</li>
              <li>ANC Wireless Headphones</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white text-xs uppercase tracking-wider mb-3">Core Discovery Features</h4>
            <ul className="space-y-1.5 text-xs text-slate-400">
              <li>Cross-Category Feature Matching</li>
              <li>Side-by-Side 4-Device Comparison</li>
              <li>AI Tech Matchmaker Guide</li>
              <li>Real-Time Spec Verification</li>
              <li>Price & Rating Filtering</li>
            </ul>
          </div>

        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 border-t border-slate-800 text-center text-slate-500">
          <p>© 2026 Smart Electronics Finder. Built for rapid tech discovery and feature-first comparison.</p>
        </div>
      </footer>

    </div>
  );
}
