import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard.jsx';
import SectionHead from '../components/SectionHead.jsx';
import Photo from '../components/Photo.jsx';
import { PRODUCTS, CATEGORIES } from '../data/products.js';
import { IMG } from '../data/images.js';
import { ARTICLES, REVIEWS } from '../data/journal.js';

const WHY = [
  ['Roasted to order', 'Every bag is roasted the day before it ships, so it never sits on a shelf.'],
  ['Ethically sourced', 'We buy direct from farms and pay well above fair-trade minimums.'],
  ['Small batches', 'Roasted in 5kg batches so we can taste and perfect every single one.'],
  ['Carbon-aware', 'Recyclable packaging and a roastery powered by renewable energy.'],
];

const STEPS = [
  ['Source', 'We visit the farms, taste hundreds of samples and pick only the best lots.'],
  ['Roast', 'Each coffee gets its own roast profile, developed to bring out its character.'],
  ['Ship', 'Packed within hours of roasting and on your doorstep in two to three days.'],
];

export default function Home() {
  const newArrivals = PRODUCTS.filter((p) => p.isNew).slice(0, 4);
  const bestSellers = [...PRODUCTS].sort((a, b) => b.sold - a.sold).slice(0, 4);

  return (
    <>
      {/* COVER */}
      <section className="hero">
        <Photo src={IMG.hero} alt="" className="hero-bg" />
        <div className="container hero-inner">
          <span className="eyebrow">Small-batch coffee roasters</span>
          <h1>Coffee worth <em>slowing down</em> for.</h1>
          <p>Single origins and signature blends, roasted fresh every week and delivered to your door.</p>
          <div className="row">
            <Link to="/shop" className="btn btn-gold">Shop coffee</Link>
            <Link to="/about" className="btn btn-outline">Our story</Link>
          </div>
        </div>
        <div className="hero-strip">
          <div className="container">
            <span>&#9733; 4.8 from 2,400+ reviews</span>
            <span>Free shipping over $50</span>
            <span>Roasted to order</span>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="section">
        <div className="container">
          <SectionHead eyebrow="Browse" title="Shop by style" center />
          <div className="cats">
            {CATEGORIES.map((c) => (
              <Link key={c} to={c === 'All' ? '/shop' : `/shop?category=${encodeURIComponent(c)}`} className="cat">
                <Photo src={IMG.cat[c]} alt={c} />
                <span>{c === 'All' ? 'All coffee' : c}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* NEW ARRIVALS */}
      <section className="section section-soft">
        <div className="container">
          <SectionHead eyebrow="Just landed" title="New arrivals" intro="Fresh lots from this season's harvest." to="/shop" linkText="Shop all" />
          <div className="grid-4">{newArrivals.map((p) => <ProductCard key={p.id} product={p} />)}</div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="section section-dark">
        <div className="container">
          <SectionHead eyebrow="Why choose us" title="Coffee done the careful way" light center />
          <div className="why-grid">
            {WHY.map(([t, d], i) => (
              <div key={t} className="why">
                <span className="why-num">0{i + 1}</span>
                <h3>{t}</h3>
                <p>{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BEST SELLERS */}
      <section className="section">
        <div className="container">
          <SectionHead eyebrow="Customer favourites" title="Best sellers" intro="The coffees our customers reorder again and again." to="/shop" linkText="Shop all" />
          <div className="grid-4">{bestSellers.map((p) => <ProductCard key={p.id} product={p} />)}</div>
        </div>
      </section>

      {/* PROMO */}
      <section className="promo">
        <Photo src={IMG.promo} alt="Fresh roasted coffee beans" className="promo-img" />
        <div className="promo-text">
          <span className="eyebrow">Limited offer</span>
          <h2>Try the House Blend for less</h2>
          <p>Our signature blend, smooth and sweet, with 15% off your first bag. Perfect for espresso, filter or milk.</p>
          <Link to="/product/house-blend" className="btn btn-gold">Get 15% off</Link>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section">
        <div className="container">
          <SectionHead eyebrow="From farm to cup" title="How we make it" center />
          <div className="steps">
            {STEPS.map(([t, d], i) => (
              <div key={t} className="step"><b>{i + 1}</b><h3>{t}</h3><p className="muted">{d}</p></div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="section section-soft">
        <div className="container">
          <SectionHead eyebrow="Kind words" title="Loved by coffee drinkers" center />
          <div className="grid-3">
            {REVIEWS.map((r) => (
              <blockquote key={r.name} className="review">
                <span className="stars">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
                <p>{r.text}</p>
                <footer><b>{r.name}</b> &middot; {r.city}</footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* JOURNAL PREVIEW */}
      <section className="section">
        <div className="container">
          <SectionHead eyebrow="The journal" title="Stories and brew guides" to="/journal" linkText="Read more" />
          <div className="grid-3">
            {ARTICLES.map((a) => (
              <Link key={a.slug} to={`/journal/${a.slug}`} className="acard">
                <div className="acard-img"><Photo src={a.cover} alt={a.title} /></div>
                <span className="tag">{a.date} &middot; {a.read}</span>
                <h3>{a.title}</h3>
                <p className="muted">{a.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
