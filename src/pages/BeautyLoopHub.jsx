import React from 'react';
import { ChevronLeft, Gift, Bell, Star, Sparkles, Search, Share2, Play, Heart, MessageCircle } from 'lucide-react';
import { userData } from '../data';

export default function BeautyLoopHub({ navigate, userName }) {
  const posts = [
    {
      id: 1,
      user: "Ishita P.",
      avatar: "https://ui-avatars.com/api/?name=Ishita+P&background=ff3f6c&color=fff",
      content: "Just tried the new Minimalist serum from my last reward! ✨ My skin feels so hydrated. Definitely worth the points!",
      likes: 24,
      comments: 5,
      image: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80&w=400"
    },
    {
      id: 2,
      user: "Sanya M.",
      avatar: "https://ui-avatars.com/api/?name=Sanya+M&background=ff3f6c&color=fff",
      content: "Finally hit Gold Tier! 🏆 The birthday gift is amazing. Keep going for those missions guys!",
      likes: 56,
      comments: 12,
      image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=400"
    }
  ];

  return (
    <div className="bg-[#faf7f5] min-h-full pb-20 animate-pop">
      {/* Search Header */}
      <div className="bg-white px-5 py-4 sticky top-0 z-20 border-b border-gray-100 flex items-center gap-3">
        <button onClick={() => navigate('home')} className="text-gray-800">
          <ChevronLeft className="w-6 h-6" />
        </button>
        <div className="flex-1 bg-gray-100 rounded-full py-2 px-4 flex items-center gap-2">
          <Search className="w-4 h-4 text-gray-400" />
          <input 
            type="text" 
            placeholder="Search Nykaa Community..." 
            className="bg-transparent border-none focus:ring-0 text-sm w-full"
          />
        </div>
        <Bell className="w-6 h-6 text-gray-400" />
      </div>

      <div className="p-5 space-y-6">
        {/* Tier Status Card */}
        <div className="bg-white rounded-3xl p-5 border border-nykaa-pink/10 shadow-sm flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-nykaa-pink/10 rounded-2xl flex items-center justify-center">
              <Star className="w-6 h-6 text-nykaa-pink fill-current" />
            </div>
            <div>
              <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Your Status</p>
              <h3 className="font-bold text-gray-900">{userData.tier}</h3>
            </div>
          </div>
          <button 
            onClick={() => navigate('rewards')}
            className="bg-nykaa-pink/5 text-nykaa-pink text-xs font-bold px-4 py-2 rounded-xl border border-nykaa-pink/10"
          >
            Manage
          </button>
        </div>

        {/* Stories/Shorts */}
        <div className="flex gap-4 overflow-x-auto no-scrollbar -mx-5 px-5">
          <div className="min-w-[70px] flex flex-col items-center gap-1.5">
            <div className="w-[70px] h-[70px] rounded-full border-2 border-nykaa-pink p-0.5 relative group">
              <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                <img src={`https://ui-avatars.com/api/?name=${userName}&background=eee&color=888`} alt="Add" />
              </div>
              <div className="absolute bottom-0 right-0 bg-nykaa-pink text-white rounded-full p-0.5 border-2 border-white">
                <Sparkles className="w-3 h-3" />
              </div>
            </div>
            <span className="text-[10px] font-bold text-gray-900">Your Story</span>
          </div>
          {[1,2,3,4].map(i => (
            <div key={i} className="min-w-[70px] flex flex-col items-center gap-1.5">
              <div className="w-[70px] h-[70px] rounded-full border-2 border-gray-200 p-0.5">
                <div className="w-full h-full rounded-full bg-gray-100 flex items-center justify-center overflow-hidden">
                   <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="User" />
                </div>
              </div>
              <span className="text-[10px] font-medium text-gray-500">BeautyExpert</span>
            </div>
          ))}
        </div>

        {/* Feed Posts */}
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <h3 className="font-bold text-gray-900">Beauty Feed</h3>
            <div className="flex gap-4">
              <span className="text-sm font-bold text-nykaa-pink">Trending</span>
              <span className="text-sm font-bold text-gray-400">Latest</span>
            </div>
          </div>

          {posts.map(post => (
            <div key={post.id} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100">
              <div className="p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img src={post.avatar} alt={post.user} className="w-8 h-8 rounded-full border border-gray-100" />
                  <span className="font-bold text-sm text-gray-900">{post.user}</span>
                </div>
                <button className="text-gray-400"><Share2 className="w-4 h-4" /></button>
              </div>
              
              <div className="relative aspect-square md:aspect-video bg-gray-100">
                <img src={post.image} alt="Post" className="w-full h-full object-cover" />
                <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-md p-2 rounded-full">
                  <Play className="w-4 h-4 text-white fill-current" />
                </div>
              </div>

              <div className="p-4">
                <p className="text-sm text-gray-700 leading-relaxed mb-4">{post.content}</p>
                <div className="flex items-center gap-6">
                  <button className="flex items-center gap-1.5 text-gray-500 hover:text-nykaa-pink transition-colors">
                    <Heart className="w-5 h-5" />
                    <span className="text-xs font-bold">{post.likes}</span>
                  </button>
                  <button className="flex items-center gap-1.5 text-gray-500">
                    <MessageCircle className="w-5 h-5" />
                    <span className="text-xs font-bold">{post.comments}</span>
                  </button>
                  <button 
                    onClick={() => navigate('recommendations')}
                    className="ml-auto bg-nykaa-pink/5 text-nykaa-pink text-[10px] font-bold px-3 py-1.5 rounded-lg border border-nykaa-pink/10"
                  >
                    View Products
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
