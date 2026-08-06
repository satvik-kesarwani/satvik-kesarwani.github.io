import { useRef } from "react";

const experiences = [
  {
    role: "AI Engineer Intern",
    company: "Ascend Law Firm",
    period: "Jun 2026 — Present",
    location: "Remote",
    points: [
      "Took ownership of the Sales AI workstream, proposed and implemented a RAG-based approach to improve chatbot response relevance.",
      "Collaborated with engineers and legal stakeholders to validate the approach and resolve defects in the existing codebase.",
      "Developed case-intake, categorisation, status-tracking, document-organisation, and lifecycle workflows for an AI-integrated legal case management platform.",
      "Built RAG-based assistants that retrieve from the firm's internal knowledge base and generate context-grounded responses.",
      "Applied structured prompt engineering with Claude and Codex to analyse codebases, break requirements into tasks, debug issues, generate tests, and automate workflows.",
    ],
  },
  {
    role: "AI Engineer Intern",
    company: "IndianCapital and Investment (CBE) Ltd.",
    period: "Dec 2025 — Feb 2026",
    location: "Remote",
    points: [
      "Owned MongoDB database management and LLM-integrated pipelines that cleaned, structured, and analysed unstructured company data.",
      "Engineered Python data-extraction pipelines for YouTube and Reddit content across 70+ channels, integrating MongoDB storage and DigitalOcean deployment.",
      "Built Google Vertex AI and Google ADK workflows to process content, generate structured insights, automate responses, and support data visualisation.",
      "Leveraged structured prompt engineering with Claude and Codex to implement pipeline modules, refactor components, automate validation, and troubleshoot integrations.",
    ],
  },
];

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="relative overflow-hidden bg-warm-paper text-charcoal py-24 md:py-32"
    >
      <div className="pointer-events-none absolute -right-16 top-16 h-80 w-80 rounded-full bg-copper/10 blur-[140px]" />
      <div className="px-6 md:px-12">
        <div className="mx-auto max-w-5xl mb-16 md:mb-20">
          <p className="font-mono text-[10px] uppercase tracking-widest text-charcoal/40 mb-4">
            02 — Experience
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-charcoal max-w-3xl">
            Working Experience
          </h2>
        </div>

        <div className="mx-auto max-w-4xl space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-[2rem] border border-white/[0.08] bg-white/[0.08] p-6 md:p-8 shadow-[0_28px_70px_rgba(18,18,20,0.14)] backdrop-blur-3xl"
            >
              <div className="absolute inset-y-0 left-6 w-1 rounded-full bg-copper/55" />
              <div className="absolute inset-x-0 top-0 h-20 bg-white/10 blur-3xl" />
              <div className="relative space-y-6">
                <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                  <div className="space-y-3 pl-8">
                    <div className="flex items-center gap-3">
                      <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-white/[0.16] bg-white/10 text-copper text-[0.75rem] font-semibold">
                        {index + 1}
                      </span>
                      <h3 className="font-display text-xl font-semibold text-charcoal">
                        {exp.role}
                      </h3>
                    </div>
                    <p className="font-body text-sm text-charcoal/75 leading-relaxed">
                      {exp.company}
                    </p>
                  </div>

                  <div className="text-left lg:text-right space-y-2 text-xs uppercase tracking-[0.24em] text-charcoal/40">
                    <span className="block">{exp.period}</span>
                    <span className="block">{exp.location}</span>
                  </div>
                </div>

                <ul className="space-y-4 pl-8">
                  {exp.points.map((point, pi) => (
                    <li key={pi} className="flex gap-3">
                      <span className="mt-1 text-copper">→</span>
                      <p className="font-body text-sm leading-6 text-charcoal/75">
                        {point}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
