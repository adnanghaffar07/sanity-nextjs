'use client';

import React from 'react';

type ForbesArticleCardProps = {
  title: string;
  imageUrl: string;
  articleUrl: string;
  description?: string;
};

const ForbesArticleCard: React.FC<ForbesArticleCardProps> = ({ title, imageUrl, articleUrl, description }) => {
  return (
    <a
      href={articleUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl border border-gray-200 hover:border-gray-300 transition-transform transform hover:scale-[1.02]"
    >
      {/* Image with dark overlay */}
      <div className="relative w-full h-56">
        <img
          src={imageUrl}
          alt={title}
          className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
        <div className="absolute bottom-4 left-4 text-white z-10">
          <h2 className="text-lg font-semibold">{title}</h2>
        </div>
      </div>

      {/* Text content */}
      <div className="p-4 bg-white">
        {description && <p className="text-sm text-gray-600 mb-3 line-clamp-3">{description}</p>}
        <span className="text-blue-600 font-medium text-sm inline-block group-hover:underline">
          Read on Forbes →
        </span>
      </div>
    </a>
  );
};

export default ForbesArticleCard;
 