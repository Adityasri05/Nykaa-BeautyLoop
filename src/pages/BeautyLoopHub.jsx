import React from 'react';
import { 
  CalendarCheck, PlaySquare, Users, ChevronRight, 
  Sparkles, Bell, Zap, Star, Heart, ArrowRight, MessageCircle 
} from 'lucide-react';

export default function BeautyLoopHub({ navigate, showSuccess, userName }) {
  return (
    <div className="bg-[#faf7f5] min-h-full pb-32 relative overflow-hidden">
      {/* Premium background gradients */}
      <div className="absolute top-0 right-0 w-full h-96 bg-gradient-to-b from-purple-500/5 to-transparent -z-10"></div>
      <div className="absolute -right-20 top-40 w-80 h-80 bg-nykaa-pink/5 rounded-full blur-[100px] -z-10 animate-glow"></div>

      <header className="px-6 py-6 sticky top-0 bg-white/80 backdrop-blur-xl z-30 flex items-center justify-between border-b border-gray-100">
        <div>
          <h1 className="text-xl font-black text-gray-900 tracking-tight">Community Hub</h1>
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-nykaa-pink flex items-center gap-1.5">
            <Users className="w-3 h-3" /> Connect & Inspire
          </p>
        </div>
        <div className="flex gap-3">
          <button className="w-10 h-10 bg-white rounded-full shadow-sm border border-gray-100 flex items-center justify-center text-gray-400">
            <SearchIcon className="w-5 h-5" />
          </button>
          <button className="w-10 h-10 bg-white rounded-full shadow-sm border border-gray-100 flex items-center justify-center text-gray-400">
            <Bell className="w-5 h-5" />
          </button>
        </div>
      </header>

      <div className="p-6 md:p-10 space-y-10">
        <div className="md:grid md:grid-cols-2 md:gap-8 space-y-6 md:space-y-0">
          
          {/* Welcome Banner */}
          <div className="bg-nykaa-gradient rounded-[3rem] p-8 text-white shadow-2xl shadow-pink-200 relative overflow-hidden flex flex-col justify-center min-h-[220px] group">
            <div className="absolute -right-4 -bottom-4 w-40 h-40 bg-white/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-3">
                <div className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-[10px] font-black uppercase tracking-widest border border-white/30">
                  Daily Reward
                </div>
              </div>
              <h2 className="text-3xl font-black mb-2 tracking-tighter leading-tight">Welcome back, {userName}! 👋</h2>
              <p className="text-sm opacity-80 mb-6 font-medium">You're on a <span className="text-white font-black">3-day glow streak</span>. Log today's ritual to earn +50 pts!</p>
              <button 
                onClick={() => navigate('routine')}
                className="bg-white text-nykaa-pink px-8 py-4 rounded-[1.5rem] text-xs font-black shadow-xl active:scale-95 transition-all hover:px-10 flex items-center gap-2"
              >
                LOG ROUTINE <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Quick Actions Grid */}
          <div className="grid grid-cols-2 gap-4">
            <ActionCard 
              icon={<PlaySquare className="w-7 h-7 text-purple-600" />}
              title="Watch & Shop"
              subtitle="Real User Reviews"
              onClick={() => navigate('feed')}
              color="bg-purple-50"
              iconBg="bg-white/80"
            />
            <ActionCard 
              icon={<Sparkles className="w-7 h-7 text-amber-600" />}
              title="Smart Match"
              subtitle="AI Shade Finder"
              onClick={() => navigate('shade-finder')}
              color="bg-amber-50"
              iconBg="bg-white/80"
            />
            <ActionCard 
              icon={<MessageCircle className="w-7 h-7 text-emerald-600" />}
              title="Expert Help"
              subtitle="Live Chat Support"
              onClick={() => navigate('help')}
              color="bg-emerald-50"
              iconBg="bg-white/80"
            />
            <ActionCard 
              icon={<Star className="w-7 h-7 text-blue-600" />}
              title="Daily Missions"
              subtitle="Earn Big Rewards"
              onClick={() => navigate('rewards')}
              color="bg-blue-50"
              iconBg="bg-white/80"
            />
          </div>
        </div>

        {/* Trending Section */}
        <section>
          <div className="flex justify-between items-center mb-6 px-1">
            <h3 className="text-xl font-black text-gray-900 tracking-tight flex items-center gap-2">
              Trending in Loop <div className="w-2 h-2 bg-nykaa-pink rounded-full animate-pulse"></div>
            </h3>
            <button 
              onClick={() => navigate('feed')}
              className="text-nykaa-pink text-[10px] font-black uppercase tracking-widest flex items-center group"
            >
              Discover More <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            <TrendingCard 
              image="https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&q=80&w=300"
              title="Summer Dewy Look"
              author="@sharma_k"
              onClick={() => navigate('feed')}
            />
            <TrendingCard 
              image="https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?auto=format&fit=crop&q=80&w=300"
              title="Curly Hair Routine"
              author="@riya_curls"
              onClick={() => navigate('feed')}
            />
            <TrendingCard 
              image="https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80&w=300"
              title="Glass Skin Prep"
              author="@nykaa_fan"
              onClick={() => navigate('feed')}
            />
            <TrendingCard 
              image="https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&q=80&w=300"
              title="Nighttime Glow"
              author="@beauty_guru"
              onClick={() => navigate('feed')}
            />
             <TrendingCard 
              image="https://images.unsplash.com/photo-1559599141-3816a0b1f1e1?auto=format&fit=crop&q=80&w=300"
              title="Bold Red Lip"
              author="@makeup_artist"
              onClick={() => navigate('feed')}
            />
          </div>
        </section>

        {/* Masterclass & Events */}
        <section className="space-y-6">
          <h3 className="text-xl font-black text-gray-900 tracking-tight flex items-center gap-2 px-1">
            <CalendarCheck className="w-5 h-5 text-nykaa-pink" /> Live Masterclasses
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <EventCard 
              title="Masterclass: Glowy Summer Makeup"
              time="Tomorrow, 4:00 PM"
              expert="Aliya Kapoor"
              image="https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&q=80&w=200"
            />
            <EventCard 
              title="Skincare Q&A: Advanced Acids"
              time="Fri, 6:30 PM"
              expert="Dr. Sarah James"
              image="https://images.unsplash.com/photo-1559599141-3816a0b1f1e1?auto=format&fit=crop&q=80&w=200"
            />
          </div>
        </section>

        {/* Expert Consultation CTA */}
        <div className="mt-12 bg-indigo-900 rounded-[3rem] p-10 md:p-16 text-white relative overflow-hidden shadow-2xl shadow-indigo-200">
          <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-white/10 rounded-full blur-[100px]"></div>
          <div className="relative z-10 grid md:grid-cols-2 items-center gap-10">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Zap className="w-6 h-6 text-amber-400 fill-amber-400" />
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/70">Expert Program</span>
              </div>
              <h3 className="text-4xl font-black tracking-tight mb-4 leading-tight">Need expert skin advice?</h3>
              <p className="text-white/60 text-base mb-8 max-w-sm font-medium">Get a 1-on-1 video consultation with our certified dermatologists.</p>
              <button className="bg-white text-indigo-900 px-10 py-5 rounded-[2rem] font-black text-xs uppercase tracking-widest shadow-xl active:scale-95 transition-all hover:bg-nykaa-pink hover:text-white">
                BOOK CONSULTATION
              </button>
            </div>
            <div className="hidden md:flex justify-end">
              <div className="w-56 h-56 bg-white/10 backdrop-blur-3xl rounded-[3rem] flex items-center justify-center border border-white/20 rotate-6 hover:rotate-0 transition-transform duration-700">
                <Users className="w-24 h-24 text-white opacity-40" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function EventCard({ title, time, expert, image }) {
  return (
    <div className="premium-card p-5 flex items-center gap-5 hover:border-nykaa-pink/30 cursor-pointer group transition-all">
      <div className="w-16 h-16 rounded-2xl overflow-hidden shrink-0 border border-gray-100 shadow-sm relative">
        <img src={image} alt={expert} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
        <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
      </div>
      <div className="flex-1 min-w-0">
        <h4 className="font-black text-base text-gray-900 leading-tight mb-1 truncate">{title}</h4>
        <div className="flex items-center gap-3">
           <p className="text-[10px] text-nykaa-pink font-black uppercase tracking-widest">{expert}</p>
           <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
           <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">{time}</p>
        </div>
      </div>
      <div className="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center text-gray-400 group-hover:bg-nykaa-pink group-hover:text-white transition-all">
        <ChevronRight className="w-6 h-6" />
      </div>
    </div>
  );
}

function ActionCard({ icon, title, subtitle, onClick, color, iconBg }) {
  return (
    <div 
      onClick={onClick}
      className={`${color} rounded-[2rem] p-6 cursor-pointer hover:shadow-xl hover:shadow-gray-200 transition-all active:scale-95 group border border-transparent hover:border-white`}
    >
      <div className={`${iconBg} w-14 h-14 rounded-2xl flex items-center justify-center mb-5 shadow-sm group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
        {icon}
      </div>
      <h4 className="font-black text-gray-900 text-sm tracking-tight mb-1">{title}</h4>
      <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wider leading-tight">{subtitle}</p>
    </div>
  );
}

function TrendingCard({ image, title, author, onClick }) {
  return (
    <div 
      onClick={onClick}
      className="h-[240px] rounded-[2.5rem] overflow-hidden relative cursor-pointer group shadow-lg shadow-gray-200/50"
    >
      <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
      <div className="absolute bottom-5 left-5 right-5">
        <div className="flex items-center gap-2 mb-2">
           <div className="w-5 h-5 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
              <PlaySquare className="w-2.5 h-2.5 text-white fill-white" />
           </div>
           <span className="text-[8px] text-white/70 font-black uppercase tracking-widest">Tutorial</span>
        </div>
        <p className="text-white font-black text-sm leading-tight tracking-tight mb-1 group-hover:text-nykaa-pink transition-colors">{title}</p>
        <p className="text-white/50 text-[10px] font-bold uppercase tracking-widest">{author}</p>
      </div>
      
      <button className="absolute top-4 right-4 w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all">
        <Heart className="w-5 h-5" />
      </button>
    </div>
  );
}

function SearchIcon({ className }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="11" cy="11" r="8"></circle>
      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
    </svg>
  );
}
