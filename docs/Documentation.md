# Perfume E-Commerce Project Documentation

## 1. Project Planning

### 1.1 Project Overview

The **Perfume E-Commerce** project is a modern, responsive web application designed to sell luxury fragrances. It provides a seamless shopping experience with features like product filtering, detailed product views, and a shopping cart. The application is built using **React** and **Vite** for high performance and **Bootstrap** for responsive styling.

### 1.2 Objectives

- **User Experience**: Deliver a premium, fast, and intuitive shopping interface.
- **Product Discovery**: Enable users to easily find perfumes by category, brand, price, and rating.
- **Responsiveness**: Ensure full functionality across mobile, tablet, and desktop devices.
- **Scalability**: Maintain a clean code structure to support future features like payment integration and user reviews.

### 1.3 Technology Stack

- **Frontend Framework**: React 19
- **Build Tool**: Vite
- **Routing**: React Router v6
- **Styling**: Bootstrap 5, React-Bootstrap, Custom CSS
- **Authentication**: Clerk
- **Icons**: Lucide React
- **State Management**: React Context API (Cart)

### 1.4 Roadmap & Future Enhancements

- **Phase 1**: Core catalog, filtering, cart functionality, authentication.
- **Phase 2**: Wishlist, product reviews, advanced search.
- **Phase 3 (Current)**: Payment gateway integration (Stripe/PayPal), order history.
- **Phase 4**: Admin dashboard for inventory management.

---

## 2. Stakeholder Analysis

### 2.1 Key Stakeholders

| Stakeholder                | Role                | Interests & Needs                                                                                                                         |
| :------------------------- | :------------------ | :---------------------------------------------------------------------------------------------------------------------------------------- |
| **End Users (Customers)**  | Primary Users       | - Easy navigation and search.<br>- Detailed product information.<br>- Secure and smooth checkout process.<br>- Mobile-friendly interface. |
| **Project Owner / Client** | Decision Maker      | - High-quality, premium design.<br>- Functional MVP to showcase products.<br>- Scalable architecture for future sales growth.             |
| **Developers**             | Implementation Team | - Clean, maintainable code.<br>- Reusable components.<br>- Clear documentation and requirements.                                          |
| **Content Managers**       | Operational Users   | - Easy way to update product data (currently JSON-based).<br>- Ability to manage images and descriptions.                                 |

---

## 3. Database Design

The project currently uses a local JSON-based database (`src/data/products.json`). Below is the schema representation for the product data.

### 3.1 Product Schema (`products.json`)

The `perfumes` array contains objects with the following structure:

| Field            | Type          | Description                        | Example                            |
| :--------------- | :------------ | :--------------------------------- | :--------------------------------- |
| `id`             | Integer       | Unique identifier for the product. | `1`                                |
| `name`           | String        | Name of the perfume.               | `"Chanel No. 5"`                   |
| `brand`          | String        | Brand manufacturer.                | `"Chanel"`                         |
| `category`       | String        | Target audience category.          | `"Women"`, `"Men"`, `"Unisex"`     |
| `price`          | Number        | Current selling price.             | `167`                              |
| `originalPrice`  | Number        | Original price before discount.    | `239`                              |
| `discount`       | Number        | Discount percentage.               | `30`                               |
| `rating`         | Number        | Product rating (0-5).              | `5.0`                              |
| `reviewCount`    | Integer       | Number of user reviews.            | `2`                                |
| `images`         | Array[String] | List of image URLs.                | `["url1", "url2"]`                 |
| `description`    | String        | Full product description.          | `"The iconic Chanel..."`           |
| `sizes`          | Array[String] | Available bottle sizes.            | `["50ml", "100ml"]`                |
| `sustainability` | Object        | Sustainability features.           | `{ "renewableMaterials": true }`   |
| `details`        | Object        | Specific product attributes.       | `{ "type": "Eau de Parfum", ... }` |
| `inStock`        | Boolean       | Availability status.               | `true`                             |
| `isNew`          | Boolean       | Flag for new arrivals.             | `false`                            |
| `isBestSeller`   | Boolean       | Flag for best-selling items.       | `true`                             |

### 3.2 Auxiliary Data

- **Categories**: `["All", "Women", "Men", "Unisex"]`
- **Brands**: List of available brands for filtering.

---

## 4. UI/UX Design

### 4.1 Design Philosophy

The design aims for a **"Luxury Minimalist"** aesthetic, utilizing a soft color palette (creams, beiges, tans) to evoke elegance and sophistication. The interface prioritizes high-quality imagery and whitespace.

### 4.2 Color Palette

Defined in `src/App.css`:

- **Cream**: `#f9f8f6` (Backgrounds)
- **Beige Light**: `#efe9e3` (Sections, Cards)
- **Beige**: `#d9cfc7` (Borders, Accents)
- **Tan**: `#c9b59c` (Primary Text, Buttons, Highlights)

### 4.3 Typography

- **Primary Font**: Sans-serif (Clean, modern readability).
- **Headings**: Bold, prominent for hierarchy.

### 4.4 Component Hierarchy

- **App (Root)**
  - **CartProvider** (State)
    - **RouterProvider**
      - **Layout**
        - **Navbar** (Navigation, Cart Badge, Auth)
        - **Outlet** (Page Content)
          - **Home**: Hero, Categories, Favorites, Features.
          - **Products**: Sidebar (Filters), ProductList, ProductCard.
          - **ProductDetails**: ImageGallery, Info, AddToCart.
          - **Cart**: CartItems, Summary.
          - **About**: Static content.
        - **Footer** (Links, Copyright)

### 4.5 User Flow (Routing)

1.  **Home (`/`)**: Landing page with featured content.
2.  **Browse (`/products`)**: Users filter and search for perfumes.
3.  **Detail (`/product/:id`)**: Users view specifics and add to cart.
4.  **Cart (`/cart`)**: Users review items and proceed to checkout (mockup).
5.  **Auth**: Users sign in/up via Clerk to access personalized features.
