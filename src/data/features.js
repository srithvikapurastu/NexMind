export const FEATURE_GROUPS = [
  {
    id: 'connectivity',
    title: 'Connectivity & Network',
    icon: 'Wifi',
    color: '#3b82f6',
    features: [
      { id: '5G', name: '5G Cellular', desc: 'Ultra-fast next-gen cellular connection' },
      { id: '4G', name: '4G LTE', desc: 'Reliable high-speed 4G data support' },
      { id: 'Wi-Fi', name: 'Wi-Fi', desc: 'High-speed wireless local networking' },
      { id: 'Bluetooth', name: 'Bluetooth', desc: 'Low-latency wireless device pairing' },
      { id: 'NFC', name: 'NFC', desc: 'Contactless payments & quick tap pairing' },
      { id: 'GPS', name: 'GPS', desc: 'Accurate satellite positioning & tracking' },
      { id: 'USB-C', name: 'USB-C', desc: 'Universal high-speed data & charging port' },
      { id: 'HDMI', name: 'HDMI', desc: 'High-definition digital video & audio output' },
      { id: 'Smart Home Connectivity', name: 'Smart Home (Matter/Zigbee)', desc: 'Interoperable IoT & smart ecosystem sync' },
    ]
  },
  {
    id: 'display',
    title: 'Display & Visuals',
    icon: 'Monitor',
    color: '#8b5cf6',
    features: [
      { id: 'AMOLED Display', name: 'AMOLED / OLED Display', desc: 'Infinite contrast and ultra-deep pitch blacks' },
      { id: 'High Refresh Rate', name: 'High Refresh Rate (120Hz+)', desc: 'Silky smooth animation & responsive gaming' },
      { id: 'Touchscreen', name: 'Touchscreen', desc: 'Direct multi-touch finger & stylus support' },
      { id: '4K Video', name: '4K Video / Resolution', desc: 'Ultra High Definition crystal-clear clarity' },
    ]
  },
  {
    id: 'performance',
    title: 'Performance & Hardware',
    icon: 'Cpu',
    color: '#ec4899',
    features: [
      { id: 'AI Features', name: 'AI Features / NPU', desc: 'On-device neural processing & smart AI tools' },
      { id: 'High RAM', name: 'High RAM (16GB+)', desc: 'Flawless heavy multitasking & background apps' },
      { id: 'Large Storage', name: 'Large Storage (512GB+)', desc: 'Abundant capacity for apps, media, and files' },
      { id: 'Expandable Storage', name: 'Expandable Storage (MicroSD)', desc: 'Flexible card slot for storage expansion' },
      { id: 'Gaming Support', name: 'Gaming Optimization', desc: 'Dedicated GPU, ray-tracing or Game Mode' },
    ]
  },
  {
    id: 'battery',
    title: 'Battery & Power',
    icon: 'Zap',
    color: '#eab308',
    features: [
      { id: 'Fast Charging', name: 'Fast Charging (45W+)', desc: 'Rapid top-up to full battery in minutes' },
      { id: 'Wireless Charging', name: 'Wireless Charging (Qi/MagSafe)', desc: 'Effortless cable-free drop and charge' },
      { id: 'Long Battery Life', name: 'Long Battery Life (24h+)', desc: 'Extended multi-day or all-day endurance' },
      { id: 'Energy Efficient', name: 'Energy Efficient (5-Star / Eco)', desc: 'Low power consumption & green certified' },
    ]
  },
  {
    id: 'camera',
    title: 'Camera & Imaging',
    icon: 'Camera',
    color: '#06b6d4',
    features: [
      { id: 'High-Resolution Camera', name: 'High-Res Camera (50MP+)', desc: 'Ultra-detailed sensor for photography' },
      { id: 'Dual Camera', name: 'Dual Camera System', desc: 'Wide + Ultra-wide optical versatility' },
      { id: 'Triple Camera', name: 'Triple Camera System', desc: 'Wide, Ultra-wide & Optical Telephoto zoom' },
    ]
  },
  {
    id: 'smart-audio',
    title: 'Smart & Audio',
    icon: 'Mic',
    color: '#10b981',
    features: [
      { id: 'Voice Assistant', name: 'Voice Assistant Built-in', desc: 'Alexa, Google Assistant or Siri support' },
      { id: 'Active Noise Cancellation', name: 'Active Noise Cancellation (ANC)', desc: 'Acoustic background ambient noise blocking' },
    ]
  },
  {
    id: 'security-durability',
    title: 'Security & Durability',
    icon: 'ShieldCheck',
    color: '#f97316',
    features: [
      { id: 'Fingerprint Sensor', name: 'Fingerprint Sensor', desc: 'Biometric fingerprint scanner' },
      { id: 'Face Unlock', name: 'Face Unlock / 3D IR', desc: 'Instant facial biometric security' },
      { id: 'Water Resistance', name: 'Water Resistance (IP68/IPX4)', desc: 'Protection against rain, splashes and submersion' },
      { id: 'Dust Resistance', name: 'Dust Resistance', desc: 'Sealed enclosure against particles & sand' },
    ]
  }
];

export const ALL_FEATURES = FEATURE_GROUPS.flatMap(g => g.features.map(f => ({ ...f, group: g.id, groupTitle: g.title, groupColor: g.color })));

export const FEATURE_PRESETS = [
  {
    id: 'ultimate-gamer',
    title: '🎮 Ultimate Gamer',
    desc: 'High refresh rates, dedicated gaming hardware, 4K visuals, and ultra-fast Wi-Fi.',
    features: ['High Refresh Rate', 'Gaming Support', '4K Video', 'Wi-Fi', 'HDMI']
  },
  {
    id: 'smart-home-hub',
    title: '🏡 Smart Home Sync',
    desc: 'Voice control, seamless Wi-Fi + Bluetooth connectivity, and ecosystem integration.',
    features: ['Voice Assistant', 'Wi-Fi', 'Bluetooth', 'Smart Home Connectivity']
  },
  {
    id: 'creator-pro',
    title: '📸 Creator & Pro Suite',
    desc: 'High-res optics, 4K video, massive storage, high RAM, and AI acceleration.',
    features: ['4K Video', 'High-Resolution Camera', 'Large Storage', 'High RAM', 'AI Features']
  },
  {
    id: 'road-warrior',
    title: '✈️ Road Warrior / Travel',
    desc: 'Long battery life, rapid fast charging, 5G wireless connectivity, and rugged water resistance.',
    features: ['Long Battery Life', 'Fast Charging', '5G', 'Water Resistance']
  },
  {
    id: 'audiophile',
    title: '🎧 Wireless Audio & Immersion',
    desc: 'Active noise cancellation, low-latency Bluetooth, long battery, and USB-C.',
    features: ['Active Noise Cancellation', 'Bluetooth', 'Long Battery Life', 'USB-C']
  }
];
