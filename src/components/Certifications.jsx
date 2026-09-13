import React, { useState } from 'react';
import { Award, ExternalLink } from 'lucide-react';
import { certificationsData } from '../data/portfolioData';

const Certifications = () => {
  const [hoveredIdx, setHoveredIdx] = useState(null);
  const [mousePos, setMousePos] = useState({});

  const handleCardMouseMove = (e, idx) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePos((prev) => ({ ...prev, [idx]: { x, y } }));
  };

  return (
    <section id="certifications" className="py-14 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2.5 sm:space-y-3 mb-10 sm:mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full border border-blue-200">
            Professional Verification
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900">
            Certifications & Credentials
          </h2>
          <p className="text-slate-600 text-xs sm:text-base font-medium">
            Industry recognized credentials from AWS Academy and Cisco in Cloud Computing and Data Analytics.
          </p>
        </div>

        {/* Certifications Grid with Spotlight Focus */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto"
          onMouseLeave={() => setHoveredIdx(null)}
        >
          {certificationsData.map((cert, index) => {
            const isHovered = hoveredIdx === index;
            const isAnyHovered = hoveredIdx !== null;
            const isDimmed = isAnyHovered && !isHovered;
            const currentMouse = mousePos[index] || { x: 50, y: 50 };

            return (
              <div
                key={index}
                onMouseEnter={() => setHoveredIdx(index)}
                onMouseMove={(e) => handleCardMouseMove(e, index)}
                className={`relative flex flex-col justify-between p-6 sm:p-7 rounded-2xl sm:rounded-3xl border transition-all duration-300 group text-left overflow-hidden ${
                  isHovered
                    ? 'bg-white border-blue-500 shadow-xl shadow-blue-500/10 scale-[1.02] -translate-y-1.5 ring-2 ring-blue-500/20 z-20 opacity-100'
                    : isDimmed
                    ? 'bg-slate-50 border-slate-200/60 opacity-55 scale-[0.98] shadow-none'
                    : 'bg-slate-50 border-slate-200 shadow-2xs opacity-100 scale-100 hover:border-blue-400'
                }`}
              >
                {/* Dynamic Cursor Spotlight */}
                <div
                  className={`absolute inset-0 pointer-events-none transition-opacity duration-300 ${
                    isHovered ? 'opacity-100' : 'opacity-0'
                  }`}
                  style={{
                    background: `radial-gradient(350px circle at ${currentMouse.x}% ${currentMouse.y}%, rgba(59, 130, 246, 0.08), transparent 80%)`,
                  }}
                />

                <div className="space-y-3 relative z-10">
                  <div className="flex items-start justify-between gap-3">
                    <div className={`p-2.5 rounded-xl transition-colors ${
                      isHovered ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30' : 'bg-blue-600 text-white shadow-md shadow-blue-600/20'
                    }`}>
                      <Award className="w-5 h-5" />
                    </div>
                    <span className={`text-[11px] font-mono font-bold px-2.5 py-0.5 rounded-full border transition-colors ${
                      isHovered ? 'bg-blue-50 text-blue-800 border-blue-200' : 'bg-white text-slate-500 border-slate-200'
                    }`}>
                      {cert.period}
                    </span>
                  </div>

                  <h3 className={`text-base sm:text-lg font-extrabold leading-snug transition-colors ${
                    isHovered ? 'text-blue-600' : 'text-slate-900'
                  }`}>
                    {cert.title}
                  </h3>

                  <div className="text-xs font-bold text-blue-600">
                    {cert.issuer}
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    {cert.desc}
                  </p>
                </div>

                {cert.link && (
                  <div className="pt-4 mt-4 border-t border-slate-200/80 relative z-10">
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      <span>Verify Credential</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Certifications;

