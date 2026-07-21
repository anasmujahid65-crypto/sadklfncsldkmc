import { Phone, MapPin, Clock, Facebook, Instagram, Globe, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-charcoal text-brand-cream/80 border-t border-brand-maroon/20 pt-16 pb-24 md:pb-12 font-sans relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8 pb-12 border-b border-brand-cream/10">
          
          {/* Column 1: Brand & Desc */}
          <div className="md:col-span-1 space-y-4 text-left">
            <a href="#home" className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-brand-maroon flex items-center justify-center border border-brand-gold/30">
                <span className="font-calligraphy text-base text-brand-cream font-bold">ق</span>
              </div>
              <span className="font-serif font-black text-xl text-white tracking-tight leading-none">
                Qorsia Kitchen
              </span>
            </a>
            <p className="text-xs text-brand-cream/60 leading-relaxed font-medium">
              A cherished culinary cornerstone in block B, Sindhi Muslim CHS, Karachi. Serving authentic, slow-cooked, raseeli Biryani, rich Handi, and sizzling Karahi infused with bold traditional spices.
            </p>
            {/* Social media anchors */}
            <div className="flex gap-3 pt-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-brand-cream/5 hover:bg-brand-maroon text-brand-cream hover:text-white flex items-center justify-center border border-brand-cream/10 hover:border-brand-maroon transition-all"
                aria-label="Follow Qorsia Kitchen on Facebook"
              >
                <Facebook size={14} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-brand-cream/5 hover:bg-brand-maroon text-brand-cream hover:text-white flex items-center justify-center border border-brand-cream/10 hover:border-brand-maroon transition-all"
                aria-label="Follow Qorsia Kitchen on Instagram"
              >
                <Instagram size={14} />
              </a>
              <a
                href="https://maps.google.com/?q=Shop+No+97,+Sindhi+Muslim+Cooperative+Housing+Society,+Block+B,+Karachi+Cantonment,+Karachi"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-brand-cream/5 hover:bg-brand-maroon text-brand-cream hover:text-white flex items-center justify-center border border-brand-cream/10 hover:border-brand-maroon transition-all"
                aria-label="Find Qorsia Kitchen on Google Maps"
              >
                <Globe size={14} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="text-left space-y-4">
            <h3 className="font-serif font-black text-white text-sm tracking-wider uppercase">Navigation</h3>
            <ul className="space-y-2 text-xs font-semibold">
              <li>
                <a href="#home" className="hover:text-brand-gold transition-colors block py-0.5">Home Page</a>
              </li>
              <li>
                <a href="#about" className="hover:text-brand-gold transition-colors block py-0.5">Our Story</a>
              </li>
              <li>
                <a href="#menu" className="hover:text-brand-gold transition-colors block py-0.5">Specialties Menu</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-brand-gold transition-colors block py-0.5">Dish Gallery</a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-brand-gold transition-colors block py-0.5">Guest Reviews</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-brand-gold transition-colors block py-0.5">Contact & Map</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Dishes Links */}
          <div className="text-left space-y-4">
            <h3 className="font-serif font-black text-white text-sm tracking-wider uppercase">Our Specialties</h3>
            <ul className="space-y-2 text-xs text-brand-cream/60 font-medium">
              <li className="hover:text-brand-gold cursor-default">Special Chicken Biryani</li>
              <li className="hover:text-brand-gold cursor-default">Beef Pulao (Deghi Style)</li>
              <li className="hover:text-brand-gold cursor-default">Creamy Shahi Handi</li>
              <li className="hover:text-brand-gold cursor-default">Paneer Reshmi Handi</li>
              <li className="hover:text-brand-gold cursor-default">Mutton Shinwari Karahi</li>
              <li className="hover:text-brand-gold cursor-default">Coastal Prawn Biryani</li>
            </ul>
          </div>

          {/* Column 4: Contact info */}
          <div className="text-left space-y-4">
            <h3 className="font-serif font-black text-white text-sm tracking-wider uppercase">Contact Details</h3>
            <ul className="space-y-3.5 text-xs text-brand-cream/70 font-semibold">
              <li className="flex gap-2.5 items-start">
                <MapPin size={16} className="text-brand-gold shrink-0 mt-0.5" />
                <span>Shop No 97, Block B, Sindhi Muslim CHS, Karachi, Pakistan</span>
              </li>
              <li className="flex gap-2.5 items-center">
                <Phone size={16} className="text-brand-gold shrink-0" />
                <a href="tel:+923070441794" className="hover:text-white transition-colors">+92 307 0441794</a>
              </li>
              <li className="flex gap-2.5 items-center">
                <Clock size={16} className="text-brand-gold shrink-0" />
                <span>Open Daily: 12:00 PM - 11:00 PM</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright and credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-brand-cream/40 font-bold uppercase tracking-wider">
          <p>© {currentYear} Qorsia Kitchen. All Rights Reserved.</p>
          <p className="flex items-center gap-1">
            Made with <Heart size={10} className="text-brand-maroon fill-brand-maroon" /> for Karachi's Food Enthusiasts
          </p>
        </div>

      </div>
    </footer>
  );
}
