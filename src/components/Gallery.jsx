const slots = [
  {
    id: "01",
    label: "SMD Pick-and-Place Machine",
    hint: "High-speed Siemens SIPLACE platform",
    img: "/img1.png",
  },
  {
    id: "02",
    label: "AOI Inspection Station",
    hint: "100% automated optical quality check",
    img: "/img2.jpeg",
  },
  {
    id: "03",
    label: "Assembled PCB Boards",
    hint: "High-density multi-layer components",
    img: "/img3.jpg",
  },
  {
    id: "04",
    label: "Reflow Soldering Line",
    hint: "Nitrogen convection reflow oven",
    img: "/img4.jpeg",
  },
  {
    id: "05",
    label: "Quality Control",
    hint: "Microscopic validation to IPC standards",
    img: "/img5.jpeg",
  },
  {
    id: "06",
    label: "Production Facility",
    hint: "ESD-protected environment (Niefern, Germany)",
    img: "/img6.jpg",
  },
];

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="relative py-24 bg-navy-dark text-white overflow-hidden bg-grid-pattern-dark border-b border-slate-900"
    >
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyber-blue/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="mb-16 text-center md:text-left">
          <div className="text-xs font-bold uppercase tracking-wider text-cyber-cyan mb-2">
            Facility Tour
          </div>
          <h2 className="text-3xl md:text-5xl font-bold font-display tracking-tight mb-4">
            Our Production Environment
          </h2>
          <p className="text-slate-400 max-w-2xl text-sm md:text-base leading-relaxed">
            Take a look inside our 600 m² clean-room production floor in Niefern-Öschelbronn. 
            We maintain ESD-safe environments and state-of-the-art machinery.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {slots.map((slot) => (
            <div
              key={slot.id}
              className="relative aspect-[4/3] rounded-2xl border border-slate-800/80 overflow-hidden group shadow-lg shadow-navy-dark/40"
            >
              {/* Image with zoom transition */}
              <img
                src={slot.img}
                alt={slot.label}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Dark-to-light gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-navy-dark/40 to-transparent opacity-80 group-hover:opacity-75 transition-opacity duration-300" />

              {/* Technical index badge */}
              <div className="absolute top-4 left-4 w-9 h-9 rounded-lg bg-navy/90 border border-slate-700/80 text-cyber-cyan font-bold text-xs flex items-center justify-center font-display shadow-md">
                {slot.id}
              </div>

              {/* Card captions */}
              <div className="absolute bottom-6 left-6 right-6 z-10 transition-transform duration-300 group-hover:translate-y-[-2px]">
                <h3 className="text-white font-bold text-base md:text-lg mb-1 font-display tracking-wide">
                  {slot.label}
                </h3>
                <p className="text-cyber-cyan/80 text-xs font-medium uppercase tracking-wider">
                  {slot.hint}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
