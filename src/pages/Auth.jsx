import React, { useState } from 'react';
import { Sparkles, ArrowRight, Zap, Heart, ShieldCheck, AlertCircle } from 'lucide-react';
import { auth, db } from '../firebase';
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup 
} from 'firebase/auth';
import { doc, setDoc, getDoc } from 'firebase/firestore';

export default function Auth({ onLogin }) {
  const [isSignUp, setIsSignUp] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) return;
    if (isSignUp && !name) return;
    
    setIsLoading(true);
    setError('');

    try {
      if (isSignUp) {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        await updateProfile(user, { displayName: name });
        await setDoc(doc(db, "users", user.uid), {
          name: name,
          email: email,
          points: 500,
          tier: 'Silver',
          createdAt: new Date().toISOString()
        });
        onLogin(name);
      } else {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        onLogin(userCredential.user.displayName || 'Guest');
      }
    } catch (err) {
      console.error(err);
      let msg = "Authentication failed. Please try again.";
      if (err.code === 'auth/email-already-in-use') msg = "Email already in use.";
      if (err.code === 'auth/wrong-password') msg = "Incorrect password.";
      if (err.code === 'auth/user-not-found') msg = "No user found with this email.";
      setError(msg);
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setIsLoading(true);
    setError('');
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      const userDoc = await getDoc(doc(db, "users", user.uid));
      if (!userDoc.exists()) {
        await setDoc(doc(db, "users", user.uid), {
          name: user.displayName,
          email: user.email,
          points: 500,
          tier: 'Silver',
          createdAt: new Date().toISOString()
        });
      }
      onLogin(user.displayName || 'Guest');
    } catch (err) {
      console.error(err);
      setError("Google Sign-In failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-full flex flex-col md:flex-row bg-white relative overflow-hidden">
      {/* Immersive Branding Side */}
      <div className="h-80 md:h-auto md:w-[45%] bg-nykaa-gradient relative overflow-hidden flex flex-col justify-center items-center text-white px-10 text-center shadow-[20px_0_50px_rgba(255,63,108,0.1)] z-10">
        <div className="absolute inset-0 bg-nykaa-mesh opacity-20 pointer-events-none"></div>
        
        <div className="relative z-20 animate-float">
          <div className="w-24 h-24 md:w-32 md:h-32 bg-white/20 backdrop-blur-2xl rounded-[2.5rem] flex items-center justify-center mb-8 shadow-2xl border border-white/30 mx-auto">
            <Sparkles className="w-12 h-12 md:w-16 md:h-16 text-white" />
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-black tracking-tight mb-4 drop-shadow-xl">BeautyLoop</h1>
          <p className="text-sm md:text-lg font-medium opacity-90 max-w-[300px] mx-auto leading-relaxed">
            Experience the next generation of personalized beauty rewards.
          </p>
        </div>

        {/* Feature Pills */}
        <div className="mt-12 flex flex-wrap justify-center gap-3 relative z-20">
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest border border-white/20">
            <Zap className="w-3 h-3 text-amber-300" /> AI Routines
          </div>
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest border border-white/20">
            <Heart className="w-3 h-3 text-rose-300" /> Community Feed
          </div>
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest border border-white/20">
            <ShieldCheck className="w-3 h-3 text-emerald-300" /> Secure Auth
          </div>
        </div>
        
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-nykaa-pink-dark/20 rounded-full blur-3xl"></div>
      </div>

      {/* Modern Auth Form Side */}
      <div className="flex-1 px-8 md:px-20 py-12 md:py-24 flex flex-col bg-gray-50/50">
        <div className="max-w-md mx-auto w-full">
          <div className="mb-10">
            <h2 className="text-3xl md:text-4xl font-display font-black text-gray-900 mb-3">
              {isSignUp ? 'Join the Loop' : 'Welcome Back'}
            </h2>
            <p className="text-gray-500 font-medium">
              {isSignUp ? 'Create your beauty profile to start earning.' : 'Sign in to access your curated rewards and routines.'}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {isSignUp && (
              <div className="animate-pop">
                <label className="block text-[11px] font-black text-gray-400 uppercase tracking-[0.2em] mb-2.5 ml-1">
                  Your Name
                </label>
                <input 
                  type="text" 
                  placeholder="E.g. Aditi Sharma"
                  className="input-modern"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required={isSignUp}
                />
              </div>
            )}

            <div className="animate-pop" style={{ animationDelay: '0.1s' }}>
              <label className="block text-[11px] font-black text-gray-400 uppercase tracking-[0.2em] mb-2.5 ml-1">
                Email Address
              </label>
              <input 
                type="email" 
                placeholder="hello@example.com"
                className="input-modern"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="animate-pop" style={{ animationDelay: '0.2s' }}>
              <label className="block text-[11px] font-black text-gray-400 uppercase tracking-[0.2em] mb-2.5 ml-1">
                Password
              </label>
              <input 
                type="password" 
                placeholder="••••••••"
                className="input-modern"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            {error && (
              <div className="bg-rose-50 text-rose-600 p-5 rounded-2xl text-xs font-bold flex items-center gap-3 animate-shake border border-rose-100 shadow-sm">
                <AlertCircle className="w-5 h-5 shrink-0" />
                {error}
              </div>
            )}

            {!isSignUp && (
              <div className="flex justify-end px-1">
                <button type="button" className="text-xs font-bold text-nykaa-pink hover:underline tracking-tight">
                  Forgot Password?
                </button>
              </div>
            )}

            <button 
              type="submit"
              disabled={isLoading || !email || (isSignUp && !name)}
              className="w-full btn-primary shadow-xl shadow-nykaa-pink/10 flex items-center justify-center gap-3 text-lg"
            >
              {isLoading ? (
                <div className="w-6 h-6 border-3 border-white/30 border-t-white rounded-full animate-spin"></div>
              ) : (
                <>{isSignUp ? 'Create Profile' : 'Sign In Now'} <ArrowRight className="w-5 h-5" /></>
              )}
            </button>
          </form>

          <div className="mt-10">
            <div className="relative flex items-center justify-center mb-8">
              <div className="border-t border-gray-200 w-full"></div>
              <span className="bg-gray-50/50 px-6 text-[10px] font-black text-gray-400 uppercase tracking-[0.3em] absolute">Or Connect With</span>
            </div>

            <button 
              onClick={handleGoogleSignIn}
              disabled={isLoading}
              className="w-full bg-white border-2 border-gray-100 text-gray-700 font-bold py-4 rounded-2xl flex items-center justify-center gap-4 hover:border-nykaa-pink/30 hover:bg-gray-50 transition-all shadow-sm active:scale-95 group"
            >
              <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google" className="w-6 h-6 group-hover:scale-110 transition-transform" />
              <span className="tracking-tight">Sign {isSignUp ? 'Up' : 'In'} with Google</span>
            </button>
          </div>

          <div className="mt-12 text-center">
            <p className="text-sm text-gray-500 font-medium">
              {isSignUp ? 'Already a member?' : "New to BeautyLoop?"} {' '}
              <button 
                onClick={() => setIsSignUp(!isSignUp)}
                className="font-bold text-nykaa-pink hover:underline underline-offset-4 decoration-2"
              >
                {isSignUp ? 'Login to Account' : 'Join for Free'}
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
