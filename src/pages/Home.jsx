import React, { useState } from 'react';
import { Sparkles, ShoppingBag, Gift, ArrowRight, RotateCcw, Camera, Zap, Star } from 'lucide-react';
import { userData, reorderItems, recommendedProducts } from '../data';
import TrendingNow from '../components/TrendingNow';
import FlashDeal from '../components/FlashDeal';
import RecentlyViewed from '../components/RecentlyViewed';
import IndieBrand from '../components/IndieBrand';
import BeautyTips from '../components/BeautyTips';
import BuyAgain from '../components/BuyAgain';
import BundleSave from '../components/BundleSave';
import BoughtTogether from '../components/BoughtTogether';
import QuickCompare from '../components/QuickCompare';
import SmartCoupon from '../components/SmartCoupon';
import ReferEarn from '../components/ReferEarn';
import BeautyStreak from '../components/BeautyStreak';
import GiftMeter from '../components/GiftMeter';
import SpinWheel from '../components/SpinWheel';
import BirthdayReward from '../components/BirthdayReward';
import ReviewReward from '../components/ReviewReward';

export default function Home({ navigate, showSuccess, addToCart, points, userName }) {
  const [showSpinWheel, setShowSpinWheel] = useState(false);
  const [showBirthday, setShowBirthday] = useState(false);
  const [showReview, setShowReview] = useState(false);

  const itemToReorder = reorderItems[0]; // Example: Cetaphil Facewash

  return (
    <>
      <div className="p-5 md:p-8 space-y-8 md:space-y-10 pb-6 animate-pop">
      {/* Header */}
      <header className="flex justify-between items-center pt-2">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            Hi {userName} ✨
            <button 
              onClick={() => setShowBirthday(true)} 
              className="ml-2 text-xs bg-nykaa-pink/10 text-nykaa-pink px-2 py-1 rounded-full animate-bounce inline-flex items-center gap-1"
            >
              <Gift className="w-3 h-3" /> Birthday Month!
            </button>
          </h1>
          <p className="text-gray-500 text-sm mt-1">Ready for your glow up?</p>
        </div>
        <div className="w-10 h-10 bg-gray-100 rounded-full overflow-hidden border border-gray-200">
          <img src={`https://ui-avatars.com/api/?name=${userName}&background=ff3f6c&color=fff`} alt="Profile" />
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {/* Loyalty Points Card */}
        <div 
          onClick={() => navigate('rewards')}
          className="bg-black text-white rounded-3xl p-5 shadow-xl relative overflow-hidden cursor-pointer active:scale-95 transition-transform"
        >
          <div className="relative z-10 flex justify-between items-center">
            <div>
              <p className="text-gray-300 text-sm font-medium flex items-center gap-1.5 mb-1">
                <Gift className="w-4 h-4 text-nykaa-pink" /> Glow Rewards
              </p>
              <h2 className="text-3xl font-bold">{points} <span className="text-lg font-normal text-gray-400">Pts</span></h2>
            </div>
            <div className="text-right">
              <p className="text-sm font-semibold text-nykaa-pink">{userData.tier}</p>
              <button className="mt-2 text-xs font-semibold bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded-full flex items-center gap-1">
                Explore Rewards <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>
          {/* Decorative circle */}
          <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-nykaa-pink opacity-20 rounded-full blur-2xl"></div>
        </div>

        {/* Reorder Reminder Card */}
        <div className="bg-pink-50 border border-nykaa-pink/20 rounded-3xl p-5 relative">
          <div className="absolute -top-3 -right-2 bg-nykaa-pink text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-sm flex items-center gap-1">
            <RotateCcw className="w-3 h-3" /> Running Low
          </div>
          <h3 className="font-bold text-gray-900 mb-3">Reorder Reminder</h3>
          <div className="flex gap-4 items-center">
            <img src={itemToReorder.image} alt="Product" className="w-16 h-16 rounded-xl object-cover bg-white shadow-sm" />
            <div className="flex-1">
              <p className="text-sm font-semibold text-gray-800 leading-tight">{itemToReorder.name}</p>
              <p className="text-xs text-nykaa-pink font-medium mt-1">May run out in {itemToReorder.daysLeft} days</p>
            </div>
          </div>
          <div className="mt-4 flex gap-3">
            <button 
              onClick={() => {
                addToCart({ ...itemToReorder, id: `reorder_${itemToReorder.id}` });
                showSuccess(50, "Reordered! +50 Points");
              }}
              className="flex-1 bg-nykaa-pink text-white font-semibold py-2.5 rounded-xl text-sm shadow-md hover:bg-[#e0305b] transition-colors"
            >
              Reorder Now
            </button>
            <button 
              onClick={() => navigate('reorder')}
              className="flex-1 bg-white border border-gray-200 text-gray-700 font-semibold py-2.5 rounded-xl text-sm hover:bg-gray-50 transition-colors"
            >
              View All
            </button>
          </div>
        </div>

        {/* Gift Meter Card */}
        <GiftMeter cartTotal={850} />

        {/* Spin & Win Card */}
        <div 
          onClick={() => setShowSpinWheel(true)}
          className="bg-gradient-to-br from-indigo-50 to-purple-50 border border-indigo-100 rounded-3xl p-5 relative cursor-pointer hover:shadow-lg transition-shadow overflow-hidden flex items-center justify-between"
        >
          <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-purple-500/10 rounded-full blur-2xl"></div>
          <div className="relative z-10">
            <div className="bg-indigo-100 w-10 h-10 rounded-2xl flex items-center justify-center mb-3">
               <Zap className="w-5 h-5 text-indigo-600" />
            </div>
            <h3 className="font-bold text-gray-900 leading-tight">Daily Spin & Win</h3>
            <p className="text-xs text-gray-500 mt-1">Win premium rewards daily</p>
          </div>
          <button 
            onClick={(e) => { e.stopPropagation(); setShowSpinWheel(true); }}
            className="relative z-10 bg-white border border-indigo-100 text-indigo-600 font-bold px-4 py-2 rounded-xl text-xs shadow-sm hover:bg-indigo-50 transition-colors"
          >
            Play Now
          </button>
        </div>
      </div>

      {/* Beauty AI Tools Section */}
      <div>
        <h3 className="font-bold text-gray-900 mb-4">Beauty AI Tools</h3>
        <div className="grid grid-cols-3 gap-3">
          <button 
            onClick={() => navigate('virtual-try-on')}
            className="flex flex-col items-center gap-2 p-4 bg-white rounded-3xl border border-gray-100 shadow-sm active:scale-95 transition-all"
          >
            <div className="w-10 h-10 bg-purple-100 rounded-2xl flex items-center justify-center">
              <Camera className="w-5 h-5 text-purple-600" />
            </div>
            <span className="text-[10px] font-bold text-gray-700">Try-On</span>
          </button>
          <button 
            onClick={() => navigate('shade-finder')}
            className="flex flex-col items-center gap-2 p-4 bg-white rounded-3xl border border-gray-100 shadow-sm active:scale-95 transition-all"
          >
            <div className="w-10 h-10 bg-orange-100 rounded-2xl flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-orange-600" />
            </div>
            <span className="text-[10px] font-bold text-gray-700">Find Shade</span>
          </button>
          <button 
            onClick={() => navigate('routine-tracker')}
            className="flex flex-col items-center gap-2 p-4 bg-white rounded-3xl border border-gray-100 shadow-sm active:scale-95 transition-all"
          >
            <div className="w-10 h-10 bg-blue-100 rounded-2xl flex items-center justify-center">
              <RotateCcw className="w-5 h-5 text-blue-600" />
            </div>
            <span className="text-[10px] font-bold text-gray-700">Routine</span>
          </button>
        </div>
      </div>

      <BeautyStreak />
      <FlashDeal addToCart={addToCart} />
      <SmartCoupon />
      <TrendingNow addToCart={addToCart} />

      {/* Recommendations */}
      <div>
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-bold text-gray-900">Recommended for {userData.skinType}</h3>
          <button 
            onClick={() => navigate('recommendations')}
            className="text-nykaa-pink text-sm font-semibold"
          >
            See All
          </button>
        </div>
        <div className="flex gap-4 overflow-x-auto no-scrollbar pb-4 -mx-5 px-5 md:mx-0 md:px-0">
          {recommendedProducts.map(product => (
            <div key={product.id} className="min-w-[140px] md:min-w-[180px] flex-1 bg-white border border-gray-100 rounded-2xl p-3 shadow-sm hover:shadow-md transition-shadow">
              <div className="relative mb-2 bg-gray-50 rounded-xl overflow-hidden aspect-square flex items-center justify-center">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover mix-blend-multiply" />
                <div className="absolute top-0 left-0 bg-nykaa-pink text-white text-[10px] font-bold px-2 py-0.5 rounded-br-lg">
                  {product.discount}
                </div>
              </div>
              <p className="text-[10px] text-gray-500 font-medium">{product.brand}</p>
              <h4 className="text-xs font-semibold text-gray-800 leading-tight h-8 line-clamp-2 mt-0.5">{product.name}</h4>
              <div className="flex justify-between items-center mt-2">
                <p className="font-bold text-sm text-gray-900">{product.price}</p>
                <button 
                  onClick={() => {
                    addToCart(product);
                    showSuccess(20, "Added to bag! +20 Points");
                  }}
                  className="w-7 h-7 bg-black text-white rounded-full flex items-center justify-center hover:bg-nykaa-pink transition-colors"
                >
                  <ShoppingBag className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        <IndieBrand addToCart={addToCart} />
        <BundleSave addToCart={addToCart} />
        <BoughtTogether addToCart={addToCart} />
        <QuickCompare addToCart={addToCart} />
      </div>

      <BuyAgain addToCart={addToCart} />

      {/* Review & Earn Banner */}
      <div 
        onClick={() => setShowReview(true)}
        className="bg-yellow-50 border border-yellow-200 rounded-2xl p-4 flex items-center justify-between cursor-pointer hover:shadow-md transition-shadow"
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
            <Star className="w-5 h-5 text-yellow-600 fill-yellow-600" />
          </div>
          <div>
            <h3 className="font-bold text-gray-900 text-sm">Review your last purchase</h3>
            <p className="text-xs text-gray-600">Earn +100 points for your feedback</p>
          </div>
        </div>
        <ArrowRight className="w-5 h-5 text-yellow-600" />
      </div>

      <RecentlyViewed addToCart={addToCart} />
      <BeautyTips />
      <ReferEarn />

      </div>

      {/* Modals */}
      {showSpinWheel && <SpinWheel onClose={() => setShowSpinWheel(false)} onReward={(reward) => {
        if (typeof reward === 'number') {
          showSuccess(reward, `Won ${reward} points!`);
        } else {
          showSuccess(0, `Won ${reward.label}!`);
        }
      }} />}
      {showBirthday && <BirthdayReward onClose={() => setShowBirthday(false)} onClaim={(pts) => showSuccess(pts, `Claimed ${pts} points!`)} />}
      {showReview && <ReviewReward onClose={() => setShowReview(false)} onSubmit={(pts) => showSuccess(pts, `Earned ${pts} points for review!`)} />}
    </>
  );
}
