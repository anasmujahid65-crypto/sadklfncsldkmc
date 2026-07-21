import { useState, useEffect } from 'react';
import { Menu, X, Phone, ShoppingBag, Star, ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { totalItemsCount, setIsCartOpen } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Specialties', href: '#menu' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Locked Fixed Container at the very top */}
      <div className="fixed top-0 left-0 right-0 z-50 flex flex-col shadow-sm transition-all duration-300">
        
        {/* Top Notification Banner */}
        <div id="top-banner" className="bg-brand-maroon text-brand-cream text-xs py-2 px-4 text-center font-medium tracking-wide relative">
          <span className="inline-flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-ping"></span>
            🔥 Open Daily until 11:00 PM • Fast Dine-In, Drive-Through & Fast WhatsApp Delivery
          </span>
        </div>

        {/* Main Header */}
        <header
          id="main-header"
          className={`transition-all duration-300 ${
            isScrolled
              ? 'bg-brand-cream-dark/95 backdrop-blur-md shadow-md py-3 border-b border-brand-maroon/10'
              : 'bg-brand-cream py-4 border-b border-brand-maroon/5'
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between">
              
              {/* Logo and Brand */}
              <a href="#home" className="flex items-center gap-3 group">
                <div className="w-10 h-10 rounded-full bg-brand-maroon flex items-center justify-center shadow-md border border-brand-gold/30">
                  <span className="font-calligraphy text-xl text-brand-cream font-bold leading-none">ق</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-serif font-extrabold text-2xl tracking-tight text-brand-maroon leading-none">
                    Qorsia Kitchen
                  </span>
                  <span className="font-calligraphy text-[10px] text-brand-gold tracking-widest uppercase font-semibold mt-0.5">
                    Authentic Desi Cuisine
                  </span>
                </div>
              </a>

              {/* Desktop Navigation */}
              <nav id="desktop-nav" className="hidden lg:flex items-center gap-8">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="font-sans font-medium text-brand-charcoal/80 hover:text-brand-maroon transition-colors duration-200 text-sm relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-brand-maroon hover:after:w-full after:transition-all after:duration-300"
                  >
                    {link.name}
                  </a>
                ))}
              </nav>

              {/* CTAs Desktop */}
              <div className="hidden md:flex items-center gap-3.5">
                <a
                  href="tel:+923070441794"
                  className="inline-flex items-center gap-2 text-brand-maroon font-semibold hover:text-brand-terracotta transition-colors duration-200 text-sm px-3.5 py-2 rounded-xl border border-brand-maroon/20 hover:border-brand-maroon/40 bg-white/50"
                >
                  <Phone size={15} />
                  <span>+92 307 0441794</span>
                </a>

                {/* Hungry Platter Cart Trigger */}
                <button
                  onClick={() => setIsCartOpen(true)}
                  className="inline-flex items-center gap-2 bg-brand-maroon hover:bg-brand-maroon/90 text-brand-cream font-bold px-4.5 py-2.5 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 text-sm border border-brand-gold/20 relative group active:scale-95"
                >
                  <ShoppingCart size={16} />
                  <span>Your Hungry Platter</span>
                  
                  {/* Dynamic pulsing badge */}
                  <span className={`inline-flex items-center justify-center bg-brand-gold text-brand-charcoal text-[11px] font-black rounded-full h-5 min-w-[20px] px-1 shadow-sm transition-all ${
                    totalItemsCount > 0 ? 'scale-100 animate-[pulse_2s_infinite]' : 'scale-90 opacity-60'
                  }`}>
                    {totalItemsCount}
                  </span>
                </button>
              </div>

              {/* Mobile Right: Cart & Menu Side-by-Side */}
              <div className="flex md:hidden items-center gap-2.5">
                {/* Mobile Mini Cart Trigger */}
                <button
                  onClick={() => setIsCartOpen(true)}
                  className="p-2.5 rounded-xl bg-brand-maroon/5 text-brand-maroon border border-brand-maroon/10 relative"
                  aria-label="Open Platter"
                >
                  <ShoppingCart size={20} />
                  {totalItemsCount > 0 && (
                    <span className="absolute -top-1.5 -right-1.5 bg-brand-maroon text-brand-cream text-[9px] font-black rounded-full h-5 w-5 flex items-center justify-center border-2 border-brand-cream">
                      {totalItemsCount}
                    </span>
                  )}
                </button>

                {/* Mobile Menu Toggle Button */}
                <button
                  id="mobile-menu-btn"
                  onClick={() => setIsOpen(!isOpen)}
                  className="p-2 rounded-xl text-brand-charcoal hover:text-brand-maroon focus:outline-none"
                  aria-label="Toggle Menu"
                >
                  {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Flyout Menu */}
          {isOpen && (
            <div className="md:hidden absolute top-full left-0 w-full bg-brand-cream-dark border-b border-brand-maroon/10 shadow-xl transition-all duration-300 ease-in-out">
              <div className="px-4 pt-3 pb-6 space-y-2">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block px-3 py-2.5 rounded-md text-base font-semibold text-brand-charcoal hover:bg-brand-maroon hover:text-brand-cream transition-all"
                  >
                    {link.name}
                  </a>
                ))}
                <div className="pt-4 flex flex-col gap-3">
                  <a
                    href="tel:+923070441794"
                    className="flex items-center justify-center gap-2.5 w-full bg-white text-brand-maroon border border-brand-maroon/20 py-3 rounded-lg font-bold shadow-sm"
                  >
                    <Phone size={18} />
                    <span>Call +92 307 0441794</span>
                  </a>
                  <button
                    onClick={() => {
                      setIsOpen(false);
                      setIsCartOpen(true);
                    }}
                    className="flex items-center justify-center gap-2.5 w-full bg-brand-maroon text-brand-cream py-3 rounded-lg font-bold shadow-md"
                  >
                    <ShoppingCart size={18} />
                    <span>Open Hungry Platter ({totalItemsCount})</span>
                  </button>
                </div>
              </div>
            </div>
          )}
        </header>
      </div>

      {/* Sticky Quick-Access Mobile Action Bar (at bottom) */}
      <div id="mobile-sticky-actions" className="md:hidden fixed bottom-0 left-0 right-0 bg-brand-cream-dark border-t border-brand-maroon/15 shadow-[0_-4px_12px_rgba(0,0,0,0.1)] z-40 py-2.5 px-4 flex gap-3">
        <a
          href="tel:+923070441794"
          className="flex-1 flex items-center justify-center gap-2 bg-white text-brand-maroon border border-brand-maroon/30 py-3 rounded-xl font-bold text-xs shadow-sm active:scale-95 transition-transform"
        >
          <Phone size={15} />
          <span>Call Now</span>
        </a>
        
        {/* View Platter triggers Cart Drawer */}
        <button
          onClick={() => setIsCartOpen(true)}
          className="flex-1 flex items-center justify-center gap-2 bg-brand-maroon text-brand-cream py-3 rounded-xl font-bold text-xs shadow-md active:scale-95 transition-transform border border-brand-gold/20 relative"
        >
          <ShoppingCart size={15} />
          <span>View Platter</span>
          <span className="bg-brand-gold text-brand-charcoal text-[9px] font-black rounded-full h-4.5 min-w-[18px] px-1 flex items-center justify-center ml-0.5 shadow-sm">
            {totalItemsCount}
          </span>
        </button>
      </div>
    </>
  );
}
