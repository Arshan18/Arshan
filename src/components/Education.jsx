import React, { useState } from 'react';
import { GraduationCap, Calendar, Award } from 'lucide-react';
import { educationData } from '../data/portfolioData';

const Education = () => {
  const [hoveredIdx, setHoveredIdx] = useState(null);
  const [mousePos, setMousePos] = useState({});

  const handleCardMouseMove = (e, idx) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePos((prev) => ({ ...prev, [idx]: { x, y } }));
  };

  return (
    <section id="education" className="py-14 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2.5 sm:space-y-3 mb-10 sm:mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full border border-blue-200">
            Academic Background
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900">
            Education
          </h2>
          <p className="text-slate-600 text-xs sm:text-base font-medium">
            Formal education in Information Technology and foundational sciences.
          </p>
        </div>

        {/* Education Cards with Spotlight Focus */}
        <div
          className="space-y-5 sm:space-y-6 max-w-4xl mx-auto"
          onMouseLeave={() => setHoveredIdx(null)}
        >
          {educationData.map((edu, index) => {
            const isHovered = hoveredIdx === index;
            const isAnyHovered = hoveredIdx !== null;
            const isDimmed = isAnyHovered && !isHovered;
            const currentMouse = mousePos[index] || { x: 50, y: 50 };

            return (
              <div
                key={index}
                onMouseEnter={() => setHoveredIdx(index)}
                onMouseMove={(e) => handleCardMouseMove(e, index)}
                className={`relative p-5 sm:p-8 rounded-2xl sm:rounded-3xl bg-white border transition-all duration-300 space-y-3 text-left overflow-hidden ${
                  isHovered
                    ? 'border-blue-500 shadow-xl shadow-blue-500/10 scale-[1.015] -translate-y-1.5 ring-2 ring-blue-500/20 z-20 opacity-100'
                    : isDimmed
                    ? 'border-slate-200/60 opacity-55 scale-[0.99] shadow-none'
                    : 'border-slate-200/80 shadow-sm opacity-100 scale-100 hover:border-blue-400'
                }`}
              >
                {/* Dynamic Cursor Spotlight */}
                <div
                  className={`absolute inset-0 pointer-events-none transition-opacity duration-300 ${
                    isHovered ? 'opacity-100' : 'opacity-0'
                  }`}
                  style={{
                    background: `radial-gradient(400px circle at ${currentMouse.x}% ${currentMouse.y}%, rgba(59, 130, 246, 0.08), transparent 80%)`,
                  }}
                />

                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 sm:gap-4 border-b border-slate-100 pb-3.5 relative z-10">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className={`p-3 rounded-xl sm:rounded-2xl transition-colors flex-shrink-0 ${
                      isHovered ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30' : 'bg-blue-600 text-white shadow-md shadow-blue-600/20'
                    }`}>
                      <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <div>
                      <h3 className={`text-lg sm:text-xl font-extrabold leading-snug transition-colors ${
                        isHovered ? 'text-blue-600' : 'text-slate-900'
                      }`}>
                        {edu.degree}
                      </h3>
                      <div className="text-sm font-bold text-blue-600 mt-0.5">
                        {edu.institution} <span className="text-slate-500 font-normal text-xs">— {edu.location}</span>
                      </div>
                    </div>
                  </div>

                  <div className={`self-start flex items-center gap-1.5 text-xs font-mono font-bold px-3 py-1 rounded-full border transition-colors ${
                    isHovered ? 'bg-blue-600 text-white border-blue-600' : 'bg-slate-100 text-slate-700 border-slate-200'
                  }`}>
                    <Calendar className={`w-3.5 h-3.5 ${isHovered ? 'text-cyan-200' : 'text-blue-600'}`} />
                    <span>{edu.period}</span>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 pt-1 relative z-10">
                  <span className={`px-3 py-1 font-bold text-xs rounded-lg border transition-colors inline-flex items-center gap-1 ${
                    isHovered ? 'bg-blue-600 text-white border-blue-600' : 'bg-blue-50 text-blue-800 border-blue-200'
                  }`}>
                    <Award className={`w-3.5 h-3.5 ${isHovered ? 'text-cyan-200' : 'text-blue-600'}`} />
                    <span>{edu.score}</span>
                  </span>
                  <p className="text-xs sm:text-sm text-slate-700 font-normal">
                    {edu.details}
                  </p>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Education;

