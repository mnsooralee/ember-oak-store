import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useCart } from '../context/CartContext.jsx';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { count } = useCart();
  const close = () => setOpen(false);

  // Add a shadow once the page is scrolled. The returned function is the cleanup.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const link = (to, label, end = false) => (
    <NavLink to={to} end={end} onClick={close} className={({ isActive }) => (isActive ? 'active' : '')}>{label}</NavLink>
  );

  return (
    <>
      <div className="topbar">Free shipping on orders over $50 &nbsp;&middot;&nbsp; Roasted to order, shipped in 48 hours</div>
      <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container nb-inner">
          <button className="burger" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(!open)}>
            {open ? '\u2715' : '\u2630'}
          </button>
          <nav className={`nb-links nb-left ${open ? 'open' : ''}`}>
            {link('/', 'Home', true)}
            {link('/shop', 'Shop')}
            {link('/journal', 'Journal')}
            <span className="nb-mobile-only">{link('/about', 'About')}{link('/contact', 'Contact')}</span>
          </nav>
          <Link to="/" className="nb-logo" onClick={close}>
            <span>Ember &amp; Oak</span>
            <small>Coffee Roasters</small>
          </Link>
          <div className="nb-right">
            <nav className="nb-links nb-desktop-only">{link('/about', 'About')}{link('/contact', 'Contact')}</nav>
            <Link to="/cart" className="cart-link" aria-label={`Cart, ${count} items`}>
              Cart {count > 0 && <span className="cart-badge">{count}</span>}
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}
