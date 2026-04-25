import React from 'react';
import { Flame, Gift, Check } from 'lucide-react';

export default function BeautyStreak() {
  const streakDays = 5;
  const weekDays = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
  const completed = [true, true, true, true, true, false, false]; // 5 day streak

  return (
    <div className="bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 border border-orange-100 rounded-3xl p-5 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
            <Flame className="w-5 h-5 text-orange-500 fill-current" />
          </div>
          <div>
            <h3 className="font-bold text-gray-900 text-sm">{streakDays}-Day Streak! 🔥</h3>
            <p className="text-[10px] text-gray-500">2 more days for bonus reward</p>
          </div>
        </div>
        <div className="bg-white border border-orange-200 rounded-full p-2 shadow-sm animate-bounce-gentle">
          <Gift className="w-5 h-5 text-nykaa-pink" />
        </div>
      </div>

      <div className="flex justify-between gap-1">
        {weekDays.map((day, i) => (
          <div key={i} className="flex flex-col items-center gap-1.5">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                completed[i]
                  ? 'bg-gradient-to-br from-orange-400 to-nykaa-pink text-white shadow-md scale-105'
                  : 'bg-gray-100 text-gray-400 border border-gray-200'
              }`}
            >
              {completed[i] ? <Check className="w-4 h-4" /> : i + 1}
            </div>
            <span className={`text-[10px] font-medium ${completed[i] ? 'text-orange-600' : 'text-gray-400'}`}>
              {day}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
