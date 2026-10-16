import { useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import PageBanner from '../components/PageBanner.jsx';
import { IMG } from '../data/images.js';
import ProductCard from '../components/ProductCard.jsx';
import { PRODUCTS, CATEGORIES } from '../data/products.js';

export default function Shop() {
  const [query, setQuery] = useState('');
  const [params] = useSearchParams();
  const fromUrl = params.get('category');
  const [category, setCategory] = useState(CATEGORIES.includes(fromUrl) ? fromUrl : 'All');
  const [sort, setSort] = useState('featured');

  // Recalculate only when a filter changes
  const visible = useMemo(() => {
    let list = PRODUCTS.filter((p) => {
      const matchesCategory = category === 'All' || p.category === category;
      const text = `${p.name} ${p.origin} ${p.notes.join(' ')}`.toLowerCase();
      return matchesCategory && text.includes(query.trim().toLowerCase());
    });
    if (sort === 'low') list = [...list].sort((a, b) => a.price - b.price);
    if (sort === 'high') list = [...list].sort((a, b) => b.price - a.price);
    if (sort === 'best') list = [...list].sort((a, b) => b.sold - a.sold);
    if (sort === 'new') list = [...list].sort((a, b) => Number(b.isNew) - Number(a.isNew));
    if (sort === 'rating') list = [...list].sort((a, b) => b.rating - a.rating);
    return list;
  }, [query, category, sort]);

  return (
    <>
      <PageBanner eyebrow="The shop" title="Find your next favourite cup" subtitle="Single origins and blends, roasted fresh to order." image={IMG.hero} />
      <section className="section">
        <div className="container">
          <div className="toolbar">
            <input type="search" placeholder="Search by name, origin or flavour" value={query} onChange={(e) => setQuery(e.target.value)} aria-label="Search coffee" />
            <select value={sort} onChange={(e) => setSort(e.target.value)} aria-label="Sort by">
              <option value="featured">Featured</option>
              <option value="low">Price: low to high</option>
              <option value="high">Price: high to low</option>
              <option value="best">Best selling</option>
              <option value="new">Newest first</option>
              <option value="rating">Top rated</option>
            </select>
          </div>
          <div className="chips">
            {CATEGORIES.map((c) => (
              <button key={c} className="chip" aria-pressed={category === c} onClick={() => setCategory(c)}>{c}</button>
            ))}
          </div>
          {visible.length === 0 ? (
            <p className="muted center" style={{ padding: '60px 0' }}>No coffee matches your search. Try something else.</p>
          ) : (
            <div className="grid-4">{visible.map((p) => <ProductCard key={p.id} product={p} />)}</div>
          )}
        </div>
      </section>
    </>
  );
}
