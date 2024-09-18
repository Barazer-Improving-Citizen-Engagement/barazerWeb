import Link from 'next/link';
import { FaBars } from 'react-icons/fa';
import Button from './Button';
import { useState } from 'react';
import Sidebar from './Sidebar';




export default function Navbar() {


  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
    <nav className={`shadow-md bg-transparent relative top-0 w-full z-10 px-4 py-3 transition-transform duration-300 ${isSidebarOpen ? '-translate-y-full' : 'translate-y-0'}`}>
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold ">
            <Link href="/">Barazer</Link>
          </h1>
          <div className="flex items-center space-x-4">
            <Button
              text="Login"
              href="/login"
              className="bg-gray-800 px-6 py-3 text-lg text-orange-300 font-bold rounded-full shadow-lg hover:bg-amber-300 hover:text-customDark hover:font-bold transition duration-300 ease-in-out"
            />
            
            <FaBars
              onClick={toggleSidebar}
              className="text-2xl cursor-pointer"
            />
          </div>
        </div>
      </nav>

      {/* Sidebar */}
      {isSidebarOpen && (
        <Sidebar
          isOpen={isSidebarOpen}
          onClose={toggleSidebar}
        />
      )}
      </>
  );
}
