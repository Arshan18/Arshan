import React, { useState } from 'react';
import { Calendar, CheckCircle2, ExternalLink, Github } from 'lucide-react';
import { experienceData } from '../data/portfolioData';

const Experience = () => {
  const [hoveredIdx, setHoveredIdx] = useState(null);
  const [mousePos, setMousePos] = useState({});

  const handleCardMouseMove = (e, idx) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePos((prev) => ({ ...prev, [idx]: { x, y } }));
  };

  return (
    <section id="experience" className="py-14 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2.5 sm:space-y-3 mb-10 sm:mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full border border-blue-200">
            Professional Experience
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900">
            Work Experience & Internship
          </h2>
          <p className="text-slate-600 text-xs sm:text-base font-medium">
            Internship and hands-on experience in data analysis, SQL, Python, ETL pipelines, and interactive dashboards.
          </p>
        </div>

        {/* Experience Cards Grid with Spotlight Focus */}
        <div
          className="space-y-6 sm:space-y-8 max-w-4xl mx-auto"
          onMouseLeave={() => setHoveredIdx(null)}
        >
          {experienceData.map((exp, index) => {
            const isHovered = hoveredIdx === index;
            const isAnyHovered = hoveredIdx !== null;
            const isDimmed = isAnyHovered && !isHovered;
            const currentMouse = mousePos[index] || { x: 50, y: 50 };

            return (
              <div
                key={index}
                onMouseEnter={() => setHoveredIdx(index)}
                onMouseMove={(e) => handleCardMouseMove(e, index)}
                className={`relative p-5 sm:p-9 rounded-2xl sm:rounded-3xl bg-white border transition-all duration-300 space-y-4 sm:space-y-5 text-left overflow-hidden ${
                  isHovered
                    ? 'border-blue-500 shadow-2xl shadow-blue-500/15 scale-[1.015] -translate-y-2 ring-2 ring-blue-500/20 z-20 opacity-100'
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
                    background: `radial-gradient(450px circle at ${currentMouse.x}% ${currentMouse.y}%, rgba(59, 130, 246, 0.08), transparent 80%)`,
                  }}
                />

                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2.5 sm:gap-4 border-b border-slate-100 pb-4 sm:pb-5 relative z-10">
                  <div className="space-y-1">
                    <h3 className={`text-lg sm:text-2xl font-extrabold leading-snug transition-colors ${
                      isHovered ? 'text-blue-600' : 'text-slate-900'
                    }`}>
                      {exp.role}
                    </h3>
                    <div className="text-sm sm:text-base font-bold text-blue-600 flex flex-wrap items-center gap-2">
                      <span>{exp.company}</span>
                      {exp.client && (
                        <span className="text-xs bg-blue-50 text-blue-700 px-2.5 py-0.5 rounded-md font-mono border border-blue-200">
                          Client: {exp.client}
                        </span>
                      )}
                    </div>
                    <div className="text-xs text-slate-500 font-medium">
                      {exp.location}
                    </div>
                  </div>

                  <div className={`self-start flex items-center gap-1.5 text-xs font-mono font-bold px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full shadow-2xs border transition-colors ${
                    isHovered ? 'bg-blue-600 text-white border-blue-600' : 'bg-slate-100 text-slate-700 border-slate-200'
                  }`}>
                    <Calendar className={`w-3.5 h-3.5 ${isHovered ? 'text-cyan-200' : 'text-blue-600'}`} />
                    <span>{exp.period}</span>
                  </div>
                </div>

                {/* Highlights */}
                <div className="space-y-2 relative z-10">
                  <div className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-500">
                    Key Deliverables & Responsibilities
                  </div>
                  <ul className="space-y-2.5 sm:space-y-3 text-xs sm:text-sm text-slate-700 font-normal leading-relaxed">
                    {exp.highlights.map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 sm:gap-3">
                        <CheckCircle2 className={`w-4 h-4 flex-shrink-0 mt-0.5 transition-colors ${
                          isHovered ? 'text-blue-600' : 'text-blue-500'
                        }`} />
                        <span className="flex-1">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Project & Certificate Links if available */}
                {(exp.projectUrl || exp.certificateUrl) && (
                  <div className="pt-3 border-t border-slate-100 flex flex-wrap items-center gap-4 text-xs font-bold relative z-10">
                    {exp.projectUrl && (
                      <a
                        href={exp.projectUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-blue-600 hover:text-blue-800 transition-colors"
                      >
                        <Github className="w-3.5 h-3.5" />
                        <span>View Project Repository</span>
                      </a>
                    )}
                    {exp.certificateUrl && (
                      <a
                        href={exp.certificateUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-emerald-600 hover:text-emerald-800 transition-colors"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>View Internship Certificate</span>
                      </a>
                    )}
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

export default Experience;

