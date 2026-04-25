import React, { useState } from 'react';
import { ChevronLeft, Sparkles, Sun, Moon, Plus, ShoppingBag, ArrowRight } from 'lucide-react';

const ROUTINE_STEPS = [
  {
    type: 'Morning Routine',
    icon: <Sun className="w-5 h-5 text-orange-500" />,
    products: [
      { name: "Gentle Cleanser", brand: "Cetaphil", price: "₹333", image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=200" },
      { name: "Vitamin C Serum", brand: "Minimalist", price: "₹699", image: "https://images.unsplash.com/photo-1629198688000-71f23e745b6e?auto=format&fit=crop&q=80&w=200" },
      { name: "Hyaluronic Acid SPF", brand: "Aqualogica", price: "₹399", image: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?auto=format&fit=crop&q=80&w=200" },
    ]
  },
  {
    type: 'Night Routine',
    icon: <Moon className="w-5 h-5 text-indigo-500" />,
    products: [
      { name: "Double Cleanser", brand: "Laneige", price: "₹1,150", image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&q=80&w=200" },
      { name: "Retinol 0.3%", brand: "Minimalist", price: "₹599", image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=200" },
      { name: "Barrier Cream", brand: "Dot & Key", price: "₹545", image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80&w=200" },
    ]
  }
];

export default function AIRoutineBuilder({ navigate, showSuccess, addToCart }) {
  const [loading, setLoading] = useState(false);
  const [showRoutine, setShowRoutine] = useState(false);

  const generateRoutine = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setShowRoutine(true);
    }, 2000);
  };

  if (loading) {
    return (
      <div className="bg-white min-h-full flex flex-col items-center justify-center p-10 text-center">
        <div className="relative mb-8">
          <div className="w-24 h-24 border-4 border-nykaa-pink/20 border-t-nykaa-pink rounded-full animate-spin"></div>
          <Sparkles className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 text-nykaa-pink animate-pulse" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Analyzing your skin...</h2>
        <p className="text-gray-500 text-sm">Our AI is building your custom AM & PM routine based on your unique skin profile.</p>
      </div>
    );
  }

  if (showRoutine) {
    return (
      <div className="bg-[#fafafa] min-h-full pb-20 animate-pop">
        <header className="px-5 py-4 sticky top-0 bg-white/90 backdrop-blur-md z-10 flex items-center border-b border-gray-100">
          <button onClick={() => navigate('home')} className="p-2 -ml-2 text-gray-800">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <h1 className="text-lg font-bold ml-2">Your AI Routine</h1>
        </header>

        <div className="p-5 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          {ROUTINE_STEPS.map((step, idx) => (
            <div key={idx} className="space-y-4">
              <div className="flex items-center gap-2 px-1">
                {step.icon}
                <h3 className="font-bold text-lg text-gray-900">{step.type}</h3>
              </div>
              
              <div className="space-y-3">
                {step.products.map((product, pIdx) => (
                  <div key={pIdx} className="bg-white rounded-3xl p-4 flex items-center gap-4 shadow-sm border border-gray-100">
                    <img src={product.image} alt={product.name} className="w-16 h-16 rounded-2xl object-cover bg-gray-50" />
                    <div className="flex-1 min-w-0">
                      <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">{product.brand}</p>
                      <h4 className="text-sm font-bold text-gray-800 leading-tight">{product.name}</h4>
                      <p className="text-sm font-bold text-gray-900 mt-1">{product.price}</p>
                    </div>
                    <button onClick={() => addToCart(product)} className="w-10 h-10 bg-gray-50 border border-gray-100 rounded-2xl flex items-center justify-center text-gray-400 hover:text-nykaa-pink transition-colors">
                      <Plus className="w-5 h-5" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}

          <div className="fixed bottom-20 left-0 right-0 px-5 py-4 bg-white/80 backdrop-blur-md border-t border-gray-100 z-10 md:static md:bg-transparent md:border-none md:px-0 md:col-span-2">
            <button
              onClick={() => {
                ROUTINE_STEPS.forEach(step => {
                  step.products.forEach(p => addToCart(p));
                });
                showSuccess(150, "Full routine added to bag!");
              }}
              className="w-full bg-black text-white font-bold py-4 rounded-2xl shadow-xl flex items-center justify-center gap-2 hover:bg-nykaa-pink transition-colors"
            >
              <ShoppingBag className="w-5 h-5" /> Add Full Routine to Bag
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-full pb-6 animate-pop">
      <header className="px-5 py-4 sticky top-0 bg-white/90 backdrop-blur-md z-10 flex items-center border-b border-gray-100">
        <button onClick={() => navigate('home')} className="p-2 -ml-2 text-gray-800">
          <ChevronLeft className="w-6 h-6" />
        </button>
        <h1 className="text-lg font-bold ml-2">AI Routine Builder</h1>
      </header>

      <div className="p-6 md:p-10 flex flex-col items-center text-center">
        <div className="w-20 h-20 bg-nykaa-pink/10 rounded-full flex items-center justify-center mb-6">
          <Sparkles className="w-10 h-10 text-nykaa-pink" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Personalized by AI</h2>
        <p className="text-gray-500 text-sm mb-10 max-w-[280px]">We'll analyze your skin type and concerns to build the perfect morning and night routine.</p>

        <div className="w-full space-y-4 text-left max-w-sm mx-auto mb-12">
          <div className="p-5 rounded-2xl border-2 border-gray-100 bg-gray-50/50">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Skin Type</p>
            <p className="font-bold text-gray-900">Oily Skin</p>
          </div>
          <div className="p-5 rounded-2xl border-2 border-gray-100 bg-gray-50/50">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Concerns</p>
            <p className="font-bold text-gray-900">Acne & Pores</p>
          </div>
        </div>

        <button
          onClick={generateRoutine}
          className="w-full max-w-sm bg-black text-white font-bold py-4 rounded-2xl shadow-lg hover:bg-nykaa-pink transition-colors flex items-center justify-center gap-2"
        >
          Generate My Routine <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
