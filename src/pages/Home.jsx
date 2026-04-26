import React from 'react';
import { Link } from 'react-router-dom';
import StatCard from '../components/StatCard';
import DesignCard from '../components/DesignCard';

const Home = () => {
  return (
    <main className="bg-stone-50">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=80" 
            alt="NSIDE Hero" 
            className="w-full h-full object-cover grayscale-[20%]"
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-8 w-full text-white pt-20">
          <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] tracking-tighter mb-8 max-w-3xl">
            100+ happy homes designed—yours could be next.
          </h1>
          <p className="text-xl md:text-2xl font-light tracking-tight mb-12 max-w-xl opacity-90 italic">
            Architectural precision meets soulful materiality.
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <Link to="/contact" className="bg-white text-stone-900 px-10 py-4 text-xs font-bold uppercase tracking-[0.2em] hover:bg-stone-200 transition-colors text-center">
              Book a Consultation
            </Link>
            <Link to="/projects" className="border border-white text-white px-10 py-4 text-xs font-bold uppercase tracking-[0.2em] hover:bg-white/10 transition-colors text-center">
              View Portfolio
            </Link>
          </div>
        </div>
        
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
          <span className="material-symbols-outlined text-white text-3xl font-light">expand_more</span>
        </div>
      </section>

      {/* Why Choose NSIDE */}
      <section className="py-32 max-w-7xl mx-auto px-8">
        <div className="text-center mb-20">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-stone-400 mb-4 block">Our Excellence</span>
          <h2 className="text-4xl md:text-5xl font-bold text-stone-900 tracking-tight mb-6">Why Choose NSIDE?</h2>
          <p className="text-stone-500 text-lg max-w-2xl mx-auto italic font-serif">
            For Your Interior Design Excellence — The Premier Standard for Architectural Interior Design
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          <StatCard value="20 Lakh+" label="Happy Customers" />
          <StatCard value="45 Days*" label="Delivery & Installation" />
          <StatCard value="10 Years" label="Warranty*" />
          <StatCard value="300+" label="Design Experts" />
          <StatCard value="15 Lakh Sq. Ft." label="Manufacturing Facility" />
          <StatCard value="Customize" label="Tailored for Space" />
        </div>
      </section>

      {/* Wardrobe Designs */}
      <section className="py-32 bg-stone-100">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
            <div>
              <h2 className="text-4xl font-bold text-stone-900 tracking-tight">Wardrobe Designs</h2>
              <p className="text-stone-500 mt-2">Bespoke storage solutions for modern living.</p>
            </div>
            <Link to="/services" className="text-xs font-bold uppercase tracking-widest text-stone-900 border-b border-stone-900 pb-2 hover:opacity-70 transition-opacity flex items-center">
              All Wardrobe Designs <span className="material-symbols-outlined ml-2 text-sm">arrow_forward</span>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <DesignCard title="Noble Hinged Wardrobe" imageUrl="https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=800&q=80" />
            <DesignCard title="Versa Hinged Wardrobe" imageUrl="https://images.unsplash.com/photo-1558997519-83ea9252edf8?auto=format&fit=crop&w=800&q=80" />
            <DesignCard title="Vantage Hinged Wardrobe" imageUrl="https://images.unsplash.com/photo-1614633312015-8121659a721c?auto=format&fit=crop&w=800&q=80" />
            <DesignCard title="Enigma Hinged Wardrobe" imageUrl="https://images.unsplash.com/photo-1601058268499-e52658b8bb88?auto=format&fit=crop&w=800&q=80" />
          </div>
        </div>
      </section>

      {/* Kitchen Designs */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
            <div>
              <h2 className="text-4xl font-bold text-stone-900 tracking-tight">Kitchen Designs</h2>
              <p className="text-stone-500 mt-2">Culinary architecture for the heart of your home.</p>
            </div>
            <Link to="/services" className="text-xs font-bold uppercase tracking-widest text-stone-900 border-b border-stone-900 pb-2 hover:opacity-70 transition-opacity flex items-center">
              All Kitchen Designs <span className="material-symbols-outlined ml-2 text-sm">arrow_forward</span>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <DesignCard title="Nexus U Shaped Kitchen" imageUrl="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80" />
            <DesignCard title="Aurex Straight Kitchen" imageUrl="https://images.unsplash.com/photo-1565538810643-b5bdb714032a?auto=format&fit=crop&w=800&q=80" />
            <DesignCard title="Radiance U Shape Kitchen" imageUrl="https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=800&q=80" />
            <DesignCard title="Vero Straight Modular Kitchen" imageUrl="https://images.unsplash.com/photo-1588854337221-4cf9fa96059c?auto=format&fit=crop&w=800&q=80" />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-32 bg-stone-900 text-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold tracking-tight mb-4">How it Works</h2>
            <p className="text-stone-400">Here's How We Bring Your Dream Space to Life</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div className="text-center">
              <span className="text-5xl font-light text-stone-700 mb-6 block">01</span>
              <h3 className="text-xl font-bold mb-4">Meet Your Designer</h3>
              <p className="text-stone-400 leading-relaxed">
                Bring your ideas, inspirations, and budget. Our expert designer will understand your needs and start shaping a plan that fits your lifestyle.
              </p>
            </div>
            <div className="text-center">
              <span className="text-5xl font-light text-stone-700 mb-6 block">02</span>
              <h3 className="text-xl font-bold mb-4">Finalize Your Design</h3>
              <p className="text-stone-400 leading-relaxed">
                Work one-on-one with your designer to refine the details. Get realistic 3D renders so you can visualize your space before it comes to life.
              </p>
            </div>
            <div className="text-center">
              <span className="text-5xl font-light text-stone-700 mb-6 block">03</span>
              <h3 className="text-xl font-bold mb-4">Bring It Home</h3>
              <p className="text-stone-400 leading-relaxed">
                Relax while we handle the rest — from crafting to installation. Shop directly from your design with special offers, and watch your dream home come alive.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Client Narratives */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold tracking-tight text-stone-900 mb-4">Client Narratives</h2>
            <p className="text-stone-500">Hear from those who have experienced the transformation of their spaces.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="p-10 bg-white border border-stone-100 shadow-sm">
              <p className="text-stone-600 italic leading-relaxed mb-8">
                "NSIDE transformed our historic townhouse with an incredible sensitivity to its original architecture while bringing in a deeply modern, refined material palette."
              </p>
              <div>
                <h4 className="font-bold text-stone-900">Sarah Jenkins</h4>
                <p className="text-xs uppercase tracking-widest text-stone-400 mt-1">West Village Project</p>
              </div>
            </div>
            <div className="p-10 bg-white border border-stone-100 shadow-sm">
              <p className="text-stone-600 italic leading-relaxed mb-8">
                "The level of precision in their custom millwork is unmatched. They designed a wardrobe system that didn't just store clothes, but completely re-organized how I start my day."
              </p>
              <div>
                <h4 className="font-bold text-stone-900">Marcus Chen</h4>
                <p className="text-xs uppercase tracking-widest text-stone-400 mt-1">Tribeca Loft</p>
              </div>
            </div>
            <div className="p-10 bg-white border border-stone-100 shadow-sm">
              <p className="text-stone-600 italic leading-relaxed mb-8">
                "Working with NSIDE was a masterclass in collaboration. They listened to our esoteric ideas and translated them into a cohesive, breathable space."
              </p>
              <div>
                <h4 className="font-bold text-stone-900">Elena Rodriguez</h4>
                <p className="text-xs uppercase tracking-widest text-stone-400 mt-1">Hudson Valley Retreat</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
