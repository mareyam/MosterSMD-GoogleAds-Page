const services = [
  {
    icon: "⚙️",
    title: "Serial Manufacturing",
    desc: "Automated SMD assembly using SIPLACE systems for fine-pitch and high-volume production.",
    specs: [
      "0.3 mm fine-pitch",
      "Double-sided boards",
      "Up to 60k components/hour",
    ],
  },
  {
    icon: "🔬",
    title: "Prototype & Small-Batch",
    desc: "Fast prototype and pre-series PCB assembly with full production-quality processes.",
    specs: ["No MOQ", "3–7 day turnaround", "Full BOM review"],
  },
  {
    icon: "🔍",
    title: "AOI & Quality Control",
    desc: "100% automated optical inspection with full traceability and reporting.",
    specs: [
      "100% AOI inspection",
      "Batch-level process logs",
      "Microscope verification",
    ],
  },
  {
    icon: "📦",
    title: "Contract Assembly",
    desc: "Full production handling from BOM to delivery, including sourcing and logistics.",
    specs: ["BOM procurement", "Component sourcing", "JIT delivery"],
  },
  {
    icon: "🧪",
    title: "Reflow & Process Control",
    desc: "Controlled soldering profiles per batch with documented thermal processes.",
    specs: ["Custom thermal profiles", "Lead-free / leaded", "Nitrogen option"],
  },
  {
    icon: "📋",
    title: "ISO Quality System",
    desc: "ISO 9001:2015 certified process control with full batch traceability.",
    specs: ["ISO 9001:2015", "Full traceability", "Documented QC"],
  },
];

// const services = [
//   {
//     icon: "⚙️",
//     title: "Serial Manufacturing",
//     desc: "Automated SMD assembly using modern Siemens SIPLACE pick-and-place systems. We support Fine-Pitch components down to 0.3 mm, double-sided boards, and volumes from hundreds to hundreds of thousands of units.",
//     specs: ["Fine-Pitch from 0.3 mm", "Double-sided assembly", "Up to 60,000 components/hour", "0201 to large connectors"],
//   },
//   {
//     icon: "🔬",
//     title: "Prototype & Small-Batch Assembly",
//     desc: "Prototype assemblies delivered in as little as 3–7 working days depending on component availability. We handle single boards through to pre-series batches, with the same quality processes applied as serial production.",
//     specs: ["No minimum order quantity", "3–7 day typical turnaround", "Full BOM review included", "Scalable to serial production"],
//   },
//   {
//     icon: "🔍",
//     title: "AOI Inspection & Quality Assurance",
//     desc: "Every board goes through 100% automated optical inspection (AOI) as standard. We provide full inspection reports, solder joint documentation, and professional rework — not just a pass/fail stamp.",
//     specs: ["100% AOI on every board", "Temperature profile logging per batch", "Stereo-zoom microscope inspection", "Full inspection reports provided"],
//   },
//   {
//     icon: "📦",
//     title: "Contract Assembly & Component Sourcing",
//     desc: "Send us your Gerber files and BOM — we handle the rest. Procurement, warehousing, assembly, inspection, and just-in-time delivery to your facility. No need to manage multiple suppliers.",
//     specs: ["Full BOM procurement", "Component warehousing", "Just-in-time delivery", "Long-term supply chain support"],
//   },
//   {
//     icon: "🧪",
//     title: "Reflow Soldering & Process Control",
//     desc: "We create a custom temperature profile protocol for every batch, logged and stored per client. Lead-free and leaded processes available, with nitrogen atmosphere soldering for critical assemblies.",
//     specs: ["Custom thermal profiles per batch", "Lead-free & leaded processes", "Nitrogen atmosphere option", "Profile documentation stored per order"],
//   },
//   {
//     icon: "📋",
//     title: "ISO-Certified Quality Management",
//     desc: "Certified to DIN EN ISO 9001:2015. Every manufacturing process is documented, traceable, and repeatable. We don't just inspect at the end — quality is built into every step of the production process.",
//     specs: ["DIN EN ISO 9001:2015 certified", "Full traceability per batch", "Documented process control", "Audit-ready manufacturing records"],
//   },
// ];

export default function Services() {
  return (
    <section
      id="services"
      className="py-20 bg-white border-b-2 border-[#0d1f3c]"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0d1f3c] mb-3">
            What We Manufacture
          </h2>
          <p className="text-[#0d1f3c] max-w-2xl">
            Specific capabilities, real processes, documented standards — not
            marketing language.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#0d1f3c]">
          {services.map((s) => (
            <div key={s.title} className="bg-white p-8 flex flex-col">
              <span className="text-3xl mb-4">{s.icon}</span>
              <h3 className="text-lg font-bold text-[#0d1f3c] mb-3">
                {s.title}
              </h3>
              <p className="text-sm text-[#0d1f3c] leading-relaxed mb-5">
                {s.desc}
              </p>
              <ul className="mt-auto space-y-1.5">
                {s.specs.map((spec) => (
                  <li
                    key={spec}
                    className="flex items-start gap-2 text-xs text-[#0d1f3c]"
                  >
                    <span className="font-bold mt-0.5">→</span>
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
