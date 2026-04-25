import React from 'react';
import { Gift, ShoppingBag } from 'lucide-react';

export default function GiftMeter({ cartTotal = 701 }) {
  const giftThreshold = 999;
  const remaining = Math.max(0, giftThreshold - cartTotal);
  const progress = Math.min((cartTotal / giftThreshold) * 100, 100);
  const isUnlocked = remaining <= 0;

  return (
    <div className={`rounded-3xl p-5 border shadow-sm transition-all ${
      isUnlocked 
        ? 'bg-gradient-to-r from-green-50 to-emerald-50 border-green-200' 
        : 'bg-gradient-to-r from-pink-50 to-purple-50 border-pink-100'
    }`}>
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
            isUnlocked ? 'bg-green-100' : 'bg-pink-100'
          }`}>
            <Gift className={`w-5 h-5 ${isUnlocked ? 'text-green-600' : 'text-nykaa-pink'}`} />
          </div>
          <div>
            <h3 className="font-bold text-sm text-gray-900">
              {isUnlocked ? '🎉 Gift Unlocked!' : 'Surprise Gift 🎁'}
            </h3>
            <p className="text-[10px] text-gray-500">
              {isUnlocked ? 'Free deluxe sample with your order!' : `Add ₹${remaining} more to unlock`}
            </p>
          </div>
        </div>
        {!isUnlocked && (
          <span className="text-xs font-bold text-nykaa-pink bg-nykaa-pink/10 px-2.5 py-1 rounded-full">
            ₹{cartTotal}/₹{giftThreshold}
          </span>
        )}
      </div>

      {/* Progress Bar */}
      <div className="h-2.5 bg-white/80 rounded-full overflow-hidden border border-gray-200">
        <div
          className={`h-full rounded-full transition-all duration-700 ease-out ${
            isUnlocked ? 'bg-green-500' : 'bg-nykaa-gradient'
          }`}
          style={{ width: `${progress}%` }}
        />
      </div>

      {!isUnlocked && (
        <button className="w-full mt-3 bg-white border border-gray-200 text-gray-800 font-semibold py-2 rounded-xl text-xs hover:bg-gray-50 transition-colors flex items-center justify-center gap-1.5">
          <ShoppingBag className="w-3.5 h-3.5" /> Add more items
        </button>
      )}
    </div>
  );
}
