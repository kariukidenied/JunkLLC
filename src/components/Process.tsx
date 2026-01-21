export function Process() {
  const steps = [
    {
      number: 1,
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      title: "Schedule A Visit",
      description: "Set a time that works for you, and we'll show up ready.",
    },
    {
      number: 2,
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
      title: "On-site Quote",
      description: "We provide a free, no-obligation quote after seeing what needs to go.",
    },
    {
      number: 3,
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
      ),
      title: "Load and Haul",
      description: "Once approved, we remove the items right then and there—no extra work for you.",
    },
  ];

  return (
    <section className="bg-[#222426] py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left side */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-white uppercase mb-2">
              OUR JUNK REMOVAL
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-[#0072bb] uppercase mb-6">
              PROCESS
            </h3>
            <p className="text-gray-300 mb-8 max-w-md mx-auto lg:mx-0">
              We make junk removal simple, efficient, and stress-free for homes and businesses in Worcester, MA.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="#book" className="btn-primary text-center">
                BOOK NOW
              </a>
              <a href="tel:203-548-9279" className="btn-outline !border-white !text-white hover:!bg-white hover:!text-[#222426] text-center">
                (203) 548-9279
              </a>
            </div>
          </div>

          {/* Right side - Steps */}
          <div className="lg:w-1/2 flex flex-col gap-6">
            {steps.map((step) => (
              <div key={step.number} className="flex items-start gap-6">
                {/* Number Circle */}
                <div className="flex-shrink-0 w-14 h-14 rounded-full border-2 border-[#93d9ef] flex items-center justify-center">
                  <span className="text-2xl font-bold text-[#93d9ef]">{step.number}</span>
                </div>

                {/* Step Card */}
                <div className="flex-1 bg-[#93d9ef] rounded-lg p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-[#222426]">{step.icon}</span>
                    <h4 className="font-bold text-[#222426]">{step.title}</h4>
                  </div>
                  <p className="text-[#222426]/80 text-sm">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
