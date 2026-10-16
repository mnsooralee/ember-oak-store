import { Link } from 'react-router-dom';
import PageBanner from '../components/PageBanner.jsx';
import SectionHead from '../components/SectionHead.jsx';
import Photo from '../components/Photo.jsx';
import { IMG } from '../data/images.js';

const STATS = [['12,000+', 'bags roasted'], ['9 years', 'of roasting'], ['14', 'partner farms'], ['4.8 / 5', 'customer rating']];
const VALUES = [
  ['Taste first', 'We never trade flavour for convenience. If a coffee is not exceptional, we do not sell it.'],
  ['Fair to farmers', 'Long-term direct relationships and prices that let growers invest in their land.'],
  ['Honest and simple', 'Clear prices, clear origins and no marketing fluff on the bag.'],
];

export default function About() {
  return (
    <>
      <PageBanner eyebrow="Our story" title="Roasted slowly, shipped quickly" subtitle="A small team with one big belief: coffee should taste like where it came from." image={IMG.about} />

      <section className="section">
        <div className="container split">
          <div className="split-img"><Photo src={IMG.story} alt="Coffee being prepared" /></div>
          <div>
            <span className="eyebrow">How it began</span>
            <h2>One small roaster, one stubborn idea</h2>
            <p>Ember &amp; Oak started in a garage with a 2kg roaster and a pile of green beans from a friend's trip to Ethiopia. The first batch was far from perfect, but the idea stuck: roast carefully, buy fairly and ship fresh.</p>
            <p>Nine years on, we still roast in small batches and still taste every one before it ships. We have grown, but we have not changed how we work.</p>
            <Link to="/shop" className="btn btn-navy">Shop our coffee</Link>
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container stats">
          {STATS.map(([n, l]) => <div key={l}><strong>{n}</strong><span>{l}</span></div>)}
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead eyebrow="What we stand for" title="Our values" center />
          <div className="grid-3">
            {VALUES.map(([t, d], i) => (
              <div key={t} className="value"><span className="why-num dark">0{i + 1}</span><h3>{t}</h3><p className="muted">{d}</p></div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
