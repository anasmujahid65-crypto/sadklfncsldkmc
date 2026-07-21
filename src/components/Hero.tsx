import { motion } from 'motion/react';
import { ArrowRight, ShoppingBag, UtensilsCrossed, Star, Phone } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-brand-charcoal text-brand-cream">
      {/* Background Image with dimming gradient overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=1200&q=80" // Mutton Biryani
          alt="Aromatic Pakistani Mutton Biryani Feast"
          className="w-full h-full object-cover object-center scale-105 animate-[pulse_8s_infinite_alternate]"
          referrerPolicy="no-referrer"
        />
        {/* Multilayer gradient for extreme readability of content */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-charcoal via-brand-charcoal/85 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal via-transparent to-brand-charcoal/30"></div>
        <div className="absolute inset-0 bg-brand-maroon/20 mix-blend-multiply"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Copy */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            
            {/* Elegant Sub-badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-maroon/80 border border-brand-gold/30 backdrop-blur-sm text-xs font-semibold text-brand-cream tracking-wide uppercase"
            >
              <span className="w-2 h-2 rounded-full bg-brand-gold"></span>
              Traditional Karachi Cantonment Flavor
            </motion.div>

            {/* Business Title & Calligraphy tag */}
            <div className="space-y-2">
              <motion.h2
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-calligraphy text-brand-gold text-lg md:text-xl font-medium tracking-widest uppercase"
              >
                Qorsia Kitchen • قورسیہ کچن
              </motion.h2>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="font-serif text-4xl sm:text-5xl md:text-6xl font-black leading-[1.1] tracking-tight"
              >
                Karachi's Finest — Where{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold via-brand-terracotta to-brand-gold">
                  Biryani, Handi, Karahi & Pulao
                </span>{' '}
                Meet Perfection.
              </motion.h1>
            </div>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="font-sans text-base sm:text-lg text-brand-cream/85 max-w-xl font-medium leading-relaxed"
            >
              Savor the authentic taste of slow-cooked heritage. Indulge in Karachi's legendary recipes made with premium, fresh local ingredients, bold custom spices, and served hot with quick-service perfection.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto pt-4"
            >
              <a
                href="https://www.foodpanda.pk"
                target="_blank"
                referrerPolicy="no-referrer"
                className="inline-flex items-center justify-center gap-2 bg-brand-maroon hover:bg-brand-maroon/90 text-brand-cream font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-brand-maroon/30 hover:shadow-xl hover:translate-y-[-2px] transition-all duration-200 border border-brand-gold/25"
              >
                <ShoppingBag size={18} />
                <span>Order on Foodpanda</span>
                <ArrowRight size={16} />
              </a>
              <a
                href="#menu"
                className="inline-flex items-center justify-center gap-2 bg-brand-cream-dark/10 hover:bg-brand-cream-dark/20 text-brand-cream hover:text-white border border-brand-cream/25 hover:border-brand-cream/60 font-bold px-8 py-4 rounded-xl backdrop-blur-sm hover:translate-y-[-2px] transition-all duration-200"
              >
                <UtensilsCrossed size={18} />
                <span>View specialties Menu</span>
              </a>
            </motion.div>

            {/* Small Quick-Facts Bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="grid grid-cols-3 gap-6 pt-6 border-t border-brand-cream/10 w-full text-center sm:text-left"
            >
              <div>
                <div className="font-serif text-2xl font-bold text-brand-gold">4.9 ★</div>
                <div className="text-[10px] sm:text-xs text-brand-cream/60 uppercase tracking-widest font-bold">Google Rating</div>
              </div>
              <div>
                <div className="font-serif text-2xl font-bold text-brand-gold">Daily</div>
                <div className="text-[10px] sm:text-xs text-brand-cream/60 uppercase tracking-widest font-bold">Open until 11 PM</div>
              </div>
              <div>
                <div className="font-serif text-2xl font-bold text-brand-gold">Rs 1-1k</div>
                <div className="text-[10px] sm:text-xs text-brand-cream/60 uppercase tracking-widest font-bold">Price range</div>
              </div>
            </motion.div>
          </div>

          {/* Right Floating Product Showcase / Image */}
          <div className="hidden lg:col-span-5 lg:flex flex-col items-center justify-center relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: 1 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ type: 'spring', stiffness: 60, delay: 0.3 }}
              className="relative p-3 bg-brand-cream-dark/10 backdrop-blur-md rounded-2xl border border-brand-cream/20 shadow-2xl"
            >
              {/* Main Rounded Image */}
              <div className="w-[340px] h-[340px] rounded-xl overflow-hidden border-2 border-brand-gold/40">
                <img
                  src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80" // Cozy restaurant atmosphere
                  alt="Qorsia Kitchen Storefront Door and Sign"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Decorative Label */}
              <div className="absolute -bottom-4 -left-4 bg-brand-charcoal border border-brand-gold/30 p-3.5 rounded-xl shadow-xl max-w-[200px] flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-brand-maroon flex items-center justify-center text-brand-cream shrink-0 font-bold text-sm border border-brand-gold/20">
                  📍
                </div>
                <div className="text-left">
                  <p className="text-[10px] font-bold text-brand-gold uppercase tracking-wider leading-none">Located At</p>
                  <p className="text-xs font-semibold text-brand-cream leading-tight mt-1">Sindhi Muslim CHS, Karachi</p>
                </div>
              </div>

              {/* Decorative Label 2 */}
              <div className="absolute -top-4 -right-4 bg-brand-maroon text-brand-cream border border-brand-gold/40 p-3.5 rounded-xl shadow-xl flex items-center gap-2">
                <Star size={16} className="text-brand-gold fill-brand-gold animate-pulse" />
                <div className="text-left">
                  <p className="text-sm font-black leading-none">4.9 Stars</p>
                  <p className="text-[9px] font-bold text-brand-cream/70 uppercase tracking-widest mt-0.5">Top-Rated on Google</p>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
