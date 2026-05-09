export default function About() {
  return (
    <section id="about" className="py-20 bg-white border-b-2 border-[#0d1f3c]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0d1f3c] mb-6">
              About Moster SMD Technik
            </h2>
            <p className="text-[#0d1f3c] leading-relaxed mb-5">
              Moster SMD Technik GmbH is a family-owned electronics manufacturing service (EMS) based in Niefern-Öschelbronn, south Germany. Founded in 1994, we operate 600 m² of production space fully equipped for SMD assembly, reflow soldering, and automated optical inspection.
            </p>
            <p className="text-[#0d1f3c] leading-relaxed mb-5">
              We specialise in fine-pitch and SMD assembly for industrial, automotive, and medical electronics. As component miniaturisation has accelerated over three decades, we've kept pace — investing in modern Siemens SIPLACE placement systems and AOI equipment used by Tier 1 manufacturers.
            </p>
            <p className="text-[#0d1f3c] leading-relaxed mb-5">
              Our clients include Beurer, E.G.O., German Power, SN-Technics, and LIMEX — companies who chose us because we combine the quality systems of a large EMS with the direct communication of a specialist shop.
            </p>
            <p className="text-[#0d1f3c] leading-relaxed">
              Every production batch ships with a temperature profile log and AOI report. We are certified to <strong>DIN EN ISO 9001:2015</strong> and manufacture to IPC standards.
            </p>
          </div>

          <div className="space-y-6">
            {/* Owner cards */}
            <div className="border-2 border-[#0d1f3c] p-6 flex gap-5">
              <div className="w-14 h-14 bg-[#0d1f3c] text-white flex items-center justify-center text-sm font-bold flex-shrink-0">
                RM
              </div>
              <div>
                <div className="font-bold text-[#0d1f3c]">Reiner Moster</div>
                <div className="text-xs text-[#0d1f3c] mb-2 uppercase tracking-widest">CEO & Founder</div>
                <p className="text-sm text-[#0d1f3c] leading-relaxed">
                  Electronics engineer with 30+ years in SMD manufacturing. Founded Moster SMD Technik in 1994 and leads technical operations directly — clients speak to him, not a project manager.
                </p>
              </div>
            </div>

            <div className="border-2 border-[#0d1f3c] p-6 flex gap-5">
              <div className="w-14 h-14 bg-[#0d1f3c] text-white flex items-center justify-center text-sm font-bold flex-shrink-0">
                CM
              </div>
              <div>
                <div className="font-bold text-[#0d1f3c]">Cemile Moster</div>
                <div className="text-xs text-[#0d1f3c] mb-2 uppercase tracking-widest">Office Manager</div>
                <p className="text-sm text-[#0d1f3c] leading-relaxed">
                  Manages all procurement, client communication, and order coordination. Ensures quotes go out within 24 hours and orders move through production on schedule.
                </p>
              </div>
            </div>

            {/* Clients */}
            <div className="border-2 border-[#0d1f3c] p-6">
              <p className="text-xs font-bold uppercase tracking-widest text-[#0d1f3c] mb-3">
                Clients include
              </p>
              <div className="flex flex-wrap gap-3">
                {["Beurer", "E.G.O.", "German Power", "SN-Technics", "LIMEX", "Bert Elektrotechnik"].map((c) => (
                  <span
                    key={c}
                    className="text-xs font-semibold border border-[#0d1f3c] px-3 py-1 text-[#0d1f3c]"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
