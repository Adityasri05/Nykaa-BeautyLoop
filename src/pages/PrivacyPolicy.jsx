import React from 'react';
import { ChevronLeft, ShieldCheck, Lock, Eye, FileText } from 'lucide-react';

export default function PrivacyPolicy({ navigate }) {
  return (
    <div className="bg-white min-h-full pb-10 animate-pop">
      <header className="px-5 py-4 sticky top-0 bg-white/90 backdrop-blur-md z-10 flex items-center border-b border-gray-100">
        <button onClick={() => navigate('account')} className="p-2 -ml-2 text-gray-800">
          <ChevronLeft className="w-6 h-6" />
        </button>
        <h1 className="text-lg font-bold ml-2">Privacy Policy</h1>
      </header>

      <div className="p-6 space-y-8">
        <div className="bg-indigo-50 rounded-3xl p-8 text-center border border-indigo-100">
          <ShieldCheck className="w-16 h-16 text-indigo-500 mx-auto mb-4" />
          <h2 className="text-2xl font-black text-gray-900 mb-2">Your Privacy Matters</h2>
          <p className="text-sm text-indigo-700 font-medium">Last updated: April 2025</p>
        </div>

        <div className="space-y-6">
          <Section 
            icon={<Eye className="w-5 h-5 text-nykaa-pink" />}
            title="Data Collection"
            content="We collect information like your name, email, and beauty preferences to personalize your experience and provide product recommendations."
          />
          <Section 
            icon={<Lock className="w-5 h-5 text-emerald-500" />}
            title="Security"
            content="All your payment data is encrypted via SSL and we follow strict international security protocols to protect your personal info."
          />
          <Section 
            icon={<FileText className="w-5 h-5 text-blue-500" />}
            title="Usage"
            content="We use your data to process orders, improve our AI routine builders, and send you relevant rewards and beauty alerts."
          />
        </div>

        <div className="prose prose-sm text-gray-500 pt-6">
          <p>By using the Nykaa BeautyLoop app, you agree to the collection and use of information in accordance with this policy. We do not sell your personal information to third parties.</p>
          <p className="mt-4">For more detailed information, you can contact our data protection officer at privacy@nykaabeauty.com.</p>
        </div>
      </div>
    </div>
  );
}

function Section({ icon, title, content }) {
  return (
    <div className="flex gap-4">
      <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center shrink-0">
        {icon}
      </div>
      <div>
        <h3 className="font-bold text-gray-900 mb-1">{title}</h3>
        <p className="text-sm text-gray-500 leading-relaxed">{content}</p>
      </div>
    </div>
  );
}
