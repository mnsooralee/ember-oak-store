import { Link, useParams } from 'react-router-dom';
import Photo from '../components/Photo.jsx';
import { ARTICLES } from '../data/journal.js';

export default function Article() {
  const { slug } = useParams();
  const article = ARTICLES.find((a) => a.slug === slug);

  if (!article) {
    return (
      <section className="section"><div className="container narrow center">
        <h1>Article not found</h1>
        <Link to="/journal" className="btn btn-navy" style={{ marginTop: 20 }}>Back to the journal</Link>
      </div></section>
    );
  }

  const more = ARTICLES.filter((a) => a.slug !== slug);

  return (
    <article className="section">
      <div className="container narrow">
        <p className="crumbs"><Link to="/journal">Journal</Link> / {article.title}</p>
        <span className="tag">{article.date} &middot; {article.read}</span>
        <h1 style={{ fontSize: 'clamp(2rem,5vw,3rem)', margin: '10px 0 24px' }}>{article.title}</h1>
        <div className="article-cover"><Photo src={article.cover} alt={article.title} /></div>
        <div className="prose">{article.body.map((p, i) => <p key={i}>{p}</p>)}</div>
        <h3 style={{ marginTop: 48 }}>Keep reading</h3>
        <ul className="more">
          {more.map((a) => <li key={a.slug}><Link to={`/journal/${a.slug}`} className="link">{a.title}</Link></li>)}
        </ul>
      </div>
    </article>
  );
}
