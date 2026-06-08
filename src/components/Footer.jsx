export default function Footer() {
  return (
    <footer className="bg-navy-dark py-14 border-t border-slate-900 text-white relative overflow-hidden">
      {/* Subtle glow spot */}
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-cyber-blue/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <div>
          <div className="font-bold text-white text-xl mb-1 font-display tracking-tight">
            Moster SMD Technik <span className="text-cyber-cyan font-normal text-sm">GmbH</span>
          </div>
          <div className="text-xs sm:text-sm text-slate-400">
            An d. Enz 3A · 75223 Niefern-Öschelbronn, Germany
          </div>
          <div className="text-xs sm:text-sm text-slate-500 mt-2">
            © {new Date().getFullYear()} Moster SMD Technik GmbH. All rights reserved.
          </div>
          <div className="text-xs text-slate-400 mt-4">
            Developed by{" "}
            <a
              href="https://zamoog.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 hover:text-cyber-cyan transition-colors duration-200 font-medium"
            >
              zamoog.com
            </a>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-x-8 gap-y-3 text-xs sm:text-sm text-slate-400">
          <a href="#" className="hover:text-cyber-cyan transition-colors duration-200">
            Impressum
          </a>
          <a href="/privacy-policy" className="hover:text-cyber-cyan transition-colors duration-200">
            Privacy Policy
          </a>
          <a
            href="mailto:moster@moster-smd.de"
            className="hover:text-cyber-cyan transition-colors duration-200 font-medium text-white/95"
          >
            moster@moster-smd.de
          </a>
        </div>
      </div>
    </footer>
  );
}
