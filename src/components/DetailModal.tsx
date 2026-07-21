import React from 'react';
import { useCart } from '../context/CartContext';
import { X, Plus, Minus, ShoppingBag, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function DetailModal() {
  const {
    cart,
    addToCart,
    updateQuantity,
    selectedDetailItem,
    setSelectedDetailItem,
    setIsCartOpen,
  } = useCart();

  if (!selectedDetailItem) return null;

  const cartItem = cart.find((i) => i.item.id === selectedDetailItem.id);
  const quantity = cartItem ? cartItem.quantity : 0;

  // Spicy rendering helper
  const renderSpiciness = (level?: number) => {
    if (level === undefined || level === 0) return 'Mild 🍃';
    let flames = '';
    for (let i = 0; i < level; i++) {
      flames += '🔥';
    }
    const label = level === 1 ? 'Medium Spiced' : level === 2 ? 'Traditional Hot' : 'Tez Masala!';
    return `${flames} (${label})`;
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-brand-charcoal/80 z-50 flex items-center justify-center p-4 md:p-6 backdrop-blur-sm"
        onClick={() => setSelectedDetailItem(null)}
      >
        <motion.div
          initial={{ scale: 0.95, y: 15 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.95, y: 15 }}
          transition={{ type: 'spring', damping: 25 }}
          className="bg-brand-cream max-w-2xl w-full rounded-3xl overflow-hidden border border-brand-maroon/10 shadow-2xl relative flex flex-col md:flex-row max-h-[90vh] md:max-h-none overflow-y-auto md:overflow-visible"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <button
            onClick={() => setSelectedDetailItem(null)}
            className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-brand-charcoal/60 hover:bg-brand-maroon text-white flex items-center justify-center transition-colors border border-white/10"
            aria-label="Close"
          >
            <X size={18} />
          </button>

          {/* Left: Beautiful Image Showcase */}
          <div className="md:w-1/2 aspect-[4/3] md:aspect-auto md:h-auto min-h-[220px] relative bg-brand-cream-dark">
            <img
              src={selectedDetailItem.image}
              alt={selectedDetailItem.name}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/50 to-transparent"></div>

            {/* Float Badges on Image */}
            <div className="absolute top-4 left-4 flex flex-col gap-1.5 items-start">
              {selectedDetailItem.isBestseller && (
                <span className="bg-brand-maroon text-brand-cream text-[9px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full shadow-md border border-brand-gold/20 flex items-center gap-1">
                  <Sparkles size={10} />
                  <span>Bestseller</span>
                </span>
              )}
              {selectedDetailItem.isMustTry && (
                <span className="bg-brand-terracotta text-brand-cream text-[9px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full shadow-md border border-brand-gold/20 flex items-center gap-1">
                  <Sparkles size={10} />
                  <span>Must Try</span>
                </span>
              )}
              {selectedDetailItem.isPopular && !selectedDetailItem.isBestseller && !selectedDetailItem.isMustTry && (
                <span className="bg-brand-gold text-brand-charcoal text-[9px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full shadow-md border border-white/10 flex items-center gap-1">
                  <Sparkles size={10} />
                  <span>Popular</span>
                </span>
              )}
            </div>
          </div>

          {/* Right: Detailed Content and Actions */}
          <div className="p-6 md:p-8 md:w-1/2 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              {/* Category */}
              <span className="text-[10px] uppercase font-bold tracking-widest text-brand-terracotta bg-brand-terracotta/5 px-2.5 py-1 rounded-md inline-block">
                {selectedDetailItem.category} specialties
              </span>

              {/* Title */}
              <h2 className="font-serif font-black text-2xl text-brand-maroon leading-tight">
                {selectedDetailItem.name}
              </h2>

              {/* Description */}
              <p className="text-xs sm:text-sm text-brand-charcoal/80 leading-relaxed font-medium">
                {selectedDetailItem.description}
              </p>

              {/* Dish Meta Grid */}
              <div className="grid grid-cols-2 gap-3.5 pt-2">
                <div className="bg-white p-3 rounded-xl border border-brand-maroon/5">
                  <p className="text-[10px] text-brand-charcoal/40 font-bold uppercase">Spiciness Level</p>
                  <p className="text-xs font-bold text-brand-maroon mt-0.5">
                    {renderSpiciness(selectedDetailItem.spiciness)}
                  </p>
                </div>
                <div className="bg-white p-3 rounded-xl border border-brand-maroon/5">
                  <p className="text-[10px] text-brand-charcoal/40 font-bold uppercase">Portion Size</p>
                  <p className="text-xs font-bold text-brand-maroon mt-0.5">
                    {selectedDetailItem.serves || 'Serves 1-2'} 👤
                  </p>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {selectedDetailItem.tags?.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-semibold text-brand-charcoal/60 bg-brand-cream-dark border border-brand-maroon/5 px-2 py-0.5 rounded-md"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-5 border-t border-brand-maroon/10 flex items-center justify-between gap-4">
              <div className="flex flex-col">
                <span className="text-[10px] uppercase font-bold text-brand-charcoal/50 leading-none">Price</span>
                <span className="font-serif font-black text-xl text-brand-maroon mt-0.5">
                  {selectedDetailItem.price}
                </span>
              </div>

              {/* Quantity Action buttons */}
              {quantity === 0 ? (
                <button
                  onClick={() => addToCart(selectedDetailItem)}
                  className="bg-brand-maroon hover:bg-brand-maroon/90 text-brand-cream font-bold px-5 py-3 rounded-xl shadow-md transition-all text-xs flex items-center gap-1.5 border border-brand-gold/15"
                >
                  <Plus size={14} />
                  <span>Add To Platter</span>
                </button>
              ) : (
                <div className="flex items-center gap-2 bg-brand-cream-dark border border-brand-maroon/10 rounded-xl p-1.5">
                  <button
                    onClick={() => updateQuantity(selectedDetailItem.id, quantity - 1)}
                    className="w-8 h-8 rounded-lg bg-white text-brand-maroon hover:bg-brand-maroon/5 flex items-center justify-center transition-colors shadow-sm"
                    aria-label="Decrease quantity"
                  >
                    <Minus size={14} />
                  </button>
                  <span className="w-8 text-center text-xs font-bold text-brand-maroon">
                    {quantity}
                  </span>
                  <button
                    onClick={() => updateQuantity(selectedDetailItem.id, quantity + 1)}
                    className="w-8 h-8 rounded-lg bg-white text-brand-maroon hover:bg-brand-maroon/5 flex items-center justify-center transition-colors shadow-sm"
                    aria-label="Increase quantity"
                  >
                    <Plus size={14} />
                  </button>
                </div>
              )}
            </div>

            {/* Quick view of the cart hint */}
            {quantity > 0 && (
              <p className="text-[10px] text-brand-terracotta text-right font-bold uppercase tracking-wider leading-none">
                Added!{' '}
                <button
                  onClick={() => {
                    setSelectedDetailItem(null);
                    setIsCartOpen(true);
                  }}
                  className="underline hover:text-brand-maroon transition-colors ml-1"
                >
                  Open Platter & Checkout
                </button>
              </p>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
