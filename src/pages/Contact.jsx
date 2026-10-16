import { useState } from 'react';
import PageBanner from '../components/PageBanner.jsx';
import { IMG } from '../data/images.js';

const FAQS = [
  ['How fresh is your coffee?', 'Every order is roasted the day before it ships, so it arrives within days of roasting.'],
  ['How long does delivery take?', 'Most orders arrive in 2 to 3 working days. Orders over $50 ship free.'],
  ['Can I return an opened bag?', 'Yes. If you are not happy, contact us within 14 days and we will make it right.'],
  ['Do you grind the coffee?', 'We sell whole beans for the best flavour. Tell us your brew method and we will recommend a grind size.'],
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', topic: 'Order help', message: '' });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);
  const [open, setOpen] = useState(0);

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  function submit(e) {
    e.preventDefault();
    const errs = {};
    if (form.name.trim().length < 2) errs.name = 'Enter your name.';
    if (!/^\S+@\S+\.\S+$/.test(form.email)) errs.email = 'Enter a valid email.';
    if (form.message.trim().length < 10) errs.message = 'Message should be at least 10 characters.';
    setErrors(errs);
    if (Object.keys(errs).length === 0) setSent(true);
  }

  const err = (k) => errors[k] && <span className="err">{errors[k]}</span>;

  return (
    <>
      <PageBanner eyebrow="Contact" title="We would love to hear from you" subtitle="Questions about an order, a brew method or wholesale? Send us a note." image={IMG.contact} />
      <section className="section">
        <div className="container cart-layout">
          {sent ? (
            <div className="summary" role="status"><h3>Message sent</h3><p>Thanks {form.name}, we will reply within one working day.</p></div>
          ) : (
            <form onSubmit={submit} noValidate>
              <div className="two">
                <label>Name<input name="name" value={form.name} onChange={update} aria-invalid={!!errors.name} />{err('name')}</label>
                <label>Email<input name="email" type="email" value={form.email} onChange={update} aria-invalid={!!errors.email} />{err('email')}</label>
              </div>
              <label>Topic
                <select name="topic" value={form.topic} onChange={update}>
                  <option>Order help</option><option>Brewing advice</option><option>Wholesale</option><option>Other</option>
                </select>
              </label>
              <label>Message<textarea name="message" rows="6" value={form.message} onChange={update} aria-invalid={!!errors.message} />{err('message')}</label>
              <button className="btn btn-navy" type="submit">Send message</button>
            </form>
          )}
          <aside className="summary">
            <h3>Visit the roastery</h3>
            <p>22 Roaster Lane<br />Your City</p>
            <p>hello@emberandoak.example<br />(555) 010-4455</p>
            <h3 style={{ marginTop: 20 }}>Opening hours</h3>
            <p>Mon to Sat: 8am to 6pm<br />Sunday: closed</p>
          </aside>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container narrow">
          <h2 style={{ marginBottom: 20 }}>Frequently asked questions</h2>
          <div className="faq">
            {FAQS.map(([q, a], i) => (
              <div key={q}>
                <button aria-expanded={open === i} onClick={() => setOpen(open === i ? -1 : i)}>{q} <span>{open === i ? '\u2212' : '+'}</span></button>
                {open === i && <p>{a}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
