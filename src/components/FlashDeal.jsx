import React, { useState, useEffect } from 'react';
import { Zap, Clock } from 'lucide-react';

const FLASH_DEALS = [
  {
    id: 1,
    name: "Maybelline Fit Me Foundation",
    brand: "Maybelline",
    price: "₹349",
    originalPrice: "₹599",
    discount: "42% Off",
    image: "https://images.unsplash.com/photo-1599305090598-fe179d501227?auto=format&fit=crop&q=80&w=200",
    endTime: 2 * 60 * 60, // 2 hours in seconds
  },
  {
    id: 2,
    name: "L'Oreal Paris Hyaluronic Acid Serum",
    brand: "L'Oreal",
    price: "₹599",
    originalPrice: "₹999",
    discount: "40% Off",
    image: "https://images.unsplash.com/photo-1629198688000-71f23e745b6e?auto=format&fit=crop&q=80&w=200",
    endTime: 1 * 60 * 60 + 30 * 60, // 1.5 hours
  },
];

export default function FlashDeal({ addToCart }) {
  const [timeLeft, setTimeLeft] = useState(FLASH_DEALS[0].endTime);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
  };

  const deal = FLASH_DEALS[0];

  return (
    <div className="bg-gradient-to-r from-orange-50 to-red-50 border border-orange-200 rounded-3xl p-5 relative overflow-hidden">
      <div className="absolute top-0 right-0 bg-red-500 text-white text-[10px] font-bold px-3 py-1.5 rounded-bl-2xl flex items-center gap-1">
        <Zap className="w-3 h-3 fill-current" /> FLASH DEAL
      </div>

      <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
        <Clock className="w-4 h-4 text-red-500" />
        Ends in
        <span className="font-mono text-red-500 bg-red-100 px-2 py-0.5 rounded-lg text-sm tracking-wider">
          {formatTime(timeLeft)}
        </span>
      </h3>

      <div className="flex gap-4 items-center">
        <img src={deal.image} alt={deal.name} className="w-16 h-16 rounded-xl object-cover bg-white shadow-sm" />
        <div className="flex-1 min-w-0">
          <p className="text-[10px] text-gray-500 font-bold uppercase">{deal.brand}</p>
          <p className="text-sm font-semibold text-gray-900 leading-tight truncate">{deal.name}</p>
          <div className="flex items-center gap-2 mt-1">
            <span className="font-bold text-sm text-gray-900">{deal.price}</span>
            <span className="text-xs text-gray-400 line-through">{deal.originalPrice}</span>
            <span className="text-[10px] font-bold text-red-500 bg-red-100 px-1.5 py-0.5 rounded-full">{deal.discount}</span>
          </div>
        </div>
      </div>

      <button
        onClick={() => addToCart(deal)}
        className="w-full mt-4 bg-red-500 text-white font-bold py-2.5 rounded-xl text-sm shadow-md hover:bg-red-600 transition-colors flex items-center justify-center gap-2"
      >
        <Zap className="w-4 h-4 fill-current" /> Grab Deal Now
      </button>
    </div>
  );
}
