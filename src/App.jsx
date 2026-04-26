import React, { useState, useEffect } from 'react';
import Home from './pages/Home';
import Rewards from './pages/Rewards';
import Reorder from './pages/Reorder';
import Recommendations from './pages/Recommendations';
import BeautyLoopHub from './pages/BeautyLoopHub';
import VirtualTryOn from './pages/VirtualTryOn';
import ShadeFinder from './pages/ShadeFinder';
import RoutineTracker from './pages/RoutineTracker';
import Account from './pages/Account';
import Orders from './pages/Orders';
import Cart from './pages/Cart';
import Wishlist from './pages/Wishlist';
import Addresses from './pages/Addresses';
import Payments from './pages/Payments';
import NotificationSettings from './pages/NotificationSettings';
import HelpCenter from './pages/HelpCenter';
import PrivacyPolicy from './pages/PrivacyPolicy';
import ProfileInfo from './pages/ProfileInfo';
import SuccessModal from './components/SuccessModal';
import BottomNav from './components/BottomNav';
import Auth from './pages/Auth';
import { auth } from './firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { userData, initialMissions } from './data';

function App() {
  const [currentScreen, setCurrentScreen] = useState('home');
  const [successData, setSuccessData] = useState(null);
  const [isSplashVisible, setIsSplashVisible] = useState(true);
  const [cart, setCart] = useState([]);
  
  // Auth state
  const [user, setUser] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);

  // Dynamic state for persistence
  const [points, setPoints] = useState(() => {
    const saved = localStorage.getItem('nykaa_points');
    return saved ? parseInt(saved, 10) : userData.points;
  });

  const [orders, setOrders] = useState(() => {
    const saved = localStorage.getItem('nykaa_orders');
    return saved ? JSON.parse(saved) : [];
  });

  const [missions, setMissions] = useState(() => {
    const saved = localStorage.getItem('nykaa_missions');
    return saved ? JSON.parse(saved) : initialMissions;
  });

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setAuthLoading(false);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    localStorage.setItem('nykaa_points', points.toString());
  }, [points]);

  useEffect(() => {
    localStorage.setItem('nykaa_missions', JSON.stringify(missions));
  }, [missions]);

  useEffect(() => {
    const timer = setTimeout(() => setIsSplashVisible(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const navigate = (screen) => {
    setCurrentScreen(screen);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const showSuccess = (pointsToAdd, message = "Awesome!") => {
    if (pointsToAdd) {
      setPoints(prev => prev + pointsToAdd);
    }
    setSuccessData({ points: pointsToAdd, message });
  };

  const addToCart = (product) => {
    setCart(prev => [...prev, { ...product, cartId: Date.now() }]);
  };

  const addOrder = (order) => {
    const newOrders = [order, ...orders];
    setOrders(newOrders);
    localStorage.setItem('nykaa_orders', JSON.stringify(newOrders));
  };

  const handleLogout = () => {
    signOut(auth).catch(err => console.error("Logout error", err));
  };

  const renderScreen = () => {
    const commonProps = { navigate, showSuccess, addToCart, addOrder };
    const userName = user?.displayName || userData.name;
    
    switch (currentScreen) {
      case 'home':
        return <Home {...commonProps} points={points} userName={userName} />;
      case 'rewards':
        return <Rewards {...commonProps} points={points} setPoints={setPoints} missions={missions} setMissions={setMissions} />;
      case 'reorder':
        return <Reorder {...commonProps} />;
      case 'recommendations':
        return <Recommendations {...commonProps} />;
      case 'hub':
        return <BeautyLoopHub {...commonProps} userName={userName} />;
      case 'virtual-try-on':
        return <VirtualTryOn {...commonProps} />;
      case 'shade-finder':
        return <ShadeFinder {...commonProps} />;
      case 'routine-tracker':
        return <RoutineTracker {...commonProps} />;
      case 'cart':
        return <Cart {...commonProps} cart={cart} setCart={setCart} />;
      case 'account':
        return <Account {...commonProps} userName={userName} points={points} onLogout={handleLogout} />;
      case 'orders':
        return <Orders {...commonProps} orders={orders} />;
      case 'wishlist':
        return <Wishlist {...commonProps} />;
      case 'addresses':
        return <Addresses {...commonProps} />;
      case 'payments':
        return <Payments {...commonProps} />;
      case 'notifications':
        return <NotificationSettings {...commonProps} />;
      case 'help':
        return <HelpCenter {...commonProps} />;
      case 'privacy':
        return <PrivacyPolicy {...commonProps} />;
      case 'profile':
        return <ProfileInfo {...commonProps} userName={userName} />;
      default:
        return <Home {...commonProps} points={points} userName={userName} />;
    }
  };

  return (
    <div className="flex flex-col h-screen w-full bg-[#faf7f5] relative font-sans text-gray-900 selection:bg-nykaa-pink selection:text-white">
      {isSplashVisible && (
        <div className="absolute inset-0 z-[100] bg-nykaa-gradient flex flex-col items-center justify-center transition-opacity duration-500">
          <div className="animate-float-up text-center">
            <h1 className="text-white text-5xl font-display font-black tracking-tighter drop-shadow-lg mb-2">Nykaa</h1>
            <p className="text-white/90 text-sm font-medium tracking-[0.2em] uppercase">Glow Rewards</p>
          </div>
        </div>
      )}

      {authLoading ? (
        <div className="flex-1 flex items-center justify-center bg-[#faf7f5] h-full w-full z-50">
          <div className="w-10 h-10 border-4 border-nykaa-pink/30 border-t-nykaa-pink rounded-full animate-spin"></div>
        </div>
      ) : !user ? (
        <main className="flex-1 overflow-y-auto overflow-x-hidden no-scrollbar bg-white h-full w-full z-40 relative">
          <Auth onLogin={() => {}} />
        </main>
      ) : (
        <>
          <main className="flex-1 overflow-y-auto overflow-x-hidden no-scrollbar bg-[#faf7f5] pb-20">
            <div className="animate-fadeIn h-full w-full max-w-7xl mx-auto">
              {renderScreen()}
            </div>
          </main>

          {!isSplashVisible && <BottomNav currentScreen={currentScreen} navigate={navigate} cartCount={cart.length} />}
        </>
      )}

      {successData && (
        <SuccessModal points={successData.points} message={successData.message} onClose={() => setSuccessData(null)} />
      )}
    </div>
  );
}

export default App;

