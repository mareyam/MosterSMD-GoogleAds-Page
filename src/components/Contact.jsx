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
        "https://services.leadconnectorhq.com/hooks/3xaojxRW6BpSq5e0Fosp/webhook-trigger/35b7b441-4651-45f1-b842-3c6f952a71ec",
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
      className="py-20 bg-[#f0f4f9] border-b-2 border-[#0d1f3c]"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0d1f3c] mb-6">
              Request a Quote
            </h2>

            <p className="text-[#0d1f3c] mb-10 leading-relaxed">
              Send us your project details and receive a technical review with a
              clear, itemised quote within 12 hours.
            </p>

            <div className="space-y-6">
              {[
                {
                  label: "Address",
                  val: "Moster SMD Technik\nAn d. Enz 3A,\n75223 Niefern-Öschelbronn",
                },
                {
                  label: "Phone",
                  val: "+49 7233 6502",
                  href: "tel:+4972336502",
                },
                {
                  label: "Email",
                  val: "moster@moster-smd.de",
                  href: "mailto:moster@moster-smd.de",
                },
                {
                  label: "Hours",
                  val: "Monday – Friday: 06:00 – 15:00\nOutside business hours? Submit your RFQ and we reply the next working day.",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="border-b border-[#0d1f3c] pb-4"
                >
                  <div className="text-xs font-bold uppercase tracking-widest text-[#0d1f3c] mb-1">
                    {item.label}
                  </div>

                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-[#0d1f3c] font-medium hover:underline underline-offset-2 whitespace-pre-line"
                    >
                      {item.val}
                    </a>
                  ) : (
                    <div className="text-[#0d1f3c] whitespace-pre-line">
                      {item.val}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div>
            {sent ? (
              <div className="border-2 border-[#0d1f3c] p-10 text-center bg-white">
                <p className="text-2xl font-bold text-[#0d1f3c] mb-2">
                  RFQ Submitted
                </p>

                <p className="text-sm text-[#0d1f3c]">
                  Our engineering team will review your request and reply within
                  12 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-[#0d1f3c] mb-2">
                      Full Name
                    </label>

                    <input
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Thomas Müller"
                      className="w-full border-2 border-[#0d1f3c] px-4 py-3 text-sm bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-[#0d1f3c] mb-2">
                      Company Name
                    </label>

                    <input
                      name="company"
                      required
                      value={form.company}
                      onChange={handleChange}
                      placeholder="Company GmbH"
                      className="w-full border-2 border-[#0d1f3c] px-4 py-3 text-sm bg-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
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
                      className="w-full border-2 border-[#0d1f3c] px-4 py-3 text-sm bg-white"
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
                      className="w-full border-2 border-[#0d1f3c] px-4 py-3 text-sm bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-[#0d1f3c] mb-2">
                    Country
                  </label>

                  <input
                    name="country"
                    value={form.country}
                    onChange={handleChange}
                    placeholder="Germany"
                    className="w-full border-2 border-[#0d1f3c] px-4 py-3 text-sm bg-white"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-[#0d1f3c] mb-2">
                      Project Type
                    </label>

                    <select
                      name="projectType"
                      value={form.projectType}
                      onChange={handleChange}
                      className="w-full border-2 border-[#0d1f3c] px-4 py-3 text-sm bg-white"
                    >
                      <option value="">Select</option>
                      <option>Prototype</option>
                      <option>Small Batch</option>
                      <option>Serial Production</option>
                      <option>Ongoing Manufacturing</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-[#0d1f3c] mb-2">
                      Assembly Type
                    </label>

                    <select
                      name="assemblyType"
                      value={form.assemblyType}
                      onChange={handleChange}
                      className="w-full border-2 border-[#0d1f3c] px-4 py-3 text-sm bg-white"
                    >
                      <option value="">Select</option>
                      <option>SMD</option>
                      <option>THT</option>
                      <option>Mixed Assembly</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-[#0d1f3c] mb-2">
                      Estimated Quantity
                    </label>

                    <select
                      name="quantity"
                      value={form.quantity}
                      onChange={handleChange}
                      className="w-full border-2 border-[#0d1f3c] px-4 py-3 text-sm bg-white"
                    >
                      <option value="">Select</option>
                      <option>1–10</option>
                      <option>10–100</option>
                      <option>100–1,000</option>
                      <option>1,000+</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-[#0d1f3c] mb-2">
                      Timeline
                    </label>

                    <select
                      name="timeline"
                      value={form.timeline}
                      onChange={handleChange}
                      className="w-full border-2 border-[#0d1f3c] px-4 py-3 text-sm bg-white"
                    >
                      <option value="">Select</option>
                      <option>Urgent (&lt;7 days)</option>
                      <option>2–4 weeks</option>
                      <option>Flexible</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-[#0d1f3c] mb-2">
                    Technical Notes
                  </label>

                  <textarea
                    name="message"
                    required
                    rows={6}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Board details, certifications, testing requirements, coatings, delivery expectations, etc."
                    className="w-full border-2 border-[#0d1f3c] px-4 py-3 text-sm bg-white resize-none"
                  />
                </div>

                <div className="text-sm text-[#0d1f3c]">
                  ✓ NDA-friendly &nbsp;&nbsp; ✓ Technical review included
                  &nbsp;&nbsp; ✓ Reply within 12h
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#0d1f3c] text-white py-4 text-sm font-bold hover:bg-[#1a3560] transition-colors"
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

// "use client";
// import { useState } from "react";

// export default function Contact() {
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     message: "",
//   });
//   const [sent, setSent] = useState(false);

//   function handleChange(e) {
//     setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
//     console.log("form data is", form);
//   }

//   async function handleSubmit(e) {
//     e.preventDefault();
//     console.log("going to submit");

//     try {
//       await fetch(
//         "https://services.leadconnectorhq.com/hooks/3xaojxRW6BpSq5e0Fosp/webhook-trigger/35b7b441-4651-45f1-b842-3c6f952a71ec",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({
//             first_name: form.name,
//             email: form.email,
//             phone: form.phone,
//             message: form.message,
//           }),
//         }
//       );

//       setSent(true);
//     } catch (err) {
//       console.error(err);
//       console.log("error state");
//     }
//   }

//   return (
//     <section
//       id="contact"
//       className="py-20 bg-[#f0f4f9] border-b-2 border-[#0d1f3c]"
//     >
//       <div className="max-w-6xl mx-auto px-6">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
//           <div>
//             <h2 className="text-3xl md:text-4xl font-bold text-[#0d1f3c] mb-6">
//               Contact Us
//             </h2>
//             <p className="text-[#0d1f3c] mb-10 leading-relaxed">
//               For quotes, technical questions, or general enquiries — contact us
//               directly. You'll reach the people who run the production line, not
//               a call centre.
//             </p>

//             <div className="space-y-6">
//               {[
//                 {
//                   label: "Address",
//                   val: "Moster SMD Technik\nAn d. Enz 3A,\n75223 Niefern-Öschelbronn",
//                 },
//                 {
//                   label: "Phone",
//                   val: "+49 7233 6502",
//                   href: "tel:+4972336502",
//                 },
//                 { label: "Fax", val: "+49 7233 81187" },
//                 {
//                   label: "Email",
//                   val: "moster@moster-smd.de",
//                   href: "mailto:moster@moster-smd.de",
//                 },
//                 { label: "Hours", val: "Monday – Friday: 06:00 – 15:00" },
//               ].map((item) => (
//                 <div
//                   key={item.label}
//                   className="border-b border-[#0d1f3c] pb-4"
//                 >
//                   <div className="text-xs font-bold uppercase tracking-widest text-[#0d1f3c] mb-1">
//                     {item.label}
//                   </div>
//                   {item.href ? (
//                     <a
//                       href={item.href}
//                       className="text-[#0d1f3c] font-medium hover:underline underline-offset-2 whitespace-pre-line"
//                     >
//                       {item.val}
//                     </a>
//                   ) : (
//                     <div className="text-[#0d1f3c] whitespace-pre-line">
//                       {item.val}
//                     </div>
//                   )}
//                 </div>
//               ))}
//             </div>
//           </div>

//           <div>
//             {sent ? (
//               <div className="border-2 border-[#0d1f3c] p-10 text-center bg-white">
//                 <p className="text-2xl font-bold text-[#0d1f3c] mb-2">
//                   Message sent.
//                 </p>
//                 <p className="text-sm text-[#0d1f3c]">
//                   We'll reply within 12 hours.
//                 </p>
//               </div>
//             ) : (
//               <form onSubmit={handleSubmit} className="space-y-5">
//                 <div>
//                   <label className="block text-xs font-bold uppercase tracking-widest text-[#0d1f3c] mb-2">
//                     Name
//                   </label>
//                   <input
//                     name="name"
//                     required
//                     value={form.name}
//                     onChange={handleChange}
//                     placeholder="Your full name"
//                     className="w-full border-2 border-[#0d1f3c] px-4 py-3 text-sm text-[#0d1f3c] placeholder-gray-400 focus:outline-none bg-white"
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-xs font-bold uppercase tracking-widest text-[#0d1f3c] mb-2">
//                     Email
//                   </label>
//                   <input
//                     name="email"
//                     type="email"
//                     required
//                     value={form.email}
//                     onChange={handleChange}
//                     placeholder="your@email.com"
//                     className="w-full border-2 border-[#0d1f3c] px-4 py-3 text-sm text-[#0d1f3c] placeholder-gray-400 focus:outline-none bg-white"
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-xs font-bold uppercase tracking-widest text-[#0d1f3c] mb-2">
//                     Phone Number
//                   </label>
//                   <input
//                     name="phone"
//                     type="tel"
//                     value={form.phone}
//                     onChange={handleChange}
//                     placeholder="+49 123 456 789"
//                     className="w-full border-2 border-[#0d1f3c] px-4 py-3 text-sm text-[#0d1f3c] placeholder-gray-400 focus:outline-none bg-white"
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-xs font-bold uppercase tracking-widest text-[#0d1f3c] mb-2">
//                     Message
//                   </label>
//                   <textarea
//                     name="message"
//                     required
//                     rows={6}
//                     value={form.message}
//                     onChange={handleChange}
//                     placeholder="Your question or project details..."
//                     className="w-full border-2 border-[#0d1f3c] px-4 py-3 text-sm text-[#0d1f3c] placeholder-gray-400 focus:outline-none bg-white resize-none"
//                   />
//                 </div>

//                 <button
//                   type="submit"
//                   className="w-full bg-[#0d1f3c] text-white py-4 text-sm font-bold hover:bg-[#1a3560] transition-colors"
//                 >
//                   Send Message
//                 </button>
//               </form>
//             )}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
