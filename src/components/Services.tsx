"use client";

import { useState } from "react";
import Image from "next/image";

const services = [
  {
    title: "Dependable Junk Removal Worcester, MA Experts",
    description:
      "Junk can quickly take over your home or workspace, creating stress and clutter. Two Men and a Junk Truck offers reliable junk removal Worcester, MA residents trust. We clear basements, garages, attics, and more with speed and care. Our team handles lifting, sorting, and hauling so you don't have to. We provide upfront quotes and clean up the area once the job is done. Every project is tailored to meet your specific needs. Count on us for professional, safe, and affordable junk removal in Worcester.",
    image: "https://ext.same-assets.com/2211206036/2796291880.webp",
    hasVideo: true,
  },
  {
    title: "Residential Junk Removal in Worcester, MA",
    description:
      "Removing old furniture, yard waste, or storage clutter doesn't have to be a hassle. Our local junk removal service is perfect for Worcester homeowners looking for a clean, usable space. We safely haul everything from single items to full-house cleanouts. Our crew works with care to avoid property damage during removal. Scheduling is flexible, and we always offer clear pricing. Items are sorted for donation, recycling, or responsible disposal. With us, clearing your home is simple and stress-free.",
    image: "https://ext.same-assets.com/2211206036/2992446315.jpeg",
    hasVideo: false,
  },
  {
    title: "Commercial Junk Removal That Works",
    description:
      "Businesses in Worcester, MA rely on fast, reliable junk solutions during renovations, relocations, or routine cleanouts. Our junk removal company clears offices, warehouses, and retail spaces with minimal disruption. We remove desks, e-waste, packaging materials, and more. Service can be scheduled after hours or on weekends. Estimates are volume-based and transparent. We also donate or recycle usable items when possible. Let us help maintain your commercial space—clean, safe, and ready for business.",
    image: "https://ext.same-assets.com/2211206036/1846723137.png",
    hasVideo: false,
  },
  {
    title: "Eco-Conscious Hauling Services in Worcester, MA",
    description:
      "At Two Men and a Junk Truck, we prioritize responsible disposal in every job. Our hauling services are designed to reduce landfill waste in Worcester. Each load is carefully sorted for recycling or donation. Usable items are given to local nonprofits to support the community. We follow best practices when handling e-waste and other special materials. Customers appreciate our commitment to eco-conscious service. With us, junk removal is efficient and environmentally friendly.",
    image: "https://ext.same-assets.com/2211206036/2184339905.jpeg",
    hasVideo: false,
  },
];

export function Services() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % services.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + services.length) % services.length);
  };

  return (
    <section className="bg-pattern py-16">
      {/* Tagline */}
      <div className="flex justify-center mb-8">
        <div className="bg-white rounded-full px-6 py-3 shadow-lg flex items-center gap-3">
          <svg className="w-10 h-10 text-[#93d9ef]" fill="currentColor" viewBox="0 0 24 24">
            <circle cx="12" cy="8" r="2" />
            <path d="M12 12c-4 0-8 2-8 4v2h16v-2c0-2-4-4-8-4z" />
          </svg>
          <div className="text-center">
            <p className="font-bold text-[#222426] text-lg uppercase">Free Your Space</p>
            <p className="font-bold text-[#222426] text-lg uppercase">Free Your Mind</p>
          </div>
        </div>
      </div>

      {/* Title */}
      <div className="text-center mb-10">
        <h2 className="section-title text-[#222426]">
          FULL-SERVICE JUNK REMOVAL
        </h2>
        <h3 className="text-4xl md:text-5xl font-bold text-[#0072bb] uppercase">
          SERVICES
        </h3>
      </div>

      {/* Carousel */}
      <div className="container mx-auto px-4">
        <div className="bg-[#222426] rounded-xl p-6 md:p-10 max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Image */}
            <div className="md:w-1/2 relative">
              <div className="relative aspect-video rounded-lg overflow-hidden">
                <Image
                  src={services[currentSlide].image}
                  alt={services[currentSlide].title}
                  fill
                  className="object-cover"
                />
                {services[currentSlide].hasVideo && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center cursor-pointer hover:bg-white transition-colors">
                      <svg className="w-8 h-8 text-[#222426] ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Content */}
            <div className="md:w-1/2 text-white">
              <h4 className="text-xl md:text-2xl font-bold uppercase mb-4 text-[#93d9ef]">
                {services[currentSlide].title}
              </h4>
              <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                {services[currentSlide].description}
              </p>
            </div>
          </div>
        </div>

        {/* Carousel Controls */}
        <div className="flex items-center justify-center gap-4 mt-6">
          <button
            type="button"
            onClick={prevSlide}
            className="text-[#0072bb] hover:text-[#005a94] transition-colors"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div className="flex items-center gap-2">
            {services.map((_, index) => (
              <button
                type="button"
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`transition-all ${
                  index === currentSlide
                    ? "w-8 h-3 bg-[#0072bb] rounded-full"
                    : "w-3 h-3 bg-[#0072bb]/40 rounded-full hover:bg-[#0072bb]/60"
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={nextSlide}
            className="text-[#0072bb] hover:text-[#005a94] transition-colors"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
