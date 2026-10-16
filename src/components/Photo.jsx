import { useState } from 'react';

// An <img> that falls back to a gradient if the image cannot load
export default function Photo({ src, alt, className = '' }) {
  const [failed, setFailed] = useState(false);
  if (failed || !src) {
    return <div className={`photo-fallback ${className}`} role="img" aria-label={alt} />;
  }
  return <img className={`photo ${className}`} src={src} alt={alt} loading="lazy" onError={() => setFailed(true)} />;
}
