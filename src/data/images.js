// All photos come from Unsplash. Swap any URL for your own image (or a file in /public).
// If an image fails to load, the <Photo> component shows an elegant gradient instead.
const u = (id, w = 1400) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

export const IMG = {
  hero: u('1495474472287-4d71bcdd2085', 2000),
  promo: u('1447933601403-0c6688de566e', 1400),
  story: u('1442512595331-e89e73853f31', 1200),
  about: u('1509042239860-f550ce710b93', 2000),
  contact: u('1514432324607-a09d9b4aefdd', 2000),
  journal: u('1461023058943-07fcbe16d735', 2000),
  cat: {
    'Single Origin': u('1497935586351-b67a49e012bf', 800),
    Blend: u('1447933601403-0c6688de566e', 800),
    Decaf: u('1509042239860-f550ce710b93', 800),
    All: u('1495474472287-4d71bcdd2085', 800),
  },
};
