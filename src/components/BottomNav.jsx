import React from 'react';
import { Home, Star, ShoppingBag, User, Compass, ShoppingCart } from 'lucide-react';

export default function BottomNav({ currentScreen, navigate, cartCount }) {
  const navItems = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'hub', icon: Compass, label: 'Hub' },
    { id: 'cart', icon: ShoppingCart, label: 'Bag', count: cartCount },
    { id: 'rewards', icon: Star, label: 'Rewards' },
    { id: 'account', icon: User, label: 'Profile' },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 w-full bg-white/95 backdrop-blur-md border-t border-gray-100 z-50" style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}>
      <div className="flex justify-around items-center h-16 max-w-xl mx-auto">
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
              <div className="relative">
                <Icon className={`w-6 h-6 ${isActive ? 'fill-nykaa-pink/20' : ''}`} strokeWidth={isActive ? 2.5 : 2} />
                {item.count > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 bg-nykaa-pink text-white text-[8px] font-bold w-4 h-4 rounded-full flex items-center justify-center border border-white">
                    {item.count}
                  </span>
                )}
              </div>
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
