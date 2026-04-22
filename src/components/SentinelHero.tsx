import React, { Suspense, lazy } from 'react';
import { Button } from './ui/button';

const Spline = lazy(() => import('@splinetool/react-spline'));

const SentinelHero: React.FC = () => {
  return (
    <section id="experience" className="relative min-h-screen flex items-end bg-hero-bg overflow-hidden font-sora antialiased">
      {/* Spline Background */}
      <div className="absolute inset-0 z-0">
        <Suspense fallback={<div className="absolute inset-0 bg-hero-bg" />}>
          <Spline 
            scene="https://prod.spline.design/Slk6b8kz3LRlKiyk/scene.splinecode" 
            className="w-full h-full"
          />
        </Suspense>
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/30 z-[1] pointer-events-none" />

      {/* Content Container */}
      <div className="relative z-10 pointer-events-none w-full max-w-[90%] sm:max-w-md lg:max-w-2xl px-6 md:px-10 pb-12 md:pb-20 pt-32 mb-8 ml-4 lg:ml-12">
        <h1 
          className="text-[clamp(3rem,8vw,6rem)] font-bold leading-[1.05] tracking-[-0.05em] text-foreground mb-4 uppercase opacity-0 animate-fade-up"
          style={{ animationDelay: '0.2s' }}
        >
          SENTINEL <span className="text-primary">AI</span>
        </h1>

        <p 
          className="text-foreground/80 text-[clamp(1.125rem,2.5vw,1.875rem)] font-light mb-6 opacity-0 animate-fade-up"
          style={{ animationDelay: '0.4s' }}
        >
          We implement security correctly.
        </p>

        <p 
          className="text-muted-foreground text-[clamp(0.875rem,1.5vw,1.25rem)] font-light mb-8 opacity-0 animate-fade-up"
          style={{ animationDelay: '0.55s' }}
        >
          Enterprise security systems built in days. AI-powered surveillance deployed with zero-trust architecture. Smart access control set up for your entire facility. All of it done right, not just fast.
        </p>

        <div 
          className="flex flex-wrap gap-3 font-bold opacity-0 animate-fade-up"
          style={{ animationDelay: '0.7s' }}
        >
          <button className="pointer-events-auto bg-primary text-primary-foreground px-6 py-3 md:px-8 md:py-4 text-sm rounded-sm cursor-pointer hover:brightness-110 transition-all active:scale-[0.97]">
            Book a Call
          </button>
          <button className="pointer-events-auto bg-white text-background px-6 py-3 md:px-8 md:py-4 text-sm rounded-sm cursor-pointer hover:brightness-90 transition-all active:scale-[0.97]">
            Our Work
          </button>
        </div>

        <p 
          className="text-muted-foreground/60 text-xs font-light mt-6 md:mt-10 opacity-0 animate-fade-up"
          style={{ animationDelay: '0.85s' }}
        >
          Trusted security partner. Columbus, OH. 12 systems deployed.
        </p>
      </div>
    </section>
  );
};

export default SentinelHero;
