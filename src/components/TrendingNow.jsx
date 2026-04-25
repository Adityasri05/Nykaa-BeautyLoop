import React from 'react';
import { TrendingUp, Heart, ShoppingBag } from 'lucide-react';

const TRENDING = [
  {
    id: 401,
    name: "Laneige Lip Sleeping Mask",
    brand: "Laneige",
    price: "₹1,350",
    saves: "4.2K saves",
    image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&q=80&w=200",
    tag: "Most Saved"
  },
  {
    id: 402,
    name: "Beauty of Joseon Sunscreen",
    brand: "Beauty of Joseon",
    price: "₹890",
    saves: "3.8K saves",
    image: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?auto=format&fit=crop&q=80&w=200",
    tag: "Trending"
  },
  {
    id: 403,
    name: "Innisfree Green Tea Serum",
    brand: "Innisfree",
    price: "₹1,100",
    saves: "2.9K saves",
    image: "https://images.unsplash.com/photo-1629198688000-71f23e745b6e?auto=format&fit=crop&q=80&w=200",
    tag: "Hot Pick"
  },
];

export default function TrendingNow({ addToCart }) {
  return (
    <div>
      <div className="flex items-center gap-2 mb-4">
        <TrendingUp className="w-4 h-4 text-rose-500" />
        <h3 className="font-bold text-gray-900">Trending Among Users Like You 👯</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {TRENDING.map((item, i) => (
          <div
            key={item.id}
            className="flex items-center gap-4 bg-white border border-gray-100 rounded-2xl p-3 shadow-sm hover:shadow-md transition-shadow animate-slide-right"
            style={{ animationDelay: `${i * 0.08}s` }}
          >
            <div className="relative w-14 h-14 rounded-xl overflow-hidden bg-gray-50 shrink-0">
              <img src={item.image} alt={item.name} className="w-full h-full object-cover mix-blend-multiply" />
              <div className="absolute bottom-0 left-0 right-0 bg-nykaa-pink/90 text-white text-[8px] font-bold text-center py-0.5">
                {item.tag}
              </div>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[9px] text-gray-400 font-bold uppercase">{item.brand}</p>
              <p className="text-xs font-semibold text-gray-900 truncate">{item.name}</p>
              <div className="flex items-center gap-2 mt-0.5">
                <span className="font-bold text-sm text-gray-900">{item.price}</span>
                <span className="text-[10px] text-rose-500 flex items-center gap-0.5">
                  <Heart className="w-2.5 h-2.5 fill-current" /> {item.saves}
                </span>
              </div>
            </div>
            <button
              onClick={() => addToCart(item)}
              className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center hover:bg-nykaa-pink transition-colors shrink-0"
            >
              <ShoppingBag className="w-3.5 h-3.5" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
