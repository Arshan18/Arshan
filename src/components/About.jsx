import React, { useState } from 'react';
import { Sparkles, CheckCircle2 } from 'lucide-react';
import { personalInfo, aboutPillars } from '../data/portfolioData';

const About = () => {
  const [hoveredIdx, setHoveredIdx] = useState(null);
  const [mousePos, setMousePos] = useState({});

  const handleCardMouseMove = (e, idx) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePos((prev) => ({ ...prev, [idx]: { x, y } }));
  };

  return (
    <section id="about" className="py-14 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2.5 sm:space-y-3 mb-10 sm:mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full border border-blue-200">
            Professional Overview
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900">
            About Me & Core Focus
          </h2>
        </div>

        {/* Core Summary Card with Elevation */}
        <div className="max-w-4xl mx-auto mb-10 sm:mb-14 p-6 sm:p-9 rounded-2xl sm:rounded-3xl bg-slate-900 text-white shadow-xl border border-slate-800 text-left space-y-4 hover:border-blue-500/60 hover:shadow-2xl transition-all duration-300 relative overflow-hidden group">
          <div className="flex items-center gap-3 border-b border-slate-800 pb-3.5">
            <div className="p-2.5 rounded-xl bg-blue-600 text-white shadow-md shadow-blue-600/30">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-extrabold text-white">
                Career Summary
              </h3>
              <p className="text-xs text-cyan-300 font-mono">{personalInfo.title}</p>
            </div>
          </div>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
            {personalInfo.aboutDetailed}
          </p>
        </div>

        {/* Core Highlight Cards Grid with Spotlight Focus */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto"
          onMouseLeave={() => setHoveredIdx(null)}
        >
          {aboutPillars.map((pillar, idx) => {
            const isHovered = hoveredIdx === idx;
            const isAnyHovered = hoveredIdx !== null;
            const isDimmed = isAnyHovered && !isHovered;
            const currentMouse = mousePos[idx] || { x: 50, y: 50 };

            return (
              <div
                key={idx}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseMove={(e) => handleCardMouseMove(e, idx)}
                className={`relative p-5 rounded-2xl border transition-all duration-300 text-left space-y-2 overflow-hidden ${
                  isHovered
                    ? 'bg-white border-blue-500 shadow-xl shadow-blue-500/10 scale-[1.03] -translate-y-1.5 ring-2 ring-blue-500/20 z-20 opacity-100'
                    : isDimmed
                    ? 'bg-slate-50 border-slate-200/60 opacity-55 scale-[0.98] shadow-none'
                    : 'bg-slate-50 border-slate-200/80 shadow-2xs opacity-100 scale-100 hover:border-blue-400'
                }`}
              >
                {/* Dynamic Cursor Spotlight */}
                <div
                  className={`absolute inset-0 pointer-events-none transition-opacity duration-300 ${
                    isHovered ? 'opacity-100' : 'opacity-0'
                  }`}
                  style={{
                    background: `radial-gradient(280px circle at ${currentMouse.x}% ${currentMouse.y}%, rgba(59, 130, 246, 0.08), transparent 80%)`,
                  }}
                />

                <div className="flex items-center gap-2 text-blue-600 font-extrabold text-base relative z-10">
                  <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                  <h4>{pillar.title}</h4>
                </div>
                <p className="text-xs text-slate-600 font-normal leading-normal relative z-10">
                  {pillar.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default About;

