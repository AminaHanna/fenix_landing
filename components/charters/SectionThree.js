"use client";

import { useEffect, useRef, useState } from "react";

export default function SectionThree() {
  const [bgFixed, setBgFixed] = useState(false);
  const divRef = useRef(null);

  const handleScroll = () => {
    if (divRef.current) {
      const { top, bottom } = divRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (top <= windowHeight && bottom >= 0) setBgFixed(false);
      if (top <= 0) setBgFixed(true);
      if (bottom < 0 || top > windowHeight) setBgFixed(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative text-white font-fritz-regular w-full h-screen">
      <div
        ref={divRef}
        id="charters-section3"
        className={`w-full h-full ${bgFixed ? "bg-fixed" : ""}`}
      />
    </section>
  );
}
