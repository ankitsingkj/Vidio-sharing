"use client";

import Image from "next/image";
import { User, Mail, Phone, AtSign } from "lucide-react";

export default function ProfilePage() {
  // Mock user data (replace later with API / DB / auth session)
  const user = {
    fullName: "John Doe",
    username: "johndoe",
    email: "john@example.com",
    phone: "+91 9876543210",
    avatar: "/profile/avatar.png", // put image in /public/profile/
  };

  return (
    <div className="min-h-screen bg-[#111] text-white flex items-center justify-center p-6">
      <div className="w-full max-w-lg bg-[#1a1a1a] border border-gray-800 rounded-2xl shadow-xl p-8">

        {/* Profile Header */}
        <div className="flex flex-col items-center text-center">
          
          {/* Avatar */}
          <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-[#ff3565]">
            <Image
              src={user.avatar}
              alt="Profile"
              width={96}
              height={96}
              className="w-full h-full object-cover"
            />
          </div>

          <h1 className="text-2xl font-bold mt-4">{user.fullName}</h1>
          <p className="text-gray-400">@{user.username}</p>
        </div>

        {/* Info Section */}
        <div className="mt-8 space-y-4">

          {/* Full Name */}
          <div className="flex items-center gap-3 bg-[#111] p-3 rounded-lg border border-gray-800">
            <User className="text-[#ff3565]" />
            <span>{user.fullName}</span>
          </div>

          {/* Username */}
          <div className="flex items-center gap-3 bg-[#111] p-3 rounded-lg border border-gray-800">
            <AtSign className="text-[#ff3565]" />
            <span>{user.username}</span>
          </div>

          {/* Email */}
          <div className="flex items-center gap-3 bg-[#111] p-3 rounded-lg border border-gray-800">
            <Mail className="text-[#ff3565]" />
            <span>{user.email}</span>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-3 bg-[#111] p-3 rounded-lg border border-gray-800">
            <Phone className="text-[#ff3565]" />
            <span>{user.phone}</span>
          </div>

        </div>

        {/* Edit Button */}
        <button className="w-full mt-6 bg-[#ff3565] hover:bg-pink-600 transition py-3 rounded-lg font-semibold">
          Edit Profile
        </button>

      </div>
    </div>
  );
}