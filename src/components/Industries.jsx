const industries = [
  {
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19 10V21H5V10" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z" stroke="#00f2fe" strokeWidth="2"/>
        <path d="M12 2V6" stroke="#00f2fe" strokeWidth="2" strokeLinecap="round"/>
        <path d="M12 18V22" stroke="#00f2fe" strokeWidth="2" strokeLinecap="round"/>
        <path d="M4.93 4.93L7.76 7.76" stroke="#00f2fe" strokeWidth="2" strokeLinecap="round"/>
        <path d="M16.24 16.24L19.07 19.07" stroke="#00f2fe" strokeWidth="2" strokeLinecap="round"/>
        <path d="M2 12H6" stroke="#00f2fe" strokeWidth="2" strokeLinecap="round"/>
        <path d="M18 12H22" stroke="#00f2fe" strokeWidth="2" strokeLinecap="round"/>
        <path d="M4.93 19.07L7.76 16.24" stroke="#00f2fe" strokeWidth="2" strokeLinecap="round"/>
        <path d="M16.24 7.76L19.07 4.93" stroke="#00f2fe" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    name: "Industrial Automation",
    examples: "PLC boards, motor controllers, sensor modules, and power inverter electronics.",
  },
  {
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-1.1 0-2 .9-2 2v6c0 .6.4 1 1 1h2" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="7" cy="17" r="2" stroke="#00f2fe" strokeWidth="2"/>
        <path d="M9 17h6" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="17" cy="17" r="2" stroke="#00f2fe" strokeWidth="2"/>
      </svg>
    ),
    name: "Automotive Electronics",
    examples: "ECU assemblies, CAN bus communication modules, and high-current power boards.",
  },
  {
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" stroke="#00f2fe" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <rect x="15" y="2" width="6" height="6" rx="1" stroke="#3b82f6" strokeWidth="2"/>
      </svg>
    ),
    name: "Medical Technology",
    examples: "Diagnostic equipment PCBs, certified control units, and patient monitoring electronics.",
  },
  {
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 17V3a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z" stroke="#3b82f6" strokeWidth="2"/>
        <path d="M6 18H18" stroke="#3b82f6" strokeWidth="2"/>
        <path d="M10 22h4" stroke="#3b82f6" strokeWidth="2"/>
        <path d="M12 18v4" stroke="#3b82f6" strokeWidth="2"/>
        <path d="M6 10l4-4 4 4 4-4" stroke="#00f2fe" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    name: "Measurement & Control",
    examples: "Precision laboratory instruments, high-speed data acquisition boards, and signal processors.",
  },
  {
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M18 12h-2" stroke="#00f2fe" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    name: "Renewable Energy",
    examples: "Solar inverter electronics, battery management systems (BMS), and smart grid control modules.",
  },
  {
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="5" y="5" width="14" height="14" rx="2" stroke="#3b82f6" strokeWidth="2"/>
        <path d="M9 1V5M15 1V5M9 19V23M15 19V23M1 9H5M1 15H5M19 9H23M19 15H23" stroke="#00f2fe" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    name: "IoT & Embedded Systems",
    examples: "Wireless sensor nodes, smart gateway hardware, and custom ARM/ESP32 microcontroller assemblies.",
  },
];

export default function Industries() {
  return (
    <section
      id="industries"
      className="py-24 bg-white bg-grid-pattern border-b border-slate-200"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16 text-center md:text-left">
          <div className="text-xs font-bold uppercase tracking-wider text-cyber-blue mb-2">
            Target Sectors
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-navy mb-4 font-display tracking-tight">
            Industries We Serve
          </h2>
          <p className="text-navy/70 max-w-2xl text-sm md:text-base leading-relaxed">
            We manufacture electronics for industrial OEMs, Tier 1 automotive suppliers, 
            certified medical device makers, and embedded software systems startups.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((ind) => (
            <div
              key={ind.name}
              className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm flex flex-col justify-between hover:shadow-md hover:scale-[1.01] hover:border-cyber-blue/30 transition-all duration-300 glow-card"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center mb-6">
                  {ind.icon}
                </div>
                <h3 className="text-lg font-bold text-navy mb-2 font-display">
                  {ind.name}
                </h3>
                <p className="text-xs sm:text-sm text-navy/60 leading-relaxed">
                  {ind.examples}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-slate-50 border border-slate-150 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <h4 className="text-sm font-bold text-navy font-display mb-1">
              Don't see your specific industry or board type?
            </h4>
            <p className="text-xs text-navy/70">
              We work with any organization requiring precise, high-reliability SMD assembly. If you have Gerber files, we can build it.
            </p>
          </div>
          <a
            href="#contact"
            className="flex-shrink-0 px-6 py-3 bg-navy text-white text-xs font-bold uppercase tracking-wider rounded-md hover:bg-cyber-blue transition-colors shadow-sm"
          >
            Inquire About Your Project
          </a>
        </div>
      </div>
    </section>
  );
}
