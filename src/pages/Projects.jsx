import React from 'react';

const Projects = () => {
  const projects = [
    { title: 'The Marble Penthouse', category: 'Residential — New York', imageUrl: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80' },
    { title: 'The Oak Residence', category: 'Residential — London', imageUrl: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80' },
    { title: 'Gallery Kitchen', category: 'Kitchens — Berlin', imageUrl: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80' },
    { title: 'Studio 42', category: 'Commercial — Copenhagen', imageUrl: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=80' }
  ];

  return (
    <main className="pt-32 pb-24 bg-stone-50">
      <section className="max-w-7xl mx-auto px-8">
        <div className="mb-20">
          <h1 className="text-5xl md:text-6xl font-bold text-stone-900 tracking-tighter mb-6">The Monograph Series</h1>
          <p className="text-stone-500 text-lg">A curated selection of spaces defined by light, materiality, and restraint.</p>
        </div>

        <div className="space-y-32">
          {projects.map((project, index) => (
            <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 items-center`}>
              <div className="w-full lg:w-2/3 overflow-hidden">
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full aspect-video object-cover grayscale-[30%] hover:grayscale-0 transition-all duration-700 hover:scale-105"
                />
              </div>
              <div className="w-full lg:w-1/3 space-y-6">
                <span className="text-xs font-bold uppercase tracking-[0.3em] text-stone-400">{project.category}</span>
                <h2 className="text-4xl font-bold text-stone-900 tracking-tight">{project.title}</h2>
                <div className="w-12 h-[2px] bg-stone-900"></div>
                <button className="text-xs font-bold uppercase tracking-widest text-stone-900 hover:opacity-70 transition-opacity">
                  View Case Study
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-32 p-20 bg-stone-900 text-white text-center">
          <h2 className="text-3xl font-bold mb-8">Your Project Next?</h2>
          <p className="text-stone-400 mb-12 max-w-xl mx-auto">
            We bring architectural rigor to interior spaces. Let's discuss how we can shape your environment.
          </p>
          <button className="bg-white text-stone-900 px-12 py-4 text-xs font-bold uppercase tracking-widest hover:bg-stone-200 transition-colors">
            Start a Conversation
          </button>
        </div>
      </section>
    </main>
  );
};

export default Projects;
