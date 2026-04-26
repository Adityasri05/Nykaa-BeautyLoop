import React, { useState } from 'react';
import { ChevronLeft, Sparkles, Check } from 'lucide-react';

const SHADE_QUESTIONS = [
  {
    id: 1,
    question: "What's your skin tone?",
    options: ['Fair', 'Light', 'Medium', 'Tan', 'Deep'],
    colors: ['#F9E4D4', '#F3D0B5', '#D6A680', '#A36F4D', '#5E3E2B']
  },
  {
    id: 2,
    question: "Check your veins. What color are they?",
    options: ['Blue/Purple (Cool)', 'Green (Warm)', 'Mix of both (Neutral)'],
  },
  {
    id: 3,
    question: "What's your preferred finish?",
    options: ['Matte', 'Dewy', 'Natural'],
  },
];

const SHADE_RESULTS = [
  {
    name: "Nykaa All Day Matte Foundation",
    shade: "Shade 03: Ivory",
    price: "₹599",
    match: "99% Match",
    image: "https://images.unsplash.com/photo-1599305090598-fe179d501227?auto=format&fit=crop&q=80&w=200",
  },
  {
    name: "Kay Beauty Liquid Lipstick",
    shade: "Shade: Retro",
    price: "₹799",
    match: "95% Match",
    image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&q=80&w=200",
  },
];

export default function ShadeFinder({ navigate, showSuccess, addToCart }) {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});

  const handleAnswer = (questionId, answer) => {
    setAnswers({ ...answers, [questionId]: answer });
    if (step < SHADE_QUESTIONS.length - 1) {
      setTimeout(() => setStep(step + 1), 300);
    } else {
      setTimeout(() => {
        setStep(SHADE_QUESTIONS.length);
        showSuccess(50, "Shades Found! +50 Points");
      }, 300);
    }
  };

  if (step >= SHADE_QUESTIONS.length) {
    return (
      <div className="bg-white min-h-full pb-6 animate-pop">
        <header className="px-5 py-4 sticky top-0 bg-white/90 backdrop-blur-md z-10 flex items-center border-b border-gray-100">
          <button onClick={() => navigate('home')} className="p-2 -ml-2 text-gray-800">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <h1 className="text-lg font-bold ml-2">Perfect Shades</h1>
        </header>

        <div className="p-5 md:p-8 space-y-6">
          <div className="bg-nykaa-gradient rounded-2xl p-6 text-white text-center shadow-lg">
            <Sparkles className="w-8 h-8 mx-auto mb-2 opacity-90" />
            <h2 className="text-xl font-bold">Your Custom Palette</h2>
            <p className="text-xs opacity-80 mt-1">Found your perfect matches based on {answers[1]} {answers[2]} tone.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {SHADE_RESULTS.map((product, i) => (
              <div key={i} className="flex items-center gap-4 bg-white border border-gray-100 rounded-3xl p-4 shadow-sm animate-slide-right" style={{ animationDelay: `${i * 0.1}s` }}>
                <img src={product.image} alt={product.name} className="w-20 h-20 rounded-2xl object-cover bg-gray-50" />
                <div className="flex-1 min-w-0">
                  <span className="text-[10px] font-bold text-nykaa-pink bg-pink-50 px-2 py-0.5 rounded-full">{product.match}</span>
                  <h4 className="text-sm font-bold text-gray-900 mt-1 truncate">{product.name}</h4>
                  <p className="text-xs text-gray-500">{product.shade}</p>
                  <p className="font-bold text-sm text-gray-900 mt-1">{product.price}</p>
                </div>
                <button
                  onClick={() => addToCart(product)}
                  className="bg-black text-white px-4 py-2 rounded-xl text-xs font-bold hover:bg-nykaa-pink transition-colors"
                >
                  Add
                </button>
              </div>
            ))}
          </div>

          <button
            onClick={() => navigate('home')}
            className="w-full border-2 border-gray-900 text-gray-900 font-bold py-4 rounded-2xl hover:bg-gray-50 transition-colors"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  const currentQ = SHADE_QUESTIONS[step];

  return (
    <div className="bg-white min-h-full pb-6 animate-pop">
      <header className="px-5 py-4 sticky top-0 bg-white/90 backdrop-blur-md z-10 flex items-center border-b border-gray-100">
        <button onClick={() => step > 0 ? setStep(step - 1) : navigate('home')} className="p-2 -ml-2 text-gray-800">
          <ChevronLeft className="w-6 h-6" />
        </button>
        <h1 className="text-lg font-bold ml-2">Shade Finder 💄</h1>
      </header>

      <div className="p-6 md:p-10">
        <div className="mb-8">
          <p className="text-xs font-bold text-nykaa-pink uppercase tracking-widest mb-2">Step {step + 1} of {SHADE_QUESTIONS.length}</p>
          <h2 className="text-2xl font-bold text-gray-900">{currentQ.question}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-5">
          {currentQ.options.map((option, idx) => (
            <button
              key={option}
              onClick={() => handleAnswer(currentQ.id, option)}
              className="flex items-center gap-4 p-5 rounded-2xl border-2 border-gray-100 bg-white hover:border-nykaa-pink transition-all active:scale-95"
            >
              {currentQ.colors && (
                <div className="w-10 h-10 rounded-full border border-gray-200" style={{ backgroundColor: currentQ.colors[idx] }}></div>
              )}
              <span className="font-bold text-gray-800">{option}</span>
              <Check className="w-5 h-5 ml-auto text-nykaa-pink opacity-0 transition-opacity" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
