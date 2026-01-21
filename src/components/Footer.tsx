import Image from "next/image";

export function Footer() {
  const locations = [
    "Danbury, CT",
    "Hartford, CT",
    "Norwich, CT",
    "Springfield, MA",
    "Worcester, MA",
    "...and more!",
  ];

  const services = [
    "Appliance Removal",
    "Commercial Junk Removal",
    "Debris Removal",
    "Disaster Cleanup",
    "Downsizing",
    "Estate Cleanouts",
    "Furniture Removal",
    "Home or Business Cleanouts",
    "Moving",
    "Property Management Cleanouts",
    "Renovations",
    "Storage Units",
    "Trash Removal",
  ];

  return (
    <footer className="bg-[#222426] text-white py-12">
      <div className="container mx-auto px-4">
        {/* Title */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold uppercase">
            GET IN TOUCH <span className="text-[#93d9ef]">WITH US</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Contact */}
          <div className="lg:col-span-1 border border-[#93d9ef] rounded-lg p-6">
            <Image
              src="https://ext.same-assets.com/2211206036/2555257938.png"
              alt="Two Men and a Junk Truck"
              width={200}
              height={70}
              className="h-14 w-auto mb-6"
            />

            <h3 className="text-[#93d9ef] font-bold mb-4">CONTACT INFO</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <svg className="w-5 h-5 text-[#93d9ef] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
                <span>841 Route 32 STE#2 N. Franklin, CT</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-[#93d9ef] flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
                <a href="tel:203-548-9279" className="font-bold hover:text-[#93d9ef]">
                  (203) 548-9279
                </a>
              </div>
            </div>

            <h3 className="text-[#93d9ef] font-bold mt-6 mb-2">BUSINESS HOURS</h3>
            <p className="text-sm">Monday – Sunday: 7am – 7pm</p>
          </div>

          {/* Locations */}
          <div>
            <h3 className="text-[#93d9ef] font-bold mb-4">LOCATIONS</h3>
            <ul className="space-y-2">
              {locations.map((location, index) => (
                <li key={index} className="flex items-center gap-2 text-sm">
                  <svg className="w-4 h-4 text-[#93d9ef] flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                  <span className={location.includes("more") ? "italic text-[#93d9ef]" : ""}>
                    {location}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Services - Column 1 */}
          <div>
            <h3 className="text-[#93d9ef] font-bold mb-4">SERVICES</h3>
            <ul className="space-y-2">
              {services.slice(0, 7).map((service, index) => (
                <li key={index} className="flex items-center gap-2 text-sm">
                  <svg className="w-4 h-4 text-[#93d9ef] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Services - Column 2 */}
          <div className="md:mt-8 lg:mt-0">
            <h3 className="text-[#93d9ef] font-bold mb-4 lg:invisible">SERVICES</h3>
            <ul className="space-y-2">
              {services.slice(7).map((service, index) => (
                <li key={index} className="flex items-center gap-2 text-sm">
                  <svg className="w-4 h-4 text-[#93d9ef] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {service}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-400">
          <p>Copyright © 2025 · Two Men and a Junk Truck</p>
        </div>
      </div>
    </footer>
  );
}
