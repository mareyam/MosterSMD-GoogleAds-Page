"use client";
import { useState } from "react";

export default function QuoteForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  function handleChange(e) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <section
      id="quote"
      className="bg-[#f0f4f9] border-b-2 border-[#0d1f3c] py-16"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0d1f3c] mb-4">
              Get a Quote in 12 Hours
            </h2>
            <p className="text-[#0d1f3c] mb-6 leading-relaxed">
              Send us your business details. We'll review your project and come
              back with a clear, itemised quote no sales calls, no generic
              pricing.
            </p>
            <ul className="space-y-3">
              {[
                "We review manufacturability, not just price",
                "No minimum order quantity",
                "Direct contact with our engineers",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm text-[#0d1f3c]"
                >
                  <span className="text-[#0d1f3c] font-bold mt-0.5">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Form */}
          <div className="bg-white border-2 border-[#0d1f3c] p-8">
            {sent ? (
              <div className="text-center py-8">
                <div className="text-4xl mb-4">✓</div>
                <p className="text-xl font-bold text-[#0d1f3c]">
                  Request received.
                </p>
                <p className="text-sm text-[#0d1f3c] mt-2">
                  We'll reply within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-[#0d1f3c] mb-2">
                    Your Name
                  </label>
                  <input
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="e.g. Thomas Müller"
                    className="w-full border-2 border-[#0d1f3c] px-4 py-3 text-sm text-[#0d1f3c] placeholder-gray-400 focus:outline-none bg-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-[#0d1f3c] mb-2">
                    Work Email
                  </label>
                  <input
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@company.de"
                    className="w-full border-2 border-[#0d1f3c] px-4 py-3 text-sm text-[#0d1f3c] placeholder-gray-400 focus:outline-none bg-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-[#0d1f3c] mb-2">
                    Phone Number
                  </label>
                  <input
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+49 123 456 789"
                    className="w-full border-2 border-[#0d1f3c] px-4 py-3 text-sm text-[#0d1f3c] placeholder-gray-400 focus:outline-none bg-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-[#0d1f3c] mb-2">
                    Project Details
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Describe your PCB project — quantity, layers, components, timeline..."
                    className="w-full border-2 border-[#0d1f3c] px-4 py-3 text-sm text-[#0d1f3c] placeholder-gray-400 focus:outline-none bg-white resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#0d1f3c] text-white py-4 text-sm font-bold hover:bg-[#1a3560] transition-colors"
                >
                  Request a Free Quote →
                </button>
                <p className="text-xs text-gray-500 text-center">
                  No commitment. No spam. Just a clear quote.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
