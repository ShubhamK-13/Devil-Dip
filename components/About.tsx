import React from 'react';

const About: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
      <div>
        <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">
          ABOUT <span className="text-[#C6A75E]">DEVIL DIP</span>
        </h2>
        <div className="space-y-6 text-zinc-400 text-lg leading-relaxed font-medium">
          <p>
            Devil Dip is a premium instant coffee sachet developed by S&N Enterprises. 
            Designed for individuals who value clarity, discipline, and momentum.
          </p>
          <p>
            Our signature blend delivers a smooth and balanced coffee experience crafted specifically 
            for the demands of modern, fast-paced lifestyles. We believe that focus isn't found—it's fueled.
          </p>
        </div>
      </div>
      
      <div className="relative group">
        <div className="absolute -inset-4 bg-[#C6A75E]/10 blur-xl rounded-2xl group-hover:bg-[#C6A75E]/20 transition-all"></div>
        <div className="relative bg-[#1a1a1a] border border-zinc-800 p-8 rounded-2xl overflow-hidden aspect-square flex items-center justify-center">
          <div className="text-center">
             <div className="text-8xl font-black text-zinc-800 opacity-20 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">S&N</div>
             <p className="text-[#C6A75E] font-black text-2xl relative z-10 tracking-widest uppercase">Pure Momentum</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;