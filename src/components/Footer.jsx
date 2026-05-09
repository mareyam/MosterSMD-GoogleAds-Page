export default function Footer() {
  return (
    <footer className="bg-[#0d1f3c] py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
        <div>
          <div className="font-bold text-white text-lg mb-1">
            Moster SMD Technik
          </div>
          <div className="text-sm text-blue-300">
            An d. Enz 3A · 75223 Niefern-Öschelbronn
          </div>
          <div className="text-sm text-blue-300 mt-1">
            © {new Date().getFullYear()} All rights reserved.
          </div>
        </div>
        <div className="flex gap-6 text-sm text-blue-300">
          <a href="#" className="hover:text-white transition-colors">
            Impressum
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Datenschutz
          </a>
          <a
            href="mailto:moster@moster-smd.de"
            className="hover:text-white transition-colors"
          >
            moster@moster-smd.de
          </a>
        </div>
      </div>
    </footer>
  );
}
