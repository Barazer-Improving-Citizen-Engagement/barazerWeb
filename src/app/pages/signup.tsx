"use client";
import { useState } from 'react';
import { signUp } from './firebase/firebase';
import { useRouter } from 'next/navigation';
import Navbar from './components/Navbar';
import Button from './components/Button';
import Footer from './components/Footer'; // Fixed typo

export default function SignUpPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [receiveUpdates, setReceiveUpdates] = useState(false);

  const handleSubmit = async () => {
    if (!agreeTerms) {
      alert('You must agree to the terms and conditions.');
      return;
    }
    try {
      await signUp(email, password);
      router.push('/home');
      alert('Registered successfully!');
    } catch (error) {
      alert('Error signing up: ' + error.message);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <div className="flex-grow flex items-center justify-center">
        <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
          <h2 className="text-3xl font-bold mb-6 text-center">Create Your Account</h2>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 mb-4 border rounded-lg"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 mb-4 border rounded-lg"
          />
          <div className="flex items-center mb-4">
            <input
              type="checkbox"
              checked={agreeTerms}
              onChange={(e) => setAgreeTerms(e.target.checked)}
              className="mr-2"
            />
            <label>
              I agree to the <a href="/terms" className="text-blue-600 hover:underline">Terms and Conditions</a>
            </label>
          </div>
          <div className="flex items-center mb-4">
            <input
              type="checkbox"
              checked={receiveUpdates}
              onChange={(e) => setReceiveUpdates(e.target.checked)}
              className="mr-2"
            />
            <label>
              I want to receive information, updates, and opportunities
            </label>
          </div>
          <Button
            onClick={handleSubmit}
            text="Register"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-500 transition"
          />
        </div>
      </div>
      {/* <Footer /> Moved inside the main div */}
    </div>
  );
}