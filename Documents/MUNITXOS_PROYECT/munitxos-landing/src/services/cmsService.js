/**
 * MUNCHOS CMS Service (Gourmet Products & Promotions Banner)
 */

const STORAGE_KEY_PRODUCTS = 'munchos_cms_products_v1';
const STORAGE_KEY_PROMOTIONS = 'munchos_cms_promotions_v1';

// Initial Gourmet Products
const INITIAL_PRODUCTS = [
  {
    id: 'txakoli-premium',
    name: 'Txakoli Getariako Reserva MUNCHOS',
    category: 'Bodega Vasca',
    price: 22.00,
    image: '/images/IMG_1240.jpeg',
    desc: 'Vino blanco vasco fresco, con ligera aguja natural y notas de manzana ácida. Maridaje perfecto con sushi.',
    active: true
  },
  {
    id: 'aove-piparras',
    name: 'Piparras de Ibarra en Vinagre de Manzana',
    category: 'Conservas Artesanales',
    price: 14.50,
    image: '/images/IMG_1241.jpeg',
    desc: 'Piparras tiernas seleccionadas una a una, finas y sin picor agresivo. Elaboración tradicional.',
    active: true
  },
  {
    id: 'anchoas-cantabrico',
    name: 'Anchoas del Cantábrico en AOVE (Costera)',
    category: 'Salazones Premium',
    price: 18.90,
    image: '/images/IMG_1242.jpeg',
    desc: 'Filetes limpios a mano, madurados 12 meses en salazón y envasados en virgen extra.',
    active: true
  },
  {
    id: 'queso-idiazabal',
    name: 'Queso Idiazábal Ahumado Artesano (Cuña 350g)',
    category: 'Quesos de Autor',
    price: 16.00,
    image: '/images/IMG_2093.jpeg',
    desc: 'Elaborado con leche cruda de oveja Latxa y ahumado con madera de haya vasca.',
    active: true
  }
];

// Initial Flexible Promotions
const INITIAL_PROMOTIONS = [
  {
    id: 'promo_01',
    headline: 'Especial Paellas Vascas a Fuego Vivo los Fines de Semana',
    bodyText: 'Añade a tu catering una espectacular paella de marisco cocinada en directo en tu jardín o terraza en Múnich.',
    image: '/images/high-angle-man-putting-arugula-baked-pizza-dough-with-smoked-salmon-slices.jpg',
    ctaText: 'Consultar Fechas de Paella',
    ctaLink: '#personalizacion',
    active: true,
    startDate: '2026-08-01',
    endDate: '2026-09-30'
  },
  {
    id: 'promo_02',
    headline: 'Maridaje Gratuito de Txakoli en Reservas > 30 personas',
    bodyText: 'Este mes, todas las reservas confirmadas de más de 30 invitados incluyen degustación de nuestro Txakoli Reserva.',
    image: '/images/IMG_1240.jpeg',
    ctaText: 'Aprovechar Promoción',
    ctaLink: '#personalizacion',
    active: true,
    startDate: '2026-08-01',
    endDate: '2026-08-31'
  }
];

// Products CRUD
export const getStoredProducts = () => {
  try {
    const data = localStorage.getItem(STORAGE_KEY_PRODUCTS);
    if (data) return JSON.parse(data);
  } catch (e) {}
  localStorage.setItem(STORAGE_KEY_PRODUCTS, JSON.stringify(INITIAL_PRODUCTS));
  return INITIAL_PRODUCTS;
};

export const saveProducts = (products) => {
  try {
    localStorage.setItem(STORAGE_KEY_PRODUCTS, JSON.stringify(products));
  } catch (e) {}
};

// Promotions CRUD
export const getStoredPromotions = () => {
  try {
    const data = localStorage.getItem(STORAGE_KEY_PROMOTIONS);
    if (data) return JSON.parse(data);
  } catch (e) {}
  localStorage.setItem(STORAGE_KEY_PROMOTIONS, JSON.stringify(INITIAL_PROMOTIONS));
  return INITIAL_PROMOTIONS;
};

export const savePromotions = (promotions) => {
  try {
    localStorage.setItem(STORAGE_KEY_PROMOTIONS, JSON.stringify(promotions));
  } catch (e) {}
};

export const getActivePromotions = () => {
  const allPromos = getStoredPromotions();
  const todayStr = new Date().toISOString().split('T')[0];

  return allPromos.filter(p => {
    if (!p.active) return false;
    if (p.startDate && p.startDate > todayStr) return false;
    if (p.endDate && p.endDate < todayStr) return false;
    return true;
  });
};
