import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function WhistleblowerPage() {
  const [anonymousMessage, setAnonymousMessage] = useState('');

  const handleSubmit = () => {
    // Whistleblower logic
    alert('Message submitted anonymously. Your identity is secure.');
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow p-8 bg-gray-100">
        <h1 className="text-4xl font-bold mb-6">Whistleblower</h1>
        <p className="text-lg">
          Anonymously report corruption or malpractice within institutions. Your identity will remain secure.
        </p>
        <textarea
          placeholder="Submit your whistleblowing report"
          value={anonymousMessage}
          onChange={(e) => setAnonymousMessage(e.target.value)}
          className="w-full px-4 py-2 mb-4 border rounded-lg"
        />
        <button
          onClick={handleSubmit}
          className="bg-red-600 text-white px-6 py-2 rounded-lg"
        >
          Submit Anonymously
        </button>
      </main>
      <Footer />
    </div>
  );
}
    