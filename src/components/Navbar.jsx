"use client";
import { useState } from "react";

const links = [
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why" },
  { label: "Facility", href: "#gallery" },
  { label: "Industries", href: "#industries" },
  { label: "About", href: "#about" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/80 transition-all duration-300">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-20">
        <a
          href="#hero"
          className="flex items-center gap-2 group text-lg font-bold text-navy tracking-tight font-display"
        >
          <span className="w-8 h-8 rounded-lg bg-navy flex items-center justify-center text-white text-xs font-black transition-transform group-hover:rotate-12">
            M
          </span>
          <span className="group-hover:text-cyber-blue transition-colors">
            Moster SMD Technik
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-xs font-semibold uppercase tracking-wider text-navy/70 hover:text-cyber-blue transition-colors relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-cyber-blue after:transition-all hover:after:w-full"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href="#contact"
            className="px-5 py-2.5 bg-navy text-white text-xs font-bold uppercase tracking-wider hover:bg-cyber-blue transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-cyber-blue/10 rounded-md"
          >
            Request Quote
          </a>
        </div>

        <button
          className="md:hidden flex flex-col gap-1.5 p-2 rounded-md hover:bg-slate-100 transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-navy transition-all duration-300 ${
              open ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-navy transition-all duration-300 ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-navy transition-all duration-300 ${
              open ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-slate-100 bg-white/95 backdrop-blur-md shadow-xl animate-fade-in">
          <div className="px-6 py-4 flex flex-col gap-2">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="block py-3 text-sm font-semibold text-navy/80 hover:text-cyber-blue border-b border-slate-50 last:border-0"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              className="mt-4 block w-full py-3 bg-navy text-white text-center text-xs font-bold uppercase tracking-wider rounded-md hover:bg-cyber-blue transition-colors"
              onClick={() => setOpen(false)}
            >
              Request Quote
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
