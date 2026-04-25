import React from 'react';
import { Home, Star, ShoppingBag, User } from 'lucide-react';

export default function BottomNav({ currentScreen, navigate }) {
  const navItems = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'rewards', icon: Star, label: 'Rewards' },
    { id: 'reorder', icon: ShoppingBag, label: 'Reorder' },
    { id: 'profile', icon: User, label: 'Profile' },
  ];

  return (
    <div className="absolute bottom-0 w-full bg-white/90 backdrop-blur-md border-t border-gray-100 pb-safe z-50">
      <div className="flex justify-around items-center h-16">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentScreen === item.id;
          return (
            <button
              key={item.id}
              onClick={() => navigate(item.id)}
              className={`flex flex-col items-center justify-center w-full h-full space-y-1 transition-colors ${
                isActive ? 'text-nykaa-pink' : 'text-gray-400 hover:text-gray-600'
              }`}
            >
              <Icon className={`w-6 h-6 ${isActive ? 'fill-nykaa-pink/20' : ''}`} strokeWidth={isActive ? 2.5 : 2} />
              <span className={`text-[10px] font-medium ${isActive ? 'font-bold' : ''}`}>
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
