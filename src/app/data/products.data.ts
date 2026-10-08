import { Product, Category, Review, Order } from '../models/product.interface';

export const PRODUCTS_DATA: Product[] = [
  {
    "id": 1,
    "name": "Soundcore Q20i Hybrid Active Noise Cancelling Headphones",
    "slug": "soundcore-q20i-hybrid-anc",
    "brand": "Soundcore",
    "category": "Audio",
    "price": 2499,
    "oldPrice": 2999,
    "discountPercentage": 17,
    "rating": 4.7,
    "reviewCount": 248,
    "stock": 28,
    "isFeatured": true,
    "isBestSeller": true,
    "isNewArrival": false,
    "images": [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=800&auto=format&fit=crop&q=80"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=80",
    "description": "Equipped with hybrid active noise cancellation technology that reduces ambient noise by up to 90%. Enjoy 40 hours of playtime with ANC enabled or 60 hours in standard mode. Custom 40mm oversized dynamic drivers produce exceptional Hi-Res audio with crisp detail and deep bass.",
    "shortDescription": "Hybrid ANC, 40H battery life, Hi-Res Audio, 40mm dynamic drivers with Soundcore app EQ control.",
    "specifications": {
      "Driver Size": "40 mm Dynamic",
      "Frequency Response": "16 Hz - 40 kHz",
      "Playtime": "40 Hours (ANC On) / 60 Hours (ANC Off)",
      "Charging Time": "1.5 Hours (USB-C Fast Charging)",
      "Bluetooth Version": "5.0",
      "Microphones": "Built-in with AI Noise Reduction",
      "Warranty": "18 Months Official Egypt Warranty"
    },
    "tags": [
      "ANC",
      "Bluetooth",
      "Over-Ear",
      "Hi-Res",
      "Soundcore"
    ]
  },
  {
    "id": 2,
    "name": "Logitech MX Master 3S Wireless Performance Mouse",
    "slug": "logitech-mx-master-3s",
    "brand": "Logitech",
    "category": "Keyboards & Mice",
    "price": 4899,
    "oldPrice": 5499,
    "discountPercentage": 11,
    "rating": 4.9,
    "reviewCount": 412,
    "stock": 14,
    "isFeatured": true,
    "isBestSeller": true,
    "isNewArrival": false,
    "images": [
      "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=800&auto=format&fit=crop&q=80"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500&auto=format&fit=crop&q=80",
    "description": "The icon remastered. Features 8,000 DPI track-on-glass optical sensor and Quiet Clicks delivering 90% less noise with satisfying tactile feedback. MagSpeed electromagnetic scrolling wheels scroll 1,000 lines in a second with pixel-precise control.",
    "shortDescription": "8K DPI optical sensor, MagSpeed electromagnetic scroll, Quiet Clicks, Bluetooth & Logi Bolt, up to 70 days battery.",
    "specifications": {
      "Sensor Technology": "Darkfield High Precision (8000 DPI)",
      "Scroll Wheel": "MagSpeed Electromagnetic with SmartShift",
      "Connectivity": "Bluetooth Low Energy & Logi Bolt USB",
      "Battery": "Rechargeable Li-Po (500 mAh) - 70 days per charge",
      "Custom Buttons": "7 buttons customizable via Logi Options+",
      "Weight": "141 g",
      "Warranty": "2 Years Official Logitech Egypt"
    },
    "tags": [
      "Logitech",
      "Wireless Mouse",
      "Ergonomic",
      "Productivity",
      "8K DPI"
    ]
  },
  {
    "id": 3,
    "name": "Keychron K2 Pro QMK/VIA Wireless Mechanical Keyboard",
    "slug": "keychron-k2-pro-wireless",
    "brand": "Keychron",
    "category": "Keyboards & Mice",
    "price": 4950,
    "oldPrice": 5600,
    "discountPercentage": 12,
    "rating": 4.8,
    "reviewCount": 189,
    "stock": 9,
    "isFeatured": true,
    "isBestSeller": false,
    "isNewArrival": true,
    "images": [
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1595225476474-87563907a212?w=800&auto=format&fit=crop&q=80"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500&auto=format&fit=crop&q=80",
    "description": "The K2 Pro allows anyone to master any keyboard keys or macro commands through VIA software. Hot-swappable sockets support both 3-pin and 5-pin MX mechanical switches. Includes sound-absorbing foam, thick silicone bottom pad, and pre-lubed screw-in stabilizers for a thocky typing feel.",
    "shortDescription": "75% compact layout, QMK/VIA programmable, Hot-swappable Keychron K Pro switches, Mac & Windows support.",
    "specifications": {
      "Layout": "75% (84 Keys)",
      "Switch Type": "Keychron K Pro Red (Linear / Pre-lubed)",
      "Keycaps": "Double-shot PBT (OSA Profile)",
      "Connectivity": "Bluetooth 5.1 & Type-C Wired",
      "Battery Capacity": "4000 mAh (Up to 300 Hours non-backlit)",
      "Backlight": "South-facing RGB Backlight",
      "Warranty": "1 Year Official Warranty"
    },
    "tags": [
      "Keychron",
      "Mechanical Keyboard",
      "Hot-swap",
      "Wireless",
      "Custom Keyboard"
    ]
  },
  {
    "id": 4,
    "name": "Anker 737 Power Bank (PowerCore 24K 140W)",
    "slug": "anker-737-power-bank-24k",
    "brand": "Anker",
    "category": "Power & Charging",
    "price": 4699,
    "oldPrice": 5299,
    "discountPercentage": 11,
    "rating": 4.9,
    "reviewCount": 310,
    "stock": 18,
    "isFeatured": true,
    "isBestSeller": true,
    "isNewArrival": false,
    "images": [
      "https://images.unsplash.com/photo-1609592426868-b7a42194380f?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=800&auto=format&fit=crop&q=80"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1609592426868-b7a42194380f?w=500&auto=format&fit=crop&q=80",
    "description": "Equipped with the latest Power Delivery 3.1 and bi-directional technology to quickly recharge the portable charger or get a 140W ultra-powerful charge. Smart digital display shows output and input power, battery level, and estimated time to fully recharge.",
    "shortDescription": "24,000mAh capacity, 140W two-way fast charging, smart digital display, charges MacBook Pro and iPhone simultaneously.",
    "specifications": {
      "Capacity": "24,000 mAh / 86.4 Wh",
      "Max Output": "140W Power Delivery 3.1",
      "Ports": "2x USB-C (140W Max), 1x USB-A (18W)",
      "Display": "Color Smart Digital Screen",
      "Weight": "635 g",
      "Compatibility": "Laptops, Tablets, Phones, Steam Deck",
      "Warranty": "18 Months Anker Egypt Guarantee"
    },
    "tags": [
      "Anker",
      "Power Bank",
      "140W",
      "Fast Charging",
      "MacBook"
    ]
  },
  {
    "id": 5,
    "name": "Soundcore Liberty 4 NC True Wireless Earbuds",
    "slug": "soundcore-liberty-4-nc",
    "brand": "Soundcore",
    "category": "Audio",
    "price": 3499,
    "oldPrice": 4100,
    "discountPercentage": 15,
    "rating": 4.8,
    "reviewCount": 382,
    "stock": 22,
    "isFeatured": true,
    "isBestSeller": true,
    "isNewArrival": false,
    "images": [
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1572536147248-ac59a8abfa4b?w=800&auto=format&fit=crop&q=80"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500&auto=format&fit=crop&q=80",
    "description": "Reduce noise by up to 98.5% with high-sensitivity in-ear sound sensor, oversized driver, and innovative noise-isolation chamber. Features Adaptive ANC 2.0 that calculates real-time sound levels in your ears and external environment.",
    "shortDescription": "98.5% noise reduction, Adaptive ANC 2.0, Hi-Res wireless audio with LDAC, 50-hour total battery.",
    "specifications": {
      "Driver": "11 mm Custom Drivers",
      "Noise Cancellation": "Adaptive ANC 2.0 with HearID 2.0",
      "Battery Life": "10H single charge / 50H with wireless charging case",
      "Water Resistance": "IPX4",
      "Bluetooth": "5.3 with Multipoint connection",
      "Warranty": "18 Months Official Warranty"
    },
    "tags": [
      "Soundcore",
      "TWS",
      "Earbuds",
      "Noise Cancelling",
      "LDAC"
    ]
  },
  {
    "id": 6,
    "name": "UGREEN Revodok Pro 9-in-1 Dual 4K USB-C Hub",
    "slug": "ugreen-revodok-pro-9-in-1",
    "brand": "UGREEN",
    "category": "Desk Setup & Hubs",
    "price": 2899,
    "oldPrice": 3299,
    "discountPercentage": 12,
    "rating": 4.7,
    "reviewCount": 164,
    "stock": 31,
    "isFeatured": false,
    "isBestSeller": true,
    "isNewArrival": false,
    "images": [
      "https://images.unsplash.com/photo-1544652478-6653e09f18a2?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=800&auto=format&fit=crop&q=80"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1544652478-6653e09f18a2?w=500&auto=format&fit=crop&q=80",
    "description": "Massive 9-in-1 expansion dock. Features 2x HDMI (supporting dual 4K@60Hz monitors), 100W Power Delivery pass-through, Gigabit Ethernet port, 2x USB 3.0 ports (5Gbps), and SD/TF card reader slots. Housed in premium aerospace-grade aluminum.",
    "shortDescription": "Dual 4K@60Hz HDMI, 100W PD charging, 1Gbps Ethernet, 2x USB-A 3.0, SD/MicroSD slots, full aluminum alloy chassis.",
    "specifications": {
      "Video Output": "Dual HDMI 4K@60Hz",
      "Power Delivery": "100W USB-C Pass-through",
      "Network": "Gigabit RJ45 Ethernet (1000 Mbps)",
      "Data Ports": "2x USB 3.0 5Gbps + SD/TF 104MB/s",
      "Material": "Anodized Aluminum Alloy",
      "Compatibility": "MacBook Pro/Air, Dell XPS, Windows laptops, iPad Pro",
      "Warranty": "1 Year Egyptian Distributor Warranty"
    },
    "tags": [
      "UGREEN",
      "USB-C Hub",
      "Docking Station",
      "Dual Monitor",
      "Desk Setup"
    ]
  },
  {
    "id": 7,
    "name": "Xiaomi Watch 2 Pro LTE with Wear OS",
    "slug": "xiaomi-watch-2-pro-lte",
    "brand": "Xiaomi",
    "category": "Smart Watches",
    "price": 7999,
    "oldPrice": 8999,
    "discountPercentage": 11,
    "rating": 4.6,
    "reviewCount": 95,
    "stock": 12,
    "isFeatured": true,
    "isBestSeller": false,
    "isNewArrival": true,
    "images": [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=800&auto=format&fit=crop&q=80"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&auto=format&fit=crop&q=80",
    "description": "Powered by Snapdragon W5+ Gen 1 flagship processor and Google Wear OS. Download apps directly from Google Play, pay on the go, track 150+ sports modes, and monitor health with dual-band GNSS positioning and ECG heart sensors.",
    "shortDescription": "Google Wear OS, Snapdragon W5+ Gen 1, 1.43\" AMOLED display, dual-band GPS, 65-hour battery life.",
    "specifications": {
      "Display": "1.43-inch AMOLED (466x466 px, 600 nits)",
      "Processor": "Qualcomm Snapdragon W5+ Gen 1",
      "Operating System": "Wear OS by Google",
      "Sensors": "Heart Rate, SpO2, Sleep, Bioelectrical Impedance (BIA)",
      "Water Resistance": "5ATM (50 meters)",
      "Connectivity": "Bluetooth 5.2, Wi-Fi 2.4/5GHz, NFC, GPS",
      "Warranty": "1 Year Xiaomi Egypt Official"
    },
    "tags": [
      "Xiaomi",
      "Smartwatch",
      "Wear OS",
      "AMOLED",
      "Fitness"
    ]
  },
  {
    "id": 8,
    "name": "JBL Flip 6 Portable Waterproof Bluetooth Speaker",
    "slug": "jbl-flip-6-portable-speaker",
    "brand": "JBL",
    "category": "Audio",
    "price": 4299,
    "oldPrice": 4899,
    "discountPercentage": 12,
    "rating": 4.8,
    "reviewCount": 320,
    "stock": 19,
    "isFeatured": false,
    "isBestSeller": true,
    "isNewArrival": false,
    "images": [
      "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=800&auto=format&fit=crop&q=80"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=500&auto=format&fit=crop&q=80",
    "description": "Bold sound for every adventure. JBL Flip 6 features a 2-way speaker system designed to deliver loud, crystal clear, powerful audio. Its racetrack-shaped woofer delivers exceptional low and mid frequencies, while a separate tweeter produces crisp, clear highs.",
    "shortDescription": "IP67 waterproof & dustproof, 12 hours playtime, PartyBoost compatible, 2-way speaker system.",
    "specifications": {
      "Output Power": "20W RMS Woofer + 10W RMS Tweeter",
      "Battery Life": "Up to 12 Hours",
      "Ingress Protection": "IP67 Waterproof and Dustproof",
      "Bluetooth": "Version 5.1",
      "Weight": "550 g",
      "Warranty": "1 Year Official Egypt Warranty"
    },
    "tags": [
      "JBL",
      "Bluetooth Speaker",
      "Waterproof",
      "Portable",
      "Audio"
    ]
  },
  {
    "id": 9,
    "name": "Baseus Blade 100W Ultra-Slim Laptop Power Bank",
    "slug": "baseus-blade-100w-ultra-slim",
    "brand": "Baseus",
    "category": "Power & Charging",
    "price": 3299,
    "oldPrice": 3899,
    "discountPercentage": 15,
    "rating": 4.7,
    "reviewCount": 142,
    "stock": 24,
    "isFeatured": false,
    "isBestSeller": false,
    "isNewArrival": true,
    "images": [
      "https://images.unsplash.com/photo-1585338107529-13afc5f02586?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1609592426868-b7a42194380f?w=800&auto=format&fit=crop&q=80"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1585338107529-13afc5f02586?w=500&auto=format&fit=crop&q=80",
    "description": "Designed for modern remote professionals. Ultra-thin 18mm flat design fits effortlessly into any laptop backpack or briefcase. Delivers up to 100W PD output to charge a 16\" MacBook Pro from 0 to 50% in just 30 minutes.",
    "shortDescription": "20,000mAh, 100W USB-C PD fast charge, 18mm ultra-thin profile, dual Type-C and dual USB-A ports.",
    "specifications": {
      "Capacity": "20,000 mAh (74 Wh)",
      "Thickness": "Only 18 mm",
      "Max Power": "100W High Speed Fast Charging",
      "Ports": "2x USB-C (100W) + 2x USB-A (30W)",
      "Display": "Digital Status LED Screen",
      "Warranty": "1 Year Official Baseus Egypt Warranty"
    },
    "tags": [
      "Baseus",
      "Power Bank",
      "100W",
      "Ultra-thin",
      "Laptop Charger"
    ]
  },
  {
    "id": 10,
    "name": "Logitech MX Keys S Advanced Wireless Keyboard",
    "slug": "logitech-mx-keys-s",
    "brand": "Logitech",
    "category": "Keyboards & Mice",
    "price": 4999,
    "oldPrice": 5699,
    "discountPercentage": 12,
    "rating": 4.8,
    "reviewCount": 278,
    "stock": 16,
    "isFeatured": true,
    "isBestSeller": true,
    "isNewArrival": false,
    "images": [
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1595225476474-87563907a212?w=800&auto=format&fit=crop&q=80"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500&auto=format&fit=crop&q=80",
    "description": "Fluid, ultra-precise typing with spherically-dished keys shaped for your fingertips. Smart illumination detects your hands as they approach and adjusts brightness according to room lighting. Pair with up to 3 devices across Windows and macOS.",
    "shortDescription": "Low-profile fluid scissor keys, smart proximity backlighting, Logi Bolt & Bluetooth, cross-computer Flow.",
    "specifications": {
      "Key Switch": "Scissor mechanism with Perfect Stroke keys",
      "Backlight": "Hand proximity sensor and ambient light sensor",
      "Connectivity": "Bluetooth Low Energy & Logi Bolt",
      "Multi-Device": "Easy-Switch between 3 devices",
      "Battery": "USB-C rechargeable (Up to 5 months without backlight)",
      "Warranty": "2 Years Official Logitech Egypt"
    },
    "tags": [
      "Logitech",
      "Wireless Keyboard",
      "Low Profile",
      "Office",
      "MX Keys"
    ]
  },
  {
    "id": 11,
    "name": "Razer BlackWidow V4 X Mechanical Gaming Keyboard",
    "slug": "razer-blackwidow-v4-x",
    "brand": "Razer",
    "category": "Gaming Accessories",
    "price": 5299,
    "oldPrice": 5999,
    "discountPercentage": 11,
    "rating": 4.7,
    "reviewCount": 156,
    "stock": 11,
    "isFeatured": false,
    "isBestSeller": false,
    "isNewArrival": true,
    "images": [
      "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1541140532154-b024d705b909?w=800&auto=format&fit=crop&q=80"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=500&auto=format&fit=crop&q=80",
    "description": "Upgrade your battlestation with Razer Green Mechanical switches with clicky, tactile execution. Features 6 dedicated macro keys, internal sound dampening foam, lubricated stabilizers, and per-key Razer Chroma RGB illumination.",
    "shortDescription": "Razer Green Clicky Switches, 6 dedicated macro keys, multi-function roller, Doubleshot ABS keycaps.",
    "specifications": {
      "Switch Type": "Razer Green Mechanical (Clicky & Tactile)",
      "Keycaps": "Doubleshot ABS Keycaps",
      "Polling Rate": "8000 Hz HyperPolling",
      "Lighting": "Razer Chroma RGB Per-Key",
      "Macro Keys": "6 Dedicated Macro Keys",
      "Warranty": "2 Years Razer Official Warranty"
    },
    "tags": [
      "Razer",
      "Gaming Keyboard",
      "Mechanical",
      "RGB",
      "Gaming Gear"
    ]
  },
  {
    "id": 12,
    "name": "Anker Prime 67W GaN Wall Charger (3 Ports)",
    "slug": "anker-prime-67w-gan-charger",
    "brand": "Anker",
    "category": "Power & Charging",
    "price": 1999,
    "oldPrice": 2399,
    "discountPercentage": 16,
    "rating": 4.9,
    "reviewCount": 215,
    "stock": 45,
    "isFeatured": false,
    "isBestSeller": true,
    "isNewArrival": false,
    "images": [
      "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1609592426868-b7a42194380f?w=800&auto=format&fit=crop&q=80"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=500&auto=format&fit=crop&q=80",
    "description": "Charge your phone, tablet, and MacBook simultaneously from a single ultra-compact charger. Powered by GaNPrime technology with ActiveShield 2.0 temperature monitoring that checks temperature 3 million times per day.",
    "shortDescription": "67W high-speed charging, 2x USB-C + 1x USB-A, 51% smaller than original 67W MacBook charger.",
    "specifications": {
      "Total Wattage": "67W Max",
      "Input": "100-240V ~ 50/60Hz (Egyptian & Worldwide)",
      "Output Ports": "2x USB-C + 1x USB-A",
      "Technology": "GaNPrime with ActiveShield 2.0",
      "Dimensions": "40 x 39 x 50 mm",
      "Warranty": "18 Months Anker Egypt Guarantee"
    },
    "tags": [
      "Anker",
      "GaN Charger",
      "Fast Charging",
      "USB-C",
      "Power Adapter"
    ]
  },
  {
    "id": 13,
    "name": "UGREEN Aluminum Ergonomic Laptop Stand",
    "slug": "ugreen-aluminum-laptop-stand",
    "brand": "UGREEN",
    "category": "Desk Setup & Hubs",
    "price": 1199,
    "oldPrice": 1450,
    "discountPercentage": 17,
    "rating": 4.8,
    "reviewCount": 184,
    "stock": 35,
    "isFeatured": false,
    "isBestSeller": true,
    "isNewArrival": false,
    "images": [
      "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1544652478-6653e09f18a2?w=800&auto=format&fit=crop&q=80"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500&auto=format&fit=crop&q=80",
    "description": "Crafted from sturdy aerospace-grade aluminum alloy with dual adjustable hinges. Elevates your laptop to eye level to alleviate neck stiffness and improve posture. Open ventilated design promotes airflow to keep your laptop cool.",
    "shortDescription": "Heavy-duty aluminum build, supports up to 17.3-inch laptops, dual-axis angle adjustment, non-slip silicone pads.",
    "specifications": {
      "Material": "Solid Anodized Aluminum Alloy",
      "Supported Laptop Sizes": "10 to 17.3 inches",
      "Max Load Capacity": "5 kg (11 lbs)",
      "Height Range": "Adjustable from 5 cm to 30 cm",
      "Protection": "Anti-scratch Silicone Pads on all contact points",
      "Warranty": "1 Year UGREEN Warranty"
    },
    "tags": [
      "UGREEN",
      "Laptop Stand",
      "Ergonomic",
      "Desk Setup",
      "Aluminum"
    ]
  },
  {
    "id": 14,
    "name": "Samsung Galaxy Watch 6 Classic 47mm (Bluetooth)",
    "slug": "samsung-galaxy-watch-6-classic-47mm",
    "brand": "Samsung",
    "category": "Smart Watches",
    "price": 9499,
    "oldPrice": 10999,
    "discountPercentage": 13,
    "rating": 4.8,
    "reviewCount": 198,
    "stock": 8,
    "isFeatured": true,
    "isBestSeller": false,
    "isNewArrival": false,
    "images": [
      "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&auto=format&fit=crop&q=80"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=500&auto=format&fit=crop&q=80",
    "description": "The return of the iconic physical rotating bezel with a 30% slimmer frame and 20% larger sapphire crystal Super AMOLED screen. Tracks body composition (BIA), advanced sleep coaching, continuous heart rate, and blood oxygen levels.",
    "shortDescription": "Physical rotating bezel, Sapphire crystal display, Body composition BIA sensor, Wear OS powered by Samsung.",
    "specifications": {
      "Display": "1.5\" Super AMOLED (480x480 px, Sapphire Crystal)",
      "Material": "Stainless Steel Case with Hybrid Eco-Leather Band",
      "OS": "Wear OS 4 with One UI Watch 5",
      "Durability": "5ATM + IP68 / MIL-STD-810H Certified",
      "Battery": "425 mAh with Fast Wireless Charging",
      "Warranty": "1 Year Samsung Egypt Official"
    },
    "tags": [
      "Samsung",
      "Galaxy Watch",
      "Smartwatch",
      "Rotating Bezel",
      "Fitness"
    ]
  },
  {
    "id": 15,
    "name": "Razer DeathAdder V3 Pro Wireless Gaming Mouse",
    "slug": "razer-deathadder-v3-pro",
    "brand": "Razer",
    "category": "Gaming Accessories",
    "price": 5499,
    "oldPrice": 6200,
    "discountPercentage": 11,
    "rating": 4.9,
    "reviewCount": 230,
    "stock": 15,
    "isFeatured": false,
    "isBestSeller": true,
    "isNewArrival": false,
    "images": [
      "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=800&auto=format&fit=crop&q=80"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=500&auto=format&fit=crop&q=80",
    "description": "With an ultra-lightweight 63g design refined with top esports pros, the DeathAdder V3 Pro delivers unmatched handling. Features the Razer Focus Pro 30K Optical Sensor and Gen-3 Optical Mouse Switches with 90 million click lifecycle.",
    "shortDescription": "63g ultra-lightweight ergonomic shape, Focus Pro 30K Optical Sensor, Optical Gen-3 switches, 90-hour battery life.",
    "specifications": {
      "Weight": "63 grams (Ultra-lightweight)",
      "Sensor": "Focus Pro 30K Optical Sensor (30,000 DPI)",
      "Switches": "Optical Mouse Switches Gen-3 (90M clicks)",
      "Connectivity": "Razer HyperSpeed Wireless & Type-C Speedflex",
      "Battery Life": "Up to 90 continuous hours",
      "Warranty": "2 Years Razer Official Warranty"
    },
    "tags": [
      "Razer",
      "Gaming Mouse",
      "Wireless",
      "Esports",
      "Lightweight"
    ]
  },
  {
    "id": 16,
    "name": "Soundcore Motion+ 30W Hi-Res Bluetooth Speaker",
    "slug": "soundcore-motion-plus-speaker",
    "brand": "Soundcore",
    "category": "Audio",
    "price": 3699,
    "oldPrice": 4299,
    "discountPercentage": 14,
    "rating": 4.8,
    "reviewCount": 260,
    "stock": 17,
    "isFeatured": false,
    "isBestSeller": false,
    "isNewArrival": false,
    "images": [
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=800&auto=format&fit=crop&q=80"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&auto=format&fit=crop&q=80",
    "description": "Packed with two ultra-high frequency tweeters, neodymium woofers, and passive radiators to produce 30W of rich, balanced sound. Features Qualcomm aptX audio for lossless music transmission and IPX7 waterproof rating.",
    "shortDescription": "30W Hi-Res Audio with Qualcomm aptX, 15-degree upward angle dispersion, 12H playtime, IPX7 waterproof.",
    "specifications": {
      "Power Output": "30 Watts",
      "Audio Codec": "Qualcomm aptX, SBC, AAC",
      "Frequency Response": "50 Hz - 40 kHz (Hi-Res Certified)",
      "Battery Life": "Up to 12 Hours (6,700 mAh battery)",
      "Waterproof Rating": "IPX7",
      "Warranty": "18 Months Official Warranty"
    },
    "tags": [
      "Soundcore",
      "Hi-Res Audio",
      "Bluetooth Speaker",
      "aptX",
      "IPX7"
    ]
  },
  {
    "id": 17,
    "name": "Baseus MagSafe 20W Magnetic Wireless Power Bank 10,000mAh",
    "slug": "baseus-magsafe-magnetic-power-bank",
    "brand": "Baseus",
    "category": "Mobile Accessories",
    "price": 1850,
    "oldPrice": 2200,
    "discountPercentage": 15,
    "rating": 4.6,
    "reviewCount": 175,
    "stock": 40,
    "isFeatured": false,
    "isBestSeller": true,
    "isNewArrival": false,
    "images": [
      "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1585338107529-13afc5f02586?w=800&auto=format&fit=crop&q=80"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=500&auto=format&fit=crop&q=80",
    "description": "Designed specifically for iPhone 12/13/14/15/16 series. Snaps firmly onto the back of your phone with strong magnetic alignment. Features 15W wireless magnetic charging and 20W PD wired fast charging via USB-C port.",
    "shortDescription": "Strong MagSafe magnets, 10,000mAh capacity, 15W wireless + 20W wired PD, LED battery indicator.",
    "specifications": {
      "Capacity": "10,000 mAh / 38.5 Wh",
      "Wireless Output": "15W Max (Supports 7.5W iPhone MagSafe)",
      "Wired Output": "USB-C 20W Power Delivery",
      "Attachment": "Strong N52 Rare Earth Magnets",
      "Compatibility": "iPhone 12-16 series, AirPods, Qi-enabled devices",
      "Warranty": "1 Year Official Baseus Egypt Warranty"
    },
    "tags": [
      "Baseus",
      "MagSafe",
      "Power Bank",
      "iPhone",
      "Wireless Charging"
    ]
  },
  {
    "id": 18,
    "name": "UGREEN Braided 100W USB-C to USB-C Fast Charging Cable (2M)",
    "slug": "ugreen-100w-usb-c-cable-2m",
    "brand": "UGREEN",
    "category": "Power & Charging",
    "price": 450,
    "oldPrice": 550,
    "discountPercentage": 18,
    "rating": 4.9,
    "reviewCount": 420,
    "stock": 80,
    "isFeatured": false,
    "isBestSeller": true,
    "isNewArrival": false,
    "images": [
      "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=800&auto=format&fit=crop&q=80"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=500&auto=format&fit=crop&q=80",
    "description": "Built-in E-Marker smart chip ensures safe, stable 100W (20V/5A) charging for high-draw laptops and smartphones. Heavy-duty double-braided nylon jacket tested to withstand over 20,000 bends without wear.",
    "shortDescription": "100W 5A fast charging, certified E-Marker chip, heavy duty nylon braiding, 2-meter length.",
    "specifications": {
      "Max Power": "100W (20V / 5A)",
      "Cable Length": "2 Meters (6.6 Feet)",
      "Transfer Speed": "480 Mbps (USB 2.0)",
      "Chip": "E-Marker Smart Safety Chip",
      "Durability": "20,000+ Bend Lifespan",
      "Warranty": "1 Year UGREEN Warranty"
    },
    "tags": [
      "UGREEN",
      "USB-C",
      "Cable",
      "100W",
      "Braided"
    ]
  },
  {
    "id": 19,
    "name": "Logitech G502 HERO High Performance Gaming Mouse",
    "slug": "logitech-g502-hero-gaming-mouse",
    "brand": "Logitech",
    "category": "Gaming Accessories",
    "price": 2699,
    "oldPrice": 3199,
    "discountPercentage": 15,
    "rating": 4.8,
    "reviewCount": 380,
    "stock": 25,
    "isFeatured": false,
    "isBestSeller": true,
    "isNewArrival": false,
    "images": [
      "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=800&auto=format&fit=crop&q=80"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500&auto=format&fit=crop&q=80",
    "description": "The world's most popular gaming mouse. Equipped with Logitech HERO 25K optical sensor for sub-micron precision tracking with zero smoothing or acceleration. Includes 5 adjustable 3.6g weights and 11 programmable buttons.",
    "shortDescription": "HERO 25K sensor, 11 programmable buttons, adjustable weight system, dual-mode hyper-fast scroll.",
    "specifications": {
      "Sensor": "HERO 25K (100 - 25,600 DPI)",
      "Buttons": "11 Programmable Buttons with Onboard Memory",
      "Weight Tuning": "5x 3.6g Removable Weights",
      "RGB": "LIGHTSYNC RGB 16.8M Colors",
      "Warranty": "2 Years Logitech Egypt Official"
    },
    "tags": [
      "Logitech",
      "G502",
      "Gaming Mouse",
      "HERO Sensor",
      "RGB"
    ]
  },
  {
    "id": 20,
    "name": "JBL Tune 770NC Adaptive Noise Cancelling Headphones",
    "slug": "jbl-tune-770nc-wireless",
    "brand": "JBL",
    "category": "Audio",
    "price": 3899,
    "oldPrice": 4499,
    "discountPercentage": 13,
    "rating": 4.7,
    "reviewCount": 145,
    "stock": 20,
    "isFeatured": false,
    "isBestSeller": false,
    "isNewArrival": true,
    "images": [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=800&auto=format&fit=crop&q=80"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=80",
    "description": "Adaptive Noise Cancelling with Smart Ambient ensures zero distractions when studying or getting in your groove. Delivers renowned JBL Pure Bass sound with up to 70 hours of battery life and quick 5-minute speed charging for 3 extra hours.",
    "shortDescription": "Adaptive ANC, JBL Pure Bass sound, up to 70 hours battery, Bluetooth 5.3 with multi-point connection.",
    "specifications": {
      "Driver Size": "40 mm Dynamic Driver",
      "Battery Life": "Up to 70 Hours (ANC Off) / 44 Hours (ANC On)",
      "Speed Charge": "5 mins = 3 hours playback",
      "Bluetooth": "5.3 with Multi-Point Connection",
      "Weight": "232 g Lightweight Foldable Design",
      "Warranty": "1 Year Official Warranty"
    },
    "tags": [
      "JBL",
      "Headphones",
      "Noise Cancelling",
      "Pure Bass",
      "Over-Ear"
    ]
  },
  {
    "id": 21,
    "name": "Baseus Metal Gleam Series 6-in-1 Multifunctional USB-C Hub",
    "slug": "baseus-metal-gleam-6-in-1-hub",
    "brand": "Baseus",
    "category": "Desk Setup & Hubs",
    "price": 1650,
    "oldPrice": 1950,
    "discountPercentage": 15,
    "rating": 4.6,
    "reviewCount": 189,
    "stock": 33,
    "isFeatured": false,
    "isBestSeller": false,
    "isNewArrival": false,
    "images": [
      "https://images.unsplash.com/photo-1544652478-6653e09f18a2?w=800&auto=format&fit=crop&q=80"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1544652478-6653e09f18a2?w=500&auto=format&fit=crop&q=80",
    "description": "Compact travel companion with 4K@60Hz HDMI video output, 100W PD charging input, and 3x USB 3.0 data transfer ports. Finished in sleek space gray alloy matching Apple and Dell modern laptops.",
    "shortDescription": "4K@60Hz HDMI, 100W PD port, 3x USB 3.0 5Gbps ports, premium sandblasted aluminum finish.",
    "specifications": {
      "HDMI": "4K@60Hz Ultra HD",
      "PD Port": "100W USB-C Input",
      "USB Ports": "3x USB 3.0 (5 Gbps)",
      "Material": "Sandblasted Aluminum Alloy",
      "Warranty": "1 Year Baseus Egypt Warranty"
    },
    "tags": [
      "Baseus",
      "USB Hub",
      "HDMI 4K",
      "MacBook Accessory",
      "Type-C"
    ]
  },
  {
    "id": 22,
    "name": "Xiaomi 33W Power Bank 10000mAh Pocket Edition Pro",
    "slug": "xiaomi-33w-power-bank-10000mah-pocket",
    "brand": "Xiaomi",
    "category": "Power & Charging",
    "price": 1399,
    "oldPrice": 1650,
    "discountPercentage": 15,
    "rating": 4.7,
    "reviewCount": 205,
    "stock": 42,
    "isFeatured": false,
    "isBestSeller": true,
    "isNewArrival": false,
    "images": [
      "https://images.unsplash.com/photo-1609592426868-b7a42194380f?w=800&auto=format&fit=crop&q=80"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1609592426868-b7a42194380f?w=500&auto=format&fit=crop&q=80",
    "description": "Pocket-sized high-speed power bank with max 33W output. Supports fast charging for Xiaomi phones, iPhones, and tablets. Features two-way fast charging to recharge itself in only 2.7 hours.",
    "shortDescription": "10,000mAh capacity, 33W high-speed charging, compact palm size, Type-C + USB-A dual output.",
    "specifications": {
      "Capacity": "10,000 mAh (35.2Wh)",
      "Output Wattage": "33W Max",
      "Ports": "1x USB-C + 1x USB-A",
      "Recharge Time": "2.7 Hours with 30W charger",
      "Dimensions": "105 x 55.8 x 25.5 mm (Ultra Compact)",
      "Warranty": "1 Year Xiaomi Egypt Official"
    },
    "tags": [
      "Xiaomi",
      "Power Bank",
      "Pocket Size",
      "33W Fast Charge"
    ]
  },
  {
    "id": 23,
    "name": "Keychron V1 QMK Custom Mechanical Keyboard (Frosted Black)",
    "slug": "keychron-v1-custom-keyboard",
    "brand": "Keychron",
    "category": "Keyboards & Mice",
    "price": 3950,
    "oldPrice": 4400,
    "discountPercentage": 10,
    "rating": 4.9,
    "reviewCount": 118,
    "stock": 7,
    "isFeatured": false,
    "isBestSeller": false,
    "isNewArrival": true,
    "images": [
      "https://images.unsplash.com/photo-1595225476474-87563907a212?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=800&auto=format&fit=crop&q=80"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1595225476474-87563907a212?w=500&auto=format&fit=crop&q=80",
    "description": "Fully customizable 75% mechanical keyboard for typing enthusiasts and programmers. Includes a programmable control knob for volume/zoom, OSA profile double-shot PBT keycaps, sound dampening foam, and full QMK/VIA key remapping support.",
    "shortDescription": "75% layout with CNC rotary knob, hot-swappable Keychron K Pro switches, full QMK/VIA support.",
    "specifications": {
      "Layout": "75% (82 Keys + Rotary Encoder Knob)",
      "Switches": "Keychron K Pro Brown (Tactile)",
      "Keycaps": "OSA Double-Shot PBT",
      "Connectivity": "Type-C Wired (1000 Hz Polling Rate)",
      "Plate Material": "Steel with Acoustic Silicone Pad",
      "Warranty": "1 Year Official Warranty"
    },
    "tags": [
      "Keychron",
      "Mechanical Keyboard",
      "Rotary Knob",
      "PBT",
      "QMK"
    ]
  },
  {
    "id": 24,
    "name": "Soundcore Space One Active Noise Cancelling Headphones",
    "slug": "soundcore-space-one-anc",
    "brand": "Soundcore",
    "category": "Audio",
    "price": 3799,
    "oldPrice": 4399,
    "discountPercentage": 14,
    "rating": 4.8,
    "reviewCount": 176,
    "stock": 21,
    "isFeatured": false,
    "isBestSeller": false,
    "isNewArrival": true,
    "images": [
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=80"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=500&auto=format&fit=crop&q=80",
    "description": "2X stronger voice reduction with upgraded noise cancellation structure. 40mm customized drivers support LDAC for 3X more detail than standard Bluetooth. Floating axis earcups rotate 8° to naturally conform to your head shape without pressure.",
    "shortDescription": "2X voice reduction, 40H ANC playtime, LDAC Hi-Res wireless audio, lightweight comfort design.",
    "specifications": {
      "Driver": "40 mm Dynamic Driver",
      "Audio Codec": "LDAC, AAC, SBC",
      "Playtime": "40H (ANC On) / 55H (ANC Off)",
      "Mics": "3 Microphones with AI Algorithm",
      "Earcups": "8-degree Floating Axis with Soft Protein Leather",
      "Warranty": "18 Months Soundcore Egypt Guarantee"
    },
    "tags": [
      "Soundcore",
      "Space One",
      "ANC",
      "LDAC",
      "Hi-Res"
    ]
  },
  {
    "id": 25,
    "name": "UGREEN Nexode 140W GaN Fast Charger (3 Ports PD 3.1)",
    "slug": "ugreen-nexode-140w-gan-charger",
    "brand": "UGREEN",
    "category": "Power & Charging",
    "price": 3699,
    "oldPrice": 4200,
    "discountPercentage": 12,
    "rating": 4.9,
    "reviewCount": 160,
    "stock": 14,
    "isFeatured": false,
    "isBestSeller": false,
    "isNewArrival": false,
    "images": [
      "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=800&auto=format&fit=crop&q=80"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=500&auto=format&fit=crop&q=80",
    "description": "Next-gen Power Delivery 3.1 protocol charges MacBook Pro 16\" to 56% in only 30 minutes. Features GaNFast technology and intelligent Thermal Guard system protecting against overheating and overvoltage.",
    "shortDescription": "140W single-port PD 3.1 output, 2x USB-C + 1x USB-A, GaNFast tech, includes 240W braided cable.",
    "specifications": {
      "Max Power": "140W Single Port PD 3.1",
      "Ports": "2x USB-C + 1x USB-A",
      "Safety": "Thermal Guard Real-time Temp Monitoring",
      "Included": "Includes 1.5M 240W USB-C Cable",
      "Warranty": "1 Year Egyptian Distributor Warranty"
    },
    "tags": [
      "UGREEN",
      "140W",
      "GaN Charger",
      "MacBook Pro",
      "PD 3.1"
    ]
  },
  {
    "id": 26,
    "name": "Xiaomi Smart Band 8 Active Fitness Tracker",
    "slug": "xiaomi-smart-band-8-active",
    "brand": "Xiaomi",
    "category": "Smart Watches",
    "price": 1199,
    "oldPrice": 1400,
    "discountPercentage": 14,
    "rating": 4.6,
    "reviewCount": 310,
    "stock": 50,
    "isFeatured": false,
    "isBestSeller": true,
    "isNewArrival": false,
    "images": [
      "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=800&auto=format&fit=crop&q=80"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=500&auto=format&fit=crop&q=80",
    "description": "Slim 9.99mm body with a vibrant 1.47-inch TFT display. Tracks all-day heart rate, SpO2 blood oxygen, sleep quality, and female health tracking with 50+ sports workout modes and 14-day battery life.",
    "shortDescription": "1.47\" display, 9.99mm ultra-slim body, 50+ sports modes, 14-day battery life, 5ATM water resistance.",
    "specifications": {
      "Display": "1.47-inch TFT (172 x 320 px)",
      "Battery Life": "Up to 14 Days Typical Use",
      "Water Resistance": "5ATM (Up to 50 Meters)",
      "Sensors": "PPG Heart Rate Sensor, 3-Axis Accelerometer",
      "Weight": "14.9 g (Without Strap)",
      "Warranty": "1 Year Official Xiaomi Egypt"
    },
    "tags": [
      "Xiaomi",
      "Smart Band",
      "Fitness Tracker",
      "Heart Rate",
      "Affordable"
    ]
  },
  {
    "id": 27,
    "name": "Baseus Magnetic Wireless Car Charger & Mount 15W",
    "slug": "baseus-magnetic-car-charger-mount",
    "brand": "Baseus",
    "category": "Mobile Accessories",
    "price": 1250,
    "oldPrice": 1500,
    "discountPercentage": 17,
    "rating": 4.7,
    "reviewCount": 130,
    "stock": 28,
    "isFeatured": false,
    "isBestSeller": false,
    "isNewArrival": false,
    "images": [
      "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=800&auto=format&fit=crop&q=80"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=500&auto=format&fit=crop&q=80",
    "description": "Strong 16-piece NdFeB magnetic ring holds your iPhone securely even on bumpy roads and speed bumps. 360-degree ball joint allows effortless rotation between portrait GPS navigation and landscape viewing.",
    "shortDescription": "Air vent mount with 16 strong neodymium magnets, 15W Qi wireless fast charging, 360-degree rotation.",
    "specifications": {
      "Mount Type": "Upgraded Silicone Air Vent Clamp",
      "Wireless Output": "15W Max Qi Charging",
      "Rotation": "360-Degree Spherical Pivot",
      "Compatibility": "iPhone 12-16 MagSafe series & Magnetic cases",
      "Warranty": "1 Year Official Baseus Egypt"
    },
    "tags": [
      "Baseus",
      "Car Mount",
      "MagSafe",
      "Wireless Car Charger",
      "iPhone"
    ]
  },
  {
    "id": 28,
    "name": "Logitech C920 HD Pro Webcam (1080p/30fps)",
    "slug": "logitech-c920-hd-pro-webcam",
    "brand": "Logitech",
    "category": "Desk Setup & Hubs",
    "price": 3699,
    "oldPrice": 4299,
    "discountPercentage": 14,
    "rating": 4.8,
    "reviewCount": 295,
    "stock": 16,
    "isFeatured": false,
    "isBestSeller": false,
    "isNewArrival": false,
    "images": [
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=800&auto=format&fit=crop&q=80"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500&auto=format&fit=crop&q=80",
    "description": "The gold standard for remote meetings and streaming. Full HD 1080p video at 30 fps with automatic HD light correction and dual stereo microphones for natural sounding audio on Zoom, Microsoft Teams, and Google Meet.",
    "shortDescription": "Full HD 1080p video, 78-degree field of view, automatic low-light correction, dual stereo mics.",
    "specifications": {
      "Resolution": "1080p / 30fps - 720p / 30fps",
      "Lens": "Full HD Glass Lens with Auto-Focus",
      "Field of View": "78 Degrees",
      "Microphone": "Built-in Dual Stereo Mics with Noise Reduction",
      "Mount": "Universal Tripod-Ready Clip for Laptops & Monitors",
      "Warranty": "2 Years Logitech Egypt Official"
    },
    "tags": [
      "Logitech",
      "Webcam",
      "1080p",
      "Streaming",
      "Home Office"
    ]
  },
  {
    "id": 29,
    "name": "Razer BlackShark V2 X Gaming Headset (7.1 Surround)",
    "slug": "razer-blackshark-v2-x",
    "brand": "Razer",
    "category": "Gaming Accessories",
    "price": 2499,
    "oldPrice": 2899,
    "discountPercentage": 14,
    "rating": 4.7,
    "reviewCount": 210,
    "stock": 22,
    "isFeatured": false,
    "isBestSeller": false,
    "isNewArrival": false,
    "images": [
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=80"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=500&auto=format&fit=crop&q=80",
    "description": "Triple threat of amazing audio, mic clarity, and supreme sound isolation. TriForce 50mm drivers tune highs, mids, and lows separately. Ultra-light 240g body with breathable memory foam ear cushions for marathon gaming sessions.",
    "shortDescription": "Razer TriForce 50mm drivers, HyperClear Cardioid mic, 7.1 surround sound, 240g lightweight design.",
    "specifications": {
      "Drivers": "Razer TriForce 50 mm Drivers",
      "Weight": "240 grams (Ultralight)",
      "Microphone": "Razer HyperClear Cardioid Mic",
      "Connectivity": "3.5mm Analog Audio Jack (PC, Mac, PS5, Xbox, Switch)",
      "Ear Cushions": "Breathable Memory Foam Cushions",
      "Warranty": "2 Years Official Razer Warranty"
    },
    "tags": [
      "Razer",
      "Gaming Headset",
      "7.1 Surround",
      "Esports",
      "Comfort"
    ]
  },
  {
    "id": 30,
    "name": "UGREEN Dual-Bay M.2 NVMe SSD Enclosure Tool-Free",
    "slug": "ugreen-m2-nvme-ssd-enclosure",
    "brand": "UGREEN",
    "category": "Desk Setup & Hubs",
    "price": 1450,
    "oldPrice": 1750,
    "discountPercentage": 17,
    "rating": 4.8,
    "reviewCount": 94,
    "stock": 19,
    "isFeatured": false,
    "isBestSeller": false,
    "isNewArrival": true,
    "images": [
      "https://images.unsplash.com/photo-1544652478-6653e09f18a2?w=800&auto=format&fit=crop&q=80"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1544652478-6653e09f18a2?w=500&auto=format&fit=crop&q=80",
    "description": "Transform your internal M.2 NVMe or SATA SSD into an ultra-fast portable external drive. Supports 10Gbps transfer speed with USB 3.2 Gen 2, transferring a 10GB 4K movie in just 10 seconds. Aluminum shell ensures outstanding heat dissipation.",
    "shortDescription": "10Gbps USB 3.2 Gen 2, supports M.2 NVMe & SATA SSDs up to 4TB, tool-free push design, aluminum alloy heat sink.",
    "specifications": {
      "Transfer Rate": "Up to 10 Gbps (USB 3.2 Gen 2)",
      "Supported SSDs": "M.2 M-Key / B&M-Key (2230, 2242, 2260, 2280)",
      "Max Capacity": "Up to 4 TB",
      "Installation": "100% Tool-Free Slide Design",
      "Cable Included": "USB-C to USB-C + USB-A Dual Cable",
      "Warranty": "1 Year UGREEN Egypt Warranty"
    },
    "tags": [
      "UGREEN",
      "NVMe Enclosure",
      "SSD",
      "10Gbps",
      "External Storage"
    ]
  },
  {
    "id": 31,
    "name": "Anker Soundcore A20i True Wireless Earbuds",
    "slug": "anker-soundcore-a20i-tws",
    "brand": "Soundcore",
    "category": "Audio",
    "price": 1199,
    "oldPrice": 1399,
    "discountPercentage": 14,
    "rating": 4.6,
    "reviewCount": 350,
    "stock": 65,
    "isFeatured": false,
    "isBestSeller": true,
    "isNewArrival": false,
    "images": [
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=800&auto=format&fit=crop&q=80"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500&auto=format&fit=crop&q=80",
    "description": "Tiny pocket-sized case with a lanyard strap. Customized sound with 22 preset EQs in the Soundcore app. BassUp technology provides rich, punchy bass, with 9 hours of playtime on a single charge and 28 hours with the case.",
    "shortDescription": "Pocket-sized with lanyard, customized sound via app, 28-hour playtime, 2 mics with AI clear calls.",
    "specifications": {
      "Playtime": "9 Hours single / 28 Hours with case",
      "Fast Charge": "10 min charge = 2 hours playtime",
      "Water Resistance": "IPX5 Splashproof",
      "Bluetooth": "5.3",
      "Warranty": "18 Months Anker Egypt Guarantee"
    },
    "tags": [
      "Soundcore",
      "A20i",
      "TWS Earbuds",
      "Budget Audio",
      "BassUp"
    ]
  },
  {
    "id": 32,
    "name": "Keychron Large Felt Desk Mat (900x400mm)",
    "slug": "keychron-large-felt-desk-mat",
    "brand": "Keychron",
    "category": "Desk Setup & Hubs",
    "price": 899,
    "oldPrice": 1100,
    "discountPercentage": 18,
    "rating": 4.8,
    "reviewCount": 88,
    "stock": 26,
    "isFeatured": false,
    "isBestSeller": false,
    "isNewArrival": false,
    "images": [
      "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=800&auto=format&fit=crop&q=80"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500&auto=format&fit=crop&q=80",
    "description": "Premium warm felt wool desk mat that elevates your workspace aesthetics. Protects your desk surface from scratches while providing a smooth glide for mechanical keyboards and mice. Features anti-slip rubberized dots on the underside.",
    "shortDescription": "900 x 400 mm XXL size, premium natural felt wool, anti-slip backing, absorbs typing sound.",
    "specifications": {
      "Dimensions": "900 mm x 400 mm x 4 mm",
      "Material": "Natural Wool Felt + Silicone Grip Bottom",
      "Maintenance": "Water-resistant, easy to clean",
      "Warranty": "6 Months Replacement Warranty"
    },
    "tags": [
      "Keychron",
      "Desk Mat",
      "Desk Setup",
      "Felt Pad",
      "Aesthetic"
    ]
  }
];

export const CATEGORIES_DATA: Category[] = [
  {
    "id": 1,
    "name": "Audio",
    "slug": "audio",
    "icon": "fa-headphones",
    "image": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=80",
    "productCount": 8
  },
  {
    "id": 2,
    "name": "Keyboards & Mice",
    "slug": "keyboards-mice",
    "icon": "fa-keyboard",
    "image": "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500&auto=format&fit=crop&q=80",
    "productCount": 6
  },
  {
    "id": 3,
    "name": "Smart Watches",
    "slug": "smart-watches",
    "icon": "fa-clock",
    "image": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&auto=format&fit=crop&q=80",
    "productCount": 4
  },
  {
    "id": 4,
    "name": "Power & Charging",
    "slug": "power-charging",
    "icon": "fa-bolt",
    "image": "https://images.unsplash.com/photo-1609592426868-b7a42194380f?w=500&auto=format&fit=crop&q=80",
    "productCount": 6
  },
  {
    "id": 5,
    "name": "Desk Setup & Hubs",
    "slug": "desk-setup-hubs",
    "icon": "fa-desktop",
    "image": "https://images.unsplash.com/photo-1544652478-6653e09f18a2?w=500&auto=format&fit=crop&q=80",
    "productCount": 5
  },
  {
    "id": 6,
    "name": "Gaming Accessories",
    "slug": "gaming-accessories",
    "icon": "fa-gamepad",
    "image": "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=500&auto=format&fit=crop&q=80",
    "productCount": 4
  },
  {
    "id": 7,
    "name": "Mobile Accessories",
    "slug": "mobile-accessories",
    "icon": "fa-mobile-screen",
    "image": "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=500&auto=format&fit=crop&q=80",
    "productCount": 3
  }
];

export const BRANDS_DATA: string[] = [
  "Soundcore",
  "Logitech",
  "Keychron",
  "Anker",
  "UGREEN",
  "Xiaomi",
  "JBL",
  "Baseus",
  "Razer",
  "Samsung"
];

export const REVIEWS_DATA: Review[] = [
  {
    "id": 1,
    "productId": 1,
    "customerName": "Ahmed Mansour",
    "rating": 5,
    "title": "Best ANC headphones in Egypt for this price range",
    "text": "Ordered on Monday and received in Maadi on Tuesday. The noise cancellation is phenomenal on Cairo metro and streets. Battery easily lasts 4-5 days of heavy work and commute.",
    "date": "2026-09-28",
    "verified": true
  },
  {
    "id": 2,
    "productId": 1,
    "customerName": "Karim El-Sayed",
    "rating": 5,
    "title": "Exceptional build and sound quality",
    "text": "Bass is punchy without being muddy. The Soundcore app EQ presets allow you to customize sound perfectly. 10/10 purchase from ShopVibe.",
    "date": "2026-10-02",
    "verified": true
  },
  {
    "id": 3,
    "productId": 2,
    "customerName": "Omar Tarek",
    "rating": 5,
    "title": "Must-have for software engineers",
    "text": "The electromagnetic scroll wheel and quiet clicks make an incredible difference during long coding sessions. Pairs seamlessly between my MacBook and Windows desktop.",
    "date": "2026-09-15",
    "verified": true
  },
  {
    "id": 4,
    "productId": 3,
    "customerName": "Mustafa Hesham",
    "rating": 5,
    "title": "The typing feel is unmatched",
    "text": "Keychron K2 Pro has a deep, creamy thock out of the box without needing mods. Fast delivery to Alexandria in 48 hours.",
    "date": "2026-09-22",
    "verified": true
  },
  {
    "id": 5,
    "productId": 4,
    "customerName": "Sherif Adel",
    "rating": 5,
    "title": "Absolute beast of a power bank",
    "text": "Charges my 16 inch M2 MacBook Pro at full 140W speed. The digital screen showing live wattage input and output is extremely useful during power cuts.",
    "date": "2026-10-04",
    "verified": true
  }
];

export const SAMPLE_ORDERS_DATA: Order[] = [
  {
    "id": "SV-10294",
    "orderNumber": "SV-10294",
    "items": [
      {
        "productId": 1,
        "name": "Soundcore Q20i Hybrid Active Noise Cancelling Headphones",
        "price": 2499,
        "quantity": 1,
        "thumbnail": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=80"
      },
      {
        "productId": 12,
        "name": "Anker Prime 67W GaN Wall Charger (3 Ports)",
        "price": 1999,
        "quantity": 1,
        "thumbnail": "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=500&auto=format&fit=crop&q=80"
      }
    ],
    "subtotal": 4498,
    "shipping": 0,
    "discount": 0,
    "total": 4498,
    "status": "processing",
    "date": "2026-10-06",
    "estimatedDelivery": "Oct 9 - Oct 11, 2026",
    "customer": {
      "name": "Mohamed Azoz",
      "email": "m.azoz200445@gmail.com",
      "phone": "+20 102 345 6789",
      "governorate": "Cairo",
      "city": "New Cairo",
      "address": "Street 90 North, Villa 42",
      "building": "Building 4B, 3rd Floor"
    },
    "paymentMethod": "Cash on Delivery"
  },
  {
    "id": "SV-10188",
    "orderNumber": "SV-10188",
    "items": [
      {
        "productId": 2,
        "name": "Logitech MX Master 3S Wireless Performance Mouse",
        "price": 4899,
        "quantity": 1,
        "thumbnail": "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500&auto=format&fit=crop&q=80"
      }
    ],
    "subtotal": 4899,
    "shipping": 0,
    "discount": 200,
    "total": 4699,
    "status": "delivered",
    "date": "2026-09-24",
    "estimatedDelivery": "Delivered on Sep 26, 2026",
    "customer": {
      "name": "Mohamed Azoz",
      "email": "m.azoz200445@gmail.com",
      "phone": "+20 102 345 6789",
      "governorate": "Cairo",
      "city": "Nasr City",
      "address": "Abbas El Akkad St.",
      "building": "Apt 12"
    },
    "paymentMethod": "Cash on Delivery"
  }
];
