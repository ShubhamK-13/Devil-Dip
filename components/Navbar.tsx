import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#111111]/90 backdrop-blur-md border-b border-[#C6A75E]/20">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex flex-col">
          <span className="text-xl font-black tracking-tighter leading-none">DEVIL <span className="text-[#C6A75E]">DIP</span></span>
          <span className="text-[8px] font-bold uppercase tracking-[0.2em] text-zinc-500">By S&N Enterprises</span>
        </div>
        
        <div className="hidden md:flex items-center gap-10 text-[10px] font-black uppercase tracking-[0.15em]">
          <a href="#about" className="hover:text-[#C6A75E] transition-colors">Brand</a>
          <a href="#product" className="hover:text-[#C6A75E] transition-colors">Composition</a>
          <a href="#pricing" className="hover:text-[#C6A75E] transition-colors">Pricing</a>
          <a href="#order" className="btn-primary px-8 py-3 rounded-full">
            Place Order
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;