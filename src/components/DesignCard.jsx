import React from 'react';

const DesignCard = ({ title, imageUrl }) => (
  <div className="group relative overflow-hidden bg-stone-100 aspect-[4/5] cursor-pointer">
    <img 
      src={imageUrl} 
      alt={title} 
      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
    />
    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
    <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
      <h3 className="text-xl font-medium text-white tracking-tight">{title}</h3>
      <div className="mt-4 w-12 h-[1px] bg-white transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
    </div>
  </div>
);

export default DesignCard;
