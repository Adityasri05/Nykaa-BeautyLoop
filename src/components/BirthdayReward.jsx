import React from 'react';
import { Cake, X, Gift, ArrowRight, Sparkles, Star, PartyPopper } from 'lucide-react';

export default function BirthdayReward({ onClose, onClaim }) {
  return (
    <div className="fixed inset-0 z-[500] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-xl" onClick={onClose}></div>
      
      <div className="relative z-10 w-full max-w-sm animate-scaleIn">
        {/* Floating elements */}
        <div className="absolute -top-10 -left-10 w-24 h-24 bg-nykaa-pink/20 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-purple-500/20 rounded-full blur-2xl animate-pulse delay-700"></div>

        <div className="bg-white rounded-[3.5rem] p-10 shadow-[0_30px_100px_-20px_rgba(0,0,0,0.5)] text-center relative overflow-hidden border border-white/20">
          {/* Top Decorative Banner */}
          <div className="absolute top-0 left-0 w-full h-32 bg-nykaa-gradient opacity-10 blur-3xl -z-10"></div>
          
          <button 
            onClick={onClose} 
            className="absolute top-6 right-6 w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center text-gray-400 hover:bg-gray-100 transition-all z-20"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="relative mb-10">
            <div className="w-24 h-24 bg-white rounded-[2.5rem] flex items-center justify-center mx-auto shadow-2xl relative z-10 group rotate-3 hover:rotate-0 transition-transform duration-500">
              <Cake className="w-12 h-12 text-nykaa-pink group-hover:scale-110 transition-transform" />
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-nykaa-pink rounded-full flex items-center justify-center border-4 border-white animate-bounce">
                 <PartyPopper className="w-3 h-3 text-white" />
              </div>
            </div>
            {/* Background Sparkles */}
            <Sparkles className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 text-nykaa-pink/10 -z-10 animate-spin-slow" />
          </div>

          <div className="mb-8">
            <h2 className="text-3xl font-black text-gray-900 tracking-tighter leading-none mb-3">Happy Birthday!</h2>
            <p className="text-sm text-gray-500 font-medium px-4">It's your special day, and you deserve to glow. We've unlocked exclusive rewards for you.</p>
          </div>

          <div className="space-y-4 mb-10">
            <div className="group flex items-center gap-4 bg-gray-50/50 border border-gray-100 p-5 rounded-[2rem] hover:bg-white hover:border-nykaa-pink/20 hover:shadow-xl hover:shadow-pink-100 transition-all">
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                <Gift className="w-7 h-7 text-nykaa-pink" />
              </div>
              <div className="text-left flex-1">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-nykaa-pink mb-1">Exclusive Gift</p>
                <h4 className="text-sm font-bold text-gray-900 leading-tight">Birthday Mini Kit</h4>
                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-0.5">Free with next order</p>
              </div>
            </div>

            <div className="group flex items-center gap-4 bg-gray-50/50 border border-gray-100 p-5 rounded-[2rem] hover:bg-white hover:border-emerald-500/20 hover:shadow-xl hover:shadow-emerald-100 transition-all">
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center text-xs text-white font-black">₹</div>
              </div>
              <div className="text-left flex-1">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-600 mb-1">Direct Reward</p>
                <h4 className="text-sm font-bold text-gray-900 leading-tight">₹250 Gift Voucher</h4>
                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-0.5">Auto-applied to wallet</p>
              </div>
            </div>
          </div>

          <button
            onClick={() => {
              onClaim(250);
              onClose();
            }}
            className="w-full bg-black text-white font-black py-5 rounded-[2rem] shadow-2xl shadow-black/10 hover:bg-nykaa-pink active:scale-95 transition-all flex items-center justify-center gap-3 group"
          >
            CLAIM MY REWARDS <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <div className="mt-6 flex items-center justify-center gap-2">
             <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
             <span className="text-[8px] font-black uppercase tracking-[0.3em] text-gray-400">Exclusive Member Privilege</span>
             <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
          </div>
        </div>
      </div>
    </div>
  );
}
