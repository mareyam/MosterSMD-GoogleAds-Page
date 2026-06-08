export default function About() {
  return (
    <section id="about" className="py-24 bg-white bg-grid-pattern border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Column: Description */}
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-cyber-blue mb-2">
              Company Profile
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-navy mb-8 font-display tracking-tight">
              About Moster SMD
            </h2>
            <p className="text-navy/80 leading-relaxed mb-6 text-sm md:text-base">
              Moster SMD Technik GmbH is a family-owned electronics manufacturing service (EMS) 
              based in Niefern-Öschelbronn, Germany. Founded in 1994, we operate 600 m² of 
              production space fully equipped for high-precision SMD assembly, reflow soldering, 
              and automated optical inspection.
            </p>
            <p className="text-navy/80 leading-relaxed mb-6 text-sm md:text-base">
              We specialise in fine-pitch SMD assembly for industrial, automotive, and medical electronics. 
              As component miniaturisation has accelerated over three decades, we have continuously 
              invested in modern Siemens SIPLACE placement systems and AOI equipment used by Tier 1 manufacturers.
            </p>
            <p className="text-navy/80 leading-relaxed mb-6 text-sm md:text-base">
              Our clients include Beurer, E.G.O., German Power, SN-Technics, and LIMEX — companies 
              who choose us because we combine the strict quality systems of a large EMS with the direct, 
              agile communication of a specialist shop.
            </p>
            <div className="p-5 bg-slate-50 border border-slate-150 rounded-2xl text-xs text-navy/70 leading-relaxed">
              Every production batch ships with a documented temperature profile log and AOI report. 
              We are certified to <strong className="text-navy">DIN EN ISO 9001:2015</strong> and manufacture to IPC standards.
            </div>
          </div>

          {/* Right Column: Bio cards & Clients */}
          <div className="space-y-6">
            {/* Owner Bios */}
            <div className="bg-slate-50/50 border border-slate-100 rounded-2xl p-6 shadow-sm flex gap-5 hover:shadow-md transition-all duration-300">
              <div className="w-14 h-14 rounded-full bg-navy text-cyber-cyan border border-slate-800 flex items-center justify-center text-sm font-bold font-display shadow-inner flex-shrink-0">
                RM
              </div>
              <div>
                <div className="font-bold text-navy text-base font-display">Reiner Moster</div>
                <div className="text-[10px] text-cyber-blue font-bold uppercase tracking-wider mb-2">
                  CEO & Founder
                </div>
                <p className="text-xs sm:text-sm text-navy/70 leading-relaxed">
                  Electronics engineer with 30+ years in SMD manufacturing. Founded Moster SMD Technik 
                  in 1994 and leads technical operations directly. Clients speak to him, not an account manager.
                </p>
              </div>
            </div>

            <div className="bg-slate-50/50 border border-slate-100 rounded-2xl p-6 shadow-sm flex gap-5 hover:shadow-md transition-all duration-300">
              <div className="w-14 h-14 rounded-full bg-navy text-cyber-cyan border border-slate-800 flex items-center justify-center text-sm font-bold font-display shadow-inner flex-shrink-0">
                CM
              </div>
              <div>
                <div className="font-bold text-navy text-base font-display">Cemile Moster</div>
                <div className="text-[10px] text-cyber-blue font-bold uppercase tracking-wider mb-2">
                  Office Manager
                </div>
                <p className="text-xs sm:text-sm text-navy/70 leading-relaxed">
                  Manages all procurement, client communications, and order scheduling. Ensures quotes 
                  go out within 12-24 hours and orders move through production on schedule.
                </p>
              </div>
            </div>

            {/* Clients List */}
            <div className="bg-slate-50/50 border border-slate-100 rounded-2xl p-6 shadow-sm">
              <div className="text-[10px] font-bold uppercase tracking-wider text-navy/60 mb-4 font-display">
                Trusted by brands like
              </div>
              <div className="flex flex-wrap gap-2.5">
                {[
                  "Mercedes-Benz",
                  "BOSCH",
                  "Beurer",
                  "E.G.O.",
                  "German Power",
                  "SN-Technics",
                  "LIMEX",
                  "Bert Elektrotechnik",
                ].map((c) => (
                  <span
                    key={c}
                    className="text-xs font-semibold bg-white border border-slate-200 px-3 py-1.5 rounded-full text-navy shadow-sm hover:border-cyber-blue hover:bg-slate-50/50 transition-all cursor-default"
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
