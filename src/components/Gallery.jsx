const slots = [
  {
    id: 1,
    label: "SMD Pick-and-Place Machine",
    hint: "Factory floor / SIPLACE machine",
    img: "/img1.png",
  },
  {
    id: 2,
    label: "AOI Inspection Station",
    hint: "AOI machine or inspection setup",
    img: "/img2.jpeg",
  },
  {
    id: 3,
    label: "Assembled PCB Boards",
    hint: "Close-up of finished circuit boards",
    img: "/img3.jpg",
  },
  {
    id: 4,
    label: "Reflow Soldering Line",
    hint: "Reflow oven / soldering process",
    img: "/img4.jpeg",
  },
  {
    id: 5,
    label: "Quality Control",
    hint: "Engineer inspecting board or microscope",
    img: "/img5.jpeg",
  },
  {
    id: 6,
    label: "Production Facility",
    hint: "Wide shot of the factory floor",
    img: "/img6.jpg",
  },
];

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="py-20 bg-[#0d1f3c] border-b-2 border-white"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Our Facility
          </h2>
          <p className="text-blue-200 max-w-2xl">
            Modern SMD assembly equipment, clean production environment, and the
            team behind every board we ship.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {slots.map((slot) => (
            <div
              key={slot.id}
              className="relative aspect-[4/3] border-2 border-blue-700 overflow-hidden group"
            >
              <img
                src={slot.img}
                alt={slot.label}
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-[#0d1f3c]/40 group-hover:bg-opacity-60 transition" />

              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-10">
                <div className="w-10 h-10 border-2 border-blue-400 text-blue-300 font-bold text-sm flex items-center justify-center mb-3">
                  {slot.id}
                </div>

                <p className="text-white font-semibold text-sm mb-1">
                  {slot.label}
                </p>

                <p className="text-blue-300 text-xs">{slot.hint}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
