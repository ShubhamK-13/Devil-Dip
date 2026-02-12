import React from 'react';

const Compliance: React.FC = () => {
  return (
    <div className="section-container">
      <div className="max-w-4xl mx-auto text-center space-y-12">
        <h2 className="text-3xl font-black uppercase tracking-tighter">Regulatory Compliance</h2>
        
        <div className="bg-[#1a1a1a] p-12 rounded-3xl border border-zinc-900 shadow-xl">
           <p className="text-zinc-400 font-medium leading-relaxed mb-12 italic">
              "Devil Dip is manufactured and marketed by S&N Enterprises in strict accordance 
              with prevailing food safety regulations. We prioritize consumer safety and 
              transparency in all our operations."
           </p>
           
           <div className="grid md:grid-cols-3 gap-8 pt-10 border-t border-zinc-800">
              <div className="space-y-2">
                 <p className="text-[10px] font-black uppercase tracking-widest text-zinc-600">FSSAI License No.</p>
                 <p className="text-xl font-black text-[#F5EBDD] tracking-widest">XXXXXXXXXXXXXX</p>
              </div>
              <div className="space-y-2">
                 <p className="text-[10px] font-black uppercase tracking-widest text-zinc-600">Business Entity</p>
                 <p className="text-lg font-black text-[#F5EBDD]">S&N ENTERPRISES</p>
              </div>
              <div className="space-y-2">
                 <p className="text-[10px] font-black uppercase tracking-widest text-zinc-600">Category</p>
                 <p className="text-lg font-black text-[#F5EBDD]">Proprietary Food</p>
              </div>
           </div>
        </div>

        <div className="text-center">
           <p className="text-[10px] text-zinc-600 font-bold uppercase tracking-[0.2em] leading-loose">
              Registered Office: [Insert Complete Business Address Here, Punjab, India]<br />
              Email: snenterprises.north@gmail.com | Phone: +91 8556913474
           </p>
        </div>
      </div>
    </div>
  );
};

export default Compliance;