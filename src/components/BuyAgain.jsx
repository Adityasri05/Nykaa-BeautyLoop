import React from 'react';
import { RotateCcw, ShoppingBag } from 'lucide-react';

const PAST_PURCHASES = [
  {
    id: 301,
    name: "Cetaphil Gentle Skin Cleanser",
    brand: "Cetaphil",
    price: "₹333",
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=200",
    lastOrdered: "12 Apr 2025",
  },
  {
    id: 302,
    name: "Minimalist 10% Niacinamide Serum",
    brand: "Minimalist",
    price: "₹599",
    image: "https://images.unsplash.com/photo-1629198688000-71f23e745b6e?auto=format&fit=crop&q=80&w=200",
    lastOrdered: "28 Mar 2025",
  },
  {
    id: 303,
    name: "Dot & Key Sunscreen SPF 50",
    brand: "Dot & Key",
    price: "₹495",
    image: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?auto=format&fit=crop&q=80&w=200",
    lastOrdered: "15 Mar 2025",
  },
];

export default function BuyAgain({ addToCart }) {
  return (
    <div>
      <div className="flex items-center gap-2 mb-4">
        <RotateCcw className="w-4 h-4 text-nykaa-pink" />
        <h3 className="font-bold text-gray-900">Buy Again in 1 Tap</h3>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
        {PAST_PURCHASES.map(item => (
          <div key={item.id} className="bg-white border border-gray-100 rounded-2xl p-3 shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-gray-50 rounded-xl overflow-hidden aspect-square flex items-center justify-center mb-2">
              <img src={item.image} alt={item.name} className="w-full h-full object-cover mix-blend-multiply" />
            </div>
            <p className="text-[9px] text-gray-400 font-bold uppercase">{item.brand}</p>
            <h4 className="text-[11px] font-semibold text-gray-800 leading-tight h-7 line-clamp-2 mt-0.5">{item.name}</h4>
            <p className="text-[10px] text-gray-400 mt-1">Last: {item.lastOrdered}</p>
            <button
              onClick={() => addToCart(item)}
              className="w-full mt-2 bg-nykaa-pink text-white font-bold py-2 rounded-xl text-[11px] flex items-center justify-center gap-1.5 hover:bg-[#e0305b] transition-colors shadow-sm"
            >
              <ShoppingBag className="w-3 h-3" /> Buy Again
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
