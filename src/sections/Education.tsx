import { useRef } from "react";

const education = [
  {
    degree: "B.Tech in Computer Science and Engineering",
    school: "Indian Institute of Information Technology, Pune",
    period: "Aug 2023 — Jun 2027",
    detail: "CGPA: 8.57/10",
  },
];

export default function Education() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section
      ref={sectionRef}
      id="education"
      className="bg-espresso text-off-white py-24 md:py-32"
    >
      <div className="px-6 md:px-12 max-w-7xl mx-auto">
        <p className="font-mono text-[10px] uppercase tracking-widest text-off-white/30 mb-4">
          05 — Education
        </p>
        <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-off-white mb-16 md:mb-20">
          Education
        </h2>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.03] p-10 shadow-[0_40px_120px_rgba(18,18,20,0.1)]"
            >
              <div className="absolute inset-y-0 left-0 w-1 bg-copper/60" />
              <div className="relative grid grid-cols-1 lg:grid-cols-[1.4fr_0.6fr] gap-8 items-start">
                <div>
                  <h3 className="font-display text-2xl md:text-3xl font-semibold text-off-white mb-3">
                    {edu.degree}
                  </h3>
                  <p className="font-body text-lg md:text-xl text-off-white/70 mb-6">
                    {edu.school}
                  </p>
                  <p className="font-body text-base md:text-lg text-off-white/60 leading-relaxed max-w-3xl">
                    {edu.detail}
                  </p>
                </div>
                <div className="rounded-3xl bg-espresso/70 p-6 border border-white/[0.05]">
                  <p className="font-mono text-xs md:text-sm uppercase tracking-widest text-copper/80 mb-3">
                    Academic period
                  </p>
                  <p className="font-body text-base md:text-lg text-off-white/70">{edu.period}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
