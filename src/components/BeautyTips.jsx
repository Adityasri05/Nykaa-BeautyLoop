import React from 'react';
import { Lightbulb, ArrowRight } from 'lucide-react';

const TIPS = [
  {
    id: 1,
    title: "How to Layer Skincare",
    subtitle: "Cleanser → Toner → Serum → Moisturizer → SPF",
    emoji: "🧴",
    color: "from-blue-50 to-cyan-50",
    borderColor: "border-blue-100",
  },
  {
    id: 2,
    title: "Sunscreen Tips",
    subtitle: "Reapply every 2 hours. Use 2-finger rule for face.",
    emoji: "☀️",
    color: "from-yellow-50 to-orange-50",
    borderColor: "border-yellow-100",
  },
  {
    id: 3,
    title: "Niacinamide + Vitamin C",
    subtitle: "Use at different times for best results. Never mix!",
    emoji: "⚗️",
    color: "from-purple-50 to-pink-50",
    borderColor: "border-purple-100",
  },
  {
    id: 4,
    title: "Double Cleansing",
    subtitle: "Oil cleanser first, then water-based. Best for PM routine.",
    emoji: "🫧",
    color: "from-emerald-50 to-teal-50",
    borderColor: "border-emerald-100",
  },
];

export default function BeautyTips() {
  return (
    <div>
      <div className="flex items-center gap-2 mb-4">
        <Lightbulb className="w-4 h-4 text-amber-500" />
        <h3 className="font-bold text-gray-900">Beauty Tips 📱</h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {TIPS.map(tip => (
          <div
            key={tip.id}
            className={`bg-gradient-to-br ${tip.color} border ${tip.borderColor} rounded-2xl p-4 cursor-pointer hover:shadow-md transition-shadow group`}
          >
            <span className="text-2xl mb-2 block">{tip.emoji}</span>
            <h4 className="font-bold text-sm text-gray-900 mb-1">{tip.title}</h4>
            <p className="text-[11px] text-gray-600 leading-relaxed">{tip.subtitle}</p>
            <div className="flex items-center gap-1 text-[10px] font-bold text-nykaa-pink mt-3 group-hover:translate-x-1 transition-transform">
              Read more <ArrowRight className="w-3 h-3" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
