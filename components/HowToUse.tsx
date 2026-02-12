import React from 'react';

const HowToUse: React.FC = () => {
  const steps = [
    { num: "01", text: "Empty one sachet into your favorite cup." },
    { num: "02", text: "Add 150-200 ml of hot (not boiling) water." },
    { num: "03", text: "Stir well until smooth and enjoy the focus." }
  ];

  return (
    <div className="max-w-5xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-black mb-4 uppercase">How to Prepare</h2>
        <p className="text-zinc-500 font-medium">The ritual of momentum starts here.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-16">
        {steps.map((step, i) => (
          <div key={i} className="bg-[#141414] border border-zinc-800 p-8 rounded-2xl relative overflow-hidden group hover:border-[#C6A75E]/50 transition-all">
            <div className="text-5xl font-black text-zinc-800 mb-6 group-hover:text-[#C6A75E]/20 transition-colors">{step.num}</div>
            <p className="text-zinc-300 font-bold leading-relaxed relative z-10">{step.text}</p>
          </div>
        ))}
      </div>

      <div className="bg-[#3B2A22]/20 border border-[#C6A75E]/30 p-8 rounded-2xl flex flex-col md:flex-row items-center gap-6">
        <div className="p-3 bg-[#C6A75E]/20 rounded-full">
          <svg className="w-8 h-8 text-[#C6A75E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        </div>
        <div className="text-center md:text-left">
          <h4 className="text-off-white font-black uppercase tracking-widest text-sm mb-1">Important Notice</h4>
          <p className="text-zinc-400 text-sm font-medium">
            Not recommended for children. Pregnant or nursing individuals should consult a 
            healthcare professional before consumption.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowToUse;