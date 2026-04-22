import React from 'react';
import { Phone, Mail, MapPin, Linkedin, Github, Heart } from 'lucide-react';

const ContactFooter: React.FC = () => {
  return (
    <footer id="contact" className="relative w-full bg-background border-t border-white/5 py-32 px-8 font-body">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-8">
        {/* Profile Card */}
        <div className="flex flex-col gap-6">
          <h2 className="text-white text-3xl font-normal tracking-tighter" style={{ fontFamily: "'Instrument Serif', serif" }}>
            Anish Goswami<sup className="text-[10px] opacity-40 ml-1">®</sup>
          </h2>
          <p className="text-white/40 text-sm leading-relaxed max-w-xs font-light">
            1st Year B.Tech CSE student at MSIT. Passionate about problem solving and building robust backend infrastructure.
          </p>
          <div className="flex items-center gap-4 pt-4">
             <a href="https://github.com/Anishgoswami-dev" target="_blank" rel="noopener noreferrer" className="liquid-glass w-12 h-12 rounded-full flex items-center justify-center text-white/40 hover:text-white transition-all">
                <Github size={20} />
             </a>
             <a href="https://www.linkedin.com/in/anish-goswami-06a1a1383?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer" className="liquid-glass w-12 h-12 rounded-full flex items-center justify-center text-white/40 hover:text-white transition-all">
                <Linkedin size={20} />
             </a>
          </div>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col gap-8">
          <h3 className="text-white/20 text-xs uppercase tracking-[0.4em] font-bold">Contact Channel</h3>
          <div className="flex flex-col gap-6">
            <a href="tel:+919749710763" className="flex items-center gap-4 text-white/60 hover:text-white transition-colors group">
              <div className="w-10 h-10 rounded-xl bg-white/[0.03] flex items-center justify-center group-hover:bg-white/[0.06] transition-all">
                <Phone size={16} />
              </div>
              <span className="text-sm font-medium tracking-tight">+91 9749710763</span>
            </a>
            <a href="mailto:anishgoswami@gmail.com" className="flex items-center gap-4 text-white/60 hover:text-white transition-colors group">
              <div className="w-10 h-10 rounded-xl bg-white/[0.03] flex items-center justify-center group-hover:bg-white/[0.06] transition-all">
                <Mail size={16} />
              </div>
              <span className="text-sm font-medium tracking-tight">anishgoswami@gmail.com</span>
            </a>
          </div>
        </div>

        {/* Details */}
        <div className="flex flex-col gap-8">
          <h3 className="text-white/20 text-xs uppercase tracking-[0.4em] font-bold">Base Location</h3>
          <div className="flex flex-col gap-6">
             <div className="flex items-center gap-4 text-white/60">
                <div className="w-10 h-10 rounded-xl bg-white/[0.03] flex items-center justify-center">
                  <MapPin size={16} />
                </div>
                <span className="text-sm font-medium tracking-tight">Kolkata, WB</span>
             </div>
             <div className="text-[10px] uppercase tracking-widest text-white/30 flex flex-col gap-2 pl-14">
                <span>DOB: 28/08/2006</span>
                <span>Blood Group: B-</span>
             </div>
          </div>
        </div>

        {/* Directory */}
        <div className="flex flex-col gap-8 lg:pl-12">
          <h3 className="text-white/20 text-xs uppercase tracking-[0.4em] font-bold">Portfolio Map</h3>
          <div className="flex flex-col gap-4">
             {["Home", "Summary", "Projects", "Academics"].map(item => (
                <a key={item} href={`#${item.toLowerCase()}`} className="text-white/40 hover:text-white text-sm transition-colors w-fit font-medium tracking-tight">
                   {item}
                </a>
             ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-32 pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
         <p className="text-white/20 text-[10px] uppercase tracking-[0.5em] font-bold">© 2026 Anish Goswami</p>
         <div className="flex items-center gap-3 text-white/20 text-[10px] uppercase tracking-[0.5em] font-bold">
            <span>Built with</span>
            <Heart size={10} className="text-white/40" />
            <span>by Anish</span>
         </div>
      </div>
    </footer>
  );
};

export default ContactFooter;
