import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa'; // Sidebar toggle icon
import Sidebar from '../components/Sidebar'; // Import your sidebar component

const Page: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      <header className="flex items-center p-4 bg-gray-800 text-white">
        <FaBars
          onClick={toggleSidebar}
          className="text-2xl cursor-pointer"
        />
      </header>

      {/* Sidebar */}
      <Sidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      <main className="p-4">
        {/* Main content here */}
        <p>Welcome to the app!</p>
      </main>
    </div>
  );
};

export default Page;
