import React from 'react';

const Product: React.FC = () => {
  return (
    <div className="section-container">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-black mb-4 uppercase tracking-tighter">Signature Formulation</h2>
        <div className="h-1 w-20 bg-[#C6A75E] mx-auto"></div>
      </div>

      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div className="relative group">
           <div className="bg-[#111111] border border-[#C6A75E]/20 p-12 rounded-[2rem] shadow-2xl overflow-hidden aspect-square flex items-center justify-center">
              <div className="text-center">
                 <div className="w-40 h-56 bg-gradient-to-br from-[#3B2A26] to-[#111111] rounded-xl shadow-inner mx-auto mb-8 border border-[#C6A75E]/10"></div>
                 <h3 className="text-3xl font-black text-[#C6A75E]">DEVIL DIP</h3>
                 <p className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-600 mt-2">Packaged Sachet</p>
              </div>
           </div>
        </div>

        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-[#F5EBDD]">The Devil Dip Experience</h3>
            <p className="text-zinc-400 font-medium leading-relaxed text-lg">
              Each Devil Dip sachet features a precisely measured blend of premium instant coffee 
              and L-theanine. This formulation is designed for individuals who appreciate a smooth, 
              consistent, and refined coffee experience as part of their daily routine.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "High-Grade Instant Coffee",
              "Balanced L-Theanine Content",
              "Convenient Single-Serve",
              "Rigorous Quality Standards",
              "Neutral Flavor Profile",
              "Food Safety Compliant"
            ].map((f, i) => (
              <div key={i} className="flex items-center gap-3 bg-[#111111] p-4 rounded-xl border border-zinc-800">
                <div className="w-1.5 h-1.5 rounded-full bg-[#C6A75E]"></div>
                <span className="text-xs font-bold uppercase tracking-wide text-zinc-300">{f}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;