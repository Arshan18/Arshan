import React from 'react';
import { Trophy, Award, ExternalLink, Sparkles, CheckCircle2, ArrowRight, Smartphone, Radio, MapPin, RefreshCw, Cpu, Plane } from 'lucide-react';

const achievementData = {
  title: "HACKSAGON 2026 — FINALIST",
  subtitle: "National Level Hackathon Finalist",
  project: "NeoAgri — Drone + Edge AI Agriculture Intelligence System",
  location: "Gwalior, Madhya Pradesh",
  proofUrl: "https://drive.google.com/drive/folders/1sMEuZNtviFBPdnA_s0QG9ywP3IYnZPUh",
  supportingLine: "From an idea for smarter farming to becoming a HACKSAGON 2026 finalist.",
  finalMessage: "I took NeoAgri from an idea to a working AI-powered agriculture system and presented it at HACKSAGON 2026, where it reached the finalist stage.",
  techStack: [
    "Python",
    "React Native",
    "Node.js",
    "PostgreSQL",
    "FastAPI",
    "ONNX Runtime",
    "TensorFlow Lite",
    "SQLite"
  ],
  steps: [
    {
      step: "01",
      title: "The Problem",
      badge: "Rural Challenges",
      desc: "I focused on the challenges faced by farmers in rural India, especially limited internet connectivity and accessibility to modern agricultural technology."
    },
    {
      step: "02",
      title: "The Idea",
      badge: "Conceptualization",
      desc: "The idea was to create an AI-powered agriculture system that could help farmers detect crop diseases while being simple, accessible and useful even in low-connectivity environments. This idea became NeoAgri."
    },
    {
      step: "03",
      title: "Building NeoAgri",
      badge: "Distributed Architecture",
      desc: "Built NeoAgri as a distributed agriculture intelligence system combining:",
      points: [
        { label: "Drone-based AI", icon: "🚁" },
        { label: "On-device Edge AI", icon: "📱" },
        { label: "Hindi voice interaction", icon: "🔊" },
        { label: "GPS-based field intelligence", icon: "📍" },
        { label: "Offline-first synchronization", icon: "🔄" }
      ]
    },
    {
      step: "04",
      title: "The Innovation",
      badge: "Offline Edge AI",
      desc: "The key idea was to make agricultural AI work even without continuous internet connectivity. NeoAgri combines drone intelligence, cloud processing, mobile Edge AI and offline data synchronization to provide practical crop intelligence in rural environments.",
      extra: "The mobile application can perform crop disease detection directly on the device using TensorFlow Lite, store results locally, and synchronize them when connectivity returns."
    },
    {
      step: "05",
      title: "HACKSAGON 2026",
      badge: "National Hackathon",
      desc: "Took NeoAgri from an idea and working system to HACKSAGON 2026 in Gwalior, Madhya Pradesh, where we presented the project and its approach to solving real-world agricultural challenges."
    },
    {
      step: "06",
      title: "The Achievement",
      badge: "🏆 FINALIST",
      desc: "HACKSAGON 2026 — FINALIST",
      highlight: true,
      subDesc: "From an idea for smarter farming to becoming a HACKSAGON 2026 finalist."
    }
  ]
};

