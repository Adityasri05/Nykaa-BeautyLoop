import React, { useState } from 'react';
import { Sparkles, ShoppingBag, Gift, ArrowRight, RotateCcw } from 'lucide-react';
import { userData, reorderItems, recommendedProducts } from '../data';

export default function Home({ navigate, showSuccess, points }) {
  const itemToReorder = reorderItems[0]; // Example: Cetaphil Facewash

  return (
    <div className="p-5 space-y-6 pb-6 animate-pop">
      
      {/* Header */}
      <header className="flex justify-between items-center pt-2">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Hi {userData.name} ✨</h1>
          <p className="text-gray-500 text-sm mt-1">Ready for your glow up?</p>
        </div>
        <div className="w-10 h-10 bg-gray-100 rounded-full overflow-hidden border border-gray-200">
          <img src={`https://ui-avatars.com/api/?name=${userData.name}&background=ff3f6c&color=fff`} alt="Profile" />
        </div>
      </header>

      {/* Loyalty Points Card */}
      <div 
        onClick={() => navigate('rewards')}
        className="bg-black text-white rounded-3xl p-5 shadow-xl relative overflow-hidden cursor-pointer active:scale-95 transition-transform"
      >
        <div className="relative z-10 flex justify-between items-center">
          <div>
            <p className="text-gray-300 text-sm font-medium flex items-center gap-1.5 mb-1">
              <Gift className="w-4 h-4 text-nykaa-pink" />
              Glow Rewards
            </p>
            <h2 className="text-3xl font-bold">{points} <span className="text-lg font-normal text-gray-400">Pts</span></h2>
          </div>
          <div className="text-right">
            <p className="text-sm font-semibold text-nykaa-pink">{userData.tier}</p>
            <button className="mt-2 text-xs font-semibold bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded-full flex items-center gap-1">
              Explore Rewards <ArrowRight className="w-3 h-3" />
            </button>
          </div>
        </div>
        {/* Decorative circle */}
        <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-nykaa-pink opacity-20 rounded-full blur-2xl"></div>
      </div>

      {/* Reorder Reminder Card */}
      <div className="bg-pink-50 border border-nykaa-pink/20 rounded-3xl p-5 relative">
        <div className="absolute -top-3 -right-2 bg-nykaa-pink text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-sm flex items-center gap-1">
          <RotateCcw className="w-3 h-3" /> Running Low
        </div>
        
        <h3 className="font-bold text-gray-900 mb-3">Reorder Reminder</h3>
        <div className="flex gap-4 items-center">
          <img src={itemToReorder.image} alt="Product" className="w-16 h-16 rounded-xl object-cover bg-white shadow-sm" />
          <div className="flex-1">
            <p className="text-sm font-semibold text-gray-800 leading-tight">{itemToReorder.name}</p>
            <p className="text-xs text-nykaa-pink font-medium mt-1">May run out in {itemToReorder.daysLeft} days</p>
          </div>
        </div>
        <div className="mt-4 flex gap-3">
          <button 
            onClick={() => showSuccess(50)}
            className="flex-1 bg-nykaa-pink text-white font-semibold py-2.5 rounded-xl text-sm shadow-md hover:bg-[#e0305b] transition-colors"
          >
            Reorder Now
          </button>
          <button 
            onClick={() => navigate('reorder')}
            className="flex-1 bg-white border border-gray-200 text-gray-700 font-semibold py-2.5 rounded-xl text-sm hover:bg-gray-50 transition-colors"
          >
            View All
          </button>
        </div>
      </div>

      {/* Recommendations */}
      <div>
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-bold text-gray-900">Recommended for {userData.skinType}</h3>
          <button 
            onClick={() => navigate('recommendations')}
            className="text-nykaa-pink text-sm font-semibold"
          >
            See All
          </button>
        </div>
        
        <div className="flex gap-4 overflow-x-auto no-scrollbar pb-4 -mx-5 px-5">
          {recommendedProducts.slice(0, 2).map(product => (
            <div key={product.id} className="min-w-[140px] bg-white border border-gray-100 rounded-2xl p-3 shadow-sm">
              <div className="relative mb-2 bg-gray-50 rounded-xl overflow-hidden aspect-square flex items-center justify-center">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover mix-blend-multiply" />
                <div className="absolute top-0 left-0 bg-nykaa-pink text-white text-[10px] font-bold px-2 py-0.5 rounded-br-lg">
                  {product.discount}
                </div>
              </div>
              <p className="text-[10px] text-gray-500 font-medium">{product.brand}</p>
              <h4 className="text-xs font-semibold text-gray-800 leading-tight h-8 line-clamp-2 mt-0.5">{product.name}</h4>
              <div className="flex justify-between items-center mt-2">
                <p className="font-bold text-sm text-gray-900">{product.price}</p>
                <button 
                  onClick={() => showSuccess(20)}
                  className="w-7 h-7 bg-black text-white rounded-full flex items-center justify-center hover:bg-nykaa-pink transition-colors"
                >
                  <ShoppingBag className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
