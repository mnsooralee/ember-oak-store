import { Link } from 'react-router-dom';
import BagArt from './BagArt.jsx';
import { money, BEST_SELLER_MIN } from '../data/products.js';

export default function ProductCard({ product }) {
  return (
    <Link to={`/product/${product.id}`} className="pcard">
      <div className="pcard-art">
        {product.isNew && <span className="badge">New</span>}
        {!product.isNew && product.sold >= BEST_SELLER_MIN && <span className="badge badge-gold">Best seller</span>}
        <BagArt name={product.name} origin={product.origin} color={product.color} />
      </div>
      <div className="pcard-body">
        <span className="tag">{product.category} &middot; {product.roast}</span>
        <h3>{product.name}</h3>
        <p className="muted">{product.origin}</p>
        <div className="pcard-foot">
          <span>From {money(product.price)}</span>
          <span className="rating">&#9733; {product.rating}</span>
        </div>
      </div>
    </Link>
  );
}
