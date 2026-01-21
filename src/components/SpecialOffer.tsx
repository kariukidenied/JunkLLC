import Image from "next/image";

export function SpecialOffer() {
  return (
    <section className="bg-[#93d9ef] py-12">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-xl shadow-lg max-w-xl mx-auto p-8 text-center">
          {/* Logo */}
          <div className="bg-[#222426] rounded-lg py-4 px-8 inline-block mb-6">
            <Image
              src="https://ext.same-assets.com/2211206036/2555257938.png"
              alt="Two Men and a Junk Truck"
              width={250}
              height={80}
              className="h-14 w-auto"
            />
          </div>

          {/* Offer Text */}
          <p className="text-[#222426] font-semibold mb-2">LIMITED TIME OFFER!</p>
          <h3 className="text-4xl md:text-5xl font-bold text-[#0072bb] mb-6">GET $20 OFF</h3>

          {/* CTA */}
          <a href="#book" className="btn-primary inline-block">
            BOOK NOW
          </a>
        </div>
      </div>
    </section>
  );
}
