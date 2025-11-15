# Perfume E‑Commerce (React + Vite)

Clean, modern e‑commerce front‑end for perfumes. Built with React, Vite, Bootstrap, and React Router. Product data comes from DummyJSON; authentication via Clerk is planned.

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
- React Router
- Bootstrap 5 + React‑Bootstrap
- ESLint (React, Hooks, Refresh)
- Data: DummyJSON products API
- Auth: Clerk (to be integrated)

## Project Structure

```
src/
├─ components/
│  ├─ Navbar.jsx
│  └─ Footer.jsx
├─ pages/
│  ├─ Home.jsx
│  ├─ Products.jsx
│  ├─ ProductDetails.jsx
│  ├─ Cart.jsx
│  └─ About.jsx
├─ assets/
├─ App.jsx
├─ App.css
└─ main.jsx
```

## Routing

- `/` → Home
- `/products` → Product listing
- `/product/:id` → Product details
- `/cart` → Shopping cart
- `/about` → About

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

## API

DummyJSON Products API:

- All products: `https://dummyjson.com/products`
- Single product: `https://dummyjson.com/products/{id}`
- Search: `https://dummyjson.com/products/search?q={query}`
- Categories: `https://dummyjson.com/products/categories`
- By category: `https://dummyjson.com/products/category/{category}`

## Development Notes

- Router mounting is in `src/main.jsx` using `BrowserRouter`.
- Global navigation lives in `src/components/Navbar.jsx`.
- Footer is in `src/components/Footer.jsx`.
- Linting uses ESLint with React/Hook/Refresh plugins. Run `npm run lint`.

## Clerk (Authentication) – Planned

Steps to integrate when ready:

1. `npm install @clerk/clerk-react`
2. Create Clerk app and get keys
3. Wrap the app with `ClerkProvider`
4. Add `SignInButton` / `UserButton` in the Navbar
5. Protect cart/checkout routes as needed
