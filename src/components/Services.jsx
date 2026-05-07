const services = [
  {
    icon: "⚙️",
    title: "Serial Manufacturing",
    desc: "High-volume SMD assembly with state-of-the-art pick-and-place machines, supporting Fine-Pitch components down to 0.3 mm.",
  },
  {
    icon: "🔬",
    title: "Prototype Assembly",
    desc: "From single boards to small series — fast turnaround prototyping with dedicated technical support at every step.",
  },
  {
    icon: "🔍",
    title: "AOI Inspection",
    desc: "100% automated optical inspection on every board, with full documentation and professional rework if needed.",
  },
  {
    icon: "🛠️",
    title: "Contract Assembly",
    desc: "Supply your PCBs and we handle everything — component sourcing, assembly, testing, and just-in-time delivery.",
  },
  {
    icon: "📦",
    title: "Component Sourcing",
    desc: "We manage procurement and warehousing of components so you can focus on your product, not logistics.",
  },
  {
    icon: "📋",
    title: "Quality Documentation",
    desc: "ISO 9001:2015 certified processes with complete traceability, inspection reports, and compliance records.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white border-b border-black">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-3">Services</h2>
        <p className="text-black mb-14 max-w-xl">
          Everything you need for precision electronics manufacturing — under one roof.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-black">
          {services.map((s) => (
            <div key={s.title} className="bg-white p-8 hover:bg-gray-50 transition-colors">
              <span className="text-3xl block mb-4">{s.icon}</span>
              <h3 className="text-lg font-bold text-black mb-3">{s.title}</h3>
              <p className="text-sm text-black leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
