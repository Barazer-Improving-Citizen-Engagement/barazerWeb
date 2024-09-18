import { useState, useEffect } from 'react';
import Button from '../components/Button';

export default function Popup() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 60000); // 1 minute

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setShowPopup(false);
  };

  if (!showPopup) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-semibold mb-4">Join the Waiting List</h2>
        <input
          type="text"
          placeholder="Name"
          className="w-full px-4 py-2 mb-4 border rounded-lg"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full px-4 py-2 mb-4 border rounded-lg"
        />
        <textarea
          placeholder="Feedback or inquiries (optional)"
          className="w-full px-4 py-2 mb-4 border rounded-lg"
        />
        <div className="flex justify-between">
          <Button text="Submit" onClick={handleClose} />
          <Button text="Close" onClick={handleClose} className="bg-gray-400 hover:bg-gray-500" />
        </div>
      </div>
    </div>
  );
}
