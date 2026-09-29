export const PRODUCTS = [
  // ==================== SMARTPHONES ====================
  {
    id: 'phone-s25-ultra',
    name: 'Samsung Galaxy S25 Ultra',
    brand: 'Samsung',
    category: 'smartphones',
    categoryName: 'Smartphones',
    price: 1299,
    originalPrice: 1399,
    rating: 4.9,
    reviewCount: 1420,
    image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=800&q=80',
    tagline: 'Titanium AI Flagship with 200MP Quad Optics & Built-in S-Pen',
    features: [
      '5G', 'Wi-Fi', 'Bluetooth', 'NFC', 'GPS', 'AI Features', 'Voice Assistant',
      'Fast Charging', 'Wireless Charging', 'Long Battery Life', 'Water Resistance',
      'Dust Resistance', 'AMOLED Display', 'High Refresh Rate', 'High-Resolution Camera',
      'Triple Camera', '4K Video', 'Fingerprint Sensor', 'Face Unlock', 'USB-C',
      'Large Storage', 'High RAM', 'Touchscreen', 'Gaming Support', 'Energy Efficient'
    ],
    specs: {
      display: '6.8" Dynamic AMOLED 2X, 120Hz LTPO, 3120x1440, Gorilla Armor',
      processor: 'Snapdragon 8 Elite (3nm) with Next-Gen NPU',
      ram: '16GB LPDDR5X',
      storage: '512GB UFS 4.0',
      battery: '5,000 mAh with 45W Fast Charging & 15W Wireless Qi2',
      camera: '200MP Wide + 50MP Periscope 5x + 50MP Tele 3x + 50MP Ultrawide',
      connectivity: '5G Sub-6/mmWave, Wi-Fi 7, Bluetooth 5.4, UWB, NFC, USB-C 3.2',
      dimensions: '162.8 x 77.6 x 8.2 mm (219g)',
      os: 'Android 15 (One UI 7) with 7 Years OS Updates',
      warranty: '2 Years Manufacturer Warranty'
    },
    pros: [
      'Industry-leading 200MP camera system with exceptional 5x/10x zoom',
      'Anti-reflective Gorilla Armor glass eliminates glare',
      'Integrated S-Pen stylus with zero-latency handwriting',
      'Galaxy AI on-device suite for live voice translation and photo editing'
    ],
    cons: [
      'Substantial weight and large form factor',
      'Fast charging capped at 45W compared to some rivals'
    ]
  },
  {
    id: 'phone-iphone-16-pro',
    name: 'Apple iPhone 16 Pro Max',
    brand: 'Apple',
    category: 'smartphones',
    categoryName: 'Smartphones',
    price: 1199,
    originalPrice: 1299,
    rating: 4.8,
    reviewCount: 2310,
    image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=800&q=80',
    tagline: 'Grade 5 Titanium with Apple Intelligence & Camera Control',
    features: [
      '5G', 'Wi-Fi', 'Bluetooth', 'NFC', 'GPS', 'AI Features', 'Voice Assistant',
      'Fast Charging', 'Wireless Charging', 'Long Battery Life', 'Water Resistance',
      'Dust Resistance', 'AMOLED Display', 'High Refresh Rate', 'High-Resolution Camera',
      'Triple Camera', '4K Video', 'Face Unlock', 'USB-C', 'Large Storage',
      'High RAM', 'Touchscreen', 'Gaming Support'
    ],
    specs: {
      display: '6.9" Super Retina XDR OLED, 120Hz ProMotion, 2000 nits peak',
      processor: 'Apple A18 Pro (3nm) with 6-core GPU and 16-core NPU',
      ram: '8GB Unified Memory',
      storage: '256GB / 512GB NVMe',
      battery: '4,685 mAh (Up to 33 hours video playback), MagSafe 25W',
      camera: '48MP Fusion + 48MP Ultra-Wide + 12MP 5x Telephoto',
      connectivity: '5G, Wi-Fi 7, Bluetooth 5.3, Thread, UWB 2nd Gen, USB-C 3.2 Gen 2 (10Gbps)',
      dimensions: '163 x 77.6 x 8.25 mm (227g)',
      os: 'iOS 18 with Apple Intelligence',
      warranty: '1 Year AppleCare Warranty'
    },
    pros: [
      'Sensational 4K 120fps Dolby Vision video recording',
      'Dedicated tactile Camera Control capacitive button',
      'Unmatched battery efficiency and A18 Pro console-level gaming',
      'Class-leading build with Grade 5 micro-blasted titanium'
    ],
    cons: [
      'No optical fingerprint reader (Face ID only)',
      'Base model starts at 256GB'
    ]
  },
  {
    id: 'phone-pixel-9-pro',
    name: 'Google Pixel 9 Pro XL',
    brand: 'Google',
    category: 'smartphones',
    categoryName: 'Smartphones',
    price: 1099,
    originalPrice: 1199,
    rating: 4.7,
    reviewCount: 980,
    image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=800&q=80',
    tagline: 'The Ultimate Gemini AI Smartphone with Pro Camera System',
    features: [
      '5G', 'Wi-Fi', 'Bluetooth', 'NFC', 'GPS', 'AI Features', 'Voice Assistant',
      'Fast Charging', 'Wireless Charging', 'Long Battery Life', 'Water Resistance',
      'Dust Resistance', 'AMOLED Display', 'High Refresh Rate', 'High-Resolution Camera',
      'Triple Camera', '4K Video', 'Fingerprint Sensor', 'Face Unlock', 'USB-C',
      'Large Storage', 'High RAM', 'Touchscreen', 'Gaming Support'
    ],
    specs: {
      display: '6.8" Super Actua OLED, 1-120Hz LTPO, 3000 nits peak',
      processor: 'Google Tensor G4 with Titan M2 security coprocessor',
      ram: '16GB LPDDR5X',
      storage: '512GB UFS 3.1',
      battery: '5,060 mAh with 37W Wired & 23W Wireless',
      camera: '50MP Octa PD Wide + 48MP Quad PD Ultrawide + 48MP Quad PD 5x Tele',
      connectivity: '5G, Wi-Fi 7, Bluetooth 5.3, UWB, NFC, USB-C 3.2',
      dimensions: '162.8 x 76.6 x 8.5 mm (221g)',
      os: 'Android 15 (7 Years Feature Drops & Security)',
      warranty: '2 Years Manufacturer Warranty'
    },
    pros: [
      'Native Gemini Live multi-modal conversational AI built-in',
      'Best-in-class computational still photography & Add Me feature',
      'Ultra-bright 3000 nits Actua display',
      'Generous 16GB RAM for long-term AI capabilities'
    ],
    cons: [
      'Tensor G4 peak raw benchmark speeds trail Snapdragon 8 Elite',
      'Slightly slower charging curve'
    ]
  },
  {
    id: 'phone-oneplus-13',
    name: 'OnePlus 13',
    brand: 'OnePlus',
    category: 'smartphones',
    categoryName: 'Smartphones',
    price: 899,
    originalPrice: 999,
    rating: 4.8,
    reviewCount: 640,
    image: 'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=800&q=80',
    tagline: 'Speed Redefined: Snapdragon 8 Elite with 100W SuperVOOC & 6000mAh Glacier Battery',
    features: [
      '5G', '4G', 'Wi-Fi', 'Bluetooth', 'NFC', 'GPS', 'AI Features', 'Voice Assistant',
      'Fast Charging', 'Wireless Charging', 'Long Battery Life', 'Water Resistance',
      'Dust Resistance', 'AMOLED Display', 'High Refresh Rate', 'High-Resolution Camera',
      'Triple Camera', '4K Video', 'Fingerprint Sensor', 'Face Unlock', 'USB-C',
      'Large Storage', 'High RAM', 'Touchscreen', 'Gaming Support'
    ],
    specs: {
      display: '6.82" 2K Oriental OLED, 120Hz LTPO 4.0, 4500 nits peak',
      processor: 'Snapdragon 8 Elite',
      ram: '16GB LPDDR5X',
      storage: '512GB UFS 4.0',
      battery: '6,000 mAh Glacier Battery with 100W Wired & 50W Wireless',
      camera: '50MP Sony LYT-808 + 50MP 3x Periscope + 50MP Ultrawide (Hasselblad)',
      connectivity: '5G, Wi-Fi 7, Bluetooth 5.4, NFC, IR Blaster, USB-C 3.2',
      dimensions: '162.9 x 76.5 x 8.5 mm (213g)',
      os: 'OxygenOS 15 (Android 15)',
      warranty: '2 Years Manufacturer Warranty'
    },
    pros: [
      'Monumental 6,000 mAh battery with blazingly fast 100W charging (0-100 in 36 mins)',
      'IP69 extreme water and high-pressure steam resistance',
      'Hasselblad natural color tuning',
      'Outstanding price-to-performance ratio'
    ],
    cons: [
      'No expandable storage card slot',
      'Curved glass screen edges may not appeal to all'
    ]
  },
  {
    id: 'phone-nothing-2a',
    name: 'Nothing Phone (2a) Plus',
    brand: 'Nothing',
    category: 'smartphones',
    categoryName: 'Smartphones',
    price: 399,
    originalPrice: 449,
    rating: 4.5,
    reviewCount: 520,
    image: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=800&q=80',
    tagline: 'Iconic Glyph Interface with Dual 50MP Cameras & Clean Nothing OS',
    features: [
      '5G', '4G', 'Wi-Fi', 'Bluetooth', 'NFC', 'GPS', 'Voice Assistant',
      'Fast Charging', 'Long Battery Life', 'Water Resistance', 'Dust Resistance',
      'AMOLED Display', 'High Refresh Rate', 'High-Resolution Camera', 'Dual Camera',
      '4K Video', 'Fingerprint Sensor', 'Face Unlock', 'USB-C', 'Touchscreen',
      'Gaming Support'
    ],
    specs: {
      display: '6.7" Flexible AMOLED, 120Hz, 1300 nits, HDR10+',
      processor: 'MediaTek Dimensity 7350 Pro 5G (4nm)',
      ram: '12GB RAM Booster',
      storage: '256GB Storage',
      battery: '5,000 mAh with 50W Fast Charging',
      camera: '50MP Main OIS + 50MP Ultra-Wide + 50MP Selfie',
      connectivity: '5G Dual SIM, Wi-Fi 6, Bluetooth 5.3, NFC, USB-C',
      dimensions: '161.7 x 76.3 x 8.5 mm (190g)',
      os: 'Nothing OS 2.6 (Android 14)',
      warranty: '1 Year Warranty'
    },
    pros: [
      'Unique transparent industrial aesthetic with Glyph notification lights',
      'Clean bloatware-free operating system experience',
      '50MP selfie camera captures outstanding detail',
      'Great battery longevity'
    ],
    cons: [
      'No wireless charging',
      'No telephoto zoom lens'
    ]
  },
  {
    id: 'phone-galaxy-a55',
    name: 'Samsung Galaxy A55 5G',
    brand: 'Samsung',
    category: 'smartphones',
    categoryName: 'Smartphones',
    price: 449,
    originalPrice: 499,
    rating: 4.6,
    reviewCount: 890,
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80',
    tagline: 'Premium Metal Frame with MicroSD Slot, IP67 and Super AMOLED',
    features: [
      '5G', '4G', 'Wi-Fi', 'Bluetooth', 'NFC', 'GPS', 'Voice Assistant',
      'Fast Charging', 'Long Battery Life', 'Water Resistance', 'Dust Resistance',
      'AMOLED Display', 'High Refresh Rate', 'High-Resolution Camera', 'Triple Camera',
      '4K Video', 'Fingerprint Sensor', 'Face Unlock', 'USB-C', 'Expandable Storage',
      'Touchscreen'
    ],
    specs: {
      display: '6.6" Super AMOLED, 120Hz, 1000 nits Vision Booster',
      processor: 'Samsung Exynos 1480 with AMD Xclipse 530 GPU',
      ram: '8GB RAM',
      storage: '256GB (Expandable up to 1TB via MicroSD)',
      battery: '5,000 mAh with 25W Charging',
      camera: '50MP OIS Main + 12MP Ultrawide + 5MP Macro',
      connectivity: '5G, Wi-Fi 6, Bluetooth 5.3, NFC, USB-C 2.0',
      dimensions: '161.1 x 77.4 x 8.2 mm (213g)',
      os: 'One UI 6.1 (Android 14, 4 OS upgrades)',
      warranty: '1 Year Warranty'
    },
    pros: [
      'MicroSD expandable storage support up to 1TB',
      'IP67 water and dust resistance rating',
      'Premium metal rail chassis build quality',
      'Vibrant Samsung Super AMOLED panel'
    ],
    cons: [
      '25W charging is relatively modest',
      'Camera bump slightly thick'
    ]
  },

  // ==================== LAPTOPS ====================
  {
    id: 'laptop-macbook-pro-16',
    name: 'Apple MacBook Pro 16" (M4 Max)',
    brand: 'Apple',
    category: 'laptops',
    categoryName: 'Laptops',
    price: 3499,
    originalPrice: 3699,
    rating: 4.9,
    reviewCount: 750,
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80',
    tagline: 'Extreme Pro Workstation with M4 Max, Nano-Texture Liquid Retina XDR',
    features: [
      'Wi-Fi', 'Bluetooth', 'AI Features', 'Voice Assistant', 'Fast Charging',
      'Long Battery Life', 'High Refresh Rate', '4K Video', 'Fingerprint Sensor',
      'USB-C', 'HDMI', 'Large Storage', 'High RAM', 'Gaming Support', 'Energy Efficient'
    ],
    specs: {
      display: '16.2" Liquid Retina XDR (3456x2234), 120Hz ProMotion, 1600 nits HDR',
      processor: 'Apple M4 Max (16-core CPU, 40-core GPU, 16-core Neural Engine)',
      ram: '64GB Unified Memory (546 GB/s bandwidth)',
      storage: '1TB PCIe 4.0 SSD',
      battery: '100Wh (Up to 24 hours battery life), 140W USB-C GaN Fast Charge',
      camera: '12MP Center Stage Camera with Desk View support',
      connectivity: 'Wi-Fi 7, Bluetooth 5.3, 3x Thunderbolt 5 (USB-C), HDMI 2.1, SDXC Slot, MagSafe 3',
      dimensions: '355.7 x 248.1 x 16.8 mm (2.14 kg)',
      os: 'macOS Sequoia with Apple Intelligence',
      warranty: '1 Year Apple Limited Warranty'
    },
    pros: [
      'Unprecedented CPU and GPU compute efficiency on battery power',
      'Thunderbolt 5 ports with up to 120Gbps throughput',
      'Sensational 6-speaker spatial audio sound system with studio mics',
      'Over 22+ hours of real-world battery endurance'
    ],
    cons: [
      'High premium price tag',
      'No touch screen or pen support'
    ]
  },
  {
    id: 'laptop-rog-zephyrus-g16',
    name: 'ASUS ROG Zephyrus G16 (OLED)',
    brand: 'ASUS',
    category: 'laptops',
    categoryName: 'Laptops',
    price: 2299,
    originalPrice: 2499,
    rating: 4.8,
    reviewCount: 420,
    image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=800&q=80',
    tagline: 'Ultra-slim CNC Aluminum Gaming Laptop with 240Hz ROG Nebula OLED',
    features: [
      'Wi-Fi', 'Bluetooth', 'AI Features', 'Voice Assistant', 'Fast Charging',
      'AMOLED Display', 'High Refresh Rate', '4K Video', 'Face Unlock', 'USB-C',
      'HDMI', 'Large Storage', 'High RAM', 'Gaming Support'
    ],
    specs: {
      display: '16.0" 2.5K (2560x1600) ROG Nebula OLED, 240Hz/0.2ms, G-Sync, 100% DCI-P3',
      processor: 'Intel Core Ultra 9 185H (16 Cores, 22 Threads, Intel AI Boost NPU)',
      ram: '32GB LPDDR5X-7467 MHz',
      storage: '2TB PCIe 4.0 NVMe M.2 SSD',
      battery: '90Wh Battery with 240W Adapter + 100W USB-C PD Charging',
      camera: '1080p FHD IR Camera with Windows Hello Face Unlock',
      connectivity: 'Wi-Fi 7, Bluetooth 5.4, 1x Thunderbolt 4, 1x USB-C 3.2 Gen 2, 2x USB-A, HDMI 2.1, SD Express 7.0',
      dimensions: '354 x 246 x 14.9 mm (1.85 kg)',
      os: 'Windows 11 Home',
      warranty: '2 Years ASUS Global Warranty'
    },
    pros: [
      'Breathtaking 240Hz 0.2ms OLED panel for competitive eSports and color grading',
      'Ultra-thin 1.49cm unibody CNC aluminum chassis with Slash Lighting',
      'NVIDIA GeForce RTX 4080 Laptop GPU with DLSS 3.5',
      'Dual speaker woofers with Dolby Atmos deep bass'
    ],
    cons: [
      'RAM is soldered to the motherboard',
      'Fans get audible under prolonged max GPU load'
    ]
  },
  {
    id: 'laptop-dell-xps-16',
    name: 'Dell XPS 16 (9640)',
    brand: 'Dell',
    category: 'laptops',
    categoryName: 'Laptops',
    price: 2199,
    originalPrice: 2399,
    rating: 4.6,
    reviewCount: 310,
    image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80',
    tagline: 'Futuristic Minimalist Laptop with 4K+ OLED Touchscreen & Zero-Lattice Keyboard',
    features: [
      'Wi-Fi', 'Bluetooth', 'AI Features', 'Voice Assistant', 'Fast Charging',
      'Long Battery Life', 'AMOLED Display', 'Touchscreen', '4K Video',
      'Fingerprint Sensor', 'Face Unlock', 'USB-C', 'Large Storage', 'High RAM',
      'Gaming Support'
    ],
    specs: {
      display: '16.3" 4K+ (3840x2400) InfinityEdge OLED Touch, 400 nits, Dolby Vision',
      processor: 'Intel Core Ultra 7 155H with Copilot+ AI acceleration',
      ram: '32GB LPDDR5X',
      storage: '1TB PCIe 4.0 SSD',
      battery: '99.5Wh Battery with 130W USB-C Fast Charger',
      camera: '1080p FHD RGB+IR webcam with Windows Hello',
      connectivity: 'Wi-Fi 7, Bluetooth 5.4, 3x Thunderbolt 4 / USB-C, MicroSD slot, 3.5mm jack',
      dimensions: '358.2 x 240 x 18.7 mm (2.13 kg)',
      os: 'Windows 11 Pro',
      warranty: '1 Year Dell Onsite Service'
    },
    pros: [
      'Sensational 4K+ OLED touch panel with bezel-less InfinityEdge design',
      'Seamless glass haptic touchpad and illuminated capacitive function row',
      'Dedicated NVIDIA GeForce RTX 4060 graphics',
      'Quad-speaker 10W array with Waves MaxxAudio'
    ],
    cons: [
      'Only USB-C ports (requires dongle for USB-A/HDMI)',
      'Touch capacitive function row takes time to adapt'
    ]
  },
  {
    id: 'laptop-lenovo-yoga-9i',
    name: 'Lenovo Yoga 9i 2-in-1 (Gen 9)',
    brand: 'Lenovo',
    category: 'laptops',
    categoryName: 'Laptops',
    price: 1449,
    originalPrice: 1599,
    rating: 4.7,
    reviewCount: 380,
    image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80',
    tagline: 'Convertible 2-in-1 with 360° Bowers & Wilkins Rotating Soundbar & PureSight OLED',
    features: [
      'Wi-Fi', 'Bluetooth', 'AI Features', 'Voice Assistant', 'Fast Charging',
      'Long Battery Life', 'AMOLED Display', 'High Refresh Rate', 'Touchscreen',
      '4K Video', 'Fingerprint Sensor', 'Face Unlock', 'USB-C', 'Large Storage',
      'High RAM', 'Energy Efficient'
    ],
    specs: {
      display: '14.0" 2.8K (2880x1800) PureSight OLED 120Hz Touch with Active Pen 2',
      processor: 'Intel Core Ultra 7 155H (16 Cores, Intel Arc Graphics, AI NPU)',
      ram: '16GB LPDDR5X',
      storage: '1TB PCIe 4.0 SSD',
      battery: '75Wh (Up to 14 hours), 65W USB-C Rapid Charge Boost',
      camera: '5MP IR Camera with privacy shutter',
      connectivity: 'Wi-Fi 6E, Bluetooth 5.3, 2x Thunderbolt 4, 1x USB-C 3.2, 1x USB-A 3.2',
      dimensions: '315 x 220 x 15.9 mm (1.35 kg)',
      os: 'Windows 11 Home',
      warranty: '2 Years Premium Care Warranty'
    },
    pros: [
      'Patented 360-degree rotating Bowers & Wilkins soundbar hinge',
      'Flexible 2-in-1 laptop, tent, and tablet modes with included precision stylus',
      'Comfort edge ergonomic rounded metal edges',
      'Gorgeous 120Hz vibrant OLED touchscreen'
    ],
    cons: [
      'Integrated graphics not suited for heavy 3D AAA gaming',
      'Glossy glass screen reflects under harsh outdoor sun'
    ]
  },
  {
    id: 'laptop-hp-spectre-x360',
    name: 'HP Spectre x360 16"',
    brand: 'HP',
    category: 'laptops',
    categoryName: 'Laptops',
    price: 1699,
    originalPrice: 1899,
    rating: 4.7,
    reviewCount: 290,
    image: 'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&fit=crop&w=800&q=80',
    tagline: 'Gem-cut Luxury 2-in-1 with 9MP AI Webcam & 2.8K OLED Display',
    features: [
      'Wi-Fi', 'Bluetooth', 'AI Features', 'Voice Assistant', 'Fast Charging',
      'Long Battery Life', 'AMOLED Display', 'High Refresh Rate', 'Touchscreen',
      '4K Video', 'Fingerprint Sensor', 'Face Unlock', 'USB-C', 'HDMI',
      'Large Storage', 'High RAM'
    ],
    specs: {
      display: '16.0" 2.8K (2880x1800) OLED 120Hz Touch, IMAX Enhanced certified',
      processor: 'Intel Core Ultra 7 155H + Intel Arc Graphics',
      ram: '32GB LPDDR5X',
      storage: '1TB PCIe Gen4 SSD',
      battery: '83Wh (Up to 15 hours battery life), 100W USB-C Fast Charger',
      camera: '9MP AI Intelligent Camera with auto-framing and walk-away lock',
      connectivity: 'Wi-Fi 7, Bluetooth 5.4, 2x Thunderbolt 4, 1x USB-A, HDMI 2.1, SD Reader',
      dimensions: '356.8 x 245.5 x 19.8 mm (2.07 kg)',
      os: 'Windows 11 Home',
      warranty: '1 Year HP Global Warranty'
    },
    pros: [
      'High-grade 9MP camera with hardware AI features for business video meetings',
      'Haptic trackpad with crisp click feedback anywhere on glass surface',
      'Stunning IMAX Enhanced OLED panel with rich color profiles',
      'Includes HP Rechargeable MPP 2.0 Tilt Pen'
    ],
    cons: [
      'Slightly heavier than standard ultrabooks',
      'Thermal fans spin up under heavy multitasking'
    ]
  },

  // ==================== TABLETS ====================
  {
    id: 'tablet-ipad-pro-m4',
    name: 'Apple iPad Pro 13" (M4)',
    brand: 'Apple',
    category: 'tablets',
    categoryName: 'Tablets',
    price: 1299,
    originalPrice: 1399,
    rating: 4.9,
    reviewCount: 1100,
    image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=800&q=80',
    tagline: 'Ultra-thin 5.1mm Design with Breakthrough Tandem OLED Ultra Retina XDR',
    features: [
      '5G', 'Wi-Fi', 'Bluetooth', 'NFC', 'GPS', 'AI Features', 'Voice Assistant',
      'Fast Charging', 'Long Battery Life', 'AMOLED Display', 'High Refresh Rate',
      '4K Video', 'Face Unlock', 'USB-C', 'Large Storage', 'High RAM',
      'Touchscreen', 'Gaming Support'
    ],
    specs: {
      display: '13.0" Tandem OLED Ultra Retina XDR (2752x2064), 10-120Hz ProMotion, 1600 nits HDR',
      processor: 'Apple M4 chip (9/10-core CPU, 10-core GPU with hardware ray tracing, 16-core Neural Engine)',
      ram: '8GB / 16GB Unified Memory',
      storage: '256GB / 512GB / 1TB / 2TB',
      battery: '38.99 Wh (Up to 10 hours web surfing), Fast Charging via 30W+ adapter',
      camera: '12MP Wide back camera with LiDAR Scanner + Landscape 12MP Center Stage Ultra Wide',
      connectivity: 'Wi-Fi 6E, 5G Cellular (eSIM), Bluetooth 5.3, Thunderbolt / USB 4 (40Gbps)',
      dimensions: '281.6 x 215.5 x 5.1 mm (579g)',
      os: 'iPadOS 18 with Apple Intelligence',
      warranty: '1 Year AppleCare Warranty'
    },
    pros: [
      'World’s thinnest Apple product at just 5.1mm',
      'Revolutionary Tandem OLED provides unmatched HDR contrast and peak brightness',
      'M4 processor delivers desktop workstation rendering power',
      'Compatible with Apple Pencil Pro with haptic squeeze gestures'
    ],
    cons: [
      'Magic Keyboard and Pencil Pro sold separately',
      'iPadOS multitasking still distinct from macOS'
    ]
  },
  {
    id: 'tablet-galaxy-tab-s10-ultra',
    name: 'Samsung Galaxy Tab S10 Ultra',
    brand: 'Samsung',
    category: 'tablets',
    categoryName: 'Tablets',
    price: 1199,
    originalPrice: 1299,
    rating: 4.8,
    reviewCount: 620,
    image: 'https://images.unsplash.com/photo-1561154464-82e9adf32764?auto=format&fit=crop&w=800&q=80',
    tagline: 'Massive 14.6" Anti-Reflective Dynamic AMOLED 2X with S-Pen & Galaxy AI',
    features: [
      '5G', 'Wi-Fi', 'Bluetooth', 'GPS', 'AI Features', 'Voice Assistant',
      'Fast Charging', 'Long Battery Life', 'Water Resistance', 'Dust Resistance',
      'AMOLED Display', 'High Refresh Rate', 'Dual Camera', '4K Video',
      'Fingerprint Sensor', 'Face Unlock', 'USB-C', 'Expandable Storage',
      'Large Storage', 'High RAM', 'Touchscreen', 'Gaming Support'
    ],
    specs: {
      display: '14.6" Dynamic AMOLED 2X (2960x1848), 120Hz, Anti-Reflective coating',
      processor: 'MediaTek Dimensity 9300+ Flagship 4nm Processor',
      ram: '12GB / 16GB RAM',
      storage: '512GB (Expandable up to 1.5TB via MicroSD card)',
      battery: '11,200 mAh with 45W Fast Charging',
      camera: '13MP + 8MP Ultra-Wide rear + Dual 12MP front cameras',
      connectivity: 'Wi-Fi 7, 5G, Bluetooth 5.3, USB-C 3.2 Gen 1, Samsung DeX wireless',
      dimensions: '326.4 x 208.6 x 5.4 mm (718g)',
      os: 'Android 14 (One UI 6.1 with DeX Desktop mode)',
      warranty: '2 Years Manufacturer Warranty'
    },
    pros: [
      'Included S-Pen stylus in the box with low-latency drawing',
      'Full IP68 water and dust resistance on both tablet and S-Pen',
      'Samsung DeX provides true desktop windowing workflow with external monitors',
      'MicroSD slot allows effortless storage expansion'
    ],
    cons: [
      'Gigantic 14.6" screen is heavy for one-handed reading',
      '45W charger not included in retail package'
    ]
  },
  {
    id: 'tablet-surface-pro-11',
    name: 'Microsoft Surface Pro 11 Copilot+ PC',
    brand: 'Microsoft',
    category: 'tablets',
    categoryName: 'Tablets',
    price: 1399,
    originalPrice: 1499,
    rating: 4.7,
    reviewCount: 450,
    image: 'https://images.unsplash.com/photo-1585790050230-5dd28404ccb9?auto=format&fit=crop&w=800&q=80',
    tagline: 'Snapdragon X Elite 2-in-1 Tablet PC with 45 TOPS NPU & OLED Display',
    features: [
      '5G', 'Wi-Fi', 'Bluetooth', 'NFC', 'GPS', 'AI Features', 'Voice Assistant',
      'Fast Charging', 'Long Battery Life', 'AMOLED Display', 'High Refresh Rate',
      '4K Video', 'Face Unlock', 'USB-C', 'Large Storage', 'High RAM',
      'Touchscreen', 'Energy Efficient'
    ],
    specs: {
      display: '13.0" PixelSense Flow OLED (2880x1920), 120Hz Dynamic Refresh, HDR',
      processor: 'Qualcomm Snapdragon X Elite (12 Cores, 45 TOPS Qualcomm Hexagon NPU)',
      ram: '16GB LPDDR5X',
      storage: '512GB Removable Gen4 SSD',
      battery: '53Wh (Up to 14 hours video playback), 65W Fast Charging',
      camera: 'Quad HD 1440p Front Studio Camera with AI effects + 10MP Ultra HD rear',
      connectivity: 'Wi-Fi 7, 5G Optional, Bluetooth 5.4, 2x USB-C USB4 / Thunderbolt 4',
      dimensions: '287 x 209 x 9.3 mm (895g)',
      os: 'Windows 11 Home on ARM (Copilot+ PC)',
      warranty: '1 Year Microsoft Hardware Warranty'
    },
    pros: [
      'Full desktop Windows 11 applications with exceptional ARM battery life',
      'Removable SSD hatch for effortless user storage upgrades',
      'Built-in kickstand adjusts from 0 to 165 degrees',
      'Surface Slim Pen 2 wirelessly recharges inside the Flex keyboard'
    ],
    cons: [
      'Some niche legacy x86 kernel drivers or anti-cheat engines not yet ARM native',
      'Flex Keyboard sold separately'
    ]
  },

  // ==================== SMART TVS ====================
  {
    id: 'tv-lg-g4-oled',
    name: 'LG G4 65" 4K OLED evo Smart TV',
    brand: 'LG',
    category: 'smart-tvs',
    categoryName: 'Smart TVs',
    price: 2499,
    originalPrice: 2799,
    rating: 4.9,
    reviewCount: 840,
    image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=800&q=80',
    tagline: 'Micro Lens Array OLED with α11 AI Processor 4K & 144Hz G-Sync Gaming',
    features: [
      'Wi-Fi', 'Bluetooth', 'AI Features', 'Voice Assistant', 'AMOLED Display',
      'High Refresh Rate', '4K Video', 'USB-C', 'HDMI', 'Gaming Support',
      'Energy Efficient', 'Smart Home Connectivity'
    ],
    specs: {
      display: '65" 4K OLED evo with Brightness Booster Max (MLA+), 144Hz VRR, Dolby Vision',
      processor: 'α11 AI Processor 4K with Deep Learning Super Resolution',
      audio: '60W 4.2 Channel Audio with AI Sound Pro 11.1.2 virtual upmixing',
      ports: '4x HDMI 2.1 (4K@144Hz, eARC, ALLM, VRR), 3x USB 2.0, Optical, Ethernet',
      smart_platform: 'webOS 24 with 5 Years guaranteed OS Re:New upgrades',
      smart_home: 'Apple HomeKit, AirPlay 2, Matter, Google Assistant, Amazon Alexa built-in',
      dimensions: '1441 x 826 x 24.3 mm (23.8 kg)',
      warranty: '5 Years LG Panel Warranty'
    },
    pros: [
      'Spectacular Micro Lens Array OLED panel delivers 3000 nits peak highlights',
      '4 full-bandwidth 48Gbps HDMI 2.1 ports with 144Hz PC gaming and G-Sync/FreeSync',
      'Zero-gap ultra-slim wall mount design sits flush against the wall',
      'Hands-free voice recognition with Far-Field microphones'
    ],
    cons: [
      'Wall mount included in box, but table tabletop stand sold separately',
      'Premium pricing tier'
    ]
  },
  {
    id: 'tv-samsung-s95d',
    name: 'Samsung S95D 65" Glare-Free QD-OLED TV',
    brand: 'Samsung',
    category: 'smart-tvs',
    categoryName: 'Smart TVs',
    price: 2399,
    originalPrice: 2699,
    rating: 4.9,
    reviewCount: 670,
    image: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=800&q=80',
    tagline: 'Quantum Dot OLED with Revolutionary OLED Glare-Free Matte Coating',
    features: [
      'Wi-Fi', 'Bluetooth', 'AI Features', 'Voice Assistant', 'AMOLED Display',
      'High Refresh Rate', '4K Video', 'HDMI', 'Gaming Support', 'Energy Efficient',
      'Smart Home Connectivity'
    ],
    specs: {
      display: '65" 4K Quantum Dot OLED, 144Hz refresh rate, Glare-Free Matte coating',
      processor: 'NQ4 AI Gen2 Processor with 20 Neural Networks',
      audio: '70W 4.2.2 Channel Dolby Atmos with Object Tracking Sound+ (OTS+)',
      ports: '4x HDMI 2.1 (4K@144Hz), 3x USB, One Connect Box with single invisible cable',
      smart_platform: 'Tizen OS with Samsung Gaming Hub (Xbox, GeForce NOW)',
      smart_home: 'SmartThings Hub built-in, Matter, Alexa, Bixby',
      dimensions: '1443.5 x 829.4 x 11.0 mm (18.2 kg)',
      warranty: '3 Years Samsung All-Inclusive Warranty'
    },
    pros: [
      'Groundbreaking Glare-Free finish eliminates window reflections completely',
      'Vibrant Quantum Dot pure color spectrum with 100% color volume',
      'Slim One Connect box keeps all cable clutter hidden in TV cabinet',
      'Built-in Samsung Gaming Hub streams Xbox games without console'
    ],
    cons: [
      'Does not support Dolby Vision HDR (uses HDR10+ Adaptive)',
      'One Connect cable requires careful routing'
    ]
  },
  {
    id: 'tv-sony-bravia-9',
    name: 'Sony BRAVIA 9 65" Mini-LED Flagship 4K TV',
    brand: 'Sony',
    category: 'smart-tvs',
    categoryName: 'Smart TVs',
    price: 2699,
    originalPrice: 2999,
    rating: 4.8,
    reviewCount: 390,
    image: 'https://images.unsplash.com/photo-1509281373149-e957c6296406?auto=format&fit=crop&w=800&q=80',
    tagline: 'High-Peak Luminance Mini-LED with XR Backlight Master Drive',
    features: [
      'Wi-Fi', 'Bluetooth', 'AI Features', 'Voice Assistant', 'High Refresh Rate',
      '4K Video', 'HDMI', 'Gaming Support', 'Energy Efficient', 'Smart Home Connectivity'
    ],
    specs: {
      display: '65" 4K QLED Mini-LED with XR Backlight Master Drive, 120Hz VRR',
      processor: 'XR Processor with XR Clear Image & XR Motion Clarity',
      audio: '70W Acoustic Multi-Audio+ with Beam Tweeters & Frame Tweeters',
      ports: '2x HDMI 2.1 (4K@120Hz, eARC), 2x HDMI 2.0, 2x USB, Optical, Ethernet',
      smart_platform: 'Google TV with Sony Pictures Core 10 free movie credits',
      smart_home: 'Google Home, Apple Home, AirPlay 2, Alexa',
      dimensions: '1445 x 834 x 48 mm (26.5 kg)',
      warranty: '2 Years Sony Warranty'
    },
    pros: [
      'Colossal peak brightness ideal for sunlit living rooms',
      'Studio-grade picture calibration modes (Netflix, Prime Video, SONY)',
      'Beam tweeters project sound directly from center of the screen',
      'PS5 Perfect for PlayStation integration with Auto HDR Tone Mapping'
    ],
    cons: [
      'Only 2 of the 4 HDMI ports are 2.1 bandwidth',
      'Thicker profile than ultra-thin OLEDs'
    ]
  },
  {
    id: 'tv-tcl-qm8',
    name: 'TCL QM8 65" 4K QD-Mini LED TV',
    brand: 'TCL',
    category: 'smart-tvs',
    categoryName: 'Smart TVs',
    price: 1099,
    originalPrice: 1299,
    rating: 4.6,
    reviewCount: 520,
    image: 'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?auto=format&fit=crop&w=800&q=80',
    tagline: 'Value Powerhouse with 5,000 Nits Peak Brightness & 240Hz Game Accelerator',
    features: [
      'Wi-Fi', 'Bluetooth', 'AI Features', 'Voice Assistant', 'High Refresh Rate',
      '4K Video', 'HDMI', 'Gaming Support', 'Energy Efficient', 'Smart Home Connectivity'
    ],
    specs: {
      display: '65" 4K QD-Mini LED with up to 5000 zones, 120Hz/144Hz VRR (240Hz DLG)',
      processor: 'AIPQ PRO Processor with Deep Learning AI',
      audio: 'Onkyo 2.1 Channel Speaker System with built-in subwoofer',
      ports: '4x HDMI (2x HDMI 2.1 144Hz, 2x HDMI 2.0), 2x USB, Optical, Ethernet',
      smart_platform: 'Google TV with Chromecast built-in',
      smart_home: 'Google Assistant, Amazon Alexa, Apple AirPlay 2',
      dimensions: '1446 x 838 x 52 mm (24.1 kg)',
      warranty: '2 Years Manufacturer Warranty'
    },
    pros: [
      'Exceptional brightness and dimming zone count at an affordable price',
      'Built-in Onkyo 2.1 subwoofer delivers punchy bass without external soundbar',
      'Supports all major HDR formats (Dolby Vision IQ, HDR10+, HLG)',
      'Game Accelerator 240 mode for ultra-responsive 240Hz 1080p gaming'
    ],
    cons: [
      'Viewing angles slightly wash out beyond 45 degrees',
      'User interface occasionally shows minor stutter'
    ]
  },

  // ==================== SMART WATCHES ====================
  {
    id: 'watch-apple-ultra-2',
    name: 'Apple Watch Ultra 2',
    brand: 'Apple',
    category: 'smart-watches',
    categoryName: 'Smart Watches',
    price: 799,
    originalPrice: 849,
    rating: 4.9,
    reviewCount: 910,
    image: 'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=800&q=80',
    tagline: 'Rugged Aerospace Titanium with S9 SiP, 3000 nits & Dual-Frequency GPS',
    features: [
      '5G', '4G', 'Wi-Fi', 'Bluetooth', 'NFC', 'GPS', 'AI Features', 'Voice Assistant',
      'Fast Charging', 'Wireless Charging', 'Long Battery Life', 'Water Resistance',
      'Dust Resistance', 'AMOLED Display', 'Touchscreen', 'Energy Efficient'
    ],
    specs: {
      display: '49mm Always-On Retina LTPO OLED, Sapphire Crystal, 3000 nits peak',
      processor: 'S9 SiP with 4-core Neural Engine and 64-bit dual core',
      storage: '64GB Internal Storage for offline music and maps',
      battery: '542 mAh (Up to 36 hours normal use, 72 hours low power mode)',
      sensors: 'Precision Dual-frequency GPS (L1+L5), ECG, Blood Oxygen, Depth Gauge to 40m, Water Temp, 86dB Siren',
      durability: '100m Water Resistance (WR100), EN13319 Dive Computer certified, IP6X dust, MIL-STD 810H',
      connectivity: 'LTE Cellular, Wi-Fi 4, Bluetooth 5.3, UWB 2nd Gen, NFC Apple Pay',
      dimensions: '49 x 44 x 14.4 mm (61.4g)',
      os: 'watchOS 11',
      warranty: '1 Year AppleCare Warranty'
    },
    pros: [
      'Indestructible 49mm titanium case and flat sapphire crystal',
      'Sub-meter dual-frequency GPS accuracy in dense forests and cities',
      'Full recreational scuba dive computer with Oceanic+ app',
      'Double-tap one-handed gesture control'
    ],
    cons: [
      'Large dimensions may feel bulky on smaller wrists',
      'Only pairs with Apple iPhone'
    ]
  },
  {
    id: 'watch-galaxy-watch-ultra',
    name: 'Samsung Galaxy Watch Ultra',
    brand: 'Samsung',
    category: 'smart-watches',
    categoryName: 'Smart Watches',
    price: 649,
    originalPrice: 699,
    rating: 4.8,
    reviewCount: 530,
    image: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?auto=format&fit=crop&w=800&q=80',
    tagline: 'Grade 4 Titanium Cushion Design with 100-Hour Battery & BioActive Sensor',
    features: [
      '4G', 'Wi-Fi', 'Bluetooth', 'NFC', 'GPS', 'AI Features', 'Voice Assistant',
      'Fast Charging', 'Wireless Charging', 'Long Battery Life', 'Water Resistance',
      'Dust Resistance', 'AMOLED Display', 'Touchscreen', 'Energy Efficient'
    ],
    specs: {
      display: '47mm 1.5" Super AMOLED (480x480), Sapphire Crystal, 3000 nits peak',
      processor: 'Exynos W1000 (3nm, 5 Cores) with Galaxy AI Energy Score',
      storage: '32GB Storage',
      battery: '590 mAh (Up to 100 hours in Power Saving mode, 48 hours Exercise)',
      sensors: 'Dual-frequency GPS (L1+L5), Samsung BioActive Sensor (ECG, Blood Pressure, BIA body composition), AGEs index, Emergency Siren',
      durability: '10 ATM / 100m Water resistance, IP68, MIL-STD-810H, Marine Grade titanium',
      connectivity: '4G LTE, Wi-Fi, Bluetooth 5.3, NFC Samsung Wallet',
      dimensions: '47.4 x 47.1 x 12.1 mm (60.5g)',
      os: 'Wear OS 5 with One UI 6 Watch',
      warranty: '2 Years Manufacturer Warranty'
    },
    pros: [
      'Advanced BioActive sensor measures body fat percentage and sleep apnea',
      'Customizable Quick Button for instant workout recording and emergency siren',
      '3000 nits display crystal clear under direct midday desert sun',
      'Up to 100-hour battery life in power saving'
    ],
    cons: [
      'Blood pressure and ECG features require Samsung Galaxy phone pairing',
      'Distinctive square-cushion design is polarizing'
    ]
  },
  {
    id: 'watch-garmin-fenix-8',
    name: 'Garmin Fēnix 8 (51mm AMOLED)',
    brand: 'Garmin',
    category: 'smart-watches',
    categoryName: 'Smart Watches',
    price: 1099,
    originalPrice: 1199,
    rating: 4.9,
    reviewCount: 380,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80',
    tagline: 'Multisport GPS Smartwatch with Speaker, Mic, Built-in LED Flashlight & Dive Rating',
    features: [
      'Wi-Fi', 'Bluetooth', 'NFC', 'GPS', 'Voice Assistant', 'Fast Charging',
      'Long Battery Life', 'Water Resistance', 'Dust Resistance', 'AMOLED Display',
      'Touchscreen', 'Energy Efficient'
    ],
    specs: {
      display: '1.4" AMOLED Display (454x454), Scratch-resistant Sapphire lens, Titanium bezel',
      battery: 'Up to 29 days in smartwatch mode (13 days always-on), 84 hours GPS mode',
      sensors: 'Multi-band SatIQ GPS, Wrist Heart Rate, Pulse Ox, Barometric Altimeter, Compass, Gyroscope, Thermometer, Depth gauge 40m',
      durability: '40m Scuba dive rated with leakproof inductive buttons, 100m water rating, MIL-STD-810',
      flashlight: 'Built-in multi-LED variable white and red safety flashlight',
      connectivity: 'Wi-Fi, Bluetooth, ANT+, NFC Garmin Pay, Offline TopoActive mapping',
      dimensions: '51 x 51 x 14.7 mm (95g with band)',
      warranty: '2 Years Garmin Warranty'
    },
    pros: [
      'Legendary 29-day battery life frees you from daily chargers',
      'Built-in ultra-bright LED flashlight with strobe modes',
      'Preloaded global TopoActive maps with dynamic round-trip routing',
      'Onboard speaker and mic for voice commands without phone'
    ],
    cons: [
      'No cellular LTE calling option',
      'Higher price point for serious expedition athletes'
    ]
  },
  {
    id: 'watch-pixel-watch-3',
    name: 'Google Pixel Watch 3 (45mm)',
    brand: 'Google',
    category: 'smart-watches',
    categoryName: 'Smart Watches',
    price: 399,
    originalPrice: 449,
    rating: 4.6,
    reviewCount: 460,
    image: 'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=800&q=80',
    tagline: 'Actua AMOLED Display with Fitbit Readiness, Cardio Load & Loss of Pulse Detection',
    features: [
      '4G', 'Wi-Fi', 'Bluetooth', 'NFC', 'GPS', 'AI Features', 'Voice Assistant',
      'Fast Charging', 'Water Resistance', 'Dust Resistance', 'AMOLED Display',
      'High Refresh Rate', 'Touchscreen'
    ],
    specs: {
      display: '45mm Actua AMOLED (1-60Hz LTPO), 2000 nits peak, 3D Corning Gorilla Glass 5',
      processor: 'Qualcomm SW5100 with Cortex M33 co-processor',
      storage: '32GB eMMC Flash',
      battery: '420 mAh (Up to 36 hours in Battery Saver, 24 hours with Always-On)',
      sensors: 'Compass, Altimeter, Red & Infrared oxygen, Multimodal ECG, Skin Temperature, cEDA stress sensor, Loss of Pulse detection',
      durability: '5 ATM / 50m water resistance, IP68',
      connectivity: '4G LTE optional, Wi-Fi 802.11 b/g/n, Bluetooth 5.3, UWB, NFC Google Wallet',
      dimensions: '45 x 45 x 12.3 mm (37g without band)',
      os: 'Wear OS 5.0 with Deep Fitbit Integration',
      warranty: '1 Year Google Warranty'
    },
    pros: [
      'Beautiful minimalist circular dome glass aesthetic',
      'World-first Loss of Pulse emergency detection safety feature',
      'Live Google Nest camera stream on your wrist with two-way audio',
      'Comprehensive Fitbit Cardio Load and Daily Readiness insights'
    ],
    cons: [
      '1 to 1.5 day battery requires daily charging routine',
      'Curved edge glass is more exposed to accidental impacts'
    ]
  },

  // ==================== EARBUDS ====================
  {
    id: 'earbuds-sony-wf-1000xm5',
    name: 'Sony WF-1000XM5',
    brand: 'Sony',
    category: 'earbuds',
    categoryName: 'Earbuds',
    price: 279,
    originalPrice: 299,
    rating: 4.8,
    reviewCount: 1650,
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=800&q=80',
    tagline: 'Best-in-Class Noise Cancelling with Dynamic Driver X & LDAC Hi-Res Wireless',
    features: [
      'Bluetooth', 'AI Features', 'Voice Assistant', 'Fast Charging', 'Wireless Charging',
      'Long Battery Life', 'Water Resistance', 'Active Noise Cancellation', 'USB-C',
      'Touchscreen'
    ],
    specs: {
      driver: '8.4mm Dynamic Driver X with multi-material dome',
      processor: 'Integrated Processor V2 + HD Noise Cancelling Processor QN2e',
      battery: '8 hours (buds with ANC) + 16 hours (case) = 24 hours total, 3-min quick charge = 60 mins',
      codecs: 'LDAC, LC3, AAC, SBC with DSEE Extreme AI upscaling',
      microphones: '6 microphones (3 per bud) with Bone Conduction Sensors & AI DNN wind noise reduction',
      water_resistance: 'IPX4 splash and sweat resistance',
      connectivity: 'Bluetooth 5.3 with Multipoint connection to 2 devices simultaneously, USB-C, Qi Wireless',
      weight: '5.9g per earbud (case 39g)',
      warranty: '1 Year Sony Warranty'
    },
    pros: [
      'Benchmark acoustic active noise cancellation reduces human voices and traffic',
      'LDAC Hi-Res Audio wireless transmission delivers audiophile nuance',
      'Polyurethane foam ear tips provide exceptional passive seal',
      'Compact, lightweight ergonomic fit compared to predecessor'
    ],
    cons: [
      'Glossy plastic sides can be slippery when extracting from case',
      'Foam tips need periodic replacement over time'
    ]
  },
  {
    id: 'earbuds-airpods-pro-2',
    name: 'Apple AirPods Pro 2 (USB-C)',
    brand: 'Apple',
    category: 'earbuds',
    categoryName: 'Earbuds',
    price: 249,
    originalPrice: 249,
    rating: 4.9,
    reviewCount: 3200,
    image: 'https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?auto=format&fit=crop&w=800&q=80',
    tagline: 'H2 Chip with Pro-Level Active Noise Cancellation & Clinical Grade Hearing Aid',
    features: [
      'Bluetooth', 'AI Features', 'Voice Assistant', 'Fast Charging', 'Wireless Charging',
      'Long Battery Life', 'Water Resistance', 'Dust Resistance', 'Active Noise Cancellation',
      'USB-C', 'Touchscreen'
    ],
    specs: {
      driver: 'Custom high-excursion Apple driver & custom high dynamic range amplifier',
      processor: 'Apple H2 headphone chip + Apple U1/U2 chip in MagSafe case',
      battery: '6 hours (buds with ANC) + 24 hours (case) = 30 hours total',
      special_features: 'FDA-cleared Hearing Aid Capability, Adaptive Audio, Personalized Spatial Audio with dynamic head tracking, Conversation Awareness',
      water_resistance: 'IP54 dust, sweat, and water resistance for both buds and case',
      connectivity: 'Bluetooth 5.3, USB-C, Apple Watch charger, MagSafe, Qi Wireless',
      weight: '5.3g per earbud (case 50.8g with built-in speaker & lanyard loop)',
      warranty: '1 Year AppleCare Warranty'
    },
    pros: [
      'Revolutionary FDA-authorized over-the-counter Hearing Aid feature',
      'Seamless transparency mode sounds virtually identical to natural human hearing',
      'Precision Finding via UWB and loud speaker in the MagSafe case',
      'Intuitive stem swipe volume controls'
    ],
    cons: [
      'Full feature ecosystem locked to Apple devices',
      'No lossless LDAC codec for Android users'
    ]
  },
  {
    id: 'earbuds-bose-qc-ultra',
    name: 'Bose QuietComfort Ultra Earbuds',
    brand: 'Bose',
    category: 'earbuds',
    categoryName: 'Earbuds',
    price: 299,
    originalPrice: 299,
    rating: 4.7,
    reviewCount: 940,
    image: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=800&q=80',
    tagline: 'World-Class Noise Cancellation with Bose Immersive Audio Spatialization',
    features: [
      'Bluetooth', 'Voice Assistant', 'Fast Charging', 'Wireless Charging',
      'Long Battery Life', 'Water Resistance', 'Active Noise Cancellation', 'USB-C',
      'Touchscreen'
    ],
    specs: {
      driver: 'Custom Bose High-fidelity transducers with CustomTune sound calibration',
      battery: '6 hours (buds) + 18 hours (case) = 24 hours (4 hours with Immersive Audio)',
      codecs: 'Snapdragon Sound, aptX Adaptive, AAC, SBC',
      technology: 'Bose Immersive Audio (Still and Motion spatial sound modes), ActiveSense transparency',
      water_resistance: 'IPX4 sweat and weather resistant',
      connectivity: 'Bluetooth 5.3 with Multipoint, USB-C, Qi Wireless Case Cover supported',
      weight: '6.24g per earbud',
      warranty: '1 Year Bose Warranty'
    },
    pros: [
      'Best-in-class low-frequency noise cancellation (airplane engines, subways)',
      'CustomTune technology calibrates sound specifically to your ear canal shape',
      'Bose Immersive Audio expands spatial soundstage on any audio source',
      'Ultra-comfortable stability bands ensure secure seal'
    ],
    cons: [
      'Charging case is slightly larger than rivals',
      'Battery life drops to 4 hours with continuous Immersive Audio active'
    ]
  },

  // ==================== HEADPHONES ====================
  {
    id: 'headphones-sony-wh1000xm5',
    name: 'Sony WH-1000XM5',
    brand: 'Sony',
    category: 'headphones',
    categoryName: 'Headphones',
    price: 399,
    originalPrice: 429,
    rating: 4.9,
    reviewCount: 2840,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80',
    tagline: 'Industry-Leading Noise Cancelling Over-Ear Headphones with 8 Microphones & Auto NC Optimizer',
    features: [
      'Wi-Fi', 'Bluetooth', 'NFC', 'AI Features', 'Voice Assistant', 'Fast Charging',
      'Long Battery Life', 'Active Noise Cancellation', 'USB-C', 'Touchscreen',
      'Energy Efficient'
    ],
    specs: {
      driver: 'Precision-engineered 30mm Carbon Fiber composite dome driver',
      processor: 'Dual Processors: Integrated Processor V1 + HD Noise Cancelling Processor QN1',
      battery: '30 hours (ANC ON), 40 hours (ANC OFF), 3-min charge provides 3 hours playback',
      codecs: 'LDAC, AAC, SBC, DSEE Extreme AI',
      microphones: '8 beamforming microphones with AI DNN Voice Pickup technology',
      connectivity: 'Bluetooth 5.2, Multipoint 2-device pairing, 3.5mm audio jack, USB-C PD Fast Charge',
      weight: '250g with soft-fit synthetic leather headband',
      warranty: '1 Year Sony Warranty'
    },
    pros: [
      'Unsurpassed noise cancellation across all frequencies with 8 microphones',
      'Crystal-clear microphone phone call clarity even in heavy traffic and wind',
      'Featherlight 250g build with zero clamping fatigue during long work sessions',
      'Speak-to-Chat automatically pauses music when you begin talking'
    ],
    cons: [
      'Ear cups swivel flat but headband does not fold inward into compact ball',
      'No official IP water resistance rating for heavy rain'
    ]
  },
  {
    id: 'headphones-bose-qc-ultra-hp',
    name: 'Bose QuietComfort Ultra Headphones',
    brand: 'Bose',
    category: 'headphones',
    categoryName: 'Headphones',
    price: 429,
    originalPrice: 449,
    rating: 4.8,
    reviewCount: 1120,
    image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=800&q=80',
    tagline: 'Spatial Audio with Quiet, Aware, and Immersive Modes & Plush Protein Leather',
    features: [
      'Bluetooth', 'Voice Assistant', 'Fast Charging', 'Long Battery Life',
      'Active Noise Cancellation', 'USB-C'
    ],
    specs: {
      driver: 'TriPort acoustic headphone structure with CustomTune audio personalization',
      battery: '24 hours standard (18 hours in Immersive Audio mode), 15-min quick charge = 2.5 hours',
      codecs: 'Snapdragon Sound, aptX Adaptive, AAC, SBC',
      spatial_audio: 'Bose Immersive Audio with onboard gyroscopes for head tracking',
      materials: 'Cast aluminum arms, protein leather cushions, hard-shell zippered travel case',
      connectivity: 'Bluetooth 5.3 Multipoint, 2.5mm to 3.5mm auxiliary audio cable, USB-C audio/charging',
      weight: '252g',
      warranty: '1 Year Bose Warranty'
    },
    pros: [
      'Folds into ultra-compact zippered carrying case for easy travel packing',
      'Unrivaled acoustic comfort and plush headband padding',
      'Immersive Audio adds cinematic breadth to stereo movies and music',
      'Capacitive volume slider strip is smooth and responsive'
    ],
    cons: [
      'Cannot listen to music over USB-C data cable without powering on unit',
      'Battery life slightly lower when Immersive Audio mode is continuously on'
    ]
  },
  {
    id: 'headphones-airpods-max-usbc',
    name: 'Apple AirPods Max (USB-C)',
    brand: 'Apple',
    category: 'headphones',
    categoryName: 'Headphones',
    price: 549,
    originalPrice: 549,
    rating: 4.7,
    reviewCount: 1890,
    image: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=800&q=80',
    tagline: 'Anodized Aluminum Ear Cups with Computational Audio, H1 Chips & Lossless USB-C',
    features: [
      'Bluetooth', 'Voice Assistant', 'Fast Charging', 'Long Battery Life',
      'Active Noise Cancellation', 'USB-C'
    ],
    specs: {
      driver: 'Apple-designed 40mm dynamic driver with dual neodymium ring motor magnet',
      processor: 'Dual Apple H1 headphone chips (10 audio cores per chip)',
      battery: '20 hours listening with ANC or Transparency on, 5-min charge = 1.5 hours',
      audio_tech: 'Lossless Audio via USB-C wired connection, Personalized Spatial Audio with dynamic head tracking',
      materials: 'Knit mesh canopy, stainless steel frame, acoustically engineered memory foam ear cushions',
      connectivity: 'Bluetooth 5.0, USB-C audio input & charging',
      weight: '384.8g',
      warranty: '1 Year AppleCare Warranty'
    },
    pros: [
      'Lossless 24-bit/48kHz audio support when connected via USB-C cable',
      'Exceptional transparency mode sounds transparent and effortless',
      'Tactile Apple Watch-inspired Digital Crown volume knob',
      'Luxurious breathable knit mesh canopy distributes weight evenly'
    ],
    cons: [
      'Heavier than plastic competitors at 384g',
      'Smart Case provides minimal body protection'
    ]
  },

  // ==================== BLUETOOTH SPEAKERS ====================
  {
    id: 'speaker-jbl-charge-5',
    name: 'JBL Charge 5 Wi-Fi & Bluetooth',
    brand: 'JBL',
    category: 'bluetooth-speakers',
    categoryName: 'Bluetooth Speakers',
    price: 179,
    originalPrice: 199,
    rating: 4.8,
    reviewCount: 2100,
    image: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=800&q=80',
    tagline: 'Original Pro Sound with Built-in Power Bank, Wi-Fi 6 Streaming & IP67 Waterproof',
    features: [
      'Wi-Fi', 'Bluetooth', 'Voice Assistant', 'Fast Charging', 'Long Battery Life',
      'Water Resistance', 'Dust Resistance', 'USB-C', 'Smart Home Connectivity'
    ],
    specs: {
      output_power: '40W RMS (30W Woofer + 10W Tweeter) with dual passive bass radiators',
      battery: '7,500 mAh (Up to 20 hours playback), acts as power bank to charge mobile phones',
      water_resistance: 'IP67 waterproof and dustproof (submersible in 1m water for 30 mins)',
      connectivity: 'Wi-Fi 6, AirPlay 2, Alexa Multi-Room Music, Spotify Connect, Bluetooth 5.3, USB-C power in/out',
      dimensions: '223 x 97 x 94 mm (1.0 kg)',
      warranty: '1 Year JBL Warranty'
    },
    pros: [
      'Dual Wi-Fi and Bluetooth connectivity allows home high-res streaming and outdoor portability',
      'Acts as a 7,500 mAh emergency power bank for your smartphone',
      'Rugged IP67 rubberized bumper construction survives drops, sand, and pool splashes',
      'Deep, room-filling bass response from dual passive radiators'
    ],
    cons: [
      'No 3.5mm analog AUX input jack',
      'Mono speaker configuration (requires PartyBoost pairing for stereo)'
    ]
  },
  {
    id: 'speaker-sonos-move-2',
    name: 'Sonos Move 2',
    brand: 'Sonos',
    category: 'bluetooth-speakers',
    categoryName: 'Bluetooth Speakers',
    price: 449,
    originalPrice: 499,
    rating: 4.9,
    reviewCount: 680,
    image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=800&q=80',
    tagline: 'Premium Stereo Portable Speaker with 24-Hour Battery & Automatic Trueplay Tuning',
    features: [
      'Wi-Fi', 'Bluetooth', 'Voice Assistant', 'Fast Charging', 'Wireless Charging',
      'Long Battery Life', 'Water Resistance', 'Dust Resistance', 'USB-C',
      'Touchscreen', 'Smart Home Connectivity'
    ],
    specs: {
      acoustics: 'Dual angled tweeters for crisp stereo separation + precision-tuned midwoofer + 3 class-D digital amplifiers',
      tuning: 'Automatic Trueplay acoustic calibration uses mics to analyze surrounding room acoustics',
      battery: '44Wh (Up to 24 hours playback), includes Wireless Magnetic Charging Base dock',
      water_resistance: 'IP56 weather resistant (rain, snow, UV rays, dirt)',
      voice: 'Sonos Voice Control and Amazon Alexa built-in with microphone privacy switch',
      connectivity: 'Wi-Fi 6, Bluetooth 5.0, Apple AirPlay 2, USB-C Line-In & Ethernet adapter compatible',
      dimensions: '241 x 160 x 127 mm (3.0 kg)',
      warranty: '2 Years Sonos Manufacturer Warranty'
    },
    pros: [
      'Wide stereo soundstage from a single portable chassis',
      'Automatic Trueplay continuously recalibrates sound when moved from room to patio',
      'Seamless multi-room grouping with existing Sonos whole-home sound systems',
      'Drop-and-go magnetic wireless charging dock included'
    ],
    cons: [
      'At 3.0 kg it is designed for home/patio rather than hiking backpacks',
      'Requires Sonos app for initial Wi-Fi setup'
    ]
  },
  {
    id: 'speaker-marshall-emberton-ii',
    name: 'Marshall Emberton II',
    brand: 'Marshall',
    category: 'bluetooth-speakers',
    categoryName: 'Bluetooth Speakers',
    price: 169,
    originalPrice: 179,
    rating: 4.7,
    reviewCount: 920,
    image: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=800&q=80',
    tagline: 'Iconic Vintage Rock Aesthetic with 30+ Hours Playtime & True Stereophonic 360° Sound',
    features: [
      'Bluetooth', 'Fast Charging', 'Long Battery Life', 'Water Resistance',
      'Dust Resistance', 'USB-C'
    ],
    specs: {
      power: '2x 10W Class D amplifiers with 2x 2" full range drivers and 2x passive radiators',
      sound: 'True Stereophonic multi-directional 360-degree spatial sound',
      battery: '30+ hours playtime on single charge, 20-min fast charge = 4 hours',
      water_resistance: 'IP67 dust and waterproof rating',
      stack_mode: 'Pair multiple Emberton II speakers together for amplified sound',
      connectivity: 'Bluetooth 5.1 with 30ft range, USB-C charging',
      dimensions: '68 x 160 x 76 mm (0.7 kg)',
      warranty: '1 Year Marshall Warranty'
    },
    pros: [
      'Gorgeous retro guitar amp design with textured brass multi-directional control knob',
      'Outstanding 30+ hour battery life easily outlasts weekends away',
      'True 360-degree sound disperses audio evenly regardless of speaker position',
      'Made from 50% post-consumer recycled plastic'
    ],
    cons: [
      'No built-in microphone for speakerphone calls',
      'No Wi-Fi or voice assistant integration'
    ]
  },

  // ==================== CAMERAS ====================
  {
    id: 'cam-sony-a7iv',
    name: 'Sony Alpha 7 IV Full-Frame Camera',
    brand: 'Sony',
    category: 'cameras',
    categoryName: 'Cameras',
    price: 2498,
    originalPrice: 2698,
    rating: 4.9,
    reviewCount: 540,
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80',
    tagline: '33MP Exmor R CMOS Sensor with 4K 60p 10-bit 4:2:2 & Real-time AI Eye Autofocus',
    features: [
      'Wi-Fi', 'Bluetooth', 'AI Features', 'High-Resolution Camera', '4K Video',
      'Touchscreen', 'USB-C', 'HDMI', 'Expandable Storage', 'Large Storage',
      'High RAM'
    ],
    specs: {
      sensor: '33.0 MP Full-Frame Exmor R Back-Illuminated CMOS Sensor',
      processor: 'BIONZ XR image processing engine with AI AF algorithm',
      autofocus: '759 phase-detection AF points covering 94% of frame with Human/Animal/Bird Eye AF',
      video: '4K 60p in Super 35mm, 4K 30p 7K oversampled in full-frame, 10-bit 4:2:2 S-Cinetone / S-Log3',
      stabilization: '5-axis in-body optical image stabilization (5.5 stops)',
      viewfinder: '3.68M-dot OLED EVF + 3.0" Vari-angle Touchscreen LCD',
      storage: 'Dual card slots (CFexpress Type A / SD UHS-II)',
      connectivity: 'Wi-Fi 5GHz, Bluetooth, USB-C 3.2 Gen 2 (10Gbps live streaming 4K 15p), Full-size HDMI',
      dimensions: '131.3 x 96.4 x 79.8 mm (658g)',
      warranty: '2 Years Sony Pro Warranty'
    },
    pros: [
      'Benchmark hybrid photo/video performance with rich 33MP detail and S-Cinetone colors',
      'Flawless real-time autofocus tracking with eye detection for humans, animals, and birds',
      'Direct plug-and-play 4K webcam streaming over USB-C without capture card',
      'Dual card slots support high-speed CFexpress Type A'
    ],
    cons: [
      '4K 60p video has a 1.5x Super35 crop factor',
      'Menu system contains extensive deep configuration pages'
    ]
  },
  {
    id: 'cam-canon-r6-ii',
    name: 'Canon EOS R6 Mark II',
    brand: 'Canon',
    category: 'cameras',
    categoryName: 'Cameras',
    price: 2399,
    originalPrice: 2499,
    rating: 4.8,
    reviewCount: 420,
    image: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&w=800&q=80',
    tagline: '24.2MP Full-Frame with 40fps Continuous Shooting & 6K Oversampled 4K 60p Uncropped',
    features: [
      'Wi-Fi', 'Bluetooth', 'AI Features', 'High-Resolution Camera', '4K Video',
      'Touchscreen', 'USB-C', 'HDMI', 'Expandable Storage'
    ],
    specs: {
      sensor: '24.2MP Full-Frame CMOS Sensor with Dual Pixel CMOS AF II',
      processor: 'DIGIC X Image Processor with Deep Learning AI subject detection (Horses, Aircraft, Trains, Cars)',
      burst_speed: 'Up to 40 fps with electronic shutter (RAW burst pre-shooting mode)',
      video: 'Uncropped 6K oversampled 4K 60p 10-bit Canon Log 3 & HDR PQ, 6K RAW via HDMI',
      stabilization: 'In-Body Image Stabilization (IBIS) up to 8.0 stops with coordinated IS lenses',
      viewfinder: '0.5" 3.69M-dot OLED EVF 120fps + 3.0" 1.62M-dot Vari-Angle Touch LCD',
      storage: 'Dual UHS-II SD card slots',
      connectivity: 'Wi-Fi 5GHz/2.4GHz, Bluetooth 5.0, USB-C 3.2, Micro-HDMI, Mic & Headphone jacks',
      dimensions: '138.4 x 98.4 x 88.4 mm (670g)',
      warranty: '2 Years Canon Service Warranty'
    },
    pros: [
      'Blistering 40 fps electronic burst speed captures high-speed sports & wildlife moments',
      'Uncropped 4K 60p video recording without thermal overheating restrictions',
      'Class-leading 8-stop IBIS image stabilization enables handheld low-light shots',
      'Intuitive Dual Pixel AF II stickiness'
    ],
    cons: [
      'Micro-HDMI port instead of full-size HDMI',
      '24MP resolution is slightly lower for massive billboard cropping'
    ]
  },
  {
    id: 'cam-dji-pocket-3',
    name: 'DJI Osmo Pocket 3 Creator Combo',
    brand: 'DJI',
    category: 'cameras',
    categoryName: 'Cameras',
    price: 669,
    originalPrice: 699,
    rating: 4.9,
    reviewCount: 1350,
    image: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=800&q=80',
    tagline: 'Pocket Gimbal Camera with 1-Inch CMOS Sensor, Rotatable 2" OLED & 4K 120fps',
    features: [
      'Wi-Fi', 'Bluetooth', 'AI Features', 'Fast Charging', 'Long Battery Life',
      'AMOLED Display', 'High Refresh Rate', 'High-Resolution Camera', '4K Video',
      'Touchscreen', 'USB-C', 'Expandable Storage'
    ],
    specs: {
      sensor: '1-Inch CMOS Sensor with f/2.0 aperture and 20mm equivalent wide lens',
      gimbal: '3-Axis Mechanical Gimbal Stabilization with ActiveTrack 6.0 AI face/body tracking',
      video: '4K@120fps slow motion, 4K@60fps HDR, 10-bit D-Log M & 10-bit HLG color profiles',
      screen: '2.0" Rotatable OLED Touchscreen with horizontal and native vertical shooting',
      audio: 'Tri-mic stereo array with directional audio + includes DJI Mic 2 wireless transmitter',
      battery: '1,300 mAh with 80% charge in 16 minutes, up to 166 minutes recording time',
      storage: 'MicroSD slot (supports up to 512GB)',
      connectivity: 'Wi-Fi 802.11 a/b/g/n/ac, Bluetooth 5.2, USB-C',
      dimensions: '139.7 x 42.2 x 33.5 mm (179g)',
      warranty: '1 Year DJI Care Warranty'
    },
    pros: [
      'Large 1-inch sensor captures outstanding low-light detail and natural depth of field',
      'Physical 3-axis mechanical gimbal completely eliminates running vibration',
      'Rotatable OLED screen instantly powers up unit and switches between 16:9 and 9:16 Shorts/TikTok mode',
      'Includes DJI Mic 2 transmitter with 32-bit float internal audio recording'
    ],
    cons: [
      'Fixed focal length lens (digital zoom only)',
      'Not waterproof without an optional diving case'
    ]
  },

  // ==================== POWER BANKS ====================
  {
    id: 'pb-anker-prime-27k',
    name: 'Anker Prime 27,650mAh Power Bank (250W)',
    brand: 'Anker',
    category: 'power-banks',
    categoryName: 'Power Banks',
    price: 179,
    originalPrice: 199,
    rating: 4.9,
    reviewCount: 1280,
    image: 'https://images.unsplash.com/photo-1609592426868-b71a06283db8?auto=format&fit=crop&w=800&q=80',
    tagline: 'Smart App Control with 250W Total Output, Dual 140W Laptop Charging & Smart Display',
    features: [
      'Bluetooth', 'Fast Charging', 'Long Battery Life', 'USB-C', 'Touchscreen',
      'Smart Home Connectivity', 'Energy Efficient'
    ],
    specs: {
      capacity: '27,650 mAh (99.54Wh - Airline TSA Approved Carry-on friendly)',
      output: '250W Max Total (Dual USB-C up to 140W PD 3.1 each + 1x USB-A 65W)',
      input: '170W Ultra-Fast dual USB-C recharge (100% recharged in just 37 minutes)',
      display: 'Smart TFT Color Display showing real-time watts, battery health, cycles, and temp',
      app_control: 'Anker App via Bluetooth for sound alert locating, charging optimization and stats',
      safety: 'ActiveShield 2.0 temperature monitoring checks thermals 3 million times daily',
      dimensions: '161.7 x 57 x 49.7 mm (665g)',
      warranty: '2 Years Hassle-Free Anker Warranty'
    },
    pros: [
      'Charges two 16" MacBook Pros simultaneously at full 140W fast-charge speed',
      'Meets TSA 100Wh maximum limit for hassle-free flight travel',
      'Color screen provides exact breakdown of charging wattage per port',
      'Charges from 0% to 100% in a record 37 minutes with dual chargers'
    ],
    cons: [
      'Heavier cylindrical form factor at 665 grams',
      'High-speed 140W charging wall bricks sold separately'
    ]
  },
  {
    id: 'pb-ugreen-nexode-145w',
    name: 'UGREEN Nexode 25,000mAh Power Bank (145W)',
    brand: 'UGREEN',
    category: 'power-banks',
    categoryName: 'Power Banks',
    price: 99,
    originalPrice: 129,
    rating: 4.7,
    reviewCount: 940,
    image: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=800&q=80',
    tagline: '145W High-Speed Output with 3-Port Fast Charging & LED Power Display',
    features: [
      'Fast Charging', 'Long Battery Life', 'USB-C', 'Energy Efficient'
    ],
    specs: {
      capacity: '25,000 mAh (90Wh TSA Flight Approved)',
      output: '145W Max Total (USB-C1 100W PD + USB-C2 45W PD + USB-A 18W)',
      input: '65W Fast Recharging (Full charge in ~2 hours)',
      display: 'Smart LED Digital Matrix Display',
      protection: 'Over-voltage, over-current, short-circuit, and high-temp safety systems',
      compatibility: 'MacBook, Dell XPS, iPhone, Galaxy, iPad, Nintendo Switch, Steam Deck',
      dimensions: '160 x 80.8 x 26.7 mm (505g)',
      warranty: '2 Years Manufacturer Warranty'
    },
    pros: [
      'Great balance of 100W single-port laptop charging and affordability',
      'Slim profile fits comfortably inside laptop messenger bags',
      'Supports trickle charging mode for wireless earbuds and smartwatches',
      'TSA airline approved 90Wh capacity'
    ],
    cons: [
      'No Bluetooth companion app connectivity',
      'Plastic matte finish can pick up fingerprints'
    ]
  },

  // ==================== SMART HOME DEVICES ====================
  {
    id: 'smarthome-echo-hub',
    name: 'Amazon Echo Hub 8" Smart Home Panel',
    brand: 'Amazon',
    category: 'smart-home',
    categoryName: 'Smart Home Devices',
    price: 179,
    originalPrice: 199,
    rating: 4.6,
    reviewCount: 880,
    image: 'https://images.unsplash.com/photo-1543512214-318c7553f230?auto=format&fit=crop&w=800&q=80',
    tagline: 'Wall-Mountable Smart Home Control Panel with Alexa, Matter, Thread & Zigbee',
    features: [
      'Wi-Fi', 'Bluetooth', 'AI Features', 'Voice Assistant', 'Touchscreen',
      'Smart Home Connectivity', 'Energy Efficient'
    ],
    specs: {
      display: '8.0" Touchscreen Display (1280x800) with proximity sensor wake',
      smart_protocols: 'Matter Controller, Thread Border Router, Zigbee, Bluetooth Low Energy, Amazon Sidewalk',
      audio: 'Stereo speakers with dual microphones and mic-off privacy button',
      installation: 'Wall-mount bracket included, Power-over-Ethernet (PoE) with compatible adapter, or USB-C power',
      connectivity: 'Wi-Fi 5 dual-band, Bluetooth LE, Thread, Zigbee',
      dimensions: '202 x 137 x 15 mm (365g)',
      warranty: '1 Year Limited Warranty'
    },
    pros: [
      'Unified wall-mounted dashboard for locks, lights, thermostats, and live security cameras',
      'Built-in Matter and Thread border router local protocol communication for zero cloud lag',
      'Infrared proximity sensor automatically brings up control widgets when you approach',
      'Supports Power-over-Ethernet (PoE) clean in-wall installations'
    ],
    cons: [
      'No built-in camera for two-way video calls',
      'Tabletop dock stand is sold separately'
    ]
  },
  {
    id: 'smarthome-nest-hub-max',
    name: 'Google Nest Hub Max',
    brand: 'Google',
    category: 'smart-home',
    categoryName: 'Smart Home Devices',
    price: 229,
    originalPrice: 249,
    rating: 4.7,
    reviewCount: 1450,
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
    tagline: '10" Smart Display with Built-in Nest Cam, Google Assistant & Face Match',
    features: [
      'Wi-Fi', 'Bluetooth', 'AI Features', 'Voice Assistant', 'Touchscreen',
      'Smart Home Connectivity', 'Energy Efficient'
    ],
    specs: {
      display: '10.0" HD IPS Touchscreen (1280x800)',
      camera: '6.5MP Nest Cam with 127° wide-angle field of view, Face Match, and Quick Gestures',
      audio: '2.1 Stereo Sound (2x 18mm 10W tweeters + 1x 75mm 30W woofer)',
      voice: 'Google Assistant with Far-Field microphones & hardware camera/mic kill switch',
      smart_protocols: 'Matter, Thread Border Router, Google Cast, Wi-Fi, Bluetooth 5.0',
      dimensions: '250.1 x 182.55 x 101.23 mm (1.32 kg)',
      warranty: '1 Year Google Warranty'
    },
    pros: [
      'Rich 2.1 audio system with dedicated 30W subwoofer delivers great room-filling music',
      'Built-in Nest security camera detects motion and streams live video when away from home',
      'Quick Gestures allow pausing timers or music by simply holding your palm up',
      'Face Match personalizes calendar and commute updates for individual family members'
    ],
    cons: [
      'Display resolution is 720p HD rather than Full HD',
      'Screen angle is fixed on the base pedestal'
    ]
  },
  {
    id: 'smarthome-philips-hue-starter',
    name: 'Philips Hue White & Color Ambiance Starter Kit',
    brand: 'Philips Hue',
    category: 'smart-home',
    categoryName: 'Smart Home Devices',
    price: 199,
    originalPrice: 219,
    rating: 4.8,
    reviewCount: 2200,
    image: 'https://images.unsplash.com/photo-1550985616-10810253b84d?auto=format&fit=crop&w=800&q=80',
    tagline: '16 Million Colors with Hue Bridge, Matter Support, Smart Dimmer Switch & Music Sync',
    features: [
      'Wi-Fi', 'Bluetooth', 'AI Features', 'Voice Assistant', 'Smart Home Connectivity',
      'Energy Efficient'
    ],
    specs: {
      bulbs: '4x A19 1100 Lumen (75W Equivalent) E26 LED Bulbs, 16 Million Colors + Tunable Warm-to-Cool White (2000K-6500K)',
      hub: 'Philips Hue Bridge (supports up to 50 lights and 12 accessories with Matter upgrade)',
      dimmer: 'Smart Wireless Dimmer Switch with wall plate mounting magnet',
      energy: '9.5W LED power consumption per bulb with 25,000 hour rated lifetime (Energy Star)',
      sync: 'Syncs lighting with Spotify, PC Razer Chroma, and HDMI TV Sync Box',
      compatibility: 'Apple HomeKit, Google Home, Amazon Alexa, SmartThings, Matter, IFTTT',
      warranty: '3 Years Philips Hue Warranty'
    },
    pros: [
      'Gold standard in color accuracy, seamless dimming down to 1%, and rich saturated colors',
      'Hue Bridge local Zigbee network ensures instant response without slowing home Wi-Fi',
      'Spotify and gaming screen sync creates immersive entertainment rooms',
      'Matter compliant for future-proof smart home ecosystem compatibility'
    ],
    cons: [
      'Requires Hue Bridge hub for advanced out-of-home automations',
      'Higher upfront cost per bulb than budget generic brands'
    ]
  },

  // ==================== GAMING CONSOLES ====================
  {
    id: 'gaming-ps5-pro',
    name: 'Sony PlayStation 5 Pro',
    brand: 'Sony',
    category: 'gaming-consoles',
    categoryName: 'Gaming Consoles',
    price: 699,
    originalPrice: 699,
    rating: 4.8,
    reviewCount: 1540,
    image: 'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&w=800&q=80',
    tagline: 'PlayStation Spectral Super Resolution (PSSR) with Advanced Ray Tracing & 2TB SSD',
    features: [
      'Wi-Fi', 'Bluetooth', 'AI Features', 'Voice Assistant', 'High Refresh Rate',
      '4K Video', 'USB-C', 'HDMI', 'Large Storage', 'High RAM', 'Gaming Support'
    ],
    specs: {
      gpu: 'Upgraded RDNA Graphics with 67% more Compute Units (16.7 TFLOPs FP32) + AI Neural Accelerator',
      cpu: 'AMD Zen 2 8-core / 16-thread up to 3.85 GHz',
      memory: '16GB GDDR6 (576 GB/s) + 2GB DDR5 system RAM',
      storage: '2TB Custom High-Speed NVMe SSD (Expandable via M.2 PCIe 4.0 slot)',
      video_output: '4K 120Hz, 8K, Variable Refresh Rate (VRR), Enhanced Ray Tracing, PSSR AI Upscaling',
      audio: 'Tempest 3D AudioTech with personalized head profiles',
      connectivity: 'Wi-Fi 7 (IEEE 802.11be), Bluetooth 5.1, 2x USB-C front, 2x USB-A rear, HDMI 2.1, Gigabit Ethernet',
      controller: 'DualSense Wireless Controller with Haptic Feedback and Adaptive Triggers',
      dimensions: '388 x 89 x 216 mm (3.1 kg)',
      warranty: '1 Year Sony Warranty'
    },
    pros: [
      'PSSR machine-learning super resolution delivers 4K 60fps fidelity without compromising visual detail',
      'Advanced hardware ray tracing delivers realistic bounce lighting and mirror reflections',
      'Generous 2TB high-speed onboard internal SSD storage',
      'Wi-Fi 7 support enables lightning fast game downloads and remote play'
    ],
    cons: [
      'Disc Drive and vertical stand sold as separate add-ons',
      'Premium $699 pricing'
    ]
  },
  {
    id: 'gaming-xbox-series-x',
    name: 'Microsoft Xbox Series X (2TB Galaxy Edition)',
    brand: 'Microsoft',
    category: 'gaming-consoles',
    categoryName: 'Gaming Consoles',
    price: 599,
    originalPrice: 599,
    rating: 4.8,
    reviewCount: 1210,
    image: 'https://images.unsplash.com/photo-1621259182978-fbf93132d53d?auto=format&fit=crop&w=800&q=80',
    tagline: '12 Teraflops of Raw Power with 2TB SSD, 4K 120fps & Xbox Game Pass Ultimate',
    features: [
      'Wi-Fi', 'Bluetooth', 'High Refresh Rate', '4K Video', 'USB-C', 'HDMI',
      'Large Storage', 'High RAM', 'Gaming Support', 'Smart Home Connectivity'
    ],
    specs: {
      cpu: '8-core AMD Custom Zen 2 at 3.8 GHz',
      gpu: '12 TFLOPs, 52 CUs @ 1.825 GHz Custom RDNA 2',
      memory: '16GB GDDR6 with 320-bit bus',
      storage: '2TB Custom NVMe SSD (Expandable via Seagate/WD storage expansion cards)',
      video_output: 'Native 4K 60fps, up to 120fps, 8K HDR, AMD FreeSync Premium Pro, Dolby Vision Gaming',
      audio: 'Dolby Atmos, DTS:X, Windows Sonic 3D Spatial Audio',
      ports: 'HDMI 2.1, 3x USB 3.1 Gen 1, Storage Expansion Port, Gigabit Ethernet',
      dimensions: '151 x 151 x 301 mm (4.45 kg)',
      warranty: '1 Year Microsoft Hardware Warranty'
    },
    pros: [
      'Quick Resume allows jumping between 5 suspended games in under 6 seconds',
      'Dolby Vision and Dolby Atmos game support across hundreds of titles',
      'Full backward compatibility spanning four generations of original Xbox, 360, and One games',
      'Whisper-quiet vapor chamber cooling tower architecture'
    ],
    cons: [
      'Proprietary storage expansion cards are pricier than standard M.2 SSDs',
      'Controller still relies on AA batteries (rechargeable pack sold separately)'
    ]
  },
  {
    id: 'gaming-steam-deck-oled',
    name: 'Valve Steam Deck OLED (1TB)',
    brand: 'Valve',
    category: 'gaming-consoles',
    categoryName: 'Gaming Consoles',
    price: 649,
    originalPrice: 649,
    rating: 4.9,
    reviewCount: 2450,
    image: 'https://images.unsplash.com/photo-1612287233250-93510e192ff1?auto=format&fit=crop&w=800&q=80',
    tagline: 'Handheld PC Gaming with 90Hz HDR OLED, 50Wh Battery, Wi-Fi 6E & SteamOS',
    features: [
      'Wi-Fi', 'Bluetooth', 'Fast Charging', 'Long Battery Life', 'AMOLED Display',
      'High Refresh Rate', 'Touchscreen', 'USB-C', 'Expandable Storage',
      'Large Storage', 'High RAM', 'Gaming Support'
    ],
    specs: {
      display: '7.4" HDR OLED (1280x800), 90Hz refresh rate, 1000 nits peak HDR, anti-glare etched glass',
      processor: '6nm AMD APU (Zen 2 4c/8t + 8 RDNA 2 CUs)',
      ram: '16GB LPDDR5 RAM (6400 MT/s)',
      storage: '1TB NVMe SSD + High-speed MicroSD card slot',
      battery: '50Wh (3 to 12 hours gameplay depending on title), 45W USB-C PD with 2.5m cable',
      controls: 'Full-size thumbsticks, Dual capacitive trackpads, 4 assignable grip buttons, 6-axis IMU gyro',
      connectivity: 'Wi-Fi 6E (tri-band), Bluetooth 5.3 with dedicated antenna, USB-C with DisplayPort alt-mode',
      dimensions: '298 x 117 x 49 mm (640g)',
      os: 'SteamOS 3.5 (Arch Linux based with Proton compatibility)',
      warranty: '1 Year Valve Hardware Warranty'
    },
    pros: [
      'Sensational 90Hz HDR OLED screen brings vibrant colors and true pitch blacks',
      'Dual capacitive trackpads allow precise control in PC strategy and FPS games',
      'Instant game suspend and resume functionality works like magic',
      'Vast library of thousands of verified Steam PC games on the go'
    ],
    cons: [
      'Some anti-cheat protected games (e.g. Fortnite, Valorant) require Windows installation',
      'Form factor requires large carrying case for commute'
    ]
  },

  // ==================== MONITORS ====================
  {
    id: 'monitor-samsung-odyssey-g9',
    name: 'Samsung Odyssey OLED G9 (49" Curved)',
    brand: 'Samsung',
    category: 'monitors',
    categoryName: 'Monitors',
    price: 1399,
    originalPrice: 1799,
    rating: 4.8,
    reviewCount: 680,
    image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80',
    tagline: '49" Dual QHD 32:9 Curved QD-OLED with 240Hz, 0.03ms & Neo Quantum Processor Pro',
    features: [
      'Wi-Fi', 'Bluetooth', 'AI Features', 'Voice Assistant', 'AMOLED Display',
      'High Refresh Rate', 'Gaming Support', 'HDMI', 'USB-C', 'Smart Home Connectivity'
    ],
    specs: {
      display: '49.0" Curved (1800R) Dual QHD (5120x1440) 32:9 Aspect Ratio Quantum Dot OLED',
      refresh_rate: '240Hz with 0.03ms (GtG) response time, AMD FreeSync Premium Pro, VESA DisplayHDR True Black 400',
      processor: 'Neo Quantum Processor Pro for real-time frame analysis and brightness tuning',
      audio: 'Built-in 5W x 2 stereo speakers with CoreSync RGB rear ambient lighting',
      ports: '1x DisplayPort 1.4, 1x HDMI 2.1, 1x Micro-HDMI 2.1, USB Hub (3x USB 3.0)',
      smart_features: 'Tizen Smart Hub with Netflix, YouTube, Xbox Cloud Gaming without PC connected',
      dimensions: '1194.7 x 529.3 x 284.1 mm with stand (12.9 kg)',
      warranty: '3 Years Samsung OLED Burn-In Coverage'
    },
    pros: [
      'Equivalent to two seamless 27" QHD monitors side-by-side without any middle bezel',
      'Ultra-fast 240Hz 0.03ms QD-OLED response eliminates ghosting completely in flight sims and racing',
      'Slim metallic frame with Core Lighting+ rear customizable projection ring',
      'Built-in smart TV apps allow streaming movies without turning on your PC'
    ],
    cons: [
      'Requires substantial desktop depth and sturdy desk surface',
      'No built-in USB-C 90W Power Delivery laptop charging port'
    ]
  },
  {
    id: 'monitor-lg-ultragear-32gs',
    name: 'LG UltraGear 32" Dual-Mode OLED (32GS95UE)',
    brand: 'LG',
    category: 'monitors',
    categoryName: 'Monitors',
    price: 1199,
    originalPrice: 1399,
    rating: 4.9,
    reviewCount: 470,
    image: 'https://images.unsplash.com/photo-1547394765-185e1e68f34e?auto=format&fit=crop&w=800&q=80',
    tagline: 'Dual-Mode Technology: 4K 240Hz for Visuals OR Full HD 480Hz for Competitive eSports',
    features: [
      'High Refresh Rate', 'AMOLED Display', '4K Video', 'HDMI', 'Gaming Support',
      'Energy Efficient'
    ],
    specs: {
      display: '31.5" 4K UHD (3840x2160) WOLED with Anti-Glare low-reflection coating',
      dual_mode: 'Switch instantly between 4K @ 240Hz (0.03ms) and FHD (1920x1080) @ 480Hz (0.03ms)',
      hdr: 'VESA DisplayHDR True Black 400, 98.5% DCI-P3 color gamut, 1.5M:1 contrast ratio',
      sound: 'Pixel Sound: Front-firing acoustic sound integrated directly behind the OLED panel',
      ports: '2x HDMI 2.1 (4K 240Hz), 1x DisplayPort 1.4 (DSC), 2x USB 3.0 downstream, 4-pole headphone jack with DTS Headphone:X',
      sync: 'NVIDIA G-SYNC Compatible, AMD FreeSync Premium Pro, VESA ClearMR 13000',
      dimensions: '714.1 x 626.8 x 266.1 mm (9.0 kg)',
      warranty: '2 Years LG OLED Burn-in Warranty'
    },
    pros: [
      'Revolutionary Dual-Mode button switches between cinematic 4K 240Hz and blazing 480Hz eSports speed',
      'Pixel Sound technology projects audio directly from the screen glass towards your ears',
      'Matte anti-glare finish cuts down annoying desk lamp reflections',
      'G-Sync and FreeSync support with near-instantaneous 0.03ms response'
    ],
    cons: [
      'No built-in KVM switch or USB-C 90W single-cable laptop charging',
      'External power brick adapter is somewhat bulky'
    ]
  },
  {
    id: 'monitor-dell-ultrasharp-32',
    name: 'Dell UltraSharp 32" 6K Monitor (U3224KB)',
    brand: 'Dell',
    category: 'monitors',
    categoryName: 'Monitors',
    price: 1999,
    originalPrice: 2499,
    rating: 4.7,
    reviewCount: 230,
    image: 'https://images.unsplash.com/photo-1586210579191-33b45e38fa2c?auto=format&fit=crop&w=800&q=80',
    tagline: 'World’s First 6K Monitor with IPS Black Technology, 4K HDR Webcam & Thunderbolt 4 Hub 140W',
    features: [
      'AI Features', 'High-Resolution Camera', '4K Video', 'USB-C', 'HDMI',
      'Energy Efficient'
    ],
    specs: {
      display: '31.5" 6K (6144x3456) IPS Black panel with 2000:1 contrast ratio, 99% DCI-P3, 100% sRGB',
      webcam: 'Integrated 4K dual-gain HDR webcam with AI auto-framing and digital privacy shutter',
      hub: 'Thunderbolt 4 with 140W Power Delivery (EPR), 10Gbps USB-C, 2.5Gbps RJ45 Ethernet port, HDMI 2.1, mini-DP 2.1',
      kvm: 'Auto KVM switch and Picture-by-Picture (PbP) to control two PCs with one keyboard and mouse',
      audio: 'Dual 14W integrated speakers with noise-cancelling echo microphones',
      dimensions: '712.6 x 522.6 x 237 mm (11.8 kg)',
      warranty: '3 Years Dell Advanced Exchange Service'
    },
    pros: [
      'Extraordinary 6K resolution (over 21 million pixels) delivers razor-sharp text and graphics',
      'Single Thunderbolt 4 cable provides 140W fast laptop power, video, and 2.5G network connection',
      'IPS Black delivers double the contrast ratio of traditional IPS screens',
      'Built-in 4K webcam with physical motorized privacy shutter'
    ],
    cons: [
      'Refresh rate limited to 60Hz (not designed for high-FPS gaming)',
      'Top webcam housing adds noticeable height to upper bezel'
    ]
  },

  // ==================== PRINTERS ====================
  {
    id: 'printer-epson-ecotank-et5850',
    name: 'Epson EcoTank Pro ET-5850',
    brand: 'Epson',
    category: 'printers',
    categoryName: 'Printers',
    price: 799,
    originalPrice: 899,
    rating: 4.8,
    reviewCount: 710,
    image: 'https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?auto=format&fit=crop&w=800&q=80',
    tagline: 'Cartridge-Free Supertank All-in-One with Heat-Free PrecisionCore 25ppm & 500-Sheet Capacity',
    features: [
      'Wi-Fi', 'Bluetooth', 'Voice Assistant', 'Touchscreen', 'USB-C',
      'Smart Home Connectivity', 'Energy Efficient'
    ],
    specs: {
      print_technology: 'PrecisionCore Heat-Free 4S printhead with DURABrite pigment inks',
      speed: '25 ISO ppm in black and 25 ISO ppm in color with fast first page out in 5.5s',
      functions: 'Print, Copy, Scan, Fax with Auto 2-sided duplex printing and 50-sheet dual-scan ADF',
      display: '4.3" Color Touchscreen with intuitive navigation and job status',
      capacity: 'Dual 250-sheet front paper trays (500 sheets total) + 50-sheet rear feed',
      connectivity: 'Wi-Fi 5, Wi-Fi Direct, Ethernet, USB, Apple AirPlay 2, Epson Smart Panel app',
      ink_yield: 'Includes bottles in box to print up to 7,500 black / 6,000 color pages (80% ink savings)',
      dimensions: '425 x 500 x 350 mm (17.8 kg)',
      warranty: '2 Years with product registration'
    },
    pros: [
      'Massive refillable ink tanks save up to 80% on replacement ink costs compared to cartridges',
      'Fast 25 pages per minute laser-sharp pigment ink output resistant to water and highlighters',
      'Single-pass auto two-sided document feeder scans both sides of documents in seconds',
      'Zero warm-up time with Heat-Free technology saves power'
    ],
    cons: [
      'Larger desktop footprint than basic personal printers',
      'Higher initial hardware purchase cost offset by low ink cost'
    ]
  },
  {
    id: 'printer-hp-officejet-9135e',
    name: 'HP OfficeJet Pro 9135e All-in-One',
    brand: 'HP',
    category: 'printers',
    categoryName: 'Printers',
    price: 299,
    originalPrice: 349,
    rating: 4.6,
    reviewCount: 890,
    image: 'https://images.unsplash.com/photo-1589330694653-dad6ef0140be?auto=format&fit=crop&w=800&q=80',
    tagline: 'Professional High-Speed Color Printer with Self-Healing Wi-Fi & HP Wolf Security',
    features: [
      'Wi-Fi', 'Bluetooth', 'Voice Assistant', 'Touchscreen', 'Smart Home Connectivity',
      'Energy Efficient'
    ],
    specs: {
      speed: 'Up to 25 ppm black, 20 ppm color with automatic two-sided printing',
      adf: '2-sided single-pass 35-page automatic document feeder for copying and scanning',
      tray: '500-sheet input capacity (2x 250-sheet trays) for high-volume office tasks',
      screen: '4.3" Color Touchscreen with customizable one-touch Smart Tasks shortcuts',
      security: 'HP Wolf Pro Security with automated firmware threat protection and self-healing dual-band Wi-Fi',
      connectivity: 'Dual-band Wi-Fi with self-healing, Ethernet, USB 2.0, Apple AirPrint, Mopria',
      dimensions: '437 x 396 x 318 mm (11.8 kg)',
      warranty: '1 Year HP Commercial Warranty'
    },
    pros: [
      'Self-healing Wi-Fi automatically detects connection issues and reconnects',
      'Dual 250-sheet trays allow loading both letterhead and standard paper simultaneously',
      'HP Smart app allows printing and scanning directly to cloud storage from smartphone',
      'Fast single-pass two-sided scanning'
    ],
    cons: [
      'Requires standard HP ink cartridges rather than supertank bottles',
      'Requires internet connection during initial setup for HP+ features'
    ]
  },

  // ==================== ROUTERS ====================
  {
    id: 'router-asus-rog-be98',
    name: 'ASUS ROG Rapture GT-BE98 Pro Quad-Band Wi-Fi 7 Router',
    brand: 'ASUS',
    category: 'routers',
    categoryName: 'Routers',
    price: 799,
    originalPrice: 899,
    rating: 4.9,
    reviewCount: 310,
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80',
    tagline: 'Quad-Band Wi-Fi 7 with Speeds up to 30,000 Mbps, Dual 10G Ports & Multi-Link Operation',
    features: [
      'Wi-Fi', 'Bluetooth', 'AI Features', 'Gaming Support', 'USB-C',
      'Smart Home Connectivity', 'Energy Efficient'
    ],
    specs: {
      standards: 'Wi-Fi 7 (802.11be) Quad-Band (2.4GHz + Dual 5GHz + 6GHz 320MHz channels)',
      throughput: 'Up to 30,000 Mbps total aggregate bandwidth with 4096-QAM and Multi-Link Operation (MLO)',
      processor: '2.6 GHz Quad-Core 64-bit CPU with 2GB DDR4 RAM and advanced aluminum heatsinks',
      ports: '2x 10 Gbps Ethernet Ports (1x WAN/LAN, 1x LAN), 4x 2.5 Gbps LAN, 1x 1 Gbps LAN, 1x USB 3.2 Gen 1, 1x USB 2.0',
      gaming_features: 'Triple-level game acceleration, Mobile Game Mode, OpenNAT port forwarding, AiProtection Pro security',
      antennas: '8 external high-gain antennas with internal copper tubes for zero dead zones',
      dimensions: '350 x 350 x 220 mm (2.0 kg)',
      warranty: '3 Years ASUS Warranty'
    },
    pros: [
      'Future-proof Wi-Fi 7 speeds with ultra-wide 320MHz channels in the pristine 6GHz band',
      'Dual 10 Gigabit ports support multi-gigabit fiber internet subscriptions',
      'Multi-Link Operation (MLO) transmits data across multiple frequency bands at once for zero latency',
      'Built-in AiProtection commercial-grade security powered by Trend Micro without monthly fees'
    ],
    cons: [
      'Large spider-like footprint requires dedicated shelf space',
      'Best realized when client devices support Wi-Fi 7'
    ]
  },
  {
    id: 'router-tplink-deco-be85',
    name: 'TP-Link Deco BE85 Wi-Fi 7 Mesh System (2-Pack)',
    brand: 'TP-Link',
    category: 'routers',
    categoryName: 'Routers',
    price: 899,
    originalPrice: 999,
    rating: 4.8,
    reviewCount: 410,
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80',
    tagline: 'Whole Home Mesh Wi-Fi 7 with 22 Gbps Tri-Band Speed, 10G Fiber Backhaul & 7,600 sq ft Coverage',
    features: [
      'Wi-Fi', 'Bluetooth', 'AI Features', 'Voice Assistant', 'Smart Home Connectivity',
      'Energy Efficient'
    ],
    specs: {
      speed: 'Tri-Band Wi-Fi 7: 11520 Mbps on 6GHz + 8640 Mbps on 5GHz + 1376 Mbps on 2.4GHz (22 Gbps total)',
      coverage: 'Up to 7,600 sq. ft. seamless whole-home mesh coverage for over 200 connected devices',
      ports: '1x 10 Gbps SFP+/RJ45 Combo WAN/LAN, 1x 10 Gbps RJ45 port, 2x 2.5 Gbps ports, 1x USB 3.0 on each unit',
      backhaul: 'Multi-Link Mesh combines wireless and 10G wired backhaul simultaneously for maximum speed between nodes',
      smart_features: 'HomeShield network security, IoT network isolation, Alexa & Google Assistant voice control',
      dimensions: '128 x 128 x 236 mm per tower (1.3 kg)',
      warranty: '3 Years TP-Link Warranty'
    },
    pros: [
      'Provides seamless roaming throughout multi-story mansions and concrete walls without dropouts',
      'Includes 10G SFP+ optical fiber combo port for next-generation ISP connections',
      'AI-driven mesh algorithms adaptively route traffic based on household device usage patterns',
      'Elegant minimalist cylindrical tower aesthetic fits modern home decor'
    ],
    cons: [
      'Investment cost for a multi-node kit',
      'Some advanced parental controls require HomeShield Pro subscription'
    ]
  },

  // ==================== PROJECTORS ====================
  {
    id: 'proj-xgimi-horizon-ultra',
    name: 'XGIMI Horizon Ultra 4K Laser Projector',
    brand: 'XGIMI',
    category: 'projectors',
    categoryName: 'Projectors',
    price: 1599,
    originalPrice: 1699,
    rating: 4.8,
    reviewCount: 480,
    image: 'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=800&q=80',
    tagline: 'World’s First 4K Long-Throw Home Projector with Dolby Vision & Dual Light (LED + Laser)',
    features: [
      'Wi-Fi', 'Bluetooth', 'AI Features', 'Voice Assistant', 'High Refresh Rate',
      '4K Video', 'HDMI', 'Gaming Support', 'Smart Home Connectivity', 'Energy Efficient'
    ],
    specs: {
      resolution: '4K UHD (3840x2160) with Dolby Vision certification',
      brightness: '2300 ISO Lumens powered by Dual Light Laser & LED hybrid technology',
      projection_size: '40" to 200" image size with Optical Zoom and Dynamic Iris lens',
      intelligence: 'ISA 3.0: Auto Focus, Auto Keystone, Intelligent Screen Alignment, Wall Color Adaptation, Eye Protection',
      audio: 'Dual 12W Harman Kardon integrated speakers with Dolby Audio & DTS-HD',
      ports: '2x HDMI 2.1 (eARC, 18ms low latency gaming mode), 2x USB 2.0, Optical, Ethernet, 3.5mm jack',
      smart_os: 'Android TV 11 with Chromecast built-in and Google Assistant',
      dimensions: '265 x 224 x 170 mm (5.2 kg)',
      warranty: '2 Years XGIMI Warranty'
    },
    pros: [
      'Dual Light technology combines laser color precision with comfortable LED viewing without laser speckle',
      'World’s first 4K long-throw projector certified for Dolby Vision HDR',
      'ISA 3.0 automatically straightens and focuses the picture within seconds even on colored walls',
      'Harman Kardon audio produces clear dialogue and deep acoustics'
    ],
    cons: [
      'Netflix app requires quick workaround setup via desktop manager',
      'At 5.2 kg it is better suited for stationary tabletop or ceiling mount rather than backpack travel'
    ]
  },
  {
    id: 'proj-nebula-capsule-3',
    name: 'Anker Nebula Capsule 3 Laser 1080p Smart Projector',
    brand: 'Anker',
    category: 'projectors',
    categoryName: 'Projectors',
    price: 699,
    originalPrice: 799,
    rating: 4.7,
    reviewCount: 650,
    image: 'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=800&q=80',
    tagline: 'Soda-Can Sized Portable Laser Cinema with 2.5-Hour Built-in Battery & Google TV',
    features: [
      'Wi-Fi', 'Bluetooth', 'Voice Assistant', 'Fast Charging', 'Long Battery Life',
      'HDMI', 'USB-C', 'Smart Home Connectivity', 'Energy Efficient'
    ],
    specs: {
      resolution: '1080p Full HD (1920x1080) with Laser Light Engine',
      brightness: '300 ANSI Lumens (produces up to 120" display in darkened environments)',
      battery: '52Wh built-in rechargeable battery (Up to 2.5 hours movie playback or 8 hours Bluetooth speaker mode)',
      audio: '8W Dolby Digital speaker',
      automation: 'Autofocus and Auto Keystone in just 3 seconds',
      smart_os: 'Google TV with native licensed Netflix support',
      connectivity: 'Wi-Fi, Bluetooth 5.0, HDMI, USB-C Power Delivery charging, AUX out',
      dimensions: '83 x 83 x 170 mm (950g)',
      warranty: '1 Year Anker Nebula Warranty'
    },
    pros: [
      'Fits directly in beverage cup holders or backpack bottle sleeves for camping cinema nights',
      'Built-in battery runs a complete full-length movie without power cables',
      'Official Google TV with native Netflix streaming out of the box',
      'Can be powered on the go using standard 45W+ USB-C power banks'
    ],
    cons: [
      '300 ANSI Lumens is meant for dim or nighttime environments rather than direct sunlight',
      'Resolution is 1080p rather than native 4K'
    ]
  },

  // ==================== WASHING MACHINES ====================
  {
    id: 'wash-lg-thinq-ai',
    name: 'LG 5.0 cu. ft. Smart Front Load Washer with AI DD & TurboWash 360',
    brand: 'LG',
    category: 'washing-machines',
    categoryName: 'Washing Machines',
    price: 1199,
    originalPrice: 1399,
    rating: 4.8,
    reviewCount: 920,
    image: 'https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?auto=format&fit=crop&w=800&q=80',
    tagline: 'AI Direct Drive Fabric Sensor with TurboWash 360, Steam Allergiene & ThinQ Wi-Fi',
    features: [
      'Wi-Fi', 'AI Features', 'Voice Assistant', 'Touchscreen', 'Smart Home Connectivity',
      'Energy Efficient'
    ],
    specs: {
      capacity: '5.0 cu. ft. Mega Capacity (washes a king-size comforter & full sheet set in one load)',
      ai_technology: 'AI DD built-in sensors detect fabric weight & softness to automatically choose optimal wash motions',
      speed_wash: 'TurboWash 360 cleans full loads in just 29 minutes using 5 powerful variable spray jets',
      steam: 'Allergiene Steam Cycle certified by Asthma & Allergy Foundation to remove 95% of pet dander and dust mites',
      smart_connectivity: 'LG ThinQ Wi-Fi app, remote start, cycle download, proactive maintenance alerts, Alexa & Google Home',
      efficiency: 'ENERGY STAR Most Efficient certified with direct drive inverter motor',
      dimensions: '686 x 990 x 768 mm (92 kg)',
      warranty: '10 Years Direct Drive Motor Warranty'
    },
    pros: [
      'AI fabric detection reduces clothing wear and fabric damage by up to 18%',
      'TurboWash 360 uses 5 multi-angle jets to wash deep loads in under 30 minutes',
      'Sends smartphone notification when laundry cycle completes and can automatically sync cycle to matching dryer',
      'Ultra-quiet TrueBalance anti-vibration system'
    ],
    cons: [
      'Substantial front-to-back depth requires measuring laundry closet clearances',
      'Door swing direction is not reversible'
    ]
  },
  {
    id: 'wash-samsung-bespoke-ai',
    name: 'Samsung Bespoke AI Laundry Hub with MultiControl',
    brand: 'Samsung',
    category: 'washing-machines',
    categoryName: 'Washing Machines',
    price: 1349,
    originalPrice: 1549,
    rating: 4.7,
    reviewCount: 680,
    image: 'https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?auto=format&fit=crop&w=800&q=80',
    tagline: 'AI OptiWash & Auto Dispense System with SmartThings Energy & Flat Bespoke Panel',
    features: [
      'Wi-Fi', 'AI Features', 'Voice Assistant', 'Touchscreen', 'Smart Home Connectivity',
      'Energy Efficient'
    ],
    specs: {
      capacity: '5.3 cu. ft. Ultra Capacity with scratch-resistant tempered glass door',
      auto_dispenser: 'Auto Dispense System stores up to 32 loads of detergent and softener, dispensing precise amounts automatically',
      ai_optiwash: 'Turbidity and soil sensors detect dirt levels during wash to dynamically add time or detergent',
      smart_control: 'SmartThings App with AI Energy Mode (saves up to 70% energy using cold water wash with Ecobubble)',
      voice: 'Compatible with Bixby, Amazon Alexa, and Google Assistant',
      motor: 'Digital Inverter Motor with 20-year warranty, Super Speed wash in 28 mins',
      dimensions: '686 x 984 x 875 mm (98 kg)',
      warranty: '20 Years Inverter Motor Warranty'
    },
    pros: [
      'Auto Dispense stores over a month of detergent and calculates exact dosages to eliminate waste',
      'AI OptiWash dynamically adjusts cycle length in real time based on laundry water clarity',
      'Bespoke modern flat front with hidden central touch control panel',
      'SmartThings AI Energy Mode tracks daily kilowatt-hour electrical consumption'
    ],
    cons: [
      'Large detergent reservoir requires periodic warm water cleaning flush',
      'Requires Wi-Fi connection to access customized specialty wash cycles'
    ]
  },

  // ==================== REFRIGERATORS ====================
  {
    id: 'fridge-samsung-bespoke-4door',
    name: 'Samsung Bespoke 4-Door Flex Refrigerator with AI Family Hub',
    brand: 'Samsung',
    category: 'refrigerators',
    categoryName: 'Refrigerators',
    price: 2899,
    originalPrice: 3299,
    rating: 4.8,
    reviewCount: 520,
    image: 'https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?auto=format&fit=crop&w=800&q=80',
    tagline: '32" AI Family Hub+ Screen with Beverage Center, Dual Auto Ice Maker & AI Vision Inside',
    features: [
      'Wi-Fi', 'Bluetooth', 'AI Features', 'Voice Assistant', 'Touchscreen',
      'Smart Home Connectivity', 'Energy Efficient'
    ],
    specs: {
      capacity: '29 cu. ft. Total Storage with FlexZone convertible bottom-right compartment (Fridge or Freezer)',
      screen: '32" Full HD AI Family Hub+ Touchscreen with Picture-in-Picture TV streaming, recipes & family photo boards',
      ai_vision: 'AI Vision Inside smart internal camera recognizes 33 fresh food items and tracks expiration dates',
      beverage_center: 'Hidden Beverage Center with autofill filtered water pitcher and dual ice maker (Cubed & Ice Bites)',
      smart_home: 'Built-in SmartThings Hub to control lights, cameras, doorbells directly from the fridge door',
      efficiency: 'ENERGY STAR Certified with Digital Inverter Compressor',
      dimensions: '908 x 1825 x 861 mm (162 kg)',
      warranty: '10 Years Digital Inverter Compressor Warranty'
    },
    pros: [
      'Huge 32-inch touchscreen display allows watching YouTube/TV, mirroring smartphones, and streaming music while cooking',
      'Internal AI camera automatically logs groceries and warns before food expires',
      'FlexZone compartment can be switched between fridge, soft freeze, or meat chiller at the touch of a button',
      'Customizable colored glass door panels can be swapped out whenever your kitchen decor changes'
    ],
    cons: [
      'High investment for a premium smart refrigerator',
      'Requires ample kitchen doorway width for delivery installation'
    ]
  },
  {
    id: 'fridge-lg-instaview-craft-ice',
    name: 'LG 28 cu. ft. Smart InstaView Door-in-Door Fridge with Craft Ice',
    brand: 'LG',
    category: 'refrigerators',
    categoryName: 'Refrigerators',
    price: 2499,
    originalPrice: 2899,
    rating: 4.7,
    reviewCount: 640,
    image: 'https://images.unsplash.com/photo-1584992236310-6edddc08acff?auto=format&fit=crop&w=800&q=80',
    tagline: 'Knock Twice to See Inside with Dual Craft Ice Spheres, ThinQ Smart Diagnosis & Linear Cooling',
    features: [
      'Wi-Fi', 'AI Features', 'Voice Assistant', 'Touchscreen', 'Smart Home Connectivity',
      'Energy Efficient'
    ],
    specs: {
      capacity: '28 cu. ft. French Door layout with Door-in-Door quick-access compartment',
      instaview: 'Mirrored glass panel illuminates with two quick knocks so you can see inside without letting cold air escape',
      craft_ice: 'Dual Ice Maker produces standard cubed/crushed ice PLUS slow-melting spherical Craft Ice for craft cocktails',
      cooling: 'Linear Cooling keeps temperature fluctuations within 1°F, with Door Cooling+ multi-flow air vents',
      smart_connectivity: 'LG ThinQ Wi-Fi with voice control via Amazon Alexa and Google Assistant',
      dimensions: '908 x 1772 x 920 mm (150 kg)',
      warranty: '10 Years Linear Compressor Warranty'
    },
    pros: [
      'InstaView glass lets you browse beverages without opening doors, reducing cooling loss by 41%',
      'Automatic Craft Ice maker creates crystal clear 2-inch cocktail ice spheres at home',
      'Door-in-Door provides quick grab-and-go access to frequently used milk and sauces',
      'ThinQ Smart Alerts notify your phone if the refrigerator door was accidentally left ajar'
    ],
    cons: [
      'Craft Ice maker takes up to 24 hours to generate full batch of round spheres',
      'Stainless finish requires microfiber wipe for smudge-free look'
    ]
  },

  // ==================== AIR CONDITIONERS ====================
  {
    id: 'ac-daikin-smart-inverter',
    name: 'Daikin 18,000 BTU 1.5-Ton Smart Inverter Split AC',
    brand: 'Daikin',
    category: 'air-conditioners',
    categoryName: 'Air Conditioners',
    price: 849,
    originalPrice: 949,
    rating: 4.8,
    reviewCount: 780,
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
    tagline: '5-Star Triple Display with Wi-Fi Control, PM 2.5 Air Filter & 3D Airflow Coanda Cooling',
    features: [
      'Wi-Fi', 'AI Features', 'Voice Assistant', 'Smart Home Connectivity',
      'Energy Efficient'
    ],
    specs: {
      capacity: '18,000 BTU (1.5 Ton) suitable for rooms up to 250 sq ft (50°C extreme ambient operation)',
      inverter: 'Neo Swing Inverter Compressor with Power Chill rapid 16°C pull-down cooling in 10 minutes',
      airflow: 'Coanda 3D Airflow drafts cool air upward along ceiling for uniform non-drafty temperature distribution',
      filtration: 'PM 2.5 particulate filter + Titanium Apatite deodorizing air purifier filter',
      smart: 'Built-in Wi-Fi Daikin Mobile Controller App, geofencing auto-shutoff, Alexa and Google Assistant voice commands',
      sound_level: 'Whisper-quiet 19 dB(A) in Quiet Sleep mode',
      energy_rating: '5-Star ISEER 5.2 certified with intelligent ECO power saving',
      warranty: '10 Years Compressor Warranty + 5 Years PCB Warranty'
    },
    pros: [
      'Coanda 3D draft-free airflow directs cool air across the ceiling rather than blasting directly onto people',
      'Ultra-silent 19 dBA operation is practically silent during night sleep',
      'Smart mobile app with geofencing automatically powers down AC when everyone leaves the house',
      'Built-in PM2.5 air purification filters indoor dust and fine allergens'
    ],
    cons: [
      'Requires certified HVAC technician for split-wall installation and copper line piping',
      'Indoor display LED cannot be fully color-customized'
    ]
  },
  {
    id: 'ac-lg-dual-inverter-ai',
    name: 'LG 1.5 Ton Dual Inverter Smart Wi-Fi Air Conditioner',
    brand: 'LG',
    category: 'air-conditioners',
    categoryName: 'Air Conditioners',
    price: 799,
    originalPrice: 899,
    rating: 4.7,
    reviewCount: 650,
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
    tagline: 'AI Convertible 6-in-1 Cooling with Ocean Black Protection & ThinQ Voice Control',
    features: [
      'Wi-Fi', 'AI Features', 'Voice Assistant', 'Smart Home Connectivity',
      'Energy Efficient'
    ],
    specs: {
      capacity: '1.5 Ton (18,000 BTU) with Dual Rotary Inverter Compressor',
      modes: 'AI Convertible 6-in-1 allows scaling cooling capacity from 40% up to 110% depending on occupancy',
      protection: '100% Copper Tubes with Ocean Black Fin anti-corrosion coating against salt air and rust',
      smart: 'LG ThinQ Wi-Fi app, Smart Diagnosis, Alexa, Google Assistant, real-time energy monitoring dashboard',
      filtration: 'HD Filter with Anti-Virus and antibacterial micro-mesh protection',
      refrigerant: 'Eco-friendly R32 refrigerant with zero ozone depletion potential',
      warranty: '10 Years Compressor Warranty with Gas Charging Included'
    },
    pros: [
      'AI Convertible 6-in-1 mode matches cooling capacity to exact number of people in the room to save electricity',
      'Ocean Black Fin coating ensures long durability against coastal corrosion and humidity',
      'ThinQ energy tracking app provides weekly and monthly kilowatt-hour consumption reports',
      'Fast 15-minute quick cool turbo mode'
    ],
    cons: [
      'Physical remote control does not feature backlighting in the dark',
      'App setup requires initial 2.4GHz Wi-Fi band'
    ]
  }
];

export const BRANDS = Array.from(new Set(PRODUCTS.map(p => p.brand))).sort();
