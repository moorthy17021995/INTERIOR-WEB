import React from 'react';
import { Link } from 'react-router-dom';

const Collection = () => {
  return (
    <main className="flex-grow pt-32 pb-24 px-8 max-w-[1920px] mx-auto w-full">
      {/* Page Header */}
      <div className="mb-16">
        <h1 className="font-headline text-[3.5rem] font-bold tracking-tight text-on-surface mb-4">The Archives</h1>
        <p className="font-body text-base text-on-surface-variant max-w-2xl">A curated selection of timeless architectural pieces, brutalist forms, and minimalist objects. Designed to anchor space and dictate atmosphere.</p>
      </div>
      
      <div className="flex flex-col lg:flex-row gap-16">
        {/* Sidebar Filters */}
        <aside className="w-full lg:w-64 flex-shrink-0">
          <div className="sticky top-32 space-y-12">
            {/* Categories */}
            <div>
              <h3 className="font-headline text-[1.125rem] font-semibold text-on-surface mb-6">Category</h3>
              <ul className="space-y-4 font-body text-sm text-on-surface-variant">
                <li><a className="hover:text-on-surface transition-colors flex justify-between items-center" href="#"><span>Seating</span> <span className="text-xs opacity-50">24</span></a></li>
                <li><a className="text-on-surface font-medium flex justify-between items-center" href="#"><span>Lighting</span> <span className="text-xs opacity-50">18</span></a></li>
                <li><a className="hover:text-on-surface transition-colors flex justify-between items-center" href="#"><span>Surfaces</span> <span className="text-xs opacity-50">12</span></a></li>
                <li><a className="hover:text-on-surface transition-colors flex justify-between items-center" href="#"><span>Objects</span> <span className="text-xs opacity-50">36</span></a></li>
              </ul>
            </div>
            {/* Material */}
            <div>
              <h3 className="font-headline text-[1.125rem] font-semibold text-on-surface mb-6">Material</h3>
              <div className="flex flex-wrap gap-3">
                <button className="bg-surface-container-high text-on-surface-variant px-4 py-2 rounded-full font-label text-[0.75rem] uppercase tracking-widest hover:bg-surface-container-highest transition-colors">Concrete</button>
                <button className="bg-primary text-on-primary px-4 py-2 rounded-full font-label text-[0.75rem] uppercase tracking-widest transition-colors">Steel</button>
                <button className="bg-surface-container-high text-on-surface-variant px-4 py-2 rounded-full font-label text-[0.75rem] uppercase tracking-widest hover:bg-surface-container-highest transition-colors">Glass</button>
                <button className="bg-surface-container-high text-on-surface-variant px-4 py-2 rounded-full font-label text-[0.75rem] uppercase tracking-widest hover:bg-surface-container-highest transition-colors">Oak</button>
              </div>
            </div>
          </div>
        </aside>

        {/* Product Grid Area */}
        <div className="flex-grow">
          {/* Controls Bar */}
          <div className="flex justify-between items-end mb-12 border-b border-surface-container-high pb-4">
            <span className="font-label text-[0.75rem] uppercase tracking-widest text-on-surface-variant">Showing 90 items</span>
            <div className="flex items-center gap-2">
              <span className="font-label text-[0.75rem] uppercase tracking-widest text-on-surface-variant">Sort by:</span>
              <select className="bg-transparent border-0 font-body text-sm font-medium text-on-surface pr-8 py-0 focus:ring-0 cursor-pointer">
                <option>Curated</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>New Arrivals</option>
              </select>
            </div>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-16">
          {/* Product 1 */}
          <Link to="/detail" className="group flex flex-col">
            <div className="relative aspect-[4/5] mb-6 bg-surface-container-low overflow-hidden rounded-sm">
              <img alt="The Kyoto Lounge Chair" className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3XD6rodinMiQ7ioUtH8zSQdJePqbYLta6HO9c8m0ojPexTuTjesVO47d01sXxx5McZzFyl4OdnTsw-og-K2VN_py2aWspUh7r6J2vhdmXxsAAMghFoe3N2AwMunyDTFwAR6HTicZ0WOaOZpmepU7pAvGSc_e3UtmdjHUIHG6fDVsT8Pxp3GekY20tMUxo8fsZpGA92G1VOBVchDFgx5mKoJWR0Nc5th6dXz9Tt7HuTuc7FDR9vMi730m6iVyDR4jJ-31OTjVyXfGl"/>
              <button className="absolute bottom-4 right-4 bg-surface-container-lowest/80 backdrop-blur-xl text-on-surface w-12 h-12 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-primary hover:text-on-primary">
                <span className="material-symbols-outlined">add</span>
              </button>
            </div>
            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-body text-[1rem] font-medium text-on-surface mb-1">The Kyoto Lounge Chair</h4>
                <p className="font-label text-[0.6875rem] uppercase tracking-widest text-on-surface-variant">Walnut & Linen</p>
              </div>
              <span className="font-headline text-[1.125rem] font-semibold text-on-surface">$3,200</span>
            </div>
          </Link>

          {/* Product 2 */}
          <Link to="/detail" className="group flex flex-col">
            <div className="relative aspect-[4/5] mb-6 bg-surface-container-low overflow-hidden rounded-sm">
              <img alt="Brutalist Oak Dining Table" className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDLTyJeZvGMqjtBx_NlxBzyAgmqT2ubzjXZB-GSPnFSuah5NZXnYiGV_R3ud3XYWTpqYyEfTMHg5om4ik7e4udNxd9DeUV_jm2-tWzvRBf7rBrYQRO0OP2gsTz9wRxoPXFLP2PPCww5ETANkLUEc5ChxgiCfHjouvH13AR2mmG9BGSzhTwLMBXyEJZwhlOoCLUHKsxNk855PqUcYQU5jlfGo8JsTIoyGuyYQSYCa6C4lxsBHAnFLlcCJQMVS_ekYFCc7A7i0T_LzHlM"/>
              <button className="absolute bottom-4 right-4 bg-surface-container-lowest/80 backdrop-blur-xl text-on-surface w-12 h-12 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-primary hover:text-on-primary">
                <span className="material-symbols-outlined">add</span>
              </button>
            </div>
            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-body text-[1rem] font-medium text-on-surface mb-1">Brutalist Oak Dining Table</h4>
                <p className="font-label text-[0.6875rem] uppercase tracking-widest text-on-surface-variant">Solid Oak</p>
              </div>
              <span className="font-headline text-[1.125rem] font-semibold text-on-surface">$5,500</span>
            </div>
          </Link>

          {/* Product 3 */}
          <Link to="/detail" className="group flex flex-col">
            <div className="relative aspect-[4/5] mb-6 bg-surface-container-low overflow-hidden rounded-sm">
              <img alt="Bauhaus Sideboard" className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCtGMSRzUS2C0ndWRHqfnexpYYpb5RYzPDp9n8RP5iNjm_gMDJzfH6vTAGS0TlVpCUNO4bjKOEWcCJuZKv2RZsdbqkuZHTwKkaVjEEorV3GyA0M5q-RFbGxU74MH0DJEnGxjs8FdJzBU6_QP4Jxjew0Qp3z9GwqZ6cEi-upN1vvX0HQe7psk71Y30elHO289O4X0-d_G5fqzS_FRwEsE-Bhjx4aeh8tuspscvXlGs5y0gxcmbMfCVoHvkHqX1NF0_ny3mUQAI0qhC6L"/>
              <div className="absolute top-4 left-4 bg-primary text-on-primary px-3 py-1 font-label text-[0.6875rem] uppercase tracking-widest">New</div>
              <button className="absolute bottom-4 right-4 bg-surface-container-lowest/80 backdrop-blur-xl text-on-surface w-12 h-12 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-primary hover:text-on-primary">
                <span className="material-symbols-outlined">add</span>
              </button>
            </div>
            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-body text-[1rem] font-medium text-on-surface mb-1">Bauhaus Sideboard</h4>
                <p className="font-label text-[0.6875rem] uppercase tracking-widest text-on-surface-variant">Steel & Glass</p>
              </div>
              <span className="font-headline text-[1.125rem] font-semibold text-on-surface">$2,800</span>
            </div>
          </Link>

          {/* Product 4 */}
          <Link to="/detail" className="group flex flex-col">
            <div className="relative aspect-[4/5] mb-6 bg-surface-container-low overflow-hidden rounded-sm">
              <img alt="Modular Velvet Sofa" className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZpXOzb_67FedtVvVY-rJymv3GW5iN69PzqeGIzbIGlrCE4MypTC7_AjM4NYYT__OWmxd5g3pvAeteg9HafXbaADBuMFOZ31IG5W6nqVa0hs14R69LVw7D9NRJqOJQld7S6ddp71ilun0qZFOISex30RV6aoXP0gVV_X8A_mg562pewDU-GavLGzZt7E2hoFLiqGPnPDW5CLtC5OcTQeLOYWAc-cJbqkC5ZcB9_RGTkyTGYRM87gpQXC0E1uZ_ZHe5BRGNYG0L9EwL"/>
              <button className="absolute bottom-4 right-4 bg-surface-container-lowest/80 backdrop-blur-xl text-on-surface w-12 h-12 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-primary hover:text-on-primary">
                <span className="material-symbols-outlined">add</span>
              </button>
            </div>
            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-body text-[1rem] font-medium text-on-surface mb-1">Modular Velvet Sofa</h4>
                <p className="font-label text-[0.6875rem] uppercase tracking-widest text-on-surface-variant">Emerald Velvet</p>
              </div>
              <span className="font-headline text-[1.125rem] font-semibold text-on-surface">$6,200</span>
            </div>
          </Link>

          {/* Product 5 */}
          <Link to="/detail" className="group flex flex-col">
            <div className="relative aspect-[4/5] mb-6 bg-surface-container-low overflow-hidden rounded-sm">
              <img alt="Tubular Armchair" className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDJmvklEVgzh7c6y7rKHn_QBkhyutsnWRbMO-jvaDwtW0Xwn_ISoWwaQD55JM_TLFcf7E4A88HycmZKuOhyHdUJAY2ekCxYvoLmqxVySWynSc8CnSnfCUs37kVWjdnhGtOutYKawUGIZYlNiyH7oygk2lWGVdxvmDRUpVmvfSzUija7uD3A0uMgYzqc1hFgEjKRyJE-THRx39Uq5hjhswRbRq66GD3ogYwDO3ZU52dVfMMZtukt6J0M0R3__0sw6SkeNvwOC2KCzfrp"/>
              <button className="absolute bottom-4 right-4 bg-surface-container-lowest/80 backdrop-blur-xl text-on-surface w-12 h-12 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-primary hover:text-on-primary">
                <span className="material-symbols-outlined">add</span>
              </button>
            </div>
            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-body text-[1rem] font-medium text-on-surface mb-1">Tubular Armchair</h4>
                <p className="font-label text-[0.6875rem] uppercase tracking-widest text-on-surface-variant">Chrome & Leather</p>
              </div>
              <span className="font-headline text-[1.125rem] font-semibold text-on-surface">$1,650</span>
            </div>
          </Link>

          {/* Product 6 */}
          <Link to="/detail" className="group flex flex-col">
            <div className="relative aspect-[4/5] mb-6 bg-surface-container-low overflow-hidden rounded-sm">
              <img alt="Prism Vessel" className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBPjWzd7lzsOwes4-6g5xDbZucLc3yI6OYc6dZ4UXDzVQkK-5DAxIDap_peLcU86KjNVVtKYirMHg8rLE8IeOBb2OG7UvYsmNsUjLLcLdv3kLW8CuE19l9eZzBMf43NiSqfC3pjRGv7D9U5mK2tLmZ1oTmbSHJ8vLpKmxZDlSD0isItj0-nnoVjKpbGPe2R4PKIPLqchxpK9vJFrMIDE8xiIsyE7wEVaHHulwmuBoJrfs7pbud3NSbV17zk_MrvgEUC9bPbIQI5MJOJ"/>
              <button className="absolute bottom-4 right-4 bg-surface-container-lowest/80 backdrop-blur-xl text-on-surface w-12 h-12 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-primary hover:text-on-primary">
                <span className="material-symbols-outlined">add</span>
              </button>
            </div>
            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-body text-[1rem] font-medium text-on-surface mb-1">Prism Vessel</h4>
                <p className="font-label text-[0.6875rem] uppercase tracking-widest text-on-surface-variant">Smoked Glass</p>
              </div>
              <span className="font-headline text-[1.125rem] font-semibold text-on-surface">$320</span>
            </div>
          </Link>
  {/* Additional products would go here */}
          </div>

          {/* Pagination */}
          <div className="mt-24 flex justify-center">
            <button className="font-headline font-bold text-primary border-b-2 border-primary pb-1 hover:opacity-70 transition-opacity uppercase tracking-widest text-sm">Load More Objects</button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Collection;
