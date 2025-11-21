# Perfume E‑Commerce (React + Vite)

Clean, modern e‑commerce front‑end for luxury perfumes. Built with React, Vite, Bootstrap, and React Router. Features a curated collection of designer fragrances with advanced filtering and cart functionality.

## Quick Start

```powershell
npm install
npm run dev
```

Scripts:

- `npm run dev` – Start dev server
- `npm run build` – Production build
- `npm run preview` – Preview the build locally
- `npm run lint` – Lint the codebase

## Tech Stack

- React 19 + Vite
- React Router v6
- Bootstrap 5 + React‑Bootstrap
- Context API for Cart Management
- Clerk for Authentication
- Lucide React for Icons
- ESLint (React, Hooks, Refresh)
- Data: Local JSON product database

## Project Structure

```
src/
├─ components/
│  ├─ Navbar.jsx/css
│  ├─ Footer.jsx/css
│  ├─ HomeSections/
│  │  ├─ HeroSection.jsx
│  │  ├─ CategorySection.jsx
│  │  ├─ FavouriteSection.jsx
│  │  ├─ FeatureSection.jsx
│  │  ├─ BenefitsSection.jsx
│  │  ├─ MissionSection.jsx
│  │  ├─ TestimonialSection.jsx
│  │  ├─ ContentSections.jsx
│  │  └─ SocialFeedSection.jsx
│  └─ Products/
│     ├─ Sidebar.jsx/css
│     ├─ ProductList.jsx
│     └─ Card.css
├─ pages/
│  ├─ Home.jsx/css
│  ├─ Products.jsx
│  ├─ ProductDetails.jsx
│  ├─ Cart.jsx
│  └─ About.jsx
├─ context/
│  └─ CartContext.jsx
├─ data/
│  └─ products.json
├─ assets/images/
├─ App.jsx
├─ App.css
└─ main.jsx
```

## Routing

- `/` → Home with hero, categories, favorites, and features
- `/products` → Product listing with filtering sidebar
- `/product/:id` → Product details with image gallery and cart actions
- `/cart` → Shopping cart with quantity management
- `/about` → About page

## Features

### Authentication

- User authentication powered by Clerk
- Sign in / Sign up flows
- User profile management
- Protected routes for cart and checkout

### Product Catalog

- 24 luxury perfumes from top brands (Chanel, Dior, Tom Ford, Creed, etc.)
- Categories: Women, Men, Unisex
- Dynamic filtering by:
  - Category
  - Brand (23+ brands)
  - Price range ($0-$300)
  - Minimum rating (3.0-4.5★)
- Search functionality
- Best seller highlights

### Shopping Experience

- Product cards with discount badges
- Detailed product pages with:
  - Image carousel
  - Size selection
  - Color options
  - Sustainability indicators
  - Full fragrance descriptions
- Add to cart with size/quantity selection
- Cart management (add, remove, update quantities)
- Context API-based cart state

### Home Page Sections

- Hero section with call-to-action
- Category showcase (Women, Men, Unisex)
- Perfume favorites carousel
- Feature highlights
- Benefits section
- Mission statement
- Customer testimonials
- Content sections
- Social media feed

## Styling and Colors

Custom CSS variables and utility classes are defined in `src/App.css`:

```css
:root {
  --color-cream: #f9f8f6;
  --color-beige-light: #efe9e3;
  --color-beige: #d9cfc7;
  --color-tan: #c9b59c;
}

.bg-cream {
  background-color: var(--color-cream) !important;
}
.bg-beige-light {
  background-color: var(--color-beige-light) !important;
}
.bg-beige {
  background-color: var(--color-beige) !important;
}
.bg-tan {
  background-color: var(--color-tan) !important;
}

.text-cream {
  color: var(--color-cream) !important;
}
.text-beige-light {
  color: var(--color-beige-light) !important;
}
.text-beige {
  color: var(--color-beige) !important;
}
.text-tan {
  color: var(--color-tan) !important;
}
```

Usage example:

```jsx
<div className="bg-cream text-tan p-4">
  <h1>Discover Your Perfect Scent</h1>
  <p className="mb-0">Luxury fragrances curated for you.</p>
  <Button className="bg-tan border-0">Shop Now</Button>
</div>
```

## Product Data Structure

Products are stored in `src/data/products.json`:

```json
{
  "perfumes": [
    {
      "id": 1,
      "name": "Chanel No. 5 Eau de Parfum",
      "brand": "Chanel",
      "category": "Women",
      "price": 167,
      "originalPrice": 239,
      "discount": 30,
      "rating": 5.0,
      "reviewCount": 2,
      "images": ["..."],
      "description": "...",
      "sizes": ["50ml", "100ml", "150ml"],
      "sustainability": {
        "renewableMaterials": true,
        "cleanerChemistry": true
      },
      "inStock": true,
      "isNew": false,
      "isBestSeller": true
    }
  ],
  "categories": ["All", "Women", "Men", "Unisex"],
  "brands": ["Chanel", "Dior", "Tom Ford", ...]
}
```

## Development Notes

- Router mounting is in `src/main.jsx` using `BrowserRouter`.
- App wrapped with `ClerkProvider` for authentication.
- Global navigation lives in `src/components/Navbar.jsx` with Clerk user controls.
- Footer is in `src/components/Footer.jsx`.
- Cart state managed via Context API in `src/context/CartContext.jsx`.
- Sidebar uses sticky positioning (desktop) and static (mobile).
- Product images sourced from Unsplash.
- Linting uses ESLint with React/Hook/Refresh plugins. Run `npm run lint`.

## Clerk Authentication Setup

1. Install Clerk: `npm install @clerk/clerk-react`
2. Set environment variables in `.env`:
   ```
   VITE_CLERK_PUBLISHABLE_KEY=your_publishable_key
   ```
3. Wrap app with `ClerkProvider` in `main.jsx`
4. Use `SignInButton`, `SignUpButton`, and `UserButton` components in Navbar
5. Protect routes with `SignedIn` and `SignedOut` components

## SEO & Meta Tags

The project includes comprehensive SEO meta tags in `index.html`:

- Primary meta tags (title, description, keywords)
- Open Graph tags for social media sharing (Facebook, LinkedIn)
- Twitter Card tags for Twitter sharing
- Mobile and PWA meta tags
- Canonical URL

## Responsive Design

- Mobile-first approach
- Breakpoints:
  - Mobile: < 576px
  - Tablet: 576px - 991px
  - Desktop: ≥ 992px
- Sidebar toggles between fixed (desktop) and static (mobile)
- Product grid adjusts from 1-4 columns based on screen size
- Carousel adapts for touch devices

## Future Enhancements

- [ ] Wishlist functionality
- [ ] Product reviews and ratings
- [ ] Advanced search with autocomplete
- [ ] Order history and tracking
- [ ] Payment integration (Stripe/PayPal)
- [ ] Email notifications
- [ ] Multiple currency support
- [ ] Dark mode toggle
- [ ] Admin dashboard for product management
