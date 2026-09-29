import React, { useState } from 'react';
import { 
  Bot, 
  Sparkles, 
  X, 
  ChevronRight, 
  Check, 
  Gamepad2, 
  Briefcase, 
  Home, 
  Plane, 
  Music,
  Tv,
  Smartphone,
  Cpu,
  Zap,
  ArrowRight
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function SmartRecommendationWizard({
  isOpen,
  onClose,
  onApplyWizardSelection
}) {
  const [step, setStep] = useState(1);
  const [selectedPersona, setSelectedPersona] = useState(null);
  const [selectedBudget, setSelectedBudget] = useState(null);
  const [selectedMustHaves, setSelectedMustHaves] = useState([]);

  if (!isOpen) return null;

  const PERSONAS = [
    {
      id: 'gaming',
      title: 'Gaming & Performance',
      desc: 'Ray-tracing, 120Hz/240Hz, ultra low latency, fast rendering & responsiveness.',
      icon: Gamepad2,
      features: ['High Refresh Rate', 'Gaming Support', '4K Video', 'High RAM', 'Large Storage']
    },
    {
      id: 'work',
      title: 'Work & Creative Pro',
      desc: 'Multitasking power, high-res color-accurate visuals, AI acceleration & long battery.',
      icon: Briefcase,
      features: ['AI Features', 'High RAM', 'Large Storage', 'Long Battery Life', '4K Video']
    },
    {
      id: 'smart-living',
      title: 'Smart Home & Automation',
      desc: 'Hands-free voice control, Matter/Zigbee sync, Wi-Fi & energy efficiency.',
      icon: Home,
      features: ['Voice Assistant', 'Wi-Fi', 'Smart Home Connectivity', 'Energy Efficient']
    },
    {
      id: 'travel',
      title: 'Travel & Mobility',
      desc: '5G connectivity, rugged water resistance, rapid fast charging & all-day battery.',
      icon: Plane,
      features: ['5G', 'Long Battery Life', 'Fast Charging', 'Water Resistance', 'GPS']
    },
    {
      id: 'audio-cinema',
      title: 'Audiophile & Home Cinema',
      desc: 'Active noise cancellation, Bluetooth lossless codecs, immersive spatial sound.',
      icon: Music,
      features: ['Active Noise Cancellation', 'Bluetooth', 'AMOLED Display', '4K Video']
    }
  ];

  const BUDGETS = [
    { id: 'budget', label: 'Entry & Budget ($0 - $400)', min: 0, max: 400 },
    { id: 'mid', label: 'Mid-Range Value ($400 - $1,000)', min: 400, max: 1000 },
    { id: 'flagship', label: 'Flagship & Enthusiast ($1,000+)', min: 1000, max: 4000 },
    { id: 'any', label: 'Any Budget (Best Match First)', min: 0, max: 4000 }
  ];

  const MUST_HAVES = [
    '5G',
    'AMOLED Display',
    'Voice Assistant',
    'Fast Charging',
    'Water Resistance',
    'Active Noise Cancellation',
    'Gaming Support',
    'AI Features'
  ];

  const toggleMustHave = (feat) => {
    setSelectedMustHaves(prev => 
      prev.includes(feat) ? prev.filter(f => f !== feat) : [...prev, feat]
    );
  };

  const handleFinish = () => {
    // Combine persona features with selected must-haves
    const personaFeats = selectedPersona ? selectedPersona.features : [];
    const combinedFeatures = Array.from(new Set([...personaFeats, ...selectedMustHaves]));
    
    // Trigger celebratory confetti
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (e) {}

    onApplyWizardSelection({
      features: combinedFeatures,
      priceRange: selectedBudget ? { min: selectedBudget.min, max: selectedBudget.max } : { min: 0, max: 4000 }
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-md bg-slate-950/85 animate-in fade-in duration-200">
      
      <div 
        className="relative w-full max-w-2xl bg-slate-900 border border-slate-700/80 rounded-3xl shadow-2xl overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-900/90">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-gradient-to-tr from-cyan-500 to-indigo-600 text-slate-950">
              <Bot className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">Smart Tech Matchmaker</h3>
              <p className="text-xs text-slate-400">Step {step} of 3: Personalized feature finder</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Step Progress Bar */}
        <div className="w-full bg-slate-800 h-1">
          <div 
            className="bg-gradient-to-r from-cyan-400 to-indigo-500 h-1 transition-all duration-300"
            style={{ width: `${(step / 3) * 100}%` }}
          />
        </div>

        {/* Content Body */}
        <div className="p-6 space-y-6">
          
          {/* STEP 1: Main Goal / Persona */}
          {step === 1 && (
            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-bold text-white">What is your primary use case or lifestyle goal?</h4>
                <p className="text-xs text-slate-400">Select what matters most to you</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {PERSONAS.map(p => {
                  const Icon = p.icon;
                  const isSelected = selectedPersona?.id === p.id;
                  return (
                    <div
                      key={p.id}
                      onClick={() => setSelectedPersona(p)}
                      className={`p-4 rounded-2xl border cursor-pointer transition-all ${
                        isSelected
                          ? 'bg-cyan-950/50 border-cyan-400 shadow-md shadow-cyan-500/20 ring-1 ring-cyan-400/40'
                          : 'bg-slate-800/60 hover:bg-slate-800 border-slate-700/80 hover:border-slate-600'
                      }`}
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <div className={`p-2 rounded-xl ${isSelected ? 'bg-cyan-500 text-slate-950' : 'bg-slate-700 text-slate-300'}`}>
                          <Icon className="w-4 h-4" />
                        </div>
                        <span className="text-xs font-bold text-white">{p.title}</span>
                      </div>
                      <p className="text-[11px] text-slate-400 leading-snug">{p.desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* STEP 2: Budget Preference */}
          {step === 2 && (
            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-bold text-white">What is your target budget range?</h4>
                <p className="text-xs text-slate-400">We'll filter the database to match your price point</p>
              </div>

              <div className="space-y-2.5">
                {BUDGETS.map(b => {
                  const isSelected = selectedBudget?.id === b.id;
                  return (
                    <div
                      key={b.id}
                      onClick={() => setSelectedBudget(b)}
                      className={`p-3.5 rounded-xl border cursor-pointer flex items-center justify-between transition-all ${
                        isSelected
                          ? 'bg-cyan-950/50 border-cyan-400 shadow-md shadow-cyan-500/20'
                          : 'bg-slate-800/60 hover:bg-slate-800 border-slate-700/80'
                      }`}
                    >
                      <span className="text-xs font-bold text-white">{b.label}</span>
                      {isSelected && <Check className="w-4 h-4 text-cyan-400" />}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* STEP 3: Must-Have Capabilities */}
          {step === 3 && (
            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-bold text-white">Any specific must-have capabilities?</h4>
                <p className="text-xs text-slate-400">Pick any additional features you can't live without</p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {MUST_HAVES.map(feat => {
                  const isChecked = selectedMustHaves.includes(feat);
                  return (
                    <button
                      key={feat}
                      onClick={() => toggleMustHave(feat)}
                      className={`p-3 rounded-xl border text-left text-xs font-bold transition-all flex flex-col justify-between h-20 ${
                        isChecked
                          ? 'bg-cyan-500/20 border-cyan-400 text-cyan-200 ring-1 ring-cyan-400/40'
                          : 'bg-slate-800/60 border-slate-700 text-slate-300 hover:text-white'
                      }`}
                    >
                      <span>{feat}</span>
                      <div className="self-end">
                        {isChecked ? <Check className="w-4 h-4 text-cyan-400" /> : <div className="w-4 h-4 rounded border border-slate-600" />}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

        </div>

        {/* Footer Navigation */}
        <div className="px-6 py-4 border-t border-slate-800 bg-slate-900/90 flex items-center justify-between">
          {step > 1 ? (
            <button
              onClick={() => setStep(step - 1)}
              className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-400 hover:text-white"
            >
              Back
            </button>
          ) : <div />}

          {step < 3 ? (
            <button
              onClick={() => setStep(step + 1)}
              disabled={step === 1 && !selectedPersona}
              className="flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-xs font-bold bg-cyan-500 hover:bg-cyan-400 text-slate-950 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span>Continue</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              onClick={handleFinish}
              className="flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs font-bold bg-gradient-to-r from-cyan-400 to-indigo-400 hover:from-cyan-300 hover:to-indigo-300 text-slate-950 shadow-lg shadow-cyan-500/25"
            >
              <Sparkles className="w-4 h-4 fill-slate-950" />
              <span>Discover Matching Tech</span>
            </button>
          )}
        </div>

      </div>

    </div>
  );
}
