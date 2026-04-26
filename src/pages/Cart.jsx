import React, { useState } from 'react';

const Cart = () => {
  const [quantity, setQuantity] = useState(1);
  const pricePerItem = 3200;
  const subtotal = quantity * pricePerItem;

  const handleIncrement = () => setQuantity(prev => prev + 1);
  const handleDecrement = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));

  return (
    <main className="flex-grow pt-40 pb-32 px-8 max-w-[1920px] mx-auto w-full">
      <header className="mb-20 max-w-4xl">
        <h1 className="font-headline text-[3.5rem] font-bold tracking-tight text-on-surface mb-4 leading-none">Your Cart</h1>
        <p className="font-body text-base text-on-surface-variant max-w-2xl">Review your selected pieces before proceeding to checkout.</p>
      </header>
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-16 gap-y-16 items-start">
        {/* Cart Items List */}
        <div className="lg:col-span-8 flex flex-col space-y-16">
          {/* Item 1 */}
          <div className="group flex flex-col sm:flex-row gap-8 relative">
            <div className="w-full sm:w-64 h-80 bg-surface-container-low overflow-hidden relative z-10">
              <img 
                alt="Minimalist wooden chair" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB9SQ4WFX3QRRcy2u4-1-uvMWF1e3kiCjV7bYA5odDHhCqxAF1ohUJQHw6eN1L5gEC50BieDox5xUY0CDi_mkkS4LnhQyjONDyNW7TJJmPay4x2dRb411zjV0_c_bw6DuA9F8bwFjAGVg9KLTjc2bEgiftLOYPY4nrxOgXmGnUQqe3V3LSFfU6C7FhH-EzAgYWB-djCABdB3Wk3ftfo7z5hquXGk1bs0WMsu1_2h0PNSZF4vM33sjimI_j8Sqg5tITHOtzdQRjPLLwm"
              />
            </div>
            <div className="flex-1 flex flex-col justify-between py-2">
              <div className="mb-8">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-headline text-[1.5rem] font-semibold text-on-surface">The Kyoto Lounge Chair</h3>
                  <button className="text-on-surface-variant hover:text-error transition-colors">
                    <span className="material-symbols-outlined text-[1.25rem]">close</span>
                  </button>
                </div>
                <p className="font-body text-sm text-on-surface-variant mb-4">Walnut finish, Natural Linen</p>
              </div>
              <div className="flex items-end justify-between mt-auto">
                <div className="flex items-center space-x-4 bg-surface-container-low px-4 py-2 rounded-none border border-outline-variant/15">
                  <button 
                    onClick={handleDecrement}
                    className="text-on-surface-variant hover:text-on-surface transition-colors"
                  >
                    <span className="material-symbols-outlined text-[1rem]">remove</span>
                  </button>
                  <span className="font-headline text-sm w-6 text-center">{quantity}</span>
                  <button 
                    onClick={handleIncrement}
                    className="text-on-surface-variant hover:text-on-surface transition-colors"
                  >
                    <span className="material-symbols-outlined text-[1rem]">add</span>
                  </button>
                </div>
                <div className="font-headline text-[1.5rem] font-semibold text-on-surface tracking-tight">${subtotal.toLocaleString()}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-4 sticky top-40">
          <div className="bg-surface-container-lowest p-10 border border-outline-variant/15 shadow-sm">
            <h2 className="font-headline text-[1.5rem] font-semibold text-on-surface mb-10 pb-6 border-b">Order Summary</h2>
            <div className="space-y-6 mb-10 font-body text-sm text-on-surface-variant">
              <div className="flex justify-between items-center">
                <span>Subtotal ({quantity} {quantity === 1 ? 'item' : 'items'})</span>
                <span className="font-headline text-on-surface">${subtotal.toLocaleString('en-US', { minimumFractionDigits: 2 })}</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Shipping</span>
                <span className="font-headline text-on-surface">Calculated at next step</span>
              </div>
            </div>
            <div className="pt-6 border-t mb-10 flex justify-between items-end">
              <span className="font-headline text-base font-semibold text-on-surface">Estimated Total</span>
              <span className="font-headline text-[2.25rem] font-bold text-on-surface tracking-tight leading-none">${subtotal.toLocaleString()}</span>
            </div>
            <button className="w-full py-5 px-8 bg-black text-white font-headline text-sm font-semibold tracking-wide uppercase transition-all duration-300 hover:opacity-90 flex items-center justify-center space-x-3">
              <span>Proceed to Checkout</span>
              <span className="material-symbols-outlined text-[1.25rem]">arrow_forward</span>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Cart;

