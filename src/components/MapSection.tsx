import Image from "next/image";

export function MapSection() {
  const locations = [
    "Danbury, CT",
    "Hartford, CT",
    "Norwich, CT",
    "Springfield, MA",
    "Worcester, MA",
    "...and more!",
  ];

  return (
    <section className="py-12">
      {/* Map Container */}
      <div className="w-full h-[400px] bg-gray-200 relative overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d93859.42969198466!2d-72.0842!3d41.6765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e677f1e8c5e5c7%3A0x7f6e1e1e1e1e1e1e!2sNorth%20Franklin%2C%20CT!5e0!3m2!1sen!2sus!4v1234567890"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Two Men and a Junk Truck Location"
        />
      </div>

      {/* CTA Bar */}
      <div className="bg-[#222426] py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            {/* Logo */}
            <Image
              src="https://ext.same-assets.com/2211206036/2555257938.png"
              alt="Two Men and a Junk Truck"
              width={200}
              height={70}
              className="h-16 w-auto"
            />

            {/* Text */}
            <div className="text-center lg:text-left">
              <h3 className="text-xl md:text-2xl font-bold text-[#93d9ef]">
                REACH OUT NOW TO
              </h3>
              <h4 className="text-xl md:text-2xl font-bold text-[#93d9ef]">
                SCHEDULE YOUR PICKUP!
              </h4>
            </div>

            {/* Locations */}
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
              {locations.map((location, index) => (
                <div key={index} className="flex items-center gap-2 text-sm text-white">
                  <span className="w-2 h-2 bg-red-500 rounded-full" />
                  <span className={location.includes("more") ? "italic text-[#93d9ef]" : ""}>
                    {location}
                  </span>
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="#book" className="btn-primary text-center">
                BOOK NOW
              </a>
              <a href="tel:203-548-9279" className="btn-outline !border-white !text-white hover:!bg-white hover:!text-[#222426] text-center">
                (203) 548-9279
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
