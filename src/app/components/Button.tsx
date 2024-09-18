import React from 'react';

interface ButtonProps {
  text: string;
  onClick: () => void;
  className?: string;
}

export default function Button({ text, onClick, className = '' }: ButtonProps) {
  return (
    <button
      className={`bg-blue-600 hover:bg-blue-500 text-white px-6 py-2 rounded-lg transition duration-300 ease-in-out ${className}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