const Achievements = () => {
  return (
    <section id="achievements" className="py-14 sm:py-20 bg-slate-50 border-b border-slate-200 relative overflow-hidden">
      
      {/* Subtle Background Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[350px] sm:w-[650px] h-[300px] bg-gradient-to-tr from-amber-200/40 via-blue-200/30 to-emerald-200/40 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2.5 sm:space-y-3 mb-10 sm:mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-700 bg-amber-50 px-3.5 py-1.5 rounded-full border border-amber-200/80 inline-flex items-center gap-1.5 shadow-2xs">
            <Trophy className="w-3.5 h-3.5 text-amber-600" />
            <span>Key Accomplishment</span>
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Major Achievements & Recognition
          </h2>
          <p className="text-slate-600 text-xs sm:text-base font-medium">
            Proven track record in national level competitive hackathons and impactful AI innovations.
          </p>
        </div>

        {/* Main Hero Achievement Banner Card */}
        <div className="max-w-5xl mx-auto mb-12 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900 to-blue-950 text-white p-6 sm:p-10 border border-slate-800 shadow-2xl relative overflow-hidden text-left">
          
          {/* Subtle Decorative Golden/Cyan Accent */}
          <div className="absolute -top-24 -right-24 w-60 h-60 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-60 h-60 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 space-y-6">
            
            {/* Top Badge & Trophy */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-6">
              <div className="flex items-center gap-3.5">
                <div className="p-3 sm:p-3.5 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 text-slate-950 shadow-lg shadow-amber-500/25 flex-shrink-0">
                  <Trophy className="w-7 h-7 sm:w-8 sm:h-8" />
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-md text-[11px] font-mono font-bold bg-amber-400/20 text-amber-300 border border-amber-400/30">
                      NATIONAL LEVEL HACKATHON
                    </span>
                    <span className="px-2.5 py-0.5 rounded-md text-[11px] font-mono font-bold bg-blue-500/20 text-cyan-300 border border-blue-500/30">
                      Gwalior, M.P.
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-1">
                    {achievementData.title}
                  </h3>
                </div>
              </div>

              {/* View Proof Button */}
              <a
                href={achievementData.proofUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 sm:py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-extrabold text-xs sm:text-sm shadow-lg shadow-amber-500/20 transition-all hover:-translate-y-0.5 flex-shrink-0"
              >
                <span>View Achievement Proof</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            {/* Project Overview */}
            <div className="space-y-2">
              <div className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold">
                Project Showcase
              </div>
              <h4 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
                <span>🌾</span>
                <span>{achievementData.project}</span>
              </h4>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-3xl">
                {achievementData.supportingLine}
              </p>
            </div>

            {/* Tech Badges */}
            <div className="pt-2 border-t border-slate-800/80">
              <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2.5">
                Core Technologies Used
              </div>
              <div className="flex flex-wrap gap-2">
                {achievementData.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-lg text-xs font-mono font-semibold bg-slate-800 text-slate-200 border border-slate-700 hover:border-cyan-500 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* The NeoAgri Journey - Interactive Timeline */}
        <div className="max-w-5xl mx-auto space-y-6">
          <div className="text-left space-y-1">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
              The Journey
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
              My NeoAgri Journey: Problem to Finalist
            </h3>
            <p className="text-xs sm:text-sm text-slate-600">
              Problem → Idea → Build → Innovation → HACKSAGON → Finalist
            </p>
          </div>

          {/* Timeline Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {achievementData.steps.map((item, idx) => (
              <div
                key={idx}
                className={`p-5 sm:p-6 rounded-2xl border transition-all duration-300 flex flex-col justify-between text-left space-y-3 relative group ${
                  item.highlight
                    ? 'bg-gradient-to-br from-amber-500/10 via-amber-50 to-white border-amber-300 shadow-md hover:border-amber-400 hover:shadow-xl'
                    : 'bg-white border-slate-200/90 shadow-2xs hover:border-blue-400 hover:shadow-md'
                }`}
              >
                <div className="space-y-2.5">
                  
                  {/* Step Header */}
                  <div className="flex items-center justify-between gap-2 border-b border-slate-100 pb-2.5">
                    <span className={`text-xs font-mono font-extrabold px-2.5 py-0.5 rounded-md ${
                      item.highlight 
                        ? 'bg-amber-500 text-slate-950 font-black' 
                        : 'bg-blue-50 text-blue-700 border border-blue-200'
                    }`}>
                      {item.step}
                    </span>
                    <span className={`text-[11px] font-bold font-mono ${
                      item.highlight ? 'text-amber-700' : 'text-slate-500'
                    }`}>
                      {item.badge}
                    </span>
                  </div>

                  {/* Step Title */}
                  <h4 className={`text-base sm:text-lg font-extrabold leading-snug ${
                    item.highlight ? 'text-amber-900' : 'text-slate-900'
                  }`}>
                    {item.title}
                  </h4>

                  {/* Step Description */}
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                    {item.desc}
                  </p>

                  {/* Bullet points for step 03 */}
                  {item.points && (
                    <div className="grid grid-cols-1 gap-1.5 pt-1.5">
                      {item.points.map((pt, pIdx) => (
                        <div key={pIdx} className="flex items-center gap-2 text-xs font-medium text-slate-800 bg-slate-50 px-2.5 py-1 rounded-md border border-slate-200/70">
                          <span className="text-sm">{pt.icon}</span>
                          <span>{pt.label}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Extra description for step 04 */}
                  {item.extra && (
                    <p className="text-xs text-slate-600 leading-relaxed bg-blue-50/60 p-2.5 rounded-xl border border-blue-100">
                      {item.extra}
                    </p>
                  )}

                  {/* Sub description for step 06 */}
                  {item.subDesc && (
                    <div className="pt-2">
                      <p className="text-xs font-bold text-amber-800 bg-amber-100/70 px-3 py-1.5 rounded-lg border border-amber-200">
                        {item.subDesc}
                      </p>
                    </div>
                  )}

                </div>

                {/* Bottom Step Indicator */}
                {item.highlight && (
                  <div className="pt-2 flex items-center justify-between text-xs font-bold text-amber-700">
                    <span className="inline-flex items-center gap-1">
                      <Trophy className="w-3.5 h-3.5" />
                      <span>Official Finalist</span>
                    </span>
                    <Award className="w-4 h-4 text-amber-600" />
                  </div>
                )}

              </div>
            ))}
          </div>

          {/* Section Summary Box */}
          <div className="p-5 sm:p-7 rounded-2xl bg-white border border-slate-200 shadow-sm text-center max-w-4xl mx-auto space-y-2">
            <p className="text-xs sm:text-sm font-semibold text-slate-800 leading-relaxed">
              "{achievementData.finalMessage}"
            </p>
            <div className="pt-1">
              <a
                href={achievementData.proofUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-800 transition-colors"
              >
                <span>View Hackathon Certification & Event Proof</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Achievements;
