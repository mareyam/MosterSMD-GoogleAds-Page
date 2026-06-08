"use client";
import { useState } from "react";

const faqs = [
  {
    q: "Do you manufacture prototypes or only large production runs?",
    a: "Both. We have no minimum order quantity (no MOQ). Many clients start with a single prototype board and scale up to serial production with us once the design is validated. The exact same high-precision quality systems — automated optical inspection (AOI), thermal profiling, trace logging — apply to every single order.",
  },
  {
    q: "How quickly can I get a quote?",
    a: "Submit your Gerber files and BOM through the request form. Our production engineering team reviews your design rules and returns a detailed, itemised quotation within 12 hours on business days.",
  },
  {
    q: "How quickly can you deliver a prototype batch?",
    a: "Standard prototype turnaround is 3 to 7 working days from component receipt. For urgent engineering requirements, we offer express runs with expedited scheduling depending on component availability.",
  },
  {
    q: "Can you source components on our behalf?",
    a: "Yes. We offer complete BOM procurement and component warehousing. We work with major global component distributors and maintain long-term direct accounts to secure parts even during market shortages.",
  },
  {
    q: "Are you ISO 9001 certified?",
    a: "Yes. We are fully certified to DIN EN ISO 9001:2015. Every production batch is logged with a reflow oven temperature graph and individual board AOI verification reports for complete audit-ready traceability.",
  },
  {
    q: "What component packages and PCB pitches do you support?",
    a: "We support the full range of SMT packages down to 0201 passives, fine-pitch ICs, BGAs, and QFNs with pitches down to 0.3 mm. We also support double-sided SMT layouts and mixed SMD/THT assembly.",
  },
  {
    q: "Do you offer professional rework and board repair?",
    a: "Yes. We offer expert SMD/BGA rework, component replacement, and trace repair services. Every reworked board is re-inspected using our optical microscopes and AOI scanners to guarantee repair quality.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(null);

  return (
    <section id="faq" className="py-24 bg-slate-50/50 bg-grid-pattern border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16 text-center md:text-left">
          <div className="text-xs font-bold uppercase tracking-wider text-cyber-blue mb-2">
            Support
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-navy mb-4 font-display tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-navy/70 max-w-2xl text-sm md:text-base leading-relaxed">
            Direct answers to the questions hardware engineers and procurement managers ask 
            before choosing Moster SMD.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                className={`bg-white border rounded-2xl transition-all duration-300 overflow-hidden shadow-sm ${
                  isOpen ? "border-cyber-blue/30 shadow-md ring-1 ring-cyber-blue/5" : "border-slate-100 hover:border-slate-200"
                }`}
              >
                <button
                  className="w-full flex items-center justify-between px-6 py-5 text-left focus:outline-none"
                  onClick={() => setOpen(isOpen ? null : i)}
                >
                  <span className="font-bold text-navy text-sm sm:text-base font-display">
                    {item.q}
                  </span>
                  <span className={`text-navy/60 transition-transform duration-300 ${isOpen ? "rotate-180 text-cyber-blue" : ""}`}>
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </button>

                <div
                  className={`transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-[300px] border-t border-slate-50 bg-slate-50/30" : "max-h-0"
                  }`}
                >
                  <div className="px-6 py-5 text-xs sm:text-sm text-navy/70 leading-relaxed">
                    {item.a}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <p className="text-sm text-navy/60 mb-4 font-medium">
            Have a technical question not listed here?
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-4 bg-navy text-white text-xs font-bold uppercase tracking-wider rounded-md hover:bg-cyber-blue transition-all duration-300 shadow-md"
          >
            Ask Our Engineers Directly
          </a>
        </div>
      </div>
    </section>
  );
}
