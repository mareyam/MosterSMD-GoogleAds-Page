"use client";
import { useState } from "react";

const links = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b-2 border-[#0d1f3c]">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        <a href="#hero" className="text-lg font-bold text-[#0d1f3c] tracking-tight">
          Moster SMD Technik
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-[#0d1f3c] hover:underline underline-offset-4"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#quote"
            className="px-5 py-2 bg-[#0d1f3c] text-white text-sm font-bold hover:bg-[#1a3560] transition-colors"
          >
            Request a Quote
          </a>
        </nav>

        <button
          className="md:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-[#0d1f3c] transition-all ${open ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-[#0d1f3c] transition-all ${open ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-[#0d1f3c] transition-all ${open ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t-2 border-[#0d1f3c] bg-white">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="block px-6 py-4 text-sm font-medium text-[#0d1f3c] border-b border-gray-100 hover:bg-[#f0f4f9]"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <div className="p-4">
            <a
              href="#quote"
              className="block text-center px-5 py-3 bg-[#0d1f3c] text-white text-sm font-bold"
              onClick={() => setOpen(false)}
            >
              Request a Quote
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
