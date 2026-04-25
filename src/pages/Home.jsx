import React, { useState } from 'react';
import { 
  Sparkles, ShoppingBag, LogOut, Search, Heart, 
  ChevronRight, Camera, Brain, Layout, MessageSquare, 
  X, Send, Zap, Star, Gift, ArrowRight, Palette 
} from 'lucide-react';
import BeautyStreak from '../components/BeautyStreak';
import FlashDeal from '../components/FlashDeal';
import RecentlyViewed from '../components/RecentlyViewed';
import BuyAgain from '../components/BuyAgain';
import BundleSave from '../components/BundleSave';
import IndieBrand from '../components/IndieBrand';
import BeautyTips from '../components/BeautyTips';
import TrendingNow from '../components/TrendingNow';
import QuickCompare from '../components/QuickCompare';
import BoughtTogether from '../components/BoughtTogether';

const RECOMMENDED = [
  { id: 1, name: "Matte to Last! Liquid Lipstick", brand: "Nykaa Cosmetics", price: "₹599", image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&q=80&w=300" },
  { id: 2, name: "Skin Potion Skincare Oil", brand: "Nykaa Naturals", price: "₹699", image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=300" },
  { id: 3, name: "Eyes On Me! Mascara", brand: "Kay Beauty", price: "₹799", image: "https://images.unsplash.com/photo-1631214503951-375126d47af1?auto=format&fit=crop&q=80&w=300" },
  { id: 4, name: "Clay It Cool! Mask", brand: "Nykaa Cosmetics", price: "₹450", image: "https://images.unsplash.com/photo-1596462502278-27bfdc4033c8?auto=format&fit=crop&q=80&w=300" },
];

function ToolCard({ icon, title, description, onClick, color }) {
  return (
    <button 
      onClick={onClick}
      className={`premium-card p-6 flex items-start gap-4 text-left group relative overflow-hidden`}
    >
      <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-500`}>
        {icon}
      </div>
      <div className="flex-1">
        <h4 className="font-bold text-gray-900 group-hover:text-nykaa-pink transition-colors">{title}</h4>
        <p className="text-xs text-gray-500 mt-1 leading-relaxed">{description}</p>
      </div>
      <ChevronRight className="w-5 h-5 text-gray-300 group-hover:text-nykaa-pink group-hover:translate-x-1 transition-all" />
    </button>
  );
}

export default function Home({ navigate, showSuccess, points, onLogout, userName, onOpenSpin, addToCart }) {
  const [showChat, setShowChat] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    { role: 'ai', text: `Hi ${userName}! ✨ I'm your Nykaa Beauty Concierge. How can I help you today?` }
  ]);
  const [chatInput, setChatInput] = useState('');

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!chatInput) return;
    const userMsg = { role: 'user', text: chatInput };
    setChatMessages([...chatMessages, userMsg]);
    setChatInput('');
    setTimeout(() => {
      setChatMessages(prev => [...prev, { role: 'ai', text: "That's a great question! For your skin type, I'd recommend a gentle cleanser and our Skin Potion Oil." }]);
    }, 800);
  };

  return (
    <div className="bg-white min-h-full pb-24 relative overflow-hidden">
      {/* Background Mesh */}
      <div className="fixed inset-0 bg-nykaa-mesh opacity-40 pointer-events-none"></div>

      {/* Header */}
      <header className="px-5 py-6 sticky top-0 bg-white/80 backdrop-blur-xl z-30 flex items-center justify-between border-b border-gray-100/50">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-nykaa-gradient rounded-2xl flex items-center justify-center shadow-lg shadow-nykaa-pink/20 animate-float">
            <Sparkles className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-display font-black tracking-tight">Nykaa</h1>
            <p className="text-[10px] font-bold text-nykaa-pink uppercase tracking-widest -mt-1">BeautyLoop</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button 
            onClick={() => navigate('cart')}
            className="p-3 bg-gray-50 rounded-2xl relative group hover:bg-gray-100 transition-colors"
          >
            <ShoppingBag className="w-6 h-6 text-gray-800" />
            <span className="absolute top-2 right-2 w-4 h-4 bg-nykaa-pink text-white text-[10px] font-bold rounded-full flex items-center justify-center border-2 border-white">
              0
            </span>
          </button>
          <button 
            onClick={onLogout}
            className="p-3 bg-rose-50 text-rose-500 rounded-2xl hover:bg-rose-100 transition-colors"
          >
            <LogOut className="w-5 h-5" />
          </button>
        </div>
      </header>

      <div className="p-5 md:p-10 space-y-12 relative z-10">
        
        {/* Personalized Welcome Card */}
        <section className="premium-card p-8 bg-nykaa-gradient relative overflow-hidden text-white group border-none">
          <div className="relative z-10">
            <h2 className="text-3xl font-display font-bold mb-2">Hello, {userName} ✨</h2>
            <p className="text-white/80 text-sm mb-6 max-w-[200px]">You have {points} Glow Points. Ready for your daily dose of beauty?</p>
            <div className="flex gap-3">
              <button 
                onClick={() => navigate('rewards')}
                className="bg-white text-nykaa-pink px-6 py-3 rounded-2xl text-sm font-bold shadow-xl hover:scale-105 active:scale-95 transition-transform"
              >
                View Rewards
              </button>
              <button 
                onClick={onOpenSpin}
                className="bg-black/20 backdrop-blur-md border border-white/30 px-6 py-3 rounded-2xl text-sm font-bold hover:bg-black/30 transition-colors"
              >
                Daily Spin 🎡
              </button>
            </div>
          </div>
          <Sparkles className="absolute -right-10 -bottom-10 w-48 h-48 opacity-20 group-hover:rotate-12 transition-transform duration-700" />
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
        </section>

        {/* Beauty Streak Integration */}
        <BeautyStreak />

        {/* Smart Cards Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="premium-card p-8 bg-gradient-to-br from-purple-50 to-indigo-50 border-purple-100 group cursor-pointer" onClick={() => navigate('quiz')}>
            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
              <Brain className="w-7 h-7 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">AI Skin Analysis</h3>
            <p className="text-sm text-gray-500 mb-6 leading-relaxed">Get a personalized skincare routine powered by deep learning analysis of your skin needs.</p>
            <span className="text-purple-600 font-bold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
              Start Analysis <ChevronRight className="w-4 h-4" />
            </span>
          </div>

          <div className="premium-card p-8 bg-gradient-to-br from-amber-50 to-orange-50 border-amber-100 group cursor-pointer" onClick={() => navigate('shade-finder')}>
            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 group-hover:-rotate-3 transition-all duration-500">
              <Palette className="w-7 h-7 text-amber-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Smart Shade Finder</h3>
            <p className="text-sm text-gray-500 mb-6 leading-relaxed">Find your perfect match in seconds using our precision color-matching quiz.</p>
            <span className="text-amber-600 font-bold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
              Find My Shade <ChevronRight className="w-4 h-4" />
            </span>
          </div>
        </section>

        {/* Recommended for You */}
        <section>
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-2xl font-display font-bold text-gray-900">Curated for You 💖</h3>
            <button className="text-nykaa-pink font-bold text-sm hover:underline">See all</button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {RECOMMENDED.map((product, i) => (
              <div key={product.id} className="premium-card p-4 group animate-pop" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="bg-gray-50 rounded-[2rem] aspect-square overflow-hidden mb-4 relative">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <button className="absolute top-4 right-4 p-2.5 bg-white/90 backdrop-blur-md rounded-full shadow-lg text-gray-400 hover:text-nykaa-pink transition-all active:scale-90">
                    <Heart className="w-4 h-4" />
                  </button>
                </div>
                <div className="px-1">
                  <p className="text-[10px] font-bold text-nykaa-pink uppercase tracking-widest">{product.brand}</p>
                  <h4 className="text-sm font-bold text-gray-800 leading-tight mt-1 line-clamp-2 h-10 group-hover:text-nykaa-pink transition-colors">{product.name}</h4>
                  <div className="flex justify-between items-center mt-4">
                    <span className="text-lg font-black text-gray-900">{product.price}</span>
                    <button 
                      onClick={() => addToCart(product)}
                      className="w-10 h-10 bg-black text-white rounded-2xl flex items-center justify-center hover:bg-nykaa-pink hover:shadow-lg hover:shadow-nykaa-pink/30 transition-all active:scale-90"
                    >
                      <ShoppingBag className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Interactive Tools */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-1 h-8 bg-nykaa-pink rounded-full"></div>
            <h3 className="text-2xl font-display font-bold text-gray-900">Expert Beauty Tools</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ToolCard 
              icon={<Camera className="w-6 h-6" />}
              title="Virtual Try-On"
              description="Instantly see how thousands of makeup shades look on you using live AR technology."
              onClick={() => navigate('vto')}
              color="from-rose-500 to-pink-500"
            />
            <ToolCard 
              icon={<Brain className="w-6 h-6" />}
              title="AI Routine Builder"
              description="Our neural engine crafts a complete Morning & Night routine tailored to your skin DNA."
              onClick={() => navigate('routine-builder')}
              color="from-blue-500 to-indigo-500"
            />
          </div>
        </section>

        {/* Secondary Sections */}
        <section className="space-y-16">
          <FlashDeal addToCart={addToCart} />
          <TrendingNow addToCart={addToCart} />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold flex items-center gap-2"><Star className="w-5 h-5 text-nykaa-pink" /> Buy Again</h3>
              </div>
              <BuyAgain addToCart={addToCart} />
            </div>
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold flex items-center gap-2"><Zap className="w-5 h-5 text-amber-500" /> Recently Viewed</h3>
              </div>
              <RecentlyViewed addToCart={addToCart} />
            </div>
          </div>

          <BundleSave addToCart={addToCart} />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <IndieBrand addToCart={addToCart} />
            <BoughtTogether addToCart={addToCart} />
          </div>
          
          <QuickCompare addToCart={addToCart} />
          
          <div className="pt-4">
            <BeautyTips />
          </div>
        </section>
      </div>

      {/* Floating Chat Button */}
      {!showChat && (
        <button 
          onClick={() => setShowChat(true)}
          className="fixed bottom-24 right-6 w-16 h-16 bg-black text-white rounded-full flex items-center justify-center shadow-2xl z-40 animate-bounce-gentle hover:bg-nykaa-pink transition-all active:scale-95 group"
        >
          <MessageSquare className="w-7 h-7 group-hover:scale-110 transition-transform" />
          <div className="absolute -top-1 -right-1 w-5 h-5 bg-nykaa-pink rounded-full border-2 border-white flex items-center justify-center text-[10px] font-bold">1</div>
        </button>
      )}

      {/* AI Chat Window */}
      {showChat && (
        <div className="fixed bottom-24 right-6 w-[350px] max-w-[90vw] h-[500px] bg-white rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.2)] z-50 flex flex-col border border-gray-100 animate-pop overflow-hidden">
          <div className="bg-black p-6 text-white flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-nykaa-gradient rounded-xl flex items-center justify-center shadow-lg">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="font-bold text-sm block">Beauty Concierge</span>
                <span className="text-[10px] text-green-400 font-bold uppercase tracking-widest">Online</span>
              </div>
            </div>
            <button onClick={() => setShowChat(false)} className="p-2 hover:bg-white/10 rounded-full transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-gray-50/30">
            {chatMessages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} animate-fadeIn`}>
                <div className={`max-w-[85%] p-4 rounded-3xl text-sm font-medium ${
                  msg.role === 'user' 
                  ? 'bg-nykaa-pink text-white rounded-tr-none shadow-lg shadow-nykaa-pink/20' 
                  : 'bg-white text-gray-800 border border-gray-100 shadow-sm rounded-tl-none'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          <form onSubmit={handleSendMessage} className="p-4 bg-white border-t border-gray-100 flex gap-3">
            <input 
              type="text" 
              placeholder="Ask for recommendations..."
              className="flex-1 bg-gray-50 rounded-2xl px-5 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-nykaa-pink/20 focus:bg-white transition-all"
              value={chatInput}
              onChange={(e) => setChatInput(e.target.value)}
            />
            <button 
              type="submit"
              className="w-12 h-12 bg-black text-white rounded-2xl flex items-center justify-center hover:bg-nykaa-pink transition-all active:scale-90 shadow-lg"
            >
              <Send className="w-5 h-5" />
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
