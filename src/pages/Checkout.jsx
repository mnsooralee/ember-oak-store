import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext.jsx';
import { FREE_SHIPPING_OVER, SHIPPING_FEE, money } from '../data/products.js';

const EMPTY = { name: '', email: '', address: '', city: '', zip: '', card: '' };

export default function Checkout() {
  const { items, subtotal, clear } = useCart();
  const [form, setForm] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [order, setOrder] = useState(null);

  const shipping = subtotal >= FREE_SHIPPING_OVER ? 0 : SHIPPING_FEE;
  const total = subtotal + shipping;
  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  function validate() {
    const e = {};
    if (form.name.trim().length < 2) e.name = 'Enter your full name.';
    if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = 'Enter a valid email.';
    if (form.address.trim().length < 5) e.address = 'Enter your street address.';
    if (!form.city.trim()) e.city = 'Enter your city.';
    if (!/^[A-Za-z0-9 -]{3,10}$/.test(form.zip.trim())) e.zip = 'Enter a valid postcode.';
    if (!/^\d{16}$/.test(form.card.replace(/\s/g, ''))) e.card = 'Enter a 16 digit card number (demo only).';
    return e;
  }

  function submit(e) {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;
    // In a real shop you would send the order to your backend / payment provider here
    setOrder({ id: 'EO-' + Math.floor(100000 + Math.random() * 900000), email: form.email, total });
    clear();
  }

  // Render function (not a component) so inputs keep focus while typing
  const field = (name, label, type = 'text', placeholder = '') => (
    <label key={name}>{label}
      <input name={name} type={type} placeholder={placeholder} value={form[name]} onChange={update} aria-invalid={!!errors[name]} />
      {errors[name] && <span className="err">{errors[name]}</span>}
    </label>
  );

  if (order) {
    return (
      <section className="section"><div className="container narrow center">
        <div className="tick">&#10003;</div>
        <h1>Thank you for your order</h1>
        <p className="muted">Order <b>{order.id}</b> for {money(order.total)} is confirmed. A receipt is on its way to {order.email}.</p>
        <Link to="/shop" className="btn btn-dark" style={{ marginTop: 20 }}>Keep shopping</Link>
      </div></section>
    );
  }

  if (items.length === 0) {
    return (
      <section className="section"><div className="container narrow center">
        <h1>Nothing to check out</h1>
        <Link to="/shop" className="btn btn-dark" style={{ marginTop: 20 }}>Browse coffee</Link>
      </div></section>
    );
  }

  return (
    <section className="section">
      <div className="container">
        <h1 style={{ marginBottom: 24 }}>Checkout</h1>
        <div className="cart-layout">
          <form onSubmit={submit} noValidate>
            <h3>Contact</h3>
            {field('name', 'Full name')}
            {field('email', 'Email', 'email')}
            <h3>Delivery</h3>
            {field('address', 'Street address')}
            <div className="two">{field('city', 'City')}{field('zip', 'Postcode')}</div>
            <h3>Payment</h3>
            {field('card', 'Card number', 'text', '1234 5678 9012 3456')}
            <p className="muted small">Demo store: no real payment is taken.</p>
            <button className="btn btn-dark" type="submit">Place order &middot; {money(total)}</button>
          </form>
          <aside className="summary">
            <h3>Your items</h3>
            {items.map((l) => (
              <div className="mini" key={l.key}><span>{l.qty} &times; {l.name} ({l.size})</span><b>{money(l.price * l.qty)}</b></div>
            ))}
            <div className="mini"><span>Shipping</span><b>{shipping === 0 ? 'Free' : money(shipping)}</b></div>
            <div className="total"><span>Total</span><span>{money(total)}</span></div>
          </aside>
        </div>
      </div>
    </section>
  );
}
