import React, { useState } from 'react';
import { ChevronLeft } from 'lucide-react';
import { userData, recommendedProducts } from '../data';

export default function Recommendations({ navigate, showSuccess, addToCart }) {
  const [addedItems, setAddedItems] = useState({});

  const handleAdd = (product) => {
    setAddedItems({ ...addedItems, [product.id]: true });
    addToCart(product);
    showSuccess(20, "Added to bag! +20 Points");
    // Reset after 3 seconds to allow adding again
    setTimeout(() => {
      setAddedItems(prev => ({ ...prev, [product.id]: false }));
    }, 3000);
  };

  return (
    <div className="bg-white min-h-full pb-6 animate-pop">
      <header className="px-5 py-4 sticky top-0 bg-white/90 backdrop-blur-md z-10 flex items-center border-b border-gray-100">
        <button onClick={() => navigate('home')} className="p-2 -ml-2 text-gray-800">
          <ChevronLeft className="w-6 h-6" />
        </button>
        <h1 className="text-lg font-bold ml-2">Just For You</h1>
      </header>

      <div className="p-5">
        <div className="bg-nykaa-pink/10 text-nykaa-pink px-4 py-3 rounded-2xl mb-6 flex items-center gap-2 font-semibold text-sm">
          <Sparkles className="w-4 h-4 fill-current" /> Curated for {userData.skinType}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {recommendedProducts.map(product => (
            <div key={product.id} className="bg-white border border-gray-100 rounded-3xl p-3 shadow-sm flex flex-col">
              <div className="relative mb-3 bg-gray-50 rounded-2xl overflow-hidden aspect-square flex items-center justify-center p-2">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover mix-blend-multiply" />
                <div className="absolute top-2 left-2 bg-nykaa-pink text-white text-[10px] font-bold px-2 py-1 rounded-full shadow-sm">
                  {product.discount}
                </div>
              </div>
              <div className="flex-1 flex flex-col">
                <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wider mb-1">{product.brand}</p>
                <h4 className="text-xs font-semibold text-gray-900 leading-tight mb-2 line-clamp-2 flex-1">{product.name}</h4>
                <div className="flex items-center gap-2 mb-3">
                  <p className="font-bold text-sm text-gray-900">{product.price}</p>
                  <p className="text-xs text-gray-400 line-through">{product.originalPrice}</p>
                </div>
                <button 
                  onClick={() => !addedItems[product.id] && handleAdd(product)}
                  className={`w-full py-2.5 rounded-xl text-xs font-bold transition-all ${
                    addedItems[product.id] ? 'bg-green-500 text-white' : 'bg-black text-white hover:bg-nykaa-pink'
                  }`}
                >
                  {addedItems[product.id] ? (
                    <span className="flex items-center justify-center gap-1"><Check className="w-4 h-4" /> Added</span>
                  ) : 'Add to Bag'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
