import React from 'react';
import { Phone } from 'lucide-react';

const TargoHero: React.FC = () => {
  return (
    <section id="solutions" className="relative w-full h-screen overflow-hidden bg-black font-['Rubik'] scroll-mt-20">
      {/* Video Background */}
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-100"
        autoPlay
        loop
        muted
        playsInline
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260227_042027_c4b2f2ea-1c7c-4d6e-9e3d-81a78063703f.mp4"
      />

      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-20 px-4 py-4 md:px-8 flex items-center justify-between">
        <div className="flex items-center gap-2">
          {/* Abstract Logo + wordmark */}
          <div className="bg-white p-1 rounded-sm">
            <svg viewBox="0 0 24 24" className="w-5 h-5 text-black fill-current">
              <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.8L19.2 8 12 11.2 4.8 8 12 4.8zM4 15.2V9.8l7 3.1v5.4l-7-3.1zm9 3.1v-5.4l7-3.1v5.4l-7 3.1z" />
            </svg>
          </div>
          <span className="text-white font-bold text-lg tracking-tight uppercase">targo</span>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          {["Home", "About", "Contact Us"].map((item) => (
            <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-white/80 hover:text-white text-xs font-medium transition-colors">
              {item}
            </a>
          ))}
          <button 
            className="bg-[#EE3F2C] text-white text-[10px] font-bold uppercase px-4 py-2 hover:brightness-110 transition-all"
            style={{ clipPath: 'polygon(0 8px, calc(100% - 8px) 0, 100% 0, 100% calc(100% - 8px), 8px 100%, 0 100%)' }}
          >
            Contact Us
          </button>
        </nav>
      </header>

      {/* Main Content */}
      <div className="relative h-full w-full z-10 flex flex-col justify-start p-6 md:p-12 pt-24 md:pt-32">
        <h1 className="text-white font-bold uppercase text-[36px] md:text-[64px] leading-[0.95] tracking-[-0.04em] max-w-[600px] mb-6">
          Swift and<br />Simple Transport
        </h1>
        
        <button 
          className="bg-[#EE3F2C] text-white text-[12px] md:text-[14px] font-bold uppercase px-8 py-4 w-fit hover:brightness-110 transition-all"
          style={{ clipPath: 'polygon(0 12px, calc(100% - 12px) 0, 100% 0, 100% calc(100% - 12px), 12px 100%, 0 100%)' }}
        >
          Get Started
        </button>
      </div>

      {/* Bottom Liquid Glass Card */}
      <div className="absolute bottom-6 left-6 z-20">
        <div 
          className="px-6 py-5 rounded-xl border border-white/12 flex flex-col gap-3 group overflow-hidden"
          style={{ 
            background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 100%)',
            backdropFilter: 'blur(40px) saturate(180%)',
            boxShadow: 'inset 0 0 10px rgba(255,255,255,0.05)',
          }}
        >
          <div className="flex flex-col">
            <span className="text-white font-bold uppercase text-[14px] tracking-tight">Book a Free</span>
            <span className="text-white/60 text-[11px] uppercase tracking-wider font-medium">Consultation</span>
          </div>
          
          <button 
            className="flex items-center justify-center gap-2 bg-white text-black text-[11px] font-bold uppercase px-5 py-2.5 hover:bg-white/90 transition-all"
            style={{ clipPath: 'polygon(0 8px, calc(100% - 8px) 0, 100% 0, 100% calc(100% - 8px), 8px 100%, 0 100%)' }}
          >
            <Phone size={12} />
            Book a Call
          </button>
          
          {/* Subtle gradient shine overlay */}
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
      </div>
    </section>
  );
};

export default TargoHero;
