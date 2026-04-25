import React from 'react';
import { 
  ChevronLeft, Star, ChevronRight, CheckCircle2, 
  Circle, Gift, Zap, Sparkles, Trophy, Crown 
} from 'lucide-react';
import { userData } from '../data';

function BenefitCard({ tier, benefits, current, color, icon }) {
  return (
    <div className={`premium-card p-6 relative overflow-hidden h-full ${current ? 'ring-2 ring-nykaa-pink bg-white' : 'bg-gray-50/50 grayscale-[0.5] opacity-80'}`}>
      {current && (
        <div className="absolute -top-1 -right-1 bg-nykaa-pink text-white text-[10px] font-black px-4 py-1.5 rounded-bl-2xl shadow-lg animate-pulse">
          YOUR TIER
        </div>
      )}
      <div className="flex items-center gap-3 mb-5">
        <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-white shadow-lg ${color}`}>
          {icon}
        </div>
        <h4 className="font-display font-bold text-lg text-gray-900">{tier}</h4>
      </div>
      <ul className="space-y-3">
        {benefits.map((b, i) => (
          <li key={i} className="flex items-start gap-3 text-xs font-medium text-gray-600">
            <CheckCircle2 className={`w-4 h-4 shrink-0 ${current ? 'text-green-500' : 'text-gray-300'}`} />
            {b}
          </li>
        ))}
      </ul>
      {current && <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-nykaa-pink/5 rounded-full blur-2xl"></div>}
    </div>
  );
}

export default function Rewards({ navigate, showSuccess, points, missions, setMissions }) {
  const completeMission = (id, rewardPts) => {
    setMissions(missions.map(m => m.id === id ? { ...m, completed: true } : m));
    showSuccess(rewardPts, "Mission Completed!");
  };

  const progress = (points / userData.nextTierPoints) * 100;

  return (
    <div className="bg-white min-h-full pb-20 relative overflow-hidden">
      {/* Background Mesh */}
      <div className="fixed inset-0 bg-nykaa-mesh opacity-30 pointer-events-none"></div>

      <header className="px-5 py-6 bg-white/80 backdrop-blur-xl sticky top-0 z-30 flex items-center border-b border-gray-100/50">
        <button onClick={() => navigate('home')} className="p-3 bg-gray-50 rounded-2xl text-gray-800 hover:bg-gray-100 transition-colors">
          <ChevronLeft className="w-5 h-5" />
        </button>
        <h1 className="text-xl font-display font-black ml-4">Glow Rewards</h1>
      </header>

      <div className="p-5 md:p-10 space-y-10 relative z-10">
        
        {/* Tier Status Card */}
        <section className="premium-card p-10 bg-nykaa-gradient relative overflow-hidden text-white text-center border-none">
          <div className="relative z-10">
            <div className="w-20 h-20 bg-white/20 backdrop-blur-xl rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl animate-float">
              <Star className="w-10 h-10 text-white fill-current" />
            </div>
            <p className="text-xs font-black uppercase tracking-[0.3em] opacity-80 mb-2">Member Status</p>
            <h2 className="text-4xl font-display font-black mb-1">{userData.tier}</h2>
            <div className="flex items-center justify-center gap-2 mb-8">
              <span className="text-5xl font-black">{points}</span>
              <span className="text-sm font-bold opacity-80 mt-4">Glow Pts</span>
            </div>
            
            <div className="max-w-md mx-auto">
              <div className="flex justify-between text-[10px] font-black uppercase tracking-widest mb-3">
                <span className="opacity-80">Current Level</span>
                <span className="opacity-80">Platinum ({userData.nextTierPoints})</span>
              </div>
              <div className="h-4 bg-black/20 rounded-full overflow-hidden backdrop-blur-md p-1 border border-white/10">
                <div 
                  className="h-full bg-white rounded-full transition-all duration-1000 ease-out relative group"
                  style={{ width: `${progress}%` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/40 to-white/0 animate-shimmer"></div>
                  <div className="absolute -right-2 -top-2 w-8 h-8 bg-white rounded-full shadow-xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Zap className="w-4 h-4 text-nykaa-pink" />
                  </div>
                </div>
              </div>
              <p className="text-xs font-bold mt-4 opacity-90">Only {userData.nextTierPoints - points} points until your next big reward!</p>
            </div>
          </div>
          
          {/* Decorative Elements */}
          <Sparkles className="absolute -left-10 -bottom-10 w-48 h-48 opacity-10" />
          <Trophy className="absolute -right-10 -top-10 w-48 h-48 opacity-10 rotate-12" />
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Missions Section */}
          <section className="space-y-6">
            <div className="flex items-center justify-between px-2">
              <h3 className="text-2xl font-display font-bold text-gray-900">Glow Missions ⚡</h3>
              <span className="text-xs font-black text-nykaa-pink uppercase tracking-widest">Daily Reset</span>
            </div>
            <div className="space-y-4">
              {missions.map((mission, i) => (
                <button 
                  key={mission.id}
                  disabled={mission.completed}
                  onClick={() => completeMission(mission.id, mission.points)}
                  className={`w-full premium-card p-6 flex items-center justify-between group animate-pop ${
                    mission.completed 
                    ? 'opacity-50 grayscale bg-gray-50 cursor-default' 
                    : 'hover:border-nykaa-pink active:scale-[0.98]'
                  }`}
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <div className="flex items-center gap-5">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-sm transition-all duration-500 ${
                      mission.completed ? 'bg-gray-100' : 'bg-pink-50 group-hover:scale-110 group-hover:rotate-3'
                    }`}>
                      {mission.completed ? (
                        <CheckCircle2 className="w-7 h-7 text-green-500" />
                      ) : (
                        <Circle className="w-7 h-7 text-nykaa-pink/30 group-hover:text-nykaa-pink" />
                      )}
                    </div>
                    <div className="text-left">
                      <h4 className={`text-lg font-bold ${mission.completed ? 'text-gray-400 line-through' : 'text-gray-900'}`}>
                        {mission.title}
                      </h4>
                      <p className={`text-xs font-black uppercase tracking-widest mt-1 ${mission.completed ? 'text-gray-400' : 'text-nykaa-pink'}`}>
                        {mission.completed ? 'Completed' : `+${mission.points} Points`}
                      </p>
                    </div>
                  </div>
                  {!mission.completed && (
                    <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center group-hover:bg-nykaa-pink group-hover:text-white transition-all">
                      <ChevronRight className="w-5 h-5" />
                    </div>
                  )}
                </button>
              ))}
            </div>
          </section>

          {/* Benefits Section */}
          <section className="space-y-6">
            <h3 className="text-2xl font-display font-bold text-gray-900 px-2">Tier Privileges 💎</h3>
            <div className="grid grid-cols-1 gap-6">
              <BenefitCard 
                tier="Silver Member"
                current={userData.tier === 'Silver'}
                benefits={["5% Bonus Points on every purchase", "Standard Birthday Reward (50 Pts)", "Member-only flash deals"]}
                color="bg-slate-500"
                icon={<Star className="w-6 h-6" />}
              />
              <BenefitCard 
                tier="Gold Elite"
                current={userData.tier === 'Gold'}
                benefits={["10% Bonus Points on every purchase", "Premium Birthday Gift Set", "Early Access to 'Pink Friday' Sale", "Unlimited Free Shipping"]}
                color="bg-amber-500"
                icon={<Crown className="w-6 h-6" />}
              />
              <BenefitCard 
                tier="Platinum VIP"
                current={userData.tier === 'Platinum'}
                benefits={["15% Bonus Points on every purchase", "Concierge Birthday Surprise", "Priority 2-Hour Delivery", "Personal Beauty Consultant 24/7", "Exclusive Launch Event Invites"]}
                color="bg-rose-500"
                icon={<Sparkles className="w-6 h-6" />}
              />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
