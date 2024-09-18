import { useState } from 'react';

export default function CookiesSidebar() {
  const [isVisible, setIsVisible] = useState(true);

  const acceptCookies = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-800 text-white p-4 flex justify-between items-center">
      <p>We use necessary cookies to make this website work. By continuing, you accept our use of cookies.</p>
      <button
        onClick={acceptCookies}
        className="bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-500"
      >
        Accept Cookies
      </button>
    </div>
  );
}
