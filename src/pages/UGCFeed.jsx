import React, { useState } from 'react';
import { ChevronLeft, Heart, MessageCircle, Share2, ShoppingBag, CheckCircle2 } from 'lucide-react';

export default function UGCFeed({ onBack }) {
  // Mock data for the UGC Feed
  const posts = [
    {
      id: 1,
      author: "Sneha Rao",
      handle: "@snehamakeup",
      videoUrl: "https://images.unsplash.com/photo-1512496115851-a408e8cece92?auto=format&fit=crop&q=80&w=600", // Using image to simulate video cover for hackathon
      description: "My go-to summer dewy look! ✨ Sunscreen is a MUST. #SummerReady #NykaaBeauty",
      likes: "12.4K",
      comments: "342",
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
      description: "Curly hair wash day routine using only 3 products! 🌀 #CurlyHair #WashDay",
      likes: "8.1K",
      comments: "120",
      products: [
        { name: "Plum Avocado Frizz-Control Cream", price: "₹450", image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80&w=100" }
      ]
    }
  ];

  const [activePost, setActivePost] = useState(0);
  const [showProducts, setShowProducts] = useState(false);

  // Handle simple scroll snapping simulation for prototype
  const handleScroll = (e) => {
    const bottom = e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
    if (bottom && activePost < posts.length - 1) {
      setActivePost(activePost + 1);
    }
  };

  return (
    <div className="bg-black h-full w-full relative">
      {/* Absolute Back Button overlay */}
      <button 
        onClick={onBack} 
        className="absolute top-4 left-4 z-50 p-2 bg-black/40 backdrop-blur-md rounded-full text-white"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Feed Container */}
      <div 
        className="h-full overflow-y-auto snap-y snap-mandatory no-scrollbar"
        onScroll={handleScroll}
      >
        {posts.map((post, index) => (
          <div key={post.id} className="h-full w-full snap-start relative bg-black">
            {/* Background Image (Simulating Video) */}
            <img 
              src={post.videoUrl} 
              alt="UGC Video" 
              className="w-full h-full object-cover opacity-90"
            />
            
            {/* Gradient Overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80"></div>

            {/* Right Action Bar */}
            <div className="absolute right-4 bottom-32 flex flex-col items-center space-y-6">
              <ActionButton icon={<Heart className="w-7 h-7" />} text={post.likes} />
              <ActionButton icon={<MessageCircle className="w-7 h-7" />} text={post.comments} />
              <ActionButton icon={<Share2 className="w-7 h-7" />} text="Share" />
            </div>

            {/* Bottom Content Area */}
            <div className="absolute bottom-0 left-0 right-0 p-4 pb-24">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-10 h-10 rounded-full bg-gray-300 overflow-hidden border-2 border-white">
                  <img src={`https://i.pravatar.cc/150?u=${post.handle}`} alt="avatar" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-sm flex items-center gap-1">
                    {post.author}
                    <CheckCircle2 className="w-4 h-4 text-blue-400" />
                  </h3>
                  <p className="text-gray-300 text-xs bg-white/20 px-2 py-0.5 rounded-full inline-block backdrop-blur-sm mt-0.5">
                    Verified Buyer
                  </p>
                </div>
                <button className="ml-auto border border-white text-white px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm">
                  Follow
                </button>
              </div>
              <p className="text-white text-sm mt-2 mb-4 line-clamp-2">{post.description}</p>
              
              {/* Shop This Look Button */}
              <button 
                onClick={() => setShowProducts(true)}
                className="w-full bg-nykaa-gradient text-white font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-2 animate-pulse shadow-[0_0_15px_rgba(252,39,121,0.5)]"
              >
                <ShoppingBag className="w-5 h-5" />
                Shop This Look ({post.products.length} Products)
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Product Bottom Drawer */}
      {showProducts && (
        <>
          <div 
            className="absolute inset-0 bg-black/50 z-40"
            onClick={() => setShowProducts(false)}
          ></div>
          <div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-3xl z-50 p-5 transform transition-transform animate-slideUp">
            <div className="w-12 h-1.5 bg-gray-200 rounded-full mx-auto mb-5"></div>
            <h3 className="font-bold text-lg mb-4">Products in this video</h3>
            
            <div className="space-y-4 max-h-[50vh] overflow-y-auto no-scrollbar pb-4">
              {posts[activePost].products.map((product, i) => (
                <div key={i} className="flex gap-4 p-3 border border-gray-100 rounded-xl shadow-sm">
                  <img src={product.image} alt={product.name} className="w-16 h-16 object-cover rounded-lg bg-gray-50" />
                  <div className="flex-1 flex flex-col justify-center">
                    <h4 className="font-semibold text-sm line-clamp-2 text-gray-800">{product.name}</h4>
                    <p className="text-nykaa-pink font-bold mt-1">{product.price}</p>
                  </div>
                  <div className="flex items-center">
                    <button className="bg-black text-white px-4 py-2 rounded-full text-xs font-bold">
                      Add
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

function ActionButton({ icon, text }) {
  return (
    <button className="flex flex-col items-center text-white drop-shadow-md transition-transform active:scale-90">
      <div className="p-2 bg-black/20 rounded-full backdrop-blur-sm">
        {icon}
      </div>
      <span className="text-xs font-semibold mt-1 drop-shadow-md">{text}</span>
    </button>
  );
}
