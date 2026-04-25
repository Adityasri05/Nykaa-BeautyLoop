import React from 'react';
import { 
  ChevronLeft, MapPin, Plus, 
  MoreVertical, Home, Briefcase, Navigation 
} from 'lucide-react';

const MOCK_ADDRESSES = [
  {
    id: 1,
    type: 'Home',
    icon: <Home className="w-5 h-5" />,
    address: 'B-402, Green Valley Apartments',
    locality: 'Indiranagar, Bangalore, 560038',
    isDefault: true
  },
  {
    id: 2,
    type: 'Office',
    icon: <Briefcase className="w-5 h-5" />,
    address: '7th Floor, WeWork Galaxy',
    locality: 'Residency Road, Bangalore, 560025',
    isDefault: false
  }
];

export default function Addresses({ navigate }) {
  return (
    <div className="bg-[#faf7f5] min-h-full pb-32 relative">
      <header className="px-6 py-6 sticky top-0 bg-white/80 backdrop-blur-xl z-30 flex items-center justify-between border-b border-gray-100">
        <div className="flex items-center gap-4">
          <button 
            onClick={() => navigate('account')} 
            className="w-10 h-10 flex items-center justify-center bg-white rounded-xl text-gray-800 shadow-sm border border-gray-100 active:scale-90 transition-all"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <div>
            <h1 className="text-xl font-black text-gray-900 tracking-tight">Saved Addresses</h1>
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-nykaa-pink flex items-center gap-1.5">
              <MapPin className="w-3 h-3" /> Delivery Locations
            </p>
          </div>
        </div>
        <button className="w-10 h-10 bg-nykaa-pink/10 rounded-full flex items-center justify-center text-nykaa-pink active:scale-90 transition-transform">
          <Plus className="w-6 h-6" />
        </button>
      </header>

      <div className="p-6 md:p-10 space-y-6">
        <div className="premium-card p-4 bg-nykaa-gradient flex items-center gap-4 text-white shadow-xl shadow-pink-200">
          <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center">
            <Navigation className="w-6 h-6" />
          </div>
          <div className="flex-1">
            <h4 className="font-black text-sm uppercase tracking-wider">Use Current Location</h4>
            <p className="text-xs text-white/80">Fastest delivery setup</p>
          </div>
          <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
            <Plus className="w-4 h-4" />
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-xs font-black text-gray-400 uppercase tracking-[0.2em] px-1">Saved Locations</h3>
          {MOCK_ADDRESSES.map((addr, idx) => (
            <div 
              key={addr.id} 
              className="premium-card p-6 flex gap-5 animate-slide-right group relative"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 transition-colors ${
                addr.isDefault ? 'bg-nykaa-pink text-white shadow-lg shadow-pink-100' : 'bg-gray-50 text-gray-400 group-hover:bg-gray-100'
              }`}>
                {addr.icon}
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-start mb-1">
                  <div className="flex items-center gap-2">
                    <h4 className="text-base font-black text-gray-900 tracking-tight">{addr.type}</h4>
                    {addr.isDefault && (
                      <span className="bg-emerald-50 text-emerald-600 text-[8px] font-black uppercase tracking-widest px-2 py-0.5 rounded-full">
                        Default
                      </span>
                    )}
                  </div>
                  <button className="text-gray-300 hover:text-gray-600 transition-colors">
                    <MoreVertical className="w-5 h-5" />
                  </button>
                </div>
                <p className="text-sm text-gray-600 font-medium leading-relaxed">{addr.address}</p>
                <p className="text-xs text-gray-400 mt-0.5">{addr.locality}</p>
              </div>

              {/* Edit Action Overlay - desktop */}
              <div className="absolute right-12 top-6 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="text-nykaa-pink text-[10px] font-black uppercase tracking-widest bg-pink-50 px-3 py-1.5 rounded-xl">
                  Edit
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 p-8 border-2 border-dashed border-gray-200 rounded-[3rem] text-center group hover:border-nykaa-pink transition-colors cursor-pointer">
          <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-pink-50 transition-colors">
            <Plus className="w-8 h-8 text-gray-300 group-hover:text-nykaa-pink transition-colors" />
          </div>
          <h4 className="text-sm font-black text-gray-900 tracking-tight">Add New Address</h4>
          <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-1">Faster checkout for next time</p>
        </div>
      </div>
    </div>
  );
}
