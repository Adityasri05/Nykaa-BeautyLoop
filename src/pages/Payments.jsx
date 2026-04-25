import React from 'react';
import { 
  ChevronLeft, CreditCard, Plus, 
  MoreVertical, ShieldCheck, Zap, 
  Smartphone, Wallet 
} from 'lucide-react';

const MOCK_CARDS = [
  {
    id: 1,
    brand: 'Visa',
    number: '•••• •••• •••• 4242',
    expiry: '12/25',
    color: 'bg-gradient-to-br from-indigo-600 to-violet-700',
    isDefault: true
  },
  {
    id: 2,
    brand: 'Mastercard',
    number: '•••• •••• •••• 5555',
    expiry: '08/24',
    color: 'bg-gradient-to-br from-gray-800 to-black',
    isDefault: false
  }
];

export default function Payments({ navigate }) {
  return (
    <div className="bg-[#faf7f5] min-h-full pb-32 relative overflow-hidden">
      <header className="px-6 py-6 sticky top-0 bg-white/80 backdrop-blur-xl z-30 flex items-center justify-between border-b border-gray-100">
        <div className="flex items-center gap-4">
          <button 
            onClick={() => navigate('account')} 
            className="w-10 h-10 flex items-center justify-center bg-white rounded-xl text-gray-800 shadow-sm border border-gray-100 active:scale-90 transition-all"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <div>
            <h1 className="text-xl font-black text-gray-900 tracking-tight">Payments</h1>
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-nykaa-pink flex items-center gap-1.5">
              <ShieldCheck className="w-3 h-3" /> Secure Wallet
            </p>
          </div>
        </div>
        <button className="w-10 h-10 bg-black/5 rounded-full flex items-center justify-center text-gray-400">
          <Zap className="w-5 h-5" />
        </button>
      </header>

      <div className="p-6 md:p-10 space-y-10">
        {/* Saved Cards Carousel Mock */}
        <div className="space-y-6">
          <div className="flex justify-between items-center px-1">
            <h3 className="text-xs font-black text-gray-400 uppercase tracking-[0.2em]">Saved Cards</h3>
            <button className="text-[10px] font-black text-nykaa-pink uppercase tracking-widest flex items-center gap-1">
              <Plus className="w-3 h-3" /> Add New
            </button>
          </div>
          
          <div className="flex gap-6 overflow-x-auto pb-6 px-1 no-scrollbar -mx-6 md:mx-0 md:px-0">
            {MOCK_CARDS.map((card, idx) => (
              <div 
                key={card.id}
                className={`w-[280px] shrink-0 aspect-[1.6/1] rounded-[2.5rem] p-8 text-white relative overflow-hidden shadow-2xl shadow-indigo-200/20 animate-slide-right ${card.color}`}
                style={{ animationDelay: `${idx * 0.15}s` }}
              >
                <div className="absolute -right-10 -top-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
                <div className="absolute -left-10 -bottom-10 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
                
                <div className="relative z-10 flex flex-col h-full justify-between">
                  <div className="flex justify-between items-start">
                    <div className="w-12 h-10 bg-white/20 backdrop-blur-md rounded-lg border border-white/20 flex items-center justify-center">
                      <CreditCard className="w-6 h-6" />
                    </div>
                    <span className="font-black italic text-xl tracking-tighter opacity-80">{card.brand}</span>
                  </div>
                  
                  <div>
                    <p className="text-xl font-medium tracking-[0.25em] mb-4">{card.number}</p>
                    <div className="flex justify-between items-end">
                      <div>
                        <p className="text-[8px] font-black uppercase tracking-widest opacity-60 mb-0.5">Expiry Date</p>
                        <p className="text-sm font-bold">{card.expiry}</p>
                      </div>
                      <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                        <ShieldCheck className="w-5 h-5 text-white/50" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Other Payment Methods */}
        <div className="space-y-4">
          <h3 className="text-xs font-black text-gray-400 uppercase tracking-[0.2em] px-1">Other Methods</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="premium-card p-6 flex items-center justify-between group cursor-pointer hover:border-nykaa-pink/30 transition-all">
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-[1.5rem] flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Smartphone className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="text-base font-black text-gray-900 tracking-tight">UPI Payments</h4>
                  <p className="text-xs text-gray-400 font-medium">Google Pay, PhonePe, Paytm</p>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-300 group-hover:text-gray-900 transition-colors" />
            </div>

            <div className="premium-card p-6 flex items-center justify-between group cursor-pointer hover:border-nykaa-pink/30 transition-all">
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 bg-amber-50 text-amber-600 rounded-[1.5rem] flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Wallet className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="text-base font-black text-gray-900 tracking-tight">Nykaa Wallet</h4>
                  <p className="text-xs text-amber-600 font-bold">Balance: ₹450.00</p>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-300 group-hover:text-gray-900 transition-colors" />
            </div>
          </div>
        </div>

        {/* Trust Badge */}
        <div className="bg-white/50 border border-gray-100 rounded-[2.5rem] p-8 text-center">
          <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <ShieldCheck className="w-7 h-7" />
          </div>
          <h4 className="text-sm font-black text-gray-900 tracking-tight mb-2">PCI DSS Compliant</h4>
          <p className="text-xs text-gray-500 max-w-[200px] mx-auto leading-relaxed">Your payment information is encrypted and never stored on our servers.</p>
        </div>
      </div>
    </div>
  );
}
