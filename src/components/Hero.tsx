import Image from "next/image";

export function Hero() {
  const locations = [
    "Danbury, CT",
    "Hartford, CT",
    "Norwich, CT",
    "Springfield, MA",
    "Worcester, MA",
    "...and more!",
  ];

  return (
    <section className="relative min-h-[500px] md:min-h-[600px]">
      {/* Background Image */}
      <div className="absolute inset-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://ext.same-assets.com/2211206036/3565287732.webp"
          alt="Two Men and a Junk Truck team"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent" />
      </div>

      {/* "TWO MEN AND A" text overlay */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 text-white text-2xl md:text-4xl font-bold tracking-wider opacity-80">
        TWO MEN AND A
      </div>

      {/* Content Card */}
      <div className="relative container mx-auto px-4 py-12 md:py-20">
        <div className="bg-white/95 backdrop-blur-sm rounded-lg p-6 md:p-8 max-w-md shadow-xl border-4 border-[#93d9ef]">
          <h1 className="text-2xl md:text-3xl font-bold text-[#222426] leading-tight mb-2">
            FAST & RELIABLE JUNK REMOVAL SERVICES IN WORCESTER, MA
          </h1>
          <p className="font-semibold text-[#222426] mb-4">
            Same Day or Next Day Service Available
          </p>

          {/* Locations Grid */}
          <div className="grid grid-cols-2 gap-2 mb-6">
            {locations.map((location, index) => (
              <div key={index} className="flex items-center gap-2 text-sm">
                <span className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0" />
                <span className={location.includes("more") ? "italic text-[#0072bb]" : "text-[#222426]"}>
                  {location}
                </span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="#book"
              className="btn-primary text-center"
            >
              BOOK NOW
            </a>
            <a
              href="tel:203-548-9279"
              className="btn-outline text-center"
            >
              (203) 548-9279
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
