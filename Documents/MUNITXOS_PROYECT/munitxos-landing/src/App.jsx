import React, { useState, useEffect } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { AuthProvider, useAuth } from './context/AuthContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Benefits } from './components/Benefits';
import { HowItWorks } from './components/HowItWorks';
import { MenusShowcase } from './components/MenusShowcase';
import { BookingWidget } from './components/BookingWidget';
import { Philosophy } from './components/Philosophy';
import { Guarantee } from './components/Guarantee';
import { Testimonials } from './components/Testimonials';
import { GourmetShop } from './components/GourmetShop';
import { FinalCTA } from './components/FinalCTA';
import { StickyCTA } from './components/StickyCTA';
import { Footer } from './components/Footer';
import { GourmetCartDrawer } from './components/GourmetCartDrawer';
import { BookingModal } from './components/BookingModal';
import { PromotionsBanner } from './components/public/PromotionsBanner';

// Admin Components
import { AdminLayout } from './components/admin/AdminLayout';
import { AdminLogin } from './components/admin/AdminLogin';

function MainAppContent() {
  const { currentUser } = useAuth();
  const [route, setRoute] = useState(window.location.hash === '#admin' ? 'admin' : 'public');

  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [bookingPrefill, setBookingPrefill] = useState(null);

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#admin') {
        setRoute('admin');
      } else {
        setRoute('public');
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Cart Handlers
  const handleAddToCart = (product) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (id, newQty) => {
    if (newQty <= 0) {
      handleRemoveCartItem(id);
    } else {
      setCartItems(prev => prev.map(item => item.id === id ? { ...item, quantity: newQty } : item));
    }
  };

  const handleRemoveCartItem = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  // Booking Handlers
  const handleOpenBooking = (customData = null) => {
    if (customData) setBookingPrefill(customData);
    setIsBookingOpen(true);
  };

  const handleSelectMenuCategory = (categoryId) => {
    const targetElement = document.getElementById('personalizacion');
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    } else {
      handleOpenBooking();
    }
  };

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  // Render Admin Route
  if (route === 'admin') {
    if (!currentUser) {
      return <AdminLogin />;
    }
    return (
      <AdminLayout 
        onNavigateToPublic={() => {
          window.location.hash = '';
          setRoute('public');
        }} 
      />
    );
  }

  // Render Public Marketing & Smart Booking Site
  return (
    <div className="munitxos-app">
      {/* Navigation Bar */}
      <Navbar 
        onOpenCart={() => setIsCartOpen(true)}
        cartCount={totalCartCount}
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* 1. Hero Section */}
      <Hero onOpenBooking={() => handleOpenBooking()} />

      {/* Flexible Promotions Banner (CMS System) */}
      <PromotionsBanner />

      {/* 2. Beneficios / Why MUNCHOS */}
      <Benefits />

      {/* 3. Cómo funciona el servicio */}
      <HowItWorks onOpenBooking={() => handleOpenBooking()} />

      {/* 4. Menús disponibles */}
      <MenusShowcase onSelectMenuCategory={handleSelectMenuCategory} />

      {/* 5. Personalización (Smart Booking Widget & Capacity Engine) */}
      <BookingWidget onSubmitBooking={(data) => handleOpenBooking(data)} />

      {/* 6. Filosofía "Come sano" */}
      <Philosophy />

      {/* 7. Garantía / Confianza */}
      <Guarantee />

      {/* 8. Testimonios */}
      <Testimonials />

      {/* 9. Productos gourmet */}
      <GourmetShop 
        onAddToCart={handleAddToCart}
        onOpenCart={() => setIsCartOpen(true)}
      />

      {/* 10. Cierre / CTA final */}
      <FinalCTA onOpenBooking={() => handleOpenBooking()} />

      {/* 11. Footer */}
      <Footer />

      {/* Persistent Sticky Action Bar */}
      <StickyCTA onOpenBooking={() => handleOpenBooking()} />

      {/* Slide-over Gourmet Cart Drawer */}
      <GourmetCartDrawer 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveCartItem}
      />

      {/* Reservation / Quote Request Modal */}
      <BookingModal 
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialData={bookingPrefill}
      />
    </div>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <LanguageProvider>
        <MainAppContent />
      </LanguageProvider>
    </AuthProvider>
  );
}
