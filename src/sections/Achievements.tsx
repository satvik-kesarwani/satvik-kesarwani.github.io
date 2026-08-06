import { useRef } from "react";

const achievements = [
  {
    title: "Nomura KakushIN 10.0",
    subtitle: "National Fintech Hackathon",
    detail: "Top 10 Finalist · 1 of 32 teams selected from 1,000+ entries · Mumbai",
    year: "Jul 2026",
  },
  {
    title: "Swafinix AI Agent Hackathon",
    subtitle: "AI Agent Development",
    detail: "Secured 6th Place",
    year: "2026",
  },
  {
    title: "VoidHacks 7.0",
    subtitle: "Hackathon",
    detail: "Finalist stage",
    year: "2026",
  },
  {
    title: "SRM Reimagining Urban Mobility",
    subtitle: "Hackathon",
    detail: "Finalist stage",
    year: "2026",
  },
  {
    title: "TRUST AI Ideathon, IIIT Pune",
    subtitle: "AI Ideation",
    detail: "Ranked Top 20",
    year: "2026",
  },
  {
    title: "Competitive Programming",
    subtitle: "CodeChef",
    detail: "3-Star Rating · 300+ problems solved across platforms",
    year: "",
  },
];

export default function Achievements() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section
      ref={sectionRef}
      id="achievements"
      className="bg-warm-paper text-charcoal py-24 md:py-32"
    >
      <div className="px-6 md:px-12 max-w-6xl mx-auto">
        <p className="font-mono text-[10px] uppercase tracking-widest text-charcoal/40 mb-4">
          04 — Achievements
        </p>
        <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-charcoal mb-16 md:mb-20">
          Highlights
        </h2>

        <div className="space-y-0">
          {achievements.map((item, index) => (
            <div
              key={index}
              className="group border-t border-charcoal/10 py-6 md:py-8 grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-4 items-start hover:bg-charcoal/[0.02] transition-colors px-2 -mx-2"
            >
              <div className="md:col-span-3">
                <h3 className="font-display text-xl md:text-2xl font-semibold text-charcoal group-hover:text-copper transition-colors">
                  {item.title}
                </h3>
                <p className="font-body text-base text-charcoal/50 mt-1">
                  {item.subtitle}
                </p>
              </div>
              <div className="md:col-span-7">
                <p className="font-body text-base md:text-lg text-charcoal/60">
                  {item.detail}
                </p>
              </div>
              <div className="md:col-span-2 md:text-right">
                <span className="font-mono text-sm text-charcoal/30">
                  {item.year}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
