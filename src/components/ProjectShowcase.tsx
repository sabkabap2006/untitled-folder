import React from 'react';
import { ExternalLink, Code2, Globe, Cpu, Mic, Gamepad2 } from 'lucide-react';

const ProjectShowcase: React.FC = () => {
  const projects = [
    {
      title: "Kochi Metro App",
      context: "Smart India Hackathon",
      description: "Backend architecture built with Python for real-time metro navigation and logistics tracking.",
      icon: <Globe size={22} />,
      link: "https://github.com/Anishgoswami-dev"
    },
    {
      title: "Twitter High",
      context: "JU Project",
      description: "A decentralized social platform integration using Python and core Blockchain concepts for secure communication.",
      icon: <Code2 size={22} />,
      link: "https://github.com/Anishgoswami-dev"
    },
    {
      title: "ATM Simulation",
      context: "Transaction Logic",
      description: "Advanced Python implementation of banking transaction protocols and error handling logic.",
      icon: <Cpu size={22} />,
      link: "https://github.com/Anishgoswami-dev"
    },
    {
      title: "Voice Auto System",
      context: "Automation AI",
      description: "Developing custom automation logic and voice processing for smart device control systems.",
      icon: <Mic size={22} />,
      link: "https://github.com/Anishgoswami-dev"
    },
    {
      title: "Tic Tac Toe Online",
      context: "Socket Networking",
      description: "Backend game server implementation for real-time online multiplayer gameplay using socket logic.",
      icon: <Gamepad2 size={22} />,
      link: "https://github.com/Anishgoswami-dev"
    },
    {
      title: "Ocean Clock",
      context: "Frontend Logic",
      description: "A cinematic, glassmorphic analog clock featuring real-time timing logic and a responsive ocean background.",
      icon: <Globe size={22} />,
      link: "https://anish-clock-ocean.netlify.app/"
    }
  ];

  return (
    <section id="projects" className="relative w-full min-h-screen bg-background font-body py-32 overflow-hidden">
      {/* Background Subtle Gradient */}
      <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-b from-white/[0.03] to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-8">
        <div className="flex flex-col gap-4 mb-20">
          <span className="text-white/40 text-[10px] uppercase font-bold tracking-[0.6em]">Architecture Portfolio</span>
          <h2 className="text-white text-5xl md:text-7xl font-normal leading-[1.1]" style={{ fontFamily: "'Instrument Serif', serif" }}>
            Software logic & <br /> 
            <span className="text-white/40 italic">Digital infrastructure.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div 
              key={project.title}
              className="liquid-glass group p-10 rounded-[32px] flex flex-col justify-between hover:scale-[1.03] transition-all duration-700 h-[420px]"
            >
              <div className="flex flex-col gap-8">
                <div className="w-14 h-14 rounded-2xl bg-white/[0.03] border border-white/5 flex items-center justify-center text-white/50 group-hover:text-white group-hover:bg-white/[0.06] transition-all">
                  {project.icon}
                </div>
                
                <div className="flex flex-col gap-3">
                  <span className="text-white/30 text-[10px] uppercase font-bold tracking-widest">{project.context}</span>
                  <h3 className="text-white text-2xl font-bold tracking-tight">{project.title}</h3>
                  <p className="text-white/40 text-sm leading-relaxed font-light line-clamp-3">
                    {project.description}
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between border-t border-white/5 pt-8">
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white text-xs uppercase font-bold tracking-widest hover:opacity-70 transition-opacity flex items-center gap-2"
                >
                  Source Code <ExternalLink size={12} />
                </a>
                <span className="text-white/10 text-4xl font-serif">0{idx + 1}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectShowcase;
