import Photo from './Photo.jsx';

// The cover image used at the top of inner pages
export default function PageBanner({ eyebrow, title, subtitle, image }) {
  return (
    <section className="banner">
      <Photo src={image} alt="" className="banner-bg" />
      <div className="container banner-inner">
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        <h1>{title}</h1>
        {subtitle && <p>{subtitle}</p>}
      </div>
    </section>
  );
}
