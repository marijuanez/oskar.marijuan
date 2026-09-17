/**
 * MUNCHOS CMS Service (Gourmet Products & Promotions Banner)
 */

const STORAGE_KEY_PRODUCTS = 'munchos_cms_products_v1';
const STORAGE_KEY_PROMOTIONS = 'munchos_cms_promotions_v1';
const STORAGE_KEY_HERO_SLIDES = 'munchos_cms_hero_slides_v1';

// Initial Hero Slides
const INITIAL_HERO_SLIDES = [
  {
    id: 'pintxos',
    title: '01 Pintxos Gourmet',
    subtitle: 'Elaboración y artesanía vasca',
    video: 'https://assets.mixkit.co/videos/preview/mixkit-chef-plating-a-gourmet-dish-41484-large.mp4',
    poster: '/images/IMG_1227.jpeg',
    active: true
  },
  {
    id: 'livecooking',
    title: '02 Live Cooking',
    subtitle: 'Paellas in situ & show cooking',
    video: 'https://assets.mixkit.co/videos/preview/mixkit-cooking-a-dish-in-a-pan-over-a-fire-41481-large.mp4',
    poster: '/images/high-angle-man-putting-arugula-baked-pizza-dough-with-smoked-salmon-slices.jpg',
    active: true
  },
  {
    id: 'sushi',
    title: '03 Sushi & Premium',
    subtitle: 'Corte Nikkei y emplatado de autor',
    video: 'https://assets.mixkit.co/videos/preview/mixkit-chef-preparing-sushi-rolls-in-a-kitchen-42542-large.mp4',
    poster: '/images/chef-arranging-sushi-front-view.jpg',
    active: true
  }
];

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

export const updateProduct = (updatedProduct) => {
  const products = getStoredProducts();
  const index = products.findIndex(p => p.id === updatedProduct.id);
  if (index !== -1) {
    products[index] = { ...products[index], ...updatedProduct };
  } else {
    products.unshift(updatedProduct);
  }
  saveProducts(products);
  return products;
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

export const updatePromotion = (updatedPromotion) => {
  const promotions = getStoredPromotions();
  const index = promotions.findIndex(p => p.id === updatedPromotion.id);
  if (index !== -1) {
    promotions[index] = { ...promotions[index], ...updatedPromotion };
  } else {
    promotions.unshift(updatedPromotion);
  }
  savePromotions(promotions);
  return promotions;
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

// Hero Slides CRUD
export const getStoredHeroSlides = () => {
  try {
    const data = localStorage.getItem(STORAGE_KEY_HERO_SLIDES);
    if (data) return JSON.parse(data);
  } catch (e) {}
  localStorage.setItem(STORAGE_KEY_HERO_SLIDES, JSON.stringify(INITIAL_HERO_SLIDES));
  return INITIAL_HERO_SLIDES;
};

export const saveHeroSlides = (slides) => {
  try {
    localStorage.setItem(STORAGE_KEY_HERO_SLIDES, JSON.stringify(slides));
  } catch (e) {}
};

export const updateHeroSlide = (updatedSlide) => {
  const slides = getStoredHeroSlides();
  const index = slides.findIndex(s => s.id === updatedSlide.id);
  if (index !== -1) {
    slides[index] = { ...slides[index], ...updatedSlide };
  } else {
    slides.push(updatedSlide);
  }
  saveHeroSlides(slides);
  return slides;
};

export const getActiveHeroSlides = () => {
  const slides = getStoredHeroSlides();
  const active = slides.filter(s => s.active !== false);
  return active.length > 0 ? active : INITIAL_HERO_SLIDES;
};

/**
 * Client-Side Image Optimizer
 * Resizes images to max dimensions and compresses to JPEG to prevent giant Base64 strings from overflowing localStorage or UI layouts.
 */
export const optimizeImageFile = (file, maxWidth = 800, maxHeight = 800, quality = 0.78) => {
  return new Promise((resolve, reject) => {
    if (!file || !file.type.startsWith('image/')) {
      reject(new Error('El archivo no es una imagen válida.'));
      return;
    }
    const reader = new FileReader();
    reader.onerror = reject;
    reader.onload = (e) => {
      const img = new Image();
      img.onerror = reject;
      img.onload = () => {
        let width = img.width;
        let height = img.height;

        if (width > maxWidth || height > maxHeight) {
          if (width / height > maxWidth / maxHeight) {
            height = Math.round((height * maxWidth) / width);
            width = maxWidth;
          } else {
            width = Math.round((width * maxHeight) / height);
            height = maxHeight;
          }
        }

        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, width, height);

        const dataUrl = canvas.toDataURL('image/jpeg', quality);
        resolve(dataUrl);
      };
      img.src = e.target.result;
    };
    reader.readAsDataURL(file);
  });
};
