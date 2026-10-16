import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext.jsx';
import { FREE_SHIPPING_OVER, SHIPPING_FEE, money } from '../data/products.js';

export default function Cart() {
  const { items, subtotal, setQty, removeItem } = useCart();
  const shipping = items.length === 0 || subtotal >= FREE_SHIPPING_OVER ? 0 : SHIPPING_FEE;
  const toFree = Math.max(0, FREE_SHIPPING_OVER - subtotal);

  if (items.length === 0) {
    return (
      <section className="section"><div className="container narrow center">
        <h1>Your cart is empty</h1>
        <p className="muted">Looks like you have not picked a coffee yet.</p>
        <Link to="/shop" className="btn btn-dark" style={{ marginTop: 20 }}>Start shopping</Link>
      </div></section>
    );
  }

  return (
    <section className="section">
      <div className="container">
        <h1 style={{ marginBottom: 24 }}>Your cart</h1>
        <div className="cart-layout">
          <div>
            {toFree > 0 && <p className="ship-note">Add {money(toFree)} more for free shipping.</p>}
            {items.map((l) => (
              <div className="line" key={l.key}>
                <div className="line-art"><span style={{ background: l.color }} /></div>
                <div className="line-info">
                  <Link to={`/product/${l.id}`}><b>{l.name}</b></Link>
                  <span className="muted">{l.origin} &middot; {l.size}</span>
                  <button className="link-btn" onClick={() => removeItem(l.key)}>Remove</button>
                </div>
                <div className="qty">
                  <button aria-label="Decrease quantity" onClick={() => setQty(l.key, l.qty - 1)}>&minus;</button>
                  <span>{l.qty}</span>
                  <button aria-label="Increase quantity" onClick={() => setQty(l.key, l.qty + 1)}>+</button>
                </div>
                <b className="line-total">{money(l.price * l.qty)}</b>
              </div>
            ))}
          </div>
          <aside className="summary">
            <h3>Order summary</h3>
            <dl>
              <dt>Subtotal</dt><dd>{money(subtotal)}</dd>
              <dt>Shipping</dt><dd>{shipping === 0 ? 'Free' : money(shipping)}</dd>
            </dl>
            <div className="total"><span>Total</span><span>{money(subtotal + shipping)}</span></div>
            <Link to="/checkout" className="btn btn-dark block">Checkout</Link>
          </aside>
        </div>
      </div>
    </section>
  );
}
