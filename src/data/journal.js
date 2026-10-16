import { IMG } from './images.js';

export const ARTICLES = [
  { slug: 'pour-over-perfected', title: 'Pour-over, perfected in five steps', date: 'October 2, 2026', read: '4 min read', cover: IMG.contact,
    excerpt: 'A simple routine that turns good beans into a great cup, with no fancy equipment.',
    body: ['Pour-over rewards patience. The method is simple, but small details such as water temperature, grind size and timing make a big difference.',
      'Start with 15 grams of coffee for every 250 millilitres of water. Grind it to the texture of coarse sand, and heat your water to just off the boil, around 94 degrees.',
      'Wet the filter and the grounds, then wait 30 seconds. This "bloom" lets trapped gas escape so the water can extract flavour evenly.',
      'Pour in slow circles until you reach your target weight, aiming to finish in about three minutes. If it tastes sour, grind finer. If it tastes bitter, grind coarser.'] },
  { slug: 'meet-the-farmers', title: 'Meet the farmers behind our Yirgacheffe', date: 'September 18, 2026', read: '5 min read', cover: IMG.journal,
    excerpt: 'A look at the cooperative in southern Ethiopia that grows our most loved light roast.',
    body: ['High in the hills of Yirgacheffe, smallholder farmers pick coffee cherries by hand, selecting only the ripest fruit.',
      'We buy directly from the cooperative at a price well above the fair-trade minimum. That money funds a washing station, a school and better roads to market.',
      'The result is a coffee that tastes of jasmine and peach, and a supply chain you can feel good about.'] },
  { slug: 'how-to-store-beans', title: 'How to keep your beans fresh', date: 'September 1, 2026', read: '3 min read', cover: IMG.story,
    excerpt: 'Light, air and heat are the enemies. Here is where, and how, to store your coffee.',
    body: ['Coffee is at its best within a month of roasting. After that, flavour fades as oils oxidise.',
      'Keep your beans in the bag they came in, squeeze out the air and seal it tight. A cool, dark cupboard is ideal.',
      'Avoid the fridge and freezer. Moisture and strong smells will damage the beans. Grind only what you need, right before brewing.'] },
];

export const REVIEWS = [
  { name: 'Daniel R.', city: 'Austin', text: 'The Yirgacheffe is unreal. Floral, bright and so clean. I have not bought supermarket coffee since.' },
  { name: 'Sara M.', city: 'Leeds', text: 'Arrived two days after roasting and the smell when I opened the bag was incredible. Beautiful packaging too.' },
  { name: 'Imran K.', city: 'Toronto', text: 'The Midnight Espresso makes the best flat white I have had at home. Fast delivery and friendly support.' },
];
