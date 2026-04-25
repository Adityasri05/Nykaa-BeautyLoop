import React, { useState } from 'react';
import { ChevronLeft, RefreshCw, ShoppingCart } from 'lucide-react';
import { reorderItems } from '../data';

export default function Reorder({ navigate, showSuccess }) {
  const [items, setItems] = useState(reorderItems);

  const toggleSubscription = (id) => {
    setItems(items.map(item => 
      item.id === id ? { ...item, isSubscribed: !item.isSubscribed } : item
    ));
    // Optional: show mini success for sub toggle
  };

  return (
    <div className="bg-white min-h-full pb-6 animate-pop">
      <header className="px-5 py-4 sticky top-0 bg-white/90 backdrop-blur-md z-10 flex items-center border-b border-gray-100">
        <button onClick={() => navigate('home')} className="p-2 -ml-2 text-gray-800">
          <ChevronLeft className="w-6 h-6" />
        </button>
        <h1 className="text-lg font-bold ml-2">Quick Reorder</h1>
      </header>

      <div className="p-5 md:p-8">
        <p className="text-sm text-gray-500 mb-5">Products you've bought before, ready to restock.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
        {items.map(item => (
          <div key={item.id} className="border border-gray-100 rounded-3xl p-4 shadow-sm flex flex-col gap-4">
            <div className="flex gap-4">
              <div className="w-20 h-20 rounded-2xl bg-gray-50 flex items-center justify-center p-2 border border-gray-100">
                <img src={item.image} alt={item.name} className="max-h-full mix-blend-multiply" />
              </div>
              <div className="flex-1">
                <p className="text-xs text-gray-500 font-medium mb-0.5">{item.brand}</p>
                <h3 className="text-sm font-semibold text-gray-900 leading-tight mb-2">{item.name}</h3>
                <p className="text-sm font-bold">{item.price}</p>
                {item.daysLeft < 10 && (
                  <p className="text-xs text-orange-500 font-semibold mt-1">Running low (Est. {item.daysLeft} days left)</p>
                )}
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-3 flex justify-between items-center">
              <div>
                <p className="text-xs font-bold text-gray-800">Monthly Auto-Reorder</p>
                <p className="text-[10px] text-gray-500">Save 5% on subscriptions</p>
              </div>
              <button 
                onClick={() => toggleSubscription(item.id)}
                className={`w-12 h-6 rounded-full relative transition-colors ${item.isSubscribed ? 'bg-nykaa-pink' : 'bg-gray-300'}`}
              >
                <div className={`w-5 h-5 bg-white rounded-full absolute top-0.5 transition-transform ${item.isSubscribed ? 'translate-x-6.5 left-0.5' : 'left-0.5'}`}></div>
              </button>
            </div>

            <button 
              onClick={() => showSuccess(50)}
              className="w-full bg-black text-white font-semibold py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors"
            >
              <ShoppingCart className="w-4 h-4" /> 1-Click Reorder
            </button>
          </div>
        ))}
        </div>
      </div>
    </div>
  );
}
