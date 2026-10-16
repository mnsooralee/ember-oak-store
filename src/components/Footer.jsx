import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <div className="logo">Ember &amp; Oak</div>
          <p>Small-batch coffee, roasted to order and shipped within 48 hours. Ethically sourced, carefully made.</p>
        </div>
        <div>
          <h4>Shop</h4>
          <ul>
            <li><Link to="/shop">All coffee</Link></li>
            <li><Link to="/shop">New arrivals</Link></li>
            <li><Link to="/shop">Best sellers</Link></li>
            <li><Link to="/cart">Your cart</Link></li>
          </ul>
        </div>
        <div>
          <h4>Company</h4>
          <ul>
            <li><Link to="/about">Our story</Link></li>
            <li><Link to="/journal">Journal</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4>Visit us</h4>
          <ul>
            <li>22 Roaster Lane, Your City</li>
            <li>hello@emberandoak.example</li>
            <li>Mon to Sat, 8am to 6pm</li>
          </ul>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>&copy; {new Date().getFullYear()} Ember &amp; Oak Coffee Roasters</span>
        <span>Privacy &middot; Terms &middot; Shipping</span>
      </div>
    </footer>
  );
}
