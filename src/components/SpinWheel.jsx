import React, { useState, useEffect } from 'react';
import { X, Gift, Sparkles, Zap, Star, Trophy } from 'lucide-react';

const REWARDS = [
  { label: '+50 Pts', color: '#ff3f6c', value: 50, type: 'points' },
  { label: 'Free Ship', color: '#10b981', value: 0, type: 'shipping' },
  { label: '₹100 Off', color: '#8b5cf6', value: 100, type: 'coupon' },
  { label: '+20 Pts', color: '#ff7eb3', value: 20, type: 'points' },
  { label: 'Mystery Box', color: '#f59e0b', value: 75, type: 'mystery' },
  { label: '₹50 Off', color: '#ff7eb3', value: 50, type: 'coupon' },
  { label: '+100 Pts', color: '#ff3f6c', value: 100, type: 'points' },
  { label: '2X Points', color: '#3b82f6', value: 0, type: 'multiplier' },
];

export default function SpinWheel({ onClose, onReward }) {
  const [spinning, setSpinning] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [result, setResult] = useState(null);
  const [showConfetti, setShowConfetti] = useState(false);

  const spin = () => {
    if (spinning || result) return;
    setSpinning(true);
    setResult(null);

    const winIndex = Math.floor(Math.random() * REWARDS.length);
    const segmentAngle = 360 / REWARDS.length;
    const extraSpins = 360 * 8; // 8 full rotations for drama
    const targetAngle = extraSpins + (360 - winIndex * segmentAngle - segmentAngle / 2);

    // Use requestAnimationFrame to ensure the transition is applied before transform
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setRotation(targetAngle);
      });
    });

    setTimeout(() => {
      setSpinning(false);
      setResult(REWARDS[winIndex]);
      setShowConfetti(true);
    }, 5000);
  };

  const segmentAngle = 360 / REWARDS.length;

  return (
    <div className="fixed inset-0 z-[500] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-md" onClick={!spinning ? onClose : undefined}></div>
      
      {/* Confetti pieces */}
      {showConfetti && Array.from({ length: 40 }).map((_, i) => (
        <div 
          key={i}
          className="confetti-piece"
          style={{
            left: `${Math.random() * 100}%`,
            backgroundColor: ['#ff3f6c', '#ff7eb3', '#f59e0b', '#10b981', '#3b82f6'][i % 5],
            animationDelay: `${Math.random() * 1}s`,
            width: `${Math.random() * 10 + 5}px`,
            height: `${Math.random() * 10 + 5}px`,
          }}
        ></div>
      ))}

      <div className="relative z-10 w-full max-w-[400px] animate-scaleIn">
        {/* Header Elements */}
        <div className="absolute -top-12 left-1/2 -translate-x-1/2 flex items-center gap-2 whitespace-nowrap">
          <div className="bg-nykaa-gradient p-2 rounded-xl shadow-lg animate-bounce-gentle">
            <Trophy className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-white text-2xl font-black italic tracking-tighter">LUCKY SPIN</h2>
        </div>

        {/* Main Card */}
        <div className="bg-white rounded-[3rem] p-8 shadow-[0_30px_100px_-20px_rgba(0,0,0,0.5)] border-t border-white/20 relative overflow-hidden">
          <div className="absolute -right-20 -top-20 w-40 h-40 bg-nykaa-pink/5 rounded-full blur-3xl"></div>
          
          <button 
            onClick={onClose} 
            className="absolute top-6 right-6 w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center text-gray-400 hover:bg-gray-100 transition-all z-20"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="text-center mb-10">
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-nykaa-pink mb-1">Daily Opportunity</p>
            <h3 className="text-xl font-black text-gray-900 tracking-tight leading-none">Win Premium Rewards</h3>
          </div>

          {/* Wheel Section */}
          <div className="relative w-[300px] h-[300px] mx-auto mb-10">
            {/* Pointer Pin */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-30 filter drop-shadow-lg">
              <div className="w-10 h-12 bg-white rounded-t-full rounded-b-[40%] shadow-xl flex items-center justify-center">
                 <div className="w-4 h-4 bg-nykaa-pink rounded-full shadow-inner animate-pulse"></div>
              </div>
            </div>

            {/* Outer Glow Ring */}
            <div className="absolute inset-0 rounded-full border-[10px] border-gray-900 shadow-[0_0_40px_rgba(255,63,108,0.2)] z-10 overflow-hidden">
               {/* Lights */}
               {Array.from({ length: 12 }).map((_, i) => (
                 <div 
                   key={i}
                   className="absolute w-2 h-2 bg-white rounded-full shadow-[0_0_10px_white] animate-pulse"
                   style={{
                     left: '50%',
                     top: '50%',
                     transform: `rotate(${i * 30}deg) translate(140px) rotate(-${i * 30}deg)`,
                     animationDelay: `${i * 0.1}s`
                   }}
                 ></div>
               ))}
            </div>

            {/* The Wheel */}
            <div
              className="w-full h-full rounded-full border-4 border-white overflow-hidden relative shadow-2xl"
              style={{
                transform: `rotate(${rotation}deg)`,
                transition: spinning ? 'transform 5s cubic-bezier(0.1, 0.7, 0.1, 1)' : 'none',
              }}
            >
              <svg viewBox="0 0 200 200" className="w-full h-full">
                {REWARDS.map((reward, i) => {
                  const startAngle = i * segmentAngle;
                  const endAngle = (i + 1) * segmentAngle;
                  const startRad = (startAngle - 90) * (Math.PI / 180);
                  const endRad = (endAngle - 90) * (Math.PI / 180);
                  const x1 = 100 + 100 * Math.cos(startRad);
                  const y1 = 100 + 100 * Math.sin(startRad);
                  const x2 = 100 + 100 * Math.cos(endRad);
                  const y2 = 100 + 100 * Math.sin(endRad);
                  const largeArc = segmentAngle > 180 ? 1 : 0;
                  const midAngle = (startAngle + endAngle) / 2;
                  const midRad = (midAngle - 90) * (Math.PI / 180);
                  const textX = 100 + 65 * Math.cos(midRad);
                  const textY = 100 + 65 * Math.sin(midRad);

                  return (
                    <g key={i}>
                      <path
                        d={`M100,100 L${x1},${y1} A100,100 0 ${largeArc},1 ${x2},${y2} Z`}
                        fill={reward.color}
                        className="transition-opacity duration-300"
                        fillOpacity={spinning ? 0.9 : 1}
                      />
                      <text
                        x={textX}
                        y={textY}
                        fill="white"
                        fontSize="8"
                        fontWeight="900"
                        textAnchor="middle"
                        dominantBaseline="middle"
                        className="uppercase tracking-tighter"
                        transform={`rotate(${midAngle + 90}, ${textX}, ${textY})`}
                      >
                        {reward.label}
                      </text>
                    </g>
                  );
                })}
              </svg>
            </div>

            {/* Center Interactive Button */}
            <button
              onClick={spin}
              disabled={spinning || !!result}
              className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-gray-900 text-white rounded-full font-black text-sm shadow-[0_0_30px_rgba(0,0,0,0.3)] hover:scale-105 active:scale-95 transition-all disabled:scale-100 z-40 flex flex-col items-center justify-center border-[6px] border-white ${spinning ? 'animate-pulse' : ''}`}
            >
              <Zap className={`w-6 h-6 mb-1 ${spinning ? 'text-amber-400' : 'text-nykaa-pink'}`} fill="currentColor" />
              {spinning ? 'SPINNING' : 'SPIN'}
            </button>
          </div>

          {/* Success Reveal */}
          <div className={`transition-all duration-700 overflow-hidden ${result ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'}`}>
            <div className="bg-nykaa-gradient rounded-3xl p-6 text-white text-center shadow-xl shadow-pink-200 relative">
               <Sparkles className="absolute top-2 left-2 w-6 h-6 opacity-30 animate-pulse" />
               <h4 className="text-[10px] font-black uppercase tracking-[0.3em] opacity-80 mb-1">CONGRATULATIONS!</h4>
               <p className="text-3xl font-black tracking-tighter mb-4">You Won {result?.label}</p>
               <button
                 onClick={() => {
                   if (result.type === 'points') {
                     onReward(result.value);
                   } else {
                     onReward({ label: result.label, isSpecial: true });
                   }
                   onClose();
                 }}
                 className="w-full bg-white text-nykaa-pink font-black py-4 rounded-2xl text-[10px] uppercase tracking-[0.2em] shadow-lg active:scale-95 transition-all"
               >
                 CLAIM REWARD
               </button>
            </div>
          </div>
          
          {!result && !spinning && (
            <div className="flex items-center justify-center gap-4 text-gray-400 text-[10px] font-bold uppercase tracking-widest">
              <span className="flex items-center gap-1.5"><ShieldCheckIcon className="w-3.5 h-3.5" /> Verified</span>
              <span className="w-1 h-1 bg-gray-200 rounded-full"></span>
              <span className="flex items-center gap-1.5"><Star className="w-3.5 h-3.5" /> Fair Play</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function ShieldCheckIcon({ className }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
      <path d="m9 12 2 2 4-4"></path>
    </svg>
  );
}
