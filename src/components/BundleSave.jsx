import React from 'react';
import { Package, ShoppingBag, Tag } from 'lucide-react';

const BUNDLES = [
  {
    id: 'b1',
    title: "Daily Glow Kit",
    products: ["Cleanser", "Moisturizer", "Sunscreen SPF 50"],
    originalPrice: "₹1,327",
    bundlePrice: "₹999",
    savings: "₹328",
    image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80&w=300",
    badge: "Bestseller"
  },
  {
    id: 'b2',
    title: "Night Repair Kit",
    products: ["Retinol Serum", "Night Cream", "Eye Cream"],
    originalPrice: "₹2,100",
    bundlePrice: "₹1,599",
    savings: "₹501",
    image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&q=80&w=300",
    badge: "Most Saved"
  },
];

export default function BundleSave({ addToCart }) {
  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Package className="w-4 h-4 text-emerald-600" />
          <h3 className="font-bold text-gray-900">Bundle & Save 📦</h3>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {BUNDLES.map(bundle => (
          <div key={bundle.id} className="bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="relative h-28 overflow-hidden bg-gradient-to-br from-emerald-50 to-teal-50">
              <img src={bundle.image} alt={bundle.title} className="w-full h-full object-cover opacity-60 mix-blend-multiply" />
              <div className="absolute top-3 left-3 bg-emerald-500 text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-sm">
                {bundle.badge}
              </div>
              <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm text-emerald-700 text-xs font-bold px-2.5 py-1 rounded-full border border-emerald-200 flex items-center gap-1">
                <Tag className="w-3 h-3" /> Save {bundle.savings}
              </div>
            </div>
            <div className="p-4">
              <h4 className="font-bold text-sm text-gray-900 mb-1">{bundle.title}</h4>
              <p className="text-[11px] text-gray-500 mb-3">{bundle.products.join(" + ")}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-baseline gap-2">
                  <span className="font-bold text-lg text-gray-900">{bundle.bundlePrice}</span>
                  <span className="text-xs text-gray-400 line-through">{bundle.originalPrice}</span>
                </div>
                <button
                  onClick={() => addToCart({ id: bundle.id, name: bundle.title, brand: 'Bundle', price: bundle.bundlePrice, image: bundle.image })}
                  className="bg-black text-white px-4 py-2 rounded-xl text-xs font-bold hover:bg-nykaa-pink transition-colors flex items-center gap-1.5"
                >
                  <ShoppingBag className="w-3 h-3" /> Add
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
