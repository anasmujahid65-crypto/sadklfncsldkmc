import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const phone = '923070441794';
  const text = encodeURIComponent("Hi, I'd like to place an order at Qorsia Kitchen!");
  const url = `https://wa.me/${phone}?text=${text}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed z-50 right-5 bottom-20 md:bottom-8 bg-[#25D366] hover:bg-[#20ba56] text-white p-3.5 sm:p-4 rounded-full shadow-[0_4px_16px_rgba(37,211,102,0.4)] hover:shadow-[0_6px_20px_rgba(37,211,102,0.6)] hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center animate-bounce"
      title="Chat on WhatsApp"
      aria-label="Contact Qorsia Kitchen on WhatsApp"
    >
      <MessageCircle size={24} className="sm:w-7 sm:h-7" />
      
      {/* Decorative tooltip label */}
      <span className="absolute right-full mr-3 bg-brand-charcoal text-brand-cream text-[10px] font-bold uppercase tracking-wider py-1.5 px-3 rounded-lg shadow-md border border-brand-gold/30 hidden md:inline-block pointer-events-none whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
        Order via WhatsApp
      </span>
    </a>
  );
}
