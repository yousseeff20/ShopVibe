# 🛒 ShopVibe

Your go-to online shopping destination. **ShopVibe** delivers a seamless browsing experience with product discovery, secure authentication, and a buttery-smooth checkout flow — all powered by **Angular 18**.

> **ShopVibe** — where every click feels like a vibe. 🎵

---

## ✨ Features

- **User Authentication** — Sign up, log in, and access protected routes with route guards
- **Product Browsing** — View all products with category filtering and brand search
- **Product Details** — Dedicated detail pages for each product
- **Shopping Cart** — Add, remove, and update quantities with real-time totals
- **Wishlist / Favorites** — Save products you love for later
- **User Profile** — View and manage your account info
- **Search** — Find products by name or brand
- **Contact Page** — Reach out via a contact form
- **SSR Support** — Server-side rendering with Angular Universal (Express)
- **Responsive Design** — Mobile-friendly layout powered by Bootstrap 5

---

## 🛠️ Tech Stack

| Layer        | Technology                          |
| ------------ | ----------------------------------- |
| Framework    | Angular 18                          |
| Language     | TypeScript 5.5                      |
| Styling      | Bootstrap 5.3, Font Awesome 6      |
| HTTP / State | Angular HttpClient, RxJS, BehaviorSubject |
| SSR          | Angular SSR (`@angular/ssr`) + Express |
| Testing      | Jasmine + Karma                     |
| API          | JSON Server (localhost:3000)        |

---

## 📦 Getting Started

### Prerequisites

- **Node.js** ≥ 18
- **Angular CLI** ≥ 18.2 (`npm i -g @angular/cli`)
- **JSON Server** (or any REST API running on `http://localhost:3000`)

### Installation

```bash
# Clone the repo
git clone <your-repo-url>
cd Ecommerce

# Install dependencies
npm install
```

### Running the App

```bash
# Start the dev server
ng serve
```

Then open [http://localhost:4200](http://localhost:4200) in your browser.

### Running the API (JSON Server)

The app expects a REST API at `http://localhost:3000` with endpoints for `/prodact` and `/user`.

```bash
# If using json-server
npx json-server --watch db.json
```

### Building for Production

```bash
ng build
```

Build artifacts are output to the `dist/` directory.

### Running with SSR

```bash
# Build and serve with server-side rendering
ng build
node dist/ecomerce/server/server.mjs
```

---

## 📁 Project Structure

```
Ecommerce/
├── src/
│   ├── app/
│   │   ├── compunent/            # UI Components
│   │   │   ├── home/             # Landing page
│   │   │   ├── navbar/           # Navigation bar
│   │   │   ├── footer/           # Footer
│   │   │   ├── login/            # Login page
│   │   │   ├── sign-up/          # Registration page
│   │   │   ├── prodicute/        # Product listing
│   │   │   ├── product-details/  # Single product view
│   │   │   ├── mainproduct/      # Product card component
│   │   │   ├── cart/             # Shopping cart
│   │   │   ├── search/           # Search functionality
│   │   │   ├── profile/          # User profile
│   │   │   ├── about-us/         # About / Card page
│   │   │   ├── contact-us/       # Contact form
│   │   │   ├── main/             # Layout wrapper (navbar + router-outlet)
│   │   │   └── error/            # 404 page
│   │   ├── Service/              # Angular services
│   │   │   ├── service-api       # Product API calls & wishlist
│   │   │   ├── service           # Cart management & state
│   │   │   ├── user              # User CRUD & auth state
│   │   │   └── user-auth         # Login session tracking
│   │   ├── Guards/               # Route guards (auth)
│   │   ├── models/               # TypeScript interfaces (Product, User, Card)
│   │   ├── pipes/                # Custom pipes
│   │   ├── directives/           # Custom directives
│   │   ├── app.routes.ts         # Route definitions
│   │   ├── app.config.ts         # App providers & config
│   │   └── app.component.ts      # Root component
│   ├── environments/             # Environment configs (dev / prod)
│   ├── index.html                # Entry HTML
│   ├── main.ts                   # Client bootstrap
│   ├── main.server.ts            # SSR bootstrap
│   └── styles.css                # Global styles
├── server/                       # Express SSR server files
├── server.ts                     # SSR entry point
├── angular.json                  # Angular workspace config
├── package.json                  # Dependencies & scripts
└── tsconfig.json                 # TypeScript config
```

---

## 🧪 Testing

```bash
# Run unit tests
ng test
```

Tests run via **Karma** with **Jasmine** in a Chrome browser.

---

## 📜 Available Scripts

| Script                     | Description                              |
| -------------------------- | ---------------------------------------- |
| `npm start`                | Start the dev server (`ng serve`)        |
| `npm run build`            | Production build                         |
| `npm run watch`            | Dev build in watch mode                  |
| `npm test`                 | Run unit tests                           |
| `npm run serve:ssr:ecomerce` | Serve the SSR build                    |

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/my-feature`)
3. Commit your changes (`git commit -m "Add my feature"`)
4. Push to the branch (`git push origin feature/my-feature`)
5. Open a Pull Request

---

## 📄 License

This project is private and not currently published under an open-source license.