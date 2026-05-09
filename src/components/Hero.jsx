export default function Hero() {
  return (
    <section id="hero" className="bg-white border-b-2 border-[#0d1f3c] pt-16">
      <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 border border-[#0d1f3c] px-4 py-1.5 mb-8">
            <span className="w-2 h-2 rounded-full bg-[#0d1f3c] inline-block"></span>
            <span className="text-xs font-semibold tracking-widest uppercase text-[#0d1f3c]">
              ISO 9001:2015 Certified · Made in Germany · Since 1994
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#0d1f3c] leading-[1.05] mb-6">
            SMD Assembly
            <br />
            From Prototype
            <br />
            to Serial Production.
          </h1>

          {/* <p className="text-sm md:text-base text-[#0d1f3c] mb-10 max-w-2xl leading-relaxed">
            Prototype, small-batch, and serial PCB assembly with ISO-certified
            quality control.
          </p> */}

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#quote"
              className="px-8 py-4 bg-[#0d1f3c] text-white text-sm font-bold hover:bg-[#1a3560] transition-colors text-center"
            >
              Request a Quote Reply Within 12h
            </a>
            <a
              href="#services"
              className="px-8 py-4 border-2 border-[#0d1f3c] text-[#0d1f3c] text-sm font-bold hover:bg-[#0d1f3c] hover:text-white transition-colors text-center"
            >
              View Capabilities
            </a>
          </div>
        </div>
      </div>

      {/* Trust bar */}
      <div className="bg-[#0d1f3c]">
        <div className="max-w-6xl mx-auto px-6 py-5 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { stat: "30+", label: "Years in SMD Manufacturing" },
            { stat: "0.3 mm", label: "Fine-Pitch Capability" },
            { stat: "100%", label: "AOI-Inspected Boards" },
            { stat: "1.2M+", label: "Pieces Delivered" },
          ].map((item) => (
            <div key={item.stat} className="text-center md:text-left">
              <div className="text-2xl font-bold text-white">{item.stat}</div>
              <div className="text-xs text-blue-200 mt-0.5">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
