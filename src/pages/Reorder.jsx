import React, { useState } from 'react';
import { 
  ChevronLeft, RefreshCw, ShoppingCart, Calendar, 
  ArrowRight, Zap, Bell, CheckCircle2 
} from 'lucide-react';
import { reorderItems } from '../data';

export default function Reorder({ navigate, showSuccess, addToCart }) {
  const [items, setItems] = useState(reorderItems);

  const toggleSubscription = (id) => {
    setItems(items.map(item => 
      item.id === id ? { ...item, isSubscribed: !item.isSubscribed } : item
    ));
    const item = items.find(i => i.id === id);
    if (!item.isSubscribed) {
      showSuccess(20, "Auto-restock enabled! 📦");
    }
  };

  return (
    <div className="bg-[#faf7f5] min-h-full pb-32 relative overflow-hidden">
      {/* Dynamic background element */}
      <div className="absolute top-20 -right-20 w-96 h-96 bg-nykaa-pink/5 rounded-full blur-[100px] -z-10 animate-glow"></div>
      
      <header className="px-6 py-6 sticky top-0 bg-white/80 backdrop-blur-xl z-30 flex items-center justify-between border-b border-gray-100">
        <div className="flex items-center gap-4">
          <button 
            onClick={() => navigate('home')} 
            className="w-10 h-10 flex items-center justify-center bg-white rounded-xl text-gray-800 shadow-sm border border-gray-100 active:scale-90 transition-all"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <div>
            <h1 className="text-xl font-black text-gray-900 tracking-tight">Quick Reorder</h1>
            <p className="text-[10px] font-black uppercase tracking-[0.15em] text-nykaa-pink flex items-center gap-1.5">
              <RefreshCw className="w-3 h-3" /> Restock your favorites
            </p>
          </div>
        </div>
        <div className="w-10 h-10 bg-black/5 rounded-full flex items-center justify-center text-gray-400">
          <Bell className="w-5 h-5" />
        </div>
      </header>

      <div className="p-6 md:p-10">
        {/* Smart Restock Header */}
        <div className="premium-card p-6 mb-8 flex items-center justify-between bg-gradient-to-br from-white to-gray-50/50">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-amber-100 rounded-2xl flex items-center justify-center animate-pulse">
              <Zap className="w-6 h-6 text-amber-600 fill-amber-600" />
            </div>
            <div>
              <h3 className="font-bold text-gray-900 leading-tight">Smart Restock AI</h3>
              <p className="text-xs text-gray-500">2 items predicted to run low soon</p>
            </div>
          </div>
          <button className="text-[10px] font-black text-nykaa-pink uppercase tracking-widest bg-pink-50 px-3 py-2 rounded-xl">
            View Analytics
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {items.map((item, idx) => (
          <div 
            key={item.id} 
            className="premium-card p-5 group animate-slide-right flex flex-col gap-5"
            style={{ animationDelay: `${idx * 0.1}s` }}
          >
            <div className="flex gap-5">
              <div className="w-24 h-24 rounded-[2rem] bg-gray-50 flex items-center justify-center p-3 border border-gray-100 group-hover:scale-105 transition-transform duration-500 relative">
                <img src={item.image} alt={item.name} className="max-h-full mix-blend-multiply" />
                {item.daysLeft < 10 && (
                  <div className="absolute -top-2 -right-2 bg-orange-500 text-white text-[9px] font-black px-2 py-1 rounded-full shadow-lg shadow-orange-500/30 flex items-center gap-1">
                    LOW <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></div>
                  </div>
                )}
              </div>
              <div className="flex-1 py-1">
                <p className="text-[10px] text-nykaa-pink font-black uppercase tracking-[0.2em] mb-1">{item.brand}</p>
                <h3 className="text-base font-bold text-gray-900 leading-tight mb-2 line-clamp-1">{item.name}</h3>
                <p className="text-lg font-black text-gray-900">{item.price}</p>
                
                <div className="mt-3 flex items-center gap-2">
                  <div className="flex-1 h-1 bg-gray-100 rounded-full overflow-hidden">
                    <div 
                      className={`h-full rounded-full ${item.daysLeft < 10 ? 'bg-orange-400' : 'bg-emerald-400'}`}
                      style={{ width: `${(item.daysLeft / 30) * 100}%` }}
                    ></div>
                  </div>
                  <span className="text-[10px] font-bold text-gray-400 uppercase">{item.daysLeft}d Left</span>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-[1.5rem] bg-gray-50/50 border border-gray-100 flex justify-between items-center group/sub">
              <div className="flex items-center gap-3">
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${item.isSubscribed ? 'bg-nykaa-pink text-white' : 'bg-white text-gray-400'}`}>
                  <Calendar className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-black text-gray-900 uppercase tracking-tight">Auto-Restock</p>
                  <p className="text-[10px] text-emerald-500 font-bold">Save 5% Extra</p>
                </div>
              </div>
              <button 
                onClick={() => toggleSubscription(item.id)}
                className={`w-12 h-6 rounded-full relative transition-all duration-300 ${item.isSubscribed ? 'bg-nykaa-pink' : 'bg-gray-200 shadow-inner'}`}
              >
                <div className={`w-4.5 h-4.5 bg-white rounded-full absolute top-0.75 transition-all shadow-sm ${item.isSubscribed ? 'right-0.75' : 'left-0.75'}`}></div>
              </button>
            </div>

            <button 
              onClick={() => {
                addToCart(item);
                showSuccess(10, "Added to bag! ✨");
              }}
              className="w-full bg-black text-white font-black text-sm tracking-[0.1em] py-4 rounded-[1.5rem] flex items-center justify-center gap-3 shadow-xl shadow-black/10 hover:bg-nykaa-pink transition-all active:scale-95 group/btn overflow-hidden relative"
            >
              <div className="absolute inset-0 bg-white/10 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700"></div>
              <ShoppingCart className="w-4 h-4" /> REORDER NOW
            </button>
          </div>
        ))}
        </div>

        {/* Info Card */}
        <div className="mt-12 bg-indigo-900 rounded-[3rem] p-8 text-white relative overflow-hidden shadow-2xl shadow-indigo-200">
          <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-6">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <div className="text-center md:text-left flex-1">
              <h3 className="text-xl font-black tracking-tight mb-1">Never run out again.</h3>
              <p className="text-white/70 text-sm">Join 50,000+ members who use Auto-Restock for their daily essentials.</p>
            </div>
            <button className="bg-white text-indigo-900 px-8 py-3 rounded-2xl font-black text-sm uppercase tracking-widest active:scale-95 transition-all">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
