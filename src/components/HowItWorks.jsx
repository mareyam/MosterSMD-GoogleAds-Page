const steps = [
  {
    num: "01",
    title: "Send Details & Get Quote",
    desc: "Send us your business detials. We review them and send an itemised quote within 12h.",
    icon: "📁",
  },
  {
    num: "02",
    title: "Procurement & Assembly",
    desc: "We source components, then run SMT assembly with AOI inspection and process logging.",
    icon: "⚙️",
  },
  {
    num: "03",
    title: "Testing & Delivery",
    desc: "Final inspection, documentation, and shipment in ESD-safe packaging.",
    icon: "🚚",
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className="py-20 bg-white border-b-2 border-[#0d1f3c]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0d1f3c] mb-3">
            How It Works
          </h2>
          <p className="text-[#0d1f3c] max-w-2xl">
            From details to finished boards, three steps, zero surprises.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Vertical connector line on desktop */}
          <div className="hidden lg:block absolute left-[2.6rem] top-8 bottom-8 w-0.5 bg-[#0d1f3c] opacity-20" />

          <div className="space-y-4">
            {steps.map((step, i) => (
              <div key={step.num} className="flex gap-6 items-start group">
                {/* Number + icon column */}
                <div className="flex flex-col items-center flex-shrink-0">
                  <div className="w-20 h-20 bg-[#0d1f3c] text-white flex flex-col items-center justify-center text-center relative z-10">
                    <span className="text-2xl leading-none">{step.icon}</span>
                    <span className="text-xs font-bold mt-1 opacity-60">
                      {step.num}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 border-2 border-[#0d1f3c] p-6 bg-white group-hover:bg-[#f0f4f9] transition-colors">
                  <h3 className="font-bold text-[#0d1f3c] text-lg mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-[#0d1f3c] leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <a
            href="#quote"
            className="px-8 py-4 bg-[#0d1f3c] text-white text-sm font-bold hover:bg-[#1a3560] transition-colors text-center"
          >
            Start the Process — Request a Quote →
          </a>
        </div>
      </div>
    </section>
  );
}
