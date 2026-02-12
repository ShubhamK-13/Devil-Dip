import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0A0A0A] pt-24 pb-12 px-6 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-16 mb-24">
          <div className="col-span-1 md:col-span-2 space-y-8">
            <div className="flex flex-col">
              <span className="text-3xl font-black tracking-tighter">DEVIL <span className="text-[#C6A75E]">DIP</span></span>
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-600 mt-1">S&N ENTERPRISES</span>
            </div>
            <p className="text-zinc-500 font-medium max-w-sm leading-relaxed">
              Premium instant coffee blend formulated for the modern daily ritual. 
              A product of S&N Enterprises, committed to quality and transparency.
            </p>
            <div className="text-xs font-bold text-zinc-400 space-y-3 uppercase tracking-wider">
               <div className="flex items-center gap-3">
                  <span className="text-[#C6A75E]">Entity:</span> S&N Enterprises
               </div>
               <div className="flex items-center gap-3">
                  <span className="text-[#C6A75E]">Support:</span> +91 8556913474
               </div>
               <div className="flex items-center gap-3">
                  <span className="text-[#C6A75E]">Email:</span> snenterprises.north@gmail.com
               </div>
               <div className="flex flex-col gap-1">
                  <span className="text-[#C6A75E]">Regd. Address:</span>
                  <span className="normal-case opacity-70">Insert Complete Business Address Placeholder, Punjab, India</span>
               </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.3em] text-[#F5EBDD] mb-8">Navigation</h4>
            <ul className="space-y-4 text-xs font-bold uppercase tracking-widest text-zinc-600">
              <li><a href="#about" className="hover:text-[#C6A75E] transition-colors">The Brand</a></li>
              <li><a href="#product" className="hover:text-[#C6A75E] transition-colors">Composition</a></li>
              <li><a href="#pricing" className="hover:text-[#C6A75E] transition-colors">Pricing</a></li>
              <li><a href="#how-to" className="hover:text-[#C6A75E] transition-colors">Brew Guide</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.3em] text-[#F5EBDD] mb-8">Official</h4>
            <ul className="space-y-4 text-xs font-bold uppercase tracking-widest text-zinc-600">
              <li><a href="#policies" className="hover:text-[#C6A75E] transition-colors">Refund Policy</a></li>
              <li><a href="#policies" className="hover:text-[#C6A75E] transition-colors">Privacy Policy</a></li>
              <li><a href="#policies" className="hover:text-[#C6A75E] transition-colors">Shipping Policy</a></li>
              <li><a href="#compliance" className="hover:text-[#C6A75E] transition-colors">FSSAI Status</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-12 border-t border-zinc-900 text-center space-y-8">
          <div className="max-w-2xl mx-auto">
            <p className="text-[10px] text-zinc-600 font-bold uppercase tracking-[0.2em] leading-relaxed">
              Legal Disclaimer: Devil Dip is a proprietary food item. This product is not intended to 
              diagnose, treat, cure, or prevent any disease. Consumer discretion is advised. 
              Consult a professional if you have pre-existing dietary conditions.
            </p>
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 text-[10px] text-zinc-700 font-black uppercase tracking-widest">
            <span>© 2026 S&N Enterprises</span>
            <span className="hidden md:block">|</span>
            <span>All Rights Reserved</span>
            <span className="hidden md:block">|</span>
            <span>Designed for Excellence</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;