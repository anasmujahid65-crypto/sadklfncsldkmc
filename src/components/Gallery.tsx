import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GALLERY_ITEMS } from '../data';
import { Camera, X, ZoomIn, Info } from 'lucide-react';

export default function Gallery() {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-brand-cream text-brand-charcoal scroll-mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12 sm:mb-16">
          <span className="text-xs font-extrabold tracking-widest text-brand-terracotta uppercase block">
            Visual Experience
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-black text-brand-maroon tracking-tight">
            Our Kitchen In Frames
          </h2>
          <p className="text-sm text-brand-charcoal/70 font-medium leading-relaxed">
            Take a look at our freshly prepared, slow-cooked Desi delights. Every image below captures actual portions prepped and delivered at Qorsia Kitchen!
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {GALLERY_ITEMS.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              onClick={() => setSelectedImg(item.image)}
              className="group cursor-pointer relative aspect-square rounded-2xl overflow-hidden bg-brand-cream-dark border border-brand-maroon/5 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              
              {/* Hover overlay with detail and Zoom Icon */}
              <div className="absolute inset-0 bg-brand-maroon/85 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-center">
                <div className="w-10 h-10 rounded-full bg-brand-cream/10 border border-brand-cream/30 flex items-center justify-center text-brand-cream mb-2 group-hover:scale-110 transition-transform duration-300">
                  <ZoomIn size={18} />
                </div>
                <h3 className="font-serif font-black text-sm text-brand-cream leading-tight">
                  {item.title}
                </h3>
                <span className="text-[10px] text-brand-gold font-bold tracking-widest uppercase mt-1">
                  {item.category}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CMS / Admin note banner */}
        <div className="mt-12 p-4 bg-brand-cream-dark border border-brand-maroon/10 rounded-xl max-w-2xl mx-auto flex gap-3 items-center">
          <div className="w-10 h-10 rounded-full bg-brand-maroon/10 text-brand-maroon flex items-center justify-center shrink-0">
            <Camera size={18} />
          </div>
          <div className="text-left">
            <p className="text-xs font-bold text-brand-maroon uppercase tracking-wide flex items-center gap-1.5">
              <Info size={12} /> CMS Placeholder & Expansion Spot
            </p>
            <p className="text-[11px] text-brand-charcoal/70 leading-relaxed font-medium mt-0.5">
              Images to be uploaded by business owner — reserve space for 8-12 high-quality food photos. The current layout automatically reflows to host any additions.
            </p>
          </div>
        </div>

      </div>

      {/* Lightbox Modal (Full Screen preview on click) */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImg(null)}
            className="fixed inset-0 bg-brand-charcoal/95 z-50 flex items-center justify-center p-4 md:p-8 cursor-zoom-out"
          >
            <button
              onClick={() => setSelectedImg(null)}
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center border border-white/10 transition-colors"
              aria-label="Close Preview"
            >
              <X size={24} />
            </button>

            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              className="max-w-4xl max-h-[85vh] overflow-hidden rounded-2xl border border-brand-gold/20"
              onClick={(e) => e.stopPropagation()} // Prevents closing when clicking on the image itself
            >
              <img
                src={selectedImg}
                alt="Selected delicious dish enlarged"
                className="max-w-full max-h-[80vh] object-contain block mx-auto bg-brand-charcoal"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
