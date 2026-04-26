import React from 'react';
import { ChevronLeft, Trash2, ShoppingBag, ArrowRight } from 'lucide-react';

export default function Cart({ navigate, cart, setCart, showSuccess, addOrder }) {
  const subtotal = cart.reduce((acc, item) => acc + parseInt(item.price.replace('₹', '')), 0);
  const discount = subtotal > 1000 ? 100 : 0;
  const total = subtotal - discount;

  const removeItem = (cartId) => {
    setCart(prev => prev.filter(item => item.cartId !== cartId));
  };

  const handleCheckout = () => {
    if (cart.length === 0) return;
    
    const newOrder = {
      id: Math.random().toString(36).substr(2, 9),
      date: new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' }),
      status: 'Delivered',
      items: [...cart],
      total: `₹${total}`
    };

    addOrder(newOrder);
    showSuccess(100, "Order Placed Successfully!");
    setCart([]);
    setTimeout(() => navigate('orders'), 2000);
  };

  return (
    <div className="bg-[#faf7f5] min-h-full pb-20 animate-pop flex flex-col">
      <header className="px-5 py-4 bg-white sticky top-0 z-10 flex items-center border-b border-gray-100">
        <button onClick={() => navigate('home')} className="p-2 -ml-2 text-gray-800">
          <ChevronLeft className="w-6 h-6" />
        </button>
        <h1 className="text-lg font-bold ml-2">Shopping Bag ({cart.length})</h1>
      </header>

      <div className="flex-1 p-5 overflow-y-auto no-scrollbar">
        {cart.length === 0 ? (
          <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center">
              <ShoppingBag className="w-10 h-10 text-gray-300" />
            </div>
            <div>
              <h3 className="font-bold text-gray-900">Your bag is empty</h3>
              <p className="text-sm text-gray-500">Add some products to get started!</p>
            </div>
            <button 
              onClick={() => navigate('home')}
              className="bg-nykaa-pink text-white px-8 py-3 rounded-xl font-bold"
            >
              Start Shopping
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            {cart.map((item) => (
              <div key={item.cartId} className="bg-white rounded-2xl p-4 flex gap-4 border border-gray-100 shadow-sm">
                <div className="w-20 h-20 rounded-xl overflow-hidden bg-gray-50 shrink-0">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1">
                  <p className="text-[10px] font-black text-nykaa-pink uppercase tracking-widest">{item.brand}</p>
                  <h4 className="text-sm font-bold text-gray-900 leading-tight mb-1">{item.name}</h4>
                  <p className="text-sm font-black text-gray-900">{item.price}</p>
                </div>
                <button 
                  onClick={() => removeItem(item.cartId)}
                  className="p-2 text-gray-300 hover:text-red-500 transition-colors self-center"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {cart.length > 0 && (
        <div className="bg-white border-t border-gray-100 p-6 space-y-4">
          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-500 font-medium">
              <span>Subtotal</span>
              <span>₹{subtotal}</span>
            </div>
            {discount > 0 && (
              <div className="flex justify-between text-sm text-green-500 font-bold">
                <span>Discount (Tier Reward)</span>
                <span>-₹{discount}</span>
              </div>
            )}
            <div className="flex justify-between text-lg font-black text-gray-900 pt-2 border-t border-gray-50">
              <span>Total</span>
              <span>₹{total}</span>
            </div>
          </div>
          <button 
            onClick={handleCheckout}
            className="w-full bg-nykaa-gradient text-white py-4 rounded-2xl font-bold text-lg shadow-xl shadow-pink-500/20 flex items-center justify-center gap-2 group transition-all active:scale-95"
          >
            Place Order <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      )}
    </div>
  );
}
