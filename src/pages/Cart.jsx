import React from 'react';
import { 
  ChevronLeft, ShoppingBag, Trash2, Plus, Minus, 
  ArrowRight, ShieldCheck, Zap, Heart, Gift 
} from 'lucide-react';

export default function Cart({ navigate, cart, removeFromCart, updateQuantity }) {
  const subtotal = cart.reduce((acc, item) => {
    const price = parseInt(item.price.replace(/[^\d]/g, ''));
    return acc + (price * item.quantity);
  }, 0);

  const shipping = subtotal > 1000 ? 0 : 99;
  const savings = cart.length > 1 ? 150 : 0; // Mock savings
  const total = subtotal + shipping - savings;

  return (
    <div className="bg-[#faf7f5] min-h-full pb-40 relative overflow-x-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-nykaa-pink/5 rounded-full blur-3xl -z-10 animate-pulse"></div>
      <div className="absolute bottom-40 left-0 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl -z-10"></div>

      <header className="px-6 py-6 sticky top-0 bg-white/80 backdrop-blur-xl z-30 flex items-center justify-between border-b border-gray-100">
        <div className="flex items-center gap-3">
          <button 
            onClick={() => navigate('home')} 
            className="w-10 h-10 flex items-center justify-center bg-gray-50 rounded-xl text-gray-800 active:scale-90 transition-transform"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <div>
            <h1 className="text-xl font-black text-gray-900 tracking-tight">Shopping Bag</h1>
            <p className="text-[10px] font-black uppercase tracking-widest text-nykaa-pink">
              {cart.length} {cart.length === 1 ? 'Item' : 'Items'} Selected
            </p>
          </div>
        </div>
        <div className="w-10 h-10 bg-nykaa-pink/10 rounded-full flex items-center justify-center">
          <ShoppingBag className="w-5 h-5 text-nykaa-pink" />
        </div>
      </header>

      <div className="p-6 md:p-10 grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-6">
          {cart.length > 0 ? (
            <div className="space-y-4">
              {cart.map((item, idx) => (
                <div 
                  key={item.id} 
                  className="premium-card p-5 flex gap-5 animate-slide-right group"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <div className="w-24 h-24 bg-gray-50 rounded-[2rem] p-3 shrink-0 border border-gray-100 relative group-hover:scale-105 transition-transform duration-500">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-full h-full object-contain mix-blend-multiply" 
                    />
                    <button className="absolute -top-2 -left-2 w-7 h-7 bg-white rounded-full shadow-sm flex items-center justify-center text-gray-300 hover:text-nykaa-pink transition-colors">
                      <Heart className="w-3.5 h-3.5" />
                    </button>
                  </div>
                  
                  <div className="flex-1 min-w-0 flex flex-col justify-between py-1">
                    <div>
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="text-[10px] text-nykaa-pink font-black uppercase tracking-[0.2em] mb-1">
                            {item.brand}
                          </p>
                          <h4 className="text-base font-bold text-gray-900 leading-tight pr-4 line-clamp-1">
                            {item.name}
                          </h4>
                        </div>
                        <button 
                          onClick={() => removeFromCart(item.id)}
                          className="w-8 h-8 flex items-center justify-center text-gray-300 hover:text-rose-500 hover:bg-rose-50 rounded-full transition-all"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-end mt-4">
                      <div>
                        <p className="text-lg font-black text-gray-900">{item.price}</p>
                        <p className="text-[10px] text-emerald-500 font-bold">Inclusive of all taxes</p>
                      </div>
                      
                      <div className="flex items-center gap-4 bg-gray-50/80 backdrop-blur-sm rounded-2xl px-4 py-2 border border-gray-100 shadow-inner">
                        <button 
                          onClick={() => updateQuantity(item.id, -1)}
                          className="p-1 text-gray-400 hover:text-nykaa-pink transition-colors"
                          disabled={item.quantity <= 1}
                        >
                          <Minus className="w-3.5 h-3.5" strokeWidth={3} />
                        </button>
                        <span className="text-sm font-black w-6 text-center text-gray-900">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, 1)}
                          className="p-1 text-gray-400 hover:text-nykaa-pink transition-colors"
                        >
                          <Plus className="w-3.5 h-3.5" strokeWidth={3} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* Reward Progress Mock */}
              <div className="bg-gradient-to-r from-nykaa-pink to-pink-500 rounded-[2.5rem] p-6 text-white shadow-xl shadow-pink-200/50 flex items-center justify-between overflow-hidden relative">
                <div className="absolute -right-4 -top-4 w-24 h-24 bg-white/10 rounded-full blur-2xl"></div>
                <div className="flex items-center gap-4 relative z-10">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center animate-bounce-gentle">
                    <Zap className="w-6 h-6 fill-white" />
                  </div>
                  <div>
                    <h5 className="font-black text-sm uppercase tracking-wider">You're on Fire!</h5>
                    <p className="text-xs text-white/80">Earn 50 bonus points on checkout</p>
                  </div>
                </div>
                <div className="text-right relative z-10">
                  <p className="text-2xl font-black">+50</p>
                  <p className="text-[10px] font-bold uppercase tracking-widest opacity-70">Points</p>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center py-24 px-10 animate-fadeIn">
              <div className="w-32 h-32 bg-white rounded-[3rem] shadow-xl shadow-gray-100 flex items-center justify-center mx-auto mb-8 relative">
                <div className="absolute inset-0 bg-nykaa-pink/5 rounded-[3rem] animate-ping"></div>
                <ShoppingBag className="w-12 h-12 text-gray-200" />
              </div>
              <h2 className="text-3xl font-black text-gray-900 mb-3 tracking-tighter">Empty Bag</h2>
              <p className="text-gray-500 text-sm mb-10 max-w-[240px] mx-auto leading-relaxed">
                Looks like you haven't discovered your beauty favorites yet.
              </p>
              <button 
                onClick={() => navigate('home')}
                className="bg-black text-white px-12 py-5 rounded-[2rem] font-black text-sm tracking-[0.1em] shadow-2xl shadow-black/20 active:scale-95 transition-all hover:bg-nykaa-pink group flex items-center gap-3 mx-auto"
              >
                START SHOPPING <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          )}
        </div>

        {/* Desktop Summary */}
        {cart.length > 0 && (
          <div className="hidden lg:block">
            <div className="glass-premium p-8 sticky top-28 animate-slide-right">
              <h3 className="text-xl font-black text-gray-900 mb-8 flex items-center gap-2">
                Order Summary <div className="h-px flex-1 bg-gray-100 ml-2"></div>
              </h3>
              
              <div className="space-y-5 mb-8">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-500 font-medium">Bag Subtotal</span>
                  <span className="font-black text-gray-900 text-lg">₹{subtotal.toLocaleString()}</span>
                </div>
                
                <div className="flex justify-between items-center text-sm">
                  <div className="flex flex-col">
                    <span className="text-gray-500 font-medium">Shipping Fee</span>
                    <span className="text-[10px] text-emerald-500 font-bold uppercase">Free over ₹1000</span>
                  </div>
                  <span className={`font-black text-lg ${shipping === 0 ? 'text-emerald-500' : 'text-gray-900'}`}>
                    {shipping === 0 ? 'FREE' : `₹${shipping}`}
                  </span>
                </div>

                {savings > 0 && (
                  <div className="flex justify-between items-center text-sm p-3 bg-emerald-50 rounded-2xl border border-emerald-100">
                    <div className="flex items-center gap-2 text-emerald-600">
                      <Gift className="w-4 h-4" />
                      <span className="font-bold">Member Discount</span>
                    </div>
                    <span className="font-black text-emerald-600">- ₹{savings}</span>
                  </div>
                )}
                
                <div className="pt-6 border-t border-dashed border-gray-200">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-base font-black text-gray-900">Total Amount</span>
                    <span className="text-3xl font-black text-nykaa-pink tracking-tighter">
                      ₹{total.toLocaleString()}
                    </span>
                  </div>
                  <p className="text-[10px] text-right text-gray-400 font-medium">
                    You're saving ₹{savings} on this order
                  </p>
                </div>
              </div>

              <button className="w-full bg-nykaa-gradient text-white py-5 rounded-[2rem] font-black text-sm tracking-[0.2em] flex items-center justify-center gap-3 shadow-xl shadow-pink-500/30 active:scale-95 transition-all hover:brightness-110">
                CHECKOUT NOW <ArrowRight className="w-5 h-5" />
              </button>

              <div className="mt-6 flex items-center justify-center gap-2 text-[10px] text-gray-400 font-bold uppercase tracking-widest">
                <ShieldCheck className="w-4 h-4 text-emerald-500" />
                100% Secure Checkout
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Mobile Sticky Summary */}
      {cart.length > 0 && (
        <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-2xl border-t border-gray-100 p-8 pb-12 shadow-[0_-20px_40px_-15px_rgba(0,0,0,0.05)] z-40 rounded-t-[3.5rem] animate-slideUp">
          <div className="flex justify-between items-center mb-6">
            <div>
              <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Total Payable</p>
              <div className="flex items-baseline gap-2">
                <h2 className="text-3xl font-black text-gray-900 tracking-tighter">₹{total.toLocaleString()}</h2>
                {savings > 0 && <span className="text-xs text-emerald-500 font-bold">Save ₹{savings}</span>}
              </div>
            </div>
            <button className="bg-nykaa-gradient text-white px-8 py-5 rounded-[2rem] font-black text-sm tracking-widest shadow-xl shadow-pink-500/30 active:scale-95 transition-all flex items-center gap-2">
              PAY <ArrowRight className="w-5 h-5" />
            </button>
          </div>
          
          <div className="flex items-center justify-between text-[10px] text-gray-400 font-bold uppercase tracking-[0.2em]">
            <span className="flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5 text-emerald-500" /> Secure</span>
            <span className="flex items-center gap-1.5"><Zap className="w-3.5 h-3.5 text-amber-500" /> Fast Delivery</span>
            <span className="flex items-center gap-1.5"><Gift className="w-3.5 h-3.5 text-blue-500" /> Points</span>
          </div>
        </div>
      )}
    </div>
  );
}
