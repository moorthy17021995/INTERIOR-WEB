# Product Requirements Document (PRD) - Stitch React Site Testing

## 1. Project Overview
The Stitch React Site is a premium, minimalist e-commerce platform for architectural furniture and objects. The application is built using React, Vite, and Tailwind CSS. The goal of this testing phase is to ensure the functional integrity of the user interface, routing, and core commerce flows (catalog browsing, product details, and cart management).

## 2. Target Features & Functional Requirements

### 2.1 Navigation & Routing
- **Home Page (`/`):** Should load hero section, category bento grid, and new arrivals.
- **Collection Page (`/collection`, `/collections`):** Should display product archive with filters.
- **Detail Page (`/detail`):** Should display specific product information, images, and material selectors.
- **Cart Page (`/cart`):** Should display items added to the cart and order summary.
- **Footer/Navbar:** Should be persistent across all pages.

### 2.2 Catalog Browsing (Collection Page)
- **Filtering:**
  - Users can filter by Category (Seating, Lighting, Surfaces, Objects).
  - Users can filter by Material (Concrete, Steel, Glass, Oak).
- **Sorting:**
  - Users can sort by Curated, Price (Low/High), and New Arrivals.
- **Pagination:**
  - "Load More" button should be functional (or simulate loading more items).
- **Product Cards:**
  - Clicking a product card should navigate to the Detail page.
  - Hovering should show the "Add to cart" (+) button.

### 2.3 Product Detail Page
- **Gallery:** Should display high-impact images.
- **Material Selection:** Users should be able to click on different finishes (Walnut, Oak, Ash).
- **CTA:** "Inquire for Purchase" button should be visible and clickable.

### 2.4 Cart Management
- **Item Display:** Show product image, name, finish, and price.
- **Quantity Adjustment:** Increase/decrease quantity using +/- buttons.
- **Removal:** Click "close" icon to remove items.
- **Summary:** Display Subtotal and estimated total.
- **Checkout:** "Proceed to Checkout" button should be functional.

## 3. User Interactions (Test Cases)
1. **Flow - Browse to Detail:** Home -> Click "Explore Collection" -> Click "Monolith Chair" -> Verify Detail Page.
2. **Flow - Add to Cart:** Collection Page -> Hover product -> Click "+" -> Navigate to /cart -> Verify item exists.
3. **Flow - Cart Edit:** Cart Page -> Increase quantity -> Verify Subtotal updates -> Remove item -> Verify Cart is empty.
4. **Flow - Filter:** Collection Page -> Select "Lighting" -> Verify only lighting products are shown (if implemented) or filter UI state updates.

## 4. Technical Constraints & Known Limitations
- Data is currently static and not fetched from a backend API.
- Checkout and Inquiry buttons are placeholders.
- State management for the cart is likely local-only (if implemented).

## 5. Success Metrics
- All routes load without 404s.
- All primary CTA buttons are interactive.
- Responsive design holds up across mobile and desktop views.
