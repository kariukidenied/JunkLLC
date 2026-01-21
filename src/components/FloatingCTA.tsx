"use client";

import { useState, useEffect } from "react";

export function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#222426] py-3 px-4 z-50 md:hidden shadow-lg">
      <div className="flex gap-3 justify-center">
        <a
          href="#book"
          className="flex-1 bg-[#0072bb] text-white font-semibold py-3 px-4 rounded-md text-center text-sm"
        >
          BOOK NOW
        </a>
        <a
          href="tel:203-548-9279"
          className="flex-1 border-2 border-white text-white font-semibold py-3 px-4 rounded-md text-center text-sm"
        >
          (203) 548-9279
        </a>
      </div>
    </div>
  );
}
