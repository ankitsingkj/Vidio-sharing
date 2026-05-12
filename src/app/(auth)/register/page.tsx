// app/register/page.tsx

"use client";

import Link from "next/link";

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-md bg-[#111] border border-gray-800 rounded-2xl p-8 shadow-2xl">

        {/* Heading */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white">
            Create Account
          </h1>
          <p className="text-gray-400 mt-2">
            Sign up to get started
          </p>
        </div>

        {/* Form */}
        <form className="space-y-5">

          {/* Full Name */}
          <div>
            <label className="text-sm text-gray-300">Full Name</label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full mt-2 px-4 py-3 rounded-lg bg-[#1a1a1a] border border-gray-700 text-white focus:border-pink-500 outline-none"
            />
          </div>

          {/* Username */}
          <div>
            <label className="text-sm text-gray-300">Username</label>
            <input
              type="text"
              placeholder="johndoe"
              className="w-full mt-2 px-4 py-3 rounded-lg bg-[#1a1a1a] border border-gray-700 text-white focus:border-pink-500 outline-none"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="text-sm text-gray-300">Phone Number</label>
            <input
              type="tel"
              placeholder="+91 9876543210"
              className="w-full mt-2 px-4 py-3 rounded-lg bg-[#1a1a1a] border border-gray-700 text-white focus:border-pink-500 outline-none"
            />
          </div>

          {/* Email */}
          <div>
            <label className="text-sm text-gray-300">Email</label>
            <input
              type="email"
              placeholder="example@mail.com"
              className="w-full mt-2 px-4 py-3 rounded-lg bg-[#1a1a1a] border border-gray-700 text-white focus:border-pink-500 outline-none"
            />
          </div>

          {/* Password */}
          <div>
            <label className="text-sm text-gray-300">Password</label>
            <input
              type="password"
              placeholder="Create password"
              className="w-full mt-2 px-4 py-3 rounded-lg bg-[#1a1a1a] border border-gray-700 text-white focus:border-pink-500 outline-none"
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label className="text-sm text-gray-300">Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm password"
              className="w-full mt-2 px-4 py-3 rounded-lg bg-[#1a1a1a] border border-gray-700 text-white focus:border-pink-500 outline-none"
            />
          </div>

          {/* Terms */}
          <label className="flex items-start gap-2 text-sm text-gray-400">
            <input type="checkbox" className="mt-1" />
            <span>
              I agree to the Terms & Conditions and Privacy Policy
            </span>
          </label>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-pink-600 hover:bg-pink-700 transition-colors py-3 rounded-lg font-semibold text-white"
          >
            Create Account
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-gray-400 text-sm mt-6">
          Already have an account?{" "}
          <Link href="/login" className="text-pink-500 hover:text-pink-400">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}