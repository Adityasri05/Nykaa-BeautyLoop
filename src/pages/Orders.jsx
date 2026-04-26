import React from 'react';
import { 
  ChevronLeft, Package, ChevronRight, 
  Search, Filter, ShoppingBag, ArrowRight 
} from 'lucide-react';

export default function Orders({ navigate, orders = [] }) {
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
            <h1 className="text-xl font-black text-gray-900 tracking-tight">My Orders</h1>
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-nykaa-pink flex items-center gap-1.5">
              <Package className="w-3 h-3" /> Purchase History
            </p>
          </div>
        </div>
        <button className="w-10 h-10 bg-black/5 rounded-full flex items-center justify-center text-gray-400">
          <Search className="w-5 h-5" />
        </button>
      </header>

      <div className="p-6 md:p-10">
        <div className="flex items-center gap-3 mb-8 overflow-x-auto pb-2 no-scrollbar">
          {['All Orders', 'Ongoing', 'Delivered', 'Cancelled'].map((tab, idx) => (
            <button 
              key={tab} 
              className={`px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest whitespace-nowrap transition-all ${
                idx === 0 ? 'bg-black text-white shadow-lg' : 'bg-white text-gray-400 border border-gray-100'
              }`}
            >
              {tab}
            </button>
          ))}
          <button className="p-2.5 bg-white border border-gray-100 rounded-full text-gray-400">
            <Filter className="w-4 h-4" />
          </button>
        </div>

        <div className="space-y-6">
          {orders.length > 0 ? (
            orders.map((order, idx) => (
              <div 
                key={order.id} 
                className="premium-card p-6 animate-slide-right group cursor-pointer"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h4 className="text-sm font-black text-gray-900 tracking-tight">Order #{order.id.slice(-8).toUpperCase()}</h4>
                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-1">{order.date}</p>
                  </div>
                  <div className="bg-emerald-50 text-emerald-600 px-3 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-widest flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                    {order.status}
                  </div>
                </div>

                <div className="flex items-center gap-4 mb-6">
                  <div className="flex -space-x-4">
                    {order.items.slice(0, 3).map((item, i) => (
                      <div key={i} className="w-14 h-14 bg-gray-50 rounded-2xl border-4 border-white shadow-sm p-1">
                        <img src={item.image} alt="" className="w-full h-full object-contain mix-blend-multiply" />
                      </div>
                    ))}
                    {order.items.length > 3 && (
                      <div className="w-14 h-14 bg-gray-100 rounded-2xl border-4 border-white shadow-sm flex items-center justify-center text-xs font-black text-gray-400">
                        +{order.items.length - 3}
                      </div>
                    )}
                  </div>
                  <div className="flex-1">
                    <p className="text-xs text-gray-500 font-medium">
                      {order.items.length} {order.items.length === 1 ? 'item' : 'items'} in this order
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-black text-gray-900 leading-none">{order.total}</p>
                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-1">Paid Online</p>
                  </div>
                </div>

                <div className="pt-6 border-t border-gray-50 flex gap-3">
                  <button className="flex-1 bg-black text-white py-3.5 rounded-2xl text-[10px] font-black uppercase tracking-widest active:scale-95 transition-all">
                    Track Order
                  </button>
                  <button className="px-6 border-2 border-gray-100 text-gray-400 py-3.5 rounded-2xl hover:border-gray-200 transition-all">
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-24">
              <div className="w-24 h-24 bg-white rounded-[2rem] shadow-xl shadow-gray-100 flex items-center justify-center mx-auto mb-8 border border-gray-100">
                <ShoppingBag className="w-10 h-10 text-gray-100" />
              </div>
              <h3 className="text-xl font-black text-gray-900 mb-2 tracking-tighter">No orders yet</h3>
              <p className="text-gray-500 text-sm mb-10 max-w-xs mx-auto">Start your beauty journey today and track your progress here.</p>
              <button 
                onClick={() => navigate('home')}
                className="bg-nykaa-gradient text-white px-10 py-4 rounded-[1.5rem] font-black text-[10px] uppercase tracking-widest shadow-xl shadow-pink-500/20"
              >
                Start Shopping <ArrowRight className="w-4 h-4 inline ml-2" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
