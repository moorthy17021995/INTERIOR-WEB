import React from 'react';
import DesignCard from '../components/DesignCard';

const Services = () => {
  const categories = [
    { title: 'Kitchen', subtitle: 'Culinary Architecture', imageUrl: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80' },
    { title: 'Bedroom', subtitle: 'Sanctuaries of Rest', imageUrl: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=800&q=80' },
    { title: 'Living Room', subtitle: 'Curated Gathering Spaces', imageUrl: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80' },
    { title: 'Bathroom', subtitle: 'Tactile Retreats', imageUrl: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80' },
    { title: 'Wardrobe', subtitle: 'Bespoke Organization', imageUrl: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=800&q=80' },
    { title: 'Study Room', subtitle: 'Focused Environments', imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80' }
  ];

  return (
    <main className="pt-32 pb-24 bg-stone-50">
      <section className="max-w-7xl mx-auto px-8">
        <div className="mb-20 max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold text-stone-900 tracking-tighter mb-8">Design Narratives</h1>
          <p className="text-xl text-stone-500 leading-relaxed italic font-serif">
            We sculpt interior spaces that resonate with quiet luxury. Material honesty, masterful light control, and an uncompromising dedication to craft define our approach to spatial design.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {categories.map((cat, index) => (
            <div key={index} className="flex flex-col">
              <DesignCard title={cat.title} imageUrl={cat.imageUrl} />
              <h3 className="mt-6 text-xl font-bold text-stone-900">{cat.title}</h3>
              <p className="text-stone-400 text-sm uppercase tracking-widest mt-2">{cat.subtitle}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Services;
