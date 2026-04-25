import React, { useState } from 'react';
import { ChevronLeft, Sparkles, ArrowRight, Check } from 'lucide-react';

const QUESTIONS = [
  {
    id: 1,
    question: "What's your skin type?",
    options: ['Oily', 'Dry', 'Combination', 'Sensitive', 'Normal'],
  },
  {
    id: 2,
    question: "What's your main skin concern?",
    options: ['Acne & Breakouts', 'Dark Spots', 'Anti-Aging', 'Dullness', 'Pores'],
  },
  {
    id: 3,
    question: "Your skincare budget per month?",
    options: ['Under ₹500', '₹500 – ₹1000', '₹1000 – ₹2000', '₹2000+'],
  },
];

const QUIZ_RESULTS = [
  {
    name: "Minimalist 2% Salicylic Acid Cleanser",
    brand: "Minimalist",
    price: "₹299",
    match: "97% Match",
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=200",
  },
  {
    name: "Dot & Key CICA Calming Moisturizer",
    brand: "Dot & Key",
    price: "₹545",
    match: "94% Match",
    image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80&w=200",
  },
  {
    name: "Aqualogica Glow+ Dewy Sunscreen",
    brand: "Aqualogica",
    price: "₹399",
    match: "91% Match",
    image: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?auto=format&fit=crop&q=80&w=200",
  },
];

export default function BeautyQuiz({ navigate, showSuccess }) {
  const [step, setStep] = useState(0); // 0-2 = questions, 3 = results
  const [answers, setAnswers] = useState({});

  const handleAnswer = (questionId, answer) => {
    setAnswers({ ...answers, [questionId]: answer });
    if (step < QUESTIONS.length - 1) {
      setTimeout(() => setStep(step + 1), 300);
    } else {
      setTimeout(() => setStep(QUESTIONS.length), 300); // Show results
    }
  };

  const progress = ((step + 1) / (QUESTIONS.length + 1)) * 100;

  // Results view
  if (step >= QUESTIONS.length) {
    return (
      <div className="bg-white min-h-full pb-6 animate-pop">
        <header className="px-5 py-4 sticky top-0 bg-white/90 backdrop-blur-md z-10 flex items-center border-b border-gray-100">
          <button onClick={() => navigate('home')} className="p-2 -ml-2 text-gray-800">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <h1 className="text-lg font-bold ml-2">Your Matches</h1>
        </header>

        <div className="p-5 md:p-8 space-y-6">
          <div className="bg-nykaa-pink/10 rounded-2xl p-4 text-center border border-nykaa-pink/20">
            <Sparkles className="w-6 h-6 text-nykaa-pink mx-auto mb-2" />
            <h2 className="font-bold text-gray-900">Your Personalized Routine</h2>
            <p className="text-xs text-gray-500 mt-1">Based on your quiz answers, we've curated these for you.</p>
          </div>

          <div className="space-y-4">
            {QUIZ_RESULTS.map((product, i) => (
              <div key={i} className="flex items-center gap-4 bg-white border border-gray-100 rounded-2xl p-4 shadow-sm animate-slide-right" style={{ animationDelay: `${i * 0.1}s` }}>
                <img src={product.image} alt={product.name} className="w-16 h-16 rounded-xl object-cover bg-gray-50 shadow-sm" />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className="text-[10px] font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded-full">{product.match}</span>
                  </div>
                  <p className="text-[10px] text-gray-500 font-bold uppercase">{product.brand}</p>
                  <p className="text-sm font-semibold text-gray-900 leading-tight truncate">{product.name}</p>
                  <p className="font-bold text-sm text-gray-900 mt-1">{product.price}</p>
                </div>
                <button
                  onClick={() => showSuccess(25)}
                  className="bg-black text-white px-4 py-2 rounded-xl text-xs font-bold hover:bg-nykaa-pink transition-colors shrink-0"
                >
                  Add
                </button>
              </div>
            ))}
          </div>

          <button
            onClick={() => navigate('home')}
            className="w-full bg-nykaa-pink text-white font-bold py-3.5 rounded-2xl text-sm shadow-md hover:bg-[#e0305b] transition-colors"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  // Quiz view
  const currentQ = QUESTIONS[step];

  return (
    <div className="bg-white min-h-full pb-6 animate-pop">
      <header className="px-5 py-4 sticky top-0 bg-white/90 backdrop-blur-md z-10 flex items-center border-b border-gray-100">
        <button onClick={() => step > 0 ? setStep(step - 1) : navigate('home')} className="p-2 -ml-2 text-gray-800">
          <ChevronLeft className="w-6 h-6" />
        </button>
        <h1 className="text-lg font-bold ml-2">Beauty Quiz 🧴</h1>
        <span className="ml-auto text-xs font-bold text-gray-400">{step + 1}/{QUESTIONS.length}</span>
      </header>

      <div className="p-5 md:p-8">
        {/* Progress */}
        <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden mb-8">
          <div className="h-full bg-nykaa-gradient rounded-full transition-all duration-500" style={{ width: `${progress}%` }} />
        </div>

        <div className="text-center mb-8 animate-fadeIn" key={step}>
          <div className="w-14 h-14 bg-nykaa-pink/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <Sparkles className="w-7 h-7 text-nykaa-pink" />
          </div>
          <h2 className="text-xl font-bold text-gray-900">{currentQ.question}</h2>
          <p className="text-sm text-gray-500 mt-2">Select one that best describes you</p>
        </div>

        <div className="space-y-3 max-w-md mx-auto animate-fadeIn" key={`opts-${step}`}>
          {currentQ.options.map((option) => (
            <button
              key={option}
              onClick={() => handleAnswer(currentQ.id, option)}
              className={`w-full text-left p-4 rounded-2xl border-2 font-semibold text-sm transition-all active:scale-[0.98] ${
                answers[currentQ.id] === option
                  ? 'border-nykaa-pink bg-nykaa-pink/5 text-nykaa-pink'
                  : 'border-gray-100 bg-white text-gray-800 hover:border-gray-300'
              }`}
            >
              <div className="flex items-center justify-between">
                {option}
                {answers[currentQ.id] === option && <Check className="w-5 h-5 text-nykaa-pink" />}
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
