"use client";

import { useState } from "react";
import Image from "next/image";

const categories = [
  {
    name: "GENERAL",
    items: [
      "Attics: Old Boxes and Storage",
      "Containers",
      "Garages: Seasonal Decorations",
      "Old stuff: Sporting Equipment",
      "Old Toys and Games",
      "Books and Magazine boxes",
    ],
  },
  {
    name: "FURNITURE",
    items: [
      "Sofas and Couches",
      "Mattresses and Bed Frames",
      "Tables and Chairs",
      "Dressers and Wardrobes",
      "Entertainment Centers",
    ],
  },
  {
    name: "ELECTRONICS",
    items: [
      "Televisions",
      "Computers and Laptops",
      "Printers and Scanners",
      "Monitors",
      "Gaming Consoles",
    ],
  },
  {
    name: "CONSTRUCTION",
    items: [
      "Wood Scraps and Lumber",
      "Roofing Shingles",
      "Drywall and Plaster",
      "Concrete and Bricks",
      "Metal and Aluminum Scraps",
    ],
  },
  {
    name: "OUTDOOR",
    items: [
      "Yard Waste and Clippings",
      "Old Fencing",
      "Patio Furniture",
      "BBQ Grills",
      "Garden Tools and Equipment",
    ],
  },
  {
    name: "OFFICE",
    items: [
      "Desks and Office Chairs",
      "Filing Cabinets",
      "Office Electronics (fax machines, copiers)",
      "Cubicle Partitions",
      "Conference Tables",
    ],
  },
  {
    name: "APPLIANCES",
    items: [
      "Refrigerators and Freezers",
      "Washers and Dryers",
      "Stoves and Ovens",
      "Microwaves",
      "Dishwashers",
    ],
  },
];

const images = [
  "https://ext.same-assets.com/2211206036/2301968927.jpeg",
  "https://ext.same-assets.com/2211206036/2250622392.jpeg",
  "https://ext.same-assets.com/2211206036/1434898711.jpeg",
  "https://ext.same-assets.com/2211206036/1487838054.jpeg",
  "https://ext.same-assets.com/2211206036/4082402437.jpeg",
  "https://ext.same-assets.com/2211206036/2663369034.jpeg",
];

export function ItemsCollected() {
  const [openCategory, setOpenCategory] = useState(0);

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        {/* Title */}
        <div className="text-center mb-10">
          <h2 className="section-title text-[#222426]">
            MAIN ITEMS WE <span className="text-[#0072bb]">COLLECT</span>
          </h2>
        </div>

        {/* Content */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Accordion */}
          <div className="lg:w-1/2">
            {categories.map((category, index) => (
              <div key={category.name} className="border-b border-gray-200">
                <button
                  type="button"
                  onClick={() => setOpenCategory(openCategory === index ? -1 : index)}
                  className={`w-full flex items-center justify-between py-4 px-6 text-left font-bold transition-colors ${
                    openCategory === index ? "bg-[#222426] text-white" : "bg-white text-[#222426] hover:bg-gray-50"
                  }`}
                >
                  {category.name}
                  <span className="text-2xl">
                    {openCategory === index ? "−" : "+"}
                  </span>
                </button>
                {openCategory === index && (
                  <div className="bg-white px-6 py-4">
                    <ul className="space-y-2">
                      {category.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-center gap-2 text-[#222426]">
                          <svg className="w-5 h-5 text-[#0072bb] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Images Grid */}
          <div className="lg:w-1/2 grid grid-cols-2 gap-3">
            {images.map((src, index) => (
              <div key={index} className={`relative overflow-hidden rounded-lg ${index === 2 ? "col-span-2 h-48" : "h-40"}`}>
                <Image
                  src={src}
                  alt={`Junk removal ${index + 1}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
