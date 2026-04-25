import React, { useState } from 'react';
import { Gift, Copy, Check, Users, ArrowRight } from 'lucide-react';

export default function ReferEarn() {
  const [copied, setCopied] = useState(false);
  const referralCode = 'GLOW150';

  const handleCopy = () => {
    navigator.clipboard.writeText(referralCode).catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-100 rounded-3xl p-5 shadow-sm">
      <div className="flex items-start gap-3 mb-4">
        <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center shrink-0">
          <Users className="w-5 h-5 text-purple-600" />
        </div>
        <div>
          <h3 className="font-bold text-gray-900 text-sm">Refer & Earn 👯</h3>
          <p className="text-xs text-gray-500 mt-0.5">You and your friend both get <span className="font-bold text-nykaa-pink">₹150 off</span></p>
        </div>
      </div>

      <div className="flex items-center gap-2 bg-white border border-dashed border-purple-300 rounded-xl px-4 py-3">
        <span className="font-mono font-bold text-lg text-purple-700 flex-1 tracking-wider">{referralCode}</span>
        <button
          onClick={handleCopy}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
            copied ? 'bg-green-100 text-green-700' : 'bg-purple-100 text-purple-700 hover:bg-purple-200'
          }`}
        >
          {copied ? <><Check className="w-3.5 h-3.5" /> Copied!</> : <><Copy className="w-3.5 h-3.5" /> Copy</>}
        </button>
      </div>

      <button className="w-full mt-4 bg-purple-600 text-white font-bold py-2.5 rounded-xl text-sm shadow-md hover:bg-purple-700 transition-colors flex items-center justify-center gap-2">
        Share with Friends <ArrowRight className="w-4 h-4" />
      </button>
    </div>
  );
}
