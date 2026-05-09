"use client";
import { useState } from "react";

const faqs = [
  {
    q: "Do you manufacture prototypes or only large production runs?",
    a: "Both. We have no minimum order quantity. Many clients start with a single prototype board and scale up to serial production with us once the design is validated. The same quality processes — AOI inspection, thermal profiling, documentation — apply to every order regardless of size.",
  },
  {
    q: "How quickly can I get a quote?",
    a: "Send us your Gerber files and BOM by email or through the form on this page. We review manufacturability and reply with a detailed, itemised quote within 24 hours on business days. If something in your design needs to be discussed first, we'll flag it immediately.",
  },
  {
    q: "How quickly can you deliver a prototype?",
    a: "Typical prototype turnaround is 3–7 working days from order confirmation, depending on component availability. If you have urgent requirements, contact us directly — we can often accommodate faster timelines for straightforward assemblies.",
  },
  {
    q: "Can you source components on our behalf?",
    a: "Yes. We offer complete BOM procurement and component warehousing as part of our contract assembly service. You send us the design files; we source, store, and manage the components. We work with established distributors and have long-term relationships that help with availability during component shortages.",
  },
  {
    q: "Are you ISO 9001 certified?",
    a: "Yes. We are certified to DIN EN ISO 9001:2015. Every batch is fully traceable — we log temperature profiles for every reflow cycle, keep AOI inspection records per board, and document the complete manufacturing history. Audit-ready records are available on request.",
  },
  {
    q: "What component types and package sizes do you support?",
    a: "We support the full range of SMD packages from 0201 passives through to large connectors and IC packages. Fine-Pitch ICs down to 0.3 mm pitch are within our standard capability. We also support BGA and QFN packages. If you have an unusual component, send us the datasheet and we'll assess it.",
  },
  {
    q: "What industries do you manufacture for?",
    a: "Our clients operate in industrial automation, automotive electronics, medical technology, measurement and control systems, renewable energy, and embedded IoT systems. We manufacture for companies ranging from single-engineer startups building a first prototype to established German OEMs running serial production.",
  },
  {
    q: "Do you offer repair and rework services?",
    a: "Yes. We offer professional rework for assemblies that have failed inspection or for field returns. This includes component replacement, solder joint repair, and re-inspection with AOI. Rework can be performed on boards assembled by us or on assemblies produced elsewhere.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(null);

  return (
    <section id="faq" className="py-20 bg-white border-b-2 border-[#0d1f3c]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0d1f3c] mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-[#0d1f3c] max-w-2xl">
            Real answers to the questions engineers and procurement teams ask before placing an order.
          </p>
        </div>

        <div className="border-2 border-[#0d1f3c] divide-y-2 divide-[#0d1f3c]">
          {faqs.map((item, i) => (
            <div key={i}>
              <button
                className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-[#f0f4f9] transition-colors"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="font-semibold text-[#0d1f3c] pr-6 text-sm md:text-base">
                  {item.q}
                </span>
                <span className="text-[#0d1f3c] text-xl flex-shrink-0 font-bold select-none w-6 text-center">
                  {open === i ? "−" : "+"}
                </span>
              </button>
              {open === i && (
                <div className="px-6 pb-6 bg-[#f0f4f9] border-t border-[#0d1f3c]">
                  <p className="text-sm text-[#0d1f3c] leading-relaxed pt-4 max-w-3xl">
                    {item.a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-[#0d1f3c] mb-4">
            Have a question not answered here?
          </p>
          <a
            href="#quote"
            className="inline-block px-8 py-4 bg-[#0d1f3c] text-white text-sm font-bold hover:bg-[#1a3560] transition-colors"
          >
            Ask us directly →
          </a>
        </div>
      </div>
    </section>
  );
}
