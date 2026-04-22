import React from 'react';

const VelorahHero: React.FC = () => {
  const navLinks = [
    { label: 'Home', href: '#home', active: true },
    { label: 'Summary', href: '#about', active: false },
    { label: 'Projects', href: '#projects', active: false },
    { label: 'Academics', href: '#academics', active: false },
    { label: 'Contact', href: '#contact', active: false }
  ];

  const scrollTo = (id: string) => {
     const el = document.querySelector(id);
     if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
     }
  };

  return (
    <section id="home" className="relative min-h-screen w-full flex flex-col font-body antialiased overflow-hidden bg-background selection:bg-white/20">
      {/* Video Background */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
        playsInline
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4"
      />

      {/* Blended Portrait Overlay */}
      <div 
        className="absolute inset-0 z-[1] pointer-events-none overflow-hidden"
        style={{
          maskImage: 'radial-gradient(circle at 70% 50%, black 20%, transparent 70%)',
          WebkitMaskImage: 'radial-gradient(circle at 70% 50%, black 20%, transparent 70%)',
        }}
      >
        <img 
          src="/images/portrait.png" 
          alt="Anish Goswami" 
          className="absolute right-0 bottom-0 w-[80%] h-auto md:w-[60%] lg:w-[45%] opacity-30 mix-blend-luminosity grayscale contrast-125"
        />
      </div>

      {/* Surface Overlay for depth */}
      <div className="absolute inset-0 bg-black/20 z-[2] pointer-events-none" />

      {/* Glassmorphic Navbar */}
      <nav className="relative z-10 w-full max-w-7xl mx-auto flex items-center justify-between px-8 py-8 lg:py-10">
        <div 
          className="text-white text-2xl md:text-3xl tracking-tighter cursor-pointer flex items-start"
          style={{ fontFamily: "'Instrument Serif', serif" }}
          onClick={() => scrollTo('#home')}
        >
          Anish Goswami<sup className="text-[10px] opacity-60 mt-1 ml-0.5 font-sans">®</sup>
        </div>

        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => scrollTo(link.href)}
              className={`text-sm uppercase tracking-[0.2em] font-medium transition-colors ${
                link.active ? 'text-white' : 'text-white/40 hover:text-white'
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>

        <button 
          onClick={() => scrollTo('#contact')}
          className="liquid-glass hidden md:inline-flex rounded-full px-7 py-3 text-xs uppercase tracking-widest font-bold text-white hover:scale-[1.03] transition-all active:scale-[0.98]"
        >
          Get In Touch
        </button>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-6 pt-16 pb-32">
        <h1 
          className="text-[clamp(2.5rem,10vw,7rem)] font-normal leading-[0.95] tracking-[-0.03em] max-w-6xl text-white animate-fade-rise"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          Architecting Scalable <br className="hidden md:block" />
          <em className="not-italic text-white/40">Backend Systems.</em>
        </h1>

        <p className="text-white/50 text-base sm:text-lg md:text-xl max-w-2xl mt-10 leading-relaxed font-light animate-fade-rise-delay">
          I am a 1st-year B.Tech student in Computer Science and Engineering at <span className="text-white font-medium">Meghnad Saha Institute of Technology, Kolkata</span>.
        </p>

        <button 
          onClick={() => scrollTo('#projects')}
          className="liquid-glass rounded-full px-16 py-5 text-base md:text-lg font-medium text-white mt-14 hover:scale-[1.03] transition-all active:scale-[0.98] animate-fade-rise-delay-2 cursor-pointer"
        >
          View Architecture
        </button>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-[5]" />
    </section>
  );
};

export default VelorahHero;
