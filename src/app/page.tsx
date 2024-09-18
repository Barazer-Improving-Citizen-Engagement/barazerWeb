"use client";
import Link from "next/link";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import Button from "./components/Button";
import Popup from "./modal/Popup";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Card from "./components/Card";
import Navbar from "./components/Navbar";

const Home: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleOpenPopup = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className={`flex flex-col min-h-screen bg-gray-100 ${isSidebarOpen ? 'overflow-hidden' : ''}`}>
      {/* Navbar */}
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

      {/* FABARS fixed in the top left even when the sidebar is open */}
      {isSidebarOpen && (
        <div className="fixed top-3 right-3 z-20">
          <FaBars
            onClick={toggleSidebar}
            className="text-2xl cursor-pointer bg-gray-800 text-white p-2 rounded-full"
          />
        </div>
      )}

      {/* Main Content */}
      <main className={`flex-grow flex flex-col items-center justify-center p-6 pt-20 text-center transition-opacity duration-300 ${isSidebarOpen ? 'opacity-40' : 'opacity-100'}`}>
                {/* <Navbar/> */}
        
        <h1 className="top-0 text-4xl font-bold text-customDark mb-4">
          Welcome to Barazer
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          Your voice matters! Empowering with democracy, transparency, and government accountability.
        </p>
        <Link
          href="/signup"
          className="bg-amber-300 text-customDark font-bold px-6 py-3 rounded-lg hover:bg-black hover:text-amber-500 transition-all"
        >
          Get Started
        </Link>

        {/* About Section */}
        <div className="my-8">
          <h2 className="text-2xl font-bold text-customDark mb-2">
            We are all about...
          </h2>
          <p className="font-semibold text-lg mb-4">
            Combining <span className="text-emerald-500">transparency</span>, <span className="text-emerald-500">participation</span>, and user-friendly technology into one platform. We focus on <span className="text-emerald-500">accessibility</span> and <span className="text-emerald-500">scalability</span>.
          </p>
          <p className="text-lg">
            We <span className="text-emerald-500">serve</span> as the go-to tool for governments seeking to better interact with their <span className="text-emerald-500">citizens</span> while giving citizens a voice in governance.
          </p>
        </div>

        {/* Product Section */}
        <div className="my-8">
          <h2 className="text-2xl font-bold text-customDark mb-4">The Product</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card
              title="Transparency"
              description="Stay informed about government actions, policies, and outcomes. Explore government data in real-time."
              imageUrl="https://via.placeholder.com/300x200"
              link="/transparency"
            />
            <Card
              title="Citizen Participation"
              description="Crowdsourced solutions for public engagement."
              imageUrl="https://via.placeholder.com/300x200"
              link="/mobile-app"
            />
            <Card
              title="Advanced Data Visualization"
              description="Stay informed about government actions, policies, and outcomes. Explore government data in real-time."
              imageUrl="https://via.placeholder.com/300x200"
              link="/transparency"
            />
            <Card
              title="Data Donation"
              description="Contribute data securely for public insights."
              imageUrl="https://via.placeholder.com/300x200"
              link="/data-donate"
            />
          </div>
        </div>
      </main>

      {/* Footer */}
      {/* <Footer /> */}

      {/* Popup */}
      {showPopup && <Popup onClose={handleClosePopup} />}
    </div>
  );
};

export default Home;