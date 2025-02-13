import React, { useState } from "react";
import { Mail, Lock, User, Eye, EyeOff, LogIn, UserPlus, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white relative">
      {/* Back Button */}
      <button 
        className="absolute top-6 left-6 flex items-center text-gray-400 hover:text-white transition"
        onClick={() => navigate("/")}
      >
        <ArrowLeft size={24} />
        <span className="ml-2">Back to Home</span>
      </button>

      <div className="bg-gray-800 p-8 rounded-2xl shadow-2xl w-96 text-center">
        <h2 className="text-3xl font-bold mb-6 flex items-center justify-center space-x-2">
          {isSignup ? <UserPlus size={28} /> : <LogIn size={28} />}
          <span>{isSignup ? "Sign Up" : "Login"}</span>
        </h2>

        <form className="space-y-4">
          {isSignup && (
            <div className="relative">
              <User className="absolute left-4 top-3 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Full Name"
                className="w-full bg-gray-700 text-white px-12 py-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
          )}

          <div className="relative">
            <Mail className="absolute left-4 top-3 text-gray-400" size={20} />
            <input
              type="email"
              placeholder="Email"
              className="w-full bg-gray-700 text-white px-12 py-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <div className="relative">
            <Lock className="absolute left-4 top-3 text-gray-400" size={20} />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full bg-gray-700 text-white px-12 py-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <button
              type="button"
              className="absolute right-4 top-3 text-gray-400"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          <button className="w-full bg-gradient-to-r from-green-400 to-blue-500 py-3 rounded-lg text-lg font-bold hover:scale-105 transition">
            {isSignup ? "Create Account" : "Login"}
          </button>
        </form>

        <p className="mt-6 text-gray-400">
          {isSignup ? "Already have an account?" : "Don't have an account?"}{" "}
          <button
            className="text-blue-400 font-bold hover:underline"
            onClick={() => setIsSignup(!isSignup)}
          >
            {isSignup ? "Login" : "Sign Up"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default Auth;
