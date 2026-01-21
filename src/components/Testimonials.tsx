"use client";

import { useState } from "react";
import Image from "next/image";

const testimonials = [
  {
    text: "I had an upright piano that needed to be removed, and Two Men and a Junk Trunk made the process so easy and stress-free! Their pricing was affordable, they provided incredibly fast service coming within just a couple of hours after I called. The team was professional, efficient, and offered great customer service as well. I highly recommend them to anyone who needs junk removal done quickly and hassle-free!",
    name: "Dletna Gebremedhin",
    title: "Local Resident",
  },
  {
    text: "2 Men and A Junk Truck were awesome! Brody(sp?) and Alex were tremendous! They were professional, courteous and innovative! They were very respectful of the space we were in and were willing to do whatever needed to be done. I believe the advantage that 2M&JT has is that they were a moving company first so moving things carefully and safely is a priority which carries over to the junk removal business.",
    name: "Michael Andersen",
    title: "Local Resident",
  },
  {
    text: "They were able to assist me on very short notice. Very prompt, great price and most importantly, professional and kind! Highly recommend Two Men and a Junk Trunk!",
    name: "Dawn Fischer",
    title: "Local Resident",
  },
  {
    text: "This was the second time I used Two Men and a Junk Truck. I would definitely use them again and recommend them highly. They are quick, easy to work with and very focused on getting the job done. Great experience.",
    name: "Allen Rau",
    title: "Local Resident",
  },
  {
    text: "Great service and even better customer service in setting up the appointment. Would highly recommend!",
    name: "Keith Friend",
    title: "Local Resident",
  },
  {
    text: "Excellent service. The movers were on time, fast and very cordial. I don't think this job could have been done any better and I would definitely hire them again.",
    name: "Robert Harsel",
    title: "Local Resident",
  },
  {
    text: "They were able to do same day furniture removal, have fair pricing, are friendly and great at communicating",
    name: "Madeline VanWagner",
    title: "House Owner",
  },
  {
    text: "Easy to setup, good communication, and quick and easy removal — I give it 5 easys",
    name: "Benjamin Ankrum",
    title: "Local Resident",
  },
];

export function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="bg-pattern py-16">
      <div className="container mx-auto px-4">
        {/* Title */}
        <div className="text-center mb-10">
          <h2 className="section-title text-[#222426]">
            TESTIMONIALS FROM OUR
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-[#222426] uppercase">
            VALUED CLIENTS
          </h3>
          <p className="text-[#222426] mt-4 max-w-2xl mx-auto">
            Our Norwich clients appreciate our reliable service and clean results—we're proud to earn their trust every time.
          </p>
        </div>

        {/* Google Rating */}
        <div className="flex justify-center items-center gap-4 mb-10">
          <Image
            src="https://ext.same-assets.com/2211206036/1963744011.png"
            alt="Google"
            width={60}
            height={60}
            className="w-14 h-14"
          />
          <div>
            <p className="font-bold text-[#222426]">Google Rating</p>
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-yellow-500">5.0</span>
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
            <p className="text-sm text-[#222426]">Over <strong>3,381 Reviews</strong></p>
          </div>
        </div>

        {/* Testimonial Card */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-[#0072bb]">
            <p className="text-[#222426] text-lg italic mb-6 leading-relaxed">
              "{testimonials[currentSlide].text}"
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[#93d9ef] rounded-full flex items-center justify-center">
                <span className="text-xl font-bold text-white">
                  {testimonials[currentSlide].name.charAt(0)}
                </span>
              </div>
              <div>
                <p className="font-bold text-[#222426]">{testimonials[currentSlide].name}</p>
                <p className="text-sm text-gray-500">{testimonials[currentSlide].title}</p>
                <div className="flex mt-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Carousel Controls */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <button type="button" onClick={prevSlide} className="text-[#0072bb] hover:text-[#005a94]">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div className="flex items-center gap-2">
            {testimonials.map((_, index) => (
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

          <button type="button" onClick={nextSlide} className="text-[#0072bb] hover:text-[#005a94]">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
