const reasons = [
  {
    index: "01",
    title: "Direct engineer access",
    desc: "Talk directly to our production engineers. Get fast, technical answers on design-for-manufacturability (DFM), tolerances, and layout options.",
  },
  {
    index: "02",
    title: "Scalable production",
    desc: "Seamlessly scale from a single prototype board to 100k+ batch runs with the exact same engineering team and machinery.",
  },
  {
    index: "03",
    title: "German quality standards",
    desc: "ISO 9001:2015 production. Every shipment includes a documented reflow temperature log and individual board AOI inspection reports.",
  },
  {
    index: "04",
    title: "Transparent pricing",
    desc: "Fully itemised quotes breaking down assembly cost, raw components procurement, and logistics. No hidden setup fees or charges.",
  },
  {
    index: "05",
    title: "Fast quoting turnaround",
    desc: "Send your Gerber files and BOM. Our engineers perform a manufacturability review and send a detailed quotation within 12h.",
  },
  {
    index: "06",
    title: "30+ years of expertise",
    desc: "We have specialized in advanced PCB technology, fine-pitch placement down to 0.3 mm pitch, and double-sided reflow since 1994.",
  },
];

export default function WhyUs() {
  return (
    <section id="why" className="relative py-24 bg-navy-dark text-white overflow-hidden bg-grid-pattern-dark border-b border-slate-900">
      {/* Background glow highlights */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-cyber-blue/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-cyber-cyan/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="mb-16 text-center md:text-left">
          <div className="text-xs font-bold uppercase tracking-wider text-cyber-cyan mb-2">
            Why Moster SMD
          </div>
          <h2 className="text-3xl md:text-5xl font-bold font-display tracking-tight mb-4">
            Built for Engineers & Procurement Teams
          </h2>
          <p className="text-slate-400 max-w-2xl text-sm md:text-base leading-relaxed">
            We operate with absolute transparency, specific technical parameters, and direct access 
            to decision makers — no sales layers, no fluff.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((r) => (
            <div key={r.title} className="bg-navy-light/20 border border-slate-800/80 p-8 rounded-2xl flex flex-col justify-between hover:scale-[1.01] transition-all duration-300 glow-card-dark">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-cyber-cyan/60 font-display">
                    Feature
                  </span>
                  <span className="text-sm font-bold text-gradient-cyan font-display">
                    {r.index}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white mb-3 font-display">{r.title}</h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">{r.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="#contact"
            className="inline-block px-8 py-4 bg-gradient-to-r from-cyber-cyan to-cyber-blue text-navy-dark text-xs font-bold uppercase tracking-wider rounded-md hover:from-white hover:to-white hover:shadow-lg hover:shadow-cyber-cyan/10 transition-all duration-300"
          >
            Get a Technical Review →
          </a>
        </div>
      </div>
    </section>
  );
}
