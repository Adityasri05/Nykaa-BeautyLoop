import React, { useState, useEffect } from 'react';
import Home from './pages/Home';
import Rewards from './pages/Rewards';
import Reorder from './pages/Reorder';
import Recommendations from './pages/Recommendations';
import RoutineTracker from './pages/RoutineTracker';
import BeautyLoopHub from './pages/BeautyLoopHub';
import UGCFeed from './pages/UGCFeed';
import BeautyQuiz from './pages/BeautyQuiz';
import ShadeFinder from './pages/ShadeFinder';
import AIRoutineBuilder from './pages/AIRoutineBuilder';
import NotificationSettings from './pages/NotificationSettings';
import Account from './pages/Account';
import Orders from './pages/Orders';
import Wishlist from './pages/Wishlist';
import ProfileInfo from './pages/ProfileInfo';
import Addresses from './pages/Addresses';
import Payments from './pages/Payments';
import HelpCenter from './pages/HelpCenter';
import PrivacyPolicy from './pages/PrivacyPolicy';
import VirtualTryOn from './pages/VirtualTryOn';
import Cart from './pages/Cart';
import Auth from './pages/Auth';
import SuccessModal from './components/SuccessModal';
import SpinWheel from './components/SpinWheel';
import ReviewReward from './components/ReviewReward';
import BirthdayReward from './components/BirthdayReward';
import BottomNav from './components/BottomNav';
import { auth, db } from './firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { userData, initialMissions } from './data';

