import React from 'react';

const Contact = () => {
  return (
    <main className="pt-32 pb-24 bg-stone-50">
      <section className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-32">
        <div>
          <h1 className="text-5xl md:text-6xl font-bold text-stone-900 tracking-tighter mb-8">
            Let's begin the dialogue.
          </h1>
          <p className="text-xl text-stone-500 leading-relaxed italic font-serif mb-16">
            Whether you are envisioning a full residential redesign or a specialized architectural intervention, we are ready to listen.
          </p>
          
          <div className="space-y-12">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-stone-400 mb-4">Direct Line</h3>
              <p className="text-2xl font-medium text-stone-900">+91-9314444747</p>
            </div>
            <div>
              <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-stone-400 mb-4">Electronic</h3>
              <a href="mailto:studio@nside.com" className="text-2xl font-medium text-stone-900 border-b border-stone-200 hover:border-stone-900 transition-colors">
                studio@nside.com
              </a>
            </div>
            <div>
              <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-stone-400 mb-4">Studio</h3>
              <p className="text-lg text-stone-600 max-w-xs">
                124 Architectural Way Design District New Delhi, 110020
              </p>
            </div>
            <div className="flex space-x-8">
              <a href="#" className="text-xs font-bold uppercase tracking-widest text-stone-400 hover:text-stone-900 transition-colors">Instagram</a>
              <a href="#" className="text-xs font-bold uppercase tracking-widest text-stone-400 hover:text-stone-900 transition-colors">Pinterest</a>
            </div>
          </div>
        </div>

        <div className="bg-white p-12 shadow-xl border border-stone-100">
          <h2 className="text-2xl font-bold mb-12 tracking-tight">Inquire</h2>
          <form className="space-y-8">
            <div className="border-b border-stone-200 pb-2">
              <label className="text-[10px] uppercase tracking-widest text-stone-400 font-bold block mb-2">Name</label>
              <input type="text" className="w-full bg-transparent focus:outline-none text-stone-900 font-medium" placeholder="Your Name" />
            </div>
            <div className="border-b border-stone-200 pb-2">
              <label className="text-[10px] uppercase tracking-widest text-stone-400 font-bold block mb-2">Email</label>
              <input type="email" className="w-full bg-transparent focus:outline-none text-stone-900 font-medium" placeholder="hello@example.com" />
            </div>
            <div className="border-b border-stone-200 pb-2">
              <label className="text-[10px] uppercase tracking-widest text-stone-400 font-bold block mb-2">Project Type</label>
              <select className="w-full bg-transparent focus:outline-none text-stone-900 font-medium appearance-none">
                <option>Residential</option>
                <option>Commercial</option>
                <option>Kitchen/Wardrobe Only</option>
                <option>Other</option>
              </select>
            </div>
            <div className="border-b border-stone-200 pb-2">
              <label className="text-[10px] uppercase tracking-widest text-stone-400 font-bold block mb-2">Message</label>
              <textarea rows="4" className="w-full bg-transparent focus:outline-none text-stone-900 font-medium resize-none" placeholder="Tell us about your project..."></textarea>
            </div>
            <button className="w-full bg-stone-900 text-white py-4 text-xs font-bold uppercase tracking-[0.2em] hover:bg-stone-800 transition-colors mt-8">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Contact;
