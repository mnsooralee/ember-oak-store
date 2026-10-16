import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import BagArt from '../components/BagArt.jsx';
import { useCart } from '../context/CartContext.jsx';
import { PRODUCTS, SIZES, priceFor, money } from '../data/products.js';

export default function Product() {
  const { id } = useParams();
  const { addItem } = useCart();
  const [size, setSize] = useState(SIZES[0].label);
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  const product = PRODUCTS.find((p) => p.id === id);
  if (!product) {
    return (
      <section className="section"><div className="container narrow center">
        <h1>Product not found</h1>
        <Link to="/shop" className="btn btn-dark" style={{ marginTop: 20 }}>Back to shop</Link>
      </div></section>
    );
  }

  const price = priceFor(product, size);
  const related = PRODUCTS.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 3);

  function handleAdd() {
    addItem({ key: `${product.id}-${size}`, id: product.id, name: product.name, origin: product.origin, color: product.color, size, price, qty });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  }

  return (
    <section className="section">
      <div className="container">
        <p className="crumbs"><Link to="/shop">Shop</Link> / {product.name}</p>
        <div className="detail">
          <div className="detail-art"><BagArt name={product.name} origin={product.origin} color={product.color} /></div>
          <div>
            <span className="tag">{product.category} &middot; {product.roast} roast</span>
            <h1 style={{ fontSize: '2.6rem' }}>{product.name}</h1>
            <p className="muted">{product.origin} &middot; &#9733; {product.rating}</p>
            <p>{product.desc}</p>
            <div className="notes">{product.notes.map((n) => <span key={n}>{n}</span>)}</div>

            <h4>Size</h4>
            <div className="chips">
              {SIZES.map((s) => (
                <button key={s.label} className="chip" aria-pressed={size === s.label} onClick={() => setSize(s.label)}>{s.label}</button>
              ))}
            </div>

            <div className="buy">
              <div className="qty">
                <button aria-label="Decrease quantity" onClick={() => setQty(Math.max(1, qty - 1))}>&minus;</button>
                <span>{qty}</span>
                <button aria-label="Increase quantity" onClick={() => setQty(Math.min(20, qty + 1))}>+</button>
              </div>
              <button className="btn btn-dark grow" onClick={handleAdd}>
                {added ? 'Added to cart \u2713' : `Add to cart \u00B7 ${money(price * qty)}`}
              </button>
            </div>
            {added && <p role="status" className="muted">Added. <Link to="/cart" className="link">View cart</Link></p>}
          </div>
        </div>

        {related.length > 0 && (
          <>
            <h2 style={{ marginTop: 80 }}>You may also like</h2>
            <div className="grid-4" style={{ marginTop: 24 }}>
              {related.map((p) => <ProductCardLite key={p.id} p={p} />)}
            </div>
          </>
        )}
      </div>
    </section>
  );
}

// Small local component, defined OUTSIDE Product so it is not re-created on every render
function ProductCardLite({ p }) {
  return (
    <Link to={`/product/${p.id}`} className="pcard">
      <div className="pcard-art"><BagArt name={p.name} origin={p.origin} color={p.color} /></div>
      <div className="pcard-body"><h3>{p.name}</h3><p className="muted">{p.origin}</p></div>
    </Link>
  );
}
