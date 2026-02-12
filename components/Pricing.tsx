import React from 'react';

const Pricing: React.FC = () => {
  const packs = [
    {
      name: "Trial Pack",
      count: "10 Sachets",
      price: "50",
      bestFor: "First-time experience"
    },
    {
      name: "Momentum Pack",
      count: "30 Sachets",
      price: "150",
      bestFor: "Daily routine"
    },
    {
      name: "Hustler Pack",
      count: "60 Sachets",
      price: "300",
      bestFor: "Sustained momentum"
    }
  ];

  return (
    <div className="section-container">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-black mb-4 uppercase tracking-tighter">Choose Your Pack</h2>
        <p className="text-zinc-500 font-medium">Select the momentum that fits your lifestyle.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {packs.map((p, i) => (
          <div key={i} className="bg-[#111111] border border-zinc-800 p-10 rounded-[2rem] hover:border-[#C6A75E] transition-all group relative overflow-hidden flex flex-col items-center">
            {i === 1 && (
               <div className="absolute top-0 right-0 bg-[#C6A75E] text-[#111111] text-[10px] font-black uppercase px-6 py-2 rounded-bl-xl">Popular</div>
            )}
            <h3 className="text-zinc-500 text-xs font-black uppercase tracking-[0.2em] mb-4">{p.name}</h3>
            <div className="text-3xl font-black text-[#F5EBDD] mb-2">{p.count}</div>
            <div className="flex items-baseline gap-1 mb-8">
               <span className="text-2xl font-black text-[#C6A75E]">₹</span>
               <span className="text-6xl font-black text-[#C6A75E]">{p.price}</span>
            </div>
            <p className="text-zinc-600 text-[10px] font-black uppercase tracking-widest mb-10">{p.bestFor}</p>
            <a href="#order" className="w-full text-center py-4 border border-[#C6A75E] text-[#C6A75E] group-hover:bg-[#C6A75E] group-hover:text-[#111111] rounded-xl font-black uppercase tracking-widest text-xs transition-all">
              Select Package
            </a>
          </div>
        ))}
      </div>
      
      <div className="mt-12 text-center">
         <p className="text-xs text-zinc-600 font-bold uppercase tracking-widest">
            MRP inclusive of all applicable taxes. Shipping charges extra as applicable based on location.
         </p>
      </div>
    </div>
  );
};

export default Pricing;