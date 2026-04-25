import React, { useState } from 'react';
import { 
  ChevronLeft, CheckCircle2, Circle, Flame, 
  Gift, Sparkles, Clock, ArrowRight, Zap 
} from 'lucide-react';

export default function RoutineTracker({ navigate, showSuccess, addToCart }) {
  const [steps, setSteps] = useState([
    { id: 1, name: "Cleanser", product: "Cetaphil Gentle Skin Cleanser", completed: true, time: "Morning" },
    { id: 2, name: "Toner", product: "Plum Green Tea Toner", completed: false, time: "Morning" },
    { id: 3, name: "Serum", product: "Minimalist 10% Niacinamide", completed: false, time: "Morning" },
    { id: 4, name: "Moisturizer", product: "Pond's Super Light Gel", completed: false, time: "Morning" },
    { id: 5, name: "Sunscreen", product: "Aqualogica Radiance+ Dewy", completed: false, time: "Morning" },
  ]);

  const toggleStep = (id) => {
    const updatedSteps = steps.map(step => 
      step.id === id ? { ...step, completed: !step.completed } : step
    );
    setSteps(updatedSteps);

    const step = updatedSteps.find(s => s.id === id);
    if (step.completed) {
      // Optional: Mini bounce or sound effect simulation
    }

    const wasCompleted = steps.every(s => s.completed);
    const isNowCompleted = updatedSteps.every(s => s.completed);
    
    if (!wasCompleted && isNowCompleted) {
      showSuccess(100, "Morning Routine Complete! ☀️");
    }
  };

  const progress = (steps.filter(s => s.completed).length / steps.length) * 100;

  return (
    <div className="bg-[#faf7f5] min-h-full pb-32 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-orange-500/5 rounded-full blur-[100px] -z-10 animate-pulse"></div>
      <div className="absolute bottom-40 -left-20 w-80 h-80 bg-nykaa-pink/5 rounded-full blur-[100px] -z-10"></div>

      <header className="px-6 py-6 sticky top-0 bg-white/80 backdrop-blur-xl z-30 flex items-center justify-between border-b border-gray-100">
        <div className="flex items-center gap-4">
          <button 
            onClick={() => navigate('home')} 
            className="w-10 h-10 flex items-center justify-center bg-white rounded-xl text-gray-800 shadow-sm border border-gray-100 active:scale-90 transition-all"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <div>
            <h1 className="text-xl font-black text-gray-900 tracking-tight">Daily Ritual</h1>
            <p className="text-[10px] font-black uppercase tracking-[0.15em] text-nykaa-pink flex items-center gap-1.5">
              <Clock className="w-3 h-3" /> Tracking Morning Routine
            </p>
          </div>
        </div>
        <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center text-orange-600">
          <Flame className="w-5 h-5 fill-current" />
        </div>
      </header>

      <div className="p-6 md:p-10 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            {/* Streak Dashboard */}
            <div className="premium-card p-6 bg-gradient-to-br from-orange-400 to-nykaa-pink text-white shadow-xl shadow-pink-200 overflow-hidden relative group">
              <div className="absolute -right-6 -top-6 w-32 h-32 bg-white/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000"></div>
              <div className="flex items-center justify-between relative z-10">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <Flame className="w-6 h-6 fill-white" />
                    <span className="text-2xl font-black tracking-tighter">3 Day Streak</span>
                  </div>
                  <p className="text-white/80 text-xs font-medium">Keep it up! 4 more days for bonus.</p>
                </div>
                <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-[1.5rem] flex items-center justify-center border border-white/30 animate-bounce-gentle">
                  <Gift className="w-8 h-8 text-white" />
                </div>
              </div>
              
              <div className="mt-6 flex justify-between px-1 relative z-10">
                {[1, 2, 3, 4, 5, 6, 7].map(day => (
                  <div key={day} className="flex flex-col items-center gap-2">
                    <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center text-[10px] font-black ${day <= 3 ? 'bg-white text-nykaa-pink border-white' : 'border-white/30 text-white/50'}`}>
                      {day <= 3 ? <Zap className="w-4 h-4 fill-nykaa-pink" /> : day}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Progress Visualization */}
            <div className="premium-card p-6 bg-white border-none shadow-xl shadow-gray-100">
              <div className="flex justify-between items-end mb-4">
                <div>
                  <h4 className="text-xs font-black text-gray-400 uppercase tracking-widest mb-1">Routine Progress</h4>
                  <p className="text-3xl font-black text-gray-900 tracking-tighter">{Math.round(progress)}%</p>
                </div>
                <Sparkles className="w-6 h-6 text-nykaa-pink opacity-30" />
              </div>
              <div className="h-4 bg-gray-50 rounded-full overflow-hidden border border-gray-100 p-1 shadow-inner">
                <div 
                  className="h-full bg-nykaa-gradient rounded-full transition-all duration-700 ease-out shadow-lg"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            </div>
          </div>

          {/* Routine Steps Checklist */}
          <div className="space-y-4">
            <h3 className="text-lg font-black text-gray-900 px-1 flex items-center gap-2">
              The Essentials <div className="h-px flex-1 bg-gray-100"></div>
            </h3>
            <div className="space-y-3">
              {steps.map((step, idx) => (
                <div 
                  key={step.id}
                  onClick={() => toggleStep(step.id)}
                  className={`premium-card p-5 flex items-center gap-5 cursor-pointer group animate-slide-right ${
                    step.completed ? 'bg-pink-50/30 border-nykaa-pink/10 opacity-80' : 'hover:scale-[1.02]'
                  }`}
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <div className={`w-12 h-12 rounded-[1.25rem] flex items-center justify-center transition-all duration-300 ${
                    step.completed ? 'bg-nykaa-pink text-white rotate-12 scale-110' : 'bg-gray-50 text-gray-300 group-hover:bg-pink-50 group-hover:text-nykaa-pink'
                  }`}>
                    {step.completed ? <CheckCircle2 className="w-6 h-6" /> : <Circle className="w-6 h-6" />}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className={`text-[10px] font-black uppercase tracking-widest mb-0.5 ${step.completed ? 'text-nykaa-pink/60' : 'text-gray-400'}`}>
                      {step.name}
                    </p>
                    <h4 className={`text-base font-bold leading-tight ${step.completed ? 'text-gray-400 line-through' : 'text-gray-900'}`}>
                      {step.product}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Shop Routine Section */}
        <div className="space-y-6 pt-6">
          <div className="flex justify-between items-center px-1">
            <h3 className="text-xl font-black text-gray-900 tracking-tight">Restock Essentials</h3>
            <button className="text-[10px] font-black text-nykaa-pink uppercase tracking-widest flex items-center gap-1 group">
              View All <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.slice(0, 4).map((step) => (
              <div key={step.id} className="premium-card p-4 group">
                <div className="bg-gray-50 rounded-[2rem] aspect-square mb-4 flex items-center justify-center p-4 group-hover:scale-105 transition-transform duration-500 overflow-hidden relative">
                  <div className="absolute inset-0 bg-nykaa-pink/0 group-hover:bg-nykaa-pink/5 transition-colors"></div>
                  <img 
                    src={`https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=200`} 
                    alt={step.product} 
                    className="w-full h-full object-contain mix-blend-multiply" 
                  />
                </div>
                <h4 className="text-xs font-bold text-gray-900 leading-tight mb-1 line-clamp-1">{step.product}</h4>
                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-4">{step.name}</p>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    addToCart({ id: `routine_${step.id}`, name: step.product, brand: 'Essential', price: '₹333', image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=200' });
                    showSuccess(10, "Added to bag! ✨");
                  }}
                  className="w-full bg-black text-white py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-nykaa-pink transition-all active:scale-95 shadow-lg shadow-black/5"
                >
                  Quick Add
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
