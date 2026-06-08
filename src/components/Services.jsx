const services = [
  {
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12C18 12.5523 18.4477 13 19 13Z" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13Z" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 5C12.5523 5 13 4.55228 13 4C13 3.44772 12.5523 3 12 3C11.4477 3 11 3.44772 11 4C11 4.55228 11.4477 5 12 5Z" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 21C12.5523 21 13 20.5523 13 20C13 19.4477 12.5523 19 12 19C11.4477 19 11 19.4477 11 20C11 20.5523 11.4477 21 12 21Z" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <rect x="8" y="8" width="8" height="8" rx="1.5" stroke="#00f2fe" strokeWidth="2"/>
        <path d="M8 12H6" stroke="#00f2fe" strokeWidth="2" strokeLinecap="round"/>
        <path d="M18 12H16" stroke="#00f2fe" strokeWidth="2" strokeLinecap="round"/>
        <path d="M12 8V6" stroke="#00f2fe" strokeWidth="2" strokeLinecap="round"/>
        <path d="M12 18V16" stroke="#00f2fe" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    title: "Serial Manufacturing",
    desc: "Automated SMD assembly using high-speed Siemens SIPLACE placement lines for fine-pitch and large volume PCB manufacturing.",
    specs: [
      "0.3 mm fine-pitch BGAs",
      "Double-sided SMD layouts",
      "Up to 60,000 components/hour",
    ],
  },
  {
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.5 21C14.7467 21 19 16.7467 19 11.5C19 6.25329 14.7467 2 9.5 2C4.25329 2 2 6.25329 2 11.5C2 16.7467 4.25329 21 9.5 21Z" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M22 22L16.2 16.2" stroke="#00f2fe" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M7 10H12" stroke="#00f2fe" strokeWidth="2" strokeLinecap="round"/>
        <path d="M9.5 7.5V12.5" stroke="#00f2fe" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    title: "Prototype & Small-Batch",
    desc: "Rapid prototype and pre-series PCB assembly. No minimum order quantity with 100% production-grade setup.",
    specs: ["No MOQ limitations", "3 to 7 working day turnaround", "Complete design rule BOM review"],
  },
  {
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2.458 12C3.732 7.943 7.523 5 12 5C16.478 5 20.268 7.943 21.542 12C20.268 16.057 16.478 19 12 19C7.523 19 3.732 16.057 2.458 12Z" stroke="#00f2fe" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "AOI & Quality Control",
    desc: "100% automated optical inspection (AOI) combined with process trace logging per PCB assembly batch.",
    specs: [
      "High-magnification AOI review",
      "Process parameter profiling",
      "Stereo microscope inspection",
    ],
  },
  {
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 7H4C2.89543 7 2 7.89543 2 9V19C2 20.1046 2.89543 21 4 21H20C21.1046 21 22 20.1046 22 19V9C22 7.89543 21.1046 7 20 7Z" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16 21V5C16 4.46957 15.7893 3.96086 15.4142 3.58579C15.0391 3.21071 14.5304 3 14 3H10C9.46957 3 8.96086 3.21071 8.58579 3.58579C8.21071 3.96086 8 4.46957 8 5V21" stroke="#00f2fe" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Contract Assembly",
    desc: "Full turnkey electronics manufacturing from BOM component sourcing and warehousing to logistics.",
    specs: ["Global distributor procurement", "Custom component warehousing", "Just-In-Time (JIT) production delivery"],
  },
  {
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2V22" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round"/>
        <path d="M17 5L12 10L7 5" stroke="#00f2fe" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M17 14L12 19L7 14" stroke="#00f2fe" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Reflow & Process Control",
    desc: "Custom-profiled reflow soldering per board thickness and component density, keeping trace files for temperature curves.",
    specs: ["Lead-free & leaded soldering", "Custom multi-zone thermal curves", "Nitrogen atmosphere soldering"],
  },
  {
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#3b82f6" strokeWidth="2"/>
        <path d="M9 12L11 14L15 10" stroke="#00f2fe" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "ISO Quality System",
    desc: "Audited processes complying with ISO 9001:2015. Full raw material batch numbers mapped to shipping boxes.",
    specs: ["DIN EN ISO 9001:2015", "Complete batch-level traceability", "IPC-A-610 Class II & III standards"],
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="py-24 bg-slate-50/50 bg-grid-pattern border-b border-slate-200"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16 text-center md:text-left">
          <div className="text-xs font-bold uppercase tracking-wider text-cyber-blue mb-2">
            Capabilities
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-navy mb-4 font-display tracking-tight">
            What We Manufacture
          </h2>
          <p className="text-navy/70 max-w-2xl text-sm md:text-base leading-relaxed">
            From quick-turn PCB prototypes to medium serial production, we maintain audited 
            processes and state-of-the-art precision assembly lines.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm flex flex-col justify-between hover:shadow-md hover:scale-[1.01] transition-all duration-300 glow-card"
            >
              <div>
                <div className="w-14 h-14 rounded-xl bg-slate-50 flex items-center justify-center mb-6">
                  {s.icon}
                </div>
                <h3 className="text-xl font-bold text-navy mb-3 font-display">
                  {s.title}
                </h3>
                <p className="text-sm text-navy/70 leading-relaxed mb-6">
                  {s.desc}
                </p>
              </div>
              <ul className="space-y-2.5 pt-4 border-t border-slate-50">
                {s.specs.map((spec) => (
                  <li
                    key={spec}
                    className="flex items-start gap-2.5 text-xs text-navy/80 font-medium"
                  >
                    <svg className="w-4 h-4 text-cyber-teal flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                    </svg>
                    {spec}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
