import { motion } from 'motion/react';
import { MapPin, Phone, Clock, ShoppingBag, MessageCircle, ExternalLink } from 'lucide-react';

export default function Contact() {
  const address = 'Shop No 97, Sindhi Muslim Cooperative Housing Society, Block B, Karachi Cantonment, Karachi, 74400, Pakistan';
  const phone = '+92 307 0441794';

  return (
    <section id="contact" className="py-20 lg:py-28 bg-brand-cream text-brand-charcoal scroll-mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12 sm:mb-16">
          <span className="text-xs font-extrabold tracking-widest text-brand-terracotta uppercase block">
            Visit & Contact Us
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-black text-brand-maroon tracking-tight">
            We'd Love to Serve You
          </h2>
          <p className="text-sm text-brand-charcoal/70 font-medium leading-relaxed">
            Stop by for an exquisite dining experience or order delivery directly to your doorstep anywhere in Karachi Cantonment!
          </p>
        </div>

        {/* Outer Split Layout: Left Info, Right Maps */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Left Panel: Details Card */}
          <div className="lg:col-span-5 flex flex-col justify-between bg-white rounded-3xl p-6 sm:p-8 shadow-md border border-brand-maroon/5 space-y-8">
            <div className="space-y-6">
              {/* Address details */}
              <div className="flex gap-4">
                <div className="w-11 h-11 rounded-full bg-brand-maroon/5 text-brand-maroon flex items-center justify-center shrink-0 border border-brand-maroon/10">
                  <MapPin size={20} />
                </div>
                <div className="text-left">
                  <h3 className="font-serif font-black text-sm text-brand-maroon uppercase tracking-wide">Our Address</h3>
                  <p className="text-xs sm:text-sm text-brand-charcoal/80 leading-relaxed font-semibold mt-1">
                    {address}
                  </p>
                </div>
              </div>

              {/* Phone contact with click to call */}
              <div className="flex gap-4">
                <div className="w-11 h-11 rounded-full bg-brand-maroon/5 text-brand-maroon flex items-center justify-center shrink-0 border border-brand-maroon/10">
                  <Phone size={20} />
                </div>
                <div className="text-left">
                  <h3 className="font-serif font-black text-sm text-brand-maroon uppercase tracking-wide">Call to Order</h3>
                  <a
                    href={`tel:${phone.replace(/\s+/g, '')}`}
                    className="text-base sm:text-lg font-black text-brand-maroon hover:text-brand-terracotta transition-colors block mt-1"
                  >
                    {phone}
                  </a>
                  <p className="text-[11px] text-brand-charcoal/50 font-bold uppercase mt-0.5">Click to make a direct phone call</p>
                </div>
              </div>

              {/* Opening Hours */}
              <div className="flex gap-4">
                <div className="w-11 h-11 rounded-full bg-brand-maroon/5 text-brand-maroon flex items-center justify-center shrink-0 border border-brand-maroon/10">
                  <Clock size={20} />
                </div>
                <div className="text-left">
                  <h3 className="font-serif font-black text-sm text-brand-maroon uppercase tracking-wide">Opening Hours</h3>
                  <p className="text-sm text-brand-charcoal/85 leading-relaxed font-semibold mt-1">
                    Open Daily: <span className="text-brand-maroon">12:00 PM — 11:00 PM</span>
                  </p>
                  <p className="text-[11px] text-brand-charcoal/50 font-bold uppercase mt-0.5">Kitchen order closes at 10:45 PM</p>
                </div>
              </div>
            </div>

            {/* Quick CTAs container */}
            <div className="pt-6 border-t border-brand-maroon/10 space-y-3">
              <a
                href="https://www.foodpanda.pk"
                target="_blank"
                referrerPolicy="no-referrer"
                className="flex items-center justify-center gap-2 w-full bg-brand-maroon hover:bg-brand-maroon/95 text-brand-cream py-3.5 rounded-xl font-bold shadow-md hover:shadow-lg transition-all duration-200 border border-brand-gold/20"
              >
                <ShoppingBag size={18} />
                <span>Order via Foodpanda</span>
              </a>
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={`tel:${phone.replace(/\s+/g, '')}`}
                  className="flex items-center justify-center gap-2 bg-white text-brand-maroon border border-brand-maroon/20 hover:border-brand-maroon/40 py-3 rounded-xl font-semibold text-xs sm:text-sm shadow-sm transition-all"
                >
                  <Phone size={16} />
                  <span>Call Kitchen</span>
                </a>
                <a
                  href={`https://wa.me/923070441794?text=${encodeURIComponent("Hi, I'd like to check the menu and place an order at Qorsia Kitchen.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba56] text-white py-3 rounded-xl font-semibold text-xs sm:text-sm shadow-sm transition-all"
                >
                  <MessageCircle size={16} />
                  <span>WhatsApp Chat</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Panel: Embedded Map */}
          <div className="lg:col-span-7 h-[380px] lg:h-auto rounded-3xl overflow-hidden border border-brand-maroon/10 shadow-md relative group">
            {/* Embedded Google Maps with no credentials needed */}
            <iframe
              src="https://maps.google.com/maps?q=Shop%20No%2097,%20Sindhi%20Muslim%20Cooperative%20Housing%20Society,%20Block%20B,%20Karachi%20Cantonment,%20Karachi&t=&z=16&ie=UTF8&iwloc=&output=embed"
              title="Qorsia Kitchen Location in Sindhi Muslim CHS, Karachi"
              className="w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-700"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            
            {/* View on Google Maps floating badge */}
            <a
              href="https://maps.google.com/?q=Shop+No+97,+Sindhi+Muslim+Cooperative+Housing+Society,+Block+B,+Karachi+Cantonment,+Karachi"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-4 right-4 bg-brand-charcoal text-brand-cream px-4 py-2 rounded-xl text-xs font-bold shadow-lg border border-brand-gold/30 flex items-center gap-1.5 hover:bg-brand-maroon transition-colors"
            >
              <span>Open in Google Maps</span>
              <ExternalLink size={12} />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
