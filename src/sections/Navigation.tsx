import { useState } from "react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Achievements", href: "#achievements" },
  { label: "Education", href: "#education" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

function MenuIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M18 6 6 18" /><path d="m6 6 12 12" />
    </svg>
  );
}

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-espresso/70 border-b border-white/[0.06]">
        <div className="mx-auto flex items-center justify-between px-6 py-4 md:px-12">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="font-mono text-sm tracking-tight text-off-white hover:text-copper transition-colors"
          >
            SK
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                className="font-mono text-xs tracking-wider uppercase text-off-white/60 hover:text-off-white transition-colors relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-copper group-hover:w-full transition-all duration-300" />
              </button>
            ))}
          </div>

          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <XIcon className="h-5 w-5 text-off-white" />
            ) : (
              <MenuIcon className="h-5 w-5 text-off-white" />
            )}
          </button>
        </div>
      </nav>

      {mobileMenuOpen && (
          <div className="fixed inset-0 z-[60] flex flex-col bg-espresso/98 md:hidden">
            <div className="flex items-center justify-between px-6 py-4">
              <span className="font-mono text-sm text-off-white">SK</span>
              <button onClick={() => setMobileMenuOpen(false)} aria-label="Close menu">
                <XIcon className="h-5 w-5 text-off-white" />
              </button>
            </div>
            <div className="mt-12 flex flex-col items-center gap-8 px-6">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.href)}
                  className="font-mono text-lg tracking-wider uppercase text-off-white/80 hover:text-copper transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
    </>
  );
}
