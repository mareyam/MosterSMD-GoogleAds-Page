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
// const reasons = [
//   {
//     title: "Direct access to engineers",
//     desc: "You speak to the people who actually assemble your boards — not a sales rep reading from a script. Questions about tolerances, component placement, and DFM get answered the same day.",
//   },
//   {
//     title: "Flexible production scale",
//     desc: "We don't turn away prototypes and we don't have upper volume limits. Whether you need 1 board or 100,000, the same engineering team handles your project from start to finish.",
//   },
//   {
//     title: "German manufacturing standards",
//     desc: "ISO 9001:2015 certified. Every batch has a logged temperature profile, a full AOI record, and documented process data. Your boards are traceable from paste printing to final inspection.",
//   },
//   {
//     title: "Transparent, itemised quotes",
//     desc: "No vague pricing. We send you a clear quote broken down by assembly, components, and logistics — so you know exactly what you're paying for before you commit to anything.",
//   },
//   {
//     title: "Rapid quote turnaround",
//     desc: "Send your Gerber files and BOM by email. We'll review manufacturability and reply with a detailed quote within 24 hours on business days — not 5–10 days like larger contract manufacturers.",
//   },
//   {
//     title: "30 years of Fine-Pitch expertise",
//     desc: "Since 1994 we've kept pace with component miniaturisation. We handle 0201 passives, fine-pitch ICs down to 0.3 mm pitch, and BGA packages that most regional EMS providers won't touch.",
//   },
// ];

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
