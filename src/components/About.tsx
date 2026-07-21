import { motion } from 'motion/react';
import { Award, Flame, Heart, Sparkles, CheckCircle2 } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: <Flame className="text-brand-terracotta" size={24} />,
      title: 'Authentic "Tez Masala"',
      desc: 'Our bespoke spice blends are freshly hand-pounded to deliver that bold, deep, and traditional Karachi-style heat.',
    },
    {
      icon: <Award className="text-brand-gold" size={24} />,
      title: 'Durable Consistency',
      desc: 'Consistency is our secret recipe. Each grain of rice and dollop of cream tastes exactly as delicious as you remember.',
    },
    {
      icon: <Heart className="text-brand-maroon" size={24} />,
      title: 'Accessible Luxury',
      desc: 'We strongly believe that fine, restaurant-quality gourmet food shouldn’t break the bank. Desi excellence is for everyone.',
    },
  ];

  return (
    <section id="about" className="py-20 lg:py-28 bg-brand-cream text-brand-charcoal overflow-hidden border-b border-brand-maroon/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Outer grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left: Collage of real packaging & physical branding */}
          <div className="lg:col-span-5 relative order-last lg:order-first">
            {/* Background elements */}
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-brand-gold/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -right-4 w-40 h-40 bg-brand-maroon/5 rounded-full blur-2xl"></div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              {/* Main packaging card */}
              <div className="bg-white p-4 rounded-2xl shadow-xl border border-brand-maroon/5 relative z-10">
                <div className="aspect-[4/3] rounded-xl overflow-hidden mb-4 bg-brand-cream-dark">
                  <img
                    src="https://images.unsplash.com/photo-1512152272829-e3139592d56f?auto=format&fit=crop&w=800&q=80" // Premium takeaway boxes and bag
                    alt="Qorsia Kitchen Takeaway Boxes and Delivery Packaging"
                    className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="flex items-center justify-between text-xs font-semibold text-brand-charcoal/60 px-1">
                  <span className="flex items-center gap-1.5 text-brand-maroon">
                    <Sparkles size={14} /> Custom Sealed Packages
                  </span>
                  <span>100% Fresh & Hygienic</span>
                </div>
              </div>

              {/* Smaller overlay card detailing Google Rating badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="absolute -bottom-6 -right-6 md:-right-8 bg-brand-charcoal text-brand-cream p-5 rounded-2xl shadow-2xl border border-brand-gold/20 max-w-[240px] z-20"
              >
                <div className="flex items-center gap-1 text-brand-gold mb-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-sm">★</span>
                  ))}
                </div>
                <p className="font-serif text-lg font-black text-white leading-tight">4.9 Star Rating</p>
                <p className="text-[10px] text-brand-cream/70 uppercase tracking-widest font-bold mt-1">Based on 18 Google Reviews</p>
                <p className="text-[11px] text-brand-gold/90 mt-2 italic leading-relaxed">"Consistency and rich taste that has won over Karachi Cantonment!"</p>
              </motion.div>
            </motion.div>
          </div>

          {/* Right: Copy & Brand Story */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            <div className="space-y-2.5">
              <span className="text-xs font-extrabold tracking-widest text-brand-terracotta uppercase block">
                Our Heritage & Philosophy
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-black text-brand-maroon tracking-tight leading-tight">
                Qorsia Kitchen: Born in Karachi, Crafted with Passion.
              </h2>
            </div>

            {/* Main Brand Story Paragraphs */}
            <div className="space-y-4 text-brand-charcoal/80 text-sm sm:text-base leading-relaxed font-medium">
              <p>
                Qorsia Kitchen started as a small, passionate local biryani spot located in the heart of{' '}
                <strong className="text-brand-maroon">Shop No 97, Sindhi Muslim Cooperative Housing Society, Block B</strong>.
                We were built on a simple yet unyielding philosophy: preserving the authentic, full-bodied flavors of home-style Pakistani cooking.
              </p>
              <p>
                Our signature revolves around our slow-cooked recipes passed down through generations, combining the finest cuts of meat with a heavy emphasis on <strong className="text-brand-terracotta">"tez masala"</strong> (bold spices) and juicy, <span className="italic">raseeli</span> textures. We have earned a near-perfect <strong>4.9-star rating on Google</strong> from our incredibly loyal local community because we never compromise on consistency, hygiene, or authentic taste.
              </p>
            </div>

            {/* Mission Statement Box */}
            <div className="p-5 sm:p-6 bg-brand-cream-dark/60 rounded-2xl border-l-4 border-brand-maroon flex flex-col space-y-2.5">
              <h3 className="font-serif font-black text-base text-brand-maroon uppercase tracking-wide leading-none">
                Our Daily Mission
              </h3>
              <p className="text-xs sm:text-sm text-brand-charcoal/85 italic leading-relaxed font-medium">
                "To deliver absolute restaurant-quality, slow-cooked Desi delicacies with hygienic packaging and fast service at accessible, honest prices for every Karachiite."
              </p>
            </div>

            {/* Core Brand value grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-brand-maroon/10">
              {values.map((v, i) => (
                <div key={i} className="flex flex-col space-y-2">
                  <div className="w-10 h-10 rounded-xl bg-white border border-brand-maroon/5 shadow-sm flex items-center justify-center">
                    {v.icon}
                  </div>
                  <h4 className="font-serif font-extrabold text-sm text-brand-maroon">
                    {v.title}
                  </h4>
                  <p className="text-xs text-brand-charcoal/70 leading-relaxed font-medium">
                    {v.desc}
                  </p>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
