import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-stone-50 border-t border-stone-200 py-24">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-4 gap-16">
        <div className="col-span-1 md:col-span-2">
          <h2 className="text-2xl font-bold tracking-tighter text-stone-900 mb-8">NSIDE</h2>
          <p className="text-stone-500 max-w-sm leading-relaxed italic font-serif">
            Architectural interior design defined by quiet luxury and material honesty.
          </p>
        </div>
        
        <div>
          <h3 className="text-[10px] uppercase tracking-[0.3em] text-stone-400 font-bold mb-8">Studio</h3>
          <ul className="space-y-4">
            <li><Link to="/services" className="text-xs font-bold uppercase tracking-widest text-stone-600 hover:text-stone-900 transition-colors">Services</Link></li>
            <li><Link to="/projects" className="text-xs font-bold uppercase tracking-widest text-stone-600 hover:text-stone-900 transition-colors">Projects</Link></li>
            <li><Link to="/contact" className="text-xs font-bold uppercase tracking-widest text-stone-600 hover:text-stone-900 transition-colors">Process</Link></li>
            <li><a href="#" className="text-xs font-bold uppercase tracking-widest text-stone-600 hover:text-stone-900 transition-colors">Journal</a></li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-[10px] uppercase tracking-[0.3em] text-stone-400 font-bold mb-8">Connect</h3>
          <ul className="space-y-4">
            <li><a href="#" className="text-xs font-bold uppercase tracking-widest text-stone-600 hover:text-stone-900 transition-colors">Instagram</a></li>
            <li><a href="#" className="text-xs font-bold uppercase tracking-widest text-stone-600 hover:text-stone-900 transition-colors">Pinterest</a></li>
            <li><Link to="/contact" className="text-xs font-bold uppercase tracking-widest text-stone-600 hover:text-stone-900 transition-colors">Contact</Link></li>
            <li><a href="#" className="text-xs font-bold uppercase tracking-widest text-stone-600 hover:text-stone-900 transition-colors">Privacy</a></li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-8 mt-24 pt-12 border-t border-stone-100 flex flex-col md:flex-row justify-between items-center gap-8">
        <p className="text-[10px] uppercase tracking-[0.2em] text-stone-400 font-bold">
          © 2024 NSIDE Interior Excellence
        </p>
        <div className="flex items-center space-x-4">
          <p className="text-[10px] uppercase tracking-[0.2em] text-stone-400 font-bold">Subscribe to our newsletter</p>
          <div className="flex border-b border-stone-300 pb-1">
            <input type="email" placeholder="email address" className="bg-transparent text-xs focus:outline-none w-48 text-stone-900" />
            <button className="material-symbols-outlined text-sm text-stone-400 hover:text-stone-900 transition-colors">arrow_forward</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
