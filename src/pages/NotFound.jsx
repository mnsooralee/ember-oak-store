import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <section className="section"><div className="container narrow center">
      <h1>Page not found</h1>
      <p className="muted">That page has gone cold. Let us get you back.</p>
      <Link to="/" className="btn btn-dark" style={{ marginTop: 20 }}>Back to home</Link>
    </div></section>
  );
}
