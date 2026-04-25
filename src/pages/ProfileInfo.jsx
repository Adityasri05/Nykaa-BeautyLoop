import React, { useState } from 'react';
import { ChevronLeft, User, Mail, Phone, Calendar, Camera } from 'lucide-react';

export default function ProfileInfo({ navigate, userName }) {
  const [formData, setFormData] = useState({
    name: userName,
    email: userName.toLowerCase().replace(' ', '.') + "@gmail.com",
    phone: "+91 98765 43210",
    dob: "12/04/1998",
    gender: "Female"
  });

  return (
    <div className="bg-white min-h-full pb-10 animate-pop">
      <header className="px-5 py-4 sticky top-0 bg-white/90 backdrop-blur-md z-10 flex items-center border-b border-gray-100">
        <button onClick={() => navigate('account')} className="p-2 -ml-2 text-gray-800">
          <ChevronLeft className="w-6 h-6" />
        </button>
        <h1 className="text-lg font-bold ml-2">Profile Information</h1>
      </header>

      <div className="p-6">
        <div className="flex flex-col items-center mb-10">
          <div className="relative">
            <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-xl ring-2 ring-nykaa-pink/10">
              <img src={`https://ui-avatars.com/api/?name=${encodeURIComponent(userName)}&background=ff3f6c&color=fff&size=200`} alt="Profile" />
            </div>
            <button className="absolute bottom-0 right-0 bg-black text-white p-2 rounded-full border-4 border-white shadow-lg">
              <Camera className="w-4 h-4" />
            </button>
          </div>
          <p className="mt-4 text-[10px] font-black text-nykaa-pink uppercase tracking-widest">Platinum Member</p>
        </div>

        <div className="space-y-6">
          <InputGroup label="Full Name" value={formData.name} icon={<User className="w-4 h-4" />} />
          <InputGroup label="Email Address" value={formData.email} icon={<Mail className="w-4 h-4" />} />
          <InputGroup label="Mobile Number" value={formData.phone} icon={<Phone className="w-4 h-4" />} />
          <div className="grid grid-cols-2 gap-4">
            <InputGroup label="Birth Date" value={formData.dob} icon={<Calendar className="w-4 h-4" />} />
            <InputGroup label="Gender" value={formData.gender} icon={<User className="w-4 h-4" />} />
          </div>
        </div>

        <div className="mt-12 space-y-4">
          <button className="w-full bg-black text-white font-bold py-4 rounded-2xl shadow-lg hover:bg-nykaa-pink transition-colors">
            Update Profile
          </button>
          <button className="w-full text-rose-500 font-bold py-2 text-sm">
            Delete Account
          </button>
        </div>
      </div>
    </div>
  );
}

function InputGroup({ label, value, icon }) {
  return (
    <div className="space-y-1.5">
      <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">{label}</label>
      <div className="relative">
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
          {icon}
        </div>
        <input 
          type="text" 
          defaultValue={value}
          className="w-full bg-gray-50 border border-gray-100 rounded-2xl py-3.5 pl-11 pr-4 text-sm font-bold text-gray-800 focus:outline-none focus:border-nykaa-pink transition-colors"
        />
      </div>
    </div>
  );
}
