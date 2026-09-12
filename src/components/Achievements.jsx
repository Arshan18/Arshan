import React from 'react';
import { Trophy, Award, ExternalLink, Github, BarChart3, TrendingUp, Sparkles, Database, FileSpreadsheet, Compass } from 'lucide-react';

const Achievements = () => {
  // Achievement 01: NeoAgri - HACKSAGON 2026 Finalist
  const neoagriCertificateUrl = "https://drive.google.com/file/d/1h8bpL6baSkEZrc2A6K5ibd9b1l0cBQXp/view?usp=sharing";
  const neoagriGithubUrl = "https://github.com/Arshan18/NeoAgri.git";

  const neoagriJourney = [
    { num: "01", label: "Problem", text: "Limited rural connectivity & tech accessibility for farmers." },
    { num: "02", label: "Idea", text: "Offline-first AI crop disease detection system (NeoAgri)." },
    { num: "03", label: "Build", text: "Drone AI, on-device Edge AI, Hindi voice & GPS mapping." },
    { num: "04", label: "Innovation", text: "On-device TensorFlow Lite detection without active internet." },
    { num: "05", label: "HACKSAGON", text: "Presented working prototype at national hackathon in Gwalior, M.P." },
    { num: "06", label: "Finalist 🏆", text: "Recognized as HACKSAGON 2026 National Finalist.", highlight: true },
  ];

  const neoagriTech = [
    "Python",
    "React Native",
    "FastAPI",
    "TensorFlow Lite",
    "ONNX Runtime",
    "PostgreSQL",
    "SQLite",
    "Node.js"
  ];

  // Achievement 02: UIDAI Data Analytics Hackathon 2026
  const uidaiGithubUrl = "https://github.com/Arshan18/UIDAI.git";

  const uidaiJourney = [
    { num: "01", label: "Challenge", text: "Analyzed Aadhaar operational data across enrolments, updates, and biometric activity." },
    { num: "02", label: "Exploration", text: "Cleaned, validated, transformed, and performed statistical EDA on 2025 dataset." },
    { num: "03", label: "Patterns", text: "Found Sept/Dec peaks, 9.8M July biometric surge, and 18+ driving ~90% updates." },
    { num: "04", label: "Insights", text: "Converted complex data patterns into meaningful societal and operational insights." },
    { num: "05", label: "Visualization", text: "Engineered an interactive Streamlit dashboard to explore and present findings." },
    { num: "06", label: "Hackathon", text: "Transformed real-world government data into an interactive analytics solution.", highlight: true },
  ];

  const uidaiTech = [
    "Python",
    "Pandas",
    "NumPy",
    "Excel",
    "SPSS",
    "Streamlit",
    "Data Analytics"
  ];

  return (
    <section id="achievements" className="py-12 sm:py-16 bg-slate-50 border-b border-slate-200 relative overflow-hidden">
      
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[600px] h-[300px] bg-gradient-to-tr from-amber-200/30 via-blue-200/20 to-cyan-200/30 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-700 bg-amber-50 px-3 py-1 rounded-full border border-amber-200 inline-flex items-center gap-1.5 shadow-2xs">
            <Trophy className="w-3.5 h-3.5 text-amber-600" />
            <span>Key Accomplishments</span>
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Major Hackathon Achievements
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm">
            Recognized hackathon achievements and real-world analytical projects.
          </p>
        </div>

        {/* ==================== ACHIEVEMENT 01: HACKSAGON 2026 FINALIST (NeoAgri) ==================== */}
        <div className="rounded-3xl bg-slate-900 text-white p-6 sm:p-8 border border-slate-800 shadow-xl space-y-5 text-left relative overflow-hidden">
          
          {/* Top Banner Row */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-5">
            <div className="flex items-start sm:items-center gap-3.5">
              <div className="p-3 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 text-slate-950 shadow-md shadow-amber-500/20 flex-shrink-0">
                <Trophy className="w-6 h-6 sm:w-7 sm:h-7" />
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-2 py-0.5 rounded-md text-[10px] sm:text-[11px] font-mono font-bold bg-amber-400/20 text-amber-300 border border-amber-400/30">
                    NATIONAL FINALIST
                  </span>
                  <span className="px-2 py-0.5 rounded-md text-[10px] sm:text-[11px] font-mono font-bold bg-blue-500/20 text-cyan-300 border border-blue-500/30">
                    Gwalior, M.P.
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight mt-1">
                  HACKSAGON 2026 — FINALIST
                </h3>
                <div className="text-xs sm:text-sm text-cyan-300 font-medium mt-0.5 flex items-center gap-1.5">
                  <span>🌾</span>
                  <span>NeoAgri — Drone + Edge AI Agriculture Intelligence System</span>
                </div>
              </div>
            </div>

            {/* Action Buttons: Certificate & GitHub */}
            <div className="flex flex-wrap items-center gap-2.5 pt-1 md:pt-0 flex-shrink-0">
              <a
                href={neoagriCertificateUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-xs transition-all shadow-md hover:-translate-y-0.5"
              >
                <Award className="w-4 h-4" />
                <span>View Certificate</span>
                <ExternalLink className="w-3 h-3" />
              </a>

              <a
                href={neoagriGithubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs border border-slate-700 transition-all hover:-translate-y-0.5"
              >
                <Github className="w-4 h-4" />
                <span>GitHub Repo</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Compact Stepper / Journey Timeline */}
          <div className="space-y-2.5">
            <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
              The Journey (Problem → Finalist)
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
              {neoagriJourney.map((step, idx) => (
                <div
                  key={idx}
                  className={`p-3 rounded-xl border text-left transition-all ${
                    step.highlight
                      ? 'bg-amber-500/10 border-amber-500/40 text-amber-100 shadow-xs'
                      : 'bg-slate-800/70 border-slate-700/80 text-slate-300'
                  }`}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span className={`text-[10px] font-mono font-extrabold px-1.5 py-0.5 rounded ${
                      step.highlight ? 'bg-amber-400 text-slate-950' : 'bg-slate-700 text-cyan-300'
                    }`}>
                      {step.num}
                    </span>
                    <span className={`text-xs font-bold ${step.highlight ? 'text-amber-300' : 'text-white'}`}>
                      {step.label}
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 leading-snug">
                    {step.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Badges & Supporting Footer */}
          <div className="pt-3 border-t border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-slate-400">
            <div className="flex flex-wrap items-center gap-1.5">
              <span className="text-[11px] font-mono font-semibold text-slate-500 mr-1">Stack:</span>
              {neoagriTech.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-2 py-0.5 rounded-md text-[11px] font-mono bg-slate-800 text-slate-300 border border-slate-700"
                >
                  {tech}
                </span>
              ))}
            </div>

            <p className="italic text-slate-400 text-[11px] sm:text-right">
              "From an idea for smarter farming to a HACKSAGON 2026 finalist."
            </p>
          </div>

        </div>

        {/* ==================== ACHIEVEMENT 02: UIDAI DATA ANALYTICS HACKATHON 2026 ==================== */}
        <div className="rounded-3xl bg-slate-900 text-white p-6 sm:p-8 border border-slate-800 shadow-xl space-y-5 text-left relative overflow-hidden">
          
          {/* Top Banner Row */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-5">
            <div className="flex items-start sm:items-center gap-3.5">
              <div className="p-3 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white shadow-md shadow-blue-500/20 flex-shrink-0">
                <BarChart3 className="w-6 h-6 sm:w-7 sm:h-7" />
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-2 py-0.5 rounded-md text-[10px] sm:text-[11px] font-mono font-bold bg-blue-500/20 text-cyan-300 border border-blue-500/30">
                    DATA ANALYTICS HACKATHON
                  </span>
                  <span className="px-2 py-0.5 rounded-md text-[10px] sm:text-[11px] font-mono font-bold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                    UIDAI Operational Insights
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight mt-1">
                  UIDAI Data Analytics Hackathon 2026
                </h3>
                <div className="text-xs sm:text-sm text-cyan-300 font-medium mt-0.5 flex items-center gap-1.5">
                  <span>📈</span>
                  <span>Unlocking Aadhaar Societal Trends</span>
                </div>
              </div>
            </div>

            {/* GitHub Action Button */}
            <div className="flex flex-wrap items-center gap-2.5 pt-1 md:pt-0 flex-shrink-0">
              <a
                href={uidaiGithubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-xs transition-all shadow-md shadow-blue-600/30 hover:-translate-y-0.5"
              >
                <Github className="w-4 h-4" />
                <span>View Project on GitHub</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Compact Stepper / Journey Timeline */}
          <div className="space-y-2.5">
            <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
              The Journey (Challenge → Solution)
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
              {uidaiJourney.map((step, idx) => (
                <div
                  key={idx}
                  className={`p-3 rounded-xl border text-left transition-all ${
                    step.highlight
                      ? 'bg-blue-500/10 border-blue-500/40 text-cyan-100 shadow-xs'
                      : 'bg-slate-800/70 border-slate-700/80 text-slate-300'
                  }`}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span className={`text-[10px] font-mono font-extrabold px-1.5 py-0.5 rounded ${
                      step.highlight ? 'bg-blue-500 text-white' : 'bg-slate-700 text-cyan-300'
                    }`}>
                      {step.num}
                    </span>
                    <span className={`text-xs font-bold ${step.highlight ? 'text-cyan-300' : 'text-white'}`}>
                      {step.label}
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 leading-snug">
                    {step.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Badges & Supporting Footer */}
          <div className="pt-3 border-t border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-slate-400">
            <div className="flex flex-wrap items-center gap-1.5">
              <span className="text-[11px] font-mono font-semibold text-slate-500 mr-1">Stack:</span>
              {uidaiTech.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-2 py-0.5 rounded-md text-[11px] font-mono bg-slate-800 text-slate-300 border border-slate-700"
                >
                  {tech}
                </span>
              ))}
            </div>

            <p className="italic text-slate-400 text-[11px] sm:text-right">
              "Transformed real-world government datasets into an interactive analytical solution."
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Achievements;
