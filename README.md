# ShopVibe 🇪🇬 — Egyptian Tech & Lifestyle E-Commerce

A modern, production-grade e-commerce web application engineered for the Egyptian consumer tech market. Built with **Angular 18**, clean standalone architecture, and an original, restrained design system tailored for mechanical keyboards, wireless audiophile gear, fast charging tech, and desk setups.

---

## ⚡ What is ShopVibe?

ShopVibe is designed as a commercially credible Egyptian tech store inspired by the practical UX of platforms like Noon, Amazon Egypt, and Best Buy — but built with a completely original, clutter-free design language.

Instead of generic demo templates or flashy AI gradients, ShopVibe features real-world e-commerce details:
- **Authentic Egyptian pricing** in EGP (with real market values for brands like Soundcore, Logitech, Keychron, Anker, UGREEN, Xiaomi, and JBL).
- **Egyptian delivery logic**: Free express shipping over EGP 1,500, with localized delivery rates for Cairo & Giza (24–48h) and outer governorates.
- **Multiple payment options**: Cash on Delivery (COD), Visa/Mastercard, InstaPay Egypt, and mobile wallets (Vodafone Cash).
- **Zero-failure fallback architecture**: Communicates with a mock REST API (`json-server`) while seamlessly falling back to local static catalog data if the API server is offline.

---

## 🚀 Key Highlights & Features

### 🛒 Realistic E-Commerce Experience
- **Announcement Strip**: Highlights free shipping thresholds, official Egyptian warranty, and Cairo hotline.
- **Dynamic Header & Navigation**: Instant search autocomplete, live cart badge counter, live wishlist counter, and categorized quick-nav strip.
- **Curated Homepage**:
  - High-impact promotional hero campaign ("Upgrade Your Setup").
  - Value propositions & trust guarantees (14-day replacement, CPA-compliant, 100% genuine stock).
  - Category exploration grid (Audio, Keyboards & Mice, Smart Watches, GaN Chargers, Desk Hubs, Gaming).
  - Real Best Sellers & discounted deal highlights.
  - Interactive newsletter signup with instant promo codes (`WELCOME150`).
- **Interactive Product Catalog**:
  - Multi-faceted sidebar filtering: By category, brand, custom price range slider/inputs, star ratings (4.8+, 4.6+), and in-stock only.
  - Real-time sorting: Featured, Price (Low to High), Price (High to Low), Highest Rated, Newest.
  - Live query parameter synchronization (`/products?category=Audio&brand=Soundcore`).
  - Pagination and responsive mobile drawer filter.
- **Comprehensive Product Details**:
  - Multi-image gallery with interactive thumbnail switching.
  - Clear stock statuses (In Stock, Low Stock urgency warnings, Out of Stock).
  - Quantity controls with live stock boundaries.
  - Add to Cart + 1-Click "Buy Now" flow.
  - Technical specifications matrix and verified Egyptian buyer reviews.
  - Related accessories recommendations.
- **Full Shopping Cart & Checkout**:
  - LocalStorage persistence (cart and wishlist survive browser reloads).
  - Egyptian shipping calculator and coupon system (try `VIBE10` for 10% off or `WELCOME` for EGP 150 off).
  - Complete checkout flow collecting customer info, Egyptian governorates dropdown, and payment method choice.
  - Professional order confirmation page with unique reference number (e.g. `SV-10294`) and delivery date estimation.
- **User Dashboard & Order Tracking**:
  - Order history with tracking badges (*Processing*, *Shipped*, *Delivered*).
  - Wishlist management with 1-click "Move to Cart".
  - Profile and saved Egyptian delivery addresses.

---

## 🛠️ Tech Stack & Architecture

- **Frontend Framework**: Angular 18 (Standalone Components, Angular Router, Signals & RxJS BehaviorSubjects)
- **Styling**: Tailored CSS Design System with CSS Custom Properties tokens (`src/styles.css`), Bootstrap 5 grid utilities, and Font Awesome 6 icons
- **State Management**: Reactive BehaviorSubject services for Cart, Wishlist, Orders, and Toasts with LocalStorage synchronization
- **Backend / Mock API**: JSON Server (`server/db.json`) on port 3000 with fallback data layer (`src/app/data/products.data.ts`)
- **Typography**: Google Fonts Inter

---

## 💻 Getting Started

### 1. Clone & Install Dependencies
```bash
git clone https://github.com/yousseeff20/ShopVibe.git
cd ShopVibe
npm install
```

### 2. Run the Development Server
```bash
npx ng serve
```
Navigate to `http://localhost:4200/` in your browser.

### 3. Optional: Run JSON Server API
To run the mock backend REST API with all 32+ products, reviews, and sample orders:
```bash
npx json-server --watch server/db.json --port 3000
```
> **Note**: Even if you do not run `json-server`, ShopVibe automatically falls back to bundled static products data with zero crashes.

---

## 📁 Project Structure

```
Ecommerce/
├── server/
│   ├── db.json                 # Mock backend database (32+ products, orders, categories)
│   └── generate-data.js        # Data generator script
├── src/
│   ├── app/
│   │   ├── compunent/
│   │   │   ├── home/           # Homepage (Hero, Best Sellers, Trust, Deals)
│   │   │   ├── navbar/         # Header, Search bar, and Category strip
│   │   │   ├── footer/         # Egyptian localization footer & payments
│   │   │   ├── prodicute/      # Product listing catalog with working filters
│   │   │   ├── product-card/   # Reusable product card component
│   │   │   ├── product-details/# Single product gallery, specs & reviews
│   │   │   ├── cart/           # Cart, coupon validator & checkout flow
│   │   │   ├── profile/        # Account dashboard, order history & wishlist
│   │   │   ├── toast/          # Global toast notifications
│   │   │   ├── about-us/       # Brand mission & Egyptian story
│   │   │   ├── contact-us/     # Cairo support contact form & phone details
│   │   │   ├── login/          # Clean login with 1-click demo button
│   │   │   └── sign-up/        # User registration
│   │   ├── data/
│   │   │   └── products.data.ts# Bundled product catalog fallback data
│   │   ├── models/
│   │   │   └── product.interface.ts # TypeScript models & interfaces
│   │   ├── Service/
│   │   │   ├── product.service.ts   # Product API & local filtering
│   │   │   ├── cart.service.ts      # Cart state & coupon logic
│   │   │   ├── wishlist.service.ts  # Wishlist state & storage
│   │   │   ├── order.service.ts     # Orders state & Egyptian tracking
│   │   │   └── toast.service.ts     # User notification system
│   │   └── app.routes.ts       # Application routes
│   └── styles.css              # ShopVibe design system & variables
└── package.json
```

---

## 🏷️ Test Coupons & Demo Credentials

- **10% Off Everything**: `VIBE10`
- **EGP 150 Off First Order**: `WELCOME`
- **Demo Login**: Available via the 1-click **Quick Demo Login** button on the `/login` page.

---

## 👨‍💻 Author

Created with pride by [Youssef](https://github.com/yousseeff20).