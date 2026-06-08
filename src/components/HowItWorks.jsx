const steps = [
  {
    num: "01",
    title: "Send Details & Get Quote",
    desc: "Submit your Gerber files, BOM list, and batch size requirements. Our engineers do a swift DFM review and send an itemised quote within 12h.",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 11V17" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9 14H15" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M20 20H4C2.89543 20 2 19.1046 2 18V6C2 4.89543 2.89543 4 4 4H9L12 7H20C21.1046 7 22 7.89543 22 9V18C22 19.1046 21.1046 20 20 20Z" stroke="#00f2fe" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    num: "02",
    title: "Procurement & Assembly",
    desc: "We procure missing components from trusted distributors, load Siemens SIPLACE lines, apply solder paste, and perform reflow soldering.",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="3" width="18" height="18" rx="2" stroke="#3b82f6" strokeWidth="2"/>
        <path d="M7 7H17V17H7V7Z" stroke="#00f2fe" strokeWidth="2"/>
        <path d="M12 3V7M12 17V21M3 12H7M17 12H21" stroke="#00f2fe" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    num: "03",
    title: "Testing & Delivery",
    desc: "We run every single assembled board through our high-definition AOI scanner, inspect complex BGAs, package in ESD-safe bags, and ship.",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M14 2V8H20" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9 15L11 17L15 13" stroke="#00f2fe" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className="py-24 bg-slate-50/50 bg-grid-pattern border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16 text-center md:text-left">
          <div className="text-xs font-bold uppercase tracking-wider text-cyber-blue mb-2">
            Process Flow
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-navy mb-4 font-display tracking-tight">
            How It Works
          </h2>
          <p className="text-navy/70 max-w-2xl text-sm md:text-base leading-relaxed">
            From files submission to final ESD-packaged delivery — three simple steps 
            to get your boards assembled.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Vertical connector line on desktop */}
          <div className="hidden lg:block absolute left-[2.75rem] top-12 bottom-12 w-0.5 bg-slate-200" />

          <div className="space-y-8">
            {steps.map((step) => (
              <div key={step.num} className="flex flex-col lg:flex-row gap-6 items-start group relative">
                {/* Number node column */}
                <div className="flex flex-row items-center flex-shrink-0 z-10">
                  <div className="w-22 h-22 rounded-2xl bg-navy text-white flex flex-col items-center justify-center text-center shadow-lg border border-slate-700/50 relative group-hover:border-cyber-blue transition-colors">
                    <span className="text-cyber-cyan">{step.icon}</span>
                    <span className="text-[10px] font-bold mt-1.5 uppercase tracking-widest text-slate-400 font-display">
                      Step {step.num}
                    </span>
                  </div>
                </div>

                {/* Content card */}
                <div className="flex-1 w-full bg-white border border-slate-100 rounded-2xl p-8 shadow-sm group-hover:shadow-md group-hover:border-cyber-blue/20 transition-all duration-300 glow-card">
                  <h3 className="font-bold text-navy text-xl mb-3 font-display">
                    {step.title}
                  </h3>
                  <p className="text-sm text-navy/70 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <a
            href="#contact"
            className="inline-block px-8 py-4 bg-navy text-white text-xs font-bold uppercase tracking-wider rounded-md hover:bg-cyber-blue transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-cyber-blue/10"
          >
            Start the Process — Request a Quote →
          </a>
        </div>
      </div>
    </section>
  );
}
