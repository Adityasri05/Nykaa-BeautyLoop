import React from 'react';
import { CalendarCheck, PlaySquare, Users, ChevronRight, Sparkles } from 'lucide-react';

export default function BeautyLoopHub({ setLoopView }) {
  return (
    <div className="p-4 space-y-6 pb-24">
      {/* Welcome Banner */}
      <div className="bg-nykaa-gradient rounded-2xl p-5 text-white shadow-lg relative overflow-hidden">
        <div className="relative z-10">
          <h2 className="text-xl font-bold mb-1">Welcome back, Aditi! 👋</h2>
          <p className="text-sm opacity-90 mb-4">You're on a 3-day glow streak. Keep it up!</p>
          <button 
            onClick={() => setLoopView('routine')}
            className="bg-white text-nykaa-pink px-4 py-2 rounded-full text-sm font-semibold shadow-sm hover:scale-105 transition-transform"
          >
            Log Today's Routine
          </button>
        </div>
        <Sparkles className="absolute right-[-10px] bottom-[-10px] w-24 h-24 opacity-20" />
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 gap-4">
        <ActionCard 
          icon={<PlaySquare className="w-6 h-6 text-purple-500" />}
          title="Watch & Shop"
          subtitle="Real reviews by real buyers"
          onClick={() => setLoopView('feed')}
          color="bg-purple-50"
        />
        <ActionCard 
          icon={<Users className="w-6 h-6 text-blue-500" />}
          title="Beauty Boards"
          subtitle="Ask the community"
          onClick={() => {}}
          color="bg-blue-50"
        />
      </div>

      {/* Trending Loop Widget */}
      <div>
        <div className="flex justify-between items-center mb-3">
          <h3 className="font-bold text-gray-800">Trending in the Loop</h3>
          <button className="text-nykaa-pink text-sm font-medium flex items-center">
            View all <ChevronRight className="w-4 h-4 ml-0.5" />
          </button>
        </div>
        
        <div className="flex gap-3 overflow-x-auto no-scrollbar pb-2">
          <TrendingCard 
            image="https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&q=80&w=300"
            title="Summer Dewy Look"
            author="@sharma_k"
            onClick={() => setLoopView('feed')}
          />
          <TrendingCard 
            image="https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?auto=format&fit=crop&q=80&w=300"
            title="My Curly Hair Routine"
            author="@riya_curls"
            onClick={() => setLoopView('feed')}
          />
        </div>
      </div>
    </div>
  );
}

function ActionCard({ icon, title, subtitle, onClick, color }) {
  return (
    <div 
      onClick={onClick}
      className={`${color} rounded-2xl p-4 cursor-pointer hover:shadow-md transition-all active:scale-95`}
    >
      <div className="bg-white w-10 h-10 rounded-full flex items-center justify-center mb-3 shadow-sm">
        {icon}
      </div>
      <h4 className="font-semibold text-gray-800 text-sm">{title}</h4>
      <p className="text-xs text-gray-500 mt-1">{subtitle}</p>
    </div>
  );
}

function TrendingCard({ image, title, author, onClick }) {
  return (
    <div 
      onClick={onClick}
      className="min-w-[140px] h-[200px] rounded-xl overflow-hidden relative cursor-pointer group"
    >
      <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
      <div className="absolute bottom-3 left-3 right-3">
        <p className="text-white font-medium text-sm leading-tight">{title}</p>
        <p className="text-gray-300 text-xs mt-1">{author}</p>
      </div>
      <div className="absolute top-2 right-2 bg-black/40 backdrop-blur-md p-1.5 rounded-full">
        <PlaySquare className="w-3 h-3 text-white" />
      </div>
    </div>
  );
}
