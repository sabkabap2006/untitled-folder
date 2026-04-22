import React, { Suspense, lazy } from 'react';
import { Button } from './ui/button';
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);

const Spline = lazy(() => import('@splinetool/react-spline'));

const ProfileHero: React.FC = () => {
  const scrollTo = (id: string) => {
    gsap.to(window, {
      duration: 1.2,
      scrollTo: { y: id, autoKill: true },
      ease: 'power3.inOut'
    });
  };

  return (
    <section id="top" className="relative min-h-screen flex items-end bg-hero-bg overflow-hidden font-sora antialiased">
      {/* Fixed Global Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 lg:px-16 py-6 bg-transparent pointer-events-none">
        <div className="text-foreground text-xl font-bold tracking-tighter uppercase pointer-events-auto cursor-pointer" onClick={() => scrollTo('#top')}>
          ANISH<span className="text-primary">.</span>DEV
        </div>
        
        <div className="hidden md:flex gap-10 items-center pointer-events-auto">
          {["About", "Projects", "Experience", "Contact"].map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(`#${item.toLowerCase()}`)}
              className="text-[10px] text-muted-foreground hover:text-primary transition-colors uppercase tracking-[0.3em] font-bold"
            >
              {item}
            </button>
          ))}
        </div>

        <Button 
          variant="navCta" 
          size="lg" 
          onClick={() => scrollTo('#contact')}
          className="hidden md:inline-flex rounded-full uppercase text-[10px] font-bold tracking-widest px-8 pointer-events-auto"
        >
          Hire Me
        </Button>
      </nav>

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
      <div className="absolute inset-0 bg-black/40 z-[1] pointer-events-none" />

      {/* Content Container */}
      <div className="relative z-10 pointer-events-none w-full max-w-4xl px-8 md:px-16 pb-16 md:pb-24 pt-32">
        <div className="flex flex-col gap-1 mb-4 opacity-0 animate-fade-up" style={{ animationDelay: '0.1s' }}>
           <span className="text-primary text-[10px] uppercase font-bold tracking-[0.5em]">Backend Architect</span>
           <div className="h-[1px] w-12 bg-primary/40" />
        </div>

        <h1 
          className="text-[clamp(3.5rem,10vw,8rem)] font-bold leading-[0.9] tracking-[-0.06em] text-foreground mb-6 uppercase opacity-0 animate-fade-up"
          style={{ animationDelay: '0.2s' }}
        >
          ANISH <br />
          <span className="text-white/20">GOSWAMI</span>
        </h1>

        <p 
          className="text-foreground/80 text-[clamp(1.125rem,2vw,1.5rem)] font-light mb-8 max-w-xl opacity-0 animate-fade-up"
          style={{ animationDelay: '0.4s' }}
        >
          Building scalable server-side systems and AI-powered backends from 
          <span className="text-white font-medium"> Kolkata.</span>
        </p>

        <div 
          className="flex flex-wrap gap-4 font-bold opacity-0 animate-fade-up"
          style={{ animationDelay: '0.6s' }}
        >
          <button 
            onClick={() => scrollTo('#projects')}
            className="pointer-events-auto bg-primary text-primary-foreground px-10 py-5 text-[10px] uppercase tracking-widest rounded-full cursor-pointer hover:brightness-110 transition-all active:scale-[0.95]"
          >
            View Projects
          </button>
          <button 
            onClick={() => scrollTo('#about')}
            className="pointer-events-auto bg-white/5 border border-white/10 backdrop-blur-md text-white px-10 py-5 text-[10px] uppercase tracking-widest rounded-full cursor-pointer hover:bg-white/10 transition-all active:scale-[0.95]"
          >
            About Summary
          </button>
        </div>

        <div className="mt-12 flex items-center gap-6 opacity-0 animate-fade-up" style={{ animationDelay: '0.8s' }}>
           <div className="flex flex-col">
              <span className="text-white/20 text-[10px] uppercase tracking-widest mb-1">Status</span>
              <span className="text-white/60 text-[11px] font-medium uppercase">B.Tech CSE @ MSIT</span>
           </div>
           <div className="w-[1px] h-8 bg-white/5" />
           <div className="flex flex-col">
              <span className="text-white/20 text-[10px] uppercase tracking-widest mb-1">Pass Out</span>
              <span className="text-white/60 text-[11px] font-medium uppercase">Class of 2029</span>
           </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileHero;
