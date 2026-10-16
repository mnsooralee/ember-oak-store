# Ember & Oak (React + Vite + React Router)
A small-batch coffee roaster online store.

    npm install
    npm run dev       # http://localhost:5173
    npm run build

## Features
- 10 routes: Home, Shop, Product (/product/:id), Cart, Checkout, About, Journal, Article (/journal/:slug), Contact, 404
- Home sections: cover, categories, new arrivals, why choose us, best sellers, promo, process, reviews, journal
- Theme: gold #eeb85e + navy #193361 (change in the :root block of src/index.css)
- Photos load from Unsplash (edit src/data/images.js to use your own)
- Shop: search, category filter, sorting
- Cart with Context API + useReducer, saved to localStorage
- Size variants with different prices, free shipping over $50
- Checkout form with validation and order confirmation

## Structure
    src/data/products.js        product data + constants
    src/context/CartContext.jsx cart state (reducer + provider + hook)
    src/components/             Navbar, Footer, ProductCard, BagArt
    src/pages/                  one file per route
    src/index.css               all styling (tokens at the top)
