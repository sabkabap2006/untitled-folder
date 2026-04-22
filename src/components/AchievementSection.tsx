import React from 'react';
import CardSwap, { Card } from './CardSwap';
import SecurifyHero from './SecurifyHero';
import TargoHero from './TargoHero';
import CertificateCard from './CertificateCard';

const AchievementSection: React.FC = () => {
  return (
    <section id="achievements" className="relative w-full h-screen bg-[#050505] flex flex-col items-center justify-center font-sans antialiased py-24 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,_rgba(40,40,40,0.5)_0%,_rgba(5,5,5,1)_70%)]" />
      </div>

      <div className="relative z-10 w-full max-w-7xl px-6 flex flex-col items-center">
        <div className="text-center mb-12">
          <h2 className="text-white/40 text-xs uppercase tracking-[0.4em] font-bold mb-4">Portfolio Showcase</h2>
          <h1 className="text-white text-3xl md:text-5xl font-bold tracking-tight">Recent Achievements</h1>
        </div>

        {/* Card Swap stack */}
        <div className="relative w-full flex justify-center items-center h-[300px] sm:h-[400px] md:h-[500px]">
          <CardSwap
            width="min(85vw, 800px)"
            height="min(50vh, 500px)"
            cardDistance={30}
            verticalDistance={30}
            delay={5000}
            pauseOnHover={true}
          >
            <Card className="rounded-[20px] overflow-hidden bg-black border border-white/5 shadow-2xl">
               <CertificateCard 
                    title="Machine Learning Intern"
                    issuer="Unified Mentor Pvt. Ltd."
                    date="March 2026"
                    type="Offer Letter"
                />
            </Card>
            <Card className="rounded-[20px] overflow-hidden bg-black border border-white/5 shadow-2xl">
              <TargoHero />
            </Card>
            <Card className="rounded-[20px] overflow-hidden bg-black border border-white/5 shadow-2xl">
              <SecurifyHero />
            </Card>
          </CardSwap>
        </div>

        <p className="mt-20 text-white/20 text-[10px] uppercase tracking-[0.2em]">Built with GSAP & React Bits • 22.04.2026</p>
      </div>
    </section>
  );
};

export default AchievementSection;
