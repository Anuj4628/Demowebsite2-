# OM BOTTLES MFG COMPANY — Website Architecture

Official web development project for **OM BOTTLES MFG COMPANY**, a premier manufacturer of Aluminium Bottles and Dome Lights.

---

## 🚀 Quick Start & How to Run

### Option 1: Modern Dev Server (Recommended)
Runs with instant Hot Module Replacement (HMR) and automatically launches your browser:
```bash
npm run dev
# or
npm start
```
Access the application at: `http://localhost:3000`

### Option 2: Production Build & Preview
```bash
# Build production bundle into /dist
npm run build

# Preview production build locally
npm run preview
```

### Option 3: Direct File Opening
You can also open [index.html](file:///c:/Users/anujm/OneDrive/Desktop/Demo%20Website%202/index.html) directly in any browser or launch it with VS Code Live Server.

---

## 📁 Project Directory Structure

```text
Demo Website 2/
├── assets/
│   ├── icons/                              # System SVG & UI icons
│   └── images/
│       ├── about/                          # About page photography & facility imagery
│       ├── certificates/                   # ISO, compliance & testing credentials
│       ├── hero/                           # High-res homepage hero visuals
│       ├── logo/
│       │   └── om-bottles-logo.png         # Original company logo (94.9 KB)
│       └── products/
│           ├── aluminium-bottles/          # Aluminium bottle ranges & specs
│           └── dome-lights/                # Dome light industrial product shots
├── components/
│   ├── common/                             # Reusable UI widgets (buttons, cards, badges)
│   ├── footer/                             # Global multi-column industrial footer
│   ├── layout/                             # Page wrappers and grid containers (layout.css)
│   └── navbar/
│       ├── navbar.css                      # Scoped premium navbar styles
│       ├── navbar.html                     # Reusable HTML navbar template
│       └── navbar.js                       # Sticky behavior, drawer & mobile logic
├── data/
│   └── navigation.js                       # Centralized routes & menu configurations
├── pages/
│   ├── about/index.html                    # About Us route
│   ├── certificates/index.html             # Quality Certifications route
│   ├── contact/index.html                  # Contact Us & factory location route
│   ├── get-quote/index.html                # Get Quote commercial inquiry route
│   └── products/index.html                 # Products catalog & categories route
├── styles/
│   ├── main.css                            # Reset, base typography & container utilities
│   └── variables.css                       # Brand tokens, colors (#073B78, #0B4A8B, #D71920)
├── utils/
│   └── dom.js                              # DOM event and element utilities
├── index.html                              # Homepage entry with responsive navbar
├── vite.config.js                          # Multi-page development & build configuration
├── package.json                            # Scripts & dependencies
└── README.md                               # Project documentation
```

---

## 🎨 Brand Design Tokens & Palette

| Token | Hex | Role |
| :--- | :--- | :--- |
| **Primary Navy Blue** | `#073B78` | Primary navigation typography, brand identity, structural accents |
| **Secondary Blue** | `#0B4A8B` | Secondary branding, active states, borders |
| **Brand Red** | `#D71920` | Primary Call-To-Action (Get Quote), hover highlights, active indicators |
| **Brand Red Hover** | `#BF1319` | Deepened state for CTA buttons |
| **White** | `#FFFFFF` | Navbar background, contrast text |
| **Light Background**| `#F3F6FA` | Dropdown backgrounds, hover highlights |

---

## 🚀 Navigation Bar Specifications

- **Desktop Layout:** Full-width header with large company logo (`assets/images/logo/om-bottles-logo.png`) on the left, centered navigation links with subtle red hover/active indicator, and prominent red **Get Quote** CTA on the right.
- **Products Dropdown:** Clean dropdown featuring **Aluminium Bottles** and **Dome Lights** with smooth animations and subtle shadows.
- **Mobile & Tablet Drawer:** Custom hamburger button with smooth transform animations, sliding mobile drawer with touch-friendly accordion submenus, accessible touch targets, and backdrop overlay.
- **Sticky Header:** Sticky positioning with elevation shadow upon scrolling.
