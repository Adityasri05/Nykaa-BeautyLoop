import React from 'react';
import { ShoppingBag, Plus, ArrowRight } from 'lucide-react';

const BUNDLE = {
  main: { name: "Minimalist Serum", price: "₹599", image: "https://images.unsplash.com/photo-1629198688000-71f23e745b6e?auto=format&fit=crop&q=80&w=200" },
  addon: { name: "Sunscreen SPF 50", price: "₹495", image: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?auto=format&fit=crop&q=80&w=200" },
  total: "₹980",
  savings: "₹114 savings"
};

export default function BoughtTogether({ addToCart }) {
  return (
    <div className="bg-gradient-to-br from-gray-900 to-black rounded-[2.5rem] p-6 text-white shadow-xl relative overflow-hidden">
      <div className="flex items-center gap-2 mb-6">
        <ShoppingBag className="w-4 h-4 text-nykaa-pink" />
        <h3 className="font-bold text-sm">Recently Bought Together 🤝</h3>
      </div>

      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-16 h-16 bg-white/10 rounded-2xl p-2 flex items-center justify-center">
            <img src={BUNDLE.main.image} alt={BUNDLE.main.name} className="w-full h-full object-cover rounded-xl" />
          </div>
          <Plus className="w-4 h-4 text-gray-500" />
          <div className="w-16 h-16 bg-white/10 rounded-2xl p-2 flex items-center justify-center">
            <img src={BUNDLE.addon.image} alt={BUNDLE.addon.name} className="w-full h-full object-cover rounded-xl" />
          </div>
        </div>
        <div className="text-right">
          <p className="text-2xl font-black">{BUNDLE.total}</p>
          <p className="text-[10px] text-nykaa-pink font-bold uppercase">{BUNDLE.savings}</p>
        </div>
      </div>

      <button
        onClick={() => addToCart({ id: 'bundle_together', name: "Minimalist Serum + Sunscreen", brand: 'Nykaa Bundle', price: BUNDLE.total, image: BUNDLE.main.image })}
        className="w-full bg-nykaa-pink text-white font-bold py-3.5 rounded-2xl shadow-lg flex items-center justify-center gap-2 hover:bg-[#e0305b] transition-colors"
      >
        Buy Both & Save <ArrowRight className="w-4 h-4" />
      </button>

      <div className="absolute -top-10 -left-10 w-32 h-32 bg-nykaa-pink opacity-10 rounded-full blur-3xl"></div>
    </div>
  );
}
