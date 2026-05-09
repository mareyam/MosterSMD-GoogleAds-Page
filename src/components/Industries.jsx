const industries = [
  {
    icon: "🏭",
    name: "Industrial Automation",
    examples:
      "PLC boards, motor controllers, sensor modules, inverter electronics",
  },
  {
    icon: "🚗",
    name: "Automotive Electronics",
    examples: "ECU assemblies, CAN bus modules, high-current power boards",
  },
  {
    icon: "🏥",
    name: "Medical Technology",
    examples:
      "Diagnostic equipment PCBs, control units, monitoring electronics",
  },
  {
    icon: "📡",
    name: "Measurement & Control",
    examples:
      "Precision instrument PCBs, data acquisition boards, signal processing",
  },
  {
    icon: "🌱",
    name: "Renewable Energy",
    examples:
      "Inverter electronics, battery management systems, grid control modules",
  },
  {
    icon: "📟",
    name: "IoT & Embedded Systems",
    examples:
      "Wireless sensor nodes, gateway hardware, microcontroller assemblies",
  },
];

export default function Industries() {
  return (
    <section
      id="industries"
      className="py-20 bg-white border-b-2 border-[#0d1f3c]"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0d1f3c] mb-3">
            Industries We Serve
          </h2>
          <p className="text-[#0d1f3c] max-w-2xl">
            Our clients include industrial OEMs, automotive suppliers, medical
            device makers, and embedded systems companies — mostly based in
            Germany and the EU.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((ind) => (
            <div
              key={ind.name}
              className="border-2 border-[#0d1f3c] p-6 hover:bg-[#0d1f3c] group transition-colors duration-200"
            >
              <span className="text-3xl mb-4 block">{ind.icon}</span>
              <h3 className="font-bold text-[#0d1f3c] group-hover:text-white mb-2 transition-colors">
                {ind.name}
              </h3>
              <p className="text-xs text-[#0d1f3c] group-hover:text-blue-200 leading-relaxed transition-colors">
                {ind.examples}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 border-2 border-[#0d1f3c] p-6">
          <p className="text-sm text-[#0d1f3c]">
            <strong>Don't see your industry?</strong> We work with any company
            that needs precise, certified SMD assembly. If your product has a
            PCB, we can likely manufacture it.{" "}
            <a
              href="#quote"
              className="underline underline-offset-2 font-semibold"
            >
              Send us your details →
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
