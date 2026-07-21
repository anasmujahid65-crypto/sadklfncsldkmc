import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { X, Plus, Minus, Trash2, ShoppingBag, MessageCircle, AlertCircle, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function CartDrawer() {
  const {
    cart,
    updateQuantity,
    removeFromCart,
    subtotal,
    deliveryFee,
    finalTotal,
    isCartOpen,
    setIsCartOpen,
    clearCart,
  } = useCart();

  // Form states
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [serviceType, setServiceType] = useState<'Delivery' | 'Drive-through' | 'Dine-in'>('Delivery');
  const [address, setAddress] = useState('');
  const [instructions, setInstructions] = useState('');
  const [error, setError] = useState('');

  const isAddressRequired = serviceType === 'Delivery' || serviceType === 'Drive-through';

  const handleSendOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Validations
    if (!name.trim()) {
      setError('Please enter your name.');
      return;
    }
    if (!phone.trim()) {
      setError('Please enter your phone number.');
      return;
    }
    if (isAddressRequired && !address.trim()) {
      setError(`Please enter your address for ${serviceType}.`);
      return;
    }

    if (cart.length === 0) {
      setError('Your Hungry Platter is empty! Add some dishes first.');
      return;
    }

    // Prepare Whatsapp Message
    const restaurantPhone = '923001111486'; // Target phone requested: +92 300 1111486
    
    let orderItemsText = '';
    cart.forEach((item) => {
      orderItemsText += `• ${item.quantity} x ${item.item.name} (${item.item.price} each)\n`;
    });

    const formatAddress = isAddressRequired ? address.trim() : 'Dine-in (No delivery address required)';
    const formatInstructions = instructions.trim() ? instructions.trim() : 'None';

    const messageText = 
`*NEW ORDER - QORSIA KITCHEN* 🍽️
---------------------------------
👤 *Customer Name:* ${name.trim()}
📞 *Phone Number:* ${phone.trim()}
🚚 *Service Type:* ${serviceType}
📍 *Address:* ${formatAddress}
📝 *Special Instructions:* ${formatInstructions}

*🛒 ORDER ITEMS:*
${orderItemsText}
---------------------------------
💵 *Subtotal:* Rs. ${subtotal.toLocaleString()}
🛵 *Delivery Fee:* FREE (SMCHS Area)
⭐ *GRAND TOTAL:* Rs. ${finalTotal.toLocaleString()}

_Order placed via Qorsia Kitchen Online Platter. Please confirm my order!_`;

    const encodedMessage = encodeURIComponent(messageText);
    const whatsappUrl = `https://wa.me/${restaurantPhone}?text=${encodedMessage}`;
    
    // Open in new tab
    window.open(whatsappUrl, '_blank');
  };

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 bg-brand-charcoal z-50 cursor-pointer"
          />

          {/* Drawer Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 bottom-0 w-full sm:max-w-md bg-brand-cream shadow-2xl z-50 flex flex-col h-full overflow-hidden border-l border-brand-maroon/10"
          >
            {/* Drawer Header */}
            <div className="p-5 border-b border-brand-maroon/10 bg-brand-cream-dark flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full bg-brand-maroon text-brand-cream flex items-center justify-center shadow-sm">
                  <ShoppingBag size={18} />
                </div>
                <div>
                  <h2 className="font-serif font-black text-lg text-brand-maroon leading-none">Your Hungry Platter</h2>
                  <p className="text-[10px] text-brand-charcoal/60 uppercase tracking-widest font-bold mt-1">
                    {cart.length} item{cart.length !== 1 ? 's' : ''} selected
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsCartOpen(false)}
                className="w-9 h-9 rounded-full bg-white text-brand-charcoal hover:text-brand-maroon hover:bg-brand-maroon/5 flex items-center justify-center transition-colors border border-brand-maroon/5"
                aria-label="Close Cart"
              >
                <X size={18} />
              </button>
            </div>

            {/* Main scrollable body */}
            <div className="flex-1 overflow-y-auto p-5 space-y-6">
              {cart.length === 0 ? (
                <div className="py-16 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-brand-maroon/5 text-brand-maroon/40 flex items-center justify-center mx-auto border border-brand-maroon/5">
                    <ShoppingBag size={28} />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-serif font-bold text-base text-brand-maroon">Your Platter is Empty</h3>
                    <p className="text-xs text-brand-charcoal/60 max-w-[240px] mx-auto font-medium">
                      Browse our authentic menu and tap the "Add" button on any dish to begin your feast.
                    </p>
                  </div>
                  <button
                    onClick={() => setIsCartOpen(false)}
                    className="inline-flex px-4 py-2 bg-brand-maroon hover:bg-brand-maroon/90 text-brand-cream font-bold text-xs rounded-lg transition-all border border-brand-gold/10"
                  >
                    Browse Specialities
                  </button>
                </div>
              ) : (
                <>
                  {/* Item List */}
                  <div className="space-y-3">
                    <h3 className="text-xs font-extrabold uppercase tracking-widest text-brand-terracotta">Selected Dishes</h3>
                    <div className="space-y-2.5">
                      {cart.map(({ item, quantity }) => (
                        <div
                          key={item.id}
                          className="bg-white p-3 rounded-xl border border-brand-maroon/5 flex gap-3 items-center shadow-sm"
                        >
                          {/* Dish Image */}
                          <div className="w-14 h-14 rounded-lg overflow-hidden shrink-0 bg-brand-cream-dark">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="w-full h-full object-cover"
                              referrerPolicy="no-referrer"
                            />
                          </div>

                          {/* Info */}
                          <div className="flex-1 min-w-0">
                            <h4 className="font-serif font-bold text-sm text-brand-maroon truncate leading-tight">
                              {item.name}
                            </h4>
                            <p className="text-xs font-black text-brand-charcoal/70 mt-0.5">
                              {item.price}
                            </p>
                          </div>

                          {/* Quantity adjustments */}
                          <div className="flex items-center gap-1.5 bg-brand-cream-dark/60 border border-brand-maroon/5 rounded-lg p-1">
                            <button
                              onClick={() => updateQuantity(item.id, quantity - 1)}
                              className="w-6 h-6 rounded-md bg-white text-brand-maroon hover:bg-brand-maroon/5 flex items-center justify-center transition-colors"
                              aria-label="Decrease"
                            >
                              <Minus size={12} />
                            </button>
                            <span className="w-5 text-center text-xs font-bold text-brand-maroon">
                              {quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.id, quantity + 1)}
                              className="w-6 h-6 rounded-md bg-white text-brand-maroon hover:bg-brand-maroon/5 flex items-center justify-center transition-colors"
                              aria-label="Increase"
                            >
                              <Plus size={12} />
                            </button>
                          </div>

                          {/* Delete Item button */}
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="text-brand-charcoal/40 hover:text-brand-maroon p-1 rounded-md hover:bg-brand-maroon/5 transition-colors shrink-0"
                            aria-label="Remove item"
                          >
                            <Trash2 size={15} />
                          </button>
                        </div>
                      ))}
                    </div>
                    <div className="text-right">
                      <button
                        onClick={clearCart}
                        className="text-[10px] uppercase font-bold text-brand-charcoal/40 hover:text-brand-maroon transition-colors"
                      >
                        Clear All Items
                      </button>
                    </div>
                  </div>

                  {/* Checkout Form */}
                  <form onSubmit={handleSendOrder} className="space-y-4 pt-4 border-t border-brand-maroon/10">
                    <h3 className="text-xs font-extrabold uppercase tracking-widest text-brand-terracotta">Delivery & Checkout Details</h3>
                    
                    {error && (
                      <div className="p-3 bg-brand-maroon/5 border border-brand-maroon/20 rounded-xl text-xs text-brand-maroon font-semibold flex items-center gap-2">
                        <AlertCircle size={14} className="shrink-0" />
                        <span>{error}</span>
                      </div>
                    )}

                    {/* Name */}
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-brand-charcoal/75 block">Your Name <span className="text-brand-maroon">*</span></label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Shaheer Imran"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full bg-white border border-brand-maroon/10 focus:border-brand-maroon rounded-xl px-3.5 py-2.5 text-xs font-medium focus:outline-none transition-colors"
                      />
                    </div>

                    {/* Phone Number */}
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-brand-charcoal/75 block">Phone Number <span className="text-brand-maroon">*</span></label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. 0300 1234567"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full bg-white border border-brand-maroon/10 focus:border-brand-maroon rounded-xl px-3.5 py-2.5 text-xs font-medium focus:outline-none transition-colors"
                      />
                    </div>

                    {/* Service Type Dropdown */}
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-brand-charcoal/75 block">Service Type <span className="text-brand-maroon">*</span></label>
                      <select
                        value={serviceType}
                        onChange={(e) => {
                          setServiceType(e.target.value as any);
                          if (e.target.value === 'Dine-in') {
                            setAddress('');
                          }
                        }}
                        className="w-full bg-white border border-brand-maroon/10 focus:border-brand-maroon rounded-xl px-3.5 py-2.5 text-xs font-semibold focus:outline-none transition-colors text-brand-charcoal"
                      >
                        <option value="Delivery">Delivery (SMCHS Area - FREE)</option>
                        <option value="Drive-through">Drive-through (SMCHS Outlet)</option>
                        <option value="Dine-in">Dine-in at Restaurant</option>
                      </select>
                    </div>

                    {/* Address - Conditionally Required */}
                    {isAddressRequired && (
                      <div className="space-y-1">
                        <label className="text-xs font-bold text-brand-charcoal/75 block">
                          {serviceType === 'Drive-through' ? 'Car Details / Pickup Address' : 'Delivery Address'} <span className="text-brand-maroon">*</span>
                        </label>
                        <textarea
                          required
                          rows={2}
                          placeholder={
                            serviceType === 'Drive-through'
                              ? 'e.g. White Civic (AEN-456) near Outlet at 8:00 PM'
                              : 'e.g. Apartment 4B, Block A, SMCHS Karachi'
                          }
                          value={address}
                          onChange={(e) => setAddress(e.target.value)}
                          className="w-full bg-white border border-brand-maroon/10 focus:border-brand-maroon rounded-xl px-3.5 py-2.5 text-xs font-medium focus:outline-none transition-colors resize-none"
                        />
                      </div>
                    )}

                    {/* Special Instructions */}
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-brand-charcoal/75 block">Special Instructions (Optional)</label>
                      <textarea
                        rows={2}
                        placeholder="e.g. extra spicy biryani, send raita & salad, extra spoons"
                        value={instructions}
                        onChange={(e) => setInstructions(e.target.value)}
                        className="w-full bg-white border border-brand-maroon/10 focus:border-brand-maroon rounded-xl px-3.5 py-2.5 text-xs font-medium focus:outline-none transition-colors resize-none"
                      />
                    </div>
                  </form>
                </>
              )}
            </div>

            {/* Cart Footer */}
            {cart.length > 0 && (
              <div className="p-5 border-t border-brand-maroon/15 bg-brand-cream-dark">
                {/* Price list */}
                <div className="space-y-2 mb-5">
                  <div className="flex items-center justify-between text-xs text-brand-charcoal/70 font-semibold">
                    <span>Subtotal</span>
                    <span>Rs. {subtotal.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-brand-charcoal/70 font-semibold">
                    <span className="flex items-center gap-1">
                      Delivery Fee <span className="text-[10px] text-brand-terracotta bg-brand-terracotta/10 px-1.5 py-0.5 rounded-md font-bold uppercase">SMCHS Area</span>
                    </span>
                    <span className="text-brand-terracotta font-bold">FREE</span>
                  </div>
                  <div className="pt-2 border-t border-brand-maroon/10 flex items-center justify-between">
                    <span className="font-serif font-black text-sm text-brand-maroon">Total Amount</span>
                    <span className="font-serif font-black text-base text-brand-maroon">Rs. {finalTotal.toLocaleString()}</span>
                  </div>
                </div>

                {/* Send Order Button */}
                <button
                  onClick={handleSendOrder}
                  className="w-full bg-[#25D366] hover:bg-[#20ba56] text-white py-3.5 rounded-xl font-bold text-sm shadow-md hover:shadow-lg hover:scale-[1.01] transition-all flex items-center justify-center gap-2 border border-white/10"
                >
                  <MessageCircle size={18} className="fill-white" />
                  <span>Send Order to WhatsApp</span>
                </button>
                <p className="text-[10px] text-brand-charcoal/50 text-center font-bold uppercase mt-2.5 tracking-wider">
                  Sends directly to +92 300 1111486
                </p>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
