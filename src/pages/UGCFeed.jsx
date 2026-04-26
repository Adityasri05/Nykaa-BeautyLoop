import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Heart, MessageCircle, Share2, ShoppingBag, CheckCircle2, Music, Volume2, Plus, X } from 'lucide-react';

export default function UGCFeed({ navigate, showSuccess, addToCart }) {
  const posts = [
    {
      id: 1,
      author: "Sneha Rao",
      handle: "@snehamakeup",
      videoUrl: "https://images.unsplash.com/photo-1512496115851-a408e8cece92?auto=format&fit=crop&q=80&w=600",
      description: "My go-to summer dewy look! ✨ Sunscreen is a MUST. #SummerReady #NykaaBeauty #GlowingSkin",
      likes: "12.4K",
      comments: "342",
      music: "Summer Vibes - Lofi Mix",
      products: [
        { name: "Aqualogica Radiance+ Dewy Sunscreen", price: "₹399", image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=100" },
        { name: "Kay Beauty Hydrating Foundation", price: "₹1,200", image: "https://images.unsplash.com/photo-1599305090598-fe179d501227?auto=format&fit=crop&q=80&w=100" }
      ]
    },
    {
      id: 2,
      author: "Priya Singh",
      handle: "@priya_curls",
      videoUrl: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80&w=600",
      description: "Curly hair wash day routine using only 3 products! 🌀 #CurlyHair #WashDay #HairCare",
      likes: "8.1K",
      comments: "120",
      music: "Hair Flip - Viral Audio",
      products: [
        { name: "Plum Avocado Frizz-Control Cream", price: "₹450", image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80&w=100" }
      ]
    }
  ];

  const [activePost, setActivePost] = useState(0);
  const [showProducts, setShowProducts] = useState(false);
  const [likedPosts, setLikedPosts] = useState({});

  const toggleLike = (id) => {
    setLikedPosts(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const handleScroll = (e) => {
    const scrollHeight = e.target.scrollHeight;
    const scrollTop = e.target.scrollTop;
    const clientHeight = e.target.clientHeight;
    const index = Math.round(scrollTop / clientHeight);
    if (index !== activePost) {
      setActivePost(index);
    }
  };

  return (
    <div className="bg-black h-full w-full relative flex justify-center overflow-hidden">
      {/* Immersive Background Blur */}
      <div className="absolute inset-0 bg-nykaa-mesh opacity-40 blur-3xl"></div>

      <div 
        className="h-full w-full md:max-w-md lg:max-w-lg overflow-y-auto snap-y snap-mandatory no-scrollbar relative shadow-[0_0_50px_rgba(0,0,0,0.5)] border-x border-white/5 bg-black z-10"
        onScroll={handleScroll}
      >
        <button 
          onClick={() => navigate('hub')} 
          className="fixed top-6 left-6 z-50 p-3 bg-white/10 backdrop-blur-2xl rounded-2xl text-white border border-white/20 hover:bg-white/20 transition-all active:scale-90"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {posts.map((post, index) => (
          <div key={post.id} className="h-full w-full snap-start relative bg-black flex flex-col">
            <img 
              src={post.videoUrl} 
              alt="UGC Content" 
              className="w-full h-full object-cover opacity-80"
            />
            
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/90 pointer-events-none"></div>

            {/* Right Action Bar */}
            <div className="absolute right-4 bottom-40 flex flex-col items-center space-y-8 animate-slide-right">
              <div className="flex flex-col items-center gap-1">
                <button 
                  onClick={() => toggleLike(post.id)}
                  className={`p-3 rounded-full backdrop-blur-md border border-white/10 transition-all active:scale-125 ${likedPosts[post.id] ? 'bg-nykaa-pink text-white border-none' : 'bg-white/10 text-white'}`}
                >
                  <Heart className={`w-7 h-7 ${likedPosts[post.id] ? 'fill-current' : ''}`} />
                </button>
                <span className="text-[10px] font-black text-white uppercase tracking-widest">{post.likes}</span>
              </div>

              <div className="flex flex-col items-center gap-1">
                <button className="p-3 bg-white/10 backdrop-blur-md rounded-full text-white border border-white/10 hover:bg-white/20 transition-all">
                  <MessageCircle className="w-7 h-7" />
                </button>
                <span className="text-[10px] font-black text-white uppercase tracking-widest">{post.comments}</span>
              </div>

              <div className="flex flex-col items-center gap-1">
                <button className="p-3 bg-white/10 backdrop-blur-md rounded-full text-white border border-white/10 hover:bg-white/20 transition-all">
                  <Share2 className="w-7 h-7" />
                </button>
                <span className="text-[10px] font-black text-white uppercase tracking-widest">Share</span>
              </div>

              <div className="w-12 h-12 rounded-full border-4 border-white/20 overflow-hidden animate-spin-slow">
                <img src={`https://i.pravatar.cc/150?u=${post.handle}`} alt="Profile" className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Bottom Content Area */}
            <div className="absolute bottom-0 left-0 right-0 p-6 pb-28 space-y-4">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-xl border border-white/30 overflow-hidden shadow-2xl">
                    <img src={`https://i.pravatar.cc/150?u=${post.handle}`} alt="Avatar" />
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-nykaa-pink rounded-lg flex items-center justify-center border-2 border-black">
                    <Plus className="w-3 h-3 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg flex items-center gap-2">
                    {post.handle}
                    <CheckCircle2 className="w-4 h-4 text-nykaa-pink" />
                  </h3>
                  <div className="flex items-center gap-2 mt-0.5">
                    <span className="text-white/60 text-[10px] font-black uppercase tracking-widest bg-white/10 px-2 py-0.5 rounded-md">Pro Creator</span>
                  </div>
                </div>
              </div>
              
              <p className="text-white/90 text-sm leading-relaxed line-clamp-2 pr-12">{post.description}</p>
              
              <div className="flex items-center gap-2 text-white/60 text-xs">
                <Music className="w-3 h-3" />
                <marquee className="w-32">{post.music}</marquee>
              </div>

              <button 
                onClick={() => setShowProducts(true)}
                className="w-full premium-card bg-white border-none py-4 px-6 flex items-center justify-between group shadow-2xl shadow-nykaa-pink/20"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-nykaa-gradient rounded-xl flex items-center justify-center text-white shadow-lg">
                    <ShoppingBag className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <span className="block text-[10px] font-black text-nykaa-pink uppercase tracking-widest">Shop the Look</span>
                    <span className="block text-sm font-bold text-gray-900">{post.products.length} Items Highlighted</span>
                  </div>
                </div>
                <div className="w-8 h-8 bg-gray-50 rounded-lg flex items-center justify-center text-gray-400 group-hover:bg-nykaa-pink group-hover:text-white transition-all">
                  <ChevronRight className="w-5 h-5" />
                </div>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Product Drawer */}
      {showProducts && (
        <div className="absolute inset-0 z-[100] flex flex-col justify-end">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setShowProducts(false)}></div>
          <div className="relative bg-white rounded-t-[3rem] p-8 animate-pop shadow-[0_-20px_50px_rgba(0,0,0,0.3)] w-full md:max-w-md lg:max-w-lg mx-auto">
            <div className="w-16 h-1.5 bg-gray-100 rounded-full mx-auto mb-8"></div>
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-2xl font-display font-black text-gray-900">Featured Products</h3>
              <button onClick={() => setShowProducts(false)} className="p-2 bg-gray-50 rounded-xl text-gray-400">
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="space-y-6 max-h-[50vh] overflow-y-auto no-scrollbar pb-6">
              {posts[activePost].products.map((product, i) => (
                <div key={i} className="premium-card p-4 flex gap-5 hover:border-nykaa-pink/30 group">
                  <div className="w-24 h-24 bg-gray-50 rounded-2xl overflow-hidden shadow-inner group-hover:scale-105 transition-transform duration-500">
                    <img src={product.image} alt={product.name} className="w-full h-full object-cover mix-blend-multiply" />
                  </div>
                  <div className="flex-1 flex flex-col justify-center">
                    <h4 className="font-bold text-gray-900 leading-tight mb-2 group-hover:text-nykaa-pink transition-colors">{product.name}</h4>
                    <div className="flex justify-between items-center mt-auto">
                      <span className="text-lg font-black text-gray-900">{product.price}</span>
                      <button 
                        onClick={() => {
                          addToCart({
                            id: `ugc-${product.name.replace(/\s+/g, '-').toLowerCase()}`,
                            ...product
                          });
                          showSuccess(20, "Added to Bag!");
                        }}
                        className="bg-black text-white px-6 py-2.5 rounded-xl text-xs font-bold hover:bg-nykaa-pink transition-all active:scale-95 shadow-lg shadow-black/10"
                      >
                        Add to Bag
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
