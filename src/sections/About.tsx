import { useRef } from "react";

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="bg-warm-paper text-charcoal py-24 md:py-32"
    >
      <div className="px-6 md:px-12 max-w-6xl mx-auto">
        <p className="font-mono text-[10px] uppercase tracking-widest text-charcoal/40 mb-12">
          01 — About
        </p>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
          <div className="md:col-span-12">
            <h2 className="font-display text-3xl md:text-5xl font-semibold leading-tight tracking-tight mb-10">
              AI Engineer building reliable, scalable applications with modern web technologies and LLMs.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-5 font-body text-lg md:text-xl leading-relaxed text-charcoal/70">
                <p>
                  I&apos;m a Computer Science undergraduate at IIIT Pune with hands-on experience designing and
                  developing AI-powered applications using Python, FastAPI, React, and Next.js.
                </p>
                <p>
                  I specialize in building Large Language Model applications, Retrieval-Augmented Generation systems,
                  AI workflows, and REST APIs. I apply structured prompt engineering with Claude, Codex, and modern
                  AI-assisted tools to analyse systems, accelerate implementation, and automate engineering workflows.
                </p>
              </div>
              <div className="space-y-5 font-body text-lg md:text-xl leading-relaxed text-charcoal/70">
                <p>
                  I&apos;m passionate about rapidly prototyping AI solutions, solving real-world engineering problems,
                  and building through strong software engineering fundamentals and cross-functional collaboration.
                </p>
                <div className="pt-4 border-t border-charcoal/10">
                  <p className="font-mono text-sm md:text-base text-charcoal/50">
                    Currently based in <span className="text-copper">Noida, India</span>. Open to remote opportunities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
