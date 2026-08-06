import { useEffect, useMemo, useState } from "react";

const sections = [
  { id: "#hero", label: "Hero" },
  { id: "#about", label: "About" },
  { id: "#experience", label: "Experience" },
  { id: "#projects", label: "Projects" },
  { id: "#achievements", label: "Highlights" },
  { id: "#education", label: "Education" },
  { id: "#skills", label: "Skills" },
  { id: "#contact", label: "Contact" },
];

const computeActiveSection = (sectionElements: HTMLElement[]) => {
  const scrollPosition = window.scrollY + window.innerHeight * 0.45;

  let activeIndex = 0;
  sectionElements.forEach((section, index) => {
    if (section.offsetTop <= scrollPosition) {
      activeIndex = index;
    }
  });

  return activeIndex;
};

export default function ScrollTracker() {
  const [activeIndex, setActiveIndex] = useState(0);

  const sectionElements = useMemo(() => {
    return sections
      .map((section) => document.querySelector<HTMLElement>(section.id))
      .filter((element): element is HTMLElement => Boolean(element));
  }, []);

  useEffect(() => {
    if (!sectionElements.length) {
      return;
    }

    const handleScroll = () => {
      setActiveIndex(computeActiveSection(sectionElements));
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [sectionElements]);

  return (
    <aside className="pointer-events-none hidden md:block">
      <div className="fixed left-4 top-1/4 bottom-1/4 z-50 flex items-center">
        <div className="relative h-full w-8">
          <div className="absolute left-3 top-0 h-full w-px bg-white/10" />
          <div
            className="absolute left-3 top-0 w-px bg-copper/50 transition-all duration-300"
            style={{ height: `${activeIndex * 52 + 16}px` }}
          />

          <div className="absolute left-0 top-0 flex h-full w-full flex-col items-center justify-start gap-5">
            {sections.map((section, index) => {
              const isActive = index === activeIndex;
              return (
                <div key={section.id} className="relative flex items-center justify-center h-5 w-5">
                  <span
                    className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full transition-all duration-300 ${
                      isActive ? "h-5 w-5 bg-copper shadow-[0_0_0_8px_rgba(196,93,58,0.08)]" : "h-3 w-3 bg-white/10"
                    }`}
                  />
                  <span className="absolute left-[1.75rem] top-1/2 -translate-y-1/2 text-[0.65rem] uppercase tracking-[0.3em] text-white/60">
                    {section.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </aside>
  );
}
