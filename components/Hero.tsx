import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-[90vh] flex flex-col items-center justify-center text-center px-6 pt-24 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C6A75E]/5 blur-[120px] rounded-full -z-10"></div>
      
      <div className="max-w-4xl animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-tight mb-8">
          DEVIL DIP <br />
          <span className="text-[#C6A75E]">A REFINED BREW.</span>
        </h1>
        
        <p className="text-lg md:text-xl text-zinc-400 font-medium max-w-2xl mx-auto mb-12 leading-relaxed">
          S&N Enterprises presents a premium instant coffee blend carefully formulated for 
          daily consumption. Experience a balanced profile crafted for modern rituals.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a href="#order" className="btn-primary px-12 py-5 rounded-xl text-sm w-full sm:w-auto">
            Order Your Pack
          </a>
          <a href="#product" className="px-12 py-5 border border-zinc-800 hover:border-[#C6A75E] rounded-xl text-sm font-black uppercase tracking-widest transition-all w-full sm:w-auto text-zinc-400 hover:text-white">
            View Details
          </a>
        </div>
        
        <div className="mt-12">
           <p className="text-[10px] text-zinc-600 font-bold uppercase tracking-[0.3em]">Licensed Food Business Operator</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;