function App() {
  const [currentScreen, setCurrentScreen] = useState('home');
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return localStorage.getItem('isAuthenticated') === 'true';
  });
  const [userName, setUserName] = useState(() => {
    return localStorage.getItem('userName') || 'Aditi';
  });
  const [successData, setSuccessData] = useState(null);
  const [isSplashVisible, setIsSplashVisible] = useState(true);
  const [showSpinWheel, setShowSpinWheel] = useState(false);
  const [showReviewPopup, setShowReviewPopup] = useState(false);
  const [showBirthdayPopup, setShowBirthdayPopup] = useState(false);
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem('nykaa_cart');
    return saved ? JSON.parse(saved) : [];
  });

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
    localStorage.setItem('nykaa_cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setIsAuthenticated(true);
        setUserName(user.displayName || 'Guest');
        localStorage.setItem('isAuthenticated', 'true');
        localStorage.setItem('userName', user.displayName || 'Guest');

        // Fetch points from Firestore
        try {
          const userDoc = await getDoc(doc(db, "users", user.uid));
          if (userDoc.exists()) {
            setPoints(userDoc.data().points || 500);
          }
        } catch (err) {
          console.error("Error fetching user data:", err);
        }
      } else {
        setIsAuthenticated(false);
        setUserName('Guest');
        localStorage.removeItem('isAuthenticated');
        localStorage.removeItem('userName');
      }
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
    const timer = setTimeout(() => {
      setIsSplashVisible(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  // Auto-show Review popup after 12s
  useEffect(() => {
    if (isAuthenticated && !isSplashVisible) {
      const hasSeenReview = sessionStorage.getItem('seenReview');
      if (!hasSeenReview) {
        const timer = setTimeout(() => {
          setShowReviewPopup(true);
          sessionStorage.setItem('seenReview', 'true');
        }, 12000);
        return () => clearTimeout(timer);
      }
    }
  }, [isAuthenticated, isSplashVisible]);

  // Auto-show Birthday popup after 5s
  useEffect(() => {
    if (isAuthenticated && !isSplashVisible) {
      const hasSeenBirthday = sessionStorage.getItem('seenBirthday');
      if (!hasSeenBirthday) {
        const timer = setTimeout(() => {
          setShowBirthdayPopup(true);
          sessionStorage.setItem('seenBirthday', 'true');
        }, 5000);
        return () => clearTimeout(timer);
      }
    }
  }, [isAuthenticated, isSplashVisible]);

  const navigate = (screen) => {
    setCurrentScreen(screen);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLogin = (name) => {
    setIsAuthenticated(true);
    localStorage.setItem('isAuthenticated', 'true');
    if (name) {
      setUserName(name);
      localStorage.setItem('userName', name);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setIsAuthenticated(false);
      localStorage.removeItem('isAuthenticated');
      localStorage.removeItem('userName');
      setCurrentScreen('home');
    } catch (err) {
      console.error("Logout failed:", err);
    }
  };

  const showSuccess = (pts, message = "Awesome!") => {
    setSuccessData({ points: pts, message });
    setPoints(prev => prev + pts);
  };

  const handleSpinReward = (pts) => {
    setPoints(prev => prev + pts);
  };

  const addToCart = (product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    showSuccess(10, "Added to Bag!");
  };

  const removeFromCart = (productId) => {
    setCart(prev => prev.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId, delta) => {
    setCart(prev => prev.map(item => {
      if (item.id === productId) {
        const newQty = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQty };
      }
      return item;
    }));
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'home':
        return (
          <Home
            navigate={navigate}
            showSuccess={showSuccess}
            addToCart={addToCart}
            points={points}
            onLogout={handleLogout}
            userName={userName}
            onOpenSpin={() => setShowSpinWheel(true)}
          />
        );
      case 'rewards':
        return <Rewards navigate={navigate} showSuccess={showSuccess} points={points} setPoints={setPoints} missions={missions} setMissions={setMissions} />;
      case 'reorder':
        return <Reorder navigate={navigate} showSuccess={showSuccess} addToCart={addToCart} />;
      case 'recommendations':
        return <Recommendations navigate={navigate} showSuccess={showSuccess} addToCart={addToCart} />;
      case 'routine':
        return <RoutineTracker navigate={navigate} showSuccess={showSuccess} addToCart={addToCart} />;
      case 'hub':
        return <BeautyLoopHub navigate={navigate} showSuccess={showSuccess} userName={userName} />;
      case 'feed':
        return <UGCFeed navigate={navigate} showSuccess={showSuccess} />;
      case 'quiz':
        return <BeautyQuiz navigate={navigate} showSuccess={showSuccess} />;
      case 'shade-finder':
        return <ShadeFinder navigate={navigate} showSuccess={showSuccess} addToCart={addToCart} />;
      case 'routine-builder':
        return <AIRoutineBuilder navigate={navigate} showSuccess={showSuccess} addToCart={addToCart} />;
      case 'notifications':
        return <NotificationSettings navigate={navigate} />;
      case 'account':
        return <Account navigate={navigate} onLogout={handleLogout} userName={userName} points={points} />;
      case 'orders':
        return <Orders navigate={navigate} addToCart={addToCart} />;
      case 'wishlist':
        return <Wishlist navigate={navigate} showSuccess={showSuccess} addToCart={addToCart} />;
      case 'profile':
        return <ProfileInfo navigate={navigate} userName={userName} />;
      case 'addresses':
        return <Addresses navigate={navigate} />;
      case 'payments':
        return <Payments navigate={navigate} />;
      case 'help':
        return <HelpCenter navigate={navigate} />;
      case 'privacy':
        return <PrivacyPolicy navigate={navigate} />;
      case 'vto':
        return <VirtualTryOn navigate={navigate} showSuccess={showSuccess} />;
      case 'cart':
        return <Cart navigate={navigate} cart={cart} removeFromCart={removeFromCart} updateQuantity={updateQuantity} />;
      default:
        return <Home navigate={navigate} showSuccess={showSuccess} points={points} onLogout={handleLogout} userName={userName} onOpenSpin={() => setShowSpinWheel(true)} />;
    }
  };

  return (
    <div className="flex flex-col h-screen max-h-screen w-full md:max-w-3xl lg:max-w-6xl mx-auto bg-[#faf7f5] relative font-sans text-gray-900 overflow-hidden sm:shadow-2xl sm:border sm:border-gray-200 selection:bg-nykaa-pink selection:text-white transition-all duration-300">
      
      {/* Splash Screen */}
      {isSplashVisible && (
        <div className="absolute inset-0 z-[100] bg-nykaa-gradient flex flex-col items-center justify-center transition-opacity duration-500">
          <div className="animate-float-up text-center">
            <h1 className="text-white text-5xl font-display font-black tracking-tighter drop-shadow-lg mb-2">Nykaa</h1>
            <p className="text-white/90 text-sm font-medium tracking-[0.2em] uppercase">Glow Rewards</p>
          </div>
        </div>
      )}

      {/* Main Content or Auth */}
      <div className="flex-1 overflow-y-auto overflow-x-hidden relative">
        {!isAuthenticated ? (
          <Auth onLogin={handleLogin} />
        ) : (
          <div className="animate-fadeIn h-full pb-16">
            {renderScreen()}
          </div>
        )}
      </div>

      {/* Persistent Bottom Navigation */}
      {isAuthenticated && !isSplashVisible && <BottomNav currentScreen={currentScreen} navigate={navigate} />}

      {/* ===== OVERLAY MODALS ===== */}

      {showSpinWheel && <SpinWheel onClose={() => setShowSpinWheel(false)} onReward={handleSpinReward} />}
      {showReviewPopup && <ReviewReward onClose={() => setShowReviewPopup(false)} onSubmit={(pts) => showSuccess(pts, "Review Submitted!")} />}
      {showBirthdayPopup && <BirthdayReward onClose={() => setShowBirthdayPopup(false)} onClaim={(pts) => showSuccess(pts, "Birthday Rewards Claimed!")} />}

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
