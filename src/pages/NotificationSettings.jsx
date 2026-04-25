import React, { useState } from 'react';
import { ChevronLeft, Bell, Check, Zap, RotateCcw, Sparkles, Gift } from 'lucide-react';

const PREFERENCES = [
  { id: 'deals', label: 'Flash Deals & Offers', desc: 'Get notified about 2-hour sales', icon: <Zap className="w-5 h-5 text-yellow-500" /> },
  { id: 'refills', label: 'Refill Reminders', desc: 'Smart alerts when products run low', icon: <RotateCcw className="w-5 h-5 text-nykaa-pink" /> },
  { id: 'launches', label: 'New Launches', desc: 'Be the first to try new brands', icon: <Sparkles className="w-5 h-5 text-indigo-500" /> },
  { id: 'rewards', label: 'Reward Updates', desc: 'Point balance & tier status alerts', icon: <Gift className="w-5 h-5 text-emerald-500" /> },
];

export default function NotificationSettings({ navigate }) {
  const [enabled, setEnabled] = useState(['deals', 'refills', 'rewards']);

  const toggle = (id) => {
    setEnabled(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);
  };

  return (
    <div className="bg-white min-h-full pb-10 animate-pop">
      <header className="px-5 py-4 sticky top-0 bg-white/90 backdrop-blur-md z-10 flex items-center border-b border-gray-100">
        <button onClick={() => navigate('home')} className="p-2 -ml-2 text-gray-800">
          <ChevronLeft className="w-6 h-6" />
        </button>
        <h1 className="text-lg font-bold ml-2">Notification Center 🔔</h1>
      </header>

      <div className="p-6">
        <div className="bg-gray-50 rounded-3xl p-6 mb-8 text-center border border-gray-100">
          <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-sm">
            <Bell className="w-8 h-8 text-nykaa-pink" />
          </div>
          <h2 className="text-xl font-bold text-gray-900 mb-2">Reduce Fatigue</h2>
          <p className="text-xs text-gray-500 leading-relaxed">Choose exactly what you want to hear from us. No spam, just beauty.</p>
        </div>

        <div className="space-y-4">
          {PREFERENCES.map(pref => (
            <div
              key={pref.id}
              onClick={() => toggle(pref.id)}
              className={`p-5 rounded-3xl border-2 transition-all cursor-pointer flex items-center gap-4 ${
                enabled.includes(pref.id) ? 'border-nykaa-pink bg-pink-50/30' : 'border-gray-100 bg-white'
              }`}
            >
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm shrink-0">
                {pref.icon}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-sm text-gray-900">{pref.label}</h3>
                <p className="text-[11px] text-gray-500">{pref.desc}</p>
              </div>
              <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                enabled.includes(pref.id) ? 'bg-nykaa-pink border-nykaa-pink' : 'bg-white border-gray-200'
              }`}>
                {enabled.includes(pref.id) && <Check className="w-3.5 h-3.5 text-white stroke-[3px]" />}
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={() => navigate('home')}
          className="w-full mt-10 bg-black text-white font-bold py-4 rounded-2xl shadow-lg hover:bg-nykaa-pink transition-colors"
        >
          Save Preferences
        </button>
      </div>
    </div>
  );
}
