"use client";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    country: "",
    projectType: "",
    assemblyType: "",
    quantity: "",
    timeline: "",
    message: "",
  });

  const [sent, setSent] = useState(false);

  function handleChange(e) {
    setForm((f) => ({
      ...f,
      [e.target.name]: e.target.value,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await fetch(
        "https://services.leadconnectorhq.com/hooks/3xaojxRW6BpSq5e0Fosp/webhook-trigger/05530d38-24fa-470f-8433-a6b21fdbd23b",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            first_name: form.name,
            company: form.company,
            email: form.email,
            phone: form.phone,
            country: form.country,
            project_type: form.projectType,
            assembly_type: form.assemblyType,
            quantity: form.quantity,
            timeline: form.timeline,
            message: form.message,
          }),
        }
      );

      setSent(true);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <section
      id="contact"
      className="relative py-24 bg-slate-50/50 bg-grid-pattern border-b border-slate-200"
    >
      {/* Anchor for quote link */}
      <span id="quote" className="absolute -top-20" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Column */}
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-cyber-blue mb-2">
              Get Started
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-navy mb-6 font-display tracking-tight">
              Request a Quote
            </h2>

            <p className="text-navy/70 mb-10 leading-relaxed text-sm md:text-base">
              Submit your project specifications, layer requirements, and quantity. 
              Our engineers will complete a technical design review and send an itemised quote within 12 hours.
            </p>

            <div className="space-y-6">
              {[
                {
                  icon: (
                    <svg className="w-5 h-5 text-cyber-blue mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  ),
                  label: "Address",
                  val: "Moster SMD Technik\nAn d. Enz 3A,\n75223 Niefern-Öschelbronn, Germany",
                },
                {
                  icon: (
                    <svg className="w-5 h-5 text-cyber-blue mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  ),
                  label: "Phone",
                  val: "+49 7233 6502",
                  href: "tel:+4972336502",
                },
                {
                  icon: (
                    <svg className="w-5 h-5 text-cyber-blue mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L22 8m-2 11H4a2 2 0 01-2-2V8a2 2 0 012-2h16a2 2 0 012 2v8a2 2 0 01-2 2z" />
                    </svg>
                  ),
                  label: "Email",
                  val: "moster@moster-smd.de",
                  href: "mailto:moster@moster-smd.de",
                },
                {
                  icon: (
                    <svg className="w-5 h-5 text-cyber-blue mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                  label: "Office Hours",
                  val: "Monday – Friday: 06:00 – 15:00 CET\nSubmissions outside business hours will be prioritized for the next working day.",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex gap-4 border-b border-slate-100 pb-5"
                >
                  <div className="flex-shrink-0">{item.icon}</div>
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-wider text-navy/50 mb-1">
                      {item.label}
                    </div>

                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-navy font-bold hover:text-cyber-blue hover:underline underline-offset-2 whitespace-pre-line text-sm"
                      >
                        {item.val}
                      </a>
                    ) : (
                      <div className="text-navy text-sm font-semibold whitespace-pre-line leading-relaxed">
                        {item.val}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="bg-white border border-slate-100 rounded-3xl p-8 md:p-10 shadow-lg shadow-slate-100/80">
            {sent ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-cyber-teal/10 text-cyber-teal rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-navy mb-3 font-display">
                  Request Submitted
                </h3>
                <p className="text-sm text-navy/70 leading-relaxed max-w-xs mx-auto">
                  Our engineering team has received your request and will contact you within 12 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-navy/60 mb-2">
                      Full Name
                    </label>
                    <input
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="e.g. Thomas Müller"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-navy focus:bg-white focus:border-cyber-blue focus:ring-1 focus:ring-cyber-blue outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-navy/60 mb-2">
                      Company Name
                    </label>
                    <input
                      name="company"
                      required
                      value={form.company}
                      onChange={handleChange}
                      placeholder="e.g. Company GmbH"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-navy focus:bg-white focus:border-cyber-blue focus:ring-1 focus:ring-cyber-blue outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-navy/60 mb-2">
                      Work Email
                    </label>
                    <input
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@company.de"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-navy focus:bg-white focus:border-cyber-blue focus:ring-1 focus:ring-cyber-blue outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-navy/60 mb-2">
                      Phone Number
                    </label>
                    <input
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+49 123 456 789"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-navy focus:bg-white focus:border-cyber-blue focus:ring-1 focus:ring-cyber-blue outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-navy/60 mb-2">
                    Country
                  </label>
                  <input
                    name="country"
                    value={form.country}
                    onChange={handleChange}
                    placeholder="Germany"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-navy focus:bg-white focus:border-cyber-blue focus:ring-1 focus:ring-cyber-blue outline-none transition-all"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-navy/60 mb-2">
                      Project Type
                    </label>
                    <select
                      name="projectType"
                      value={form.projectType}
                      onChange={handleChange}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-navy focus:bg-white focus:border-cyber-blue focus:ring-1 focus:ring-cyber-blue outline-none transition-all cursor-pointer"
                    >
                      <option value="">Select Project Type</option>
                      <option>Prototype</option>
                      <option>Small Batch</option>
                      <option>Serial Production</option>
                      <option>Ongoing Manufacturing</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-navy/60 mb-2">
                      Assembly Type
                    </label>
                    <select
                      name="assemblyType"
                      value={form.assemblyType}
                      onChange={handleChange}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-navy focus:bg-white focus:border-cyber-blue focus:ring-1 focus:ring-cyber-blue outline-none transition-all cursor-pointer"
                    >
                      <option value="">Select Assembly Type</option>
                      <option>SMD</option>
                      <option>THT</option>
                      <option>Mixed Assembly</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-navy/60 mb-2">
                      Estimated Quantity
                    </label>
                    <select
                      name="quantity"
                      value={form.quantity}
                      onChange={handleChange}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-navy focus:bg-white focus:border-cyber-blue focus:ring-1 focus:ring-cyber-blue outline-none transition-all cursor-pointer"
                    >
                      <option value="">Select Quantity</option>
                      <option>1–10</option>
                      <option>10–100</option>
                      <option>100–1,000</option>
                      <option>1,000+</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-navy/60 mb-2">
                      Timeline
                    </label>
                    <select
                      name="timeline"
                      value={form.timeline}
                      onChange={handleChange}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-navy focus:bg-white focus:border-cyber-blue focus:ring-1 focus:ring-cyber-blue outline-none transition-all cursor-pointer"
                    >
                      <option value="">Select Timeline</option>
                      <option>Urgent (&lt;7 days)</option>
                      <option>2–4 weeks</option>
                      <option>Flexible</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-navy/60 mb-2">
                    Technical Notes
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Describe layers, component count, special coatings, testing requirements, Gerber files availability..."
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-navy focus:bg-white focus:border-cyber-blue focus:ring-1 focus:ring-cyber-blue outline-none transition-all resize-none"
                  />
                </div>

                <div className="flex flex-wrap gap-4 text-xs text-navy/60 font-semibold pt-2">
                  <span className="flex items-center gap-1.5">
                    <svg className="w-4 h-4 text-cyber-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                    </svg>
                    NDA-friendly
                  </span>
                  <span className="flex items-center gap-1.5">
                    <svg className="w-4 h-4 text-cyber-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                    </svg>
                    Design Review Included
                  </span>
                  <span className="flex items-center gap-1.5">
                    <svg className="w-4 h-4 text-cyber-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                    </svg>
                    Reply within 12h
                  </span>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-cyber-cyan to-cyber-blue text-navy-dark py-4 text-xs font-bold uppercase tracking-wider rounded-xl hover:from-navy hover:to-navy hover:text-white hover:shadow-lg transition-all duration-300 shadow-md cursor-pointer"
                >
                  Request Technical Quote →
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

