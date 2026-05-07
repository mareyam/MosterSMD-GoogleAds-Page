const owners = [
  {
    initials: "RM",
    name: "Reiner Moster",
    role: "CEO & Founder",
    bio: "With over 30 years in SMD electronics manufacturing, Reiner founded Moster SMD Technik in 1994 and has led it with a hands-on approach to quality and engineering.",
  },
  {
    initials: "CM",
    name: "Cemile Moster",
    role: "Office Manager",
    bio: "Cemile oversees all administrative and organisational operations, ensuring every client receives fast, clear communication and a smooth experience from enquiry to delivery.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-white border-b border-black">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-3">About Us</h2>
        <p className="text-black mb-14 max-w-xl">
          Family-owned and quality-driven since 1994.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-black leading-relaxed mb-5">
              Moster SMD Technik GmbH is an independent, family-run electronics manufacturing company based in Niefern-Öschelbronn, Germany. Since 1994 we have been producing high-quality SMD-assembled circuit boards for clients across industrial, automotive, and medical sectors.
            </p>
            <p className="text-black leading-relaxed mb-5">
              We are certified to <strong>DIN EN ISO 9001:2015</strong>, which means every board we ship has passed through documented, traceable, and repeatable quality processes — not just a spot-check at the end.
            </p>
            <p className="text-black leading-relaxed">
              Our strength is flexibility: we serve clients who need a single prototype and clients who need hundreds of thousands of units per year. Either way, they get the same direct contact, the same engineers, and the same standard of work.
            </p>
          </div>

          <div className="space-y-6">
            {owners.map((o) => (
              <div key={o.name} className="flex gap-6 border border-black p-6">
                <div className="w-14 h-14 bg-black text-white flex items-center justify-center text-sm font-bold flex-shrink-0">
                  {o.initials}
                </div>
                <div>
                  <div className="font-bold text-black">{o.name}</div>
                  <div className="text-sm text-black mb-2">{o.role}</div>
                  <p className="text-sm text-black leading-relaxed">{o.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
