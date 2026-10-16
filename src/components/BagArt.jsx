// A simple SVG coffee bag, so the store needs no image files
export default function BagArt({ name, origin, color }) {
  return (
    <svg viewBox="0 0 200 240" role="img" aria-label={`${name} coffee bag`} className="bag">
      <path d="M45 30 h110 l12 20 v170 a10 10 0 0 1 -10 10 h-114 a10 10 0 0 1 -10 -10 v-170 z" fill={color} />
      <rect x="33" y="30" width="134" height="14" rx="3" fill="#00000030" />
      <rect x="55" y="85" width="90" height="110" rx="6" fill="#f6f0e6" />
      <text x="100" y="118" textAnchor="middle" fontFamily="Playfair Display, serif" fontSize="11" fill="#2b1d16" letterSpacing="2">EMBER &amp; OAK</text>
      <line x1="72" y1="128" x2="128" y2="128" stroke="#c8913a" />
      <text x="100" y="155" textAnchor="middle" fontFamily="Playfair Display, serif" fontSize="15" fontWeight="700" fill="#2b1d16">{name.length > 12 ? name.split(' ')[0] : name}</text>
      <text x="100" y="175" textAnchor="middle" fontFamily="Jost, sans-serif" fontSize="9" fill="#6b5646">{origin.split(' / ')[0].toUpperCase()}</text>
    </svg>
  );
}
