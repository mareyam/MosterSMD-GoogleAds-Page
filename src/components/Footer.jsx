export default function Footer() {
  return (
    <footer className="bg-black text-white py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
        <div>
          <div className="font-bold text-lg mb-1">Moster SMD Technik GmbH</div>
          <div className="text-sm text-gray-400">© {new Date().getFullYear()} All rights reserved.</div>
        </div>
        <div className="flex gap-6 text-sm text-gray-400">
          <a href="#" className="hover:text-white transition-colors">Impressum</a>
          <a href="#" className="hover:text-white transition-colors">Datenschutz</a>
        </div>
      </div>
    </footer>
  );
}
