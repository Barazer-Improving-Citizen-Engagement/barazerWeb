import React from 'react';
import Link from 'next/link';

interface CardProps {
  title: string;
  description: string;
  link: string; // URL to link to
  imageUrl: string;
}

export default function Card({ title, description, link, imageUrl }: CardProps) {
  return (
    <Link href={link} passHref>
      <div className="sim-card-container transform transition-transform duration-700 hover:scale-105 hover:shadow-2xl hover:bg-customDark hover:text-white cursor-pointer p-6 rounded-3xl bg-slate-200 shadow-lg text-gray-800 relative">
        <div className="sim-chip bg-gray-200 w-12 h-8 rounded-lg absolute top-0 left-4">
          <span className="text-xs text-gray-800">c-soon</span>
        </div>
        <img
        src={imageUrl}
        alt={title}
        className="w-full h-32 object-cover rounded-xl mb-4"
      />
        <h3 className="text-2xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </Link>
  );
}
