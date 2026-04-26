import React from 'react';

const Detail = () => {
  return (
    <main className="pt-32 pb-24">
      {/* Hero Section: Asymmetric Layout */}
      <section className="max-w-[1920px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left: High-Impact Image Gallery */}
        <div className="lg:col-span-7 space-y-12">
          <div className="relative overflow-hidden aspect-[4/5] bg-surface-container-low">
            <img 
              alt="Kyoto Lounge Chair" 
              className="w-full h-full object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBadPqR0RTKEAWHSOdMCyY3BCl8o55a9fEcKfr2pu0MsdsbgAju3kIG0iFXi1MfhRZOE3Fd-iq0al73pYsqDiS4_9yt6b9__Hkhd-jx2UXrm_VuR1iOdLLUHJx_ikZhE_yooHNA_ytG9hxAfUGevUBxnv-70FhGMrnyHBoMemka3m67pnCwMBNGOjLhcUPd73U4Lo0DMgbFTFDu9dsRjyN84dgjlA3Y2cbGimLEDGRPk62RsN3nGFUtGaC5xE2HLg_0MZwRMw9hry5y"
            />
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div className="aspect-square bg-surface-container-low overflow-hidden mt-12">
              <img alt="Detail Shot 1" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCnCRguqu_bp7apwrGwGCA_uVi-sYXnU9p00wL_G8Z4e6BXxYtrVwuotbgAFIYs9Nt-HmYm9phyVwQhDjZvowy22pzUP9-DH78tPqrpspZNZpWIvfmyAEYRZWXf0_zpJm786baHSnxEchrQuo-zjIznrvSrgp55kE_666W6D3U2TKbO8suzU16_WIIDI9xZOl5xXj-I9M1hjr5WQzaOiBicqb1DwTLjrWCObdVXRzb-6nAUbLy19w13uUcMmbEnTvXGj-TFECstzZHr"/>
            </div>
            <div className="aspect-square bg-surface-container-low overflow-hidden">
              <img alt="Detail Shot 2" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuArnssToQrfA0zT9pLdLFaYAPccZgg20TYk15WwGpcYWaA9ga0YN6lq97J27m8BGxzAFX4IkHvJJOyshpSX6YPxWglLqrERwphaTWN2USRm0lrjJ_gApco6gBnzegc7G1EYFFU1zOtfQZIyLKnelZFHNjsOVIMUVPB9GZG48l9duhZMHVidBRP-NqgKDi1n1pwmUTFrBIbjrRMSX_RxEvs3e29vqQ9rTtiw7DR8_a52ZV-SXuyq6e3i6OfiPPa682DFS4-OXr_h2Zfg"/>
            </div>
          </div>
        </div>
        
        {/* Right: Product Info & Actions (Sticky) */}
        <div className="lg:col-span-5 lg:sticky lg:top-40 space-y-12">
          <header className="space-y-4">
            <div className="flex items-center space-x-2">
              <span className="font-label text-on-surface-variant tracking-[0.1em] text-[10px] uppercase">Architectural Series</span>
              <div className="h-[1px] w-8 bg-outline-variant/30"></div>
              <span className="font-label text-on-surface-variant tracking-[0.1em] text-[10px] uppercase">Limited Release</span>
            </div>
            <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-tighter text-on-surface">Kyoto Lounge Chair</h1>
            <p className="font-headline text-3xl text-on-surface-variant font-medium">$3,200</p>
          </header>
          
          <div className="space-y-8">
            <p className="text-on-surface-variant leading-relaxed max-w-md">
              A study in silence. The Kyoto Lounge Chair merges traditional Japanese joinery with mid-century silhouettes. Hand-finished in our Copenhagen atelier, it represents the intersection of organic form and structural precision.
            </p>
            
            {/* Material Selector */}
            <div className="space-y-4">
              <h3 className="font-label text-[11px] uppercase tracking-widest text-on-surface font-semibold">Material & Finishes</h3>
              <div className="flex flex-wrap gap-3">
                <button className="px-6 py-3 bg-primary-fixed text-on-primary-fixed rounded-xl text-xs font-semibold tracking-wider uppercase transition-transform active:scale-95">Walnut</button>
                <button className="px-6 py-3 bg-surface-container-high text-on-surface-variant rounded-xl text-xs font-semibold tracking-wider uppercase hover:bg-surface-container-highest transition-colors">Oak</button>
                <button className="px-6 py-3 bg-surface-container-high text-on-surface-variant rounded-xl text-xs font-semibold tracking-wider uppercase hover:bg-surface-container-highest transition-colors">Ash</button>
              </div>
            </div>
            
            {/* CTA */}
            <div className="pt-8 space-y-4">
              <button 
                onClick={() => window.location.href = '/cart'}
                className="w-full py-6 bg-gradient-to-br from-primary to-primary-container text-on-primary rounded-xl font-semibold text-sm tracking-[0.1em] uppercase shadow-lg shadow-on-surface/5 transition-transform active:scale-[0.98]"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Specification Section */}
      <section className="mt-40 bg-surface-container-low py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
          <div>
            <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tighter mb-8">The Philosophy of Form</h2>
            <div className="space-y-6 text-on-surface-variant leading-loose">
              <p>Designed by the Editorial Lab, the Kyoto Lounge Chair spent three years in development. The goal was to remove every non-essential element until only the soul of the chair remained.</p>
              <p>The frame is constructed using blind mortise-and-tenon joints, a technique that requires surgical precision and ensures the chair will last for generations.</p>
            </div>
          </div>
          <div className="relative">
            <img 
              alt="Design Sketch" 
              className="w-full editorial-shadow grayscale hover:grayscale-0 transition-all duration-700" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCk1xuPbGaZrHVKgCpKqKr-C5mAPitnQXe_khGqC8DIJNrHA99SCG55qqYNFLSZDt2Iq4JIw3lsLI3InKCqFE_23ytg6MQC-Xlh_mycOvJU5PQQwJhwTc3WmZPVQgLIirgqctpBPWoZjahuKCaHsXF14f0ngHFhpuva1lYXnNCNaAYNsGs5blB3TN4YuNgANGZpfmwZOMzjaaRx2XldlBRRLBbCc9Bu4NZt3C_cChYB0n_h52xDpFmOzcucibv7Oh5G662EjSnOLTdX"
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Detail;
