import React from 'react';

const TrustSection: React.FC = () => {
  const values = [
    { title: "Transparent Ingredients", desc: "Clear and honest disclosure of every component used in our formulation." },
    { title: "Quality Process", desc: "Structured manufacturing processes to ensure batch consistency and safety." },
    { title: "Active Support", desc: "Dedicated customer service to address your inquiries and product feedback." }
  ];

  return (
    <div className="section-container">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl font-black text-center mb-16 uppercase tracking-[0.3em] text-zinc-500">Why Choose S&N Enterprises</h2>
        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
          {values.map((v, i) => (
            <div key={i} className="text-center space-y-4">
               <div className="w-12 h-12 rounded-full border border-[#C6A75E]/30 flex items-center justify-center mx-auto mb-6">
                  <div className="w-2 h-2 rounded-full bg-[#C6A75E]"></div>
               </div>
               <h3 className="text-[#F5EBDD] font-black text-sm uppercase tracking-widest">{v.title}</h3>
               <p className="text-zinc-500 text-xs font-medium leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustSection;