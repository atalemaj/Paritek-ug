const products = [
  { name: 'PS4 with two controllers + 10 games', price: 'USh 850,000', condition: 'Used listing', image: 'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?auto=format&fit=crop&w=900&q=80', note: 'Listing example; confirm condition and included items.' },
  { name: '2.4G wireless retro game stick controller', price: 'USh 150,000', condition: 'Brand new listing', image: 'https://images.unsplash.com/photo-1592840496694-26d035b52b48?auto=format&fit=crop&w=900&q=80', note: 'Listing example; confirm current stock.' },
  { name: 'Xbox One Model 1540', price: 'USh 550,000', condition: 'Used listing', image: 'https://images.unsplash.com/photo-1621259182978-fbf93132d53d?auto=format&fit=crop&w=900&q=80', note: 'Listing example; confirm current stock and condition.' },
  { name: 'Digital game listing for PlayStation 5', price: 'USh 150,000', condition: 'Brand new listing', image: 'https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?auto=format&fit=crop&w=900&q=80', note: 'Listing example; confirm title and availability.' }
];
const grid = document.getElementById('product-grid');
const phone = '+256706417889';
grid.innerHTML = products.map((p, i) => `<article class="product-card"><div class="product-image"><img src="${p.image}" alt="Illustrative gaming product category image"><span class="product-index">0${i + 1}</span></div><div class="product-body"><p class="product-condition">${p.condition}</p><h3>${p.name}</h3><div class="product-meta"><strong>${p.price}</strong><a href="tel:${phone}">Contact to buy ↗</a></div><p class="product-note">${p.note}</p></div></article>`).join('');
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');
toggle.addEventListener('click', () => { const open = nav.classList.toggle('open'); toggle.setAttribute('aria-expanded', open); toggle.textContent = open ? '×' : '☰'; });
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => { nav.classList.remove('open'); toggle.setAttribute('aria-expanded', 'false'); toggle.textContent = '☰'; }));
document.getElementById('year').textContent = new Date().getFullYear();
