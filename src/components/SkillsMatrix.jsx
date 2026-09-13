import React, { useState } from 'react';
import { Database, Cpu, BarChart3, Code2, Bot, Layers, Server, Cloud, CheckCircle2 } from 'lucide-react';
import { skillGroups } from '../data/portfolioData';

const SkillsMatrix = () => {
  const [hoveredIdx, setHoveredIdx] = useState(null);
  const [mousePos, setMousePos] = useState({});

  const handleCardMouseMove = (e, idx) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePos((prev) => ({ ...prev, [idx]: { x, y } }));
  };

  const getCategoryIcon = (category, isHovered) => {
    const iconClass = `w-5 h-5 transition-colors ${isHovered ? 'text-white' : 'text-blue-600'}`;
    switch (category) {
      case 'Data & Analytics': return <Database className={iconClass} />;
      case 'Programming': return <Code2 className={iconClass} />;
      case 'Data Engineering & Cloud': return <Cloud className={iconClass} />;
      case 'BI & Visualization': return <BarChart3 className={iconClass} />;
      case 'AI & LLM': return <Bot className={iconClass} />;
      case 'ML Foundations': return <Cpu className={iconClass} />;
      default: return <Database className={iconClass} />;
    }
  };

  return (
    <section id="skills" className="py-14 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2.5 sm:space-y-3 mb-10 sm:mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full border border-blue-200">
            Technical Stack
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900">
            Skills & Technical Capabilities
          </h2>
          <p className="text-slate-600 text-xs sm:text-base font-medium">
            Categorized technical capabilities across Data Analytics, Programming, Data Engineering, BI & Visualization, AI/LLMs, and ML Foundations.
          </p>
        </div>

        {/* Skill Category Cards Grid with Spotlight Focus */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto"
          onMouseLeave={() => setHoveredIdx(null)}
        >
          {skillGroups.map((group, index) => {
            const isHovered = hoveredIdx === index;
            const isAnyHovered = hoveredIdx !== null;
            const isDimmed = isAnyHovered && !isHovered;
            const currentMouse = mousePos[index] || { x: 50, y: 50 };

            return (
              <div
                key={index}
                onMouseEnter={() => setHoveredIdx(index)}
                onMouseMove={(e) => handleCardMouseMove(e, index)}
                className={`relative p-5 sm:p-7 rounded-2xl sm:rounded-3xl border transition-all duration-300 space-y-4 text-left overflow-hidden ${
                  isHovered
                    ? 'bg-white border-blue-500 shadow-xl shadow-blue-500/10 scale-[1.02] -translate-y-1.5 ring-2 ring-blue-500/20 z-20 opacity-100'
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
                    background: `radial-gradient(350px circle at ${currentMouse.x}% ${currentMouse.y}%, rgba(59, 130, 246, 0.09), transparent 80%)`,
                  }}
                />

                <div className="flex items-center gap-3 border-b border-slate-200 pb-3 sm:pb-3.5 relative z-10">
                  <div className={`p-2 sm:p-2.5 rounded-xl border transition-colors ${
                    isHovered ? 'bg-blue-600 border-blue-600 shadow-md shadow-blue-600/30' : 'bg-blue-100/70 border-blue-200'
                  }`}>
                    {getCategoryIcon(group.category, isHovered)}
                  </div>
                  <h3 className={`text-base sm:text-lg font-extrabold transition-colors ${
                    isHovered ? 'text-blue-600' : 'text-slate-900'
                  }`}>
                    {group.category}
                  </h3>
                </div>

                {/* Individual Skill Badges */}
                <div className="flex flex-wrap gap-2 relative z-10">
                  {group.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl text-xs font-semibold bg-white text-slate-800 border border-slate-300 shadow-2xs hover:border-blue-500 hover:text-blue-600 hover:scale-105 transition-all"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 flex-shrink-0" />
                      <span>{skill}</span>
                    </span>
                  ))}
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default SkillsMatrix;

