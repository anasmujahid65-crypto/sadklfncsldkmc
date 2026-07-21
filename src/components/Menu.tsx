import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MENU_ITEMS } from '../data';
import { MenuItem } from '../types';
import { useCart } from '../context/CartContext';
import { Plus, Minus, Star, Sparkles, AlertCircle, Eye } from 'lucide-react';

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState<'all' | 'biryani' | 'pulao' | 'handi' | 'karahi'>('all');
  const { cart, addToCart, updateQuantity, setSelectedDetailItem } = useCart();

  const categories = [
    { id: 'all', name: 'Show All' },
    { id: 'biryani', name: 'Legendary Biryani' },
    { id: 'pulao', name: 'Deghi Pulao' },
    { id: 'handi', name: 'Clay-Pot Handi' },
    { id: 'karahi', name: 'Sizzling Karahi' },
  ] as const;

  const filteredItems = activeCategory === 'all'
    ? MENU_ITEMS
    : MENU_ITEMS.filter((item) => item.category === activeCategory);

  // Render spicy levels helper
  const renderSpicinessFlames = (level?: number) => {
    if (level === undefined || level === 0) return null;
    let flames = '';
    for (let i = 0; i < level; i++) {
      flames += '🔥';
    }
    return (
      <span className="text-xs font-bold text-brand-maroon inline-flex items-center" title={`Spiciness: ${level}/3`}>
        {flames}
      </span>
    );
  };

  return (
    <section id="menu" className="py-20 lg:py-28 bg-brand-cream-dark/45 text-brand-charcoal scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12 sm:mb-16">
          <span className="text-xs font-extrabold tracking-widest text-brand-terracotta uppercase block">
            Our Specialties & Favorites
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-black text-brand-maroon tracking-tight">
            Taste the Magic of Bold Spices
          </h2>
          <p className="text-sm text-brand-charcoal/70 font-medium leading-relaxed">
            Every dish we prepare at Qorsia Kitchen is fresh, traditional, and crafted from high-quality cuts and home-ground spices. Tap any card to view full details!
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-10 sm:mb-14">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold tracking-wide transition-all duration-300 shadow-sm cursor-pointer ${
                activeCategory === category.id
                  ? 'bg-brand-maroon text-brand-cream border border-brand-maroon shadow-md scale-105'
                  : 'bg-white text-brand-charcoal/75 hover:bg-brand-maroon/5 border border-brand-maroon/5'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Menu Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => {
              const cartItem = cart.find((i) => i.item.id === item.id);
              const quantity = cartItem ? cartItem.quantity : 0;

              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  key={item.id}
                  className="bg-white rounded-2xl overflow-hidden border border-brand-maroon/5 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col group relative"
                >
                  {/* Interactive body wrapper for full detail modal trigger */}
                  <div 
                    onClick={() => setSelectedDetailItem(item)}
                    className="cursor-pointer flex-1 flex flex-col"
                  >
                    {/* Bestseller, Must Try, or Popular Badges */}
                    <div className="absolute top-3 left-3 flex flex-col gap-1 z-10">
                      {item.isBestseller && (
                        <div className="bg-brand-maroon text-brand-cream text-[9px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full shadow-md flex items-center gap-1 border border-brand-gold/25">
                          <Sparkles size={10} />
                          <span>Bestseller</span>
                        </div>
                      )}
                      {item.isMustTry && (
                        <div className="bg-brand-terracotta text-brand-cream text-[9px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full shadow-md flex items-center gap-1 border border-brand-gold/25">
                          <Sparkles size={10} />
                          <span>Must Try</span>
                        </div>
                      )}
                      {item.isPopular && !item.isBestseller && !item.isMustTry && (
                        <div className="bg-brand-gold text-brand-charcoal text-[9px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full shadow-md flex items-center gap-1 border border-white/10">
                          <Sparkles size={10} />
                          <span>Popular choice</span>
                        </div>
                      )}
                    </div>

                    {/* Serves Badge on right */}
                    <div className="absolute top-3 right-3 z-10">
                      <span className="bg-brand-charcoal/70 text-brand-cream text-[9px] font-bold uppercase tracking-wider px-2 py-1 rounded-md shadow-sm backdrop-blur-sm">
                        👤 {item.serves || 'Serves 1-2'}
                      </span>
                    </div>

                    {/* Card Image */}
                    <div className="aspect-[4/3] w-full overflow-hidden relative bg-brand-cream-dark">
                      <img
                        src={item.image}
                        alt={`${item.name} specialties dish`}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                      {/* Hover Overlay Visual Hint */}
                      <div className="absolute inset-0 bg-brand-maroon/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="bg-brand-cream text-brand-maroon font-bold text-xs px-3.5 py-2 rounded-xl shadow-lg flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                          <Eye size={13} />
                          <span>View Detail</span>
                        </div>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent"></div>
                    </div>

                    {/* Card Content */}
                    <div className="p-5 flex-1 flex flex-col justify-between">
                      <div>
                        {/* Tags & Spiciness indicators */}
                        <div className="flex items-center justify-between gap-2 mb-2.5">
                          <div className="flex flex-wrap gap-1.5">
                            {item.tags?.slice(0, 2).map((tag) => (
                              <span
                                key={tag}
                                className="text-[10px] font-bold text-brand-maroon bg-brand-maroon/5 px-2 py-0.5 rounded-md"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                          {renderSpicinessFlames(item.spiciness)}
                        </div>

                        {/* Dish Title */}
                        <h3 className="font-serif font-black text-lg text-brand-maroon leading-snug group-hover:text-brand-terracotta transition-colors">
                          {item.name}
                        </h3>

                        {/* Description */}
                        <p className="text-xs text-brand-charcoal/70 leading-relaxed font-medium mt-1.5 mb-4 line-clamp-2">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Price and Order buttons (Always non-clickable card context to allow buttons to work) */}
                  <div className="px-5 pb-5 pt-3 border-t border-brand-maroon/5 bg-brand-cream/10">
                    <div className="flex items-center justify-between">
                      <div className="flex flex-col">
                        <span className="text-[10px] uppercase font-bold text-brand-charcoal/50 leading-none">Price</span>
                        <span className="font-serif font-black text-lg text-brand-maroon mt-0.5">{item.price}</span>
                      </div>
                      
                      {/* Dynamic Add / +/- Quantity Button Controls */}
                      <div>
                        {quantity === 0 ? (
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              addToCart(item);
                            }}
                            className="bg-brand-maroon hover:bg-brand-maroon/95 text-brand-cream text-xs font-extrabold px-4.5 py-2.5 rounded-xl shadow-md hover:shadow-lg transition-all flex items-center gap-1 cursor-pointer hover:scale-[1.03] active:scale-95 border border-brand-gold/15"
                          >
                            <Plus size={13} className="stroke-[3]" />
                            <span>Add</span>
                          </button>
                        ) : (
                          <div className="flex items-center gap-1.5 bg-brand-cream-dark border border-brand-maroon/10 rounded-xl p-1 shadow-inner">
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                updateQuantity(item.id, quantity - 1);
                              }}
                              className="w-7 h-7 rounded-lg bg-white text-brand-maroon hover:bg-brand-maroon/5 flex items-center justify-center transition-all cursor-pointer shadow-sm active:scale-90"
                              aria-label="Decrease quantity"
                            >
                              <Minus size={13} />
                            </button>
                            <span className="w-5 text-center text-xs font-black text-brand-maroon">
                              {quantity}
                            </span>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                updateQuantity(item.id, quantity + 1);
                              }}
                              className="w-7 h-7 rounded-lg bg-white text-brand-maroon hover:bg-brand-maroon/5 flex items-center justify-center transition-all cursor-pointer shadow-sm active:scale-90"
                              aria-label="Increase quantity"
                            >
                              <Plus size={13} />
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Full Menu note */}
        <div className="mt-12 sm:mt-16 p-4 sm:p-5 bg-white border border-brand-maroon/5 rounded-2xl text-center max-w-2xl mx-auto shadow-sm flex flex-col sm:flex-row items-center justify-center gap-3">
          <AlertCircle className="text-brand-terracotta shrink-0" size={20} />
          <p className="text-xs sm:text-sm font-medium text-brand-charcoal/80 leading-relaxed text-left">
            <strong>Looking for our full catalog?</strong> We serve a wide array of options including family platters, naan varieties, raita, and fresh salads. The full menu is available on request. Speak with us on WhatsApp!
          </p>
        </div>

      </div>
    </section>
  );
}
