import { useRef, useState, useCallback } from "react";

function ExternalLinkIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M15 3h6v6" /><path d="M10 14 21 3" /><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    </svg>
  );
}

const projects = [
  {
    title: "RepoToResume",
    subtitle: "GitHub-Powered ATS Resume Automation",
    stack: ["Next.js 14", "TypeScript", "PostgreSQL", "Prisma", "Puppeteer", "AWS EC2"],
    description:
      "Full-stack platform that authenticates via GitHub, analyses repository metadata and README content, extracts technical skills, and generates ATS-oriented, editable resume content with job-description parsing and skill-gap analysis.",
    highlights: [
      "GitHub OAuth + JWT sessions + protected routes",
      "Job-description parsing + repository relevance scoring",
      "PDF and Canva export workflows via Puppeteer",
      "Playwright + Vitest validation, GitHub Actions CI",
      "MVP delivered in 3 days",
    ],
    link: "https://github.com/satvikkesarwani/r2r.io",
  },
  {
    title: "ArthaSaathi 2.0",
    subtitle: "Financial Literacy & Scam-Detection Platform",
    stack: ["Python", "FastAPI", "LangGraph", "SQLAlchemy", "SQLite", "React", "Vite"],
    description:
      "Mobile-first fintech platform for rural and underserved Indians — covering scam detection, financial-health assessment, government-scheme discovery, verification, simulations, and personalised guidance.",
    highlights: [
      "13-workflow system with deterministic engines",
      "Scam-risk scoring, scheme matching, financial-health assessment",
      "Reduced LLM calls from ~5 to 2 via intent-based fast paths",
      "52 offline tests for routing, scoring, and rule validation",
    ],
    link: "https://github.com/satvikkesarwani/round3-nomura",
  },
  {
    title: "Medical Report Simplifier",
    subtitle: "RAG-Based Healthcare Assistant",
    stack: ["Python", "FastAPI", "React", "Tesseract OCR", "SciSpacy", "FAISS", "NVIDIA NIM"],
    description:
      "Healthcare assistant that converts PDF and image-based medical reports into patient-friendly explanations using OCR, clinical NLP, semantic retrieval, and context-grounded generation.",
    highlights: [
      "OCR + medical-entity processing + semantic retrieval",
      "FastAPI backend + React frontend",
      "Handles both image-based and text-based reports",
      "Context-grounded explanations via RAG",
    ],
    link: "https://github.com/satvikkesarwani/report_simplifier",
  },
  {
    title: "FoodFresh AI",
    subtitle: "AI Food Freshness Detection Assistant",
    stack: ["Next.js 15", "TypeScript", "Gemini AI", "LangChain", "FastAPI", "MongoDB", "AWS"],
    description:
      "Built an AI-powered food freshness assistant that analyzes uploaded food images, identifies spoilage signs using multimodal LLMs, estimates freshness levels, predicts remaining shelf life, and generates actionable storage recommendations to minimize food waste.",
    highlights: [
      "Multimodal image understanding using Gemini Vision",
      "Freshness estimation & shelf-life prediction",
      "AI-generated storage and consumption advice",
      "Secure image upload with cloud storage",
      "Modern responsive UI with real-time inference",
    ],
    link: "https://github.com/satvikkesarwani/FreshGuard",
  },
];

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!gridRef.current) return;
    const rect = gridRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="bg-espresso text-off-white py-24 md:py-32 relative overflow-hidden"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-copper/5 blur-[150px] pointer-events-none" />

      <div className="relative z-10 px-6 md:px-12 max-w-6xl mx-auto">
        <p className="font-mono text-[10px] uppercase tracking-widest text-off-white/30 mb-4">
          04 — Projects
        </p>
        <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-off-white mb-16 md:mb-24">
          Selected Work
        </h2>

        <div
          ref={gridRef}
          onMouseMove={handleMouseMove}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 relative"
        >
          {/* Cursor glow effect */}
          <div
            className="pointer-events-none absolute w-[400px] h-[400px] rounded-full transition-opacity duration-300"
            style={{
              background: "radial-gradient(circle, rgba(196,93,58,0.08) 0%, transparent 70%)",
              left: mousePos.x - 200,
              top: mousePos.y - 200,
              opacity: mousePos.x > 0 ? 1 : 0,
            }}
          />

          {projects.map((project, index) => {
            return (
              <div key={index} className="group relative">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block relative overflow-hidden backdrop-blur-xl bg-white/[0.02] border border-white/[0.06] p-6 md:p-8 hover:border-copper/40 transition-all duration-500 h-full group-hover:bg-white/[0.04]"
                  style={{
                    boxShadow: "0 0 0 1px rgba(255,255,255,0.02), inset 0 1px 0 rgba(255,255,255,0.03)",
                  }}
                >
                  {/* Flashy inner glow on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                    style={{
                      background: "radial-gradient(ellipse at center, rgba(196,93,58,0.06) 0%, transparent 70%)",
                    }}
                  />

                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="font-display text-xl md:text-2xl font-semibold text-off-white group-hover:text-copper transition-colors duration-300">
                          {project.title}
                        </h3>
                        <p className="font-body text-sm text-off-white/50 mt-1">
                          {project.subtitle}
                        </p>
                      </div>
                      <ExternalLinkIcon className="h-4 w-4 text-off-white/30 group-hover:text-copper transition-colors flex-shrink-0 mt-1" />
                    </div>

                    <div className="flex flex-wrap gap-2 mb-5">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="font-mono text-[10px] tracking-wider uppercase px-2 py-1 border border-white/[0.08] text-off-white/50 group-hover:border-copper/20 group-hover:text-off-white/70 transition-all"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <p className="font-body text-sm md:text-base leading-relaxed text-off-white/60 mb-5">
                      {project.description}
                    </p>

                    <ul className="space-y-2">
                      {project.highlights.map((h, hi) => (
                        <li key={hi} className="flex gap-2 items-start">
                          <span className="font-mono text-[10px] text-copper mt-1">→</span>
                          <span className="font-body text-xs md:text-sm text-off-white/40 group-hover:text-off-white/60 transition-colors">{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
