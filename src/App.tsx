import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import Gallery from './components/Gallery';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import WhatsAppButton from './components/WhatsAppButton';
import Footer from './components/Footer';
import { CartProvider } from './context/CartContext';
import CartDrawer from './components/CartDrawer';
import DetailModal from './components/DetailModal';

export default function App() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-brand-cream text-brand-charcoal selection:bg-brand-maroon selection:text-white flex flex-col font-sans overflow-x-hidden pt-[112px] md:pt-[124px]">
        {/* Navigation Bar & Notification Ribbon */}
        <Navbar />

        {/* Main Single Page Sections */}
        <main className="flex-1">
          <Hero />
          <About />
          <Menu />
          <Gallery />
          <Reviews />
          <Contact />
        </main>

        {/* Floating Sticky Actions */}
        <WhatsAppButton />

        {/* Dynamic Interactive Overlays */}
        <CartDrawer />
        <DetailModal />

        {/* Site Footer */}
        <Footer />
      </div>
    </CartProvider>
  );
}
