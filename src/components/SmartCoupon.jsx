import React, { useState } from 'react';
import { Tag, Check, ChevronRight } from 'lucide-react';

const COUPONS = [
  { code: 'GLOW20', discount: '20% off', description: 'On orders above ₹499', minOrder: 499, type: 'best' },
  { code: 'NYKAA150', discount: '₹150 off', description: 'On orders above ₹999', minOrder: 999, type: 'value' },
  { code: 'FREESHIP', discount: 'Free Delivery', description: 'No minimum order', minOrder: 0, type: 'shipping' },
];

export default function SmartCoupon() {
  const [applied, setApplied] = useState(null);

  const handleApply = (code) => {
    setApplied(code);
    setTimeout(() => setApplied(null), 3000);
  };

  return (
    <div className="bg-gradient-to-r from-yellow-50 to-amber-50 border border-yellow-200 rounded-3xl p-5 shadow-sm">
      <div className="flex items-center gap-2 mb-1">
        <Tag className="w-4 h-4 text-amber-600" />
        <h3 className="font-bold text-sm text-gray-900">Smart Coupons 🎟️</h3>
      </div>
      <p className="text-[10px] text-gray-500 mb-4 ml-6">Best coupon auto-recommended for you</p>

      <div className="space-y-2.5">
        {COUPONS.map((coupon, i) => (
          <div
            key={coupon.code}
            className={`flex items-center gap-3 p-3 rounded-2xl border-2 transition-all ${
              i === 0 ? 'border-amber-300 bg-white shadow-sm' : 'border-transparent bg-white/60'
            }`}
          >
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <span className="font-mono font-bold text-sm text-amber-700">{coupon.code}</span>
                {i === 0 && (
                  <span className="text-[9px] font-bold bg-amber-500 text-white px-1.5 py-0.5 rounded-full">BEST</span>
                )}
              </div>
              <p className="text-[11px] text-gray-600 font-medium mt-0.5">{coupon.discount} · {coupon.description}</p>
            </div>
            <button
              onClick={() => handleApply(coupon.code)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold shrink-0 transition-all ${
                applied === coupon.code
                  ? 'bg-green-100 text-green-700'
                  : 'bg-amber-100 text-amber-700 hover:bg-amber-200'
              }`}
            >
              {applied === coupon.code ? <><Check className="w-3 h-3 inline" /> Applied</> : 'Apply'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
