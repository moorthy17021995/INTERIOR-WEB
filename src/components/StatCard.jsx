import React from 'react';

const StatCard = ({ value, label }) => (
  <div className="flex flex-col items-center text-center p-8 border border-stone-200 bg-white shadow-sm hover:shadow-md transition-shadow">
    <h4 className="text-3xl font-bold text-stone-900 mb-2">{value}</h4>
    <p className="text-xs uppercase tracking-widest text-stone-500 font-semibold">{label}</p>
  </div>
);

export default StatCard;
