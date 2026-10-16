import { Link } from 'react-router-dom';

export default function SectionHead({ eyebrow, title, intro, to, linkText, light = false, center = false }) {
  return (
    <div className={`sec-head ${center ? 'center' : ''} ${light ? 'light' : ''}`}>
      <div>
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        <h2>{title}</h2>
        {intro && <p className="sec-intro">{intro}</p>}
      </div>
      {to && <Link to={to} className="link">{linkText} &rarr;</Link>}
    </div>
  );
}
