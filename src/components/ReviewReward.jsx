import React, { useState } from 'react';
import { Star, X, Sparkles, MessageCircle, ArrowRight, Heart } from 'lucide-react';

export default function ReviewReward({ onClose, onSubmit }) {
  const [rating, setRating] = useState(0);
  const [hoveredStar, setHoveredStar] = useState(0);
  const [comment, setComment] = useState('');

  const product = {
    name: "Cetaphil Gentle Skin Cleanser",
    brand: "Cetaphil",
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=200",
  };

  const handleSubmit = () => {
    if (rating > 0) {
      onSubmit(100);
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-[500] flex items-end sm:items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/70 backdrop-blur-md" onClick={onClose}></div>
      
      <div className="relative z-10 w-full max-w-md animate-slide-up sm:animate-scaleIn">
        <div className="bg-white rounded-[3rem] p-8 shadow-2xl relative overflow-hidden">
          {/* Decorative backdrop */}
          <div className="absolute -right-20 -top-20 w-40 h-40 bg-nykaa-pink/5 rounded-full blur-3xl"></div>
          
          <button 
            onClick={onClose} 
            className="absolute top-6 right-6 w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center text-gray-400 hover:bg-gray-100 transition-all z-20"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-yellow-50 rounded-[1.5rem] flex items-center justify-center mx-auto mb-4 border border-yellow-100 shadow-sm relative">
              <Star className="w-8 h-8 text-yellow-500 fill-yellow-500 animate-pulse" />
              <Sparkles className="absolute -top-1 -right-1 w-5 h-5 text-nykaa-pink animate-bounce-gentle" />
            </div>
            <h2 className="text-2xl font-black text-gray-900 tracking-tight leading-none mb-2">Review & Earn</h2>
            <p className="text-xs text-gray-500 font-medium">Share your experience and get <span className="text-nykaa-pink font-black">+100 Glow Points</span></p>
          </div>

          <div className="flex items-center gap-5 bg-gray-50 rounded-[2rem] p-5 mb-8 border border-gray-100/50 group">
            <div className="w-20 h-20 bg-white rounded-2xl overflow-hidden shadow-sm p-2 shrink-0">
              <img src={product.image} alt={product.name} className="w-full h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-500" />
            </div>
            <div>
              <p className="text-[10px] text-nykaa-pink font-black uppercase tracking-widest mb-1">{product.brand}</p>
              <h4 className="text-sm font-bold text-gray-900 leading-tight line-clamp-2">{product.name}</h4>
            </div>
          </div>

          {/* Star Rating Section */}
          <div className="space-y-6">
            <div className="flex justify-center gap-3">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  onMouseEnter={() => setHoveredStar(star)}
                  onMouseLeave={() => setHoveredStar(0)}
                  onClick={() => setRating(star)}
                  className="transition-all duration-300 relative group"
                >
                  <Star
                    className={`w-12 h-12 transition-all duration-300 ${
                      star <= (hoveredStar || rating)
                        ? 'text-yellow-400 fill-yellow-400 scale-110 filter drop-shadow-[0_0_10px_rgba(250,204,21,0.3)]'
                        : 'text-gray-200 scale-100 group-hover:text-yellow-200'
                    }`}
                  />
                  {star === rating && (
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-nykaa-pink rounded-full flex items-center justify-center animate-pop">
                      <Heart className="w-2 h-2 text-white fill-white" />
                    </div>
                  )}
                </button>
              ))}
            </div>

            <div className={`transition-all duration-700 overflow-hidden ${rating > 0 ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'}`}>
              <div className="relative">
                <div className="absolute top-4 left-4 text-gray-400">
                  <MessageCircle className="w-4 h-4" />
                </div>
                <textarea
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  placeholder="What did you love about this product?"
                  className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-100 rounded-[1.5rem] text-sm font-medium focus:outline-none focus:border-nykaa-pink focus:bg-white focus:ring-4 focus:ring-pink-50 transition-all resize-none h-28"
                />
              </div>
            </div>

            <button
              onClick={handleSubmit}
              disabled={rating === 0}
              className={`w-full py-5 rounded-[1.5rem] font-black text-xs uppercase tracking-widest flex items-center justify-center gap-3 transition-all duration-500 shadow-xl ${
                rating === 0 
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed shadow-none' 
                  : 'bg-black text-white hover:bg-nykaa-pink shadow-pink-200 hover:-translate-y-1 active:scale-95'
              }`}
            >
              SUBMIT REVIEW <ArrowRight className={`w-4 h-4 ${rating > 0 ? 'animate-bounce-x' : ''}`} />
            </button>
            
            <p className="text-center text-[10px] text-gray-400 font-bold uppercase tracking-widest">
              Reviewing helps other members shop better
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
