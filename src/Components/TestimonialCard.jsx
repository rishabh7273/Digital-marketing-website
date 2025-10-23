import React from "react";

export default function TestimonialCard({ image, title, description }) {
  return (
    <div className="w-[300px] md:w-[430px] bg-white border border-gray-200 rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow duration-300">
      {/* Top Section: Image + Stars */}
      <div className="flex items-center justify-between">
        {/* Profile Image */}
        <img
          src={image}
          alt={title}
          className="w-12 h-12 rounded-md object-cover"
        />

        {/* Stars */}
        <div className="flex text-yellow-400 text-sm space-x-0.5">
          <span>★</span>
          <span>★</span>
          <span>★</span>
          <span>★</span>
          <span>☆</span>
        </div>
      </div>

      {/* Name */}
      <h3 className="mt-2 text-base font-semibold text-gray-800">{title}</h3>

      {/* Description */}
      <p className="mt-1 text-gray-600 text-sm md:text-base leading-relaxed line-clamp-4">
        {description}
      </p>
    </div>
  );
}
