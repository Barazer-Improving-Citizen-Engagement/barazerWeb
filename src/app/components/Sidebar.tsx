import React from 'react';
import { FaTimes } from 'react-icons/fa'; // Add a close icon

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed top-0 bottom-0 rounded-3xl left-6 h-full w-64 bg-customDark text-white transition-transform transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} `}
    >
      <div className="flex justify-between items-center p-4 border-b border-gray-700">
        {/* <h2 className="text-xl font-bold">Sidebar</h2> */}
        <FaTimes
          onClick={onClose}
          className="cursor-pointer text-2xl"
        />
      </div>
      <div className="p-8">
        {/* Add your sidebar content here */} 
        <p>Link 1</p>
        <p>Link 2</p>
        <p>Link 3</p>
      </div>
    </div>
  );
};

export default Sidebar;
