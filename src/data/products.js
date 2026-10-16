export const SIZES = [
  { label: '250g', mult: 1 },
  { label: '500g', mult: 1.8 },
  { label: '1kg', mult: 3.3 },
];

export const FREE_SHIPPING_OVER = 50;
export const SHIPPING_FEE = 5;

export const CATEGORIES = ['All', 'Single Origin', 'Blend', 'Decaf'];

export const PRODUCTS = [
  { id: 'ethiopia-yirgacheffe', sold: 1240, isNew: false, name: 'Yirgacheffe', origin: 'Ethiopia', category: 'Single Origin', roast: 'Light', price: 16, rating: 4.9, color: '#c58b4e',
    notes: ['Jasmine', 'Bergamot', 'Peach'], desc: 'Floral and bright, with a tea-like body. Grown at high altitude and washed for a clean, delicate cup.' },
  { id: 'colombia-huila', sold: 860, isNew: false, name: 'Huila', origin: 'Colombia', category: 'Single Origin', roast: 'Medium', price: 14, rating: 4.7, color: '#8a5a3b',
    notes: ['Caramel', 'Red apple', 'Cocoa'], desc: 'Sweet and balanced with a rounded finish. A dependable everyday coffee that works with any brew method.' },
  { id: 'guatemala-antigua', sold: 540, isNew: true, name: 'Antigua', origin: 'Guatemala', category: 'Single Origin', roast: 'Medium', price: 15, rating: 4.6, color: '#6f4a2f',
    notes: ['Dark chocolate', 'Orange zest', 'Almond'], desc: 'Volcanic soil gives this coffee a rich body and gentle acidity, with a long chocolatey finish.' },
  { id: 'kenya-aa', sold: 710, isNew: true, name: 'Kenya AA', origin: 'Kenya', category: 'Single Origin', roast: 'Light', price: 18, rating: 4.8, color: '#a8472f',
    notes: ['Blackcurrant', 'Grapefruit', 'Brown sugar'], desc: 'Juicy and vibrant. A showpiece coffee for those who love fruit-forward flavours.' },
  { id: 'house-blend', sold: 1580, isNew: false, name: 'House Blend', origin: 'Brazil / Colombia', category: 'Blend', roast: 'Medium', price: 12, rating: 4.7, color: '#5b3a24',
    notes: ['Hazelnut', 'Toffee', 'Milk chocolate'], desc: 'Our signature blend. Smooth, sweet and made to taste great with or without milk.' },
  { id: 'midnight-espresso', sold: 1130, isNew: false, name: 'Midnight Espresso', origin: 'Brazil / Sumatra', category: 'Blend', roast: 'Dark', price: 13, rating: 4.8, color: '#2e1d14',
    notes: ['Dark cocoa', 'Molasses', 'Smoke'], desc: 'Bold and syrupy with a thick crema. Built for espresso and stands up well in milk drinks.' },
  { id: 'sumatra-mandheling', sold: 420, isNew: true, name: 'Mandheling', origin: 'Sumatra', category: 'Single Origin', roast: 'Dark', price: 15, rating: 4.5, color: '#3c2a1c',
    notes: ['Cedar', 'Tobacco', 'Dark berry'], desc: 'Earthy, full-bodied and low in acidity. A classic for French press lovers.' },
  { id: 'decaf-swiss-water', sold: 380, isNew: true, name: 'Swiss Water Decaf', origin: 'Colombia', category: 'Decaf', roast: 'Medium', price: 14, rating: 4.4, color: '#7d6a58',
    notes: ['Toasted nut', 'Brown sugar', 'Cherry'], desc: 'Chemical-free decaf with all the sweetness and none of the jitters.' },
];

export const priceFor = (product, sizeLabel) => {
  const size = SIZES.find((s) => s.label === sizeLabel) || SIZES[0];
  return Math.round(product.price * size.mult * 100) / 100;
};

export const money = (n) => '$' + n.toFixed(2);

export const BEST_SELLER_MIN = 1000;
