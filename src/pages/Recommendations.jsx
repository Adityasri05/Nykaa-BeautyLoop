import React, { useState } from 'react';
import { 
  ChevronLeft, Sparkles, Check, ShoppingBag, 
  ArrowRight, Star, Heart, TrendingUp 
} from 'lucide-react';
import { userData, recommendedProducts } from '../data';

export default function Recommendations({ navigate, showSuccess, addToCart }) {
  const [addedItems, setAddedItems] = useState({});

  const handleAdd = (product) => {
    setAddedItems({ ...addedItems, [product.id]: true });
    addToCart(product);
    showSuccess(20, "Curated item added! ✨");
    setTimeout(() => {
      setAddedItems(prev => ({ ...prev, [product.id]: false }));
    }, 3000);
  };

  return (
    <div className="bg-[#faf7f5] min-h-full pb-32 relative overflow-hidden">
      {/* Premium background gradients */}
      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-nykaa-pink/5 to-transparent -z-10"></div>
      <div className="absolute -left-20 top-40 w-80 h-80 bg-blue-400/5 rounded-full blur-[100px] -z-10"></div>

      <header className="px-6 py-6 sticky top-0 bg-white/80 backdrop-blur-xl z-30 flex items-center justify-between border-b border-gray-100">
        <div className="flex items-center gap-4">
          <button 
            onClick={() => navigate('home')} 
            className="w-10 h-10 flex items-center justify-center bg-white rounded-xl text-gray-800 shadow-sm border border-gray-100 active:scale-90 transition-all"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <div>
            <h1 className="text-xl font-black text-gray-900 tracking-tight">Curated For You</h1>
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-nykaa-pink flex items-center gap-1.5">
              <Sparkles className="w-3 h-3 fill-current" /> AI Beauty Picks
            </p>
          </div>
        </div>
        <div className="flex gap-2">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-400 shadow-sm border border-gray-100">
            <Heart className="w-5 h-5" />
          </div>
        </div>
      </header>

      <div className="p-6 md:p-10">
        {/* Personalization Banner */}
        <div className="glass-premium p-6 mb-10 flex items-center justify-between border-nykaa-pink/20 bg-gradient-to-br from-white to-pink-50/30 overflow-hidden relative group">
          <div className="absolute -right-6 -top-6 w-24 h-24 bg-nykaa-pink/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-1000"></div>
          <div className="flex items-center gap-5 relative z-10">
            <div className="w-14 h-14 bg-nykaa-gradient rounded-[1.25rem] flex items-center justify-center shadow-lg shadow-pink-500/20">
              <Star className="w-7 h-7 text-white fill-white animate-pulse" />
            </div>
            <div>
              <h3 className="text-lg font-black text-gray-900 leading-tight">Optimized for {userData.skinType}</h3>
              <p className="text-xs text-gray-500 font-medium">Based on your recent concerns: <span className="text-nykaa-pink">Hydration</span></p>
            </div>
          </div>
          <button className="hidden md:block bg-black text-white px-6 py-3 rounded-2xl font-black text-[10px] uppercase tracking-widest active:scale-95 transition-all">
            Update Profile
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-10">
          {recommendedProducts.map((product, idx) => (
            <div 
              key={product.id} 
              className="group flex flex-col animate-scaleIn"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="relative mb-5 bg-white rounded-[2.5rem] overflow-hidden aspect-[4/5] flex items-center justify-center p-4 shadow-sm border border-gray-100 group-hover:shadow-2xl group-hover:shadow-pink-100/50 group-hover:-translate-y-2 transition-all duration-500">
                <img src={product.image} alt={product.name} className="w-full h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-700" />
                
                {/* Product Overlays */}
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  <div className="bg-nykaa-gradient text-white text-[10px] font-black px-3 py-1.5 rounded-full shadow-lg shadow-pink-500/20 uppercase tracking-widest">
                    {product.discount}
                  </div>
                  <div className="bg-black/80 backdrop-blur-md text-white text-[10px] font-black px-3 py-1.5 rounded-full uppercase tracking-widest flex items-center gap-1">
                    <TrendingUp className="w-3 h-3" /> BESTSELLER
                  </div>
                </div>

                <button className="absolute top-4 right-4 w-10 h-10 bg-white/80 backdrop-blur-md rounded-full shadow-sm flex items-center justify-center text-gray-400 hover:text-nykaa-pink transition-all opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0">
                  <Heart className="w-5 h-5" />
                </button>
              </div>
              
              <div className="px-2 flex-1 flex flex-col">
                <p className="text-[10px] text-nykaa-pink font-black uppercase tracking-[0.25em] mb-1.5">{product.brand}</p>
                <h4 className="text-sm font-bold text-gray-900 leading-snug mb-3 line-clamp-2 flex-1 tracking-tight">{product.name}</h4>
                
                <div className="flex items-center gap-3 mb-5">
                  <p className="font-black text-lg text-gray-900">{product.price}</p>
                  <p className="text-xs text-gray-400 line-through font-bold">{product.originalPrice}</p>
                </div>

                <button 
                  onClick={() => !addedItems[product.id] && handleAdd(product)}
                  className={`w-full py-4 rounded-[1.5rem] text-[10px] font-black uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-2 shadow-lg active:scale-95 ${
                    addedItems[product.id] 
                    ? 'bg-emerald-500 text-white shadow-emerald-500/20' 
                    : 'bg-black text-white hover:bg-nykaa-pink shadow-black/10'
                  }`}
                >
                  {addedItems[product.id] ? (
                    <>
                      <Check className="w-4 h-4" strokeWidth={3} /> ADDED
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="w-4 h-4" /> ADD TO BAG
                    </>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Explore more section */}
        <div className="mt-20 text-center">
          <div className="w-20 h-20 bg-white rounded-[2rem] shadow-xl shadow-gray-100 flex items-center justify-center mx-auto mb-6 border border-gray-50">
            <TrendingUp className="w-10 h-10 text-nykaa-pink" />
          </div>
          <h2 className="text-2xl font-black text-gray-900 mb-2 tracking-tighter">Want more recommendations?</h2>
          <p className="text-gray-500 text-sm mb-10 max-w-xs mx-auto font-medium">Complete more missions to unlock exclusive AI-curated beauty boxes.</p>
          <button 
            onClick={() => navigate('rewards')}
            className="border-2 border-black text-black px-12 py-5 rounded-[2rem] font-black text-[10px] uppercase tracking-[0.2em] hover:bg-black hover:text-white transition-all active:scale-95 flex items-center gap-3 mx-auto"
          >
            GO TO MISSIONS <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
