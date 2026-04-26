import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#d1d5d6] border-b border-stone-300 shadow-sm">
      <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto w-full">
        
        {/* LEFT: Brand Name */}
        <Link to="/" className="text-xl font-bold tracking-tighter text-black">
          NSIDE
        </Link>

        {/* CENTER: Desktop Links (Hidden on mobile) */}
        <div className="hidden md:flex items-center space-x-10">
          <Link to="/" className="text-stone-700 hover:text-black text-xs font-semibold uppercase tracking-widest transition-colors">Home</Link>
          <Link to="/services" className="text-stone-700 hover:text-black text-xs font-semibold uppercase tracking-widest transition-colors">Services</Link>
          <Link to="/projects" className="text-stone-700 hover:text-black text-xs font-semibold uppercase tracking-widest transition-colors">Projects</Link>
          <Link to="/contact" className="text-stone-700 hover:text-black text-xs font-semibold uppercase tracking-widest transition-colors">Contact</Link>
        </div>

        {/* RIGHT: Search & Mobile Toggle */}
        <div className="flex items-center space-x-5">
          <button className="text-stone-600 hover:text-black transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
          </button>

          {/* Hamburger Menu Button (Visible only on mobile) */}
          <button 
  onClick={() => setIsOpen(!isOpen)}
  className="md:hidden text-stone-600 hover:text-black focus:outline-none transition-colors"
>
  {isOpen ? (
    /* Light Close (X) Icon */
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  ) : (
    /* Light Hamburger Icon */
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path 
        d="M5 8H19M5 12H19M5 16H19" 
        stroke="currentColor" 
        strokeWidth="1.2" 
        strokeLinecap="round" 
      />
    </svg>
  )}
</button>
        </div>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      {isOpen && (
        <div className="md:hidden bg-[#d1d5d6] border-t border-stone-300 flex flex-col items-center space-y-4 py-6 shadow-inner">
          <Link to="/" onClick={() => setIsOpen(false)} className="text-stone-800 font-semibold uppercase text-xs tracking-widest">Home</Link>
          <Link to="/services" onClick={() => setIsOpen(false)} className="text-stone-800 font-semibold uppercase text-xs tracking-widest">Services</Link>
          <Link to="/projects" onClick={() => setIsOpen(false)} className="text-stone-800 font-semibold uppercase text-xs tracking-widest">Projects</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)} className="text-stone-800 font-semibold uppercase text-xs tracking-widest">Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;