import React from 'react';

const AboutSection: React.FC = () => {
  const skills = [
    { category: "Programming", items: ["Python (Advanced)", "JavaScript", "C", "SQL"] },
    { category: "Frameworks", items: ["Django", "Flask", "Node.js (Basic)"] },
    { category: "Backend", items: ["REST API Development", "Server-side Logic", "Authentication"] },
    { category: "Concepts", items: ["OOP", "Basic Blockchain", "Problem Solving"] }
  ];

  return (
    <section id="about" className="relative w-full min-h-screen overflow-hidden bg-background py-32">
      {/* Cinematic Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]">
        <h2 className="absolute text-white font-medium text-[15vw] left-4 top-[5%] leading-none translate-y-[-20%]">
          python
        </h2>
        <h2 className="absolute text-white font-medium text-[15vw] right-4 top-[45%] leading-none">
          django
        </h2>
        <h2 className="absolute text-white font-medium text-[15vw] left-[10%] top-[75%] leading-none text-white/50">
          backend
        </h2>
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-8 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          {/* Left: Professional Summary */}
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-4">
              <span className="text-white/40 text-xs uppercase font-bold tracking-[0.5em]">Professional Summary</span>
              <h2 className="text-white text-4xl md:text-6xl font-normal leading-[1.1] tracking-tight" style={{ fontFamily: "'Instrument Serif', serif" }}>
                Crafting robust logic <br /> 
                <span className="text-white/40 italic">and scalable backends.</span>
              </h2>
            </div>
            
            <div className="flex flex-col gap-6 max-w-xl">
               <p className="text-white/60 text-lg md:text-xl leading-relaxed font-light">
                 Highly motivated Backend Developer and first-year B.Tech CSE student with a strong foundation in 
                 <span className="text-white font-medium"> Python, Django, and Flask</span>. 
               </p>
               <p className="text-white/60 text-lg md:text-xl leading-relaxed font-light">
                 Experienced in building scalable backend systems and REST APIs through hackathon projects. 
                 Passionate about clean architecture and performance optimization. Growing skills in <span className="text-white font-medium">JavaScript</span> and <span className="text-white font-medium">C</span>.
               </p>
            </div>

            <div className="flex items-center gap-16 mt-6">
              <div className="flex flex-col">
                <span className="text-white text-3xl font-bold tracking-tighter">03+</span>
                <span className="text-white/30 text-[10px] uppercase tracking-[0.3em] font-bold mt-2">Languages</span>
              </div>
              <div className="w-[1px] h-12 bg-white/10" />
              <div className="flex flex-col">
                <span className="text-white text-3xl font-bold tracking-tighter">SIH</span>
                <span className="text-white/30 text-[10px] uppercase tracking-[0.3em] font-bold mt-2">Finalist</span>
              </div>
            </div>
          </div>

          {/* Right: Technical Skills Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-10 lg:pt-20">
            {skills.map((skill) => (
              <div 
                key={skill.category} 
                className="liquid-glass p-8 rounded-3xl group hover:scale-[1.02] transition-transform duration-500"
              >
                <h3 className="text-white/20 text-[10px] uppercase tracking-[0.4em] font-bold mb-6 group-hover:text-white/40 transition-colors">
                  {skill.category}
                </h3>
                <div className="flex flex-col gap-3">
                  {skill.items.map(item => (
                    <span key={item} className="text-white/80 text-sm md:text-base font-medium tracking-tight hover:text-white transition-colors cursor-default">
                       {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
