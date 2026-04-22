import React from 'react';
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);

const SecurifyHero: React.FC = () => {
  const scrollTo = (id: string) => {
    gsap.to(window, {
      duration: 1.2,
      scrollTo: { y: id, autoKill: true },
      ease: 'power3.inOut'
    });
  };

  return (
    <section id="home" className="relative w-full h-screen overflow-hidden bg-black outline-none border-0">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260418_063509_7d167302-4fd4-480b-8260-18ab572333d4.mp4"
      />

      {/* Navbar - Fixed for Landing Page Navigation */}
      <nav className="fixed z-50 px-6 md:px-10 pt-6 top-0 left-0 right-0 flex items-center justify-between gap-4 pointer-events-auto">
        {/* Left pill */}
        <div 
          className="flex items-center gap-2 bg-neutral-900/90 backdrop-blur rounded-full pl-4 pr-6 py-3 cursor-pointer"
          onClick={() => scrollTo('#home')}
        >
          <svg viewBox="0 0 256 256" className="h-5 w-5">
            <path
              d="M 128 192 L 128 256 L 64.5 256 L 32 223 L 0 192 L 0 128 L 64 128 Z M 256 192 L 256 256 L 192.5 256 L 160 223 L 128 192 L 128 128 L 192 128 Z M 128 64 L 128 128 L 64.5 128 L 32 95 L 0 64 L 0 0 L 64 0 Z M 256 64 L 256 128 L 192.5 128 L 160 95 L 128 64 L 128 0 L 192 0 Z"
              fill="#ffffff"
            />
          </svg>
          <span className="text-white text-sm font-normal tracking-tight">
            securify
          </span>
        </div>

        {/* Center pill */}
        <div className="hidden md:flex items-center gap-1 bg-neutral-900/90 backdrop-blur rounded-full px-3 py-2">
          {[
            { label: 'platform', id: '#home' },
            { label: 'solutions', id: '#solutions' },
            { label: 'experience', id: '#experience' },
            { label: 'achievements', id: '#achievements' }
          ].map((item) => (
            <button
              key={item.label}
              onClick={() => scrollTo(item.id)}
              className="text-neutral-300 hover:text-white transition-colors text-sm px-5 py-2 rounded-full"
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Right button */}
        <button 
          onClick={() => scrollTo('#achievements')}
          className="bg-white text-black text-sm font-normal rounded-full px-6 py-3 hover:bg-neutral-200 transition-colors"
        >
          get started
        </button>
      </nav>

      {/* Background Headlines Layer */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
        <h1 className="hero-title absolute text-white font-medium text-[10vw] left-4 top-[10%]">
          protect
        </h1>
        <h1 className="hero-title absolute text-white font-medium text-[10vw] right-4 top-[25%]">
          your
        </h1>
        <h1 className="hero-title absolute text-white font-medium text-[10vw] left-[10%] top-[40%]">
          data
        </h1>
        <h1 className="hero-title absolute text-white font-medium text-[10vw] right-[10%] top-[55%]">
          base
        </h1>
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 h-full w-full pointer-events-none">
        <p className="absolute left-6 bottom-20 max-w-[180px] text-[12px] leading-snug text-white/90 font-medium bg-black/20 backdrop-blur-sm p-2 rounded">
          we can guarding your data with utmost care, empowering you with privacy everywhere
        </p>

        {/* Simplified Stat Block */}
        <div className="absolute right-6 bottom-6 text-right">
          <span className="text-3xl font-medium tracking-tight block">+65k</span>
          <span className="text-[10px] text-white/70 uppercase tracking-widest">startups use</span>
        </div>
      </div>
      
      {/* Bottom Gradient */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-black" />
    </section>
  );
};

export default SecurifyHero;
