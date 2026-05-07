"use client";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  function handleChange(e) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-3">Contact Us</h2>
        <p className="text-black mb-14 max-w-xl">
          Send us your enquiry and we'll get back to you within 24 hours.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Info */}
          <div className="space-y-8">
            <div>
              <div className="text-xs font-semibold uppercase tracking-widest text-black mb-1">Address</div>
              <div className="text-black">
                Moster SMD Technik GmbH<br />
                Bahnhofstraße 1<br />
                75223 Niefern-Öschelbronn, Germany
              </div>
            </div>
            <div>
              <div className="text-xs font-semibold uppercase tracking-widest text-black mb-1">Phone</div>
              <a href="tel:+4972336502" className="text-black hover:underline underline-offset-2">
                +49 7233 6502
              </a>
            </div>
            <div>
              <div className="text-xs font-semibold uppercase tracking-widest text-black mb-1">Email</div>
              <a href="mailto:info@moster-smd.de" className="text-black hover:underline underline-offset-2">
                info@moster-smd.de
              </a>
            </div>
            <div>
              <div className="text-xs font-semibold uppercase tracking-widest text-black mb-1">Hours</div>
              <div className="text-black">Monday – Friday: 06:00 – 15:00</div>
            </div>
          </div>

          {/* Form */}
          <div>
            {sent ? (
              <div className="border border-black p-10 text-center">
                <p className="text-2xl font-bold text-black mb-2">Message sent.</p>
                <p className="text-black text-sm">We'll be in touch within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-widest text-black mb-2">
                    Name
                  </label>
                  <input
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className="w-full border border-black px-4 py-3 text-sm text-black placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-black bg-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-widest text-black mb-2">
                    Email
                  </label>
                  <input
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="w-full border border-black px-4 py-3 text-sm text-black placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-black bg-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-widest text-black mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={6}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project..."
                    className="w-full border border-black px-4 py-3 text-sm text-black placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-black bg-white resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-black text-white py-4 text-sm font-semibold hover:bg-gray-900 transition-colors"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
