"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { login } from '../firebase/firebase';
import Navbar from '../components/Navbar'; // Add Navbar for consistency
import Button from '../components/Button'; // Reusable Button Component
import Footer from '../components/Footer'; // Fixed typo
import { IoEye, IoEyeOff } from 'react-icons/io5'; // Password visibility icons

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const router = useRouter();

  const handleLogin = async () => {
    try {
      // Simple validation
      if (!email || !password) {
        setErrors({ email: 'Email and password are required.' });
        return;
      }
      await login(email, password);
      router.push('/home');
    } catch (error) {
      alert('Error: ' + error.message);
    }
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-900 p-6">
      {/* <Navbar /> */}
      <div className="flex-grow flex items-center justify-center">
        <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
          <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
            Login to Your Account
          </h2>
          {/* Email Input */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-1">Email Address</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>
          {/* Password Input */}
          <div className="mb-6">
            <label className="block text-gray-700 mb-1">Password</label>
            <div className="relative">
              <input
                type={passwordVisible ? 'text' : 'password'}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute inset-y-0 right-0 flex items-center pr-3"
              >
                {passwordVisible ? (
                  <IoEyeOff className="text-gray-500" />
                ) : (
                  <IoEye className="text-gray-500" />
                )}
              </button>
            </div>
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password}</p>
            )}
          </div>
          {/* Login Button */}
          <Button
            onClick={handleLogin}
            text="Login"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-500 transition"
          />
          {/* Switch to Sign Up */}
          <div className="mt-4 text-center">
            <p className="text-gray-600">Don’t have an account?</p>
            <a href="/signup" className="text-blue-600 hover:underline">
              Sign Up
            </a>
          </div>
        </div>
      </div>
      {/* <Footer /> Move Footer inside the main div */}
    </div>
  );
};

export default LoginPage;
