export default function Hero() {
  return (
    <section id="hero" className="relative bg-navy-dark text-white pt-24 overflow-hidden bg-grid-pattern-dark">
      {/* Light glow effects */}
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-cyber-blue/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-10 w-[300px] h-[300px] bg-cyber-cyan/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 pt-20 pb-16 md:pt-28 md:pb-24 relative z-10">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 border border-cyber-cyan/30 bg-cyber-cyan/5 px-4 py-2 rounded-full mb-8 animate-pulse-cyan">
            <span className="w-2 h-2 rounded-full bg-cyber-cyan inline-block"></span>
            <span className="text-[10px] sm:text-xs font-semibold tracking-wider uppercase text-cyber-cyan">
              ISO 9001:2015 Certified · Made in Germany · Since 1994
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.08] mb-8 font-display">
            Precision <span className="text-gradient-cyan">SMD Assembly</span>
            <br />
            From Prototype
            <br />
            to Serial Production.
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-slate-400 mb-10 max-w-2xl leading-relaxed">
            High-reliability PCB assembly with Tier 1 Siemens SIPLACE technology, 
            100% Automated Optical Inspection (AOI), and fast, engineer-led quotes.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <a
              href="#contact"
              className="px-8 py-4 bg-gradient-to-r from-cyber-cyan to-cyber-blue text-navy-dark text-sm font-bold uppercase tracking-wider rounded-md hover:from-white hover:to-white hover:shadow-lg hover:shadow-cyber-cyan/20 transition-all duration-300 text-center"
            >
              Request a Quote <span className="text-xs font-normal opacity-80">(Reply within 12h)</span>
            </a>
            <a
              href="#services"
              className="px-8 py-4 border-2 border-slate-700 text-white text-sm font-bold uppercase tracking-wider rounded-md hover:border-cyber-cyan hover:bg-cyber-cyan/5 transition-all duration-300 text-center"
            >
              View Capabilities
            </a>
          </div>
        </div>
      </div>

      {/* Trust bar */}
      <div className="relative border-y border-slate-800/80 bg-navy/60 backdrop-blur-md z-10">
        <div className="max-w-6xl mx-auto px-6 py-6 sm:py-8 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { stat: "30+", label: "Years in SMD Manufacturing" },
            { stat: "0.3 mm", label: "Fine-Pitch Capability" },
            { stat: "100%", label: "AOI-Inspected Boards" },
            { stat: "1.2M+", label: "Pieces Delivered" },
          ].map((item) => (
            <div key={item.stat} className="text-center md:text-left group">
              <div className="text-3xl sm:text-4xl font-bold text-gradient-cyan font-display transition-transform duration-300 group-hover:translate-x-1 inline-block">
                {item.stat}
              </div>
              <div className="text-xs text-slate-400 mt-1 uppercase tracking-wider font-semibold">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
