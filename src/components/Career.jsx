const openings = [
  {
    title: "Elektroniker für Geräte und Systeme (m/w/d)",
    type: "Vollzeit",
    desc: "Sie bestücken und löten elektronische Baugruppen, führen Qualitätsprüfungen durch und arbeiten in einem modernen Fertigungsumfeld.",
  },
  {
    title: "SMD-Bestücker / Maschinenbediener (m/w/d)",
    type: "Vollzeit",
    desc: "Bedienung und Einrichtung unserer SMD-Bestückungsautomaten sowie Qualitätskontrolle der gefertigten Baugruppen.",
  },
  {
    title: "Qualitätsprüfer AOI (m/w/d)",
    type: "Vollzeit / Teilzeit",
    desc: "Durchführung von AOI-Inspektionen, Analyse von Fehlerbildern und Dokumentation der Prüfergebnisse.",
  },
];

export default function Career() {
  return (
    <section id="karriere" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: text */}
          <div>
            <span
              className="inline-block px-4 py-1 rounded-full text-sm font-semibold mb-4"
              style={{
                background: "rgba(232,114,42,0.12)",
                color: "var(--accent)",
              }}
            >
              Karriere
            </span>
            <h2 className="section-title">Komm an Bord!</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Wir sind ein wachsendes Unternehmen mit einem engagierten Team und
              suchen qualifizierte Fachkräfte, die gemeinsam mit uns die
              Elektronikfertigung der Zukunft gestalten. Flache Hierarchien, ein
              kollegiales Miteinander und attraktive Konditionen warten auf Sie.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "Unbefristeter Arbeitsvertrag",
                "Leistungsgerechte Vergütung",
                "Moderne Arbeitsplätze & Ausrüstung",
                "Weiterbildungsmöglichkeiten",
                "Familiäres Betriebsklima",
              ].map((b) => (
                <li key={b} className="flex items-center gap-3 text-gray-700">
                  <span
                    className="w-5 h-5 rounded-full flex items-center justify-center text-white text-xs flex-shrink-0"
                    style={{ background: "var(--accent)" }}
                  >
                    ✓
                  </span>
                  {b}
                </li>
              ))}
            </ul>
            <a
              href="#kontakt"
              className="inline-block px-8 py-3 rounded-lg font-semibold text-white hover:opacity-90 transition-opacity"
              style={{ background: "var(--accent)" }}
            >
              Jetzt bewerben
            </a>
          </div>

          {/* Right: job openings */}
          <div className="space-y-4">
            {openings.map((job) => (
              <div
                key={job.title}
                className="rounded-xl p-6 border border-gray-100 hover:border-blue-200 hover:shadow-md transition-all duration-300"
                style={{ background: "var(--gray-light)" }}
              >
                <div className="flex items-start justify-between gap-4 mb-2">
                  <h3 className="font-semibold text-gray-800">{job.title}</h3>
                  <span
                    className="text-xs px-3 py-1 rounded-full font-medium whitespace-nowrap flex-shrink-0"
                    style={{ background: "var(--blue)", color: "white" }}
                  >
                    {job.type}
                  </span>
                </div>
                <p className="text-sm text-gray-600">{job.desc}</p>
              </div>
            ))}

            <div
              className="rounded-xl p-6 text-center border-2 border-dashed"
              style={{ borderColor: "var(--blue-light)" }}
            >
              <p className="text-gray-600 text-sm mb-3">
                Keine passende Stelle dabei? Wir freuen uns über
                Initiativbewerbungen!
              </p>
              <a
                href="mailto:moster@moster-smd.de"
                className="text-sm font-semibold hover:underline"
                style={{ color: "var(--blue)" }}
              >
                moster@moster-smd.de
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
