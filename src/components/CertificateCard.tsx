import React from 'react';
import { Award, ExternalLink } from 'lucide-react';

interface CertificateCardProps {
  title: string;
  issuer: string;
  date: string;
  image?: string;
  type?: string;
}

const CertificateCard: React.FC<CertificateCardProps> = ({ title, issuer, date, image, type = "Certification" }) => {
  return (
    <div className="relative w-full h-full bg-[#0a0a0a] flex flex-col overflow-hidden group">
      {/* Achievement Header */}
      <div className="p-6 pb-2 border-b border-white/5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/40">
            <Award size={20} />
          </div>
          <div className="flex flex-col">
            <span className="text-white/40 text-[10px] uppercase font-bold tracking-widest">{type}</span>
            <span className="text-white text-[14px] font-bold">{issuer}</span>
          </div>
        </div>
        <button className="text-white/20 hover:text-white transition-colors">
          <ExternalLink size={16} />
        </button>
      </div>

      {/* Main Preview Area */}
      <div className="flex-1 relative bg-neutral-900 flex items-center justify-center p-8 overflow-hidden">
        {image ? (
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-contain shadow-2xl group-hover:scale-[1.02] transition-transform duration-700" 
          />
        ) : (
          <div className="w-full aspect-[1.4/1] bg-white rounded-sm shadow-2xl flex flex-col items-center justify-center p-8 border-[12px] border-neutral-100">
             <div className="w-full h-full border border-neutral-300 border-dashed flex flex-col items-center justify-center gap-4 text-neutral-400">
                <Award size={48} className="opacity-20" />
                <div className="text-center">
                  <div className="font-serif text-2xl text-neutral-800 mb-1">{title}</div>
                  <div className="text-[10px] uppercase tracking-widest text-neutral-500">{issuer} • {date}</div>
                </div>
             </div>
          </div>
        )}
        
        {/* Shine edge */}
        <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
      </div>

      {/* Footer Info */}
      <div className="p-5 bg-black/40 backdrop-blur-md">
        <h3 className="text-white font-bold text-lg mb-1 leading-tight">{title}</h3>
        <p className="text-white/50 text-xs font-medium uppercase tracking-tight">Verified on {date}</p>
      </div>
    </div>
  );
};

export default CertificateCard;
