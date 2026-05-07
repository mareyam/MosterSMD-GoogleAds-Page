export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-white border-b border-black"
    >
      <div className="max-w-3xl mx-auto px-6 text-center">
        <p className="text-sm font-medium tracking-widest uppercase text-black mb-6">
          SMD Electronics Manufacturing
        </p>
        <h1 className="text-5xl md:text-7xl font-bold text-black leading-tight mb-6">
          Moster SMD
          <br />
          Technik GmbH
        </h1>
        <p className="text-xl text-black mb-10 max-w-xl mx-auto leading-relaxed">
          Precision circuit board assembly and serial manufacturing — trusted by engineers and businesses for over 30 years.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="px-8 py-4 bg-black text-white text-sm font-semibold hover:bg-gray-900 transition-colors"
          >
            Get in Touch
          </a>
          <a
            href="#services"
            className="px-8 py-4 border border-black text-black text-sm font-semibold hover:bg-black hover:text-white transition-colors"
          >
            Our Services
          </a>
        </div>
      </div>
    </section>
  );
}
