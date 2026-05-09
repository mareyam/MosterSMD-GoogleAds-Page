const reasons = [
  {
    title: "Direct engineer access",
    desc: "Talk directly to production engineers — fast answers on DFM, tolerances, and layout.",
  },
  {
    title: "Scalable production",
    desc: "From single prototypes to 100k+ units with the same team and process.",
  },
  {
    title: "German quality standards",
    desc: "ISO 9001:2015 production with full batch traceability and AOI logging.",
  },
  {
    title: "Transparent pricing",
    desc: "Itemised quotes for assembly, components, and logistics — no hidden costs.",
  },
  {
    title: "Fast quoting",
    desc: "DFM review and detailed quote within 12h.",
  },
  {
    title: "30+ years expertise",
    desc: "Fine-pitch and advanced PCB assembly down to 0.3 mm pitch since 1994.",
  },
];

export default function WhyUs() {
  return (
    <section id="why" className="py-20 bg-[#0d1f3c] border-b-2 border-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Why Manufacturers Choose Moster SMD
          </h2>
          <p className="text-blue-200 max-w-2xl">
            Not a list of buzzwords. Specific reasons engineers come back to us
            order after order.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-blue-800">
          {reasons.map((r) => (
            <div key={r.title} className="bg-[#0d1f3c] p-8">
              <h3 className="text-base font-bold text-white mb-3">{r.title}</h3>
              <p className="text-sm text-blue-200 leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="#quote"
            className="inline-block px-8 py-4 bg-white text-[#0d1f3c] text-sm font-bold hover:bg-blue-50 transition-colors"
          >
            Request a Quote →
          </a>
        </div>
      </div>
    </section>
  );
}
