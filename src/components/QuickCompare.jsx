import React from 'react';
import { Scale, Check, X, Star } from 'lucide-react';

const PRODUCTS = [
  {
    id: 'c1',
    name: "Cetaphil Gentle Cleanser",
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=200",
    price: "₹333",
    rating: "4.8",
    type: "All Skin Types",
    feature: "Soap-free",
  },
  {
    id: 'c2',
    name: "Cosrx Low pH Cleanser",
    image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80&w=200",
    price: "₹850",
    rating: "4.7",
    type: "Oily / Sensitive",
    feature: "BHA / Tea Tree",
  }
];

export default function QuickCompare({ addToCart }) {
  return (
    <div className="bg-white border border-gray-100 rounded-[2.5rem] p-6 shadow-sm">
      <div className="flex items-center gap-2 mb-6">
        <Scale className="w-4 h-4 text-nykaa-pink" />
        <h3 className="font-bold text-gray-900">Compare Products ⚖️</h3>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {PRODUCTS.map(p => (
          <div key={p.id} className="text-center">
            <div className="bg-gray-50 rounded-2xl p-4 mb-3 aspect-square flex items-center justify-center">
              <img src={p.image} alt={p.name} className="w-full h-full object-cover mix-blend-multiply" />
            </div>
            <h4 className="text-[11px] font-bold text-gray-900 leading-tight h-7 line-clamp-2 mb-2">{p.name}</h4>
          </div>
        ))}
      </div>

      <div className="mt-4 space-y-3 border-t border-gray-50 pt-4">
        <div className="flex justify-between items-center text-[11px]">
          <span className="font-bold text-gray-900">{PRODUCTS[0].price}</span>
          <span className="text-gray-400 font-medium">Price</span>
          <span className="font-bold text-gray-900">{PRODUCTS[1].price}</span>
        </div>
        <div className="flex justify-between items-center text-[11px]">
          <div className="flex items-center gap-0.5 font-bold text-gray-900">
            <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" /> {PRODUCTS[0].rating}
          </div>
          <span className="text-gray-400 font-medium">Rating</span>
          <div className="flex items-center gap-0.5 font-bold text-gray-900">
            <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" /> {PRODUCTS[1].rating}
          </div>
        </div>
        <div className="flex justify-between items-center text-[11px]">
          <span className="font-bold text-gray-700">{PRODUCTS[0].type}</span>
          <span className="text-gray-400 font-medium">Best For</span>
          <span className="font-bold text-gray-700">{PRODUCTS[1].type}</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 mt-6">
        {PRODUCTS.map(p => (
          <button
            key={p.id}
            onClick={() => addToCart(p)}
            className="bg-black text-white py-2.5 rounded-xl text-[10px] font-bold hover:bg-nykaa-pink transition-colors"
          >
            Add to Bag
          </button>
        ))}
      </div>
    </div>
  );
}
