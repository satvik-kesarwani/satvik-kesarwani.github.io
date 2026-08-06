import { useRef, type ReactElement } from "react";

const skillGroups = [
  {
    category: "Languages",
    items: ["Python", "JavaScript", "SQL", "C++"],
  },
  {
    category: "Full-Stack",
    items: ["React.js", "Node.js", "Express.js", "FastAPI", "REST APIs", "PostgreSQL", "SQLite"],
  },
  {
    category: "Generative AI & Applied AI",
    items: [
      "LangChain",
      "LangGraph",
      "RAG",
      "Google Vertex AI",
      "FAISS",
      "ChromaDB",
      "Pandas",
      "Scikit-learn",
      "Claude",
      "Codex",
      "Antigravity",
      "Structured Prompt Engineering",
    ],
  },
];

// Simple inline SVG icons for skills
function SkillIcon({ name }: { name: string }) {
  const icons: Record<string, ReactElement> = {
    Python: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
        <path d="M12 2C6.48 2 5.5 4.5 5.5 6.5S6 9 8 9h8c2 0 2.5-1 2.5-2.5S17.52 2 12 2z"/><path d="M12 22c5.52 0 6.5-2.5 6.5-4.5S18 15 16 15H8c-2 0-2.5 1-2.5 2.5S6.48 22 12 22z"/><path d="M8 9v3"/><path d="M16 12v3"/>
      </svg>
    ),
    JavaScript: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
        <rect x="3" y="3" width="18" height="18" rx="2"/><path d="M8 17v-5"/><path d="M16 17v-2a2 2 0 0 0-2-2h0"/><path d="M16 12v-1"/>
      </svg>
    ),
    SQL: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
        <ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/><path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3"/>
      </svg>
    ),
    "C++": (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
        <path d="M8 17a5 5 0 0 0 5-5V7a5 5 0 0 0-10 0v5a5 5 0 0 0 5 5z"/><path d="M14 10h6"/><path d="M17 7v6"/>
      </svg>
    ),
    "React.js": (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
        <circle cx="12" cy="12" r="3"/><ellipse cx="12" cy="12" rx="10" ry="4"/><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)"/>
      </svg>
    ),
    "Node.js": (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
        <path d="M12 2L3 7v10l9 5 9-5V7l-9-5z"/><path d="M12 22V12"/><path d="M12 12L3 7"/><path d="M12 12l9-5"/>
      </svg>
    ),
    LangChain: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
      </svg>
    ),
    LangGraph: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
        <circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="M8.59 13.51 15.42 17.49"/><path d="M15.41 6.51 8.59 10.49"/>
      </svg>
    ),
    RAG: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
        <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/><path d="M11 8v6"/><path d="M8 11h6"/>
      </svg>
    ),
    FastAPI: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
      </svg>
    ),
  };

  const icon = icons[name];
  if (!icon) return null;
  return <span className="text-copper/60">{icon}</span>;
}

const categoryIcons: Record<string, ReactElement> = {
  Languages: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-4 h-4">
      <path d="M4 7h16" /><path d="M4 12h16" /><path d="M4 17h16" />
    </svg>
  ),
  "Full-Stack": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-4 h-4">
      <path d="M4 6h16" /><path d="M4 12h16" /><path d="M4 18h16" />
      <path d="M8 6v12" /><path d="M16 6v12" />
    </svg>
  ),
  "AI-Assisted Development": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-4 h-4">
      <path d="M12 3v4" /><path d="M12 17v4" /><path d="M5.6 6.6l2.8 2.8" /><path d="M15.6 14.4l2.8 2.8" /><circle cx="12" cy="12" r="4" />
    </svg>
  ),
  "Generative AI & Applied AI": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-4 h-4">
      <path d="M8 7h8" /><path d="M8 12h8" /><path d="M8 17h8" /><circle cx="18" cy="6" r="2" /><circle cx="6" cy="18" r="2" />
    </svg>
  ),
  "Soft Skills": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-4 h-4">
      <path d="M12 5a4 4 0 1 1 0 8 4 4 0 0 1 0-8z" /><path d="M4 19c0-4 4-7 8-7s8 3 8 7" />
    </svg>
  ),
};

function CategoryBadge({ category }: { category: string }) {
  return (
    <div className="inline-flex items-center gap-3 rounded-full border border-white/[0.08] bg-white/[0.04] px-4 py-3 text-sm md:text-base text-off-white/70">
      {categoryIcons[category]}
      <span className="font-semibold text-off-white/90">{category}</span>
    </div>
  );
}

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="bg-espresso text-off-white py-24 md:py-32"
    >
      <div className="px-6 md:px-12 max-w-6xl mx-auto">
        <p className="font-mono text-[10px] uppercase tracking-widest text-off-white/30 mb-4">
          06 — Skills
        </p>
        <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-off-white mb-16 md:mb-20">
          Technical Expertise
        </h2>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group) => (
            <div
              key={group.category}
              className="rounded-[2rem] border border-white/[0.08] bg-white/[0.03] p-6 shadow-[0_30px_80px_rgba(0,0,0,0.12)]"
            >
              <div className="mb-6 flex flex-wrap items-center gap-3">
                <CategoryBadge category={group.category} />
              </div>

              <div className="flex flex-wrap gap-3">
                {group.items.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 rounded-2xl border border-white/[0.08] bg-espresso/80 px-4 py-3 text-sm md:text-base text-off-white/70 transition hover:border-copper/40 hover:text-off-white"
                  >
                    <SkillIcon name={item} />
                    <span className="font-mono">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
