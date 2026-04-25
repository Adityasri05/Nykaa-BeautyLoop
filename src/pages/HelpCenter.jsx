import React from 'react';
import { ChevronLeft, Search, MessageSquare, Phone, Mail, ChevronRight, HelpCircle } from 'lucide-react';

const FAQS = [
  "How to track my order?",
  "How to return a product?",
  "What are Glow Points?",
  "How to use a coupon code?",
  "Refund policy for damaged items",
];

export default function HelpCenter({ navigate }) {
  return (
    <div className="bg-[#fafafa] min-h-full pb-10 animate-pop">
      <header className="px-5 py-4 sticky top-0 bg-white/90 backdrop-blur-md z-10 flex items-center border-b border-gray-100">
        <button onClick={() => navigate('account')} className="p-2 -ml-2 text-gray-800">
          <ChevronLeft className="w-6 h-6" />
        </button>
        <h1 className="text-lg font-bold ml-2">Help Center</h1>
      </header>

      <div className="p-6 space-y-8">
        {/* Search */}
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input 
            type="text" 
            placeholder="Search for help..."
            className="w-full bg-white border border-gray-100 rounded-2xl py-4 pl-12 pr-4 text-sm font-medium shadow-sm focus:outline-none focus:border-nykaa-pink transition-colors"
          />
        </div>

        {/* Contact Options */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white p-6 rounded-[2rem] border border-gray-100 text-center shadow-sm hover:shadow-md transition-shadow cursor-pointer">
            <div className="w-12 h-12 bg-pink-50 rounded-2xl flex items-center justify-center mx-auto mb-3">
              <MessageSquare className="w-6 h-6 text-nykaa-pink" />
            </div>
            <h4 className="font-bold text-sm text-gray-900">Chat with Us</h4>
            <p className="text-[10px] text-gray-500 mt-1">24/7 Support</p>
          </div>
          <div className="bg-white p-6 rounded-[2rem] border border-gray-100 text-center shadow-sm hover:shadow-md transition-shadow cursor-pointer">
            <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-3">
              <Phone className="w-6 h-6 text-blue-500" />
            </div>
            <h4 className="font-bold text-sm text-gray-900">Call Us</h4>
            <p className="text-[10px] text-gray-500 mt-1">9 AM - 9 PM</p>
          </div>
        </div>

        {/* Popular Questions */}
        <div className="space-y-4">
          <h3 className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] px-2">Popular Questions</h3>
          <div className="bg-white rounded-[2rem] border border-gray-100 overflow-hidden shadow-sm">
            {FAQS.map((faq, idx) => (
              <div key={idx} className={`flex items-center justify-between p-5 hover:bg-gray-50 cursor-pointer ${idx !== FAQS.length - 1 ? 'border-b border-gray-50' : ''}`}>
                <div className="flex items-center gap-3">
                  <HelpCircle className="w-4 h-4 text-gray-300" />
                  <span className="text-sm font-medium text-gray-700">{faq}</span>
                </div>
                <ChevronRight className="w-4 h-4 text-gray-300" />
              </div>
            ))}
          </div>
        </div>

        {/* Email */}
        <div className="bg-white p-6 rounded-[2.5rem] border border-gray-100 flex items-center gap-4 shadow-sm">
          <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center shrink-0">
            <Mail className="w-6 h-6 text-emerald-500" />
          </div>
          <div className="flex-1">
            <h4 className="font-bold text-sm text-gray-900">Email Support</h4>
            <p className="text-xs text-gray-500">support@nykaabeauty.com</p>
          </div>
          <ChevronRight className="w-5 h-5 text-gray-300" />
        </div>
      </div>
    </div>
  );
}
