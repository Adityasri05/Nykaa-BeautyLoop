import React from 'react';
import { Eye, ShoppingBag } from 'lucide-react';

const RECENTLY_VIEWED = [
  {
    id: 201,
    name: "MAC Ruby Woo Lipstick",
    brand: "MAC",
    price: "₹1,750",
    image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&q=80&w=200",
  },
  {
    id: 202,
    name: "Lakme 9to5 Primer + Matte",
    brand: "Lakme",
    price: "₹650",
    image: "https://images.unsplash.com/photo-1599305090598-fe179d501227?auto=format&fit=crop&q=80&w=200",
  },
  {
    id: 203,
    name: "The Ordinary Niacinamide",
    brand: "The Ordinary",
    price: "₹590",
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=200",
  },
  {
    id: 204,
    name: "Forest Essentials Night Cream",
    brand: "Forest Essentials",
    price: "₹1,575",
    image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80&w=200",
  },
];

export default function RecentlyViewed({ addToCart }) {
  return (
    <div>
      <div className="flex items-center gap-2 mb-4">
        <Eye className="w-4 h-4 text-gray-400" />
        <h3 className="font-bold text-gray-900">Recently Viewed</h3>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
        {RECENTLY_VIEWED.map(product => (
          <div key={product.id} className="bg-white border border-gray-100 rounded-2xl p-2.5 shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-gray-50 rounded-xl overflow-hidden aspect-square flex items-center justify-center mb-2">
              <img src={product.image} alt={product.name} className="w-full h-full object-cover mix-blend-multiply" />
            </div>
            <p className="text-[9px] text-gray-400 font-bold uppercase">{product.brand}</p>
            <h4 className="text-[11px] font-semibold text-gray-800 leading-tight h-7 line-clamp-2 mt-0.5">{product.name}</h4>
            <div className="flex justify-between items-center mt-1.5">
              <p className="font-bold text-xs text-gray-900">{product.price}</p>
              <button
                onClick={() => addToCart(product)}
                className="w-6 h-6 bg-black text-white rounded-full flex items-center justify-center hover:bg-nykaa-pink transition-colors"
              >
                <ShoppingBag className="w-3 h-3" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
