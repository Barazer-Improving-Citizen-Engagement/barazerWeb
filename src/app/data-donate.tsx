import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function DataDonatePage() {
  const [data, setData] = useState('');

  const handleSubmit = () => {
    // Submit data logic with validation
    alert('Data Submitted for analysis and insights!');
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow p-8 bg-gray-100">
        <h1 className="text-4xl font-bold mb-6">Donate Your Data</h1>
        <p className="text-lg">
          Help generate insights and improve transparency by securely donating your data.
        </p>
        <textarea
          placeholder="Paste your data here"
          value={data}
          onChange={(e) => setData(e.target.value)}
          className="w-full px-4 py-2 mb-4 border rounded-lg"
        />
        <button
          onClick={handleSubmit}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg"
        >
          Submit Data
        </button>
      </main>
      <Footer />
    </div>
  );
}
