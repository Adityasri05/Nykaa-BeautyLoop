import React, { useState } from 'react';
import { ChevronLeft, CheckCircle2, Circle, Flame, Gift } from 'lucide-react';

export default function RoutineTracker({ onBack }) {
  const [steps, setSteps] = useState([
    { id: 1, name: "Cleanser", product: "Cetaphil Gentle Skin Cleanser", completed: true, time: "Morning" },
    { id: 2, name: "Toner", product: "Plum Green Tea Toner", completed: false, time: "Morning" },
    { id: 3, name: "Serum", product: "Minimalist 10% Niacinamide", completed: false, time: "Morning" },
    { id: 4, name: "Moisturizer", product: "Pond's Super Light Gel", completed: false, time: "Morning" },
    { id: 5, name: "Sunscreen", product: "Aqualogica Radiance+ Dewy", completed: false, time: "Morning" },
  ]);

  const toggleStep = (id) => {
    setSteps(steps.map(step => 
      step.id === id ? { ...step, completed: !step.completed } : step
    ));
  };

  const progress = (steps.filter(s => s.completed).length / steps.length) * 100;

  return (
    <div className="bg-white min-h-full pb-20">
      {/* Header */}
      <header className="px-4 py-4 sticky top-0 bg-white/80 backdrop-blur-md z-10 flex items-center border-b border-gray-100">
        <button onClick={onBack} className="p-2 -ml-2 rounded-full hover:bg-gray-100 active:bg-gray-200 transition-colors">
          <ChevronLeft className="w-6 h-6 text-gray-800" />
        </button>
        <h1 className="text-lg font-bold ml-2">My Routine</h1>
      </header>

      <div className="p-4 space-y-6">
        {/* Streak & Progress */}
        <div className="bg-orange-50 border border-orange-100 rounded-2xl p-4 flex items-center justify-between">
          <div>
            <div className="flex items-center gap-1.5 text-orange-600 font-bold">
              <Flame className="w-5 h-5 fill-current" />
              <span>3 Day Streak!</span>
            </div>
            <p className="text-xs text-orange-800 mt-1">Complete 4 more days for a reward.</p>
          </div>
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm border border-orange-100">
            <Gift className="w-6 h-6 text-nykaa-pink" />
          </div>
        </div>

        {/* Progress Bar */}
        <div>
          <div className="flex justify-between text-sm font-medium mb-2">
            <span className="text-gray-600">Morning Routine</span>
            <span className="text-nykaa-pink">{Math.round(progress)}%</span>
          </div>
          <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
            <div 
              className="h-full bg-nykaa-gradient rounded-full transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {/* Routine Steps */}
        <div className="space-y-3 mt-4">
          {steps.map((step) => (
            <div 
              key={step.id}
              onClick={() => toggleStep(step.id)}
              className={`flex items-center p-4 rounded-xl border transition-all cursor-pointer ${
                step.completed ? 'bg-pink-50/50 border-pink-200' : 'bg-white border-gray-200 hover:border-pink-300'
              }`}
            >
              <div className="mr-4">
                {step.completed ? (
                  <CheckCircle2 className="w-6 h-6 text-nykaa-pink" />
                ) : (
                  <Circle className="w-6 h-6 text-gray-300" />
                )}
              </div>
              <div className="flex-1">
                <p className={`font-semibold ${step.completed ? 'text-gray-900' : 'text-gray-800'}`}>
                  {step.name}
                </p>
                <p className="text-sm text-gray-500 mt-0.5">{step.product}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
