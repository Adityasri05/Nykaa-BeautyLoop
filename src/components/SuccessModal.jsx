import React, { useEffect, useState } from 'react';
import { CheckCircle, X, Sparkles } from 'lucide-react';

export default function SuccessModal({ points, message, onClose }) {
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    setShowConfetti(true);
    // Auto close after some time or just let them click it
    const timer = setTimeout(() => setShowConfetti(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-md p-5 animate-fadeIn">
      <div className="bg-white/90 backdrop-blur-xl rounded-[2rem] p-8 w-full max-w-sm relative text-center shadow-[0_20px_50px_rgba(255,63,108,0.2)] border border-white animate-scaleIn">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-gray-800 bg-gray-100 rounded-full p-1.5 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
        
        {/* Icon */}
        <div className="relative w-24 h-24 mx-auto mb-6 animate-float-up">
          <div className="absolute inset-0 bg-green-100 rounded-full animate-ping opacity-75"></div>
          <div className="relative w-full h-full bg-gradient-to-tr from-green-400 to-emerald-300 rounded-full flex items-center justify-center shadow-lg border-4 border-white">
            <CheckCircle className="w-12 h-12 text-white" />
          </div>
        </div>
        
        {/* Text */}
        <h2 className="text-3xl font-display font-bold text-gray-900 mb-2">Success!</h2>
        <p className="text-gray-500 mb-6 font-medium">{message}</p>
        
        {/* Points Earned Card */}
        <div className="bg-gradient-to-br from-[#fff0f3] to-white border border-nykaa-pink/20 rounded-2xl p-5 mb-8 shadow-sm relative overflow-hidden group">
          <div className="absolute -right-4 -top-4 opacity-10 group-hover:scale-110 transition-transform duration-500">
            <Sparkles className="w-20 h-20 text-nykaa-pink" />
          </div>
          <p className="text-sm font-bold text-nykaa-pink uppercase tracking-wider mb-1">Glow Rewards</p>
          <div className="flex items-center justify-center gap-2">
            <span className="text-4xl font-black text-gray-900 animate-count-up">+{points}</span>
            <span className="text-lg font-bold text-gray-500 mt-2">Pts</span>
          </div>
        </div>
        
        {/* Action Button */}
        <button 
          onClick={onClose}
          className="w-full bg-nykaa-gradient text-white font-bold py-4 rounded-xl hover:shadow-nykaa-lg transition-all active:scale-95 text-lg"
        >
          Awesome
        </button>

        {/* Improved CSS Confetti */}
        {showConfetti && (
          <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-[2rem]">
            {[...Array(20)].map((_, i) => (
              <div 
                key={i}
                className="confetti-piece"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `-10px`,
                  animationDuration: `${Math.random() * 1.5 + 0.8}s`,
                  animationDelay: `${Math.random() * 0.2}s`,
                  backgroundColor: ['#ff3f6c', '#fc2779', '#fcd34d', '#34d399', '#60a5fa'][Math.floor(Math.random() * 5)],
                  transform: `rotate(${Math.random() * 360}deg)`
                }}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
