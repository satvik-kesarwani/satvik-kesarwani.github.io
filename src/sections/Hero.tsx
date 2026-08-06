import { useRef } from "react";

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function MailIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function DownloadIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M12 15V3" /><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><path d="m7 10 5 5 5-5" />
    </svg>
  );
}

const mainSkills = [
  { name: "Python", color: "#c45d3a" },
  { name: "LangChain", color: "#a0482e" },
  { name: "LangGraph", color: "#7a8b7a" },
  { name: "React", color: "#c45d3a" },
  { name: "SQL", color: "#a0482e" },
  { name: "C++", color: "#7a8b7a" },
];

const name = "Satvik Kesarwani";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-espresso"
    >
      {/* Subtle copper radial glow */}
      <div className="absolute top-1/4 -right-32 w-[500px] h-[500px] rounded-full bg-copper/8 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 -left-24 w-[400px] h-[400px] rounded-full bg-copper/5 blur-[100px] pointer-events-none" />

      <div className="relative z-10 px-6 md:px-12 pt-24 pb-12 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center min-h-[80vh]">
          
          {/* Left column — Text content */}
          <div className="lg:col-span-7">
            {/* Role badge */}
            <div className="flex items-center gap-3 mb-6">
              <span className="w-2 h-2 rounded-full bg-copper animate-pulse" />
              <span className="font-mono text-xs tracking-wider uppercase text-off-white/50">
                AI Engineer · Full-Stack Developer · AI-Assisted Development
              </span>
            </div>

            {/* Name with scroll-driven letter wave */}
            <div className="overflow-hidden mb-6">
              <h1 className="font-display text-[clamp(2.5rem,8vw,7rem)] font-bold leading-[0.95] tracking-tighter text-off-white">
                {name.split(" ").map((word, wi) => (
                  <span key={wi} className="block leading-[0.95]">
                    {word}
                  </span>
                ))}
              </h1>
            </div>

            {/* Summary */}
            <p className="font-body text-base md:text-lg leading-relaxed text-off-white/50 max-w-xl mb-8">
              Building AI-powered applications with LLMs, RAG systems, and modern web technologies. 
              Experienced in Python, FastAPI, React, and AI-assisted development workflows.
            </p>

            {/* Floating skill tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {mainSkills.map((skill) => (
                <span
                  key={skill.name}
                  className="font-mono text-xs tracking-wider px-3 py-1.5 border border-white/[0.1] text-off-white/60 hover:text-copper hover:border-copper/40 transition-all duration-300 cursor-default"
                  style={{ 
                    boxShadow: `0 0 20px ${skill.color}10`,
                  }}
                >
                  {skill.name}
                </span>
              ))}
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap gap-3">
              <a
                href="/resume.pdf"
                download="Satvik_Kesarwani_Resume.pdf"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-copper text-off-white font-mono text-sm tracking-wider hover:bg-copper-muted transition-colors"
              >
                <DownloadIcon className="h-4 w-4" />
                Resume
              </a>
              <a
                href="mailto:satvikk005@gmail.com"
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-white/[0.15] text-off-white font-mono text-sm tracking-wider hover:border-copper/50 hover:text-copper transition-colors"
              >
                <MailIcon className="h-4 w-4" />
                Contact Me
              </a>
              <a
                href="https://linkedin.com/in/sxtvikk"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-white/[0.15] text-off-white font-mono text-sm tracking-wider hover:border-copper/50 hover:text-copper transition-colors"
              >
                <LinkedinIcon className="h-4 w-4" />
                LinkedIn
              </a>
              <a
                href="https://github.com/satvikkesarwani"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-white/[0.15] text-off-white font-mono text-sm tracking-wider hover:border-copper/50 hover:text-copper transition-colors"
              >
                <GithubIcon className="h-4 w-4" />
                GitHub
              </a>
            </div>
          </div>

          {/* Right column — Photo */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Glow ring behind photo */}
              <div className="absolute -inset-3 bg-copper/10 blur-2xl rounded-full" />
              
              {/* Photo container with border */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 overflow-hidden border border-white/[0.08]">
                <img
                  src="/photo.jpg"
                  alt="Satvik Kesarwani"
                  className="w-full h-full object-cover"
                />
                {/* Subtle overlay */}
                <div className="absolute inset-0 bg-copper/5 mix-blend-overlay" />
              </div>

              {/* Decorative corner accent */}
              <div className="absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 border-copper/40" />
              <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-2 border-l-2 border-copper/40" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
