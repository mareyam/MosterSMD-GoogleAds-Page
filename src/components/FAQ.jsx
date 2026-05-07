"use client";
import { useState } from "react";

const faqs = [
  {
    q: "What types of circuit boards do you assemble?",
    a: "We assemble single-sided, double-sided, and multi-layer PCBs using SMD technology. We support Fine-Pitch components from 0.3 mm and work with boards ranging from simple prototypes to complex industrial assemblies.",
  },
  {
    q: "Do you offer prototype runs or only large orders?",
    a: "Both. We regularly produce single-unit prototypes and small batches as well as high-volume serial orders. There is no minimum order quantity — we can quote any project size.",
  },
  {
    q: "How quickly can you deliver a prototype?",
    a: "Turnaround time depends on component availability and board complexity, but we routinely deliver prototypes within a few business days. Contact us with your specs and we'll give you an accurate timeline.",
  },
  {
    q: "Are you ISO certified?",
    a: "Yes. We are certified to DIN EN ISO 9001:2015. Every board goes through documented quality processes including 100% AOI inspection, and we provide full test reports on request.",
  },
  {
    q: "Can you source components on our behalf?",
    a: "Yes. We offer full component procurement and warehousing as part of our contract assembly service. You send us the design files and we handle the rest.",
  },
  {
    q: "How do I get a quote?",
    a: "Fill in the contact form below or call us directly. Send over your Gerber files, BOM, and quantity requirements and we'll come back to you with a detailed quote, usually within 24 hours.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(null);

  return (
    <section id="faq" className="py-24 bg-white border-b border-black">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-3">FAQ</h2>
        <p className="text-black mb-14 max-w-xl">
          Common questions about our manufacturing services.
        </p>

        <div className="divide-y divide-black border-t border-black">
          {faqs.map((item, i) => (
            <div key={i}>
              <button
                className="w-full flex items-center justify-between py-5 text-left"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="font-semibold text-black pr-6">{item.q}</span>
                <span className="text-black text-xl flex-shrink-0 select-none">
                  {open === i ? "−" : "+"}
                </span>
              </button>
              {open === i && (
                <p className="text-black text-sm leading-relaxed pb-5 max-w-3xl">
                  {item.a}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
