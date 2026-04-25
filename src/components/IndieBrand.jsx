import React from 'react';
import { Sparkles, ShoppingBag, Leaf } from 'lucide-react';

export default function IndieBrand({ addToCart }) {
  const brand = {
    name: "Plum Goodness",
    tagline: "100% Vegan · Cruelty Free",
    product: "Green Tea Renewed Clarity Night Gel",
    price: "₹475",
    originalPrice: "₹550",
    discount: "14% Off",
    why: "Matches your Oily Skin profile",
    image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&q=80&w=300",
    logo: "🌿",
  };

  return (
    <div className="bg-gradient-to-br from-emerald-50 via-white to-lime-50 border border-emerald-100 rounded-3xl p-5 shadow-sm relative overflow-hidden">
      <div className="absolute top-3 right-3 bg-emerald-500 text-white text-[10px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1 shadow-sm">
        <Leaf className="w-3 h-3" /> Indie Brand
      </div>

      <div className="flex items-center gap-2 mb-3">
        <span className="text-2xl">{brand.logo}</span>
        <div>
          <h3 className="font-bold text-sm text-gray-900">Try Something New 🌟</h3>
          <p className="text-[10px] text-gray-500">{brand.tagline}</p>
        </div>
      </div>

      <div className="flex gap-4 items-center">
        <img src={brand.image} alt={brand.product} className="w-20 h-20 rounded-2xl object-cover bg-white shadow-sm" />
        <div className="flex-1 min-w-0">
          <p className="text-[10px] text-emerald-600 font-bold uppercase">{brand.name}</p>
          <p className="text-sm font-semibold text-gray-900 leading-tight truncate">{brand.product}</p>
          <div className="flex items-center gap-2 mt-1">
            <span className="font-bold text-sm">{brand.price}</span>
            <span className="text-xs text-gray-400 line-through">{brand.originalPrice}</span>
            <span className="text-[10px] font-bold text-emerald-600 bg-emerald-100 px-1.5 py-0.5 rounded-full">{brand.discount}</span>
          </div>
          <p className="text-[10px] text-nykaa-pink font-medium mt-1 flex items-center gap-1">
            <Sparkles className="w-3 h-3" /> {brand.why}
          </p>
        </div>
      </div>

      <button
        onClick={() => addToCart({ id: 'indie_1', name: brand.product, brand: brand.name, price: brand.price, image: brand.image })}
        className="w-full mt-4 bg-emerald-600 text-white font-bold py-2.5 rounded-xl text-sm shadow-md hover:bg-emerald-700 transition-colors flex items-center justify-center gap-2"
      >
        <ShoppingBag className="w-4 h-4" /> Try This Brand
      </button>
    </div>
  );
}
