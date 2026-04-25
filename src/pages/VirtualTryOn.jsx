import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, Camera, RefreshCcw, ShoppingBag, Check } from 'lucide-react';

const SHADES = [
  { id: 1, name: 'Ruby Rush', color: '#B91C1C', brand: 'M.A.C' },
  { id: 2, name: 'Pink Plum', color: '#9D174D', brand: 'L\'Oreal' },
  { id: 3, name: 'Peach Fuzz', color: '#FB923C', brand: 'Kay Beauty' },
  { id: 4, name: 'Mocha Magic', color: '#78350F', brand: 'Maybelline' },
  { id: 5, name: 'Berry Bliss', color: '#701A75', brand: 'Sugar' },
];

export default function VirtualTryOn({ navigate, showSuccess }) {
  const [selectedShade, setSelectedShade] = useState(SHADES[0]);
  const [isCameraActive, setIsCameraActive] = useState(false);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'user' } });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        setIsCameraActive(true);
      }
    } catch (err) {
      console.error("Camera error:", err);
      alert("Please allow camera access for Virtual Try-On");
    }
  };

  useEffect(() => {
    if (isCameraActive && videoRef.current) {
      const render = () => {
        if (canvasRef.current && videoRef.current) {
          const ctx = canvasRef.current.getContext('2d');
          ctx.drawImage(videoRef.current, 0, 0, canvasRef.current.width, canvasRef.current.height);
          
          // Mock Lip Overlay (A subtle colored glow in the center)
          ctx.globalAlpha = 0.3;
          ctx.fillStyle = selectedShade.color;
          ctx.beginPath();
          ctx.ellipse(
            canvasRef.current.width / 2, 
            canvasRef.current.height * 0.65, 
            30, 15, 0, 0, Math.PI * 2
          );
          ctx.fill();
          ctx.globalAlpha = 1.0;
        }
        requestAnimationFrame(render);
      };
      render();
    }
  }, [isCameraActive, selectedShade]);

  return (
    <div className="bg-black min-h-full pb-6 text-white animate-pop flex flex-col">
      {/* Header */}
      <header className="px-5 py-4 flex items-center justify-between z-10">
        <button onClick={() => navigate('home')} className="p-2 bg-white/10 rounded-full backdrop-blur-md">
          <ChevronLeft className="w-6 h-6" />
        </button>
        <h1 className="text-sm font-black tracking-widest uppercase">Virtual Try-On</h1>
        <div className="w-10"></div>
      </header>

      {/* Main Viewport */}
      <div className="flex-1 relative bg-gray-900 overflow-hidden flex items-center justify-center">
        {!isCameraActive ? (
          <div className="text-center px-10">
            <div className="w-24 h-24 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-6 border border-white/10">
              <Camera className="w-10 h-10 text-white/50" />
            </div>
            <h2 className="text-xl font-bold mb-2">See how it looks on you</h2>
            <p className="text-sm text-gray-400 mb-8">Try hundreds of shades instantly using your camera.</p>
            <button 
              onClick={startCamera}
              className="bg-nykaa-pink text-white px-8 py-4 rounded-2xl font-bold shadow-xl shadow-pink-500/20 active:scale-95 transition-transform"
            >
              Start Camera
            </button>
          </div>
        ) : (
          <div className="relative w-full h-full">
            <video ref={videoRef} autoPlay playsInline muted className="hidden" />
            <canvas ref={canvasRef} width={400} height={600} className="w-full h-full object-cover" />
            
            {/* Guide Overlay */}
            <div className="absolute inset-0 border-[40px] border-black/40 pointer-events-none">
              <div className="w-full h-full border border-white/20 rounded-3xl flex items-center justify-center">
                <div className="w-48 h-64 border-2 border-dashed border-white/40 rounded-full opacity-30"></div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Shade Selection & Controls */}
      <div className="bg-gradient-to-t from-black via-black to-transparent p-6 space-y-6">
        <div className="flex gap-4 overflow-x-auto no-scrollbar py-2">
          {SHADES.map(shade => (
            <button 
              key={shade.id}
              onClick={() => setSelectedShade(shade)}
              className={`flex flex-col items-center gap-2 transition-all ${selectedShade.id === shade.id ? 'scale-110' : 'opacity-60'}`}
            >
              <div 
                className={`w-12 h-12 rounded-full border-2 p-0.5 ${selectedShade.id === shade.id ? 'border-white' : 'border-transparent'}`}
              >
                <div className="w-full h-full rounded-full" style={{ backgroundColor: shade.color }}></div>
              </div>
              <span className="text-[10px] font-bold whitespace-nowrap">{shade.name}</span>
            </button>
          ))}
        </div>

        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-4 flex items-center gap-4">
          <div className="w-12 h-12 bg-white rounded-xl overflow-hidden shrink-0">
            <img src="https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&q=80&w=100" alt="Product" className="w-full h-full object-cover" />
          </div>
          <div className="flex-1">
            <p className="text-[10px] font-black text-nykaa-pink uppercase tracking-widest">{selectedShade.brand}</p>
            <h4 className="text-sm font-bold truncate">Matte Me Lipstick - {selectedShade.name}</h4>
            <p className="text-xs font-bold text-gray-400">₹850</p>
          </div>
          <button 
            onClick={() => showSuccess(50, "Added to Bag!")}
            className="bg-white text-black px-4 py-2 rounded-xl text-xs font-black flex items-center gap-2"
          >
            <ShoppingBag className="w-3 h-3" /> ADD
          </button>
        </div>
      </div>
    </div>
  );
}
