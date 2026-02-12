import React from 'react';

const Ingredients: React.FC = () => {
  return (
    <div className="section-container">
      <div className="max-w-3xl mx-auto bg-[#1a1a1a] border border-[#C6A75E]/30 rounded-3xl p-10 md:p-16 text-center">
        <h2 className="text-2xl font-black uppercase tracking-widest mb-10 text-[#C6A75E]">Ingredients & Composition</h2>
        <p className="text-zinc-500 mb-12 text-sm font-medium">Approximate values per individual sachet consumption.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-[#111111] p-8 rounded-2xl border border-zinc-800 hover:border-[#C6A75E]/40 transition-all">
            <div className="text-4xl font-black text-[#C6A75E] mb-2">1.5g</div>
            <div className="text-sm font-black uppercase tracking-widest text-[#F5EBDD]">Premium Instant Coffee</div>
          </div>
          <div className="bg-[#111111] p-8 rounded-2xl border border-zinc-800 hover:border-[#C6A75E]/40 transition-all">
            <div className="text-4xl font-black text-[#C6A75E] mb-2">100mg</div>
            <div className="text-sm font-black uppercase tracking-widest text-[#F5EBDD]">L-Theanine</div>
          </div>
        </div>
        
        <p className="text-xs text-zinc-600 font-bold uppercase tracking-widest leading-loose">
          Complete ingredient details, batch number, manufacturing date, and nutritional 
          information are printed on the product packaging.
        </p>
      </div>
    </div>
  );
};

export default Ingredients;