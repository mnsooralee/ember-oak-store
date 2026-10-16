import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [state, setState] = useState('idle'); // idle | error | done

  function submit(e) {
    e.preventDefault();
    setState(/^\S+@\S+\.\S+$/.test(email) ? 'done' : 'error');
  }

  return (
    <section className="news-band">
      <div className="container news-inner">
        <div>
          <h2>Join the roastery</h2>
          <p>Get 10% off your first order, plus new arrivals and brew tips every month.</p>
        </div>
        {state === 'done' ? (
          <p role="status" className="news-ok">Welcome aboard. Your 10% code is on its way.</p>
        ) : (
          <form className="news-form" onSubmit={submit} noValidate>
            <input type="email" placeholder="Your email address" value={email} onChange={(e) => setEmail(e.target.value)} aria-label="Email address" aria-invalid={state === 'error'} />
            <button className="btn btn-dark" type="submit">Subscribe</button>
          </form>
        )}
        {state === 'error' && <span className="news-err">Please enter a valid email.</span>}
      </div>
    </section>
  );
}
