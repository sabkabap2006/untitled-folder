import React from 'react';
import CardSwap, { Card } from './CardSwap';
import CertificateCard from './CertificateCard';

const AcademicsSection: React.FC = () => {
  return (
    <section id="academics" className="relative w-full h-screen bg-background flex flex-col items-center justify-center font-body py-32 overflow-hidden">
      {/* Background radial shine */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,_rgba(255,255,255,0.03)_0%,_rgba(0,0,0,0)_100%)]" />
      </div>

      <div className="relative z-10 w-full max-w-7xl px-8 flex flex-col items-center">
        <div className="text-center mb-24">
          <span className="text-white/40 text-[10px] uppercase font-bold tracking-[0.6em] block mb-4">Academic Background</span>
          <h2 className="text-white text-4xl md:text-6xl font-normal leading-tight" style={{ fontFamily: "'Instrument Serif', serif" }}>
             Foundation & <span className="text-white/40 italic">Excellence.</span>
          </h2>
        </div>

        <div className="relative w-full flex justify-center items-center h-[350px] md:h-[550px]">
          <CardSwap
            width="min(88vw, 900px)"
            height="min(55vh, 550px)"
            cardDistance={40}
            verticalDistance={40}
            delay={3500}
            pauseOnHover={false}
          >
            {/* Engineering */}
            <Card className="rounded-[40px] overflow-hidden bg-white/[0.02] border border-white/5 backdrop-blur-3xl shadow-2xl">
                <CertificateCard 
                    type="Undergraduate degree"
                    title="B.Tech in Computer Science"
                    issuer="Meghnad Saha Institute of Technology"
                    date="2025 – 2029"
                />
            </Card>

            {/* Schooling */}
            <Card className="rounded-[40px] overflow-hidden bg-white/[0.02] border border-white/5 backdrop-blur-3xl shadow-2xl">
                <div className="w-full h-full p-12 md:p-20 flex flex-col justify-center">
                   <div className="flex flex-col gap-2 mb-10">
                      <span className="text-white/40 text-xs uppercase font-bold tracking-widest">Schooling</span>
                      <h3 className="text-white text-3xl md:text-5xl font-normal leading-none" style={{ fontFamily: "'Instrument Serif', serif" }}>Burdwan Municipal <br /> High School</h3>
                   </div>
                   
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                      <div className="flex flex-col gap-2">
                         <span className="text-white/30 text-[10px] uppercase font-bold tracking-widest">Class 12</span>
                         <span className="text-white font-bold text-4xl tracking-tighter">74.8%</span>
                      </div>
                      <div className="flex flex-col gap-2">
                         <span className="text-white/30 text-[10px] uppercase font-bold tracking-widest">Class 10</span>
                         <span className="text-white font-bold text-4xl tracking-tighter">81.14%</span>
                      </div>
                   </div>
                </div>
            </Card>

            {/* Achievements Stack */}
            <Card className="rounded-[40px] overflow-hidden bg-white/[0.02] border border-white/5 backdrop-blur-3xl shadow-2xl">
               <div className="w-full h-full p-10 md:p-16 flex flex-col">
                  <div className="flex flex-col gap-2 mb-10">
                    <span className="text-white/40 text-xs uppercase font-bold tracking-widest">Achievements</span>
                    <h3 className="text-white text-3xl md:text-4xl font-normal leading-none" style={{ fontFamily: "'Instrument Serif', serif" }}>Competitions & <br /> <span className="text-white/40 italic">National Honors.</span></h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                     {[
                        { name: "JEE Main", detail: "83 Percentile" },
                        { name: "Smart India Hackathon", detail: "Participant" },
                        { name: "Hack_N_Pitch", detail: "Participant" },
                        { name: "Innovate4Finlit", detail: "Participant" },
                        { name: "Techathon 6.0", detail: "Participant" }
                     ].map(item => (
                        <div key={item.name} className="p-5 bg-white/[0.03] border border-white/5 rounded-2xl hover:bg-white/[0.06] transition-colors group">
                           <span className="text-white text-base font-bold block mb-1 group-hover:text-white/80">{item.name}</span>
                           <span className="text-white/30 text-[10px] uppercase font-medium tracking-wide">{item.detail}</span>
                        </div>
                     ))}
                  </div>
               </div>
            </Card>
          </CardSwap>
        </div>
      </div>
    </section>
  );
};

export default AcademicsSection;
