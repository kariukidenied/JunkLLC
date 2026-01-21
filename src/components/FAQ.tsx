"use client";

import { useState } from "react";

const faqs = [
  {
    question: "HOW MUCH DOES JUNK REMOVAL COST?",
    answer: `Junk removal pricing is one of the most commonly asked junk removal questions. Finding out the average price for junk removal and requesting junk removal pricing sheets can be a daunting task.

This is why we offer a same day no obligation pricing quote. It is simple:

1. We will help you find the location nearest you.
2. If you schedule your appointment (in most cases) before 2pm, we show up the same day.
3. This allows for our junk haulers to see exactly what you need removed.
4. You can also take advantage of discounts and promotions that are offered on site to ensure the best service.

This process has allowed us to have a near 5 star rating with all of our customers.`,
  },
  {
    question: "HOW DOES TWO MEN AND A JUNK TRUCK CHARGE FOR JUNK REMOVAL SERVICES?",
    answer:
      "Our pricing is based on the amount of space your items take up in our truck. We provide transparent, upfront quotes so you know exactly what to expect.",
  },
  {
    question: "CAN YOU PROVIDE A SPECIFIC PRICE WITHOUT SEEING MY ITEMS?",
    answer:
      "We can provide you with our pricing structure over the phone, however, final pricing will be determined by our experts on-site the day of your junk removal.",
  },
  {
    question: "HOW DOES YOUR CONTACTLESS JUNK REMOVAL SERVICE WORK?",
    answer:
      "You can leave your items at the curb for our team to haul away and we'll charge you accordingly.",
  },
  {
    question: "CAN YOU TAKE LARGE ITEMS?",
    answer:
      "Yes! We can handle large items such as appliances, exercise equipment, mattresses, and more.",
  },
  {
    question: "CAN I ADD MORE ITEMS THE DAY OF THE JUNK REMOVAL?",
    answer:
      "When our junk removal team arrives on site, they'll walk through what items you'd like them to take and explain pricing based on what they'll remove.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-pattern py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left side - Title */}
          <div className="lg:w-1/3 text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-[#222426] uppercase mb-2">
              FREQUENTLY ASKED
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-[#0072bb] uppercase mb-6">
              QUESTIONS
            </h3>
            <p className="text-[#222426] mb-8">
              <strong>We're here to help</strong>—find quick answers to common questions about our junk removal services in Worcester, MA.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="#book" className="btn-primary text-center">
                BOOK NOW
              </a>
              <a href="tel:203-548-9279" className="btn-outline text-center">
                (203) 548-9279
              </a>
            </div>
          </div>

          {/* Right side - Accordion */}
          <div className="lg:w-2/3">
            {faqs.map((faq, index) => (
              <div key={index} className="mb-3">
                <button
                  type="button"
                  onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                  className={`w-full flex items-center justify-between py-4 px-6 text-left font-bold transition-colors rounded-t-lg ${
                    openIndex === index
                      ? "bg-[#0072bb] text-white"
                      : "bg-[#93d9ef] text-[#222426] hover:bg-[#82c9df]"
                  }`}
                >
                  <span className="text-sm md:text-base">{faq.question}</span>
                  <span className="text-2xl flex-shrink-0 ml-4">
                    {openIndex === index ? "−" : "+"}
                  </span>
                </button>
                {openIndex === index && (
                  <div className="bg-white px-6 py-4 rounded-b-lg shadow-md">
                    <p className="text-[#222426] text-sm leading-relaxed whitespace-pre-line">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
