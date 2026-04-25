import React from 'react';
import { ChevronLeft, Heart, ShoppingBag, Trash2 } from 'lucide-react';

const WISHLIST = [
  { id: 1, name: "Kay Beauty Liquid Lipstick", brand: "Kay Beauty", price: "₹799", image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&q=80&w=200" },
  { id: 2, name: "L'Oreal Paris Hyaluronic Acid", brand: "L'Oreal", price: "₹499", image: "https://images.unsplash.com/photo-1629198688000-71f23e745b6e?auto=format&fit=crop&q=80&w=200" },
  { id: 3, name: "M.A.C Studio Fix Foundation", brand: "M.A.C", price: "₹2,900", image: "https://images.unsplash.com/photo-1599305090598-fe179d501227?auto=format&fit=crop&q=80&w=200" },
];

export default function Wishlist({ navigate, showSuccess, addToCart }) {
  return (
    <div className="bg-[#fafafa] min-h-full pb-10 animate-pop">
      <header className="px-5 py-4 sticky top-0 bg-white/90 backdrop-blur-md z-10 flex items-center border-b border-gray-100">
        <button onClick={() => navigate('account')} className="p-2 -ml-2 text-gray-800">
          <ChevronLeft className="w-6 h-6" />
        </button>
        <h1 className="text-lg font-bold ml-2">My Wishlist ({WISHLIST.length})</h1>
      </header>

      <div className="p-5 md:p-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {WISHLIST.map(item => (
          <div key={item.id} className="bg-white rounded-3xl p-3 border border-gray-100 shadow-sm relative group">
            <button className="absolute top-2 right-2 p-1.5 bg-white/80 backdrop-blur-sm rounded-full text-gray-400 hover:text-rose-500 shadow-sm transition-colors z-10">
              <Trash2 className="w-3.5 h-3.5" />
            </button>
            <div className="bg-gray-50 rounded-2xl overflow-hidden aspect-square flex items-center justify-center mb-3">
              <img src={item.image} alt={item.name} className="w-full h-full object-cover mix-blend-multiply group-hover:scale-110 transition-transform duration-500" />
            </div>
            <p className="text-[9px] text-gray-400 font-bold uppercase">{item.brand}</p>
            <h4 className="text-xs font-bold text-gray-800 leading-tight h-8 line-clamp-2 mt-0.5">{item.name}</h4>
            <p className="font-black text-sm text-gray-900 mt-2">{item.price}</p>
            <button 
              onClick={() => addToCart(item)}
              className="w-full mt-3 bg-black text-white py-2 rounded-xl text-[10px] font-bold flex items-center justify-center gap-1.5 hover:bg-nykaa-pink transition-colors"
            >
              <ShoppingBag className="w-3 h-3" /> Add to Bag
            </button>
          </div>
        ))}
      </div>

      {WISHLIST.length === 0 && (
        <div className="text-center py-20 px-10">
          <div className="w-20 h-20 bg-rose-50 rounded-full flex items-center justify-center mx-auto mb-6">
            <Heart className="w-10 h-10 text-rose-200" />
          </div>
          <h2 className="text-xl font-bold text-gray-900 mb-2">Your wishlist is empty</h2>
          <p className="text-sm text-gray-500">Save items you love to find them easily and track price drops.</p>
          <button 
            onClick={() => navigate('home')}
            className="mt-8 bg-black text-white px-8 py-3.5 rounded-2xl font-bold shadow-lg"
          >
            Go Shopping
          </button>
        </div>
      )}
    </div>
  );
}
