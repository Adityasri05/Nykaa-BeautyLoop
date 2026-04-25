import React, { useState, useEffect } from 'react';
import Home from './pages/Home';
import Rewards from './pages/Rewards';
import Reorder from './pages/Reorder';
import Recommendations from './pages/Recommendations';
import SuccessModal from './components/SuccessModal';
import BottomNav from './components/BottomNav';
import { userData, initialMissions } from './data';

function App() {
  const [currentScreen, setCurrentScreen] = useState('home');
  const [successData, setSuccessData] = useState(null); // { points: number, message: string }
  const [isSplashVisible, setIsSplashVisible] = useState(true);

  // Dynamic state for persistence
  const [points, setPoints] = useState(() => {
    const saved = localStorage.getItem('nykaa_points');
    return saved ? parseInt(saved, 10) : userData.points;
  });

  const [missions, setMissions] = useState(() => {
    const saved = localStorage.getItem('nykaa_missions');
    return saved ? JSON.parse(saved) : initialMissions;
  });

  useEffect(() => {
    localStorage.setItem('nykaa_points', points.toString());
  }, [points]);

  useEffect(() => {
    localStorage.setItem('nykaa_missions', JSON.stringify(missions));
  }, [missions]);

  useEffect(() => {
    // Hide splash screen after 2 seconds
    const timer = setTimeout(() => {
      setIsSplashVisible(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const navigate = (screen) => {
    setCurrentScreen(screen);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const showSuccess = (points, message = "Awesome!") => {
    setSuccessData({ points, message });
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'home':
        return <Home navigate={navigate} showSuccess={showSuccess} points={points} />;
      case 'rewards':
        return <Rewards navigate={navigate} showSuccess={showSuccess} points={points} setPoints={setPoints} missions={missions} setMissions={setMissions} />;
      case 'reorder':
        return <Reorder navigate={navigate} showSuccess={showSuccess} />;
      case 'recommendations':
        return <Recommendations navigate={navigate} showSuccess={showSuccess} />;
      case 'profile':
        return <div className="p-5 flex items-center justify-center h-full"><p className="text-gray-500">Profile coming soon</p></div>;
      default:
        return <Home navigate={navigate} showSuccess={showSuccess} points={points} />;
    }
  };

  return (
    <div className="flex flex-col h-screen max-h-screen max-w-md mx-auto bg-[#faf7f5] relative font-sans text-gray-900 overflow-hidden sm:shadow-2xl sm:border sm:border-gray-200 selection:bg-nykaa-pink selection:text-white">
      
      {/* Splash Screen */}
      {isSplashVisible && (
        <div className="absolute inset-0 z-[100] bg-nykaa-gradient flex flex-col items-center justify-center transition-opacity duration-500">
          <div className="animate-float-up text-center">
            <h1 className="text-white text-5xl font-display font-black tracking-tighter drop-shadow-lg mb-2">Nykaa</h1>
            <p className="text-white/90 text-sm font-medium tracking-[0.2em] uppercase">Glow Rewards</p>
          </div>
        </div>
      )}

      {/* App Content */}
      <main className="flex-1 overflow-y-auto overflow-x-hidden no-scrollbar bg-[#faf7f5] pb-16">
        <div className="animate-fadeIn h-full">
          {renderScreen()}
        </div>
      </main>

      {/* Bottom Navigation */}
      {!isSplashVisible && <BottomNav currentScreen={currentScreen} navigate={navigate} />}

      {/* Success Modal Overlay */}
      {successData && (
        <SuccessModal 
          points={successData.points} 
          message={successData.message}
          onClose={() => setSuccessData(null)} 
        />
      )}
    </div>
  );
}

export default App;
