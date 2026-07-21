import { motion } from 'motion/react';
import { REVIEWS } from '../data';
import { Star, MessageSquare, Quote, ArrowUpRight } from 'lucide-react';

export default function Reviews() {
  return (
    <section id="reviews" className="py-20 lg:py-28 bg-brand-cream-dark/30 text-brand-charcoal scroll-mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Layout split: 1/3 Google Badge, 2/3 Reviews Carousel/Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left: Google Badge and social proof overview */}
          <div className="lg:col-span-4 lg:sticky lg:top-28 space-y-6">
            <span className="text-xs font-extrabold tracking-widest text-brand-terracotta uppercase block">
              Guest Feedback
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-black text-brand-maroon tracking-tight leading-tight">
              Beloved by Locals, Rated by Foodies.
            </h2>
            <p className="text-sm text-brand-charcoal/70 leading-relaxed font-medium">
              We take pride in our culinary crafts. Check out what our customers say about our authentic recipes, spice profiles, and fast Cantonment service.
            </p>

            {/* Google Rating Big Badge */}
            <div className="bg-white p-6 rounded-2xl shadow-md border border-brand-maroon/5 flex items-center gap-5">
              <div className="w-16 h-16 rounded-full bg-[#4285F4]/10 flex items-center justify-center shrink-0">
                <span className="text-[#4285F4] text-3xl font-black font-serif">G</span>
              </div>
              <div className="text-left space-y-1">
                <div className="flex items-center gap-1.5">
                  <span className="font-serif text-3xl font-black text-brand-charcoal leading-none">4.9</span>
                  <div className="flex text-brand-gold text-lg leading-none">
                    {[...Array(5)].map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                </div>
                <p className="text-xs font-bold text-brand-charcoal/50 uppercase tracking-widest">
                  18 Google Reviews
                </p>
                <p className="text-[11px] font-bold text-[#4285F4] flex items-center gap-1">
                  Verified Local Restaurant
                </p>
              </div>
            </div>

            {/* Button out to Google Reviews search page */}
            <a
              href="https://www.google.com/search?q=Qorsia+Kitchen+Karachi+Sindhi+Muslim"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-brand-maroon hover:text-brand-terracotta font-bold text-sm group"
            >
              <span>Read more reviews on Google Search</span>
              <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </div>

          {/* Right: Testimonial cards list */}
          <div className="lg:col-span-8 space-y-6">
            {REVIEWS.map((review, index) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 sm:p-8 rounded-2xl shadow-md border border-brand-maroon/5 relative flex flex-col justify-between"
              >
                {/* Quote Icon overlay background */}
                <div className="absolute top-6 right-6 text-brand-cream-dark/60 shrink-0">
                  <Quote size={40} className="stroke-[1px]" />
                </div>

                <div className="space-y-4">
                  {/* Rating Stars */}
                  <div className="flex text-brand-gold text-sm leading-none gap-0.5">
                    {[...Array(review.rating)].map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="font-sans text-sm sm:text-base text-brand-charcoal/85 leading-relaxed font-semibold italic">
                    "{review.text}"
                  </p>
                </div>

                {/* Author Info */}
                <div className="flex items-center justify-between pt-5 mt-5 border-t border-brand-maroon/5">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-brand-maroon/10 text-brand-maroon font-bold flex items-center justify-center text-sm">
                      {review.author[0]}
                    </div>
                    <div className="text-left">
                      <p className="font-serif font-black text-sm text-brand-maroon">
                        {review.author}
                      </p>
                      {review.role && (
                        <p className="text-[10px] font-bold text-brand-terracotta uppercase tracking-wider leading-none mt-0.5">
                          {review.role}
                        </p>
                      )}
                    </div>
                  </div>
                  <span className="text-[11px] font-bold text-brand-charcoal/40 uppercase tracking-widest">
                    {review.date}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
