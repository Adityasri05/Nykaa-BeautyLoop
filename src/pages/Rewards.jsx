import React, { useState } from 'react';
import { ChevronLeft, Star, CheckCircle2, Circle, ChevronRight } from 'lucide-react';
import { userData, initialMissions } from '../data';

export default function Rewards({ navigate, showSuccess, points, setPoints, missions, setMissions }) {
  const completeMission = (id, rewardPts) => {
    setMissions(missions.map(m => m.id === id ? { ...m, completed: true } : m));
    showSuccess(rewardPts);
  };

  const progress = (points / userData.nextTierPoints) * 100;

  return (
    <div className="bg-gray-50 min-h-full pb-6 animate-pop">
      <header className="px-5 py-4 bg-white sticky top-0 z-10 flex items-center border-b border-gray-100">
        <button onClick={() => navigate('home')} className="p-2 -ml-2 text-gray-800">
          <ChevronLeft className="w-6 h-6" />
        </button>
        <h1 className="text-lg font-bold ml-2">Glow Rewards</h1>
      </header>

      <div className="p-5 md:p-8 md:grid md:grid-cols-2 md:gap-8 space-y-6 md:space-y-0">
        {/* Tier Card */}
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 text-center">
          <div className="w-16 h-16 bg-nykaa-pink/10 rounded-full flex items-center justify-center mx-auto mb-3">
            <Star className="w-8 h-8 text-nykaa-pink fill-current" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900">{userData.tier}</h2>
          <p className="text-3xl font-extrabold text-nykaa-pink mt-2">{points} <span className="text-sm font-medium text-gray-500">Points</span></p>
          
          <div className="mt-6">
            <div className="flex justify-between text-xs font-semibold mb-2">
              <span className="text-gray-600">Current</span>
              <span className="text-gray-400">Gold Tier ({userData.nextTierPoints})</span>
            </div>
            <div className="h-2.5 bg-gray-100 rounded-full overflow-hidden">
              <div 
                className="h-full bg-nykaa-pink rounded-full transition-all duration-1000 ease-out relative" 
                style={{ width: `${progress}%` }}
              >
                <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-3">Earn {userData.nextTierPoints - points} more points to upgrade!</p>
          </div>
        </div>

        {/* Missions */}
        <div>
          <h3 className="font-bold text-gray-900 mb-4 px-1">Daily Missions</h3>
          <div className="space-y-3">
            {missions.map(mission => (
              <div 
                key={mission.id}
                onClick={() => !mission.completed && completeMission(mission.id, mission.points)}
                className={`flex items-center justify-between p-4 rounded-2xl border transition-all ${
                  mission.completed 
                    ? 'bg-gray-50 border-gray-100 opacity-60 cursor-default' 
                    : 'bg-white border-nykaa-pink/20 shadow-sm cursor-pointer hover:border-nykaa-pink'
                }`}
              >
                <div className="flex items-center gap-3">
                  {mission.completed ? (
                    <CheckCircle2 className="w-6 h-6 text-green-500" />
                  ) : (
                    <Circle className="w-6 h-6 text-gray-300" />
                  )}
                  <div>
                    <h4 className={`font-semibold text-sm ${mission.completed ? 'text-gray-500 line-through' : 'text-gray-800'}`}>
                      {mission.title}
                    </h4>
                    {!mission.completed && (
                      <p className="text-xs font-bold text-nykaa-pink mt-0.5">+{mission.points} Pts</p>
                    )}
                  </div>
                </div>
                {!mission.completed && <ChevronRight className="w-5 h-5 text-gray-400" />}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
