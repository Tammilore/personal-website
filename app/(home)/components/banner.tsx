import React from 'react';

// This component renders a banner that will be displayed at the absolute top of the page
const Banner: React.FC = () => {
  return (
    <div className="absolute top-0 left-0 w-full bg-black text-white text-center py-2 z-50">
      <span className="text-sm md:text-base">
        🚧 Still under construction 🚧
      </span>
    </div>
  );
};

export default Banner;
