import React from 'react';
import { 
  ChevronLeft, Settings, ShoppingBag, Heart, 
  MapPin, CreditCard, Bell, LogOut, ShieldCheck, 
  HelpCircle, Gift, ChevronRight, Star, User, 
  Wallet, Headphones, Info, Sparkles 
} from 'lucide-react';
import { userData } from '../data';

export default function Account({ navigate, onLogout, userName, points }) {
  const accountSections = [
    {
      title: "My Activity",
      items: [
        { id: 'cart', label: 'Shopping Bag', icon: <ShoppingBag className="w-5 h-5 text-nykaa-pink" />, desc: 'Check your current bag items' },
        { id: 'orders', label: 'Order History', icon: <ShoppingBag className="w-5 h-5 text-indigo-500" />, desc: 'View past orders and tracking' },
        { id: 'wishlist', label: 'My Wishlist', icon: <Heart className="w-5 h-5 text-rose-500" />, desc: 'Your saved beauty picks' },
        { id: 'rewards', label: 'Beauty Rewards', icon: <Star className="w-5 h-5 text-amber-500" />, desc: `Balance: ${points} Glow Points` },
      ]
    },
    {
      title: "Settings",
      items: [
        { id: 'profile', label: 'Personal Info', icon: <User className="w-5 h-5 text-blue-500" />, desc: 'Update your profile details' },
        { id: 'addresses', label: 'Delivery Addresses', icon: <MapPin className="w-5 h-5 text-emerald-500" />, desc: 'Manage your home & office addresses' },
        { id: 'payments', label: 'Payment Methods', icon: <Wallet className="w-5 h-5 text-violet-500" />, desc: 'Manage cards and UPI' },
        { id: 'notifications', label: 'Beauty Alerts', icon: <Bell className="w-5 h-5 text-orange-500" />, desc: 'Manage sales and routine alerts' },
      ]
    },
    {
      title: "Help & Privacy",
      items: [
        { id: 'help', label: 'Help Center', icon: <Headphones className="w-5 h-5 text-cyan-500" />, desc: '24/7 Expert support' },
        { id: 'privacy', label: 'Privacy & Security', icon: <ShieldCheck className="w-5 h-5 text-gray-400" />, desc: 'Manage your data and security' },
      ]
    }
  ];

  return (
    <div className="bg-white min-h-full pb-20 relative overflow-hidden">
      {/* Background Mesh */}
      <div className="fixed inset-0 bg-nykaa-mesh opacity-30 pointer-events-none"></div>

      {/* Header */}
      <header className="px-5 py-6 bg-white/80 backdrop-blur-xl sticky top-0 z-30 flex items-center border-b border-gray-100/50">
        <button onClick={() => navigate('home')} className="p-3 bg-gray-50 rounded-2xl text-gray-800 hover:bg-gray-100 transition-colors">
          <ChevronLeft className="w-5 h-5" />
        </button>
        <h1 className="text-xl font-display font-black ml-4">My Account</h1>
      </header>

      <div className="p-5 md:p-10 grid grid-cols-1 lg:grid-cols-3 gap-10 relative z-10">
        
        {/* Profile Identity Card */}
        <div className="lg:col-span-1">
          <div className="premium-card p-10 flex flex-col items-center text-center sticky top-28 border-none bg-white">
            <div className="relative mb-6">
              <div className="w-32 h-32 rounded-[2.5rem] overflow-hidden border-4 border-white shadow-2xl ring-4 ring-nykaa-pink/5 animate-float">
                <img src={`https://ui-avatars.com/api/?name=${encodeURIComponent(userName)}&background=ff3f6c&color=fff&size=200`} alt="Profile" />
              </div>
              <div className="absolute -bottom-2 -right-2 bg-green-500 border-4 border-white w-10 h-10 rounded-2xl shadow-xl flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
            </div>
            
            <h2 className="text-3xl font-display font-bold text-gray-900">{userName}</h2>
            <p className="text-sm font-medium text-gray-400 mt-1 mb-6">NYK-MBR-{points}24</p>
            
            <div className="flex items-center gap-2 bg-nykaa-gradient text-white px-6 py-3 rounded-2xl text-sm font-bold shadow-lg shadow-nykaa-pink/30">
              <Star className="w-4 h-4 fill-current" /> {userData.tier} Status
            </div>

            <div className="mt-10 w-full grid grid-cols-2 gap-4">
              <div className="bg-gray-50 rounded-3xl p-5 text-center group hover:bg-nykaa-pink/5 transition-colors">
                <p className="text-2xl font-black text-gray-900 group-hover:text-nykaa-pink transition-colors">{points}</p>
                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-1">Glow Points</p>
              </div>
              <div className="bg-gray-50 rounded-3xl p-5 text-center group hover:bg-nykaa-pink/5 transition-colors">
                <p className="text-2xl font-black text-gray-900 group-hover:text-nykaa-pink transition-colors">14</p>
                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-1">Orders</p>
              </div>
            </div>
            
            <button 
              onClick={onLogout}
              className="mt-10 w-full flex items-center justify-center gap-3 text-rose-500 font-bold text-sm py-4 rounded-2xl border-2 border-rose-50 hover:bg-rose-50 transition-all"
            >
              <LogOut className="w-5 h-5" /> Sign Out
            </button>
          </div>
        </div>

        {/* Navigation Sections */}
        <div className="lg:col-span-2 space-y-12">
          {accountSections.map((section, idx) => (
            <div key={idx} className="space-y-6">
              <div className="flex items-center gap-3 px-4">
                <div className="w-1.5 h-6 bg-nykaa-pink rounded-full"></div>
                <h3 className="text-xl font-display font-bold text-gray-900">{section.title}</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {section.items.map((item) => (
                  <button 
                    key={item.id}
                    onClick={() => navigate(item.id)}
                    className="premium-card p-6 flex items-center gap-5 text-left group hover:border-nykaa-pink/30 active:scale-[0.98]"
                  >
                    <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-white group-hover:shadow-md transition-all duration-500">
                      {item.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-gray-900 group-hover:text-nykaa-pink transition-colors">{item.label}</h4>
                      <p className="text-xs text-gray-500 mt-1 line-clamp-1">{item.desc}</p>
                    </div>
                    <ChevronRight className="w-5 h-5 text-gray-300 group-hover:text-nykaa-pink group-hover:translate-x-1 transition-all" />
                  </button>
                ))}
              </div>
            </div>
          ))}

          <div className="pt-10 text-center border-t border-gray-100">
            <p className="text-[10px] text-gray-400 font-bold uppercase tracking-[0.3em]">Nykaa BeautyLoop • Luxury Edition</p>
            <div className="flex justify-center gap-6 mt-6">
              <button className="text-[11px] font-bold text-gray-500 hover:text-nykaa-pink">Terms</button>
              <button className="text-[11px] font-bold text-gray-500 hover:text-nykaa-pink">Privacy</button>
              <button className="text-[11px] font-bold text-gray-500 hover:text-nykaa-pink">Cookies</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
