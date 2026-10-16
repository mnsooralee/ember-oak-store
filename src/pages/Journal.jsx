import { Link } from 'react-router-dom';
import PageBanner from '../components/PageBanner.jsx';
import Photo from '../components/Photo.jsx';
import { ARTICLES } from '../data/journal.js';
import { IMG } from '../data/images.js';

export default function Journal() {
  return (
    <>
      <PageBanner eyebrow="The journal" title="Stories and brew guides" subtitle="Tips, origin stories and news from the roastery." image={IMG.journal} />
      <section className="section">
        <div className="container grid-3">
          {ARTICLES.map((a) => (
            <Link key={a.slug} to={`/journal/${a.slug}`} className="acard">
              <div className="acard-img"><Photo src={a.cover} alt={a.title} /></div>
              <span className="tag">{a.date} &middot; {a.read}</span>
              <h3>{a.title}</h3>
              <p className="muted">{a.excerpt}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
